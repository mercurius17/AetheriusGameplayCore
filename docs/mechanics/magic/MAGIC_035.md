# Cadeias mágicas referenciadas — parte 035

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-0eab2f0f2980"></a>

## BlackPriorTriggerSpell

- Identidade estável Housecarl: `000605:For Honor Balance Patch.esp`.
- Tipo: `Spell`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 5 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000601:For Honor Balance Patch.esp|
|`Effects[0].BaseEffect`|[`000601:For Honor Balance Patch.esp`](../magic/MAGIC_001.md#r-64d0ef6b0ffb)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=000600:For Honor Balance Patch.esp|
|`Effects[1].BaseEffect`|[`000600:For Honor Balance Patch.esp`](../magic/MAGIC_001.md#r-479ad2eb68de)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|30|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=0005FF:For Honor Balance Patch.esp|
|`Effects[2].BaseEffect`|[`0005FF:For Honor Balance Patch.esp`](../magic/MAGIC_001.md#r-30ab9cea8c92)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|30|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=00060B:For Honor Balance Patch.esp|
|`Effects[3].BaseEffect`|[`00060B:For Honor Balance Patch.esp`](../magic/MAGIC_001.md#r-20dd768ffa0d)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|0|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|2|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Effects[4]`|[Effect] BaseEffect=00060F:For Honor Balance Patch.esp|
|`Effects[4].BaseEffect`|[`00060F:For Honor Balance Patch.esp`](../magic/MAGIC_001.md#r-67e450b93b38)|
|`Effects[4].Data`|[EffectData]|
|`Effects[4].Data.Magnitude`|0.25|
|`Effects[4].Data.Area`|0|
|`Effects[4].Data.Duration`|0|
|`Effects[4].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-1756cb567fae"></a>

## MAG_AnimalVigorSpell01

- Identidade estável Housecarl: `000801:Manbeast.esp`.
- Tipo: `Spell`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`000853:Manbeast.esp`](../perks/PERKS_011.md#r-10a1063d6d6c)<br>Parameter1.Link=[`000853:Manbeast.esp`](../perks/PERKS_011.md#r-10a1063d6d6c)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0008A6:Manbeast.esp|
|`Effects[0].BaseEffect`|[`0008A6:Manbeast.esp`](../magic/MAGIC_005.md#r-e128d18e0bc8)|
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

<a id="r-ee7dc1f1ba94"></a>

## HitFrameTriggerSpell

- Identidade estável Housecarl: `000803:For Honor Balance Patch.esp`.
- Tipo: `Spell`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000874:For Honor Balance Patch.esp|
|`Effects[0].BaseEffect`|[`000874:For Honor Balance Patch.esp`](../magic/MAGIC_004.md#r-303c1d920eb7)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=000811:For Honor Balance Patch.esp|
|`Effects[1].BaseEffect`|[`000811:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-35145a923796)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|2|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=00082A:For Honor Balance Patch.esp|
|`Effects[2].BaseEffect`|[`00082A:For Honor Balance Patch.esp`](../magic/MAGIC_003.md#r-b70abd5b7adc)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|2|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=00082F:For Honor Balance Patch.esp|
|`Effects[3].BaseEffect`|[`00082F:For Honor Balance Patch.esp`](../magic/MAGIC_003.md#r-3fe3607c9e22)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|0.15|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|0|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-fe5ed9baf9e8"></a>

## _SD_BlockHit_PASpell

- Identidade estável Housecarl: `00080B:DynamicBlockHit.esp`.
- Tipo: `Spell`; winner: `DynamicBlockHit.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000804:DynamicBlockHit.esp|
|`Effects[0].BaseEffect`|[`000804:DynamicBlockHit.esp`](../magic/MAGIC_001.md#r-a764faee00e8)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-63ce5a1263c7"></a>

## SP_OnHIt

- Identidade estável Housecarl: `00080B:For Honor in Skyrim.esp`.
- Tipo: `Spell`; winner: `For Honor in Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00080A:For Honor in Skyrim.esp|
|`Effects[0].BaseEffect`|[`00080A:For Honor in Skyrim.esp`](../magic/MAGIC_002.md#r-1266bdd4f2d9)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-fcf651a5a056"></a>

## Back Power Knockdown Spell

- Identidade estável Housecarl: `000815:For Honor Balance Patch.esp`.
- Tipo: `Spell`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000816:For Honor Balance Patch.esp|
|`Effects[0].BaseEffect`|[`000816:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-3a10014820df)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|3|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=00089B:For Honor Balance Patch.esp|
|`Effects[1].BaseEffect`|[`00089B:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-2c191289fd34)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-0b3a5623bc69"></a>

## MAG_AnimalVitalityMortalPerk01

- Identidade estável Housecarl: `000815:Manbeast.esp`.
- Tipo: `Spell`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`00080C:Manbeast.esp`](../perks/PERKS_011.md#r-003a2beb328b)<br>Parameter1.Link=[`00080C:Manbeast.esp`](../perks/PERKS_011.md#r-003a2beb328b)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000812:Manbeast.esp|
|`Effects[0].BaseEffect`|[`000812:Manbeast.esp`](../magic/MAGIC_002.md#r-42a3188b5601)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|172|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-f2e9bd86e569"></a>

## MAG_AnimalVitalityMortalPerk02

- Identidade estável Housecarl: `000816:Manbeast.esp`.
- Tipo: `Spell`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000813:Manbeast.esp|
|`Effects[0].BaseEffect`|[`000813:Manbeast.esp`](../magic/MAGIC_002.md#r-83869635938a)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|50|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|369|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-3f8afa6de172"></a>

## MAG_AnimalStrengthMortalPerk01

- Identidade estável Housecarl: `000818:Manbeast.esp`.
- Tipo: `Spell`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`00080A:Manbeast.esp`](../perks/PERKS_011.md#r-6c227d9b83b0)<br>Parameter1.Link=[`00080A:Manbeast.esp`](../perks/PERKS_011.md#r-6c227d9b83b0)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000817:Manbeast.esp|
|`Effects[0].BaseEffect`|[`000817:Manbeast.esp`](../magic/MAGIC_002.md#r-0051807db092)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|172|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-e7d1d2e603cd"></a>

## MAG_SteedDoomStoneSprintSpell01

- Identidade estável Housecarl: `000818:Mundus.esp`.
- Tipo: `Spell`; winner: `Mundus.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA143:Update.esm<br>Parameter1.Link=ADA143:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1]`|IsSprinting|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA143:Update.esm<br>Parameter1.Link=ADA143:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1]`|IsSprinting|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0]`|IsSprinting|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000813:Mundus.esp|
|`Effects[0].BaseEffect`|[`000813:Mundus.esp`](../magic/MAGIC_002.md#r-ba0504db96e3)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|8|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=000003:Mundus.esp|
|`Effects[1].BaseEffect`|[`000003:Mundus.esp`](../magic/MAGIC_001.md#r-093f41154167)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|20|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=000004:Mundus.esp|
|`Effects[2].BaseEffect`|[`000004:Mundus.esp`](../magic/MAGIC_001.md#r-5f77d07069dd)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0.01|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-a037662d0108"></a>

## MAG_AnimalStrengthMortalPerk02

- Identidade estável Housecarl: `000819:Manbeast.esp`.
- Tipo: `Spell`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000814:Manbeast.esp|
|`Effects[0].BaseEffect`|[`000814:Manbeast.esp`](../magic/MAGIC_002.md#r-0dc141fad1ce)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|50|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|369|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-6b4c4a138114"></a>

## MAG_FeralSpeedSpell01

- Identidade estável Housecarl: `00081A:Manbeast.esp`.
- Tipo: `Spell`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00081B:Manbeast.esp|
|`Effects[0].BaseEffect`|[`00081B:Manbeast.esp`](../magic/MAGIC_002.md#r-ccc046138239)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-7be49018ad3c"></a>

## MAG_HircinesBountyPerk

- Identidade estável Housecarl: `000821:Manbeast.esp`.
- Tipo: `Spell`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00081D:Manbeast.esp|
|`Effects[0].BaseEffect`|[`00081D:Manbeast.esp`](../magic/MAGIC_003.md#r-562f0596e885)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|2|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-a4826d31b4fa"></a>

## EmpoweredRightHeavyEnemyDispel

- Identidade estável Housecarl: `000826:Reforged Directional Combat.esp`.
- Tipo: `Spell`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000820:Reforged Directional Combat.esp|
|`Effects[0].BaseEffect`|[`000820:Reforged Directional Combat.esp`](../magic/MAGIC_003.md#r-0e90c4846fc0)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=00082F:Reforged Directional Combat.esp|
|`Effects[1].BaseEffect`|[`00082F:Reforged Directional Combat.esp`](../magic/MAGIC_003.md#r-c00aaadc5312)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|5|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-99f019eb56d3"></a>

## EmpoweredLeftHeavyEnemyDispel

- Identidade estável Housecarl: `000827:Reforged Directional Combat.esp`.
- Tipo: `Spell`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000821:Reforged Directional Combat.esp|
|`Effects[0].BaseEffect`|[`000821:Reforged Directional Combat.esp`](../magic/MAGIC_003.md#r-b288baf37b4e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=000830:Reforged Directional Combat.esp|
|`Effects[1].BaseEffect`|[`000830:Reforged Directional Combat.esp`](../magic/MAGIC_004.md#r-2056e776f81a)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|10|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-53d43583dacc"></a>

## EmpoweredRightLightEnemyDispel

- Identidade estável Housecarl: `000829:Reforged Directional Combat.esp`.
- Tipo: `Spell`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000823:Reforged Directional Combat.esp|
|`Effects[0].BaseEffect`|[`000823:Reforged Directional Combat.esp`](../magic/MAGIC_003.md#r-52d8df46afbc)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=000832:Reforged Directional Combat.esp|
|`Effects[1].BaseEffect`|[`000832:Reforged Directional Combat.esp`](../magic/MAGIC_004.md#r-aade07bf03ef)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|10|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-c460048d0aa9"></a>

## EmpoweredLeftLightEnemyDispel

- Identidade estável Housecarl: `00082A:Reforged Directional Combat.esp`.
- Tipo: `Spell`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000824:Reforged Directional Combat.esp|
|`Effects[0].BaseEffect`|[`000824:Reforged Directional Combat.esp`](../magic/MAGIC_003.md#r-535cc3f23b2f)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=000833:Reforged Directional Combat.esp|
|`Effects[1].BaseEffect`|[`000833:Reforged Directional Combat.esp`](../magic/MAGIC_004.md#r-0042825dd612)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|10|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-027c44579e8e"></a>

## EmpoweredLightAttackHitEffect

- Identidade estável Housecarl: `000838:Reforged Directional Combat.esp`.
- Tipo: `Spell`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00083A:Reforged Directional Combat.esp|
|`Effects[0].BaseEffect`|[`00083A:Reforged Directional Combat.esp`](../magic/MAGIC_004.md#r-66cea9a2b1a3)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
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

<a id="r-c874385eb1ad"></a>

## EmpoweredHeavyAttackHitEffect

- Identidade estável Housecarl: `000839:Reforged Directional Combat.esp`.
- Tipo: `Spell`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00083B:Reforged Directional Combat.esp|
|`Effects[0].BaseEffect`|[`00083B:Reforged Directional Combat.esp`](../magic/MAGIC_004.md#r-2dbfead7ebbf)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
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

<a id="r-155c48bdf397"></a>

## Simple_DrainingBolt

- Identidade estável Housecarl: `000845:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Spell`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetPlayerTeammate|record|Target; ref=(null link); index=-1|EqualTo 0|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetPlayerTeammate|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[2]`|GetIsID|record|Target; ref=(null link); index=-1|EqualTo 0|OR|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[3]`|GetPlayerTeammate|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[4]`|GetPlayerTeammate|record|Target; ref=(null link); index=-1|EqualTo 0|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[5]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0]`|GetPlayerTeammate|record|Target; ref=(null link); index=-1|EqualTo 0|OR|—|aliases=False; package=False|
|`Effects[2].Conditions[1]`|GetPlayerTeammate|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[2].Conditions[2]`|GetIsID|record|Target; ref=(null link); index=-1|EqualTo 0|OR|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[3]`|GetPlayerTeammate|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[2].Conditions[4]`|GetPlayerTeammate|record|Target; ref=(null link); index=-1|EqualTo 0|OR|—|aliases=False; package=False|
|`Effects[2].Conditions[5]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0]`|GetPlayerTeammate|record|Target; ref=(null link); index=-1|EqualTo 0|OR|—|aliases=False; package=False|
|`Effects[3].Conditions[1]`|GetPlayerTeammate|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[3].Conditions[2]`|GetIsID|record|Target; ref=(null link); index=-1|EqualTo 0|OR|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[3]`|GetPlayerTeammate|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[3].Conditions[4]`|GetPlayerTeammate|record|Target; ref=(null link); index=-1|EqualTo 0|OR|—|aliases=False; package=False|
|`Effects[3].Conditions[5]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0]`|GetPlayerTeammate|record|Target; ref=(null link); index=-1|EqualTo 0|OR|—|aliases=False; package=False|
|`Effects[4].Conditions[1]`|GetPlayerTeammate|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[4].Conditions[2]`|GetIsID|record|Target; ref=(null link); index=-1|EqualTo 0|OR|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[3]`|GetPlayerTeammate|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[4].Conditions[4]`|GetPlayerTeammate|record|Target; ref=(null link); index=-1|EqualTo 0|OR|—|aliases=False; package=False|
|`Effects[4].Conditions[5]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 5 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000846:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[0].BaseEffect`|[`000846:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_004.md#r-5a094f35a9aa)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 6 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=000848:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[1].BaseEffect`|[`000848:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_004.md#r-a7a64c7ef70e)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|20|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=000849:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[2].BaseEffect`|[`000849:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_004.md#r-19bf9a7e6fad)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|20|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 6 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=000840:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[3].BaseEffect`|[`000840:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_004.md#r-0ed982efce81)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|40|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|1|
|`Effects[3].Conditions`|[list: 6 item(s)]|
|`Effects[4]`|[Effect] BaseEffect=000B27:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[4].BaseEffect`|[`000B27:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_007.md#r-50fed3cccd84)|
|`Effects[4].Data`|[EffectData]|
|`Effects[4].Data.Magnitude`|20|
|`Effects[4].Data.Area`|0|
|`Effects[4].Data.Duration`|1|
|`Effects[4].Conditions`|[list: 6 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|133|
|`ChargeTime`|0|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44C0:Skyrim.esm`](../perks/PERKS_050.md#r-907ca88f27ab)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-30e9d53477b7"></a>

## MAG_AnimalVitalityBeastPerk01

- Identidade estável Housecarl: `000848:Manbeast.esp`.
- Tipo: `Spell`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000812:Manbeast.esp|
|`Effects[0].BaseEffect`|[`000812:Manbeast.esp`](../magic/MAGIC_002.md#r-42a3188b5601)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|172|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-5ae2e0d93bba"></a>

## MAG_AnimalVitalityBeastPerk02

- Identidade estável Housecarl: `000849:Manbeast.esp`.
- Tipo: `Spell`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000812:Manbeast.esp|
|`Effects[0].BaseEffect`|[`000812:Manbeast.esp`](../magic/MAGIC_002.md#r-42a3188b5601)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|172|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-3f828deee8f9"></a>

## MAG_AnimalStrengthBeastPerk01

- Identidade estável Housecarl: `00084A:Manbeast.esp`.
- Tipo: `Spell`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000817:Manbeast.esp|
|`Effects[0].BaseEffect`|[`000817:Manbeast.esp`](../magic/MAGIC_002.md#r-0051807db092)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|172|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-2fed8cd8e65c"></a>

## MAG_AnimalStrengthBeastPerk02

- Identidade estável Housecarl: `00084B:Manbeast.esp`.
- Tipo: `Spell`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=0CDD84:Skyrim.esm<br>Parameter1.Link=0CDD84:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Race=01E17B:Dragonborn.esm<br>Parameter1.Link=01E17B:Dragonborn.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000814:Manbeast.esp|
|`Effects[0].BaseEffect`|[`000814:Manbeast.esp`](../magic/MAGIC_002.md#r-0dc141fad1ce)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|172|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-15c59f3d473f"></a>

## ccVSVSSE003_SPELL_SkeletonWarlock

- Identidade estável Housecarl: `00084E:ccvsvsse003-necroarts.esl`.
- Tipo: `Spell`; winner: `ccvsvsse003-necroarts.esl`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00082F:ccvsvsse003-necroarts.esl|
|`Effects[0].BaseEffect`|[`00082F:ccvsvsse003-necroarts.esl`](../magic/MAGIC_003.md#r-ed811f356327)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=00096E:ccvsvsse003-necroarts.esl|
|`Effects[1].BaseEffect`|[`00096E:ccvsvsse003-necroarts.esl`](../magic/MAGIC_006.md#r-fd063795338b)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|258|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44BD:Skyrim.esm`](../perks/PERKS_049.md#r-3595777cbcf1)|
|`CastDuration`|0|
|`Range`|24|
