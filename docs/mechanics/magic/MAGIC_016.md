# Cadeias mágicas referenciadas — parte 016

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-63fb04363233"></a>

## MAG_PilgrimTalosEffect02

- Identidade estável Housecarl: `0B1D0B:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|SpeechcraftSkillAdvance|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-5aa3d975b854"></a>

## MAG_FrostSlowFFAimed

- Identidade estável Housecarl: `0B729F:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Mysticism - Vokrii Compatibility Patch.esp`; profundidade de override: 5.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetFlyingState|record|Target; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, Recover, Detrimental, DispelWithKeywords, FXPersist, HideInUI, PowerAffectsDuration, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0B729E:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MAG_FrostSlow_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|MAG_FrostSlow_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=MAG_FrostSlow_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`CDB97A:MysticismMagic.esp`](../magic/MAGIC_062.md#r-4638d60191d8)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|MAG_FrostSlow_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-238d77d2b196"></a>

## FrostSlowFFContact

- Identidade estável Housecarl: `0B72A0:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetActorValue|record|Subject; ref=(null link); index=-1|LessThan 100|0|ActorValue=ResistFrost<br>Parameter1=ResistFrost|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, Recover, Detrimental, DispelWithKeywords, NoArea, FXPersist, HideInUI, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistFrost|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0B729E:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=ODN_Slow_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|ODN_Slow_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptFloatProperty] Name=ODN_SpeedDelta|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|-50|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|ODN_SpeedDelta|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=ODN_WeightDelta|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|-0.01|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|ODN_WeightDelta|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-a4c4f44e7140"></a>

## MAG_FrostDamageFFHazardArea

- Identidade estável Housecarl: `0B79FE:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 5.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetIsObjectType|record|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Actor<br>Parameter1=Actor|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectSpawnHazardArchetype] Association=0B7A04:Skyrim.esm|
|`Archetype.Type`|SpawnHazard|
|`Archetype.AssociationKey`|0B7A04:Skyrim.esm|
|`Archetype.Association`|0B7A04:Skyrim.esm|
|`Archetype.ActorValue`|None|
|`Flags`|NoArea, FXPersist, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFrost|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|20|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|01CEAE:Skyrim.esm|
|`Keywords[1]`|0806E1:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=shaderparticlegeometryscript|
|`VirtualMachineAdapter.Scripts[0].Name`|shaderparticlegeometryscript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 6 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptFloatProperty] Name=FadeOutTime|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|2|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|FadeOutTime|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=FadeInTime|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|2|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|FadeInTime|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=ActivatorRef|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0B79FF:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|ActivatorRef|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptFloatProperty] Name=fDistnceCheck|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Data`|1000|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|fDistnceCheck|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptBoolProperty] Name=bUseDistanceCheck|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Data`|True|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|bUseDistanceCheck|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=PSGD|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|0B79FB:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|PSGD|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-ba4e7b384cd6"></a>

## MAG_EnchResistMagicConstantSelf

- Identidade estável Housecarl: `0B7A35:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Thaumaturgy.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|ResistMagic|
|`Flags`|Recover, NoDuration, FXPersist, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|22.5|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|074F58:Skyrim.esm|

<a id="r-085582bae4c0"></a>

## DisDamageHealthVampire

- Identidade estável Housecarl: `0B8778:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetRandomPercent|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 15|0|—|aliases=False; package=False|
|`Conditions[1]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Recover, Detrimental, NoDuration, NoArea, PowerAffectsDuration|
|`MagicSkill`|Restoration|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Touch|
|`BaseCost`|5|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VampireDiseaseEffectScript|
|`VirtualMachineAdapter.Scripts[0].Name`|VampireDiseaseEffectScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 14 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VampireTransformIncreaseISMD|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0FD815:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VampireTransformIncreaseISMD|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=IntroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|07C723:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|IntroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VampireSunsetMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0D1087:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VampireSunsetMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=VampireFeed|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|[`0CF02C:Skyrim.esm`](../perks/PERKS_006.md#r-1e00c75c9e15)|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VampireFeed|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptFloatProperty] Name=VampireChangeTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Data`|0|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|VampireChangeTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=VampireDiseaseMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|0C7FA3:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|VampireDiseaseMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[6]`|[ScriptObjectProperty] Name=VampireSunriseMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Object`|0D1086:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Name`|VampireSunriseMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[7]`|[ScriptObjectProperty] Name=GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Object`|000039:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Name`|GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[8]`|[ScriptObjectProperty] Name=GameHour|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Object`|000038:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Name`|GameHour|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[9]`|[ScriptObjectProperty] Name=VampireTransformDecreaseISMD|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Object`|0FD816:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Name`|VampireTransformDecreaseISMD|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[10]`|[ScriptObjectProperty] Name=VampireSleepMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Object`|0ED0AB:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Name`|VampireSleepMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[11]`|[ScriptObjectProperty] Name=OutroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Object`|07C722:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Name`|OutroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[12]`|[ScriptObjectProperty] Name=PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Object`|0EAFD5:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Name`|PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[13]`|[ScriptObjectProperty] Name=AbsorbRedImod|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Object`|0ABF17:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Name`|AbsorbRedImod|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-30cf551b805c"></a>

## MAG_PilgrimPhynasterEffect03

- Identidade estável Housecarl: `0BBF0D:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|ResistShock|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-cd9b6ec52867"></a>

## MAG_PerkFalseLifeConcAimedCloak

- Identidade estável Housecarl: `0C132F:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`ADA505:Update.esm`](../perks/PERKS_014.md#r-d9bdca265582)<br>Parameter1.Link=[`ADA505:Update.esm`](../perks/PERKS_014.md#r-d9bdca265582)|aliases=False; package=False|
|`Conditions[2]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[4]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[5]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`ADA504:Update.esm`](../perks/PERKS_014.md#r-7c9b82fa8764)<br>Parameter1.Link=[`ADA504:Update.esm`](../perks/PERKS_014.md#r-7c9b82fa8764)|aliases=False; package=False|
|`Conditions[6]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Conditions[7]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[8]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013797:Skyrim.esm<br>Parameter1.Link=013797:Skyrim.esm|aliases=False; package=False|
|`Conditions[9]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 10 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|1.5|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|101BDE:Skyrim.esm|
|`Keywords[1]`|0A9B1F:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[0].Name`|magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=CasterVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0ABEFC:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|CasterVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=TrapImod|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0ABF17:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|TrapImod|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=TargetVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0ABEFB:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|TargetVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-109ecaa028b6"></a>

## OREO_crBanditPoisonFFContact

- Identidade estável Housecarl: `0C2FFE:Bandit War.esp`.
- Tipo: `MagicEffect`; winner: `Bandit War.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, NoRecast, PowerAffectsMagnitude, Painless, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|PoisonResist|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|

<a id="r-5f8eb135bd33"></a>

## OREO_crInvisibillityFFSelf

- Identidade estável Housecarl: `0C80FF:Bandit War.esp`.
- Tipo: `MagicEffect`; winner: `Bandit War.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Invisibility|
|`Archetype.ActorValue`|Invisibility|
|`Flags`|Recover, DispelWithKeywords, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration|
|`MagicSkill`|Illusion|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|125|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01EA6F:Skyrim.esm|

<a id="r-a3ef02172b05"></a>

## VKR_Con_VoidBrand_Effect_Magicka

- Identidade estável Housecarl: `0CC816:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`017F72:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-582b6346079a)<br>Parameter1.Link=[`017F72:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-582b6346079a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Magicka|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|Conjuration|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0CC817:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-0544eca00a33"></a>

## VoiceDisarmEffect02

- Identidade estável Housecarl: `0CD088:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0D205E:Skyrim.esm<br>Parameter1.Link=0D205E:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Disarm|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|

<a id="r-94b2e1c99eff"></a>

## VoiceDisarmEffect03

- Identidade estável Housecarl: `0CD089:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0D205E:Skyrim.esm<br>Parameter1.Link=0D205E:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Disarm|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|

<a id="r-b2749c0003dd"></a>

## MAG_ArmorFFSelf100

- Identidade estável Housecarl: `0CDB75:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=01EA72:Skyrim.esm|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|01EA72:Skyrim.esm|
|`Archetype.Association`|01EA72:Skyrim.esm|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, NoArea, FXPersist, PowerAffectsDuration|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0.13|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|01EA72:Skyrim.esm|
|`Keywords[1]`|0A9B1E:Skyrim.esm|
|`Keywords[2]`|0806E1:Skyrim.esm|

<a id="r-a81d97d55abc"></a>

## VKR_Alc_PlagueDoctor_Effect_CloakProc_PoisonRes

- Identidade estável Housecarl: `0CF8B8:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=0CF8B9:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|0CF8B9:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Association`|0CF8B9:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.ActorValue`|PoisonResist|
|`Flags`|Recover, Detrimental, NoHitEvent, NoArea, FXPersist, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0.15|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0CF8B9:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-71424c0c1c68"></a>

## VKR_Alc_PlagueDoctor_Effect_CloakProc_DiseaseRes

- Identidade estável Housecarl: `0CF8BB:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=0CF8B9:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|0CF8B9:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Association`|0CF8B9:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.ActorValue`|ResistDisease|
|`Flags`|Recover, Detrimental, NoHitEvent, NoArea, FXPersist, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0CF8BA:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-5a2ecc5908d8"></a>

## VKR_Alc_PlagueDoctor_Effect_Ab

- Identidade estável Housecarl: `0CF8BE:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=0CF8BC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`0CF8BC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_044.md#r-768778e17686)|
|`Archetype.Association`|[`0CF8BC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_044.md#r-768778e17686)|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoDuration, NoArea, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-89f3b549cf37"></a>

## MAG_FrostDamageHazardFFContact

- Identidade estável Housecarl: `0CFBC1:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetIsObjectType|record|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Actor<br>Parameter1=Actor|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFrost|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|4|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAE:Skyrim.esm|

<a id="r-170f39f2f643"></a>

## AbGhostNew

- Identidade estável Housecarl: `0D2053:Skyrim.esm`.
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
|`Flags`|NoDuration, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicSetActorAlphaScript|
|`VirtualMachineAdapter.Scripts[0].Name`|magicSetActorAlphaScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptBoolProperty] Name=DontFadeBack|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|True|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DontFadeBack|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=AlphaValue|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|0.25|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|AlphaValue|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-8b7d1c8da5cb"></a>

## MAG_CultistPeryiteEffectDiseaseResist

- Identidade estável Housecarl: `0D5427:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|ResistDisease|
|`Flags`|Recover, Detrimental, NoArea, FXPersist, HideInUI, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-100ee3da8916"></a>

## MAG_CultistPeryiteEffectAlt

- Identidade estável Housecarl: `0D5428:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|AlchemyModifier|
|`Flags`|Recover, NoArea, HideInUI, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-1e7e94470291"></a>

## MAG_CultistSheogorathEffectCloak

- Identidade estável Housecarl: `0D5429:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=0D542B:Pilgrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`0D542B:Pilgrim.esp`](../magic/MAGIC_044.md#r-58e58dccf93b)|
|`Archetype.Association`|[`0D542B:Pilgrim.esp`](../magic/MAGIC_044.md#r-58e58dccf93b)|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-372d274a9a7d"></a>

## MAG_CultistSheogorathCloakEffect

- Identidade estável Housecarl: `0D542A:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0C44B6:Skyrim.esm<br>Parameter1.Link=0C44B6:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Detrimental, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0.0001|

<a id="r-20d3f98789a1"></a>

## OREO_BoundBowFix

- Identidade estável Housecarl: `0D74C7:Bandit War.esp`.
- Tipo: `MagicEffect`; winner: `Bandit War.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoMagnitude, NoArea, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0A9B1E:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=ORE_OnDeathYeetTriggerScript|
|`VirtualMachineAdapter.Scripts[0].Name`|ORE_OnDeathYeetTriggerScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=AmmoToRemove|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|10B0A7:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|AmmoToRemove|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=WeaponToRemove|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|058F60:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|WeaponToRemove|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-93993459a2b3"></a>

## VKR_Con_OblivionBinding_Effect_WasPerkOblivionBindingFFContact

- Identidade estável Housecarl: `0D799D:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Conditions[1]`|GetDead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, NoHitEvent, NoDuration, NoArea, HideInUI, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|088E9F:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Keywords[1]`|3CD7A4:Vokrii - Minimalistic Perks of Skyrim.esp|
