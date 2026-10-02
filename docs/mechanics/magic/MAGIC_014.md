# Cadeias mágicas referenciadas — parte 014

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-6abad52cad29"></a>

## VoiceKynesPeaceFactionEffect

- Identidade estável Housecarl: `06E0C1:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=013798:Skyrim.esm<br>Parameter1.Link=013798:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F82F4:Skyrim.esm<br>Parameter1.Link=0F82F4:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, DispelWithKeywords, HideInUI, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VoiceCharmFactionScript|
|`VirtualMachineAdapter.Scripts[0].Name`|VoiceCharmFactionScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=CharmFaction|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0E0D58:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|CharmFaction|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptBoolProperty] Name=bMakePlayerTeammate|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|False|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|bMakePlayerTeammate|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-630f9f66afab"></a>

## BVNPCDLC1AbBatsCloak

- Identidade estável Housecarl: `070027:Better Vampire NPCs.esp`.
- Tipo: `MagicEffect`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E3:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E3:Better Vampire NPCs.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=0126B7:Dawnguard.esm|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`0126B7:Dawnguard.esm`](../magic/MAGIC_038.md#r-c5c9758247c3)|
|`Archetype.Association`|[`0126B7:Dawnguard.esm`](../magic/MAGIC_038.md#r-c5c9758247c3)|
|`Archetype.ActorValue`|None|
|`Flags`|Detrimental, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[0].Name`|magicsoundplayintrooutro|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=IntroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|013780:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|IntroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=OutroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|013781:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|OutroSoundFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=VampireAbsorbHealthScript|
|`VirtualMachineAdapter.Scripts[1].Name`|VampireAbsorbHealthScript|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=DiseasePorphyricHemophelia|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|[`016C9F:Better Vampire NPCs.esp`](../magic/MAGIC_038.md#r-2edafc40fc6e)|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|DiseasePorphyricHemophelia|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-af114d7d52a5"></a>

## MAG_AlchSilence

- Identidade estável Housecarl: `073F2B:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Apothecary.esp`; profundidade de override: 3.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Rally|
|`Archetype.ActorValue`|Confidence|
|`Flags`|Hostile, Recover, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, Painless|
|`MagicSkill`|None|
|`ResistValue`|PoisonResist|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0.4|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|042509:Skyrim.esm|
|`Keywords[1]`|23791D:Apothecary.esp|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MAG_PoisonSpell_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|MAG_PoisonSpell_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=MAG_PoisonSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`116FCE:Apothecary.esp`](../magic/MAGIC_046.md#r-599fa34c03f3)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|MAG_PoisonSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-1bc8231e78f1"></a>

## MAG_AlchParalysis

- Identidade estável Housecarl: `073F30:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Apothecary.esp`; profundidade de override: 3.

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
|`Archetype.Type`|Rally|
|`Archetype.ActorValue`|Confidence|
|`Flags`|Hostile, Recover, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|PoisonResist|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|1.75|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|01EA70:Skyrim.esm|
|`Keywords[1]`|042509:Skyrim.esm|
|`Keywords[2]`|23791D:Apothecary.esp|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MAG_PoisonSpell_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|MAG_PoisonSpell_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=MAG_PoisonSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`10CDC5:Apothecary.esp`](../magic/MAGIC_046.md#r-02c56b0e0795)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|MAG_PoisonSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-b4438460a1cd"></a>

## MAG_PilgrimTallPapaEffectLady

- Identidade estável Housecarl: `07A177:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-49e3447a585a"></a>

## MAG_PilgrimAllMakerTreeEffectAlt

- Identidade estável Housecarl: `07A183:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|AlchemySkillAdvance|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-de4cc8e3dd97"></a>

## MAG_PilgrimTallPapaEffectShadowAlt

- Identidade estável Housecarl: `07A185:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|SneakingSkillAdvance|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-cb687b2ac459"></a>

## MAG_CultistMalacathEffectAlt

- Identidade estável Housecarl: `07A187:Pilgrim.esp`.
- Tipo: `MagicEffect`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|TwoHandedSkillAdvance|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-34f663e144f0"></a>

## VKR_Bck_QuickReflexes_Effect_ProcOnSelf

- Identidade estável Housecarl: `07B100:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`07B100:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_014.md#r-34f663e144f0)<br>Parameter1.Link=[`07B100:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_014.md#r-34f663e144f0)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|SlowTime|
|`Archetype.ActorValue`|None|
|`Flags`|DispelWithKeywords, NoArea, NoRecast|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046BB3:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MagicImodBasicScript|
|`VirtualMachineAdapter.Scripts[0].Name`|MagicImodBasicScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=ImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|10C761:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|ImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=ORD_DispelAfterDelay_Script|
|`VirtualMachineAdapter.Scripts[1].Name`|ORD_DispelAfterDelay_Script|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptFloatProperty] Name=ORD_DelayUntilDispel|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Data`|1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|ORD_DelayUntilDispel|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-8bff2bf7247b"></a>

## VoiceDismayPushEffect01

- Identidade estável Housecarl: `07B6BA:Skyrim.esm`.
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
|`Flags`|Hostile|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|2|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|

<a id="r-2de0cc890449"></a>

## VoiceDismayPushEffect02

- Identidade estável Housecarl: `07B6BB:Skyrim.esm`.
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
|`Flags`|Hostile|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|2|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|

<a id="r-80d6a78c0fd0"></a>

## VoiceDismayPushEffect03

- Identidade estável Housecarl: `07B6BC:Skyrim.esm`.
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
|`Flags`|Hostile|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|2|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|

<a id="r-59d94381a345"></a>

## MAG_SpellbreakerEffect01

- Identidade estável Housecarl: `07DCDB:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Artificer.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|WardPower|
|`Flags`|1073745922|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.7|

<a id="r-3b659e2bf371"></a>

## VKR_Hea_HeavyArmorOnHitProc_Effect_Ab

- Identidade estável Housecarl: `07E6F9:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_NewDefiance_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_NewDefiance_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VKR_Hea_HeavyArmorOnHitProc_Spell_Proc|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`04DFD0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_041.md#r-e3a7cfc401fa)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_Hea_HeavyArmorOnHitProc_Spell_Proc|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=VKR_Hea_HeavyArmorOnHitProc_Spell_Proc_PowerAttack|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|[`008033:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_037.md#r-1b8e1783444f)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Hea_HeavyArmorOnHitProc_Spell_Proc_PowerAttack|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-dfb6c4c65175"></a>

## MAG_ReanimateFFAimed100

- Identidade estável Housecarl: `07E8E0:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 4.

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
|`BaseCost`|0.0001|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|02482B:Skyrim.esm|
|`Keywords[1]`|0A9B1F:Skyrim.esm|
|`Keywords[2]`|0806E1:Skyrim.esm|
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

<a id="r-4924972e38f5"></a>

## VoiceKynesPeaceEffect2

- Identidade estável Housecarl: `082A36:Skyrim.esm`.
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
|`Archetype.Type`|Calm|
|`Archetype.ActorValue`|Aggression|
|`Flags`|Recover, DispelWithKeywords, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|078098:Skyrim.esm|
|`Keywords[1]`|046B99:Skyrim.esm|

<a id="r-5ac78d7395ba"></a>

## VoiceKynesPeaceEffect1

- Identidade estável Housecarl: `082A37:Skyrim.esm`.
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
|`Archetype.Type`|Calm|
|`Archetype.ActorValue`|Aggression|
|`Flags`|Recover, DispelWithKeywords, HideInUI, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|078098:Skyrim.esm|
|`Keywords[1]`|046B99:Skyrim.esm|

<a id="r-d2d3ab157154"></a>

## VoiceKynesPeaceEffect3

- Identidade estável Housecarl: `082A38:Skyrim.esm`.
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
|`Archetype.Type`|Calm|
|`Archetype.ActorValue`|Aggression|
|`Flags`|Recover, DispelWithKeywords, PowerAffectsDuration|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|078098:Skyrim.esm|
|`Keywords[1]`|046B99:Skyrim.esm|

<a id="r-451cc354a307"></a>

## VKR_Lia_EvasiveLeap_Effect_Ab

- Identidade estável Housecarl: `0868A4:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_EvasiveLeap_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_EvasiveLeap_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptStringProperty] Name=VKR_AnimEventDown|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|landEnd|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_AnimEventDown|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=VKR_Lia_EvasiveLeap_Spell_Proc|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|[`0868A5:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_042.md#r-b8e49b91970f)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Lia_EvasiveLeap_Spell_Proc|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptStringProperty] Name=VKR_AnimEventUp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|JumpUp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_AnimEventUp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-f2583253f8d6"></a>

## VKR_Lia_EvasiveLeap_Effect_Proc

- Identidade estável Housecarl: `0868A7:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Etherealize|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoMagnitude, NoArea|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicSetActorAlphaScript|
|`VirtualMachineAdapter.Scripts[0].Name`|magicSetActorAlphaScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptFloatProperty] Name=AlphaValue|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|0.25|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|AlphaValue|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-9a2246d96ae9"></a>

## VKR_Enc_StaffExpertise_Effect_Ab

- Identidade estável Housecarl: `088EA0:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`Flags`|NoHitEvent, NoDuration, NoMagnitude, NoArea, HideInUI, NoHitEffect|
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
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|5|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_UpdateRate|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=VKR_XP_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|088EA1:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_XP_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptStringProperty] Name=VKR_Skill|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Data`|Enchanting|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|VKR_Skill|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=VKR_XPLevel_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|088EA2:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|VKR_XPLevel_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-93dd8802aa93"></a>

## SSOcrFalmerFFContact

- Identidade estável Housecarl: `08958A:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `MagicEffect`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, Painless, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|PoisonResist|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|

<a id="r-25ebfe3ac89a"></a>

## SSOcrFalmerFFContactPoisonResist

- Identidade estável Housecarl: `08958D:Skyrim Revamped - Complete Enemy Overhaul.esp`.
- Tipo: `MagicEffect`; winner: `Skyrim Revamped - Complete Enemy Overhaul.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|PoisonResist|
|`Flags`|Recover, Detrimental, NoArea, FXPersist, PowerAffectsMagnitude, Painless, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|PoisonResist|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|

<a id="r-6aa300ab1267"></a>

## VoiceAuraWhisperInterior

- Identidade estável Housecarl: `08AFCB:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsInInterior|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoHitEvent, FXPersist, NoRecast, PowerAffectsDuration, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicImodScript|
|`VirtualMachineAdapter.Scripts[0].Name`|magicImodScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=IntroFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|08AFD0:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|IntroFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-16c031227319"></a>

## VoiceDisarmEffect01

- Identidade estável Housecarl: `08BB26:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0D205E:Skyrim.esm<br>Parameter1.Link=0D205E:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Disarm|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|
