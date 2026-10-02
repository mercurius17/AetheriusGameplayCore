# Cadeias mágicas referenciadas — parte 047

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-7b262b2fe43e"></a>

## VKR_Res_Inspire_Spell_Ab_1

- Identidade estável Housecarl: `1A5130:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`24776B:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_056.md#r-c120684fd9ee)<br>Parameter1.Link=[`24776B:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_056.md#r-c120684fd9ee)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=1A512F:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`1A512F:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_020.md#r-7731f6845983)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|15|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|2424832|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-82f0c63687d8"></a>

## SSOGhostChillingAttackSpell1

- Identidade estável Housecarl: `1AA002:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `Spell`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=17C6F6:Skyrim Revamped - Complete Enemy Overhaul.esp|
|`Effects[0].BaseEffect`|[`17C6F6:Skyrim Revamped - Complete Enemy Overhaul.esp`](../magic/MAGIC_020.md#r-3607ca00a53f)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|5|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=1AA001:Skyrim Revamped - Complete Enemy Overhaul.esp|
|`Effects[1].BaseEffect`|[`1AA001:Skyrim Revamped - Complete Enemy Overhaul.esp`](../magic/MAGIC_020.md#r-7611ed0affda)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|30|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|5|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-e60f1bc0387a"></a>

## VKR_Enc_StaffRecharge_Spell_Ab

- Identidade estável Housecarl: `1BC7A3:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 8|0|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[1].Conditions[0]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 8|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=1BC7A1:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`1BC7A1:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_020.md#r-f765ab2d3979)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=1BC7A2:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`1BC7A2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_020.md#r-54e206da2bcd)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|5|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Flags`|3473408|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-b7e4f9b5c9d9"></a>

## COTV_BloodToPower

- Identidade estável Housecarl: `1C2E83:Curse of the Vampire.esp`.
- Tipo: `Spell`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThan 1|0|ActorValue=Magicka<br>Parameter1=Magicka|aliases=False; package=False|
|`Effects[1].Conditions[0]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThan 1|0|ActorValue=Magicka<br>Parameter1=Magicka|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=1E148F:Curse of the Vampire.esp|
|`Effects[0].BaseEffect`|[`1E148F:Curse of the Vampire.esp`](../magic/MAGIC_020.md#r-1d681781eda1)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=1E1490:Curse of the Vampire.esp|
|`Effects[1].BaseEffect`|[`1E1490:Curse of the Vampire.esp`](../magic/MAGIC_021.md#r-033c5cca398f)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|Concentration|
|`TargetType`|Self|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|1|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-ed95604433f8"></a>

## SSOLightArmorBanditMovementSpeed

- Identidade estável Housecarl: `1C350F:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `Spell`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=1C350E:Skyrim Revamped - Complete Enemy Overhaul.esp|
|`Effects[0].BaseEffect`|[`1C350E:Skyrim Revamped - Complete Enemy Overhaul.esp`](../magic/MAGIC_020.md#r-eb21e66838cf)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|15|
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

<a id="r-a796fd2edcf7"></a>

## GRIM_SPELL_DES100_ThunderBlast

- Identidade estável Housecarl: `1F8C85:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=1F8C84:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`1F8C84:LostGrimoire.esp`](../magic/MAGIC_021.md#r-a992e1636ad2)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|100|
|`Effects[0].Data.Area`|100|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=1F8C86:LostGrimoire.esp|
|`Effects[1].BaseEffect`|[`1F8C86:LostGrimoire.esp`](../magic/MAGIC_021.md#r-6fad9cadc937)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|200|
|`Effects[1].Data.Area`|100|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|NoDualCastModification|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F45:Skyrim.esm|
|`BaseCost`|1410|
|`ChargeTime`|6|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44C2:Skyrim.esm`](../perks/PERKS_051.md#r-e9763c3626fb)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-27984168df83"></a>

## SSOForswornMovementSpeed

- Identidade estável Housecarl: `200126:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `Spell`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 6|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=1C350E:Skyrim Revamped - Complete Enemy Overhaul.esp|
|`Effects[0].BaseEffect`|[`1C350E:Skyrim Revamped - Complete Enemy Overhaul.esp`](../magic/MAGIC_020.md#r-eb21e66838cf)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|30|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-bae00c400f3c"></a>

## GRIM_SPELL_DES100_Flameheart

- Identidade estável Housecarl: `202EA8:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=202EA1:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`202EA1:LostGrimoire.esp`](../magic/MAGIC_021.md#r-efa20ad5d5e4)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|80|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAbsorbOrReflect, NoDualCastModification|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`EquipmentType`|013F45:Skyrim.esm|
|`BaseCost`|1037|
|`ChargeTime`|6|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44C2:Skyrim.esm`](../perks/PERKS_051.md#r-e9763c3626fb)|
|`CastDuration`|0|
|`Range`|24|

<a id="r-cca87323dadb"></a>

## MAG_PoisonCloak

- Identidade estável Housecarl: `209A73:MysticismMagic.esp`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=20496F:MysticismMagic.esp|
|`Effects[0].BaseEffect`|[`20496F:MysticismMagic.esp`](../magic/MAGIC_021.md#r-499ecd09644d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|8|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=D2C9E6:MysticismMagic.esp|
|`Effects[1].BaseEffect`|[`D2C9E6:MysticismMagic.esp`](../magic/MAGIC_034.md#r-cba41f614654)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0.01|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|282|
|`ChargeTime`|1|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44C8:Skyrim.esm`](../perks/PERKS_057.md#r-7576fdc84d0d)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-6b11df62e9b0"></a>

## GRIM_SPELL_DES00_Flare

- Identidade estável Housecarl: `2214DA:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=2214D9:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`2214D9:LostGrimoire.esp`](../magic/MAGIC_021.md#r-9c56a21c1be9)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|16|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0F392D:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0F392D:Skyrim.esm`](../magic/MAGIC_017.md#r-77d9b8a76f89)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|99|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|15|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=2214DC:LostGrimoire.esp|
|`Effects[2].BaseEffect`|[`2214DC:LostGrimoire.esp`](../magic/MAGIC_021.md#r-a1f7d2c40772)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|16|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|27|
|`ChargeTime`|0|
|`Type`|Spell|
|`HalfCostPerk`|[`0F2CA8:Skyrim.esm`](../perks/PERKS_049.md#r-90ecb10b697a)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-f5fc7c05fbd1"></a>

## GRIM_SPELL_DES00_Zap

- Identidade estável Housecarl: `2214F7:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=2214F5:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`2214F5:LostGrimoire.esp`](../magic/MAGIC_021.md#r-b1be952262cd)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|16|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=2214F6:LostGrimoire.esp|
|`Effects[1].BaseEffect`|[`2214F6:LostGrimoire.esp`](../magic/MAGIC_021.md#r-3643c5c72456)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|16|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=0F3F0D:Skyrim.esm|
|`Effects[2].BaseEffect`|[`0F3F0D:Skyrim.esm`](../magic/MAGIC_018.md#r-abb2beb1c9c4)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|200|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|31|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`HalfCostPerk`|[`0F2CA8:Skyrim.esm`](../perks/PERKS_049.md#r-90ecb10b697a)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-c2d00cf1afb0"></a>

## GRIM_SPELL_DES00_IceShiv

- Identidade estável Housecarl: `221502:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=221501:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`221501:LostGrimoire.esp`](../magic/MAGIC_021.md#r-f02ba8a85a48)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|16|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0F3932:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0F3932:Skyrim.esm`](../magic/MAGIC_017.md#r-f9fcf5c973f8)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|3|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=0B729F:Skyrim.esm|
|`Effects[2].BaseEffect`|[`0B729F:Skyrim.esm`](../magic/MAGIC_016.md#r-5aa3d975b854)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|50|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|3|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=221504:LostGrimoire.esp|
|`Effects[3].BaseEffect`|[`221504:LostGrimoire.esp`](../magic/MAGIC_021.md#r-dea1f287a96c)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|16|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|0|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|31|
|`ChargeTime`|0|
|`Type`|Spell|
|`HalfCostPerk`|[`0F2CA8:Skyrim.esm`](../perks/PERKS_049.md#r-90ecb10b697a)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-5bf297f1b27a"></a>

## GRIM_SPELL_DES50_Firebomb

- Identidade estável Housecarl: `22150E:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=22150C:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`22150C:LostGrimoire.esp`](../magic/MAGIC_021.md#r-3b45c81e3a7b)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|75|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|10|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|TargetActor|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|150|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44C0:Skyrim.esm`](../perks/PERKS_050.md#r-907ca88f27ab)|
|`CastDuration`|0|
|`Range`|4|

<a id="r-c3faee5346d7"></a>

## MAG_PerkCheckerSpell

- Identidade estável Housecarl: `223517:Thaumaturgy.esp`.
- Tipo: `Spell`; winner: `Thaumaturgy.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=223518:Thaumaturgy.esp|
|`Effects[0].BaseEffect`|[`223518:Thaumaturgy.esp`](../magic/MAGIC_021.md#r-d441d44c9064)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.2|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-d01f934ed8d9"></a>

## VKR_Bck_BlockOnHit_Spell_Ab

- Identidade estável Housecarl: `223FDB:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=223FDA:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`223FDA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_021.md#r-34b71ff36209)|
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
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-6bd704f79e20"></a>

## VKR_Bck_BlockOnHit_Spell_ProcOnTarget

- Identidade estável Housecarl: `223FDE:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=223FE0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`223FE0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-5c9944a0c82e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|15|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=223FDD:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`223FDD:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_021.md#r-5b7460382aba)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0.9|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|3|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|3473408|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-750855dd7cf0"></a>

## GRIM_SPELL_DES50_ColdSnap

- Identidade estável Housecarl: `23FB27:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 5 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=23FB26:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`23FB26:LostGrimoire.esp`](../magic/MAGIC_022.md#r-69b5cc6ddc65)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|60|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=23FB29:LostGrimoire.esp|
|`Effects[1].BaseEffect`|[`23FB29:LostGrimoire.esp`](../magic/MAGIC_022.md#r-1d52bf2a9754)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|60|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=23FB2A:LostGrimoire.esp|
|`Effects[2].BaseEffect`|[`23FB2A:LostGrimoire.esp`](../magic/MAGIC_022.md#r-07c7585250bd)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|4|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=2D7A9B:LostGrimoire.esp|
|`Effects[3].BaseEffect`|[`2D7A9B:LostGrimoire.esp`](../magic/MAGIC_024.md#r-6e004836a594)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|50|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|4|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Effects[4]`|[Effect] BaseEffect=23FB2B:LostGrimoire.esp|
|`Effects[4].BaseEffect`|[`23FB2B:LostGrimoire.esp`](../magic/MAGIC_022.md#r-a7f3df15027a)|
|`Effects[4].Data`|[EffectData]|
|`Effects[4].Data.Magnitude`|0|
|`Effects[4].Data.Area`|0|
|`Effects[4].Data.Duration`|4|
|`Effects[4].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|TargetActor|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|162|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44C0:Skyrim.esm`](../perks/PERKS_050.md#r-907ca88f27ab)|
|`CastDuration`|0|
|`Range`|4|

<a id="r-c85528fc05d0"></a>

## GRIM_SPELL_DES50_Electrocute

- Identidade estável Housecarl: `23FB33:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 5 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=23FB2E:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`23FB2E:LostGrimoire.esp`](../magic/MAGIC_022.md#r-40e50ddeeaaa)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|60|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=23FB30:LostGrimoire.esp|
|`Effects[1].BaseEffect`|[`23FB30:LostGrimoire.esp`](../magic/MAGIC_022.md#r-374d066c11ad)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|60|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=23FB31:LostGrimoire.esp|
|`Effects[2].BaseEffect`|[`23FB31:LostGrimoire.esp`](../magic/MAGIC_022.md#r-26695cf0af76)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|60|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=23FB32:LostGrimoire.esp|
|`Effects[3].BaseEffect`|[`23FB32:LostGrimoire.esp`](../magic/MAGIC_022.md#r-190ab3218289)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|1000|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|1|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Effects[4]`|[Effect] BaseEffect=2D7AA7:LostGrimoire.esp|
|`Effects[4].BaseEffect`|[`2D7AA7:LostGrimoire.esp`](../magic/MAGIC_024.md#r-c578bbe22a56)|
|`Effects[4].Data`|[EffectData]|
|`Effects[4].Data.Magnitude`|200|
|`Effects[4].Data.Area`|0|
|`Effects[4].Data.Duration`|1|
|`Effects[4].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|TargetActor|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|170|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44C0:Skyrim.esm`](../perks/PERKS_050.md#r-907ca88f27ab)|
|`CastDuration`|0|
|`Range`|4|

<a id="r-83b11d7034a4"></a>

## GRIM_SPELL_DES_FireBrand_waveHoriz

- Identidade estável Housecarl: `244C46:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=244C44:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`244C44:LostGrimoire.esp`](../magic/MAGIC_022.md#r-97ed7e99e6dc)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|30|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=22661F:LostGrimoire.esp|
|`Effects[1].BaseEffect`|[`22661F:LostGrimoire.esp`](../magic/MAGIC_022.md#r-9037fe6c41a3)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|99|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|15|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F42:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-fb9f91a17b1e"></a>

## GRIM_SPELL_DES_FireBrand_waveVert

- Identidade estável Housecarl: `244C48:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=244C45:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`244C45:LostGrimoire.esp`](../magic/MAGIC_022.md#r-5e4e6ab54f3c)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|30|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=249D5B:LostGrimoire.esp|
|`Effects[1].BaseEffect`|[`249D5B:LostGrimoire.esp`](../magic/MAGIC_022.md#r-a0ce83d55ba2)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|99|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|15|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F42:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-2f37d9c58693"></a>

## GRIM_SPELL_DES_IceBreaker_iceSpear

- Identidade estável Housecarl: `249D54:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=249D53:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`249D53:LostGrimoire.esp`](../magic/MAGIC_022.md#r-17554e6bad05)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|30|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=2D7A9B:LostGrimoire.esp|
|`Effects[1].BaseEffect`|[`2D7A9B:LostGrimoire.esp`](../magic/MAGIC_024.md#r-6e004836a594)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|3|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=2D7A9D:LostGrimoire.esp|
|`Effects[2].BaseEffect`|[`2D7A9D:LostGrimoire.esp`](../magic/MAGIC_024.md#r-044b40139774)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|3|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|TargetActor|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-55cb8cf5b6ce"></a>

## SSOFalmerInvisibility

- Identidade estável Housecarl: `24C052:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `Spell`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetLightLevel|record|Subject; ref=(null link); index=-1|LessThan 85|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=24C051:Skyrim Revamped - Complete Enemy Overhaul.esp|
|`Effects[0].BaseEffect`|[`24C051:Skyrim Revamped - Complete Enemy Overhaul.esp`](../magic/MAGIC_022.md#r-9cb5fb9bbddf)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|100|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-198a42c13ca3"></a>

## VKR_Res_Intervention_Spell_ProcOnSelf_Lockout

- Identidade estável Housecarl: `24C871:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=24C870:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`24C870:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-0fbd791b593c)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1800|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|AreaEffectIgnoresLOS, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-7e9d7b505bcc"></a>

## VKR_Res_Intervention_Spell_Ab

- Identidade estável Housecarl: `24C876:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`24C870:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-0fbd791b593c)<br>Parameter1.Link=[`24C870:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-0fbd791b593c)|aliases=False; package=False|
|`Effects[1].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`24C870:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-0fbd791b593c)<br>Parameter1.Link=[`24C870:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-0fbd791b593c)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=24C86F:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`24C86F:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-a200291681f7)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=24C875:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`24C875:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-4d45f8d89890)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Flags`|2424832|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-678093d23952"></a>

## VKR_Res_MagickaRecovery1_Spell_Ab

- Identidade estável Housecarl: `24C879:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Spell=[`24C87B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-4206d14d7aa8)<br>Parameter1.Link=[`24C87B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-4206d14d7aa8)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=24C878:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`24C878:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-97feefa87a3e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
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
