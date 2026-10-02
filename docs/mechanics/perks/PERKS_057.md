# Perks instaladas — parte 057

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-b2862184eb45"></a>

## VKR_Res_100_Intervention_Perk

- Identidade estável Housecarl: `0A3F64:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Intervention; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`24C876:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_047.md#r-7e9d7b505bcc); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0B2846:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_056.md#r-b984f15d89b0)<br>Parameter1.Link=[`0B2846:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_056.md#r-b984f15d89b0)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=24C876:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`24C876:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_047.md#r-7e9d7b505bcc)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Intervention|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a02ca415f2ed"></a>

## VKR_Res_old_PerfectForm_Perk

- Identidade estável Housecarl: `3B9399:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Perfect Form; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAlchemyEffectiveness; Modification=Multiply; Value=1.05; Rank=0; Priority=120; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=1.05; Rank=0; Priority=119; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.05; Rank=0; Priority=117; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModPercentBlocked; Modification=Multiply; Value=1.05; Rank=0; Priority=116; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.05; Rank=0; Priority=114; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[5] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.05; Rank=0; Priority=113; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModLockpickSweetSpot; Modification=Multiply; Value=1.05; Rank=0; Priority=110; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointModifyValue**: EntryPoint=ModPickpocketChance; Modification=Multiply; Value=1.05; Rank=0; Priority=108; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[8] — PerkEntryPointModifyValue**: EntryPoint=ModDetectionSneakSkill; Modification=Multiply; Value=1.05; Rank=0; Priority=106; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[9] — PerkEntryPointModifyValue**: EntryPoint=ModBuyPrices; Modification=Multiply; Value=0.95; Rank=0; Priority=105; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[10] — PerkEntryPointModifyValue**: EntryPoint=ModSellPrices; Modification=Multiply; Value=1.05; Rank=0; Priority=104; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[11] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=1.05; Rank=0; Priority=103; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0581E4:Skyrim.esm`](../perks/PERKS_056.md#r-fdaebc49d103)<br>Parameter1.Link=[`0581E4:Skyrim.esm`](../perks/PERKS_056.md#r-fdaebc49d103)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Conjuration<br>Parameter1=Conjuration|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 12 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.05|
|`Effects[0].EntryPoint`|ModAlchemyEffectiveness|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|120|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.05|
|`Effects[1].EntryPoint`|ModSpellDuration|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|119|
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
|`Effects[2].Priority`|117|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|1.05|
|`Effects[3].EntryPoint`|ModPercentBlocked|
|`Effects[3].PerkConditionTabCount`|1|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|116|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Multiply|
|`Effects[4].Value`|1.05|
|`Effects[4].EntryPoint`|ModSpellMagnitude|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|114|
|`Effects[4].Conditions`|[list: 1 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointModifyValue]|
|`Effects[5].Modification`|Multiply|
|`Effects[5].Value`|1.05|
|`Effects[5].EntryPoint`|ModArmorRating|
|`Effects[5].PerkConditionTabCount`|2|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|113|
|`Effects[5].Conditions`|[list: 0 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Multiply|
|`Effects[6].Value`|1.05|
|`Effects[6].EntryPoint`|ModLockpickSweetSpot|
|`Effects[6].PerkConditionTabCount`|2|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|110|
|`Effects[6].Conditions`|[list: 0 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyValue]|
|`Effects[7].Modification`|Multiply|
|`Effects[7].Value`|1.05|
|`Effects[7].EntryPoint`|ModPickpocketChance|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|108|
|`Effects[7].Conditions`|[list: 0 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointModifyValue]|
|`Effects[8].Modification`|Multiply|
|`Effects[8].Value`|1.05|
|`Effects[8].EntryPoint`|ModDetectionSneakSkill|
|`Effects[8].PerkConditionTabCount`|2|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|106|
|`Effects[8].Conditions`|[list: 0 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointModifyValue]|
|`Effects[9].Modification`|Multiply|
|`Effects[9].Value`|0.95|
|`Effects[9].EntryPoint`|ModBuyPrices|
|`Effects[9].PerkConditionTabCount`|2|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|105|
|`Effects[9].Conditions`|[list: 0 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointModifyValue]|
|`Effects[10].Modification`|Multiply|
|`Effects[10].Value`|1.05|
|`Effects[10].EntryPoint`|ModSellPrices|
|`Effects[10].PerkConditionTabCount`|2|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|104|
|`Effects[10].Conditions`|[list: 0 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointModifyValue]|
|`Effects[11].Modification`|Multiply|
|`Effects[11].Value`|1.05|
|`Effects[11].EntryPoint`|ModTemperingHealth|
|`Effects[11].PerkConditionTabCount`|2|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|103|
|`Effects[11].Conditions`|[list: 0 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Name`|Perfect Form|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-177c876aaf88"></a>

## VKR_Res_old_RestorationMastery2_Perk_WasRestoration2

- Identidade estável Housecarl: `0C44C7:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Restoration Mastery; ranks declarados: 1; NextPerk: [`0C44C8:Skyrim.esm`](../perks/PERKS_057.md#r-7576fdc84d0d).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.5; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 25|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CAA:Skyrim.esm`](../perks/PERKS_056.md#r-89be12cae610)<br>Parameter1.Link=[`0F2CAA:Skyrim.esm`](../perks/PERKS_056.md#r-89be12cae610)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C44C7:Skyrim.esm`](../perks/PERKS_057.md#r-177c876aaf88)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Restoration Mastery|
|`NextPerk`|[`0C44C8:Skyrim.esm`](../perks/PERKS_057.md#r-7576fdc84d0d)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7576fdc84d0d"></a>

## VKR_Res_old_RestorationMastery3_Perk_WasRestoration3

- Identidade estável Housecarl: `0C44C8:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Restoration Mastery; ranks declarados: 1; NextPerk: [`0C44C9:Skyrim.esm`](../perks/PERKS_057.md#r-b00389b66551).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.5; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C44C7:Skyrim.esm`](../perks/PERKS_057.md#r-177c876aaf88)<br>Parameter1.Link=[`0C44C7:Skyrim.esm`](../perks/PERKS_057.md#r-177c876aaf88)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C44C8:Skyrim.esm`](../perks/PERKS_057.md#r-7576fdc84d0d)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Restoration Mastery|
|`NextPerk`|[`0C44C9:Skyrim.esm`](../perks/PERKS_057.md#r-b00389b66551)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b00389b66551"></a>

## VKR_Res_old_RestorationMastery4_Perk_WasRestoration4

- Identidade estável Housecarl: `0C44C9:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Restoration Mastery; ranks declarados: 1; NextPerk: [`0C44CA:Skyrim.esm`](../perks/PERKS_057.md#r-6d5688b2d543).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.5; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 75|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C44C8:Skyrim.esm`](../perks/PERKS_057.md#r-7576fdc84d0d)<br>Parameter1.Link=[`0C44C8:Skyrim.esm`](../perks/PERKS_057.md#r-7576fdc84d0d)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C44C9:Skyrim.esm`](../perks/PERKS_057.md#r-b00389b66551)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Restoration Mastery|
|`NextPerk`|[`0C44CA:Skyrim.esm`](../perks/PERKS_057.md#r-6d5688b2d543)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-6d5688b2d543"></a>

## VKR_Res_old_RestorationMastery5_Perk_WasRestoration5

- Identidade estável Housecarl: `0C44CA:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Restoration Mastery; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.5; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C44C9:Skyrim.esm`](../perks/PERKS_057.md#r-b00389b66551)<br>Parameter1.Link=[`0C44C9:Skyrim.esm`](../perks/PERKS_057.md#r-b00389b66551)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C44CA:Skyrim.esm`](../perks/PERKS_057.md#r-6d5688b2d543)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Restoration Mastery|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-70847baddb22"></a>

## VKR_Smh_020_ArmorPadding_Perk

- Identidade estável Housecarl: `20AAAF:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Armor Padding; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB40D:Skyrim.esm`](../perks/PERKS_060.md#r-7eff36e4a77d)<br>Parameter1.Link=[`0CB40D:Skyrim.esm`](../perks/PERKS_060.md#r-7eff36e4a77d)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Armor Padding|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-fc4bd965ad87"></a>

## VKR_Smh_040_ArcaneBlacksmith_Perk_WasArcaneBlacksmith

- Identidade estável Housecarl: `05218E:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Arcane Blacksmith; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB40D:Skyrim.esm`](../perks/PERKS_060.md#r-7eff36e4a77d)<br>Parameter1.Link=[`0CB40D:Skyrim.esm`](../perks/PERKS_060.md#r-7eff36e4a77d)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Arcane Blacksmith|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-92724475adb6"></a>

## VKR_Smh_060_LayeredPadding_Perk

- Identidade estável Housecarl: `20AA8A:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Layered Plates; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`20AAAF:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_057.md#r-70847baddb22)<br>Parameter1.Link=[`20AAAF:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_057.md#r-70847baddb22)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Layered Plates|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-6e1a945b0d64"></a>

## VKR_Smh_080_HighYieldMining_Perk

- Identidade estável Housecarl: `20AA97:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: High Yield Mining; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0CB410:Skyrim.esm`](../perks/PERKS_060.md#r-0a9c6d390786)<br>Parameter1.Link=[`0CB410:Skyrim.esm`](../perks/PERKS_060.md#r-0a9c6d390786)|aliases=False; package=False|
|`Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0CB414:Skyrim.esm`](../perks/PERKS_060.md#r-a17f77339868)<br>Parameter1.Link=[`0CB414:Skyrim.esm`](../perks/PERKS_060.md#r-a17f77339868)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|High Yield Mining|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a1e6ff44e894"></a>

## VKR_Smh_090_HiddenEnchantments_Perk

- Identidade estável Housecarl: `45B455:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Hidden Enchantments; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`20AA8A:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_057.md#r-92724475adb6)<br>Parameter1.Link=[`20AA8A:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_057.md#r-92724475adb6)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Hidden Enchantments|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-8e13a75401b7"></a>

## VKR_Smh_old_Clothesmaker_Perk

- Identidade estável Housecarl: `20AA98:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Clothesmaker; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB40D:Skyrim.esm`](../perks/PERKS_060.md#r-7eff36e4a77d)<br>Parameter1.Link=[`0CB40D:Skyrim.esm`](../perks/PERKS_060.md#r-7eff36e4a77d)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Clothesmaker|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-d96de031e924"></a>

## VKR_Smh_old_DecorativeSmithing_Perk

- Identidade estável Housecarl: `20AA8C:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Decorative Smithing; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=15; Rank=0; Priority=138; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB40D:Skyrim.esm`](../perks/PERKS_060.md#r-7eff36e4a77d)<br>Parameter1.Link=[`0CB40D:Skyrim.esm`](../perks/PERKS_060.md#r-7eff36e4a77d)|aliases=False; package=False|
|`Conditions[1]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=10CD08:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|15|
|`Effects[0].EntryPoint`|ModArmorRating|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|138|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Decorative Smithing|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0e6c624bb101"></a>

## VKR_Sne_000_SneakMastery_Perk_WasStealth1

- Identidade estável Housecarl: `0BE126:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Sneak Mastery; ranks declarados: 5; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModDetectionSneakSkill; Modification=AddAVMult; ActorValue=Sneak; Value=0.5; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C07C6:Skyrim.esm`](../perks/PERKS_058.md#r-2a4cfa093dd8)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Sneak|
|`Effects[0].Value`|0.5|
|`Effects[0].Modification`|AddAVMult|
|`Effects[0].EntryPoint`|ModDetectionSneakSkill|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Sneak Mastery|
|`NumRanks`|5|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-8f80f3d584b1"></a>

## VKR_Sne_020_SneakAttack_Perk_WasBackstab

- Identidade estável Housecarl: `058210:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Sneak Attack; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSneakAttackMult; Modification=Multiply; Value=2; Rank=0; Priority=190; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=Sneak<br>Parameter1=Sneak|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BE126:Skyrim.esm`](../perks/PERKS_057.md#r-0e6c624bb101)<br>Parameter1.Link=[`0BE126:Skyrim.esm`](../perks/PERKS_057.md#r-0e6c624bb101)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsWeaponSkillType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModSneakAttackMult|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Sneak Attack|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-89af1b779dd9"></a>

## VKR_Sne_030_SilentMovement1_Perk_WasMuffledMovement

- Identidade estável Housecarl: `058213:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Silent Movement; ranks declarados: 1; NextPerk: [`105F24:Skyrim.esm`](../perks/PERKS_057.md#r-7c0d7b1ff215).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`09379D:Skyrim.esm`](../magic/MAGIC_043.md#r-b5d9c826a8e1); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=Sneak<br>Parameter1=Sneak|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BE126:Skyrim.esm`](../perks/PERKS_057.md#r-0e6c624bb101)<br>Parameter1.Link=[`0BE126:Skyrim.esm`](../perks/PERKS_057.md#r-0e6c624bb101)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=09379D:Skyrim.esm|
|`Effects[0].Ability`|[`09379D:Skyrim.esm`](../magic/MAGIC_043.md#r-b5d9c826a8e1)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Silent Movement|
|`NextPerk`|[`105F24:Skyrim.esm`](../perks/PERKS_057.md#r-7c0d7b1ff215)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7c0d7b1ff215"></a>

## VKR_Sne_030_SilentMovement2_Perk_WasSilence

- Identidade estável Housecarl: `105F24:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Silent Movement; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`105F25:Skyrim.esm`](../magic/MAGIC_046.md#r-65d53102580c); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Sneak<br>Parameter1=Sneak|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058213:Skyrim.esm`](../perks/PERKS_057.md#r-89af1b779dd9)<br>Parameter1.Link=[`058213:Skyrim.esm`](../perks/PERKS_057.md#r-89af1b779dd9)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=105F25:Skyrim.esm|
|`Effects[0].Ability`|[`105F25:Skyrim.esm`](../magic/MAGIC_046.md#r-65d53102580c)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Silent Movement|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2aeea1636bce"></a>

## VKR_Sne_030_SilentRoll1_Perk_WasSilentRoll

- Identidade estável Housecarl: `105F23:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Silent Roll; ranks declarados: 1; NextPerk: [`302DB9:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_057.md#r-b5a9076ef3d9).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`035E38:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-75827324bde5); Rank=0; Priority=100. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=Sneak<br>Parameter1=Sneak|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BE126:Skyrim.esm`](../perks/PERKS_057.md#r-0e6c624bb101)<br>Parameter1.Link=[`0BE126:Skyrim.esm`](../perks/PERKS_057.md#r-0e6c624bb101)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=035E38:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`035E38:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-75827324bde5)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|100|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Silent Roll|
|`NextPerk`|[`302DB9:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_057.md#r-b5a9076ef3d9)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b5a9076ef3d9"></a>

## VKR_Sne_030_SilentRoll2_Perk

- Identidade estável Housecarl: `302DB9:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Silent Roll; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Sneak<br>Parameter1=Sneak|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`105F23:Skyrim.esm`](../perks/PERKS_057.md#r-2aeea1636bce)<br>Parameter1.Link=[`105F23:Skyrim.esm`](../perks/PERKS_057.md#r-2aeea1636bce)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Silent Roll|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2b396dfdb937"></a>

## VKR_Sne_040_DeadlyAim_Perk_WasDeadlyAim

- Identidade estável Housecarl: `1036F0:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Deadly Aim; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSneakAttackMult; Modification=Multiply; Value=1.5; Rank=0; Priority=150; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Sneak<br>Parameter1=Sneak|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058210:Skyrim.esm`](../perks/PERKS_057.md#r-8f80f3d584b1)<br>Parameter1.Link=[`058210:Skyrim.esm`](../perks/PERKS_057.md#r-8f80f3d584b1)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.5|
|`Effects[0].EntryPoint`|ModSneakAttackMult|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|150|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Deadly Aim|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-43092c0d7cfb"></a>

## VKR_Sne_040_Shadowcaster_Perk

- Identidade estável Housecarl: `03799E:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Shadowcaster; ranks declarados: 5; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=215; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Sneak<br>Parameter1=Sneak|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BE126:Skyrim.esm`](../perks/PERKS_057.md#r-0e6c624bb101)<br>Parameter1.Link=[`0BE126:Skyrim.esm`](../perks/PERKS_057.md#r-0e6c624bb101)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Spell<br>Parameter1=Spell|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=046B99:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA8:Skyrim.esm`](../perks/PERKS_049.md#r-90ecb10b697a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BF:Skyrim.esm`](../perks/PERKS_050.md#r-66e84f71d455)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C0:Skyrim.esm`](../perks/PERKS_050.md#r-907ca88f27ab)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C1:Skyrim.esm`](../perks/PERKS_050.md#r-963fe743f3ef)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C2:Skyrim.esm`](../perks/PERKS_051.md#r-e9763c3626fb)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetDetected|2|Subject; ref=(null link); index=-1|EqualTo 0|0|TargetNpc=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|GetDetected|2|Subject; ref=(null link); index=-1|EqualTo 0|0|TargetNpc=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|215|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Shadowcaster|
|`NumRanks`|5|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-49226addbeb5"></a>

## VKR_Sne_050_AssassinsBlade_Perk_WasAssassinsBlade

- Identidade estável Housecarl: `058211:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Assassin's Blade; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSneakAttackMult; Modification=Multiply; Value=2.5; Rank=0; Priority=180; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Sneak<br>Parameter1=Sneak|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058210:Skyrim.esm`](../perks/PERKS_057.md#r-8f80f3d584b1)<br>Parameter1.Link=[`058210:Skyrim.esm`](../perks/PERKS_057.md#r-8f80f3d584b1)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2.5|
|`Effects[0].EntryPoint`|ModSneakAttackMult|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|180|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Assassin's Blade|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-81185242a0da"></a>

## VKR_Sne_050_BlindSpot_Perk

- Identidade estável Housecarl: `302DB3:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Blind Spot; ranks declarados: 5; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModDetectionSneakSkill; Modification=Add; Value=10; Rank=0; Priority=160; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModDetectionSneakSkill; Modification=Add; Value=20; Rank=0; Priority=155; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModDetectionSneakSkill; Modification=Add; Value=30; Rank=0; Priority=150; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Sneak<br>Parameter1=Sneak|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058213:Skyrim.esm`](../perks/PERKS_057.md#r-89af1b779dd9)<br>Parameter1.Link=[`058213:Skyrim.esm`](../perks/PERKS_057.md#r-89af1b779dd9)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetDistance|1|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 480|0|Target=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetDistance|1|Subject; ref=(null link); index=-1|LessThan 640|0|Target=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetDistance|1|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 240|0|Target=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetDistance|1|Subject; ref=(null link); index=-1|LessThan 480|0|Target=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetDistance|1|Subject; ref=(null link); index=-1|LessThan 240|0|Target=000014:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|10|
|`Effects[0].EntryPoint`|ModDetectionSneakSkill|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|160|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Add|
|`Effects[1].Value`|20|
|`Effects[1].EntryPoint`|ModDetectionSneakSkill|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|155|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Add|
|`Effects[2].Value`|30|
|`Effects[2].EntryPoint`|ModDetectionSneakSkill|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|150|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Name`|Blind Spot|
|`NumRanks`|5|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-cf5432d3e569"></a>

## VKR_Sne_060_DodgeRoll_Perk

- Identidade estável Housecarl: `302DB1:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Dodge Roll; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Sneak<br>Parameter1=Sneak|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`105F23:Skyrim.esm`](../perks/PERKS_057.md#r-2aeea1636bce)<br>Parameter1.Link=[`105F23:Skyrim.esm`](../perks/PERKS_057.md#r-2aeea1636bce)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Dodge Roll|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-585b49084272"></a>

## VKR_Sne_060_LightFoot_Perk_WasLightFoot

- Identidade estável Housecarl: `05820C:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Light Foot; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Sneak<br>Parameter1=Sneak|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058213:Skyrim.esm`](../perks/PERKS_057.md#r-89af1b779dd9)<br>Parameter1.Link=[`058213:Skyrim.esm`](../perks/PERKS_057.md#r-89af1b779dd9)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Light Foot|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
