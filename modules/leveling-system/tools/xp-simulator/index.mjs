import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ConfigLoader } from '../../src/config/loader.mjs';
import { XpAwardService } from '../../src/integration/enemy-consumer.mjs';
import { InMemoryProgressionRepository } from '../../src/persistence/in-memory.mjs';
import { ProgressionRules } from '../../src/domain/progression.mjs';
import { LevelingReadinessService } from '../../src/readiness/service.mjs';
import { createSimulationAuthorityCoordinator } from '../../src/integration/experience-authority.mjs';
import { createSimulationCoverageGate } from '../../src/integration/enemy-coverage.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const configResult = await new ConfigLoader(root).load();
const experienceAuthority = createSimulationAuthorityCoordinator();
const enemyCoverage = createSimulationCoverageGate();

if (process.argv.includes('--readiness')) {
  const progression = configResult.configs ? new ProgressionRules(configResult.configs.levelProgression) : null;
  const repository = progression ? new InMemoryProgressionRepository({ progression }) : null;
  console.log(JSON.stringify(new LevelingReadinessService({ configResult, repository, experienceAuthority, enemyCoverage }).check(), null, 2));
  process.exit(0);
}

if (!configResult.configs) {
  console.error(JSON.stringify({ status: 'NOT_READY', errors: configResult.errors }, null, 2));
  process.exit(1);
}

const inputPathIndex = process.argv.indexOf('--input');
let inputText = '';
if (inputPathIndex >= 0 && process.argv[inputPathIndex + 1]) inputText = await readFile(path.resolve(process.cwd(), process.argv[inputPathIndex + 1]), 'utf8');
else inputText = await new Promise((resolve) => { let value = ''; process.stdin.setEncoding('utf8'); process.stdin.on('data', (chunk) => { value += chunk; }); process.stdin.on('end', () => resolve(value)); });
if (!inputText.trim()) {
  console.log(JSON.stringify({ status: configResult.status, configVersion: configResult.configVersion, message: 'Provide JSON with event, partySnapshot and players.' }, null, 2));
  process.exit(0);
}

const input = JSON.parse(inputText);
const progression = new ProgressionRules(configResult.configs.levelProgression);
const repository = new InMemoryProgressionRepository({ progression });
for (const state of input.players ?? input.playerStates ?? []) repository.seed(state);
const service = new XpAwardService({ configResult, repository, experienceAuthority, enemyCoverage });
const result = service.processEvent(input.event, { partySnapshot: input.partySnapshot, nowMs: input.nowMs ?? Date.now() });
console.log(JSON.stringify({ configStatus: configResult.status, configVersion: configResult.configVersion, result, states: (input.players ?? input.playerStates ?? []).map((state) => repository.get(state.playerId)), ledger: service.ledger.all(), outputEvents: service.publisher.events }, null, 2));
