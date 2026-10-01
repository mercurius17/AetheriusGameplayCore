// Development only. Compile Housecarl metadata; never call this on the hit path.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const audit = path.join(root, 'docs/aetherius-combat');
const read = name => fs.readFileSync(path.join(audit,name),'utf8').trim().split(/\r?\n/).slice(1).map(JSON.parse);
const winners = read('mastery-winners.jsonl');
const rows = read('mastery-conditions.jsonl');
const key = id => { const [local,plugin] = id.split(':'); return `${plugin}:${local}`; };
const perks = rows.map(row => {
  const fields = new Map(row.fields.map(f => [f.path,f.value]));
  const winner = winners.find(w => w.formid === row.formid);
  const effects = [];
  for (let i=0;fields.has(`Effects[${i}].ActorValue`);i++) {
    const prefix = `Effects[${i}]`;
    if(fields.get(`${prefix}.Modification`) !== 'MultiplyOnePlusAVMult' || fields.get(`${prefix}.Rank`) !== '0') throw Error('unsupported effect');
    const groups = [];
    for(let g=0; fields.has(`${prefix}.Conditions[${g}].RunOnTabIndex`); g++) {
      const group = [];
      for(let c=0;fields.has(`${prefix}.Conditions[${g}].Conditions[${c}].Data.Function`); c++) {
        const p = `${prefix}.Conditions[${g}].Conditions[${c}]`;
        const f = fields.get(`${p}.Data.Function`);
        if(!['HasPerk','HasKeyword'].includes(f) || fields.get(`${p}.CompareOperator`) !== 'EqualTo' || fields.get(`${p}.Data.RunOnType`) !== 'Subject') throw Error('unsupported condition');
        const tab = Number(fields.get(`${prefix}.Conditions[${g}].RunOnTabIndex`));
        if(tab !== (f === 'HasPerk' ? 0 : 1)) throw Error('unsupported tab');
        const v = fields.get(`${p}.ComparisonValue`), flags = fields.get(`${p}.Flags`);
        if(!['0','1'].includes(v) || !['0','OR'].includes(flags)) throw Error('unsupported comparison');
        group.push({function:f,key:key(fields.get(`${p}.Data.${f==='HasPerk'?'Perk':'Keyword'}`)),expected:v==='1',orNext:flags==='OR'});
      }
      groups.push(group);
    }
    const skill = fields.get(`${prefix}.ActorValue`);
    effects.push({entryPoint:fields.get(`${prefix}.EntryPoint`),skill:skill==='Archery'?'Marksman':skill,coefficient:Number(fields.get(`${prefix}.Value`)),conditions:groups});
  }
  return {key:key(row.formid),editorId:winner.editorid,winner:row.winner,name:winner.fields.find(f=>f.path==='Name').value,effects};
});
const config = path.join(root,'server/server/config'); fs.mkdirSync(config,{recursive:true});
const pins = JSON.parse(fs.readFileSync(path.join(audit,'plugin-pins.json'),'utf8'));
fs.writeFileSync(path.join(config,'verified-perks.json'),JSON.stringify({schemaVersion:1,auditEpoch:'e2-d180c51adf12773b',pluginPins:pins,perks},null,2)+'\n');
console.log(`Compiled ${perks.length} audited perks (${perks.reduce((n,p)=>n+p.effects.length,0)} effects).`);
