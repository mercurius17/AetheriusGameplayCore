# Perks instaladas — parte 011

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-2b5251cc1af7"></a>

## GRIM_PERK_ILL_Trickster_noDmgToCopies

- Identidade estável Housecarl: `347298:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Set; Value=0; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Set; Value=0; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=347290:LostGrimoire.esp|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=347290:LostGrimoire.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Set|
|`Effects[1].Value`|0|
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

<a id="r-1fb8a2b191d9"></a>

## GRIM_PERK_RES_DivineSpells_monitorAndPenance

- Identidade estável Housecarl: `44E863:LostGrimoire.esp`.
- Tipo: `Perk`; winner: `LostGrimoire.esp`; profundidade de override: 1.
- Nome: Divine Spells Monitor Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`44E867:LostGrimoire.esp`](../magic/MAGIC_054.md#r-c47020c2baef); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=0; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|Global=44E865:LostGrimoire.esp|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormList=44E862:LostGrimoire.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=44E867:LostGrimoire.esp|
|`Effects[0].Ability`|[`44E867:LostGrimoire.esp`](../magic/MAGIC_054.md#r-c47020c2baef)|
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
|`Effects[1].ButtonLabel`|Pay Penance|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`VirtualMachineAdapter`|[PerkAdapter]|
|`VirtualMachineAdapter.ScriptFragments`|[PerkScriptFragments]|
|`VirtualMachineAdapter.ScriptFragments.Fragments`|[list: 1 item(s)]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentIndex`|0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].ScriptName`|PRKF_GRIM_PERK_RES_DivineSpe_0544E863|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentName`|Fragment_0|
|`VirtualMachineAdapter.ScriptFragments.ExtraBindDataVersion`|2|
|`VirtualMachineAdapter.ScriptFragments.FileName`|PRKF_GRIM_PERK_RES_DivineSpe_0544E863|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=PRKF_GRIM_PERK_RES_DivineSpe_0544E863|
|`VirtualMachineAdapter.Scripts[0].Name`|PRKF_GRIM_PERK_RES_DivineSpe_0544E863|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 5 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=GRIM_GLO_DivineSpells_penanceGoldAmt|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|44E869:LostGrimoire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|GRIM_GLO_DivineSpells_penanceGoldAmt|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=Gold001|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|00000F:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|Gold001|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=GRIM_MSG_RES_DivineSpell_penanceConfirm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|44E866:LostGrimoire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|GRIM_MSG_RES_DivineSpell_penanceConfirm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=GRIM_GLO_DivineSpells_PlayerUnclearedMurderCount|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|44E865:LostGrimoire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|GRIM_GLO_DivineSpells_PlayerUnclearedMurderCount|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=GRIM_MSG_RES_DivineSpell_penanceDone|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|44E86A:LostGrimoire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|GRIM_MSG_RES_DivineSpell_penanceDone|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
|`Name`|Divine Spells Monitor Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-cc80d35c3289"></a>

## MAG_AnimalStrength01

- Identidade estável Housecarl: `000809:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Animal Strength; ranks declarados: 1; NextPerk: [`00080A:Manbeast.esp`](../perks/PERKS_011.md#r-6c227d9b83b0).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=000E46:Skyrim.esm; Stage=50; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.
- **Effects[1] — PerkAbilityEffect**: Ability=[`00084A:Manbeast.esp`](../magic/MAGIC_035.md#r-3f828deee8f9); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`00080B:Manbeast.esp`](../perks/PERKS_011.md#r-1f40e3d2e359)<br>Parameter1.Link=[`00080B:Manbeast.esp`](../perks/PERKS_011.md#r-1f40e3d2e359)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=000E46:Skyrim.esm|
|`Effects[0].Quest`|000E46:Skyrim.esm|
|`Effects[0].Stage`|50|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkAbilityEffect] Ability=00084A:Manbeast.esp|
|`Effects[1].Ability`|[`00084A:Manbeast.esp`](../magic/MAGIC_035.md#r-3f828deee8f9)|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Animal Strength|
|`NextPerk`|[`00080A:Manbeast.esp`](../perks/PERKS_011.md#r-6c227d9b83b0)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-6c227d9b83b0"></a>

## MAG_AnimalStrength02

- Identidade estável Housecarl: `00080A:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Animal Strength; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=000E46:Skyrim.esm; Stage=60; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.
- **Effects[1] — PerkAbilityEffect**: Ability=[`00084B:Manbeast.esp`](../magic/MAGIC_035.md#r-2fed8cd8e65c); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`000809:Manbeast.esp`](../perks/PERKS_011.md#r-cc80d35c3289)<br>Parameter1.Link=[`000809:Manbeast.esp`](../perks/PERKS_011.md#r-cc80d35c3289)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=000E46:Skyrim.esm|
|`Effects[0].Quest`|000E46:Skyrim.esm|
|`Effects[0].Stage`|60|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkAbilityEffect] Ability=00084B:Manbeast.esp|
|`Effects[1].Ability`|[`00084B:Manbeast.esp`](../magic/MAGIC_035.md#r-2fed8cd8e65c)|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Animal Strength|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-faa582629bf8"></a>

## MAG_AnimalStrengthDummy01

- Identidade estável Housecarl: `00083E:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Animal Strength Dummy; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`000819:Manbeast.esp`](../magic/MAGIC_035.md#r-a037662d0108); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=000819:Manbeast.esp|
|`Effects[0].Ability`|[`000819:Manbeast.esp`](../magic/MAGIC_035.md#r-a037662d0108)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Animal Strength Dummy|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-5b4ad8403162"></a>

## MAG_AnimalStrengthDummy02

- Identidade estável Housecarl: `00083F:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Animal Strength Dummy; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`000818:Manbeast.esp`](../magic/MAGIC_035.md#r-3f8afa6de172); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=000818:Manbeast.esp|
|`Effects[0].Ability`|[`000818:Manbeast.esp`](../magic/MAGIC_035.md#r-3f8afa6de172)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Animal Strength Dummy|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-dd6de1a062d1"></a>

## MAG_AnimalVigor01

- Identidade estável Housecarl: `00084C:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Animal Vigor; ranks declarados: 1; NextPerk: [`000853:Manbeast.esp`](../perks/PERKS_011.md#r-10a1063d6d6c).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=000E46:Skyrim.esm; Stage=70; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`000809:Manbeast.esp`](../perks/PERKS_011.md#r-cc80d35c3289)<br>Parameter1.Link=[`000809:Manbeast.esp`](../perks/PERKS_011.md#r-cc80d35c3289)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=000E46:Skyrim.esm|
|`Effects[0].Quest`|000E46:Skyrim.esm|
|`Effects[0].Stage`|70|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Animal Vigor|
|`NextPerk`|[`000853:Manbeast.esp`](../perks/PERKS_011.md#r-10a1063d6d6c)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-10a1063d6d6c"></a>

## MAG_AnimalVigor02

- Identidade estável Housecarl: `000853:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Animal Vigor; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=000E46:Skyrim.esm; Stage=80; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`00084C:Manbeast.esp`](../perks/PERKS_011.md#r-dd6de1a062d1)<br>Parameter1.Link=[`00084C:Manbeast.esp`](../perks/PERKS_011.md#r-dd6de1a062d1)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=000E46:Skyrim.esm|
|`Effects[0].Quest`|000E46:Skyrim.esm|
|`Effects[0].Stage`|80|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Animal Vigor|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-490f72775fc2"></a>

## MAG_AnimalVigorDummy01

- Identidade estável Housecarl: `000808:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Animal Vigor Dummy; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`000801:Manbeast.esp`](../magic/MAGIC_035.md#r-1756cb567fae); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=000801:Manbeast.esp|
|`Effects[0].Ability`|[`000801:Manbeast.esp`](../magic/MAGIC_035.md#r-1756cb567fae)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Animal Vigor Dummy|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-10cf70577241"></a>

## MAG_AnimalVigorDummy02

- Identidade estável Housecarl: `000852:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Animal Vigor Dummy; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`000854:Manbeast.esp`](../magic/MAGIC_036.md#r-8cf1d6e2b6f0); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=000854:Manbeast.esp|
|`Effects[0].Ability`|[`000854:Manbeast.esp`](../magic/MAGIC_036.md#r-8cf1d6e2b6f0)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Animal Vigor Dummy|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-1f40e3d2e359"></a>

## MAG_AnimalVitality01

- Identidade estável Housecarl: `00080B:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Animal Vitality; ranks declarados: 1; NextPerk: [`00080C:Manbeast.esp`](../perks/PERKS_011.md#r-003a2beb328b).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=000E46:Skyrim.esm; Stage=30; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.
- **Effects[1] — PerkAbilityEffect**: Ability=[`000848:Manbeast.esp`](../magic/MAGIC_035.md#r-30e9d53477b7); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0059A4:Dawnguard.esm`](../perks/PERKS_012.md#r-3cf7d8c7d485)<br>Parameter1.Link=[`0059A4:Dawnguard.esm`](../perks/PERKS_012.md#r-3cf7d8c7d485)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=000E46:Skyrim.esm|
|`Effects[0].Quest`|000E46:Skyrim.esm|
|`Effects[0].Stage`|30|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkAbilityEffect] Ability=000848:Manbeast.esp|
|`Effects[1].Ability`|[`000848:Manbeast.esp`](../magic/MAGIC_035.md#r-30e9d53477b7)|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Animal Vitality|
|`NextPerk`|[`00080C:Manbeast.esp`](../perks/PERKS_011.md#r-003a2beb328b)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-003a2beb328b"></a>

## MAG_AnimalVitality02

- Identidade estável Housecarl: `00080C:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Animal Vitality; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=000E46:Skyrim.esm; Stage=40; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.
- **Effects[1] — PerkAbilityEffect**: Ability=[`000849:Manbeast.esp`](../magic/MAGIC_035.md#r-5ae2e0d93bba); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`00080B:Manbeast.esp`](../perks/PERKS_011.md#r-1f40e3d2e359)<br>Parameter1.Link=[`00080B:Manbeast.esp`](../perks/PERKS_011.md#r-1f40e3d2e359)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=000E46:Skyrim.esm|
|`Effects[0].Quest`|000E46:Skyrim.esm|
|`Effects[0].Stage`|40|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkAbilityEffect] Ability=000849:Manbeast.esp|
|`Effects[1].Ability`|[`000849:Manbeast.esp`](../magic/MAGIC_035.md#r-5ae2e0d93bba)|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Animal Vitality|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7d0248b8a38a"></a>

## MAG_AnimalVitalityDummy01

- Identidade estável Housecarl: `00083B:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Animal Vitality Dummy; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`000815:Manbeast.esp`](../magic/MAGIC_035.md#r-0b3a5623bc69); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=000815:Manbeast.esp|
|`Effects[0].Ability`|[`000815:Manbeast.esp`](../magic/MAGIC_035.md#r-0b3a5623bc69)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Animal Vitality Dummy|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-268a4e45d8d8"></a>

## MAG_AnimalVitalityDummy02

- Identidade estável Housecarl: `000839:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Animal Vitality Dummy; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`000816:Manbeast.esp`](../magic/MAGIC_035.md#r-f2e9bd86e569); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=000816:Manbeast.esp|
|`Effects[0].Ability`|[`000816:Manbeast.esp`](../magic/MAGIC_035.md#r-f2e9bd86e569)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Animal Vitality Dummy|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-cdd766142e03"></a>

## MAG_BeastlyMight

- Identidade estável Housecarl: `000810:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Beastly Might; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=000E46:Skyrim.esm; Stage=120; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`00080F:Manbeast.esp`](../perks/PERKS_011.md#r-0e2b5593b66d)<br>Parameter1.Link=[`00080F:Manbeast.esp`](../perks/PERKS_011.md#r-0e2b5593b66d)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=000E46:Skyrim.esm|
|`Effects[0].Quest`|000E46:Skyrim.esm|
|`Effects[0].Stage`|120|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Beastly Might|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-14ed27b6995e"></a>

## MAG_BloodyClaws01

- Identidade estável Housecarl: `00084D:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Bloody Claws; ranks declarados: 1; NextPerk: [`00085F:Manbeast.esp`](../perks/PERKS_011.md#r-7a828e7c282a).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=000E46:Skyrim.esm; Stage=140; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0059A4:Dawnguard.esm`](../perks/PERKS_012.md#r-3cf7d8c7d485)<br>Parameter1.Link=[`0059A4:Dawnguard.esm`](../perks/PERKS_012.md#r-3cf7d8c7d485)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=000E46:Skyrim.esm|
|`Effects[0].Quest`|000E46:Skyrim.esm|
|`Effects[0].Stage`|140|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Bloody Claws|
|`NextPerk`|[`00085F:Manbeast.esp`](../perks/PERKS_011.md#r-7a828e7c282a)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7a828e7c282a"></a>

## MAG_BloodyClaws02

- Identidade estável Housecarl: `00085F:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Bloody Claws; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=000E46:Skyrim.esm; Stage=150; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`00084D:Manbeast.esp`](../perks/PERKS_011.md#r-14ed27b6995e)<br>Parameter1.Link=[`00084D:Manbeast.esp`](../perks/PERKS_011.md#r-14ed27b6995e)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=000E46:Skyrim.esm|
|`Effects[0].Quest`|000E46:Skyrim.esm|
|`Effects[0].Stage`|150|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Bloody Claws|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-1f78a8e6bc5a"></a>

## MAG_CalloftheBlood01

- Identidade estável Housecarl: `00084E:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Call of the Blood; ranks declarados: 1; NextPerk: [`00085C:Manbeast.esp`](../perks/PERKS_011.md#r-7052056e898f).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=000E46:Skyrim.esm; Stage=210; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.
- **Effects[1] — PerkAbilityEffect**: Ability=[`000859:Manbeast.esp`](../magic/MAGIC_036.md#r-82728f1ae248); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`000850:Manbeast.esp`](../perks/PERKS_012.md#r-ce81b7fe5514)<br>Parameter1.Link=[`000850:Manbeast.esp`](../perks/PERKS_012.md#r-ce81b7fe5514)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=000E46:Skyrim.esm|
|`Effects[0].Quest`|000E46:Skyrim.esm|
|`Effects[0].Stage`|210|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkAbilityEffect] Ability=000859:Manbeast.esp|
|`Effects[1].Ability`|[`000859:Manbeast.esp`](../magic/MAGIC_036.md#r-82728f1ae248)|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Call of the Blood|
|`NextPerk`|[`00085C:Manbeast.esp`](../perks/PERKS_011.md#r-7052056e898f)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7052056e898f"></a>

## MAG_CalloftheBlood02

- Identidade estável Housecarl: `00085C:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Call of the Blood; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=000E46:Skyrim.esm; Stage=220; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.
- **Effects[1] — PerkAbilityEffect**: Ability=[`00085B:Manbeast.esp`](../magic/MAGIC_036.md#r-9ee6be5ac0e0); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`00084E:Manbeast.esp`](../perks/PERKS_011.md#r-1f78a8e6bc5a)<br>Parameter1.Link=[`00084E:Manbeast.esp`](../perks/PERKS_011.md#r-1f78a8e6bc5a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=000E46:Skyrim.esm|
|`Effects[0].Quest`|000E46:Skyrim.esm|
|`Effects[0].Stage`|220|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkAbilityEffect] Ability=00085B:Manbeast.esp|
|`Effects[1].Ability`|[`00085B:Manbeast.esp`](../magic/MAGIC_036.md#r-9ee6be5ac0e0)|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Call of the Blood|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0e2b5593b66d"></a>

## MAG_FeralSpeed01

- Identidade estável Housecarl: `00080F:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Feral Speed; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=000E46:Skyrim.esm; Stage=110; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.
- **Effects[1] — PerkAbilityEffect**: Ability=[`00081A:Manbeast.esp`](../magic/MAGIC_035.md#r-6b4c4a138114); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0059A4:Dawnguard.esm`](../perks/PERKS_012.md#r-3cf7d8c7d485)<br>Parameter1.Link=[`0059A4:Dawnguard.esm`](../perks/PERKS_012.md#r-3cf7d8c7d485)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=000E46:Skyrim.esm|
|`Effects[0].Quest`|000E46:Skyrim.esm|
|`Effects[0].Stage`|110|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkAbilityEffect] Ability=00081A:Manbeast.esp|
|`Effects[1].Ability`|[`00081A:Manbeast.esp`](../magic/MAGIC_035.md#r-6b4c4a138114)|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Feral Speed|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-16761f88cdab"></a>

## MAG_FeralSpeed02

- Identidade estável Housecarl: `000855:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Feral Speed; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`000857:Manbeast.esp`](../magic/MAGIC_036.md#r-3af660e79095); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkEntryPointSelectText**: EntryPoint=SetBooleanGraphVariable; Rank=0; Priority=0; PerkConditionTabCount=1. Seleciona texto no entry point; não concede autoridade para executar a ação que a interface mostra.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`00080F:Manbeast.esp`](../perks/PERKS_011.md#r-0e2b5593b66d)<br>Parameter1.Link=[`00080F:Manbeast.esp`](../perks/PERKS_011.md#r-0e2b5593b66d)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=000857:Manbeast.esp|
|`Effects[0].Ability`|[`000857:Manbeast.esp`](../magic/MAGIC_036.md#r-3af660e79095)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectText]|
|`Effects[1].Text`|werewolfweaponspeedmult|
|`Effects[1].EntryPoint`|SetBooleanGraphVariable|
|`Effects[1].PerkConditionTabCount`|1|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Feral Speed|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-8b40fd77ecdb"></a>

## MAG_GorgingPerk

- Identidade estável Housecarl: `0059A7:Dawnguard.esm`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 3.
- Nome: Gorging; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0059A5:Dawnguard.esm`](../perks/PERKS_012.md#r-eb5293850120)<br>Parameter1.Link=[`0059A5:Dawnguard.esm`](../perks/PERKS_012.md#r-eb5293850120)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Gorging|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-9f62c8b7e1af"></a>

## MAG_HircinesBounty

- Identidade estável Housecarl: `00080D:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Hircine's Bounty; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=000E46:Skyrim.esm; Stage=90; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.
- **Effects[1] — PerkAbilityEffect**: Ability=[`000821:Manbeast.esp`](../magic/MAGIC_035.md#r-7be49018ad3c); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0059A4:Dawnguard.esm`](../perks/PERKS_012.md#r-3cf7d8c7d485)<br>Parameter1.Link=[`0059A4:Dawnguard.esm`](../perks/PERKS_012.md#r-3cf7d8c7d485)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=000E46:Skyrim.esm|
|`Effects[0].Quest`|000E46:Skyrim.esm|
|`Effects[0].Stage`|90|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkAbilityEffect] Ability=000821:Manbeast.esp|
|`Effects[1].Ability`|[`000821:Manbeast.esp`](../magic/MAGIC_035.md#r-7be49018ad3c)|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Hircine's Bounty|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-389f00544c12"></a>

## MAG_HircinesRage

- Identidade estável Housecarl: `00080E:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Hircine's Rage; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=000E46:Skyrim.esm; Stage=100; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`00080D:Manbeast.esp`](../perks/PERKS_011.md#r-9f62c8b7e1af)<br>Parameter1.Link=[`00080D:Manbeast.esp`](../perks/PERKS_011.md#r-9f62c8b7e1af)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[3]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[4]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[5]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=000E46:Skyrim.esm|
|`Effects[0].Quest`|000E46:Skyrim.esm|
|`Effects[0].Stage`|100|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0.75|
|`Effects[1].EntryPoint`|ModIncomingDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|0.75|
|`Effects[2].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Name`|Hircine's Rage|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-bf4467a24fd7"></a>

## MAG_HowloftheMoonPerk

- Identidade estável Housecarl: `00086E:Manbeast.esp`.
- Tipo: `Perk`; winner: `Manbeast.esp`; profundidade de override: 1.
- Nome: Howl of the Moon; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Set; Value=50; Rank=0; Priority=5; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Set; Value=100; Rank=0; Priority=4; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Set; Value=150; Rank=0; Priority=3; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Set; Value=200; Rank=0; Priority=2; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitChance; Modification=Set; Value=100; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[5] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Set; Value=250; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetLevel|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 9|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetLevel|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 10|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetLevel|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 19|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetLevel|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|GetLevel|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 29|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|GetLevel|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|GetLevel|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 39|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|GetLevel|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 6 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|50|
|`Effects[0].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|5|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Set|
|`Effects[1].Value`|100|
|`Effects[1].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|4|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Set|
|`Effects[2].Value`|150|
|`Effects[2].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|3|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Set|
|`Effects[3].Value`|200|
|`Effects[3].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|2|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Set|
|`Effects[4].Value`|100|
|`Effects[4].EntryPoint`|CalculateMyCriticalHitChance|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|1|
|`Effects[4].Conditions`|[list: 0 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointModifyValue]|
|`Effects[5].Modification`|Set|
|`Effects[5].Value`|250|
|`Effects[5].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|1|
|`Effects[5].Conditions`|[list: 1 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Name`|Howl of the Moon|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
