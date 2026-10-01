import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { assertSingleEpoch, cellFromHousecarlRow, locationFromHousecarlRow, readHousecarlArtifact } from '../src/discovery/housecarl-snapshot.mjs';
import { qualifyCellScopedDungeon, qualifyDungeonLocation } from '../src/dungeons/discovery.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const snapshotRoot = path.join(root, 'config', 'generated', 'housecarl');
const cellArtifact = readHousecarlArtifact(path.join(snapshotRoot, 'all-interior-cells-winners.jsonl'));
const locationArtifact = readHousecarlArtifact(path.join(snapshotRoot, 'all-locations-winners.jsonl'));
const epoch = assertSingleEpoch([cellArtifact, locationArtifact]);
const overrides = JSON.parse(fs.readFileSync(path.join(root, 'config', 'dungeon-discovery-overrides.json'), 'utf8'));
const verifiedDungeonPlugins = new Set(overrides.includeDefiningPlugins ?? []);
const cells = cellArtifact.rows.map((row) => ({ row, cell: cellFromHousecarlRow(row) }));
const locations = locationArtifact.rows.map((row) => ({ row, location: locationFromHousecarlRow(row) }));
const cellsByLocation = new Map();
for (const entry of cells) {
  if (!entry.cell.locationId) continue;
  const group = cellsByLocation.get(entry.cell.locationId) ?? [];
  group.push(entry.cell);
  cellsByLocation.set(entry.cell.locationId, group);
}
const qualifyingLocationIds = new Set();
const qualifyingCellIds = new Set();
const qualifyingLocationRows = [];
for (const { row, location } of locations) {
  const groupCells = cellsByLocation.get(location.canonicalFormId) ?? [];
  if (!qualifyDungeonLocation(location, groupCells, verifiedDungeonPlugins)) continue;
  qualifyingLocationIds.add(location.canonicalFormId);
  qualifyingLocationRows.push(row);
  for (const cell of groupCells) qualifyingCellIds.add(cell.canonicalFormId);
}
for (const { cell } of cells) {
  if (!qualifyingCellIds.has(cell.canonicalFormId) && qualifyCellScopedDungeon(cell, verifiedDungeonPlugins)) {
    qualifyingCellIds.add(cell.canonicalFormId);
  }
}
const rows = cells.filter(({ cell }) => qualifyingCellIds.has(cell.canonicalFormId)).map(({ row }) => row);
const ownerPlugins = [...new Set(rows.map((row) => row.formid.split(':').slice(1).join(':')))].sort();
const manifest = {
  ...cellArtifact.manifest,
  query: { derivedFrom: ['all-interior-cells-winners.jsonl', 'all-locations-winners.jsonl'], rule: 'interior CELL accepted by the shared global dungeon discovery policy' },
  row_count: rows.length,
  total: rows.length,
  epoch,
  created: new Date().toISOString(),
  notes: ['Derived locally from complete same-epoch houseCARL artifacts; identity remains canonical CELL FormID.', 'Includes standard dungeon keywords, hostile archetypes, clearable encounters, verified overrides, and cell-scoped encounter evidence.']
};
fs.writeFileSync(path.join(snapshotRoot, 'all-dungeon-cells-winners.jsonl'), `${[manifest, ...rows].map((row) => JSON.stringify(row)).join('\n')}\n`);
const locationManifest = {
  ...locationArtifact.manifest,
  query: { derivedFrom: ['all-interior-cells-winners.jsonl', 'all-locations-winners.jsonl'], rule: 'LCTN accepted by the shared global dungeon discovery policy' },
  row_count: qualifyingLocationRows.length,
  total: qualifyingLocationRows.length,
  epoch,
  created: new Date().toISOString(),
  notes: ['Includes location-only profiles so placed actors can also be associated by canonical LCTN identity.']
};
fs.writeFileSync(path.join(snapshotRoot, 'all-dungeon-locations-winners.jsonl'), `${[locationManifest, ...qualifyingLocationRows].map((row) => JSON.stringify(row)).join('\n')}\n`);
fs.writeFileSync(path.join(root, 'config', 'generated', 'dungeon-owner-plugins.generated.json'), `${JSON.stringify({ schemaVersion: 1, epoch, ownerPlugins }, null, 2)}\n`);
console.log(JSON.stringify({ epoch, dungeonLocations: qualifyingLocationIds.size, dungeonCells: rows.length, ownerPlugins }, null, 2));
