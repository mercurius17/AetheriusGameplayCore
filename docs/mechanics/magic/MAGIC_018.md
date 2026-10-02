# Cadeias mágicas referenciadas — parte 018

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-afed05dc578d"></a>

## MAG_CultistBoethiahEffect02

- Identidade estável Housecarl: `0F3A3F:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|StaminaRate|
|`Flags`|Recover, Detrimental, NoArea, HideInUI, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-7d9e531752e7"></a>

## VKR_Des_ShockOnHit_Effect_PerkDisintegrateConcAimed

- Identidade estável Housecarl: `0F3F0C:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Mysticism - Vokrii Compatibility Patch.esp`; profundidade de override: 5.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F3F0E:Skyrim.esm`](../perks/PERKS_050.md#r-366f26d9bcb8)<br>Parameter1.Link=[`0F3F0E:Skyrim.esm`](../perks/PERKS_050.md#r-366f26d9bcb8)|aliases=False; package=False|
|`Conditions[1]`|IsActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Conditions[2]`|GetDead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[3]`|GetRandomPercent|record|Subject; ref=(null link); index=-1|LessThan 2987FC:Vokrii - Minimalistic Perks of Skyrim.esp|0|—|aliases=False; package=False|
|`Conditions[4]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 5 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Detrimental, NoHitEvent, NoDuration, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude, NoHitEffect, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistShock|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_OnHitDestructionPerks_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_OnHitDestructionPerks_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VKR_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`25BB95:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-4d421d80a3a7)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-abb2beb1c9c4"></a>

## VKR_Des_ShockOnHit_Effect_PerkDisintegrateFFAimed

- Identidade estável Housecarl: `0F3F0D:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Mysticism - Vokrii Compatibility Patch.esp`; profundidade de override: 4.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F3F0E:Skyrim.esm`](../perks/PERKS_050.md#r-366f26d9bcb8)<br>Parameter1.Link=[`0F3F0E:Skyrim.esm`](../perks/PERKS_050.md#r-366f26d9bcb8)|aliases=False; package=False|
|`Conditions[1]`|IsActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Conditions[2]`|GetDead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Detrimental, NoHitEvent, NoDuration, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude, NoHitEffect, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistShock|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_OnHitDestructionPerks_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_OnHitDestructionPerks_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VKR_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`25BB95:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-4d421d80a3a7)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-18af3b727e0b"></a>

## ReanimateSecondayFFAimed

- Identidade estável Housecarl: `0F52AB:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 0|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoMagnitude, FXPersist, PowerAffectsDuration, NoDeathDispel|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=ReanimateAshPile|
|`VirtualMachineAdapter.Scripts[0].Name`|ReanimateAshPile|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 6 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=ActorTypeDaedra|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|013797:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|ActorTypeDaedra|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=ActorTypeFamiliar|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|10EAD7:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|ActorTypeFamiliar|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptFloatProperty] Name=fDelay|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|1.25|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|fDelay|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptFloatProperty] Name=ShaderDuration|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Data`|4|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|ShaderDuration|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=ImmunityList|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|0F6534:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|ImmunityList|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=MagicEffectShader|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|0D22FB:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|MagicEffectShader|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-4227bfb45a95"></a>

## PlayerVampireAbsorbHealthConcAimed

- Identidade estável Housecarl: `0F5B57:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|3|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|101BDE:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[0].Name`|magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=TrapImod|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0ABF17:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|TrapImod|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=CasterVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0ABEFC:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|CasterVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=TargetVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0ABEFB:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|TargetVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-e2522879328b"></a>

## BladesAbDragon

- Identidade estável Housecarl: `0F5FFB:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Recover, NoDuration, NoArea|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-2ae3ddab429c"></a>

## WerewolfChangeFXEffect

- Identidade estável Housecarl: `0F8209:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoArea, NoRecast|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magiceffectshaderapply|
|`VirtualMachineAdapter.Scripts[0].Name`|magiceffectshaderapply|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 5 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptBoolProperty] Name=bUseDuration|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|True|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|bUseDuration|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=fDelay|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|2.25|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|fDelay|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=EffectShaderFX|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0EBECD:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|EffectShaderFX|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptBoolProperty] Name=bRemove|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Data`|True|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|bRemove|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptFloatProperty] Name=fDuration|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Data`|0.5|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|fDuration|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=WerewolfTransformVisual|
|`VirtualMachineAdapter.Scripts[1].Name`|WerewolfTransformVisual|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 8 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=NPCWerewolfTransformationB3D|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|0FF786:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|NPCWerewolfTransformationB3D|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[1]`|[ScriptObjectProperty] Name=PlayerWerewolfQuest|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Object`|02BA16:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Name`|PlayerWerewolfQuest|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[2]`|[ScriptObjectProperty] Name=WerewolfRace|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Object`|0CDD84:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Name`|WerewolfRace|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[3]`|[ScriptObjectProperty] Name=WolfSkinFXArmor|
|`VirtualMachineAdapter.Scripts[1].Properties[3].Object`|0F6002:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[3].Name`|WolfSkinFXArmor|
|`VirtualMachineAdapter.Scripts[1].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[4]`|[ScriptObjectProperty] Name=NPCWerewolfTransformation|
|`VirtualMachineAdapter.Scripts[1].Properties[4].Object`|0F936B:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[4].Name`|NPCWerewolfTransformation|
|`VirtualMachineAdapter.Scripts[1].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[5]`|[ScriptObjectProperty] Name=NPCWerewolfTransformationB2D|
|`VirtualMachineAdapter.Scripts[1].Properties[5].Object`|0FF784:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[5].Name`|NPCWerewolfTransformationB2D|
|`VirtualMachineAdapter.Scripts[1].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[6]`|[ScriptObjectProperty] Name=FeedBloodVFX|
|`VirtualMachineAdapter.Scripts[1].Properties[6].Object`|0F3A8B:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[6].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[6].Name`|FeedBloodVFX|
|`VirtualMachineAdapter.Scripts[1].Properties[6].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[7]`|[ScriptObjectProperty] Name=IdleWerewolfTransformation|
|`VirtualMachineAdapter.Scripts[1].Properties[7].Object`|02A59D:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[7].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[7].Name`|IdleWerewolfTransformation|
|`VirtualMachineAdapter.Scripts[1].Properties[7].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-f840ab3c1fe8"></a>

## MAG_CultistHircineCounterEffect

- Identidade estável Housecarl: `0F8B41:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Variable10|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0.0001|

<a id="r-3e8834c2f5a6"></a>

## COTV_RigorMortisEffect

- Identidade estável Housecarl: `0FD74A:Curse of the Vampire.esp`.
- Tipo: `MagicEffect`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|GetRestrained|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Paralysis|
|`Archetype.ActorValue`|Paralysis|
|`Flags`|Hostile, Recover, NoMagnitude, FXPersist, PowerAffectsDuration|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|450|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01EA70:Skyrim.esm|

<a id="r-b3e64809896f"></a>

## MAG_PilgrimTallPapaRitualCloakEffect

- Identidade estável Housecarl: `0FDC47:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|ConjurationSkillAdvance|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude, NoHitEffect, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-94fc67806412"></a>

## VoiceMarkedForDeathHealthEffect01

- Identidade estável Housecarl: `10319C:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Update.esm`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Recover, Detrimental, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|

<a id="r-e672e6aac0f6"></a>

## VoiceMarkedForDeathArmorEffect01

- Identidade estável Housecarl: `10319D:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Update.esm`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Hostile, Recover, Detrimental|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|

<a id="r-3c7d1d2590e1"></a>

## VoiceAuraWhisperExterior

- Identidade estável Housecarl: `10319E:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsInInterior|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoHitEvent, FXPersist, NoRecast, PowerAffectsMagnitude, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicImodScript|
|`VirtualMachineAdapter.Scripts[0].Name`|magicImodScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=IntroFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|08AFD0:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|IntroFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-984970b1a4f0"></a>

## PerkSteadyHandTimeSlowdown

- Identidade estável Housecarl: `103AD7:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|BowSpeedBonus|
|`Flags`|Recover, Detrimental, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-195829277191"></a>

## MAG_PerkArmorFFSelf30

- Identidade estável Housecarl: `104AB5:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=104AB6:Skyrim.esm|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|104AB6:Skyrim.esm|
|`Archetype.Association`|104AB6:Skyrim.esm|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, NoArea, FXPersist, HideInUI, PowerAffectsDuration|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|104AB6:Skyrim.esm|

<a id="r-f3a078078caa"></a>

## MAG_PerkArmorFFSelf70

- Identidade estável Housecarl: `104AB9:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=104AB8:Skyrim.esm|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|104AB8:Skyrim.esm|
|`Archetype.Association`|104AB8:Skyrim.esm|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, NoArea, FXPersist, HideInUI, PowerAffectsDuration|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|104AB8:Skyrim.esm|

<a id="r-b90c1f5bc9ba"></a>

## MAG_PerkArmorFFSelf50

- Identidade estável Housecarl: `104ABA:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=104AB7:Skyrim.esm|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|104AB7:Skyrim.esm|
|`Archetype.Association`|104AB7:Skyrim.esm|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, NoArea, FXPersist, HideInUI, PowerAffectsDuration|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|104AB7:Skyrim.esm|

<a id="r-5af477927f51"></a>

## BloodglassMagicEffect

- Identidade estável Housecarl: `104BC0:Better Vampire NPCs.esp`.
- Tipo: `MagicEffect`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, Recover, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=BVNPCBloodglassWeaponAppliedSpell|
|`VirtualMachineAdapter.Scripts[0].Name`|BVNPCBloodglassWeaponAppliedSpell|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 12 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=BloodglassBloodPlagueConstantSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`113978:Better Vampire NPCs.esp`](../magic/MAGIC_046.md#r-9b5edeee9b0c)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|BloodglassBloodPlagueConstantSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=BloodglassSuccessfulHit|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|[`109AFB:Better Vampire NPCs.esp`](../magic/MAGIC_046.md#r-d0163a25512c)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|BloodglassSuccessfulHit|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=BloodglassPlagueExplosion|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|10EA3B:Better Vampire NPCs.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|BloodglassPlagueExplosion|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=BloodglassSuccessfulHit2|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|[`10EA37:Better Vampire NPCs.esp`](../magic/MAGIC_046.md#r-a86cf07e421c)|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|BloodglassSuccessfulHit2|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=ActorTypeDragon|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|035D59:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|ActorTypeDragon|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=BloodglassVictimExplosion|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|104BC2:Better Vampire NPCs.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|BloodglassVictimExplosion|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[6]`|[ScriptObjectProperty] Name=MammothRace|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Object`|0131FF:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Name`|MammothRace|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[7]`|[ScriptObjectProperty] Name=BloodglassEffectGlobal|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Object`|10EA3D:Better Vampire NPCs.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Name`|BloodglassEffectGlobal|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[8]`|[ScriptObjectProperty] Name=BloodglassSuccessfulHit3|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Object`|[`10EA3C:Better Vampire NPCs.esp`](../magic/MAGIC_046.md#r-e62d73f2e481)|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Name`|BloodglassSuccessfulHit3|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[9]`|[ScriptObjectProperty] Name=GiantRace|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Object`|0131F9:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Name`|GiantRace|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[10]`|[ScriptObjectProperty] Name=BloodglassDrain|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Object`|[`109AF8:Better Vampire NPCs.esp`](../magic/MAGIC_046.md#r-71e87660b2cd)|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Name`|BloodglassDrain|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[11]`|[ScriptObjectProperty] Name=BloodglassFearSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Object`|[`109B03:Better Vampire NPCs.esp`](../magic/MAGIC_046.md#r-09420a893431)|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Name`|BloodglassFearSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-760b79fb33dc"></a>

## TGNightingaleShadowPerkEffect

- Identidade estável Housecarl: `1058A9:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|0|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-657e34541871"></a>

## dunKatariahScimitarEffect

- Identidade estável Housecarl: `105A01:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetRandomPercent|record|Subject; ref=(null link); index=-1|GreaterThan 60|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Stagger|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile|
|`MagicSkill`|Destruction|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|2|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=dunKatariahScimitarScript|
|`VirtualMachineAdapter.Scripts[0].Name`|dunKatariahScimitarScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptIntProperty] Name=PushForce|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|5|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PushForce|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-50e29382514e"></a>

## PerkQuickShot

- Identidade estável Housecarl: `105F17:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|WeaponSpeedMult|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-06f49a142339"></a>

## PerkTrickShotDisarm

- Identidade estável Housecarl: `105F1B:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetRandomPercent|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 25|0|—|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0D205E:Skyrim.esm<br>Parameter1.Link=0D205E:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Disarm|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, FXPersist, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|

<a id="r-d597f0270492"></a>

## PlayerWerewolfVictimEffect

- Identidade estável Housecarl: `106395:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|WerewolfFeed|
|`Archetype.ActorValue`|None|
|`Flags`|0|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1WerewolfFeedPointsScript|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1WerewolfFeedPointsScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 7 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DLC1WerewolfMaxPerks|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|017E8F:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DLC1WerewolfMaxPerks|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=DLC1WerewolfNextPerk|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|00693C:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|DLC1WerewolfNextPerk|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=DLC1FeedPointsMsg|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|00A26F:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|DLC1FeedPointsMsg|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=DLC1WerewolfPerkPoints|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|006939:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|DLC1WerewolfPerkPoints|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=DLC1WerewolfPerkEarned|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|01571D:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|DLC1WerewolfPerkEarned|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=DLC1WerewolfFeedPoints|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|00693D:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|DLC1WerewolfFeedPoints|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[6]`|[ScriptObjectProperty] Name=DLC1WerewolfTotalPerksEarned|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Object`|017E91:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Name`|DLC1WerewolfTotalPerksEarned|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-e791c905a008"></a>

## COTV_VampireBatFormEffect

- Identidade estável Housecarl: `107951:Curse of the Vampire.esp`.
- Tipo: `MagicEffect`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`29CA5F:Curse of the Vampire.esp`](../magic/MAGIC_023.md#r-6f4c0ffe248c)<br>Parameter1.Link=[`29CA5F:Curse of the Vampire.esp`](../magic/MAGIC_023.md#r-6f4c0ffe248c)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|FXPersist, HideInUI, NoRecast|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|100|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[0].Name`|magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=IntroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|019D82:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|IntroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=OutroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|01199D:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|OutroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=COTV_VampireBatFormFXScript|
|`VirtualMachineAdapter.Scripts[1].Name`|COTV_VampireBatFormFXScript|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 12 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=DLC1VampireBatsReformBATSFXS|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|018EF2:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|DLC1VampireBatsReformBATSFXS|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[1]`|[ScriptObjectProperty] Name=DLC1VampLordBatsFXActivator|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Object`|019CA0:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Name`|DLC1VampLordBatsFXActivator|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[2]`|[ScriptFloatProperty] Name=fSpellEndDelay|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Data`|0.5|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Name`|fSpellEndDelay|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[3]`|[ScriptObjectProperty] Name=DLC1PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[1].Properties[3].Object`|0071D0:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[3].Name`|DLC1PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[1].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[4]`|[ScriptObjectProperty] Name=batAmulet|
|`VirtualMachineAdapter.Scripts[1].Properties[4].Object`|014629:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[4].Name`|batAmulet|
|`VirtualMachineAdapter.Scripts[1].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[5]`|[ScriptObjectProperty] Name=DLC1VampireBatsReformFXS|
|`VirtualMachineAdapter.Scripts[1].Properties[5].Object`|018EF1:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[5].Name`|DLC1VampireBatsReformFXS|
|`VirtualMachineAdapter.Scripts[1].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[6]`|[ScriptFloatProperty] Name=fReformDelay|
|`VirtualMachineAdapter.Scripts[1].Properties[6].Data`|0.1|
|`VirtualMachineAdapter.Scripts[1].Properties[6].Name`|fReformDelay|
|`VirtualMachineAdapter.Scripts[1].Properties[6].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[7]`|[ScriptObjectProperty] Name=BatSprintStart|
|`VirtualMachineAdapter.Scripts[1].Properties[7].Object`|00BB8B:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[7].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[7].Name`|BatSprintStart|
|`VirtualMachineAdapter.Scripts[1].Properties[7].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[8]`|[ScriptObjectProperty] Name=AmuletSpell|
|`VirtualMachineAdapter.Scripts[1].Properties[8].Object`|[`0068B2:Dawnguard.esm`](../magic/MAGIC_037.md#r-402c2e3f37cd)|
|`VirtualMachineAdapter.Scripts[1].Properties[8].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[8].Name`|AmuletSpell|
|`VirtualMachineAdapter.Scripts[1].Properties[8].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[9]`|[ScriptObjectProperty] Name=COTV_VampireBatForm|
|`VirtualMachineAdapter.Scripts[1].Properties[9].Object`|[`0038B9:Dawnguard.esm`](../magic/MAGIC_037.md#r-706e037cb927)|
|`VirtualMachineAdapter.Scripts[1].Properties[9].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[9].Name`|COTV_VampireBatForm|
|`VirtualMachineAdapter.Scripts[1].Properties[9].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[10]`|[ScriptObjectProperty] Name=CastingImod|
|`VirtualMachineAdapter.Scripts[1].Properties[10].Object`|019D81:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[10].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[10].Name`|CastingImod|
|`VirtualMachineAdapter.Scripts[1].Properties[10].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[11]`|[ScriptObjectProperty] Name=DLC1VampireLevitateStateGlobal|
|`VirtualMachineAdapter.Scripts[1].Properties[11].Object`|015FC8:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[11].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[11].Name`|DLC1VampireLevitateStateGlobal|
|`VirtualMachineAdapter.Scripts[1].Properties[11].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-f22cc1a15560"></a>

## BloodglassAbsorbHealthConcAimed

- Identidade estável Housecarl: `109AF9:Better Vampire NPCs.esp`.
- Tipo: `MagicEffect`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|1.5|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[0].Name`|magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=TrapImod|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0ABF17:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|TrapImod|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=CasterVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0ABEFC:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|CasterVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=TargetVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0ABEFB:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|TargetVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=VampireAbsorbHealthScript|
|`VirtualMachineAdapter.Scripts[1].Name`|VampireAbsorbHealthScript|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=DiseasePorphyricHemophelia|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|[`0B8780:Skyrim.esm`](../magic/MAGIC_044.md#r-066b9f248034)|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|DiseasePorphyricHemophelia|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
