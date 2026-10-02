import json,pathlib,re,collections,gzip,hashlib
import argparse
parser=argparse.ArgumentParser(description='Generate Markdown catalogs from read-only Housecarl exports')
parser.add_argument('--input-dir',type=pathlib.Path,required=True)
parser.add_argument('--repo-root',type=pathlib.Path,required=True)
a=parser.parse_args();B=a.input_dir;R=a.repo_root
O=R/'docs/mechanics'; O.mkdir(exist_ok=True)
def rows(p):
 with p.open(encoding='utf-8-sig') as f:
  for l in f:
   r=json.loads(l)
   if 'formid' in r: yield r
def fm(r):return {x['path']:x.get('value',x.get('note','')) for x in r['fields']}
def clean(r):
 r=dict(r);r['fields']=[x for x in r['fields'] if '(no field ' not in x.get('note','')];return r
expanded=collections.defaultdict(list); bad=[]
for p in sorted((B/'perk-expansions').glob('*.jsonl')):
 for r in rows(p):
  expanded[r['formid']]+=r['fields']
  bad += [(p.name,x) for x in r['fields'] if 'truncat' in x.get('note','').lower()]
assert not bad,bad
metadata={r['formid']:r for r in rows(B/'perk-metadata.jsonl')}
records={r['formid']:clean(r) for r in rows(B/'magic-perk-definitions.jsonl')}
for r in rows(B/'spell-extra.jsonl'):
 if r['formid'] in records:
  orig=records[r['formid']];d={x['path']:x for x in orig['fields']};d.update({x['path']:x for x in clean(r)['fields']});orig['fields']=list(d.values())
for k,v in expanded.items():
 orig=records[k];root=next(x for x in orig['fields'] if x['path']=='Effects');n=int(re.search(r'\d+',root['note']).group())
 assert {int(re.match(r'Effects\[(\d+)\]$',x['path']).group(1)) for x in v if re.match(r'Effects\[\d+\]$',x['path'])}==set(range(n)),k
 orig['fields']=[root]+v
for k,m in metadata.items():records[k]['fields']+=m['fields']
perks=sorted((r for r in records.values() if r['type']=='Perk'),key=lambda r:(r['source'].lower(),r.get('editorid','').lower(),r['formid']))
assert len(perks)==1493
entry=collections.Counter();conditions=collections.Counter()
for r in perks:
 for x in r['fields']:
  if x['path'].endswith('.EntryPoint'):entry[x['value']]+=1
  if x['path'].endswith('.Data.Function'):conditions[x['value']]+=1
print(json.dumps({'perks':len(perks),'expanded':len(expanded),'entrypoints':dict(entry),'conditions':len(conditions),'remaining_perk_truncations':[(r['formid'],x) for r in perks for x in r['fields'] if 'truncat' in x.get('note','').lower()]},ensure_ascii=False))

def esc(s):return str(s).replace('|','\\|').replace('\n','<br>').replace('\r','')
def anchor(k):return 'r-'+hashlib.sha256(k.encode()).hexdigest()[:12]
links={}
for i,r in enumerate(perks):links[r['formid']]=f'perks/PERKS_{i//25+1:03d}.md#{anchor(r["formid"])}'
refpat=re.compile(r'^[0-9A-Fa-f]{6,8}:[^:]+\.(?:esm|esp|esl)$',re.I)
def refs(r):
 return {str(x.get('value',x.get('note_ref',''))) for x in r['fields'] if refpat.match(str(x.get('value',x.get('note_ref',''))))}
reachable=set();queue=list(perks)
while queue:
 for k in refs(queue.pop()):
  if k in records and k not in reachable and records[k]['type']!='Perk':reachable.add(k);queue.append(records[k])
magic=sorted([records[k] for k in reachable],key=lambda r:(r['type'],r['formid']))
for i,r in enumerate(magic):links[r['formid']]=f'magic/MAGIC_{i//25+1:03d}.md#{anchor(r["formid"])}'
def link(k,prefix=''):
 return f'[`{esc(k)}`]({prefix}{links[k]})' if k in links else f'`{esc(k)}`'
def val(v,prefix='../'):return link(v,prefix) if v in links else esc(v)
def write(p,s):p.parent.mkdir(parents=True,exist_ok=True);p.write_text(s,encoding='utf-8',newline='\n')
def useful(x):
 p=x['path'];n=x.get('note','')
 return not any(t in p for t in ['Unused','Unknown','Parameter1Type','Parameter2Type']) and n not in ['(absent)','(null link)'] and not (p.endswith('.Index') and 'Parameter' in p)
def conditions_md(fields):
 d={x['path']:x.get('value',x.get('note','')) for x in fields};out=[]
 for p,fn in d.items():
  if not p.endswith('.Data.Function'):continue
  root=p[:-len('.Data.Function')];dat=root+'.Data.'
  parent=root.rsplit('.Conditions[',1)[0]
  params=[]
  for k,v in d.items():
   if not k.startswith(dat):continue
   tail=k[len(dat):]
   if tail in ['Function','RunOnType','RunOnTypeIndex','UseAliases','UsePackageData','Reference'] or any(x in tail for x in ['Unused','Parameter1Type','Parameter2Type']):continue
   if tail.endswith('.Index') or str(v).startswith('[') or v in ['(absent)','(null link)']:continue
   params.append(f'{tail}={val(v)}')
  out.append('|'+ '|'.join([f'`{esc(root)}`',esc(fn),esc(d.get(parent+'.RunOnTabIndex','record')),esc(d.get(dat+'RunOnType','—'))+'; ref='+val(d.get(dat+'Reference','—'))+'; index='+esc(d.get(dat+'RunOnTypeIndex','—')),esc(d.get(root+'.CompareOperator','—'))+' '+val(d.get(root+'.ComparisonValue',d.get(root+'.ComparisonGlobal','—'))),esc(d.get(root+'.Flags','—')), '<br>'.join(params) or '—', 'aliases='+esc(d.get(dat+'UseAliases','—'))+'; package='+esc(d.get(dat+'UsePackageData','—'))])+'|')
 return ('\n|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|\n|---|---|---|---|---|---|---|---|\n'+'\n'.join(out)+'\n') if out else '\nNenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.\n'
interpret={
 'PerkAbilityEffect':'Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.',
 'PerkEntryPointModifyActorValue':'Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.',
 'PerkEntryPointModifyValue':'Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.',
 'PerkEntryPointSelectSpell':'Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.',
 'PerkEntryPointModifyValues':'Opera com mais de um valor. Preservar Value e Value2 e validar a função no runtime antes de converter para uma fórmula.',
 'PerkQuestEffect':'Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.',
 'PerkEntryPointAddActivateChoice':'Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.',
 'PerkEntryPointSetText':'Altera texto associado ao entry point; separar apresentação de qualquer transação ou ativação resultante.',
 'PerkEntryPointSelectText':'Seleciona texto no entry point; não concede autoridade para executar a ação que a interface mostra.',
 'PerkEntryPointAddLeveledItem':'Acrescenta item via lista nivelada; sorteio, propriedade e entrega precisam de uma única transação autoritativa.',
 'PerkEntryPointAddRangeToValue':'Modifica um intervalo do entry point; exige interpretação dos dois limites e fixture de runtime.',
 'PerkEntryPointAbsoluteValue':'Aplica uma operação especial ao valor do entry point; não converter por suposição para soma ou multiplicação.'}
for group,rs in [('perks',perks),('magic',magic)]:
 for start in range(0,len(rs),25):
  batch=rs[start:start+25];p=O/group/f'{group.upper()}_{start//25+1:03d}.md'
  out=[f'# {"Perks instaladas" if group=="perks" else "Cadeias mágicas referenciadas"} — parte {start//25+1:03d}\n\n[Índice](../{"PERK_INDEX.md" if group=="perks" else "MAGIC_INDEX.md"}) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)\n\nFatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.\n']
  for r in batch:
   d=fm(r);k=r['formid'];out+=[f'\n<a id="{anchor(k)}"></a>\n\n## {esc(r.get("editorid") or k)}\n\n- Identidade estável Housecarl: `{k}`.\n- Tipo: `{r["type"]}`; winner: `{r["winner"]}`; profundidade de override: {r["override_depth"]}.\n']
   if group=='perks':
    out+=['- Nome: '+esc(d.get('Name','sem nome'))+'; ranks declarados: '+esc(d.get('NumRanks','ausente'))+'; NextPerk: '+val(d.get('NextPerk','ausente'))+'.\n','- Metadados: '+', '.join(f'{f}={d.get(f,"ausente")}' for f in ['Level','Playable','Hidden','Trait','IsDeleted'])+'.\n']
    effects=[x for x in r['fields'] if re.match(r'Effects\[\d+\]$',x['path'])]
    out+=['\n### Funcionamento dos efeitos observados\n\n']
    if not effects:out+=['Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.\n']
    for x in effects:
     root=x['path'];kind=x.get('note','').split(']')[0].lstrip('[')
     bits=[f'{f}={val(d[root+"."+f])}' for f in ['EntryPoint','Modification','ActorValue','Value','Value2','Ability','Spell','Quest','Stage','Rank','Priority','PerkConditionTabCount'] if root+'.'+f in d]
     out += [f'- **{root} — {kind}**: '+ '; '.join(bits)+'. '+interpret.get(kind,'Variante sem tradução automática: os campos abaixo são a evidência, e sua semântica exige fixture específica.')+'\n']
    out+=['\n**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).\n']
   out+=['\n### Conditions completas extraídas\n',conditions_md(r['fields']),'\n### Campos operacionais adicionais\n\n|Caminho|Valor observado|\n|---|---|\n']
   for x in r['fields']:
    if not useful(x) or '.Conditions[' in x['path'] or x['path'].startswith('Conditions['):continue
    out += [f'|`{esc(x["path"])}`|{val(x.get("value",x.get("note","")))}|\n']
   trunc=[x for x in r['fields'] if 'truncat' in x.get('note','').lower()]
   if trunc:out+=['\n**EXTRAÇÃO PARCIAL:** '+esc(str(trunc))+'\n']
  write(p,''.join(out))
for title,rs,name in [('Índice das perks instaladas',perks,'PERK_INDEX.md'),('Índice das cadeias mágicas ligadas às perks',magic,'MAGIC_INDEX.md')]:
 out=[f'# {title}\n\n{len(rs)} records, snapshot `e2-ad3c01c2aa184e91`. [Guia](README.md). Busca por EditorID, nome ou chave estável. Nomes são rótulos; a identidade é o par master original + local ID.\n\n|Record|EditorID / nome|Tipo|Winner|\n|---|---|---|---|\n']
 for r in rs:out += [f'|{link(r["formid"])}|{esc(r.get("editorid",""))} / {esc(fm(r).get("Name",""))}|{r["type"]}|{esc(r["winner"])}|\n']
 write(O/name,''.join(out))
v=json.loads((R/'modules/class-system/config/verified-perks.json').read_text())
verified={x['name']:x for x in v['perks']}
mapping=json.loads((R/'modules/class-system/config/perk-mappings.json').read_text(encoding='utf-8-sig'))
classes=json.loads((R/'modules/class-system/config/classes-config.json').read_text(encoding='utf-8-sig'))
byname=collections.defaultdict(list);byeditor=collections.defaultdict(list)
for r in perks:
 byname[str(fm(r).get('Name','')).casefold()].append(r['formid']);byeditor[str(r.get('editorid','')).casefold()].append(r['formid'])
resolved={};statuses=collections.Counter();mapout=['# Rastreabilidade de todas as perks das classes\n\nOs IDs `0x000000` são placeholders. Igualdade de nome/alias fornece candidatos, nunca prova semântica. As seis entradas do manifesto histórico precisam de revalidação no snapshot atual antes de produção. `Rank` textual da classe não é convertido automaticamente no índice de Effects.\n\n|Nome configurado|ID configurado|Classificação|Chave / candidatos observados|\n|---|---|---|---|\n']
for name,m in mapping.items():
 cand=set();state='SEM CORRESPONDÊNCIA EXATA'
 if name in verified:
  master,local=verified[name]['key'].rsplit(':',1);cand={local+':'+master};state='MANIFESTO VERIFICADO HISTÓRICO'
 else:
  for alias in m.get('editorIdAliases',[]):cand.update(byeditor[alias.casefold()])
  if cand:state='CANDIDATO POR EDITORID'
  else:
   cand.update(byname[name.casefold()])
   if not cand:cand.update(byname[re.sub(r'\s*\(\d+\)$','',name).casefold()])
   if cand:state='CANDIDATO POR NOME — VALIDAR RANK/SEMÂNTICA'
 statuses[state]+=1;resolved[name]=(state,sorted(cand))
 mapout += [f'|{esc(name)}|`{m.get("localId","ausente")}`|{state}|'+('<br>'.join(link(k) for k in sorted(cand)) or 'pendente')+'|\n']
write(O/'CLASS_PERK_MAPPING.md',''.join(mapout))
out=['# Todas as classes, estágios e concessões\n\nTranscrição dos campos operacionais de `modules/class-system/config/classes-config.json`. Não representa liberação dos efeitos no servidor. A elegibilidade usa nível de personagem; os patamares de skills e o tratamento de “Todas” são discutidos em [progressão](06_CLASSES_PROGRESSAO.md). Perks são nomes de configuração e devem atravessar a [matriz de identidade](CLASS_PERK_MAPPING.md).\n']
occ=0
for key,c in classes.items():
 out+=[f'\n## {esc(c.get("name",key))}\n\nChave `{key}`; arquétipo `{c.get("archetype","—")}`; exige estudante de Winterhold: `{c.get("requiresWinterholdStudent",False)}`.\n\n|Estágio|Nível|Skills (texto exato)|Pontos de atributo do estágio|Perks e ligação observada|\n|---|---|---|---|---|\n']
 for s in c['stages']:
  plist=[]
  for name in s.get('perks',[]):
   occ+=1;state,cand=resolved.get(name,('NÃO MAPEADO',[]));plist.append(esc(name)+' — '+state+(': '+', '.join(link(k) for k in cand) if cand else ''))
  out += [f'|{s.get("stageNumber","—")}|{s["level"]}|{esc(s.get("skills",""))}|{s.get("attributePoints","—")}|'+ '<br>'.join(plist)+'|\n']
write(O/'CLASS_STAGES.md',''.join(out))
stats={'epoch':'e2-ad3c01c2aa184e91','perks':len(perks),'expandedPerks':sorted(expanded),'expansionQueries':len(list((B/'perk-expansions').glob('*.jsonl'))),'entryPoints':dict(entry),'perkConditionFunctions':dict(conditions),'linkedMagicRecords':len(magic),'classes':len(classes),'stagePerkOccurrences':occ,'mappingEntries':len(mapping),'mappingZeroIds':sum(int(m.get('localId','0'),16)==0 for m in mapping.values()),'mappingStatuses':dict(statuses),'linkedMagicTruncated':[r['formid'] for r in magic if any('truncat' in x.get('note','').lower() for x in r['fields'])]}
write(O/'coverage.json',json.dumps(stats,ensure_ascii=False,indent=2)+'\n')
with gzip.open(O/'perk-facts.jsonl.gz','wt',encoding='utf-8') as f:
 for r in perks:f.write(json.dumps(r,ensure_ascii=False,separators=(',',':'))+'\n')
print(json.dumps({k:v for k,v in stats.items() if k not in ['entryPoints','perkConditionFunctions']},ensure_ascii=False))

# The contract descriptions below are planned responsibilities, not a claim that
# the engine or the imported server already implements every entry point.
contracts={
'ModSpellDuration':('Duração da magia no emissor','cast, spell e skill/perks do caster','buff de duração muda expiry uma vez; repetir castId não estende de novo'),
'ModSpellCost':('Custo de conjuração','spell, mão, modo de cast, Magicka e perks','custo reduzido debitado uma vez; concentração interrompe ao faltar recurso'),
'ModIngredientsHarvested':('Quantidade obtida em colheita','ativação, planta instanciada, inventário e cooldown','dois jogadores colhendo a mesma planta não recebem duplicação indevida'),
'ModBuyPrices':('Preço de compra','vendedor, comprador, item, relação e economia','preço mostrado e débito confirmado usam a mesma revisão'),
'ModSellPrices':('Preço de venda','comprador/vendedor, quantidade e estado do item','venda concorrente da mesma instância confirma uma vez'),
'ModPowerAttackStamina':('Custo de stamina do power attack','tipo autorizado de ataque e recurso','packet falso de ataque comum não aciona custo/bonus de power attack'),
'ModIncomingSpellMagnitude':('Magnitude recebida pelo alvo','vítima, spell, MGEF e conditions de recepção','trocar apenas a vítima altera somente o componente elegível'),
'ModIncomingDamage':('Dano recebido','vítima, tipo de evento e componentes','redução entra uma vez e não se repete no nativo e no core'),
'ModSneakAttackMult':('Multiplicador de ataque furtivo','detecção/awareness da vítima e evento','observadores diferentes não concedem críticos furtivos extras'),
'ModSpellMagnitude':('Magnitude produzida pelo caster','spell/effect, skills e perks','magnitude capturada/live segue a política e não muda com UI local'),
'ModFallingDamage':('Dano de queda','queda e contato autorizados pelo host','repetição do evento de pouso não aplica outro dano'),
'ModAttackDamage':('Dano na etapa de ataque','arma, atacante, tipo de ataque e operação exata','distinguir Multiply1.1 de1+coeficiente×skill'),
'ApplyCombatHitSpell':('Proc de spell ao atingir','hit confirmado, source effect e vítima','duas mensagens do mesmo hit geram um proc por alvo autorizado'),
'ModAlchemyEffectiveness':('Potência do resultado alquímico','receita, skill, perks e efeitos válidos','a mesma receita gera o resultado previsto e consome ingredientes uma vez'),
'ModPercentBlocked':('Fração de dano bloqueada','defensor e janela/orientação de block','cap aplicado depois do fator; ataque por trás não ganha block indevido'),
'ModLockpickSweetSpot':('Janela de sucesso do lockpick','fechadura, tentativa e perks','cliente não declara abertura só porque ampliou a janela visual'),
'ModPickpocketChance':('Chance de furto','alvo, item, detecção e tentativa','RNG único e transferência atômica sem reroll por retry'),
'ModDetectionSneakSkill':('Skill usada na detecção furtiva','ator percebido e observador','dois observadores mantêm percepções independentes'),
'ModTemperingHealth':('Resultado de tempering do item','instância, receita, skill e material','upgrade não multiplica toda arma da mesma base nem duplica material'),
'ModEnchantmentPower':('Potência do encantamento criado','receita, alma, perks e item','resultado pinado e transação de criação consistente'),
'ModSkillUse':('Progresso nativo por uso de skill','evento elegível e política de ownership de skills','não conceder XP nativo e de classe em duplicidade acidental'),
'ModPotionsCreated':('Quantidade de poções produzidas','receita, custo e resultado','quantidade extra não implica debitar/entregar duas vezes no retry'),
'ApplyWeaponSwingSpell':('Proc ao balançar arma','swing autorizado e alvo/contexto da entrada','miss pode diferir de hit; não reaplicar o mesmo proc também no hit sem regra'),
'Activate':('Interação de ativação','objeto, opção, alcance e permissão','dois usuários ativam com exclusão/transação adequada'),
'AddLeveledListOnDeath':('Inclusão de loot nivelado na morte','death proof, lista, nível e RNG','respawn novo pode gerar loot; mesmo deathId não pode gerar novamente'),
'ApplyBashingSpell':('Proc de spell em bash','bash autorizado, origem e vítima','ataque normal com mesmo alvo não ativa o proc'),
'ModPoisonDoseCount':('Número de doses de veneno','item instanciado, veneno e uso','duas armas iguais mantêm contadores separados'),
'ModArmorRating':('Rating de armadura','peça, material/keywords, skill e defensor','somente peças elegíveis recebem fator; desequipar remove a contribuição correta'),
'CalculateMyCriticalHitChance':('Chance crítica do atacante','ataque, caster/target tabs e RNG','chance100condicional não vira crítico permanente fora do gate'),
'ModCommandedActorLimit':('Limite de entidades comandadas','dono, summons/reanimações e lifetime','reconnect/migração não reinicia contador permitindo summons extras'),
'ShouldApplyPlacedItem':('Gate de efeito associado a item colocado','objeto colocado, alvo e evento de aplicação','fixture de entrada valida o significado antes de permitir side effect'),
'ModBashingDamage':('Dano de bash','shield/weapon, atacante e vítima','fator de bash não se aplica a todos os ataques'),
'GetMaxCarryWeight':('Limite de carga','ator e grants/equipamento efetivos','revogar uma fonte preserva outra e recalcula encumbrance'),
'FilterActivation':('Filtro de opções de ativação','ator, objeto, escolha e permissões','opção escondida na UI continua recusada no servidor se enviada manualmente'),
'ModPlayerIntimidation':('Resultado/modificador de intimidação','diálogo, speaker, target e quest','diálogo pessoal não altera quest global de outro jogador'),
'ModIncomingSpellDuration':('Duração recebida pelo alvo','vítima, spell/effect e resistências/conditions','duração do alvoA não é reutilizada para alvoB'),
'ModRecoverArrowChance':('Chance de recuperar flecha','projétil, hit/loot e RNG','flecha recuperada pertence a uma única entrega'),
'ModTargetDamageResistance':('Modificação da defesa do alvo no ataque','vítima, ataque e regra de penetração','não gravar redução temporária como debuff permanente de armor'),
'ModShoutOk':('Permissão contextual de shout','ator, shout e estado autorizado','cliente não burla gate enviando apenas evento visual'),
'SetActivateLabel':('Texto da ação de ativação','objeto/opção e localização','mudar texto não muda a permissão/efeito econômico'),
'ApplyReanimateSpell':('Proc associado à reanimação','cadáver, novo actor generation e owner','reanimação repetida não cria vários atores do mesmo cadáver'),
'ModSpellRange':('Alcance da magia','cast, delivery e transforms','fronteira de alcance e world instance são validadas pelo host'),
'AllowMountActor':('Permissão de montar ator','montaria, usuário e estado de ocupação','dois jogadores não adquirem o mesmo assento simultaneamente'),
'ModIncomingStagger':('Stagger recebido','defensor, evento, resistência e movimento','imunidade/escala é consistente para vítima e observadores'),
'ModTargetStagger':('Stagger aplicado ao alvo','ataque, alvo e tipo de impacto','dano zero não implica automaticamente stagger zero ou permitido; testar política'),
'ModSpellCastingSoundEvent':('Evento sonoro da conjuração','cast e observadores','um cast gera uma apresentação por observador, sem aplicar gameplay novamente'),
'48':('Enum numérico sem nome resolvido','schema/engine e fixture específicos','bloquear compilação até identificar semântica; não adivinhar por proximidade numérica'),
'ModDetectionLight':('Contribuição de luz à detecção','observador, alvo, iluminação e host','luz renderizada pelo cliente não fornece sozinha autoridade de stealth'),
'SetBooleanGraphVariable':('Variável booleana do grafo de animação','ator/grafo, evento e lifecycle','variável visual não é prova autoritativa de hit/power attack'),
'CalculateMyCriticalHitDamage':('Componente de dano crítico','arma criticalBase e perks do atacante','não multiplicar o dano inteiro quando o contrato usa componente aditivo'),
'ModPowerAttackDamage':('Dano de power attack','tipo autorizado, arma e vítima','restrição removida no patch só altera o gate correspondente'),
'SetSweepAttack':('Habilitação/seleção de sweep','geometria autorizada e conjunto de vítimas','cada vítima é validada e atingida uma vez por swing'),
'ModTelekinesisDamage':('Dano de objeto lançado por telecinese','objeto, owner, lançamento e contato','host novo não repete impacto de objeto antigo'),
'CalculateWeaponDamage':('Base/etapa de dano da arma','arma, keywords, skill e atacante','trocar arma invalida o provider e suas conditions'),
'ModArmorWeight':('Peso efetivo da armadura','itens equipados, inventário e perks','não alterar peso base global para outros jogadores'),
'ApplySneakingSpell':('Proc de spell associado a sneaking','transição/estado validado e spell','tick visual de crouch não cria instância ilimitada'),
'MakeLockpicksUnbreakable':('Quebra de lockpick','tentativa, resultado e inventário','falha preserva lockpick só sob conditions válidas'),
'ModWardMagickaAbsorptionPct':('Absorção de Magicka por ward','ward ativo, spell recebida e recurso','absorção/ganho não é creditado novamente por observador'),
'ModInitialIngredientEffectsLearned':('Conhecimento inicial de effects do ingrediente','personagem, ingrediente e ação de descoberta','aprender efeito é persistente e não concede item extra'),
'PurifyAlchemyIngredients':('Seleção/filtragem de efeitos alquímicos','ingredientes, recipe e efeito benéfico/nocivo','produto remove somente effects previstos pelo contrato certificado'),
'CanDualCastSpell':('Permissão de dual cast','duas mãos, spell, perk e contexto','duas intenções de cast independentes não viram dual cast grátis'),
'ModBowZoom':('Zoom de mira','equipamento e input/apresentação','zoom não aumenta alcance/dano autoritativo por acidente'),
'ModShieldDefectArrowChance':('Chance de deflexão de projétil pelo shield','trajetória/contato, block e RNG','defletir e aplicar dano não ocorrem ambos por owners diferentes'),
'ModSoulGemRecharge':('Recarga com gema','instância de arma, gema e carga','retry não consome outra gema nem ultrapassa limite'),
'ModSoulPercentCapturedToWeapon':('Fração de alma capturada para arma','death proof, arma elegível e charge','uma alma não credita múltiplas capturas do mesmo evento'),
'ModSoulGemEnchanting':('Contribuição da gema ao encantamento','receita, alma e item','troca de gema após preview exige nova revisão de receita'),
'ModNumAppliedEnchantmentsAllowed':('Limite de enchantments por item','receita, item e perks','UI não envia terceiro enchant acima do limite autorizado'),
'ModLockpickingCrimeChance':('Chance de crime no lockpicking','tentativa, propriedade, testemunhas e RNG','crime tem escopo correto e não depende só da câmera local'),
'ModLockpickingKeyRewardChance':('Chance de recompensa de chave','fechadura, tentativa e inventário','uma abertura não cria chave a cada reconexão'),
'SetLockpickStartingArc':('Posição inicial do lockpick','minigame e tentativa','restart de UI não rerolla vantagem ilimitada'),
'CanPickpocketEquippedItem':('Permissão de furtar item equipado','alvo, slot, item e permissão PvP/NPC','remoção/transação não duplica nem deixa equipment fantasma'),
}
assert set(contracts)==set(entry),(set(entry)-set(contracts),set(contracts)-set(entry))
eprefs=collections.defaultdict(list);fnrefs=collections.defaultdict(list)
for r in perks:
 for x in r['fields']:
  if x['path'].endswith('.EntryPoint') and r['formid'] not in eprefs[x['value']]:eprefs[x['value']].append(r['formid'])
  if x['path'].endswith('.Data.Function') and r['formid'] not in fnrefs[x['value']]:fnrefs[x['value']].append(r['formid'])
out=['# Entry points: contrato de cada entrada observada\n\n71 valores distintos no snapshot ampliado. As descrições abaixo são a interpretação operacional e o contrato **proposto** para certificação; não atestam que todos os entry points estejam implementados no engine servidor. Operation, valor, conditions e abas reais estão nas fichas ligadas. Para o enum48a semântica permanece desconhecida.\n\nO registry atual aceita cinco nomes, mas somente o formato reduzido das seis masteries históricas. Nenhuma outra entrada recebe suporte por semelhança de nome. Para cada linha: extrair → resolver contexto → definir owner → implementar operação exata → testar caso positivo/negativo/duplicata → homologar dois clientes.\n']
supported={'CalculateWeaponDamage','ModAttackDamage','CalculateMyCriticalHitDamage','ModArmorRating','ModPercentBlocked'}
for name,n in sorted(entry.items()):
 meaning,ctx,test=contracts[name]
 out += [f'\n## {name}\n\n- Ocorrências de effect: {n}; perks distintas: {len(eprefs[name])}.\n- Papel a validar: {meaning}.\n- Contexto mínimo: {ctx}.\n- Estado no registry: '+('nome aceito no subconjunto de mastery; operações arbitrárias continuam sem suporte.' if name in supported else 'fora do registry reduzido; requer handler/port e homologação.')+f'\n- Teste específico: {test}. Adicionar condição falsa, contexto ausente, concorrência e reconnect.\n- Fichas: '+', '.join(link(k) for k in eprefs[name])+'.\n']
write(O/'ENTRY_POINTS.md',''.join(out))
out=['# Funções CTDA efetivamente encontradas nas perks\n\n83funções no conjunto ampliado de1.493PERKs. Contagens são occurrences de CTDA, não número de atores nem prova de suporte. As fichas contêm parâmetros, comparações, abas, flags e RunOn de cada occurrence. [Método de avaliação](03_CONDITIONS_CONTEXTO.md).\n\nSomente HasPerk/HasKeyword existem no registry reduzido de mastery. Para as demais funções, handler na base e suporte end-to-end são perguntas separadas; consultar também o [inventário geral](../audit/2026-10-02/CONDITION_SUPPORT.md).\n']
for fn,n in sorted(conditions.items()):
 out += [f'\n## {fn}\n\n{n} occurrences em {len(fnrefs[fn])} perks. Estado: '+('subconjunto booleano disponível; abas/contextos gerais ainda exigem validação.' if fn in ['HasPerk','HasKeyword'] else 'não implementada no PerkRegistry reduzido; contexto e handler específicos necessários.')+'\n\nFichas com todos os parâmetros observados: '+', '.join(link(k) for k in fnrefs[fn])+'.\n']
write(O/'PERK_CONDITIONS.md',''.join(out))
