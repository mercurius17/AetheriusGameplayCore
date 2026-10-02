# Perks instaladas — parte 005

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-fd4307237e93"></a>

## Survival_NeedsDamageAttributes

- Identidade estável Housecarl: `0009EC:ccQDRSSE001-SurvivalMode.esl`.
- Tipo: `Perk`; winner: `ccQDRSSE001-SurvivalMode.esl`; profundidade de override: 1.
- Nome: Needs Damage Attributes; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellMagnitude; Modification=SetToAVMult; ActorValue=Variable02; Value=1; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[1] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellMagnitude; Modification=SetToAVMult; ActorValue=Variable04; Value=1; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[2] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellMagnitude; Modification=SetToAVMult; ActorValue=Variable03; Value=1; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0008FD:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=00085A:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=00090B:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Variable02|
|`Effects[0].Value`|1|
|`Effects[0].Modification`|SetToAVMult|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyActorValue]|
|`Effects[1].ActorValue`|Variable04|
|`Effects[1].Value`|1|
|`Effects[1].Modification`|SetToAVMult|
|`Effects[1].EntryPoint`|ModSpellMagnitude|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyActorValue]|
|`Effects[2].ActorValue`|Variable03|
|`Effects[2].Value`|1|
|`Effects[2].Modification`|SetToAVMult|
|`Effects[2].EntryPoint`|ModSpellMagnitude|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Name`|Needs Damage Attributes|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7bc52384161e"></a>

## Survival_TempleBlessingCostPerk

- Identidade estável Housecarl: `0009EE:ccQDRSSE001-SurvivalMode.esl`.
- Tipo: `Perk`; winner: `ccQDRSSE001-SurvivalMode.esl`; profundidade de override: 1.
- Nome: Temple Blessing Cost Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=0; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=000826:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|LocationHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=002EDC:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormList=000884:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[0].EntryPoint`|Activate|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|RunImmediately, ReplaceDefault|
|`Effects[0].Flags.FragmentIndex`|0|
|`VirtualMachineAdapter`|[PerkAdapter]|
|`VirtualMachineAdapter.ScriptFragments`|[PerkScriptFragments]|
|`VirtualMachineAdapter.ScriptFragments.Fragments`|[list: 1 item(s)]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentIndex`|0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].ScriptName`|PRKF_Survival_TempleBlessing_050009EE|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentName`|Fragment_2|
|`VirtualMachineAdapter.ScriptFragments.ExtraBindDataVersion`|2|
|`VirtualMachineAdapter.ScriptFragments.FileName`|PRKF_Survival_TempleBlessing_050009EE|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=PRKF_Survival_TempleBlessing_050009EE|
|`VirtualMachineAdapter.Scripts[0].Name`|PRKF_Survival_TempleBlessing_050009EE|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=Gold001|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|00000F:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|Gold001|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=Survival_ShrineNotEnoughGoldMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|0008B9:ccQDRSSE001-SurvivalMode.esl|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|Survival_ShrineNotEnoughGoldMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=Survival_ShrineGoldOfferingAmount|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|000827:ccQDRSSE001-SurvivalMode.esl|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|Survival_ShrineGoldOfferingAmount|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=Survival_ShrineGoldOfferingMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|0008BE:ccQDRSSE001-SurvivalMode.esl|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|Survival_ShrineGoldOfferingMessage|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
|`Name`|Temple Blessing Cost Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-52b78a227494"></a>

## ccVSVSSE003_PERK_AncientLichSummonCount

- Identidade estável Housecarl: `0008AF:ccvsvsse003-necroarts.esl`.
- Tipo: `Perk`; winner: `ccvsvsse003-necroarts.esl`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModCommandedActorLimit; Modification=Set; Value=5; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|5|
|`Effects[0].EntryPoint`|ModCommandedActorLimit|
|`Effects[0].PerkConditionTabCount`|2|
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

<a id="r-8d89e1e1637d"></a>

## ccVSVSSE003_PERK_BoneColossus

- Identidade estável Housecarl: `0008D1:ccvsvsse003-necroarts.esl`.
- Tipo: `Perk`; winner: `ccvsvsse003-necroarts.esl`; profundidade de override: 1.
- Nome: Bone Colossus Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModCommandedActorLimit; Modification=Add; Value=2; Rank=0; Priority=1; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModCommandedActorLimit; Modification=Add; Value=-1; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=000806:ccvsvsse003-necroarts.esl|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`00085B:ccvsvsse003-necroarts.esl`](../magic/MAGIC_036.md#r-ccf2f93ae898)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`000856:ccvsvsse003-necroarts.esl`](../magic/MAGIC_036.md#r-62da11629b76)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`000877:ccvsvsse003-necroarts.esl`](../magic/MAGIC_036.md#r-482f5c8facb1)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`00084E:ccvsvsse003-necroarts.esl`](../magic/MAGIC_035.md#r-15c59f3d473f)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`0045BA:Dawnguard.esm`](../magic/MAGIC_037.md#r-11db9f93aa52)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`0045B8:Dawnguard.esm`](../magic/MAGIC_037.md#r-9d02dd719511)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`0045B3:Dawnguard.esm`](../magic/MAGIC_037.md#r-93e77c1dc062)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D5F1C:Skyrim.esm`](../perks/PERKS_049.md#r-764f367b62fa)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0008FA:ccvsvsse003-necroarts.esl|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0008FA:ccvsvsse003-necroarts.esl|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModCommandedActorLimit|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|1|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Add|
|`Effects[1].Value`|-1|
|`Effects[1].EntryPoint`|ModCommandedActorLimit|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Bone Colossus Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7dda4ebfb2fb"></a>

## ccVSVSSE003_PERK_IncreaseSummonCount

- Identidade estável Housecarl: `0008D2:ccvsvsse003-necroarts.esl`.
- Tipo: `Perk`; winner: `ccvsvsse003-necroarts.esl`; profundidade de override: 1.
- Nome: Summon Count Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModCommandedActorLimit; Modification=Add; Value=2; Rank=0; Priority=101; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=000803:ccvsvsse003-necroarts.esl|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModCommandedActorLimit|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|101|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Summon Count Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-6f34ed99d9a0"></a>

## ccVSVSSE003_PERK_RobeEnchantment

- Identidade estável Housecarl: `000957:ccvsvsse003-necroarts.esl`.
- Tipo: `Perk`; winner: `ccvsvsse003-necroarts.esl`; profundidade de override: 1.
- Nome: (absent); ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModCommandedActorLimit; Modification=Add; Value=1; Rank=0; Priority=255; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C44BE:Skyrim.esm`](../perks/PERKS_049.md#r-bafe0e87a888)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=02482B:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|1|
|`Effects[0].EntryPoint`|ModCommandedActorLimit|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|255|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2c2e1804a572"></a>

## CeykyndShadowPerk

- Identidade estável Housecarl: `000EED:CeykyndArmor.esp`.
- Tipo: `Perk`; winner: `CeykyndArmor.esp`; profundidade de override: 1.
- Nome: Umbral Shade Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=False, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`000EDF:CeykyndArmor.esp`](../magic/MAGIC_037.md#r-fa65b8aaeea8); Rank=0; Priority=10. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=000EDF:CeykyndArmor.esp|
|`Effects[0].Ability`|[`000EDF:CeykyndArmor.esp`](../magic/MAGIC_037.md#r-fa65b8aaeea8)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|10|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Umbral Shade Perk|
|`NumRanks`|1|
|`Playable`|False|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b139ce2ad310"></a>

## COTV_BloodIsLifePerk

- Identidade estável Housecarl: `33EB0E:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Blood is the Life; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=306FBE:Curse of the Vampire.esp; Stage=70; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`33EB11:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-f0c7f7481168)<br>Parameter1.Link=[`33EB11:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-f0c7f7481168)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=306FBE:Curse of the Vampire.esp|
|`Effects[0].Quest`|306FBE:Curse of the Vampire.esp|
|`Effects[0].Stage`|70|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Blood is the Life|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-888281f4f63a"></a>

## COTV_BloodMagicLordPerk

- Identidade estável Housecarl: `0E9345:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Blood Magic Lord; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=306FBE:Curse of the Vampire.esp; Stage=130; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.
- **Effects[1] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellMagnitude; Modification=MultiplyOnePlusAVMult; ActorValue=Destruction; Value=0.005; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`33EB0E:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-b139ce2ad310)<br>Parameter1.Link=[`33EB0E:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-b139ce2ad310)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0A82BB:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB04:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-bb50c6c6ec6f)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB06:Curse of the Vampire.esp`](../magic/MAGIC_051.md#r-56c693c50057)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB08:Curse of the Vampire.esp`](../magic/MAGIC_051.md#r-a8ee864b33e1)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB0A:Curse of the Vampire.esp`](../magic/MAGIC_051.md#r-6c083d4cabc8)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[4]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB0C:Curse of the Vampire.esp`](../magic/MAGIC_051.md#r-1cd3bc211dc0)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=306FBE:Curse of the Vampire.esp|
|`Effects[0].Quest`|306FBE:Curse of the Vampire.esp|
|`Effects[0].Stage`|130|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyActorValue]|
|`Effects[1].ActorValue`|Destruction|
|`Effects[1].Value`|0.005|
|`Effects[1].Modification`|MultiplyOnePlusAVMult|
|`Effects[1].EntryPoint`|ModSpellMagnitude|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Blood Magic Lord|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-854d6e351318"></a>

## COTV_BloodToPowerPerk

- Identidade estável Housecarl: `162B6E:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Blood to Power; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=306FBE:Curse of the Vampire.esp; Stage=50; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`162B6D:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-09b9327dfd3c)<br>Parameter1.Link=[`162B6D:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-09b9327dfd3c)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=306FBE:Curse of the Vampire.esp|
|`Effects[0].Quest`|306FBE:Curse of the Vampire.esp|
|`Effects[0].Stage`|50|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Blood to Power|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-09b9327dfd3c"></a>

## COTV_BloodWardPerk

- Identidade estável Housecarl: `162B6D:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Blood Ward; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=306FBE:Curse of the Vampire.esp; Stage=40; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`33EB11:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-f0c7f7481168)<br>Parameter1.Link=[`33EB11:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-f0c7f7481168)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=306FBE:Curse of the Vampire.esp|
|`Effects[0].Quest`|306FBE:Curse of the Vampire.esp|
|`Effects[0].Stage`|40|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Blood Ward|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-ecec4f3f694b"></a>

## COTV_DiableriePerk

- Identidade estável Housecarl: `436C39:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Diablerie; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=False, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointAddLeveledItem**: EntryPoint=AddLeveledListOnDeath; Rank=0; Priority=0; PerkConditionTabCount=2. Acrescenta item via lista nivelada; sorteio, propriedade e entrega precisam de uma única transação autoritativa.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0A82BB:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0A82BB:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointAddLeveledItem] Item=436C3A:Curse of the Vampire.esp|
|`Effects[0].Item`|436C3A:Curse of the Vampire.esp|
|`Effects[0].EntryPoint`|AddLeveledListOnDeath|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Diablerie|
|`NumRanks`|1|
|`Playable`|False|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-35550dc4309f"></a>

## COTV_FallDamageImmunityPerk

- Identidade estável Housecarl: `33EB18:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Fall Damage Immunity; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=False, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModFallingDamage; Modification=Multiply; Value=0; Rank=0; Priority=0; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 2|0|Global=015FC8:Dawnguard.esm|aliases=False; package=False|

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
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Fall Damage Immunity|
|`NumRanks`|1|
|`Playable`|False|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-c572c288809b"></a>

## COTV_ImmeasurableStrengthPerk

- Identidade estável Housecarl: `3EFE24:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Immeasurable Strength; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=False, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=2.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.25; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModBashingDamage; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=GetMaxCarryWeight; Modification=Multiply; Value=1.5; Rank=0; Priority=0; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[6]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[7]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[7]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetIsRace|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Race=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[6]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[7]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 5 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2.5|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.25|
|`Effects[1].EntryPoint`|ModAttackDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|1.5|
|`Effects[2].EntryPoint`|ModAttackDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|2|
|`Effects[3].EntryPoint`|ModBashingDamage|
|`Effects[3].PerkConditionTabCount`|2|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|0|
|`Effects[3].Conditions`|[list: 0 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Multiply|
|`Effects[4].Value`|1.5|
|`Effects[4].EntryPoint`|GetMaxCarryWeight|
|`Effects[4].PerkConditionTabCount`|1|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|0|
|`Effects[4].Conditions`|[list: 0 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Name`|Immeasurable Strength|
|`NumRanks`|1|
|`Playable`|False|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7f5a12525404"></a>

## COTV_IronWillPerk

- Identidade estável Housecarl: `33EB0F:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Iron Will; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=306FBE:Curse of the Vampire.esp; Stage=80; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`33EB11:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-f0c7f7481168)<br>Parameter1.Link=[`33EB11:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-f0c7f7481168)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAC4:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-528c986da116)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAD6:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-44f79bd2fe76)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`016909:Dawnguard.esm`](../magic/MAGIC_038.md#r-cb0622d598cd)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAF6:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-efdd3910fc09)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`1C2E83:Curse of the Vampire.esp`](../magic/MAGIC_047.md#r-b7e4f9b5c9d9)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`55CA9A:Curse of the Vampire.esp`](../magic/MAGIC_061.md#r-2845f480a515)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`473F48:Curse of the Vampire.esp`](../magic/MAGIC_054.md#r-3e856813d213)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[7]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAF8:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-81ca3831fdb9)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[8]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAFA:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-29f95757afea)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[9]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAFC:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-9cae02c1f2ce)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[10]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAFE:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-d0dbbf299871)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[11]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB00:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-31e7f41a8e10)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[12]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB04:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-bb50c6c6ec6f)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[13]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB06:Curse of the Vampire.esp`](../magic/MAGIC_051.md#r-56c693c50057)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[14]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB08:Curse of the Vampire.esp`](../magic/MAGIC_051.md#r-a8ee864b33e1)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[15]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB0A:Curse of the Vampire.esp`](../magic/MAGIC_051.md#r-6c083d4cabc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[16]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB0C:Curse of the Vampire.esp`](../magic/MAGIC_051.md#r-1cd3bc211dc0)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=306FBE:Curse of the Vampire.esp|
|`Effects[0].Quest`|306FBE:Curse of the Vampire.esp|
|`Effects[0].Stage`|80|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0.5|
|`Effects[1].EntryPoint`|ModSpellCost|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Iron Will|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-06aeab5881ad"></a>

## COTV_LegendaryBloodMagicPerk

- Identidade estável Housecarl: `73EAC4:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Legendary Blood Magic; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0A82BB:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAC4:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-528c986da116)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`41D72C:Curse of the Vampire.esp`](../magic/MAGIC_054.md#r-f1a9be3df237)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAF8:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-81ca3831fdb9)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAFA:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-29f95757afea)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAFC:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-9cae02c1f2ce)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAFE:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-d0dbbf299871)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[6]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB00:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-31e7f41a8e10)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[7]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB04:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-bb50c6c6ec6f)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[8]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB06:Curse of the Vampire.esp`](../magic/MAGIC_051.md#r-56c693c50057)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[9]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB08:Curse of the Vampire.esp`](../magic/MAGIC_051.md#r-a8ee864b33e1)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[10]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB0A:Curse of the Vampire.esp`](../magic/MAGIC_051.md#r-6c083d4cabc8)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[11]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB0C:Curse of the Vampire.esp`](../magic/MAGIC_051.md#r-1cd3bc211dc0)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.5|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Legendary Blood Magic|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-4b342ae1fe36"></a>

## COTV_LordOfSoulsPerk

- Identidade estável Housecarl: `15DA6B:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Lord of Souls; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=306FBE:Curse of the Vampire.esp; Stage=140; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.
- **Effects[1] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellMagnitude; Modification=MultiplyOnePlusAVMult; ActorValue=Conjuration; Value=0.005; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`33EB0F:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-7f5a12525404)<br>Parameter1.Link=[`33EB0F:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-7f5a12525404)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0A82BB:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAF8:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-81ca3831fdb9)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAFA:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-29f95757afea)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAFC:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-9cae02c1f2ce)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EAFE:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-d0dbbf299871)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[4]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`33EB00:Curse of the Vampire.esp`](../magic/MAGIC_050.md#r-31e7f41a8e10)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=306FBE:Curse of the Vampire.esp|
|`Effects[0].Quest`|306FBE:Curse of the Vampire.esp|
|`Effects[0].Stage`|140|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyActorValue]|
|`Effects[1].ActorValue`|Conjuration|
|`Effects[1].Value`|0.005|
|`Effects[1].Modification`|MultiplyOnePlusAVMult|
|`Effects[1].EntryPoint`|ModSpellMagnitude|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Lord of Souls|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-dfccab016870"></a>

## COTV_RigorMortisPerk

- Identidade estável Housecarl: `33EB15:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Rigor Mortis; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=306FBE:Curse of the Vampire.esp; Stage=30; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`016908:Dawnguard.esm`](../perks/PERKS_006.md#r-3149c370137c)<br>Parameter1.Link=[`016908:Dawnguard.esm`](../perks/PERKS_006.md#r-3149c370137c)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=306FBE:Curse of the Vampire.esp|
|`Effects[0].Quest`|306FBE:Curse of the Vampire.esp|
|`Effects[0].Stage`|30|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Rigor Mortis|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-9ca83a187e18"></a>

## COTV_SanguineRunePerk

- Identidade estável Housecarl: `33EB13:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Sanguine Rune; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=306FBE:Curse of the Vampire.esp; Stage=60; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`162B6E:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-854d6e351318)<br>Parameter1.Link=[`162B6E:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-854d6e351318)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=306FBE:Curse of the Vampire.esp|
|`Effects[0].Quest`|306FBE:Curse of the Vampire.esp|
|`Effects[0].Stage`|60|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Sanguine Rune|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-afe8ea087c63"></a>

## COTV_ShrineBlockerPerk

- Identidade estável Housecarl: `752EC9:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Shrine Activation Blocker; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=False, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=FilterActivation; Modification=Add; Value=1; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=75D0CA:Curse of the Vampire.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0A82BB:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsInList|1|Subject; ref=(null link); index=-1|EqualTo 1|0|FormList=02A7C8:Curse of the Vampire.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|1|
|`Effects[0].EntryPoint`|FilterActivation|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Shrine Activation Blocker|
|`NumRanks`|1|
|`Playable`|False|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2a66d4b3e003"></a>

## COTV_SupernaturalAgilityPerk

- Identidade estável Housecarl: `0CFE3F:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Supernatural Agility; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=306FBE:Curse of the Vampire.esp; Stage=110; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`15DA6B:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-4b342ae1fe36)<br>Parameter1.Link=[`15DA6B:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-4b342ae1fe36)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=306FBE:Curse of the Vampire.esp|
|`Effects[0].Quest`|306FBE:Curse of the Vampire.esp|
|`Effects[0].Stage`|110|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Supernatural Agility|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-f0c7f7481168"></a>

## COTV_SupernaturalEndurancePerk

- Identidade estável Housecarl: `33EB11:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Supernatural Endurance; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=306FBE:Curse of the Vampire.esp; Stage=90; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=306FBE:Curse of the Vampire.esp|
|`Effects[0].Quest`|306FBE:Curse of the Vampire.esp|
|`Effects[0].Stage`|90|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Supernatural Endurance|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-06f39d2d6e00"></a>

## COTV_SupernaturalWillPowerPerk

- Identidade estável Housecarl: `0CFE3E:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Supernatural Willpower; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkQuestEffect**: Quest=306FBE:Curse of the Vampire.esp; Stage=100; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0E9345:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-888281f4f63a)<br>Parameter1.Link=[`0E9345:Curse of the Vampire.esp`](../perks/PERKS_005.md#r-888281f4f63a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkQuestEffect] Quest=306FBE:Curse of the Vampire.esp|
|`Effects[0].Quest`|306FBE:Curse of the Vampire.esp|
|`Effects[0].Stage`|100|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Supernatural Willpower|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-4972f82738fe"></a>

## COTV_UnholyPresencePerk01

- Identidade estável Housecarl: `29CA5B:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Unholy Presence; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=False, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModPlayerIntimidation; Modification=Multiply; Value=1.1; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

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
|`Effects[0].Value`|1.1|
|`Effects[0].EntryPoint`|ModPlayerIntimidation|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Unholy Presence|
|`NumRanks`|1|
|`Playable`|False|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-62cca5c7399b"></a>

## COTV_UnholyPresencePerk02

- Identidade estável Housecarl: `29CA5A:Curse of the Vampire.esp`.
- Tipo: `Perk`; winner: `Curse of the Vampire.esp`; profundidade de override: 1.
- Nome: Unholy Presence; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=False, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModPlayerIntimidation; Modification=Multiply; Value=1.2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

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
|`Effects[0].Value`|1.2|
|`Effects[0].EntryPoint`|ModPlayerIntimidation|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Unholy Presence|
|`NumRanks`|1|
|`Playable`|False|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
