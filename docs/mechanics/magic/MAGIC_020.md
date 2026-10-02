# Cadeias mágicas referenciadas — parte 020

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-ab27b2deb81a"></a>

## crFrostDamageConcAimed

- Identidade estável Housecarl: `10FDD3:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFrost|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|1.7|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAE:Skyrim.esm|

<a id="r-5351e3f97b05"></a>

## BloodglassPlagueConstantEffect

- Identidade estável Housecarl: `113977:Better Vampire NPCs.esp`.
- Tipo: `MagicEffect`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Recover, Detrimental, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=BVNPCBloodglassBloodPlagueScript|
|`VirtualMachineAdapter.Scripts[0].Name`|BVNPCBloodglassBloodPlagueScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=corpseExplosion|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|10EA3B:Better Vampire NPCs.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|corpseExplosion|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=pGhostDeathFXShader|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0FE68C:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|pGhostDeathFXShader|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=pDefaultAshPileGhost|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|113979:Better Vampire NPCs.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|pDefaultAshPileGhost|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=pDisintegrationMainImmunityList|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|0F6534:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|pDisintegrationMainImmunityList|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-16c322ec605d"></a>

## MAG_AbPoisonSilence

- Identidade estável Housecarl: `116FCC:Apothecary.esp`.
- Tipo: `MagicEffect`; winner: `Apothecary.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Magicka|
|`Flags`|Hostile, Recover, Detrimental, DispelWithKeywords, NoArea|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|078098:Skyrim.esm|

<a id="r-6cf6fe82a083"></a>

## COTV_WeaknessSunlightBaseEffect

- Identidade estável Housecarl: `126B1C:Curse of the Vampire.esp`.
- Tipo: `MagicEffect`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Detrimental, DispelWithKeywords, NoDuration, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|5|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=COTV_VampireSunlightScript|
|`VirtualMachineAdapter.Scripts[0].Name`|COTV_VampireSunlightScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=COTV_WeaknessToSunlightMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|31B3C1:Curse of the Vampire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|COTV_WeaknessToSunlightMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-37c189baad0f"></a>

## SSOVampireAttackSpeedEffect

- Identidade estável Housecarl: `1358D2:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `MagicEffect`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|WeaponSpeedMult|
|`Flags`|Recover, NoHitEvent, NoDuration, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-223d4b16457c"></a>

## SSOVampireDrainingAttack

- Identidade estável Housecarl: `144BE1:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `MagicEffect`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|

<a id="r-9cf233ecc1c3"></a>

## OREO_crInvisibillityRangedDummy

- Identidade estável Housecarl: `156368:Bandit War.esp`.
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
|`Flags`|Recover, DispelWithKeywords, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01EA6F:Skyrim.esm|

<a id="r-752bce2c475d"></a>

## COTV_VampiricDrainEffect

- Identidade estável Housecarl: `15DA69:Curse of the Vampire.esp`.
- Tipo: `MagicEffect`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

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
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=TargetVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0ABEFB:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|TargetVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=CasterVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0ABEFC:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|CasterVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=TrapImod|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0ABF17:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|TrapImod|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-14ad274b9469"></a>

## MAG_PilgrimAllMakerBeastSummonEffect

- Identidade estável Housecarl: `17236A:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=3956F3:Pilgrim.esp|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|3956F3:Pilgrim.esp|
|`Archetype.Association`|3956F3:Pilgrim.esp|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, HideInUI, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0.0001|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|024823:Skyrim.esm|
|`Keywords[1]`|0A9B1F:Skyrim.esm|

<a id="r-36bf6429a5af"></a>

## MAG_PilgrimAllMakerBeastEffectSummon

- Identidade estável Housecarl: `17236B:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MAG_PrideofHirstaang_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|MAG_PrideofHirstaang_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=MAG_PrideofHirstaang_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`3956F1:Pilgrim.esp`](../magic/MAGIC_053.md#r-8e732b63da09)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|MAG_PrideofHirstaang_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-3607ca00a53f"></a>

## SSOGhostChillingAttack

- Identidade estável Housecarl: `17C6F6:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `MagicEffect`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|ResistFrost|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAE:Skyrim.esm|

<a id="r-71c320a19e72"></a>

## MAG_AshFormFFAimedArea75

- Identidade estável Housecarl: `1901E4:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

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
|`TargetType`|Aimed|
|`BaseCost`|115|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01EA70:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[0].Name`|magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=IntroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|01E2A1:Dragonborn.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|IntroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=MagicDispelSpellOnHitScript|
|`VirtualMachineAdapter.Scripts[1].Name`|MagicDispelSpellOnHitScript|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=Spell03|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|[`4B065B:MysticismMagic.esp`](../magic/MAGIC_054.md#r-fc3b5deb4df6)|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|Spell03|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[1]`|[ScriptObjectProperty] Name=Spell01|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Object`|[`017731:Dragonborn.esm`](../magic/MAGIC_038.md#r-82d00e2fde91)|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Name`|Spell01|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[2]`|[ScriptObjectProperty] Name=Spell02|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Object`|[`1901E5:MysticismMagic.esp`](../magic/MAGIC_046.md#r-cebf12685543)|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Name`|Spell02|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-49cd285d5bcd"></a>

## COTV_VampireMistFormCooldownEffect

- Identidade estável Housecarl: `19F778:Curse of the Vampire.esp`.
- Tipo: `MagicEffect`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`19F778:Curse of the Vampire.esp`](../magic/MAGIC_020.md#r-49cd285d5bcd)<br>Parameter1.Link=[`19F778:Curse of the Vampire.esp`](../magic/MAGIC_020.md#r-49cd285d5bcd)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=COTV_NightPowerMessageScript|
|`VirtualMachineAdapter.Scripts[0].Name`|COTV_NightPowerMessageScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=NightPowerMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|301EAE:Curse of the Vampire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|NightPowerMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-1f3b524e9ad0"></a>

## MAG_EnchFortifyPowerAttacksConstantSelf

- Identidade estável Housecarl: `19F7B8:Thaumaturgy.esp`.
- Tipo: `MagicEffect`; winner: `Thaumaturgy.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|TwoHandedSkillAdvance|
|`Flags`|Recover, NoDuration, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|10|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|19F7B6:Thaumaturgy.esp|

<a id="r-f8eb9c0085f1"></a>

## MAG_EnchFortifySneakAttacksConstantSelf

- Identidade estável Housecarl: `19F7B9:Thaumaturgy.esp`.
- Tipo: `MagicEffect`; winner: `Thaumaturgy.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|SneakingSkillAdvance|
|`Flags`|Recover, NoDuration, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|10|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|19F7B7:Thaumaturgy.esp|

<a id="r-7bc71443df12"></a>

## MAG_PilgrimTallPapaEffectRitual02

- Identidade estável Housecarl: `1A4DAB:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=0FDC48:Pilgrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`0FDC48:Pilgrim.esp`](../magic/MAGIC_045.md#r-eb15b5ceabda)|
|`Archetype.Association`|[`0FDC48:Pilgrim.esp`](../magic/MAGIC_045.md#r-eb15b5ceabda)|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-ffc3e37d2624"></a>

## VKR_Con_OblivionStone_Effect_Ab_1

- Identidade estável Housecarl: `1A5123:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=1A5121:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`1A5121:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_046.md#r-0359e7d6fa3b)|
|`Archetype.Association`|[`1A5121:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_046.md#r-0359e7d6fa3b)|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoDuration, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-8a3595c3022f"></a>

## VKR_Res_Inspire_Effect_CloakProc

- Identidade estável Housecarl: `1A5128:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThan 1|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|NoHitEvent, NoArea, FXPersist, HideInUI, NoRecast, PowerAffectsMagnitude|
|`MagicSkill`|Restoration|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|1|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|01CEB0:Skyrim.esm|
|`Keywords[1]`|24776A:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-7731f6845983"></a>

## VKR_Res_Inspire_Effect_Ab_1

- Identidade estável Housecarl: `1A512F:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=1A512D:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`1A512D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_046.md#r-0c3d773f44ee)|
|`Archetype.Association`|[`1A512D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_046.md#r-0c3d773f44ee)|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoDuration, NoArea, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-7611ed0affda"></a>

## SSOGhostChillingAttackSlow

- Identidade estável Housecarl: `1AA001:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `MagicEffect`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|SpeedMult|
|`Flags`|Hostile, Recover, Detrimental, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistFrost|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0B729E:Skyrim.esm|

<a id="r-f765ab2d3979"></a>

## VKR_Enc_StaffRecharge_Effect_Ab_LeftCharge

- Identidade estável Housecarl: `1BC7A1:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|LeftItemCharge|
|`Flags`|NoHitEvent, NoDuration, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-54e206da2bcd"></a>

## VKR_Enc_StaffRecharge_Effect_Ab_RightCharge

- Identidade estável Housecarl: `1BC7A2:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|RightItemCharge|
|`Flags`|NoHitEvent, NoDuration, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-eb21e66838cf"></a>

## SSOMovementSpeedAbilityEffect

- Identidade estável Housecarl: `1C350E:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `MagicEffect`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|SpeedMult|
|`Flags`|Recover, NoHitEvent, NoDuration, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=SSO_SpeedWeightShift|
|`VirtualMachineAdapter.Scripts[0].Name`|SSO_SpeedWeightShift|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 0 item(s)]|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-bff9a9a72640"></a>

## COTV_SanguineRuneEffect

- Identidade estável Housecarl: `1D728C:Curse of the Vampire.esp`.
- Tipo: `MagicEffect`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, FXPersist, NoRecast, PowerAffectsDuration, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|50|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|109D79:Skyrim.esm|
|`Keywords[1]`|101BDE:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[0].Name`|magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=TargetVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0ABEFB:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|TargetVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=CasterVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0ABEFC:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|CasterVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=TrapImod|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0ABF17:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|TrapImod|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-1d681781eda1"></a>

## COTV_BloodToPowerDamageHealthEffect

- Identidade estável Housecarl: `1E148F:Curse of the Vampire.esp`.
- Tipo: `MagicEffect`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThan 1|0|ActorValue=Magicka<br>Parameter1=Magicka|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Detrimental, FXPersist, PowerAffectsMagnitude|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Self|
|`BaseCost`|1|
