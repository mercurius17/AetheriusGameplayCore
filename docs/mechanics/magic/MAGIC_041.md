# Cadeias mágicas referenciadas — parte 041

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-0c134a6ee767"></a>

## MAG_FrostCloak

- Identidade estável Housecarl: `03AEA2:Skyrim.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|NotEqualTo 0|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetIsID|record|Subject; ref=(null link); index=-1|NotEqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|NotEqualTo 0|OR|—|aliases=False; package=False|
|`Effects[1].Conditions[1]`|GetIsID|record|Subject; ref=(null link); index=-1|NotEqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=03AEA0:Skyrim.esm|
|`Effects[0].BaseEffect`|[`03AEA0:Skyrim.esm`](../magic/MAGIC_011.md#r-c4e1a0b5e27e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|8|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=CDB98A:MysticismMagic.esp|
|`Effects[1].BaseEffect`|[`CDB98A:MysticismMagic.esp`](../magic/MAGIC_034.md#r-46bffe63b99d)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0.01|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|243|
|`ChargeTime`|1|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44C0:Skyrim.esm`](../perks/PERKS_050.md#r-907ca88f27ab)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-1ab1d07d5aae"></a>

## MAG_LightningCloak

- Identidade estável Housecarl: `03AEA3:Skyrim.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=03AEA1:Skyrim.esm|
|`Effects[0].BaseEffect`|[`03AEA1:Skyrim.esm`](../magic/MAGIC_012.md#r-28a2e79fdde2)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|8|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=CF9FAF:MysticismMagic.esp|
|`Effects[1].BaseEffect`|[`CF9FAF:MysticismMagic.esp`](../magic/MAGIC_034.md#r-d95e39f0105d)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0.01|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|274|
|`ChargeTime`|1|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44C0:Skyrim.esm`](../perks/PERKS_050.md#r-907ca88f27ab)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-a6ee95e34a56"></a>

## GRIM_AB_CON_FamiliarBoost_wolf

- Identidade estável Housecarl: `03E021:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`03E029:LostGrimoire.esp`](../magic/MAGIC_012.md#r-8d21eb58f08b)<br>Parameter1.Link=[`03E029:LostGrimoire.esp`](../magic/MAGIC_012.md#r-8d21eb58f08b)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=038F1E:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`038F1E:LostGrimoire.esp`](../magic/MAGIC_011.md#r-8226863ede69)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
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

<a id="r-88633cf93da6"></a>

## GRIM_AB_CON_FamiliarBoost_bear

- Identidade estável Housecarl: `03E023:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`03E027:LostGrimoire.esp`](../magic/MAGIC_012.md#r-99537fdf0514)<br>Parameter1.Link=[`03E027:LostGrimoire.esp`](../magic/MAGIC_012.md#r-99537fdf0514)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=038F1F:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`038F1F:LostGrimoire.esp`](../magic/MAGIC_011.md#r-b21b0f99f8e3)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
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

<a id="r-989ff78ed3dd"></a>

## GRIM_AB_CON_FamiliarBoost_troll

- Identidade estável Housecarl: `03E025:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`03E028:LostGrimoire.esp`](../magic/MAGIC_012.md#r-a3f540b1a787)<br>Parameter1.Link=[`03E028:LostGrimoire.esp`](../magic/MAGIC_012.md#r-a3f540b1a787)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=038F20:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`038F20:LostGrimoire.esp`](../magic/MAGIC_011.md#r-1bb9dd4bb806)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|30|
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

<a id="r-7c41d91a942c"></a>

## VKR_Enc_ChargeTap_Spell

- Identidade estável Housecarl: `03ECBB:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=03ECB7:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`03ECB7:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_012.md#r-2ae2e28f17bd)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=03ECB9:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`03ECB9:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_012.md#r-c95027953f15)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|LesserPower|
|`CastDuration`|0|
|`Range`|0|

<a id="r-f6ba170d1c48"></a>

## VoiceFireBreath1

- Identidade estável Housecarl: `03F9EB:Skyrim.esm`.
- Tipo: `Spell`; winner: `Dragonborn.esm`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=020E16:Skyrim.esm|
|`Effects[0].BaseEffect`|[`020E16:Skyrim.esm`](../magic/MAGIC_009.md#r-42540f690c03)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|50|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0A44C0:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0A44C0:Skyrim.esm`](../magic/MAGIC_015.md#r-98824fa35ea7)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0.05|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
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

<a id="r-46057e03fb62"></a>

## VoiceFireBreath2

- Identidade estável Housecarl: `03F9EC:Skyrim.esm`.
- Tipo: `Spell`; winner: `Dragonborn.esm`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0562EA:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0562EA:Skyrim.esm`](../magic/MAGIC_013.md#r-f8718baf088a)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|70|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0A44C0:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0A44C0:Skyrim.esm`](../magic/MAGIC_015.md#r-98824fa35ea7)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0.5|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
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

<a id="r-3d802c07cb5b"></a>

## VoiceFireBreath3

- Identidade estável Housecarl: `03F9ED:Skyrim.esm`.
- Tipo: `Spell`; winner: `Dragonborn.esm`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0562EB:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0562EB:Skyrim.esm`](../magic/MAGIC_013.md#r-31357a8dfc96)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|90|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0A44C0:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0A44C0:Skyrim.esm`](../magic/MAGIC_015.md#r-98824fa35ea7)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|1|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
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

<a id="r-8359ef257314"></a>

## VKR_Sne_CloakAndDagger_Spell_Ab

- Identidade estável Housecarl: `03FD14:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01EA6F:Skyrim.esm<br>Parameter1.Link=01EA6F:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=03FD0E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`03FD0E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_012.md#r-8bd931b98402)|
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

<a id="r-121170c1b95c"></a>

## VoiceSlowTime1

- Identidade estável Housecarl: `048AD0:Skyrim.esm`.
- Tipo: `Spell`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=048ACD:Skyrim.esm|
|`Effects[0].BaseEffect`|[`048ACD:Skyrim.esm`](../magic/MAGIC_012.md#r-1893343734a6)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.3|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|8|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|391|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-37dc2ecd0f6b"></a>

## VoiceSlowTime2

- Identidade estável Housecarl: `048AD1:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=048ACD:Skyrim.esm|
|`Effects[0].BaseEffect`|[`048ACD:Skyrim.esm`](../magic/MAGIC_012.md#r-1893343734a6)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.2|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|12|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|611|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-e53eea2c9948"></a>

## VoiceSlowTime3

- Identidade estável Housecarl: `048AD2:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=048ACD:Skyrim.esm|
|`Effects[0].BaseEffect`|[`048ACD:Skyrim.esm`](../magic/MAGIC_012.md#r-1893343734a6)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|16|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|838|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-e3a7cfc401fa"></a>

## VKR_Hea_HeavyArmorOnHitProc_Spell_ProcOnTarget

- Identidade estável Housecarl: `04DFD0:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=04DFCF:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`04DFCF:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_012.md#r-ff6ab70610df)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=2C103A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`2C103A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_024.md#r-6efcb408c9c2)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|5|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|3473408|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-fd059cee94bd"></a>

## VoiceCallHero2

- Identidade estável Housecarl: `051964:Skyrim.esm`.
- Tipo: `Spell`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=051965:Skyrim.esm|
|`Effects[0].BaseEffect`|[`051965:Skyrim.esm`](../magic/MAGIC_012.md#r-be70e6a510b1)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|14|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|100|

<a id="r-453e023eeb98"></a>

## VoiceCallHero1

- Identidade estável Housecarl: `051967:Skyrim.esm`.
- Tipo: `Spell`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=051963:Skyrim.esm|
|`Effects[0].BaseEffect`|[`051963:Skyrim.esm`](../magic/MAGIC_012.md#r-5a468038dd7e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|14|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|100|

<a id="r-c4aaa96170d7"></a>

## VoiceCallHero3

- Identidade estável Housecarl: `051969:Skyrim.esm`.
- Tipo: `Spell`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=051966:Skyrim.esm|
|`Effects[0].BaseEffect`|[`051966:Skyrim.esm`](../magic/MAGIC_012.md#r-68302c175b1a)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|14|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|100|

<a id="r-aab385f4ebbd"></a>

## SSOApocConjureDremoraAssassinSpellPerk

- Identidade estável Housecarl: `0519A5:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `Spell`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0519AB:Skyrim Revamped - Complete Enemy Overhaul.esp|
|`Effects[0].BaseEffect`|[`0519AB:Skyrim Revamped - Complete Enemy Overhaul.esp`](../magic/MAGIC_013.md#r-6570f2142553)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|10|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-a0d5f37cba8f"></a>

## MAG_Ironflesh

- Identidade estável Housecarl: `051B16:Skyrim.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)<br>Parameter1.Link=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)|aliases=False; package=False|
|`Effects[1].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D799A:Skyrim.esm`](../perks/PERKS_046.md#r-872158b13447)<br>Parameter1.Link=[`0D799A:Skyrim.esm`](../perks/PERKS_046.md#r-872158b13447)|aliases=False; package=False|
|`Effects[3].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D799B:Skyrim.esm`](../perks/PERKS_046.md#r-71e49c2b6f93)<br>Parameter1.Link=[`0D799B:Skyrim.esm`](../perks/PERKS_046.md#r-71e49c2b6f93)|aliases=False; package=False|
|`Effects[3].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=059B7B:Skyrim.esm|
|`Effects[0].BaseEffect`|[`059B7B:Skyrim.esm`](../magic/MAGIC_013.md#r-e617977e82e7)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|120|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|120|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=104AB5:Skyrim.esm|
|`Effects[1].BaseEffect`|[`104AB5:Skyrim.esm`](../magic/MAGIC_018.md#r-195829277191)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|120|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|120|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=104ABA:Skyrim.esm|
|`Effects[2].BaseEffect`|[`104ABA:Skyrim.esm`](../magic/MAGIC_018.md#r-b90c1f5bc9ba)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|60|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|120|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=104AB9:Skyrim.esm|
|`Effects[3].BaseEffect`|[`104AB9:Skyrim.esm`](../magic/MAGIC_018.md#r-f3a078078caa)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|60|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|120|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|266|
|`ChargeTime`|1|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44B8:Skyrim.esm`](../perks/PERKS_046.md#r-1cf1b8b5f298)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-ab840e30454f"></a>

## VKR_Alt_MagicResistance1_Spell_Ab

- Identidade estável Housecarl: `053125:Skyrim.esm`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`053129:Skyrim.esm`](../perks/PERKS_046.md#r-ebf6e0c97936)<br>Parameter1.Link=[`053129:Skyrim.esm`](../perks/PERKS_046.md#r-ebf6e0c97936)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=251985:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`251985:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-9c8b9e711e0a)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-8d5a3d741df9"></a>

## VKR_Alt_MagicResistance2_Spell_Ab

- Identidade estável Housecarl: `053126:Skyrim.esm`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`05312A:Skyrim.esm`](../perks/PERKS_046.md#r-76de91cd28b2)<br>Parameter1.Link=[`05312A:Skyrim.esm`](../perks/PERKS_046.md#r-76de91cd28b2)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=251985:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`251985:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-9c8b9e711e0a)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-9dcfe21260eb"></a>

## VKR_Alt_MagicResistance3_Spell_Ab

- Identidade estável Housecarl: `053127:Skyrim.esm`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=251985:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`251985:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-9c8b9e711e0a)|
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
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-1bcf49d8e79c"></a>

## MAG_CultistVaerminaCloakDmg

- Identidade estável Housecarl: `056A35:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=056A33:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`056A33:Pilgrim.esp`](../magic/MAGIC_013.md#r-13c45d6973c5)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|150|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=056A34:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`056A34:Pilgrim.esp`](../magic/MAGIC_013.md#r-96774c33d737)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=056A36:Pilgrim.esp|
|`Effects[2].BaseEffect`|[`056A36:Pilgrim.esp`](../magic/MAGIC_013.md#r-fc69779938f8)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|150|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=056A38:Pilgrim.esp|
|`Effects[3].BaseEffect`|[`056A38:Pilgrim.esp`](../magic/MAGIC_013.md#r-e14641cae631)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|25|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|1|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-90b83aac0337"></a>

## MAG_HazardWallOfShockSpell

- Identidade estável Housecarl: `0591A4:Skyrim.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=045D5A:Skyrim.esm|
|`Effects[0].BaseEffect`|[`045D5A:Skyrim.esm`](../magic/MAGIC_012.md#r-277af99a834e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|12|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-aa5d04af586b"></a>

## MAG_Oakflesh

- Identidade estável Housecarl: `05AD5C:Skyrim.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)<br>Parameter1.Link=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)|aliases=False; package=False|
|`Effects[1].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D799A:Skyrim.esm`](../perks/PERKS_046.md#r-872158b13447)<br>Parameter1.Link=[`0D799A:Skyrim.esm`](../perks/PERKS_046.md#r-872158b13447)|aliases=False; package=False|
|`Effects[2].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D799B:Skyrim.esm`](../perks/PERKS_046.md#r-71e49c2b6f93)<br>Parameter1.Link=[`0D799B:Skyrim.esm`](../perks/PERKS_046.md#r-71e49c2b6f93)|aliases=False; package=False|
|`Effects[3].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=051B15:Skyrim.esm|
|`Effects[0].BaseEffect`|[`051B15:Skyrim.esm`](../magic/MAGIC_013.md#r-cbb978761bf7)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|40|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|120|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=104AB5:Skyrim.esm|
|`Effects[1].BaseEffect`|[`104AB5:Skyrim.esm`](../magic/MAGIC_018.md#r-195829277191)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|40|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|120|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=104ABA:Skyrim.esm|
|`Effects[2].BaseEffect`|[`104ABA:Skyrim.esm`](../magic/MAGIC_018.md#r-b90c1f5bc9ba)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|20|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|120|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=104AB9:Skyrim.esm|
|`Effects[3].BaseEffect`|[`104AB9:Skyrim.esm`](../magic/MAGIC_018.md#r-f3a078078caa)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|20|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|120|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|103|
|`ChargeTime`|1|
|`Type`|Spell|
|`HalfCostPerk`|[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)|
|`CastDuration`|0|
|`Range`|0|
