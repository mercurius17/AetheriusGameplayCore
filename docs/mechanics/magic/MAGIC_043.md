# Cadeias mágicas referenciadas — parte 043

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-6714228e21ae"></a>

## VKR_Autoperk_StaffExpertise_Spell_Ab

- Identidade estável Housecarl: `088EA3:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 8|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[0].Conditions[2]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 8|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=088EA0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`088EA0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_014.md#r-9a2246d96ae9)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Flags`|3473408|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-847a1e7308c6"></a>

## SSOcrFalmerPoisonedArrow

- Identidade estável Housecarl: `08958B:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `Spell`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=08958A:Skyrim Revamped - Complete Enemy Overhaul.esp|
|`Effects[0].BaseEffect`|[`08958A:Skyrim Revamped - Complete Enemy Overhaul.esp`](../magic/MAGIC_014.md#r-93dd8802aa93)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|8|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|6|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=08958D:Skyrim Revamped - Complete Enemy Overhaul.esp|
|`Effects[1].BaseEffect`|[`08958D:Skyrim Revamped - Complete Enemy Overhaul.esp`](../magic/MAGIC_014.md#r-25ebfe3ac89a)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|15|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|15|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=109D7C:Skyrim.esm|
|`Effects[2].BaseEffect`|[`109D7C:Skyrim.esm`](../magic/MAGIC_019.md#r-c70e2d635a6d)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|2|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|15|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Poison|
|`CastDuration`|0|
|`Range`|0|

<a id="r-e5b45704b436"></a>

## VoiceAuraWhisper1

- Identidade estável Housecarl: `08AFCC:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=10319E:Skyrim.esm|
|`Effects[0].BaseEffect`|[`10319E:Skyrim.esm`](../magic/MAGIC_018.md#r-3c7d1d2590e1)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|500|
|`Effects[0].Data.Duration`|10|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=08AFCB:Skyrim.esm|
|`Effects[1].BaseEffect`|[`08AFCB:Skyrim.esm`](../magic/MAGIC_014.md#r-6aa300ab1267)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|300|
|`Effects[1].Data.Duration`|10|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=10E4FD:Skyrim.esm|
|`Effects[2].BaseEffect`|[`10E4FD:Skyrim.esm`](../magic/MAGIC_019.md#r-16baf4962a35)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|10|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|AreaEffectIgnoresLOS|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-9099510d4b93"></a>

## VoiceAuraWhisper2

- Identidade estável Housecarl: `08AFCD:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=10319E:Skyrim.esm|
|`Effects[0].BaseEffect`|[`10319E:Skyrim.esm`](../magic/MAGIC_018.md#r-3c7d1d2590e1)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|500|
|`Effects[0].Data.Duration`|20|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=08AFCB:Skyrim.esm|
|`Effects[1].BaseEffect`|[`08AFCB:Skyrim.esm`](../magic/MAGIC_014.md#r-6aa300ab1267)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|300|
|`Effects[1].Data.Duration`|20|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=10E4FD:Skyrim.esm|
|`Effects[2].BaseEffect`|[`10E4FD:Skyrim.esm`](../magic/MAGIC_019.md#r-16baf4962a35)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|20|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|AreaEffectIgnoresLOS|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-ae00d46f2880"></a>

## VoiceAuraWhisper3

- Identidade estável Housecarl: `08AFCE:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=10319E:Skyrim.esm|
|`Effects[0].BaseEffect`|[`10319E:Skyrim.esm`](../magic/MAGIC_018.md#r-3c7d1d2590e1)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|500|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=08AFCB:Skyrim.esm|
|`Effects[1].BaseEffect`|[`08AFCB:Skyrim.esm`](../magic/MAGIC_014.md#r-6aa300ab1267)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|300|
|`Effects[1].Data.Duration`|30|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=10E4FD:Skyrim.esm|
|`Effects[2].BaseEffect`|[`10E4FD:Skyrim.esm`](../magic/MAGIC_019.md#r-16baf4962a35)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|30|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|AreaEffectIgnoresLOS|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-efcc46b285fe"></a>

## VoiceDisarm1

- Identidade estável Housecarl: `08BB27:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=08BB26:Skyrim.esm|
|`Effects[0].BaseEffect`|[`08BB26:Skyrim.esm`](../magic/MAGIC_014.md#r-16c031227319)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|12|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-4b2b5ec0479b"></a>

## VoiceDisarm2

- Identidade estável Housecarl: `08BB28:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0CD088:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0CD088:Skyrim.esm`](../magic/MAGIC_016.md#r-0544eca00a33)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-73422dfb7832"></a>

## VoiceDisarm3

- Identidade estável Housecarl: `08BB29:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0CD089:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0CD089:Skyrim.esm`](../magic/MAGIC_016.md#r-94b2e1c99eff)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|30|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-fa9ed586c07f"></a>

## VampireDrain01

- Identidade estável Housecarl: `08D5BF:Skyrim.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0F5B57:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0F5B57:Skyrim.esm`](../magic/MAGIC_018.md#r-4227bfb45a95)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|2|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=01419C:Dawnguard.esm|
|`Effects[1].BaseEffect`|[`01419C:Dawnguard.esm`](../magic/MAGIC_008.md#r-812a72c0ce32)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|2|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=01419A:Dawnguard.esm|
|`Effects[2].BaseEffect`|[`01419A:Dawnguard.esm`](../magic/MAGIC_008.md#r-ad5d7cf66894)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|2|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|6|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-6d194e9e8253"></a>

## VampireDrain02

- Identidade estável Housecarl: `08D5C0:Skyrim.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0F5B57:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0F5B57:Skyrim.esm`](../magic/MAGIC_018.md#r-4227bfb45a95)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|3|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=01419C:Dawnguard.esm|
|`Effects[1].BaseEffect`|[`01419C:Dawnguard.esm`](../magic/MAGIC_008.md#r-812a72c0ce32)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|3|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=01419A:Dawnguard.esm|
|`Effects[2].BaseEffect`|[`01419A:Dawnguard.esm`](../magic/MAGIC_008.md#r-ad5d7cf66894)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|3|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|10|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-4ca05c3de9c9"></a>

## VampireDrain03

- Identidade estável Housecarl: `08D5C1:Skyrim.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0F5B57:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0F5B57:Skyrim.esm`](../magic/MAGIC_018.md#r-4227bfb45a95)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|4|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=01419C:Dawnguard.esm|
|`Effects[1].BaseEffect`|[`01419C:Dawnguard.esm`](../magic/MAGIC_008.md#r-812a72c0ce32)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|4|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=01419A:Dawnguard.esm|
|`Effects[2].BaseEffect`|[`01419A:Dawnguard.esm`](../magic/MAGIC_008.md#r-ad5d7cf66894)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|4|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|13|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-098543f7342b"></a>

## VampireDrain04

- Identidade estável Housecarl: `08D5C2:Skyrim.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0F5B57:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0F5B57:Skyrim.esm`](../magic/MAGIC_018.md#r-4227bfb45a95)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=01419C:Dawnguard.esm|
|`Effects[1].BaseEffect`|[`01419C:Dawnguard.esm`](../magic/MAGIC_008.md#r-812a72c0ce32)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|5|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=01419A:Dawnguard.esm|
|`Effects[2].BaseEffect`|[`01419A:Dawnguard.esm`](../magic/MAGIC_008.md#r-ad5d7cf66894)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|5|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|17|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-16814713fa79"></a>

## MAG_HazardWallofFireSpell

- Identidade estável Housecarl: `08F3F1:Skyrim.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=08F3F2:Skyrim.esm|
|`Effects[0].BaseEffect`|[`08F3F2:Skyrim.esm`](../magic/MAGIC_015.md#r-d83179e1f38b)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=3B3121:MysticismMagic.esp|
|`Effects[1].BaseEffect`|[`3B3121:MysticismMagic.esp`](../magic/MAGIC_031.md#r-058a744bf675)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|99|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|10|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-eb1a0a567823"></a>

## MAG_HazardWallofFrostSpell

- Identidade estável Housecarl: `08F3F5:Skyrim.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0CFBC1:MysticismMagic.esp|
|`Effects[0].BaseEffect`|[`0CFBC1:MysticismMagic.esp`](../magic/MAGIC_016.md#r-89f3b549cf37)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0B72A0:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0B72A0:Skyrim.esm`](../magic/MAGIC_016.md#r-238d77d2b196)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=3857FC:MysticismMagic.esp|
|`Effects[2].BaseEffect`|[`3857FC:MysticismMagic.esp`](../magic/MAGIC_029.md#r-3f29fd69afd0)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|8|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-b5d9c826a8e1"></a>

## PerkMuffledMovement

- Identidade estável Housecarl: `09379D:Skyrim.esm`.
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
|`Effects[0].Data.Magnitude`|0.5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|6|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-fc7719587580"></a>

## PerkAtronach

- Identidade estável Housecarl: `0954D7:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0954D6:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0954D6:Skyrim.esm`](../magic/MAGIC_015.md#r-aa3b7d9dcaa0)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|30|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.2|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-8b4d8c9035d1"></a>

## PerkExtraPockets

- Identidade estável Housecarl: `096592:Skyrim.esm`.
- Tipo: `Spell`; winner: `ccQDRSSE001-SurvivalMode.esl`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=000826:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=000826:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[1].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=000826:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=000826:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=096591:Skyrim.esm|
|`Effects[0].BaseEffect`|[`096591:Skyrim.esm`](../magic/MAGIC_015.md#r-1f50af06e94f)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|100|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=096591:Skyrim.esm|
|`Effects[1].BaseEffect`|[`096591:Skyrim.esm`](../magic/MAGIC_015.md#r-1f50af06e94f)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|1161|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-b090fd89c62a"></a>

## VoiceIceForm1

- Identidade estável Housecarl: `09CAF0:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0A0366:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0A0366:Skyrim.esm`](../magic/MAGIC_015.md#r-b6fc22de84de)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|15|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0EA076:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0EA076:Skyrim.esm`](../magic/MAGIC_017.md#r-34429b17e89f)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|2|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|15|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|1|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-bd86cf6a78e6"></a>

## VoiceIceForm2

- Identidade estável Housecarl: `09CAF1:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0A0366:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0A0366:Skyrim.esm`](../magic/MAGIC_015.md#r-b6fc22de84de)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0EA076:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0EA076:Skyrim.esm`](../magic/MAGIC_017.md#r-34429b17e89f)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|2|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|30|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|3|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-6fef9f6adb3a"></a>

## VoiceIceForm3

- Identidade estável Housecarl: `09CAF2:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0A0366:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0A0366:Skyrim.esm`](../magic/MAGIC_015.md#r-b6fc22de84de)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0EA076:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0EA076:Skyrim.esm`](../magic/MAGIC_017.md#r-34429b17e89f)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|2|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|7|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-2f47a6b56377"></a>

## VoiceElementalFury2

- Identidade estável Housecarl: `09CD4E:Skyrim.esm`.
- Tipo: `Spell`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 0|OR|Global=000826:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=000826:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThan 000802:ccQDRSSE001-SurvivalMode.esl|0|Global=00081A:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=00081A:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[0].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[0].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|LessThan 7|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[0].Conditions[4]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[0].Conditions[5]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[1].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 0|OR|Global=000826:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=000826:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[1].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThan 000802:ccQDRSSE001-SurvivalMode.esl|0|Global=00081A:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=00081A:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[1].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[1].Conditions[3]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[2].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 0|OR|Global=000826:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=000826:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[2].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThan 000802:ccQDRSSE001-SurvivalMode.esl|0|Global=00081A:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=00081A:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[2].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[2].Conditions[3]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[3].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095E:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-17a064d9642a)<br>Parameter1.Link=[`00095E:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-17a064d9642a)|aliases=False; package=False|
|`Effects[3].Conditions[1]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|LessThan 7|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[3].Conditions[2]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[3].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[4].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095E:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-17a064d9642a)<br>Parameter1.Link=[`00095E:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-17a064d9642a)|aliases=False; package=False|
|`Effects[4].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[4].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[5].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095E:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-17a064d9642a)<br>Parameter1.Link=[`00095E:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-17a064d9642a)|aliases=False; package=False|
|`Effects[5].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[5].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[6].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095D:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-e30e236d0c9e)<br>Parameter1.Link=[`00095D:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-e30e236d0c9e)|aliases=False; package=False|
|`Effects[6].Conditions[1]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|LessThan 7|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[6].Conditions[2]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[6].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[7].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095D:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-e30e236d0c9e)<br>Parameter1.Link=[`00095D:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-e30e236d0c9e)|aliases=False; package=False|
|`Effects[7].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[7].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[8].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095D:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-e30e236d0c9e)<br>Parameter1.Link=[`00095D:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-e30e236d0c9e)|aliases=False; package=False|
|`Effects[8].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[8].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[9].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095C:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-1a6a0ed41452)<br>Parameter1.Link=[`00095C:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-1a6a0ed41452)|aliases=False; package=False|
|`Effects[9].Conditions[1]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|LessThan 7|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[9].Conditions[2]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[9].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[10].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095C:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-1a6a0ed41452)<br>Parameter1.Link=[`00095C:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-1a6a0ed41452)|aliases=False; package=False|
|`Effects[10].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[10].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[11].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095C:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-1a6a0ed41452)<br>Parameter1.Link=[`00095C:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-1a6a0ed41452)|aliases=False; package=False|
|`Effects[11].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[11].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[12].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095B:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-05dfb1f13930)<br>Parameter1.Link=[`00095B:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-05dfb1f13930)|aliases=False; package=False|
|`Effects[12].Conditions[1]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|LessThan 7|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[12].Conditions[2]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[12].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[13].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095B:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-05dfb1f13930)<br>Parameter1.Link=[`00095B:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-05dfb1f13930)|aliases=False; package=False|
|`Effects[13].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[13].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[14].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095B:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-05dfb1f13930)<br>Parameter1.Link=[`00095B:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-05dfb1f13930)|aliases=False; package=False|
|`Effects[14].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[14].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 15 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[0].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1.5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|15|
|`Effects[0].Conditions`|[list: 6 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[1].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0.6|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|15|
|`Effects[1].Conditions`|[list: 4 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[2].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0.67|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|15|
|`Effects[2].Conditions`|[list: 4 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[3].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|0.45|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|15|
|`Effects[3].Conditions`|[list: 4 item(s)]|
|`Effects[4]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[4].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[4].Data`|[EffectData]|
|`Effects[4].Data.Magnitude`|0.09|
|`Effects[4].Data.Area`|0|
|`Effects[4].Data.Duration`|15|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[5]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[5].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[5].Data`|[EffectData]|
|`Effects[5].Data.Magnitude`|0.15|
|`Effects[5].Data.Area`|0|
|`Effects[5].Data.Duration`|15|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[6]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[6].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[6].Data`|[EffectData]|
|`Effects[6].Data.Magnitude`|0.4|
|`Effects[6].Data.Area`|0|
|`Effects[6].Data.Duration`|15|
|`Effects[6].Conditions`|[list: 4 item(s)]|
|`Effects[7]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[7].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[7].Data`|[EffectData]|
|`Effects[7].Data.Magnitude`|0.08|
|`Effects[7].Data.Area`|0|
|`Effects[7].Data.Duration`|15|
|`Effects[7].Conditions`|[list: 3 item(s)]|
|`Effects[8]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[8].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[8].Data`|[EffectData]|
|`Effects[8].Data.Magnitude`|0.14|
|`Effects[8].Data.Area`|0|
|`Effects[8].Data.Duration`|15|
|`Effects[8].Conditions`|[list: 3 item(s)]|
|`Effects[9]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[9].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[9].Data`|[EffectData]|
|`Effects[9].Data.Magnitude`|0.35|
|`Effects[9].Data.Area`|0|
|`Effects[9].Data.Duration`|15|
|`Effects[9].Conditions`|[list: 4 item(s)]|
|`Effects[10]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[10].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[10].Data`|[EffectData]|
|`Effects[10].Data.Magnitude`|0.07|
|`Effects[10].Data.Area`|0|
|`Effects[10].Data.Duration`|15|
|`Effects[10].Conditions`|[list: 3 item(s)]|
|`Effects[11]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[11].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[11].Data`|[EffectData]|
|`Effects[11].Data.Magnitude`|0.12|
|`Effects[11].Data.Area`|0|
|`Effects[11].Data.Duration`|15|
|`Effects[11].Conditions`|[list: 3 item(s)]|
|`Effects[12]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[12].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[12].Data`|[EffectData]|
|`Effects[12].Data.Magnitude`|0.3|
|`Effects[12].Data.Area`|0|
|`Effects[12].Data.Duration`|15|
|`Effects[12].Conditions`|[list: 4 item(s)]|
|`Effects[13]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[13].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[13].Data`|[EffectData]|
|`Effects[13].Data.Magnitude`|0.06|
|`Effects[13].Data.Area`|0|
|`Effects[13].Data.Duration`|15|
|`Effects[13].Conditions`|[list: 3 item(s)]|
|`Effects[14]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[14].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[14].Data`|[EffectData]|
|`Effects[14].Data.Magnitude`|0.1|
|`Effects[14].Data.Area`|0|
|`Effects[14].Data.Duration`|15|
|`Effects[14].Conditions`|[list: 3 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-9c405c639da4"></a>

## VoiceElementalFury3

- Identidade estável Housecarl: `09CD4F:Skyrim.esm`.
- Tipo: `Spell`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 0|OR|Global=000826:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=000826:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThan 000802:ccQDRSSE001-SurvivalMode.esl|0|Global=00081A:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=00081A:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[0].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[0].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|LessThan 7|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[0].Conditions[4]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[0].Conditions[5]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[1].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 0|OR|Global=000826:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=000826:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[1].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThan 000802:ccQDRSSE001-SurvivalMode.esl|0|Global=00081A:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=00081A:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[1].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[1].Conditions[3]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[2].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 0|OR|Global=000826:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=000826:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[2].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThan 000802:ccQDRSSE001-SurvivalMode.esl|0|Global=00081A:ccQDRSSE001-SurvivalMode.esl<br>Parameter1.Link=00081A:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[2].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[2].Conditions[3]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[3].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095E:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-17a064d9642a)<br>Parameter1.Link=[`00095E:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-17a064d9642a)|aliases=False; package=False|
|`Effects[3].Conditions[1]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|LessThan 7|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[3].Conditions[2]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[3].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[4].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095E:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-17a064d9642a)<br>Parameter1.Link=[`00095E:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-17a064d9642a)|aliases=False; package=False|
|`Effects[4].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[4].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[5].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095E:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-17a064d9642a)<br>Parameter1.Link=[`00095E:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-17a064d9642a)|aliases=False; package=False|
|`Effects[5].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[5].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[6].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095D:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-e30e236d0c9e)<br>Parameter1.Link=[`00095D:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-e30e236d0c9e)|aliases=False; package=False|
|`Effects[6].Conditions[1]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|LessThan 7|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[6].Conditions[2]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[6].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[7].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095D:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-e30e236d0c9e)<br>Parameter1.Link=[`00095D:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-e30e236d0c9e)|aliases=False; package=False|
|`Effects[7].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[7].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[8].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095D:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-e30e236d0c9e)<br>Parameter1.Link=[`00095D:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-e30e236d0c9e)|aliases=False; package=False|
|`Effects[8].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[8].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[9].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095C:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-1a6a0ed41452)<br>Parameter1.Link=[`00095C:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-1a6a0ed41452)|aliases=False; package=False|
|`Effects[9].Conditions[1]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|LessThan 7|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[9].Conditions[2]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[9].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[10].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095C:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-1a6a0ed41452)<br>Parameter1.Link=[`00095C:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-1a6a0ed41452)|aliases=False; package=False|
|`Effects[10].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[10].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[11].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095C:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-1a6a0ed41452)<br>Parameter1.Link=[`00095C:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-1a6a0ed41452)|aliases=False; package=False|
|`Effects[11].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[11].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[12].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095B:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-05dfb1f13930)<br>Parameter1.Link=[`00095B:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-05dfb1f13930)|aliases=False; package=False|
|`Effects[12].Conditions[1]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|LessThan 7|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[12].Conditions[2]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[12].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|GreaterThan 0|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[13].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095B:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-05dfb1f13930)<br>Parameter1.Link=[`00095B:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-05dfb1f13930)|aliases=False; package=False|
|`Effects[13].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[13].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|
|`Effects[14].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`00095B:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-05dfb1f13930)<br>Parameter1.Link=[`00095B:ccQDRSSE001-SurvivalMode.esl`](../magic/MAGIC_006.md#r-05dfb1f13930)|aliases=False; package=False|
|`Effects[14].Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)<br>Parameter1.Link=[`106257:Skyrim.esm`](../perks/PERKS_043.md#r-29ee2123b118)|aliases=False; package=False|
|`Effects[14].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)<br>Parameter1.Link=[`10F934:Skyrim.esm`](../perks/PERKS_022.md#r-130a4edce102)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 15 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[0].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1.7|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|15|
|`Effects[0].Conditions`|[list: 6 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[1].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0.84|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|15|
|`Effects[1].Conditions`|[list: 4 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[2].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0.94|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|15|
|`Effects[2].Conditions`|[list: 4 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[3].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|0.63|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|15|
|`Effects[3].Conditions`|[list: 4 item(s)]|
|`Effects[4]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[4].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[4].Data`|[EffectData]|
|`Effects[4].Data.Magnitude`|0.12|
|`Effects[4].Data.Area`|0|
|`Effects[4].Data.Duration`|15|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[5]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[5].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[5].Data`|[EffectData]|
|`Effects[5].Data.Magnitude`|0.21|
|`Effects[5].Data.Area`|0|
|`Effects[5].Data.Duration`|15|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[6]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[6].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[6].Data`|[EffectData]|
|`Effects[6].Data.Magnitude`|0.56|
|`Effects[6].Data.Area`|0|
|`Effects[6].Data.Duration`|15|
|`Effects[6].Conditions`|[list: 4 item(s)]|
|`Effects[7]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[7].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[7].Data`|[EffectData]|
|`Effects[7].Data.Magnitude`|0.11|
|`Effects[7].Data.Area`|0|
|`Effects[7].Data.Duration`|15|
|`Effects[7].Conditions`|[list: 3 item(s)]|
|`Effects[8]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[8].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[8].Data`|[EffectData]|
|`Effects[8].Data.Magnitude`|0.19|
|`Effects[8].Data.Area`|0|
|`Effects[8].Data.Duration`|15|
|`Effects[8].Conditions`|[list: 3 item(s)]|
|`Effects[9]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[9].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[9].Data`|[EffectData]|
|`Effects[9].Data.Magnitude`|0.49|
|`Effects[9].Data.Area`|0|
|`Effects[9].Data.Duration`|15|
|`Effects[9].Conditions`|[list: 4 item(s)]|
|`Effects[10]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[10].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[10].Data`|[EffectData]|
|`Effects[10].Data.Magnitude`|0.1|
|`Effects[10].Data.Area`|0|
|`Effects[10].Data.Duration`|15|
|`Effects[10].Conditions`|[list: 3 item(s)]|
|`Effects[11]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[11].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[11].Data`|[EffectData]|
|`Effects[11].Data.Magnitude`|0.17|
|`Effects[11].Data.Area`|0|
|`Effects[11].Data.Duration`|15|
|`Effects[11].Conditions`|[list: 3 item(s)]|
|`Effects[12]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[12].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[12].Data`|[EffectData]|
|`Effects[12].Data.Magnitude`|0.42|
|`Effects[12].Data.Area`|0|
|`Effects[12].Data.Duration`|15|
|`Effects[12].Conditions`|[list: 4 item(s)]|
|`Effects[13]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[13].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[13].Data`|[EffectData]|
|`Effects[13].Data.Magnitude`|0.08|
|`Effects[13].Data.Area`|0|
|`Effects[13].Data.Duration`|15|
|`Effects[13].Conditions`|[list: 3 item(s)]|
|`Effects[14]`|[Effect] BaseEffect=02C56F:Skyrim.esm|
|`Effects[14].BaseEffect`|[`02C56F:Skyrim.esm`](../magic/MAGIC_011.md#r-af2e425f0f5a)|
|`Effects[14].Data`|[EffectData]|
|`Effects[14].Data.Magnitude`|0.14|
|`Effects[14].Data.Area`|0|
|`Effects[14].Data.Duration`|15|
|`Effects[14].Conditions`|[list: 3 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-496fd4bd1084"></a>

## VoiceAnimalAllegiance1

- Identidade estável Housecarl: `09E0CC:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=09E0C8:Skyrim.esm|
|`Effects[0].BaseEffect`|[`09E0C8:Skyrim.esm`](../magic/MAGIC_015.md#r-8ce1a742d722)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|75|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|AreaEffectIgnoresLOS|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F45:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-e577eb86b6b9"></a>

## VoiceAnimalAllegiance2

- Identidade estável Housecarl: `09E0CD:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=09E0CA:Skyrim.esm|
|`Effects[0].BaseEffect`|[`09E0CA:Skyrim.esm`](../magic/MAGIC_015.md#r-a83dee63ca6a)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|150|
|`Effects[0].Data.Duration`|45|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|AreaEffectIgnoresLOS|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F45:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-7261221cf37e"></a>

## VoiceAnimalAllegiance3

- Identidade estável Housecarl: `09E0CE:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=09E0CB:Skyrim.esm|
|`Effects[0].BaseEffect`|[`09E0CB:Skyrim.esm`](../magic/MAGIC_015.md#r-70ba701bf5aa)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|250|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|AreaEffectIgnoresLOS|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F45:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|
