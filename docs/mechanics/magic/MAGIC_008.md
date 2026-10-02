# Cadeias mágicas referenciadas — parte 008

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-678564ca0aba"></a>

## DLC1nVampireBloodyGripCloakEffect

- Identidade estável Housecarl: `00E7D7:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=00E7DA:Dawnguard.esm|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`00E7DA:Dawnguard.esm`](../magic/MAGIC_038.md#r-17954155afdf)|
|`Archetype.Association`|[`00E7DA:Dawnguard.esm`](../magic/MAGIC_038.md#r-17954155afdf)|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, NoArea, FXPersist, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Self|
|`BaseCost`|2|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0B62E4:Skyrim.esm|

<a id="r-aa206498370d"></a>

## DLC1nVampireBloodyGripCloakDMGEffect

- Identidade estável Housecarl: `00E7E8:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetActorValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Grabbed<br>Parameter1=Grabbed|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsDuration, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|101BDE:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1nVampireBloodyGripCloakDMGSCRIPT|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1nVampireBloodyGripCloakDMGSCRIPT|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=gripIdle|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0D6F0A:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|gripIdle|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[1].Name`|magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=CasterVFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|0ABEFC:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|CasterVFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[1]`|[ScriptObjectProperty] Name=TrapImod|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Object`|0ABF17:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Name`|TrapImod|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[2]`|[ScriptObjectProperty] Name=TargetVFX|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Object`|0ABEFB:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Name`|TargetVFX|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-a8f3296b752a"></a>

## DLC1VQ03InfluenceAggDownFFAimed

- Identidade estável Housecarl: `00F3CE:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetStage|record|Subject; ref=(null link); index=-1|EqualTo 67|0|Quest=004C3D:Dawnguard.esm<br>Parameter1.Link=004C3D:Dawnguard.esm|aliases=False; package=False|
|`Conditions[1]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[2]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=0058B0:Dawnguard.esm<br>Parameter1.Link=0058B0:Dawnguard.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Calm|
|`Archetype.ActorValue`|Aggression|
|`Flags`|Recover, DispelWithKeywords, NoArea, FXPersist, PowerAffectsMagnitude|
|`MagicSkill`|Illusion|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|078098:Skyrim.esm|
|`Keywords[1]`|0424EE:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=SayOnHitByMagicEffectScript|
|`VirtualMachineAdapter.Scripts[0].Name`|SayOnHitByMagicEffectScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=WICastNonHostileTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0E0CDC:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|WICastNonHostileTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|000039:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=CombatTopicToSay|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0AB884:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|CombatTopicToSay|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=TopicToSay|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|0AB884:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|TopicToSay|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=DCL1VQ03VampSeductionSetStageScript|
|`VirtualMachineAdapter.Scripts[1].Name`|DCL1VQ03VampSeductionSetStageScript|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=DLC1VQ03Vampire|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|004C3D:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|DLC1VQ03Vampire|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-192aa1bb3c11"></a>

## BVNPCStableVampireInvisibility2

- Identidade estável Housecarl: `00F5B4:Better Vampire NPCs.esp`.
- Tipo: `MagicEffect`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Invisibility|
|`Archetype.ActorValue`|Invisibility|
|`Flags`|Recover, NoMagnitude, NoArea, HideInUI, PowerAffectsDuration|
|`MagicSkill`|Illusion|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01EA6F:Skyrim.esm|

<a id="r-060f99360107"></a>

## BVNPCVampireRankMistForm

- Identidade estável Housecarl: `00F5B6:Better Vampire NPCs.esp`.
- Tipo: `MagicEffect`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Etherealize|
|`Archetype.ActorValue`|None|
|`Flags`|HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|Illusion|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|3|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=BVNPCVampireRankMistFormScript|
|`VirtualMachineAdapter.Scripts[0].Name`|BVNPCVampireRankMistFormScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=BVNPCVampireRankMistFormSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`00CE0E:Better Vampire NPCs.esp`](../magic/MAGIC_038.md#r-634c4a7cb749)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|BVNPCVampireRankMistFormSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=BVNPCSteamFXShaderVampire|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|00F5BC:Better Vampire NPCs.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|BVNPCSteamFXShaderVampire|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=BVNPCReanimateFXShaderVampire|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|00F5B5:Better Vampire NPCs.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|BVNPCReanimateFXShaderVampire|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-ea6b5cf9a207"></a>

## BVNPCAbVampireMuffle2

- Identidade estável Housecarl: `00F5B7:Better Vampire NPCs.esp`.
- Tipo: `MagicEffect`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|MovementNoiseMult|
|`Flags`|Recover, NoArea, HideInUI|
|`MagicSkill`|Illusion|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-74729582be2e"></a>

## BVNPCAbWaterwalkingVampire

- Identidade estável Housecarl: `00F5B8:Better Vampire NPCs.esp`.
- Tipo: `MagicEffect`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|WaterWalking|
|`Flags`|Recover, NoMagnitude, NoArea, HideInUI, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Illusion|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-3bbda91d0698"></a>

## DLC1VampireDetectLifeCombatInteriorSelfFF

- Identidade estável Housecarl: `010A7F:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsInInterior|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DetectLife|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoHitEvent, FXPersist, NoRecast, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1MagiEffectShaderDistanceScript|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1MagiEffectShaderDistanceScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=EffectShaderFX01|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|01AA85:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|EffectShaderFX01|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=fSpellMaxRange|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|2133.33|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|fSpellMaxRange|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=DLC1DetectAllActive|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|014B7A:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|DLC1DetectAllActive|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-14364f44e2f7"></a>

## DLC1VampireDetectLifeCombatExteriorSelfFF

- Identidade estável Housecarl: `010A80:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsInInterior|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DetectLife|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoHitEvent, FXPersist, NoRecast, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0169D8:Dawnguard.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1MagiEffectShaderDistanceScript|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1MagiEffectShaderDistanceScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=EffectShaderFX01|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|01AA85:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|EffectShaderFX01|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=fSpellMaxRange|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|4266.66|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|fSpellMaxRange|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=DLC1DetectAllActive|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|014B7A:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|DLC1DetectAllActive|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-13a86ebef613"></a>

## DLC1BatsAbsorbConcAimed

- Identidade estável Housecarl: `0126B6:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Dawnguard.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=013797:Skyrim.esm<br>Parameter1.Link=013797:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=0D205E:Skyrim.esm<br>Parameter1.Link=0D205E:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[4]`|HasKeyword|record|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=01269F:Dawnguard.esm<br>Parameter1.Link=01269F:Dawnguard.esm|aliases=False; package=False|
|`Conditions[5]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 6 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|1.7|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1MagicEatenByBatsScript|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1MagicEatenByBatsScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DLC1VampireBatsVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|019C9F:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DLC1VampireBatsVFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=DLC1VampBatsEatenByBatsSkinFXS|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|012970:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|DLC1VampBatsEatenByBatsSkinFXS|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=DLC1BatsEatenBloodSplats|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|01296F:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|DLC1BatsEatenBloodSplats|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=BloodSprayBleedImpactSetRed|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|0F457B:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|BloodSprayBleedImpactSetRed|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[1].Name`|magicAbsorbFXScript|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=TargetVFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|01296A:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|TargetVFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[1]`|[ScriptFloatProperty] Name=fEffectDurationMax|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Data`|6|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Name`|fEffectDurationMax|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-6514d57bf9ed"></a>

## DLC1StaggerPushFFSelfArea

- Identidade estável Housecarl: `012D17:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetQuestRunning|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Quest=01909F:Dawnguard.esm<br>Parameter1.Link=01909F:Dawnguard.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Stagger|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, FXPersist, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0.001|

<a id="r-ad5d7cf66894"></a>

## DLC1PCVampireAbsorbStaminaConcAimed

- Identidade estável Housecarl: `01419A:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 014199:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0149A6:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-812a72c0ce32"></a>

## DLC1PCVampireAbsorbMagickaConcAimed

- Identidade estável Housecarl: `01419C:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 014199:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0149A6:Dawnguard.esm|OR|Global=000039:Skyrim.esm<br>Parameter1.Link=000039:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Magicka|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-24701d1cb114"></a>

## VKR_Res_MageWard_Effect_Ab

- Identidade estável Housecarl: `014916:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|WardPower|
|`Flags`|1073746434|
|`MagicSkill`|Restoration|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.125|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|04BF3C:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-037da5efb3b5"></a>

## DLC1BatsEffect

- Identidade estável Housecarl: `01571A:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`01A321:Dawnguard.esm`](../magic/MAGIC_009.md#r-80d303c49d81)<br>Parameter1.Link=[`01A321:Dawnguard.esm`](../magic/MAGIC_009.md#r-80d303c49d81)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`01A30D:Dawnguard.esm`](../magic/MAGIC_009.md#r-e37c357be61d)<br>Parameter1.Link=[`01A30D:Dawnguard.esm`](../magic/MAGIC_009.md#r-e37c357be61d)|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`01571A:Dawnguard.esm`](../magic/MAGIC_008.md#r-037da5efb3b5)<br>Parameter1.Link=[`01571A:Dawnguard.esm`](../magic/MAGIC_008.md#r-037da5efb3b5)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|FXPersist, NoRecast|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|100|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC1BatsEffectScript|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC1BatsEffectScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 12 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DLC1VampireBats|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`0038B9:Dawnguard.esm`](../magic/MAGIC_037.md#r-706e037cb927)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DLC1VampireBats|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=DLC1VampireBatsReformBATSFXS|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|018EF2:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|DLC1VampireBatsReformBATSFXS|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptFloatProperty] Name=fSpellEndDelay|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|0.5|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|fSpellEndDelay|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=DLC1VampLordBatsFXActivator|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|019CA0:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|DLC1VampLordBatsFXActivator|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptFloatProperty] Name=fReformDelay|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Data`|0.1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|fReformDelay|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=DLC1PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|0071D0:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|DLC1PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[6]`|[ScriptObjectProperty] Name=CastingImod|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Object`|019D81:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Name`|CastingImod|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[7]`|[ScriptObjectProperty] Name=batAmulet|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Object`|014629:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Name`|batAmulet|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[8]`|[ScriptObjectProperty] Name=DLC1VampireLevitateStateGlobal|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Object`|015FC8:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Name`|DLC1VampireLevitateStateGlobal|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[9]`|[ScriptObjectProperty] Name=AmuletSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Object`|[`0068B2:Dawnguard.esm`](../magic/MAGIC_037.md#r-402c2e3f37cd)|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Name`|AmuletSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[10]`|[ScriptObjectProperty] Name=DLC1VampireBatsReformFXS|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Object`|018EF1:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Name`|DLC1VampireBatsReformFXS|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[11]`|[ScriptObjectProperty] Name=BatSprintStart|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Object`|00BB8B:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Name`|BatSprintStart|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=DLC1MagicPlaySoundOnEffectStart|
|`VirtualMachineAdapter.Scripts[1].Name`|DLC1MagicPlaySoundOnEffectStart|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=SoundFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|SoundFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[2]`|[ScriptEntry] Name=magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[2].Name`|magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[2].Flags`|Local|
|`VirtualMachineAdapter.Scripts[2].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[2].Properties[0]`|[ScriptObjectProperty] Name=OutroSoundFX|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Object`|01199D:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Name`|OutroSoundFX|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[2].Properties[1]`|[ScriptObjectProperty] Name=IntroSoundFX|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Object`|019D82:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Name`|IntroSoundFX|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-17b943e68db5"></a>

## VKR_Con_GhoulFrenzy_Effect_Proc_WeaponSpeed

- Identidade estável Housecarl: `015ECE:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|LeftWeaponSpeedMultiply|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|

<a id="r-a29e3cdb4f9c"></a>

## DLC1SummonGargoyle

- Identidade estável Housecarl: `016906:Dawnguard.esm`.
- Tipo: `MagicEffect`; winner: `Curse of the Vampire.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=016907:Dawnguard.esm|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|016907:Dawnguard.esm|
|`Archetype.Association`|016907:Dawnguard.esm|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|10|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0A9B1F:Skyrim.esm|

<a id="r-b7604bbddf74"></a>

## BVNPCDisDamageHealthVampire

- Identidade estável Housecarl: `016C9D:Better Vampire NPCs.esp`.
- Tipo: `MagicEffect`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetRandomPercent|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 3|0|—|aliases=False; package=False|
|`Conditions[1]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0A82BB:Skyrim.esm<br>Parameter1.Link=0A82BB:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Recover, Detrimental, NoDuration, NoArea, PowerAffectsDuration|
|`MagicSkill`|Restoration|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Touch|
|`BaseCost`|5|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VampireDiseaseEffectScript|
|`VirtualMachineAdapter.Scripts[0].Name`|VampireDiseaseEffectScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 14 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VampireSunriseMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0D1086:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VampireSunriseMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=VampireFeed|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|[`0CF02C:Skyrim.esm`](../perks/PERKS_006.md#r-1e00c75c9e15)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VampireFeed|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VampireTransformIncreaseISMD|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0FD815:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VampireTransformIncreaseISMD|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|0EAFD5:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|000039:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=GameHour|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|000038:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|GameHour|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[6]`|[ScriptObjectProperty] Name=IntroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Object`|07C723:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Name`|IntroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[7]`|[ScriptFloatProperty] Name=VampireChangeTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Data`|0|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Name`|VampireChangeTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[8]`|[ScriptObjectProperty] Name=OutroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Object`|07C722:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Name`|OutroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[9]`|[ScriptObjectProperty] Name=VampireSleepMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Object`|0ED0AB:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Name`|VampireSleepMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[10]`|[ScriptObjectProperty] Name=VampireSunsetMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Object`|0D1087:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Name`|VampireSunsetMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[11]`|[ScriptObjectProperty] Name=VampireDiseaseMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Object`|0C7FA3:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Name`|VampireDiseaseMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[12]`|[ScriptObjectProperty] Name=VampireTransformDecreaseISMD|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Object`|0FD816:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Name`|VampireTransformDecreaseISMD|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[13]`|[ScriptObjectProperty] Name=AbsorbRedImod|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Object`|0ABF17:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Name`|AbsorbRedImod|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-178501985423"></a>

## TGNightingaleShadowFFSelf

- Identidade estável Housecarl: `017121:Skyrim.esm`.
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
|`Flags`|Recover, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=USSEP_TG09ShadowCloakScript|
|`VirtualMachineAdapter.Scripts[0].Name`|USSEP_TG09ShadowCloakScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=TGNightingaleShadow|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`0F1988:Skyrim.esm`](../magic/MAGIC_045.md#r-8bc8ada723d0)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|TGNightingaleShadow|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-aaf0ed4ac6ec"></a>

## MAG_AshFormFFAimed50

- Identidade estável Housecarl: `017732:Dragonborn.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=028FDE:Dragonborn.esm<br>Parameter1.Link=028FDE:Dragonborn.esm|aliases=False; package=False|
|`Conditions[3]`|GetRestrained|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 4 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Paralysis|
|`Archetype.ActorValue`|Paralysis|
|`Flags`|Hostile, Recover, NoMagnitude, FXPersist, PowerAffectsDuration|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|75|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01EA70:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MagicDispelSpellOnHitScript|
|`VirtualMachineAdapter.Scripts[0].Name`|MagicDispelSpellOnHitScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=Spell03|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`4B065B:MysticismMagic.esp`](../magic/MAGIC_054.md#r-fc3b5deb4df6)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|Spell03|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=Spell01|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|[`017731:Dragonborn.esm`](../magic/MAGIC_038.md#r-82d00e2fde91)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|Spell01|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=Spell02|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`1901E5:MysticismMagic.esp`](../magic/MAGIC_046.md#r-cebf12685543)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|Spell02|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[1].Name`|magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=IntroSoundFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|01E2A1:Dragonborn.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|IntroSoundFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-e96075b9df18"></a>

## MAG_AshRuneFFLocation

- Identidade estável Housecarl: `0177AE:Dragonborn.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=028FDE:Dragonborn.esm<br>Parameter1.Link=028FDE:Dragonborn.esm|aliases=False; package=False|
|`Conditions[3]`|GetRestrained|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 4 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Paralysis|
|`Archetype.ActorValue`|Paralysis|
|`Flags`|Hostile, Recover, Detrimental, FXPersist, NoRecast, PowerAffectsDuration, NoDeathDispel|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|125|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|01EA70:Skyrim.esm|
|`Keywords[1]`|109D79:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MagicDispelSpellOnHitScript|
|`VirtualMachineAdapter.Scripts[0].Name`|MagicDispelSpellOnHitScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=Spell03|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`0177AF:Dragonborn.esm`](../magic/MAGIC_039.md#r-90099141469b)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|Spell03|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=Spell01|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|[`017731:Dragonborn.esm`](../magic/MAGIC_038.md#r-82d00e2fde91)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|Spell01|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=Spell02|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`1901E5:MysticismMagic.esp`](../magic/MAGIC_046.md#r-cebf12685543)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|Spell02|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-920ce2e7150a"></a>

## VKR_Con_OblivionBinding_Effect_DamageVsDaedra

- Identidade estável Housecarl: `017A07:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D799C:Skyrim.esm`](../perks/PERKS_049.md#r-3cedbc8585b1)<br>Parameter1.Link=[`0D799C:Skyrim.esm`](../perks/PERKS_049.md#r-3cedbc8585b1)|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=013797:Skyrim.esm<br>Parameter1.Link=013797:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoDuration, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|Conjuration|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|

<a id="r-b08f2013e27b"></a>

## VKR_Con_VoidBrand_Effect_Stamina

- Identidade estável Housecarl: `017F70:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`017F72:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-582b6346079a)<br>Parameter1.Link=[`017F72:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-582b6346079a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude|
|`MagicSkill`|Conjuration|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0CC818:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-f52070ae5878"></a>

## VKR_Con_VoidBrand_Effect_Health

- Identidade estável Housecarl: `017F71:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`017F72:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-582b6346079a)<br>Parameter1.Link=[`017F72:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-582b6346079a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|Conjuration|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0CC815:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-4fc43c0f007a"></a>

## VKR_Con_HollowBinding_Effect

- Identidade estável Housecarl: `017F7B:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`017F78:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-e26a837b3d82)<br>Parameter1.Link=[`017F78:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-e26a837b3d82)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=0CC813:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|0CC813:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Association`|0CC813:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.ActorValue`|ResistMagic|
|`Flags`|Hostile, Recover, Detrimental, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0CC813:Vokrii - Minimalistic Perks of Skyrim.esp|
