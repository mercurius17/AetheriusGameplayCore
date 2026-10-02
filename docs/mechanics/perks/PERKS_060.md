# Perks instaladas — parte 060

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-5970c8fd5579"></a>

## VKR_Enc_020_PowerStone2_Perk

- Identidade estável Housecarl: `214CBD:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Thaumaturgy Compatibility Patch.esp`; profundidade de override: 2.
- Nome: Power Stone; ranks declarados: 1; NextPerk: [`32B658:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_060.md#r-c1ea34be7ff8).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.35; Rank=0; Priority=150; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=1.35; Rank=0; Priority=149; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.35; Rank=0; Priority=140; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=1.35; Rank=0; Priority=139; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Enchanting<br>Parameter1=Enchanting|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058F80:Skyrim.esm`](../perks/PERKS_059.md#r-d7945dba590a)<br>Parameter1.Link=[`058F80:Skyrim.esm`](../perks/PERKS_059.md#r-d7945dba590a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`32B658:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_060.md#r-c1ea34be7ff8)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|EqualTo 8|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|EqualTo 8|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Enchantment<br>Parameter1=Enchantment|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA010:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=3E1BBC:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`32B658:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_060.md#r-c1ea34be7ff8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|EqualTo 8|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|EqualTo 8|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Enchantment<br>Parameter1=Enchantment|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Conjuration<br>Parameter1=Conjuration|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA010:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[4]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=3EBDC3:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[5]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=641682:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`32B658:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_060.md#r-c1ea34be7ff8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|NotEqualTo 8|0|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|NotEqualTo 8|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Enchantment<br>Parameter1=Enchantment|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[2]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[3]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA010:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[5]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=3EBDC3:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[6]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormList=641682:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`32B658:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_060.md#r-c1ea34be7ff8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|NotEqualTo 8|0|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|NotEqualTo 8|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Enchantment<br>Parameter1=Enchantment|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[1]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[2]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Conjuration<br>Parameter1=Conjuration|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA010:Update.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[4]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=3EBDC3:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[5]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormList=641682:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.35|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|150|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.35|
|`Effects[1].EntryPoint`|ModSpellDuration|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|149|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|1.35|
|`Effects[2].EntryPoint`|ModSpellMagnitude|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|140|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|1.35|
|`Effects[3].EntryPoint`|ModSpellDuration|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|139|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Name`|Power Stone|
|`NextPerk`|[`32B658:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_060.md#r-c1ea34be7ff8)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-c1ea34be7ff8"></a>

## VKR_Enc_020_PowerStone3_Perk

- Identidade estável Housecarl: `32B658:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Thaumaturgy Compatibility Patch.esp`; profundidade de override: 2.
- Nome: Power Stone; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.5; Rank=0; Priority=150; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=1.5; Rank=0; Priority=149; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.5; Rank=0; Priority=140; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=1.5; Rank=0; Priority=139; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Enchanting<br>Parameter1=Enchanting|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058F80:Skyrim.esm`](../perks/PERKS_059.md#r-d7945dba590a)<br>Parameter1.Link=[`058F80:Skyrim.esm`](../perks/PERKS_059.md#r-d7945dba590a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|EqualTo 8|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|EqualTo 8|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Enchantment<br>Parameter1=Enchantment|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA010:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=3E1BBC:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|EqualTo 8|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|EqualTo 8|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Enchantment<br>Parameter1=Enchantment|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Conjuration<br>Parameter1=Conjuration|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA010:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[4]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=3EBDC3:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[5]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 0|0|FormList=641682:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|NotEqualTo 8|0|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|NotEqualTo 8|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Enchantment<br>Parameter1=Enchantment|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[2]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[3]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA010:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[5]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=3EBDC3:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[6]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormList=641682:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|NotEqualTo 8|0|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|NotEqualTo 8|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormType=Enchantment<br>Parameter1=Enchantment|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[1]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[2]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Conjuration<br>Parameter1=Conjuration|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA010:Update.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[4]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=3EBDC3:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[5]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormList=641682:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.5|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|150|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.5|
|`Effects[1].EntryPoint`|ModSpellDuration|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|149|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|1.5|
|`Effects[2].EntryPoint`|ModSpellMagnitude|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|140|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|1.5|
|`Effects[3].EntryPoint`|ModSpellDuration|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|139|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Name`|Power Stone|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-77d001ed1672"></a>

## CCF_ClothingArmor

- Identidade estável Housecarl: `00845D:waccf_armor and clothing extension.esp`.
- Tipo: `Perk`; winner: `waccf_armor and clothing extension.esp`; profundidade de override: 1.
- Nome: Protective Clothing; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=1; Rank=0; Priority=1; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=2; Rank=0; Priority=2; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=2; Rank=0; Priority=2; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=3; Rank=0; Priority=3; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=3; Rank=0; Priority=3; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[5] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=4; Rank=0; Priority=4; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=4; Rank=0; Priority=4; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=4; Rank=0; Priority=4; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[8] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=5; Rank=0; Priority=5; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[9] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=6; Rank=0; Priority=6; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[10] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=6; Rank=0; Priority=6; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[11] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=6; Rank=0; Priority=6; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[12] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=7; Rank=0; Priority=7; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[13] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=8; Rank=0; Priority=8; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[14] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=8; Rank=0; Priority=8; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[15] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=8; Rank=0; Priority=8; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[16] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=9; Rank=0; Priority=9; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[17] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=10; Rank=0; Priority=10; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[18] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=10; Rank=0; Priority=10; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[19] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=12; Rank=0; Priority=12; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[20] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=12; Rank=0; Priority=12; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[21] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=13; Rank=0; Priority=13; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[22] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=14; Rank=0; Priority=14; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[23] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=15; Rank=0; Priority=15; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[24] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=15; Rank=0; Priority=15; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[25] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=16; Rank=0; Priority=16; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[26] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=18; Rank=0; Priority=18; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[27] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=20; Rank=0; Priority=20; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[28] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=20; Rank=0; Priority=20; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[29] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=21; Rank=0; Priority=21; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[30] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=24; Rank=0; Priority=24; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[31] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Add; Value=25; Rank=0; Priority=25; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBE8:Skyrim.esm<br>Parameter1.Link=06BBE8:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0250:Update.esm<br>Parameter1.Link=AF0250:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0251:Update.esm<br>Parameter1.Link=AF0251:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 2|0|Keyword=AF0250:Update.esm<br>Parameter1.Link=AF0250:Update.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0252:Update.esm<br>Parameter1.Link=AF0252:Update.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 3|OR|Keyword=AF0250:Update.esm<br>Parameter1.Link=AF0250:Update.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 3|0|Keyword=AF0250:Update.esm<br>Parameter1.Link=AF0250:Update.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 2|0|Keyword=AF0251:Update.esm<br>Parameter1.Link=AF0251:Update.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0253:Update.esm<br>Parameter1.Link=AF0253:Update.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 4|0|Keyword=AF0250:Update.esm<br>Parameter1.Link=AF0250:Update.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0254:Update.esm<br>Parameter1.Link=AF0254:Update.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 3|0|Keyword=AF0251:Update.esm<br>Parameter1.Link=AF0251:Update.esm|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 2|0|Keyword=AF0252:Update.esm<br>Parameter1.Link=AF0252:Update.esm|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0255:Update.esm<br>Parameter1.Link=AF0255:Update.esm|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0256:Update.esm<br>Parameter1.Link=AF0256:Update.esm|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0257:Update.esm<br>Parameter1.Link=AF0257:Update.esm|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 2|0|Keyword=AF0253:Update.esm<br>Parameter1.Link=AF0253:Update.esm|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 4|0|Keyword=AF0251:Update.esm<br>Parameter1.Link=AF0251:Update.esm|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 3|0|Keyword=AF0252:Update.esm<br>Parameter1.Link=AF0252:Update.esm|aliases=False; package=False|
|`Effects[17].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[17].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 2|0|Keyword=AF0254:Update.esm<br>Parameter1.Link=AF0254:Update.esm|aliases=False; package=False|
|`Effects[18].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[18].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0259:Update.esm<br>Parameter1.Link=AF0259:Update.esm|aliases=False; package=False|
|`Effects[19].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[19].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 2|OR|Keyword=AF0255:Update.esm<br>Parameter1.Link=AF0255:Update.esm|aliases=False; package=False|
|`Effects[19].Conditions[0].Conditions[2]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 3|OR|Keyword=AF0253:Update.esm<br>Parameter1.Link=AF0253:Update.esm|aliases=False; package=False|
|`Effects[20].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[20].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0261:Update.esm<br>Parameter1.Link=AF0261:Update.esm|aliases=False; package=False|
|`Effects[21].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[21].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0262:Update.esm<br>Parameter1.Link=AF0262:Update.esm|aliases=False; package=False|
|`Effects[22].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[22].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 2|0|Keyword=AF0256:Update.esm<br>Parameter1.Link=AF0256:Update.esm|aliases=False; package=False|
|`Effects[23].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[23].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 3|0|Keyword=AF0254:Update.esm<br>Parameter1.Link=AF0254:Update.esm|aliases=False; package=False|
|`Effects[24].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[24].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0264:Update.esm<br>Parameter1.Link=AF0264:Update.esm|aliases=False; package=False|
|`Effects[25].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[25].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 2|OR|Keyword=AF0257:Update.esm<br>Parameter1.Link=AF0257:Update.esm|aliases=False; package=False|
|`Effects[25].Conditions[0].Conditions[2]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 4|OR|Keyword=AF0253:Update.esm<br>Parameter1.Link=AF0253:Update.esm|aliases=False; package=False|
|`Effects[26].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[26].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0267:Update.esm<br>Parameter1.Link=AF0267:Update.esm|aliases=False; package=False|
|`Effects[27].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[27].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 4|0|Keyword=AF0254:Update.esm<br>Parameter1.Link=AF0254:Update.esm|aliases=False; package=False|
|`Effects[28].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[28].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0269:Update.esm<br>Parameter1.Link=AF0269:Update.esm|aliases=False; package=False|
|`Effects[29].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[29].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 3|0|Keyword=AF0256:Update.esm<br>Parameter1.Link=AF0256:Update.esm|aliases=False; package=False|
|`Effects[30].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[30].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0273:Update.esm<br>Parameter1.Link=AF0273:Update.esm|aliases=False; package=False|
|`Effects[31].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=00844D:waccf_armor and clothing extension.esp<br>Parameter1.Link=00844D:waccf_armor and clothing extension.esp|aliases=False; package=False|
|`Effects[31].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0274:Update.esm<br>Parameter1.Link=AF0274:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 32 item(s)]|
|`Conditions`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|1|
|`Effects[0].EntryPoint`|ModArmorRating|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|1|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Add|
|`Effects[1].Value`|2|
|`Effects[1].EntryPoint`|ModArmorRating|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|2|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Add|
|`Effects[2].Value`|2|
|`Effects[2].EntryPoint`|ModArmorRating|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|2|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Add|
|`Effects[3].Value`|3|
|`Effects[3].EntryPoint`|ModArmorRating|
|`Effects[3].PerkConditionTabCount`|2|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|3|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Add|
|`Effects[4].Value`|3|
|`Effects[4].EntryPoint`|ModArmorRating|
|`Effects[4].PerkConditionTabCount`|2|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|3|
|`Effects[4].Conditions`|[list: 1 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointModifyValue]|
|`Effects[5].Modification`|Add|
|`Effects[5].Value`|4|
|`Effects[5].EntryPoint`|ModArmorRating|
|`Effects[5].PerkConditionTabCount`|2|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|4|
|`Effects[5].Conditions`|[list: 1 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Add|
|`Effects[6].Value`|4|
|`Effects[6].EntryPoint`|ModArmorRating|
|`Effects[6].PerkConditionTabCount`|2|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|4|
|`Effects[6].Conditions`|[list: 1 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyValue]|
|`Effects[7].Modification`|Add|
|`Effects[7].Value`|4|
|`Effects[7].EntryPoint`|ModArmorRating|
|`Effects[7].PerkConditionTabCount`|2|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|4|
|`Effects[7].Conditions`|[list: 1 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointModifyValue]|
|`Effects[8].Modification`|Add|
|`Effects[8].Value`|5|
|`Effects[8].EntryPoint`|ModArmorRating|
|`Effects[8].PerkConditionTabCount`|2|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|5|
|`Effects[8].Conditions`|[list: 1 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointModifyValue]|
|`Effects[9].Modification`|Add|
|`Effects[9].Value`|6|
|`Effects[9].EntryPoint`|ModArmorRating|
|`Effects[9].PerkConditionTabCount`|2|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|6|
|`Effects[9].Conditions`|[list: 1 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointModifyValue]|
|`Effects[10].Modification`|Add|
|`Effects[10].Value`|6|
|`Effects[10].EntryPoint`|ModArmorRating|
|`Effects[10].PerkConditionTabCount`|2|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|6|
|`Effects[10].Conditions`|[list: 1 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointModifyValue]|
|`Effects[11].Modification`|Add|
|`Effects[11].Value`|6|
|`Effects[11].EntryPoint`|ModArmorRating|
|`Effects[11].PerkConditionTabCount`|2|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|6|
|`Effects[11].Conditions`|[list: 1 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Effects[12]`|[PerkEntryPointModifyValue]|
|`Effects[12].Modification`|Add|
|`Effects[12].Value`|7|
|`Effects[12].EntryPoint`|ModArmorRating|
|`Effects[12].PerkConditionTabCount`|2|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|7|
|`Effects[12].Conditions`|[list: 1 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|0|
|`Effects[12].Flags.FragmentIndex`|0|
|`Effects[13]`|[PerkEntryPointModifyValue]|
|`Effects[13].Modification`|Add|
|`Effects[13].Value`|8|
|`Effects[13].EntryPoint`|ModArmorRating|
|`Effects[13].PerkConditionTabCount`|2|
|`Effects[13].Rank`|0|
|`Effects[13].Priority`|8|
|`Effects[13].Conditions`|[list: 1 item(s)]|
|`Effects[13].Flags`|[PerkScriptFlag]|
|`Effects[13].Flags.Flags`|0|
|`Effects[13].Flags.FragmentIndex`|0|
|`Effects[14]`|[PerkEntryPointModifyValue]|
|`Effects[14].Modification`|Add|
|`Effects[14].Value`|8|
|`Effects[14].EntryPoint`|ModArmorRating|
|`Effects[14].PerkConditionTabCount`|2|
|`Effects[14].Rank`|0|
|`Effects[14].Priority`|8|
|`Effects[14].Conditions`|[list: 1 item(s)]|
|`Effects[14].Flags`|[PerkScriptFlag]|
|`Effects[14].Flags.Flags`|0|
|`Effects[14].Flags.FragmentIndex`|0|
|`Effects[15]`|[PerkEntryPointModifyValue]|
|`Effects[15].Modification`|Add|
|`Effects[15].Value`|8|
|`Effects[15].EntryPoint`|ModArmorRating|
|`Effects[15].PerkConditionTabCount`|2|
|`Effects[15].Rank`|0|
|`Effects[15].Priority`|8|
|`Effects[15].Conditions`|[list: 1 item(s)]|
|`Effects[15].Flags`|[PerkScriptFlag]|
|`Effects[15].Flags.Flags`|0|
|`Effects[15].Flags.FragmentIndex`|0|
|`Effects[16]`|[PerkEntryPointModifyValue]|
|`Effects[16].Modification`|Add|
|`Effects[16].Value`|9|
|`Effects[16].EntryPoint`|ModArmorRating|
|`Effects[16].PerkConditionTabCount`|2|
|`Effects[16].Rank`|0|
|`Effects[16].Priority`|9|
|`Effects[16].Conditions`|[list: 1 item(s)]|
|`Effects[16].Flags`|[PerkScriptFlag]|
|`Effects[16].Flags.Flags`|0|
|`Effects[16].Flags.FragmentIndex`|0|
|`Effects[17]`|[PerkEntryPointModifyValue]|
|`Effects[17].Modification`|Add|
|`Effects[17].Value`|10|
|`Effects[17].EntryPoint`|ModArmorRating|
|`Effects[17].PerkConditionTabCount`|2|
|`Effects[17].Rank`|0|
|`Effects[17].Priority`|10|
|`Effects[17].Conditions`|[list: 1 item(s)]|
|`Effects[17].Flags`|[PerkScriptFlag]|
|`Effects[17].Flags.Flags`|0|
|`Effects[17].Flags.FragmentIndex`|0|
|`Effects[18]`|[PerkEntryPointModifyValue]|
|`Effects[18].Modification`|Add|
|`Effects[18].Value`|10|
|`Effects[18].EntryPoint`|ModArmorRating|
|`Effects[18].PerkConditionTabCount`|2|
|`Effects[18].Rank`|0|
|`Effects[18].Priority`|10|
|`Effects[18].Conditions`|[list: 1 item(s)]|
|`Effects[18].Flags`|[PerkScriptFlag]|
|`Effects[18].Flags.Flags`|0|
|`Effects[18].Flags.FragmentIndex`|0|
|`Effects[19]`|[PerkEntryPointModifyValue]|
|`Effects[19].Modification`|Add|
|`Effects[19].Value`|12|
|`Effects[19].EntryPoint`|ModArmorRating|
|`Effects[19].PerkConditionTabCount`|2|
|`Effects[19].Rank`|0|
|`Effects[19].Priority`|12|
|`Effects[19].Conditions`|[list: 1 item(s)]|
|`Effects[19].Flags`|[PerkScriptFlag]|
|`Effects[19].Flags.Flags`|0|
|`Effects[19].Flags.FragmentIndex`|0|
|`Effects[20]`|[PerkEntryPointModifyValue]|
|`Effects[20].Modification`|Add|
|`Effects[20].Value`|12|
|`Effects[20].EntryPoint`|ModArmorRating|
|`Effects[20].PerkConditionTabCount`|2|
|`Effects[20].Rank`|0|
|`Effects[20].Priority`|12|
|`Effects[20].Conditions`|[list: 1 item(s)]|
|`Effects[20].Flags`|[PerkScriptFlag]|
|`Effects[20].Flags.Flags`|0|
|`Effects[20].Flags.FragmentIndex`|0|
|`Effects[21]`|[PerkEntryPointModifyValue]|
|`Effects[21].Modification`|Add|
|`Effects[21].Value`|13|
|`Effects[21].EntryPoint`|ModArmorRating|
|`Effects[21].PerkConditionTabCount`|2|
|`Effects[21].Rank`|0|
|`Effects[21].Priority`|13|
|`Effects[21].Conditions`|[list: 1 item(s)]|
|`Effects[21].Flags`|[PerkScriptFlag]|
|`Effects[21].Flags.Flags`|0|
|`Effects[21].Flags.FragmentIndex`|0|
|`Effects[22]`|[PerkEntryPointModifyValue]|
|`Effects[22].Modification`|Add|
|`Effects[22].Value`|14|
|`Effects[22].EntryPoint`|ModArmorRating|
|`Effects[22].PerkConditionTabCount`|2|
|`Effects[22].Rank`|0|
|`Effects[22].Priority`|14|
|`Effects[22].Conditions`|[list: 1 item(s)]|
|`Effects[22].Flags`|[PerkScriptFlag]|
|`Effects[22].Flags.Flags`|0|
|`Effects[22].Flags.FragmentIndex`|0|
|`Effects[23]`|[PerkEntryPointModifyValue]|
|`Effects[23].Modification`|Add|
|`Effects[23].Value`|15|
|`Effects[23].EntryPoint`|ModArmorRating|
|`Effects[23].PerkConditionTabCount`|2|
|`Effects[23].Rank`|0|
|`Effects[23].Priority`|15|
|`Effects[23].Conditions`|[list: 1 item(s)]|
|`Effects[23].Flags`|[PerkScriptFlag]|
|`Effects[23].Flags.Flags`|0|
|`Effects[23].Flags.FragmentIndex`|0|
|`Effects[24]`|[PerkEntryPointModifyValue]|
|`Effects[24].Modification`|Add|
|`Effects[24].Value`|15|
|`Effects[24].EntryPoint`|ModArmorRating|
|`Effects[24].PerkConditionTabCount`|2|
|`Effects[24].Rank`|0|
|`Effects[24].Priority`|15|
|`Effects[24].Conditions`|[list: 1 item(s)]|
|`Effects[24].Flags`|[PerkScriptFlag]|
|`Effects[24].Flags.Flags`|0|
|`Effects[24].Flags.FragmentIndex`|0|
|`Effects[25]`|[PerkEntryPointModifyValue]|
|`Effects[25].Modification`|Add|
|`Effects[25].Value`|16|
|`Effects[25].EntryPoint`|ModArmorRating|
|`Effects[25].PerkConditionTabCount`|2|
|`Effects[25].Rank`|0|
|`Effects[25].Priority`|16|
|`Effects[25].Conditions`|[list: 1 item(s)]|
|`Effects[25].Flags`|[PerkScriptFlag]|
|`Effects[25].Flags.Flags`|0|
|`Effects[25].Flags.FragmentIndex`|0|
|`Effects[26]`|[PerkEntryPointModifyValue]|
|`Effects[26].Modification`|Add|
|`Effects[26].Value`|18|
|`Effects[26].EntryPoint`|ModArmorRating|
|`Effects[26].PerkConditionTabCount`|2|
|`Effects[26].Rank`|0|
|`Effects[26].Priority`|18|
|`Effects[26].Conditions`|[list: 1 item(s)]|
|`Effects[26].Flags`|[PerkScriptFlag]|
|`Effects[26].Flags.Flags`|0|
|`Effects[26].Flags.FragmentIndex`|0|
|`Effects[27]`|[PerkEntryPointModifyValue]|
|`Effects[27].Modification`|Add|
|`Effects[27].Value`|20|
|`Effects[27].EntryPoint`|ModArmorRating|
|`Effects[27].PerkConditionTabCount`|2|
|`Effects[27].Rank`|0|
|`Effects[27].Priority`|20|
|`Effects[27].Conditions`|[list: 1 item(s)]|
|`Effects[27].Flags`|[PerkScriptFlag]|
|`Effects[27].Flags.Flags`|0|
|`Effects[27].Flags.FragmentIndex`|0|
|`Effects[28]`|[PerkEntryPointModifyValue]|
|`Effects[28].Modification`|Add|
|`Effects[28].Value`|20|
|`Effects[28].EntryPoint`|ModArmorRating|
|`Effects[28].PerkConditionTabCount`|2|
|`Effects[28].Rank`|0|
|`Effects[28].Priority`|20|
|`Effects[28].Conditions`|[list: 1 item(s)]|
|`Effects[28].Flags`|[PerkScriptFlag]|
|`Effects[28].Flags.Flags`|0|
|`Effects[28].Flags.FragmentIndex`|0|
|`Effects[29]`|[PerkEntryPointModifyValue]|
|`Effects[29].Modification`|Add|
|`Effects[29].Value`|21|
|`Effects[29].EntryPoint`|ModArmorRating|
|`Effects[29].PerkConditionTabCount`|2|
|`Effects[29].Rank`|0|
|`Effects[29].Priority`|21|
|`Effects[29].Conditions`|[list: 1 item(s)]|
|`Effects[29].Flags`|[PerkScriptFlag]|
|`Effects[29].Flags.Flags`|0|
|`Effects[29].Flags.FragmentIndex`|0|
|`Effects[30]`|[PerkEntryPointModifyValue]|
|`Effects[30].Modification`|Add|
|`Effects[30].Value`|24|
|`Effects[30].EntryPoint`|ModArmorRating|
|`Effects[30].PerkConditionTabCount`|2|
|`Effects[30].Rank`|0|
|`Effects[30].Priority`|24|
|`Effects[30].Conditions`|[list: 1 item(s)]|
|`Effects[30].Flags`|[PerkScriptFlag]|
|`Effects[30].Flags.Flags`|0|
|`Effects[30].Flags.FragmentIndex`|0|
|`Effects[31]`|[PerkEntryPointModifyValue]|
|`Effects[31].Modification`|Add|
|`Effects[31].Value`|25|
|`Effects[31].EntryPoint`|ModArmorRating|
|`Effects[31].PerkConditionTabCount`|2|
|`Effects[31].Rank`|0|
|`Effects[31].Priority`|25|
|`Effects[31].Conditions`|[list: 1 item(s)]|
|`Effects[31].Flags`|[PerkScriptFlag]|
|`Effects[31].Flags.Flags`|0|
|`Effects[31].Flags.FragmentIndex`|0|
|`Name`|Protective Clothing|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a17f77339868"></a>

## AdvancedArmors

- Identidade estável Housecarl: `0CB414:Skyrim.esm`.
- Tipo: `Perk`; winner: `weapons armor clothing & clutter fixes.esp`; profundidade de override: 2.
- Nome: Advanced Light Smithing; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=1; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB40F:Skyrim.esm`](../perks/PERKS_060.md#r-5421fce7849b)<br>Parameter1.Link=[`0CB40F:Skyrim.esm`](../perks/PERKS_060.md#r-5421fce7849b)|aliases=False; package=False|
|`Conditions[1]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Perk=[`0CB410:Skyrim.esm`](../perks/PERKS_060.md#r-0a9c6d390786)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0114:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBDE:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBDA:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=10FD61:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0115:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0009BF:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0100:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[6]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0113:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[7]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0119:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[8]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0121:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[9]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0130:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[10]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0204:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[11]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[12]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0204:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModTemperingHealth|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|1|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|2|
|`Effects[1].EntryPoint`|ModTemperingHealth|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Advanced Light Smithing|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-9a6325446320"></a>

## DaedricSmithing

- Identidade estável Housecarl: `0CB413:Skyrim.esm`.
- Tipo: `Perk`; winner: `weapons armor clothing & clutter fixes.esp`; profundidade de override: 2.
- Nome: Daedric Smithing; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB412:Skyrim.esm`](../perks/PERKS_060.md#r-fafe9a88d856)<br>Parameter1.Link=[`0CB412:Skyrim.esm`](../perks/PERKS_060.md#r-fafe9a88d856)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBD4:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E71F:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0111:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0208:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0208:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModTemperingHealth|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Daedric Smithing|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-ae725baf50f6"></a>

## DLC2Smithing

- Identidade estável Housecarl: `024108:Dragonborn.esm`.
- Tipo: `Perk`; winner: `weapons armor clothing & clutter fixes.esp`; profundidade de override: 2.
- Nome: Smithing; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=8; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=6; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=4; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=3; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=2; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB414:Skyrim.esm`](../perks/PERKS_060.md#r-a17f77339868)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=024104:Dragonborn.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB410:Skyrim.esm`](../perks/PERKS_060.md#r-0a9c6d390786)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=024105:Dragonborn.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=026230:Dragonborn.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=024103:Dragonborn.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB412:Skyrim.esm`](../perks/PERKS_060.md#r-fafe9a88d856)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=06BBD8:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=024106:Dragonborn.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB411:Skyrim.esm`](../perks/PERKS_060.md#r-4401abe3eaa9)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=024107:Dragonborn.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0CB412:Skyrim.esm`](../perks/PERKS_060.md#r-fafe9a88d856)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0CB411:Skyrim.esm`](../perks/PERKS_060.md#r-4401abe3eaa9)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=02622F:Dragonborn.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 5 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModTemperingHealth|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|8|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|2|
|`Effects[1].EntryPoint`|ModTemperingHealth|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|6|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|2|
|`Effects[2].EntryPoint`|ModTemperingHealth|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|4|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|2|
|`Effects[3].EntryPoint`|ModTemperingHealth|
|`Effects[3].PerkConditionTabCount`|2|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|3|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Multiply|
|`Effects[4].Value`|2|
|`Effects[4].EntryPoint`|ModTemperingHealth|
|`Effects[4].PerkConditionTabCount`|2|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|2|
|`Effects[4].Conditions`|[list: 2 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Name`|Smithing|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-d4fcf9311a50"></a>

## DragonArmor

- Identidade estável Housecarl: `052190:Skyrim.esm`.
- Tipo: `Perk`; winner: `weapons armor clothing & clutter fixes.esp`; profundidade de override: 4.
- Nome: Dragon Smithing; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0CB413:Skyrim.esm`](../perks/PERKS_060.md#r-9a6325446320)<br>Parameter1.Link=[`0CB413:Skyrim.esm`](../perks/PERKS_060.md#r-9a6325446320)|aliases=False; package=False|
|`Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0CB411:Skyrim.esm`](../perks/PERKS_060.md#r-4401abe3eaa9)<br>Parameter1.Link=[`0CB411:Skyrim.esm`](../perks/PERKS_060.md#r-4401abe3eaa9)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBD5:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBD6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=019822:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0207:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0207:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModTemperingHealth|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Dragon Smithing|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-964821445dca"></a>

## DwarvenSmithing

- Identidade estável Housecarl: `0CB40E:Skyrim.esm`.
- Tipo: `Perk`; winner: `weapons armor clothing & clutter fixes.esp`; profundidade de override: 2.
- Nome: Dwarven Smithing; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB40D:Skyrim.esm`](../perks/PERKS_060.md#r-7eff36e4a77d)<br>Parameter1.Link=[`0CB40D:Skyrim.esm`](../perks/PERKS_060.md#r-7eff36e4a77d)|aliases=False; package=False|
|`Conditions[1]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0119:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0121:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=012CCE:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBD7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E71A:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=00E299:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[6]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=012CCF:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[7]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0201:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[8]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[9]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0201:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModTemperingHealth|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Dwarven Smithing|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-fafe9a88d856"></a>

## EbonySmithing

- Identidade estável Housecarl: `0CB412:Skyrim.esm`.
- Tipo: `Perk`; winner: `weapons armor clothing & clutter fixes.esp`; profundidade de override: 2.
- Nome: Ebony Smithing; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB410:Skyrim.esm`](../perks/PERKS_060.md#r-0a9c6d390786)<br>Parameter1.Link=[`0CB410:Skyrim.esm`](../perks/PERKS_060.md#r-0a9c6d390786)|aliases=False; package=False|
|`Conditions[1]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBD8:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E71E:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0C5C04:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=012CCE:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0206:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[6]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0206:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModTemperingHealth|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Ebony Smithing|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-5421fce7849b"></a>

## ElvenSmithing

- Identidade estável Housecarl: `0CB40F:Skyrim.esm`.
- Tipo: `Perk`; winner: `weapons armor clothing & clutter fixes.esp`; profundidade de override: 2.
- Nome: Elven Smithing; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB40D:Skyrim.esm`](../perks/PERKS_060.md#r-7eff36e4a77d)<br>Parameter1.Link=[`0CB40D:Skyrim.esm`](../perks/PERKS_060.md#r-7eff36e4a77d)|aliases=False; package=False|
|`Conditions[1]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=06BBDA:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0119:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0121:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBD9:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E71B:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0009BD:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[6]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0C5C03:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[7]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=012CD0:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[8]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=024102:Dragonborn.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[9]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0202:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[10]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[11]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0202:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModTemperingHealth|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Elven Smithing|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-34f4efda0151"></a>

## FistsOfSteel_Light

- Identidade estável Housecarl: `2BAA05:weapons armor clothing & clutter fixes.esp`.
- Tipo: `Perk`; winner: `weapons armor clothing & clutter fixes.esp`; profundidade de override: 1.
- Nome: Fists of Mithril; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`2BAA06:weapons armor clothing & clutter fixes.esp`](../magic/MAGIC_048.md#r-f5eaee8dba82); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=2BAA06:weapons armor clothing & clutter fixes.esp|
|`Effects[0].Ability`|[`2BAA06:weapons armor clothing & clutter fixes.esp`](../magic/MAGIC_048.md#r-f5eaee8dba82)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Fists of Mithril|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-4401abe3eaa9"></a>

## GlassSmithing

- Identidade estável Housecarl: `0CB411:Skyrim.esm`.
- Tipo: `Perk`; winner: `weapons armor clothing & clutter fixes.esp`; profundidade de override: 2.
- Nome: Glass Smithing; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB414:Skyrim.esm`](../perks/PERKS_060.md#r-a17f77339868)<br>Parameter1.Link=[`0CB414:Skyrim.esm`](../perks/PERKS_060.md#r-a17f77339868)|aliases=False; package=False|
|`Conditions[1]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBDC:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E71D:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0205:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0205:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModTemperingHealth|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Glass Smithing|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-5a5e611f9dad"></a>

## MatchingSetHeavytoLight_WAF

- Identidade estável Housecarl: `2ED98A:weapons armor clothing & clutter fixes.esp`.
- Tipo: `Perk`; winner: `weapons armor clothing & clutter fixes.esp`; profundidade de override: 1.
- Nome: Matching Set; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.25; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`051B17:Skyrim.esm`](../perks/PERKS_053.md#r-4df37ebaa825)<br>Parameter1.Link=[`051B17:Skyrim.esm`](../perks/PERKS_053.md#r-4df37ebaa825)|aliases=False; package=False|
|`Conditions[1]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=LightArmor<br>Parameter1=LightArmor|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=003278:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBD4:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBD8:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBD5:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBD7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBE2:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBE5:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBE3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[8]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBE4:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[9]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBE6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[10]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBE7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[11]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=AF0132:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[12]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=0009C0:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[13]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=AF0135:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[14]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=AF0107:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.25|
|`Effects[0].EntryPoint`|ModArmorRating|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Matching Set|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-1682c6c55687"></a>

## MatchingSetLighttoHeavy_WAF

- Identidade estável Housecarl: `2ED989:weapons armor clothing & clutter fixes.esp`.
- Tipo: `Perk`; winner: `weapons armor clothing & clutter fixes.esp`; profundidade de override: 1.
- Nome: Matching Set; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.25; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`02410A:Dragonborn.esm`](../perks/PERKS_045.md#r-c41ee84709b5)<br>Parameter1.Link=[`02410A:Dragonborn.esm`](../perks/PERKS_045.md#r-c41ee84709b5)|aliases=False; package=False|
|`Conditions[1]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=003279:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBD6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBD9:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=AF0105:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBDC:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=AF0106:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=AF0108:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBDE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[8]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=0009BE:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[9]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=0009B9:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[10]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=06BBE0:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[11]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=0009BB:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[12]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=0009BA:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[13]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=10FD61:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[14]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=0009BC:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[15]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=0009BF:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[16]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=10FD62:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[17]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=AF0100:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[18]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=AF0101:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[19]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=0AC13A:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[20]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=AF0112:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[21]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 3|OR|Keyword=AF0125:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[22]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=0009BD:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[23]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=012CD0:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[24]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=AF0138:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[25]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=900015:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[26]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=900014:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[27]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 4|OR|Keyword=03A328:Dragonborn.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.25|
|`Effects[0].EntryPoint`|ModArmorRating|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Matching Set|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0a9c6d390786"></a>

## OrcishSmithing

- Identidade estável Housecarl: `0CB410:Skyrim.esm`.
- Tipo: `Perk`; winner: `weapons armor clothing & clutter fixes.esp`; profundidade de override: 2.
- Nome: Advanced Heavy Smithing; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB40E:Skyrim.esm`](../perks/PERKS_060.md#r-964821445dca)<br>Parameter1.Link=[`0CB40E:Skyrim.esm`](../perks/PERKS_060.md#r-964821445dca)|aliases=False; package=False|
|`Conditions[1]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Smithing<br>Parameter1=Smithing|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBE5:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E71C:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0114:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBE7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0C5C02:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0009C0:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[6]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0103:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[7]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0203:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[8]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[9]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0203:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModTemperingHealth|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Advanced Heavy Smithing|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-aa26822c1273"></a>

## SpikedGauntlet_WAF

- Identidade estável Housecarl: `2E3290:weapons armor clothing & clutter fixes.esp`.
- Tipo: `Perk`; winner: `weapons armor clothing & clutter fixes.esp`; profundidade de override: 1.
- Nome: Spiked Gauntlets; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`2E328F:weapons armor clothing & clutter fixes.esp`](../magic/MAGIC_049.md#r-f8693a75699b); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=2E328F:weapons armor clothing & clutter fixes.esp|
|`Effects[0].Ability`|[`2E328F:weapons armor clothing & clutter fixes.esp`](../magic/MAGIC_049.md#r-f8693a75699b)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Spiked Gauntlets|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7eff36e4a77d"></a>

## SteelSmithing

- Identidade estável Housecarl: `0CB40D:Skyrim.esm`.
- Tipo: `Perk`; winner: `weapons armor clothing & clutter fixes.esp`; profundidade de override: 3.
- Nome: Basic Smithing; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Global=CC0500:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=06BBDE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=0C5C02:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=06BBE7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0115:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0114:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0103:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[6]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0119:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[7]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0121:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[8]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0113:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[9]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|0|Keyword=AF0130:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[10]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBE6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[11]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBE2:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[12]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E719:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[13]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0C5C01:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[14]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBDD:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[15]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBE3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[16]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBDB:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[17]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBE4:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[18]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBE0:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[19]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBE1:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[20]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0AC13A:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[21]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E717:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[22]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E718:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[23]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0C5C00:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[24]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=10AA1A:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[25]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0132:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[26]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06BBDF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[27]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0009B9:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[28]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0009BA:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[29]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0009BB:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[30]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0009BE:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[31]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0107:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[32]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0104:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[33]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0112:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[34]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0116:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[35]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0142:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[36]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0143:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[37]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0135:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[38]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=AF0101:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[39]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=10FD62:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[40]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0009BC:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[41]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=012CCD:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[42]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0050C4:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[43]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01463E:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[44]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=024101:Dragonborn.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[45]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=024100:Dragonborn.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[46]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0200:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[47]`|HasKeyword|1|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|Keyword=AF0218:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[48]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=AF0200:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModTemperingHealth|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Basic Smithing|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-957cf4af2da2"></a>

## _PU_NoFallDamagePerk

- Identidade estável Housecarl: `00081F:WizardingTraversal.esl`.
- Tipo: `Perk`; winner: `WizardingTraversal.esl`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModFallingDamage; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModFallingDamage|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
