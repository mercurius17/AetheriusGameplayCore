import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DungeonScanner } from '../src/dungeons/registry.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const discovery = JSON.parse(fs.readFileSync(path.join(root, 'config', 'generated', 'plugin-discovery.generated.json'), 'utf8'));
const records = discovery.plugins.flatMap((plugin) => plugin.records ?? []);
const registry = new DungeonScanner().scan(records);
const overridesPath = path.join(root, 'config', 'manual', 'dungeons.override.json');
const overrides = JSON.parse(fs.readFileSync(overridesPath, 'utf8'));
registry.applyManualOverrides(overrides.dungeons ?? []);
const result = { schemaVersion: 1, generatedAt: new Date().toISOString(), source: 'non-authoritative read-only CELL/LCTN/REFR/ACHR/CONT candidate scan across all discovered plugins', dungeons: registry.profiles, summary: { discovered: registry.profiles.length, assignedClassification: registry.profiles.filter((profile) => profile.classification !== 'UNASSIGNED').length, unassignedClassification: registry.profiles.filter((profile) => profile.classification === 'UNASSIGNED').length, authoritativeProfiles: registry.profiles.filter((profile) => profile.progressionContext?.valid).length } };
const output = path.join(root, 'config', 'generated', 'dungeon-candidates.generated.json');
fs.writeFileSync(output, `${JSON.stringify(result, null, 2)}\n`);
console.log(`Wrote ${output}`);
console.log(JSON.stringify(result.summary));
