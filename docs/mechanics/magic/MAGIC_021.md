# Cadeias mágicas referenciadas — parte 021

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-033c5cca398f"></a>

## COTV_BloodToPowerRestoreMagickaEffect

- Identidade estável Housecarl: `1E1490:Curse of the Vampire.esp`.
- Tipo: `MagicEffect`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThan 1|0|ActorValue=Magicka<br>Parameter1=Magicka|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Magicka|
|`Flags`|FXPersist, PowerAffectsMagnitude, Painless|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Self|
|`BaseCost`|1|

<a id="r-a992e1636ad2"></a>

## GRIM_MGEF_DES100_ThunderBlast

- Identidade estável Housecarl: `1F8C84:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, FXPersist, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistShock|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|8.9|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|01CEAF:Skyrim.esm|
|`Keywords[1]`|0806E1:Skyrim.esm|
|`Keywords[2]`|0A9B1F:Skyrim.esm|

<a id="r-6fad9cadc937"></a>

## GRIM_MGEF_DES100_ThunderBlast_disintegrate

- Identidade estável Housecarl: `1F8C86:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F3F0E:Skyrim.esm`](../perks/PERKS_050.md#r-366f26d9bcb8)<br>Parameter1.Link=[`0F3F0E:Skyrim.esm`](../perks/PERKS_050.md#r-366f26d9bcb8)|aliases=False; package=False|
|`Conditions[1]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThan 0.15|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=000EDF:Skyrim.esm<br>Parameter1.Link=000EDF:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, FXPersist, HideInUI, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistShock|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAF:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=magicAttachAshPileOnDeath|
|`VirtualMachineAdapter.Scripts[0].Name`|magicAttachAshPileOnDeath|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=ImmunityList|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0F6534:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|ImmunityList|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=MagicEffectShader|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0D22FB:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|MagicEffectShader|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptFloatProperty] Name=fDelay|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|1.25|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|fDelay|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptFloatProperty] Name=ShaderDuration|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Data`|4|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|ShaderDuration|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-efa20ad5d5e4"></a>

## GRIM_MGEF_DES100_Flameheart

- Identidade estável Housecarl: `202EA1:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=202E9E:LostGrimoire.esp|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|202E9E:LostGrimoire.esp|
|`Archetype.Association`|202E9E:LostGrimoire.esp|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoArea, FXPersist, PowerAffectsMagnitude, NoHitEffect|
|`MagicSkill`|Destruction|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|2.5|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|0806E1:Skyrim.esm|
|`Keywords[1]`|024823:Skyrim.esm|
|`Keywords[2]`|0A9B1F:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=GRIM_DES_FlameheartCast|
|`VirtualMachineAdapter.Scripts[0].Name`|GRIM_DES_FlameheartCast|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=GRIM_ENCH_DES_FlameheartExp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`202EA3:LostGrimoire.esp`](../magic/MAGIC_034.md#r-a89a4b061c56)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|GRIM_ENCH_DES_FlameheartExp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-bc7719c4d610"></a>

## GRIM_MGEF_DES_FlameheartExpDmg

- Identidade estável Housecarl: `202EA5:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|TargetNpc=000014:Skyrim.esm<br>Parameter1.Link=000014:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|GetShouldAttack|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|TargetNpc=000014:Skyrim.esm<br>Parameter1.Link=000014:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, FXPersist, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFire|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAD:Skyrim.esm|

<a id="r-499ecd09644d"></a>

## MAG_PoisonCloakFFSelf

- Identidade estável Housecarl: `20496F:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=D2C9E7:MysticismMagic.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`D2C9E7:MysticismMagic.esp`](../magic/MAGIC_062.md#r-52d18667391a)|
|`Archetype.Association`|[`D2C9E7:MysticismMagic.esp`](../magic/MAGIC_062.md#r-52d18667391a)|
|`Archetype.ActorValue`|None|
|`Flags`|DispelWithKeywords, NoArea, FXPersist, NoRecast, PowerAffectsDuration, NoDeathDispel|
|`MagicSkill`|Restoration|
|`ResistValue`|PoisonResist|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|4|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|0B62E4:Skyrim.esm|
|`Keywords[1]`|ADA127:Update.esm|
|`Keywords[2]`|ADA001:Update.esm|

<a id="r-f747b3e707ea"></a>

## MAG_PoisonDamageConcCloak

- Identidade estável Housecarl: `204971:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Restoration|
|`ResistValue`|PoisonResist|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|ADA001:Update.esm|

<a id="r-99fc3006800d"></a>

## VKR_Arc_PinningShot_Effect

- Identidade estável Housecarl: `219DC3:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=SpeedMult<br>Parameter1=SpeedMult|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Reference; ref=000014:Skyrim.esm; index=-1|EqualTo 1|0|Perk=[`2EE993:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_048.md#r-8cad25771d32)<br>Parameter1.Link=[`2EE993:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_048.md#r-8cad25771d32)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|SpeedMult|
|`Flags`|Recover, Detrimental, NoHitEvent, NoArea, HideInUI, Painless, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|2EE994:Vokrii - Minimalistic Perks of Skyrim.esp|
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

<a id="r-b880c985e56c"></a>

## VKR_Arc_Gore_Effect_256

- Identidade estável Housecarl: `219DC5:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsPowerAttacking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|GetRestrained|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[4]`|GetVATSBackAreaFree|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 256|0|Target=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[5]`|GetVATSMode|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[6]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0D5B8B:Skyrim.esm<br>Parameter1.Link=0D5B8B:Skyrim.esm|aliases=False; package=False|
|`Conditions[7]`|HasPerk|record|Reference; ref=000014:Skyrim.esm; index=-1|EqualTo 1|0|Perk=[`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-24f12cde8947)<br>Parameter1.Link=[`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-24f12cde8947)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 8 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Stagger|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoArea, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|219DD0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Keywords[1]`|0D5B8B:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_Pushback_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_Pushback_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_DistanceInFront|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|-224|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_DistanceInFront|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptFloatProperty] Name=VKR_Speed|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|1000|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Speed|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=VKR_ImpactSound|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|013323:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_ImpactSound|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-37270df8fed2"></a>

## VKR_Arc_Gore_Effect_192

- Identidade estável Housecarl: `219DCD:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsPowerAttacking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|GetRestrained|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[4]`|GetVATSBackAreaFree|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 192|0|Target=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[5]`|GetVATSBackAreaFree|record|Subject; ref=(null link); index=-1|LessThan 256|0|Target=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[6]`|GetVATSMode|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[7]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0D5B8B:Skyrim.esm<br>Parameter1.Link=0D5B8B:Skyrim.esm|aliases=False; package=False|
|`Conditions[8]`|HasPerk|record|Reference; ref=000014:Skyrim.esm; index=-1|EqualTo 1|0|Perk=[`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-24f12cde8947)<br>Parameter1.Link=[`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-24f12cde8947)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 9 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Stagger|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoArea, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|219DD0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Keywords[1]`|0D5B8B:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_Pushback_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_Pushback_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_DistanceInFront|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|-160|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_DistanceInFront|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptFloatProperty] Name=VKR_Speed|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|1000|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Speed|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=VKR_ImpactSound|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|013323:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_ImpactSound|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-7d87827632d8"></a>

## VKR_Arc_Gore_Effect_128

- Identidade estável Housecarl: `219DCF:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsPowerAttacking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|GetRestrained|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[4]`|GetVATSBackAreaFree|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 128|0|Target=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[5]`|GetVATSBackAreaFree|record|Subject; ref=(null link); index=-1|LessThan 192|0|Target=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[6]`|GetVATSMode|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[7]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0D5B8B:Skyrim.esm<br>Parameter1.Link=0D5B8B:Skyrim.esm|aliases=False; package=False|
|`Conditions[8]`|HasPerk|record|Reference; ref=000014:Skyrim.esm; index=-1|EqualTo 1|0|Perk=[`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-24f12cde8947)<br>Parameter1.Link=[`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-24f12cde8947)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 9 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Stagger|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoArea, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|219DD0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Keywords[1]`|0D5B8B:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_Pushback_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_Pushback_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_DistanceInFront|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|-96|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_DistanceInFront|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptFloatProperty] Name=VKR_Speed|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|1000|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Speed|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=VKR_ImpactSound|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|013323:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_ImpactSound|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-e907acc6c928"></a>

## VKR_Arc_Gore_Effect_064

- Identidade estável Housecarl: `219DD1:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsPowerAttacking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|GetRestrained|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[4]`|GetVATSBackAreaFree|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 64|0|Target=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[5]`|GetVATSBackAreaFree|record|Subject; ref=(null link); index=-1|LessThan 128|0|Target=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[6]`|GetVATSMode|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[7]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0D5B8B:Skyrim.esm<br>Parameter1.Link=0D5B8B:Skyrim.esm|aliases=False; package=False|
|`Conditions[8]`|HasPerk|record|Reference; ref=000014:Skyrim.esm; index=-1|EqualTo 1|0|Perk=[`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-24f12cde8947)<br>Parameter1.Link=[`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-24f12cde8947)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 9 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Stagger|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoArea, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|219DD0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Keywords[1]`|0D5B8B:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_Pushback_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_Pushback_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_DistanceInFront|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|-32|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_DistanceInFront|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptFloatProperty] Name=VKR_Speed|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|1000|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Speed|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=VKR_ImpactSound|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|013323:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_ImpactSound|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-4c943ed2412d"></a>

## VKR_Arc_Gore_Effect_000

- Identidade estável Housecarl: `219DD2:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsPowerAttacking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Conditions[1]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|GetRestrained|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[4]`|GetVATSBackAreaFree|record|Subject; ref=(null link); index=-1|LessThan 64|0|Target=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[5]`|GetVATSMode|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[6]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0D5B8B:Skyrim.esm<br>Parameter1.Link=0D5B8B:Skyrim.esm|aliases=False; package=False|
|`Conditions[7]`|HasPerk|record|Reference; ref=000014:Skyrim.esm; index=-1|EqualTo 1|0|Perk=[`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-24f12cde8947)<br>Parameter1.Link=[`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-24f12cde8947)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 8 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Stagger|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoArea, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|219DD0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Keywords[1]`|0D5B8B:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_Pushback_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_Pushback_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_DistanceInFront|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|-16|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_DistanceInFront|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptFloatProperty] Name=VKR_Speed|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|1000|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Speed|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=VKR_ImpactSound|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|013323:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_ImpactSound|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-9c56a21c1be9"></a>

## GRIM_MGEF_DES00_Flare

- Identidade estável Housecarl: `2214D9:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

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
|`TargetType`|Aimed|
|`BaseCost`|1.3|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAD:Skyrim.esm|

<a id="r-a1f7d2c40772"></a>

## GRIM_MGEF_DES00_Flare_extra

- Identidade estável Housecarl: `2214DC:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetDetected|record|Subject; ref=(null link); index=-1|EqualTo 0|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, HideInUI, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFire|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAD:Skyrim.esm|

<a id="r-b1be952262cd"></a>

## GRIM_MGEF_DES00_Zap

- Identidade estável Housecarl: `2214F5:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistShock|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|1.7|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAF:Skyrim.esm|

<a id="r-3643c5c72456"></a>

## GRIM_MGEF_DES00_Zap_extra

- Identidade estável Housecarl: `2214F6:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetDetected|record|Subject; ref=(null link); index=-1|EqualTo 0|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, HideInUI, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistShock|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAF:Skyrim.esm|

<a id="r-f02ba8a85a48"></a>

## GRIM_MGEF_DES00_IceShiv

- Identidade estável Housecarl: `221501:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, NoRecast, PowerAffectsMagnitude|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFrost|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|1.5|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAE:Skyrim.esm|

<a id="r-dea1f287a96c"></a>

## GRIM_MGEF_DES00_IceShiv_extra

- Identidade estável Housecarl: `221504:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetDetected|record|Subject; ref=(null link); index=-1|EqualTo 0|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoDuration, NoArea, HideInUI, NoRecast, PowerAffectsMagnitude|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFrost|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAE:Skyrim.esm|

<a id="r-3b45c81e3a7b"></a>

## GRIM_MGEF_DES50_Firebomb

- Identidade estável Housecarl: `22150C:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetDead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, FXPersist, NoRecast, PowerAffectsMagnitude, Painless|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFire|
|`CastType`|FireAndForget|
|`TargetType`|TargetActor|
|`BaseCost`|1.3|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAD:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=GRIM_DES_Firebomb|
|`VirtualMachineAdapter.Scripts[0].Name`|GRIM_DES_Firebomb|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=GRIM_ENCH_DES_FirebombExp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`221510:LostGrimoire.esp`](../magic/MAGIC_034.md#r-34d6dec75a37)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|GRIM_ENCH_DES_FirebombExp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=fxsStart|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|10BEA9:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|fxsStart|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=GRIM_ACT_DES_Firebomb_exploder|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|235923:LostGrimoire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|GRIM_ACT_DES_Firebomb_exploder|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-45db528e1830"></a>

## GRIM_MGEF_DES_IntenseFlamesContact_PC

- Identidade estável Housecarl: `221513:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Reference; ref=000014:Skyrim.esm; index=-1|EqualTo 1|0|Perk=[`0F392E:Skyrim.esm`](../perks/PERKS_050.md#r-c98521bd5920)<br>Parameter1.Link=[`0F392E:Skyrim.esm`](../perks/PERKS_050.md#r-c98521bd5920)|aliases=False; package=False|
|`Conditions[1]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThan 0.2|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Conditions[2]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[4]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013797:Skyrim.esm<br>Parameter1.Link=013797:Skyrim.esm|aliases=False; package=False|
|`Conditions[5]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[6]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|
|`Conditions[7]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[8]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|TargetNpc=000014:Skyrim.esm<br>Parameter1.Link=000014:Skyrim.esm|aliases=False; package=False|
|`Conditions[9]`|GetShouldAttack|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|TargetNpc=000014:Skyrim.esm<br>Parameter1.Link=000014:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 10 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Demoralize|
|`Archetype.ActorValue`|Confidence|
|`Flags`|Hostile, Recover, Detrimental, DispelWithKeywords, NoArea, FXPersist, HideInUI, NoRecast, PowerAffectsDuration|
|`MagicSkill`|Destruction|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|078098:Skyrim.esm|

<a id="r-5e1a837599de"></a>

## GRIM_MGEF_DES_FirebombExpDmg

- Identidade estável Housecarl: `221514:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, FXPersist, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFire|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAD:Skyrim.esm|

<a id="r-d441d44c9064"></a>

## MAG_PerkCheckerEffect

- Identidade estável Housecarl: `223518:Thaumaturgy.esp`.
- Tipo: `MagicEffect`; winner: `Thaumaturgy.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoArea, HideInUI, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|ADA129:Update.esm|

<a id="r-34b71ff36209"></a>

## VKR_Bck_BlockOnHit_Effect_Ab

- Identidade estável Housecarl: `223FDA:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoHitEvent, NoDuration, NoMagnitude, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_PokeTheDragon_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_PokeTheDragon_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VKR_Bck_BlockOnHit_Spell_ProcOnTarget|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`223FDE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_047.md#r-6bd704f79e20)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_Bck_BlockOnHit_Spell_ProcOnTarget|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-5b7460382aba"></a>

## VKR_Bck_BlockOnHit_Effect_ProcOnTarget_PokeTheDragon

- Identidade estável Housecarl: `223FDD:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`2DF672:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_048.md#r-8472fda89f19)<br>Parameter1.Link=[`2DF672:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_048.md#r-8472fda89f19)|aliases=False; package=False|
|`Conditions[1]`|GetRandomPercent|record|Subject; ref=(null link); index=-1|LessThan 15|0|—|aliases=False; package=False|
|`Conditions[2]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|NotEqualTo 7|0|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Conditions[3]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|NotEqualTo 7|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Conditions[4]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|NotEqualTo 12|0|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Conditions[5]`|GetEquippedItemType|record|Subject; ref=(null link); index=-1|NotEqualTo 12|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 6 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Stagger|
|`Archetype.ActorValue`|None|
|`Flags`|Detrimental, NoArea, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_DispelPokeTheDragonOnHit_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_DispelPokeTheDragonOnHit_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=VKR_Bck_PokeTheDragon_Message_Available|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|451244:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Bck_PokeTheDragon_Message_Available|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VKR_Bck_050_PokeTheDragon_Perk|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`2DF672:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_048.md#r-8472fda89f19)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Bck_050_PokeTheDragon_Perk|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
