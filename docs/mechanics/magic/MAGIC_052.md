# Cadeias mágicas referenciadas — parte 052

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-40cb4a380008"></a>

## MAG_PilgrimAllMakerWind

- Identidade estável Housecarl: `35DAD5:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`35DAD2:Pilgrim.esp`](../magic/MAGIC_028.md#r-79bb8deae143)<br>Parameter1.Link=[`35DAD2:Pilgrim.esp`](../magic/MAGIC_028.md#r-79bb8deae143)|aliases=False; package=False|
|`Effects[0].Conditions[2]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616104:Update.esm<br>Parameter1.Link=616104:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35DAD3:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35DAD3:Pilgrim.esp`](../magic/MAGIC_028.md#r-9809aabadc18)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|2.5|
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

<a id="r-043718af5fb5"></a>

## MAG_PilgrimAllMakerSun

- Identidade estável Housecarl: `35DADE:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`35DADA:Pilgrim.esp`](../magic/MAGIC_028.md#r-a3e76aa270d4)<br>Parameter1.Link=[`35DADA:Pilgrim.esp`](../magic/MAGIC_028.md#r-a3e76aa270d4)|aliases=False; package=False|
|`Effects[0].Conditions[2]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616104:Update.esm<br>Parameter1.Link=616104:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35DADC:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35DADC:Pilgrim.esp`](../magic/MAGIC_028.md#r-49c793cfd624)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.5|
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

<a id="r-f225d253aa9b"></a>

## MAG_CultistMolagBalCloakDmg

- Identidade estável Housecarl: `35DAE7:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35DAE6:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35DAE6:Pilgrim.esp`](../magic/MAGIC_028.md#r-3c3c6fb95e9b)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|40|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-a70554adc063"></a>

## MAG_CultistMolagBal

- Identidade estável Housecarl: `35DAEA:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=35DAEB:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`35DAEB:Pilgrim.esp`](../magic/MAGIC_028.md#r-27e26cfe8f2d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=35DAEE:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`35DAEE:Pilgrim.esp`](../magic/MAGIC_028.md#r-02a81e37834c)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|10000|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=35DAE8:Pilgrim.esp|
|`Effects[2].BaseEffect`|[`35DAE8:Pilgrim.esp`](../magic/MAGIC_028.md#r-b2b5801ff277)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|50|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-1efaa2e89fdd"></a>

## MAG_CultistMeridia

- Identidade estável Housecarl: `367CF5:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`367CF3:Pilgrim.esp`](../magic/MAGIC_028.md#r-0741b9828a9e)<br>Parameter1.Link=[`367CF3:Pilgrim.esp`](../magic/MAGIC_028.md#r-0741b9828a9e)|aliases=False; package=False|
|`Effects[0].Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=367CF4:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`367CF4:Pilgrim.esp`](../magic/MAGIC_028.md#r-5e2c4b9742ea)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-93a67fa3bfcb"></a>

## MAG_CultistMehrunesDagonCloakDmg

- Identidade estável Housecarl: `367CFE:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=367CFC:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`367CFC:Pilgrim.esp`](../magic/MAGIC_028.md#r-b04321a43a1b)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=367CFF:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`367CFF:Pilgrim.esp`](../magic/MAGIC_028.md#r-ca36c53baaac)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=367D01:Pilgrim.esp|
|`Effects[2].BaseEffect`|[`367D01:Pilgrim.esp`](../magic/MAGIC_028.md#r-e04affe9deb1)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|25|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|153|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-a7cbac9885d8"></a>

## MAG_CultistMehrunesDagon

- Identidade estável Housecarl: `367D07:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 5 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=367CFD:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`367CFD:Pilgrim.esp`](../magic/MAGIC_028.md#r-3ecace6043b5)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=367CFB:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`367CFB:Pilgrim.esp`](../magic/MAGIC_028.md#r-a13f9fa08dd0)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|200|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=367D02:Pilgrim.esp|
|`Effects[2].BaseEffect`|[`367D02:Pilgrim.esp`](../magic/MAGIC_028.md#r-ac9d56107919)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|50|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=367D03:Pilgrim.esp|
|`Effects[3].BaseEffect`|[`367D03:Pilgrim.esp`](../magic/MAGIC_028.md#r-abe3ea7747a8)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|50|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|0|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Effects[4]`|[Effect] BaseEffect=367D04:Pilgrim.esp|
|`Effects[4].BaseEffect`|[`367D04:Pilgrim.esp`](../magic/MAGIC_028.md#r-03379135d803)|
|`Effects[4].Data`|[EffectData]|
|`Effects[4].Data.Magnitude`|50|
|`Effects[4].Data.Area`|0|
|`Effects[4].Data.Duration`|0|
|`Effects[4].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-98ec7852f138"></a>

## MAG_CultistHermaeusMora

- Identidade estável Housecarl: `36CE0D:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=36CE0C:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`36CE0C:Pilgrim.esp`](../magic/MAGIC_028.md#r-37c0cf7412ac)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=36CE10:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`36CE10:Pilgrim.esp`](../magic/MAGIC_028.md#r-4d5a0e11a3c2)|
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

<a id="r-1adaca2b8a5a"></a>

## MAG_CultistAzura

- Identidade estável Housecarl: `36CE14:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=36CE13:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`36CE13:Pilgrim.esp`](../magic/MAGIC_029.md#r-0778cf4c3eac)|
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

<a id="r-b92ae76e491e"></a>

## MAG_CultistMalacath

- Identidade estável Housecarl: `36CE1A:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA129:Update.esm<br>Parameter1.Link=ADA129:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=36CE19:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`36CE19:Pilgrim.esp`](../magic/MAGIC_029.md#r-1d91d7076ce1)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=07A187:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`07A187:Pilgrim.esp`](../magic/MAGIC_014.md#r-cb687b2ac459)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-253379eecd80"></a>

## MAG_CultistVaermina

- Identidade estável Housecarl: `36CE21:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=36CE1E:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`36CE1E:Pilgrim.esp`](../magic/MAGIC_029.md#r-2342acc4ca4d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|200|
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

<a id="r-7ef9c423cf04"></a>

## MAG_CultistBoethiah

- Identidade estável Housecarl: `371F29:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0F3A38:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`0F3A38:Pilgrim.esp`](../magic/MAGIC_017.md#r-02f2ead10439)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0F3A3F:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`0F3A3F:Pilgrim.esp`](../magic/MAGIC_018.md#r-afed05dc578d)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|100|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-2c15525bda2f"></a>

## MAG_CultistSithis

- Identidade estável Housecarl: `371F30:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=371F2F:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`371F2F:Pilgrim.esp`](../magic/MAGIC_029.md#r-c9f893decd50)|
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

<a id="r-7820c45685b8"></a>

## MAG_CultistHircine

- Identidade estável Housecarl: `371F36:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=371F35:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`371F35:Pilgrim.esp`](../magic/MAGIC_029.md#r-7058db5a0aa7)|
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

<a id="r-fd79d6a53381"></a>

## MAG_CultistMannimarco

- Identidade estável Housecarl: `371F3D:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`065BD6:Skyrim.esm`](../magic/MAGIC_013.md#r-3ddbfbec5868)<br>Parameter1.Link=[`065BD6:Skyrim.esm`](../magic/MAGIC_013.md#r-3ddbfbec5868)|aliases=False; package=False|
|`Effects[1].Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`096D0B:Skyrim.esm`](../magic/MAGIC_015.md#r-695ccc48bc95)<br>Parameter1.Link=[`096D0B:Skyrim.esm`](../magic/MAGIC_015.md#r-695ccc48bc95)|aliases=False; package=False|
|`Effects[1].Conditions[2]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`096D0C:Skyrim.esm`](../magic/MAGIC_015.md#r-aaf105cf083c)<br>Parameter1.Link=[`096D0C:Skyrim.esm`](../magic/MAGIC_015.md#r-aaf105cf083c)|aliases=False; package=False|
|`Effects[1].Conditions[3]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`096D0D:Skyrim.esm`](../magic/MAGIC_015.md#r-a94c58c6d2fc)<br>Parameter1.Link=[`096D0D:Skyrim.esm`](../magic/MAGIC_015.md#r-a94c58c6d2fc)|aliases=False; package=False|
|`Effects[1].Conditions[4]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`07E8E0:Skyrim.esm`](../magic/MAGIC_014.md#r-dfb6c4c65175)<br>Parameter1.Link=[`07E8E0:Skyrim.esm`](../magic/MAGIC_014.md#r-dfb6c4c65175)|aliases=False; package=False|
|`Effects[2].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`065BD6:Skyrim.esm`](../magic/MAGIC_013.md#r-3ddbfbec5868)<br>Parameter1.Link=[`065BD6:Skyrim.esm`](../magic/MAGIC_013.md#r-3ddbfbec5868)|aliases=False; package=False|
|`Effects[2].Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`096D0B:Skyrim.esm`](../magic/MAGIC_015.md#r-695ccc48bc95)<br>Parameter1.Link=[`096D0B:Skyrim.esm`](../magic/MAGIC_015.md#r-695ccc48bc95)|aliases=False; package=False|
|`Effects[2].Conditions[2]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`096D0C:Skyrim.esm`](../magic/MAGIC_015.md#r-aaf105cf083c)<br>Parameter1.Link=[`096D0C:Skyrim.esm`](../magic/MAGIC_015.md#r-aaf105cf083c)|aliases=False; package=False|
|`Effects[2].Conditions[3]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`096D0D:Skyrim.esm`](../magic/MAGIC_015.md#r-a94c58c6d2fc)<br>Parameter1.Link=[`096D0D:Skyrim.esm`](../magic/MAGIC_015.md#r-a94c58c6d2fc)|aliases=False; package=False|
|`Effects[2].Conditions[4]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`07E8E0:Skyrim.esm`](../magic/MAGIC_014.md#r-dfb6c4c65175)<br>Parameter1.Link=[`07E8E0:Skyrim.esm`](../magic/MAGIC_014.md#r-dfb6c4c65175)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=371F3C:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`371F3C:Pilgrim.esp`](../magic/MAGIC_029.md#r-12c646fae2ca)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=377042:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`377042:Pilgrim.esp`](../magic/MAGIC_029.md#r-50818144ce23)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|150|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 5 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=377043:Pilgrim.esp|
|`Effects[2].BaseEffect`|[`377043:Pilgrim.esp`](../magic/MAGIC_029.md#r-9e92dd092bcf)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|25|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 5 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-85a4cc5a3c36"></a>

## VKR_Con_OblivionStone_Spell_CloakProc_2

- Identidade estável Housecarl: `372551:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`Effects[0].Data.Magnitude`|200|
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

<a id="r-92574b58c3c2"></a>

## VKR_Con_OblivionStone_Spell_Ab_2

- Identidade estável Housecarl: `372554:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=372553:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`372553:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_029.md#r-de65d6c63bd4)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|150|
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

<a id="r-842c41edb53e"></a>

## MAG_CultistClavicusVile

- Identidade estável Housecarl: `377048:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=377045:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`377045:Pilgrim.esp`](../magic/MAGIC_029.md#r-8e1909bc9447)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=37704C:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`37704C:Pilgrim.esp`](../magic/MAGIC_029.md#r-17b822799f72)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|100|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=37704D:Pilgrim.esp|
|`Effects[2].BaseEffect`|[`37704D:Pilgrim.esp`](../magic/MAGIC_029.md#r-cd8f79457c9a)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|100|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-047a885e7ed4"></a>

## MAG_CultistSheogorath

- Identidade estável Housecarl: `377051:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=37704E:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`37704E:Pilgrim.esp`](../magic/MAGIC_029.md#r-880abf55c4ea)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0D5429:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`0D5429:Pilgrim.esp`](../magic/MAGIC_016.md#r-1e7e94470291)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|200|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-02d8c5ef2271"></a>

## MAG_CultistNamira

- Identidade estável Housecarl: `381258:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`10F814:Skyrim.esm`](../magic/MAGIC_019.md#r-4f0de8500a39)<br>Parameter1.Link=[`10F814:Skyrim.esm`](../magic/MAGIC_019.md#r-4f0de8500a39)|aliases=False; package=False|
|`Effects[1].Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`10F812:Skyrim.esm`](../magic/MAGIC_019.md#r-ddb657428f21)<br>Parameter1.Link=[`10F812:Skyrim.esm`](../magic/MAGIC_019.md#r-ddb657428f21)|aliases=False; package=False|
|`Effects[2].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`10F814:Skyrim.esm`](../magic/MAGIC_019.md#r-4f0de8500a39)<br>Parameter1.Link=[`10F814:Skyrim.esm`](../magic/MAGIC_019.md#r-4f0de8500a39)|aliases=False; package=False|
|`Effects[2].Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`10F812:Skyrim.esm`](../magic/MAGIC_019.md#r-ddb657428f21)<br>Parameter1.Link=[`10F812:Skyrim.esm`](../magic/MAGIC_019.md#r-ddb657428f21)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=37C156:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`37C156:Pilgrim.esp`](../magic/MAGIC_029.md#r-ed1a7d5e65c5)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=38125C:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`38125C:Pilgrim.esp`](../magic/MAGIC_029.md#r-07fc5793727e)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|1|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=38125F:Pilgrim.esp|
|`Effects[2].BaseEffect`|[`38125F:Pilgrim.esp`](../magic/MAGIC_029.md#r-3ba381f03859)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|100|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-ebc0e70643cd"></a>

## MAG_CultistPeryite

- Identidade estável Housecarl: `38126C:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA129:Update.esm<br>Parameter1.Link=ADA129:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38126B:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38126B:Pilgrim.esp`](../magic/MAGIC_029.md#r-086bff1e0f7c)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0D5428:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`0D5428:Pilgrim.esp`](../magic/MAGIC_016.md#r-100ee3da8916)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|100|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=0D5427:Pilgrim.esp|
|`Effects[2].BaseEffect`|[`0D5427:Pilgrim.esp`](../magic/MAGIC_016.md#r-8b7d1c8da5cb)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|100|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=381278:Pilgrim.esp|
|`Effects[3].BaseEffect`|[`381278:Pilgrim.esp`](../magic/MAGIC_029.md#r-4de555270c66)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|100|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|0|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-2089e65308b1"></a>

## MAG_CultistMephala

- Identidade estável Housecarl: `386391:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38638F:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38638F:Pilgrim.esp`](../magic/MAGIC_030.md#r-968bb011d4a5)|
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

<a id="r-8abe4963a075"></a>

## MAG_CultistSanguine

- Identidade estável Housecarl: `386397:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F8A4E:Skyrim.esm<br>Parameter1.Link=0F8A4E:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F8A4E:Skyrim.esm<br>Parameter1.Link=0F8A4E:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA129:Update.esm<br>Parameter1.Link=ADA129:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=386396:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`386396:Pilgrim.esp`](../magic/MAGIC_030.md#r-fc9a8195ee71)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=38639B:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`38639B:Pilgrim.esp`](../magic/MAGIC_030.md#r-ca49dd9f51a5)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=38639C:Pilgrim.esp|
|`Effects[2].BaseEffect`|[`38639C:Pilgrim.esp`](../magic/MAGIC_030.md#r-c608ae4c28e7)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0.01|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=10CF50:Pilgrim.esp|
|`Effects[3].BaseEffect`|[`10CF50:Pilgrim.esp`](../magic/MAGIC_019.md#r-0f574e931bb0)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|100|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|0|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-b2ce9e35190a"></a>

## MAG_CultistNocturnal

- Identidade estável Housecarl: `38B4A5:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4A4:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4A4:Pilgrim.esp`](../magic/MAGIC_030.md#r-f87a8933c2c4)|
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

<a id="r-c2e540a912e1"></a>

## MAG_PilgrimTallPapa

- Identidade estável Housecarl: `38B4AA:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4A9:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4A9:Pilgrim.esp`](../magic/MAGIC_030.md#r-491745cd9da5)|
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
