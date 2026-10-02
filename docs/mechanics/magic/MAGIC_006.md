# Cadeias mágicas referenciadas — parte 006

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-aee1bc14b5ea"></a>

## Simple_NecromanticRitualEffect

- Identidade estável Housecarl: `0008FA:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `MagicEffect`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06F6FB:Skyrim.esm<br>Parameter1.Link=06F6FB:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Reanimate|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, DispelWithKeywords, FXPersist, PowerAffectsDuration|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0806E1:Skyrim.esm|

<a id="r-7150da365979"></a>

## MAG_DawnguardRuneAxeEffect01

- Identidade estável Housecarl: `000917:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=028FDE:Dragonborn.esm<br>Parameter1.Link=028FDE:Dragonborn.esm|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0.0001|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|ADA002:Update.esm|
|`Keywords[1]`|ADA010:Update.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magiceffectshaderapply|
|`VirtualMachineAdapter.Scripts[0].Name`|magiceffectshaderapply|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=EffectShaderFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|019C9E:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|EffectShaderFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptBoolProperty] Name=bUseDuration|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|True|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|bUseDuration|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-8d51eb752a27"></a>

## MAG_DawnguardRuneAxeEffect02

- Identidade estável Housecarl: `000918:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=028FDE:Dragonborn.esm<br>Parameter1.Link=028FDE:Dragonborn.esm|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|50|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MAG_DawnguardRuneAxe_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|MAG_DawnguardRuneAxe_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=CounterSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`000919:Artificer.esp`](../magic/MAGIC_037.md#r-d332c36fc5d0)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|CounterSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-49dce859c6bf"></a>

## MAG_DawnguardRuneAxeCounterEffect

- Identidade estável Housecarl: `00091A:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Variable09|
|`Flags`|Recover, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0.8|

<a id="r-8598866a7dfe"></a>

## MAG_DawnguardRuneShieldEffect01

- Identidade estável Housecarl: `000928:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=028FDE:Dragonborn.esm<br>Parameter1.Link=028FDE:Dragonborn.esm|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|ADA002:Update.esm|

<a id="r-a62fad08f9e7"></a>

## MAG_AetherialShieldCooldownEffect

- Identidade estável Housecarl: `00092C:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoMagnitude, NoArea, HideInUI, PowerAffectsDuration, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|

<a id="r-12bb62ca4beb"></a>

## MAG_EbonyBladeEffect02

- Identidade estável Housecarl: `00093E:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013797:Skyrim.esm<br>Parameter1.Link=013797:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 4 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0.0001|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|ADA010:Update.esm|
|`Keywords[1]`|101BDE:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[0].Name`|magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=TrapImod|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0ABF17:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|TrapImod|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=fEffectDurationMax|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|2|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|fEffectDurationMax|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=TargetVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0ABEFB:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|TargetVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=CasterVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|0ABEFC:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|CasterVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-30a933eca467"></a>

## MAG_PerkSpellStrikeEbonyBladeEffect01

- Identidade estável Housecarl: `000941:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsPowerAttacking|record|Target; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`ADA179:Update.esm`](../perks/PERKS_035.md#r-0d3908983c4f)<br>Parameter1.Link=[`ADA179:Update.esm`](../perks/PERKS_035.md#r-0d3908983c4f)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0.0002|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|ADA010:Update.esm|

<a id="r-ecb8088b5af3"></a>

## MAG_RingofNamiraCannibalismEffect03

- Identidade estável Housecarl: `00094A:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|HealRateMult|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-78156f4e3a02"></a>

## Simple_OnmundIllusionWolfEffect

- Identidade estável Housecarl: `000953:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `MagicEffect`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=000871:PuddingFace_SimpleSpellsPackage.esp|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|000871:PuddingFace_SimpleSpellsPackage.esp|
|`Archetype.Association`|000871:PuddingFace_SimpleSpellsPackage.esp|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Illusion|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|TargetLocation|
|`BaseCost`|15|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|1091CF:Skyrim.esm|

<a id="r-e40ab363b00e"></a>

## Simple_EnthirIllusionSkeletonEffect

- Identidade estável Housecarl: `000956:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `MagicEffect`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=000876:PuddingFace_SimpleSpellsPackage.esp|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|000876:PuddingFace_SimpleSpellsPackage.esp|
|`Archetype.Association`|000876:PuddingFace_SimpleSpellsPackage.esp|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Illusion|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|TargetLocation|
|`BaseCost`|15|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|1091CF:Skyrim.esm|

<a id="r-e9f3b04f88d8"></a>

## Simple_DrevisIllusionDremoraEffect

- Identidade estável Housecarl: `000957:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `MagicEffect`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=000877:PuddingFace_SimpleSpellsPackage.esp|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|000877:PuddingFace_SimpleSpellsPackage.esp|
|`Archetype.Association`|000877:PuddingFace_SimpleSpellsPackage.esp|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Illusion|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|TargetLocation|
|`BaseCost`|15|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|1091CF:Skyrim.esm|

<a id="r-05dfb1f13930"></a>

## Survival_HungerStage5DisplayEffect

- Identidade estável Housecarl: `00095B:ccQDRSSE001-SurvivalMode.esl`.
- Tipo: `MagicEffect`; winner: `ccQDRSSE001-SurvivalMode.esl`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Mood|
|`Flags`|Detrimental, NoHitEvent, NoMagnitude, NoArea, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-1a6a0ed41452"></a>

## Survival_HungerStage4DisplayEffect

- Identidade estável Housecarl: `00095C:ccQDRSSE001-SurvivalMode.esl`.
- Tipo: `MagicEffect`; winner: `ccQDRSSE001-SurvivalMode.esl`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Mood|
|`Flags`|Detrimental, NoHitEvent, NoMagnitude, NoArea, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-e30e236d0c9e"></a>

## Survival_HungerStage3DisplayEffect

- Identidade estável Housecarl: `00095D:ccQDRSSE001-SurvivalMode.esl`.
- Tipo: `MagicEffect`; winner: `ccQDRSSE001-SurvivalMode.esl`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Mood|
|`Flags`|Detrimental, NoHitEvent, NoMagnitude, NoArea, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-17a064d9642a"></a>

## Survival_HungerStage2DisplayEffect

- Identidade estável Housecarl: `00095E:ccQDRSSE001-SurvivalMode.esl`.
- Tipo: `MagicEffect`; winner: `ccQDRSSE001-SurvivalMode.esl`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Mood|
|`Flags`|Detrimental, NoHitEvent, NoMagnitude, NoArea, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-0d38a217c351"></a>

## ccVSVSSE003_MGEF_Skeleton_warriorDS

- Identidade estável Housecarl: `00096D:ccvsvsse003-necroarts.esl`.
- Tipo: `MagicEffect`; winner: `ccvsvsse003-necroarts.esl`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)<br>Parameter1.Link=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=000980:ccvsvsse003-necroarts.esl|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|000980:ccvsvsse003-necroarts.esl|
|`Archetype.Association`|000980:ccvsvsse003-necroarts.esl|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|7.5|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|

<a id="r-fd063795338b"></a>

## ccVSVSSE003_MGEF_Skeleton_warlockDS

- Identidade estável Housecarl: `00096E:ccvsvsse003-necroarts.esl`.
- Tipo: `MagicEffect`; winner: `ccvsvsse003-necroarts.esl`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)<br>Parameter1.Link=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=000978:ccvsvsse003-necroarts.esl|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|000978:ccvsvsse003-necroarts.esl|
|`Archetype.Association`|000978:ccvsvsse003-necroarts.esl|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|18|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|
|`Keywords[1]`|0A9B1F:Skyrim.esm|

<a id="r-f3891c6864d1"></a>

## ccVSVSSE003_MGEF_Skeleton_championDS

- Identidade estável Housecarl: `00096F:ccvsvsse003-necroarts.esl`.
- Tipo: `MagicEffect`; winner: `ccvsvsse003-necroarts.esl`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)<br>Parameter1.Link=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=000977:ccvsvsse003-necroarts.esl|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|000977:ccvsvsse003-necroarts.esl|
|`Archetype.Association`|000977:ccvsvsse003-necroarts.esl|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|13.5|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|
|`Keywords[1]`|0A9B1F:Skyrim.esm|

<a id="r-a80e28bfe5dc"></a>

## ccVSVSSE003_MGEF_Skeleton_archerDS

- Identidade estável Housecarl: `000970:ccvsvsse003-necroarts.esl`.
- Tipo: `MagicEffect`; winner: `ccvsvsse003-necroarts.esl`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)<br>Parameter1.Link=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=000976:ccvsvsse003-necroarts.esl|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|000976:ccvsvsse003-necroarts.esl|
|`Archetype.Association`|000976:ccvsvsse003-necroarts.esl|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|9.25|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|

<a id="r-0b2a5b908507"></a>

## MAG_BowoftheStagPrinceCounterEffect

- Identidade estável Housecarl: `00097D:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Variable10|
|`Flags`|Recover, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0.8|

<a id="r-c4934e65a170"></a>

## MAG_BowoftheStagPrinceEffect01

- Identidade estável Housecarl: `000980:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, NoRecast, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|50|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|ADA010:Update.esm|
|`Keywords[1]`|ADA119:Update.esm|
|`Keywords[2]`|000A4B:Artificer.esp|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MAG_StagPrinceCounter_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|MAG_StagPrinceCounter_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=CounterSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`00097E:Artificer.esp`](../magic/MAGIC_037.md#r-938a5a575802)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|CounterSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-d640d37f3938"></a>

## Simple_WaterWalkingConstant

- Identidade estável Housecarl: `00099D:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `MagicEffect`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|WaterWalking|
|`Flags`|Recover, NoDuration, NoMagnitude, NoArea, PowerAffectsMagnitude, PowerAffectsDuration|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.15|

<a id="r-e85c3777e08b"></a>

## MAG_GuildmastersSetEffect01

- Identidade estável Housecarl: `000A2B:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|SpeedMult|
|`Flags`|Recover, NoDuration, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|10|

<a id="r-371a39593065"></a>

## MAG_GuildmastersSetEffect02

- Identidade estável Housecarl: `000A2D:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|CarryWeight|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|10|
