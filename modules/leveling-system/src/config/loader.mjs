import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { validateConfigSet } from './validator.mjs';

const FILES = Object.freeze({
  enemyBaseXp: 'enemy-base-xp.json',
  levelProgression: 'level-progression.json',
  enemyLevelScaling: 'enemy-level-scaling.json',
  partyXp: 'party-xp.json',
  fatigue: 'fatigue.json',
  contentRelevance: 'content-relevance.json',
  enemyCoveragePolicy: 'enemy-coverage-policy.json'
});

export class ConfigLoader {
  constructor(rootDir) { this.rootDir = rootDir; }

  async load() {
    const configs = {};
    const errors = [];
    for (const [key, file] of Object.entries(FILES)) {
      try {
        const text = await readFile(path.join(this.rootDir, 'config', file), 'utf8');
        configs[key] = JSON.parse(text);
      } catch (error) {
        errors.push(`${file}: ${error.message}`);
      }
    }
    if (errors.length === 0) errors.push(...validateConfigSet(configs));
    const unresolved = errors.length === 0 && (
      configs.contentRelevance.status === 'UNRESOLVED' ||
      configs.enemyLevelScaling.ranges.some((range) => range.status === 'UNRESOLVED') ||
      configs.enemyBaseXp.profiles.some((profile) => profile.mappingStatus !== 'ASSIGNED')
    );
    const status = errors.length > 0 ? 'NOT_READY' : unresolved ? 'PARTIAL' : 'READY';
    const balanceVersions = Object.values(configs).map((config) => config.balanceVersion).filter(Boolean);
    const configVersion = balanceVersions.length > 0 && new Set(balanceVersions).size === 1 ? balanceVersions[0] : null;
    return { status, configs: errors.length === 0 ? configs : null, errors, configVersion };
  }
}

export { FILES };
