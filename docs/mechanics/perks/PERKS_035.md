# Perks instaladas — parte 035

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-5f5a0df11153"></a>

## MAG_ConjurationNovicePerk

- Identidade estável Housecarl: `0CA571:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Conjuration Novice Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Conjuration<br>Parameter1=Conjuration|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CA7:Skyrim.esm`](../perks/PERKS_048.md#r-6a917fa6c4aa)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Conjuration Novice Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-8c7b6db8e07a"></a>

## MAG_ControllerGeneralPerk

- Identidade estável Housecarl: `ADA501:Update.esm`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 2.
- Nome: Apothecary and Thaumaturgy Controller; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModIncomingDamage; Modification=MultiplyOnePlusAVMult; ActorValue=SmithingSkillAdvance; Value=-0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[1] — PerkEntryPointModifyActorValue**: EntryPoint=ModPickpocketChance; Modification=MultiplyOnePlusAVMult; ActorValue=PickpocketSkillAdvance; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[2] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellDuration; Modification=MultiplyOnePlusAVMult; ActorValue=MarksmanSkillAdvance; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[3] — PerkEntryPointModifyActorValue**: EntryPoint=ModSkillUse; Modification=MultiplyOnePlusAVMult; ActorValue=ConjurationSkillAdvance; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=1. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[4] — PerkEntryPointModifyActorValue**: EntryPoint=ModPowerAttackDamage; Modification=MultiplyOnePlusAVMult; ActorValue=TwoHandedSkillAdvance; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[5] — PerkEntryPointModifyActorValue**: EntryPoint=ModAttackDamage; Modification=MultiplyOnePlusAVMult; ActorValue=Fame; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[6] — PerkEntryPointModifyActorValue**: EntryPoint=ModPoisonDoseCount; Modification=MultiplyOnePlusAVMult; ActorValue=AlchemyModifier; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[7] — PerkEntryPointModifyActorValue**: EntryPoint=ModIncomingDamage; Modification=MultiplyOnePlusAVMult; ActorValue=AlterationSkillAdvance; Value=-0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[8] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellMagnitude; Modification=MultiplyOnePlusAVMult; ActorValue=SpeechcraftSkillAdvance; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[9] — PerkEntryPointModifyActorValue**: EntryPoint=ModBashingDamage; Modification=MultiplyOnePlusAVMult; ActorValue=LockpickingSkillAdvance; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[10] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellDuration; Modification=MultiplyOnePlusAVMult; ActorValue=RestorationSkillAdvance; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[11] — PerkEntryPointModifyActorValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=MultiplyOnePlusAVMult; ActorValue=DestructionSkillAdvance; Value=-0.01; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[12] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellCost; Modification=MultiplyOnePlusAVMult; ActorValue=Infamy; Value=-0.01; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[13] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellDuration; Modification=MultiplyOnePlusAVMult; ActorValue=AlchemySkillAdvance; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[14] — PerkEntryPointModifyActorValue**: EntryPoint=ModSneakAttackMult; Modification=MultiplyOnePlusAVMult; ActorValue=SneakingSkillAdvance; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[15] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellMagnitude; Modification=MultiplyOnePlusAVMult; ActorValue=SneakingSkillAdvance; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[16] — PerkEntryPointModifyActorValue**: EntryPoint=ModIncomingDamage; Modification=MultiplyOnePlusAVMult; ActorValue=EnchantingSkillAdvance; Value=-0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[17] — PerkEntryPointModifyActorValue**: EntryPoint=ModLockpickSweetSpot; Modification=MultiplyOnePlusAVMult; ActorValue=PickpocketSkillAdvance; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[18] — PerkEntryPointModifyActorValue**: EntryPoint=ModIncomingStagger; Modification=MultiplyOnePlusAVMult; ActorValue=SmithingSkillAdvance; Value=-0.01; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[19] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellDuration; Modification=MultiplyOnePlusAVMult; ActorValue=IllusionSkillAdvance; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|IsStaggered|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=ADA507:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA139:Update.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[6]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[7]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0965B2:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormList=ADA502:Update.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA138:Update.esm|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|OR|Keyword=ADA001:Update.esm|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA127:Update.esm|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0965B2:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[1]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[3]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[4]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[5]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[6]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0F8A4E:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0FB98C:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[0]`|IsSneaking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0B62E4:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[1]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[3]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm|aliases=False; package=False|
|`Effects[15].Conditions[2].Conditions[0]`|GetDetected|2|Subject; ref=(null link); index=-1|EqualTo 0|0|TargetNpc=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0965B2:Skyrim.esm|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[1]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[16].Conditions[1].Conditions[0]`|IsPowerAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[19].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 20 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|SmithingSkillAdvance|
|`Effects[0].Value`|-0.01|
|`Effects[0].Modification`|MultiplyOnePlusAVMult|
|`Effects[0].EntryPoint`|ModIncomingDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyActorValue]|
|`Effects[1].ActorValue`|PickpocketSkillAdvance|
|`Effects[1].Value`|0.01|
|`Effects[1].Modification`|MultiplyOnePlusAVMult|
|`Effects[1].EntryPoint`|ModPickpocketChance|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyActorValue]|
|`Effects[2].ActorValue`|MarksmanSkillAdvance|
|`Effects[2].Value`|0.01|
|`Effects[2].Modification`|MultiplyOnePlusAVMult|
|`Effects[2].EntryPoint`|ModSpellDuration|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyActorValue]|
|`Effects[3].ActorValue`|ConjurationSkillAdvance|
|`Effects[3].Value`|0.01|
|`Effects[3].Modification`|MultiplyOnePlusAVMult|
|`Effects[3].EntryPoint`|ModSkillUse|
|`Effects[3].PerkConditionTabCount`|1|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|0|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyActorValue]|
|`Effects[4].ActorValue`|TwoHandedSkillAdvance|
|`Effects[4].Value`|0.01|
|`Effects[4].Modification`|MultiplyOnePlusAVMult|
|`Effects[4].EntryPoint`|ModPowerAttackDamage|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|0|
|`Effects[4].Conditions`|[list: 0 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointModifyActorValue]|
|`Effects[5].ActorValue`|Fame|
|`Effects[5].Value`|0.01|
|`Effects[5].Modification`|MultiplyOnePlusAVMult|
|`Effects[5].EntryPoint`|ModAttackDamage|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|0|
|`Effects[5].Conditions`|[list: 1 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyActorValue]|
|`Effects[6].ActorValue`|AlchemyModifier|
|`Effects[6].Value`|0.01|
|`Effects[6].Modification`|MultiplyOnePlusAVMult|
|`Effects[6].EntryPoint`|ModPoisonDoseCount|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|0|
|`Effects[6].Conditions`|[list: 0 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyActorValue]|
|`Effects[7].ActorValue`|AlterationSkillAdvance|
|`Effects[7].Value`|-0.01|
|`Effects[7].Modification`|MultiplyOnePlusAVMult|
|`Effects[7].EntryPoint`|ModIncomingDamage|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|0|
|`Effects[7].Conditions`|[list: 2 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointModifyActorValue]|
|`Effects[8].ActorValue`|SpeechcraftSkillAdvance|
|`Effects[8].Value`|0.01|
|`Effects[8].Modification`|MultiplyOnePlusAVMult|
|`Effects[8].EntryPoint`|ModSpellMagnitude|
|`Effects[8].PerkConditionTabCount`|3|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|0|
|`Effects[8].Conditions`|[list: 1 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointModifyActorValue]|
|`Effects[9].ActorValue`|LockpickingSkillAdvance|
|`Effects[9].Value`|0.01|
|`Effects[9].Modification`|MultiplyOnePlusAVMult|
|`Effects[9].EntryPoint`|ModBashingDamage|
|`Effects[9].PerkConditionTabCount`|2|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|0|
|`Effects[9].Conditions`|[list: 0 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointModifyActorValue]|
|`Effects[10].ActorValue`|RestorationSkillAdvance|
|`Effects[10].Value`|0.01|
|`Effects[10].Modification`|MultiplyOnePlusAVMult|
|`Effects[10].EntryPoint`|ModSpellDuration|
|`Effects[10].PerkConditionTabCount`|3|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|0|
|`Effects[10].Conditions`|[list: 1 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointModifyActorValue]|
|`Effects[11].ActorValue`|DestructionSkillAdvance|
|`Effects[11].Value`|-0.01|
|`Effects[11].Modification`|MultiplyOnePlusAVMult|
|`Effects[11].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[11].PerkConditionTabCount`|2|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|0|
|`Effects[11].Conditions`|[list: 2 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Effects[12]`|[PerkEntryPointModifyActorValue]|
|`Effects[12].ActorValue`|Infamy|
|`Effects[12].Value`|-0.01|
|`Effects[12].Modification`|MultiplyOnePlusAVMult|
|`Effects[12].EntryPoint`|ModSpellCost|
|`Effects[12].PerkConditionTabCount`|2|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|0|
|`Effects[12].Conditions`|[list: 0 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|0|
|`Effects[12].Flags.FragmentIndex`|0|
|`Effects[13]`|[PerkEntryPointModifyActorValue]|
|`Effects[13].ActorValue`|AlchemySkillAdvance|
|`Effects[13].Value`|0.01|
|`Effects[13].Modification`|MultiplyOnePlusAVMult|
|`Effects[13].EntryPoint`|ModSpellDuration|
|`Effects[13].PerkConditionTabCount`|3|
|`Effects[13].Rank`|0|
|`Effects[13].Priority`|0|
|`Effects[13].Conditions`|[list: 1 item(s)]|
|`Effects[13].Flags`|[PerkScriptFlag]|
|`Effects[13].Flags.Flags`|0|
|`Effects[13].Flags.FragmentIndex`|0|
|`Effects[14]`|[PerkEntryPointModifyActorValue]|
|`Effects[14].ActorValue`|SneakingSkillAdvance|
|`Effects[14].Value`|0.01|
|`Effects[14].Modification`|MultiplyOnePlusAVMult|
|`Effects[14].EntryPoint`|ModSneakAttackMult|
|`Effects[14].PerkConditionTabCount`|3|
|`Effects[14].Rank`|0|
|`Effects[14].Priority`|0|
|`Effects[14].Conditions`|[list: 0 item(s)]|
|`Effects[14].Flags`|[PerkScriptFlag]|
|`Effects[14].Flags.Flags`|0|
|`Effects[14].Flags.FragmentIndex`|0|
|`Effects[15]`|[PerkEntryPointModifyActorValue]|
|`Effects[15].ActorValue`|SneakingSkillAdvance|
|`Effects[15].Value`|0.01|
|`Effects[15].Modification`|MultiplyOnePlusAVMult|
|`Effects[15].EntryPoint`|ModSpellMagnitude|
|`Effects[15].PerkConditionTabCount`|3|
|`Effects[15].Rank`|0|
|`Effects[15].Priority`|0|
|`Effects[15].Conditions`|[list: 3 item(s)]|
|`Effects[15].Flags`|[PerkScriptFlag]|
|`Effects[15].Flags.Flags`|0|
|`Effects[15].Flags.FragmentIndex`|0|
|`Effects[16]`|[PerkEntryPointModifyActorValue]|
|`Effects[16].ActorValue`|EnchantingSkillAdvance|
|`Effects[16].Value`|-0.01|
|`Effects[16].Modification`|MultiplyOnePlusAVMult|
|`Effects[16].EntryPoint`|ModIncomingDamage|
|`Effects[16].PerkConditionTabCount`|3|
|`Effects[16].Rank`|0|
|`Effects[16].Priority`|0|
|`Effects[16].Conditions`|[list: 2 item(s)]|
|`Effects[16].Flags`|[PerkScriptFlag]|
|`Effects[16].Flags.Flags`|0|
|`Effects[16].Flags.FragmentIndex`|0|
|`Effects[17]`|[PerkEntryPointModifyActorValue]|
|`Effects[17].ActorValue`|PickpocketSkillAdvance|
|`Effects[17].Value`|0.01|
|`Effects[17].Modification`|MultiplyOnePlusAVMult|
|`Effects[17].EntryPoint`|ModLockpickSweetSpot|
|`Effects[17].PerkConditionTabCount`|2|
|`Effects[17].Rank`|0|
|`Effects[17].Priority`|0|
|`Effects[17].Conditions`|[list: 0 item(s)]|
|`Effects[17].Flags`|[PerkScriptFlag]|
|`Effects[17].Flags.Flags`|0|
|`Effects[17].Flags.FragmentIndex`|0|
|`Effects[18]`|[PerkEntryPointModifyActorValue]|
|`Effects[18].ActorValue`|SmithingSkillAdvance|
|`Effects[18].Value`|-0.01|
|`Effects[18].Modification`|MultiplyOnePlusAVMult|
|`Effects[18].EntryPoint`|ModIncomingStagger|
|`Effects[18].PerkConditionTabCount`|2|
|`Effects[18].Rank`|0|
|`Effects[18].Priority`|0|
|`Effects[18].Conditions`|[list: 0 item(s)]|
|`Effects[18].Flags`|[PerkScriptFlag]|
|`Effects[18].Flags.Flags`|0|
|`Effects[18].Flags.FragmentIndex`|0|
|`Effects[19]`|[PerkEntryPointModifyActorValue]|
|`Effects[19].ActorValue`|IllusionSkillAdvance|
|`Effects[19].Value`|0.01|
|`Effects[19].Modification`|MultiplyOnePlusAVMult|
|`Effects[19].EntryPoint`|ModSpellDuration|
|`Effects[19].PerkConditionTabCount`|3|
|`Effects[19].Rank`|0|
|`Effects[19].Priority`|0|
|`Effects[19].Conditions`|[list: 1 item(s)]|
|`Effects[19].Flags`|[PerkScriptFlag]|
|`Effects[19].Flags.Flags`|0|
|`Effects[19].Flags.FragmentIndex`|0|
|`Name`|Apothecary and Thaumaturgy Controller|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-e2f03a861f1e"></a>

## MAG_ControllerScalingPerk

- Identidade estável Housecarl: `08D801:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Enchanting Scaling Controller; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModEnchantmentPower; Modification=MultiplyOnePlusAVMult; ActorValue=Enchanting; Value=0.0025; Rank=0; Priority=2; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModEnchantmentPower; Modification=Multiply; Value=0.8; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkAbilityEffect**: Ability=[`223517:Thaumaturgy.esp`](../magic/MAGIC_047.md#r-c3faee5346d7); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[3] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellMagnitude; Modification=MultiplyOnePlusAVMult; ActorValue=Enchanting; Value=0.03; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[4] — PerkEntryPointModifyActorValue**: EntryPoint=ModEnchantmentPower; Modification=MultiplyOnePlusAVMult; ActorValue=Enchanting; Value=0.002; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[5] — PerkEntryPointModifyActorValue**: EntryPoint=ModEnchantmentPower; Modification=MultiplyOnePlusAVMult; ActorValue=Enchanting; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[6] — PerkEntryPointModifyActorValue**: EntryPoint=ModEnchantmentPower; Modification=MultiplyOnePlusAVMult; ActorValue=Enchanting; Value=0.00667; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[7] — PerkEntryPointModifyActorValue**: EntryPoint=ModEnchantmentPower; Modification=MultiplyOnePlusAVMult; ActorValue=Enchanting; Value=0.0025; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[8] — PerkEntryPointModifyValue**: EntryPoint=ModEnchantmentPower; Modification=Multiply; Value=0.8; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[9] — PerkEntryPointModifyActorValue**: EntryPoint=ModEnchantmentPower; Modification=MultiplyOnePlusAVMult; ActorValue=Enchanting; Value=0.00625; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[10] — PerkEntryPointModifyActorValue**: EntryPoint=ModEnchantmentPower; Modification=MultiplyOnePlusAVMult; ActorValue=Enchanting; Value=0.00111; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[11] — PerkEntryPointModifyActorValue**: EntryPoint=ModEnchantmentPower; Modification=MultiplyOnePlusAVMult; ActorValue=Enchanting; Value=0.002; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[12] — PerkEntryPointModifyValue**: EntryPoint=ModEnchantmentPower; Modification=Multiply; Value=0.96; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[13] — PerkEntryPointModifyValue**: EntryPoint=ModEnchantmentPower; Modification=Multiply; Value=0.667; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[14] — PerkEntryPointModifyActorValue**: EntryPoint=ModEnchantmentPower; Modification=MultiplyOnePlusAVMult; ActorValue=Enchanting; Value=0.01; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[15] — PerkEntryPointModifyActorValue**: EntryPoint=ModEnchantmentPower; Modification=MultiplyOnePlusAVMult; ActorValue=Enchanting; Value=0.006; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[16] — PerkEntryPointModifyActorValue**: EntryPoint=ModEnchantmentPower; Modification=MultiplyOnePlusAVMult; ActorValue=Enchanting; Value=0.0008; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[17] — PerkEntryPointModifyActorValue**: EntryPoint=ModEnchantmentPower; Modification=MultiplyOnePlusAVMult; ActorValue=Enchanting; Value=0.002; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=074F58:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F62:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F67:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F71:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F61:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F68:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F72:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F56:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[7]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F57:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[8]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F59:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[9]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0FFEA1:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[10]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F58:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[11]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F5B:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[12]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F5E:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[13]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F5F:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[14]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F64:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[15]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F6D:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[16]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F6B:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[17]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F73:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[18]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F69:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[19]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F5C:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[20]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F70:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[21]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F66:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[22]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F6C:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[23]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F6F:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[24]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F5A:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[25]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F63:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[26]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=1FFBD6:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`3DBE75:Thaumaturgy.esp`](../magic/MAGIC_054.md#r-50f9e786e6a8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=260144:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=38AE2A:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=3C2956:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=3CCB5E:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA119:Update.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=074F70:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=3D1C63:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=3D1C64:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=3EB17C:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=3B8752:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA119:Update.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=36770C:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=36C812:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0E8C0E:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0E8C0F:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=36770C:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=3B8752:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=3D6D6C:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=3073BA:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=3073BB:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=24BD37:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0BD83F:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=078098:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=09CBA7:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=255F3B:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[17].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0A1CAC:Thaumaturgy.esp|aliases=False; package=False|
|`Effects[17].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=10C36C:Thaumaturgy.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 18 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Enchanting|
|`Effects[0].Value`|0.0025|
|`Effects[0].Modification`|MultiplyOnePlusAVMult|
|`Effects[0].EntryPoint`|ModEnchantmentPower|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|2|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0.8|
|`Effects[1].EntryPoint`|ModEnchantmentPower|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|1|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkAbilityEffect] Ability=223517:Thaumaturgy.esp|
|`Effects[2].Ability`|[`223517:Thaumaturgy.esp`](../magic/MAGIC_047.md#r-c3faee5346d7)|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyActorValue]|
|`Effects[3].ActorValue`|Enchanting|
|`Effects[3].Value`|0.03|
|`Effects[3].Modification`|MultiplyOnePlusAVMult|
|`Effects[3].EntryPoint`|ModSpellMagnitude|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|0|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyActorValue]|
|`Effects[4].ActorValue`|Enchanting|
|`Effects[4].Value`|0.002|
|`Effects[4].Modification`|MultiplyOnePlusAVMult|
|`Effects[4].EntryPoint`|ModEnchantmentPower|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|0|
|`Effects[4].Conditions`|[list: 1 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointModifyActorValue]|
|`Effects[5].ActorValue`|Enchanting|
|`Effects[5].Value`|0.01|
|`Effects[5].Modification`|MultiplyOnePlusAVMult|
|`Effects[5].EntryPoint`|ModEnchantmentPower|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|0|
|`Effects[5].Conditions`|[list: 1 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyActorValue]|
|`Effects[6].ActorValue`|Enchanting|
|`Effects[6].Value`|0.00667|
|`Effects[6].Modification`|MultiplyOnePlusAVMult|
|`Effects[6].EntryPoint`|ModEnchantmentPower|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|0|
|`Effects[6].Conditions`|[list: 1 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyActorValue]|
|`Effects[7].ActorValue`|Enchanting|
|`Effects[7].Value`|0.0025|
|`Effects[7].Modification`|MultiplyOnePlusAVMult|
|`Effects[7].EntryPoint`|ModEnchantmentPower|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|0|
|`Effects[7].Conditions`|[list: 1 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointModifyValue]|
|`Effects[8].Modification`|Multiply|
|`Effects[8].Value`|0.8|
|`Effects[8].EntryPoint`|ModEnchantmentPower|
|`Effects[8].PerkConditionTabCount`|3|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|0|
|`Effects[8].Conditions`|[list: 1 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointModifyActorValue]|
|`Effects[9].ActorValue`|Enchanting|
|`Effects[9].Value`|0.00625|
|`Effects[9].Modification`|MultiplyOnePlusAVMult|
|`Effects[9].EntryPoint`|ModEnchantmentPower|
|`Effects[9].PerkConditionTabCount`|3|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|0|
|`Effects[9].Conditions`|[list: 1 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointModifyActorValue]|
|`Effects[10].ActorValue`|Enchanting|
|`Effects[10].Value`|0.00111|
|`Effects[10].Modification`|MultiplyOnePlusAVMult|
|`Effects[10].EntryPoint`|ModEnchantmentPower|
|`Effects[10].PerkConditionTabCount`|3|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|0|
|`Effects[10].Conditions`|[list: 1 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointModifyActorValue]|
|`Effects[11].ActorValue`|Enchanting|
|`Effects[11].Value`|0.002|
|`Effects[11].Modification`|MultiplyOnePlusAVMult|
|`Effects[11].EntryPoint`|ModEnchantmentPower|
|`Effects[11].PerkConditionTabCount`|3|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|0|
|`Effects[11].Conditions`|[list: 1 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Effects[12]`|[PerkEntryPointModifyValue]|
|`Effects[12].Modification`|Multiply|
|`Effects[12].Value`|0.96|
|`Effects[12].EntryPoint`|ModEnchantmentPower|
|`Effects[12].PerkConditionTabCount`|3|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|0|
|`Effects[12].Conditions`|[list: 1 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|0|
|`Effects[12].Flags.FragmentIndex`|0|
|`Effects[13]`|[PerkEntryPointModifyValue]|
|`Effects[13].Modification`|Multiply|
|`Effects[13].Value`|0.667|
|`Effects[13].EntryPoint`|ModEnchantmentPower|
|`Effects[13].PerkConditionTabCount`|3|
|`Effects[13].Rank`|0|
|`Effects[13].Priority`|0|
|`Effects[13].Conditions`|[list: 1 item(s)]|
|`Effects[13].Flags`|[PerkScriptFlag]|
|`Effects[13].Flags.Flags`|0|
|`Effects[13].Flags.FragmentIndex`|0|
|`Effects[14]`|[PerkEntryPointModifyActorValue]|
|`Effects[14].ActorValue`|Enchanting|
|`Effects[14].Value`|0.01|
|`Effects[14].Modification`|MultiplyOnePlusAVMult|
|`Effects[14].EntryPoint`|ModEnchantmentPower|
|`Effects[14].PerkConditionTabCount`|3|
|`Effects[14].Rank`|0|
|`Effects[14].Priority`|0|
|`Effects[14].Conditions`|[list: 1 item(s)]|
|`Effects[14].Flags`|[PerkScriptFlag]|
|`Effects[14].Flags.Flags`|0|
|`Effects[14].Flags.FragmentIndex`|0|
|`Effects[15]`|[PerkEntryPointModifyActorValue]|
|`Effects[15].ActorValue`|Enchanting|
|`Effects[15].Value`|0.006|
|`Effects[15].Modification`|MultiplyOnePlusAVMult|
|`Effects[15].EntryPoint`|ModEnchantmentPower|
|`Effects[15].PerkConditionTabCount`|3|
|`Effects[15].Rank`|0|
|`Effects[15].Priority`|0|
|`Effects[15].Conditions`|[list: 1 item(s)]|
|`Effects[15].Flags`|[PerkScriptFlag]|
|`Effects[15].Flags.Flags`|0|
|`Effects[15].Flags.FragmentIndex`|0|
|`Effects[16]`|[PerkEntryPointModifyActorValue]|
|`Effects[16].ActorValue`|Enchanting|
|`Effects[16].Value`|0.0008|
|`Effects[16].Modification`|MultiplyOnePlusAVMult|
|`Effects[16].EntryPoint`|ModEnchantmentPower|
|`Effects[16].PerkConditionTabCount`|3|
|`Effects[16].Rank`|0|
|`Effects[16].Priority`|0|
|`Effects[16].Conditions`|[list: 1 item(s)]|
|`Effects[16].Flags`|[PerkScriptFlag]|
|`Effects[16].Flags.Flags`|0|
|`Effects[16].Flags.FragmentIndex`|0|
|`Effects[17]`|[PerkEntryPointModifyActorValue]|
|`Effects[17].ActorValue`|Enchanting|
|`Effects[17].Value`|0.002|
|`Effects[17].Modification`|MultiplyOnePlusAVMult|
|`Effects[17].EntryPoint`|ModEnchantmentPower|
|`Effects[17].PerkConditionTabCount`|3|
|`Effects[17].Rank`|0|
|`Effects[17].Priority`|0|
|`Effects[17].Conditions`|[list: 1 item(s)]|
|`Effects[17].Flags`|[PerkScriptFlag]|
|`Effects[17].Flags.Flags`|0|
|`Effects[17].Flags.FragmentIndex`|0|
|`Name`|Enchanting Scaling Controller|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-5468c6b5e280"></a>

## MAG_DestructionAdeptPerk

- Identidade estável Housecarl: `0CA55E:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Destruction Adept Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA8:Skyrim.esm`](../perks/PERKS_049.md#r-90ecb10b697a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BF:Skyrim.esm`](../perks/PERKS_050.md#r-66e84f71d455)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C0:Skyrim.esm`](../perks/PERKS_050.md#r-907ca88f27ab)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Destruction Adept Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-35751ed41e44"></a>

## MAG_DestructionApprenticePerk

- Identidade estável Housecarl: `0CA567:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Destruction Apprentice Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA8:Skyrim.esm`](../perks/PERKS_049.md#r-90ecb10b697a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BF:Skyrim.esm`](../perks/PERKS_050.md#r-66e84f71d455)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Destruction Apprentice Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-edbb546d2444"></a>

## MAG_DestructionExpertPerk

- Identidade estável Housecarl: `0CA568:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Destruction Expert Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA8:Skyrim.esm`](../perks/PERKS_049.md#r-90ecb10b697a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BF:Skyrim.esm`](../perks/PERKS_050.md#r-66e84f71d455)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C0:Skyrim.esm`](../perks/PERKS_050.md#r-907ca88f27ab)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C1:Skyrim.esm`](../perks/PERKS_050.md#r-963fe743f3ef)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Destruction Expert Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-395ab0b9b461"></a>

## MAG_DestructionNovicePerk

- Identidade estável Housecarl: `0CA569:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Destruction Novice Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CA8:Skyrim.esm`](../perks/PERKS_049.md#r-90ecb10b697a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Destruction Novice Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-78db1b5a16a2"></a>

## MAG_IllusionAdeptPerk

- Identidade estável Housecarl: `0CA56A:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Illusion Adept Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA9:Skyrim.esm`](../perks/PERKS_052.md#r-79612550b467)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C3:Skyrim.esm`](../perks/PERKS_053.md#r-82028c83c2e4)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C4:Skyrim.esm`](../perks/PERKS_053.md#r-134f18186f67)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Illusion Adept Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-5b4b866c49dc"></a>

## MAG_IllusionApprenticePerk

- Identidade estável Housecarl: `0CA56B:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Illusion Apprentice Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA9:Skyrim.esm`](../perks/PERKS_052.md#r-79612550b467)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C3:Skyrim.esm`](../perks/PERKS_053.md#r-82028c83c2e4)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Illusion Apprentice Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-6d885c55b21d"></a>

## MAG_IllusionExpertPerk

- Identidade estável Housecarl: `0CA56C:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Illusion Expert Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA9:Skyrim.esm`](../perks/PERKS_052.md#r-79612550b467)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C3:Skyrim.esm`](../perks/PERKS_053.md#r-82028c83c2e4)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C4:Skyrim.esm`](../perks/PERKS_053.md#r-134f18186f67)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C5:Skyrim.esm`](../perks/PERKS_053.md#r-714a5b419de6)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Illusion Expert Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b342aeaeafdc"></a>

## MAG_IllusionNovicePerk

- Identidade estável Housecarl: `0CA56D:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Illusion Novice Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CA9:Skyrim.esm`](../perks/PERKS_052.md#r-79612550b467)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Illusion Novice Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0d3908983c4f"></a>

## MAG_PerkSpellStrike

- Identidade estável Housecarl: `ADA179:Update.esm`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Spell Strike; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Spell Strike|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-5227caf93e80"></a>

## MAG_RestorationAdeptPerk

- Identidade estável Housecarl: `0CA572:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Restoration Adept Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CAA:Skyrim.esm`](../perks/PERKS_056.md#r-89be12cae610)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C7:Skyrim.esm`](../perks/PERKS_057.md#r-177c876aaf88)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C8:Skyrim.esm`](../perks/PERKS_057.md#r-7576fdc84d0d)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Restoration Adept Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2e2a50411d13"></a>

## MAG_RestorationApprenticePerk

- Identidade estável Housecarl: `0CA573:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Restoration Apprentice Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CAA:Skyrim.esm`](../perks/PERKS_056.md#r-89be12cae610)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C7:Skyrim.esm`](../perks/PERKS_057.md#r-177c876aaf88)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Restoration Apprentice Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-92f1fe7b9790"></a>

## MAG_RestorationExpertPerk

- Identidade estável Housecarl: `0CA574:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Restoration Expert Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CAA:Skyrim.esm`](../perks/PERKS_056.md#r-89be12cae610)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C7:Skyrim.esm`](../perks/PERKS_057.md#r-177c876aaf88)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C8:Skyrim.esm`](../perks/PERKS_057.md#r-7576fdc84d0d)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C9:Skyrim.esm`](../perks/PERKS_057.md#r-b00389b66551)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Restoration Expert Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-3b8a464348f1"></a>

## MAG_RestorationNovicePerk

- Identidade estável Housecarl: `0CA575:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Restoration Novice Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CAA:Skyrim.esm`](../perks/PERKS_056.md#r-89be12cae610)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Restoration Novice Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-bd0d5600f924"></a>

## MAG_SlowfallControllerPerk

- Identidade estável Housecarl: `0CA565:Thaumaturgy.esp`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 1.
- Nome: Slowfall Controller Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModFallingDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

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
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModFallingDamage|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Slowfall Controller Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a908eaba9cba"></a>

## PerkSkillBoosts

- Identidade estável Housecarl: `0CF788:Skyrim.esm`.
- Tipo: `Perk`; winner: `Thaumaturgy.esp`; profundidade de override: 4.
- Nome: Enchantment Controller; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellCost; Modification=MultiplyOnePlusAVMult; ActorValue=AlterationModifier; Value=-0.01; Rank=0; Priority=21; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[1] — PerkEntryPointModifyActorValue**: EntryPoint=ModAttackDamage; Modification=MultiplyOnePlusAVMult; ActorValue=MarksmanModifier; Value=0.01; Rank=0; Priority=20; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[2] — PerkEntryPointModifyActorValue**: EntryPoint=ModPercentBlocked; Modification=MultiplyOnePlusAVMult; ActorValue=BlockModifier; Value=0.01; Rank=0; Priority=18; PerkConditionTabCount=1. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[3] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellCost; Modification=MultiplyOnePlusAVMult; ActorValue=ConjurationModifier; Value=-0.01; Rank=0; Priority=17; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[4] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellCost; Modification=MultiplyOnePlusAVMult; ActorValue=DestructionModifier; Value=-0.01; Rank=0; Priority=16; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[5] — PerkEntryPointModifyActorValue**: EntryPoint=ModIncomingDamage; Modification=MultiplyOnePlusAVMult; ActorValue=HeavyArmorModifier; Value=-0.01; Rank=0; Priority=14; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[6] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellCost; Modification=MultiplyOnePlusAVMult; ActorValue=IllusionModifier; Value=-0.01; Rank=0; Priority=13; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[7] — PerkEntryPointModifyActorValue**: EntryPoint=ModIncomingDamage; Modification=MultiplyOnePlusAVMult; ActorValue=LightArmorModifier; Value=-0.01; Rank=0; Priority=12; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[8] — PerkEntryPointModifyActorValue**: EntryPoint=ModLockpickSweetSpot; Modification=MultiplyOnePlusAVMult; ActorValue=LockpickingModifier; Value=0.01; Rank=0; Priority=11; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[9] — PerkEntryPointModifyActorValue**: EntryPoint=ModAttackDamage; Modification=MultiplyOnePlusAVMult; ActorValue=OneHandedModifier; Value=0.01; Rank=0; Priority=10; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[10] — PerkEntryPointModifyActorValue**: EntryPoint=ModPickpocketChance; Modification=AddAVMult; ActorValue=PickpocketModifier; Value=1; Rank=0; Priority=9; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[11] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellCost; Modification=MultiplyOnePlusAVMult; ActorValue=RestorationModifier; Value=-0.01; Rank=0; Priority=8; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[12] — PerkEntryPointModifyActorValue**: EntryPoint=ModTemperingHealth; Modification=MultiplyOnePlusAVMult; ActorValue=SmithingModifier; Value=0.01; Rank=0; Priority=7; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[13] — PerkEntryPointModifyActorValue**: EntryPoint=ModDetectionSneakSkill; Modification=MultiplyOnePlusAVMult; ActorValue=SneakingModifier; Value=0.01; Rank=0; Priority=6; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[14] — PerkEntryPointModifyActorValue**: EntryPoint=ModSellPrices; Modification=MultiplyOnePlusAVMult; ActorValue=SpeechcraftModifier; Value=0.01; Rank=0; Priority=5; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[15] — PerkEntryPointModifyActorValue**: EntryPoint=ModBuyPrices; Modification=MultiplyOnePlusAVMult; ActorValue=SpeechcraftModifier; Value=-0.01; Rank=0; Priority=4; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[16] — PerkEntryPointModifyActorValue**: EntryPoint=ModAttackDamage; Modification=MultiplyOnePlusAVMult; ActorValue=TwoHandedModifier; Value=0.01; Rank=0; Priority=3; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Conjuration<br>Parameter1=Conjuration|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[0]`|IsSneaking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06D930:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 17 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|AlterationModifier|
|`Effects[0].Value`|-0.01|
|`Effects[0].Modification`|MultiplyOnePlusAVMult|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|21|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyActorValue]|
|`Effects[1].ActorValue`|MarksmanModifier|
|`Effects[1].Value`|0.01|
|`Effects[1].Modification`|MultiplyOnePlusAVMult|
|`Effects[1].EntryPoint`|ModAttackDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|20|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyActorValue]|
|`Effects[2].ActorValue`|BlockModifier|
|`Effects[2].Value`|0.01|
|`Effects[2].Modification`|MultiplyOnePlusAVMult|
|`Effects[2].EntryPoint`|ModPercentBlocked|
|`Effects[2].PerkConditionTabCount`|1|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|18|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyActorValue]|
|`Effects[3].ActorValue`|ConjurationModifier|
|`Effects[3].Value`|-0.01|
|`Effects[3].Modification`|MultiplyOnePlusAVMult|
|`Effects[3].EntryPoint`|ModSpellCost|
|`Effects[3].PerkConditionTabCount`|2|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|17|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyActorValue]|
|`Effects[4].ActorValue`|DestructionModifier|
|`Effects[4].Value`|-0.01|
|`Effects[4].Modification`|MultiplyOnePlusAVMult|
|`Effects[4].EntryPoint`|ModSpellCost|
|`Effects[4].PerkConditionTabCount`|2|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|16|
|`Effects[4].Conditions`|[list: 1 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointModifyActorValue]|
|`Effects[5].ActorValue`|HeavyArmorModifier|
|`Effects[5].Value`|-0.01|
|`Effects[5].Modification`|MultiplyOnePlusAVMult|
|`Effects[5].EntryPoint`|ModIncomingDamage|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|14|
|`Effects[5].Conditions`|[list: 1 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyActorValue]|
|`Effects[6].ActorValue`|IllusionModifier|
|`Effects[6].Value`|-0.01|
|`Effects[6].Modification`|MultiplyOnePlusAVMult|
|`Effects[6].EntryPoint`|ModSpellCost|
|`Effects[6].PerkConditionTabCount`|2|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|13|
|`Effects[6].Conditions`|[list: 1 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyActorValue]|
|`Effects[7].ActorValue`|LightArmorModifier|
|`Effects[7].Value`|-0.01|
|`Effects[7].Modification`|MultiplyOnePlusAVMult|
|`Effects[7].EntryPoint`|ModIncomingDamage|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|12|
|`Effects[7].Conditions`|[list: 1 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointModifyActorValue]|
|`Effects[8].ActorValue`|LockpickingModifier|
|`Effects[8].Value`|0.01|
|`Effects[8].Modification`|MultiplyOnePlusAVMult|
|`Effects[8].EntryPoint`|ModLockpickSweetSpot|
|`Effects[8].PerkConditionTabCount`|2|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|11|
|`Effects[8].Conditions`|[list: 0 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointModifyActorValue]|
|`Effects[9].ActorValue`|OneHandedModifier|
|`Effects[9].Value`|0.01|
|`Effects[9].Modification`|MultiplyOnePlusAVMult|
|`Effects[9].EntryPoint`|ModAttackDamage|
|`Effects[9].PerkConditionTabCount`|3|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|10|
|`Effects[9].Conditions`|[list: 1 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointModifyActorValue]|
|`Effects[10].ActorValue`|PickpocketModifier|
|`Effects[10].Value`|1|
|`Effects[10].Modification`|AddAVMult|
|`Effects[10].EntryPoint`|ModPickpocketChance|
|`Effects[10].PerkConditionTabCount`|3|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|9|
|`Effects[10].Conditions`|[list: 0 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointModifyActorValue]|
|`Effects[11].ActorValue`|RestorationModifier|
|`Effects[11].Value`|-0.01|
|`Effects[11].Modification`|MultiplyOnePlusAVMult|
|`Effects[11].EntryPoint`|ModSpellCost|
|`Effects[11].PerkConditionTabCount`|2|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|8|
|`Effects[11].Conditions`|[list: 1 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Effects[12]`|[PerkEntryPointModifyActorValue]|
|`Effects[12].ActorValue`|SmithingModifier|
|`Effects[12].Value`|0.01|
|`Effects[12].Modification`|MultiplyOnePlusAVMult|
|`Effects[12].EntryPoint`|ModTemperingHealth|
|`Effects[12].PerkConditionTabCount`|2|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|7|
|`Effects[12].Conditions`|[list: 0 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|0|
|`Effects[12].Flags.FragmentIndex`|0|
|`Effects[13]`|[PerkEntryPointModifyActorValue]|
|`Effects[13].ActorValue`|SneakingModifier|
|`Effects[13].Value`|0.01|
|`Effects[13].Modification`|MultiplyOnePlusAVMult|
|`Effects[13].EntryPoint`|ModDetectionSneakSkill|
|`Effects[13].PerkConditionTabCount`|2|
|`Effects[13].Rank`|0|
|`Effects[13].Priority`|6|
|`Effects[13].Conditions`|[list: 1 item(s)]|
|`Effects[13].Flags`|[PerkScriptFlag]|
|`Effects[13].Flags.Flags`|0|
|`Effects[13].Flags.FragmentIndex`|0|
|`Effects[14]`|[PerkEntryPointModifyActorValue]|
|`Effects[14].ActorValue`|SpeechcraftModifier|
|`Effects[14].Value`|0.01|
|`Effects[14].Modification`|MultiplyOnePlusAVMult|
|`Effects[14].EntryPoint`|ModSellPrices|
|`Effects[14].PerkConditionTabCount`|2|
|`Effects[14].Rank`|0|
|`Effects[14].Priority`|5|
|`Effects[14].Conditions`|[list: 0 item(s)]|
|`Effects[14].Flags`|[PerkScriptFlag]|
|`Effects[14].Flags.Flags`|0|
|`Effects[14].Flags.FragmentIndex`|0|
|`Effects[15]`|[PerkEntryPointModifyActorValue]|
|`Effects[15].ActorValue`|SpeechcraftModifier|
|`Effects[15].Value`|-0.01|
|`Effects[15].Modification`|MultiplyOnePlusAVMult|
|`Effects[15].EntryPoint`|ModBuyPrices|
|`Effects[15].PerkConditionTabCount`|2|
|`Effects[15].Rank`|0|
|`Effects[15].Priority`|4|
|`Effects[15].Conditions`|[list: 0 item(s)]|
|`Effects[15].Flags`|[PerkScriptFlag]|
|`Effects[15].Flags.Flags`|0|
|`Effects[15].Flags.FragmentIndex`|0|
|`Effects[16]`|[PerkEntryPointModifyActorValue]|
|`Effects[16].ActorValue`|TwoHandedModifier|
|`Effects[16].Value`|0.01|
|`Effects[16].Modification`|MultiplyOnePlusAVMult|
|`Effects[16].EntryPoint`|ModAttackDamage|
|`Effects[16].PerkConditionTabCount`|3|
|`Effects[16].Rank`|0|
|`Effects[16].Priority`|3|
|`Effects[16].Conditions`|[list: 1 item(s)]|
|`Effects[16].Flags`|[PerkScriptFlag]|
|`Effects[16].Flags.Flags`|0|
|`Effects[16].Flags.FragmentIndex`|0|
|`Name`|Enchantment Controller|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-8057d1e60e2c"></a>

## zzRnR_TRD_ClassArcher01

- Identidade estável Housecarl: `523241:The Restless Dead.esp`.
- Tipo: `Perk`; winner: `The Restless Dead.esp`; profundidade de override: 1.
- Nome: Archer I; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Archer I|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-c59d86841f16"></a>

## zzRnR_TRD_ClassArcher02

- Identidade estável Housecarl: `523242:The Restless Dead.esp`.
- Tipo: `Perk`; winner: `The Restless Dead.esp`; profundidade de override: 1.
- Nome: Archer II; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Archer II|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-805479f7c9d5"></a>

## zzRnR_TRD_ClassArcher03

- Identidade estável Housecarl: `523243:The Restless Dead.esp`.
- Tipo: `Perk`; winner: `The Restless Dead.esp`; profundidade de override: 1.
- Nome: Archer III; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Archer III|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-6b7f5e19ea27"></a>

## zzRnR_TRD_ClassAssassin01

- Identidade estável Housecarl: `523238:The Restless Dead.esp`.
- Tipo: `Perk`; winner: `The Restless Dead.esp`; profundidade de override: 1.
- Nome: Assassin I; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Assassin I|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-d6f709f7d03f"></a>

## zzRnR_TRD_ClassAssassin02

- Identidade estável Housecarl: `523239:The Restless Dead.esp`.
- Tipo: `Perk`; winner: `The Restless Dead.esp`; profundidade de override: 1.
- Nome: Assassin II; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Assassin II|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-c32268c3b733"></a>

## zzRnR_TRD_ClassAssassin03

- Identidade estável Housecarl: `52323A:The Restless Dead.esp`.
- Tipo: `Perk`; winner: `The Restless Dead.esp`; profundidade de override: 1.
- Nome: Assassin III; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Assassin III|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2931b97b397f"></a>

## zzRnR_TRD_ClassBloodletter01

- Identidade estável Housecarl: `1E0D8C:The Restless Dead.esp`.
- Tipo: `Perk`; winner: `The Restless Dead.esp`; profundidade de override: 1.
- Nome: Bloodletter I; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Bloodletter I|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
