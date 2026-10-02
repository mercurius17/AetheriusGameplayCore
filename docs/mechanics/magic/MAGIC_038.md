# Cadeias mágicas referenciadas — parte 038

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-28bcc846b5d4"></a>

## VKR_Bck_MockingBlow_Spell_ProcOnTarget

- Identidade estável Housecarl: `008B35:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=223FE3:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`223FE3:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-a87de788a6e3)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.2|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=4145CF:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`4145CF:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-6f938ac8bfc2)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0.2|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|5|
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

<a id="r-5a8bd9fcffd4"></a>

## VKR_Bck_ShieldCharge_Spell_Ab

- Identidade estável Housecarl: `0090AA:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsRidingMount|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1]`|IsSprinting|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[2]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0]`|IsRidingMount|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1]`|IsSprinting|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[2]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0090A7:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`0090A7:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_007.md#r-41e20ce4dc84)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|7|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0090A8:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`0090A8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_007.md#r-0190a86e4c55)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|15|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-a57f04c4ea0f"></a>

## VKR_Bck_ShieldCharge_Spell_CloakProc

- Identidade estável Housecarl: `0090AC:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0090A9:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`0090A9:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_007.md#r-376a55ba97ac)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.8|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0090B0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`0090B0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_007.md#r-74353ee42f40)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|10|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAbsorbOrReflect|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-9554ec936393"></a>

## VKR_Lia_Windrunner_Spell_Ab

- Identidade estável Housecarl: `009B89:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm<br>Parameter1.Link=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm<br>Parameter1.Link=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[3]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm<br>Parameter1.Link=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[4]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06C0EE:Skyrim.esm<br>Parameter1.Link=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[5]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`007AB5:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_053.md#r-d175b0dbe844)<br>Parameter1.Link=[`007AB5:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_053.md#r-d175b0dbe844)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=009B84:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`009B84:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_007.md#r-373eb4c73c24)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 6 item(s)]|
|`Flags`|3473408|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-5eefbb32bff6"></a>

## VKR_Bck_DragonTail_Spell_ProcOnTarget

- Identidade estável Housecarl: `00A666:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00A668:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`00A668:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_007.md#r-0621b458f8e7)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.75|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=2DF674:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`2DF674:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_024.md#r-10e5938c5bf7)|
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

<a id="r-23ff29114491"></a>

## DLC1VampireRaiseDeadLeftHand01

- Identidade estável Housecarl: `00BA54:Dawnguard.esm`.
- Tipo: `Spell`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00D3C1:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`00D3C1:Dawnguard.esm`](../magic/MAGIC_007.md#r-40817204bb97)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|8|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0F52AB:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0F52AB:Skyrim.esm`](../magic/MAGIC_018.md#r-18af3b727e0b)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|50|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-cd5ae2a98dc0"></a>

## DLC1RevertForm

- Identidade estável Housecarl: `00CD5C:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00CD5B:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`00CD5B:Dawnguard.esm`](../magic/MAGIC_007.md#r-e0b3d1fcb284)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|7|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|LesserPower|
|`CastDuration`|0|
|`Range`|0|

<a id="r-634c4a7cb749"></a>

## BVNPCVampireRankMistFormSpell

- Identidade estável Housecarl: `00CE0E:Better Vampire NPCs.esp`.
- Tipo: `Spell`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00F5B6:Better Vampire NPCs.esp|
|`Effects[0].BaseEffect`|[`00F5B6:Better Vampire NPCs.esp`](../magic/MAGIC_008.md#r-060f99360107)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=00F5B4:Better Vampire NPCs.esp|
|`Effects[1].BaseEffect`|[`00F5B4:Better Vampire NPCs.esp`](../magic/MAGIC_008.md#r-192aa1bb3c11)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=00F5B7:Better Vampire NPCs.esp|
|`Effects[2].BaseEffect`|[`00F5B7:Better Vampire NPCs.esp`](../magic/MAGIC_008.md#r-ea6b5cf9a207)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|1|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|60|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=00F5B8:Better Vampire NPCs.esp|
|`Effects[3].BaseEffect`|[`00F5B8:Better Vampire NPCs.esp`](../magic/MAGIC_008.md#r-74729582be2e)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|0|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|60|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|025BEE:Skyrim.esm|
|`BaseCost`|21|
|`ChargeTime`|1|
|`Type`|LesserPower|
|`CastDuration`|0|
|`Range`|0|

<a id="r-17954155afdf"></a>

## DLC1VampireGripDmg

- Identidade estável Housecarl: `00E7DA:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00E7E8:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`00E7E8:Dawnguard.esm`](../magic/MAGIC_008.md#r-aa206498370d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-0b25150896ac"></a>

## GRIM_SPELL_CON_BoundShield_bash

- Identidade estável Housecarl: `0106BF:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire_Vokrii_Patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasPerk|record|Reference; ref=000014:Skyrim.esm; index=-1|EqualTo 1|0|Perk=[`0D799C:Skyrim.esm`](../perks/PERKS_049.md#r-3cedbc8585b1)<br>Parameter1.Link=[`0D799C:Skyrim.esm`](../perks/PERKS_049.md#r-3cedbc8585b1)|aliases=False; package=False|
|`Effects[1].Conditions[0]`|HasPerk|record|Reference; ref=000014:Skyrim.esm; index=-1|EqualTo 1|0|Perk=[`0D799E:Skyrim.esm`](../perks/PERKS_049.md#r-c33f5e7e5058)<br>Parameter1.Link=[`0D799E:Skyrim.esm`](../perks/PERKS_049.md#r-c33f5e7e5058)|aliases=False; package=False|
|`Effects[2].Conditions[0]`|HasPerk|record|Reference; ref=000014:Skyrim.esm; index=-1|EqualTo 1|0|Perk=[`0D799C:Skyrim.esm`](../perks/PERKS_049.md#r-3cedbc8585b1)<br>Parameter1.Link=[`0D799C:Skyrim.esm`](../perks/PERKS_049.md#r-3cedbc8585b1)|aliases=False; package=False|
|`Effects[8].Conditions[0]`|GetActorValue|record|Subject; ref=(null link); index=-1|LessThan 1|0|ActorValue=Magicka<br>Parameter1=Magicka|aliases=False; package=False|
|`Effects[8].Conditions[1]`|GetActorValue|record|Subject; ref=(null link); index=-1|LessThan 1|0|ActorValue=Stamina<br>Parameter1=Stamina|aliases=False; package=False|
|`Effects[9].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`3D28A6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-5d5931ab3d30)<br>Parameter1.Link=[`3D28A6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-5d5931ab3d30)|aliases=False; package=False|
|`Effects[10].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`3D28A7:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-9f2b2017b7cd)<br>Parameter1.Link=[`3D28A7:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-9f2b2017b7cd)|aliases=False; package=False|
|`Effects[11].Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`3D28A8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-f6aa7f8c8519)<br>Parameter1.Link=[`3D28A8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-f6aa7f8c8519)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 12 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0D799D:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0D799D:Skyrim.esm`](../magic/MAGIC_016.md#r-93993459a2b3)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|99|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0D799F:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0D799F:Skyrim.esm`](../magic/MAGIC_017.md#r-23d878dbdaaa)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|5|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=0E826D:Skyrim.esm|
|`Effects[2].BaseEffect`|[`0E826D:Skyrim.esm`](../magic/MAGIC_017.md#r-12eb6ca68fbd)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|99|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|30|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=018FB5:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].BaseEffect`|[`018FB5:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_009.md#r-a7c3f3ae0a3c)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|99|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|0|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Effects[4]`|[Effect] BaseEffect=017A07:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].BaseEffect`|[`017A07:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_008.md#r-920ce2e7150a)|
|`Effects[4].Data`|[EffectData]|
|`Effects[4].Data.Magnitude`|100|
|`Effects[4].Data.Area`|0|
|`Effects[4].Data.Duration`|0|
|`Effects[4].Conditions`|[list: 0 item(s)]|
|`Effects[5]`|[Effect] BaseEffect=017F7B:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].BaseEffect`|[`017F7B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_008.md#r-4fc43c0f007a)|
|`Effects[5].Data`|[EffectData]|
|`Effects[5].Data.Magnitude`|25|
|`Effects[5].Data.Area`|0|
|`Effects[5].Data.Duration`|5|
|`Effects[5].Conditions`|[list: 0 item(s)]|
|`Effects[6]`|[Effect] BaseEffect=0CC816:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[6].BaseEffect`|[`0CC816:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_016.md#r-a3ef02172b05)|
|`Effects[6].Data`|[EffectData]|
|`Effects[6].Data.Magnitude`|30|
|`Effects[6].Data.Area`|0|
|`Effects[6].Data.Duration`|5|
|`Effects[6].Conditions`|[list: 0 item(s)]|
|`Effects[7]`|[Effect] BaseEffect=017F70:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[7].BaseEffect`|[`017F70:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_008.md#r-b08f2013e27b)|
|`Effects[7].Data`|[EffectData]|
|`Effects[7].Data.Magnitude`|30|
|`Effects[7].Data.Area`|0|
|`Effects[7].Data.Duration`|5|
|`Effects[7].Conditions`|[list: 0 item(s)]|
|`Effects[8]`|[Effect] BaseEffect=017F71:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[8].BaseEffect`|[`017F71:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_008.md#r-f52070ae5878)|
|`Effects[8].Data`|[EffectData]|
|`Effects[8].Data.Magnitude`|30|
|`Effects[8].Data.Area`|0|
|`Effects[8].Data.Duration`|5|
|`Effects[8].Conditions`|[list: 2 item(s)]|
|`Effects[9]`|[Effect] BaseEffect=31C321:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[9].BaseEffect`|[`31C321:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_025.md#r-98642ddb6379)|
|`Effects[9].Data`|[EffectData]|
|`Effects[9].Data.Magnitude`|50|
|`Effects[9].Data.Area`|0|
|`Effects[9].Data.Duration`|0|
|`Effects[9].Conditions`|[list: 1 item(s)]|
|`Effects[10]`|[Effect] BaseEffect=31C323:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[10].BaseEffect`|[`31C323:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_025.md#r-32217eaf06e5)|
|`Effects[10].Data`|[EffectData]|
|`Effects[10].Data.Magnitude`|50|
|`Effects[10].Data.Area`|0|
|`Effects[10].Data.Duration`|0|
|`Effects[10].Conditions`|[list: 1 item(s)]|
|`Effects[11]`|[Effect] BaseEffect=31C324:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[11].BaseEffect`|[`31C324:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_025.md#r-bac2413e9ef1)|
|`Effects[11].Data`|[EffectData]|
|`Effects[11].Data.Magnitude`|50|
|`Effects[11].Data.Area`|0|
|`Effects[11].Data.Duration`|0|
|`Effects[11].Conditions`|[list: 1 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|1|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-c5c9758247c3"></a>

## DLC1BatsDmg

- Identidade estável Housecarl: `0126B7:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0126B6:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`0126B6:Dawnguard.esm`](../magic/MAGIC_008.md#r-13a86ebef613)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|4|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|7|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-1aafa50401f4"></a>

## DLC1VampireChangeStagger

- Identidade estável Housecarl: `012D18:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=012D17:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`012D17:Dawnguard.esm`](../magic/MAGIC_008.md#r-6514d57bf9ed)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.5|
|`Effects[0].Data.Area`|10|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|AreaEffectIgnoresLOS, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-c9f9a141516a"></a>

## DLC1VampireRaiseDeadLeftHand02

- Identidade estável Housecarl: `013EC8:Dawnguard.esm`.
- Tipo: `Spell`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00D3C1:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`00D3C1:Dawnguard.esm`](../magic/MAGIC_007.md#r-40817204bb97)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|16|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0F52AB:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0F52AB:Skyrim.esm`](../magic/MAGIC_018.md#r-18af3b727e0b)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|50|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-cfbbb4195688"></a>

## DLC1VampireRaiseDeadLeftHand03

- Identidade estável Housecarl: `013EC9:Dawnguard.esm`.
- Tipo: `Spell`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00D3C1:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`00D3C1:Dawnguard.esm`](../magic/MAGIC_007.md#r-40817204bb97)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|24|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0F52AB:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0F52AB:Skyrim.esm`](../magic/MAGIC_018.md#r-18af3b727e0b)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|50|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-8c8e05c7aa52"></a>

## DLC1VampireRaiseDeadLeftHand04

- Identidade estável Housecarl: `013ECA:Dawnguard.esm`.
- Tipo: `Spell`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00D3C1:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`00D3C1:Dawnguard.esm`](../magic/MAGIC_007.md#r-40817204bb97)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|30|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0F52AB:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0F52AB:Skyrim.esm`](../magic/MAGIC_018.md#r-18af3b727e0b)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|50|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-b310c9f497c5"></a>

## DLC1VampireRaiseDeadLeftHand05

- Identidade estável Housecarl: `013ECB:Dawnguard.esm`.
- Tipo: `Spell`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00D3C1:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`00D3C1:Dawnguard.esm`](../magic/MAGIC_007.md#r-40817204bb97)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|36|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0F52AB:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0F52AB:Skyrim.esm`](../magic/MAGIC_018.md#r-18af3b727e0b)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|50|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-113c84e747f5"></a>

## MAG_AetherialShieldSpell

- Identidade estável Housecarl: `0142AD:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Artificer.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=00CFA6:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`00CFA6:Dawnguard.esm`](../magic/MAGIC_007.md#r-2bb04a4bd60c)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|10|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=00092C:Artificer.esp|
|`Effects[1].BaseEffect`|[`00092C:Artificer.esp`](../magic/MAGIC_006.md#r-a62fad08f9e7)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|30|
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

<a id="r-eac3c8afb35f"></a>

## VKR_Res_MageWard_Spell_Ab

- Identidade estável Housecarl: `014914:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01EA69:Skyrim.esm<br>Parameter1.Link=01EA69:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1]`|IsCasting|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[2]`|IsDualCasting|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[3]`|GetGraphVariableInt|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|GraphVariable=bRitualSpellActive<br>StringParameter1=bRitualSpellActive<br>Parameter2=bRitualSpellActive|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=014916:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`014916:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_008.md#r-24701d1cb114)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|200|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 4 item(s)]|
|`Flags`|NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|42|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-a1a48c2b8684"></a>

## DLC1crFalmerPoisonedWeapon06

- Identidade estável Housecarl: `015CAD:Dawnguard.esm`.
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

<a id="r-2d0f558bab72"></a>

## VKR_Con_GhoulFrenzy_Spell_ProcOnTarget

- Identidade estável Housecarl: `015ECC:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 6 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=015ECE:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`015ECE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_008.md#r-17b943e68db5)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1.5|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=015ECE:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`015ECE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_008.md#r-17b943e68db5)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0.25|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|45|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=015ECE:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].BaseEffect`|[`015ECE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_008.md#r-17b943e68db5)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0.25|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|30|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=251987:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].BaseEffect`|[`251987:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-b45d66b7ec78)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|16.67|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|60|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Effects[4]`|[Effect] BaseEffect=251987:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].BaseEffect`|[`251987:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-b45d66b7ec78)|
|`Effects[4].Data`|[EffectData]|
|`Effects[4].Data.Magnitude`|16.67|
|`Effects[4].Data.Area`|0|
|`Effects[4].Data.Duration`|45|
|`Effects[4].Conditions`|[list: 0 item(s)]|
|`Effects[5]`|[Effect] BaseEffect=251987:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].BaseEffect`|[`251987:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-b45d66b7ec78)|
|`Effects[5].Data`|[EffectData]|
|`Effects[5].Data.Magnitude`|16.67|
|`Effects[5].Data.Area`|0|
|`Effects[5].Data.Duration`|30|
|`Effects[5].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-cb0622d598cd"></a>

## DLC1ConjureGargoyleLeftHand

- Identidade estável Housecarl: `016909:Dawnguard.esm`.
- Tipo: `Spell`; winner: `Curse of the Vampire.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=016906:Dawnguard.esm|
|`Effects[0].BaseEffect`|[`016906:Dawnguard.esm`](../magic/MAGIC_008.md#r-a29e3cdb4f9c)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`EquipmentType`|013F43:Skyrim.esm|
|`BaseCost`|70|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|24|

<a id="r-2edafc40fc6e"></a>

## BVNPCDiseaseSanguinareVampiris

- Identidade estável Housecarl: `016C9F:Better Vampire NPCs.esp`.
- Tipo: `Spell`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=016C9D:Better Vampire NPCs.esp|
|`Effects[0].BaseEffect`|[`016C9D:Better Vampire NPCs.esp`](../magic/MAGIC_008.md#r-b7604bbddf74)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|ConstantEffect|
|`TargetType`|Touch|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Disease|
|`CastDuration`|0|
|`Range`|0|

<a id="r-693baec8aabe"></a>

## MAG_DBAncientFullSet

- Identidade estável Housecarl: `01711D:Skyrim.esm`.
- Tipo: `Spell`; winner: `Artificer.esp`; profundidade de override: 3.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetEquipped|record|Subject; ref=(null link); index=-1|EqualTo 1|0|ItemOrList=0E1F14:Skyrim.esm<br>Parameter1.Link=0E1F14:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetEquipped|record|Subject; ref=(null link); index=-1|EqualTo 1|0|ItemOrList=0E1F16:Skyrim.esm<br>Parameter1.Link=0E1F16:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2]`|GetEquipped|record|Subject; ref=(null link); index=-1|EqualTo 1|0|ItemOrList=0E1F17:Skyrim.esm<br>Parameter1.Link=0E1F17:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[3]`|GetEquipped|record|Subject; ref=(null link); index=-1|EqualTo 1|0|ItemOrList=0E1F15:Skyrim.esm<br>Parameter1.Link=0E1F15:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=3583F3:Thaumaturgy.esp|
|`Effects[0].BaseEffect`|[`3583F3:Thaumaturgy.esp`](../magic/MAGIC_027.md#r-af7e18bead74)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 4 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-ba53b025915d"></a>

## MAG_TGFullSet

- Identidade estável Housecarl: `01711F:Skyrim.esm`.
- Tipo: `Spell`; winner: `Artificer.esp`; profundidade de override: 3.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|WornApparelHasKeywordCount|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|0|Keyword=10FD61:Skyrim.esm<br>Parameter1.Link=10FD61:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=19F7B9:Thaumaturgy.esp|
|`Effects[0].BaseEffect`|[`19F7B9:Thaumaturgy.esp`](../magic/MAGIC_020.md#r-f8eb9c0085f1)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-82d00e2fde91"></a>

## MAG_AshForm

- Identidade estável Housecarl: `017731:Dragonborn.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=017732:Dragonborn.esm|
|`Effects[0].BaseEffect`|[`017732:Dragonborn.esm`](../magic/MAGIC_008.md#r-aaf0ed4ac6ec)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|257|
|`ChargeTime`|0.5|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44B8:Skyrim.esm`](../perks/PERKS_046.md#r-1cf1b8b5f298)|
|`CastDuration`|0|
|`Range`|0|
