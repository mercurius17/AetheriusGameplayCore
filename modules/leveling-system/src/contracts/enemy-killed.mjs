export const CONTRACT_VERSION = 1;

export const BUILT_IN_ENEMY_XP_CATEGORIES = Object.freeze([
  'bandit', 'riekling', 'silver_hand', 'reaver', 'forsworn', 'warlock', 'cultist', 'vampire',
  'thalmor', 'skeleton', 'draugr', 'ghost', 'corrupted_shade', 'boneman', 'mistman',
  'wrathman', 'ash_spawn', 'dragon_priest', 'ice_wraith', 'mudcrab',
  'skeever', 'slaughterfish', 'wolf', 'horker', 'frostbite_spider', 'sabre_cat', 'bear',
  'death_hound', 'netch', 'mammoth', 'giant', 'troll', 'hagraven', 'chaurus',
  'chaurus_hunter', 'falmer', 'spriggan', 'wispmother', 'wisp', 'gargoyle', 'ash_guardian',
  'lurker', 'seeker', 'dwarven_spider', 'dwarven_sphere', 'dwarven_ballista',
  'dwarven_centurion', 'flame_atronach', 'frost_atronach', 'storm_atronach', 'dremora',
  'dragon'
]);

const XP_CATEGORY_PATTERN = /^[a-z0-9]+(?:_[a-z0-9]+)*$/;

export function isExactXpCategory(value) {
  return typeof value === 'string' && value.length <= 96 && XP_CATEGORY_PATTERN.test(value);
}

const SOURCE_TYPES = new Set(['DUNGEON', 'WORLD_ENCOUNTER', 'ROAD_ENCOUNTER', 'CAMP', 'PATROL', 'BOSS_ENCOUNTER', 'SERVER_EVENT', 'OTHER']);
const PROGRESSION_STATUSES = new Set(['ASSIGNED', 'UNASSIGNED', 'INVALID', 'NOT_APPLICABLE']);

export function validateProgressionContext(value) {
  const errors = [];
  if (!value || typeof value !== 'object') return ['progressionContext must be an object'];
  if (value.contractVersion !== CONTRACT_VERSION) errors.push('unsupported progressionContext contractVersion');
  if (!SOURCE_TYPES.has(value.sourceType)) errors.push('invalid progressionContext sourceType');
  if (typeof value.sourceId !== 'string' || value.sourceId.length === 0) errors.push('progressionContext sourceId is required');
  if (!PROGRESSION_STATUSES.has(value.status)) errors.push('invalid progressionContext status');
  const min = value.recommendedClassMin;
  const max = value.recommendedClassMax;
  const bothNull = min === null && max === null;
  if (!bothNull) {
    if (!Number.isInteger(min) || min < 1 || min > 40) errors.push('recommendedClassMin must be 1..40 or null');
    if (!Number.isInteger(max) || max < 1 || max > 40) errors.push('recommendedClassMax must be 1..40 or null');
    if (Number.isInteger(min) && Number.isInteger(max) && min > max) errors.push('recommendedClassMin must be <= recommendedClassMax');
  }
  if (value.valid === true && (value.status !== 'ASSIGNED' || bothNull)) errors.push('valid context must be assigned with a range');
  if (typeof value.valid !== 'boolean') errors.push('progressionContext valid must be boolean');
  return errors;
}

export function validateEnemyDescriptor(value) {
  const errors = [];
  if (!value || typeof value !== 'object') return ['enemy descriptor must be an object'];
  if (value.contractVersion !== CONTRACT_VERSION) errors.push('unsupported enemy contractVersion');
  if (value.managed !== true) errors.push('managed must be true');
  if (typeof value.stableEnemyIdentity !== 'string' || !value.stableEnemyIdentity) errors.push('stableEnemyIdentity is required');
  if (typeof value.enemyFamily !== 'string' || !value.enemyFamily || value.enemyFamily === 'UNRESOLVED') errors.push('enemyFamily must be resolved');
  if (typeof value.spawnRole !== 'string' || !value.spawnRole || value.spawnRole === 'UNRESOLVED') errors.push('spawnRole must be resolved');
  if (!Number.isInteger(value.combatLevel) || value.combatLevel < 1 || value.combatLevel > 100) errors.push('combatLevel must be 1..100');
  if (typeof value.xpEligible !== 'boolean') errors.push('xpEligible must be boolean');
  if (!(value.xpCategory === null || isExactXpCategory(value.xpCategory))) errors.push('xpCategory must be an exact configured snake_case category');
  if (value.xpEligible && (value.xpCategory === null || value.xpCategory === 'UNRESOLVED')) errors.push('eligible enemy must have an exact xpCategory');
  for (const field of ['sourcePlugin', 'winningOverridePlugin', 'sourceRecordIdentity']) {
    if (typeof value[field] !== 'string' || !value[field]) errors.push(`${field} is required`);
  }
  for (const field of ['xpReward', 'finalXp', 'enemyLevelFactor', 'baseXp', 'delta', 'Delta']) {
    if (field in value) errors.push(`enemy descriptor contains leveling-owned field ${field}`);
  }
  return errors;
}

export function validateEnemyKilledEvent(value) {
  const errors = [];
  if (!value || typeof value !== 'object') return ['event must be an object'];
  if (value.contractVersion !== CONTRACT_VERSION) errors.push('unsupported event contractVersion');
  if (typeof value.eventId !== 'string' || !value.eventId) errors.push('eventId is required');
  if (!Number.isFinite(value.occurredAt)) errors.push('occurredAt is required');
  if (!Number.isInteger(value.victimId)) errors.push('victimId must be an integer');
  if (!Number.isInteger(value.killerId) || value.killerId < 0) errors.push('killerId must be a non-negative integer');
  errors.push(...validateEnemyDescriptor(value.enemy));
  errors.push(...validateProgressionContext(value.progressionContext));
  for (const field of ['xpReward', 'finalXp', 'Delta', 'delta', 'ContentRelevanceModifier', 'contentRelevanceModifier', 'PartyModifier', 'partyModifier', 'FatigueModifier', 'fatigueModifier', 'EnemyLevelFactor', 'enemyLevelFactor']) {
    if (field in value) errors.push(`event contains leveling-owned calculated field ${field}`);
  }
  if (value.contributors !== undefined && !Array.isArray(value.contributors)) errors.push('contributors must be an array when present');
  return [...new Set(errors)];
}
