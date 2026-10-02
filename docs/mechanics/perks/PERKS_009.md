# Perks instaladas — parte 009

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-4b6361293d8b"></a>

## DLC2Summoner70NPC

- Identidade estável Housecarl: `01773E:Dragonborn.esm`.
- Tipo: `Perk`; winner: `Dragonborn.esm`; profundidade de override: 1.
- Nome: NPC Summoner; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellRange; Modification=Multiply; Value=1.5; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetBaseActorValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=Conjuration<br>Parameter1=Conjuration|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=1091CF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=024823:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=024829:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=02482A:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=02482B:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.5|
|`Effects[0].EntryPoint`|ModSpellRange|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|NPC Summoner|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-e696048fc003"></a>

## DLC2TameDragonActivatePerk

- Identidade estável Housecarl: `01CAEA:Dragonborn.esm`.
- Tipo: `Perk`; winner: `Dragonborn.esm`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=False, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=AllowMountActor; Modification=Set; Value=1; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01BD7D:Dragonborn.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|1|
|`Effects[0].EntryPoint`|AllowMountActor|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|False|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-d79e68c0f0f2"></a>

## DLC2TTR3aAshExtractionPerk

- Identidade estável Housecarl: `01CDF0:Dragonborn.esm`.
- Tipo: `Perk`; winner: `Dragonborn.esm`; profundidade de override: 1.
- Nome: Extraction Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=0; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetStage|0|Subject; ref=(null link); index=-1|EqualTo 100|0|Quest=01B65D:Dragonborn.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=03280A:Dragonborn.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=028FDE:Dragonborn.esm|aliases=False; package=False|

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
|`Effects[0].ButtonLabel`|Extract Ash|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`VirtualMachineAdapter`|[PerkAdapter]|
|`VirtualMachineAdapter.ScriptFragments`|[PerkScriptFragments]|
|`VirtualMachineAdapter.ScriptFragments.Fragments`|[list: 1 item(s)]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentIndex`|0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].ScriptName`|DLC2_PRKF_DLC2TTR3aAshExtract_0201CDF0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentName`|Fragment_0|
|`VirtualMachineAdapter.ScriptFragments.ExtraBindDataVersion`|2|
|`VirtualMachineAdapter.ScriptFragments.FileName`|DLC2_PRKF_DLC2TTR3aAshExtract_0201CDF0|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC2_PRKF_DLC2TTR3aAshExtract_0201CDF0|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC2_PRKF_DLC2TTR3aAshExtract_0201CDF0|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DLC2TTR3a|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|01B65D:Dragonborn.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DLC2TTR3a|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=DLC2TTR3aAshSample|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|01B65C:Dragonborn.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|DLC2TTR3aAshSample|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
|`Name`|Extraction Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-073a930c1a69"></a>

## DLC2TTR4bBlockActivation

- Identidade estável Housecarl: `01CDE7:Dragonborn.esm`.
- Tipo: `Perk`; winner: `Dragonborn.esm`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0.1; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.1; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=FilterActivation; Modification=Add; Value=1; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[2].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914ED:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.1|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0.1|
|`Effects[1].EntryPoint`|ModSpellMagnitude|
|`Effects[1].PerkConditionTabCount`|3|
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
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-bab5d3b9a2ca"></a>

## _SD_SDPerk

- Identidade estável Housecarl: `000810:DynamicBlockHit.esp`.
- Tipo: `Perk`; winner: `DynamicBlockHit.esp`; profundidade de override: 1.
- Nome: Directional Stagger Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyWeaponSwingSpell; Spell=[`00080B:DynamicBlockHit.esp`](../magic/MAGIC_035.md#r-fe5ed9baf9e8); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsPowerAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=00080B:DynamicBlockHit.esp|
|`Effects[0].Spell`|[`00080B:DynamicBlockHit.esp`](../magic/MAGIC_035.md#r-fe5ed9baf9e8)|
|`Effects[0].EntryPoint`|ApplyWeaponSwingSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Directional Stagger Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-f444520d7470"></a>

## FP_AnimPerk

- Identidade estável Housecarl: `000801:FirstPersonInteractions.esp`.
- Tipo: `Perk`; winner: `FirstPersonInteractions.esp`; profundidade de override: 1.
- Nome: FP_AnimPerk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=0; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[1] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=1; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[2] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=2; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[3] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=2; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[4] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=3; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[5] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=3; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[6] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=4; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[7] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=5; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[8] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=6; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[9] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=7; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[10] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=7; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[11] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=8; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[12] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=8; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[13] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=8; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[14] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=9; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[15] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=9; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[16] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=10; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[17] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=11; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[18] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=12; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000803:FirstPersonInteractions.esp<br>Parameter1.Link=000803:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=000802:FirstPersonInteractions.esp<br>Parameter1.Link=000802:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[8]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00084A:FirstPersonInteractions.esp<br>Parameter1.Link=00084A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=00081A:FirstPersonInteractions.esp<br>Parameter1.Link=00081A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=SoulGem<br>Parameter1=SoulGem|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Ammo<br>Parameter1=Ammo|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Armor<br>Parameter1=Armor|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Note<br>Parameter1=Note|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Projectile<br>Parameter1=Projectile|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[6]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Key<br>Parameter1=Key|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[7]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Weapon<br>Parameter1=Weapon|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[8]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Ingredient<br>Parameter1=Ingredient|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[9]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=MiscItem<br>Parameter1=MiscItem|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[10]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Potion<br>Parameter1=Potion|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[11]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Book<br>Parameter1=Book|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[12]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Scroll<br>Parameter1=Scroll|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000804:FirstPersonInteractions.esp<br>Parameter1.Link=000804:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[7]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00084A:FirstPersonInteractions.esp<br>Parameter1.Link=00084A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=00081A:FirstPersonInteractions.esp<br>Parameter1.Link=00081A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=00084C:FirstPersonInteractions.esp<br>Parameter1.Link=00084C:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|GetLocked|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Container<br>Parameter1=Container|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[4]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormList=000844:FirstPersonInteractions.esp<br>Parameter1.Link=000844:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000805:FirstPersonInteractions.esp<br>Parameter1.Link=000805:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=000840:FirstPersonInteractions.esp<br>Parameter1.Link=000840:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[6]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[7]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[8]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00084A:FirstPersonInteractions.esp<br>Parameter1.Link=00084A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=00081A:FirstPersonInteractions.esp<br>Parameter1.Link=00081A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Actor<br>Parameter1=Actor|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[2]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=013798:Skyrim.esm<br>Parameter1.Link=013798:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000805:FirstPersonInteractions.esp<br>Parameter1.Link=000805:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000840:FirstPersonInteractions.esp<br>Parameter1.Link=000840:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[6]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[7]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[8]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00084A:FirstPersonInteractions.esp<br>Parameter1.Link=00084A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=00081A:FirstPersonInteractions.esp<br>Parameter1.Link=00081A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[1]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Actor<br>Parameter1=Actor|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[2]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=013798:Skyrim.esm<br>Parameter1.Link=013798:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000806:FirstPersonInteractions.esp<br>Parameter1.Link=000806:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=000840:FirstPersonInteractions.esp<br>Parameter1.Link=000840:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[6]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[7]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[8]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00084A:FirstPersonInteractions.esp<br>Parameter1.Link=00084A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[9]`|GetEquipped|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|ItemOrList=02C37B:Skyrim.esm<br>Parameter1.Link=02C37B:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=00081A:FirstPersonInteractions.esp<br>Parameter1.Link=00081A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[1]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Actor<br>Parameter1=Actor|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[2]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=013798:Skyrim.esm<br>Parameter1.Link=013798:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000806:FirstPersonInteractions.esp<br>Parameter1.Link=000806:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000840:FirstPersonInteractions.esp<br>Parameter1.Link=000840:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[6]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[7]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[8]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00084A:FirstPersonInteractions.esp<br>Parameter1.Link=00084A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=00081A:FirstPersonInteractions.esp<br>Parameter1.Link=00081A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[1]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Actor<br>Parameter1=Actor|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[2]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=013798:Skyrim.esm<br>Parameter1.Link=013798:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000807:FirstPersonInteractions.esp<br>Parameter1.Link=000807:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[2]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[3]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[6]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[7]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00084A:FirstPersonInteractions.esp<br>Parameter1.Link=00084A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|GetLocked|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[1]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Door<br>Parameter1=Door|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[2]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=00083F:FirstPersonInteractions.esp<br>Parameter1.Link=00083F:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000808:FirstPersonInteractions.esp<br>Parameter1.Link=000808:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[2]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[3]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[6]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[7]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00084A:FirstPersonInteractions.esp<br>Parameter1.Link=00084A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|GetLocked|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[1]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=00083F:FirstPersonInteractions.esp<br>Parameter1.Link=00083F:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000810:FirstPersonInteractions.esp<br>Parameter1.Link=000810:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=000802:FirstPersonInteractions.esp<br>Parameter1.Link=000802:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[2]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[3]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[6]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[7]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[8].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=000818:FirstPersonInteractions.esp<br>Parameter1.Link=000818:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=00080A:FirstPersonInteractions.esp<br>Parameter1.Link=00080A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[2]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[3]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[6]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[7]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00084A:FirstPersonInteractions.esp<br>Parameter1.Link=00084A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=00083D:FirstPersonInteractions.esp<br>Parameter1.Link=00083D:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[1]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Flora<br>Parameter1=Flora|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[2]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Tree<br>Parameter1=Tree|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[3]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=000819:FirstPersonInteractions.esp<br>Parameter1.Link=000819:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[4]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=00082B:FirstPersonInteractions.esp<br>Parameter1.Link=00082B:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[5]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=00083E:FirstPersonInteractions.esp<br>Parameter1.Link=00083E:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[6]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormList=000846:FirstPersonInteractions.esp<br>Parameter1.Link=000846:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=00080A:FirstPersonInteractions.esp<br>Parameter1.Link=00080A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[1]`|GetItemCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 1|0|ItemOrList=10ACCC:Skyrim.esm<br>Parameter1.Link=10ACCC:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[2]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[3]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[6]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[7]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[8]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00084A:FirstPersonInteractions.esp<br>Parameter1.Link=00084A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[10].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormList=00083D:FirstPersonInteractions.esp<br>Parameter1.Link=00083D:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000812:FirstPersonInteractions.esp<br>Parameter1.Link=000812:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=000840:FirstPersonInteractions.esp<br>Parameter1.Link=000840:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[2]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[3]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[6]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[7]`|IsSneaking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|StringParameter1=i1stPerson|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[8]`|HasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0A82BB:Skyrim.esm<br>Parameter1.Link=0A82BB:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[9]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=013794:Skyrim.esm<br>Parameter1.Link=013794:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[1]`|GetRelationshipRank|1|Subject; ref=(null link); index=-1|LessThan 3|0|TargetNpc=000014:Skyrim.esm<br>Parameter1.Link=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[2]`|GetPlayerTeammate|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[3]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[4]`|GetSleeping|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[5]`|IsChild|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[6]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`00BF72:Dawnguard.esm`](../magic/MAGIC_007.md#r-1197027a77ba)<br>Parameter1.Link=[`00BF72:Dawnguard.esm`](../magic/MAGIC_007.md#r-1197027a77ba)|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[7]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`09E0BB:Skyrim.esm`](../magic/MAGIC_015.md#r-32a3edcecb0c)<br>Parameter1.Link=[`09E0BB:Skyrim.esm`](../magic/MAGIC_015.md#r-32a3edcecb0c)|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[8]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`04DEE7:Skyrim.esm`](../magic/MAGIC_012.md#r-39f17e4b7166)<br>Parameter1.Link=[`04DEE7:Skyrim.esm`](../magic/MAGIC_012.md#r-39f17e4b7166)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000812:FirstPersonInteractions.esp<br>Parameter1.Link=000812:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=000840:FirstPersonInteractions.esp<br>Parameter1.Link=000840:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[2]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[3]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[6]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[7]`|HasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0A82BB:Skyrim.esm<br>Parameter1.Link=0A82BB:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[8]`|IsSneaking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|StringParameter1=i1stPerson|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[9]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=013794:Skyrim.esm<br>Parameter1.Link=013794:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[1]`|GetRelationshipRank|1|Subject; ref=(null link); index=-1|LessThan 3|0|TargetNpc=000014:Skyrim.esm<br>Parameter1.Link=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[2]`|GetPlayerTeammate|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[3]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[4]`|IsChild|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000812:FirstPersonInteractions.esp<br>Parameter1.Link=000812:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000840:FirstPersonInteractions.esp<br>Parameter1.Link=000840:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[2]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[3]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[6]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[7]`|IsSneaking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|StringParameter1=i1stPerson|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[8]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=013794:Skyrim.esm<br>Parameter1.Link=013794:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[1]`|GetRelationshipRank|1|Subject; ref=(null link); index=-1|LessThan 3|0|TargetNpc=000014:Skyrim.esm<br>Parameter1.Link=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[2]`|GetPlayerTeammate|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[3]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[4]`|IsChild|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000809:FirstPersonInteractions.esp<br>Parameter1.Link=000809:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[1]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[2]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[3]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[6]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[7]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00084A:FirstPersonInteractions.esp<br>Parameter1.Link=00084A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=00081E:FirstPersonInteractions.esp<br>Parameter1.Link=00081E:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[1]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=000820:FirstPersonInteractions.esp<br>Parameter1.Link=000820:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[2]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=00081F:FirstPersonInteractions.esp<br>Parameter1.Link=00081F:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[3]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=000821:FirstPersonInteractions.esp<br>Parameter1.Link=000821:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[4]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=000822:FirstPersonInteractions.esp<br>Parameter1.Link=000822:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[5]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=000823:FirstPersonInteractions.esp<br>Parameter1.Link=000823:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[6]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=000825:FirstPersonInteractions.esp<br>Parameter1.Link=000825:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[7]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=00084E:FirstPersonInteractions.esp<br>Parameter1.Link=00084E:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[8]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=00081B:FirstPersonInteractions.esp<br>Parameter1.Link=00081B:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[9]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=000826:FirstPersonInteractions.esp<br>Parameter1.Link=000826:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[10]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=00084F:FirstPersonInteractions.esp<br>Parameter1.Link=00084F:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000809:FirstPersonInteractions.esp<br>Parameter1.Link=000809:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[1]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[2]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[3]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[6]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[7]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00084A:FirstPersonInteractions.esp<br>Parameter1.Link=00084A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormList=000849:FirstPersonInteractions.esp<br>Parameter1.Link=000849:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0B7DB3:Skyrim.esm<br>Parameter1.Link=0B7DB3:Skyrim.esm|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=000817:FirstPersonInteractions.esp<br>Parameter1.Link=000817:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[1]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[2]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[3]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[6]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[16].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=00081D:FirstPersonInteractions.esp<br>Parameter1.Link=00081D:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[16].Conditions[1].Conditions[1]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=00084C:FirstPersonInteractions.esp<br>Parameter1.Link=00084C:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[17].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=00084D:FirstPersonInteractions.esp<br>Parameter1.Link=00084D:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[17].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00084A:FirstPersonInteractions.esp<br>Parameter1.Link=00084A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[17].Conditions[1].Conditions[0]`|GetSleeping|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[17].Conditions[1].Conditions[1]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[17].Conditions[1].Conditions[2]`|GetInFaction|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Faction=05C84E:Skyrim.esm<br>Parameter1.Link=05C84E:Skyrim.esm|aliases=False; package=False|
|`Effects[17].Conditions[1].Conditions[3]`|GetInFaction|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Faction=05C84D:Skyrim.esm<br>Parameter1.Link=05C84D:Skyrim.esm|aliases=False; package=False|
|`Effects[17].Conditions[1].Conditions[4]`|GetPlayerTeammate|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[17].Conditions[1].Conditions[5]`|GetRelationshipRank|1|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 2|0|TargetNpc=000014:Skyrim.esm<br>Parameter1.Link=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[18].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=00084B:FirstPersonInteractions.esp<br>Parameter1.Link=00084B:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[18].Conditions[0].Conditions[1]`|GetSitting|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[18].Conditions[0].Conditions[2]`|IsRidingMount|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[18].Conditions[0].Conditions[3]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[18].Conditions[0].Conditions[4]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[18].Conditions[0].Conditions[5]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|
|`Effects[18].Conditions[0].Conditions[6]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=i1stPerson<br>StringParameter1=i1stPerson<br>Parameter2=i1stPerson|aliases=False; package=False|
|`Effects[18].Conditions[0].Conditions[7]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00084A:FirstPersonInteractions.esp<br>Parameter1.Link=00084A:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[18].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormList=00083F:FirstPersonInteractions.esp<br>Parameter1.Link=00083F:FirstPersonInteractions.esp|aliases=False; package=False|
|`Effects[18].Conditions[1].Conditions[1]`|GetLocked|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 19 item(s)]|
|`Conditions`|[list: 0 item(s)]|
|`VirtualMachineAdapter`|[PerkAdapter]|
|`VirtualMachineAdapter.ScriptFragments`|[PerkScriptFragments]|
|`VirtualMachineAdapter.ScriptFragments.Fragments`|[list: 16 item(s)]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentIndex`|0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentName`|Fragment_0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[1]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[1].FragmentIndex`|1|
|`VirtualMachineAdapter.ScriptFragments.Fragments[1].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[1].FragmentName`|Fragment_1|
|`VirtualMachineAdapter.ScriptFragments.Fragments[2]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[2].FragmentIndex`|2|
|`VirtualMachineAdapter.ScriptFragments.Fragments[2].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[2].FragmentName`|Fragment_2|
|`VirtualMachineAdapter.ScriptFragments.Fragments[3]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[3].FragmentIndex`|3|
|`VirtualMachineAdapter.ScriptFragments.Fragments[3].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[3].FragmentName`|Fragment_3|
|`VirtualMachineAdapter.ScriptFragments.Fragments[4]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[4].FragmentIndex`|4|
|`VirtualMachineAdapter.ScriptFragments.Fragments[4].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[4].FragmentName`|Fragment_4|
|`VirtualMachineAdapter.ScriptFragments.Fragments[5]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[5].FragmentIndex`|5|
|`VirtualMachineAdapter.ScriptFragments.Fragments[5].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[5].FragmentName`|Fragment_5|
|`VirtualMachineAdapter.ScriptFragments.Fragments[6]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[6].FragmentIndex`|6|
|`VirtualMachineAdapter.ScriptFragments.Fragments[6].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[6].FragmentName`|Fragment_6|
|`VirtualMachineAdapter.ScriptFragments.Fragments[7]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[7].FragmentIndex`|7|
|`VirtualMachineAdapter.ScriptFragments.Fragments[7].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[7].FragmentName`|Fragment_7|
|`VirtualMachineAdapter.ScriptFragments.Fragments[8]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[8].FragmentIndex`|8|
|`VirtualMachineAdapter.ScriptFragments.Fragments[8].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[8].FragmentName`|Fragment_8|
|`VirtualMachineAdapter.ScriptFragments.Fragments[9]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[9].FragmentIndex`|9|
|`VirtualMachineAdapter.ScriptFragments.Fragments[9].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[9].FragmentName`|Fragment_9|
|`VirtualMachineAdapter.ScriptFragments.Fragments[10]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[10].FragmentIndex`|10|
|`VirtualMachineAdapter.ScriptFragments.Fragments[10].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[10].FragmentName`|Fragment_10|
|`VirtualMachineAdapter.ScriptFragments.Fragments[11]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[11].FragmentIndex`|11|
|`VirtualMachineAdapter.ScriptFragments.Fragments[11].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[11].FragmentName`|Fragment_11|
|`VirtualMachineAdapter.ScriptFragments.Fragments[12]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[12].FragmentIndex`|15|
|`VirtualMachineAdapter.ScriptFragments.Fragments[12].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[12].FragmentName`|Fragment_15|
|`VirtualMachineAdapter.ScriptFragments.Fragments[13]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[13].FragmentIndex`|12|
|`VirtualMachineAdapter.ScriptFragments.Fragments[13].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[13].FragmentName`|Fragment_12|
|`VirtualMachineAdapter.ScriptFragments.Fragments[14]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[14].FragmentIndex`|13|
|`VirtualMachineAdapter.ScriptFragments.Fragments[14].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[14].FragmentName`|Fragment_13|
|`VirtualMachineAdapter.ScriptFragments.Fragments[15]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[15].FragmentIndex`|14|
|`VirtualMachineAdapter.ScriptFragments.Fragments[15].ScriptName`|FP_PerkScript|
|`VirtualMachineAdapter.ScriptFragments.Fragments[15].FragmentName`|Fragment_14|
|`VirtualMachineAdapter.ScriptFragments.ExtraBindDataVersion`|2|
|`VirtualMachineAdapter.ScriptFragments.FileName`|LA_PerkScript|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=FP_PerkScript|
|`VirtualMachineAdapter.Scripts[0].Name`|FP_PerkScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=FP_PlayerAlias|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000800:FirstPersonInteractions.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|FP_PlayerAlias|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
|`Effects[0]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[0].EntryPoint`|Activate|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|RunImmediately|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[1].EntryPoint`|Activate|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|1|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[1].Flags.FragmentIndex`|1|
|`Effects[2]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[2].EntryPoint`|Activate|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|2|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[2].Flags.FragmentIndex`|2|
|`Effects[3]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[3].EntryPoint`|Activate|
|`Effects[3].PerkConditionTabCount`|2|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|2|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|RunImmediately|
|`Effects[3].Flags.FragmentIndex`|2|
|`Effects[4]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[4].EntryPoint`|Activate|
|`Effects[4].PerkConditionTabCount`|2|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|3|
|`Effects[4].Conditions`|[list: 2 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[4].Flags.FragmentIndex`|3|
|`Effects[5]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[5].EntryPoint`|Activate|
|`Effects[5].PerkConditionTabCount`|2|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|3|
|`Effects[5].Conditions`|[list: 2 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|RunImmediately|
|`Effects[5].Flags.FragmentIndex`|3|
|`Effects[6]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[6].EntryPoint`|Activate|
|`Effects[6].PerkConditionTabCount`|2|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|4|
|`Effects[6].Conditions`|[list: 2 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[6].Flags.FragmentIndex`|4|
|`Effects[7]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[7].EntryPoint`|Activate|
|`Effects[7].PerkConditionTabCount`|2|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|5|
|`Effects[7].Conditions`|[list: 2 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[7].Flags.FragmentIndex`|5|
|`Effects[8]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[8].EntryPoint`|Activate|
|`Effects[8].PerkConditionTabCount`|2|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|6|
|`Effects[8].Conditions`|[list: 2 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|RunImmediately|
|`Effects[8].Flags.FragmentIndex`|6|
|`Effects[9]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[9].EntryPoint`|Activate|
|`Effects[9].PerkConditionTabCount`|2|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|7|
|`Effects[9].Conditions`|[list: 2 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[9].Flags.FragmentIndex`|7|
|`Effects[10]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[10].EntryPoint`|Activate|
|`Effects[10].PerkConditionTabCount`|2|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|7|
|`Effects[10].Conditions`|[list: 2 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[10].Flags.FragmentIndex`|7|
|`Effects[11]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[11].EntryPoint`|Activate|
|`Effects[11].PerkConditionTabCount`|2|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|8|
|`Effects[11].Conditions`|[list: 2 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[11].Flags.FragmentIndex`|8|
|`Effects[12]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[12].EntryPoint`|Activate|
|`Effects[12].PerkConditionTabCount`|2|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|8|
|`Effects[12].Conditions`|[list: 2 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[12].Flags.FragmentIndex`|8|
|`Effects[13]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[13].EntryPoint`|Activate|
|`Effects[13].PerkConditionTabCount`|2|
|`Effects[13].Rank`|0|
|`Effects[13].Priority`|8|
|`Effects[13].Conditions`|[list: 2 item(s)]|
|`Effects[13].Flags`|[PerkScriptFlag]|
|`Effects[13].Flags.Flags`|RunImmediately|
|`Effects[13].Flags.FragmentIndex`|8|
|`Effects[14]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[14].EntryPoint`|Activate|
|`Effects[14].PerkConditionTabCount`|2|
|`Effects[14].Rank`|0|
|`Effects[14].Priority`|9|
|`Effects[14].Conditions`|[list: 2 item(s)]|
|`Effects[14].Flags`|[PerkScriptFlag]|
|`Effects[14].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[14].Flags.FragmentIndex`|9|
|`Effects[15]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[15].EntryPoint`|Activate|
|`Effects[15].PerkConditionTabCount`|2|
|`Effects[15].Rank`|0|
|`Effects[15].Priority`|9|
|`Effects[15].Conditions`|[list: 2 item(s)]|
|`Effects[15].Flags`|[PerkScriptFlag]|
|`Effects[15].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[15].Flags.FragmentIndex`|9|
|`Effects[16]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[16].EntryPoint`|Activate|
|`Effects[16].PerkConditionTabCount`|2|
|`Effects[16].Rank`|0|
|`Effects[16].Priority`|10|
|`Effects[16].Conditions`|[list: 2 item(s)]|
|`Effects[16].Flags`|[PerkScriptFlag]|
|`Effects[16].Flags.Flags`|RunImmediately|
|`Effects[16].Flags.FragmentIndex`|10|
|`Effects[17]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[17].EntryPoint`|Activate|
|`Effects[17].PerkConditionTabCount`|2|
|`Effects[17].Rank`|0|
|`Effects[17].Priority`|11|
|`Effects[17].Conditions`|[list: 2 item(s)]|
|`Effects[17].Flags`|[PerkScriptFlag]|
|`Effects[17].Flags.Flags`|RunImmediately|
|`Effects[17].Flags.FragmentIndex`|11|
|`Effects[18]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[18].EntryPoint`|Activate|
|`Effects[18].PerkConditionTabCount`|2|
|`Effects[18].Rank`|0|
|`Effects[18].Priority`|12|
|`Effects[18].Conditions`|[list: 2 item(s)]|
|`Effects[18].Flags`|[PerkScriptFlag]|
|`Effects[18].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[18].Flags.FragmentIndex`|12|
|`Name`|FP_AnimPerk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-43688fe1c133"></a>

## AttackDetection

- Identidade estável Housecarl: `000847:For Honor in Skyrim.esp`.
- Tipo: `Perk`; winner: `For Honor Balance Patch.esp`; profundidade de override: 2.
- Nome: Attack Detection; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Attack Detection|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-03cf2d1f9204"></a>

## Black Prior

- Identidade estável Housecarl: `000606:For Honor Balance Patch.esp`.
- Tipo: `Perk`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.
- Nome: Black Prior; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModPercentBlocked; Modification=MultiplyOnePlusAVMult; ActorValue=Block; Value=0.001; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[1] — PerkEntryPointModifyActorValue**: EntryPoint=ModArmorRating; Modification=MultiplyOnePlusAVMult; ActorValue=Block; Value=0.001; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[2] — PerkEntryPointModifyActorValue**: EntryPoint=ModIncomingStagger; Modification=MultiplyOnePlusAVMult; ActorValue=Block; Value=0.001; Rank=0; Priority=2; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`0005FF:For Honor Balance Patch.esp`](../magic/MAGIC_001.md#r-30ab9cea8c92)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000600:For Honor Balance Patch.esp`](../magic/MAGIC_001.md#r-479ad2eb68de)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000601:For Honor Balance Patch.esp`](../magic/MAGIC_001.md#r-64d0ef6b0ffb)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Block|
|`Effects[0].Value`|0.001|
|`Effects[0].Modification`|MultiplyOnePlusAVMult|
|`Effects[0].EntryPoint`|ModPercentBlocked|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyActorValue]|
|`Effects[1].ActorValue`|Block|
|`Effects[1].Value`|0.001|
|`Effects[1].Modification`|MultiplyOnePlusAVMult|
|`Effects[1].EntryPoint`|ModArmorRating|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|1|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyActorValue]|
|`Effects[2].ActorValue`|Block|
|`Effects[2].Value`|0.001|
|`Effects[2].Modification`|MultiplyOnePlusAVMult|
|`Effects[2].EntryPoint`|ModIncomingStagger|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|2|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Name`|Black Prior|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7f6b537ff425"></a>

## DirectionalBlocking

- Identidade estável Housecarl: `00088D:For Honor Balance Patch.esp`.
- Tipo: `Perk`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.
- Nome: Directional Blocking; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingStagger; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingStagger; Modification=Multiply; Value=0; Rank=0; Priority=1; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingStagger; Modification=Multiply; Value=0; Rank=0; Priority=2; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000881:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-9be3f4ac7b0c)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000883:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-4409db032cce)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000880:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-1aff08abff0e)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000882:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-83ad6e95e76c)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`000880:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-1aff08abff0e)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`000882:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-83ad6e95e76c)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[2]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`000881:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-9be3f4ac7b0c)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[3]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`000883:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-4409db032cce)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModIncomingStagger|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0|
|`Effects[1].EntryPoint`|ModIncomingStagger|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|1|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|0|
|`Effects[2].EntryPoint`|ModIncomingStagger|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|2|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Name`|Directional Blocking|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-07d7e4de32c9"></a>

## Hype Up

- Identidade estável Housecarl: `0008A6:For Honor Balance Patch.esp`.
- Tipo: `Perk`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.
- Nome: Hype Up; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModAttackDamage; Modification=MultiplyOnePlusAVMult; ActorValue=Lockpicking; Value=0.0005; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[1] — PerkEntryPointModifyActorValue**: EntryPoint=ModAttackDamage; Modification=MultiplyOnePlusAVMult; ActorValue=Lockpicking; Value=0.0005; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[2] — PerkEntryPointModifyActorValue**: EntryPoint=ModAttackDamage; Modification=MultiplyOnePlusAVMult; ActorValue=Lockpicking; Value=0.0005; Rank=0; Priority=2; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[3] — PerkEntryPointModifyActorValue**: EntryPoint=ModAttackDamage; Modification=MultiplyOnePlusAVMult; ActorValue=Lockpicking; Value=0.0005; Rank=0; Priority=3; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`0008A0:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-346a15aea122)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`0008A5:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-c2a962c43cf4)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`0008A7:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-cb0da0aa6fd7)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`0008A8:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-22ae8f16eeee)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Lockpicking|
|`Effects[0].Value`|0.0005|
|`Effects[0].Modification`|MultiplyOnePlusAVMult|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyActorValue]|
|`Effects[1].ActorValue`|Lockpicking|
|`Effects[1].Value`|0.0005|
|`Effects[1].Modification`|MultiplyOnePlusAVMult|
|`Effects[1].EntryPoint`|ModAttackDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|1|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyActorValue]|
|`Effects[2].ActorValue`|Lockpicking|
|`Effects[2].Value`|0.0005|
|`Effects[2].Modification`|MultiplyOnePlusAVMult|
|`Effects[2].EntryPoint`|ModAttackDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|2|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyActorValue]|
|`Effects[3].ActorValue`|Lockpicking|
|`Effects[3].Value`|0.0005|
|`Effects[3].Modification`|MultiplyOnePlusAVMult|
|`Effects[3].EntryPoint`|ModAttackDamage|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|3|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Name`|Hype Up|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-70b3e90edf2a"></a>

## MeleeDamage

- Identidade estável Housecarl: `00087A:For Honor in Skyrim.esp`.
- Tipo: `Perk`; winner: `For Honor Balance Patch.esp`; profundidade de override: 2.
- Nome: Melee Damage Immunity; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Melee Damage Immunity|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-67e1859c7b80"></a>

## ParryAttackDamage

- Identidade estável Housecarl: `000866:For Honor in Skyrim.esp`.
- Tipo: `Perk`; winner: `For Honor Balance Patch.esp`; profundidade de override: 2.
- Nome: Extra Damage; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Extra Damage|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-3d3c10e6de31"></a>

## Reforged On Hit Effects

- Identidade estável Housecarl: `000602:For Honor Balance Patch.esp`.
- Tipo: `Perk`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.
- Nome: Reforged Directional Attack Controller; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`000815:For Honor Balance Patch.esp`](../magic/MAGIC_035.md#r-fcf651a5a056); Rank=0; Priority=1; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000887:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-fa8907c36b87)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00080F:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-dc4e465fe24d)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=000815:For Honor Balance Patch.esp|
|`Effects[0].Spell`|[`000815:For Honor Balance Patch.esp`](../magic/MAGIC_035.md#r-fcf651a5a056)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|1|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Reforged Directional Attack Controller|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-40b8d56296f2"></a>

## ReforgedDirectionalAttackController

- Identidade estável Housecarl: `000890:For Honor Balance Patch.esp`.
- Tipo: `Perk`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.
- Nome: Reforged Directional Attack Controller; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitChance; Modification=Set; Value=0; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModPercentBlocked; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModPowerAttackStamina; Modification=Multiply; Value=0.5; Rank=0; Priority=1; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.5; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=ModTargetStagger; Modification=Multiply; Value=0.25; Rank=0; Priority=1; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[5] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0.25; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModPowerAttackStamina; Modification=Multiply; Value=0.75; Rank=0; Priority=3; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.75; Rank=0; Priority=3; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[8] — PerkEntryPointModifyValue**: EntryPoint=ModTargetStagger; Modification=Multiply; Value=0.75; Rank=0; Priority=3; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[9] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0.75; Rank=0; Priority=3; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[10] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellMagnitude; Modification=MultiplyOnePlusAVMult; ActorValue=Block; Value=0.02; Rank=0; Priority=4; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[11] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=1.5; Rank=0; Priority=20; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[12] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`000815:For Honor Balance Patch.esp`](../magic/MAGIC_035.md#r-fcf651a5a056); Rank=0; Priority=21; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000887:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-fa8907c36b87)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00088A:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-b3d93959ff37)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00089B:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-2c191289fd34)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000887:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-fa8907c36b87)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000887:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-fa8907c36b87)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=025254:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000887:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-fa8907c36b87)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000887:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-fa8907c36b87)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000880:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-1aff08abff0e)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000881:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-9be3f4ac7b0c)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000882:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-83ad6e95e76c)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[3]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000883:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-4409db032cce)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000880:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-1aff08abff0e)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000881:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-9be3f4ac7b0c)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000882:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-83ad6e95e76c)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[3]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000883:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-4409db032cce)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=025254:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000880:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-1aff08abff0e)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000881:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-9be3f4ac7b0c)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000882:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-83ad6e95e76c)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[3]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000883:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-4409db032cce)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000880:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-1aff08abff0e)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000881:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-9be3f4ac7b0c)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000882:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-83ad6e95e76c)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[3]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000883:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-4409db032cce)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0008AB:For Honor Balance Patch.esp|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|GetIsReference|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Target=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0005F4:For Honor Balance Patch.esp|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000887:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-fa8907c36b87)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 13 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|CalculateMyCriticalHitChance|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0.5|
|`Effects[1].EntryPoint`|ModPercentBlocked|
|`Effects[1].PerkConditionTabCount`|1|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|0.5|
|`Effects[2].EntryPoint`|ModPowerAttackStamina|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|1|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|0.5|
|`Effects[3].EntryPoint`|ModSpellMagnitude|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|1|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Multiply|
|`Effects[4].Value`|0.25|
|`Effects[4].EntryPoint`|ModTargetStagger|
|`Effects[4].PerkConditionTabCount`|2|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|1|
|`Effects[4].Conditions`|[list: 1 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointModifyValue]|
|`Effects[5].Modification`|Multiply|
|`Effects[5].Value`|0.25|
|`Effects[5].EntryPoint`|ModAttackDamage|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|1|
|`Effects[5].Conditions`|[list: 1 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Multiply|
|`Effects[6].Value`|0.75|
|`Effects[6].EntryPoint`|ModPowerAttackStamina|
|`Effects[6].PerkConditionTabCount`|2|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|3|
|`Effects[6].Conditions`|[list: 1 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyValue]|
|`Effects[7].Modification`|Multiply|
|`Effects[7].Value`|0.75|
|`Effects[7].EntryPoint`|ModSpellMagnitude|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|3|
|`Effects[7].Conditions`|[list: 2 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointModifyValue]|
|`Effects[8].Modification`|Multiply|
|`Effects[8].Value`|0.75|
|`Effects[8].EntryPoint`|ModTargetStagger|
|`Effects[8].PerkConditionTabCount`|2|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|3|
|`Effects[8].Conditions`|[list: 1 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointModifyValue]|
|`Effects[9].Modification`|Multiply|
|`Effects[9].Value`|0.75|
|`Effects[9].EntryPoint`|ModAttackDamage|
|`Effects[9].PerkConditionTabCount`|3|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|3|
|`Effects[9].Conditions`|[list: 1 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointModifyActorValue]|
|`Effects[10].ActorValue`|Block|
|`Effects[10].Value`|0.02|
|`Effects[10].Modification`|MultiplyOnePlusAVMult|
|`Effects[10].EntryPoint`|ModSpellMagnitude|
|`Effects[10].PerkConditionTabCount`|3|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|4|
|`Effects[10].Conditions`|[list: 1 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointModifyValue]|
|`Effects[11].Modification`|Multiply|
|`Effects[11].Value`|1.5|
|`Effects[11].EntryPoint`|ModSpellDuration|
|`Effects[11].PerkConditionTabCount`|3|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|20|
|`Effects[11].Conditions`|[list: 2 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Effects[12]`|[PerkEntryPointSelectSpell] Spell=000815:For Honor Balance Patch.esp|
|`Effects[12].Spell`|[`000815:For Honor Balance Patch.esp`](../magic/MAGIC_035.md#r-fcf651a5a056)|
|`Effects[12].EntryPoint`|ApplyCombatHitSpell|
|`Effects[12].PerkConditionTabCount`|3|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|21|
|`Effects[12].Conditions`|[list: 1 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|0|
|`Effects[12].Flags.FragmentIndex`|0|
|`Name`|Reforged Directional Attack Controller|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b7e30ea1ca96"></a>

## ReforgedFollowupController

- Identidade estável Housecarl: `00088E:For Honor Balance Patch.esp`.
- Tipo: `Perk`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.
- Nome: Reforged Followup Controller; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModPowerAttackStamina; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.5; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyActorValue**: EntryPoint=ModAttackDamage; Modification=MultiplyOnePlusAVMult; ActorValue=Block; Value=0.0025; Rank=0; Priority=2; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingStagger; Modification=Multiply; Value=0; Rank=0; Priority=3; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0.9; Rank=0; Priority=4; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[5] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=2; Rank=0; Priority=5; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModTargetStagger; Modification=Multiply; Value=0.9; Rank=0; Priority=6; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0.9; Rank=0; Priority=6; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[8] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=0.9; Rank=0; Priority=6; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[9] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`0008A9:For Honor Balance Patch.esp`](../magic/MAGIC_036.md#r-d42b4e7985c6); Rank=0; Priority=7; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00081E:For Honor Balance Patch.esp`](../magic/MAGIC_003.md#r-86dd75aaa940)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000894:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-01df5b91cbbc)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00081E:For Honor Balance Patch.esp`](../magic/MAGIC_003.md#r-86dd75aaa940)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000894:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-01df5b91cbbc)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=025254:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00081E:For Honor Balance Patch.esp`](../magic/MAGIC_003.md#r-86dd75aaa940)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00081E:For Honor Balance Patch.esp`](../magic/MAGIC_003.md#r-86dd75aaa940)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000894:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-01df5b91cbbc)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|GetIsReference|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Target=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=000895:For Honor Balance Patch.esp|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00060E:For Honor Balance Patch.esp`](../magic/MAGIC_001.md#r-05763520738b)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00086F:For Honor Balance Patch.esp`](../magic/MAGIC_004.md#r-df5d229e16a7)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00081B:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-7b04ae7da0ce)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`0008BC:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-290b52ac6791)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|IsBlocking|2|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 10 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModPowerAttackStamina|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0.5|
|`Effects[1].EntryPoint`|ModSpellMagnitude|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|1|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyActorValue]|
|`Effects[2].ActorValue`|Block|
|`Effects[2].Value`|0.0025|
|`Effects[2].Modification`|MultiplyOnePlusAVMult|
|`Effects[2].EntryPoint`|ModAttackDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|2|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|0|
|`Effects[3].EntryPoint`|ModIncomingStagger|
|`Effects[3].PerkConditionTabCount`|2|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|3|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Multiply|
|`Effects[4].Value`|0.9|
|`Effects[4].EntryPoint`|ModAttackDamage|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|4|
|`Effects[4].Conditions`|[list: 0 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointModifyValue]|
|`Effects[5].Modification`|Multiply|
|`Effects[5].Value`|2|
|`Effects[5].EntryPoint`|ModSpellDuration|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|5|
|`Effects[5].Conditions`|[list: 2 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Multiply|
|`Effects[6].Value`|0.9|
|`Effects[6].EntryPoint`|ModTargetStagger|
|`Effects[6].PerkConditionTabCount`|2|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|6|
|`Effects[6].Conditions`|[list: 1 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyValue]|
|`Effects[7].Modification`|Multiply|
|`Effects[7].Value`|0.9|
|`Effects[7].EntryPoint`|ModAttackDamage|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|6|
|`Effects[7].Conditions`|[list: 1 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointModifyValue]|
|`Effects[8].Modification`|Multiply|
|`Effects[8].Value`|0.9|
|`Effects[8].EntryPoint`|ModArmorRating|
|`Effects[8].PerkConditionTabCount`|2|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|6|
|`Effects[8].Conditions`|[list: 1 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointSelectSpell] Spell=0008A9:For Honor Balance Patch.esp|
|`Effects[9].Spell`|[`0008A9:For Honor Balance Patch.esp`](../magic/MAGIC_036.md#r-d42b4e7985c6)|
|`Effects[9].EntryPoint`|ApplyCombatHitSpell|
|`Effects[9].PerkConditionTabCount`|3|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|7|
|`Effects[9].Conditions`|[list: 1 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Name`|Reforged Followup Controller|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-eef5f3d5b3e0"></a>

## ReforgedParryController

- Identidade estável Housecarl: `000876:For Honor Balance Patch.esp`.
- Tipo: `Perk`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.
- Nome: Reforged Parry Controller; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellMagnitude; Modification=MultiplyAVMult; ActorValue=Block; Value=0.007; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingStagger; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0.1; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=ModTargetStagger; Modification=Multiply; Value=0; Rank=0; Priority=2; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`0005F7:For Honor Balance Patch.esp`](../magic/MAGIC_034.md#r-a043c14e69a7); Rank=0; Priority=3; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`000892:For Honor Balance Patch.esp`](../magic/MAGIC_036.md#r-bfbbc07ed018); Rank=0; Priority=4; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[7] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellDuration; Modification=MultiplyOnePlusAVMult; ActorValue=Block; Value=0.007; Rank=0; Priority=5; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[8] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.6; Rank=0; Priority=6; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[9] — PerkEntryPointModifyActorValue**: EntryPoint=ModIncomingDamage; Modification=MultiplyOnePlusAVMult; ActorValue=Block; Value=-0.005; Rank=0; Priority=6; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[10] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.4; Rank=0; Priority=7; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[11] — PerkEntryPointModifyActorValue**: EntryPoint=ModIncomingDamage; Modification=MultiplyOnePlusAVMult; ActorValue=Block; Value=-0.005; Rank=0; Priority=7; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[12] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`000605:For Honor Balance Patch.esp`](../magic/MAGIC_035.md#r-0eab2f0f2980); Rank=0; Priority=8; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[13] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`000803:For Honor Balance Patch.esp`](../magic/MAGIC_035.md#r-ee7dc1f1ba94); Rank=0; Priority=8; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0005F6:For Honor Balance Patch.esp|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000810:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-32e14fc0e619)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00080F:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-dc4e465fe24d)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000811:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-35145a923796)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00082A:For Honor Balance Patch.esp`](../magic/MAGIC_003.md#r-b70abd5b7adc)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000609:For Honor Balance Patch.esp`](../magic/MAGIC_001.md#r-39cd68876cc6)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00060B:For Honor Balance Patch.esp`](../magic/MAGIC_001.md#r-20dd768ffa0d)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00088A:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-b3d93959ff37)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00088A:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-b3d93959ff37)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`00082A:For Honor Balance Patch.esp`](../magic/MAGIC_003.md#r-b70abd5b7adc)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`000811:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-35145a923796)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|GetIsReference|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Target=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00088A:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-b3d93959ff37)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`00082A:For Honor Balance Patch.esp`](../magic/MAGIC_003.md#r-b70abd5b7adc)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`000811:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-35145a923796)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000894:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-01df5b91cbbc)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00088A:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-b3d93959ff37)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00082A:For Honor Balance Patch.esp`](../magic/MAGIC_003.md#r-b70abd5b7adc)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=000895:For Honor Balance Patch.esp|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000810:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-32e14fc0e619)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00082A:For Honor Balance Patch.esp`](../magic/MAGIC_003.md#r-b70abd5b7adc)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000609:For Honor Balance Patch.esp`](../magic/MAGIC_001.md#r-39cd68876cc6)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[3]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00060B:For Honor Balance Patch.esp`](../magic/MAGIC_001.md#r-20dd768ffa0d)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000810:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-32e14fc0e619)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00082A:For Honor Balance Patch.esp`](../magic/MAGIC_003.md#r-b70abd5b7adc)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00080F:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-dc4e465fe24d)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000811:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-35145a923796)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000894:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-01df5b91cbbc)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00080F:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-dc4e465fe24d)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000811:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-35145a923796)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000894:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-01df5b91cbbc)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 14 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Block|
|`Effects[0].Value`|0.007|
|`Effects[0].Modification`|MultiplyAVMult|
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
|`Effects[1].Value`|0|
|`Effects[1].EntryPoint`|ModIncomingStagger|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|0.5|
|`Effects[2].EntryPoint`|ModAttackDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|1|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|0.1|
|`Effects[3].EntryPoint`|ModAttackDamage|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|1|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Multiply|
|`Effects[4].Value`|0|
|`Effects[4].EntryPoint`|ModTargetStagger|
|`Effects[4].PerkConditionTabCount`|2|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|2|
|`Effects[4].Conditions`|[list: 1 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=0005F7:For Honor Balance Patch.esp|
|`Effects[5].Spell`|[`0005F7:For Honor Balance Patch.esp`](../magic/MAGIC_034.md#r-a043c14e69a7)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|3|
|`Effects[5].Conditions`|[list: 1 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointSelectSpell] Spell=000892:For Honor Balance Patch.esp|
|`Effects[6].Spell`|[`000892:For Honor Balance Patch.esp`](../magic/MAGIC_036.md#r-bfbbc07ed018)|
|`Effects[6].EntryPoint`|ApplyCombatHitSpell|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|4|
|`Effects[6].Conditions`|[list: 1 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyActorValue]|
|`Effects[7].ActorValue`|Block|
|`Effects[7].Value`|0.007|
|`Effects[7].Modification`|MultiplyOnePlusAVMult|
|`Effects[7].EntryPoint`|ModSpellDuration|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|5|
|`Effects[7].Conditions`|[list: 1 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointModifyValue]|
|`Effects[8].Modification`|Multiply|
|`Effects[8].Value`|0.6|
|`Effects[8].EntryPoint`|ModIncomingDamage|
|`Effects[8].PerkConditionTabCount`|3|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|6|
|`Effects[8].Conditions`|[list: 1 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointModifyActorValue]|
|`Effects[9].ActorValue`|Block|
|`Effects[9].Value`|-0.005|
|`Effects[9].Modification`|MultiplyOnePlusAVMult|
|`Effects[9].EntryPoint`|ModIncomingDamage|
|`Effects[9].PerkConditionTabCount`|3|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|6|
|`Effects[9].Conditions`|[list: 1 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointModifyValue]|
|`Effects[10].Modification`|Multiply|
|`Effects[10].Value`|0.4|
|`Effects[10].EntryPoint`|ModIncomingDamage|
|`Effects[10].PerkConditionTabCount`|3|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|7|
|`Effects[10].Conditions`|[list: 1 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointModifyActorValue]|
|`Effects[11].ActorValue`|Block|
|`Effects[11].Value`|-0.005|
|`Effects[11].Modification`|MultiplyOnePlusAVMult|
|`Effects[11].EntryPoint`|ModIncomingDamage|
|`Effects[11].PerkConditionTabCount`|3|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|7|
|`Effects[11].Conditions`|[list: 1 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Effects[12]`|[PerkEntryPointSelectSpell] Spell=000605:For Honor Balance Patch.esp|
|`Effects[12].Spell`|[`000605:For Honor Balance Patch.esp`](../magic/MAGIC_035.md#r-0eab2f0f2980)|
|`Effects[12].EntryPoint`|ApplyCombatHitSpell|
|`Effects[12].PerkConditionTabCount`|3|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|8|
|`Effects[12].Conditions`|[list: 0 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|0|
|`Effects[12].Flags.FragmentIndex`|0|
|`Effects[13]`|[PerkEntryPointSelectSpell] Spell=000803:For Honor Balance Patch.esp|
|`Effects[13].Spell`|[`000803:For Honor Balance Patch.esp`](../magic/MAGIC_035.md#r-ee7dc1f1ba94)|
|`Effects[13].EntryPoint`|ApplyCombatHitSpell|
|`Effects[13].PerkConditionTabCount`|3|
|`Effects[13].Rank`|0|
|`Effects[13].Priority`|8|
|`Effects[13].Conditions`|[list: 0 item(s)]|
|`Effects[13].Flags`|[PerkScriptFlag]|
|`Effects[13].Flags.Flags`|0|
|`Effects[13].Flags.FragmentIndex`|0|
|`Name`|Reforged Parry Controller|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-c8b19bb4174a"></a>

## StaggerHit

- Identidade estável Housecarl: `00084A:For Honor in Skyrim.esp`.
- Tipo: `Perk`; winner: `For Honor Balance Patch.esp`; profundidade de override: 2.
- Nome: Stagger Hit; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Stagger Hit|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-ceb5f38c5dce"></a>

## StaggerResistance

- Identidade estável Housecarl: `000819:For Honor in Skyrim.esp`.
- Tipo: `Perk`; winner: `For Honor Balance Patch.esp`; profundidade de override: 2.
- Nome: Stagger Resistance; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Stagger Resistance|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-18bc028e1715"></a>

## OnHit

- Identidade estável Housecarl: `00087B:For Honor in Skyrim.esp`.
- Tipo: `Perk`; winner: `For Honor in Skyrim.esp`; profundidade de override: 1.
- Nome: On Hit; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`00080B:For Honor in Skyrim.esp`](../magic/MAGIC_035.md#r-63ce5a1263c7); Rank=0; Priority=25; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00082E:For Honor in Skyrim.esp`](../magic/MAGIC_003.md#r-6346f832a9d1)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetDead|2|Subject; ref=(null link); index=-1|NotEqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=00080B:For Honor in Skyrim.esp|
|`Effects[0].Spell`|[`00080B:For Honor in Skyrim.esp`](../magic/MAGIC_035.md#r-63ce5a1263c7)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|25|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|On Hit|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-740d31418f25"></a>

## BYOHRestedAdoptionPerk

- Identidade estável Housecarl: `004295:HearthFires.esm`.
- Tipo: `Perk`; winner: `HearthFires.esm`; profundidade de override: 1.
- Nome: Parent's Touch; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=False, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.25; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEB0:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=042503:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.25|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Parent's Touch|
|`NumRanks`|1|
|`Playable`|False|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b514586da429"></a>

## GRIM_PERK__CompanionsSafe

- Identidade estável Housecarl: `1364C6:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: GRIM Companions Safe; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

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
|`Effects[0].Conditions[1].Conditions[0]`|IsCombatTarget|2|Subject; ref=(null link); index=-1|EqualTo 0|0|TargetNpc=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsInCombat|2|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|GetInFaction|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Faction=070AFE:LostGrimoire.esp|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`01E7F0:Dragonborn.esm`](../perks/PERKS_001.md#r-1d65414ca5d8)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=1364C5:LostGrimoire.esp|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=14FA41:LostGrimoire.esp|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=17F246:LostGrimoire.esp|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=17F247:LostGrimoire.esp|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|IsCombatTarget|2|Subject; ref=(null link); index=-1|EqualTo 0|0|TargetNpc=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[1]`|IsInCombat|2|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[2]`|GetInFaction|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|Faction=05C84E:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[3]`|GetPlayerTeammate|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|1|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0|
|`Effects[1].EntryPoint`|ModSpellMagnitude|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|GRIM Companions Safe|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-afb8c478436f"></a>

## GRIM_PERK__SilentSpells

- Identidade estável Housecarl: `235925:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: GRIM Silent Spells; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCastingSoundEvent; Modification=Set; Value=0; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0581E2:Skyrim.esm`](../perks/PERKS_013.md#r-6008312af95f)<br>Parameter1.Link=[`0581E2:Skyrim.esm`](../perks/PERKS_013.md#r-6008312af95f)|aliases=False; package=False|
|`Conditions[1]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`2214DA:LostGrimoire.esp`](../magic/MAGIC_047.md#r-6b11df62e9b0)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`221502:LostGrimoire.esp`](../magic/MAGIC_047.md#r-c2d00cf1afb0)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`2214F7:LostGrimoire.esp`](../magic/MAGIC_047.md#r-f5fc7c05fbd1)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`22150E:LostGrimoire.esp`](../magic/MAGIC_047.md#r-5bf297f1b27a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`23FB27:LostGrimoire.esp`](../magic/MAGIC_047.md#r-750855dd7cf0)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`23FB33:LostGrimoire.esp`](../magic/MAGIC_047.md#r-c85528fc05d0)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`31E9BB:LostGrimoire.esp`](../magic/MAGIC_049.md#r-e22aa45043d2)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`30034E:LostGrimoire.esp`](../magic/MAGIC_049.md#r-758cf9a420b5)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[8]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`337F03:LostGrimoire.esp`](../magic/MAGIC_050.md#r-7dcf5d92f027)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[9]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`34C3AE:LostGrimoire.esp`](../magic/MAGIC_051.md#r-6f4b783e6b26)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModSpellCastingSoundEvent|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|GRIM Silent Spells|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0d5e58fcf6dd"></a>

## GRIM_PERK__SummonsNoFriendlyFire

- Identidade estável Housecarl: `14A8F3:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: GRIM Summons No Friendly Fire; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=046B99:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0|
|`Effects[1].EntryPoint`|ModAttackDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|GRIM Summons No Friendly Fire|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-f90218221bf1"></a>

## GRIM_PERK__TestApplyCombatHitSpell

- Identidade estável Housecarl: `2D7A8E:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: GRIM Test Apply Combat Hit Spell; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`2D7A8D:LostGrimoire.esp`](../magic/MAGIC_049.md#r-311ac2f8f299); Rank=0; Priority=109; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=2D7A8D:LostGrimoire.esp|
|`Effects[0].Spell`|[`2D7A8D:LostGrimoire.esp`](../magic/MAGIC_049.md#r-311ac2f8f299)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|109|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|GRIM Test Apply Combat Hit Spell|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-871c827c9301"></a>

## GRIM_PERK_ALT_Featherlight

- Identidade estável Housecarl: `07AD03:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModFallingDamage; Modification=Set; Value=0; Rank=0; Priority=0; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

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
|`Effects[0].EntryPoint`|ModFallingDamage|
|`Effects[0].PerkConditionTabCount`|1|
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
