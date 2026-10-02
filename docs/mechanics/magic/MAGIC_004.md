# Cadeias mágicas referenciadas — parte 004

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-2056e776f81a"></a>

## EmpoweredLeftHeavyEnemyBlockPurge

- Identidade estável Housecarl: `000830:Reforged Directional Combat.esp`.
- Tipo: `MagicEffect`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000802:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-34e631296bf2)<br>Parameter1.Link=[`000802:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-34e631296bf2)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`0008BC:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-290b52ac6791)<br>Parameter1.Link=[`0008BC:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-290b52ac6791)|aliases=False; package=False|
|`Conditions[2]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Recover, Detrimental, DispelWithKeywords|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|00080C:Reforged Directional Combat.esp|
|`Keywords[1]`|000837:Reforged Directional Combat.esp|

<a id="r-aade07bf03ef"></a>

## EmpoweredRightLightEnemyBlockPurge

- Identidade estável Housecarl: `000832:Reforged Directional Combat.esp`.
- Tipo: `MagicEffect`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000804:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-f4cde1b4c424)<br>Parameter1.Link=[`000804:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-f4cde1b4c424)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`0008BC:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-290b52ac6791)<br>Parameter1.Link=[`0008BC:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-290b52ac6791)|aliases=False; package=False|
|`Conditions[2]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Hostile, Recover, Detrimental, DispelWithKeywords|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|00080F:Reforged Directional Combat.esp|
|`Keywords[1]`|000837:Reforged Directional Combat.esp|

<a id="r-0042825dd612"></a>

## EmpoweredLeftLightEnemyBlockPurge

- Identidade estável Housecarl: `000833:Reforged Directional Combat.esp`.
- Tipo: `MagicEffect`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000805:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-458736806775)<br>Parameter1.Link=[`000805:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-458736806775)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`0008BC:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-290b52ac6791)<br>Parameter1.Link=[`0008BC:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-290b52ac6791)|aliases=False; package=False|
|`Conditions[2]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Hostile, Recover, Detrimental, DispelWithKeywords|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|000810:Reforged Directional Combat.esp|
|`Keywords[1]`|000837:Reforged Directional Combat.esp|

<a id="r-66cea9a2b1a3"></a>

## NPCEmpoweredLightEffects

- Identidade estável Housecarl: `00083A:Reforged Directional Combat.esp`.
- Tipo: `MagicEffect`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Hostile, Detrimental, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|000837:Reforged Directional Combat.esp|

<a id="r-2dbfead7ebbf"></a>

## NPCEmpoweredHeavyEffects

- Identidade estável Housecarl: `00083B:Reforged Directional Combat.esp`.
- Tipo: `MagicEffect`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|000837:Reforged Directional Combat.esp|

<a id="r-0ed982efce81"></a>

## Simple_VampireDamage_MagicEffect

- Identidade estável Housecarl: `000840:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `MagicEffect`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|3|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|101BDE:Skyrim.esm|

<a id="r-5a094f35a9aa"></a>

## Simple_HealthDrain

- Identidade estável Housecarl: `000846:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `MagicEffect`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|101BDE:Skyrim.esm|
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
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|014B8B:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|TargetVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=DLC1MagicVampDrainFXRangeScript|
|`VirtualMachineAdapter.Scripts[1].Name`|DLC1MagicVampDrainFXRangeScript|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 0 item(s)]|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-a7a64c7ef70e"></a>

## Simple_MagickaDrain

- Identidade estável Housecarl: `000848:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `MagicEffect`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Magicka|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-19bf9a7e6fad"></a>

## Simple_StaminaDrain

- Identidade estável Housecarl: `000849:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `MagicEffect`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-f06675ac309d"></a>

## MAG_EnchResistFrostConstantSelfNoUI

- Identidade estável Housecarl: `00084D:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|ResistFrost|
|`Flags`|Recover, NoDuration, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|074F57:Skyrim.esm|

<a id="r-c29cb8577d16"></a>

## MAG_EnchResistShockConstantSelfNoUI

- Identidade estável Housecarl: `00084E:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|ResistShock|
|`Flags`|Recover, NoDuration, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|074F59:Skyrim.esm|

<a id="r-bae16318bf45"></a>

## madDummySummonActive

- Identidade estável Housecarl: `000852:Shadow Clone on Self.esp`.
- Tipo: `MagicEffect`; winner: `Shadow Clone on Self.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, Recover, Detrimental, NoMagnitude, NoArea, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|

<a id="r-9997e982fa14"></a>

## ccBGSSSE037_AlchDamageHealthDuration

- Identidade estável Housecarl: `000852:ccBGSSSE037-Curios.esl`.
- Tipo: `MagicEffect`; winner: `Apothecary - Rare Curios Patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|PoisonResist|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|1.25|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|042509:Skyrim.esm|
|`Keywords[1]`|10F9DD:Skyrim.esm|
|`Keywords[2]`|0F3883:Apothecary.esp|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MagicImodOnPlayerHitScript|
|`VirtualMachineAdapter.Scripts[0].Name`|MagicImodOnPlayerHitScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=OnStartImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|10E3D2:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|OnStartImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=OnFinishImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|10E3D3:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|OnFinishImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-16d830bae537"></a>

## MAG_WWFortifyAttackSpeedLeft

- Identidade estável Housecarl: `000856:Manbeast.esp`.
- Tipo: `MagicEffect`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|LeftWeaponSpeedMultiply|
|`Flags`|Recover, NoDuration, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-d618692a8554"></a>

## MAG_WWFortifyHowls

- Identidade estável Housecarl: `00085A:Manbeast.esp`.
- Tipo: `MagicEffect`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|ShoutRecoveryMult|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-ebb05c952920"></a>

## MAG_PackLeaderEffect01

- Identidade estável Housecarl: `000862:Manbeast.esp`.
- Tipo: `MagicEffect`; winner: `Manbeast.esp`; profundidade de override: 1.

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
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MAG_HowlPerk_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|MAG_HowlPerk_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=MAG_Howl_Word|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0CF78F:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|MAG_Howl_Word|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=MAG_Werewolf_Howl|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0CF79B:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|MAG_Werewolf_Howl|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=MAG_WerewolfHowls|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|000843:Manbeast.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|MAG_WerewolfHowls|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-fe44b22b8bde"></a>

## MAG_PrimalInstinctEffect01

- Identidade estável Housecarl: `000863:Manbeast.esp`.
- Tipo: `MagicEffect`; winner: `Manbeast.esp`; profundidade de override: 1.

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
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MAG_HowlPerk_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|MAG_HowlPerk_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=MAG_Howl_Word|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0CE219:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|MAG_Howl_Word|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=MAG_Werewolf_Howl|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0CE218:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|MAG_Werewolf_Howl|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=MAG_WerewolfHowls|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|000843:Manbeast.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|MAG_WerewolfHowls|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-bd8a71a425ce"></a>

## MAG_EbonyWarriorSetEffect

- Identidade estável Housecarl: `000864:Artificer.esp`.
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
|`Flags`|NoDuration, NoMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|5|

<a id="r-fb1345191381"></a>

## MAG_SolitudeSetEffect

- Identidade estável Housecarl: `00086A:Artificer.esp`.
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
|`Flags`|NoDuration, NoMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|5|

<a id="r-df5d229e16a7"></a>

## ParryKnockdownSelfCooldown

- Identidade estável Housecarl: `00086F:For Honor Balance Patch.esp`.
- Tipo: `MagicEffect`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoArea, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-6c034f37f0fc"></a>

## MAG_EnchFortifyArcheryConstantSelfNoUI

- Identidade estável Housecarl: `000870:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|MarksmanPowerModifier|
|`Flags`|Recover, NoDuration, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|17.5|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|074F69:Skyrim.esm|

<a id="r-290138c1b672"></a>

## MAG_EnchFortifyOneHandedConstantSelfNoUI

- Identidade estável Housecarl: `000871:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|OneHandedPowerModifier|
|`Flags`|Recover, NoDuration, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|17.5|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|074F6B:Skyrim.esm|

<a id="r-84c887a95ad1"></a>

## MAG_EnchFortifyTwoHandedConstantSelfNoUI

- Identidade estável Housecarl: `000872:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|TwoHandedPowerModifier|
|`Flags`|Recover, NoDuration, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|17.5|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|074F73:Skyrim.esm|

<a id="r-c13bef505ae2"></a>

## MAG_RingofHircineEffect02

- Identidade estável Housecarl: `000873:Artificer.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Fame|
|`Flags`|Recover, NoDuration, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0DEA04:Thaumaturgy.esp|

<a id="r-303c1d920eb7"></a>

## ParryDamageCheck

- Identidade estável Housecarl: `000874:For Honor Balance Patch.esp`.
- Tipo: `MagicEffect`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`000810:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-32e14fc0e619)<br>Parameter1.Link=[`000810:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-32e14fc0e619)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`00080F:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-dc4e465fe24d)<br>Parameter1.Link=[`00080F:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-dc4e465fe24d)|aliases=False; package=False|
|`Conditions[2]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[3]`|GetIsReference|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Target=000014:Skyrim.esm<br>Parameter1.Link=000014:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 4 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoArea, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
