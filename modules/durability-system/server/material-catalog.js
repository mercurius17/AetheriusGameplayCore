function normalize(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function valuesOf(record) {
  if (!record || typeof record !== 'object') return [];
  const values = [];
  for (const key of ['editorId', 'name', 'material', 'materialName']) {
    if (typeof record[key] === 'string') values.push(record[key]);
  }
  for (const key of ['keywords', 'keywordNames']) {
    if (Array.isArray(record[key])) values.push(...record[key].filter(value => typeof value === 'string'));
  }
  return values.map(normalize);
}

function createMaterialClassifier(config) {
  const definitions = Object.entries(config.maintenance.materials).map(([key, definition]) => ({
    key,
    aliases: definition.aliases.map(normalize),
    keywords: definition.keywords.map(normalize)
  }));

  return function classify(record, category) {
    if (!record || typeof record !== 'object') return null;
    if (record.authority !== 'server' && record.trusted !== true) return null;
    if (record.materialKey && config.maintenance.kits[category]?.[record.materialKey]) {
      return record.materialKey;
    }

    const values = valuesOf(record);
    const candidates = [];
    for (const definition of definitions) {
      if (!config.maintenance.kits[category]?.[definition.key]) continue;
      for (const keyword of definition.keywords) {
        if (values.includes(keyword)) candidates.push({ key: definition.key, score: 100 + keyword.length });
      }
      for (const alias of definition.aliases) {
        if (values.some(value => value === alias || value.includes(alias))) candidates.push({ key: definition.key, score: alias.length });
      }
    }
    candidates.sort((a, b) => b.score - a.score || a.key.localeCompare(b.key));
    return candidates[0]?.key || null;
  };
}

module.exports = { createMaterialClassifier, normalize };
