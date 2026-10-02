# Perks instaladas — parte 016

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-d7908c4d6992"></a>

## MAG_CultistMeridiaPerkNPC

- Identidade estável Housecarl: `0D542E:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Cultist of Meridia; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.25; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013794:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|IsUndead|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`367CF8:Pilgrim.esp`](../magic/MAGIC_028.md#r-ded3b10d4552)|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[1]`|HasMagicEffectKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.25|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Cultist of Meridia|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-57706227a919"></a>

## MAG_CultistMolagBalPerk

- Identidade estável Housecarl: `35DAED:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Cultist of Molag Bal; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`35DAEA:Pilgrim.esp`](../magic/MAGIC_052.md#r-a70554adc063); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=35DAEA:Pilgrim.esp|
|`Effects[0].Ability`|[`35DAEA:Pilgrim.esp`](../magic/MAGIC_052.md#r-a70554adc063)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Cultist of Molag Bal|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-45abe6e7b190"></a>

## MAG_CultistNamiraCannibalPerk05

- Identidade estável Housecarl: `381262:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Cannibalism; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=0; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetEquipped|0|Subject; ref=(null link); index=-1|EqualTo 0|0|ItemOrList=02C37B:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasSpell|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Spell=[`0EE5C5:Skyrim.esm`](../magic/MAGIC_045.md#r-622a2b5d7178)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasBeenEaten|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=013794:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

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
|`Effects[0].ButtonLabel`|Feed|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`VirtualMachineAdapter`|[PerkAdapter]|
|`VirtualMachineAdapter.ScriptFragments`|[PerkScriptFragments]|
|`VirtualMachineAdapter.ScriptFragments.Fragments`|[list: 1 item(s)]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentIndex`|0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].ScriptName`|PRKF_MAG_CultistNamiraCannib_04381262|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentName`|Fragment_0|
|`VirtualMachineAdapter.ScriptFragments.ExtraBindDataVersion`|2|
|`VirtualMachineAdapter.ScriptFragments.FileName`|PRKF_MAG_CultistNamiraCannib_04381262|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=PRKF_MAG_CultistNamiraCannib_04381262|
|`VirtualMachineAdapter.Scripts[0].Name`|PRKF_MAG_CultistNamiraCannib_04381262|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 3 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptObjectProperty] Name=DA11CannibalismAbility|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Object`|[`0EE5C5:Skyrim.esm`](../magic/MAGIC_045.md#r-622a2b5d7178)|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|DA11CannibalismAbility|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptObjectProperty] Name=DA11CannibalismAbility02|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Object`|[`10F813:Skyrim.esm`](../magic/MAGIC_046.md#r-316e65c9dd28)|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|DA11CannibalismAbility02|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptObjectProperty] Name=PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Object`|0EAFD5:Skyrim.esm|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|PlayerVampireQuest|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
|`Name`|Cannibalism|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-3b61d640426a"></a>

## MAG_CultistNamiraPerk

- Identidade estável Housecarl: `381259:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Cultist of Namira; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`381258:Pilgrim.esp`](../magic/MAGIC_052.md#r-02d8c5ef2271); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=381258:Pilgrim.esp|
|`Effects[0].Ability`|[`381258:Pilgrim.esp`](../magic/MAGIC_052.md#r-02d8c5ef2271)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Cultist of Namira|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-124a1625ef02"></a>

## MAG_CultistNocturnalPerk

- Identidade estável Housecarl: `38B4A1:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Cultist of Nocturnal; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`38B4A5:Pilgrim.esp`](../magic/MAGIC_052.md#r-b2ce9e35190a); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitChance; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0].Conditions[0]`|IsSneaking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|GetDetected|2|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsSneaking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|GetDetected|2|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=ADA122:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=38B4A5:Pilgrim.esp|
|`Effects[0].Ability`|[`38B4A5:Pilgrim.esp`](../magic/MAGIC_052.md#r-b2ce9e35190a)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|2|
|`Effects[1].EntryPoint`|CalculateMyCriticalHitChance|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|2|
|`Effects[2].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|2|
|`Effects[3].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[3].PerkConditionTabCount`|2|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|0|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Name`|Cultist of Nocturnal|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-723be00a113f"></a>

## MAG_CultistPeryitePerk

- Identidade estável Housecarl: `38126F:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Cultist of Peryite; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`38126C:Pilgrim.esp`](../magic/MAGIC_052.md#r-ebc0e70643cd); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModPoisonDoseCount; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA129:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`381263:Pilgrim.esp`](../magic/MAGIC_029.md#r-04dedd401f63)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=38126C:Pilgrim.esp|
|`Effects[0].Ability`|[`38126C:Pilgrim.esp`](../magic/MAGIC_052.md#r-ebc0e70643cd)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|2|
|`Effects[1].EntryPoint`|ModPoisonDoseCount|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Cultist of Peryite|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-d95948accacb"></a>

## MAG_CultistSanguinePerk

- Identidade estável Housecarl: `386398:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Cultist of Sanguine; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`386397:Pilgrim.esp`](../magic/MAGIC_052.md#r-8abe4963a075); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA129:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0F8A4E:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=386397:Pilgrim.esp|
|`Effects[0].Ability`|[`386397:Pilgrim.esp`](../magic/MAGIC_052.md#r-8abe4963a075)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|2|
|`Effects[1].EntryPoint`|ModSpellDuration|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Cultist of Sanguine|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-8f7475d5fe37"></a>

## MAG_CultistSheogorathPerk

- Identidade estável Housecarl: `075073:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Cultist of Sheogorath; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`377051:Pilgrim.esp`](../magic/MAGIC_052.md#r-047a885e7ed4); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasMagicEffectKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0C44B6:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=377051:Pilgrim.esp|
|`Effects[0].Ability`|[`377051:Pilgrim.esp`](../magic/MAGIC_052.md#r-047a885e7ed4)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|2|
|`Effects[1].EntryPoint`|ModIncomingDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Cultist of Sheogorath|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-cd65ac27e413"></a>

## MAG_CultistSheogorathPerkAlt

- Identidade estável Housecarl: `05BB51:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Cultist of Sheogorath; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=85; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=84; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=83; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=82; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=81; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[5] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.5; Rank=0; Priority=75; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.5; Rank=0; Priority=74; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.5; Rank=0; Priority=73; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[8] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.5; Rank=0; Priority=72; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[9] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.5; Rank=0; Priority=71; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[10] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=2; Rank=0; Priority=65; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[11] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=2; Rank=0; Priority=64; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[12] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=2; Rank=0; Priority=63; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[13] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=2; Rank=0; Priority=62; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[14] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=2; Rank=0; Priority=61; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[15] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=55; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[16] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=54; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[17] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=53; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[18] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=52; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[19] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=51; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[20] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=45; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[21] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=44; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[22] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=43; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[23] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=42; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[24] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=41; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[25] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=0.5; Rank=0; Priority=35; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[26] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=0.5; Rank=0; Priority=34; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[27] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=0.5; Rank=0; Priority=33; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[28] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=0.5; Rank=0; Priority=32; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[29] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=0.5; Rank=0; Priority=31; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[30] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=2; Rank=0; Priority=25; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[31] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=2; Rank=0; Priority=24; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[32] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=2; Rank=0; Priority=23; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[33] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=2; Rank=0; Priority=22; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[34] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=2; Rank=0; Priority=21; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[35] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=15; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[36] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=14; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[37] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=13; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[38] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=12; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[39] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=11; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[40] — PerkAbilityEffect**: Ability=[`377051:Pilgrim.esp`](../magic/MAGIC_052.md#r-047a885e7ed4); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[6].Conditions[2].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[6].Conditions[2].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[2].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[6].Conditions[2].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[7].Conditions[2].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[7].Conditions[2].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[2].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[7].Conditions[2].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[8].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[8].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[8].Conditions[2].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[8].Conditions[2].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[2].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[8].Conditions[2].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[9].Conditions[2].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[9].Conditions[2].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[2].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[9].Conditions[2].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[10].Conditions[1].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[10].Conditions[1].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[1].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[10].Conditions[1].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[16].Conditions[1].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[16].Conditions[1].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[16].Conditions[1].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[16].Conditions[1].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[17].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[17].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[17].Conditions[1].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[17].Conditions[1].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[17].Conditions[1].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[17].Conditions[1].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[18].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[18].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[18].Conditions[1].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[18].Conditions[1].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[18].Conditions[1].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[18].Conditions[1].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[19].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[19].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[19].Conditions[1].Conditions[0]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[19].Conditions[1].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[19].Conditions[1].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[19].Conditions[1].Conditions[3]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[20].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[20].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[20].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[20].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[20].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[20].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[20].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[20].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[20].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[21].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[21].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[21].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[21].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[21].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[21].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[21].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[21].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[21].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[22].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[22].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[22].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[22].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[22].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[22].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[22].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[22].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[22].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[23].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[23].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[23].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[23].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[23].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[23].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[23].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[23].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[23].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[24].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[24].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[24].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[24].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[24].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[24].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[24].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[24].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[24].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[25].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[25].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[25].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[25].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[25].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[25].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[25].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[25].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[25].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[26].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[26].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[26].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[26].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[26].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[26].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[26].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[26].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[26].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[27].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[27].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[27].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[27].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[27].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[27].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[27].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[27].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[27].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[28].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[28].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[28].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[28].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[28].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[28].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[28].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[28].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[28].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[29].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[29].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[29].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[29].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm<br>Parameter1.Link=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[29].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm<br>Parameter1.Link=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[29].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm<br>Parameter1.Link=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[29].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm<br>Parameter1.Link=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[29].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm<br>Parameter1.Link=ADA001:Update.esm|aliases=False; package=False|
|`Effects[29].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm<br>Parameter1.Link=ADA002:Update.esm|aliases=False; package=False|
|`Effects[30].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[30].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[30].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[31].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[31].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[31].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[32].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[32].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[32].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[33].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[33].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[33].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[34].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[34].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[34].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[35].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[35].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[35].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[36].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[36].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[36].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[37].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[37].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[37].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[38].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[38].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[38].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|
|`Effects[39].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[39].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)<br>Parameter1.Link=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[39].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm<br>Parameter1.Link=616106:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 41 item(s)]|
|`Conditions`|[list: 0 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|85|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|2|
|`Effects[1].EntryPoint`|ModSpellMagnitude|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|84|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|2|
|`Effects[2].EntryPoint`|ModSpellMagnitude|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|83|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|2|
|`Effects[3].EntryPoint`|ModSpellMagnitude|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|82|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Multiply|
|`Effects[4].Value`|2|
|`Effects[4].EntryPoint`|ModSpellMagnitude|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|81|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointModifyValue]|
|`Effects[5].Modification`|Multiply|
|`Effects[5].Value`|0.5|
|`Effects[5].EntryPoint`|ModSpellMagnitude|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|75|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Multiply|
|`Effects[6].Value`|0.5|
|`Effects[6].EntryPoint`|ModSpellMagnitude|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|74|
|`Effects[6].Conditions`|[list: 3 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyValue]|
|`Effects[7].Modification`|Multiply|
|`Effects[7].Value`|0.5|
|`Effects[7].EntryPoint`|ModSpellMagnitude|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|73|
|`Effects[7].Conditions`|[list: 3 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointModifyValue]|
|`Effects[8].Modification`|Multiply|
|`Effects[8].Value`|0.5|
|`Effects[8].EntryPoint`|ModSpellMagnitude|
|`Effects[8].PerkConditionTabCount`|3|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|72|
|`Effects[8].Conditions`|[list: 3 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointModifyValue]|
|`Effects[9].Modification`|Multiply|
|`Effects[9].Value`|0.5|
|`Effects[9].EntryPoint`|ModSpellMagnitude|
|`Effects[9].PerkConditionTabCount`|3|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|71|
|`Effects[9].Conditions`|[list: 3 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointModifyValue]|
|`Effects[10].Modification`|Multiply|
|`Effects[10].Value`|2|
|`Effects[10].EntryPoint`|ModAttackDamage|
|`Effects[10].PerkConditionTabCount`|3|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|65|
|`Effects[10].Conditions`|[list: 2 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointModifyValue]|
|`Effects[11].Modification`|Multiply|
|`Effects[11].Value`|2|
|`Effects[11].EntryPoint`|ModAttackDamage|
|`Effects[11].PerkConditionTabCount`|3|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|64|
|`Effects[11].Conditions`|[list: 2 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Effects[12]`|[PerkEntryPointModifyValue]|
|`Effects[12].Modification`|Multiply|
|`Effects[12].Value`|2|
|`Effects[12].EntryPoint`|ModAttackDamage|
|`Effects[12].PerkConditionTabCount`|3|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|63|
|`Effects[12].Conditions`|[list: 2 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|0|
|`Effects[12].Flags.FragmentIndex`|0|
|`Effects[13]`|[PerkEntryPointModifyValue]|
|`Effects[13].Modification`|Multiply|
|`Effects[13].Value`|2|
|`Effects[13].EntryPoint`|ModAttackDamage|
|`Effects[13].PerkConditionTabCount`|3|
|`Effects[13].Rank`|0|
|`Effects[13].Priority`|62|
|`Effects[13].Conditions`|[list: 2 item(s)]|
|`Effects[13].Flags`|[PerkScriptFlag]|
|`Effects[13].Flags.Flags`|0|
|`Effects[13].Flags.FragmentIndex`|0|
|`Effects[14]`|[PerkEntryPointModifyValue]|
|`Effects[14].Modification`|Multiply|
|`Effects[14].Value`|2|
|`Effects[14].EntryPoint`|ModAttackDamage|
|`Effects[14].PerkConditionTabCount`|3|
|`Effects[14].Rank`|0|
|`Effects[14].Priority`|61|
|`Effects[14].Conditions`|[list: 2 item(s)]|
|`Effects[14].Flags`|[PerkScriptFlag]|
|`Effects[14].Flags.Flags`|0|
|`Effects[14].Flags.FragmentIndex`|0|
|`Effects[15]`|[PerkEntryPointModifyValue]|
|`Effects[15].Modification`|Multiply|
|`Effects[15].Value`|0.5|
|`Effects[15].EntryPoint`|ModAttackDamage|
|`Effects[15].PerkConditionTabCount`|3|
|`Effects[15].Rank`|0|
|`Effects[15].Priority`|55|
|`Effects[15].Conditions`|[list: 2 item(s)]|
|`Effects[15].Flags`|[PerkScriptFlag]|
|`Effects[15].Flags.Flags`|0|
|`Effects[15].Flags.FragmentIndex`|0|
|`Effects[16]`|[PerkEntryPointModifyValue]|
|`Effects[16].Modification`|Multiply|
|`Effects[16].Value`|0.5|
|`Effects[16].EntryPoint`|ModAttackDamage|
|`Effects[16].PerkConditionTabCount`|3|
|`Effects[16].Rank`|0|
|`Effects[16].Priority`|54|
|`Effects[16].Conditions`|[list: 2 item(s)]|
|`Effects[16].Flags`|[PerkScriptFlag]|
|`Effects[16].Flags.Flags`|0|
|`Effects[16].Flags.FragmentIndex`|0|
|`Effects[17]`|[PerkEntryPointModifyValue]|
|`Effects[17].Modification`|Multiply|
|`Effects[17].Value`|0.5|
|`Effects[17].EntryPoint`|ModAttackDamage|
|`Effects[17].PerkConditionTabCount`|3|
|`Effects[17].Rank`|0|
|`Effects[17].Priority`|53|
|`Effects[17].Conditions`|[list: 2 item(s)]|
|`Effects[17].Flags`|[PerkScriptFlag]|
|`Effects[17].Flags.Flags`|0|
|`Effects[17].Flags.FragmentIndex`|0|
|`Effects[18]`|[PerkEntryPointModifyValue]|
|`Effects[18].Modification`|Multiply|
|`Effects[18].Value`|0.5|
|`Effects[18].EntryPoint`|ModAttackDamage|
|`Effects[18].PerkConditionTabCount`|3|
|`Effects[18].Rank`|0|
|`Effects[18].Priority`|52|
|`Effects[18].Conditions`|[list: 2 item(s)]|
|`Effects[18].Flags`|[PerkScriptFlag]|
|`Effects[18].Flags.Flags`|0|
|`Effects[18].Flags.FragmentIndex`|0|
|`Effects[19]`|[PerkEntryPointModifyValue]|
|`Effects[19].Modification`|Multiply|
|`Effects[19].Value`|0.5|
|`Effects[19].EntryPoint`|ModAttackDamage|
|`Effects[19].PerkConditionTabCount`|3|
|`Effects[19].Rank`|0|
|`Effects[19].Priority`|51|
|`Effects[19].Conditions`|[list: 2 item(s)]|
|`Effects[19].Flags`|[PerkScriptFlag]|
|`Effects[19].Flags.Flags`|0|
|`Effects[19].Flags.FragmentIndex`|0|
|`Effects[20]`|[PerkEntryPointModifyValue]|
|`Effects[20].Modification`|Multiply|
|`Effects[20].Value`|2|
|`Effects[20].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[20].PerkConditionTabCount`|2|
|`Effects[20].Rank`|0|
|`Effects[20].Priority`|45|
|`Effects[20].Conditions`|[list: 2 item(s)]|
|`Effects[20].Flags`|[PerkScriptFlag]|
|`Effects[20].Flags.Flags`|0|
|`Effects[20].Flags.FragmentIndex`|0|
|`Effects[21]`|[PerkEntryPointModifyValue]|
|`Effects[21].Modification`|Multiply|
|`Effects[21].Value`|2|
|`Effects[21].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[21].PerkConditionTabCount`|2|
|`Effects[21].Rank`|0|
|`Effects[21].Priority`|44|
|`Effects[21].Conditions`|[list: 2 item(s)]|
|`Effects[21].Flags`|[PerkScriptFlag]|
|`Effects[21].Flags.Flags`|0|
|`Effects[21].Flags.FragmentIndex`|0|
|`Effects[22]`|[PerkEntryPointModifyValue]|
|`Effects[22].Modification`|Multiply|
|`Effects[22].Value`|2|
|`Effects[22].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[22].PerkConditionTabCount`|2|
|`Effects[22].Rank`|0|
|`Effects[22].Priority`|43|
|`Effects[22].Conditions`|[list: 2 item(s)]|
|`Effects[22].Flags`|[PerkScriptFlag]|
|`Effects[22].Flags.Flags`|0|
|`Effects[22].Flags.FragmentIndex`|0|
|`Effects[23]`|[PerkEntryPointModifyValue]|
|`Effects[23].Modification`|Multiply|
|`Effects[23].Value`|2|
|`Effects[23].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[23].PerkConditionTabCount`|2|
|`Effects[23].Rank`|0|
|`Effects[23].Priority`|42|
|`Effects[23].Conditions`|[list: 2 item(s)]|
|`Effects[23].Flags`|[PerkScriptFlag]|
|`Effects[23].Flags.Flags`|0|
|`Effects[23].Flags.FragmentIndex`|0|
|`Effects[24]`|[PerkEntryPointModifyValue]|
|`Effects[24].Modification`|Multiply|
|`Effects[24].Value`|2|
|`Effects[24].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[24].PerkConditionTabCount`|2|
|`Effects[24].Rank`|0|
|`Effects[24].Priority`|41|
|`Effects[24].Conditions`|[list: 2 item(s)]|
|`Effects[24].Flags`|[PerkScriptFlag]|
|`Effects[24].Flags.Flags`|0|
|`Effects[24].Flags.FragmentIndex`|0|
|`Effects[25]`|[PerkEntryPointModifyValue]|
|`Effects[25].Modification`|Multiply|
|`Effects[25].Value`|0.5|
|`Effects[25].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[25].PerkConditionTabCount`|2|
|`Effects[25].Rank`|0|
|`Effects[25].Priority`|35|
|`Effects[25].Conditions`|[list: 2 item(s)]|
|`Effects[25].Flags`|[PerkScriptFlag]|
|`Effects[25].Flags.Flags`|0|
|`Effects[25].Flags.FragmentIndex`|0|
|`Effects[26]`|[PerkEntryPointModifyValue]|
|`Effects[26].Modification`|Multiply|
|`Effects[26].Value`|0.5|
|`Effects[26].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[26].PerkConditionTabCount`|2|
|`Effects[26].Rank`|0|
|`Effects[26].Priority`|34|
|`Effects[26].Conditions`|[list: 2 item(s)]|
|`Effects[26].Flags`|[PerkScriptFlag]|
|`Effects[26].Flags.Flags`|0|
|`Effects[26].Flags.FragmentIndex`|0|
|`Effects[27]`|[PerkEntryPointModifyValue]|
|`Effects[27].Modification`|Multiply|
|`Effects[27].Value`|0.5|
|`Effects[27].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[27].PerkConditionTabCount`|2|
|`Effects[27].Rank`|0|
|`Effects[27].Priority`|33|
|`Effects[27].Conditions`|[list: 2 item(s)]|
|`Effects[27].Flags`|[PerkScriptFlag]|
|`Effects[27].Flags.Flags`|0|
|`Effects[27].Flags.FragmentIndex`|0|
|`Effects[28]`|[PerkEntryPointModifyValue]|
|`Effects[28].Modification`|Multiply|
|`Effects[28].Value`|0.5|
|`Effects[28].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[28].PerkConditionTabCount`|2|
|`Effects[28].Rank`|0|
|`Effects[28].Priority`|32|
|`Effects[28].Conditions`|[list: 2 item(s)]|
|`Effects[28].Flags`|[PerkScriptFlag]|
|`Effects[28].Flags.Flags`|0|
|`Effects[28].Flags.FragmentIndex`|0|
|`Effects[29]`|[PerkEntryPointModifyValue]|
|`Effects[29].Modification`|Multiply|
|`Effects[29].Value`|0.5|
|`Effects[29].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[29].PerkConditionTabCount`|2|
|`Effects[29].Rank`|0|
|`Effects[29].Priority`|31|
|`Effects[29].Conditions`|[list: 2 item(s)]|
|`Effects[29].Flags`|[PerkScriptFlag]|
|`Effects[29].Flags.Flags`|0|
|`Effects[29].Flags.FragmentIndex`|0|
|`Effects[30]`|[PerkEntryPointModifyValue]|
|`Effects[30].Modification`|Multiply|
|`Effects[30].Value`|2|
|`Effects[30].EntryPoint`|ModIncomingDamage|
|`Effects[30].PerkConditionTabCount`|3|
|`Effects[30].Rank`|0|
|`Effects[30].Priority`|25|
|`Effects[30].Conditions`|[list: 1 item(s)]|
|`Effects[30].Flags`|[PerkScriptFlag]|
|`Effects[30].Flags.Flags`|0|
|`Effects[30].Flags.FragmentIndex`|0|
|`Effects[31]`|[PerkEntryPointModifyValue]|
|`Effects[31].Modification`|Multiply|
|`Effects[31].Value`|2|
|`Effects[31].EntryPoint`|ModIncomingDamage|
|`Effects[31].PerkConditionTabCount`|3|
|`Effects[31].Rank`|0|
|`Effects[31].Priority`|24|
|`Effects[31].Conditions`|[list: 1 item(s)]|
|`Effects[31].Flags`|[PerkScriptFlag]|
|`Effects[31].Flags.Flags`|0|
|`Effects[31].Flags.FragmentIndex`|0|
|`Effects[32]`|[PerkEntryPointModifyValue]|
|`Effects[32].Modification`|Multiply|
|`Effects[32].Value`|2|
|`Effects[32].EntryPoint`|ModIncomingDamage|
|`Effects[32].PerkConditionTabCount`|3|
|`Effects[32].Rank`|0|
|`Effects[32].Priority`|23|
|`Effects[32].Conditions`|[list: 1 item(s)]|
|`Effects[32].Flags`|[PerkScriptFlag]|
|`Effects[32].Flags.Flags`|0|
|`Effects[32].Flags.FragmentIndex`|0|
|`Effects[33]`|[PerkEntryPointModifyValue]|
|`Effects[33].Modification`|Multiply|
|`Effects[33].Value`|2|
|`Effects[33].EntryPoint`|ModIncomingDamage|
|`Effects[33].PerkConditionTabCount`|3|
|`Effects[33].Rank`|0|
|`Effects[33].Priority`|22|
|`Effects[33].Conditions`|[list: 1 item(s)]|
|`Effects[33].Flags`|[PerkScriptFlag]|
|`Effects[33].Flags.Flags`|0|
|`Effects[33].Flags.FragmentIndex`|0|
|`Effects[34]`|[PerkEntryPointModifyValue]|
|`Effects[34].Modification`|Multiply|
|`Effects[34].Value`|2|
|`Effects[34].EntryPoint`|ModIncomingDamage|
|`Effects[34].PerkConditionTabCount`|3|
|`Effects[34].Rank`|0|
|`Effects[34].Priority`|21|
|`Effects[34].Conditions`|[list: 1 item(s)]|
|`Effects[34].Flags`|[PerkScriptFlag]|
|`Effects[34].Flags.Flags`|0|
|`Effects[34].Flags.FragmentIndex`|0|
|`Effects[35]`|[PerkEntryPointModifyValue]|
|`Effects[35].Modification`|Multiply|
|`Effects[35].Value`|0.5|
|`Effects[35].EntryPoint`|ModIncomingDamage|
|`Effects[35].PerkConditionTabCount`|3|
|`Effects[35].Rank`|0|
|`Effects[35].Priority`|15|
|`Effects[35].Conditions`|[list: 1 item(s)]|
|`Effects[35].Flags`|[PerkScriptFlag]|
|`Effects[35].Flags.Flags`|0|
|`Effects[35].Flags.FragmentIndex`|0|
|`Effects[36]`|[PerkEntryPointModifyValue]|
|`Effects[36].Modification`|Multiply|
|`Effects[36].Value`|0.5|
|`Effects[36].EntryPoint`|ModIncomingDamage|
|`Effects[36].PerkConditionTabCount`|3|
|`Effects[36].Rank`|0|
|`Effects[36].Priority`|14|
|`Effects[36].Conditions`|[list: 1 item(s)]|
|`Effects[36].Flags`|[PerkScriptFlag]|
|`Effects[36].Flags.Flags`|0|
|`Effects[36].Flags.FragmentIndex`|0|
|`Effects[37]`|[PerkEntryPointModifyValue]|
|`Effects[37].Modification`|Multiply|
|`Effects[37].Value`|0.5|
|`Effects[37].EntryPoint`|ModIncomingDamage|
|`Effects[37].PerkConditionTabCount`|3|
|`Effects[37].Rank`|0|
|`Effects[37].Priority`|13|
|`Effects[37].Conditions`|[list: 1 item(s)]|
|`Effects[37].Flags`|[PerkScriptFlag]|
|`Effects[37].Flags.Flags`|0|
|`Effects[37].Flags.FragmentIndex`|0|
|`Effects[38]`|[PerkEntryPointModifyValue]|
|`Effects[38].Modification`|Multiply|
|`Effects[38].Value`|0.5|
|`Effects[38].EntryPoint`|ModIncomingDamage|
|`Effects[38].PerkConditionTabCount`|3|
|`Effects[38].Rank`|0|
|`Effects[38].Priority`|12|
|`Effects[38].Conditions`|[list: 1 item(s)]|
|`Effects[38].Flags`|[PerkScriptFlag]|
|`Effects[38].Flags.Flags`|0|
|`Effects[38].Flags.FragmentIndex`|0|
|`Effects[39]`|[PerkEntryPointModifyValue]|
|`Effects[39].Modification`|Multiply|
|`Effects[39].Value`|0.5|
|`Effects[39].EntryPoint`|ModIncomingDamage|
|`Effects[39].PerkConditionTabCount`|3|
|`Effects[39].Rank`|0|
|`Effects[39].Priority`|11|
|`Effects[39].Conditions`|[list: 1 item(s)]|
|`Effects[39].Flags`|[PerkScriptFlag]|
|`Effects[39].Flags.Flags`|0|
|`Effects[39].Flags.FragmentIndex`|0|
|`Effects[40]`|[PerkAbilityEffect] Ability=377051:Pilgrim.esp|
|`Effects[40].Ability`|[`377051:Pilgrim.esp`](../magic/MAGIC_052.md#r-047a885e7ed4)|
|`Effects[40].Rank`|0|
|`Effects[40].Priority`|0|
|`Effects[40].Conditions`|[list: 0 item(s)]|
|`Effects[40].Flags`|[PerkScriptFlag]|
|`Effects[40].Flags.Flags`|0|
|`Effects[40].Flags.FragmentIndex`|0|
|`Name`|Cultist of Sheogorath|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a8dad4409d81"></a>

## MAG_CultistSheogorathPerkNPC

- Identidade estável Housecarl: `0D542C:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Cultist of Sheogorath; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0C44B6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`377050:Pilgrim.esp`](../magic/MAGIC_029.md#r-62670b0d4622)|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[1]`|HasMagicEffectKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Cultist of Sheogorath|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a2ec57f20ee1"></a>

## MAG_CultistSithisPerk

- Identidade estável Housecarl: `371F31:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Cultist of Sithis; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`371F30:Pilgrim.esp`](../magic/MAGIC_052.md#r-2c15525bda2f); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSneakAttackMult; Modification=Multiply; Value=1.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`371F2E:Pilgrim.esp`](../magic/MAGIC_029.md#r-7cfad0613d32)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`371F2E:Pilgrim.esp`](../magic/MAGIC_029.md#r-7cfad0613d32)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[2]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|NotEqualTo 1|OR|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=371F30:Pilgrim.esp|
|`Effects[0].Ability`|[`371F30:Pilgrim.esp`](../magic/MAGIC_052.md#r-2c15525bda2f)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.5|
|`Effects[1].EntryPoint`|ModSneakAttackMult|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|0.5|
|`Effects[2].EntryPoint`|ModAttackDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Name`|Cultist of Sithis|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-26bcab0e8d02"></a>

## MAG_CultistVaerminaPerk

- Identidade estável Housecarl: `36CE22:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Cultist of Vaermina; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`36CE21:Pilgrim.esp`](../magic/MAGIC_052.md#r-253379eecd80); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`36CE20:Pilgrim.esp`](../magic/MAGIC_029.md#r-039995a1f559)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616106:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=36CE21:Pilgrim.esp|
|`Effects[0].Ability`|[`36CE21:Pilgrim.esp`](../magic/MAGIC_052.md#r-253379eecd80)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0.5|
|`Effects[1].EntryPoint`|ModSpellDuration|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Cultist of Vaermina|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-55aaa2870c1b"></a>

## MAG_PerkCultistControllerPerk

- Identidade estável Housecarl: `325F27:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Cultist Controller; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616105:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616102:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Cultist Controller|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-3cc3c3808d6c"></a>

## MAG_PerkPilgrimControllerPerk

- Identidade estável Housecarl: `325F26:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Pilgrim Controller; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=2; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616103:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616101:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Pilgrim Controller|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2bb891311588"></a>

## MAG_PilgrimAkatoshPerk

- Identidade estável Housecarl: `325F2A:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Pilgrim of Akatosh; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`325F2C:Pilgrim.esp`](../magic/MAGIC_049.md#r-349d910958ef); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=325F2C:Pilgrim.esp|
|`Effects[0].Ability`|[`325F2C:Pilgrim.esp`](../magic/MAGIC_049.md#r-349d910958ef)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Pilgrim of Akatosh|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-e91c3abcfbe0"></a>

## MAG_PilgrimAkatoshPerkDummy

- Identidade estável Housecarl: `023F8F:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Pilgrim of Akatosh; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`023F8E:Pilgrim.esp`](../magic/MAGIC_040.md#r-15c1124ae350); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=023F8E:Pilgrim.esp|
|`Effects[0].Ability`|[`023F8E:Pilgrim.esp`](../magic/MAGIC_040.md#r-15c1124ae350)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Pilgrim of Akatosh|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-741df28c08e9"></a>

## MAG_PilgrimAllMakerBeastPerk

- Identidade estável Housecarl: `38B4E9:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Pilgrim of the All-Maker; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`38B4E6:Pilgrim.esp`](../magic/MAGIC_053.md#r-265edccda49f); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=38B4E6:Pilgrim.esp|
|`Effects[0].Ability`|[`38B4E6:Pilgrim.esp`](../magic/MAGIC_053.md#r-265edccda49f)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Pilgrim of the All-Maker|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-51b03963874b"></a>

## MAG_PilgrimAllMakerEarthPerk

- Identidade estável Housecarl: `35DAC4:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Pilgrim of the All-Maker; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`35DAC3:Pilgrim.esp`](../magic/MAGIC_051.md#r-a94cd1db4833); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0965B2:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`35DAC1:Pilgrim.esp`](../magic/MAGIC_028.md#r-d8d1ce078052)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616104:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0965B2:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`35DAC1:Pilgrim.esp`](../magic/MAGIC_028.md#r-d8d1ce078052)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=616104:Update.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|IsPowerAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=35DAC3:Pilgrim.esp|
|`Effects[0].Ability`|[`35DAC3:Pilgrim.esp`](../magic/MAGIC_051.md#r-a94cd1db4833)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0.5|
|`Effects[1].EntryPoint`|ModIncomingDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|0.5|
|`Effects[2].EntryPoint`|ModIncomingDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Name`|Pilgrim of the All-Maker|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a304309b19c4"></a>

## MAG_PilgrimAllMakerSunPerk

- Identidade estável Housecarl: `35DADF:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Pilgrim of the All-Maker; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`35DADE:Pilgrim.esp`](../magic/MAGIC_052.md#r-043718af5fb5); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=35DADE:Pilgrim.esp|
|`Effects[0].Ability`|[`35DADE:Pilgrim.esp`](../magic/MAGIC_052.md#r-043718af5fb5)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Pilgrim of the All-Maker|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-bf90639aad50"></a>

## MAG_PilgrimAllMakerTreePerk

- Identidade estável Housecarl: `35DABD:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Pilgrim of the All-Maker; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`35DABC:Pilgrim.esp`](../magic/MAGIC_051.md#r-32879e7d53d6); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=1.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffectKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=ADA129:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0FB98C:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0F8A4E:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=35DABC:Pilgrim.esp|
|`Effects[0].Ability`|[`35DABC:Pilgrim.esp`](../magic/MAGIC_051.md#r-32879e7d53d6)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.5|
|`Effects[1].EntryPoint`|ModSpellDuration|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Pilgrim of the All-Maker|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b9a5fcb69941"></a>

## MAG_PilgrimAllMakerWaterPerk

- Identidade estável Housecarl: `35DACC:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Pilgrim of the All-Maker; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`35DACB:Pilgrim.esp`](../magic/MAGIC_051.md#r-69bfe0500fb8); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=35DACB:Pilgrim.esp|
|`Effects[0].Ability`|[`35DACB:Pilgrim.esp`](../magic/MAGIC_051.md#r-69bfe0500fb8)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Pilgrim of the All-Maker|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-33e7d6b7b296"></a>

## MAG_PilgrimAllMakerWindPerk

- Identidade estável Housecarl: `35DAD6:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Pilgrim of the All-Maker; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`35DAD5:Pilgrim.esp`](../magic/MAGIC_052.md#r-40cb4a380008); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=35DAD5:Pilgrim.esp|
|`Effects[0].Ability`|[`35DAD5:Pilgrim.esp`](../magic/MAGIC_052.md#r-40cb4a380008)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Pilgrim of the All-Maker|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-42d9f3b77806"></a>

## MAG_PilgrimArkayPerk

- Identidade estável Housecarl: `33523C:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Pilgrim of Arkay; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`335235:Pilgrim.esp`](../magic/MAGIC_050.md#r-c5fe983c50ad); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=335235:Pilgrim.esp|
|`Effects[0].Ability`|[`335235:Pilgrim.esp`](../magic/MAGIC_050.md#r-c5fe983c50ad)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Pilgrim of Arkay|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7922ea11a971"></a>

## MAG_PilgrimAurielPerkDummy

- Identidade estável Housecarl: `616110:Update.esm`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 2.
- Nome: Pilgrim of Auriel; ranks declarados: 1; NextPerk: (null link).
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
|`Name`|Pilgrim of Auriel|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-3b20e28b8ef5"></a>

## MAG_PilgrimDibellaPerk

- Identidade estável Housecarl: `33523E:Pilgrim.esp`.
- Tipo: `Perk`; winner: `Pilgrim.esp`; profundidade de override: 1.
- Nome: Pilgrim of Dibella; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`33523F:Pilgrim.esp`](../magic/MAGIC_050.md#r-4b33c4dbdcee); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=33523F:Pilgrim.esp|
|`Effects[0].Ability`|[`33523F:Pilgrim.esp`](../magic/MAGIC_050.md#r-4b33c4dbdcee)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Pilgrim of Dibella|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
