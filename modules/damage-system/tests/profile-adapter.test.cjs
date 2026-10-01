const {test}=require('node:test');
const assert=require('node:assert/strict');
const {resolveCombatProfile,publishCombatProfile}=require('../dist/server/combatProfileAdapter');
const catalog=require('../server/server/config/verified-perks.json');
const state=()=>({playerId:0xff000123,unlockedPerks:['One-Handed Mastery'],allocatedHealth:30,allocatedMagicka:0,allocatedStamina:10,baseAttributes:{health:100,magicka:120,stamina:100}});
test('exact server skills, all missing skills zero and authoritative base attributes',()=>{
  const s=state(); s.localSkill=93; s.unlockedPerksData=[{strategyUsed:'FALLBACK_MOCK',resolvedFormId:123}];
  const p=resolveCombatProfile(s,{OneHanded:60},1,catalog);
  assert.equal(p.skills.OneHanded,60); assert.equal(p.skills.Block,0);
  assert.equal(Object.keys(p.skills).length,18); assert.equal(p.baseAttributes.health,130);
  assert.equal(p.perks[0].key,'Skyrim.esm:0BABE4'); assert.equal(p.perks[0].source,'CLASS');
});
test('unsupported/mocked perks fail explicitly',()=>{
  const s=state(); s.unlockedPerks=['Imaginary Perk'];
  assert.throws(()=>resolveCombatProfile(s,{},1,catalog),/audited/);
});
test('rejects invalid revision, skill and attribute boundaries',()=>{
  for(const rev of [0,-1,1.5,NaN,Infinity,Number.MAX_SAFE_INTEGER+1]) assert.throws(()=>resolveCombatProfile(state(),{},rev,catalog));
  for(const skill of [101,-1,NaN,Infinity]) assert.throws(()=>resolveCombatProfile(state(),{OneHanded:skill},1,catalog));
  assert.throws(()=>resolveCombatProfile(state(),{ClientDamage:999},1,catalog));
  const s=state(); s.allocatedHealth=-1; assert.throws(()=>resolveCombatProfile(s,{},1,catalog));
});
test('revision survives native restart/reconnect and increments only on successful publish',()=>{
  const s=state(); s.combatRevision=4; let sent;
  const api={getActorCombatProfile:()=>JSON.stringify({revision:9}),applyActorCombatProfile:(id,p)=>{assert.equal(id,s.playerId);sent=JSON.parse(p);}};
  publishCombatProfile(api,s,{OneHanded:60},catalog); assert.equal(sent.revision,10); assert.equal(s.combatRevision,10);
  api.applyActorCombatProfile=()=>{throw Error('native rejected');};
  assert.throws(()=>publishCombatProfile(api,s,{},catalog)); assert.equal(s.combatRevision,10);
});
test('class reset removes all server perks and old skills',()=>{
  const s=state(); s.unlockedPerks=[]; const p=resolveCombatProfile(s,{},2,catalog);
  assert.deepEqual(p.perks,[]); assert.equal(p.skills.OneHanded,0);
});
test('every audited mastery has an origin plugin key',()=>{
  const s=state(); s.unlockedPerks=catalog.perks.map(p=>p.name);
  const p=resolveCombatProfile(s,{},1,catalog); assert.equal(p.perks.length,6);
  for(const perk of p.perks) assert.match(perk.key,/^Skyrim\.esm:[0-9A-F]{6}$/);
});
