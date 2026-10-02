# Cadeias mágicas referenciadas — parte 037

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-a6de73a969b4"></a>

## Simple_NecromanticRitual

- Identidade estável Housecarl: `0008FB:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Spell`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0008FA:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[0].BaseEffect`|[`0008FA:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_006.md#r-aee1bc14b5ea)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|200|
|`Effects[0].Data.Area`|75|
|`Effects[0].Data.Duration`|200|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, AreaEffectIgnoresLOS, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F45:Skyrim.esm|
|`BaseCost`|2000|
|`ChargeTime`|6|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44BE:Skyrim.esm`](../perks/PERKS_049.md#r-bafe0e87a888)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-d332c36fc5d0"></a>

## MAG_DawnguardRuneAxeCounterSpell

- Identidade estável Housecarl: `000919:Artificer.esp`.
- Tipo: `Spell`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00091A:Artificer.esp|
|`Effects[0].BaseEffect`|[`00091A:Artificer.esp`](../magic/MAGIC_006.md#r-49dce859c6bf)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|5|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-88dff6cf9578"></a>

## MAG_DawnguardRuneShieldSpell01

- Identidade estável Housecarl: `000927:Artificer.esp`.
- Tipo: `Spell`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000928:Artificer.esp|
|`Effects[0].BaseEffect`|[`000928:Artificer.esp`](../magic/MAGIC_006.md#r-8598866a7dfe)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|8|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|10|
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

<a id="r-1498c2ec5747"></a>

## Simple_DrevisDremoraIllusion

- Identidade estável Housecarl: `000958:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Spell`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000957:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[0].BaseEffect`|[`000957:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_006.md#r-e9f3b04f88d8)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|86313600|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|ConstantEffect|
|`TargetType`|TargetLocation|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|45|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|24|

<a id="r-dbcdfd92543e"></a>

## Simple_EnthirSkeletonIllusion

- Identidade estável Housecarl: `000959:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Spell`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000956:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[0].BaseEffect`|[`000956:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_006.md#r-e40ab363b00e)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|86313600|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|ConstantEffect|
|`TargetType`|TargetLocation|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|45|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|24|

<a id="r-7dfc6d83aebc"></a>

## Simple_OnmundWolfIllusion

- Identidade estável Housecarl: `00095A:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Spell`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000953:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[0].BaseEffect`|[`000953:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_006.md#r-78156f4e3a02)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|86313600|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|ConstantEffect|
|`TargetType`|TargetLocation|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|45|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|24|

<a id="r-938a5a575802"></a>

## MAG_BowoftheStagPrinceCounterSpell

- Identidade estável Housecarl: `00097E:Artificer.esp`.
- Tipo: `Spell`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00097D:Artificer.esp|
|`Effects[0].BaseEffect`|[`00097D:Artificer.esp`](../magic/MAGIC_006.md#r-0b2a5b908507)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|5|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-99839874a6d5"></a>

## Simple_WaterwalkingSpellConstant

- Identidade estável Housecarl: `00099E:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Spell`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsSwimming|record|Subject; ref=(null link); index=-1|EqualTo 0|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00099D:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[0].BaseEffect`|[`00099D:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_006.md#r-d640d37f3938)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|220|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-01f1bcf2ab1a"></a>

## Simple_DrainBoltVLSpell

- Identidade estável Housecarl: `000A92:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `Spell`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000A91:PuddingFace_SimpleSpellsPackage.esp|
|`Effects[0].BaseEffect`|[`000A91:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_007.md#r-50f7bfd97e60)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-fa65b8aaeea8"></a>

## InvisibilityCeykynd

- Identidade estável Housecarl: `000EDF:CeykyndArmor.esp`.
- Tipo: `Spell`; winner: `CeykyndArmor.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsAttacking|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000EEC:CeykyndArmor.esp|
|`Effects[0].BaseEffect`|[`000EEC:CeykyndArmor.esp`](../magic/MAGIC_007.md#r-6af0b9bae641)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-c8427d084710"></a>

## DLC1VampireChangeFX

- Identidade estável Housecarl: `00283D:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00283E:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`00283E:Dawnguard.esm`](../magic/MAGIC_007.md#r-8fcccd352176)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|6|
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

<a id="r-14a335991d4b"></a>

## MAG_StendarrsAura

- Identidade estável Housecarl: `0038B5:Dawnguard.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`008A5C:Dawnguard.esm`](../magic/MAGIC_007.md#r-f4201f36c953)<br>Parameter1.Link=[`008A5C:Dawnguard.esm`](../magic/MAGIC_007.md#r-f4201f36c953)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=008A5C:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`008A5C:Dawnguard.esm`](../magic/MAGIC_007.md#r-f4201f36c953)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|8|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=00A3B9:Dawnguard.esm|
|`Effects[1].BaseEffect`|[`00A3B9:Dawnguard.esm`](../magic/MAGIC_007.md#r-1bd1b949e0b9)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=D4B030:MysticismMagic.esp|
|`Effects[2].BaseEffect`|[`D4B030:MysticismMagic.esp`](../magic/MAGIC_034.md#r-f44a60a6fe20)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0.01|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|60|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|252|
|`ChargeTime`|1|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44C8:Skyrim.esm`](../perks/PERKS_057.md#r-7576fdc84d0d)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-ead415161d6e"></a>

## DLC1VampiresGrip

- Identidade estável Housecarl: `0038B7:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=007EBD:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`007EBD:Dawnguard.esm`](../magic/MAGIC_007.md#r-5eaf11c82e78)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=00E7D7:Dawnguard.esm|
|`Effects[1].BaseEffect`|[`00E7D7:Dawnguard.esm`](../magic/MAGIC_008.md#r-678564ca0aba)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|15|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|Concentration|
|`TargetType`|Self|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|64|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-81ac7dec4ecf"></a>

## DLC1VampireDetectLife

- Identidade estável Housecarl: `0038B8:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=010A80:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`010A80:Dawnguard.esm`](../magic/MAGIC_008.md#r-14364f44e2f7)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|200|
|`Effects[0].Data.Duration`|2|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=010A7F:Dawnguard.esm|
|`Effects[1].BaseEffect`|[`010A7F:Dawnguard.esm`](../magic/MAGIC_008.md#r-3bbda91d0698)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|20|
|`Effects[1].Data.Area`|100|
|`Effects[1].Data.Duration`|2|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, AreaEffectIgnoresLOS|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|5|
|`ChargeTime`|0|
|`Type`|LesserPower|
|`CastDuration`|0|
|`Range`|0|

<a id="r-706e037cb927"></a>

## DLC1VampireBats

- Identidade estável Housecarl: `0038B9:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Curse of the Vampire.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`29CA5F:Curse of the Vampire.esp`](../magic/MAGIC_023.md#r-6f4c0ffe248c)<br>Parameter1.Link=[`29CA5F:Curse of the Vampire.esp`](../magic/MAGIC_023.md#r-6f4c0ffe248c)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=107951:Curse of the Vampire.esp|
|`Effects[0].BaseEffect`|[`107951:Curse of the Vampire.esp`](../magic/MAGIC_018.md#r-e791c905a008)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|5|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=29CA5F:Curse of the Vampire.esp|
|`Effects[1].BaseEffect`|[`29CA5F:Curse of the Vampire.esp`](../magic/MAGIC_023.md#r-6f4c0ffe248c)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|5|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|LesserPower|
|`CastDuration`|0|
|`Range`|0|

<a id="r-7f2a77556181"></a>

## DLC1VampireMistform

- Identidade estável Housecarl: `0038BA:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Curse of the Vampire.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 5 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0DF140:Curse of the Vampire.esp|
|`Effects[0].BaseEffect`|[`0DF140:Curse of the Vampire.esp`](../magic/MAGIC_017.md#r-064396eada3b)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|10|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0E4242:Curse of the Vampire.esp|
|`Effects[1].BaseEffect`|[`0E4242:Curse of the Vampire.esp`](../magic/MAGIC_017.md#r-1c014e443b10)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|10|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=0DF141:Curse of the Vampire.esp|
|`Effects[2].BaseEffect`|[`0DF141:Curse of the Vampire.esp`](../magic/MAGIC_017.md#r-97c14171802b)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|10|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=2468F0:Curse of the Vampire.esp|
|`Effects[3].BaseEffect`|[`2468F0:Curse of the Vampire.esp`](../magic/MAGIC_022.md#r-b4b5c28d7ff0)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|0|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|10|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Effects[4]`|[Effect] BaseEffect=19F778:Curse of the Vampire.esp|
|`Effects[4].BaseEffect`|[`19F778:Curse of the Vampire.esp`](../magic/MAGIC_020.md#r-49cd285d5bcd)|
|`Effects[4].Data`|[EffectData]|
|`Effects[4].Data.Magnitude`|0|
|`Effects[4].Data.Area`|0|
|`Effects[4].Data.Duration`|30|
|`Effects[4].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|LesserPower|
|`CastDuration`|0|
|`Range`|0|

<a id="r-30bf4df8462d"></a>

## DLC1SupernaturalReflexes

- Identidade estável Housecarl: `0038BC:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=01A30D:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`01A30D:Dawnguard.esm`](../magic/MAGIC_009.md#r-e37c357be61d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.4|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|15|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|75|
|`ChargeTime`|0|
|`Type`|LesserPower|
|`CastDuration`|0|
|`Range`|0|

<a id="r-93e77c1dc062"></a>

## MAG_ConjureWrathman

- Identidade estável Housecarl: `0045B3:Dawnguard.esm`.
- Tipo: `Spell`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 4.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0045B5:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`0045B5:Dawnguard.esm`](../magic/MAGIC_007.md#r-d4d6658b5f00)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`EquipmentType`|013F45:Skyrim.esm|
|`BaseCost`|661|
|`ChargeTime`|6|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44BE:Skyrim.esm`](../perks/PERKS_049.md#r-bafe0e87a888)|
|`CastDuration`|0|
|`Range`|24|

<a id="r-9d02dd719511"></a>

## MAG_ConjureMistman

- Identidade estável Housecarl: `0045B8:Dawnguard.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0045BB:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`0045BB:Dawnguard.esm`](../magic/MAGIC_007.md#r-9739f0482799)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|358|
|`ChargeTime`|1|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44BD:Skyrim.esm`](../perks/PERKS_049.md#r-3595777cbcf1)|
|`CastDuration`|0|
|`Range`|24|

<a id="r-11db9f93aa52"></a>

## MAG_ConjureBoneman

- Identidade estável Housecarl: `0045BA:Dawnguard.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0045BC:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`0045BC:Dawnguard.esm`](../magic/MAGIC_007.md#r-840cee76bc72)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|237|
|`ChargeTime`|1|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44BC:Skyrim.esm`](../perks/PERKS_049.md#r-5c66b51aba5a)|
|`CastDuration`|0|
|`Range`|24|

<a id="r-402c2e3f37cd"></a>

## DLC1nVampireBatsAmuletSpell

- Identidade estável Housecarl: `0068B2:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0068B3:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`0068B3:Dawnguard.esm`](../magic/MAGIC_007.md#r-7bc212705529)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|15|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|2|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-89667d4d09e1"></a>

## DLC1nVampireBatsAmuletSpellDMG

- Identidade estável Housecarl: `0068B4:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0068B5:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`0068B5:Dawnguard.esm`](../magic/MAGIC_007.md#r-827661bee177)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|5|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|18|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-1b8e1783444f"></a>

## VKR_Hea_HeavyArmorOnHitProc_Spell_ProcOnTarget_PowerAttack

- Identidade estável Housecarl: `008033:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0DD7FC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`0DD7FC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_017.md#r-0ddc90501b72)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0DD7FB:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`0DD7FB:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_017.md#r-eb179a205b73)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0.75|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=2C103A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].BaseEffect`|[`2C103A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_024.md#r-6efcb408c9c2)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|5|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|3473408|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-f30e122f0971"></a>

## MAG_StendarrsAuraDmg

- Identidade estável Housecarl: `008A60:Dawnguard.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=FB4DDD:MysticismMagic.esp|
|`Effects[0].BaseEffect`|[`FB4DDD:MysticismMagic.esp`](../magic/MAGIC_034.md#r-02ae92023082)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|8|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|9|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-e4daa4dd70bb"></a>

## DLC1CorpseCurseLeftHand

- Identidade estável Housecarl: `008A6F:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00D3C0:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`00D3C0:Dawnguard.esm`](../magic/MAGIC_007.md#r-0087e02a70d6)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|10|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0A44C0:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0A44C0:Skyrim.esm`](../magic/MAGIC_015.md#r-98824fa35ea7)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|100|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|100|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|
