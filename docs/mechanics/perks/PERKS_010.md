# Perks instaladas — parte 010

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-695ef17dcb59"></a>

## GRIM_PERK_ALT_MagicBarrier

- Identidade estável Housecarl: `10DC78:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Set; Value=0; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Set; Value=0; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Set; Value=9999; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=1364C5:LostGrimoire.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=14FA41:LostGrimoire.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=17F246:LostGrimoire.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=17F247:LostGrimoire.esp|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=1091CF:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=024823:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=024829:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=02482A:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=02482B:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Set|
|`Effects[1].Value`|0|
|`Effects[1].EntryPoint`|ModIncomingDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Set|
|`Effects[2].Value`|9999|
|`Effects[2].EntryPoint`|ModSpellCost|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-aee98b1506a9"></a>

## GRIM_PERK_ALT_PolymorphBlockActivation

- Identidade estável Housecarl: `084F53:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: Activation Blocker; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=FilterActivation; Modification=Add; Value=1; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=084F54:LostGrimoire.esp|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=100769:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=2B434D:LostGrimoire.esp|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|IsUnlockedDoor|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|1|
|`Effects[0].EntryPoint`|FilterActivation|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Activation Blocker|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-93b7c7926e40"></a>

## GRIM_PERK_CON_BoundCrown

- Identidade estável Housecarl: `0C6D19:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormList=0C6D18:LostGrimoire.esp|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0C6D27:LostGrimoire.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.5|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.5|
|`Effects[1].EntryPoint`|ModSpellMagnitude|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-830d4aaabd78"></a>

## GRIM_PERK_CON_BoundShield

- Identidade estável Housecarl: `0106C0:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyBashingSpell; Spell=[`0106BF:LostGrimoire.esp`](../magic/MAGIC_038.md#r-0b25150896ac); Rank=0; Priority=0; PerkConditionTabCount=2. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetEquipped|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|ItemOrList=0106B6:LostGrimoire.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetEquipped|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|ItemOrList=0106B8:LostGrimoire.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=0106BF:LostGrimoire.esp|
|`Effects[0].Spell`|[`0106BF:LostGrimoire.esp`](../magic/MAGIC_038.md#r-0b25150896ac)|
|`Effects[0].EntryPoint`|ApplyBashingSpell|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-6eb30ef28941"></a>

## GRIM_PERK_CON_BoundStaff

- Identidade estável Housecarl: `0CBE30:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellMagnitude; Modification=MultiplyOnePlusAVMult; ActorValue=Conjuration; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0C6D27:LostGrimoire.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Conjuration|
|`Effects[0].Value`|0.01|
|`Effects[0].Modification`|MultiplyOnePlusAVMult|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-1560189ada96"></a>

## GRIM_PERK_CON_DremoraBerserkerAb

- Identidade estável Housecarl: `0DB167:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.1; Rank=0; Priority=9; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.2; Rank=0; Priority=8; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.3; Rank=0; Priority=7; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.4; Rank=0; Priority=6; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.5; Rank=0; Priority=5; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[5] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.6; Rank=0; Priority=4; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.7; Rank=0; Priority=3; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.8; Rank=0; Priority=2; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[8] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.9; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[9] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThan 1|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.9|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThan 0.9|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.8|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThan 0.8|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.7|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThan 0.7|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.6|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThan 0.6|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.5|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThan 0.5|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.4|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThan 0.4|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.3|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThan 0.3|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.2|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThan 0.2|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.1|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThan 0.1|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 10 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.1|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|9|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.2|
|`Effects[1].EntryPoint`|ModAttackDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|8|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|1.3|
|`Effects[2].EntryPoint`|ModAttackDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|7|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|1.4|
|`Effects[3].EntryPoint`|ModAttackDamage|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|6|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Multiply|
|`Effects[4].Value`|1.5|
|`Effects[4].EntryPoint`|ModAttackDamage|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|5|
|`Effects[4].Conditions`|[list: 1 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointModifyValue]|
|`Effects[5].Modification`|Multiply|
|`Effects[5].Value`|1.6|
|`Effects[5].EntryPoint`|ModAttackDamage|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|4|
|`Effects[5].Conditions`|[list: 1 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Multiply|
|`Effects[6].Value`|1.7|
|`Effects[6].EntryPoint`|ModAttackDamage|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|3|
|`Effects[6].Conditions`|[list: 1 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyValue]|
|`Effects[7].Modification`|Multiply|
|`Effects[7].Value`|1.8|
|`Effects[7].EntryPoint`|ModAttackDamage|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|2|
|`Effects[7].Conditions`|[list: 1 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointModifyValue]|
|`Effects[8].Modification`|Multiply|
|`Effects[8].Value`|1.9|
|`Effects[8].EntryPoint`|ModAttackDamage|
|`Effects[8].PerkConditionTabCount`|3|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|1|
|`Effects[8].Conditions`|[list: 1 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointModifyValue]|
|`Effects[9].Modification`|Multiply|
|`Effects[9].Value`|2|
|`Effects[9].EntryPoint`|ModAttackDamage|
|`Effects[9].PerkConditionTabCount`|3|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|0|
|`Effects[9].Conditions`|[list: 1 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-4d764b049a5c"></a>

## GRIM_PERK_CON_FamiliarBoost_bear

- Identidade estável Housecarl: `05C68A:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`03E023:LostGrimoire.esp`](../magic/MAGIC_041.md#r-88633cf93da6); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=03E023:LostGrimoire.esp|
|`Effects[0].Ability`|[`03E023:LostGrimoire.esp`](../magic/MAGIC_041.md#r-88633cf93da6)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-c9aa51533d43"></a>

## GRIM_PERK_CON_FamiliarBoost_mammoth

- Identidade estável Housecarl: `05C6A7:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`05C6A5:LostGrimoire.esp`](../magic/MAGIC_042.md#r-479ffb662203); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=05C6A5:LostGrimoire.esp|
|`Effects[0].Ability`|[`05C6A5:LostGrimoire.esp`](../magic/MAGIC_042.md#r-479ffb662203)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-9653d100754d"></a>

## GRIM_PERK_CON_FamiliarBoost_potentMagDisplayBuff

- Identidade estável Housecarl: `374C02:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: Familiar Display Boost; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`002F1E:Update.esm`](../perks/PERKS_043.md#r-9f0076f9d489)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=379D03:LostGrimoire.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Familiar Display Boost|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-aa2c9698034d"></a>

## GRIM_PERK_CON_FamiliarBoost_sabrecat

- Identidade estável Housecarl: `05C689:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`038F17:LostGrimoire.esp`](../magic/MAGIC_040.md#r-cc4c22619c70); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=038F17:LostGrimoire.esp|
|`Effects[0].Ability`|[`038F17:LostGrimoire.esp`](../magic/MAGIC_040.md#r-cc4c22619c70)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-c8c74e5e348e"></a>

## GRIM_PERK_CON_FamiliarBoost_troll

- Identidade estável Housecarl: `05C68B:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`03E025:LostGrimoire.esp`](../magic/MAGIC_041.md#r-989ff78ed3dd); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=03E025:LostGrimoire.esp|
|`Effects[0].Ability`|[`03E025:LostGrimoire.esp`](../magic/MAGIC_041.md#r-989ff78ed3dd)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-96394797d808"></a>

## GRIM_PERK_CON_FamiliarBoost_wolf

- Identidade estável Housecarl: `05C688:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`03E021:LostGrimoire.esp`](../magic/MAGIC_041.md#r-a6ee95e34a56); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=03E021:LostGrimoire.esp|
|`Effects[0].Ability`|[`03E021:LostGrimoire.esp`](../magic/MAGIC_041.md#r-a6ee95e34a56)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-4981758dbae1"></a>

## GRIM_PERK_DES_BurnDown

- Identidade estável Housecarl: `2DCBBD:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: Burn Down Dmg Boost; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=3; Rank=0; Priority=255; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=2; Rank=0; Priority=254; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=2; Rank=0; Priority=253; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=1; Rank=0; Priority=252; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=1; Rank=0; Priority=251; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=2DCBBA:LostGrimoire.esp|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.9|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=2DCBBA:LostGrimoire.esp|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.8|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|LessThan 0.9|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=2DCBBA:LostGrimoire.esp|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.7|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|LessThan 0.8|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=2DCBBA:LostGrimoire.esp|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.6|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[1]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|LessThan 0.7|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=2DCBBA:LostGrimoire.esp|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.5|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[1]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|LessThan 0.6|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 5 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|3|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|255|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Add|
|`Effects[1].Value`|2|
|`Effects[1].EntryPoint`|ModSpellMagnitude|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|254|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Add|
|`Effects[2].Value`|2|
|`Effects[2].EntryPoint`|ModSpellMagnitude|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|253|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Add|
|`Effects[3].Value`|1|
|`Effects[3].EntryPoint`|ModSpellMagnitude|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|252|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Add|
|`Effects[4].Value`|1|
|`Effects[4].EntryPoint`|ModSpellMagnitude|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|251|
|`Effects[4].Conditions`|[list: 2 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Name`|Burn Down Dmg Boost|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-943e13a37803"></a>

## GRIM_PERK_DES_ElementalWeapons

- Identidade estável Housecarl: `244C42:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellMagnitude; Modification=AddAVMult; ActorValue=Destruction; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`23FB3C:LostGrimoire.esp`](../magic/MAGIC_034.md#r-58df4ab6e2b5)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`249D58:LostGrimoire.esp`](../magic/MAGIC_034.md#r-b7216d354753)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`244C46:LostGrimoire.esp`](../magic/MAGIC_047.md#r-83b11d7034a4)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`244C48:LostGrimoire.esp`](../magic/MAGIC_047.md#r-fb9f91a17b1e)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`249D54:LostGrimoire.esp`](../magic/MAGIC_047.md#r-2f37d9c58693)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Destruction|
|`Effects[0].Value`|0.5|
|`Effects[0].Modification`|AddAVMult|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-87b241f096e8"></a>

## GRIM_PERK_DES_Flameheart

- Identidade estável Housecarl: `21C3D8:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModCommandedActorLimit; Modification=Add; Value=1; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`202EA8:LostGrimoire.esp`](../magic/MAGIC_047.md#r-bae00c400f3c)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|1|
|`Effects[0].EntryPoint`|ModCommandedActorLimit|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-4b23f9a36126"></a>

## GRIM_PERK_DES_Thunderblast

- Identidade estável Housecarl: `2214ED:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=200; Rank=0; Priority=19; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=190; Rank=0; Priority=18; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=180; Rank=0; Priority=17; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=170; Rank=0; Priority=16; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=160; Rank=0; Priority=15; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[5] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=150; Rank=0; Priority=14; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=140; Rank=0; Priority=13; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=130; Rank=0; Priority=12; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[8] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=120; Rank=0; Priority=11; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[9] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=110; Rank=0; Priority=10; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[10] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=100; Rank=0; Priority=9; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[11] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=90; Rank=0; Priority=8; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[12] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=80; Rank=0; Priority=7; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[13] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=70; Rank=0; Priority=6; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[14] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=60; Rank=0; Priority=5; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[15] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=50; Rank=0; Priority=4; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[16] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=40; Rank=0; Priority=3; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[17] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=30; Rank=0; Priority=2; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[18] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=20; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[19] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Add; Value=10; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 200|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 200|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 190|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 190|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 180|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 180|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 170|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 170|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 160|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 160|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 150|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 150|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 140|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 140|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 130|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 130|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 120|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[8].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 120|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 110|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 110|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[10].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 100|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 90|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 80|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 70|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 60|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 50|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[16].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[17].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 40|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[17].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[17].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[18].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 30|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[18].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[18].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|
|`Effects[19].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 20|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[19].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 10|0|Global=1F8C8B:LostGrimoire.esp|aliases=False; package=False|
|`Effects[19].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`1F8C85:LostGrimoire.esp`](../magic/MAGIC_047.md#r-a796fd2edcf7)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 20 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|200|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|19|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Add|
|`Effects[1].Value`|190|
|`Effects[1].EntryPoint`|ModSpellMagnitude|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|18|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Add|
|`Effects[2].Value`|180|
|`Effects[2].EntryPoint`|ModSpellMagnitude|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|17|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Add|
|`Effects[3].Value`|170|
|`Effects[3].EntryPoint`|ModSpellMagnitude|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|16|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Add|
|`Effects[4].Value`|160|
|`Effects[4].EntryPoint`|ModSpellMagnitude|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|15|
|`Effects[4].Conditions`|[list: 2 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointModifyValue]|
|`Effects[5].Modification`|Add|
|`Effects[5].Value`|150|
|`Effects[5].EntryPoint`|ModSpellMagnitude|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|14|
|`Effects[5].Conditions`|[list: 2 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Add|
|`Effects[6].Value`|140|
|`Effects[6].EntryPoint`|ModSpellMagnitude|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|13|
|`Effects[6].Conditions`|[list: 2 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyValue]|
|`Effects[7].Modification`|Add|
|`Effects[7].Value`|130|
|`Effects[7].EntryPoint`|ModSpellMagnitude|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|12|
|`Effects[7].Conditions`|[list: 2 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointModifyValue]|
|`Effects[8].Modification`|Add|
|`Effects[8].Value`|120|
|`Effects[8].EntryPoint`|ModSpellMagnitude|
|`Effects[8].PerkConditionTabCount`|3|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|11|
|`Effects[8].Conditions`|[list: 2 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointModifyValue]|
|`Effects[9].Modification`|Add|
|`Effects[9].Value`|110|
|`Effects[9].EntryPoint`|ModSpellMagnitude|
|`Effects[9].PerkConditionTabCount`|3|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|10|
|`Effects[9].Conditions`|[list: 2 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointModifyValue]|
|`Effects[10].Modification`|Add|
|`Effects[10].Value`|100|
|`Effects[10].EntryPoint`|ModSpellMagnitude|
|`Effects[10].PerkConditionTabCount`|3|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|9|
|`Effects[10].Conditions`|[list: 2 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointModifyValue]|
|`Effects[11].Modification`|Add|
|`Effects[11].Value`|90|
|`Effects[11].EntryPoint`|ModSpellMagnitude|
|`Effects[11].PerkConditionTabCount`|3|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|8|
|`Effects[11].Conditions`|[list: 2 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Effects[12]`|[PerkEntryPointModifyValue]|
|`Effects[12].Modification`|Add|
|`Effects[12].Value`|80|
|`Effects[12].EntryPoint`|ModSpellMagnitude|
|`Effects[12].PerkConditionTabCount`|3|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|7|
|`Effects[12].Conditions`|[list: 2 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|0|
|`Effects[12].Flags.FragmentIndex`|0|
|`Effects[13]`|[PerkEntryPointModifyValue]|
|`Effects[13].Modification`|Add|
|`Effects[13].Value`|70|
|`Effects[13].EntryPoint`|ModSpellMagnitude|
|`Effects[13].PerkConditionTabCount`|3|
|`Effects[13].Rank`|0|
|`Effects[13].Priority`|6|
|`Effects[13].Conditions`|[list: 2 item(s)]|
|`Effects[13].Flags`|[PerkScriptFlag]|
|`Effects[13].Flags.Flags`|0|
|`Effects[13].Flags.FragmentIndex`|0|
|`Effects[14]`|[PerkEntryPointModifyValue]|
|`Effects[14].Modification`|Add|
|`Effects[14].Value`|60|
|`Effects[14].EntryPoint`|ModSpellMagnitude|
|`Effects[14].PerkConditionTabCount`|3|
|`Effects[14].Rank`|0|
|`Effects[14].Priority`|5|
|`Effects[14].Conditions`|[list: 2 item(s)]|
|`Effects[14].Flags`|[PerkScriptFlag]|
|`Effects[14].Flags.Flags`|0|
|`Effects[14].Flags.FragmentIndex`|0|
|`Effects[15]`|[PerkEntryPointModifyValue]|
|`Effects[15].Modification`|Add|
|`Effects[15].Value`|50|
|`Effects[15].EntryPoint`|ModSpellMagnitude|
|`Effects[15].PerkConditionTabCount`|3|
|`Effects[15].Rank`|0|
|`Effects[15].Priority`|4|
|`Effects[15].Conditions`|[list: 2 item(s)]|
|`Effects[15].Flags`|[PerkScriptFlag]|
|`Effects[15].Flags.Flags`|0|
|`Effects[15].Flags.FragmentIndex`|0|
|`Effects[16]`|[PerkEntryPointModifyValue]|
|`Effects[16].Modification`|Add|
|`Effects[16].Value`|40|
|`Effects[16].EntryPoint`|ModSpellMagnitude|
|`Effects[16].PerkConditionTabCount`|3|
|`Effects[16].Rank`|0|
|`Effects[16].Priority`|3|
|`Effects[16].Conditions`|[list: 2 item(s)]|
|`Effects[16].Flags`|[PerkScriptFlag]|
|`Effects[16].Flags.Flags`|0|
|`Effects[16].Flags.FragmentIndex`|0|
|`Effects[17]`|[PerkEntryPointModifyValue]|
|`Effects[17].Modification`|Add|
|`Effects[17].Value`|30|
|`Effects[17].EntryPoint`|ModSpellMagnitude|
|`Effects[17].PerkConditionTabCount`|3|
|`Effects[17].Rank`|0|
|`Effects[17].Priority`|2|
|`Effects[17].Conditions`|[list: 2 item(s)]|
|`Effects[17].Flags`|[PerkScriptFlag]|
|`Effects[17].Flags.Flags`|0|
|`Effects[17].Flags.FragmentIndex`|0|
|`Effects[18]`|[PerkEntryPointModifyValue]|
|`Effects[18].Modification`|Add|
|`Effects[18].Value`|20|
|`Effects[18].EntryPoint`|ModSpellMagnitude|
|`Effects[18].PerkConditionTabCount`|3|
|`Effects[18].Rank`|0|
|`Effects[18].Priority`|1|
|`Effects[18].Conditions`|[list: 2 item(s)]|
|`Effects[18].Flags`|[PerkScriptFlag]|
|`Effects[18].Flags.Flags`|0|
|`Effects[18].Flags.FragmentIndex`|0|
|`Effects[19]`|[PerkEntryPointModifyValue]|
|`Effects[19].Modification`|Add|
|`Effects[19].Value`|10|
|`Effects[19].EntryPoint`|ModSpellMagnitude|
|`Effects[19].PerkConditionTabCount`|3|
|`Effects[19].Rank`|0|
|`Effects[19].Priority`|0|
|`Effects[19].Conditions`|[list: 2 item(s)]|
|`Effects[19].Flags`|[PerkScriptFlag]|
|`Effects[19].Flags.Flags`|0|
|`Effects[19].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-d656954f40f7"></a>

## GRIM_PERK_ILL_AstralProjection

- Identidade estável Housecarl: `30034C:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: Astral Projection Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`30034B:LostGrimoire.esp`](../magic/MAGIC_049.md#r-9acc157ab55c); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModFallingDamage; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=FilterActivation; Modification=Add; Value=1; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModDetectionSneakSkill; Modification=Add; Value=100; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=48; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[5] — PerkEntryPointModifyValue**: EntryPoint=ModDetectionLight; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 6 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=30034B:LostGrimoire.esp|
|`Effects[0].Ability`|[`30034B:LostGrimoire.esp`](../magic/MAGIC_049.md#r-9acc157ab55c)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0|
|`Effects[1].EntryPoint`|ModFallingDamage|
|`Effects[1].PerkConditionTabCount`|1|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Add|
|`Effects[2].Value`|1|
|`Effects[2].EntryPoint`|FilterActivation|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Add|
|`Effects[3].Value`|100|
|`Effects[3].EntryPoint`|ModDetectionSneakSkill|
|`Effects[3].PerkConditionTabCount`|2|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|0|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Multiply|
|`Effects[4].Value`|0|
|`Effects[4].EntryPoint`|48|
|`Effects[4].PerkConditionTabCount`|2|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|0|
|`Effects[4].Conditions`|[list: 0 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointModifyValue]|
|`Effects[5].Modification`|Multiply|
|`Effects[5].Value`|0|
|`Effects[5].EntryPoint`|ModDetectionLight|
|`Effects[5].PerkConditionTabCount`|2|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|0|
|`Effects[5].Conditions`|[list: 0 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Name`|Astral Projection Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-be066c469d3d"></a>

## GRIM_PERK_ILL_EnragingAura

- Identidade estável Housecarl: `337F20:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.3; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0C44B6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetDistance|2|Subject; ref=(null link); index=-1|LessThan 640|0|Target=000014:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.3|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-9572b442cae9"></a>

## GRIM_PERK_ILL_Enthrall

- Identidade estável Housecarl: `3147AC:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=0; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|GetInFaction|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Faction=3147AB:LostGrimoire.esp|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013794:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[0].EntryPoint`|Activate|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[0].Flags.FragmentIndex`|0|
|`VirtualMachineAdapter`|[PerkAdapter]|
|`VirtualMachineAdapter.ScriptFragments`|[PerkScriptFragments]|
|`VirtualMachineAdapter.ScriptFragments.Fragments`|[list: 1 item(s)]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentIndex`|0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].ScriptName`|GRIM_PRKF_GRIM_PERK_ILL_Enthr_0B3147AC|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentName`|Fragment_0|
|`VirtualMachineAdapter.ScriptFragments.ExtraBindDataVersion`|2|
|`VirtualMachineAdapter.ScriptFragments.FileName`|GRIM_PRKF_GRIM_PERK_ILL_Enthr_0B3147AC|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=GRIM_PRKF_GRIM_PERK_ILL_Enthr_0B3147AC|
|`VirtualMachineAdapter.Scripts[0].Name`|GRIM_PRKF_GRIM_PERK_ILL_Enthr_0B3147AC|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=myTalkingActivator|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|3B18AA:LostGrimoire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|myTalkingActivator|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=managerScript|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|30F690:LostGrimoire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|managerScript|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=aliasTempAnimal|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|30F690:LostGrimoire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|12|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|aliasTempAnimal|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-1568c7635598"></a>

## GRIM_PERK_ILL_PhantomInvulnerable

- Identidade estável Housecarl: `2F610A:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellDuration; Modification=Set; Value=0; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModFallingDamage; Modification=Set; Value=0; Rank=0; Priority=0; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Set; Value=0; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Set; Value=0; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=1364C5:LostGrimoire.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=14FA41:LostGrimoire.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=17F246:LostGrimoire.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=17F247:LostGrimoire.esp|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=1364C5:LostGrimoire.esp|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=14FA41:LostGrimoire.esp|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[5]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=17F246:LostGrimoire.esp|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[6]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=17F247:LostGrimoire.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModIncomingSpellDuration|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Set|
|`Effects[1].Value`|0|
|`Effects[1].EntryPoint`|ModFallingDamage|
|`Effects[1].PerkConditionTabCount`|1|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Set|
|`Effects[2].Value`|0|
|`Effects[2].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Set|
|`Effects[3].Value`|0|
|`Effects[3].EntryPoint`|ModIncomingDamage|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|0|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-ab9e0bae2591"></a>

## GRIM_PERK_ILL_PhantomNoDamage

- Identidade estável Housecarl: `2FB22E:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Set; Value=0; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-747a3b29ec4f"></a>

## GRIM_PERK_ILL_SilverTongue

- Identidade estável Housecarl: `30F684:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: Silver Tongue; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellMagnitude; Modification=AddAVMult; ActorValue=Illusion; Value=0.33; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=30F68E:LostGrimoire.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Illusion|
|`Effects[0].Value`|0.33|
|`Effects[0].Modification`|AddAVMult|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Silver Tongue|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-3cb15b7cbab3"></a>

## GRIM_PERK_ILL_SoothingAura

- Identidade estável Housecarl: `337F11:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=2.3; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0424EE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetDistance|2|Subject; ref=(null link); index=-1|LessThan 640|0|Target=000014:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2.3|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a9d9c5b4956c"></a>

## GRIM_PERK_ILL_SpectralShroud

- Identidade estável Housecarl: `000D62:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.15; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModDetectionSneakSkill; Modification=Multiply; Value=1.2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0424E0:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.15|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.2|
|`Effects[1].EntryPoint`|ModDetectionSneakSkill|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a7a5fd667966"></a>

## GRIM_PERK_ILL_TerrifyingAura

- Identidade estável Housecarl: `337F17:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModPlayerIntimidation; Modification=Multiply; Value=1.5; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.3; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0424E0:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|GetDistance|2|Subject; ref=(null link); index=-1|LessThan 640|0|Target=000014:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.5|
|`Effects[0].EntryPoint`|ModPlayerIntimidation|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.3|
|`Effects[1].EntryPoint`|ModSpellMagnitude|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
