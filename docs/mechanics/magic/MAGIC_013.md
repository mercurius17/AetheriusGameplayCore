# Cadeias mágicas referenciadas — parte 013

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-6570f2142553"></a>

## SSOApocConjureDremoraAssassinEffectPerk

- Identidade estável Housecarl: `0519AB:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `MagicEffect`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetActorValue|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0519BD:Skyrim Revamped - Complete Enemy Overhaul.esp|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, Recover, Detrimental, DispelWithKeywords, NoMagnitude, NoArea, FXPersist, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0519C0:Skyrim Revamped - Complete Enemy Overhaul.esp|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=wb_deathmark_script|
|`VirtualMachineAdapter.Scripts[0].Name`|wb_deathmark_script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=WB_ConjurationAtronach_Imod_AtronachMark|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0519BE:Skyrim Revamped - Complete Enemy Overhaul.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|WB_ConjurationAtronach_Imod_AtronachMark|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=WB_ConjurationDaedric_Marker_AtronachMark|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0519BF:Skyrim Revamped - Complete Enemy Overhaul.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|WB_ConjurationDaedric_Marker_AtronachMark|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-cbb978761bf7"></a>

## MAG_ArmorFFSelf0

- Identidade estável Housecarl: `051B15:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=01EA72:Skyrim.esm|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|01EA72:Skyrim.esm|
|`Archetype.Association`|01EA72:Skyrim.esm|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, NoArea, FXPersist, GoryVisuals, PowerAffectsDuration|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0.12|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|01EA72:Skyrim.esm|
|`Keywords[1]`|0A9B1E:Skyrim.esm|

<a id="r-3a55812eb55b"></a>

## AbResistMagic

- Identidade estável Housecarl: `053124:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|ResistMagic|
|`Flags`|Recover, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|5|

<a id="r-f8718baf088a"></a>

## VoiceFireBreathEffect2

- Identidade estável Housecarl: `0562EA:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, GoryVisuals, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistFire|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|01CEAD:Skyrim.esm|
|`Keywords[1]`|046B99:Skyrim.esm|
|`Keywords[2]`|0E827C:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC2VoiceFireBreathScript|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC2VoiceFireBreathScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=Wyrm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|01F990:Dragonborn.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|Wyrm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=DLC2BlackBookReward3|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|020E99:Dragonborn.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|DLC2BlackBookReward3|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-31357a8dfc96"></a>

## VoiceFireBreathEffect3

- Identidade estável Housecarl: `0562EB:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, GoryVisuals, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistFire|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|01CEAD:Skyrim.esm|
|`Keywords[1]`|046B99:Skyrim.esm|
|`Keywords[2]`|0E827C:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=DLC2VoiceFireBreathScript|
|`VirtualMachineAdapter.Scripts[0].Name`|DLC2VoiceFireBreathScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=Wyrm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|01F990:Dragonborn.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|Wyrm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=DLC2BlackBookReward3|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|020E99:Dragonborn.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|DLC2BlackBookReward3|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-13c45d6973c5"></a>

## MAG_CultistVaerminaConcCloakArmorRating

- Identidade estável Housecarl: `056A33:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=078098:Skyrim.esm<br>Parameter1.Link=078098:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA005:Update.esm<br>Parameter1.Link=ADA005:Update.esm|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA007:Update.esm<br>Parameter1.Link=ADA007:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, Detrimental, NoArea, HideInUI, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0.0001|

<a id="r-96774c33d737"></a>

## MAG_CultistVaerminaConcCloakMagicResist

- Identidade estável Housecarl: `056A34:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=078098:Skyrim.esm<br>Parameter1.Link=078098:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA005:Update.esm<br>Parameter1.Link=ADA005:Update.esm|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA007:Update.esm<br>Parameter1.Link=ADA007:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|ResistMagic|
|`Flags`|Recover, Detrimental, NoArea, HideInUI, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0.0001|

<a id="r-fc69779938f8"></a>

## MAG_CultistVaerminaConcCloakArmorRatingAlt

- Identidade estável Housecarl: `056A36:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA005:Update.esm<br>Parameter1.Link=ADA005:Update.esm|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA007:Update.esm<br>Parameter1.Link=ADA007:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0.0001|

<a id="r-e14641cae631"></a>

## MAG_CultistVaerminaConcCloakMagicResistAlt

- Identidade estável Housecarl: `056A38:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA005:Update.esm<br>Parameter1.Link=ADA005:Update.esm|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA007:Update.esm<br>Parameter1.Link=ADA007:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|ResistMagic|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0.0001|

<a id="r-459717ec2c49"></a>

## MAG_ArmorFFSelf25

- Identidade estável Housecarl: `059B7A:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=01EA72:Skyrim.esm|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|01EA72:Skyrim.esm|
|`Archetype.Association`|01EA72:Skyrim.esm|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, NoArea, FXPersist, PowerAffectsDuration|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0.095|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|01EA72:Skyrim.esm|
|`Keywords[1]`|0A9B1E:Skyrim.esm|

<a id="r-e617977e82e7"></a>

## MAG_ArmorFFSelf50

- Identidade estável Housecarl: `059B7B:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=01EA72:Skyrim.esm|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|01EA72:Skyrim.esm|
|`Archetype.Association`|01EA72:Skyrim.esm|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, NoArea, FXPersist, PowerAffectsDuration|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0.09|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|01EA72:Skyrim.esm|
|`Keywords[1]`|0A9B1E:Skyrim.esm|

<a id="r-8abb064ee51d"></a>

## MAG_ArmorFFSelf75

- Identidade estável Housecarl: `059B7C:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=01EA72:Skyrim.esm|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|01EA72:Skyrim.esm|
|`Archetype.Association`|01EA72:Skyrim.esm|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, NoArea, FXPersist, PowerAffectsDuration|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0.09|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|01EA72:Skyrim.esm|
|`Keywords[1]`|0A9B1E:Skyrim.esm|

<a id="r-ca3260dfb964"></a>

## GRIM_MGEF_CON_FamiliarBoost_mammothHP

- Identidade estável Housecarl: `05C6A3:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Recover, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-f2791a7175be"></a>

## GRIM_MGEF_CON_FamiliarBoost_mammothStam

- Identidade estável Housecarl: `05C6A4:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Recover, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-c5781dbbc376"></a>

## VoiceFrostBreathEffect1

- Identidade estável Housecarl: `05D16F:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistFrost|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|5|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|01CEAE:Skyrim.esm|
|`Keywords[1]`|046B99:Skyrim.esm|

<a id="r-96abcb9eb1e7"></a>

## VoiceFrostBreathEffect2

- Identidade estável Housecarl: `05D170:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistFrost|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|5|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|01CEAE:Skyrim.esm|
|`Keywords[1]`|046B99:Skyrim.esm|

<a id="r-a9939c3a328d"></a>

## VoiceFrostBreathEffect3

- Identidade estável Housecarl: `05D171:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistFrost|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|10|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|01CEAE:Skyrim.esm|
|`Keywords[1]`|046B99:Skyrim.esm|

<a id="r-96fbc6f05a75"></a>

## BVNPCVampireBlink

- Identidade estável Housecarl: `06127A:Better Vampire NPCs.esp`.
- Tipo: `MagicEffect`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E1:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E1:Better Vampire NPCs.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoHitEvent, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=BVNPCVampireBlinkScript|
|`VirtualMachineAdapter.Scripts[0].Name`|BVNPCVampireBlinkScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=TimeFreezeImod|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0EF95F:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|TimeFreezeImod|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=BVNPCVampireBlinkSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|[`06127E:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-7fa567a29dd7)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|BVNPCVampireBlinkSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=QSTDA09LightBeamOn|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|102E7B:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|QSTDA09LightBeamOn|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-6a12b429b183"></a>

## VKR_Sne_ShadowWarrior_Effect_Proc_Cooldown

- Identidade estável Housecarl: `063F4B:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`063F4B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_013.md#r-6a12b429b183)<br>Parameter1.Link=[`063F4B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_013.md#r-6a12b429b183)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`0F1989:Skyrim.esm`](../magic/MAGIC_017.md#r-ef4655e30e91)<br>Parameter1.Link=[`0F1989:Skyrim.esm`](../magic/MAGIC_017.md#r-ef4655e30e91)|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`017121:Skyrim.esm`](../magic/MAGIC_008.md#r-178501985423)<br>Parameter1.Link=[`017121:Skyrim.esm`](../magic/MAGIC_008.md#r-178501985423)|aliases=False; package=False|
|`Conditions[3]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`1058A9:Skyrim.esm`](../magic/MAGIC_018.md#r-760b79fb33dc)<br>Parameter1.Link=[`1058A9:Skyrim.esm`](../magic/MAGIC_018.md#r-760b79fb33dc)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 4 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoHitEvent, NoMagnitude, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|

<a id="r-c94269594d2d"></a>

## VKR_Any_LightArmorExpertise_Effect_Ab

- Identidade estável Housecarl: `064A1C:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoHitEvent, NoDuration, NoMagnitude, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_XPPersistent_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_XPPersistent_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 6 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptIntProperty] Name=VKR_XPCountMax|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|6|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_XPCountMax|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptFloatProperty] Name=VKR_UpdateRate|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|10|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_UpdateRate|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=VKR_XP_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|0654E3:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_XP_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptStringProperty] Name=VKR_Skill|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Data`|LightArmor|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|VKR_Skill|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=VKR_XPLevel_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|0654E4:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|VKR_XPLevel_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-e402e8791edc"></a>

## VoiceMakeEthereal

- Identidade estável Housecarl: `064D68:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Etherealize|
|`Archetype.ActorValue`|None|
|`Flags`|NoMagnitude, NoArea, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicSetActorAlphaScript|
|`VirtualMachineAdapter.Scripts[0].Name`|magicSetActorAlphaScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptBoolProperty] Name=FadeToAlpha|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|True|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|FadeToAlpha|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=AlphaValue|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|0.33|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|AlphaValue|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=magicImodScript|
|`VirtualMachineAdapter.Scripts[1].Name`|magicImodScript|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=StaticFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|05E93D:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|StaticFX|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[1]`|[ScriptObjectProperty] Name=OutroFX|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Object`|064D69:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Name`|OutroFX|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[2]`|[ScriptFloatProperty] Name=fStaticDelay|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Data`|0.15|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Name`|fStaticDelay|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[3]`|[ScriptObjectProperty] Name=IntroFX|
|`VirtualMachineAdapter.Scripts[1].Properties[3].Object`|064D69:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[3].Name`|IntroFX|
|`VirtualMachineAdapter.Scripts[1].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-3ddbfbec5868"></a>

## MAG_ReanimateFFAimed0

- Identidade estável Housecarl: `065BD6:Skyrim.esm`.
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
|`BaseCost`|1.2|
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

<a id="r-623a5ebf4b3f"></a>

## BVNPCVampireMist

- Identidade estável Housecarl: `0661B6:Better Vampire NPCs.esp`.
- Tipo: `MagicEffect`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E2:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E2:Better Vampire NPCs.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|HealRateMult|
|`Flags`|Recover, NoHitEvent, NoDuration, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=BVNPCVampireMistScript|
|`VirtualMachineAdapter.Scripts[0].Name`|BVNPCVampireMistScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 8 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=Ironflesh|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`051B16:Skyrim.esm`](../magic/MAGIC_041.md#r-a0d5f37cba8f)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|Ironflesh|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=Ebonyflesh|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|[`05AD5E:Skyrim.esm`](../magic/MAGIC_042.md#r-78e958018a94)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|Ebonyflesh|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=BVNPCVampireMistSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`0661B3:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-0ffeba1f33e4)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|BVNPCVampireMistSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=BVNPCVampireRankMistForm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|[`00F5B6:Better Vampire NPCs.esp`](../magic/MAGIC_008.md#r-060f99360107)|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|BVNPCVampireRankMistForm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=BVNPCVampireRankMistFormSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|[`00CE0E:Better Vampire NPCs.esp`](../magic/MAGIC_038.md#r-634c4a7cb749)|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|BVNPCVampireRankMistFormSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=Stoneflesh|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|[`05AD5D:Skyrim.esm`](../magic/MAGIC_042.md#r-63df943d2705)|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|Stoneflesh|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[6]`|[ScriptObjectProperty] Name=BVNPCVampireMistGlobal|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Object`|0A90E2:Better Vampire NPCs.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Name`|BVNPCVampireMistGlobal|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[7]`|[ScriptObjectProperty] Name=Oakflesh|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Object`|[`05AD5C:Skyrim.esm`](../magic/MAGIC_041.md#r-aa5d04af586b)|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Name`|Oakflesh|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-53db5dba4e66"></a>

## MGRArniel03FireDamageConcAimed

- Identidade estável Housecarl: `06A10B:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, GoryVisuals, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFire|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|1.2|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAD:Skyrim.esm|

<a id="r-16369819d67f"></a>

## AbFortifyBowStagger

- Identidade estável Housecarl: `06C0F3:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|BowStaggerBonus|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|5|
