# Cadeias mágicas referenciadas — parte 011

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-26c27748ddee"></a>

## VKR_Alt_AlterSelfAttributes_Effect_FortifyMagicka

- Identidade estável Housecarl: `02B563:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Magicka|
|`Flags`|Recover, NoHitEvent, NoDuration, FXPersist, PowerAffectsMagnitude, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-3daf9462fcfd"></a>

## VKR_Alt_AlterSelfAttributes_Effect_FortifyStamina

- Identidade estável Housecarl: `02B564:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Recover, NoHitEvent, NoDuration, FXPersist, PowerAffectsMagnitude, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-47a6577d3350"></a>

## VKR_Alt_AlterSelfAttributes_Effect_Ab

- Identidade estável Housecarl: `02B56B:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_AlterSelfAt_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_AlterSelfAt_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=VKR_AlterSelf_Message|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|02B56C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_AlterSelf_Message|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectListProperty] Name=VKR_AlterSelf_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[0]`|[ScriptObjectProperty] Object=02B565:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[0].Object`|[`02B565:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-17b16fff9468)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[0].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[1]`|[ScriptObjectProperty] Object=02B567:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[1].Object`|[`02B567:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-80e264ec45f1)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[1].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[2]`|[ScriptObjectProperty] Object=02B569:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[2].Object`|[`02B569:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-b2c3dd18d174)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[2].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[1].Objects[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_AlterSelf_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptIntProperty] Name=VKR_AddIterations|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_AddIterations|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-af2e425f0f5a"></a>

## VoiceElementalFury

- Identidade estável Housecarl: `02C56F:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectEnhanceWeaponArchetype] Association=02C594:Skyrim.esm|
|`Archetype.Type`|EnhanceWeapon|
|`Archetype.AssociationKey`|[`02C594:Skyrim.esm`](../magic/MAGIC_034.md#r-78759c3c7f38)|
|`Archetype.Association`|[`02C594:Skyrim.esm`](../magic/MAGIC_034.md#r-78759c3c7f38)|
|`Archetype.ActorValue`|WeaponSpeedMult|
|`Flags`|Recover, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|046B99:Skyrim.esm|
|`Keywords[1]`|900D62:unofficial skyrim special edition patch.esp|

<a id="r-cc541a938059"></a>

## VoiceElementalFuryEnchantment

- Identidade estável Housecarl: `02C593:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `unofficial skyrim special edition patch.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, DispelWithKeywords, NoArea, FXPersist, NoRecast, PowerAffectsMagnitude, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|10E2B4:Skyrim.esm|
|`Keywords[1]`|900D62:unofficial skyrim special edition patch.esp|

<a id="r-be7fa6a70d92"></a>

## _SSPConjureShadowEffect

- Identidade estável Housecarl: `02D510:ShadowSpellPackage.esp`.
- Tipo: `MagicEffect`; winner: `ShadowSpellPackage.esp`; profundidade de override: 1.

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
|`Flags`|NoMagnitude, NoArea, FXPersist, NoRecast, PowerAffectsMagnitude|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|32|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|04193A:ShadowSpellPackage.esp|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=_SSPConjureShadowScript|
|`VirtualMachineAdapter.Scripts[0].Name`|_SSPConjureShadowScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 5 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=cooldown|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`041938:ShadowSpellPackage.esp`](../perks/PERKS_020.md#r-1609e956f37b)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|cooldown|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=cast_effect|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|01CAAE:ShadowSpellPackage.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|cast_effect|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=buff|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`041937:ShadowSpellPackage.esp`](../perks/PERKS_020.md#r-59a4e8042dda)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|buff|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=Shadow_Imod|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|02D512:ShadowSpellPackage.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|Shadow_Imod|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=Shadow_Sound|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|046A3E:ShadowSpellPackage.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|Shadow_Sound|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-249382423959"></a>

## AbFortifySneak

- Identidade estável Housecarl: `02E1C6:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|Sneak|
|`Flags`|Recover, NoArea, HideInUI, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|5|

<a id="r-69b378e07673"></a>

## VKR_Pic_SlumRat_Effect_Ab

- Identidade estável Housecarl: `033283:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_SlumRat_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_SlumRat_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=VKR_Pic_SlumRat_Spell_Proc|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|[`033288:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-e3bfd731ad96)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Pic_SlumRat_Spell_Proc|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-950ee47c2276"></a>

## VKR_Pic_SlumRat_Effect_Proc

- Identidade estável Housecarl: `033287:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=033299:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|033299:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Association`|033299:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.ActorValue`|SpeedMult|
|`Flags`|Recover, NoHitEvent, NoArea|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|033299:Vokrii - Minimalistic Perks of Skyrim.esp|
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

<a id="r-41b3b51b6d5d"></a>

## VKR_Pic_LawlessTimes_Effect_Ab

- Identidade estável Housecarl: `034870:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_LawlessWorld_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_LawlessWorld_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 20 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=CrimeFactionThievesGuild|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|10A794:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|CrimeFactionThievesGuild|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=CrimeFactionEastmarch|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0267E3:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|CrimeFactionEastmarch|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VKR_Pic_060_LawlessTimes2_Perk|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`4B1599:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-58dc98ad5b07)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Pic_060_LawlessTimes2_Perk|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectListProperty] Name=VKR_ReducedToZero|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects`|[list: 14 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[0]`|[ScriptObjectProperty] Object=073E6F:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[0].Object`|073E6F:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[0].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[1]`|[ScriptObjectProperty] Object=073E70:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[1].Object`|073E70:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[1].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[2]`|[ScriptObjectProperty] Object=073E71:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[2].Object`|073E71:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[2].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[3]`|[ScriptObjectProperty] Object=073E72:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[3].Object`|073E72:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[3].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[4]`|[ScriptObjectProperty] Object=073E73:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[4].Object`|073E73:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[4].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[5]`|[ScriptObjectProperty] Object=073E74:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[5].Object`|073E74:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[5].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[6]`|[ScriptObjectProperty] Object=073E75:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[6].Object`|073E75:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[6].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[6].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[6].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[7]`|[ScriptObjectProperty] Object=073E76:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[7].Object`|073E76:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[7].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[7].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[7].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[8]`|[ScriptObjectProperty] Object=073E77:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[8].Object`|073E77:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[8].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[8].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[8].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[9]`|[ScriptObjectProperty] Object=073E78:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[9].Object`|073E78:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[9].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[9].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[9].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[10]`|[ScriptObjectProperty] Object=073E79:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[10].Object`|073E79:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[10].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[10].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[10].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[11]`|[ScriptObjectProperty] Object=073E7A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[11].Object`|073E7A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[11].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[11].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[11].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[12]`|[ScriptObjectProperty] Object=073E7B:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[12].Object`|073E7B:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[12].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[12].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[12].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[13]`|[ScriptObjectProperty] Object=073E7C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[13].Object`|073E7C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[13].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[13].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[3].Objects[13].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_ReducedToZero|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=CrimeFactionImperial|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|028848:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|CrimeFactionImperial|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=CrimeFactionSons|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|028849:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|CrimeFactionSons|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[6]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[7]`|[ScriptObjectProperty] Name=CrimeFactionHjaalmarch|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Object`|02816D:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Name`|CrimeFactionHjaalmarch|
|`VirtualMachineAdapter.Scripts[0].Properties[7].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[8]`|[ScriptFloatProperty] Name=VKR_UpdateRate|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Data`|0.96|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Name`|VKR_UpdateRate|
|`VirtualMachineAdapter.Scripts[0].Properties[8].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[9]`|[ScriptObjectProperty] Name=CrimeFactionWinterhold|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Object`|02816F:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Name`|CrimeFactionWinterhold|
|`VirtualMachineAdapter.Scripts[0].Properties[9].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[10]`|[ScriptObjectProperty] Name=CrimeFactionFalkreath|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Object`|028170:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Name`|CrimeFactionFalkreath|
|`VirtualMachineAdapter.Scripts[0].Properties[10].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[11]`|[ScriptObjectProperty] Name=CrimeFactionPale|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Object`|02816E:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Name`|CrimeFactionPale|
|`VirtualMachineAdapter.Scripts[0].Properties[11].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[12]`|[ScriptObjectProperty] Name=CrimeFactionOrcs|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Object`|028713:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Name`|CrimeFactionOrcs|
|`VirtualMachineAdapter.Scripts[0].Properties[12].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[13]`|[ScriptObjectProperty] Name=CrimeFactionHaafingar|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Object`|029DB0:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Name`|CrimeFactionHaafingar|
|`VirtualMachineAdapter.Scripts[0].Properties[13].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[14]`|[ScriptObjectProperty] Name=CrimeFactionRift|
|`VirtualMachineAdapter.Scripts[0].Properties[14].Object`|02816B:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[14].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[14].Name`|CrimeFactionRift|
|`VirtualMachineAdapter.Scripts[0].Properties[14].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[15]`|[ScriptIntProperty] Name=VKR_ReductionHourly2|
|`VirtualMachineAdapter.Scripts[0].Properties[15].Data`|8|
|`VirtualMachineAdapter.Scripts[0].Properties[15].Name`|VKR_ReductionHourly2|
|`VirtualMachineAdapter.Scripts[0].Properties[15].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[16]`|[ScriptObjectProperty] Name=CrimeFactionReach|
|`VirtualMachineAdapter.Scripts[0].Properties[16].Object`|02816C:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[16].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[16].Name`|CrimeFactionReach|
|`VirtualMachineAdapter.Scripts[0].Properties[16].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[17]`|[ScriptIntProperty] Name=VKR_ReductionHourly|
|`VirtualMachineAdapter.Scripts[0].Properties[17].Data`|2|
|`VirtualMachineAdapter.Scripts[0].Properties[17].Name`|VKR_ReductionHourly|
|`VirtualMachineAdapter.Scripts[0].Properties[17].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[18]`|[ScriptObjectProperty] Name=CrimeFactionWhiterun|
|`VirtualMachineAdapter.Scripts[0].Properties[18].Object`|0267EA:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[18].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[18].Name`|CrimeFactionWhiterun|
|`VirtualMachineAdapter.Scripts[0].Properties[18].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[19]`|[ScriptObjectProperty] Name=CrimeFactionKhajiitCaravans|
|`VirtualMachineAdapter.Scripts[0].Properties[19].Object`|10CEE9:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[19].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[19].Name`|CrimeFactionKhajiitCaravans|
|`VirtualMachineAdapter.Scripts[0].Properties[19].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-775569c2d99c"></a>

## VKR_Loc_Lockdown_Effect_Proc

- Identidade estável Housecarl: `034DED:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Calm|
|`Archetype.ActorValue`|Aggression|
|`Flags`|Recover, DispelWithKeywords, NoArea, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|078098:Skyrim.esm|
|`Keywords[1]`|034DF0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Keywords[2]`|0424EE:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_Lockdown_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_Lockdown_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 7 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptStringProperty] Name=VKR_Skill|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|Lockpicking|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_Skill|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_HealthToLevelMult|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|0.1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_HealthToLevelMult|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptFloatProperty] Name=VKR_DeltaZ|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|-128|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_DeltaZ|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=VKR_Loc_Lockdown_Message|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|034DF7:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_Loc_Lockdown_Message|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=VKR_Loc_Lockdown_Marker_Impact|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|034DF2:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|VKR_Loc_Lockdown_Marker_Impact|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=VKR_Loc_Lockdown_Container|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|034DF3:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|VKR_Loc_Lockdown_Container|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[6]`|[ScriptFloatProperty] Name=VKR_XPMult|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Data`|0.05|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Name`|VKR_XPMult|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-18992db657b6"></a>

## VKR_Loc_Hotwire_Effect_ProcCommand

- Identidade estável Housecarl: `0358C0:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_Hotwire_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_Hotwire_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 6 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptFloatProperty] Name=VKR_LevelToLevelMult|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|2|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_LevelToLevelMult|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptFloatProperty] Name=VKR_DeltaZ|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|-128|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_DeltaZ|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VKR_Loc_Hotwire_Marker_Impact|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0358D2:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Loc_Hotwire_Marker_Impact|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=VKR_Loc_Hotwire_Container|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|265D9C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_Loc_Hotwire_Container|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=VKR_Shared_Quest|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|265D9D:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|VKR_Shared_Quest|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=VKR_Loc_Lockdown_Spell_Proc|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|[`034DEE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-b02e3a7b3299)|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|VKR_Loc_Lockdown_Spell_Proc|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-2c030fccc3f9"></a>

## MAG_RingoftheMoonEffect01

- Identidade estável Housecarl: `035B20:Dragonborn.esm`.
- Tipo: `MagicEffect`; winner: `Manbeast.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-61c15e144cfb"></a>

## MAG_RingofBloodlustEffect01

- Identidade estável Housecarl: `035B26:Dragonborn.esm`.
- Tipo: `MagicEffect`; winner: `Manbeast.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|HealRateMult|
|`Flags`|Recover|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0.0001|

<a id="r-422149d5bdae"></a>

## VKR_Sne_SilentRoll_Effect_Ab

- Identidade estável Housecarl: `035E37:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_SilentRoll_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_SilentRoll_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptStringProperty] Name=VKR_Event|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|tailSprint|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Event|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VKR_Sne_SilentRoll_Spell_Proc|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`302DAE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-fa456a1dc18a)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Sne_SilentRoll_Spell_Proc|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-2038a8206135"></a>

## VKR_Sne_ShadowWarrior_Effect_Proc

- Identidade estável Housecarl: `03742F:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`Archetype.Type`|Invisibility|
|`Archetype.ActorValue`|Invisibility|
|`Flags`|Recover, NoHitEvent, NoMagnitude, NoArea, FXPersist, HideInUI|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|5|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01EA6F:Skyrim.esm|

<a id="r-55bbaef2d89c"></a>

## GRIM_MGEF_CON25_FamiliarSabrecat

- Identidade estável Housecarl: `038F13:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectSummonCreatureArchetype] Association=038F0E:LostGrimoire.esp|
|`Archetype.Type`|SummonCreature|
|`Archetype.AssociationKey`|038F0E:LostGrimoire.esp|
|`Archetype.Association`|038F0E:LostGrimoire.esp|
|`Archetype.ActorValue`|None|
|`Flags`|SnapToNavmesh, NoArea, FXPersist, PowerAffectsDuration, NoHitEffect|
|`MagicSkill`|Conjuration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|TargetLocation|
|`BaseCost`|1.5|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|0A9B1F:Skyrim.esm|
|`Keywords[1]`|1091CF:Skyrim.esm|
|`Keywords[2]`|379D03:LostGrimoire.esp|

<a id="r-1491dd040c44"></a>

## GRIM_MGEF_CON_FamiliarBoost_sabrecat

- Identidade estável Housecarl: `038F15:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|AttackDamageMult|
|`Flags`|Recover|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-8226863ede69"></a>

## GRIM_MGEF_CON_FamiliarBoost_wolf

- Identidade estável Housecarl: `038F1E:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|SpeedMult|
|`Flags`|Recover, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-b21b0f99f8e3"></a>

## GRIM_MGEF_CON_FamiliarBoost_bear

- Identidade estável Housecarl: `038F1F:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|DamageResist|
|`Flags`|Recover, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-1bb9dd4bb806"></a>

## GRIM_MGEF_CON_FamiliarBoost_troll

- Identidade estável Housecarl: `038F20:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=Null|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.ActorValue`|HealRateMult|
|`Flags`|Recover, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-632115fa2b50"></a>

## MAG_AlchDamageMagicka

- Identidade estável Housecarl: `03A2B6:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Apothecary.esp`; profundidade de override: 3.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Magicka|
|`Flags`|Hostile, Detrimental, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|PoisonResist|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|3|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|042509:Skyrim.esm|
|`Keywords[1]`|10F9DE:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MagicImodOnPlayerHitScript|
|`VirtualMachineAdapter.Scripts[0].Name`|MagicImodOnPlayerHitScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=OnFinishImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|10E3D3:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|OnFinishImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=OnStartImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|10E3D2:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|OnStartImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-db3a8428950a"></a>

## MAG_AlchDamageStamina

- Identidade estável Housecarl: `03A2C6:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `Apothecary.esp`; profundidade de override: 3.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Stamina|
|`Flags`|Hostile, Detrimental, NoArea, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|PoisonResist|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|3|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|042509:Skyrim.esm|
|`Keywords[1]`|10F9DC:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=MagicImodOnPlayerHitScript|
|`VirtualMachineAdapter.Scripts[0].Name`|MagicImodOnPlayerHitScript|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=OnFinishImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|10E3D3:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|OnFinishImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=OnStartImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|10E3D2:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|OnStartImodFX|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-18b50763d628"></a>

## MAG_FireCloakFFSelf

- Identidade estável Housecarl: `03AE9E:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 5.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=02B385:Skyrim.esm|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`02B385:Skyrim.esm`](../magic/MAGIC_040.md#r-4e761d73c8a2)|
|`Archetype.Association`|[`02B385:Skyrim.esm`](../magic/MAGIC_040.md#r-4e761d73c8a2)|
|`Archetype.ActorValue`|None|
|`Flags`|DispelWithKeywords, NoArea, FXPersist, NoRecast, PowerAffectsDuration, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFire|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|4|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|0B62E4:Skyrim.esm|
|`Keywords[1]`|01CEAD:Skyrim.esm|
|`Keywords[2]`|002EDA:Update.esm|

<a id="r-c4e1a0b5e27e"></a>

## MAG_FrostCloakFFSelf

- Identidade estável Housecarl: `03AEA0:Skyrim.esm`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 4.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=02B38A:Skyrim.esm|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`02B38A:Skyrim.esm`](../magic/MAGIC_040.md#r-237e4691356d)|
|`Archetype.Association`|[`02B38A:Skyrim.esm`](../magic/MAGIC_040.md#r-237e4691356d)|
|`Archetype.ActorValue`|None|
|`Flags`|DispelWithKeywords, NoArea, FXPersist, PowerAffectsDuration|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistFrost|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|4|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|0B62E4:Skyrim.esm|
|`Keywords[1]`|01CEAE:Skyrim.esm|
