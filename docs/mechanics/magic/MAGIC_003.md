# Cadeias mágicas referenciadas — parte 003

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-562f0596e885"></a>

## MAG_WWFortifyHealRate

- Identidade estável Housecarl: `00081D:Manbeast.esp`.
- Tipo: `MagicEffect`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|HealRate|
|`Flags`|Recover, NoDuration, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-40395f5f2ce2"></a>

## MAG_LoverDoomStoneEffect01

- Identidade estável Housecarl: `00081D:Mundus.esp`.
- Tipo: `MagicEffect`; winner: `Mundus.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|StaminaRate|
|`Flags`|Recover, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-86dd75aaa940"></a>

## FollowupStikeController

- Identidade estável Housecarl: `00081E:For Honor Balance Patch.esp`.
- Tipo: `MagicEffect`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|000886:For Honor Balance Patch.esp|

<a id="r-3f0265ad6e90"></a>

## MAG_WWFortifyAttackSpeedRight

- Identidade estável Housecarl: `00081E:Manbeast.esp`.
- Tipo: `MagicEffect`; winner: `Manbeast.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|WeaponSpeedMult|
|`Flags`|Recover, NoDuration, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-a2dfc462e22f"></a>

## ccVSVSSE003_MGEF_Skeleton_warrior

- Identidade estável Housecarl: `00081E:ccvsvsse003-necroarts.esl`.
- Tipo: `MagicEffect`; winner: `ccvsvsse003-necroarts.esl`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)<br>Parameter1.Link=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=0008A2:ccvsvsse003-necroarts.esl|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|0008A2:ccvsvsse003-necroarts.esl|
|`Archetype.Association`|0008A2:ccvsvsse003-necroarts.esl|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|7.5|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|

<a id="r-00de35c9bb09"></a>

## MAG_TowerDoomStoneEffect02

- Identidade estável Housecarl: `00081F:Mundus.esp`.
- Tipo: `MagicEffect`; winner: `Mundus.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|ReflectDamage|
|`Flags`|Recover, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-cab3f6a89e19"></a>

## MAG_SerpentDoomStoneEffect03

- Identidade estável Housecarl: `000820:Mundus.esp`.
- Tipo: `MagicEffect`; winner: `Mundus.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|AlchemyModifier|
|`Flags`|Recover, NoArea, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-0e90c4846fc0"></a>

## EmpoweredRightHeavyEnemyPurge

- Identidade estável Housecarl: `000820:Reforged Directional Combat.esp`.
- Tipo: `MagicEffect`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000801:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-5642ec348750)<br>Parameter1.Link=[`000801:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-5642ec348750)|aliases=False; package=False|
|`Conditions[1]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, DispelWithKeywords|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|000809:Reforged Directional Combat.esp|
|`Keywords[1]`|000837:Reforged Directional Combat.esp|

<a id="r-9268e4b3b0c9"></a>

## MAG_SerpentDoomStoneEffect01

- Identidade estável Housecarl: `000821:Mundus.esp`.
- Tipo: `MagicEffect`; winner: `Mundus.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|PoisonResist|
|`Flags`|Recover, NoArea|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-b288baf37b4e"></a>

## EmpoweredLeftHeavyEnemyPurge

- Identidade estável Housecarl: `000821:Reforged Directional Combat.esp`.
- Tipo: `MagicEffect`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000802:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-34e631296bf2)<br>Parameter1.Link=[`000802:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-34e631296bf2)|aliases=False; package=False|
|`Conditions[1]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, DispelWithKeywords|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|00080C:Reforged Directional Combat.esp|
|`Keywords[1]`|000837:Reforged Directional Combat.esp|

<a id="r-a541d6903601"></a>

## MAG_ShadowDoomStoneEffect03

- Identidade estável Housecarl: `000822:Mundus.esp`.
- Tipo: `MagicEffect`; winner: `Mundus.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|SpeedMult|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-52d8df46afbc"></a>

## EmpoweredRightLightEnemyPurge

- Identidade estável Housecarl: `000823:Reforged Directional Combat.esp`.
- Tipo: `MagicEffect`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000804:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-f4cde1b4c424)<br>Parameter1.Link=[`000804:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-f4cde1b4c424)|aliases=False; package=False|
|`Conditions[1]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Hostile, Detrimental, DispelWithKeywords|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|00080F:Reforged Directional Combat.esp|
|`Keywords[1]`|000837:Reforged Directional Combat.esp|

<a id="r-aa3e06362d9f"></a>

## MAG_ShadowDoomStoneEffect04

- Identidade estável Housecarl: `000824:Mundus.esp`.
- Tipo: `MagicEffect`; winner: `Mundus.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|CarryWeight|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-535cc3f23b2f"></a>

## EmpoweredLeftLightEnemyPurge

- Identidade estável Housecarl: `000824:Reforged Directional Combat.esp`.
- Tipo: `MagicEffect`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000805:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-458736806775)<br>Parameter1.Link=[`000805:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-458736806775)|aliases=False; package=False|
|`Conditions[1]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Hostile, Detrimental, DispelWithKeywords|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|000810:Reforged Directional Combat.esp|
|`Keywords[1]`|000837:Reforged Directional Combat.esp|

<a id="r-ec66affdc6b1"></a>

## MAG_SerpentDoomStoneEffect02

- Identidade estável Housecarl: `000825:Mundus.esp`.
- Tipo: `MagicEffect`; winner: `Mundus.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|AlchemySkillAdvance|
|`Flags`|Recover, NoArea, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-411c2612f089"></a>

## MAG_ShadowDoomStoneEffect02

- Identidade estável Housecarl: `000826:Mundus.esp`.
- Tipo: `MagicEffect`; winner: `Mundus.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|SneakingSkillAdvance|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-c8e076a10b97"></a>

## MAG_LadyDoomStoneEffect04

- Identidade estável Housecarl: `000827:Mundus.esp`.
- Tipo: `MagicEffect`; winner: `Mundus.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|HealRateMult|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-35e22090e2d3"></a>

## MAG_ShadowDoomStoneEffect05

- Identidade estável Housecarl: `000828:Mundus.esp`.
- Tipo: `MagicEffect`; winner: `Mundus.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-b70abd5b7adc"></a>

## WeaponParryTrigger

- Identidade estável Housecarl: `00082A:For Honor Balance Patch.esp`.
- Tipo: `MagicEffect`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000810:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-32e14fc0e619)<br>Parameter1.Link=[`000810:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-32e14fc0e619)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`000874:For Honor Balance Patch.esp`](../magic/MAGIC_004.md#r-303c1d920eb7)<br>Parameter1.Link=[`000874:For Honor Balance Patch.esp`](../magic/MAGIC_004.md#r-303c1d920eb7)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoArea, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|000886:For Honor Balance Patch.esp|

<a id="r-c4af955d4bb5"></a>

## ccVSVSSE003_MGEF_Skeleton_archer

- Identidade estável Housecarl: `00082A:ccvsvsse003-necroarts.esl`.
- Tipo: `MagicEffect`; winner: `ccvsvsse003-necroarts.esl`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)<br>Parameter1.Link=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=0008A1:ccvsvsse003-necroarts.esl|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|0008A1:ccvsvsse003-necroarts.esl|
|`Archetype.Association`|0008A1:ccvsvsse003-necroarts.esl|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|9.25|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|

<a id="r-6346f832a9d1"></a>

## MA_OnHit_T

- Identidade estável Housecarl: `00082E:For Honor in Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `For Honor in Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, HideInUI, NoRecast|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-d76c8dd45924"></a>

## ccVSVSSE003_MGEF_Skeleton_champion

- Identidade estável Housecarl: `00082E:ccvsvsse003-necroarts.esl`.
- Tipo: `MagicEffect`; winner: `ccvsvsse003-necroarts.esl`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)<br>Parameter1.Link=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=0008A7:ccvsvsse003-necroarts.esl|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|0008A7:ccvsvsse003-necroarts.esl|
|`Archetype.Association`|0008A7:ccvsvsse003-necroarts.esl|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|13.5|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|
|`Keywords[1]`|0A9B1F:Skyrim.esm|

<a id="r-3fe3607c9e22"></a>

## ParrySlowTimeMGEF

- Identidade estável Housecarl: `00082F:For Honor Balance Patch.esp`.
- Tipo: `MagicEffect`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=000882:For Honor in Skyrim.esp<br>Parameter1.Link=000882:For Honor in Skyrim.esp|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000810:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-32e14fc0e619)<br>Parameter1.Link=[`000810:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-32e14fc0e619)|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00080F:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-dc4e465fe24d)<br>Parameter1.Link=[`00080F:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-dc4e465fe24d)|aliases=False; package=False|
|`Conditions[3]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`00082A:For Honor Balance Patch.esp`](../magic/MAGIC_003.md#r-b70abd5b7adc)<br>Parameter1.Link=[`00082A:For Honor Balance Patch.esp`](../magic/MAGIC_003.md#r-b70abd5b7adc)|aliases=False; package=False|
|`Conditions[4]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`000811:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-35145a923796)<br>Parameter1.Link=[`000811:For Honor Balance Patch.esp`](../magic/MAGIC_002.md#r-35145a923796)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 5 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|SlowTime|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoArea, HideInUI, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|

<a id="r-c00aaadc5312"></a>

## EmpoweredRightHeavyEnemyBlockPurge

- Identidade estável Housecarl: `00082F:Reforged Directional Combat.esp`.
- Tipo: `MagicEffect`; winner: `Reforged Directional Combat.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`000801:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-5642ec348750)<br>Parameter1.Link=[`000801:Reforged Directional Combat.esp`](../magic/MAGIC_001.md#r-5642ec348750)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`0008BC:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-290b52ac6791)<br>Parameter1.Link=[`0008BC:For Honor Balance Patch.esp`](../magic/MAGIC_005.md#r-290b52ac6791)|aliases=False; package=False|
|`Conditions[2]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Recover, Detrimental, DispelWithKeywords|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|000809:Reforged Directional Combat.esp|
|`Keywords[1]`|000837:Reforged Directional Combat.esp|

<a id="r-ed811f356327"></a>

## ccVSVSSE003_MGEF_Skeleton_warlock

- Identidade estável Housecarl: `00082F:ccvsvsse003-necroarts.esl`.
- Tipo: `MagicEffect`; winner: `ccvsvsse003-necroarts.esl`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)<br>Parameter1.Link=[`0581DE:Skyrim.esm`](../perks/PERKS_049.md#r-a7117ab3202a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=0008A5:ccvsvsse003-necroarts.esl|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|0008A5:ccvsvsse003-necroarts.esl|
|`Archetype.Association`|0008A5:ccvsvsse003-necroarts.esl|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|18|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|
|`Keywords[1]`|0A9B1F:Skyrim.esm|
