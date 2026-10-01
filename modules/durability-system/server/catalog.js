function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function buildCatalog(config) {
  const byStableId = new Map();
  const byFormId = new Map();
  const all = [];
  for (const category of ['weapons', 'armor']) {
    for (const [material, definition] of Object.entries(config.maintenance.kits[category])) {
      const kit = { ...clone(definition), category, material };
      byStableId.set(kit.stableId, kit);
      if (kit.formId) byFormId.set(kit.formId.toUpperCase(), kit);
      all.push(kit);
    }
  }

  return Object.freeze({
    all: () => all.map(clone),
    getByStableId: (stableId) => {
      const kit = byStableId.get(stableId);
      return kit ? clone(kit) : null;
    },
    getByFormId: (formId) => {
      const kit = byFormId.get(String(formId || '').toUpperCase());
      return kit ? clone(kit) : null;
    },
    resolveRuntimeBaseId: (stableId, resolver) => {
      const kit = byStableId.get(stableId);
      if (!kit || typeof resolver !== 'function') return null;
      const baseId = resolver(clone(kit));
      return Number.isInteger(baseId) && baseId > 0 ? baseId : null;
    },
    materialExists: (category, material) => Boolean(config.maintenance.kits[category]?.[material]),
    materialDisplayName: (material) => config.maintenance.materials[material]?.displayName || material
  });
}

module.exports = { buildCatalog };
