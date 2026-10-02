# Cadeias mágicas referenciadas — parte 009

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-a7c3f3ae0a3c"></a>

## VKR_Con_OblivionBinding_Effect_BanishDaedra

- Identidade estável Housecarl: `018FB5:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=013797:Skyrim.esm<br>Parameter1.Link=013797:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Conditions[2]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D799C:Skyrim.esm`](../perks/PERKS_049.md#r-3cedbc8585b1)<br>Parameter1.Link=[`0D799C:Skyrim.esm`](../perks/PERKS_049.md#r-3cedbc8585b1)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Banish|
|`Archetype.ActorValue`|Confidence|
|`Flags`|Hostile, NoDuration, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicBanishScript|
|`VirtualMachineAdapter.Scripts[0].Name`|magicBanishScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=ImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|06F79B:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|ImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=ThingToPlace|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|06F794:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|ThingToPlace|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptIntProperty] Name=SecondsBeforeDelete|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|4|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|SecondsBeforeDelete|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-75de071aface"></a>

## DLC1PCVampireAbsorbHealthFFAimed

- Identidade estável Housecarl: `019321:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|101BDE:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1DrainBloodPointScript|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1DrainBloodPointScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 10 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DLC1VampireTotalPerksEarned|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|017E90:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DLC1VampireTotalPerksEarned|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=DLC1VampirePerkPoints|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|006938:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|DLC1VampirePerkPoints|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=DLC1VampirePerkEarned|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|01571C:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|DLC1VampirePerkEarned|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=DLC1BloodPointsMsg|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|00A26D:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|DLC1BloodPointsMsg|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=GhostAbilityNew|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|[`0D2056:Skyrim.esm`](../magic/MAGIC_044.md#r-dcbc4697d1b6)|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|GhostAbilityNew|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=DLC1VampireMaxPerks|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|017E8E:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|DLC1VampireMaxPerks|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[6]`|[ScriptObjectProperty] Name=ReanimateSecondaryFFAimed|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Object`|[`0F52AB:Skyrim.esm`](../magic/MAGIC_018.md#r-18af3b727e0b)|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Name`|ReanimateSecondaryFFAimed|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[7]`|[ScriptObjectProperty] Name=ProhibitedCreatures|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Object`|013ECD:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Name`|ProhibitedCreatures|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[8]`|[ScriptObjectProperty] Name=DLC1VampireBloodPoints|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Object`|00693B:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Name`|DLC1VampireBloodPoints|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[9]`|[ScriptObjectProperty] Name=DLC1VampireNextPerk|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Object`|00693A:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Name`|DLC1VampireNextPerk|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=DLC1MagicVampDrainFXRangeScript|
|`VirtualMachineAdapter.Scripts[1].Name`|DLC1MagicVampDrainFXRangeScript|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 0 item(s)]|
|`VirtualMachineAdapter.Scripts[2]`|[ScriptEntry] Name=magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[2].Name`|magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[2].Flags`|Local|
|`VirtualMachineAdapter.Scripts[2].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[2].Properties[0]`|[ScriptObjectProperty] Name=TrapImod|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Object`|0ABF17:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Name`|TrapImod|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[2].Properties[1]`|[ScriptObjectProperty] Name=CasterVFX|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Object`|0ABEFC:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Name`|CasterVFX|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[2].Properties[2]`|[ScriptObjectProperty] Name=TargetVFX|
|`VirtualMachineAdapter.Scripts[2].Properties[2].Object`|014B8B:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[2].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[2].Properties[2].Name`|TargetVFX|
|`VirtualMachineAdapter.Scripts[2].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-df3a6f54bb12"></a>

## DLC1PCVampireAbsorbMagickaFFAimed

- Identidade estável Housecarl: `019322:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Magicka|
|`Flags`|Hostile, Detrimental, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-d2c76aaca93c"></a>

## DLC1PCVampireAbsorbStaminaFFAimed

- Identidade estável Housecarl: `019323:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Hostile, Detrimental, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-3d9dd5abf2eb"></a>

## DLC1PCVampireDamageHealthFFAimed

- Identidade estável Housecarl: `019325:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|3|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|101BDE:Skyrim.esm|

<a id="r-9ebeee6815bd"></a>

## MAG_PilgrimSheorEffectHealRate

- Identidade estável Housecarl: `019D66:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|HealRateMult|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-e37c357be61d"></a>

## DLC1VampireSlowTimeEffect

- Identidade estável Housecarl: `01A30D:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`01571A:Dawnguard.esm`](../magic/MAGIC_008.md#r-037da5efb3b5)<br>Parameter1.Link=[`01571A:Dawnguard.esm`](../magic/MAGIC_008.md#r-037da5efb3b5)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`01A321:Dawnguard.esm`](../magic/MAGIC_009.md#r-80d303c49d81)<br>Parameter1.Link=[`01A321:Dawnguard.esm`](../magic/MAGIC_009.md#r-80d303c49d81)|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`01A30D:Dawnguard.esm`](../magic/MAGIC_009.md#r-e37c357be61d)<br>Parameter1.Link=[`01A30D:Dawnguard.esm`](../magic/MAGIC_009.md#r-e37c357be61d)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|SlowTime|
|`Archetype.ActorValue`|None|
|`Flags`|NoArea, NoRecast|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|500|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicImodScript|
|`VirtualMachineAdapter.Scripts[0].Name`|magicImodScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=StaticFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|10C761:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|StaticFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=fStaticDelay|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|0|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|fStaticDelay|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=OutroFX|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|01A30E:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|OutroFX|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=IntroFX|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|01A30E:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|IntroFX|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[1].Name`|magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=IntroSoundFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|010EC4:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|IntroSoundFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[1]`|[ScriptObjectProperty] Name=OutroSoundFX|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Object`|010EC5:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Name`|OutroSoundFX|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[2]`|[ScriptEntry] Name=DLC1ReflexesRechargingScript|
|`VirtualMachineAdapter.Scripts[2].Name`|DLC1ReflexesRechargingScript|
|`VirtualMachineAdapter.Scripts[2].Flags`|Local|
|`VirtualMachineAdapter.Scripts[2].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[2].Properties[0]`|[ScriptObjectProperty] Name=DLC1ReflexesWaitMessage|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Object`|014CF3:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Name`|DLC1ReflexesWaitMessage|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-80d303c49d81"></a>

## DLC1MistformEffect

- Identidade estável Housecarl: `01A321:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`01A30D:Dawnguard.esm`](../magic/MAGIC_009.md#r-e37c357be61d)<br>Parameter1.Link=[`01A30D:Dawnguard.esm`](../magic/MAGIC_009.md#r-e37c357be61d)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`01A321:Dawnguard.esm`](../magic/MAGIC_009.md#r-80d303c49d81)<br>Parameter1.Link=[`01A321:Dawnguard.esm`](../magic/MAGIC_009.md#r-80d303c49d81)|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`01571A:Dawnguard.esm`](../magic/MAGIC_008.md#r-037da5efb3b5)<br>Parameter1.Link=[`01571A:Dawnguard.esm`](../magic/MAGIC_008.md#r-037da5efb3b5)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Etherealize|
|`Archetype.ActorValue`|None|
|`Flags`|NoMagnitude, NoArea, FXPersist, NoRecast|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 6 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1MagicMistformFXScript|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1MagicMistformFXScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DLC1VampireMistform|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`0038BA:Dawnguard.esm`](../magic/MAGIC_037.md#r-7f2a77556181)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DLC1VampireMistform|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=DLC1VampireLevitateStateGlobal|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|015FC8:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|DLC1VampireLevitateStateGlobal|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=DLC1MistformWaitMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|014CB6:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|DLC1MistformWaitMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=magiceffectshaderapply|
|`VirtualMachineAdapter.Scripts[1].Name`|magiceffectshaderapply|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=EffectShaderFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|01AA30:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|EffectShaderFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[1]`|[ScriptBoolProperty] Name=bRemove|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Data`|True|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Name`|bRemove|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[2]`|[ScriptEntry] Name=magiceffectshadersonendscript|
|`VirtualMachineAdapter.Scripts[2].Name`|magiceffectshadersonendscript|
|`VirtualMachineAdapter.Scripts[2].Flags`|Local|
|`VirtualMachineAdapter.Scripts[2].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[2].Properties[0]`|[ScriptObjectProperty] Name=EffectShaderFX01|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Object`|01AA2F:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Name`|EffectShaderFX01|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[3]`|[ScriptEntry] Name=magicimodbeginloopend|
|`VirtualMachineAdapter.Scripts[3].Name`|magicimodbeginloopend|
|`VirtualMachineAdapter.Scripts[3].Flags`|Local|
|`VirtualMachineAdapter.Scripts[3].Properties`|[list: 5 item(s)]|
|`VirtualMachineAdapter.Scripts[3].Properties[0]`|[ScriptObjectProperty] Name=LoopFX|
|`VirtualMachineAdapter.Scripts[3].Properties[0].Object`|01AA31:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[3].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[3].Properties[0].Name`|LoopFX|
|`VirtualMachineAdapter.Scripts[3].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[3].Properties[1]`|[ScriptBoolProperty] Name=bPlayerOnly|
|`VirtualMachineAdapter.Scripts[3].Properties[1].Data`|True|
|`VirtualMachineAdapter.Scripts[3].Properties[1].Name`|bPlayerOnly|
|`VirtualMachineAdapter.Scripts[3].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[3].Properties[2]`|[ScriptObjectProperty] Name=OutroFX|
|`VirtualMachineAdapter.Scripts[3].Properties[2].Object`|01AA36:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[3].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[3].Properties[2].Name`|OutroFX|
|`VirtualMachineAdapter.Scripts[3].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[3].Properties[3]`|[ScriptFloatProperty] Name=fDelay|
|`VirtualMachineAdapter.Scripts[3].Properties[3].Data`|1.1|
|`VirtualMachineAdapter.Scripts[3].Properties[3].Name`|fDelay|
|`VirtualMachineAdapter.Scripts[3].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[3].Properties[4]`|[ScriptObjectProperty] Name=IntroFX|
|`VirtualMachineAdapter.Scripts[3].Properties[4].Object`|01AA37:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[3].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[3].Properties[4].Name`|IntroFX|
|`VirtualMachineAdapter.Scripts[3].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[4]`|[ScriptEntry] Name=magicSetActorAlphaScript|
|`VirtualMachineAdapter.Scripts[4].Name`|magicSetActorAlphaScript|
|`VirtualMachineAdapter.Scripts[4].Flags`|Local|
|`VirtualMachineAdapter.Scripts[4].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[4].Properties[0]`|[ScriptBoolProperty] Name=FadeToAlpha|
|`VirtualMachineAdapter.Scripts[4].Properties[0].Data`|True|
|`VirtualMachineAdapter.Scripts[4].Properties[0].Name`|FadeToAlpha|
|`VirtualMachineAdapter.Scripts[4].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[4].Properties[1]`|[ScriptFloatProperty] Name=AlphaValue|
|`VirtualMachineAdapter.Scripts[4].Properties[1].Data`|0.25|
|`VirtualMachineAdapter.Scripts[4].Properties[1].Name`|AlphaValue|
|`VirtualMachineAdapter.Scripts[4].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[5]`|[ScriptEntry] Name=magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[5].Name`|magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[5].Flags`|Local|
|`VirtualMachineAdapter.Scripts[5].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[5].Properties[0]`|[ScriptObjectProperty] Name=OutroSoundFX|
|`VirtualMachineAdapter.Scripts[5].Properties[0].Object`|010E0A:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[5].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[5].Properties[0].Name`|OutroSoundFX|
|`VirtualMachineAdapter.Scripts[5].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[5].Properties[1]`|[ScriptObjectProperty] Name=IntroSoundFX|
|`VirtualMachineAdapter.Scripts[5].Properties[1].Object`|010E09:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[5].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[5].Properties[1].Name`|IntroSoundFX|
|`VirtualMachineAdapter.Scripts[5].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-a9f6f1bd14cf"></a>

## _SSPShadowformEffect

- Identidade estável Housecarl: `01CAAA:ShadowSpellPackage.esp`.
- Tipo: `MagicEffect`; winner: `ShadowSpellPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoMagnitude, NoArea, NoRecast, PowerAffectsMagnitude|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=_SSPShadowformScript|
|`VirtualMachineAdapter.Scripts[0].Name`|_SSPShadowformScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 6 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=cast_sound|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|01D57B:ShadowSpellPackage.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|cast_sound|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=cast_effect|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|01CAAE:ShadowSpellPackage.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|cast_effect|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=shadowform_perk|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`01CAAF:ShadowSpellPackage.esp`](../perks/PERKS_020.md#r-2009d8b40711)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|shadowform_perk|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=shader_effect|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|01D579:ShadowSpellPackage.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|shader_effect|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=shader_effect2|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|04C07C:ShadowSpellPackage.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|shader_effect2|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=shadowform_spell|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|[`01CAAB:ShadowSpellPackage.esp`](../magic/MAGIC_039.md#r-09f31b3a8e7a)|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|shadowform_spell|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-0a03617f7ff0"></a>

## VKR_Alt_AlterSelfResistances_Effect_FortifyResistFire

- Identidade estável Housecarl: `01CB65:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|ResistFire|
|`Flags`|Recover, NoHitEvent, NoDuration, FXPersist, PowerAffectsMagnitude, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-899c5a8c2721"></a>

## VKR_Alt_AlterSelfResistances_Effect_FortifyResistFrost

- Identidade estável Housecarl: `01CB66:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|ResistFrost|
|`Flags`|Recover, NoHitEvent, NoDuration, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-39ea6aa02e16"></a>

## VKR_Alt_AlterSelfResistances_Effect_FortifyResistPoison

- Identidade estável Housecarl: `01CB67:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|PoisonResist|
|`Flags`|Recover, NoHitEvent, NoDuration, PowerAffectsMagnitude, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-9091b42857e1"></a>

## VKR_Alt_AlterSelfResistances_Effect_FortifyResistShock

- Identidade estável Housecarl: `01CB68:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|ResistShock|
|`Flags`|Recover, NoHitEvent, NoDuration, PowerAffectsMagnitude, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-817ab3e1b8c3"></a>

## VKR_Alt_AlterSelfResistances_Effect_FortifyResistDisease

- Identidade estável Housecarl: `01CB69:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|ResistDisease|
|`Flags`|Recover, NoHitEvent, NoDuration, PowerAffectsMagnitude, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-b69257bdac0e"></a>

## RestoreHealthFFSelf

- Identidade estável Housecarl: `01CEA6:Skyrim.esm`.
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
|`Flags`|NoDuration, NoArea, FXPersist, PowerAffectsMagnitude|
|`MagicSkill`|Restoration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|1|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|01CEB0:Skyrim.esm|
|`Keywords[1]`|0A9B1E:Skyrim.esm|

<a id="r-945740449ae7"></a>

## VKR_Alt_AlterSelfResistances_Effect_Ab

- Identidade estável Housecarl: `01D65E:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoHitEvent, NoDuration, NoMagnitude, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_AlterSelfAt_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_AlterSelfAt_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VKR_AlterSelf_Message|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|01CB64:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_AlterSelf_Message|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectListProperty] Name=VKR_AlterSelf_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects`|[list: 5 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[0]`|[ScriptObjectProperty] Object=01D0E5:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[0].Object`|[`01D0E5:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_039.md#r-0db0129792d7)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[0].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[1]`|[ScriptObjectProperty] Object=01D0E7:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[1].Object`|[`01D0E7:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_039.md#r-494da82216ce)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[1].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[2]`|[ScriptObjectProperty] Object=01D0E9:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[2].Object`|[`01D0E9:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_039.md#r-adbf29b70f1c)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[2].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[3]`|[ScriptObjectProperty] Object=01D0EB:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[3].Object`|[`01D0EB:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_039.md#r-4073e4363704)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[3].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[4]`|[ScriptObjectProperty] Object=01D0E3:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[4].Object`|[`01D0E3:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_039.md#r-0e7ca6987f02)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[4].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_AlterSelf_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptIntProperty] Name=VKR_AddIterations|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|2|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_AddIterations|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-2290a2846d09"></a>

## MAG_AshRuneFFContact

- Identidade estável Housecarl: `01D74E:Dragonborn.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=028FDE:Dragonborn.esm<br>Parameter1.Link=028FDE:Dragonborn.esm|aliases=False; package=False|
|`Conditions[3]`|GetRestrained|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 4 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Paralysis|
|`Archetype.ActorValue`|Paralysis|
|`Flags`|Hostile, Recover, NoMagnitude, FXPersist, PowerAffectsDuration|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|125|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01EA70:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MagicDispelSpellOnHitScript|
|`VirtualMachineAdapter.Scripts[0].Name`|MagicDispelSpellOnHitScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 0 item(s)]|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-3ebfecb04159"></a>

## VKR_Ill_MindThrall_Effect_ProcCommand

- Identidade estável Housecarl: `01E145:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Detrimental, NoHitEvent, DispelWithKeywords, NoMagnitude, NoArea, FXPersist, HideInUI, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|078098:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_MakeFollowerProc_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_MakeFollowerProc_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VKR_Shared_Quest|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|265D9D:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_Shared_Quest|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=VKR_Impact|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|011CDE:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Impact|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptIntProperty] Name=VKR_FollowerID|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|2|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_FollowerID|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptBoolProperty] Name=VKR_KillPrevious|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Data`|False|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_KillPrevious|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-6080ddbb1006"></a>

## MAG_MYSTICISMPoisonDamageConcCorrosion

- Identidade estável Housecarl: `01EE08:Mysticism - Vokrii Compatibility Patch.esp`.
- Tipo: `MagicEffect`; winner: `Mysticism - Vokrii Compatibility Patch.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|ActorValue=PoisonResist<br>Parameter1=PoisonResist|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`01EE07:Mysticism - Vokrii Compatibility Patch.esp`](../perks/PERKS_013.md#r-cd4496e7887d)<br>Parameter1.Link=[`01EE07:Mysticism - Vokrii Compatibility Patch.esp`](../perks/PERKS_013.md#r-cd4496e7887d)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, FXPersist, HideInUI, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Restoration|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-81c56d547101"></a>

## MAG_AltarCultistHealthEffect01

- Identidade estável Housecarl: `01EE70:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=616105:Update.esm<br>Parameter1.Link=616105:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-d275b424ec6e"></a>

## VKR_Ill_SpiritOfWar_Effect_ActorAb

- Identidade estável Housecarl: `01F71E:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Rally|
|`Archetype.ActorValue`|Confidence|
|`Flags`|NoDuration, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_SpiritOfWar_Weaken_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_SpiritOfWar_Weaken_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptFloatProperty] Name=VKR_HPMult|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|-0.6|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_HPMult|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=magicSetActorAlphaScript|
|`VirtualMachineAdapter.Scripts[1].Name`|magicSetActorAlphaScript|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptBoolProperty] Name=DontFadeBack|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Data`|True|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|DontFadeBack|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[1]`|[ScriptBoolProperty] Name=FadeToAlpha|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Data`|True|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Name`|FadeToAlpha|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[2]`|[ScriptFloatProperty] Name=AlphaValue|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Data`|0.33|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Name`|AlphaValue|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-058408bff6fc"></a>

## VKR_Spe_TonalHarmony_Effect_Ab

- Identidade estável Housecarl: `020771:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoHitEvent, NoDuration, NoMagnitude, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_BasicShoutAb_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_BasicShoutAb_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 15 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VKR_Spe_WordsAndDeeds_Global_XPMult|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|2750C9:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_Spe_WordsAndDeeds_Global_XPMult|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_WaitForTongue|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|0.25|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_WaitForTongue|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptFloatProperty] Name=VKR_SetCooldownToFull|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|2.5|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_SetCooldownToFull|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=WerewolfBeastRace|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|0CDD84:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|WerewolfBeastRace|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=VKR_Spe_Tongue_Global_CostMult|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|2750CC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|VKR_Spe_Tongue_Global_CostMult|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=MagicShout|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|046B99:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|MagicShout|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[6]`|[ScriptObjectProperty] Name=BookShelfBook12|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Object`|0D5B92:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Name`|BookShelfBook12|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[7]`|[ScriptObjectProperty] Name=VKR_Spe_100_Dovahzulaan_Perk|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Object`|[`023E03:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-0b493c5a2127)|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Name`|VKR_Spe_100_Dovahzulaan_Perk|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[8]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[9]`|[ScriptFloatProperty] Name=VKR_CDMultRestore|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Data`|1|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Name`|VKR_CDMultRestore|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[10]`|[ScriptFloatProperty] Name=VKR_ShoutResetChance|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Data`|0.25|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Name`|VKR_ShoutResetChance|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[11]`|[ScriptObjectProperty] Name=VKR_Spe_IsShout_FormList|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Object`|1AAEC4:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Name`|VKR_Spe_IsShout_FormList|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[12]`|[ScriptFloatProperty] Name=VKR_SetCooldownTo|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Data`|2.65|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Name`|VKR_SetCooldownTo|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[13]`|[ScriptObjectProperty] Name=BookShelfBook10|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Object`|0D5B90:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Name`|BookShelfBook10|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[14]`|[ScriptObjectProperty] Name=VKR_Spe_020_TonalHarmony_Perk|
|`VirtualMachineAdapter.Scripts[0].Properties[14].Object`|[`020774:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_058.md#r-2c265301ad0a)|
|`VirtualMachineAdapter.Scripts[0].Properties[14].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[14].Name`|VKR_Spe_020_TonalHarmony_Perk|
|`VirtualMachineAdapter.Scripts[0].Properties[14].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-42540f690c03"></a>

## VoiceFireBreathEffect1

- Identidade estável Housecarl: `020E16:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Dragonborn.esm`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, GoryVisuals, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistFire|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|01CEAD:Skyrim.esm|
|`Keywords[1]`|0E827C:Skyrim.esm|
|`Keywords[2]`|046B99:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC2VoiceFireBreathScript|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC2VoiceFireBreathScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DLC2BlackBookReward3|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|020E99:Dragonborn.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DLC2BlackBookReward3|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=Wyrm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|01F990:Dragonborn.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|Wyrm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-3954970152f1"></a>

## DLC2VoiceIceFormEffect

- Identidade estável Housecarl: `020E96:Dragonborn.esm`.
- Tipo: `MagicEffect`; winner: `Dragonborn.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Paralysis|
|`Archetype.ActorValue`|Paralysis|
|`Flags`|Hostile, Recover, NoMagnitude, FXPersist|
|`MagicSkill`|Destruction|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|1|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VoiceIceFormScript|
|`VirtualMachineAdapter.Scripts[0].Name`|VoiceIceFormScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 0 item(s)]|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=magiceffectshadersonendscript|
|`VirtualMachineAdapter.Scripts[1].Name`|magiceffectshadersonendscript|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=EffectShaderFX01|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|0EA519:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|EffectShaderFX01|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[1]`|[ScriptObjectProperty] Name=EffectShaderFX02|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Object`|0EA51A:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Name`|EffectShaderFX02|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[2]`|[ScriptEntry] Name=MagicDispelSpellOnHitScript|
|`VirtualMachineAdapter.Scripts[2].Name`|MagicDispelSpellOnHitScript|
|`VirtualMachineAdapter.Scripts[2].Flags`|Local|
|`VirtualMachineAdapter.Scripts[2].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[2].Properties[0]`|[ScriptObjectProperty] Name=Spell02|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Object`|[`09CAF1:Skyrim.esm`](../magic/MAGIC_043.md#r-bd86cf6a78e6)|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Name`|Spell02|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[2].Properties[1]`|[ScriptObjectProperty] Name=Spell03|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Object`|[`09CAF2:Skyrim.esm`](../magic/MAGIC_043.md#r-6fef9f6adb3a)|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Name`|Spell03|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[2].Properties[2]`|[ScriptObjectProperty] Name=Spell01|
|`VirtualMachineAdapter.Scripts[2].Properties[2].Object`|[`09CAF0:Skyrim.esm`](../magic/MAGIC_043.md#r-b090fd89c62a)|
|`VirtualMachineAdapter.Scripts[2].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[2].Properties[2].Name`|Spell01|
|`VirtualMachineAdapter.Scripts[2].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-c0685fba1344"></a>

## _SSPInvisibillityConstEffect

- Identidade estável Housecarl: `022108:ShadowSpellPackage.esp`.
- Tipo: `MagicEffect`; winner: `ShadowSpellPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Invisibility|
|`Archetype.ActorValue`|Invisibility|
|`Flags`|Recover, NoDuration, NoMagnitude, NoArea, FXPersist, PowerAffectsMagnitude|
|`MagicSkill`|Illusion|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|100|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01EA6F:Skyrim.esm|
