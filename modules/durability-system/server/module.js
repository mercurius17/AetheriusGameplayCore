const path = require('path');
const { createConfigStore } = require('./config');
const { AetheriusDurabilityService } = require('./maintenance-service');
const { installSkyMpBridge } = require('./sky-mp-bridge');

function createModuleDescriptor(options = {}) {
  let service = options.service || null;
  let bridge = null;
  let configStore = null;
  return {
    id: 'aetherius-durability',
    enabledBy: options.enabledBy || 'ENABLE_AETHERIUS_DURABILITY',
    phase: 'core',
    dependencies: options.dependencies || [],
    commands: [],
    initialize: async () => {
      const configPath = options.configPath || path.resolve(__dirname, '../config/maintenance-config.json');
      configStore = options.configStore || createConfigStore(configPath);
      service = service || new AetheriusDurabilityService({
        configStore,
        persistence: options.persistence,
        authorize: options.authorize,
        clock: options.clock,
        notifier: options.notifier
      });
      if (options.mp) {
        bridge = installSkyMpBridge({
          mp: options.mp,
          service,
          resolveCharacterId: options.resolveCharacterId,
          resolveEquipment: options.resolveEquipment,
          resolveKitBaseId: options.resolveKitBaseId,
          resolveActorId: options.resolveActorId,
          resolveUserId: options.resolveUserId,
          send: options.send
        });
      }
      console.log('[AetheriusDurabilitySystem] módulo autoritativo inicializado');
    },
    shutdown: async () => {
      bridge = null;
    },
    healthCheck: () => Boolean(service && configStore),
    getService: () => service,
    getBridge: () => bridge,
    getConfigStore: () => configStore
  };
}

module.exports = { createModuleDescriptor };
