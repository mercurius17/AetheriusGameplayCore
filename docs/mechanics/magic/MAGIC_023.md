# Cadeias mágicas referenciadas — parte 023

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-0fbd791b593c"></a>

## VKR_Res_Intervention_Effect_ProcLockout

- Identidade estável Housecarl: `24C870:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`Flags`|Detrimental, NoHitEvent, NoMagnitude, NoArea, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-4d45f8d89890"></a>

## VKR_Res_Intervention_Effect_Ab_Available

- Identidade estável Housecarl: `24C875:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`Flags`|Recover, NoHitEvent, NoDuration, NoMagnitude, NoArea, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0D5C2E:Skyrim.esm|

<a id="r-97feefa87a3e"></a>

## VKR_Res_MagickaRecovery_Effect_Ab

- Identidade estável Housecarl: `24C878:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|MagickaRate|
|`Flags`|Recover, NoHitEvent, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-9c8b9e711e0a"></a>

## VKR_Alt_MagicResistance_Effect_Ab

- Identidade estável Housecarl: `251985:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|ResistMagic|
|`Flags`|Recover, NoHitEvent, NoDuration, PowerAffectsMagnitude, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-b45d66b7ec78"></a>

## VKR_Con_GhoulFrenzy_Effect_Proc_MovementSpeed

- Identidade estável Housecarl: `251987:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
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

<a id="r-db18d5c72798"></a>

## VKR_Des_FrostOnHit_Effect_Proc_ChillingFrost

- Identidade estável Housecarl: `25BB8A:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=25BB8B:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|25BB8B:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Association`|25BB8B:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.ActorValue`|WeaponSpeedMult|
|`Flags`|Recover, Detrimental|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|25BB8B:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-e65574da16ca"></a>

## VKR_Des_FrostOnHit_Effect_Proc_WintersGrasp

- Identidade estável Housecarl: `25BB8E:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`02A503:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_050.md#r-42cb30a1904e)<br>Parameter1.Link=[`02A503:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_050.md#r-42cb30a1904e)|aliases=False; package=False|
|`Conditions[1]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThan 0.25|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|OR|Keyword=0D5B8B:Skyrim.esm<br>Parameter1.Link=0D5B8B:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`25BB8E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-e65574da16ca)<br>Parameter1.Link=[`25BB8E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-e65574da16ca)|aliases=False; package=False|
|`Conditions[4]`|GetIsFlying|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[5]`|GetRestrained|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[6]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[7]`|GetVATSMode|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[8]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 9 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Detrimental, NoArea, FXPersist, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0D5B8B:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_GlacialPrison_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_GlacialPrison_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VKR_Imod|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|04408A:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_Imod|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=VKR_PrisonMgef|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|[`25BB8E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-e65574da16ca)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_PrisonMgef|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=FXEmptyActivator|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0B79FF:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|FXEmptyActivator|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=VKR_Sound|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|036515:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_Sound|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-f0dc8f5e196a"></a>

## VKR_Des_FireOnHit_Effect_Proc_DevouringFlames

- Identidade estável Housecarl: `25BB8F:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F392E:Skyrim.esm`](../perks/PERKS_050.md#r-c98521bd5920)<br>Parameter1.Link=[`0F392E:Skyrim.esm`](../perks/PERKS_050.md#r-c98521bd5920)|aliases=False; package=False|
|`Conditions[1]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThan 0.2|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist, NoRecast, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFire|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|1|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|32B648:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Keywords[1]`|01CEAD:Skyrim.esm|
|`Keywords[2]`|025912:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MG01FireEffectScript|
|`VirtualMachineAdapter.Scripts[0].Name`|MG01FireEffectScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=MG01|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|01F251:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|MG01|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-a543b5c16a04"></a>

## VKR_Des_ShockOnHit_Effect_Proc_CracklingSphere

- Identidade estável Housecarl: `25BB97:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`024E3F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_050.md#r-e916231fc013)<br>Parameter1.Link=[`024E3F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_050.md#r-e916231fc013)|aliases=False; package=False|
|`Conditions[1]`|GetRandomPercent|record|Subject; ref=(null link); index=-1|LessThan 20|0|—|aliases=False; package=False|
|`Conditions[2]`|GetDead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[3]`|GetVATSMode|record|Reference; ref=000014:Skyrim.esm; index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[4]`|IsPlayerGrabbedRef|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Target=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[5]`|GetRestrained|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[6]`|GetIsFlying|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[7]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0D5B8B:Skyrim.esm<br>Parameter1.Link=0D5B8B:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 8 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Stagger|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoArea, FXPersist, HideInUI, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0D5B8B:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_CracklingSphere_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_CracklingSphere_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptFloatProperty] Name=VKR_LiftSpeed|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|48|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_LiftSpeed|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_LiftHeight|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|128|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_LiftHeight|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-b7eeaf5e8009"></a>

## VKR_Loc_Looter_Effect_SetGlobalAb

- Identidade estável Housecarl: `26AEA8:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_ControlGlobal_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_ControlGlobal_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptFloatProperty] Name=VKR_In|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|0|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_In|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_Out|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|100|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Out|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VKR_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0424EA:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-63c5ef4eebe1"></a>

## VKR_Loc_TreasureHunter_Effect_SetGlobalAb

- Identidade estável Housecarl: `26AEA9:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_ControlGlobal_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_ControlGlobal_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptFloatProperty] Name=VKR_In|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|85|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_In|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_Out|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|90|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Out|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VKR_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|10319F:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-03a7a63073de"></a>

## VKR_Loc_Archaeologist_Effect_SetGlobalAb

- Identidade estável Housecarl: `26AEAF:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_ControlGlobal_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_ControlGlobal_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptFloatProperty] Name=VKR_In|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|0|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_In|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_Out|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|100|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Out|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VKR_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|26AEAE:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-aca4c4b5052c"></a>

## VKR_Pic_Payday_Effect_SetGlobalAb

- Identidade estável Housecarl: `26FFBB:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_ControlGlobal_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_ControlGlobal_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptFloatProperty] Name=VKR_In|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|0|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_In|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_Out|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|100|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Out|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VKR_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|26FFBA:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-4869475b8e95"></a>

## VKR_Pic_DeathsEmperor1_Effect_CloakProc

- Identidade estável Housecarl: `2750BF:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetItemCount|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 1|0|ItemOrList=032228:Vokrii - Minimalistic Perks of Skyrim.esp<br>Parameter1.Link=032228:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, Detrimental, NoHitEvent, NoArea, HideInUI, NoRecast, Painless, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|2750C5:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_DeathsEmperorReturn_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_DeathsEmperorReturn_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VKR_Coin|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|03222A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_Coin|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VKR_Pic_DeathsEmperor_Message|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|2750C6:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Pic_DeathsEmperor_Message|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-9ca35ef0d060"></a>

## VKR_Pic_DeathsEmperor_Effect_Ab

- Identidade estável Housecarl: `2750C0:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=2750C1:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`2750C1:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-8f0f753b36a6)|
|`Archetype.Association`|[`2750C1:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-8f0f753b36a6)|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoDuration, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_StartStopQuest_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_StartStopQuest_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VKR_Quest|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|03222A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_Quest|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-ec806feb8e62"></a>

## VKR_Spe_Tongue_Effect_Ab

- Identidade estável Housecarl: `2750CA:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`Flags`|Recover, NoHitEvent, NoDuration, NoMagnitude, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0D5B90:Skyrim.esm|

<a id="r-196efce927a7"></a>

## VKR_Spe_SpeakWithAnimals_Effect_ProcCommand

- Identidade estável Housecarl: `2750D3:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`Flags`|Detrimental, NoHitEvent, NoMagnitude, NoArea, HideInUI, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_MakeFollowerProc_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_MakeFollowerProc_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VKR_Shared_Quest|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|265D9D:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_Shared_Quest|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=VKR_Impact|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|011CDE:Dawnguard.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Impact|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptIntProperty] Name=VKR_FollowerID|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_FollowerID|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptBoolProperty] Name=VKR_KillPrevious|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Data`|False|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_KillPrevious|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-2be34f26aee0"></a>

## VKR_Spe_SpecialStock_Effect_SetGlobalAb

- Identidade estável Housecarl: `27A1DE:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_ControlGlobal_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_ControlGlobal_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptFloatProperty] Name=VKR_In|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|0|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_In|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_Out|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|100|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Out|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VKR_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|27A1DD:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Global|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-0cca563e5553"></a>

## VKR_Des_ShockOnHit_Effect_Proc_DeafeningShock

- Identidade estável Housecarl: `2936F2:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetRandomPercent|record|Subject; ref=(null link); index=-1|LessThan 20|0|—|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`2936F2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-0cca563e5553)<br>Parameter1.Link=[`2936F2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_023.md#r-0cca563e5553)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Magicka|
|`Flags`|Detrimental, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_InterruptSpam_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_InterruptSpam_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VKR_Imod|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|091939:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_Imod|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=VKR_Sound|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|038B03:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Sound|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptFloatProperty] Name=VKR_UpdateRate|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|0.35|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_UpdateRate|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-338fe5ea92c0"></a>

## VKR_Des_GenericAttackSpeedBuff_Effect

- Identidade estável Housecarl: `2987F8:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetActorValue|record|Subject; ref=(null link); index=-1|EqualTo 0|0|ActorValue=WeaponSpeedMult<br>Parameter1=WeaponSpeedMult|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=2987F9:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|2987F9:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Association`|2987F9:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.ActorValue`|WeaponSpeedMult|
|`Flags`|Recover, NoHitEvent, HideInUI, Painless, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|25BB8B:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Keywords[1]`|2987F9:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-adfd73c94759"></a>

## VKR_Des_HethothsDisjunction_Effect_CloakProc_Frost

- Identidade estável Housecarl: `2987FD:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`10CBDE:Skyrim.esm`](../magic/MAGIC_019.md#r-5ecfc8342690)<br>Parameter1.Link=[`10CBDE:Skyrim.esm`](../magic/MAGIC_019.md#r-5ecfc8342690)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|ResistFrost|
|`Flags`|Recover, Detrimental, NoHitEvent, NoArea, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-bc3bf4376c78"></a>

## VKR_Des_HethothsDisjunction_Effect_CloakProc_Shock

- Identidade estável Housecarl: `2987FE:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`10CBDF:Skyrim.esm`](../magic/MAGIC_019.md#r-470e668c08fd)<br>Parameter1.Link=[`10CBDF:Skyrim.esm`](../magic/MAGIC_019.md#r-470e668c08fd)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|ResistShock|
|`Flags`|Recover, Detrimental, NoHitEvent, NoArea, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-6f4c0ffe248c"></a>

## COTV_VampireBatFormCooldownEffect

- Identidade estável Housecarl: `29CA5F:Curse of the Vampire.esp`.
- Tipo: `MagicEffect`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasMagicEffect|record|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`29CA5F:Curse of the Vampire.esp`](../magic/MAGIC_023.md#r-6f4c0ffe248c)<br>Parameter1.Link=[`29CA5F:Curse of the Vampire.esp`](../magic/MAGIC_023.md#r-6f4c0ffe248c)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-41bca10e2b7d"></a>

## VKR_Des_ElementalShield_Effect_Ab_Fire

- Identidade estável Housecarl: `29D916:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|ResistFire|
|`Flags`|Recover, NoHitEvent, NoDuration, NoArea, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-df3864af09e4"></a>

## VKR_Des_ElementalShield_Effect_Ab_Frost

- Identidade estável Housecarl: `29D917:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|ResistFrost|
|`Flags`|Recover, NoHitEvent, NoDuration, NoArea, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|
