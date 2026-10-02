# Cadeias mágicas referenciadas — parte 007

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-50f7bfd97e60"></a>

## SimpleSpells_DrainBoltVLScript

- Identidade estável Housecarl: `000A91:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `MagicEffect`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoDuration, NoArea, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.8|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=SimpleSpells_DrainBoltForVLScript|
|`VirtualMachineAdapter.Scripts[0].Name`|SimpleSpells_DrainBoltForVLScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VampireSpellList|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|019AD9:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VampireSpellList|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=VL_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|[`000845:PuddingFace_SimpleSpellsPackage.esp`](../magic/MAGIC_035.md#r-155c48bdf397)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VL_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VampireLordRace|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|00283A:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VampireLordRace|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-50fed3cccd84"></a>

## Simple_VampireDamageUndead_MagicEffect

- Identidade estável Housecarl: `000B27:PuddingFace_SimpleSpellsPackage.esp`.
- Tipo: `MagicEffect`; winner: `PuddingFace_SimpleSpellsPackage.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|3|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|101BDE:Skyrim.esm|

<a id="r-6af0b9bae641"></a>

## InvisibillityFFCeykynd

- Identidade estável Housecarl: `000EEC:CeykyndArmor.esp`.
- Tipo: `MagicEffect`; winner: `CeykyndArmor.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Invisibility|
|`Archetype.ActorValue`|Invisibility|
|`Flags`|Recover, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration|
|`MagicSkill`|Illusion|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01EA6F:Skyrim.esm|

<a id="r-fc1f801f6657"></a>

## DLC1VampireChangeEffect

- Identidade estável Housecarl: `00283C:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetQuestRunning|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Quest=0071D0:Dawnguard.esm<br>Parameter1.Link=0071D0:Dawnguard.esm|aliases=False; package=False|
|`Conditions[1]`|IsSwimming|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[2]`|GetSitting|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[3]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0110CF:Dawnguard.esm`](../perks/PERKS_007.md#r-85239bfaff1e)<br>Parameter1.Link=[`0110CF:Dawnguard.esm`](../perks/PERKS_007.md#r-85239bfaff1e)|aliases=False; package=False|
|`Conditions[4]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=00E8D9:Dawnguard.esm<br>Parameter1.Link=00E8D9:Dawnguard.esm|aliases=False; package=False|
|`Conditions[5]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`00283C:Dawnguard.esm`](../magic/MAGIC_007.md#r-fc1f801f6657)<br>Parameter1.Link=[`00283C:Dawnguard.esm`](../magic/MAGIC_007.md#r-fc1f801f6657)|aliases=False; package=False|
|`Conditions[6]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`00CD5B:Dawnguard.esm`](../magic/MAGIC_007.md#r-e0b3d1fcb284)<br>Parameter1.Link=[`00CD5B:Dawnguard.esm`](../magic/MAGIC_007.md#r-e0b3d1fcb284)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 7 item(s)]|
|`Archetype`|[MagicEffectVampireArchetype] Association=00283A:Dawnguard.esm|
|`Archetype.Type`|VampireLord|
|`Archetype.AssociationKey`|00283A:Dawnguard.esm|
|`Archetype.Association`|00283A:Dawnguard.esm|
|`Archetype.ActorValue`|None|
|`Flags`|NoRecast|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1VampireChangeEffectScript|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1VampireChangeEffectScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DLC1VampireActivationBlocker|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`0110CF:Dawnguard.esm`](../perks/PERKS_007.md#r-85239bfaff1e)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DLC1VampireActivationBlocker|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0071D0:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VFXSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`00283D:Dawnguard.esm`](../magic/MAGIC_037.md#r-c8427d084710)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VFXSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-8fcccd352176"></a>

## DLC1VampireChangeFXEffect

- Identidade estável Housecarl: `00283E:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoArea, FXPersist, NoRecast|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1VampireTransformVisual|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1VampireTransformVisual|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 7 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DLC1VampireChangeStagger|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`012D18:Dawnguard.esm`](../magic/MAGIC_038.md#r-1aafa50401f4)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DLC1VampireChangeStagger|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=DLC1PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0071D0:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|DLC1PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=IdleVampireTransformation|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|00C61D:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|IdleVampireTransformation|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=DLC1VampireLordRace|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|00283A:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|DLC1VampireLordRace|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=FXVampChangeExplosion|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|015373:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|FXVampChangeExplosion|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=DLC1TrackingQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|0071D2:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|DLC1TrackingQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[6]`|[ScriptObjectProperty] Name=FeedBloodVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Object`|0F3A8B:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Name`|FeedBloodVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-a37e3e3ab102"></a>

## Survival_FireCloakFreezingWaterDesc

- Identidade estável Housecarl: `002EE9:Update.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetIsReference|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Target=000014:Skyrim.esm<br>Parameter1.Link=000014:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=Null|
|`Archetype.Type`|Cloak|
|`Archetype.ActorValue`|None|
|`Flags`|NoArea|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-d4d6658b5f00"></a>

## MAG_SummonWrathman

- Identidade estável Housecarl: `0045B5:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=404239:MysticismMagic.esp|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|404239:MysticismMagic.esp|
|`Archetype.Association`|404239:MysticismMagic.esp|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|90|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|
|`Keywords[1]`|0A9B1F:Skyrim.esm|
|`Keywords[2]`|0806E1:Skyrim.esm|

<a id="r-9739f0482799"></a>

## MAG_SummonMistman

- Identidade estável Housecarl: `0045BB:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=0045B7:Dawnguard.esm|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|0045B7:Dawnguard.esm|
|`Archetype.Association`|0045B7:Dawnguard.esm|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|50|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|
|`Keywords[1]`|0A9B1F:Skyrim.esm|

<a id="r-840cee76bc72"></a>

## MAG_SummonBoneman

- Identidade estável Housecarl: `0045BC:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=0045B9:Dawnguard.esm|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|0045B9:Dawnguard.esm|
|`Archetype.Association`|0045B9:Dawnguard.esm|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|32.5|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|
|`Keywords[1]`|0A9B1F:Skyrim.esm|

<a id="r-7bc212705529"></a>

## DLC1nVampireBatsAmuletEffect

- Identidade estável Housecarl: `0068B3:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=0068B4:Dawnguard.esm|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`0068B4:Dawnguard.esm`](../magic/MAGIC_037.md#r-89667d4d09e1)|
|`Archetype.Association`|[`0068B4:Dawnguard.esm`](../magic/MAGIC_037.md#r-89667d4d09e1)|
|`Archetype.ActorValue`|None|
|`Flags`|NoArea, FXPersist, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-827661bee177"></a>

## DLC1nVampireBatsAmuletEffectDMG

- Identidade estável Housecarl: `0068B5:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`0068B5:Dawnguard.esm`](../magic/MAGIC_007.md#r-827661bee177)<br>Parameter1.Link=[`0068B5:Dawnguard.esm`](../magic/MAGIC_007.md#r-827661bee177)|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=10E984:Skyrim.esm<br>Parameter1.Link=10E984:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|1.5|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=voicepusheffectscript|
|`VirtualMachineAdapter.Scripts[0].Name`|voicepusheffectscript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptIntProperty] Name=PushForce|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|2|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PushForce|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-5eaf11c82e78"></a>

## DLC1VampireGrabActorEffect

- Identidade estável Housecarl: `007EBD:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsChild|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[1]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|OR|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|GrabActor|
|`Archetype.ActorValue`|GrabActorOffset|
|`Flags`|Hostile, Recover, NoDuration, NoArea, FXPersist, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Self|
|`BaseCost`|25|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|07F404:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[0].Name`|magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=OutroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0119A1:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|OutroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=IntroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|IntroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-f4201f36c953"></a>

## MAG_SunCloakFFSelf

- Identidade estável Housecarl: `008A5C:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 4.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=008A60:Dawnguard.esm|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`008A60:Dawnguard.esm`](../magic/MAGIC_037.md#r-f30e122f0971)|
|`Archetype.Association`|[`008A60:Dawnguard.esm`](../magic/MAGIC_037.md#r-f30e122f0971)|
|`Archetype.ActorValue`|None|
|`Flags`|DispelWithKeywords, NoArea, FXPersist, PowerAffectsDuration|
|`MagicSkill`|Restoration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|4.25|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0B62E4:Skyrim.esm|

<a id="r-41e20ce4dc84"></a>

## VKR_Bck_ShieldCharge_Effect_Ab

- Identidade estável Housecarl: `0090A7:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=0090AC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`0090AC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_038.md#r-a57f04c4ea0f)|
|`Archetype.Association`|[`0090AC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_038.md#r-a57f04c4ea0f)|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoDuration, NoArea, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=ORD_ImodSpan_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|ORD_ImodSpan_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-0190a86e4c55"></a>

## VKR_Bck_ShieldCharge_Effect_Ab_Cost

- Identidade estável Housecarl: `0090A8:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Detrimental, NoHitEvent, NoDuration, NoArea, HideInUI, Painless, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-376a55ba97ac"></a>

## VKR_Bck_ShieldCharge_Effect_CloakProc

- Identidade estável Housecarl: `0090A9:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`0090B0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_007.md#r-74353ee42f40)<br>Parameter1.Link=[`0090B0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_007.md#r-74353ee42f40)|aliases=False; package=False|
|`Conditions[1]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[2]`|GetHeadingAngle|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 60|SwapSubjectAndTarget|Target=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[3]`|GetHeadingAngle|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo -60|SwapSubjectAndTarget|Target=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[4]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=10E984:Skyrim.esm<br>Parameter1.Link=10E984:Skyrim.esm|aliases=False; package=False|
|`Conditions[5]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[6]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 7 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Stagger|
|`Archetype.ActorValue`|None|
|`Flags`|NoArea, FXPersist, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=voicepusheffectscript|
|`VirtualMachineAdapter.Scripts[0].Name`|voicepusheffectscript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptIntProperty] Name=PushForce|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|6|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PushForce|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-74353ee42f40"></a>

## VKR_Bck_ShieldCharge_Effect_CloakProc_Blocker

- Identidade estável Housecarl: `0090B0:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetDead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[1]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[2]`|GetHeadingAngle|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 60|SwapSubjectAndTarget|Target=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[3]`|GetHeadingAngle|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo -60|SwapSubjectAndTarget|Target=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[4]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=10E984:Skyrim.esm<br>Parameter1.Link=10E984:Skyrim.esm|aliases=False; package=False|
|`Conditions[5]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[6]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 7 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoMagnitude, NoArea, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0090B1:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-373eb4c73c24"></a>

## VKR_Lia_Windrunner_Effect_Ab

- Identidade estável Housecarl: `009B84:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|SpeedMult|
|`Flags`|Recover, NoHitEvent, NoDuration, NoArea, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_CarryWeight_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_CarryWeight_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptFloatProperty] Name=VKR_CarryWeight|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|0.01|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_CarryWeight|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-1bd1b949e0b9"></a>

## MAG_SunLightFFSelf

- Identidade estável Housecarl: `00A3B9:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 4.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectLightArchetype] Association=00A3BA:Dawnguard.esm|
|`Archetype.Type`|Light|
|`Archetype.AssociationKey`|00A3BA:Dawnguard.esm|
|`Archetype.Association`|00A3BA:Dawnguard.esm|
|`Archetype.ActorValue`|None|
|`Flags`|FXPersist, HideInUI, PowerAffectsDuration|
|`MagicSkill`|Restoration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0A9B1E:Skyrim.esm|

<a id="r-0621b458f8e7"></a>

## VKR_Bck_DragonTail_Effect_Proc

- Identidade estável Housecarl: `00A668:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetRandomPercent|record|Subject; ref=(null link); index=-1|LessThan 30|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Stagger|
|`Archetype.ActorValue`|None|
|`Flags`|NoArea, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_PushActorFromPlayer_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_PushActorFromPlayer_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_PushForce|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|8|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_PushForce|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VKR_Sound|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|013323:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Sound|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-1197027a77ba"></a>

## DLC1VampireMesmerizeMagicEffect

- Identidade estável Housecarl: `00BF72:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Curse of the Vampire.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsChild|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[1]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013797:Skyrim.esm<br>Parameter1.Link=013797:Skyrim.esm|aliases=False; package=False|
|`Conditions[4]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[5]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|
|`Conditions[6]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 7 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoArea, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1VampireMesmerizeScript|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1VampireMesmerizeScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=InfluenceAggDownFFAimed|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`6CEC98:Curse of the Vampire.esp`](../magic/MAGIC_033.md#r-3108503fb772)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|InfluenceAggDownFFAimed|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=DLC1VampireFeedNoCrimeFaction|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|014CBD:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|DLC1VampireFeedNoCrimeFaction|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=PerkMasterMindAggDownFFAimed|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`09E0BB:Skyrim.esm`](../magic/MAGIC_015.md#r-32a3edcecb0c)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|PerkMasterMindAggDownFFAimed|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=DLC1VampireMesmerize|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|00BF73:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|DLC1VampireMesmerize|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-e0b3d1fcb284"></a>

## DLC1RevertEffect

- Identidade estável Housecarl: `00CD5B:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`00CD5B:Dawnguard.esm`](../magic/MAGIC_007.md#r-e0b3d1fcb284)<br>Parameter1.Link=[`00CD5B:Dawnguard.esm`](../magic/MAGIC_007.md#r-e0b3d1fcb284)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`00283C:Dawnguard.esm`](../magic/MAGIC_007.md#r-fc1f801f6657)<br>Parameter1.Link=[`00283C:Dawnguard.esm`](../magic/MAGIC_007.md#r-fc1f801f6657)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|0|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1RevertEffectScript|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1RevertEffectScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 6 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=pDLC1nVampireRingBeast|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|014627:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|pDLC1nVampireRingBeast|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=pDLC1nVampireNecklaceBats|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|014629:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|pDLC1nVampireNecklaceBats|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=DLC1RevertForm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`00CD5C:Dawnguard.esm`](../magic/MAGIC_038.md#r-cd5ae2a98dc0)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|DLC1RevertForm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=DLC1PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|0071D0:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|DLC1PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=pDLC1nVampireRingErudite|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|014628:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|pDLC1nVampireRingErudite|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=pDLC1nVampireNecklaceGargoyle|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|01462B:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|pDLC1nVampireNecklaceGargoyle|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-2bb04a4bd60c"></a>

## MAG_AetherialShieldEffect

- Identidade estável Housecarl: `00CFA6:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Etherealize|
|`Archetype.ActorValue`|None|
|`Flags`|NoMagnitude, NoArea, FXPersist, HideInUI, PowerAffectsDuration, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicSetActorAlphaScript|
|`VirtualMachineAdapter.Scripts[0].Name`|magicSetActorAlphaScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptFloatProperty] Name=AlphaValue|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|0.33|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|AlphaValue|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptBoolProperty] Name=FadeToAlpha|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|True|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|FadeToAlpha|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[1].Name`|magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=IntroSoundFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|011CDE:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|IntroSoundFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-0087e02a70d6"></a>

## DLC1ParalysisFFAimed

- Identidade estável Housecarl: `00D3C0:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|GetRestrained|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Paralysis|
|`Archetype.ActorValue`|Paralysis|
|`Flags`|Hostile, Recover, NoMagnitude, FXPersist, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|450|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01EA70:Skyrim.esm|

<a id="r-40817204bb97"></a>

## DLC1ReanimateFFAimed25

- Identidade estável Housecarl: `00D3C1:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06F6FB:Skyrim.esm<br>Parameter1.Link=06F6FB:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Reanimate|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, FXPersist, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|1.2|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0A9B1F:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=SayOnHitByMagicEffectScript|
|`VirtualMachineAdapter.Scripts[0].Name`|SayOnHitByMagicEffectScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=WICastNonHostileTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0E0CDC:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|WICastNonHostileTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=TopicToSay|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0AB884:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|TopicToSay|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|000039:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
