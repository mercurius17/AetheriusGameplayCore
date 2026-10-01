const fs = require('fs');
const path = require('path');

const FORM_ID = /^[0-9a-f]{6}:[^:]+\.(?:esm|esp|esl)$/i;
const ALLOWED_UNKNOWN_POLICIES = new Set(['exclude', 'reject']);

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function fail(message) {
  throw new Error(`[AetheriusDurabilitySystem/config] ${message}`);
}

function requireObject(value, name) {
  if (!isObject(value)) fail(`${name} deve ser um objeto`);
}

function requireString(value, name) {
  if (typeof value !== 'string' || value.trim() === '') fail(`${name} deve ser uma string não vazia`);
}

function requireBoolean(value, name) {
  if (typeof value !== 'boolean') fail(`${name} deve ser booleano`);
}

function requireInteger(value, name, minimum = 0) {
  if (!Number.isInteger(value) || value < minimum) fail(`${name} deve ser inteiro >= ${minimum}`);
}

function requireNumber(value, name, minimum = 0, maximum = Number.POSITIVE_INFINITY) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < minimum || value > maximum) {
    fail(`${name} deve ser número entre ${minimum} e ${maximum}`);
  }
}

function validateFormId(value, name, nullable = true) {
  if (nullable && value === null) return;
  requireString(value, name);
  if (!FORM_ID.test(value)) fail(`${name} deve usar FormID qualificado XXXXXX:Plugin.esp/.esm/.esl`);
}

function validateKit(category, material, kit, materials, maxCharges, ids) {
  requireObject(kit, `maintenance.kits.${category}.${material}`);
  requireString(kit.stableId, `stableId do kit ${category}.${material}`);
  requireString(kit.displayName, `displayName do kit ${category}.${material}`);
  requireString(kit.description, `description do kit ${category}.${material}`);
  requireInteger(kit.charges, `charges do kit ${category}.${material}`);
  requireString(kit.recordType, `recordType do kit ${category}.${material}`);
  if (kit.recordType !== 'MISC') fail(`kit ${category}.${material} deve ser MISC`);
  requireString(kit.editorId, `editorId do kit ${category}.${material}`);
  validateFormId(kit.formId, `formId do kit ${category}.${material}`);
  requireObject(kit.iconSource, `iconSource do kit ${category}.${material}`);
  requireString(kit.iconSource.name, `iconSource.name do kit ${category}.${material}`);
  requireString(kit.iconSource.editorId, `iconSource.editorId do kit ${category}.${material}`);
  validateFormId(kit.iconSource.formId, `iconSource.formId do kit ${category}.${material}`, false);
  if (!materials[material]) fail(`kit ${category}.${material} referencia material inexistente`);
  if (kit.charges > maxCharges) fail(`charges do kit ${category}.${material} excede o limite ${maxCharges}`);
  if (ids.has(kit.stableId)) fail(`stableId duplicado: ${kit.stableId}`);
  ids.add(kit.stableId);
  if (kit.editorId.length > 80) fail(`editorId do kit ${category}.${material} é longo demais`);
}

function validateMaintenanceConfig(config) {
  requireObject(config, 'configuração');
  requireInteger(config.schemaVersion, 'schemaVersion', 1);
  const maintenance = config.maintenance;
  requireObject(maintenance, 'maintenance');
  requireBoolean(maintenance.enabled, 'maintenance.enabled');

  requireObject(maintenance.debuffs, 'maintenance.debuffs');
  for (const category of ['weapons', 'armor']) {
    const debuff = maintenance.debuffs[category];
    requireObject(debuff, `maintenance.debuffs.${category}`);
    requireBoolean(debuff.enabled, `maintenance.debuffs.${category}.enabled`);
    requireNumber(debuff.efficiencyPenalty, `maintenance.debuffs.${category}.efficiencyPenalty`, 0, 1);
  }

  requireObject(maintenance.cycles, 'maintenance.cycles');
  requireInteger(maintenance.cycles.maxDurationMs, 'maintenance.cycles.maxDurationMs', 1);
  requireInteger(maintenance.cycles.inactivityToCloseMs, 'maintenance.cycles.inactivityToCloseMs', 1);
  requireBoolean(maintenance.cycles.additionalCyclesEnabled, 'maintenance.cycles.additionalCyclesEnabled');
  requireBoolean(maintenance.cycles.startNewCycleOnlyOnEffectiveActivity, 'maintenance.cycles.startNewCycleOnlyOnEffectiveActivity');
  requireBoolean(maintenance.cycles.persistOpenCycle, 'maintenance.cycles.persistOpenCycle');
  requireBoolean(maintenance.cycles.restoreOpenCycleAfterReconnect, 'maintenance.cycles.restoreOpenCycleAfterReconnect');
  requireBoolean(maintenance.cycles.disconnectClosesCycle, 'maintenance.cycles.disconnectClosesCycle');

  requireObject(maintenance.limits, 'maintenance.limits');
  requireInteger(maintenance.limits.maxChargesPerBalance, 'maintenance.limits.maxChargesPerBalance', 0);
  requireInteger(maintenance.limits.maxTrackedMaterialsPerCharacter, 'maintenance.limits.maxTrackedMaterialsPerCharacter', 1);

  requireObject(maintenance.notifications, 'maintenance.notifications');
  requireInteger(maintenance.notifications.lowChargesThreshold, 'maintenance.notifications.lowChargesThreshold', 0);
  requireInteger(maintenance.notifications.minIntervalMs, 'maintenance.notifications.minIntervalMs', 0);

  requireObject(maintenance.classification, 'maintenance.classification');
  requireString(maintenance.classification.unknownMaterialPolicy, 'maintenance.classification.unknownMaterialPolicy');
  if (!ALLOWED_UNKNOWN_POLICIES.has(maintenance.classification.unknownMaterialPolicy)) {
    fail(`classification.unknownMaterialPolicy deve ser exclude ou reject`);
  }
  requireBoolean(maintenance.classification.moddedItemsRequireExplicitMapping, 'maintenance.classification.moddedItemsRequireExplicitMapping');

  requireObject(maintenance.materials, 'maintenance.materials');
  const materialNames = Object.keys(maintenance.materials);
  if (materialNames.length === 0) fail('maintenance.materials não pode ser vazio');
  for (const material of materialNames) {
    const def = maintenance.materials[material];
    requireObject(def, `maintenance.materials.${material}`);
    requireString(def.displayName, `displayName do material ${material}`);
    if (!Array.isArray(def.aliases) || def.aliases.some(alias => typeof alias !== 'string' || !alias.trim())) {
      fail(`aliases do material ${material} deve ser uma lista de strings`);
    }
    if (!Array.isArray(def.keywords) || def.keywords.some(keyword => typeof keyword !== 'string' || !keyword.trim())) {
      fail(`keywords do material ${material} deve ser uma lista de strings`);
    }
  }

  requireObject(maintenance.kits, 'maintenance.kits');
  const ids = new Set();
  for (const category of ['weapons', 'armor']) {
    const kits = maintenance.kits[category];
    requireObject(kits, `maintenance.kits.${category}`);
    if (Object.keys(kits).length === 0) fail(`maintenance.kits.${category} não pode ser vazio`);
    for (const [material, kit] of Object.entries(kits)) {
      validateKit(category, material, kit, maintenance.materials, maintenance.limits.maxChargesPerBalance, ids);
    }
  }

  return config;
}

function deepFreeze(value) {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  Object.freeze(value);
  for (const child of Object.values(value)) deepFreeze(child);
  return value;
}

function loadMaintenanceConfig(configPath) {
  const resolved = path.resolve(configPath);
  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(resolved, 'utf8'));
  } catch (error) {
    throw new Error(`[AetheriusDurabilitySystem/config] não foi possível ler ${resolved}: ${error.message}`);
  }
  validateMaintenanceConfig(parsed);
  return deepFreeze(parsed);
}

function createConfigStore(configPath) {
  let current = loadMaintenanceConfig(configPath);
  return {
    get: () => current,
    path: path.resolve(configPath),
    reload: () => {
      current = loadMaintenanceConfig(configPath);
      return current;
    }
  };
}

module.exports = { FORM_ID, loadMaintenanceConfig, validateMaintenanceConfig, createConfigStore };
