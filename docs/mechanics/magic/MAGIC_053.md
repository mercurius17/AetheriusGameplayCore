# Cadeias mágicas referenciadas — parte 053

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-a341d89df54d"></a>

## MAG_PilgrimTallPapaWarrior

- Identidade estável Housecarl: `38B4B0:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E5F4C:Skyrim.esm`](../magic/MAGIC_045.md#r-6d8248a01b06)<br>Parameter1.Link=[`0E5F4C:Skyrim.esm`](../magic/MAGIC_045.md#r-6d8248a01b06)|aliases=False; package=False|
|`Effects[0].Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`38B4A8:Pilgrim.esp`](../magic/MAGIC_030.md#r-1fe9da2ede1a)<br>Parameter1.Link=[`38B4A8:Pilgrim.esp`](../magic/MAGIC_030.md#r-1fe9da2ede1a)|aliases=False; package=False|
|`Effects[0].Conditions[2]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616104:Update.esm<br>Parameter1.Link=616104:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4AE:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4AE:Pilgrim.esp`](../magic/MAGIC_030.md#r-8d7b2285613e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|50|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-98cf5ae51c5a"></a>

## MAG_PilgrimTallPapaMage

- Identidade estável Housecarl: `38B4B2:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E5F47:Skyrim.esm`](../magic/MAGIC_044.md#r-c268da7b28a6)<br>Parameter1.Link=[`0E5F47:Skyrim.esm`](../magic/MAGIC_044.md#r-c268da7b28a6)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4AF:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4AF:Pilgrim.esp`](../magic/MAGIC_030.md#r-45a37eac3827)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
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

<a id="r-6a46e17bb89a"></a>

## MAG_PilgrimTallPapaThief

- Identidade estável Housecarl: `38B4B5:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E5F45:Skyrim.esm`](../magic/MAGIC_044.md#r-fd3c0c132e22)<br>Parameter1.Link=[`0E5F45:Skyrim.esm`](../magic/MAGIC_044.md#r-fd3c0c132e22)|aliases=False; package=False|
|`Effects[0].Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`38B4A8:Pilgrim.esp`](../magic/MAGIC_030.md#r-1fe9da2ede1a)<br>Parameter1.Link=[`38B4A8:Pilgrim.esp`](../magic/MAGIC_030.md#r-1fe9da2ede1a)|aliases=False; package=False|
|`Effects[0].Conditions[2]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616104:Update.esm<br>Parameter1.Link=616104:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4B3:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4B3:Pilgrim.esp`](../magic/MAGIC_030.md#r-6a6662016f91)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|50|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-17b5b1c67c7b"></a>

## MAG_PilgrimTallPapaApprentice

- Identidade estável Housecarl: `38B4B9:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E5F4E:Skyrim.esm`](../magic/MAGIC_045.md#r-32872c40d6e2)<br>Parameter1.Link=[`0E5F4E:Skyrim.esm`](../magic/MAGIC_045.md#r-32872c40d6e2)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4B6:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4B6:Pilgrim.esp`](../magic/MAGIC_030.md#r-b32e656a1b2d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1.5|
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

<a id="r-e88dcd83b3fd"></a>

## MAG_PilgrimTallPapaAtronach

- Identidade estável Housecarl: `38B4BA:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E5F51:Skyrim.esm`](../magic/MAGIC_045.md#r-1e297605a40c)<br>Parameter1.Link=[`0E5F51:Skyrim.esm`](../magic/MAGIC_045.md#r-1e297605a40c)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4B8:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4B8:Pilgrim.esp`](../magic/MAGIC_030.md#r-f77507d7cd9c)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|100|
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

<a id="r-4656b8c4d501"></a>

## MAG_PilgrimTallPapaLady

- Identidade estável Housecarl: `38B4C1:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E5F54:Skyrim.esm`](../magic/MAGIC_045.md#r-b05460e28d10)<br>Parameter1.Link=[`0E5F54:Skyrim.esm`](../magic/MAGIC_045.md#r-b05460e28d10)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=07A177:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`07A177:Pilgrim.esp`](../magic/MAGIC_014.md#r-b4438460a1cd)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
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

<a id="r-cfbf077ab5ca"></a>

## MAG_PilgrimTallPapaLord

- Identidade estável Housecarl: `38B4C4:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E5F58:Skyrim.esm`](../magic/MAGIC_045.md#r-0285ab7078c5)<br>Parameter1.Link=[`0E5F58:Skyrim.esm`](../magic/MAGIC_045.md#r-0285ab7078c5)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4C2:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4C2:Pilgrim.esp`](../magic/MAGIC_030.md#r-a340b54e4bc7)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.5|
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

<a id="r-c336ff78f6ac"></a>

## MAG_PilgrimTallPapaLover

- Identidade estável Housecarl: `38B4C7:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E5F5A:Skyrim.esm`](../magic/MAGIC_045.md#r-df84a7ff1d25)<br>Parameter1.Link=[`0E5F5A:Skyrim.esm`](../magic/MAGIC_045.md#r-df84a7ff1d25)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4C5:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4C5:Pilgrim.esp`](../magic/MAGIC_030.md#r-da61ef19467f)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|2.5|
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

<a id="r-15a7b7a4a5ed"></a>

## MAG_PilgrimTallPapaRitual

- Identidade estável Housecarl: `38B4CA:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E7329:Skyrim.esm`](../magic/MAGIC_045.md#r-34f6566de1d4)<br>Parameter1.Link=[`0E7329:Skyrim.esm`](../magic/MAGIC_045.md#r-34f6566de1d4)|aliases=False; package=False|
|`Effects[0].Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`38B4A8:Pilgrim.esp`](../magic/MAGIC_030.md#r-1fe9da2ede1a)<br>Parameter1.Link=[`38B4A8:Pilgrim.esp`](../magic/MAGIC_030.md#r-1fe9da2ede1a)|aliases=False; package=False|
|`Effects[0].Conditions[2]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616104:Update.esm<br>Parameter1.Link=616104:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E7329:Skyrim.esm`](../magic/MAGIC_045.md#r-34f6566de1d4)<br>Parameter1.Link=[`0E7329:Skyrim.esm`](../magic/MAGIC_045.md#r-34f6566de1d4)|aliases=False; package=False|
|`Effects[1].Conditions[2]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`38B4A8:Pilgrim.esp`](../magic/MAGIC_030.md#r-1fe9da2ede1a)<br>Parameter1.Link=[`38B4A8:Pilgrim.esp`](../magic/MAGIC_030.md#r-1fe9da2ede1a)|aliases=False; package=False|
|`Effects[1].Conditions[3]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616104:Update.esm<br>Parameter1.Link=616104:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4C8:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4C8:Pilgrim.esp`](../magic/MAGIC_030.md#r-9f5c8ed10e39)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=1A4DAB:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`1A4DAB:Pilgrim.esp`](../magic/MAGIC_020.md#r-7bc71443df12)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|100|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 4 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-b0d4e017f593"></a>

## MAG_PilgrimTallPapaShadow

- Identidade estável Housecarl: `38B4D1:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E732A:Skyrim.esm`](../magic/MAGIC_045.md#r-b27f85726acc)<br>Parameter1.Link=[`0E732A:Skyrim.esm`](../magic/MAGIC_045.md#r-b27f85726acc)|aliases=False; package=False|
|`Effects[1].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E732A:Skyrim.esm`](../magic/MAGIC_045.md#r-b27f85726acc)<br>Parameter1.Link=[`0E732A:Skyrim.esm`](../magic/MAGIC_045.md#r-b27f85726acc)|aliases=False; package=False|
|`Effects[1].Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA129:Update.esm<br>Parameter1.Link=ADA129:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4D0:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4D0:Pilgrim.esp`](../magic/MAGIC_030.md#r-4f717c47f909)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=07A185:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`07A185:Pilgrim.esp`](../magic/MAGIC_014.md#r-de4cc8e3dd97)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-d7a1a4e21f13"></a>

## MAG_PilgrimTallPapaSteed

- Identidade estável Housecarl: `38B4D7:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E5F5E:Skyrim.esm`](../magic/MAGIC_045.md#r-bd57b74a5db8)<br>Parameter1.Link=[`0E5F5E:Skyrim.esm`](../magic/MAGIC_045.md#r-bd57b74a5db8)|aliases=False; package=False|
|`Effects[1].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E5F5E:Skyrim.esm`](../magic/MAGIC_045.md#r-bd57b74a5db8)<br>Parameter1.Link=[`0E5F5E:Skyrim.esm`](../magic/MAGIC_045.md#r-bd57b74a5db8)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4D5:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4D5:Pilgrim.esp`](../magic/MAGIC_030.md#r-f42b5b68ba28)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=38B4D6:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`38B4D6:Pilgrim.esp`](../magic/MAGIC_030.md#r-fe551f2ba269)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-5c7abe60bfe8"></a>

## MAG_PilgrimTallPapaSerpent

- Identidade estável Housecarl: `38B4D8:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E5F61:Skyrim.esm`](../magic/MAGIC_045.md#r-763be1ea29d2)<br>Parameter1.Link=[`0E5F61:Skyrim.esm`](../magic/MAGIC_045.md#r-763be1ea29d2)|aliases=False; package=False|
|`Effects[1].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA129:Update.esm<br>Parameter1.Link=ADA129:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E5F61:Skyrim.esm`](../magic/MAGIC_045.md#r-763be1ea29d2)<br>Parameter1.Link=[`0E5F61:Skyrim.esm`](../magic/MAGIC_045.md#r-763be1ea29d2)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4CE:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4CE:Pilgrim.esp`](../magic/MAGIC_030.md#r-816687ff4aba)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0F3A3D:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`0F3A3D:Pilgrim.esp`](../magic/MAGIC_017.md#r-9e17c0af9caf)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-3d6da0563464"></a>

## MAG_PilgrimTallPapaTower

- Identidade estável Housecarl: `38B4DA:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E7328:Skyrim.esm`](../magic/MAGIC_045.md#r-4ca67dc63e13)<br>Parameter1.Link=[`0E7328:Skyrim.esm`](../magic/MAGIC_045.md#r-4ca67dc63e13)|aliases=False; package=False|
|`Effects[1].Conditions[0]`|HasSpell|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Spell=[`0E7328:Skyrim.esm`](../magic/MAGIC_045.md#r-4ca67dc63e13)<br>Parameter1.Link=[`0E7328:Skyrim.esm`](../magic/MAGIC_045.md#r-4ca67dc63e13)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4D4:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4D4:Pilgrim.esp`](../magic/MAGIC_030.md#r-6c66b5348c43)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|50|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0F3A3E:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`0F3A3E:Pilgrim.esp`](../magic/MAGIC_017.md#r-d955f4971e72)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-265edccda49f"></a>

## MAG_PilgrimAllMakerBeast

- Identidade estável Housecarl: `38B4E6:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`38B4E2:Pilgrim.esp`](../magic/MAGIC_030.md#r-385f0ed22cd9)<br>Parameter1.Link=[`38B4E2:Pilgrim.esp`](../magic/MAGIC_030.md#r-385f0ed22cd9)|aliases=False; package=False|
|`Effects[0].Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616104:Update.esm<br>Parameter1.Link=616104:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`38B4E2:Pilgrim.esp`](../magic/MAGIC_030.md#r-385f0ed22cd9)<br>Parameter1.Link=[`38B4E2:Pilgrim.esp`](../magic/MAGIC_030.md#r-385f0ed22cd9)|aliases=False; package=False|
|`Effects[1].Conditions[2]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616104:Update.esm<br>Parameter1.Link=616104:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4E1:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4E1:Pilgrim.esp`](../magic/MAGIC_030.md#r-6abc24a684ac)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=17236B:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`17236B:Pilgrim.esp`](../magic/MAGIC_020.md#r-36bf6429a5af)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-8e732b63da09"></a>

## MAG_PilgrimAllMakerBeastSummon

- Identidade estável Housecarl: `3956F1:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=17236A:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`17236A:Pilgrim.esp`](../magic/MAGIC_020.md#r-14ad274b9469)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44BB:Skyrim.esm`](../perks/PERKS_049.md#r-43b92818b25c)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-3efeb95e1d47"></a>

## VKR_Alt_OcatosPreparation_Spell_Ab

- Identidade estável Housecarl: `395C69:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=395C68:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`395C68:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-b4a4e3479d3b)|
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
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-ccf1555f5935"></a>

## VKR_Alt_ParalyzingEscape_Spell_ProcLockout

- Identidade estável Housecarl: `395C6E:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=395C6C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`395C6C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-79a7c9be9cf0)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|600|
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

<a id="r-15fb5670a88d"></a>

## VKR_Alt_ParalyzingEscape_Spell_Ab

- Identidade estável Housecarl: `395C70:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffect|record|Target; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`395C6C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-79a7c9be9cf0)<br>Parameter1.Link=[`395C6C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-79a7c9be9cf0)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=395C74:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`395C74:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-4bb979c62eed)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
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

<a id="r-afed2c51a2bb"></a>

## VKR_Alt_ParalyzingEscape_Spell_CloakProc

- Identidade estável Housecarl: `395C72:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=395C6B:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`395C6B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-cece2fb1f569)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|10|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|AreaEffectIgnoresLOS, NoAbsorbOrReflect|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|200|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-2efa4f903920"></a>

## VKR_Alt_RitualConcentration_Spell_Ab

- Identidade estável Housecarl: `39AD79:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsCasting|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetGraphVariableInt|record|Subject; ref=(null link); index=-1|EqualTo 1|0|GraphVariable=bRitualSpellActive<br>StringParameter1=bRitualSpellActive<br>Parameter2=bRitualSpellActive|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=39AD78:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`39AD78:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-9306e4c91afc)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|9999|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Flags`|3473408|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-bf523c70c487"></a>

## VKR_Res_Inspire_Spell_CloakProc_2

- Identidade estável Housecarl: `3C869E:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 4 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=24776C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`24776C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-c18471140842)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|10|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|AreaEffectIgnoresLOS, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|13|
|`ChargeTime`|0|
|`Type`|Spell|
|`HalfCostPerk`|[`0F2CAA:Skyrim.esm`](../perks/PERKS_056.md#r-89be12cae610)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-a6821020e8e5"></a>

## VKR_Res_Inspire_Spell_Ab_2

- Identidade estável Housecarl: `3C86A0:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=3C86A2:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`3C86A2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-136e7c2ea629)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|15|
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

<a id="r-886e8f414f72"></a>

## GRIM_SPELL_ILL_Glamour_allyCheckCooldown

- Identidade estável Housecarl: `3CADD9:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffect|record|Reference; ref=000014:Skyrim.esm; index=-1|EqualTo 1|0|MagicEffect=[`34C3B4:LostGrimoire.esp`](../magic/MAGIC_027.md#r-c9f258456aad)<br>Parameter1.Link=[`34C3B4:LostGrimoire.esp`](../magic/MAGIC_027.md#r-c9f258456aad)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=3CADD8:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`3CADD8:LostGrimoire.esp`](../magic/MAGIC_031.md#r-c445c3641d20)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|86313600|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-b92679dae12b"></a>

## GRIM_SPELL_ILL_Glamour_aoe

- Identidade estável Housecarl: `3CADDA:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|SwapSubjectAndTarget|MagicEffect=[`34C3B4:LostGrimoire.esp`](../magic/MAGIC_027.md#r-c9f258456aad)<br>Parameter1.Link=[`34C3B4:LostGrimoire.esp`](../magic/MAGIC_027.md#r-c9f258456aad)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=3CADD3:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`3CADD3:LostGrimoire.esp`](../magic/MAGIC_031.md#r-1f2f8573ad9f)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|1000|
|`Effects[0].Data.Duration`|10|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|AreaEffectIgnoresLOS, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-dc6050c62dc7"></a>

## GRIM_SPELL_ILL_Glamour_allyKilledAOE

- Identidade estável Housecarl: `3CADDE:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=3CADDD:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`3CADDD:LostGrimoire.esp`](../magic/MAGIC_031.md#r-c4061510f338)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|40|
|`Effects[0].Data.Duration`|1|
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
