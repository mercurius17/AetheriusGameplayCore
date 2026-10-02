# Cadeias mágicas referenciadas — parte 015

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-fe1a9dc6438d"></a>

## VKR_Con_Necromaster_Effect_WascrSummonThrallFortifyHealRate

- Identidade estável Housecarl: `08BB2A:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Mysticism - Vokrii Compatibility Patch.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, DispelWithKeywords, NoArea, PowerAffectsMagnitude, Painless, NoHitEffect, NoDeathDispel|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0C5C11:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_Necromaster_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_Necromaster_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_LevelToStatMult|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|5|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_LevelToStatMult|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VKR_Con_090_Necromaster_Perk|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`317213:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_013.md#r-7791c026feb0)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Con_090_Necromaster_Perk|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptStringProperty] Name=VKR_Checker|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Data`|Variable10|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_Checker|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-d83179e1f38b"></a>

## MAG_FireDamageHazardFFContact

- Identidade estável Housecarl: `08F3F2:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFire|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|5|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAD:Skyrim.esm|

<a id="r-e1a3ed0a705f"></a>

## WerewolfChangeEffect

- Identidade estável Housecarl: `092C45:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectWerewolfArchetype] Association=0CDD84:Skyrim.esm|
|`Archetype.Type`|Werewolf|
|`Archetype.AssociationKey`|0CDD84:Skyrim.esm|
|`Archetype.Association`|0CDD84:Skyrim.esm|
|`Archetype.ActorValue`|None|
|`Flags`|NoArea, NoRecast|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=WerewolfChangeEffectScript|
|`VirtualMachineAdapter.Scripts[0].Name`|WerewolfChangeEffectScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerWerewolfQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|02BA16:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerWerewolfQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=C00|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|04B2D9:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|C00|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VFXSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`0F8208:Skyrim.esm`](../magic/MAGIC_045.md#r-f678b70e9aba)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VFXSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-bc6b746af1a2"></a>

## PerkMuffleConstantSelf

- Identidade estável Housecarl: `09379B:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|MovementNoiseMult|
|`Flags`|Recover, DispelWithKeywords, NoArea, FXPersist, HideInUI, PowerAffectsDuration, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|6|

<a id="r-aa3b7d9dcaa0"></a>

## PertAtronachEffect

- Identidade estável Housecarl: `0954D6:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|AbsorbChance|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|Alteration|
|`ResistValue`|ResistMagic|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-1f50af06e94f"></a>

## PerkExtraPocketsConstantSelf

- Identidade estável Housecarl: `096591:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|CarryWeight|
|`Flags`|Recover, NoDuration, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|5|

<a id="r-695ccc48bc95"></a>

## MAG_ReanimateFFAimed25

- Identidade estável Housecarl: `096D0B:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 3.

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
|`Flags`|Recover, FXPersist, PowerAffectsMagnitude|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0.75|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|
|`Keywords[1]`|0A9B1F:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=SayOnHitByMagicEffectScript|
|`VirtualMachineAdapter.Scripts[0].Name`|SayOnHitByMagicEffectScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000039:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=TopicToSay|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0AB884:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|TopicToSay|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=WICastNonHostileTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0E0CDC:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|WICastNonHostileTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-aaf105cf083c"></a>

## MAG_ReanimateFFAimed50

- Identidade estável Housecarl: `096D0C:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 3.

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
|`Flags`|Recover, FXPersist, PowerAffectsMagnitude|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0.6|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|
|`Keywords[1]`|0A9B1F:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=SayOnHitByMagicEffectScript|
|`VirtualMachineAdapter.Scripts[0].Name`|SayOnHitByMagicEffectScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000039:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=TopicToSay|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0AB884:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|TopicToSay|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=WICastNonHostileTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0E0CDC:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|WICastNonHostileTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-a94c58c6d2fc"></a>

## MAG_ReanimateFFAimed75

- Identidade estável Housecarl: `096D0D:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 3.

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
|`Flags`|Recover, FXPersist, PowerAffectsMagnitude|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0.55|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|
|`Keywords[1]`|0A9B1F:Skyrim.esm|
|`Keywords[2]`|0C5C11:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=SayOnHitByMagicEffectScript|
|`VirtualMachineAdapter.Scripts[0].Name`|SayOnHitByMagicEffectScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000039:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=TopicToSay|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0AB884:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|TopicToSay|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=WICastNonHostileTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0E0CDC:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|WICastNonHostileTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-32a3edcecb0c"></a>

## MAG_PerkMasterMindCalmFFAimed

- Identidade estável Housecarl: `09E0BB:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`059B76:Skyrim.esm`](../perks/PERKS_052.md#r-fc658b8a8d4a)<br>Parameter1.Link=[`059B76:Skyrim.esm`](../perks/PERKS_052.md#r-fc658b8a8d4a)|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013797:Skyrim.esm<br>Parameter1.Link=013797:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|
|`Conditions[4]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 5 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Calm|
|`Archetype.ActorValue`|Aggression|
|`Flags`|Recover, DispelWithKeywords, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|Illusion|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0.0001|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|078098:Skyrim.esm|
|`Keywords[1]`|0424EE:Skyrim.esm|

<a id="r-8ce1a742d722"></a>

## VoiceAnimalAllegianceEffect1

- Identidade estável Housecarl: `09E0C8:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[1]`|GetPlayerTeammate|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=013798:Skyrim.esm<br>Parameter1.Link=013798:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[4]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 5 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, DispelWithKeywords, FXPersist, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|078098:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VoiceCharmFactionScript|
|`VirtualMachineAdapter.Scripts[0].Name`|VoiceCharmFactionScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=CharmFaction|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|09E0C9:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|CharmFaction|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptBoolProperty] Name=bMakePlayerTeammate|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|True|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|bMakePlayerTeammate|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-a83dee63ca6a"></a>

## VoiceAnimalAllegianceEffect2

- Identidade estável Housecarl: `09E0CA:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[1]`|GetPlayerTeammate|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=013798:Skyrim.esm<br>Parameter1.Link=013798:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[4]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 5 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, DispelWithKeywords, FXPersist, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|078098:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VoiceCharmFactionScript|
|`VirtualMachineAdapter.Scripts[0].Name`|VoiceCharmFactionScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=CharmFaction|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|09E0C9:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|CharmFaction|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptBoolProperty] Name=bMakePlayerTeammate|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|True|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|bMakePlayerTeammate|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-70ba701bf5aa"></a>

## VoiceAnimalAllegianceEffect3

- Identidade estável Housecarl: `09E0CB:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=013798:Skyrim.esm<br>Parameter1.Link=013798:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 4 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, DispelWithKeywords, FXPersist, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|078098:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VoiceCharmFactionScript|
|`VirtualMachineAdapter.Scripts[0].Name`|VoiceCharmFactionScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=CharmFaction|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|09E0C9:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|CharmFaction|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptBoolProperty] Name=bMakePlayerTeammate|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|True|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|bMakePlayerTeammate|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-b6fc22de84de"></a>

## VoiceIceFormEffect

- Identidade estável Housecarl: `0A0366:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Paralysis|
|`Archetype.ActorValue`|Paralysis|
|`Flags`|Hostile, Recover, NoMagnitude, FXPersist|
|`MagicSkill`|Destruction|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|1|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VoiceIceFormScript|
|`VirtualMachineAdapter.Scripts[0].Name`|VoiceIceFormScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 0 item(s)]|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=magiceffectshadersonendscript|
|`VirtualMachineAdapter.Scripts[1].Name`|magiceffectshadersonendscript|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=EffectShaderFX02|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|0EA51A:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|EffectShaderFX02|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[1]`|[ScriptObjectProperty] Name=EffectShaderFX01|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Object`|0EA519:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Name`|EffectShaderFX01|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[2]`|[ScriptEntry] Name=MagicDispelSpellOnHitScript|
|`VirtualMachineAdapter.Scripts[2].Name`|MagicDispelSpellOnHitScript|
|`VirtualMachineAdapter.Scripts[2].Flags`|Local|
|`VirtualMachineAdapter.Scripts[2].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[2].Properties[0]`|[ScriptObjectProperty] Name=Spell01|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Object`|[`09CAF0:Skyrim.esm`](../magic/MAGIC_043.md#r-b090fd89c62a)|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Name`|Spell01|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[2].Properties[1]`|[ScriptObjectProperty] Name=Spell03|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Object`|[`09CAF2:Skyrim.esm`](../magic/MAGIC_043.md#r-6fef9f6adb3a)|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Name`|Spell03|
|`VirtualMachineAdapter.Scripts[2].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[2].Properties[2]`|[ScriptObjectProperty] Name=Spell02|
|`VirtualMachineAdapter.Scripts[2].Properties[2].Object`|[`09CAF1:Skyrim.esm`](../magic/MAGIC_043.md#r-bd86cf6a78e6)|
|`VirtualMachineAdapter.Scripts[2].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[2].Properties[2].Name`|Spell02|
|`VirtualMachineAdapter.Scripts[2].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-3e7fec55181f"></a>

## SSOVampireSpeedEffect

- Identidade estável Housecarl: `0A2A9C:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `MagicEffect`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|SpeedMult|
|`Flags`|Recover, NoHitEvent, NoDuration, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-1cbf18fa134d"></a>

## PerkAvoidDeath

- Identidade estável Housecarl: `0A3F62:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoDuration, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|Restoration|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=PerkAvoidDeathScript|
|`VirtualMachineAdapter.Scripts[0].Name`|PerkAvoidDeathScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000039:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|GameDaysPassed|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=PerkAvoidDeathTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|04B6ED:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|PerkAvoidDeathTimer|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=HealSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`0A3F63:Skyrim.esm`](../magic/MAGIC_044.md#r-9ef455cee761)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|HealSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-98824fa35ea7"></a>

## StaggerPushFFAimed

- Identidade estável Housecarl: `0A44C0:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Stagger|
|`Archetype.ActorValue`|None|
|`Flags`|HideInUI|
|`MagicSkill`|Restoration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-536972f1c4aa"></a>

## PerkMagickaRecovery

- Identidade estável Housecarl: `0A6A3B:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|MagickaRateMult|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-83dd01d83198"></a>

## MAG_EnchWeaponDummyXP

- Identidade estável Housecarl: `0A6DB3:Thaumaturgy.esp`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoDuration, NoMagnitude, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0.0001|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|ADA010:Update.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MAG_EnchantmentXP_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|MAG_EnchantmentXP_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptFloatProperty] Name=XP|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|0.01|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|XP|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-03160fed3bbf"></a>

## MAG_PilgrimSyrabaneEffect02

- Identidade estável Housecarl: `0A7AC4:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|SpeedMult|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-a43ae4c5dc1f"></a>

## MAG_PilgrimSyrabaneEffect03

- Identidade estável Housecarl: `0A7AC5:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|CarryWeight|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-229e803f4c3c"></a>

## AbWaterbreathing

- Identidade estável Housecarl: `0AA01C:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|WaterBreathing|
|`Flags`|Recover, NoMagnitude, NoArea, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-baf190236d9a"></a>

## AbResistPoison

- Identidade estável Housecarl: `0AA024:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|PoisonResist|
|`Flags`|Recover, NoDuration, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-53fcdeca08c0"></a>

## PerkFenceEffect

- Identidade estável Housecarl: `0AF667:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|BypassVendorStolenCheck|
|`Flags`|Recover, HideInUI|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-fa3aa8e90da5"></a>

## PerkMerchantEffect

- Identidade estável Housecarl: `0AF669:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|BypassVendorKeywordCheck|
|`Flags`|Recover, HideInUI|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
