# Perks instaladas — parte 018

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-2ad4d59593c7"></a>

## MAG_Cultist30

- Identidade estável Housecarl: `000802:PilgrimVokriiMysticismPatch.esp`.
- Tipo: `Perk`; winner: `PilgrimVokriiMysticismPatch.esp`; profundidade de override: 1.
- Nome: Cultist; ranks declarados: 1; NextPerk: [`000803:PilgrimVokriiMysticismPatch.esp`](../perks/PERKS_018.md#r-5e2924a75c74).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`616203:Update.esm`](../magic/MAGIC_061.md#r-863cbd1a68b7); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=Conjuration<br>Parameter1=Conjuration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CA7:Skyrim.esm`](../perks/PERKS_048.md#r-6a917fa6c4aa)<br>Parameter1.Link=[`0F2CA7:Skyrim.esm`](../perks/PERKS_048.md#r-6a917fa6c4aa)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=616203:Update.esm|
|`Effects[0].Ability`|[`616203:Update.esm`](../magic/MAGIC_061.md#r-863cbd1a68b7)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Cultist|
|`NextPerk`|[`000803:PilgrimVokriiMysticismPatch.esp`](../perks/PERKS_018.md#r-5e2924a75c74)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-5e2924a75c74"></a>

## MAG_Cultist60

- Identidade estável Housecarl: `000803:PilgrimVokriiMysticismPatch.esp`.
- Tipo: `Perk`; winner: `PilgrimVokriiMysticismPatch.esp`; profundidade de override: 1.
- Nome: Cultist; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`616204:Update.esm`](../magic/MAGIC_062.md#r-989b8de44663); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Conjuration<br>Parameter1=Conjuration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`000802:PilgrimVokriiMysticismPatch.esp`](../perks/PERKS_018.md#r-2ad4d59593c7)<br>Parameter1.Link=[`000802:PilgrimVokriiMysticismPatch.esp`](../perks/PERKS_018.md#r-2ad4d59593c7)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=616204:Update.esm|
|`Effects[0].Ability`|[`616204:Update.esm`](../magic/MAGIC_062.md#r-989b8de44663)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Cultist|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a33c1c6df642"></a>

## MAG_Pilgrim30

- Identidade estável Housecarl: `000800:PilgrimVokriiMysticismPatch.esp`.
- Tipo: `Perk`; winner: `PilgrimVokriiMysticismPatch.esp`; profundidade de override: 1.
- Nome: Pilgrim; ranks declarados: 1; NextPerk: [`000801:PilgrimVokriiMysticismPatch.esp`](../perks/PERKS_018.md#r-96cdb9b34f69).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`616201:Update.esm`](../magic/MAGIC_061.md#r-4bf99343b787); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CAA:Skyrim.esm`](../perks/PERKS_056.md#r-89be12cae610)<br>Parameter1.Link=[`0F2CAA:Skyrim.esm`](../perks/PERKS_056.md#r-89be12cae610)|aliases=False; package=False|
|`Conditions[1]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=616201:Update.esm|
|`Effects[0].Ability`|[`616201:Update.esm`](../magic/MAGIC_061.md#r-4bf99343b787)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Pilgrim|
|`NextPerk`|[`000801:PilgrimVokriiMysticismPatch.esp`](../perks/PERKS_018.md#r-96cdb9b34f69)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-96cdb9b34f69"></a>

## MAG_Pilgrim60

- Identidade estável Housecarl: `000801:PilgrimVokriiMysticismPatch.esp`.
- Tipo: `Perk`; winner: `PilgrimVokriiMysticismPatch.esp`; profundidade de override: 1.
- Nome: Pilgrim; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`616202:Update.esm`](../magic/MAGIC_061.md#r-4aac5eca3106); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`000800:PilgrimVokriiMysticismPatch.esp`](../perks/PERKS_018.md#r-a33c1c6df642)<br>Parameter1.Link=[`000800:PilgrimVokriiMysticismPatch.esp`](../perks/PERKS_018.md#r-a33c1c6df642)|aliases=False; package=False|
|`Conditions[1]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=616202:Update.esm|
|`Effects[0].Ability`|[`616202:Update.esm`](../magic/MAGIC_061.md#r-4aac5eca3106)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Pilgrim|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-668b32436fb0"></a>

## MAG_PilgrimAurielPerk

- Identidade estável Housecarl: `33A36D:Pilgrim.esp`.
- Tipo: `Perk`; winner: `PilgrimVokriiMysticismPatch.esp`; profundidade de override: 2.
- Nome: Pilgrim of Auriel; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`33A36F:Pilgrim.esp`](../magic/MAGIC_050.md#r-7482756a8a28); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.25; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA002:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=33A36F:Pilgrim.esp|
|`Effects[0].Ability`|[`33A36F:Pilgrim.esp`](../magic/MAGIC_050.md#r-7482756a8a28)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.25|
|`Effects[1].EntryPoint`|ModSpellMagnitude|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Pilgrim of Auriel|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2d96f55a875f"></a>

## Simple_CushionedHorse

- Identidade estável Housecarl: `0008A1:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Perk`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.
- Nome: Cushioned; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModFallingDamage; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

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
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModFallingDamage|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Cushioned|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b521b9f2352a"></a>

## Simple_DrevisDremoraPerk

- Identidade estável Housecarl: `00095D:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Perk`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.
- Nome: Drevis Dremora Illusion; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`000958:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_037.md#r-1498c2ec5747); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=000958:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[0].Ability`|[`000958:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_037.md#r-1498c2ec5747)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Drevis Dremora Illusion|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-86796549a71f"></a>

## Simple_EnthirIllusionPerk

- Identidade estável Housecarl: `00095C:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Perk`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.
- Nome: Enthir Skeleton Illusion; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`000959:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_037.md#r-dbcdfd92543e); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=000959:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[0].Ability`|[`000959:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_037.md#r-dbcdfd92543e)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Enthir Skeleton Illusion|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2faf121e8fde"></a>

## Simple_FeatherDropPerk

- Identidade estável Housecarl: `00098C:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Perk`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.
- Nome: Feather Drop; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModFallingDamage; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

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
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModFallingDamage|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Feather Drop|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-1c0b7d95c746"></a>

## Simple_IllusionExtraSummons

- Identidade estável Housecarl: `000874:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Perk`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.
- Nome: Illusion extra summons; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModCommandedActorLimit; Modification=Add; Value=1; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

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
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Illusion extra summons|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-4cc9a263b5d5"></a>

## Simple_NoDamageByIllusion

- Identidade estável Housecarl: `000873:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Perk`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.
- Nome: No Damage by Illusion; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

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
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|No Damage by Illusion|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-cd8b32183990"></a>

## Simple_NoDamageOnIllusion

- Identidade estável Housecarl: `000872:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Perk`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.
- Nome: No Damage on Illusion; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingStagger; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellDuration; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModIncomingStagger|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0|
|`Effects[1].EntryPoint`|ModIncomingSpellDuration|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|0|
|`Effects[2].EntryPoint`|ModIncomingDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|0|
|`Effects[3].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[3].PerkConditionTabCount`|2|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|0|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Name`|No Damage on Illusion|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2124c1f1d7d5"></a>

## Simple_OnmundIllusionPerk

- Identidade estável Housecarl: `00095B:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Perk`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.
- Nome: Onmund Wolf Illusion; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`00095A:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_037.md#r-7dfc6d83aebc); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=00095A:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[0].Ability`|[`00095A:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_037.md#r-7dfc6d83aebc)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Onmund Wolf Illusion|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-54faafdbece6"></a>

## Simple_SlowFallPerk

- Identidade estável Housecarl: `00098B:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Perk`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.
- Nome: Slow Fall; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModFallingDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

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
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModFallingDamage|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Slow Fall|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b867e047596c"></a>

## SimpleSpells_DrainBoltVLPerk

- Identidade estável Housecarl: `000A90:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Perk`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.
- Nome: Add Drain Bolt to VL Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`000A92:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_037.md#r-01f1bcf2ab1a); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=000A92:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[0].Ability`|[`000A92:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_037.md#r-01f1bcf2ab1a)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Add Drain Bolt to VL Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-06eead9241cc"></a>

## SimpleSpells_NecromancerRitualPerk

- Identidade estável Housecarl: `0009F7:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Perk`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.
- Nome: MultipleSummons; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`0008FB:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_037.md#r-a6de73a969b4); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModCommandedActorLimit; Modification=Add; Value=100; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`0008FB:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_037.md#r-a6de73a969b4)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=0008FB:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[0].Ability`|[`0008FB:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_037.md#r-a6de73a969b4)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Add|
|`Effects[1].Value`|100|
|`Effects[1].EntryPoint`|ModCommandedActorLimit|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|MultipleSummons|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7986d6a38399"></a>

## SimpleSpells_PermaWaterWalkingPerk

- Identidade estável Housecarl: `0009EB:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Perk`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.
- Nome: Water Walking Constant; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`00099E:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_037.md#r-99839874a6d5); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=00099E:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[0].Ability`|[`00099E:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_037.md#r-99839874a6d5)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Water Walking Constant|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a06b8f3b1253"></a>

## SimpleSpells_Sanctuary20Perk

- Identidade estável Housecarl: `000993:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Perk`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.
- Nome: Sanctuary 20; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModIncomingDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Sanctuary 20|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-363cc0cedc41"></a>

## RASS_ColdRegion_Perk

- Identidade estável Housecarl: `000837:RASS - Visual Effects.esl`.
- Tipo: `Perk`; winner: `RASS - Visual Effects.esl`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
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
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-de0c06c4f340"></a>

## ReforgedDirectionalCombatActives

- Identidade estável Housecarl: `000817:Reforged Directional Combat.esp`.
- Tipo: `Perk`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.
- Nome: Reforged Directional Combat Actives; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`000838:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-027c44579e8e); Rank=0; Priority=3; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`000838:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-027c44579e8e); Rank=0; Priority=2; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`000839:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-c874385eb1ad); Rank=0; Priority=1; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`000839:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-c874385eb1ad); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000881:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-9be3f4ac7b0c)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000804:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-f4cde1b4c424)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000880:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-1aff08abff0e)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000805:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-458736806775)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000882:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-83ad6e95e76c)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000802:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-34e631296bf2)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000883:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-4409db032cce)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000801:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-5642ec348750)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=000838:Reforged Directional Combat.esp|
|`Effects[0].Spell`|[`000838:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-027c44579e8e)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|3|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=000838:Reforged Directional Combat.esp|
|`Effects[1].Spell`|[`000838:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-027c44579e8e)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|2|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=000839:Reforged Directional Combat.esp|
|`Effects[2].Spell`|[`000839:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-c874385eb1ad)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|1|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=000839:Reforged Directional Combat.esp|
|`Effects[3].Spell`|[`000839:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-c874385eb1ad)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|0|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Name`|Reforged Directional Combat Actives|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-21a3c127e52f"></a>

## ReforgedDirectionalCombatPassives

- Identidade estável Housecarl: `000807:Reforged Directional Combat.esp`.
- Tipo: `Perk`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.
- Nome: Reforged Directional Combat Passives; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.05; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.05; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.05; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.95; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.95; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[5] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.95; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.25; Rank=0; Priority=2; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.75; Rank=0; Priority=2; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000801:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-5642ec348750)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000804:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-f4cde1b4c424)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000801:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-5642ec348750)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000804:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-f4cde1b4c424)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000805:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-458736806775)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000802:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-34e631296bf2)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000805:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-458736806775)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000802:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-34e631296bf2)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000802:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-34e631296bf2)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000805:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-458736806775)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000801:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-5642ec348750)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[3]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000804:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-f4cde1b4c424)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000802:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-34e631296bf2)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000805:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-458736806775)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000801:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-5642ec348750)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[3]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000804:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-f4cde1b4c424)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 8 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.05|
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
|`Effects[1].Value`|1.05|
|`Effects[1].EntryPoint`|ModAttackDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|1.05|
|`Effects[2].EntryPoint`|ModAttackDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|0.95|
|`Effects[3].EntryPoint`|ModIncomingDamage|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|1|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Multiply|
|`Effects[4].Value`|0.95|
|`Effects[4].EntryPoint`|ModIncomingDamage|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|1|
|`Effects[4].Conditions`|[list: 1 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointModifyValue]|
|`Effects[5].Modification`|Multiply|
|`Effects[5].Value`|0.95|
|`Effects[5].EntryPoint`|ModIncomingDamage|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|1|
|`Effects[5].Conditions`|[list: 1 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Multiply|
|`Effects[6].Value`|1.25|
|`Effects[6].EntryPoint`|ModAttackDamage|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|2|
|`Effects[6].Conditions`|[list: 1 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyValue]|
|`Effects[7].Modification`|Multiply|
|`Effects[7].Value`|0.75|
|`Effects[7].EntryPoint`|ModIncomingDamage|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|2|
|`Effects[7].Conditions`|[list: 1 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Name`|Reforged Directional Combat Passives|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-bde3bd24653f"></a>

## ReforgedEnemyDirectionalDispels

- Identidade estável Housecarl: `00082C:Reforged Directional Combat.esp`.
- Tipo: `Perk`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.
- Nome: Reforged Enemy Directional Dispels; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellMagnitude; Modification=MultiplyOnePlusAVMult; ActorValue=Block; Value=0.015; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`000826:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-a4826d31b4fa); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`000827:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-99f019eb56d3); Rank=0; Priority=1; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`000829:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-53d43583dacc); Rank=0; Priority=3; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`00082A:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-c460048d0aa9); Rank=0; Priority=4; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=000837:Reforged Directional Combat.esp|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000883:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-4409db032cce)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000882:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-83ad6e95e76c)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000881:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-9be3f4ac7b0c)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000498:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-c541b5961f18)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000880:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-1aff08abff0e)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000497:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-0ebdad92f19f)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 5 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Block|
|`Effects[0].Value`|0.015|
|`Effects[0].Modification`|MultiplyOnePlusAVMult|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=000826:Reforged Directional Combat.esp|
|`Effects[1].Spell`|[`000826:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-a4826d31b4fa)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=000827:Reforged Directional Combat.esp|
|`Effects[2].Spell`|[`000827:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-99f019eb56d3)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|1|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=000829:Reforged Directional Combat.esp|
|`Effects[3].Spell`|[`000829:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-53d43583dacc)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|3|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=00082A:Reforged Directional Combat.esp|
|`Effects[4].Spell`|[`00082A:Reforged Directional Combat.esp`](../magic/MAGIC_035.md#r-c460048d0aa9)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|4|
|`Effects[4].Conditions`|[list: 1 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Name`|Reforged Enemy Directional Dispels|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2f5f7a435ec6"></a>

## bfco_ACTattackSpecial

- Identidade estável Housecarl: `0008D8:SCSI-ACTbfco-Main.esp`.
- Tipo: `Perk`; winner: `SCSI-ACTbfco-Main.esp`; profundidade de override: 1.
- Nome: [/AttackCombE/]; ranks declarados: 1; NextPerk: (null link).
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
|`Name`|[/AttackCombE/]|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-e0be3d3eed88"></a>

## bfco_baseperk001_bfcoSTYLE1

- Identidade estável Housecarl: `0008CD:SCSI-ACTbfco-Main.esp`.
- Tipo: `Perk`; winner: `SCSI-ACTbfco-Main.esp`; profundidade de override: 1.
- Nome: [BFCO BsaeTweaks-STYLE1]; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.5; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.5; Rank=0; Priority=5; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`0008E7:SCSI-ACTbfco-Main.esp`](../magic/MAGIC_036.md#r-6efd2eba1893); Rank=0; Priority=10; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`0008E7:SCSI-ACTbfco-Main.esp`](../magic/MAGIC_036.md#r-6efd2eba1893); Rank=0; Priority=10; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=90; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[5] — PerkEntryPointSetText**: EntryPoint=SetActivateLabel; Rank=0; Priority=90; PerkConditionTabCount=2. Altera texto associado ao entry point; separar apresentação de qualquer transação ou ativação resultante.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=bInJumpState<br>StringParameter1=bInJumpState<br>Parameter2=bInJumpState|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|IsAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|IsSprinting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|IsSprinting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|GetGraphVariableInt|0|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=IsBashing<br>StringParameter1=IsBashing<br>Parameter2=IsBashing|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`0008C1:SCSI-ACTbfco-Main.esp`](../magic/MAGIC_005.md#r-b756ae9a8d4c)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasMagicEffectKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0008DB:SCSI-ACTbfco-Main.esp|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`0008C1:SCSI-ACTbfco-Main.esp`](../magic/MAGIC_005.md#r-b756ae9a8d4c)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasMagicEffectKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0008DB:SCSI-ACTbfco-Main.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 6 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.5|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|1|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.5|
|`Effects[1].EntryPoint`|ModAttackDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|5|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=0008E7:SCSI-ACTbfco-Main.esp|
|`Effects[2].Spell`|[`0008E7:SCSI-ACTbfco-Main.esp`](../magic/MAGIC_036.md#r-6efd2eba1893)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|10|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=0008E7:SCSI-ACTbfco-Main.esp|
|`Effects[3].Spell`|[`0008E7:SCSI-ACTbfco-Main.esp`](../magic/MAGIC_036.md#r-6efd2eba1893)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|10|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[4].EntryPoint`|Activate|
|`Effects[4].PerkConditionTabCount`|2|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|90|
|`Effects[4].Conditions`|[list: 2 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSetText]|
|`Effects[5].Text`||
|`Effects[5].EntryPoint`|SetActivateLabel|
|`Effects[5].PerkConditionTabCount`|2|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|90|
|`Effects[5].Conditions`|[list: 2 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Name`|[BFCO BsaeTweaks-STYLE1]|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-9edfc350ac11"></a>

## bfco_isDWequip

- Identidade estável Housecarl: `00080C:SCSI-ACTbfco-Main.esp`.
- Tipo: `Perk`; winner: `SCSI-ACTbfco-Main.esp`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
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
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
