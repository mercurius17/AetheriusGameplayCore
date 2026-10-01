const MAPPING_STATUSES = new Set(['ASSIGNED', 'UNRESOLVED', 'DISABLED', 'INVALID']);
const XP_CATEGORY_PATTERN = /^[a-z0-9]+(?:_[a-z0-9]+)*$/;

function isFiniteNumber(value) { return typeof value === 'number' && Number.isFinite(value); }
function add(errors, message) { errors.push(message); }

export function validateEnemyBaseXp(config) {
  const errors = [];
  if (config?.schemaVersion !== 1) add(errors, 'enemy-base-xp schemaVersion must be 1');
  if (!Array.isArray(config?.profiles) || config.profiles.length === 0) return ['enemy-base-xp profiles must be a non-empty array'];
  const balanceIds = new Set();
  const categories = new Map();
  for (const [index, profile] of config.profiles.entries()) {
    const prefix = `enemy-base-xp.profiles[${index}]`;
    if (!profile || typeof profile !== 'object') { add(errors, `${prefix} must be an object`); continue; }
    if (typeof profile.balanceId !== 'string' || !profile.balanceId) add(errors, `${prefix}.balanceId is required`);
    if (balanceIds.has(profile.balanceId)) add(errors, `${prefix}.balanceId is duplicated`);
    balanceIds.add(profile.balanceId);
    if (typeof profile.sourceLabel !== 'string' || !profile.sourceLabel) add(errors, `${prefix}.sourceLabel is required`);
    if (!['SCALED', 'FIXED'].includes(profile.awardMode)) add(errors, `${prefix}.awardMode is invalid`);
    if (profile.awardMode === 'SCALED' && (!isFiniteNumber(profile.baseXp) || profile.baseXp <= 0 || 'fixedXp' in profile)) add(errors, `${prefix} must have positive baseXp only`);
    if (profile.awardMode === 'FIXED' && (!isFiniteNumber(profile.fixedXp) || profile.fixedXp <= 0 || 'baseXp' in profile)) add(errors, `${prefix} must have positive fixedXp only`);
    if (!Array.isArray(profile.eventXpCategories) || profile.eventXpCategories.some((x) => typeof x !== 'string' || !XP_CATEGORY_PATTERN.test(x))) add(errors, `${prefix}.eventXpCategories must contain exact snake_case categories`);
    if (new Set(profile.eventXpCategories ?? []).size !== (profile.eventXpCategories ?? []).length) add(errors, `${prefix}.eventXpCategories has duplicates`);
    if (!MAPPING_STATUSES.has(profile.mappingStatus)) add(errors, `${prefix}.mappingStatus is invalid`);
    if (typeof profile.enabled !== 'boolean') add(errors, `${prefix}.enabled must be boolean`);
    if (profile.difficultyCategory !== undefined && !['EASY', 'MEDIUM', 'HARD', 'VERY_HARD'].includes(profile.difficultyCategory)) add(errors, `${prefix}.difficultyCategory is invalid`);
    if (profile.classificationEquivalents !== undefined && (!Array.isArray(profile.classificationEquivalents) || profile.classificationEquivalents.some((value) => typeof value !== 'string' || !value))) add(errors, `${prefix}.classificationEquivalents must contain non-empty strings`);
    if (typeof profile.provenance !== 'string' || !profile.provenance) add(errors, `${prefix}.provenance is required`);
    if (profile.mappingStatus === 'ASSIGNED' && (!profile.enabled || profile.eventXpCategories.length === 0)) add(errors, `${prefix} assigned profiles must be enabled and mapped`);
    if (profile.mappingStatus === 'UNRESOLVED' && profile.enabled) add(errors, `${prefix} unresolved profiles must be disabled`);
    for (const category of profile.eventXpCategories ?? []) {
      if (categories.has(category)) add(errors, `eventXpCategory ${category} has conflicting profiles ${categories.get(category)} and ${profile.balanceId}`);
      categories.set(category, profile.balanceId);
    }
  }
  for (const [index, profile] of config.profiles.entries()) {
    for (const equivalent of profile.classificationEquivalents ?? []) {
      if (!balanceIds.has(equivalent)) add(errors, `enemy-base-xp.profiles[${index}].classificationEquivalents references unknown balanceId ${equivalent}`);
    }
  }
  return errors;
}

export function validateLevelProgression(config) {
  const errors = [];
  if (config?.schemaVersion !== 1) add(errors, 'level-progression schemaVersion must be 1');
  if (config?.minClassLevel !== 1 || config?.maxClassLevel !== 40) add(errors, 'class level range must be exactly 1..40');
  if (config?.attributePointsPerLevel !== 15) add(errors, 'attributePointsPerLevel must be 15');
  if (config?.totalPotentialAttributePoints !== 585) add(errors, 'totalPotentialAttributePoints must be 585');
  const levels = config?.levels;
  if (!Array.isArray(levels) || levels.length !== 39) return [...errors, 'levels must contain exactly 39 entries'];
  let expectedTotal = 0;
  for (let i = 0; i < levels.length; i += 1) {
    const entry = levels[i];
    const expectedFrom = i + 1;
    if (!entry || entry.levelFrom !== expectedFrom || entry.levelTo !== expectedFrom + 1) add(errors, `level entry ${i} is not a contiguous ${expectedFrom}->${expectedFrom + 1}`);
    if (!Number.isInteger(entry?.xpRequired) || entry.xpRequired <= 0) add(errors, `level entry ${i} xpRequired must be positive`);
    expectedTotal += entry?.xpRequired ?? 0;
    if (entry?.totalAccumulated !== expectedTotal) add(errors, `level entry ${i} totalAccumulated is inconsistent`);
  }
  if (expectedTotal !== 1848000) add(errors, `progression total must be 1848000, got ${expectedTotal}`);
  return errors;
}

export function validateEnemyLevelScaling(config) {
  const errors = [];
  if (config?.schemaVersion !== 1) add(errors, 'enemy-level-scaling schemaVersion must be 1');
  if (!Array.isArray(config?.ranges) || config.ranges.length === 0) return ['enemy-level-scaling ranges must be a non-empty array'];
  const sorted = [...config.ranges].sort((a, b) => a.levelFrom - b.levelFrom);
  let expected = 1;
  for (const range of sorted) {
    if (!Number.isInteger(range?.levelFrom) || !Number.isInteger(range?.levelTo) || range.levelFrom !== expected || range.levelTo < range.levelFrom || range.levelTo > 100) add(errors, `invalid or gapped scaling range at ${range?.levelFrom}..${range?.levelTo}`);
    expected = (range?.levelTo ?? expected) + 1;
    if (!['ASSIGNED', 'UNRESOLVED'].includes(range?.status)) add(errors, 'scaling range status is invalid');
    if (range?.status === 'ASSIGNED' && (!range.formula || range.formula.kind !== 'AFFINE' || !isFiniteNumber(range.formula.base) || !isFiniteNumber(range.formula.levelOffset) || !isFiniteNumber(range.formula.slope) || range.formula.base <= 0 || range.formula.slope < 0)) add(errors, 'assigned scaling range has no valid formula');
    if (range?.status === 'UNRESOLVED' && range.formula !== null) add(errors, 'unresolved scaling range must not have a formula');
  }
  if (expected !== 101) add(errors, 'scaling ranges must cover exactly 1..100');
  return errors;
}

function validatePartyTable(table, label) {
  const errors = [];
  if (!table || !Number.isInteger(table.minSize) || !Number.isInteger(table.maxSize) || table.minSize > table.maxSize) add(errors, `${label} size bounds are invalid`);
  if (!table?.multipliers || typeof table.multipliers !== 'object') return [...errors, `${label}.multipliers is required`];
  for (let size = table.minSize; size <= table.maxSize; size += 1) {
    const value = table.multipliers[String(size)];
    if (!isFiniteNumber(value) || value <= 0 || value > 1) add(errors, `${label} multiplier for ${size} is invalid`);
  }
  return errors;
}

export function validatePartyXp(config) {
  const errors = [];
  if (config?.schemaVersion !== 1) add(errors, 'party-xp schemaVersion must be 1');
  errors.push(...validatePartyTable(config?.normal, 'normal'));
  errors.push(...validatePartyTable(config?.raid, 'raid'));
  if (config?.normal?.minSize !== 1 || config?.normal?.maxSize !== 8) add(errors, 'normal party range must be 1..8');
  if (config?.raid?.minSize !== 8 || config?.raid?.maxSize !== 20) add(errors, 'raid range must be 8..20');
  const eligibility = config?.eligibility;
  if (eligibility?.status !== 'ASSIGNED' || eligibility.sameCellRequired !== true || eligibility.maxDistance !== 5000 || eligibility.onlineRequired !== true || eligibility.participationRequired !== false) add(errors, 'party eligibility policy must be the approved online, same-cell, <=5000, no-participation policy');
  return errors;
}

export function validateFatigue(config) {
  const errors = [];
  if (config?.schemaVersion !== 1) add(errors, 'fatigue schemaVersion must be 1');
  if (config?.activeFromLevel !== 15 || config?.inactiveThroughLevel !== 14) add(errors, 'fatigue activation must start at level 15');
  if (config?.dailyCapFraction !== 0.2 || config?.capMode !== 'FLOOR_OF_XP_REQUIRED_FOR_CURRENT_LEVEL') add(errors, 'fatigue cap policy is invalid');
  if (config?.reset?.localHour !== 6 || config?.reset?.timeZone !== 'America/Sao_Paulo') add(errors, 'fatigue reset must be 06:00 America/Sao_Paulo');
  return errors;
}

export function validateContentRelevance(config) {
  const errors = [];
  if (config?.schemaVersion !== 1) add(errors, 'content-relevance schemaVersion must be 1');
  if (!['UNRESOLVED', 'ASSIGNED'].includes(config?.status)) add(errors, 'content-relevance status is invalid');
  if (config?.status === 'UNRESOLVED' && config.policy !== null) add(errors, 'unresolved content relevance must not contain a policy');
  if (config?.status === 'ASSIGNED') {
    const policy = config.policy;
    if (!policy || policy.kind !== 'LINEAR_REDUCTION_ABOVE_MAX') add(errors, 'assigned content relevance must use LINEAR_REDUCTION_ABOVE_MAX');
    if (!isFiniteNumber(policy?.belowRangeMultiplier) || policy.belowRangeMultiplier < 0 || policy.belowRangeMultiplier > 1) add(errors, 'content relevance belowRangeMultiplier must be within 0..1');
    if (!isFiniteNumber(policy?.withinRangeMultiplier) || policy.withinRangeMultiplier < 0 || policy.withinRangeMultiplier > 1) add(errors, 'content relevance withinRangeMultiplier must be within 0..1');
    if (!isFiniteNumber(policy?.reductionPerLevelAboveMax) || policy.reductionPerLevelAboveMax <= 0 || policy.reductionPerLevelAboveMax > 1) add(errors, 'content relevance reductionPerLevelAboveMax must be within (0..1]');
    if (!isFiniteNumber(policy?.maximumReduction) || policy.maximumReduction < 0 || policy.maximumReduction >= 1) add(errors, 'content relevance maximumReduction must be within [0..1)');
  }
  if (!Array.isArray(config?.inputs) || config.inputs.length === 0) add(errors, 'content-relevance inputs are required');
  if (!['UNRESOLVED', 'APPLIES', 'BYPASSES'].includes(config?.bossFixedXpEffect)) add(errors, 'content-relevance bossFixedXpEffect is invalid');
  return errors;
}

export function validateEnemyCoveragePolicy(config) {
  const errors = [];
  if (config?.schemaVersion !== 1) add(errors, 'enemy-coverage-policy schemaVersion must be 1');
  if (config?.identity?.scheme !== 'PLUGIN_LOCAL_FORM_ID' || config.identity.pluginNameCaseInsensitive !== true || config.identity.localFormIdHexWidth !== 6 || config.identity.persistRuntimeFormIds !== false) add(errors, 'enemy coverage identity must use non-persistent plugin + local FormID');
  if (config?.discovery?.authority !== 'MO2_WINNING_OVERRIDE_SNAPSHOT' || config.discovery.includeModAddedEnemies !== true || config.discovery.requireCompleteCoverage !== true || config.discovery.refreshOnLoadOrderChange !== true) add(errors, 'enemy coverage discovery policy is invalid');
  if (config?.classification?.mode !== 'EXACT_CONFIGURED_XP_CATEGORY' || config.classification.allowConfiguredModCategories !== true || config.classification.allowNameFallback !== false || config.classification.unassignedBehavior !== 'NO_XP_AND_REPORT') add(errors, 'enemy coverage classification policy is invalid');
  if (typeof config?.provenance !== 'string' || !config.provenance) add(errors, 'enemy coverage provenance is required');
  return errors;
}

export function validateConfigSet(configs) {
  const errors = {
    enemyBaseXp: validateEnemyBaseXp(configs.enemyBaseXp),
    levelProgression: validateLevelProgression(configs.levelProgression),
    enemyLevelScaling: validateEnemyLevelScaling(configs.enemyLevelScaling),
    partyXp: validatePartyXp(configs.partyXp),
    fatigue: validateFatigue(configs.fatigue),
    contentRelevance: validateContentRelevance(configs.contentRelevance),
    enemyCoveragePolicy: validateEnemyCoveragePolicy(configs.enemyCoveragePolicy)
  };
  return Object.values(errors).flat();
}

export class BalanceConfigValidator {
  validate(configs) { return validateConfigSet(configs); }
}
