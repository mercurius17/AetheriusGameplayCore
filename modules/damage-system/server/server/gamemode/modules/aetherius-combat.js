'use strict';
// Lifecycle only. Native OnHit remains the combat authority.
function register(moduleRegistry, mp) {
  let active=false;
  moduleRegistry.register({
    id:'aetherius-combat', enabledBy:'ENABLE_AETHERIUS_COMBAT',phase:'lab',
    dependencies:[],commands:[],actions:[],
    initialize() {
      const settings=mp.getServerSettings().aetheriusCombatSettings;
      if(!settings || settings.mode!=='aetherius' || !settings.enabled)
        throw new Error('Aetherius lifecycle enabled but native combat settings disabled');
      if(typeof mp.applyActorCombatProfile!=='function' || typeof mp.getActorCombatProfile!=='function')
        throw new Error('Native CombatProfile API missing');
      active=true;
    },
    shutdown(){active=false;},
    healthCheck(){return active;}
  });
}
module.exports={register};
