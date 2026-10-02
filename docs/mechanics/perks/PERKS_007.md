# Perks instaladas — parte 007

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-38c617661f53"></a>

## DLC1DurnehviirMultipleSummon

- Identidade estável Housecarl: `01A33C:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Multiple Summon; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=False, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModCommandedActorLimit; Modification=Set; Value=5; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

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
|`Effects[0].Value`|5|
|`Effects[0].EntryPoint`|ModCommandedActorLimit|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Multiple Summon|
|`NumRanks`|1|
|`Playable`|False|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-91901e341fef"></a>

## DLC1EnchancedCrossbowArmorPiercingPerk

- Identidade estável Housecarl: `00399B:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Enhanced Crossbow; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModTargetDamageResistance; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=00399C:Dawnguard.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModTargetDamageResistance|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Enhanced Crossbow|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7b87d99b9247"></a>

## DLC1HarkonTurningImmunity

- Identidade estável Housecarl: `014CCE:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Harkon Turning Immunity; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0BD83F:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Harkon Turning Immunity|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-22920703b6be"></a>

## DLC1LD_AetherialCrownPerk

- Identidade estável Housecarl: `00D00A:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Aetherial Crown; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=0; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=0D2331:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=0D2334:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=0D2330:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=0D2336:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=0D2332:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=0D232E:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=0D2337:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=0D2339:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[8]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=0D2335:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[9]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=0D2333:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[10]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=0D232F:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[11]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=0D2338:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[12]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=0D232D:Skyrim.esm|aliases=False; package=False|

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
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|RunImmediately|
|`Effects[0].Flags.FragmentIndex`|0|
|`VirtualMachineAdapter`|[PerkAdapter]|
|`VirtualMachineAdapter.ScriptFragments`|[PerkScriptFragments]|
|`VirtualMachineAdapter.ScriptFragments.Fragments`|[list: 1 item(s)]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentIndex`|0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].ScriptName`|DLC1_PRKF_DLC1LD_AetherialCro_0100D00A|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentName`|Fragment_0|
|`VirtualMachineAdapter.ScriptFragments.ExtraBindDataVersion`|2|
|`VirtualMachineAdapter.ScriptFragments.FileName`|DLC1_PRKF_DLC1LD_AetherialCro_0100D00A|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1_PRKF_DLC1LD_AetherialCro_0100D00A|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1_PRKF_DLC1LD_AetherialCro_0100D00A|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=AetherialCrown|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|00CFFD:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|0|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|AetherialCrown|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
|`Name`|Aetherial Crown|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0b6b282cb708"></a>

## DLC1LDPerk

- Identidade estável Housecarl: `00D00B:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Avoid Death; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`0A3F65:Skyrim.esm`](../magic/MAGIC_044.md#r-646959777b48); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0581F4:Skyrim.esm`](../perks/PERKS_056.md#r-efbd2326e841)<br>Parameter1.Link=[`0581F4:Skyrim.esm`](../perks/PERKS_056.md#r-efbd2326e841)|aliases=False; package=False|
|`Conditions[1]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=0A3F65:Skyrim.esm|
|`Effects[0].Ability`|[`0A3F65:Skyrim.esm`](../magic/MAGIC_044.md#r-646959777b48)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Avoid Death|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-ee07d0a82f7c"></a>

## DLC1NightCloakPerk

- Identidade estável Housecarl: `005997:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Night Cloak; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=01964A:Dawnguard.esm; Stage=110; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`005996:Dawnguard.esm`](../perks/PERKS_007.md#r-73d837bebe3d)<br>Parameter1.Link=[`005996:Dawnguard.esm`](../perks/PERKS_007.md#r-73d837bebe3d)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=01964A:Dawnguard.esm|
|`Effects[0].Quest`|01964A:Dawnguard.esm|
|`Effects[0].Stage`|110|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Night Cloak|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-31d884664ea3"></a>

## DLC1PlayerWerewolfSavageFeeding

- Identidade estável Housecarl: `008A6E:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Savage Feeding; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=False, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=FilterActivation; Modification=Add; Value=1; Rank=0; Priority=10; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=FilterActivation; Modification=Add; Value=1; Rank=0; Priority=9; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=FilterActivation; Modification=Add; Value=1; Rank=0; Priority=8; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=FilterActivation; Modification=Add; Value=1; Rank=0; Priority=7; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=ModShoutOk; Modification=Add; Value=1; Rank=0; Priority=5; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[5] — PerkEntryPointSetText**: EntryPoint=SetActivateLabel; Rank=0; Priority=2; PerkConditionTabCount=2. Altera texto associado ao entry point; separar apresentação de qualquer transação ou ativação resultante.
- **Effects[6] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=[`106396:Skyrim.esm`](../magic/MAGIC_046.md#r-1eb07be9aed8); Rank=0; Priority=1; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetQuestRunning|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Quest=0AEBFE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetIsReference|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Target=041248:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetIsReference|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Target=01A702:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|GetIsReference|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Target=04816A:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|GetIsReference|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Target=04816B:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`092C45:Skyrim.esm`](../magic/MAGIC_015.md#r-e1a3ed0a705f)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`0F8209:Skyrim.esm`](../magic/MAGIC_018.md#r-2ae3ddab429c)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=100769:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|IsUnlockedDoor|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|GetDead|1|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|HasBeenEaten|1|Subject; ref=(null link); index=-1|NotEqualTo 0|OR|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsSprinting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Race=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013797:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01397A:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=035D59:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0D205E:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013796:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`092C45:Skyrim.esm`](../magic/MAGIC_015.md#r-e1a3ed0a705f)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`0F8209:Skyrim.esm`](../magic/MAGIC_018.md#r-2ae3ddab429c)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`092C45:Skyrim.esm`](../magic/MAGIC_015.md#r-e1a3ed0a705f)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`0F8209:Skyrim.esm`](../magic/MAGIC_018.md#r-2ae3ddab429c)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[1]`|HasBeenEaten|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`092C45:Skyrim.esm`](../magic/MAGIC_015.md#r-e1a3ed0a705f)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`0F8209:Skyrim.esm`](../magic/MAGIC_018.md#r-2ae3ddab429c)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0D205E:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013797:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[5]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 7 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|1|
|`Effects[0].EntryPoint`|FilterActivation|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|10|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Add|
|`Effects[1].Value`|1|
|`Effects[1].EntryPoint`|FilterActivation|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|9|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Add|
|`Effects[2].Value`|1|
|`Effects[2].EntryPoint`|FilterActivation|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|8|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Add|
|`Effects[3].Value`|1|
|`Effects[3].EntryPoint`|FilterActivation|
|`Effects[3].PerkConditionTabCount`|2|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|7|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Add|
|`Effects[4].Value`|1|
|`Effects[4].EntryPoint`|ModShoutOk|
|`Effects[4].PerkConditionTabCount`|1|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|5|
|`Effects[4].Conditions`|[list: 1 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSetText]|
|`Effects[5].Text`|Feed|
|`Effects[5].EntryPoint`|SetActivateLabel|
|`Effects[5].PerkConditionTabCount`|2|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|2|
|`Effects[5].Conditions`|[list: 2 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointAddActivateChoice] Spell=106396:Skyrim.esm|
|`Effects[6].Spell`|[`106396:Skyrim.esm`](../magic/MAGIC_046.md#r-1eb07be9aed8)|
|`Effects[6].EntryPoint`|Activate|
|`Effects[6].PerkConditionTabCount`|2|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|1|
|`Effects[6].Conditions`|[list: 2 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[6].Flags.FragmentIndex`|0|
|`VirtualMachineAdapter`|[PerkAdapter]|
|`VirtualMachineAdapter.ScriptFragments`|[PerkScriptFragments]|
|`VirtualMachineAdapter.ScriptFragments.Fragments`|[list: 1 item(s)]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentIndex`|0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].ScriptName`|DLC1_PRKF_DLC1PlayerWerewolfS_01008A6E|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentName`|Fragment_0|
|`VirtualMachineAdapter.ScriptFragments.ExtraBindDataVersion`|2|
|`VirtualMachineAdapter.ScriptFragments.FileName`|DLC1_PRKF_DLC1PlayerWerewolfS_01008A6E|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1_PRKF_DLC1PlayerWerewolfS_01008A6E|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1_PRKF_DLC1PlayerWerewolfS_01008A6E|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerWerewolfQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|02BA16:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerWerewolfQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
|`Name`|Savage Feeding|
|`NumRanks`|1|
|`Playable`|False|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-73d837bebe3d"></a>

## DLC1PoisonTalons

- Identidade estável Housecarl: `005996:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Poison Talons; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=01964A:Dawnguard.esm; Stage=100; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`005994:Dawnguard.esm`](../perks/PERKS_042.md#r-e9dc435e15be)<br>Parameter1.Link=[`005994:Dawnguard.esm`](../perks/PERKS_042.md#r-e9dc435e15be)|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`005995:Dawnguard.esm`](../perks/PERKS_007.md#r-2f509f284e2a)<br>Parameter1.Link=[`005995:Dawnguard.esm`](../perks/PERKS_007.md#r-2f509f284e2a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=01964A:Dawnguard.esm|
|`Effects[0].Quest`|01964A:Dawnguard.esm|
|`Effects[0].Stage`|100|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Poison Talons|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-dc76d18282da"></a>

## DLC1SupernaturalReflexesPerk

- Identidade estável Housecarl: `00599E:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Supernatural Reflexes; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=01964A:Dawnguard.esm; Stage=60; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`00599C:Dawnguard.esm`](../perks/PERKS_042.md#r-37e225513223)<br>Parameter1.Link=[`00599C:Dawnguard.esm`](../perks/PERKS_042.md#r-37e225513223)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=01964A:Dawnguard.esm|
|`Effects[0].Quest`|01964A:Dawnguard.esm|
|`Effects[0].Stage`|60|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Supernatural Reflexes|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2f509f284e2a"></a>

## DLC1UnearthlyWill

- Identidade estável Housecarl: `005995:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Unearthly Will; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=01964A:Dawnguard.esm; Stage=80; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.67; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`005998:Dawnguard.esm`](../perks/PERKS_042.md#r-35a0348fa2e4)<br>Parameter1.Link=[`005998:Dawnguard.esm`](../perks/PERKS_042.md#r-35a0348fa2e4)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`0038B9:Dawnguard.esm`](../magic/MAGIC_037.md#r-706e037cb927)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`0038BA:Dawnguard.esm`](../magic/MAGIC_037.md#r-7f2a77556181)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`0038BC:Dawnguard.esm`](../magic/MAGIC_037.md#r-30bf4df8462d)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`0038B8:Dawnguard.esm`](../magic/MAGIC_037.md#r-81ac7dec4ecf)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`0038B7:Dawnguard.esm`](../magic/MAGIC_037.md#r-ead415161d6e)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`016909:Dawnguard.esm`](../magic/MAGIC_038.md#r-cb0622d598cd)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`008A6F:Dawnguard.esm`](../magic/MAGIC_037.md#r-e4daa4dd70bb)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[7]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`00BA54:Dawnguard.esm`](../magic/MAGIC_038.md#r-23ff29114491)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[8]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`013EC8:Dawnguard.esm`](../magic/MAGIC_038.md#r-c9f9a141516a)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[9]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`013EC9:Dawnguard.esm`](../magic/MAGIC_038.md#r-cfbbb4195688)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[10]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`013ECA:Dawnguard.esm`](../magic/MAGIC_038.md#r-8c8e05c7aa52)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[11]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`013ECB:Dawnguard.esm`](../magic/MAGIC_038.md#r-b310c9f497c5)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=01964A:Dawnguard.esm|
|`Effects[0].Quest`|01964A:Dawnguard.esm|
|`Effects[0].Stage`|80|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0.67|
|`Effects[1].EntryPoint`|ModSpellCost|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Unearthly Will|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-85239bfaff1e"></a>

## DLC1VampireActivationBlocker

- Identidade estável Housecarl: `0110CF:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Activation Blocker; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=FilterActivation; Modification=Add; Value=1; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00283C:Dawnguard.esm`](../magic/MAGIC_007.md#r-fc1f801f6657)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00283E:Dawnguard.esm`](../magic/MAGIC_007.md#r-8fcccd352176)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=100769:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsUnlockedDoor|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

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

<a id="r-9bd981877493"></a>

## DLC1VampireFeedDexionVampireSeduction

- Identidade estável Housecarl: `005054:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Set; Value=9999; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`0C4DE2:Skyrim.esm`](../magic/MAGIC_044.md#r-42b70e768ada)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=0058B0:Dawnguard.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|9999|
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
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-1d50651d609b"></a>

## DLC1VampireSeductionBoost

- Identidade estável Housecarl: `01459D:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Set; Value=9999; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`0C4DE2:Skyrim.esm`](../magic/MAGIC_044.md#r-42b70e768ada)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetInFaction|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Faction=01459E:Dawnguard.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|9999|
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

<a id="r-c5e8a6a45e19"></a>

## DLC1VampireSleepPerk

- Identidade estável Housecarl: `008E3F:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Vampire Sleep Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=False, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=20; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[1] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=10; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0A82BB:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0FDBE9:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01932A:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=00B64D:Dawnguard.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0FDBE9:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01932A:Dawnguard.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=00B64D:Dawnguard.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[0].EntryPoint`|Activate|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|20|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|RunImmediately|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[1].EntryPoint`|Activate|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|10|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|RunImmediately|
|`Effects[1].Flags.FragmentIndex`|1|
|`VirtualMachineAdapter`|[PerkAdapter]|
|`VirtualMachineAdapter.ScriptFragments`|[PerkScriptFragments]|
|`VirtualMachineAdapter.ScriptFragments.Fragments`|[list: 2 item(s)]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentIndex`|0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].ScriptName`|DLC1_PRKF_DLC1VampireSleepPer_01008E3F|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentName`|Fragment_7|
|`VirtualMachineAdapter.ScriptFragments.Fragments[1]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[1].FragmentIndex`|1|
|`VirtualMachineAdapter.ScriptFragments.Fragments[1].ScriptName`|DLC1_PRKF_DLC1VampireSleepPer_01008E3F|
|`VirtualMachineAdapter.ScriptFragments.Fragments[1].FragmentName`|Fragment_11|
|`VirtualMachineAdapter.ScriptFragments.ExtraBindDataVersion`|2|
|`VirtualMachineAdapter.ScriptFragments.FileName`|DLC1_PRKF_DLC1VampireSleepPer_01008E3F|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1_PRKF_DLC1VampireSleepPer_01008E3F|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1_PRKF_DLC1VampireSleepPer_01008E3F|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DLC1VampireSleep|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|008E3B:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DLC1VampireSleep|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
|`Name`|Vampire Sleep Perk|
|`NumRanks`|1|
|`Playable`|False|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-d586b8adac61"></a>

## DLC1VampireTurnPerk

- Identidade estável Housecarl: `00588B:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Turn; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=False, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=[`106396:Skyrim.esm`](../magic/MAGIC_046.md#r-1eb07be9aed8); Rank=0; Priority=0; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=0216A9:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=013794:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetInFaction|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Faction=0142E6:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|GetInFaction|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Faction=00588D:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|GetInFaction|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Faction=0142E7:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00BF72:Dawnguard.esm`](../magic/MAGIC_007.md#r-1197027a77ba)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointAddActivateChoice] Spell=106396:Skyrim.esm|
|`Effects[0].Spell`|[`106396:Skyrim.esm`](../magic/MAGIC_046.md#r-1eb07be9aed8)|
|`Effects[0].EntryPoint`|Activate|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].ButtonLabel`|Turn into Vampire|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`VirtualMachineAdapter`|[PerkAdapter]|
|`VirtualMachineAdapter.ScriptFragments`|[PerkScriptFragments]|
|`VirtualMachineAdapter.ScriptFragments.Fragments`|[list: 1 item(s)]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentIndex`|0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].ScriptName`|DLC1_PRKF_DLC1VampireTurnPerk_0100588B|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentName`|Fragment_0|
|`VirtualMachineAdapter.ScriptFragments.ExtraBindDataVersion`|2|
|`VirtualMachineAdapter.ScriptFragments.FileName`|DLC1_PRKF_DLC1VampireTurnPerk_0100588B|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1_PRKF_DLC1VampireTurnPerk_0100588B|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1_PRKF_DLC1VampireTurnPerk_0100588B|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DLC1VampireTurn|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|00588C:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DLC1VampireTurn|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
|`Name`|Turn|
|`NumRanks`|1|
|`Playable`|False|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2aa139d565d6"></a>

## DLC1VampiricGrip

- Identidade estável Housecarl: `00599A:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Vampiric Grip; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=01964A:Dawnguard.esm; Stage=10; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.
- **Effects[1] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=0; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`005998:Dawnguard.esm`](../perks/PERKS_042.md#r-35a0348fa2e4)<br>Parameter1.Link=[`005998:Dawnguard.esm`](../perks/PERKS_042.md#r-35a0348fa2e4)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`007EBD:Dawnguard.esm`](../magic/MAGIC_007.md#r-5eaf11c82e78)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Race=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=013794:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=01964A:Dawnguard.esm|
|`Effects[0].Quest`|01964A:Dawnguard.esm|
|`Effects[0].Stage`|10|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[1].EntryPoint`|Activate|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].ButtonLabel`|Drain Blood|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`VirtualMachineAdapter`|[PerkAdapter]|
|`VirtualMachineAdapter.ScriptFragments`|[PerkScriptFragments]|
|`VirtualMachineAdapter.ScriptFragments.Fragments`|[list: 1 item(s)]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentIndex`|0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].ScriptName`|DLC1_PRKF_DLC1VampiricGrip_0100599A|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentName`|Fragment_1|
|`VirtualMachineAdapter.ScriptFragments.ExtraBindDataVersion`|2|
|`VirtualMachineAdapter.ScriptFragments.FileName`|DLC1_PRKF_DLC1VampiricGrip_0100599A|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1_PRKF_DLC1VampiricGrip_0100599A|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1_PRKF_DLC1VampiricGrip_0100599A|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DLCPlayerVampireFeedMsg|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0071D4:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DLCPlayerVampireFeedMsg|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=VampireTransformDecreaseISMD|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0FD816:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VampireTransformDecreaseISMD|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
|`Name`|Vampiric Grip|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-4f432a8edd42"></a>

## DLC1VyrthurArmorBoost

- Identidade estável Housecarl: `0138C3:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 1.
- Nome: Armor Boost; ranks declarados: 1; NextPerk: [`079376:Skyrim.esm`](../perks/PERKS_054.md#r-2bdf22914a87).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=2; Rank=0; Priority=4; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.8; Rank=0; Priority=3; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.6; Rank=0; Priority=2; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.4; Rank=0; Priority=1; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetLevel|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetLevel|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 35|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetLevel|0|Subject; ref=(null link); index=-1|LessThan 40|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetLevel|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|GetLevel|0|Subject; ref=(null link); index=-1|LessThan 35|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|GetLevel|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 25|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|GetLevel|0|Subject; ref=(null link); index=-1|LessThan 30|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|GetLevel|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|GetLevel|0|Subject; ref=(null link); index=-1|LessThan 25|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 5 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModArmorRating|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|4|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.8|
|`Effects[1].EntryPoint`|ModArmorRating|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|3|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|1.6|
|`Effects[2].EntryPoint`|ModArmorRating|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|2|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|1.4|
|`Effects[3].EntryPoint`|ModArmorRating|
|`Effects[3].PerkConditionTabCount`|2|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|1|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Multiply|
|`Effects[4].Value`|1.2|
|`Effects[4].EntryPoint`|ModArmorRating|
|`Effects[4].PerkConditionTabCount`|2|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|0|
|`Effects[4].Conditions`|[list: 1 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Name`|Armor Boost|
|`NextPerk`|[`079376:Skyrim.esm`](../perks/PERKS_054.md#r-2bdf22914a87)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-64022d3dd017"></a>

## PlayerWerewolfFeed

- Identidade estável Housecarl: `02BA1D:Skyrim.esm`.
- Tipo: `Perk`; winner: `Dawnguard.esm`; profundidade de override: 2.
- Nome: Feed; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=False, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=FilterActivation; Modification=Add; Value=1; Rank=0; Priority=10; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=FilterActivation; Modification=Add; Value=1; Rank=0; Priority=9; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=FilterActivation; Modification=Add; Value=1; Rank=0; Priority=8; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=FilterActivation; Modification=Add; Value=1; Rank=0; Priority=7; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=FilterActivation; Modification=Add; Value=1; Rank=0; Priority=6; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[5] — PerkEntryPointSetText**: EntryPoint=SetActivateLabel; Rank=0; Priority=5; PerkConditionTabCount=2. Altera texto associado ao entry point; separar apresentação de qualquer transação ou ativação resultante.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModShoutOk; Modification=Add; Value=1; Rank=0; Priority=2; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=[`106396:Skyrim.esm`](../magic/MAGIC_046.md#r-1eb07be9aed8); Rank=0; Priority=1; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetQuestRunning|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Quest=0AEBFE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetIsReference|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Target=041248:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetIsReference|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Target=01A702:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|GetIsReference|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Target=04816A:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|GetIsReference|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Target=04816B:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`092C45:Skyrim.esm`](../magic/MAGIC_015.md#r-e1a3ed0a705f)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`0F8209:Skyrim.esm`](../magic/MAGIC_018.md#r-2ae3ddab429c)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=100769:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|IsUnlockedDoor|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 0|OR|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|HasBeenEaten|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Race=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|IsSprinting|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|IsSwimming|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0059A6:Dawnguard.esm`](../perks/PERKS_012.md#r-235c4743878c)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`092C45:Skyrim.esm`](../magic/MAGIC_015.md#r-e1a3ed0a705f)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`0F8209:Skyrim.esm`](../magic/MAGIC_018.md#r-2ae3ddab429c)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=100769:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[1]`|IsUnlockedDoor|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013794:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Race=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|IsCommandedActor|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01397A:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013796:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=035D59:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013797:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=015FD3:Dawnguard.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`092C45:Skyrim.esm`](../magic/MAGIC_015.md#r-e1a3ed0a705f)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`0F8209:Skyrim.esm`](../magic/MAGIC_018.md#r-2ae3ddab429c)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasBeenEaten|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[1]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`092C45:Skyrim.esm`](../magic/MAGIC_015.md#r-e1a3ed0a705f)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`0F8209:Skyrim.esm`](../magic/MAGIC_018.md#r-2ae3ddab429c)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`092C45:Skyrim.esm`](../magic/MAGIC_015.md#r-e1a3ed0a705f)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`0F8209:Skyrim.esm`](../magic/MAGIC_018.md#r-2ae3ddab429c)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 8 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|1|
|`Effects[0].EntryPoint`|FilterActivation|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|10|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Add|
|`Effects[1].Value`|1|
|`Effects[1].EntryPoint`|FilterActivation|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|9|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Add|
|`Effects[2].Value`|1|
|`Effects[2].EntryPoint`|FilterActivation|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|8|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Add|
|`Effects[3].Value`|1|
|`Effects[3].EntryPoint`|FilterActivation|
|`Effects[3].PerkConditionTabCount`|2|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|7|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Add|
|`Effects[4].Value`|1|
|`Effects[4].EntryPoint`|FilterActivation|
|`Effects[4].PerkConditionTabCount`|2|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|6|
|`Effects[4].Conditions`|[list: 2 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSetText]|
|`Effects[5].Text`|Feed|
|`Effects[5].EntryPoint`|SetActivateLabel|
|`Effects[5].PerkConditionTabCount`|2|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|5|
|`Effects[5].Conditions`|[list: 2 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Add|
|`Effects[6].Value`|1|
|`Effects[6].EntryPoint`|ModShoutOk|
|`Effects[6].PerkConditionTabCount`|1|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|2|
|`Effects[6].Conditions`|[list: 1 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointAddActivateChoice] Spell=106396:Skyrim.esm|
|`Effects[7].Spell`|[`106396:Skyrim.esm`](../magic/MAGIC_046.md#r-1eb07be9aed8)|
|`Effects[7].EntryPoint`|Activate|
|`Effects[7].PerkConditionTabCount`|2|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|1|
|`Effects[7].Conditions`|[list: 2 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[7].Flags.FragmentIndex`|0|
|`VirtualMachineAdapter`|[PerkAdapter]|
|`VirtualMachineAdapter.ScriptFragments`|[PerkScriptFragments]|
|`VirtualMachineAdapter.ScriptFragments.Fragments`|[list: 1 item(s)]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentIndex`|0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].ScriptName`|PRKF_PlayerWerewolfFeed_0002BA1D|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentName`|Fragment_0|
|`VirtualMachineAdapter.ScriptFragments.ExtraBindDataVersion`|2|
|`VirtualMachineAdapter.ScriptFragments.FileName`|PRKF_PlayerWerewolfFeed_0002BA1D|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=PRKF_PlayerWerewolfFeed_0002BA1D|
|`VirtualMachineAdapter.Scripts[0].Name`|PRKF_PlayerWerewolfFeed_0002BA1D|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerWerewolfQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|02BA16:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerWerewolfQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
|`Name`|Feed|
|`NumRanks`|1|
|`Playable`|False|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-f8ddb32be97d"></a>

## DLC2ArrowDefense

- Identidade estável Housecarl: `03CA73:Dragonborn.esm`.
- Tipo: `Perk`; winner: `Dragonborn.esm`; profundidade de override: 1.
- Nome: Arrow Defense; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|IsSneaking|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModIncomingDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Arrow Defense|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-e39d3e62ad42"></a>

## DLC2AshShellDmgPerk

- Identidade estável Housecarl: `0177B4:Dragonborn.esm`.
- Tipo: `Perk`; winner: `Dragonborn.esm`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`0177AE:Dragonborn.esm`](../magic/MAGIC_008.md#r-e96075b9df18)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`017732:Dragonborn.esm`](../magic/MAGIC_008.md#r-aaf0ed4ac6ec)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`0177AE:Dragonborn.esm`](../magic/MAGIC_008.md#r-e96075b9df18)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`017732:Dragonborn.esm`](../magic/MAGIC_008.md#r-aaf0ed4ac6ec)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.01|
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
|`Effects[1].Value`|0.01|
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
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-f92f84fd3da6"></a>

## DLC2AugmentedFrost60NPC

- Identidade estável Housecarl: `01773C:Dragonborn.esm`.
- Tipo: `Perk`; winner: `Dragonborn.esm`; profundidade de override: 1.
- Nome: NPC Augmented Frost; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.2; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetBaseActorValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01CEAE:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.2|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|NPC Augmented Frost|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7d5d81675bf3"></a>

## DLC2AugmentedShock60NPC

- Identidade estável Housecarl: `01773D:Dragonborn.esm`.
- Tipo: `Perk`; winner: `Dragonborn.esm`; profundidade de override: 1.
- Nome: NPCAugmented Shock; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.2; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetBaseActorValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01CEAF:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.2|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|NPCAugmented Shock|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-85728fc89d61"></a>

## dlc2BBDrunkenMaster

- Identidade estável Housecarl: `01ED99:Dragonborn.esm`.
- Tipo: `Perk`; winner: `Dragonborn.esm`; profundidade de override: 1.
- Nome: Drunken Master; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.2; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Set; Value=0; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.2|
|`Effects[0].EntryPoint`|ModIncomingDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Set|
|`Effects[1].Value`|0|
|`Effects[1].EntryPoint`|ModArmorRating|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Drunken Master|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7cf3108d02cf"></a>

## DLC2BlackBookFoodPerk

- Identidade estável Housecarl: `01E7F6:Dragonborn.esm`.
- Tipo: `Perk`; winner: `Dragonborn.esm`; profundidade de override: 1.
- Nome: Food bonus; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=3; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|3|
|`Effects[0].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Food bonus|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-d6519889500c"></a>

## DLC2BlackBookHalfDamagePerk

- Identidade estável Housecarl: `01E7FE:Dragonborn.esm`.
- Tipo: `Perk`; winner: `Dragonborn.esm`; profundidade de override: 1.
- Nome: No damage; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModIncomingDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0.5|
|`Effects[1].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|No damage|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
