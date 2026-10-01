import { roundXp } from '../math/scaling.mjs';

function partsInZone(timestamp, timeZone) {
  const formatter = new Intl.DateTimeFormat('en-US', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
  return Object.fromEntries(formatter.formatToParts(new Date(timestamp)).filter((part) => part.type !== 'literal').map((part) => [part.type, Number(part.value)]));
}

function dateKey(parts) { return `${parts.year}-${String(parts.month).padStart(2, '0')}-${String(parts.day).padStart(2, '0')}`; }

function shiftDay(parts, days) {
  const date = new Date(Date.UTC(parts.year, parts.month - 1, parts.day + days));
  return { ...parts, year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
}

function getResetInfo(timestamp, config) {
  const local = partsInZone(timestamp, config.reset.timeZone);
  const beforeReset = local.hour < config.reset.localHour;
  const cycleDate = beforeReset ? shiftDay(local, -1) : local;
  let targetDate = beforeReset ? local : shiftDay(local, 1);
  const makeTarget = (civil) => {
    const guess = Date.UTC(civil.year, civil.month - 1, civil.day, config.reset.localHour, 0, 0, 0);
    const offsetParts = partsInZone(guess, config.reset.timeZone);
    const localAsUtc = Date.UTC(offsetParts.year, offsetParts.month - 1, offsetParts.day, offsetParts.hour, offsetParts.minute, offsetParts.second, 0);
    const offset = localAsUtc - guess;
    return guess - offset;
  };
  let nextResetAt = makeTarget(targetDate);
  if (nextResetAt <= timestamp) {
    targetDate = shiftDay(targetDate, 1);
    nextResetAt = makeTarget(targetDate);
  }
  return { cycleKey: dateKey(cycleDate), nextResetAt };
}

export class FatiguePolicy {
  constructor({ config, progression }) { this.config = config; this.progression = progression; }

  dailyCapForLevel(level) {
    if (level < this.config.activeFromLevel || level >= this.progression.maxClassLevel) return null;
    return Math.floor(this.progression.xpRequiredFor(level) * this.config.dailyCapFraction);
  }

  refresh(state, nowMs = Date.now()) {
    const reset = getResetInfo(nowMs, this.config);
    if (state.dailyCycleKey !== reset.cycleKey) {
      state.dailyCycleKey = reset.cycleKey;
      state.dailyXpGained = 0;
      state.isFatigued = false;
    }
    state.dailyXpCap = this.dailyCapForLevel(state.classLevel);
    if (state.classLevel < this.config.activeFromLevel) {
      state.dailyXpGained = 0;
      state.dailyXpCap = null;
      state.isFatigued = false;
    } else {
      state.isFatigued = state.dailyXpCap !== null && state.dailyXpGained >= state.dailyXpCap;
    }
    state.nextResetAt = reset.nextResetAt;
    return state;
  }

  apply(state, requestedXp, nowMs = Date.now(), { bypass = false } = {}) {
    this.refresh(state, nowMs);
    let remaining = roundXp(requestedXp);
    let awarded = 0;
    const levelUps = [];
    let fatigueCapReached = false;
    while (remaining > 0 && state.classLevel < this.progression.maxClassLevel) {
      this.refresh(state, nowMs);
      let available = remaining;
      if (!bypass && state.classLevel >= this.config.activeFromLevel) {
        const cap = this.dailyCapForLevel(state.classLevel);
        state.dailyXpCap = cap;
        available = Math.min(available, Math.max(0, cap - state.dailyXpGained));
        if (available <= 0) { state.isFatigued = true; fatigueCapReached = true; break; }
      }
      const threshold = this.progression.xpRequiredFor(state.classLevel);
      const need = threshold - state.currentXp;
      const chunk = roundXp(Math.min(available, need));
      if (chunk <= 0) break;
      const oldLevel = state.classLevel;
      state.currentXp = roundXp(state.currentXp + chunk);
      state.totalXpAccumulated = roundXp(state.totalXpAccumulated + chunk);
      awarded = roundXp(awarded + chunk);
      remaining = roundXp(remaining - chunk);
      if (!bypass && state.classLevel >= this.config.activeFromLevel) state.dailyXpGained = roundXp(state.dailyXpGained + chunk);
      if (state.currentXp >= threshold) {
        state.currentXp = roundXp(state.currentXp - threshold);
        state.classLevel += 1;
        state.unspentAttributePoints += this.progression.attributePointsPerLevel;
        state.nextLevelXp = this.progression.xpRequiredFor(state.classLevel);
        levelUps.push({ oldClassLevel: oldLevel, newClassLevel: state.classLevel, attributePointsGranted: this.progression.attributePointsPerLevel });
      }
      if (state.classLevel >= this.progression.maxClassLevel) {
        state.classLevel = this.progression.maxClassLevel;
        state.currentXp = 0;
        state.nextLevelXp = 0;
        state.dailyXpCap = null;
        state.isFatigued = false;
        break;
      }
    }
    this.refresh(state, nowMs);
    return { xpAwarded: awarded, remainingXp: remaining, levelUps, fatigueCapReached, fatigueBypassed: bypass };
  }
}
