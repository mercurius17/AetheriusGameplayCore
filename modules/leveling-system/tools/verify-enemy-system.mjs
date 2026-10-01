import path from 'node:path';
import { access } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { ConfigLoader } from '../src/config/loader.mjs';
import { EnemyXpCatalog } from '../src/domain/catalog.mjs';
import { auditAetheriusEnemySystemContract } from '../src/integration/aetherius-enemy-system.mjs';

const levelingRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rootFlag = process.argv.indexOf('--root');
const enemySystemRoot = path.resolve(rootFlag >= 0 ? process.argv[rootFlag + 1] : path.join(levelingRoot, '..', 'AetheriusEnemySystem'));
const entrypoint = path.join(enemySystemRoot, 'src', 'index.mjs');

try {
  await access(entrypoint);
} catch {
  console.error(JSON.stringify({ status: 'INCOMPATIBLE', error: `AetheriusEnemySystem entrypoint not found: ${entrypoint}` }, null, 2));
  process.exit(1);
}

const configResult = await new ConfigLoader(levelingRoot).load();
if (!configResult.configs) {
  console.error(JSON.stringify({ status: 'INCOMPATIBLE', errors: configResult.errors }, null, 2));
  process.exit(1);
}

const enemySystemApi = await import(pathToFileURL(entrypoint).href);
const report = auditAetheriusEnemySystemContract({
  enemySystemApi,
  catalog: new EnemyXpCatalog(configResult.configs.enemyBaseXp)
});

console.log(JSON.stringify({
  repository: enemySystemRoot,
  levelingConfigVersion: configResult.configVersion,
  ...report
}, null, 2));
process.exit(report.status === 'INCOMPATIBLE' ? 1 : 0);
