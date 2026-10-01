import { classifyManagedDungeon, inferFamilyFromVerifiedLabel, progressionContextForTier } from './classification.mjs';

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function validLevel(value) {
  return Number.isInteger(value) && value >= 1 && value <= 100;
}

function resolveListCandidates(listId, { listsById, enemiesById }, stack = new Set()) {
  if (stack.has(listId)) return { candidates: [], unresolved: [`cycle:${[...stack, listId].join(' -> ')}`] };
  const list = listsById.get(listId);
  if (!list) return { candidates: [], unresolved: [`missing-list:${listId}`] };
  const nextStack = new Set(stack).add(listId);
  const candidates = [];
  const unresolved = [];
  for (const entry of list.entries ?? []) {
    if (!entry.formId || entry.resolved !== true) {
      unresolved.push(`unresolved-entry:${listId}:${entry.formId ?? 'null'}`);
      continue;
    }
    if (entry.targetType === 'LeveledNpc') {
      const nested = resolveListCandidates(entry.formId, { listsById, enemiesById }, nextStack);
      candidates.push(...nested.candidates.map((candidate) => ({
        ...candidate,
        entryLevel: validLevel(candidate.entryLevel) ? candidate.entryLevel : entry.level,
        lvlnPath: [listId, ...(candidate.lvlnPath ?? [])]
      })));
      unresolved.push(...nested.unresolved);
      continue;
    }
    if (entry.targetType !== 'Npc') continue;
    const enemy = enemiesById.get(entry.formId);
    if (!enemy) {
      unresolved.push(`missing-npc:${entry.formId}`);
      continue;
    }
    candidates.push({ enemy, entryLevel: entry.level, lvlnPath: [listId, entry.formId] });
  }
  return { candidates, unresolved };
}

function actorCandidates(actor, context) {
  const directEnemy = context.enemiesById.get(actor.baseId);
  if (directEnemy) return { candidates: [{ enemy: directEnemy, entryLevel: null, lvlnPath: [] }], unresolved: [] };
  if (actor.baseType === 'LeveledNpc' || context.listsById.has(actor.baseId)) {
    return resolveListCandidates(actor.baseId, context);
  }
  return { candidates: [], unresolved: [`missing-base:${actor.baseId ?? actor.identity}`] };
}

function familyForCandidate(candidate) {
  const family = candidate.enemy?.enemyFamily;
  if (family && family !== 'UNRESOLVED') return family;
  return inferFamilyFromVerifiedLabel(candidate.enemy?.editorId, candidate.enemy?.raceEditorId);
}

function levelForCandidate(candidate) {
  if (validLevel(candidate.enemy?.combatLevel)) return candidate.enemy.combatLevel;
  if (validLevel(candidate.entryLevel)) return candidate.entryLevel;
  return null;
}

function actorBelongsToDungeon(actor, cellIds, locationIds) {
  return cellIds.has(actor.cellIdentity)
    || cellIds.has(actor.cellId)
    || locationIds.has(actor.locationIdentity)
    || locationIds.has(actor.locationId);
}

function enrichActor(actor, context) {
  const resolution = actorCandidates(actor, context);
  const candidates = resolution.candidates.map((candidate) => ({
    stableEnemyIdentity: candidate.enemy.stableEnemyIdentity,
    canonicalFormId: candidate.enemy.canonicalFormId,
    enemyFamily: familyForCandidate(candidate),
    combatLevel: levelForCandidate(candidate),
    sourceLevel: candidate.enemy.sourceLevel ?? null,
    entryLevel: candidate.entryLevel,
    unique: candidate.enemy.unique === true,
    lvlnPath: candidate.lvlnPath
  }));
  const fallbackFamily = inferFamilyFromVerifiedLabel(
    actor.baseEditorId,
    actor.baseName
  );
  const families = unique(candidates.map((candidate) => candidate.enemyFamily).filter((family) => family !== 'UNRESOLVED'));
  if (!families.length && fallbackFamily !== 'UNRESOLVED') families.push(fallbackFamily);
  const directCandidate = candidates.length === 1 && actor.baseType === 'Npc' ? candidates[0] : null;
  const spawnRole = directCandidate?.unique || directCandidate?.enemyFamily === 'DRAGON_PRIEST'
    ? 'BOSS_UNIQUE'
    : 'GENERIC';
  return {
    identity: actor.identity,
    canonicalFormId: actor.canonicalFormId,
    type: 'ACHR',
    sourcePlugin: actor.sourcePlugin,
    winningOverridePlugin: actor.winningOverridePlugin,
    baseIdentity: actor.baseIdentity,
    baseCanonicalFormId: actor.baseId,
    baseType: actor.baseType,
    cellIdentity: actor.cellIdentity,
    locationIdentity: actor.locationIdentity,
    position: actor.position ?? null,
    rotation: actor.rotation ?? null,
    enemyFamily: families.length === 1 ? families[0] : 'UNRESOLVED',
    enemyFamilies: families,
    combatLevel: candidates.length === 1 ? candidates[0].combatLevel : null,
    combatLevels: unique(candidates.map((candidate) => candidate.combatLevel).filter(validLevel)).toSorted((a, b) => a - b),
    candidateEnemies: candidates,
    unresolvedCandidates: unique(resolution.unresolved),
    spawnRole,
    scripted: actor.scripted === true,
    enabledByParent: actor.enabledByParent === true,
    provenance: { source: 'houseCARL winner snapshot', epoch: context.epoch }
  };
}

export function enrichGlobalDungeonProfiles({ profiles = [], placedActors = [], enemies = [], lists = [], epoch }) {
  const context = {
    enemiesById: new Map(enemies.map((enemy) => [enemy.canonicalFormId, enemy])),
    listsById: new Map(lists.map((list) => [list.canonicalFormId ?? list.id, list])),
    epoch
  };
  return profiles.map((profile) => {
    const cellIds = new Set(profile.cells ?? []);
    const locationIds = new Set(profile.locations ?? []);
    const actorEvidence = placedActors
      .filter((actor) => actorBelongsToDungeon(actor, cellIds, locationIds))
      .map((actor) => enrichActor(actor, context));
    const resolvedCandidates = actorEvidence.flatMap((actor) => actor.candidateEnemies);
    const actorFamilies = resolvedCandidates.map((candidate) => candidate.enemyFamily).filter((family) => family !== 'UNRESOLVED');
    for (const actor of actorEvidence.filter((candidate) => candidate.candidateEnemies.length === 0)) {
      actorFamilies.push(...actor.enemyFamilies);
    }
    const fallbackFamilies = profile.segments?.flatMap((segment) => segment.allowedEnemyFamilies ?? []) ?? [];
    const families = actorFamilies.length ? [...actorFamilies, ...fallbackFamilies] : fallbackFamilies;
    const levels = resolvedCandidates.map((candidate) => candidate.combatLevel).filter(validLevel);
    const classification = classifyManagedDungeon({ families, levels });
    const provenance = `global-load-order-content|houseCARL:${epoch}|${classification.reason}`;
    const uniqueReferences = actorEvidence.filter((actor) => actor.spawnRole === 'BOSS_UNIQUE');
    const directNpcs = unique(actorEvidence.filter((actor) => actor.baseType === 'Npc').map((actor) => actor.baseIdentity));
    const associatedLvln = unique(actorEvidence.filter((actor) => actor.baseType === 'LeveledNpc').map((actor) => actor.baseIdentity));
    const allowedEnemyFamilies = unique(families);
    const baseSegment = profile.segments?.[0] ?? {};
    const progressionContext = progressionContextForTier(profile.dungeonId, classification.tier, provenance);
    return {
      ...profile,
      managed: true,
      managementScope: 'ALL_ACTIVE_LOAD_ORDER_DUNGEONS',
      classification: classification.tier,
      minEnemyLevel: classification.minEnemyLevel,
      targetEnemyLevel: classification.targetEnemyLevel,
      maxEnemyLevel: classification.maxEnemyLevel,
      progressionContext,
      spawnRefs: actorEvidence,
      directNpcs,
      associatedLvln,
      uniqueReferences,
      bossReferences: [...uniqueReferences],
      bossProfile: uniqueReferences.length
        ? { policy: 'BOSS_ANY', references: uniqueReferences.map((actor) => actor.identity) }
        : null,
      discoveryStatus: actorEvidence.length ? 'MANAGED_GLOBAL_ENRICHED' : 'MANAGED_GLOBAL',
      contentEvidence: {
        ...(profile.contentEvidence ?? {}),
        ...classification,
        actorCount: actorEvidence.length,
        candidateEnemyCount: resolvedCandidates.length,
        levelEvidenceCount: levels.length,
        unresolvedActorFamilies: actorEvidence.reduce((sum, actor) => sum
          + actor.candidateEnemies.filter((candidate) => candidate.enemyFamily === 'UNRESOLVED').length
          + (actor.candidateEnemies.length === 0 && actor.enemyFamilies.length === 0 ? 1 : 0), 0),
        unresolvedActorBases: actorEvidence.reduce((sum, actor) => sum + actor.unresolvedCandidates.length, 0)
      },
      segments: [{
        ...baseSegment,
        schemaVersion: 1,
        segmentId: baseSegment.segmentId ?? `${profile.dungeonId}|main`,
        cells: [...(profile.cells ?? [])],
        spawnRefs: actorEvidence.map((actor) => actor.identity),
        allowedEnemyFamilies,
        minEnemyLevel: classification.minEnemyLevel,
        targetEnemyLevel: classification.targetEnemyLevel,
        maxEnemyLevel: classification.maxEnemyLevel,
        allowedSpawnRoles: ['GENERIC', 'BOSS_UNIQUE'],
        bossPolicy: uniqueReferences.length ? 'BOSS_ANY' : 'GENERIC_ONLY',
        progressionContext,
        provenance
      }]
    };
  });
}

export function summarizeDungeonEnrichment(profiles) {
  return {
    managedLocations: profiles.length,
    enrichedWithPlacedActors: profiles.filter((profile) => profile.spawnRefs?.length).length,
    placedActors: profiles.reduce((sum, profile) => sum + (profile.spawnRefs?.length ?? 0), 0),
    candidateEnemies: profiles.reduce((sum, profile) => sum + (profile.contentEvidence?.candidateEnemyCount ?? 0), 0),
    unresolvedActorFamilies: profiles.reduce((sum, profile) => sum + (profile.contentEvidence?.unresolvedActorFamilies ?? 0), 0),
    unresolvedActorBases: profiles.reduce((sum, profile) => sum + (profile.contentEvidence?.unresolvedActorBases ?? 0), 0),
    unassignedClassification: profiles.filter((profile) => profile.classification === 'UNASSIGNED').length,
    tierCounts: Object.fromEntries(['EASY', 'MEDIUM', 'HARD', 'VERY_HARD'].map((tier) => [tier, profiles.filter((profile) => profile.classification === tier).length]))
  };
}
