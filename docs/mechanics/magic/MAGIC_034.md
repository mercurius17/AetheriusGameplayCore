# Cadeias mágicas referenciadas — parte 034

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-88ed2dd90482"></a>

## MAG_abFrostSlowEffectDummy

- Identidade estável Housecarl: `CDB979:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|CarryWeight|
|`Flags`|Hostile, Recover, Detrimental, FXPersist, HideInUI, PowerAffectsDuration, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0B729E:Skyrim.esm|

<a id="r-81940437509c"></a>

## MAG_abFrostSlowEffect25

- Identidade estável Housecarl: `CDB97B:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetFlyingState|record|Target; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=0B729E:Skyrim.esm|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|0B729E:Skyrim.esm|
|`Archetype.Association`|0B729E:Skyrim.esm|
|`Archetype.ActorValue`|SpeedMult|
|`Flags`|Hostile, Recover, Detrimental, FXPersist, HideInUI, PowerAffectsDuration, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0B729E:Skyrim.esm|

<a id="r-46bffe63b99d"></a>

## MAG_FrostCloakFFSelfDummy

- Identidade estável Housecarl: `CDB98A:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, DispelWithKeywords, NoArea, FXPersist, HideInUI, PowerAffectsDuration|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFrost|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|33.95|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|0B62E4:Skyrim.esm|
|`Keywords[1]`|01CEAE:Skyrim.esm|

<a id="r-d95e39f0105d"></a>

## MAG_ShockCloakFFSelfDummy

- Identidade estável Housecarl: `CF9FAF:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, DispelWithKeywords, NoArea, HideInUI, PowerAffectsDuration|
|`MagicSkill`|Destruction|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|38.25|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|0B62E4:Skyrim.esm|
|`Keywords[1]`|01CEAF:Skyrim.esm|

<a id="r-cba41f614654"></a>

## MAG_PoisonCloakFFSelfDummy

- Identidade estável Housecarl: `D2C9E6:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, DispelWithKeywords, NoArea, FXPersist, HideInUI, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Restoration|
|`ResistValue`|PoisonResist|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|38.35|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0B62E4:Skyrim.esm|

<a id="r-f44a60a6fe20"></a>

## MAG_SunCloakFFSelfDummy

- Identidade estável Housecarl: `D4B030:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, DispelWithKeywords, NoArea, FXPersist, HideInUI, NoRecast, NoDeathDispel|
|`MagicSkill`|Restoration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|35.35|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|0B62E4:Skyrim.esm|
|`Keywords[1]`|002EDA:Update.esm|
|`Keywords[2]`|ADA002:Update.esm|

<a id="r-d2090c8f034c"></a>

## MAG_AbsorbHealthConcAimedCloakDummy

- Identidade estável Housecarl: `D5A368:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|1.5|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|101BDE:Skyrim.esm|
|`Keywords[1]`|0A9B1F:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MAG_ShockSound_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|MAG_ShockSound_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=mySound|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|D5A369:MysticismMagic.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|mySound|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-3d4080ec8ac6"></a>

## MAG_AbsorbMagickaConcAimedCloak01

- Identidade estável Housecarl: `D5A36A:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetActorValuePercent|record|Target; ref=(null link); index=-1|LessThan 1|0|ActorValue=Magicka<br>Parameter1=Magicka|aliases=False; package=False|
|`Conditions[1]`|GetActorValue|record|Subject; ref=(null link); index=-1|GreaterThan 10|0|ActorValue=Magicka<br>Parameter1=Magicka|aliases=False; package=False|
|`Conditions[2]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 4 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|1.5|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MAG_ShockSound_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|MAG_ShockSound_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=mySound|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|D5A369:MysticismMagic.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|mySound|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-e96f234faa4f"></a>

## MAG_AbsorbMagickaCloakFFSelfDummy01

- Identidade estável Housecarl: `D5A36B:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|DispelWithKeywords, NoArea, FXPersist, HideInUI, NoRecast, PowerAffectsDuration, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|40|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0B62E4:Skyrim.esm|

<a id="r-fdb27d7e6d29"></a>

## MAG_AbsorbStaminaCloakFFSelfDummy01

- Identidade estável Housecarl: `D5A36C:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|DispelWithKeywords, NoArea, FXPersist, HideInUI, NoRecast, PowerAffectsDuration, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|40|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0B62E4:Skyrim.esm|

<a id="r-ee4d7efe1f87"></a>

## MAG_AbsorbStaminaCloakFFSelfDummy

- Identidade estável Housecarl: `D5A36F:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|DispelWithKeywords, NoArea, FXPersist, NoRecast, PowerAffectsDuration, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|4|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0B62E4:Skyrim.esm|

<a id="r-0d36288d06af"></a>

## MAG_AbsorbStaminaConcAimedCloak01

- Identidade estável Housecarl: `D5F470:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetActorValuePercent|record|Target; ref=(null link); index=-1|LessThan 1|0|ActorValue=Stamina<br>Parameter1=Stamina|aliases=False; package=False|
|`Conditions[1]`|GetActorValue|record|Subject; ref=(null link); index=-1|GreaterThan 10|0|ActorValue=Stamina<br>Parameter1=Stamina|aliases=False; package=False|
|`Conditions[2]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 4 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|1.5|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MAG_ShockSound_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|MAG_ShockSound_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=mySound|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|D5A369:MysticismMagic.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|mySound|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-3d4cba6772c0"></a>

## MAG_AbsorbHealthCloakFFSelfDummy01

- Identidade estável Housecarl: `D5F474:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|DispelWithKeywords, NoArea, FXPersist, HideInUI, NoRecast, PowerAffectsDuration, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|87.5|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0B62E4:Skyrim.esm|

<a id="r-f9a38fbfed62"></a>

## zzTRD_DraugrBossAzzakResistMagic01Effect

- Identidade estável Housecarl: `F5DA07:The Restless Dead.esp`.
- Tipo: `MagicEffect`; winner: `The Restless Dead.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|ResistMagic|
|`Flags`|Recover, NoArea, FXPersist, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-02ae92023082"></a>

## MAG_SunDamageConcAimedCloak01

- Identidade estável Housecarl: `FB4DDD:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`616110:Update.esm`](../perks/PERKS_016.md#r-7922ea11a971)<br>Parameter1.Link=[`616110:Update.esm`](../perks/PERKS_016.md#r-7922ea11a971)|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=028FDE:Dragonborn.esm<br>Parameter1.Link=028FDE:Dragonborn.esm|aliases=False; package=False|
|`Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[4]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 5 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Restoration|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|1|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|ADA002:Update.esm|
|`Keywords[1]`|0A9B1E:Skyrim.esm|

<a id="r-f3b9b66268cd"></a>

## zzTRD_DraugrBossAzzakResistDamage01Effect

- Identidade estável Housecarl: `FC7F6F:The Restless Dead.esp`.
- Tipo: `MagicEffect`; winner: `The Restless Dead.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoDuration, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-cf45ff3790ee"></a>

## MAG_DawnguardRuneAxeEnchantment

- Identidade estável Housecarl: `000916:Artificer.esp`.
- Tipo: `ObjectEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000917:Artificer.esp|
|`Effects[0].BaseEffect`|[`000917:Artificer.esp`](../magic/MAGIC_006.md#r-7150da365979)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=000918:Artificer.esp|
|`Effects[1].BaseEffect`|[`000918:Artificer.esp`](../magic/MAGIC_006.md#r-8d51eb752a27)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAutoCalc|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`ChargeTime`|0|

<a id="r-352109823c3c"></a>

## MAG_BowoftheStagPrinceEnchantment

- Identidade estável Housecarl: `000957:Artificer.esp`.
- Tipo: `ObjectEffect`; winner: `Artificer.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=000980:Artificer.esp|
|`Effects[0].BaseEffect`|[`000980:Artificer.esp`](../magic/MAGIC_006.md#r-c4934e65a170)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|2|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|10|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0A6DB3:Thaumaturgy.esp|
|`Effects[1].BaseEffect`|[`0A6DB3:Thaumaturgy.esp`](../magic/MAGIC_015.md#r-83dd01d83198)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAutoCalc|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`ChargeTime`|0|

<a id="r-78759c3c7f38"></a>

## VoiceEnchElementalFury

- Identidade estável Housecarl: `02C594:Skyrim.esm`.
- Tipo: `ObjectEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=02C593:Skyrim.esm|
|`Effects[0].BaseEffect`|[`02C593:Skyrim.esm`](../magic/MAGIC_011.md#r-cc541a938059)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`ChargeTime`|0|

<a id="r-171752abcb13"></a>

## MAG_EbonyBladeEnchantment

- Identidade estável Housecarl: `10FAF0:Skyrim.esm`.
- Tipo: `ObjectEffect`; winner: `Artificer.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=10FAF1:Skyrim.esm|
|`Effects[0].BaseEffect`|[`10FAF1:Skyrim.esm`](../magic/MAGIC_019.md#r-8d3c66a5d94f)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=00093E:Artificer.esp|
|`Effects[1].BaseEffect`|[`00093E:Artificer.esp`](../magic/MAGIC_006.md#r-12bb62ca4beb)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|10|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=000941:Artificer.esp|
|`Effects[2].BaseEffect`|[`000941:Artificer.esp`](../magic/MAGIC_006.md#r-30a933eca467)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|10|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=0A6DB3:Thaumaturgy.esp|
|`Effects[3].BaseEffect`|[`0A6DB3:Thaumaturgy.esp`](../magic/MAGIC_015.md#r-83dd01d83198)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|0|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|0|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAutoCalc|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`ChargeTime`|0|

<a id="r-a89a4b061c56"></a>

## GRIM_ENCH_DES_FlameheartExp

- Identidade estável Housecarl: `202EA3:LostGrimoire.esp`.
- Tipo: `ObjectEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=202EA5:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`202EA5:LostGrimoire.esp`](../magic/MAGIC_021.md#r-bc7719c4d610)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=221513:LostGrimoire.esp|
|`Effects[1].BaseEffect`|[`221513:LostGrimoire.esp`](../magic/MAGIC_021.md#r-45db528e1830)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|99|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|15|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`ChargeTime`|0|

<a id="r-34d6dec75a37"></a>

## GRIM_ENCH_DES_FirebombExp

- Identidade estável Housecarl: `221510:LostGrimoire.esp`.
- Tipo: `ObjectEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=221514:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`221514:LostGrimoire.esp`](../magic/MAGIC_021.md#r-5e1a837599de)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=221513:LostGrimoire.esp|
|`Effects[1].BaseEffect`|[`221513:LostGrimoire.esp`](../magic/MAGIC_021.md#r-45db528e1830)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|99|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|15|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`ChargeTime`|0|

<a id="r-58df4ab6e2b5"></a>

## GRIM_ENCH_DES_FireBrand

- Identidade estável Housecarl: `23FB3C:LostGrimoire.esp`.
- Tipo: `ObjectEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=04605A:Skyrim.esm|
|`Effects[0].BaseEffect`|[`04605A:Skyrim.esm`](../magic/MAGIC_012.md#r-cf34cd60c2d3)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=221513:LostGrimoire.esp|
|`Effects[1].BaseEffect`|[`221513:LostGrimoire.esp`](../magic/MAGIC_021.md#r-45db528e1830)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|99|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|15|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAutoCalc|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`ChargeTime`|0|

<a id="r-b7216d354753"></a>

## GRIM_ENCH_DES_IceBreaker

- Identidade estável Housecarl: `249D58:LostGrimoire.esp`.
- Tipo: `ObjectEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=04605B:Skyrim.esm|
|`Effects[0].BaseEffect`|[`04605B:Skyrim.esm`](../magic/MAGIC_012.md#r-2d1ea73f5b6f)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=249D5A:LostGrimoire.esp|
|`Effects[1].BaseEffect`|[`249D5A:LostGrimoire.esp`](../magic/MAGIC_022.md#r-6de03d4de4cd)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|3|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=3B69B7:LostGrimoire.esp|
|`Effects[2].BaseEffect`|[`3B69B7:LostGrimoire.esp`](../magic/MAGIC_031.md#r-81d8d7a6d909)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|2|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAutoCalc|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`ChargeTime`|0|

<a id="r-a043c14e69a7"></a>

## Shield Parry Poise Damage

- Identidade estável Housecarl: `0005F7:For Honor Balance Patch.esp`.
- Tipo: `Spell`; winner: `For Honor Balance Patch.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0005F5:For Honor Balance Patch.esp|
|`Effects[0].BaseEffect`|[`0005F5:For Honor Balance Patch.esp`](../magic/MAGIC_001.md#r-3b1d62d6d898)|
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
