import { validateEnemyKilledEvent, validateProgressionContext } from '../contracts/enemy-killed.mjs';
import { ReasonCodes } from '../contracts/reasons.mjs';
import { createLevelChangedEvent, createXpAwardedEvent, createXpRejectedEvent, OUTPUT_EVENTS } from '../contracts/events.mjs';
import { EnemyXpCatalog } from '../domain/catalog.mjs';
import { EnemyLevelScalingPolicy } from '../math/scaling.mjs';
import { CombatXpCalculator } from '../math/combat-xp.mjs';
import { ProgressionRules } from '../domain/progression.mjs';
import { PartyModifierPolicy, PartyEligibilityPolicy } from '../policies/party.mjs';
import { ContentRelevancePolicy } from '../policies/content-relevance.mjs';
import { FatiguePolicy } from '../policies/fatigue.mjs';
import { ProgressionAuditLedger } from '../audit/ledger.mjs';
import { ProgressionTransactionService } from '../persistence/transaction.mjs';
import { InMemoryEventIdempotencyStore, InMemoryEventPublisher, InMemoryProgressionRepository } from '../persistence/in-memory.mjs';

export class XpAwardService {
  constructor({ configResult, repository, idempotencyStore, publisher, ledger, classProgressionPort, experienceAuthority, enemyCoverage } = {}) {
    this.configResult = configResult;
    if (!configResult?.configs) throw new Error('ConfigLoader must return structurally valid configs');
    const configs = configResult.configs;
    this.configs = configs;
    this.progression = new ProgressionRules(configs.levelProgression);
    this.catalog = new EnemyXpCatalog(configs.enemyBaseXp);
    this.scaling = new EnemyLevelScalingPolicy(configs.enemyLevelScaling);
    this.combatXp = new CombatXpCalculator();
    this.party = new PartyModifierPolicy(configs.partyXp);
    this.eligibility = new PartyEligibilityPolicy(configs.partyXp.eligibility);
    this.content = new ContentRelevancePolicy(configs.contentRelevance);
    this.fatigue = new FatiguePolicy({ config: configs.fatigue, progression: this.progression });
    this.repository = repository ?? new InMemoryProgressionRepository({ progression: this.progression });
    this.idempotencyStore = idempotencyStore ?? new InMemoryEventIdempotencyStore();
    this.publisher = publisher ?? new InMemoryEventPublisher();
    this.ledger = ledger ?? new ProgressionAuditLedger();
    this.classProgressionPort = classProgressionPort ?? { notifyLevelChanged: () => ({ accepted: true, delegated: true }) };
    this.experienceAuthority = experienceAuthority ?? null;
    this.enemyCoverage = enemyCoverage ?? null;
    this.transactions = new ProgressionTransactionService({ repository: this.repository, idempotencyStore: this.idempotencyStore, progression: this.progression, fatiguePolicy: this.fatigue, ledger: this.ledger });
  }

  reject(event, reasonCode, details = null, playerId = null) {
    const configVersion = this.configResult.configVersion;
    const ledgerEntry = this.ledger.append({
      sourceEventId: event?.eventId ?? null,
      playerId,
      enemyStableIdentity: event?.enemy?.stableEnemyIdentity ?? null,
      xpCategory: event?.enemy?.xpCategory ?? null,
      balanceProfile: null,
      baseXp: null,
      fixedXp: null,
      enemyCombatLevel: event?.enemy?.combatLevel ?? null,
      enemyLevelFactor: null,
      progressionContext: event?.progressionContext ?? null,
      contentRelevance: null,
      partySize: null,
      partyModifier: null,
      xpBeforeFatigue: null,
      xpAwarded: 0,
      xpRejected: 0,
      oldClassLevel: null,
      newClassLevel: null,
      reasonCode,
      details,
      configVersion
    });
    const output = createXpRejectedEvent({ eventId: event?.eventId ?? null, playerId, reasonCode, details, configVersion });
    this.publisher.publish(output);
    return { type: OUTPUT_EVENTS.XP_REJECTED, status: 'REJECTED', reasonCode, details, ledgerEntry, output };
  }

  processEvent(event, { partySnapshot, nowMs = Date.now() } = {}) {
    if (this.configResult.status === 'NOT_READY') return this.reject(event, ReasonCodes.CONFIG_NOT_READY, this.configResult.errors);
    const authority = this.experienceAuthority?.check?.() ?? { ok: false, reason: 'AUTHORITY_DISCOVERY_UNBOUND', activeAuthorities: [] };
    if (!authority.ok) return this.reject(event, ReasonCodes.EXPERIENCE_AUTHORITY_NOT_EXCLUSIVE, authority);
    const coverage = this.enemyCoverage?.check?.() ?? { ok: false, reason: 'COVERAGE_AUDIT_UNBOUND' };
    if (!coverage.ok) return this.reject(event, ReasonCodes.ENEMY_COVERAGE_INCOMPLETE, coverage);
    const errors = validateEnemyKilledEvent(event);
    if (errors.length > 0) {
      const reason = event?.enemy?.managed !== true ? ReasonCodes.ENEMY_NOT_MANAGED : event?.enemy?.xpEligible === false ? ReasonCodes.ENEMY_NOT_XP_ELIGIBLE : ReasonCodes.INVALID_EVENT_CONTRACT;
      return this.reject(event, reason, errors);
    }
    if (event.enemy.managed !== true) return this.reject(event, ReasonCodes.ENEMY_NOT_MANAGED);
    if (event.enemy.xpEligible !== true) return this.reject(event, ReasonCodes.ENEMY_NOT_XP_ELIGIBLE);
    const contextErrors = validateProgressionContext(event.progressionContext);
    if (contextErrors.length) return this.reject(event, ReasonCodes.INVALID_PROGRESSION_CONTEXT, contextErrors);
    if (event.progressionContext.valid !== true || event.progressionContext.status !== 'ASSIGNED') {
      const reason = event.progressionContext.status === 'UNASSIGNED' ? ReasonCodes.UNASSIGNED_PROGRESSION_CONTEXT : ReasonCodes.INVALID_PROGRESSION_CONTEXT;
      return this.reject(event, reason);
    }
    const catalog = this.catalog.resolveExact(event.enemy.xpCategory);
    if (!catalog.ok) return this.reject(event, catalog.reasonCode, { profile: catalog.profile ?? null });
    const profile = catalog.profile;
    const fixed = profile.awardMode === 'FIXED';
    let enemyLevelFactor = null;
    if (profile.awardMode === 'SCALED') {
      const scaling = this.scaling.resolve(event.enemy.combatLevel);
      if (!scaling.ok) return this.reject(event, scaling.reasonCode, { range: scaling.range ?? null });
      enemyLevelFactor = scaling.value;
    }
    const party = this.eligibility.resolve({ partySnapshot });
    if (!party.ok) return this.reject(event, party.reasonCode, { eligibleMembers: party.eligibleMembers ?? [] });
    const configuredPartyModifier = this.party.resolve(party.eligibleMembers.length, party.isRaid);
    if (!configuredPartyModifier.ok) return this.reject(event, configuredPartyModifier.reasonCode, { size: party.eligibleMembers.length, isRaid: party.isRaid });
    const partyModifier = fixed
      ? { ok: true, value: 1, configuredValue: configuredPartyModifier.value, status: 'BYPASSED_FIXED_XP' }
      : configuredPartyModifier;
    const recipients = [];
    const rejected = [];
    for (const member of party.eligibleMembers) {
      const playerState = this.repository.get(member.id);
      if (!playerState) { rejected.push(this.reject(event, ReasonCodes.PLAYER_NOT_FOUND, null, member.id)); continue; }
      const normalized = this.progression.normalizeState(playerState);
      if (!normalized.classId) { rejected.push(this.reject(event, ReasonCodes.PLAYER_HAS_NO_CLASS, null, member.id)); continue; }
      if (normalized.classLevel >= this.progression.maxClassLevel) { rejected.push(this.reject(event, ReasonCodes.MAX_LEVEL, null, member.id)); continue; }
      let contentRelevance = { ok: true, multiplier: 1, status: 'BYPASSED_FIXED_XP' };
      if (!fixed) {
        contentRelevance = this.content.resolve(normalized.classLevel, event.progressionContext);
        if (!contentRelevance.ok) return this.reject(event, contentRelevance.reasonCode, { playerId: member.id, status: contentRelevance.status });
      }
      const calculation = this.combatXp.calculate({ profile, enemyLevelFactor, contentMultiplier: contentRelevance.multiplier, partyModifier: partyModifier.value });
      if (!calculation.ok) { rejected.push(this.reject(event, ReasonCodes.INVALID_EVENT_CONTRACT, calculation.reason, member.id)); continue; }
      const requestedXp = calculation.value;
      const transaction = this.transactions.apply({
        eventId: event.eventId,
        playerId: member.id,
        requestedXp,
        nowMs,
        bypassFatigue: fixed,
        ledgerContext: {
          sourceEventId: event.eventId,
          enemyStableIdentity: event.enemy.stableEnemyIdentity,
          xpCategory: event.enemy.xpCategory,
          balanceProfile: profile.balanceId,
          baseXp: profile.baseXp ?? null,
          fixedXp: profile.fixedXp ?? null,
          enemyCombatLevel: event.enemy.combatLevel,
          enemyLevelFactor,
          progressionContext: event.progressionContext,
          contentRelevance,
          partySize: party.eligibleMembers.length,
          partyModifier: partyModifier.value,
          partyModifierStatus: partyModifier.status ?? 'APPLIED',
          fatigueStatus: fixed ? 'BYPASSED_FIXED_XP' : 'APPLIED',
          xpBeforeFatigue: requestedXp,
          calculationBreakdown: calculation.breakdown,
          configVersion: this.configResult.configVersion
        }
      });
      if (!transaction.ok) {
        const failure = this.reject(event, transaction.reasonCode, transaction.error ?? null, member.id);
        rejected.push(failure);
        continue;
      }
      const { result, state, ledgerEntry } = transaction;
      const awarded = createXpAwardedEvent({ eventId: event.eventId, playerId: member.id, xpAwarded: result.xpAwarded, oldClassLevel: result.oldClassLevel, newClassLevel: result.newClassLevel, attributePointsGranted: result.levelUps.reduce((sum, item) => sum + item.attributePointsGranted, 0), configVersion: this.configResult.configVersion, ledgerId: ledgerEntry.ledgerId });
      this.publisher.publish(awarded);
      for (const levelUp of result.levelUps) {
        this.classProgressionPort.notifyLevelChanged({ player: member.id, ...levelUp, levelsGained: 1, sourceTransaction: event.eventId });
      }
      if (result.newClassLevel > result.oldClassLevel) this.publisher.publish(createLevelChangedEvent({ eventId: event.eventId, playerId: member.id, oldClassLevel: result.oldClassLevel, newClassLevel: result.newClassLevel, levelsGained: result.newClassLevel - result.oldClassLevel, attributePointsGranted: result.levelUps.reduce((sum, item) => sum + item.attributePointsGranted, 0), configVersion: this.configResult.configVersion }));
      recipients.push({ playerId: member.id, xpAwarded: result.xpAwarded, oldClassLevel: result.oldClassLevel, newClassLevel: result.newClassLevel, levelUps: result.levelUps, state, ledgerEntry, fatigueCapReached: result.fatigueCapReached });
    }
    if (recipients.length === 0) return { type: OUTPUT_EVENTS.XP_REJECTED, status: 'REJECTED', reasonCode: rejected[0]?.reasonCode ?? ReasonCodes.NO_ELIGIBLE_RECIPIENT, recipients: [], rejected };
    return { type: OUTPUT_EVENTS.XP_AWARDED, status: rejected.length ? 'PARTIAL' : 'AWARDED', recipients, rejected, partyModifier: partyModifier.value, partySize: party.eligibleMembers.length };
  }
}

export class EnemyEventConsumer extends XpAwardService {}
