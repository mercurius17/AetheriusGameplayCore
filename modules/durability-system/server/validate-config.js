const path = require('path');
const { loadMaintenanceConfig } = require('./config');

const file = process.argv[2] || path.resolve(__dirname, '../config/maintenance-config.json');
try {
  const config = loadMaintenanceConfig(file);
  const maintenance = config.maintenance;
  const weaponKits = Object.keys(maintenance.kits.weapons).length;
  const armorKits = Object.keys(maintenance.kits.armor).length;
  console.log(JSON.stringify({ ok: true, schemaVersion: config.schemaVersion, materials: Object.keys(maintenance.materials).length, weaponKits, armorKits }));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
