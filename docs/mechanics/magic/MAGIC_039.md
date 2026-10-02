# Cadeias mágicas referenciadas — parte 039

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-a4d44ca943bf"></a>

## DLC2PerkMagickaRecovery2NPC

- Identidade estável Housecarl: `017741:Dragonborn.esm`.
- Tipo: `Spell`; winner: `Dragonborn.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0A6A3B:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0A6A3B:Skyrim.esm`](../magic/MAGIC_015.md#r-536972f1c4aa)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-90099141469b"></a>

## MAG_AshRune

- Identidade estável Housecarl: `0177AF:Dragonborn.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0177AE:Dragonborn.esm|
|`Effects[0].BaseEffect`|[`0177AE:Dragonborn.esm`](../magic/MAGIC_008.md#r-e96075b9df18)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, AreaEffectIgnoresLOS|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|429|
|`ChargeTime`|1|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44B9:Skyrim.esm`](../perks/PERKS_047.md#r-9f8812f31465)|
|`CastDuration`|0|
|`Range`|20|

<a id="r-84efac507889"></a>

## VoiceMarkedforDeath1

- Identidade estável Housecarl: `01861F:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=10319C:Skyrim.esm|
|`Effects[0].BaseEffect`|[`10319C:Skyrim.esm`](../magic/MAGIC_018.md#r-94fc67806412)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=10319D:Skyrim.esm|
|`Effects[1].BaseEffect`|[`10319D:Skyrim.esm`](../magic/MAGIC_018.md#r-e672e6aac0f6)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-5aa303a40cae"></a>

## VoiceMarkedforDeath2

- Identidade estável Housecarl: `018627:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=10319C:Skyrim.esm|
|`Effects[0].BaseEffect`|[`10319C:Skyrim.esm`](../magic/MAGIC_018.md#r-94fc67806412)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|2|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=10319D:Skyrim.esm|
|`Effects[1].BaseEffect`|[`10319D:Skyrim.esm`](../magic/MAGIC_018.md#r-e672e6aac0f6)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-3ee3a58025eb"></a>

## VoiceMarkedforDeath3

- Identidade estável Housecarl: `01862B:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=10319C:Skyrim.esm|
|`Effects[0].BaseEffect`|[`10319C:Skyrim.esm`](../magic/MAGIC_018.md#r-94fc67806412)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|3|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=10319D:Skyrim.esm|
|`Effects[1].BaseEffect`|[`10319D:Skyrim.esm`](../magic/MAGIC_018.md#r-e672e6aac0f6)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|75|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-bd81cc185209"></a>

## VKR_Alt_SubjugationField_Spell_Ab

- Identidade estável Housecarl: `01B5A5:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetCombatState|record|Subject; ref=(null link); index=-1|NotEqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=321435:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`321435:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_025.md#r-d12a5c40823e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|2424832|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-09f31b3a8e7a"></a>

## _SSPShadowform

- Identidade estável Housecarl: `01CAAB:ShadowSpellPackage.esp`.
- Tipo: `Spell`; winner: `ShadowSpellPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=01CAAA:ShadowSpellPackage.esp|
|`Effects[0].BaseEffect`|[`01CAAA:ShadowSpellPackage.esp`](../magic/MAGIC_009.md#r-a9f6f1bd14cf)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|300|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect, NoDualCastModification|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|LesserPower|
|`HalfCostPerk`|[`0C44B8:Skyrim.esm`](../perks/PERKS_046.md#r-1cf1b8b5f298)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-0e7ca6987f02"></a>

## VKR_Alt_AlterSelfResistances_Spell_Ab_FortifyResistDisease

- Identidade estável Housecarl: `01D0E3:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=01CB69:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`01CB69:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_009.md#r-817ab3e1b8c3)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|2424832|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-0db0129792d7"></a>

## VKR_Alt_AlterSelfResistances_Spell_Ab_FortifyResistFire

- Identidade estável Housecarl: `01D0E5:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=01CB65:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`01CB65:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_009.md#r-0a03617f7ff0)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|2424832|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-494da82216ce"></a>

## VKR_Alt_AlterSelfResistances_Spell_Ab_FortifyResistFrost

- Identidade estável Housecarl: `01D0E7:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=01CB66:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`01CB66:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_009.md#r-899c5a8c2721)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|2424832|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-adbf29b70f1c"></a>

## VKR_Alt_AlterSelfResistances_Spell_Ab_FortifyResistShock

- Identidade estável Housecarl: `01D0E9:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=01CB68:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`01CB68:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_009.md#r-9091b42857e1)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|2424832|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-4073e4363704"></a>

## VKR_Alt_AlterSelfResistances_Spell_Ab_FortifyResistPoison

- Identidade estável Housecarl: `01D0EB:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=01CB67:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`01CB67:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_009.md#r-39ea6aa02e16)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|2424832|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-c2957799aba5"></a>

## VKR_Alt_AlterSelfResistances_Spell_Ab

- Identidade estável Housecarl: `01D65F:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=01D65E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`01D65E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_009.md#r-945740449ae7)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|2424832|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-0e3ea2b8808c"></a>

## VKR_Ill_MindThrall_Spell_ProcOnTarget_Command

- Identidade estável Housecarl: `01E147:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=01E145:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`01E145:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_009.md#r-3ebfecb04159)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|3473408|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-9621002ae9b3"></a>

## MAG_AltarCultistHealth

- Identidade estável Housecarl: `01EE71:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=01EE70:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`01EE70:Pilgrim.esp`](../magic/MAGIC_009.md#r-81c56d547101)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=023F7D:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`023F7D:Pilgrim.esp`](../magic/MAGIC_010.md#r-cc43c55a955d)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-75a0d9a91615"></a>

## VKR_Ill_SpiritOfWar_Spell_ActorAb

- Identidade estável Housecarl: `01F71F:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=01F71E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`01F71E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_009.md#r-d275b424ec6e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|999|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-d39c35576194"></a>

## VKR_Autoperk_TonalHarmony_Spell_Ab

- Identidade estável Housecarl: `020772:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=020771:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`020771:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_009.md#r-058408bff6fc)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|3473408|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-083e46df2613"></a>

## _SSPMindControlInvisibility

- Identidade estável Housecarl: `022104:ShadowSpellPackage.esp`.
- Tipo: `Spell`; winner: `ShadowSpellPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=022108:ShadowSpellPackage.esp|
|`Effects[0].BaseEffect`|[`022108:ShadowSpellPackage.esp`](../magic/MAGIC_009.md#r-c0685fba1344)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`HalfCostPerk`|[`0C44C6:Skyrim.esm`](../perks/PERKS_053.md#r-c25c45386c2e)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-0d642b69e517"></a>

## VKR_Spe_SpeakWithAnimals_Spell_ProcOnTarget_Command

- Identidade estável Housecarl: `02387C:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=2750D3:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`2750D3:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-196efce927a7)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|3473408|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-84caad6e49fe"></a>

## VoiceDismayingShout1

- Identidade estável Housecarl: `02395B:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=023959:Skyrim.esm|
|`Effects[0].BaseEffect`|[`023959:Skyrim.esm`](../magic/MAGIC_010.md#r-43f560fb1b8f)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|7|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=07B6BA:Skyrim.esm|
|`Effects[1].BaseEffect`|[`07B6BA:Skyrim.esm`](../magic/MAGIC_014.md#r-8bff2bf7247b)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|68|
|`ChargeTime`|1|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-36dc6ed4dad7"></a>

## VoiceDismayingShout2

- Identidade estável Housecarl: `02395E:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=02395C:Skyrim.esm|
|`Effects[0].BaseEffect`|[`02395C:Skyrim.esm`](../magic/MAGIC_010.md#r-734120848e69)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|15|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=07B6BB:Skyrim.esm|
|`Effects[1].BaseEffect`|[`07B6BB:Skyrim.esm`](../magic/MAGIC_014.md#r-2de0cc890449)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|68|
|`ChargeTime`|1|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-9e5ff0f08952"></a>

## VoiceDismayingShout3

- Identidade estável Housecarl: `023967:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=02395D:Skyrim.esm|
|`Effects[0].BaseEffect`|[`02395D:Skyrim.esm`](../magic/MAGIC_010.md#r-c67960ee40a8)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|24|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=07B6BC:Skyrim.esm|
|`Effects[1].BaseEffect`|[`07B6BC:Skyrim.esm`](../magic/MAGIC_014.md#r-80d6a78c0fd0)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|68|
|`ChargeTime`|1|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-984a46c588c3"></a>

## MAG_AltarPilgrimHealth

- Identidade estável Housecarl: `023F72:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=023F7F:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`023F7F:Pilgrim.esp`](../magic/MAGIC_010.md#r-ac1e8d36d51e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=023F80:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`023F80:Pilgrim.esp`](../magic/MAGIC_010.md#r-96e9fce1630f)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-62dcfa0b0808"></a>

## MAG_AltarPilgrimMagicka

- Identidade estável Housecarl: `023F75:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=023F81:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`023F81:Pilgrim.esp`](../magic/MAGIC_010.md#r-752d16565f54)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=023F83:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`023F83:Pilgrim.esp`](../magic/MAGIC_010.md#r-c115698ad272)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-39cb052310db"></a>

## MAG_AltarPilgrimStamina

- Identidade estável Housecarl: `023F77:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=023F82:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`023F82:Pilgrim.esp`](../magic/MAGIC_010.md#r-1f0e2936fb5c)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=023F84:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`023F84:Pilgrim.esp`](../magic/MAGIC_010.md#r-7c11f3a32d49)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|
