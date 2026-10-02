# Cadeias mágicas referenciadas — parte 046

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-65d53102580c"></a>

## PerkSilence

- Identidade estável Housecarl: `105F25:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=09379B:Skyrim.esm|
|`Effects[0].BaseEffect`|[`09379B:Skyrim.esm`](../magic/MAGIC_015.md#r-bc6b746af1a2)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|6|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-1eb07be9aed8"></a>

## PlayerWerewolfFeedVictimSpell

- Identidade estável Housecarl: `106396:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=106395:Skyrim.esm|
|`Effects[0].BaseEffect`|[`106395:Skyrim.esm`](../magic/MAGIC_018.md#r-d597f0270492)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|100|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-1046968f3da4"></a>

## PerkAbQuickShot

- Identidade estável Housecarl: `106642:Skyrim.esm`.
- Tipo: `Spell`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 0|OR|Global=000826:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=000826:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThan 000802:ccQDRSSE001-SurvivalMode.esl|0|Global=00081A:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=00081A:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[0].Conditions[2]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 7|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=105F17:Skyrim.esm|
|`Effects[0].BaseEffect`|[`105F17:Skyrim.esm`](../magic/MAGIC_018.md#r-50e29382514e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1.3|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-71e87660b2cd"></a>

## BloodglassDrain

- Identidade estável Housecarl: `109AF8:Better Vampire NPCs.esp`.
- Tipo: `Spell`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=109AF9:Better Vampire NPCs.esp|
|`Effects[0].BaseEffect`|[`109AF9:Better Vampire NPCs.esp`](../magic/MAGIC_018.md#r-f22cc1a15560)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|2|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-d0163a25512c"></a>

## BloodglassSuccessfulHit

- Identidade estável Housecarl: `109AFB:Better Vampire NPCs.esp`.
- Tipo: `Spell`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=109AFC:Better Vampire NPCs.esp|
|`Effects[0].BaseEffect`|[`109AFC:Better Vampire NPCs.esp`](../magic/MAGIC_019.md#r-f529ce767bbe)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-09420a893431"></a>

## BloodglassFearSpell

- Identidade estável Housecarl: `109B03:Better Vampire NPCs.esp`.
- Tipo: `Spell`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=109B01:Better Vampire NPCs.esp|
|`Effects[0].BaseEffect`|[`109B01:Better Vampire NPCs.esp`](../magic/MAGIC_019.md#r-31b9550fd837)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|100|
|`Effects[0].Data.Area`|30|
|`Effects[0].Data.Duration`|5|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|AreaEffectIgnoresLOS, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|LesserPower|
|`CastDuration`|0|
|`Range`|0|

<a id="r-8317941b608f"></a>

## crFalmerPoisonedWeapon01

- Identidade estável Housecarl: `109D7B:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=109D7C:Skyrim.esm|
|`Effects[0].BaseEffect`|[`109D7C:Skyrim.esm`](../magic/MAGIC_019.md#r-c70e2d635a6d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|5|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Poison|
|`CastDuration`|0|
|`Range`|0|

<a id="r-166312b6767a"></a>

## crFalmerPoisonedWeapon02

- Identidade estável Housecarl: `109D7E:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=109D7C:Skyrim.esm|
|`Effects[0].BaseEffect`|[`109D7C:Skyrim.esm`](../magic/MAGIC_019.md#r-c70e2d635a6d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|5|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Poison|
|`CastDuration`|0|
|`Range`|0|

<a id="r-6005587d56dd"></a>

## crFalmerPoisonedWeapon03

- Identidade estável Housecarl: `109D7F:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=109D7C:Skyrim.esm|
|`Effects[0].BaseEffect`|[`109D7C:Skyrim.esm`](../magic/MAGIC_019.md#r-c70e2d635a6d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|5|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Poison|
|`CastDuration`|0|
|`Range`|0|

<a id="r-56967adab114"></a>

## crFalmerPoisonedWeapon04

- Identidade estável Housecarl: `109D80:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=109D7C:Skyrim.esm|
|`Effects[0].BaseEffect`|[`109D7C:Skyrim.esm`](../magic/MAGIC_019.md#r-c70e2d635a6d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|5|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Poison|
|`CastDuration`|0|
|`Range`|0|

<a id="r-855e2bcae27a"></a>

## crFalmerPoisonedWeapon05

- Identidade estável Housecarl: `109D81:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=109D7C:Skyrim.esm|
|`Effects[0].BaseEffect`|[`109D7C:Skyrim.esm`](../magic/MAGIC_019.md#r-c70e2d635a6d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|5|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Poison|
|`CastDuration`|0|
|`Range`|0|

<a id="r-02c56b0e0795"></a>

## MAG_AbPoisonParalysisSpell

- Identidade estável Housecarl: `10CDC5:Apothecary.esp`.
- Tipo: `Spell`; winner: `Apothecary.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=10CDC4:Apothecary.esp|
|`Effects[0].BaseEffect`|[`10CDC4:Apothecary.esp`](../magic/MAGIC_019.md#r-5c9a4f20ae95)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-a86cf07e421c"></a>

## BloodglassSuccessfulHit2

- Identidade estável Housecarl: `10EA37:Better Vampire NPCs.esp`.
- Tipo: `Spell`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=10EA38:Better Vampire NPCs.esp|
|`Effects[0].BaseEffect`|[`10EA38:Better Vampire NPCs.esp`](../magic/MAGIC_019.md#r-052c4e1659d2)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|6|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`HalfCostPerk`|[`0F2CA8:Skyrim.esm`](../perks/PERKS_049.md#r-90ecb10b697a)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-e62d73f2e481"></a>

## BloodglassSuccessfulHit3

- Identidade estável Housecarl: `10EA3C:Better Vampire NPCs.esp`.
- Tipo: `Spell`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=10EA3A:Better Vampire NPCs.esp|
|`Effects[0].BaseEffect`|[`10EA3A:Better Vampire NPCs.esp`](../magic/MAGIC_019.md#r-711ae703bc9c)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-8f94a7c9824b"></a>

## OREO_crBanditPoisonedWeapon06

- Identidade estável Housecarl: `10F155:Bandit War.esp`.
- Tipo: `Spell`; winner: `Bandit War.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0C2FFE:Bandit War.esp|
|`Effects[0].BaseEffect`|[`0C2FFE:Bandit War.esp`](../magic/MAGIC_016.md#r-109ecaa028b6)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|6|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|10|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Poison|
|`CastDuration`|0|
|`Range`|0|

<a id="r-316e65c9dd28"></a>

## MAG_RingofNamiraCannibalismSpell02

- Identidade estável Housecarl: `10F813:Skyrim.esm`.
- Tipo: `Spell`; winner: `Artificer.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00094A:Artificer.esp|
|`Effects[0].BaseEffect`|[`00094A:Artificer.esp`](../magic/MAGIC_006.md#r-ecb8088b5af3)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|5|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-9b5edeee9b0c"></a>

## BloodglassBloodPlagueConstantSpell

- Identidade estável Housecarl: `113978:Better Vampire NPCs.esp`.
- Tipo: `Spell`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=113977:Better Vampire NPCs.esp|
|`Effects[0].BaseEffect`|[`113977:Better Vampire NPCs.esp`](../magic/MAGIC_020.md#r-5351e3f97b05)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`HalfCostPerk`|[`0F2CA8:Skyrim.esm`](../perks/PERKS_049.md#r-90ecb10b697a)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-599fa34c03f3"></a>

## MAG_AbPoisonSilenceSpell

- Identidade estável Housecarl: `116FCE:Apothecary.esp`.
- Tipo: `Spell`; winner: `Apothecary.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=116FCC:Apothecary.esp|
|`Effects[0].BaseEffect`|[`116FCC:Apothecary.esp`](../magic/MAGIC_020.md#r-16c322ec605d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|100000|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-1c79180b690e"></a>

## COTV_WeaknessToSunlightSpellBase

- Identidade estável Housecarl: `126B1D:Curse of the Vampire.esp`.
- Tipo: `Spell`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsSwimming|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1]`|IsPleasant|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[2]`|GetInWorldspace|record|Subject; ref=(null link); index=-1|EqualTo 0|0|WorldspaceOrList=000969:Update.esm<br>Parameter1.Link=000969:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[3]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 19|0|Global=000038:Skyrim.esm<br>Parameter1.Link=000038:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[4]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 7|0|Global=000038:Skyrim.esm<br>Parameter1.Link=000038:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[5]`|IsInInterior|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[6]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00A26E:Dawnguard.esm<br>Parameter1.Link=00A26E:Dawnguard.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=126B1C:Curse of the Vampire.esp|
|`Effects[0].BaseEffect`|[`126B1C:Curse of the Vampire.esp`](../magic/MAGIC_020.md#r-6cf6fe82a083)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 7 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|29|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-92e18fc78c56"></a>

## SSOVyrthurDrainAttackSpell

- Identidade estável Housecarl: `144BE4:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `Spell`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=144BE1:Skyrim Revamped - Complete Enemy Overhaul.esp|
|`Effects[0].BaseEffect`|[`144BE1:Skyrim Revamped - Complete Enemy Overhaul.esp`](../magic/MAGIC_020.md#r-223d4b16457c)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|30|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-d8f11d844a5c"></a>

## SSOPerkAbQuickShot

- Identidade estável Housecarl: `149CEC:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `Spell`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 7|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=105F17:Skyrim.esm|
|`Effects[0].BaseEffect`|[`105F17:Skyrim.esm`](../magic/MAGIC_018.md#r-50e29382514e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|2|
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

<a id="r-cebf12685543"></a>

## MAG_AshCloud

- Identidade estável Housecarl: `1901E5:MysticismMagic.esp`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=1901E4:MysticismMagic.esp|
|`Effects[0].BaseEffect`|[`1901E4:MysticismMagic.esp`](../magic/MAGIC_020.md#r-71c320a19e72)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|15|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|387|
|`ChargeTime`|1|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44B9:Skyrim.esm`](../perks/PERKS_047.md#r-9f8812f31465)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-0359e7d6fa3b"></a>

## VKR_Con_OblivionStone_Spell_CloakProc_1

- Identidade estável Housecarl: `1A5121:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=37254E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`37254E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_029.md#r-f7e045b5f8a0)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|100|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Flags`|AreaEffectIgnoresLOS, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-cf7847fec24a"></a>

## VKR_Con_OblivionStone_Spell_Ab_1

- Identidade estável Housecarl: `1A5126:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`372556:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-9afe08908d6d)<br>Parameter1.Link=[`372556:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-9afe08908d6d)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=1A5123:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`1A5123:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_020.md#r-ffc3e37d2624)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|150|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-0c3d773f44ee"></a>

## VKR_Res_Inspire_Spell_CloakProc_1

- Identidade estável Housecarl: `1A512D:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Mysticism - Vokrii Compatibility Patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=10E984:Skyrim.esm<br>Parameter1.Link=10E984:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=1A5128:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`1A5128:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_020.md#r-8a3595c3022f)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 4 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=24776C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`24776C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-c18471140842)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|5|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|AreaEffectIgnoresLOS, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|5|
|`ChargeTime`|0|
|`Type`|Spell|
|`HalfCostPerk`|[`0F2CAA:Skyrim.esm`](../perks/PERKS_056.md#r-89be12cae610)|
|`CastDuration`|0|
|`Range`|0|
