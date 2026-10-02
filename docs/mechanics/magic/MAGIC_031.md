# Cadeias mágicas referenciadas — parte 031

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-b99be5d85a3e"></a>

## VKR_Des_FireOnHit_Effect_Proc_DevouringFlames_ScorchedEarth

- Identidade estável Housecarl: `390B61:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F392E:Skyrim.esm`](../perks/PERKS_050.md#r-c98521bd5920)<br>Parameter1.Link=[`0F392E:Skyrim.esm`](../perks/PERKS_050.md#r-c98521bd5920)|aliases=False; package=False|
|`Conditions[2]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`025E86:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_050.md#r-9ce9553e222e)<br>Parameter1.Link=[`025E86:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_050.md#r-9ce9553e222e)|aliases=False; package=False|
|`Conditions[3]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThan 0.2|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Conditions[4]`|GetDead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 5 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, Detrimental, NoMagnitude, NoArea, FXPersist, HideInUI, NoRecast, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|1|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|390B63:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_Flames_ScorchedEarth_Scri|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_Flames_ScorchedEarth_Scri|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 7 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DisintegrationMainImmunityList|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0F6534:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DisintegrationMainImmunityList|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=VKR_Des_ScorchedEarth_FXS_Disintegrate|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|026EC8:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Des_ScorchedEarth_FXS_Disintegrate|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=VKR_Des_ScorchedEarth_Activator|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|026ECD:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_Des_ScorchedEarth_Activator|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=MagicNoDistintegrate|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|000EDF:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|MagicNoDistintegrate|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=MAGFirebolt01ImpactSet|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|01C2AF:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|MAGFirebolt01ImpactSet|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=VKR_Des_FireOnHit_Effect_Proc_ScorchedEarth|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|[`390B62:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-9d1f506bbb8c)|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|VKR_Des_FireOnHit_Effect_Proc_ScorchedEarth|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[6]`|[ScriptObjectProperty] Name=VKR_Des_ScorchedEarth_Spell_HazardSpawner|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Object`|[`026ECA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-039b4a20645f)|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Name`|VKR_Des_ScorchedEarth_Spell_HazardSpawner|
|`VirtualMachineAdapter.Scripts[0].Properties[6].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-9d1f506bbb8c"></a>

## VKR_Des_FireOnHit_Effect_Proc_ScorchedEarth

- Identidade estável Housecarl: `390B62:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F392E:Skyrim.esm`](../perks/PERKS_050.md#r-c98521bd5920)<br>Parameter1.Link=[`0F392E:Skyrim.esm`](../perks/PERKS_050.md#r-c98521bd5920)|aliases=False; package=False|
|`Conditions[2]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`025E86:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_050.md#r-9ce9553e222e)<br>Parameter1.Link=[`025E86:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_050.md#r-9ce9553e222e)|aliases=False; package=False|
|`Conditions[3]`|GetDead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[4]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[5]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0D205E:Skyrim.esm<br>Parameter1.Link=0D205E:Skyrim.esm|aliases=False; package=False|
|`Conditions[6]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 7 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Hostile, Detrimental, NoMagnitude, NoArea, FXPersist, HideInUI, NoRecast, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|1|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|390B63:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_Flames_ScorchedEarth_Scri|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_Flames_ScorchedEarth_Scri|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 6 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DisintegrationMainImmunityList|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|0F6534:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DisintegrationMainImmunityList|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=VKR_Des_ScorchedEarth_Activator|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|026ECD:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Des_ScorchedEarth_Activator|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=MagicNoDistintegrate|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|000EDF:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|MagicNoDistintegrate|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=VKR_Des_ScorchedEarth_FXS_Disintegrate|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|026EC8:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_Des_ScorchedEarth_FXS_Disintegrate|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=MAGFirebolt01ImpactSet|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|01C2AF:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|MAGFirebolt01ImpactSet|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=VKR_Des_ScorchedEarth_Spell_HazardSpawner|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|[`026ECA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-039b4a20645f)|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|VKR_Des_ScorchedEarth_Spell_HazardSpawner|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-b4a4e3479d3b"></a>

## VKR_Alt_OcatosPreparation_Effect_Ab

- Identidade estável Housecarl: `395C68:Vokrii - Minimalistic Perks of Skyrim.esp`.
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
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_OcatosPreparation_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_OcatosPreparation_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectListProperty] Name=VKR_ArmorSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects`|[list: 5 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[0]`|[ScriptObjectProperty] Object=0CDB70:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[0].Object`|[`0CDB70:Skyrim.esm`](../magic/MAGIC_044.md#r-b078b0dd7bc0)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[0].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[1]`|[ScriptObjectProperty] Object=05AD5E:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[1].Object`|[`05AD5E:Skyrim.esm`](../magic/MAGIC_042.md#r-78e958018a94)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[1].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[2]`|[ScriptObjectProperty] Object=051B16:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[2].Object`|[`051B16:Skyrim.esm`](../magic/MAGIC_041.md#r-a0d5f37cba8f)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[2].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[3]`|[ScriptObjectProperty] Object=05AD5D:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[3].Object`|[`05AD5D:Skyrim.esm`](../magic/MAGIC_042.md#r-63df943d2705)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[3].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[4]`|[ScriptObjectProperty] Object=05AD5C:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[4].Object`|[`05AD5C:Skyrim.esm`](../magic/MAGIC_041.md#r-aa5d04af586b)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[4].Name`||
|`VirtualMachineAdapter.Scripts[0].Properties[0].Objects[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_ArmorSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-cece2fb1f569"></a>

## VKR_Alt_ParalyzingEscape_Effect_CloakProc

- Identidade estável Housecarl: `395C6B:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=000014:Skyrim.esm<br>Parameter1.Link=000014:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|ShouldAttackKill|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=000014:Skyrim.esm<br>Parameter1.Link=000014:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|IsCombatTarget|record|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=000014:Skyrim.esm<br>Parameter1.Link=000014:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=035D59:Skyrim.esm<br>Parameter1.Link=035D59:Skyrim.esm|aliases=False; package=False|
|`Conditions[4]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F23C5:Skyrim.esm<br>Parameter1.Link=0F23C5:Skyrim.esm|aliases=False; package=False|
|`Conditions[5]`|GetRestrained|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[6]`|HasMagicEffect|record|Target; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`395C6C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-79a7c9be9cf0)<br>Parameter1.Link=[`395C6C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-79a7c9be9cf0)|aliases=False; package=False|
|`Conditions[7]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E715:Skyrim.esm<br>Parameter1.Link=01E715:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 8 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Paralysis|
|`Archetype.ActorValue`|Paralysis|
|`Flags`|Hostile, Recover, NoMagnitude, NoArea, FXPersist, PowerAffectsDuration|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|200|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01EA70:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=VKR_CastSpellFromPlayer_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|VKR_CastSpellFromPlayer_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 2 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=VKR_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|[`395C6E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_053.md#r-ccf1555f5935)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Spell|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1]`|[ScriptEntry] Name=VKR_SoundAndImod_Script|
|`VirtualMachineAdapter.Scripts[1].Name`|VKR_SoundAndImod_Script|
|`VirtualMachineAdapter.Scripts[1].Flags`|Local|
|`VirtualMachineAdapter.Scripts[1].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[1].Properties[0]`|[ScriptObjectProperty] Name=VKR_Imod|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Object`|031060:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Name`|VKR_Imod|
|`VirtualMachineAdapter.Scripts[1].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[1]`|[ScriptObjectProperty] Name=VKR_Sound|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Object`|053A60:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Name`|VKR_Sound|
|`VirtualMachineAdapter.Scripts[1].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[1].Properties[2]`|[ScriptFloatProperty] Name=VKR_Strength|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Data`|1|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Name`|VKR_Strength|
|`VirtualMachineAdapter.Scripts[1].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[2]`|[ScriptEntry] Name=VKR_Message_Script|
|`VirtualMachineAdapter.Scripts[2].Name`|VKR_Message_Script|
|`VirtualMachineAdapter.Scripts[2].Flags`|Local|
|`VirtualMachineAdapter.Scripts[2].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[2].Properties[0]`|[ScriptObjectProperty] Name=VKR_Message|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Object`|395C76:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Name`|VKR_Message|
|`VirtualMachineAdapter.Scripts[2].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-79a7c9be9cf0"></a>

## VKR_Alt_ParalyzingEscape_Effect_ProcLockout

- Identidade estável Housecarl: `395C6C:Vokrii - Minimalistic Perks of Skyrim.esp`.
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

<a id="r-4bb979c62eed"></a>

## VKR_Alt_ParalyzingEscape_Effect_Ab

- Identidade estável Housecarl: `395C74:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=395C72:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`395C72:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_053.md#r-afed2c51a2bb)|
|`Archetype.Association`|[`395C72:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_053.md#r-afed2c51a2bb)|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoHitEvent, NoDuration, NoArea, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-9306e4c91afc"></a>

## VKR_Alt_RitualConcentration_Effect_Ab

- Identidade estável Housecarl: `39AD78:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Mass|
|`Flags`|Recover, NoHitEvent, NoDuration, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-058a744bf675"></a>

## MAG_PerkIntenseFlamesConfDownFFContact

- Identidade estável Housecarl: `3B3121:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `MysticismMagic.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Target; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F392E:Skyrim.esm`](../perks/PERKS_050.md#r-c98521bd5920)<br>Parameter1.Link=[`0F392E:Skyrim.esm`](../perks/PERKS_050.md#r-c98521bd5920)|aliases=False; package=False|
|`Conditions[1]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThan 0.2|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Conditions[2]`|IsCommandedActor|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[4]`|HasKeyword|record|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=013797:Skyrim.esm<br>Parameter1.Link=013797:Skyrim.esm|aliases=False; package=False|
|`Conditions[5]`|HasKeyword|record|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=01397A:Skyrim.esm<br>Parameter1.Link=01397A:Skyrim.esm|aliases=False; package=False|
|`Conditions[6]`|IsUndead|record|Subject; ref=(null link); index=-1|NotEqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 7 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Demoralize|
|`Archetype.ActorValue`|Confidence|
|`Flags`|Hostile, Recover, DispelWithKeywords, NoArea, FXPersist, HideInUI, PowerAffectsDuration|
|`MagicSkill`|Illusion|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 2 item(s)]|
|`Keywords[0]`|078098:Skyrim.esm|
|`Keywords[1]`|0424E0:Skyrim.esm|

<a id="r-81d8d7a6d909"></a>

## GRIM_MGEF_DES_IceBreakerEnch_deathSpear

- Identidade estável Housecarl: `3B69B7:LostGrimoire.esp`.
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
|`Flags`|HideInUI, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=GRIM_DES_IceBreakerEnch|
|`VirtualMachineAdapter.Scripts[0].Name`|GRIM_DES_IceBreakerEnch|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=myHaz|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|249D52:LostGrimoire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|myHaz|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-136e7c2ea629"></a>

## VKR_Res_Inspire_Effect_Ab_2

- Identidade estável Housecarl: `3C86A2:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=3C869E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`3C869E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_053.md#r-bf523c70c487)|
|`Archetype.Association`|[`3C869E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_053.md#r-bf523c70c487)|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoDuration, NoArea, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-1f2f8573ad9f"></a>

## GRIM_MGEF_ILL_Glamour_aoe

- Identidade estável Housecarl: `3CADD3:LostGrimoire.esp`.
- Tipo: `MagicEffect`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetDead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[1]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=3CADD5:LostGrimoire.esp<br>Parameter1.Link=3CADD5:LostGrimoire.esp|aliases=False; package=False|
|`Conditions[2]`|HasMagicEffectKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=3CADD7:LostGrimoire.esp<br>Parameter1.Link=3CADD7:LostGrimoire.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|HideInUI, Painless, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|3CADD5:LostGrimoire.esp|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=GRIM_ILL_GlamourAOE|
|`VirtualMachineAdapter.Scripts[0].Name`|GRIM_ILL_GlamourAOE|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 6 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=GRIM_LIST_GlamourTempAllyFactions|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|3CADD6:LostGrimoire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|GRIM_LIST_GlamourTempAllyFactions|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=GRIM_SPELL_ILL_Glamour_allyCheckCooldown|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`3CADD9:LostGrimoire.esp`](../magic/MAGIC_053.md#r-886e8f414f72)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|GRIM_SPELL_ILL_Glamour_allyCheckCooldown|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=GRIM_SPELL_ILL_Glamour_allyKilledAOE|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|[`3CADDE:LostGrimoire.esp`](../magic/MAGIC_053.md#r-dc6050c62dc7)|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|GRIM_SPELL_ILL_Glamour_allyKilledAOE|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[4]`|[ScriptObjectProperty] Name=GRIM_SPELL_ILL_Glamour_playerEff|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Object`|[`34C3B6:LostGrimoire.esp`](../magic/MAGIC_051.md#r-c3b99d828e39)|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Name`|GRIM_SPELL_ILL_Glamour_playerEff|
|`VirtualMachineAdapter.Scripts[0].Properties[4].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[5]`|[ScriptObjectProperty] Name=GRIM_MSG_ILL_Glamour_broken|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Object`|3CADE0:LostGrimoire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Name`|GRIM_MSG_ILL_Glamour_broken|
|`VirtualMachineAdapter.Scripts[0].Properties[5].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-c445c3641d20"></a>

## GRIM_MGEF_ILL_Glamour_allyCheckCooldown

- Identidade estável Housecarl: `3CADD8:LostGrimoire.esp`.
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
|`Flags`|HideInUI, Painless, NoDeathDispel|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|3CADD7:LostGrimoire.esp|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=Utility_DispelSpellOnEffFinsih|
|`VirtualMachineAdapter.Scripts[0].Name`|Utility_DispelSpellOnEffFinsih|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=xSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`3CADD9:LostGrimoire.esp`](../magic/MAGIC_053.md#r-886e8f414f72)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|xSpell|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-c4061510f338"></a>

## GRIM_MGEF_ILL_Glamour_allyKilledAOE

- Identidade estável Housecarl: `3CADDD:LostGrimoire.esp`.
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
|`Flags`|HideInUI, Painless|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|0|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=GRIM_ILL_GlamourAllyKilledAOE|
|`VirtualMachineAdapter.Scripts[0].Name`|GRIM_ILL_GlamourAllyKilledAOE|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=GRIM_LIST_GlamourTempAllyFactions|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|3CADD6:LostGrimoire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|GRIM_LIST_GlamourTempAllyFactions|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|000014:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|PlayerRef|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=GRIM_SPELL_ILL_Glamour_playerEff|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|[`34C3B6:LostGrimoire.esp`](../magic/MAGIC_051.md#r-c3b99d828e39)|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|GRIM_SPELL_ILL_Glamour_playerEff|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=GRIM_MSG_ILL_Glamour_broken|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|3CADE0:LostGrimoire.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|GRIM_MSG_ILL_Glamour_broken|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-5d5931ab3d30"></a>

## VKR_Con_ElementalConflux_Effect_CloakProc_Fire

- Identidade estável Housecarl: `3D28A6:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 0|SwapSubjectAndTarget|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`31721F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-ec253e0fa548)<br>Parameter1.Link=[`31721F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-ec253e0fa548)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoMagnitude, NoArea, NoRecast, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-9f2b2017b7cd"></a>

## VKR_Con_ElementalConflux_Effect_CloakProc_Frost

- Identidade estável Housecarl: `3D28A7:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 0|SwapSubjectAndTarget|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`31721F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-ec253e0fa548)<br>Parameter1.Link=[`31721F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-ec253e0fa548)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoMagnitude, NoArea, NoRecast, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-f6aa7f8c8519"></a>

## VKR_Con_ElementalConflux_Effect_CloakProc_Shock

- Identidade estável Housecarl: `3D28A8:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 0|SwapSubjectAndTarget|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`31721F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-ec253e0fa548)<br>Parameter1.Link=[`31721F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_049.md#r-ec253e0fa548)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoMagnitude, NoArea, NoRecast, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-641059a86769"></a>

## VKR_Con_ElementalConflux_Effect_CloakProc_Applicator_FireAtronachs

- Identidade estável Housecarl: `3D79AA:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 0|SwapSubjectAndTarget|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Race=0131F5:Skyrim.esm<br>Parameter1.Link=0131F5:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=3D79AF:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`3D79AF:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-907885ab964c)|
|`Archetype.Association`|[`3D79AF:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-907885ab964c)|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoArea, NoRecast, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-54ceadc38f0d"></a>

## VKR_Con_ElementalConflux_Effect_CloakProc_Applicator_FrostAtronachs

- Identidade estável Housecarl: `3D79B1:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 0|SwapSubjectAndTarget|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Race=0131F6:Skyrim.esm<br>Parameter1.Link=0131F6:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=3D79AD:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`3D79AD:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-aa8fc73a926a)|
|`Archetype.Association`|[`3D79AD:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-aa8fc73a926a)|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoArea, NoRecast, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-49f3da78604a"></a>

## VKR_Con_ElementalConflux_Effect_CloakProc_Applicator_ShockAtronachs

- Identidade estável Housecarl: `3D79B2:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|IsHostileToActor|record|Subject; ref=(null link); index=-1|EqualTo 0|SwapSubjectAndTarget|TargetNpc=(floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)<br>Parameter1.Link=(null link, subrecord present)|aliases=False; package=False|
|`Conditions[1]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Race=0131F7:Skyrim.esm<br>Parameter1.Link=0131F7:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=3D79AB:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`3D79AB:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-27485b251fa1)|
|`Archetype.Association`|[`3D79AB:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-27485b251fa1)|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoArea, NoRecast, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`BaseCost`|0|

<a id="r-491f0398bd00"></a>

## VKR_Con_ElementalConflux_Effect_Ab

- Identidade estável Housecarl: `3D79B5:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetIsID|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=3D79B3:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`3D79B3:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-91385f4a1305)|
|`Archetype.Association`|[`3D79B3:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-91385f4a1305)|
|`Archetype.ActorValue`|None|
|`Flags`|NoHitEvent, NoDuration, NoArea, HideInUI, NoHitEffect|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`BaseCost`|0|

<a id="r-0b42d4599683"></a>

## MAG_FrostHazardDamageFFContact01

- Identidade estável Housecarl: `3DBE72:Thaumaturgy.esp`.
- Tipo: `MagicEffect`; winner: `Thaumaturgy.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|DualValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, HideInUI, NoRecast, PowerAffectsMagnitude|
|`MagicSkill`|None|
|`ResistValue`|ResistFrost|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0.95|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|01CEAE:Skyrim.esm|

<a id="r-edd1a6153bec"></a>

## TVR_Shaman_Veil_Effect_SacredHearth_Proc

- Identidade estável Housecarl: `40A7E1:Triumvirate - Mage Archetypes.esp`.
- Tipo: `MagicEffect`; winner: `Triumvirate - Mage Archetypes.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|Script|
|`Archetype.ActorValue`|None|
|`Flags`|Recover, NoArea, FXPersist, PowerAffectsDuration|
|`MagicSkill`|Alteration|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|1|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|0D5B8E:Skyrim.esm|
|`VirtualMachineAdapter`|[VirtualMachineAdapter]|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=TVR_SacredHearth_Buff_Script|
|`VirtualMachineAdapter.Scripts[0].Name`|TVR_SacredHearth_Buff_Script|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=TVR_SacredHearth_Quest|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|3C38BD:Triumvirate - Mage Archetypes.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|TVR_SacredHearth_Quest|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|

<a id="r-6f938ac8bfc2"></a>

## VKR_Bck_MockingBlow_Effect_ProcWeaken

- Identidade estável Housecarl: `4145CF:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectPeakValueModArchetype] Association=447040:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Type`|PeakValueModifier|
|`Archetype.AssociationKey`|447040:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.Association`|447040:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Archetype.ActorValue`|AttackDamageMult|
|`Flags`|Hostile, Recover, Detrimental, NoArea|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 1 item(s)]|
|`Keywords[0]`|447040:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-7e1be327048c"></a>

## VKR_Any_GenericBleed_Effect

- Identidade estável Housecarl: `4196D2:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `MagicEffect`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm<br>Parameter1.Link=013796:Skyrim.esm|aliases=False; package=False|
|`Conditions[1]`|IsUndead|record|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Conditions[2]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013798:Skyrim.esm<br>Parameter1.Link=013798:Skyrim.esm|aliases=False; package=False|
|`Conditions[3]`|HasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013794:Skyrim.esm<br>Parameter1.Link=013794:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 4 item(s)]|
|`Archetype`|[MagicEffectArchetype] Association=Null|
|`Archetype.Type`|ValueModifier|
|`Archetype.ActorValue`|Health|
|`Flags`|Hostile, Detrimental, NoArea, FXPersist|
|`MagicSkill`|None|
|`ResistValue`|None|
|`CastType`|FireAndForget|
|`TargetType`|Touch|
|`BaseCost`|0|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|349CE3:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Keywords[1]`|0059D8:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Keywords[2]`|53A24E:Vokrii - Minimalistic Perks of Skyrim.esp|

<a id="r-fc5d946e8490"></a>

## MAG_AbsorbHealthCloakFFSelf

- Identidade estável Housecarl: `445F9D:MysticismMagic.esp`.
- Tipo: `MagicEffect`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 2.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Archetype`|[MagicEffectCloakArchetype] Association=445F9F:MysticismMagic.esp|
|`Archetype.Type`|Cloak|
|`Archetype.AssociationKey`|[`445F9F:MysticismMagic.esp`](../magic/MAGIC_054.md#r-5e36950a38ad)|
|`Archetype.Association`|[`445F9F:MysticismMagic.esp`](../magic/MAGIC_054.md#r-5e36950a38ad)|
|`Archetype.ActorValue`|None|
|`Flags`|DispelWithKeywords, NoArea, FXPersist, NoRecast, PowerAffectsDuration, NoDeathDispel|
|`MagicSkill`|Destruction|
|`ResistValue`|ResistMagic|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`BaseCost`|9|
|`Keywords`|[list: 3 item(s)]|
|`Keywords[0]`|0B62E4:Skyrim.esm|
|`Keywords[1]`|101BDE:Skyrim.esm|
|`Keywords[2]`|0806E1:Skyrim.esm|
