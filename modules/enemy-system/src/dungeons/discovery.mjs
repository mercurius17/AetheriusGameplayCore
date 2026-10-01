import { inferFamilyFromVerifiedLabel } from './classification.mjs';

export const HOSTILE_LOCATION_KEYWORDS = Object.freeze(new Set([
  'LocTypeDungeon', 'LocTypeDragonPriestLair', 'LocTypeVampireLair', 'LocSetDwarvenRuin',
  'LocTypeDwarvenAutomatons', 'LocTypeBanditCamp', 'LocTypeDraugrCrypt', 'LocTypeWarlockLair',
  'LocTypeFalmerHive', 'LocTypeAnimalDen', 'LocTypeHagravenNest', 'LocTypeGiantCamp',
  'LocTypeDragonLair', 'LocTypeForswornCamp', 'LocTypeWerewolfLair', 'LocTypeWerebearLair',
  'LocTypeSprigganGrove', 'DLC2LocTypeAshSpawn', 'DLC2LocTypeRieklingCamp'
]));

export function qualifyDungeonLocation(location, groupCells, verifiedDungeonPlugins = new Set()) {
  const keywords = new Set(location.keywords.map((keyword) => keyword.editorid).filter(Boolean));
  if (keywords.has('LocTypeDungeon')) return 'LOC_TYPE_DUNGEON';
  if (groupCells.some((cell) => verifiedDungeonPlugins.has(cell.sourcePlugin))) return 'VERIFIED_DUNGEON_MOD_OVERRIDE';
  if ([...keywords].some((keyword) => HOSTILE_LOCATION_KEYWORDS.has(keyword))) return 'HOSTILE_ARCHETYPE_LOCATION';
  if (keywords.has('LocTypeClearable') && groupCells.some((cell) => cell.encounterZoneId)) return 'CLEARABLE_INTERIOR_ENCOUNTER';
  const inferred = inferFamilyFromVerifiedLabel(location.editorId, location.name, ...groupCells.flatMap((cell) => [cell.editorId, cell.name]));
  if (groupCells.some((cell) => cell.encounterZoneId) && inferred !== 'UNRESOLVED') return 'ENCOUNTER_ZONE_ARCHETYPE_HEURISTIC';
  return null;
}

export function qualifyCellScopedDungeon(cell, verifiedDungeonPlugins = new Set()) {
  const family = inferFamilyFromVerifiedLabel(cell.editorId, cell.name, cell.encounterZoneEditorId);
  if (verifiedDungeonPlugins.has(cell.sourcePlugin)) return { rule: 'VERIFIED_DUNGEON_MOD_LOCATIONLESS_CELL', family };
  if (cell.encounterZoneId && family !== 'UNRESOLVED') return { rule: 'LOCATIONLESS_ENCOUNTER_ARCHETYPE', family };
  return null;
}
