# Cadeias mágicas referenciadas — parte 025

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-9b8b8d2b251d"></a>

## VKR_Sne_SilentRoll_Effect_Proc_SilentRoll2

- Identidade estável Housecarl: `302DB7:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`302DB9:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_057.md#r-b5a9076ef3d9)<br>Parameter1.Link=[`302DB9:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_057.md#r-b5a9076ef3d9)|aliases=False; package=False|
|`Conditions[1]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoMagnitude, NoArea, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-f43a3dc65679"></a>

## VKR_Sne_SilentRoll_Effect_Proc_LungeRoll

- Identidade estável Housecarl: `302DBA:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`302DB6:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_058.md#r-93a26b2810ef)<br>Parameter1.Link=[`302DB6:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_058.md#r-93a26b2810ef)|aliases=False; package=False|
|`Conditions[1]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoMagnitude, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-88bbd578b8f9"></a>

## VKR_Sne_ShadowWarrior_Effect_Proc_Roll

- Identidade estável Housecarl: `302DBF:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`063F4B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_013.md#r-6a12b429b183)<br>Parameter1.Link=[`063F4B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_013.md#r-6a12b429b183)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`0F1989:Skyrim.esm`](../magic/MAGIC_017.md#r-ef4655e30e91)<br>Parameter1.Link=[`0F1989:Skyrim.esm`](../magic/MAGIC_017.md#r-ef4655e30e91)|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`017121:Skyrim.esm`](../magic/MAGIC_008.md#r-178501985423)<br>Parameter1.Link=[`017121:Skyrim.esm`](../magic/MAGIC_008.md#r-178501985423)|aliases=False; package=False|
|`Conditions[3]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`1058A9:Skyrim.esm`](../magic/MAGIC_018.md#r-760b79fb33dc)<br>Parameter1.Link=[`1058A9:Skyrim.esm`](../magic/MAGIC_018.md#r-760b79fb33dc)|aliases=False; package=False|
|`Conditions[4]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058214:Skyrim.esm`](../perks/PERKS_058.md#r-ac3482fb1962)<br>Parameter1.Link=[`058214:Skyrim.esm`](../perks/PERKS_058.md#r-ac3482fb1962)|aliases=False; package=False|
|`Conditions[5]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 6 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Invisibility|
|`Archetype.ActorValue`|Invisibility|
|`Flags`|Recover, NoHitEvent, NoMagnitude, NoArea, FXPersist, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|5|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01EA6F:Skyrim.esm|

<a id="r-2729940f0265"></a>

## VKR_Sne_ShadowWarrior_Effect_Proc_Roll_Cooldown

- Identidade estável Housecarl: `302DC0:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`063F4B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_013.md#r-6a12b429b183)<br>Parameter1.Link=[`063F4B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_013.md#r-6a12b429b183)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`0F1989:Skyrim.esm`](../magic/MAGIC_017.md#r-ef4655e30e91)<br>Parameter1.Link=[`0F1989:Skyrim.esm`](../magic/MAGIC_017.md#r-ef4655e30e91)|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`017121:Skyrim.esm`](../magic/MAGIC_008.md#r-178501985423)<br>Parameter1.Link=[`017121:Skyrim.esm`](../magic/MAGIC_008.md#r-178501985423)|aliases=False; package=False|
|`Conditions[3]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`1058A9:Skyrim.esm`](../magic/MAGIC_018.md#r-760b79fb33dc)<br>Parameter1.Link=[`1058A9:Skyrim.esm`](../magic/MAGIC_018.md#r-760b79fb33dc)|aliases=False; package=False|
|`Conditions[4]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058214:Skyrim.esm`](../perks/PERKS_058.md#r-ac3482fb1962)<br>Parameter1.Link=[`058214:Skyrim.esm`](../perks/PERKS_058.md#r-ac3482fb1962)|aliases=False; package=False|
|`Conditions[5]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 6 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoHitEvent, NoMagnitude, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-63d75a1b0cd5"></a>

## VKR_Sne_EscapeArtist_Effect_Proc

- Identidade estável Housecarl: `302DC1:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetCombatTargetHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=099306:Skyrim.esm<br>Parameter1.Link=099306:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoDuration, NoMagnitude, HideInUI, Painless, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_EscapeArtist_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_EscapeArtist_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptIntProperty] Name=VKR_XP|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|20|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_XP|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-a0d802872909"></a>

## VKR_Alc_Druid_Effect_Ab

- Identidade estável Housecarl: `3120FF:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`Flags`|NoHitEvent, NoDuration, NoMagnitude, NoArea, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_Druid_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_Druid_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 5 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_UpdateRate|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|5|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_UpdateRate|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VKR_Alc_Druid_FormList|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|312100:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Alc_Druid_FormList|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptFloatProperty] Name=VKR_Radius|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Data`|640|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_Radius|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=VKR_Shader|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|04E220:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|VKR_Shader|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-b9366e713938"></a>

## VKR_Alc_Stimulants_Effect_Ab

- Identidade estável Housecarl: `312103:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|MagickaRate|
|`Flags`|Recover, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.1|

<a id="r-a5422a6c9320"></a>

## VKR_Con_BloodZombie_Effect_CloakProc

- Identidade estável Housecarl: `31720C:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Health|
|`Flags`|Detrimental, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-75059b37dfd0"></a>

## VKR_Con_GhoulFrenzy_Effect_Proc_BloodZombie

- Identidade estável Housecarl: `317210:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=31720E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`31720E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-96d351287bc7)|
|`Archetype.Association`|[`31720E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-96d351287bc7)|
|`Archetype.ActorValue`|None|
|`Flags`|DispelWithKeywords, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|317214:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-0058c75f85c9"></a>

## VKR_Con_GhoulFrenzy_Effect_Proc_BloodZombie_ByCloak

- Identidade estável Housecarl: `317215:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=317214:Vokrii - Minimalistic Perks of Skyrim.esp<br>Parameter1.Link=317214:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Conditions[1]`|GetShouldAttack|record|Subject; ref=(null link); index=-1|EqualTo 0|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=31720E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`31720E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-96d351287bc7)|
|`Archetype.Association`|[`31720E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-96d351287bc7)|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, DispelWithKeywords, NoArea, HideInUI, PowerAffectsMagnitude, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|317214:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-913368507d54"></a>

## VKR_Con_Necromaster_Effect_TradeProc

- Identidade estável Housecarl: `317217:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`Flags`|NoMagnitude, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_NecromasterTrade_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_NecromasterTrade_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-cf6a76bfe14d"></a>

## VKR_Con_BloodZombieReapplicatorCloak_Effect_Ab

- Identidade estável Housecarl: `31721C:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=31721A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`31721A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-2ecfcd2a33d2)|
|`Archetype.Association`|[`31721A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-2ecfcd2a33d2)|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoDuration, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-98642ddb6379"></a>

## VKR_Con_ElementalConflux_Effect_ToBoundWeapons_Fire

- Identidade estável Housecarl: `31C321:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, HideInUI, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|

<a id="r-32217eaf06e5"></a>

## VKR_Con_ElementalConflux_Effect_ToBoundWeapons_Frost

- Identidade estável Housecarl: `31C323:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, FXPersist, HideInUI, NoRecast, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|

<a id="r-bac2413e9ef1"></a>

## VKR_Con_ElementalConflux_Effect_ToBoundWeapons_Shock

- Identidade estável Housecarl: `31C324:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|

<a id="r-ef7c4e3f7dbd"></a>

## GRIM_MGEF_DES75_Overcharge

- Identidade estável Housecarl: `31E9B7:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, FXPersist, Painless|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistShock|
|`CastType`|Concentration|
|`TargetType`|TargetActor|
|`BaseCost`|20|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAF:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=GRIM_DES_Overcharge|
|`VirtualMachineAdapter.Scripts[0].Name`|GRIM_DES_Overcharge|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptBoolProperty] Name=wasDualCast|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|False|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|wasDualCast|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=spOverchargeDmg|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`31E9BA:LostGrimoire.esp`](../magic/MAGIC_049.md#r-f730930a55ae)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|spOverchargeDmg|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=ThisSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|[`31E9BB:LostGrimoire.esp`](../magic/MAGIC_049.md#r-e22aa45043d2)|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|ThisSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-03e55a576a88"></a>

## GRIM_MGEF_DES_OverchargeDmg

- Identidade estável Housecarl: `31E9B8:LostGrimoire.esp`.
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
|`Flags`|Hostile, Detrimental, NoArea, HideInUI, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistShock|
|`CastType`|FireAndForget|
|`TargetType`|TargetActor|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAF:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=Utility_PlaceExplosion|
|`VirtualMachineAdapter.Scripts[0].Name`|Utility_PlaceExplosion|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=exp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|31E9B9:LostGrimoire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|exp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=expScale|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|0.5|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|expScale|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-e4613296456d"></a>

## GRIM_MGEF_DES75_Overcharge_dual

- Identidade estável Housecarl: `31E9BF:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, FXPersist, Painless|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistShock|
|`CastType`|Concentration|
|`TargetType`|TargetActor|
|`BaseCost`|20|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAF:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=GRIM_DES_Overcharge|
|`VirtualMachineAdapter.Scripts[0].Name`|GRIM_DES_Overcharge|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptBoolProperty] Name=wasDualCast|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|True|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|wasDualCast|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=spOverchargeDmg|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`31E9BA:LostGrimoire.esp`](../magic/MAGIC_049.md#r-f730930a55ae)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|spOverchargeDmg|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=ThisSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|[`31E9BB:LostGrimoire.esp`](../magic/MAGIC_049.md#r-e22aa45043d2)|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|ThisSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-979df62460bd"></a>

## VKR_Alc_Adrenaline_Effect_Ab

- Identidade estável Housecarl: `321426:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`Flags`|Recover, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.1|
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

<a id="r-8bc507861b36"></a>

## VKR_Any_AlterationCrossoverWarmage_Effect

- Identidade estável Housecarl: `32142B:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`Flags`|Recover, NoHitEvent, NoMagnitude, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|

<a id="r-4c502868e259"></a>

## VKR_Alt_SubjugationField_Effect_CloakProc_Magicka

- Identidade estável Housecarl: `32142F:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01EA70:Skyrim.esm<br>Parameter1.Link=01EA70:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`01D74E:Dragonborn.esm`](../magic/MAGIC_009.md#r-2290a2846d09)<br>Parameter1.Link=[`01D74E:Dragonborn.esm`](../magic/MAGIC_009.md#r-2290a2846d09)|aliases=False; package=False|
|`Conditions[3]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`017732:Dragonborn.esm`](../magic/MAGIC_008.md#r-aaf0ed4ac6ec)<br>Parameter1.Link=[`017732:Dragonborn.esm`](../magic/MAGIC_008.md#r-aaf0ed4ac6ec)|aliases=False; package=False|
|`Conditions[4]`|GetActorValue|record|Subject; ref=(null link); index=-1|GreaterThan 0|0|ActorValue=Magicka<br>Parameter1=Magicka|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 5 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Magicka|
|`Flags`|Detrimental, NoHitEvent, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-c9224f2ef16c"></a>

## VKR_Alt_SubjugationField_Effect_CloakProc_Stamina

- Identidade estável Housecarl: `321431:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01EA70:Skyrim.esm<br>Parameter1.Link=01EA70:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`01D74E:Dragonborn.esm`](../magic/MAGIC_009.md#r-2290a2846d09)<br>Parameter1.Link=[`01D74E:Dragonborn.esm`](../magic/MAGIC_009.md#r-2290a2846d09)|aliases=False; package=False|
|`Conditions[3]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`017732:Dragonborn.esm`](../magic/MAGIC_008.md#r-aaf0ed4ac6ec)<br>Parameter1.Link=[`017732:Dragonborn.esm`](../magic/MAGIC_008.md#r-aaf0ed4ac6ec)|aliases=False; package=False|
|`Conditions[4]`|GetActorValue|record|Subject; ref=(null link); index=-1|GreaterThan 0|0|ActorValue=Stamina<br>Parameter1=Stamina|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 5 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Absorb|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Detrimental, NoHitEvent, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-d12a5c40823e"></a>

## VKR_Alt_SubjugationField_Effect_Ab

- Identidade estável Housecarl: `321435:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=321433:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`321433:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-be6e41aa1572)|
|`Archetype.Association`|[`321433:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-be6e41aa1572)|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoHitEvent, NoDuration, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-1fa894d8f390"></a>

## VKR_Alt_SubjugationField_Effect_CloakProc_MagickaHaltRegen

- Identidade estável Housecarl: `321437:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01EA70:Skyrim.esm<br>Parameter1.Link=01EA70:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`01D74E:Dragonborn.esm`](../magic/MAGIC_009.md#r-2290a2846d09)<br>Parameter1.Link=[`01D74E:Dragonborn.esm`](../magic/MAGIC_009.md#r-2290a2846d09)|aliases=False; package=False|
|`Conditions[3]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`017732:Dragonborn.esm`](../magic/MAGIC_008.md#r-aaf0ed4ac6ec)<br>Parameter1.Link=[`017732:Dragonborn.esm`](../magic/MAGIC_008.md#r-aaf0ed4ac6ec)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 4 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=321430:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|321430:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Association`|321430:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.ActorValue`|MagickaRateMult|
|`Flags`|Recover, Detrimental, NoHitEvent, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|321430:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-2ac7be2056d4"></a>

## VKR_Alt_SubjugationField_Effect_CloakProc_StaminaHaltRegen

- Identidade estável Housecarl: `321438:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01EA70:Skyrim.esm<br>Parameter1.Link=01EA70:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`01D74E:Dragonborn.esm`](../magic/MAGIC_009.md#r-2290a2846d09)<br>Parameter1.Link=[`01D74E:Dragonborn.esm`](../magic/MAGIC_009.md#r-2290a2846d09)|aliases=False; package=False|
|`Conditions[3]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`017732:Dragonborn.esm`](../magic/MAGIC_008.md#r-aaf0ed4ac6ec)<br>Parameter1.Link=[`017732:Dragonborn.esm`](../magic/MAGIC_008.md#r-aaf0ed4ac6ec)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 4 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=321432:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|321432:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Association`|321432:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.ActorValue`|StaminaRateMult|
|`Flags`|Recover, Detrimental, NoHitEvent, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|ResistMagic|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|321432:Vokrii - Minimalistic Perks of Skyrim.esp|
