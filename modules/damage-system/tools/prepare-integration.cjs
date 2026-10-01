const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');
const base=path.join(root,'.reference/Base_Aetherius_SkyMP');
const cls=path.join(root,'.reference/AetheriusClassSystem');
const command=(repo,args)=>execFileSync('git',['-C',repo,...args],{encoding:'utf8'});
for(const [repo,sha] of [[base,'e1c483346447c29972cabf28b17eb5febc91bd04'],[cls,'c9d811f10524c27648db552f6185433df917f67d']])
  if(command(repo,['rev-parse','HEAD']).trim()!==sha) throw Error('Integration reference HEAD changed; review/adapt patches');
// All destinations are confined to the cloned references under this repository.
fs.cpSync(path.join(root,'server/server/cpp/server_guest_lib/aetherius_combat'),path.join(base,'server/server/cpp/server_guest_lib/aetherius_combat'),{recursive:true});
fs.cpSync(path.join(root,'server/server/gamemode/modules'),path.join(base,'server/server/gamemode/modules'),{recursive:true});
fs.copyFileSync(path.join(root,'integration-tests/LegacyDamageGoldenTest.cpp'),path.join(base,'server/unit/LegacyDamageGoldenTest.cpp'));
fs.copyFileSync(path.join(root,'class-system/server/combatProfileAdapter.ts'),path.join(cls,'server/combatProfileAdapter.ts'));
fs.copyFileSync(path.join(root,'server/server/config/verified-perks.json'),path.join(cls,'config/verified-perks.json'));
const mappings=JSON.parse(fs.readFileSync(path.join(cls,'config/perk-mappings.json'),'utf8'));
const catalog=JSON.parse(fs.readFileSync(path.join(root,'server/server/config/verified-perks.json'),'utf8'));
for(const perk of catalog.perks) {
  const [plugin,local]=perk.key.split(':');
  mappings[perk.name]={name:perk.name,localId:'0x'+local,candidatePlugins:[plugin],editorIdAliases:[perk.editorId]};
}
fs.writeFileSync(path.join(cls,'config/perk-mappings.json'),JSON.stringify(mappings,null,2)+'\n');
const baseFiles=['server/server/cpp/addon/ScampServer.h','server/server/cpp/addon/ScampServer.cpp',
  'server/server/cpp/server_guest_lib/MpActor.h','server/server/cpp/server_guest_lib/MpActor.cpp',
  'server/server/cpp/server_guest_lib/MpChangeForms.h','server/server/cpp/server_guest_lib/MpChangeForms.cpp',
  'server/server/cpp/server_guest_lib/WorldState.h','server/server/cpp/server_guest_lib/ActionListener.cpp',
  'server/server/ts/scampNative.ts','server/server/gamemode/phase0-basic.js'];
const classFiles=['shared/types.ts','shared/perkResolver.ts','client/clientPerkApplier.ts','server/storage/playerRepository.ts',
  'config/perk-mappings.json','tests/classes.test.ts','tests/perkResolver.test.ts'];
fs.mkdirSync(path.join(root,'integration'),{recursive:true});
for(const [repo,files,name] of [[base,baseFiles,'base-aetherius.patch'],[cls,classFiles,'class-system.patch']]) {
  const diff=command(repo,['diff','--no-ext-diff','--binary','--',...files]);
  if(!diff) throw Error('No integration changes: apply the saved patch to the internal reference first');
  fs.writeFileSync(path.join(root,'integration',name),diff);
  command(repo,['apply','--reverse','--check','--whitespace=error',path.join(root,'integration',name)]);
  console.log(`Verified ${name} (${files.length} files selected).`);
}
// Preserve new tests as overlays; they are not in git diff of tracked reference files.
fs.mkdirSync(path.join(root,'class-system/tests'),{recursive:true});
fs.copyFileSync(path.join(cls,'tests/combatProfile.test.ts'),path.join(root,'class-system/tests/combatProfile.test.ts'));
console.log('Internal overlays synchronized. No external repository modified.');
