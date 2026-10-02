# Cadeias mágicas referenciadas — parte 045

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-6d8248a01b06"></a>

## MAG_WarriorDoomStoneSpell01

- Identidade estável Housecarl: `0E5F4C:Skyrim.esm`.
- Tipo: `Spell`; winner: `Mundus.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0E5F4B:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0E5F4B:Skyrim.esm`](../magic/MAGIC_017.md#r-89eba6cccf1e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|50|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-32872c40d6e2"></a>

## MAG_ApprenticeDoomStoneSpell01

- Identidade estável Housecarl: `0E5F4E:Skyrim.esm`.
- Tipo: `Spell`; winner: `Mundus.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00080A:Mundus.esp|
|`Effects[0].BaseEffect`|[`00080A:Mundus.esp`](../magic/MAGIC_002.md#r-6c06b88304eb)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|3|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-1e297605a40c"></a>

## MAG_AtronachDoomStoneSpell01

- Identidade estável Housecarl: `0E5F51:Skyrim.esm`.
- Tipo: `Spell`; winner: `Mundus.esp`; profundidade de override: 3.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000806:Mundus.esp|
|`Effects[0].BaseEffect`|[`000806:Mundus.esp`](../magic/MAGIC_002.md#r-0d1113bfe564)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|100|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=000801:Mundus.esp|
|`Effects[1].BaseEffect`|[`000801:Mundus.esp`](../magic/MAGIC_001.md#r-08dcdb809534)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|100|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=00080F:Mundus.esp|
|`Effects[2].BaseEffect`|[`00080F:Mundus.esp`](../magic/MAGIC_002.md#r-094d4830b5e3)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|20|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-b05460e28d10"></a>

## MAG_LadyDoomStoneSpell01

- Identidade estável Housecarl: `0E5F54:Skyrim.esm`.
- Tipo: `Spell`; winner: `Mundus.esp`; profundidade de override: 3.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[3].Conditions[0]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[4].Conditions[0]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Magicka<br>Parameter1=Magicka|aliases=False; package=False|
|`Effects[5].Conditions[0]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Stamina<br>Parameter1=Stamina|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 6 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000807:Mundus.esp|
|`Effects[0].BaseEffect`|[`000807:Mundus.esp`](../magic/MAGIC_002.md#r-1015751891cf)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=000810:Mundus.esp|
|`Effects[1].BaseEffect`|[`000810:Mundus.esp`](../magic/MAGIC_002.md#r-1d03f3b07db9)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=00080C:Mundus.esp|
|`Effects[2].BaseEffect`|[`00080C:Mundus.esp`](../magic/MAGIC_002.md#r-c558e879b161)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|25|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=000827:Mundus.esp|
|`Effects[3].BaseEffect`|[`000827:Mundus.esp`](../magic/MAGIC_003.md#r-c8e076a10b97)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|50|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|0|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[4]`|[Effect] BaseEffect=000800:Mundus.esp|
|`Effects[4].BaseEffect`|[`000800:Mundus.esp`](../magic/MAGIC_001.md#r-4c642d207707)|
|`Effects[4].Data`|[EffectData]|
|`Effects[4].Data.Magnitude`|50|
|`Effects[4].Data.Area`|0|
|`Effects[4].Data.Duration`|0|
|`Effects[4].Conditions`|[list: 1 item(s)]|
|`Effects[5]`|[Effect] BaseEffect=000804:Mundus.esp|
|`Effects[5].BaseEffect`|[`000804:Mundus.esp`](../magic/MAGIC_001.md#r-b3d053a8d1b6)|
|`Effects[5].Data`|[EffectData]|
|`Effects[5].Data.Magnitude`|50|
|`Effects[5].Data.Area`|0|
|`Effects[5].Data.Duration`|0|
|`Effects[5].Conditions`|[list: 1 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-0285ab7078c5"></a>

## MAG_LordDoomStoneSpell01

- Identidade estável Housecarl: `0E5F58:Skyrim.esm`.
- Tipo: `Spell`; winner: `Mundus.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000816:Mundus.esp|
|`Effects[0].BaseEffect`|[`000816:Mundus.esp`](../magic/MAGIC_002.md#r-6ae57b7abed8)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|100|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=000817:Mundus.esp|
|`Effects[1].BaseEffect`|[`000817:Mundus.esp`](../magic/MAGIC_002.md#r-7a63005c5791)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-df84a7ff1d25"></a>

## MAG_LoverDoomStoneSpell01

- Identidade estável Housecarl: `0E5F5A:Skyrim.esm`.
- Tipo: `Spell`; winner: `Mundus.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00081D:Mundus.esp|
|`Effects[0].BaseEffect`|[`00081D:Mundus.esp`](../magic/MAGIC_003.md#r-40395f5f2ce2)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-bd57b74a5db8"></a>

## MAG_SteedDoomStoneSpell01

- Identidade estável Housecarl: `0E5F5E:Skyrim.esm`.
- Tipo: `Spell`; winner: `Mundus.esp`; profundidade de override: 5.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000814:Mundus.esp|
|`Effects[0].BaseEffect`|[`000814:Mundus.esp`](../magic/MAGIC_002.md#r-d14e8226d761)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|100|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-763be1ea29d2"></a>

## MAG_SerpentDoomStoneSpell01

- Identidade estável Housecarl: `0E5F61:Skyrim.esm`.
- Tipo: `Spell`; winner: `Mundus.esp`; profundidade de override: 3.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA129:Update.esm<br>Parameter1.Link=ADA129:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA129:Update.esm<br>Parameter1.Link=ADA129:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000821:Mundus.esp|
|`Effects[0].BaseEffect`|[`000821:Mundus.esp`](../magic/MAGIC_003.md#r-9268e4b3b0c9)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|50|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=000825:Mundus.esp|
|`Effects[1].BaseEffect`|[`000825:Mundus.esp`](../magic/MAGIC_003.md#r-ec66affdc6b1)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=000820:Mundus.esp|
|`Effects[2].BaseEffect`|[`000820:Mundus.esp`](../magic/MAGIC_003.md#r-cab3f6a89e19)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|50|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-4ca67dc63e13"></a>

## MAG_TowerDoomStoneSpell01

- Identidade estável Housecarl: `0E7328:Skyrim.esm`.
- Tipo: `Spell`; winner: `Mundus.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000809:Mundus.esp|
|`Effects[0].BaseEffect`|[`000809:Mundus.esp`](../magic/MAGIC_002.md#r-680cb8a99322)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|100|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=00081F:Mundus.esp|
|`Effects[1].BaseEffect`|[`00081F:Mundus.esp`](../magic/MAGIC_003.md#r-00de35c9bb09)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|100|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-34f6566de1d4"></a>

## MAG_RitualDoomStoneSpell01

- Identidade estável Housecarl: `0E7329:Skyrim.esm`.
- Tipo: `Spell`; winner: `Mundus.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00081B:Mundus.esp|
|`Effects[0].BaseEffect`|[`00081B:Mundus.esp`](../magic/MAGIC_002.md#r-c508fda0cf71)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-b27f85726acc"></a>

## MAG_ShadowDoomStoneSpell01

- Identidade estável Housecarl: `0E732A:Skyrim.esm`.
- Tipo: `Spell`; winner: `Mundus.esp`; profundidade de override: 3.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA129:Update.esm<br>Parameter1.Link=ADA129:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA143:Update.esm<br>Parameter1.Link=ADA143:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[1]`|IsSneaking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA143:Update.esm<br>Parameter1.Link=ADA143:Update.esm|aliases=False; package=False|
|`Effects[3].Conditions[1]`|IsSneaking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 5 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00081C:Mundus.esp|
|`Effects[0].BaseEffect`|[`00081C:Mundus.esp`](../magic/MAGIC_002.md#r-69ac2d2af1a4)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=000826:Mundus.esp|
|`Effects[1].BaseEffect`|[`000826:Mundus.esp`](../magic/MAGIC_003.md#r-411c2612f089)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=000822:Mundus.esp|
|`Effects[2].BaseEffect`|[`000822:Mundus.esp`](../magic/MAGIC_003.md#r-a541d6903601)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|20|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=000824:Mundus.esp|
|`Effects[3].BaseEffect`|[`000824:Mundus.esp`](../magic/MAGIC_003.md#r-aa3e06362d9f)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|0.1|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|0|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Effects[4]`|[Effect] BaseEffect=000828:Mundus.esp|
|`Effects[4].BaseEffect`|[`000828:Mundus.esp`](../magic/MAGIC_003.md#r-35e22090e2d3)|
|`Effects[4].Data`|[EffectData]|
|`Effects[4].Data.Magnitude`|0|
|`Effects[4].Data.Area`|0|
|`Effects[4].Data.Duration`|0|
|`Effects[4].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-622a2b5d7178"></a>

## MAG_RingofNamiraCannibalismSpell01

- Identidade estável Housecarl: `0EE5C5:Skyrim.esm`.
- Tipo: `Spell`; winner: `Artificer.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=10F814:Skyrim.esm|
|`Effects[0].BaseEffect`|[`10F814:Skyrim.esm`](../magic/MAGIC_019.md#r-4f0de8500a39)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|50|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|600|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=10F812:Skyrim.esm|
|`Effects[1].BaseEffect`|[`10F812:Skyrim.esm`](../magic/MAGIC_019.md#r-ddb657428f21)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|600|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|334|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-8bc8ada723d0"></a>

## TGNightingaleShadow

- Identidade estável Housecarl: `0F1988:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsSneaking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0F1989:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0F1989:Skyrim.esm`](../magic/MAGIC_017.md#r-ef4655e30e91)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-c168b64fafac"></a>

## MarriageFoodAbility

- Identidade estável Housecarl: `0F5FF8:Skyrim.esm`.
- Tipo: `Spell`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=10E72F:Skyrim.esm|
|`Effects[0].BaseEffect`|[`10E72F:Skyrim.esm`](../magic/MAGIC_019.md#r-eba27281464c)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|600|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=10E730:Skyrim.esm|
|`Effects[1].BaseEffect`|[`10E730:Skyrim.esm`](../magic/MAGIC_019.md#r-1041aff084cc)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|600|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=10E731:Skyrim.esm|
|`Effects[2].BaseEffect`|[`10E731:Skyrim.esm`](../magic/MAGIC_019.md#r-c4a98d1f5e47)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|25|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|600|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|195|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-0f06ebfe94fe"></a>

## BladesDragonInfusionAbility

- Identidade estável Housecarl: `0F5FFA:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0F5FFB:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0F5FFB:Skyrim.esm`](../magic/MAGIC_018.md#r-e2522879328b)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-f678b70e9aba"></a>

## WerewolfChangeFX

- Identidade estável Housecarl: `0F8208:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0F8209:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0F8209:Skyrim.esm`](../magic/MAGIC_018.md#r-2ae3ddab429c)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|15|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-a2aa92a746a4"></a>

## MAG_CultistHircineCounterSpell

- Identidade estável Housecarl: `0F8B42:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0F8B41:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`0F8B41:Pilgrim.esp`](../magic/MAGIC_018.md#r-f840ab3c1fe8)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-eb15b5ceabda"></a>

## MAG_PilgrimTallPapaRitualCloakSpell

- Identidade estável Housecarl: `0FDC48:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0FDC47:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`0FDC47:Pilgrim.esp`](../magic/MAGIC_018.md#r-b3e64809896f)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-ef6ee473c378"></a>

## TorchBashFireSpell

- Identidade estável Housecarl: `0FEAAB:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=02ACD4:Skyrim.esm|
|`Effects[0].BaseEffect`|[`02ACD4:Skyrim.esm`](../magic/MAGIC_010.md#r-5ad9696a2728)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|3|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|1|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-cf55aa08d310"></a>

## VKR_Arc_EagleEye_Spell_Ab_1

- Identidade estável Housecarl: `103AD8:Skyrim.esm`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=103AD7:Skyrim.esm|
|`Effects[0].BaseEffect`|[`103AD7:Skyrim.esm`](../magic/MAGIC_018.md#r-984970b1a4f0)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-c5852909a88f"></a>

## VKR_Arc_EagleEye_Spell_Ab_2

- Identidade estável Housecarl: `103AD9:Skyrim.esm`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=103AD7:Skyrim.esm|
|`Effects[0].BaseEffect`|[`103AD7:Skyrim.esm`](../magic/MAGIC_018.md#r-984970b1a4f0)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-7aba40773b44"></a>

## BloodglassSpell

- Identidade estável Housecarl: `104BC1:Better Vampire NPCs.esp`.
- Tipo: `Spell`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=104BC0:Better Vampire NPCs.esp|
|`Effects[0].BaseEffect`|[`104BC0:Better Vampire NPCs.esp`](../magic/MAGIC_018.md#r-5af477927f51)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-58720760f5aa"></a>

## MAG_dunTargeOfTheBloodedSpell

- Identidade estável Housecarl: `10582B:Skyrim.esm`.
- Tipo: `Spell`; winner: `Artificer.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=2EDE91:Thaumaturgy.esp|
|`Effects[0].BaseEffect`|[`2EDE91:Thaumaturgy.esp`](../magic/MAGIC_024.md#r-78172c881a68)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|10|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|58|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-ef0c7949582e"></a>

## dunKatariahScimitarSpell

- Identidade estável Housecarl: `105A04:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=105A01:Skyrim.esm|
|`Effects[0].BaseEffect`|[`105A01:Skyrim.esm`](../magic/MAGIC_018.md#r-657e34541871)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|2|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-66ffbdf36527"></a>

## PerkTrickShot

- Identidade estável Housecarl: `105F1D:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=105F1B:Skyrim.esm|
|`Effects[0].BaseEffect`|[`105F1B:Skyrim.esm`](../magic/MAGIC_018.md#r-06f49a142339)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|99|
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
