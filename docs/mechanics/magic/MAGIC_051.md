# Cadeias mágicas referenciadas — parte 051

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-56c693c50057"></a>

## COTV_VampireLordDrain02

- Identidade estável Housecarl: `33EB06:Curse of the Vampire.esp`.
- Tipo: `Spell`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0149A6:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 014199:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0149A6:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 014199:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0]`|GetVMQuestVariable|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Quest=002B6E:Dawnguard.esm<br>VariableName=::IsFollowing_var<br>StringParameter2=::IsFollowing_var<br>Parameter1.Link=002B6E:Dawnguard.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=019321:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`019321:Dawnguard.esm`](../magic/MAGIC_009.md#r-75de071aface)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|10|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=019322:Dawnguard.esm|
|`Effects[1].BaseEffect`|[`019322:Dawnguard.esm`](../magic/MAGIC_009.md#r-df3a6f54bb12)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|10|
|`Effects[1].Data.Area`|10|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=019323:Dawnguard.esm|
|`Effects[2].BaseEffect`|[`019323:Dawnguard.esm`](../magic/MAGIC_009.md#r-d2c76aaca93c)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|10|
|`Effects[2].Data.Area`|10|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=019325:Dawnguard.esm|
|`Effects[3].BaseEffect`|[`019325:Dawnguard.esm`](../magic/MAGIC_009.md#r-3d9dd5abf2eb)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|40|
|`Effects[3].Data.Area`|10|
|`Effects[3].Data.Duration`|1|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F42:Skyrim.esm|
|`BaseCost`|50|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-a8ee864b33e1"></a>

## COTV_VampireLordDrain03

- Identidade estável Housecarl: `33EB08:Curse of the Vampire.esp`.
- Tipo: `Spell`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0149A6:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 014199:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0149A6:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 014199:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0]`|GetVMQuestVariable|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Quest=002B6E:Dawnguard.esm<br>VariableName=::IsFollowing_var<br>StringParameter2=::IsFollowing_var<br>Parameter1.Link=002B6E:Dawnguard.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=019321:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`019321:Dawnguard.esm`](../magic/MAGIC_009.md#r-75de071aface)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|15|
|`Effects[0].Data.Area`|10|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=019322:Dawnguard.esm|
|`Effects[1].BaseEffect`|[`019322:Dawnguard.esm`](../magic/MAGIC_009.md#r-df3a6f54bb12)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|15|
|`Effects[1].Data.Area`|10|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=019323:Dawnguard.esm|
|`Effects[2].BaseEffect`|[`019323:Dawnguard.esm`](../magic/MAGIC_009.md#r-d2c76aaca93c)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|15|
|`Effects[2].Data.Area`|10|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=019325:Dawnguard.esm|
|`Effects[3].BaseEffect`|[`019325:Dawnguard.esm`](../magic/MAGIC_009.md#r-3d9dd5abf2eb)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|60|
|`Effects[3].Data.Area`|10|
|`Effects[3].Data.Duration`|1|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F42:Skyrim.esm|
|`BaseCost`|50|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-6c083d4cabc8"></a>

## COTV_VampireLordDrain04

- Identidade estável Housecarl: `33EB0A:Curse of the Vampire.esp`.
- Tipo: `Spell`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0149A6:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 014199:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0149A6:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 014199:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0]`|GetVMQuestVariable|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Quest=002B6E:Dawnguard.esm<br>VariableName=::IsFollowing_var<br>StringParameter2=::IsFollowing_var<br>Parameter1.Link=002B6E:Dawnguard.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=019321:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`019321:Dawnguard.esm`](../magic/MAGIC_009.md#r-75de071aface)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|10|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=019322:Dawnguard.esm|
|`Effects[1].BaseEffect`|[`019322:Dawnguard.esm`](../magic/MAGIC_009.md#r-df3a6f54bb12)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|20|
|`Effects[1].Data.Area`|10|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=019323:Dawnguard.esm|
|`Effects[2].BaseEffect`|[`019323:Dawnguard.esm`](../magic/MAGIC_009.md#r-d2c76aaca93c)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|20|
|`Effects[2].Data.Area`|10|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=019325:Dawnguard.esm|
|`Effects[3].BaseEffect`|[`019325:Dawnguard.esm`](../magic/MAGIC_009.md#r-3d9dd5abf2eb)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|80|
|`Effects[3].Data.Area`|10|
|`Effects[3].Data.Duration`|1|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F42:Skyrim.esm|
|`BaseCost`|50|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-1cd3bc211dc0"></a>

## COTV_VampireLordDrain05

- Identidade estável Housecarl: `33EB0C:Curse of the Vampire.esp`.
- Tipo: `Spell`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0149A6:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 014199:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0149A6:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 014199:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0]`|GetVMQuestVariable|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Quest=002B6E:Dawnguard.esm<br>VariableName=::IsFollowing_var<br>StringParameter2=::IsFollowing_var<br>Parameter1.Link=002B6E:Dawnguard.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=019321:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`019321:Dawnguard.esm`](../magic/MAGIC_009.md#r-75de071aface)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|10|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=019322:Dawnguard.esm|
|`Effects[1].BaseEffect`|[`019322:Dawnguard.esm`](../magic/MAGIC_009.md#r-df3a6f54bb12)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|10|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=019323:Dawnguard.esm|
|`Effects[2].BaseEffect`|[`019323:Dawnguard.esm`](../magic/MAGIC_009.md#r-d2c76aaca93c)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|25|
|`Effects[2].Data.Area`|10|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=019325:Dawnguard.esm|
|`Effects[3].BaseEffect`|[`019325:Dawnguard.esm`](../magic/MAGIC_009.md#r-3d9dd5abf2eb)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|100|
|`Effects[3].Data.Area`|10|
|`Effects[3].Data.Duration`|1|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F42:Skyrim.esm|
|`BaseCost`|50|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-aa78b206f5a2"></a>

## VKR_Hea_BlockBasicPerks_Spell_Ab

- Identidade estável Housecarl: `344BC1:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm<br>Parameter1.Link=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm<br>Parameter1.Link=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[3]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm<br>Parameter1.Link=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[4]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06C0EE:Skyrim.esm<br>Parameter1.Link=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[5]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-1140a94a546f)<br>Parameter1.Link=[`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-1140a94a546f)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=344BC0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 6 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-bf446e4b9b09"></a>

## VKR_One_VictoryRush_Spell

- Identidade estável Housecarl: `344BCC:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=344BCA:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`344BCA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-ff405dd66974)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
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

<a id="r-a000bb2fc90f"></a>

## VKR_Two_CrowdPleaser_Spell

- Identidade estável Housecarl: `344BCF:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=344BD1:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`344BD1:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-797fe37265b2)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
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

<a id="r-5c4a885c8d4f"></a>

## VKR_Two_CrowdPleaser_Spell_ProcOnSelf

- Identidade estável Housecarl: `344BD3:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=344BD2:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`344BD2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-c03f8ade8a26)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|20|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|3473408|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-5207843f566f"></a>

## VKR_One_VictoryRush_Spell_ProcOnSelf

- Identidade estável Housecarl: `344BD6:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=344BD5:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`344BD5:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-a0550d9a16be)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|150|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|3473408|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-6f4b783e6b26"></a>

## GRIM_SPELL_ILL100_Glamour

- Identidade estável Housecarl: `34C3AE:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=34C3A9:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`34C3A9:LostGrimoire.esp`](../magic/MAGIC_027.md#r-36a0f7b4c428)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|120|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect, NoDualCastModification|
|`CastType`|FireAndForget|
|`TargetType`|TargetActor|
|`EquipmentType`|013F45:Skyrim.esm|
|`BaseCost`|646|
|`ChargeTime`|6|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44C6:Skyrim.esm`](../perks/PERKS_053.md#r-c25c45386c2e)|
|`CastDuration`|0|
|`Range`|1000|

<a id="r-c3b99d828e39"></a>

## GRIM_SPELL_ILL_Glamour_playerEff

- Identidade estável Housecarl: `34C3B6:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=34C3B4:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`34C3B4:LostGrimoire.esp`](../magic/MAGIC_027.md#r-c9f258456aad)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|120|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44C6:Skyrim.esm`](../perks/PERKS_053.md#r-c25c45386c2e)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-d7958fffbc3e"></a>

## VKR_One_AdvancedDagger_Spell

- Identidade estável Housecarl: `353F18:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=4196D2:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`4196D2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-7e1be327048c)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|2|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=353F1C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`353F1C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-b778fb00fa33)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
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

<a id="r-f97787605e9b"></a>

## VKR_Two_RollingCharge_Spell_Ab

- Identidade estável Housecarl: `353F22:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsSprinting|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1]`|IsWeaponOut|record|Subject; ref=(null link); index=-1|EqualTo 2|0|—|aliases=False; package=False|
|`Effects[0].Conditions[2]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 5|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[0].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 6|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[0].Conditions[4]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 5|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[0].Conditions[5]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 6|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[1].Conditions[0]`|IsSprinting|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 2|0|Global=353F24:Vokrii - Minimalistic Perks of Skyrim.esp<br>Parameter1.Link=353F24:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[1].Conditions[2]`|IsWeaponOut|record|Subject; ref=(null link); index=-1|EqualTo 2|0|—|aliases=False; package=False|
|`Effects[1].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 5|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[1].Conditions[4]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 6|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[1].Conditions[5]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 5|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[1].Conditions[6]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 6|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[2].Conditions[0]`|IsSprinting|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 3|0|Global=353F24:Vokrii - Minimalistic Perks of Skyrim.esp<br>Parameter1.Link=353F24:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[2].Conditions[2]`|IsWeaponOut|record|Subject; ref=(null link); index=-1|EqualTo 2|0|—|aliases=False; package=False|
|`Effects[2].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 5|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[2].Conditions[4]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 6|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[2].Conditions[5]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 5|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[2].Conditions[6]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 6|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[3].Conditions[0]`|IsSprinting|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|0|Global=353F24:Vokrii - Minimalistic Perks of Skyrim.esp<br>Parameter1.Link=353F24:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[3].Conditions[2]`|IsWeaponOut|record|Subject; ref=(null link); index=-1|EqualTo 2|0|—|aliases=False; package=False|
|`Effects[3].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 5|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[3].Conditions[4]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 6|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[3].Conditions[5]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 5|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[3].Conditions[6]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 6|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[4].Conditions[0]`|IsSprinting|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 5|0|Global=353F24:Vokrii - Minimalistic Perks of Skyrim.esp<br>Parameter1.Link=353F24:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[4].Conditions[2]`|IsWeaponOut|record|Subject; ref=(null link); index=-1|EqualTo 2|0|—|aliases=False; package=False|
|`Effects[4].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 5|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[4].Conditions[4]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 6|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[4].Conditions[5]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 5|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[4].Conditions[6]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 6|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 5 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=353F1E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`353F1E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-3767487ec07e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 6 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=353F1F:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`353F1F:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-6b9963f2500b)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|5|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 7 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=353F1F:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].BaseEffect`|[`353F1F:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-6b9963f2500b)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|5|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 7 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=353F1F:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].BaseEffect`|[`353F1F:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-6b9963f2500b)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|5|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|0|
|`Effects[3].Conditions`|[list: 7 item(s)]|
|`Effects[4]`|[Effect] BaseEffect=353F28:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].BaseEffect`|[`353F28:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-cba577d605cc)|
|`Effects[4].Data`|[EffectData]|
|`Effects[4].Data.Magnitude`|5|
|`Effects[4].Data.Area`|0|
|`Effects[4].Data.Duration`|0|
|`Effects[4].Conditions`|[list: 7 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-dbb977e7fdf4"></a>

## MAG_PilgrimHoonDing

- Identidade estável Housecarl: `35897D:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35897B:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35897B:Pilgrim.esp`](../magic/MAGIC_027.md#r-d1c19b7fa16e)|
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
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-d549be5e69c1"></a>

## MAG_PilgrimPelinal

- Identidade estável Housecarl: `358985:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=358984:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`358984:Pilgrim.esp`](../magic/MAGIC_027.md#r-77966ab974dd)|
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
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-2ea284cb7348"></a>

## MAG_PilgrimPhynaster

- Identidade estável Housecarl: `35DA8A:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35DA89:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35DA89:Pilgrim.esp`](../magic/MAGIC_027.md#r-b1c6da7cfcd6)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=35DA8B:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`35DA8B:Pilgrim.esp`](../magic/MAGIC_027.md#r-4efa94284708)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=0BBF0D:Pilgrim.esp|
|`Effects[2].BaseEffect`|[`0BBF0D:Pilgrim.esp`](../magic/MAGIC_016.md#r-30cf551b805c)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|25|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-45d60ed8b12f"></a>

## MAG_PilgrimJoneJode

- Identidade estável Housecarl: `35DA92:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Stamina<br>Parameter1=Stamina|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35DA8F:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35DA8F:Pilgrim.esp`](../magic/MAGIC_027.md#r-c0107a9f05d9)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=35DA96:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`35DA96:Pilgrim.esp`](../magic/MAGIC_027.md#r-db9caeaff16f)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|100|
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

<a id="r-7fd2ebd8b8ab"></a>

## MAG_PilgrimSheor

- Identidade estável Housecarl: `35DA9A:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35DA99:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35DA99:Pilgrim.esp`](../magic/MAGIC_027.md#r-4dd543dfaab6)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=019D66:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`019D66:Pilgrim.esp`](../magic/MAGIC_009.md#r-9ebeee6815bd)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|100|
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

<a id="r-e399db2ae48e"></a>

## MAG_PilgrimSyrabane

- Identidade estável Housecarl: `35DAA0:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA143:Update.esm<br>Parameter1.Link=ADA143:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1]`|IsCasting|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA143:Update.esm<br>Parameter1.Link=ADA143:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[1]`|IsCasting|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA143:Update.esm<br>Parameter1.Link=ADA143:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35DAA1:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35DAA1:Pilgrim.esp`](../magic/MAGIC_027.md#r-9949d95b8dcf)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0A7AC4:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`0A7AC4:Pilgrim.esp`](../magic/MAGIC_015.md#r-03160fed3bbf)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=0A7AC5:Pilgrim.esp|
|`Effects[2].BaseEffect`|[`0A7AC5:Pilgrim.esp`](../magic/MAGIC_015.md#r-a43ae4c5dc1f)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0.01|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=0E4730:Pilgrim.esp|
|`Effects[3].BaseEffect`|[`0E4730:Pilgrim.esp`](../magic/MAGIC_017.md#r-8358e7b3b033)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|0|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|0|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-00a584bb1933"></a>

## MAG_PilgrimTrinimac

- Identidade estável Housecarl: `35DAA7:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`35DAA4:Pilgrim.esp`](../magic/MAGIC_027.md#r-be4372ee7718)<br>Parameter1.Link=[`35DAA4:Pilgrim.esp`](../magic/MAGIC_027.md#r-be4372ee7718)|aliases=False; package=False|
|`Effects[0].Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616104:Update.esm<br>Parameter1.Link=616104:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35DAA5:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35DAA5:Pilgrim.esp`](../magic/MAGIC_027.md#r-25b49d764047)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-581ee30b3140"></a>

## MAG_PilgrimJephre

- Identidade estável Housecarl: `35DAAD:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35DAAC:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35DAAC:Pilgrim.esp`](../magic/MAGIC_027.md#r-e06fc6e88f14)|
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
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-c40cdc848813"></a>

## MAG_PilgrimYffre

- Identidade estável Housecarl: `35DAB2:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA143:Update.esm<br>Parameter1.Link=ADA143:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1]`|IsAttacking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[2]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 7|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[1].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 14|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[2].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA143:Update.esm<br>Parameter1.Link=ADA143:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[1]`|IsAttacking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[2]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 7|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[2].Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|EqualTo 14|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[3].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA143:Update.esm<br>Parameter1.Link=ADA143:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35DAB1:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35DAB1:Pilgrim.esp`](../magic/MAGIC_027.md#r-fec0ff6f7cba)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=35DAB7:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`35DAB7:Pilgrim.esp`](../magic/MAGIC_027.md#r-c418dee213e0)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 4 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=10CF4E:Pilgrim.esp|
|`Effects[2].BaseEffect`|[`10CF4E:Pilgrim.esp`](../magic/MAGIC_019.md#r-37acb3b4733d)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0.01|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 4 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=10CF4F:Pilgrim.esp|
|`Effects[3].BaseEffect`|[`10CF4F:Pilgrim.esp`](../magic/MAGIC_019.md#r-8f302be70bad)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|0|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|0|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-32879e7d53d6"></a>

## MAG_PilgrimAllMakerTree

- Identidade estável Housecarl: `35DABC:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`35DAB8:Pilgrim.esp`](../magic/MAGIC_027.md#r-d08a3ed620c0)<br>Parameter1.Link=[`35DAB8:Pilgrim.esp`](../magic/MAGIC_027.md#r-d08a3ed620c0)|aliases=False; package=False|
|`Effects[0].Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616104:Update.esm<br>Parameter1.Link=616104:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA129:Update.esm<br>Parameter1.Link=ADA129:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35DABB:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35DABB:Pilgrim.esp`](../magic/MAGIC_027.md#r-421c3bd855a9)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=07A183:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`07A183:Pilgrim.esp`](../magic/MAGIC_014.md#r-49e3447a585a)|
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

<a id="r-a94cd1db4833"></a>

## MAG_PilgrimAllMakerEarth

- Identidade estável Housecarl: `35DAC3:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`35DAC1:Pilgrim.esp`](../magic/MAGIC_028.md#r-d8d1ce078052)<br>Parameter1.Link=[`35DAC1:Pilgrim.esp`](../magic/MAGIC_028.md#r-d8d1ce078052)|aliases=False; package=False|
|`Effects[0].Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616104:Update.esm<br>Parameter1.Link=616104:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35DAC2:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35DAC2:Pilgrim.esp`](../magic/MAGIC_028.md#r-e09641b68740)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-69bfe0500fb8"></a>

## MAG_PilgrimAllMakerWater

- Identidade estável Housecarl: `35DACB:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`35DAC8:Pilgrim.esp`](../magic/MAGIC_028.md#r-003f0246ec9a)<br>Parameter1.Link=[`35DAC8:Pilgrim.esp`](../magic/MAGIC_028.md#r-003f0246ec9a)|aliases=False; package=False|
|`Effects[0].Conditions[2]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616104:Update.esm<br>Parameter1.Link=616104:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35DACA:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35DACA:Pilgrim.esp`](../magic/MAGIC_028.md#r-d543c67f8555)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1.5|
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
