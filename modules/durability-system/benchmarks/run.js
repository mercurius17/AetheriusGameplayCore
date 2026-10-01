const { performance } = require('node:perf_hooks');
const path = require('path');
const { createConfigStore } = require('../server/config');
const { InMemoryPersistence } = require('../server/persistence');
const { AetheriusDurabilityService } = require('../server/maintenance-service');

const configStore = createConfigStore(path.resolve(__dirname, '../config/maintenance-config.json'));

async function runMaintenance(players, eventsPerPlayer) {
  const seed = {};
  for (let player = 0; player < players; player++) {
    seed[`p-${player}`] = { balances: { weapons: { iron: eventsPerPlayer + 2, steel: eventsPerPlayer + 2 }, armor: {} } };
  }
  const persistence = new InMemoryPersistence(seed);
  const service = new AetheriusDurabilityService({ configStore, persistence, authorize: () => true });
  const beforeMemory = process.memoryUsage().heapUsed;
  const start = performance.now();
  for (let player = 0; player < players; player++) {
    const characterId = `p-${player}`;
    await service.initializeCharacter(characterId);
    for (let event = 0; event < eventsPerPlayer; event++) {
      await service.handleEffectiveEvent({
        authority: 'server', characterId, actorId: player + 1, eventId: `e-${player}-${event}`,
        type: 'weapon_hit', physicalWeapon: true, weaponMaterials: event % 2 ? ['steel'] : ['iron'], at: event * 10
      });
    }
  }
  let syncBytes = 0;
  for (let player = 0; player < players; player++) {
    const status = await service.getStatus(`p-${player}`);
    syncBytes += Buffer.byteLength(JSON.stringify(status), 'utf8');
  }
  const elapsedMs = performance.now() - start;
  const afterMemory = process.memoryUsage().heapUsed;
  return {
    elapsedMs,
    averageEventUs: (elapsedMs * 1000) / (players * eventsPerPlayer),
    heapDeltaMb: (afterMemory - beforeMemory) / 1024 / 1024,
    writes: persistence.metrics.writes,
    ledgerWrites: persistence.metrics.ledgerWrites,
    syncMessages: players,
    syncBytes
  };
}

function runBaseline(players, eventsPerPlayer) {
  const beforeMemory = process.memoryUsage().heapUsed;
  const start = performance.now();
  let accumulator = 0;
  for (let player = 0; player < players; player++) {
    for (let event = 0; event < eventsPerPlayer; event++) accumulator += event + player;
  }
  const elapsedMs = performance.now() - start;
  const afterMemory = process.memoryUsage().heapUsed;
  return {
    accumulator,
    elapsedMs,
    averageEventUs: (elapsedMs * 1000) / (players * eventsPerPlayer),
    heapDeltaMb: (afterMemory - beforeMemory) / 1024 / 1024,
    writes: 0,
    ledgerWrites: 0,
    syncMessages: 0,
    syncBytes: 0
  };
}

(async () => {
  const eventsPerPlayer = 20;
  const results = [];
  for (const players of [100, 300, 500]) {
    const baseline = runBaseline(players, eventsPerPlayer);
    const maintenance = await runMaintenance(players, eventsPerPlayer);
    results.push({ players, eventsPerPlayer, baseline, maintenance });
  }
  console.log(JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2));
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
