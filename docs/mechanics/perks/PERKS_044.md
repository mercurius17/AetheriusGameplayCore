# Perks instaladas — parte 044

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-3b9fa145ab76"></a>

## VKR_Arc_040_ImpalingShot_Perk_WasBullseye

- Identidade estável Housecarl: `058F64:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 5.
- Nome: Impaling Shot; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`47EB7D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-0779b3266dcd); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Archery<br>Parameter1=Archery|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`105F1C:Skyrim.esm`](../perks/PERKS_047.md#r-a9c05b2a19ac)<br>Parameter1.Link=[`105F1C:Skyrim.esm`](../perks/PERKS_047.md#r-a9c05b2a19ac)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`219DC7:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-1fc72afa8b5e)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`2EE98B:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-74fb664a15a6)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=47EB7D:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`47EB7D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-0779b3266dcd)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|189|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Impaling Shot|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-74fb664a15a6"></a>

## VKR_Arc_080_ArrowToTheKnee_Perk

- Identidade estável Housecarl: `2EE98B:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 2.
- Nome: Arrow to the Knee; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`47EB7D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-0779b3266dcd); Rank=0; Priority=187; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitChance; Modification=Set; Value=100; Rank=0; Priority=100; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=2; Rank=0; Priority=99; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Archery<br>Parameter1=Archery|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058F64:Skyrim.esm`](../perks/PERKS_044.md#r-3b9fa145ab76)<br>Parameter1.Link=[`058F64:Skyrim.esm`](../perks/PERKS_044.md#r-3b9fa145ab76)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`219DC7:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-1fc72afa8b5e)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`2EE993:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_048.md#r-8cad25771d32)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`2EE98C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_024.md#r-e635421f1b81)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`2EE98C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_024.md#r-e635421f1b81)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=47EB7D:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`47EB7D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-0779b3266dcd)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|187|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Set|
|`Effects[1].Value`|100|
|`Effects[1].EntryPoint`|CalculateMyCriticalHitChance|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|100|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|2|
|`Effects[2].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|99|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Name`|Arrow to the Knee|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-24f12cde8947"></a>

## VKR_Arc_080_Gore_Perk

- Identidade estável Housecarl: `219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 2.
- Nome: Gore; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`47EB7D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-0779b3266dcd); Rank=0; Priority=188; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitChance; Modification=Set; Value=100; Rank=0; Priority=100; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=1; Rank=0; Priority=99; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Archery<br>Parameter1=Archery|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`219DC7:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-1fc72afa8b5e)<br>Parameter1.Link=[`219DC7:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-1fc72afa8b5e)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`2EE993:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_048.md#r-8cad25771d32)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasMagicEffectKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=219DD0:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasMagicEffectKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=219DD0:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=47EB7D:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`47EB7D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-0779b3266dcd)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|188|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Set|
|`Effects[1].Value`|100|
|`Effects[1].EntryPoint`|CalculateMyCriticalHitChance|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|100|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|1|
|`Effects[2].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|99|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Name`|Gore|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-06f7e04c7b51"></a>

## VKR_Bck_080_MockingBlow_Perk

- Identidade estável Housecarl: `2DF676:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 2.
- Nome: Mocking Blow; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyBashingSpell; Spell=[`008B35:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_038.md#r-28bcc846b5d4); Rank=0; Priority=125; PerkConditionTabCount=2. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`05F594:Skyrim.esm`](../perks/PERKS_048.md#r-b08049325512)<br>Parameter1.Link=[`05F594:Skyrim.esm`](../perks/PERKS_048.md#r-b08049325512)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`058F66:Skyrim.esm`](../perks/PERKS_048.md#r-2cf209b48868)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=000F54:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=008B35:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`008B35:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_038.md#r-28bcc846b5d4)|
|`Effects[0].EntryPoint`|ApplyBashingSpell|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|125|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Mocking Blow|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-241ffb6020c2"></a>

## VKR_Lia_020_IronFist1_Perk_WasFistsOfSteel

- Identidade estável Housecarl: `058F6E:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 4.
- Nome: Iron Fist; ranks declarados: 1; NextPerk: [`0085B8:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_053.md#r-93b3d5d9afc0).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModAttackDamage; Modification=AddAVMult; ActorValue=Stamina; Value=0.05; Rank=0; Priority=250; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[1] — PerkEntryPointModifyActorValue**: EntryPoint=ModAttackDamage; Modification=AddAVMult; ActorValue=Stamina; Value=0.1; Rank=0; Priority=249; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[2] — PerkAbilityEffect**: Ability=[`2CB24C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-b97f7c760a73); Rank=0; Priority=220. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`2D0365:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-28938db8ae1e); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=LightArmor<br>Parameter1=LightArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BE123:Skyrim.esm`](../perks/PERKS_053.md#r-667a622e229c)<br>Parameter1.Link=[`0BE123:Skyrim.esm`](../perks/PERKS_053.md#r-667a622e229c)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetEquipped|0|Subject; ref=(null link); index=-1|EqualTo 1|0|ItemOrList=0001F4:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|GetEquipped|0|Subject; ref=(null link); index=-1|EqualTo 1|0|ItemOrList=0001F4:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0085B8:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_053.md#r-93b3d5d9afc0)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetEquipped|0|Subject; ref=(null link); index=-1|EqualTo 1|0|ItemOrList=0001F4:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|GetEquipped|0|Subject; ref=(null link); index=-1|EqualTo 1|0|ItemOrList=0001F4:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0085B8:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_053.md#r-93b3d5d9afc0)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`2290EE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-ccae6894aa5e)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=0001F4:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Stamina|
|`Effects[0].Value`|0.05|
|`Effects[0].Modification`|AddAVMult|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|250|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyActorValue]|
|`Effects[1].ActorValue`|Stamina|
|`Effects[1].Value`|0.1|
|`Effects[1].Modification`|AddAVMult|
|`Effects[1].EntryPoint`|ModAttackDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|249|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkAbilityEffect] Ability=2CB24C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Ability`|[`2CB24C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-b97f7c760a73)|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|220|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=2D0365:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`2D0365:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-28938db8ae1e)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|190|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Name`|Iron Fist|
|`NextPerk`|[`0085B8:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_053.md#r-93b3d5d9afc0)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-ccae6894aa5e"></a>

## VKR_Lia_060_FlurryOfBlows1_Perk

- Identidade estável Housecarl: `2290EE:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 2.
- Nome: Flurry of Blows; ranks declarados: 1; NextPerk: [`2D546B:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_053.md#r-3b2d754a9008).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`2D0360:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-488c5f0dc401); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModPowerAttackStamina; Modification=Multiply; Value=0.75; Rank=0; Priority=180; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=LightArmor<br>Parameter1=LightArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058F6E:Skyrim.esm`](../perks/PERKS_044.md#r-241ffb6020c2)<br>Parameter1.Link=[`058F6E:Skyrim.esm`](../perks/PERKS_044.md#r-241ffb6020c2)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`04D4E3:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_053.md#r-305a4eb73708)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=0001F4:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`2D546B:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_053.md#r-3b2d754a9008)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|GetEquipped|0|Subject; ref=(null link); index=-1|EqualTo 1|0|ItemOrList=0001F4:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|GetEquipped|0|Subject; ref=(null link); index=-1|EqualTo 1|0|ItemOrList=0001F4:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=2D0360:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`2D0360:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-488c5f0dc401)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|189|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0.75|
|`Effects[1].EntryPoint`|ModPowerAttackStamina|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|180|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Flurry of Blows|
|`NextPerk`|[`2D546B:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_053.md#r-3b2d754a9008)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-afbd60a632b3"></a>

## VKR_One_030_BasicMace1_Perk_WasBoneBreaker1

- Identidade estável Housecarl: `05F592:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 4.
- Nome: Denting Blows; ranks declarados: 1; NextPerk: [`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E9114:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-d630634cc619); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E9116:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-b8e3d57502d6); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3347:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-280fd06ae452); Rank=0; Priority=185; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F334B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-a32e884bfbae); Rank=0; Priority=184; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3349:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-e398cc17fe13); Rank=0; Priority=180; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F334D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-6801ce00f9be); Rank=0; Priority=179; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModTargetDamageResistance; Modification=Add; Value=-0.12; Rank=0; Priority=20; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BABE4:Skyrim.esm`](../perks/PERKS_054.md#r-877bfe6db601)<br>Parameter1.Link=[`0BABE4:Skyrim.esm`](../perks/PERKS_054.md#r-877bfe6db601)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[7]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 7 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=4E9114:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`4E9114:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-d630634cc619)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=4E9116:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`4E9116:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-b8e3d57502d6)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=4F3347:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`4F3347:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-280fd06ae452)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|185|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=4F334B:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`4F334B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-a32e884bfbae)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|184|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=4F3349:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`4F3349:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-e398cc17fe13)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|180|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=4F334D:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`4F334D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-6801ce00f9be)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|179|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Add|
|`Effects[6].Value`|-0.12|
|`Effects[6].EntryPoint`|ModTargetDamageResistance|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|20|
|`Effects[6].Conditions`|[list: 2 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Name`|Denting Blows|
|`NextPerk`|[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0bc7d54ef774"></a>

## VKR_One_030_BasicMace2_Perk_WasBoneBreaker2

- Identidade estável Housecarl: `0C1E92:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 4.
- Nome: Denting Blows; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E02:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-4fe14b7600a6); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E04:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-df03c8f2367b); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E06:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-66d5a403bd72); Rank=0; Priority=185; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E08:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-298189e03d27); Rank=0; Priority=184; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E0A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-ff3f46aeefff); Rank=0; Priority=180; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E0C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-16a7ad6569db); Rank=0; Priority=179; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModTargetDamageResistance; Modification=Add; Value=-0.18; Rank=0; Priority=20; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`05F592:Skyrim.esm`](../perks/PERKS_044.md#r-afbd60a632b3)<br>Parameter1.Link=[`05F592:Skyrim.esm`](../perks/PERKS_044.md#r-afbd60a632b3)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 7 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=525E02:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`525E02:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-4fe14b7600a6)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=525E04:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`525E04:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-df03c8f2367b)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=525E06:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`525E06:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-66d5a403bd72)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|185|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=525E08:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`525E08:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-298189e03d27)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|184|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=525E0A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`525E0A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-ff3f46aeefff)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|180|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=525E0C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`525E0C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-16a7ad6569db)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|179|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Add|
|`Effects[6].Value`|-0.18|
|`Effects[6].EntryPoint`|ModTargetDamageResistance|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|20|
|`Effects[6].Conditions`|[list: 1 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Name`|Denting Blows|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-1423d9a1ea0e"></a>

## VKR_One_030_BasicSword1_Perk_WasBladesman1

- Identidade estável Housecarl: `05F56F:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 5.
- Nome: Overpowering Assault; ranks declarados: 1; NextPerk: [`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E911D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-740d120bd3c8); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E911F:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-3d47b6933e1f); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F334F:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-d12926bbb555); Rank=0; Priority=185; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3353:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-ef69b9574b15); Rank=0; Priority=184; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3351:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-8e270d67c051); Rank=0; Priority=180; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3355:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-63deb8967f69); Rank=0; Priority=179; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BABE4:Skyrim.esm`](../perks/PERKS_054.md#r-877bfe6db601)<br>Parameter1.Link=[`0BABE4:Skyrim.esm`](../perks/PERKS_054.md#r-877bfe6db601)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[7]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 6 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=4E911D:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`4E911D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-740d120bd3c8)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=4E911F:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`4E911F:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-3d47b6933e1f)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=4F334F:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`4F334F:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-d12926bbb555)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|185|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=4F3353:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`4F3353:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-ef69b9574b15)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|184|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=4F3351:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`4F3351:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-8e270d67c051)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|180|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=4F3355:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`4F3355:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-63deb8967f69)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|179|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Name`|Overpowering Assault|
|`NextPerk`|[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-95b7bbb76408"></a>

## VKR_One_030_BasicSword2_Perk_WasBladesman2

- Identidade estável Housecarl: `0C1E90:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 5.
- Nome: Overpowering Assault; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E0E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-fc8ed65a097e); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E10:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-f9f92ab44d51); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E12:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-123dea978350); Rank=0; Priority=185; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E14:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-0dd6e35dd725); Rank=0; Priority=184; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E16:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-3593356f4e42); Rank=0; Priority=180; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E18:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-6b97381558ab); Rank=0; Priority=179; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`05F56F:Skyrim.esm`](../perks/PERKS_044.md#r-1423d9a1ea0e)<br>Parameter1.Link=[`05F56F:Skyrim.esm`](../perks/PERKS_044.md#r-1423d9a1ea0e)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 6 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=525E0E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`525E0E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-fc8ed65a097e)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=525E10:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`525E10:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-f9f92ab44d51)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=525E12:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`525E12:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-123dea978350)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|185|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=525E14:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`525E14:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-0dd6e35dd725)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|184|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=525E16:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`525E16:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-3593356f4e42)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|180|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=525E18:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`525E18:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-6b97381558ab)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|179|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Name`|Overpowering Assault|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7a8202fd1d10"></a>

## VKR_One_030_BasicWarAxe1_Perk_WasHackAndSlash1

- Identidade estável Housecarl: `03FFFA:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 7.
- Nome: Grievous Wounds; ranks declarados: 1; NextPerk: [`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`41E7F5:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-54dc924af410); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E90F8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-e39a3b79d649); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3357:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-d90ba9321dfd); Rank=0; Priority=185; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F335B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-5578404b0ea1); Rank=0; Priority=184; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3359:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-f507429d099f); Rank=0; Priority=180; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F335D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-ddb43bb60600); Rank=0; Priority=179; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.1; Rank=0; Priority=150; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.1; Rank=0; Priority=149; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BABE4:Skyrim.esm`](../perks/PERKS_054.md#r-877bfe6db601)<br>Parameter1.Link=[`0BABE4:Skyrim.esm`](../perks/PERKS_054.md#r-877bfe6db601)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[7]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[2]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[2]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 8 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=41E7F5:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`41E7F5:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-54dc924af410)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=4E90F8:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`4E90F8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-e39a3b79d649)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=4F3357:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`4F3357:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-d90ba9321dfd)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|185|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=4F335B:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`4F335B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-5578404b0ea1)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|184|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=4F3359:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`4F3359:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-f507429d099f)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|180|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=4F335D:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`4F335D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-ddb43bb60600)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|179|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Multiply|
|`Effects[6].Value`|1.1|
|`Effects[6].EntryPoint`|ModAttackDamage|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|150|
|`Effects[6].Conditions`|[list: 2 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyValue]|
|`Effects[7].Modification`|Multiply|
|`Effects[7].Value`|1.1|
|`Effects[7].EntryPoint`|ModAttackDamage|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|149|
|`Effects[7].Conditions`|[list: 2 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Name`|Grievous Wounds|
|`NextPerk`|[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7ba378fc7bb7"></a>

## VKR_One_030_BasicWarAxe2_Perk_WasHackAndSlash2

- Identidade estável Housecarl: `0C3678:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 7.
- Nome: Grievous Wounds; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E1A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-840810ba2cd3); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E1C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-a26f49399e9e); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E1E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-30989d43c957); Rank=0; Priority=185; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E20:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-199d4bd67a75); Rank=0; Priority=184; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E22:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-bf96fe0f75a3); Rank=0; Priority=180; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E24:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-daf19d6e12e2); Rank=0; Priority=179; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.15; Rank=0; Priority=150; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.15; Rank=0; Priority=149; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03FFFA:Skyrim.esm`](../perks/PERKS_044.md#r-7a8202fd1d10)<br>Parameter1.Link=[`03FFFA:Skyrim.esm`](../perks/PERKS_044.md#r-7a8202fd1d10)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[2]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[2]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 8 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=525E1A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`525E1A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-840810ba2cd3)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=525E1C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`525E1C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-a26f49399e9e)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=525E1E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`525E1E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-30989d43c957)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|185|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=525E20:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`525E20:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-199d4bd67a75)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|184|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=525E22:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`525E22:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-bf96fe0f75a3)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|180|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=525E24:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`525E24:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-daf19d6e12e2)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|179|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Multiply|
|`Effects[6].Value`|1.15|
|`Effects[6].EntryPoint`|ModAttackDamage|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|150|
|`Effects[6].Conditions`|[list: 2 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyValue]|
|`Effects[7].Modification`|Multiply|
|`Effects[7].Value`|1.15|
|`Effects[7].EntryPoint`|ModAttackDamage|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|149|
|`Effects[7].Conditions`|[list: 2 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Name`|Grievous Wounds|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-032d19a9a357"></a>

## VKR_One_070_AdvancedDagger_Perk

- Identidade estável Housecarl: `353F1B:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 2.
- Nome: Spitting Cobra; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`353F18:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_051.md#r-d7958fffbc3e); Rank=0; Priority=170; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`423922:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-9267bf09973a); Rank=0; Priority=169; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`5119A8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-6a8e31cb25e4); Rank=0; Priority=165; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`5119AA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-5a28f2834a00); Rank=0; Priority=164; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`5119AE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-d3eb910fe8f2); Rank=0; Priority=160; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`5119B0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-9752c5dac254); Rank=0; Priority=159; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitChance; Modification=Add; Value=100; Rank=0; Priority=100; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=3; Rank=0; Priority=99; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`004EFA:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_054.md#r-f2cf9958c487)<br>Parameter1.Link=[`004EFA:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_054.md#r-f2cf9958c487)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`353F1C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-b778fb00fa33)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`353F1C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-b778fb00fa33)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 8 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=353F18:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`353F18:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_051.md#r-d7958fffbc3e)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|170|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=423922:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`423922:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-9267bf09973a)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|169|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=5119A8:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`5119A8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-6a8e31cb25e4)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|165|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=5119AA:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`5119AA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-5a28f2834a00)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|164|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=5119AE:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`5119AE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-d3eb910fe8f2)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|160|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=5119B0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`5119B0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-9752c5dac254)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|159|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Add|
|`Effects[6].Value`|100|
|`Effects[6].EntryPoint`|CalculateMyCriticalHitChance|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|100|
|`Effects[6].Conditions`|[list: 3 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyValue]|
|`Effects[7].Modification`|Multiply|
|`Effects[7].Value`|3|
|`Effects[7].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|99|
|`Effects[7].Conditions`|[list: 3 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Name`|Spitting Cobra|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-c87b239e2633"></a>

## VKR_One_070_AdvancedMace_Perk_WasBoneBreaker3

- Identidade estável Housecarl: `0C1E93:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 4.
- Nome: Disrupting Strike; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E02:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-4fe14b7600a6); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E04:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-df03c8f2367b); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E9110:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-0cf27663db98); Rank=0; Priority=170; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E9112:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-902c5b7bbd0e); Rank=0; Priority=169; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E26:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-2b7e3d036267); Rank=0; Priority=168; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E28:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-f8560f829532); Rank=0; Priority=167; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F847A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-38f9a81b6656); Rank=0; Priority=165; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[7] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F847E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-242c80edc5c6); Rank=0; Priority=164; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[8] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E2A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-f794f33bf6ca); Rank=0; Priority=163; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[9] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E2C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-033ab64d2acb); Rank=0; Priority=162; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[10] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F847C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-8a7c0863a670); Rank=0; Priority=160; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[11] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8480:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-a1db13364a72); Rank=0; Priority=159; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[12] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E2E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-0969b6f83278); Rank=0; Priority=158; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[13] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E30:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-b94c06bd114d); Rank=0; Priority=157; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[14] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitChance; Modification=Add; Value=100; Rank=0; Priority=100; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[15] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=3; Rank=0; Priority=99; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`05F592:Skyrim.esm`](../perks/PERKS_044.md#r-afbd60a632b3)<br>Parameter1.Link=[`05F592:Skyrim.esm`](../perks/PERKS_044.md#r-afbd60a632b3)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`05F592:Skyrim.esm`](../perks/PERKS_044.md#r-afbd60a632b3)<br>Parameter1.Link=[`05F592:Skyrim.esm`](../perks/PERKS_044.md#r-afbd60a632b3)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)<br>Parameter1.Link=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`05F592:Skyrim.esm`](../perks/PERKS_044.md#r-afbd60a632b3)<br>Parameter1.Link=[`05F592:Skyrim.esm`](../perks/PERKS_044.md#r-afbd60a632b3)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)<br>Parameter1.Link=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)<br>Parameter1.Link=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)<br>Parameter1.Link=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)<br>Parameter1.Link=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)<br>Parameter1.Link=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)<br>Parameter1.Link=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)<br>Parameter1.Link=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)<br>Parameter1.Link=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[8].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)<br>Parameter1.Link=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)<br>Parameter1.Link=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[10].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)<br>Parameter1.Link=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)<br>Parameter1.Link=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)<br>Parameter1.Link=[`0C1E92:Skyrim.esm`](../perks/PERKS_044.md#r-0bc7d54ef774)|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[14].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`4E3FF4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_032.md#r-7bbd2952a00c)<br>Parameter1.Link=[`4E3FF4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_032.md#r-7bbd2952a00c)|aliases=False; package=False|
|`Effects[14].Conditions[2].Conditions[1]`|IsCasting|2|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E714:Skyrim.esm<br>Parameter1.Link=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`4E3FF4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_032.md#r-7bbd2952a00c)<br>Parameter1.Link=[`4E3FF4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_032.md#r-7bbd2952a00c)|aliases=False; package=False|
|`Effects[15].Conditions[2].Conditions[1]`|IsCasting|2|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 16 item(s)]|
|`Conditions`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=525E02:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`525E02:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-4fe14b7600a6)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=525E04:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`525E04:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-df03c8f2367b)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=4E9110:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`4E9110:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-0cf27663db98)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|170|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=4E9112:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`4E9112:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-902c5b7bbd0e)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|169|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=525E26:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`525E26:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-2b7e3d036267)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|168|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=525E28:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`525E28:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-f8560f829532)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|167|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointSelectSpell] Spell=4F847A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[6].Spell`|[`4F847A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-38f9a81b6656)|
|`Effects[6].EntryPoint`|ApplyCombatHitSpell|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|165|
|`Effects[6].Conditions`|[list: 3 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointSelectSpell] Spell=4F847E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[7].Spell`|[`4F847E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-242c80edc5c6)|
|`Effects[7].EntryPoint`|ApplyCombatHitSpell|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|164|
|`Effects[7].Conditions`|[list: 3 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointSelectSpell] Spell=525E2A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[8].Spell`|[`525E2A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-f794f33bf6ca)|
|`Effects[8].EntryPoint`|ApplyCombatHitSpell|
|`Effects[8].PerkConditionTabCount`|3|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|163|
|`Effects[8].Conditions`|[list: 3 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointSelectSpell] Spell=525E2C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[9].Spell`|[`525E2C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-033ab64d2acb)|
|`Effects[9].EntryPoint`|ApplyCombatHitSpell|
|`Effects[9].PerkConditionTabCount`|3|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|162|
|`Effects[9].Conditions`|[list: 3 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointSelectSpell] Spell=4F847C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[10].Spell`|[`4F847C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-8a7c0863a670)|
|`Effects[10].EntryPoint`|ApplyCombatHitSpell|
|`Effects[10].PerkConditionTabCount`|3|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|160|
|`Effects[10].Conditions`|[list: 3 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointSelectSpell] Spell=4F8480:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[11].Spell`|[`4F8480:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-a1db13364a72)|
|`Effects[11].EntryPoint`|ApplyCombatHitSpell|
|`Effects[11].PerkConditionTabCount`|3|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|159|
|`Effects[11].Conditions`|[list: 3 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Effects[12]`|[PerkEntryPointSelectSpell] Spell=525E2E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[12].Spell`|[`525E2E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-0969b6f83278)|
|`Effects[12].EntryPoint`|ApplyCombatHitSpell|
|`Effects[12].PerkConditionTabCount`|3|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|158|
|`Effects[12].Conditions`|[list: 3 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|0|
|`Effects[12].Flags.FragmentIndex`|0|
|`Effects[13]`|[PerkEntryPointSelectSpell] Spell=525E30:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[13].Spell`|[`525E30:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-b94c06bd114d)|
|`Effects[13].EntryPoint`|ApplyCombatHitSpell|
|`Effects[13].PerkConditionTabCount`|3|
|`Effects[13].Rank`|0|
|`Effects[13].Priority`|157|
|`Effects[13].Conditions`|[list: 3 item(s)]|
|`Effects[13].Flags`|[PerkScriptFlag]|
|`Effects[13].Flags.Flags`|0|
|`Effects[13].Flags.FragmentIndex`|0|
|`Effects[14]`|[PerkEntryPointModifyValue]|
|`Effects[14].Modification`|Add|
|`Effects[14].Value`|100|
|`Effects[14].EntryPoint`|CalculateMyCriticalHitChance|
|`Effects[14].PerkConditionTabCount`|3|
|`Effects[14].Rank`|0|
|`Effects[14].Priority`|100|
|`Effects[14].Conditions`|[list: 3 item(s)]|
|`Effects[14].Flags`|[PerkScriptFlag]|
|`Effects[14].Flags.Flags`|0|
|`Effects[14].Flags.FragmentIndex`|0|
|`Effects[15]`|[PerkEntryPointModifyValue]|
|`Effects[15].Modification`|Multiply|
|`Effects[15].Value`|3|
|`Effects[15].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[15].PerkConditionTabCount`|3|
|`Effects[15].Rank`|0|
|`Effects[15].Priority`|99|
|`Effects[15].Conditions`|[list: 3 item(s)]|
|`Effects[15].Flags`|[PerkScriptFlag]|
|`Effects[15].Flags.Flags`|0|
|`Effects[15].Flags.FragmentIndex`|0|
|`Name`|Disrupting Strike|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0357a69d30c1"></a>

## VKR_One_070_AdvancedSword_Perk_WasBladesman3

- Identidade estável Housecarl: `0C1E91:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 5.
- Nome: Execute; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E0E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-fc8ed65a097e); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E10:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-f9f92ab44d51); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E9106:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-4b9e1bc86851); Rank=0; Priority=170; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E910C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-1c6bdd923653); Rank=0; Priority=169; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E32:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-c42d2744c3dc); Rank=0; Priority=168; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E34:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-a8672d79ee84); Rank=0; Priority=167; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8482:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-f169a0327428); Rank=0; Priority=165; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[7] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8486:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-9e45c4f8674f); Rank=0; Priority=164; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[8] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E36:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-7b479e9cbb95); Rank=0; Priority=163; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[9] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E38:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-3ea5bcb97d05); Rank=0; Priority=162; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[10] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8484:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-0cabfd3456c8); Rank=0; Priority=160; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[11] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8488:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-b9472c357b69); Rank=0; Priority=159; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[12] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E3A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-399855cd401c); Rank=0; Priority=158; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[13] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E3C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-880f1957edbf); Rank=0; Priority=157; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[14] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitChance; Modification=Add; Value=100; Rank=0; Priority=100; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[15] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=10; Rank=0; Priority=99; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`05F56F:Skyrim.esm`](../perks/PERKS_044.md#r-1423d9a1ea0e)<br>Parameter1.Link=[`05F56F:Skyrim.esm`](../perks/PERKS_044.md#r-1423d9a1ea0e)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`05F56F:Skyrim.esm`](../perks/PERKS_044.md#r-1423d9a1ea0e)<br>Parameter1.Link=[`05F56F:Skyrim.esm`](../perks/PERKS_044.md#r-1423d9a1ea0e)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)<br>Parameter1.Link=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`05F56F:Skyrim.esm`](../perks/PERKS_044.md#r-1423d9a1ea0e)<br>Parameter1.Link=[`05F56F:Skyrim.esm`](../perks/PERKS_044.md#r-1423d9a1ea0e)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)<br>Parameter1.Link=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)<br>Parameter1.Link=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)<br>Parameter1.Link=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)<br>Parameter1.Link=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)<br>Parameter1.Link=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)<br>Parameter1.Link=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)<br>Parameter1.Link=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)<br>Parameter1.Link=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[8].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)<br>Parameter1.Link=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)<br>Parameter1.Link=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[10].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)<br>Parameter1.Link=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)<br>Parameter1.Link=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)<br>Parameter1.Link=[`0C1E90:Skyrim.esm`](../perks/PERKS_044.md#r-95b7bbb76408)|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[14].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`23331D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-9cc013af9cce)<br>Parameter1.Link=[`23331D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-9cc013af9cce)|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E711:Skyrim.esm<br>Parameter1.Link=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`23331D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-9cc013af9cce)<br>Parameter1.Link=[`23331D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-9cc013af9cce)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 16 item(s)]|
|`Conditions`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=525E0E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`525E0E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-fc8ed65a097e)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=525E10:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`525E10:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-f9f92ab44d51)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=4E9106:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`4E9106:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-4b9e1bc86851)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|170|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=4E910C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`4E910C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-1c6bdd923653)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|169|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=525E32:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`525E32:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-c42d2744c3dc)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|168|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=525E34:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`525E34:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-a8672d79ee84)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|167|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointSelectSpell] Spell=4F8482:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[6].Spell`|[`4F8482:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-f169a0327428)|
|`Effects[6].EntryPoint`|ApplyCombatHitSpell|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|165|
|`Effects[6].Conditions`|[list: 3 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointSelectSpell] Spell=4F8486:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[7].Spell`|[`4F8486:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-9e45c4f8674f)|
|`Effects[7].EntryPoint`|ApplyCombatHitSpell|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|164|
|`Effects[7].Conditions`|[list: 3 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointSelectSpell] Spell=525E36:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[8].Spell`|[`525E36:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-7b479e9cbb95)|
|`Effects[8].EntryPoint`|ApplyCombatHitSpell|
|`Effects[8].PerkConditionTabCount`|3|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|163|
|`Effects[8].Conditions`|[list: 3 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointSelectSpell] Spell=525E38:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[9].Spell`|[`525E38:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-3ea5bcb97d05)|
|`Effects[9].EntryPoint`|ApplyCombatHitSpell|
|`Effects[9].PerkConditionTabCount`|3|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|162|
|`Effects[9].Conditions`|[list: 3 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointSelectSpell] Spell=4F8484:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[10].Spell`|[`4F8484:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-0cabfd3456c8)|
|`Effects[10].EntryPoint`|ApplyCombatHitSpell|
|`Effects[10].PerkConditionTabCount`|3|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|160|
|`Effects[10].Conditions`|[list: 3 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointSelectSpell] Spell=4F8488:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[11].Spell`|[`4F8488:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-b9472c357b69)|
|`Effects[11].EntryPoint`|ApplyCombatHitSpell|
|`Effects[11].PerkConditionTabCount`|3|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|159|
|`Effects[11].Conditions`|[list: 3 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Effects[12]`|[PerkEntryPointSelectSpell] Spell=525E3A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[12].Spell`|[`525E3A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-399855cd401c)|
|`Effects[12].EntryPoint`|ApplyCombatHitSpell|
|`Effects[12].PerkConditionTabCount`|3|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|158|
|`Effects[12].Conditions`|[list: 3 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|0|
|`Effects[12].Flags.FragmentIndex`|0|
|`Effects[13]`|[PerkEntryPointSelectSpell] Spell=525E3C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[13].Spell`|[`525E3C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-880f1957edbf)|
|`Effects[13].EntryPoint`|ApplyCombatHitSpell|
|`Effects[13].PerkConditionTabCount`|3|
|`Effects[13].Rank`|0|
|`Effects[13].Priority`|157|
|`Effects[13].Conditions`|[list: 3 item(s)]|
|`Effects[13].Flags`|[PerkScriptFlag]|
|`Effects[13].Flags.Flags`|0|
|`Effects[13].Flags.FragmentIndex`|0|
|`Effects[14]`|[PerkEntryPointModifyValue]|
|`Effects[14].Modification`|Add|
|`Effects[14].Value`|100|
|`Effects[14].EntryPoint`|CalculateMyCriticalHitChance|
|`Effects[14].PerkConditionTabCount`|3|
|`Effects[14].Rank`|0|
|`Effects[14].Priority`|100|
|`Effects[14].Conditions`|[list: 3 item(s)]|
|`Effects[14].Flags`|[PerkScriptFlag]|
|`Effects[14].Flags.Flags`|0|
|`Effects[14].Flags.FragmentIndex`|0|
|`Effects[15]`|[PerkEntryPointModifyValue]|
|`Effects[15].Modification`|Multiply|
|`Effects[15].Value`|10|
|`Effects[15].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[15].PerkConditionTabCount`|3|
|`Effects[15].Rank`|0|
|`Effects[15].Priority`|99|
|`Effects[15].Conditions`|[list: 3 item(s)]|
|`Effects[15].Flags`|[PerkScriptFlag]|
|`Effects[15].Flags.Flags`|0|
|`Effects[15].Flags.FragmentIndex`|0|
|`Name`|Execute|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-db5412e5d266"></a>

## VKR_One_070_AdvancedWarAxe_Perk_WasHackAndSlash3

- Identidade estável Housecarl: `0C3679:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 7.
- Nome: Shieldbiter; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=6; Rank=0; Priority=99; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitChance; Modification=Add; Value=100; Rank=0; Priority=100; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.15; Rank=0; Priority=149; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.15; Rank=0; Priority=150; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E48:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-6ca438de6acd); Rank=0; Priority=157; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E46:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-af6a064ff817); Rank=0; Priority=158; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8490:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-ecd3840c66af); Rank=0; Priority=159; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[7] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F848C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-6a72132d80e3); Rank=0; Priority=160; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[8] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E44:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-79bb74f55891); Rank=0; Priority=162; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[9] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E42:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-86854a181aef); Rank=0; Priority=163; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[10] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F848E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-072562e35c75); Rank=0; Priority=164; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[11] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F848A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-a9000522dc11); Rank=0; Priority=165; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[12] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E40:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-329b11961ea9); Rank=0; Priority=167; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[13] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E3E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-454d834ccd06); Rank=0; Priority=168; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[14] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E90FE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-675c9a4a56f8); Rank=0; Priority=169; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[15] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E90FC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-5442f9c6a067); Rank=0; Priority=170; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[16] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E1C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-a26f49399e9e); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[17] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`525E1A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-840810ba2cd3); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03FFFA:Skyrim.esm`](../perks/PERKS_044.md#r-7a8202fd1d10)<br>Parameter1.Link=[`03FFFA:Skyrim.esm`](../perks/PERKS_044.md#r-7a8202fd1d10)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`233317:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-c7ac05da6e58)<br>Parameter1.Link=[`233317:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-c7ac05da6e58)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`233317:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-c7ac05da6e58)<br>Parameter1.Link=[`233317:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-c7ac05da6e58)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03FFFA:Skyrim.esm`](../perks/PERKS_044.md#r-7a8202fd1d10)<br>Parameter1.Link=[`03FFFA:Skyrim.esm`](../perks/PERKS_044.md#r-7a8202fd1d10)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)<br>Parameter1.Link=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)<br>Parameter1.Link=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[2]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03FFFA:Skyrim.esm`](../perks/PERKS_044.md#r-7a8202fd1d10)<br>Parameter1.Link=[`03FFFA:Skyrim.esm`](../perks/PERKS_044.md#r-7a8202fd1d10)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)<br>Parameter1.Link=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)<br>Parameter1.Link=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[2]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[8].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[10].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[14].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)<br>Parameter1.Link=[`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-23906c3e8f79)|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)<br>Parameter1.Link=[`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9b51dbe57adc)|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03FFFA:Skyrim.esm`](../perks/PERKS_044.md#r-7a8202fd1d10)<br>Parameter1.Link=[`03FFFA:Skyrim.esm`](../perks/PERKS_044.md#r-7a8202fd1d10)|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[16].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[16].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[17].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)<br>Parameter1.Link=[`03AFA6:Skyrim.esm`](../perks/PERKS_055.md#r-11685b8770e2)|aliases=False; package=False|
|`Effects[17].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03FFFA:Skyrim.esm`](../perks/PERKS_044.md#r-7a8202fd1d10)<br>Parameter1.Link=[`03FFFA:Skyrim.esm`](../perks/PERKS_044.md#r-7a8202fd1d10)|aliases=False; package=False|
|`Effects[17].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)<br>Parameter1.Link=[`0C3678:Skyrim.esm`](../perks/PERKS_044.md#r-7ba378fc7bb7)|aliases=False; package=False|
|`Effects[17].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm<br>Parameter1.Link=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[17].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 18 item(s)]|
|`Conditions`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|6|
|`Effects[0].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|99|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Add|
|`Effects[1].Value`|100|
|`Effects[1].EntryPoint`|CalculateMyCriticalHitChance|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|100|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|1.15|
|`Effects[2].EntryPoint`|ModAttackDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|149|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|1.15|
|`Effects[3].EntryPoint`|ModAttackDamage|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|150|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=525E48:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`525E48:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-6ca438de6acd)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|157|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=525E46:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`525E46:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-af6a064ff817)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|158|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointSelectSpell] Spell=4F8490:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[6].Spell`|[`4F8490:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-ecd3840c66af)|
|`Effects[6].EntryPoint`|ApplyCombatHitSpell|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|159|
|`Effects[6].Conditions`|[list: 3 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointSelectSpell] Spell=4F848C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[7].Spell`|[`4F848C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-6a72132d80e3)|
|`Effects[7].EntryPoint`|ApplyCombatHitSpell|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|160|
|`Effects[7].Conditions`|[list: 3 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointSelectSpell] Spell=525E44:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[8].Spell`|[`525E44:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-79bb74f55891)|
|`Effects[8].EntryPoint`|ApplyCombatHitSpell|
|`Effects[8].PerkConditionTabCount`|3|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|162|
|`Effects[8].Conditions`|[list: 3 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointSelectSpell] Spell=525E42:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[9].Spell`|[`525E42:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-86854a181aef)|
|`Effects[9].EntryPoint`|ApplyCombatHitSpell|
|`Effects[9].PerkConditionTabCount`|3|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|163|
|`Effects[9].Conditions`|[list: 3 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointSelectSpell] Spell=4F848E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[10].Spell`|[`4F848E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-072562e35c75)|
|`Effects[10].EntryPoint`|ApplyCombatHitSpell|
|`Effects[10].PerkConditionTabCount`|3|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|164|
|`Effects[10].Conditions`|[list: 3 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointSelectSpell] Spell=4F848A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[11].Spell`|[`4F848A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-a9000522dc11)|
|`Effects[11].EntryPoint`|ApplyCombatHitSpell|
|`Effects[11].PerkConditionTabCount`|3|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|165|
|`Effects[11].Conditions`|[list: 3 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Effects[12]`|[PerkEntryPointSelectSpell] Spell=525E40:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[12].Spell`|[`525E40:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-329b11961ea9)|
|`Effects[12].EntryPoint`|ApplyCombatHitSpell|
|`Effects[12].PerkConditionTabCount`|3|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|167|
|`Effects[12].Conditions`|[list: 3 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|0|
|`Effects[12].Flags.FragmentIndex`|0|
|`Effects[13]`|[PerkEntryPointSelectSpell] Spell=525E3E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[13].Spell`|[`525E3E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-454d834ccd06)|
|`Effects[13].EntryPoint`|ApplyCombatHitSpell|
|`Effects[13].PerkConditionTabCount`|3|
|`Effects[13].Rank`|0|
|`Effects[13].Priority`|168|
|`Effects[13].Conditions`|[list: 3 item(s)]|
|`Effects[13].Flags`|[PerkScriptFlag]|
|`Effects[13].Flags.Flags`|0|
|`Effects[13].Flags.FragmentIndex`|0|
|`Effects[14]`|[PerkEntryPointSelectSpell] Spell=4E90FE:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[14].Spell`|[`4E90FE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-675c9a4a56f8)|
|`Effects[14].EntryPoint`|ApplyCombatHitSpell|
|`Effects[14].PerkConditionTabCount`|3|
|`Effects[14].Rank`|0|
|`Effects[14].Priority`|169|
|`Effects[14].Conditions`|[list: 3 item(s)]|
|`Effects[14].Flags`|[PerkScriptFlag]|
|`Effects[14].Flags.Flags`|0|
|`Effects[14].Flags.FragmentIndex`|0|
|`Effects[15]`|[PerkEntryPointSelectSpell] Spell=4E90FC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[15].Spell`|[`4E90FC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-5442f9c6a067)|
|`Effects[15].EntryPoint`|ApplyCombatHitSpell|
|`Effects[15].PerkConditionTabCount`|3|
|`Effects[15].Rank`|0|
|`Effects[15].Priority`|170|
|`Effects[15].Conditions`|[list: 3 item(s)]|
|`Effects[15].Flags`|[PerkScriptFlag]|
|`Effects[15].Flags.Flags`|0|
|`Effects[15].Flags.FragmentIndex`|0|
|`Effects[16]`|[PerkEntryPointSelectSpell] Spell=525E1C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[16].Spell`|[`525E1C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-a26f49399e9e)|
|`Effects[16].EntryPoint`|ApplyCombatHitSpell|
|`Effects[16].PerkConditionTabCount`|3|
|`Effects[16].Rank`|0|
|`Effects[16].Priority`|189|
|`Effects[16].Conditions`|[list: 3 item(s)]|
|`Effects[16].Flags`|[PerkScriptFlag]|
|`Effects[16].Flags.Flags`|0|
|`Effects[16].Flags.FragmentIndex`|0|
|`Effects[17]`|[PerkEntryPointSelectSpell] Spell=525E1A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[17].Spell`|[`525E1A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_060.md#r-840810ba2cd3)|
|`Effects[17].EntryPoint`|ApplyCombatHitSpell|
|`Effects[17].PerkConditionTabCount`|3|
|`Effects[17].Rank`|0|
|`Effects[17].Priority`|190|
|`Effects[17].Conditions`|[list: 3 item(s)]|
|`Effects[17].Flags`|[PerkScriptFlag]|
|`Effects[17].Flags.Flags`|0|
|`Effects[17].Flags.FragmentIndex`|0|
|`Name`|Shieldbiter|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2be7772f707a"></a>

## VKR_Two_030_BasicBattleaxe1_Perk_WasLimbsplitter1

- Identidade estável Housecarl: `0C5C05:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 8.
- Nome: Mortal Wounds; ranks declarados: 1; NextPerk: [`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`42391A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-a0c97fc3e59d); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E9100:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-c548e39c351b); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F332E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-804f5af5625d); Rank=0; Priority=185; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3332:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-ca72ace1e0bf); Rank=0; Priority=184; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3330:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-223a92a6b057); Rank=0; Priority=180; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3334:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-2bbc2f100d4e); Rank=0; Priority=179; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.15; Rank=0; Priority=150; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.15; Rank=0; Priority=149; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=TwoHanded<br>Parameter1=TwoHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BABE8:Skyrim.esm`](../perks/PERKS_059.md#r-7135540a6e7e)<br>Parameter1.Link=[`0BABE8:Skyrim.esm`](../perks/PERKS_059.md#r-7135540a6e7e)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C5C07:Skyrim.esm`](../perks/PERKS_044.md#r-4f893631ca29)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C5C07:Skyrim.esm`](../perks/PERKS_044.md#r-4f893631ca29)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[7]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[2]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[2]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 8 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=42391A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`42391A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-a0c97fc3e59d)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=4E9100:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`4E9100:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-c548e39c351b)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=4F332E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`4F332E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-804f5af5625d)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|185|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=4F3332:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`4F3332:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-ca72ace1e0bf)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|184|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=4F3330:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`4F3330:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-223a92a6b057)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|180|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=4F3334:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`4F3334:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-2bbc2f100d4e)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|179|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Multiply|
|`Effects[6].Value`|1.15|
|`Effects[6].EntryPoint`|ModAttackDamage|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|150|
|`Effects[6].Conditions`|[list: 2 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyValue]|
|`Effects[7].Modification`|Multiply|
|`Effects[7].Value`|1.15|
|`Effects[7].EntryPoint`|ModAttackDamage|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|149|
|`Effects[7].Conditions`|[list: 2 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Name`|Mortal Wounds|
|`NextPerk`|[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7947bd0ff676"></a>

## VKR_Two_030_BasicBattleaxe2_Perk_WasLimbsplitter2

- Identidade estável Housecarl: `0C5C06:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 8.
- Nome: Mortal Wounds; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBF4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-6241b5ee3989); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBF6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-974a21b89ef2); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBF8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-f407a6e7bfb5); Rank=0; Priority=185; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBFA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-9c0407eb25f6); Rank=0; Priority=184; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBFC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-c527413cdea3); Rank=0; Priority=180; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBFE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-2c6a4170e986); Rank=0; Priority=179; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.2; Rank=0; Priority=150; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.2; Rank=0; Priority=149; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=TwoHanded<br>Parameter1=TwoHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C5C05:Skyrim.esm`](../perks/PERKS_044.md#r-2be7772f707a)<br>Parameter1.Link=[`0C5C05:Skyrim.esm`](../perks/PERKS_044.md#r-2be7772f707a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C5C07:Skyrim.esm`](../perks/PERKS_044.md#r-4f893631ca29)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C5C07:Skyrim.esm`](../perks/PERKS_044.md#r-4f893631ca29)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[2]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[2]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 8 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=51BBF4:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`51BBF4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-6241b5ee3989)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=51BBF6:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`51BBF6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-974a21b89ef2)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=51BBF8:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`51BBF8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-f407a6e7bfb5)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|185|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=51BBFA:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`51BBFA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-9c0407eb25f6)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|184|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=51BBFC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`51BBFC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-c527413cdea3)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|180|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=51BBFE:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`51BBFE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-2c6a4170e986)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|179|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Multiply|
|`Effects[6].Value`|1.2|
|`Effects[6].EntryPoint`|ModAttackDamage|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|150|
|`Effects[6].Conditions`|[list: 2 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyValue]|
|`Effects[7].Modification`|Multiply|
|`Effects[7].Value`|1.2|
|`Effects[7].EntryPoint`|ModAttackDamage|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|149|
|`Effects[7].Conditions`|[list: 2 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Name`|Mortal Wounds|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-78c21eec94d2"></a>

## VKR_Two_030_BasicGreatsword1_Perk_WasBladesman1

- Identidade estável Housecarl: `03AF83:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 5.
- Nome: Overbearing Assault; ranks declarados: 1; NextPerk: [`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E9121:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-18a22acb5e16); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E9123:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-4ce8dcc5a1c0); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3336:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-c62bf69ddac4); Rank=0; Priority=185; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F333A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-a3874c4bcb49); Rank=0; Priority=184; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3338:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-335d334ebddb); Rank=0; Priority=180; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F333C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-2cd5d5313cae); Rank=0; Priority=179; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=TwoHanded<br>Parameter1=TwoHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BABE8:Skyrim.esm`](../perks/PERKS_059.md#r-7135540a6e7e)<br>Parameter1.Link=[`0BABE8:Skyrim.esm`](../perks/PERKS_059.md#r-7135540a6e7e)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E95:Skyrim.esm`](../perks/PERKS_044.md#r-747eb81f3a41)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E95:Skyrim.esm`](../perks/PERKS_044.md#r-747eb81f3a41)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[7]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 6 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=4E9121:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`4E9121:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-18a22acb5e16)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=4E9123:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`4E9123:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-4ce8dcc5a1c0)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=4F3336:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`4F3336:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-c62bf69ddac4)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|185|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=4F333A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`4F333A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-a3874c4bcb49)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|184|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=4F3338:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`4F3338:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-335d334ebddb)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|180|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=4F333C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`4F333C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-2cd5d5313cae)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|179|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Name`|Overbearing Assault|
|`NextPerk`|[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a13403527975"></a>

## VKR_Two_030_BasicGreatsword2_Perk_WasBladesman2

- Identidade estável Housecarl: `0C1E94:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 5.
- Nome: Overbearing Assault; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBB8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-6a1f8e67f6ad); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBBA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-abfa545d9721); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBBC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-66dc26874cb8); Rank=0; Priority=185; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBBE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-70ced0d5f7e9); Rank=0; Priority=184; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-b5ee07e42c79); Rank=0; Priority=180; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBC2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-7458a8a1fec3); Rank=0; Priority=179; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=TwoHanded<br>Parameter1=TwoHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF83:Skyrim.esm`](../perks/PERKS_044.md#r-78c21eec94d2)<br>Parameter1.Link=[`03AF83:Skyrim.esm`](../perks/PERKS_044.md#r-78c21eec94d2)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E95:Skyrim.esm`](../perks/PERKS_044.md#r-747eb81f3a41)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E95:Skyrim.esm`](../perks/PERKS_044.md#r-747eb81f3a41)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 6 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=51BBB8:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`51BBB8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-6a1f8e67f6ad)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=51BBBA:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`51BBBA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-abfa545d9721)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=51BBBC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`51BBBC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-66dc26874cb8)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|185|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=51BBBE:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`51BBBE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-70ced0d5f7e9)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|184|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=51BBC0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`51BBC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-b5ee07e42c79)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|180|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=51BBC2:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`51BBC2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-7458a8a1fec3)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|179|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Name`|Overbearing Assault|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-55231644c77c"></a>

## VKR_Two_030_BasicWarhammer1_Perk_WasSkullcrusher1

- Identidade estável Housecarl: `03AF84:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 4.
- Nome: Crushing Blows; ranks declarados: 1; NextPerk: [`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E9118:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-6488a88970cb); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E911A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-d1dd8f8f0931); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F333E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-78938376b158); Rank=0; Priority=185; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3342:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-dd9aa2866b7a); Rank=0; Priority=184; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3340:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-adf12dca581c); Rank=0; Priority=180; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F3344:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-0946d39129cc); Rank=0; Priority=179; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModTargetDamageResistance; Modification=Add; Value=-0.18; Rank=0; Priority=20; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=TwoHanded<br>Parameter1=TwoHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BABE8:Skyrim.esm`](../perks/PERKS_059.md#r-7135540a6e7e)<br>Parameter1.Link=[`0BABE8:Skyrim.esm`](../perks/PERKS_059.md#r-7135540a6e7e)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E97:Skyrim.esm`](../perks/PERKS_044.md#r-c71dad8ae22b)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E97:Skyrim.esm`](../perks/PERKS_044.md#r-c71dad8ae22b)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[7]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 7 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=4E9118:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`4E9118:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-6488a88970cb)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=4E911A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`4E911A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-d1dd8f8f0931)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=4F333E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`4F333E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-78938376b158)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|185|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=4F3342:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`4F3342:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-dd9aa2866b7a)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|184|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=4F3340:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`4F3340:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-adf12dca581c)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|180|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=4F3344:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`4F3344:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-0946d39129cc)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|179|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Add|
|`Effects[6].Value`|-0.18|
|`Effects[6].EntryPoint`|ModTargetDamageResistance|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|20|
|`Effects[6].Conditions`|[list: 2 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Name`|Crushing Blows|
|`NextPerk`|[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0b1dbf7ddd3d"></a>

## VKR_Two_030_BasicWarhammer2_Perk_WasSkullcrusher2

- Identidade estável Housecarl: `0C1E96:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 4.
- Nome: Crushing Blows; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBDC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-9420fcfa750f); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBDE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-a60703ccee15); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBE0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-4ae93ce4302c); Rank=0; Priority=185; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-1cc47535aad4); Rank=0; Priority=184; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBE4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-e7078206b7dd); Rank=0; Priority=180; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-482f0697d106); Rank=0; Priority=179; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModTargetDamageResistance; Modification=Add; Value=-0.24; Rank=0; Priority=20; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=TwoHanded<br>Parameter1=TwoHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF84:Skyrim.esm`](../perks/PERKS_044.md#r-55231644c77c)<br>Parameter1.Link=[`03AF84:Skyrim.esm`](../perks/PERKS_044.md#r-55231644c77c)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E97:Skyrim.esm`](../perks/PERKS_044.md#r-c71dad8ae22b)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`0C1E97:Skyrim.esm`](../perks/PERKS_044.md#r-c71dad8ae22b)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 7 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=51BBDC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`51BBDC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-9420fcfa750f)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=51BBDE:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`51BBDE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-a60703ccee15)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=51BBE0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`51BBE0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-4ae93ce4302c)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|185|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=51BBE2:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`51BBE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-1cc47535aad4)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|184|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=51BBE4:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`51BBE4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-e7078206b7dd)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|180|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=51BBE6:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`51BBE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-482f0697d106)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|179|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Add|
|`Effects[6].Value`|-0.24|
|`Effects[6].EntryPoint`|ModTargetDamageResistance|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|20|
|`Effects[6].Conditions`|[list: 1 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Name`|Crushing Blows|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-4f893631ca29"></a>

## VKR_Two_070_AdvancedBattleaxe_Perk_WasLimbsplitter3

- Identidade estável Housecarl: `0C5C07:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 8.
- Nome: Hook Blade; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBF4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-6241b5ee3989); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBF6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-974a21b89ef2); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E9102:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-a9cbdd95fbc5); Rank=0; Priority=170; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E9104:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-64664cef8ce8); Rank=0; Priority=169; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBE8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-10f39af4548b); Rank=0; Priority=168; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBEA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-e1ca043fccac); Rank=0; Priority=167; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8462:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-b89f916bacdc); Rank=0; Priority=165; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[7] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8466:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-dc30503c7b67); Rank=0; Priority=164; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[8] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBEC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-084146557b88); Rank=0; Priority=163; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[9] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBEE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-d0d5f3e0dd26); Rank=0; Priority=162; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[10] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8464:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-47469cf83f60); Rank=0; Priority=160; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[11] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8468:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-c4a4d17bdb81); Rank=0; Priority=159; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[12] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBF0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-92f256c3d34c); Rank=0; Priority=158; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[13] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBF2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-ea617b50edfd); Rank=0; Priority=157; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[14] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.2; Rank=0; Priority=150; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[15] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.2; Rank=0; Priority=149; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[16] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitChance; Modification=Add; Value=100; Rank=0; Priority=100; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[17] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=3; Rank=0; Priority=99; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=TwoHanded<br>Parameter1=TwoHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C5C05:Skyrim.esm`](../perks/PERKS_044.md#r-2be7772f707a)<br>Parameter1.Link=[`0C5C05:Skyrim.esm`](../perks/PERKS_044.md#r-2be7772f707a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C05:Skyrim.esm`](../perks/PERKS_044.md#r-2be7772f707a)<br>Parameter1.Link=[`0C5C05:Skyrim.esm`](../perks/PERKS_044.md#r-2be7772f707a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C05:Skyrim.esm`](../perks/PERKS_044.md#r-2be7772f707a)<br>Parameter1.Link=[`0C5C05:Skyrim.esm`](../perks/PERKS_044.md#r-2be7772f707a)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[8].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[10].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[0]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C05:Skyrim.esm`](../perks/PERKS_044.md#r-2be7772f707a)<br>Parameter1.Link=[`0C5C05:Skyrim.esm`](../perks/PERKS_044.md#r-2be7772f707a)|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)<br>Parameter1.Link=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)<br>Parameter1.Link=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[2]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[0]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C05:Skyrim.esm`](../perks/PERKS_044.md#r-2be7772f707a)<br>Parameter1.Link=[`0C5C05:Skyrim.esm`](../perks/PERKS_044.md#r-2be7772f707a)|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)<br>Parameter1.Link=[`0C5C06:Skyrim.esm`](../perks/PERKS_044.md#r-7947bd0ff676)|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)<br>Parameter1.Link=[`349CE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-076bfdca926f)|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)<br>Parameter1.Link=[`349CE6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_027.md#r-7c2f06fb91f5)|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[2]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[16].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[16].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[16].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`23331C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-fc90f8934b58)<br>Parameter1.Link=[`23331C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-fc90f8934b58)|aliases=False; package=False|
|`Effects[17].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[17].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D932:Skyrim.esm<br>Parameter1.Link=06D932:Skyrim.esm|aliases=False; package=False|
|`Effects[17].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`23331C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-fc90f8934b58)<br>Parameter1.Link=[`23331C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_022.md#r-fc90f8934b58)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 18 item(s)]|
|`Conditions`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=51BBF4:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`51BBF4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-6241b5ee3989)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=51BBF6:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`51BBF6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-974a21b89ef2)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=4E9102:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`4E9102:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-a9cbdd95fbc5)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|170|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=4E9104:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`4E9104:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-64664cef8ce8)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|169|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=51BBE8:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`51BBE8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-10f39af4548b)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|168|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=51BBEA:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`51BBEA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-e1ca043fccac)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|167|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointSelectSpell] Spell=4F8462:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[6].Spell`|[`4F8462:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-b89f916bacdc)|
|`Effects[6].EntryPoint`|ApplyCombatHitSpell|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|165|
|`Effects[6].Conditions`|[list: 3 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointSelectSpell] Spell=4F8466:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[7].Spell`|[`4F8466:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-dc30503c7b67)|
|`Effects[7].EntryPoint`|ApplyCombatHitSpell|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|164|
|`Effects[7].Conditions`|[list: 3 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointSelectSpell] Spell=51BBEC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[8].Spell`|[`51BBEC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-084146557b88)|
|`Effects[8].EntryPoint`|ApplyCombatHitSpell|
|`Effects[8].PerkConditionTabCount`|3|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|163|
|`Effects[8].Conditions`|[list: 3 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointSelectSpell] Spell=51BBEE:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[9].Spell`|[`51BBEE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-d0d5f3e0dd26)|
|`Effects[9].EntryPoint`|ApplyCombatHitSpell|
|`Effects[9].PerkConditionTabCount`|3|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|162|
|`Effects[9].Conditions`|[list: 3 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointSelectSpell] Spell=4F8464:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[10].Spell`|[`4F8464:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-47469cf83f60)|
|`Effects[10].EntryPoint`|ApplyCombatHitSpell|
|`Effects[10].PerkConditionTabCount`|3|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|160|
|`Effects[10].Conditions`|[list: 3 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointSelectSpell] Spell=4F8468:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[11].Spell`|[`4F8468:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-c4a4d17bdb81)|
|`Effects[11].EntryPoint`|ApplyCombatHitSpell|
|`Effects[11].PerkConditionTabCount`|3|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|159|
|`Effects[11].Conditions`|[list: 3 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Effects[12]`|[PerkEntryPointSelectSpell] Spell=51BBF0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[12].Spell`|[`51BBF0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-92f256c3d34c)|
|`Effects[12].EntryPoint`|ApplyCombatHitSpell|
|`Effects[12].PerkConditionTabCount`|3|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|158|
|`Effects[12].Conditions`|[list: 3 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|0|
|`Effects[12].Flags.FragmentIndex`|0|
|`Effects[13]`|[PerkEntryPointSelectSpell] Spell=51BBF2:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[13].Spell`|[`51BBF2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_059.md#r-ea617b50edfd)|
|`Effects[13].EntryPoint`|ApplyCombatHitSpell|
|`Effects[13].PerkConditionTabCount`|3|
|`Effects[13].Rank`|0|
|`Effects[13].Priority`|157|
|`Effects[13].Conditions`|[list: 3 item(s)]|
|`Effects[13].Flags`|[PerkScriptFlag]|
|`Effects[13].Flags.Flags`|0|
|`Effects[13].Flags.FragmentIndex`|0|
|`Effects[14]`|[PerkEntryPointModifyValue]|
|`Effects[14].Modification`|Multiply|
|`Effects[14].Value`|1.2|
|`Effects[14].EntryPoint`|ModAttackDamage|
|`Effects[14].PerkConditionTabCount`|3|
|`Effects[14].Rank`|0|
|`Effects[14].Priority`|150|
|`Effects[14].Conditions`|[list: 2 item(s)]|
|`Effects[14].Flags`|[PerkScriptFlag]|
|`Effects[14].Flags.Flags`|0|
|`Effects[14].Flags.FragmentIndex`|0|
|`Effects[15]`|[PerkEntryPointModifyValue]|
|`Effects[15].Modification`|Multiply|
|`Effects[15].Value`|1.2|
|`Effects[15].EntryPoint`|ModAttackDamage|
|`Effects[15].PerkConditionTabCount`|3|
|`Effects[15].Rank`|0|
|`Effects[15].Priority`|149|
|`Effects[15].Conditions`|[list: 2 item(s)]|
|`Effects[15].Flags`|[PerkScriptFlag]|
|`Effects[15].Flags.Flags`|0|
|`Effects[15].Flags.FragmentIndex`|0|
|`Effects[16]`|[PerkEntryPointModifyValue]|
|`Effects[16].Modification`|Add|
|`Effects[16].Value`|100|
|`Effects[16].EntryPoint`|CalculateMyCriticalHitChance|
|`Effects[16].PerkConditionTabCount`|3|
|`Effects[16].Rank`|0|
|`Effects[16].Priority`|100|
|`Effects[16].Conditions`|[list: 3 item(s)]|
|`Effects[16].Flags`|[PerkScriptFlag]|
|`Effects[16].Flags.Flags`|0|
|`Effects[16].Flags.FragmentIndex`|0|
|`Effects[17]`|[PerkEntryPointModifyValue]|
|`Effects[17].Modification`|Multiply|
|`Effects[17].Value`|3|
|`Effects[17].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[17].PerkConditionTabCount`|3|
|`Effects[17].Rank`|0|
|`Effects[17].Priority`|99|
|`Effects[17].Conditions`|[list: 3 item(s)]|
|`Effects[17].Flags`|[PerkScriptFlag]|
|`Effects[17].Flags.Flags`|0|
|`Effects[17].Flags.FragmentIndex`|0|
|`Name`|Hook Blade|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-747eb81f3a41"></a>

## VKR_Two_070_AdvancedGreatsword_Perk_WasBladesman3

- Identidade estável Housecarl: `0C1E95:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 5.
- Nome: Coup de Grace; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBB8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-6a1f8e67f6ad); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBBA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-abfa545d9721); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E9108:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-660522a278db); Rank=0; Priority=170; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4E910A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-f527f63abfa3); Rank=0; Priority=169; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBC4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-e376fe95a23f); Rank=0; Priority=168; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBC6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-010d3f5fd3dc); Rank=0; Priority=167; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F846A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-bd74a010f1a3); Rank=0; Priority=165; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[7] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F846E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-c0b707992565); Rank=0; Priority=164; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[8] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBC8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-f86b6647fe29); Rank=0; Priority=163; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[9] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBCA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-d75049af54d2); Rank=0; Priority=162; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[10] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F846C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-77e3e1850a62); Rank=0; Priority=160; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[11] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8470:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-f9f8965be36e); Rank=0; Priority=159; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[12] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-ff40f7eacc8b); Rank=0; Priority=158; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[13] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-1fcd1335c145); Rank=0; Priority=157; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[14] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitChance; Modification=Add; Value=100; Rank=0; Priority=100; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[15] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=10; Rank=0; Priority=99; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=TwoHanded<br>Parameter1=TwoHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF83:Skyrim.esm`](../perks/PERKS_044.md#r-78c21eec94d2)<br>Parameter1.Link=[`03AF83:Skyrim.esm`](../perks/PERKS_044.md#r-78c21eec94d2)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AF83:Skyrim.esm`](../perks/PERKS_044.md#r-78c21eec94d2)<br>Parameter1.Link=[`03AF83:Skyrim.esm`](../perks/PERKS_044.md#r-78c21eec94d2)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)<br>Parameter1.Link=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)<br>Parameter1.Link=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AF83:Skyrim.esm`](../perks/PERKS_044.md#r-78c21eec94d2)<br>Parameter1.Link=[`03AF83:Skyrim.esm`](../perks/PERKS_044.md#r-78c21eec94d2)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)<br>Parameter1.Link=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)<br>Parameter1.Link=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)<br>Parameter1.Link=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)<br>Parameter1.Link=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)<br>Parameter1.Link=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)<br>Parameter1.Link=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)<br>Parameter1.Link=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[8].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)<br>Parameter1.Link=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)<br>Parameter1.Link=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[10].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)<br>Parameter1.Link=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)<br>Parameter1.Link=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)<br>Parameter1.Link=[`0C1E94:Skyrim.esm`](../perks/PERKS_044.md#r-a13403527975)|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[14].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`4CAAA1:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_032.md#r-f2fd744b1b6a)<br>Parameter1.Link=[`4CAAA1:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_032.md#r-f2fd744b1b6a)|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D931:Skyrim.esm<br>Parameter1.Link=06D931:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`4CAAA1:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_032.md#r-f2fd744b1b6a)<br>Parameter1.Link=[`4CAAA1:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_032.md#r-f2fd744b1b6a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 16 item(s)]|
|`Conditions`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=51BBB8:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`51BBB8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-6a1f8e67f6ad)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=51BBBA:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`51BBBA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-abfa545d9721)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=4E9108:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`4E9108:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-660522a278db)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|170|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=4E910A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`4E910A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-f527f63abfa3)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|169|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=51BBC4:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`51BBC4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-e376fe95a23f)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|168|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=51BBC6:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`51BBC6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-010d3f5fd3dc)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|167|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointSelectSpell] Spell=4F846A:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[6].Spell`|[`4F846A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_056.md#r-bd74a010f1a3)|
|`Effects[6].EntryPoint`|ApplyCombatHitSpell|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|165|
|`Effects[6].Conditions`|[list: 3 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointSelectSpell] Spell=4F846E:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[7].Spell`|[`4F846E:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-c0b707992565)|
|`Effects[7].EntryPoint`|ApplyCombatHitSpell|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|164|
|`Effects[7].Conditions`|[list: 3 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointSelectSpell] Spell=51BBC8:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[8].Spell`|[`51BBC8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-f86b6647fe29)|
|`Effects[8].EntryPoint`|ApplyCombatHitSpell|
|`Effects[8].PerkConditionTabCount`|3|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|163|
|`Effects[8].Conditions`|[list: 3 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointSelectSpell] Spell=51BBCA:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[9].Spell`|[`51BBCA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-d75049af54d2)|
|`Effects[9].EntryPoint`|ApplyCombatHitSpell|
|`Effects[9].PerkConditionTabCount`|3|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|162|
|`Effects[9].Conditions`|[list: 3 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointSelectSpell] Spell=4F846C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[10].Spell`|[`4F846C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-77e3e1850a62)|
|`Effects[10].EntryPoint`|ApplyCombatHitSpell|
|`Effects[10].PerkConditionTabCount`|3|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|160|
|`Effects[10].Conditions`|[list: 3 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointSelectSpell] Spell=4F8470:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[11].Spell`|[`4F8470:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-f9f8965be36e)|
|`Effects[11].EntryPoint`|ApplyCombatHitSpell|
|`Effects[11].PerkConditionTabCount`|3|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|159|
|`Effects[11].Conditions`|[list: 3 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Effects[12]`|[PerkEntryPointSelectSpell] Spell=51BBCC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[12].Spell`|[`51BBCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-ff40f7eacc8b)|
|`Effects[12].EntryPoint`|ApplyCombatHitSpell|
|`Effects[12].PerkConditionTabCount`|3|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|158|
|`Effects[12].Conditions`|[list: 3 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|0|
|`Effects[12].Flags.FragmentIndex`|0|
|`Effects[13]`|[PerkEntryPointSelectSpell] Spell=51BBCE:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[13].Spell`|[`51BBCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-1fcd1335c145)|
|`Effects[13].EntryPoint`|ApplyCombatHitSpell|
|`Effects[13].PerkConditionTabCount`|3|
|`Effects[13].Rank`|0|
|`Effects[13].Priority`|157|
|`Effects[13].Conditions`|[list: 3 item(s)]|
|`Effects[13].Flags`|[PerkScriptFlag]|
|`Effects[13].Flags.Flags`|0|
|`Effects[13].Flags.FragmentIndex`|0|
|`Effects[14]`|[PerkEntryPointModifyValue]|
|`Effects[14].Modification`|Add|
|`Effects[14].Value`|100|
|`Effects[14].EntryPoint`|CalculateMyCriticalHitChance|
|`Effects[14].PerkConditionTabCount`|3|
|`Effects[14].Rank`|0|
|`Effects[14].Priority`|100|
|`Effects[14].Conditions`|[list: 3 item(s)]|
|`Effects[14].Flags`|[PerkScriptFlag]|
|`Effects[14].Flags.Flags`|0|
|`Effects[14].Flags.FragmentIndex`|0|
|`Effects[15]`|[PerkEntryPointModifyValue]|
|`Effects[15].Modification`|Multiply|
|`Effects[15].Value`|10|
|`Effects[15].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[15].PerkConditionTabCount`|3|
|`Effects[15].Rank`|0|
|`Effects[15].Priority`|99|
|`Effects[15].Conditions`|[list: 3 item(s)]|
|`Effects[15].Flags`|[PerkScriptFlag]|
|`Effects[15].Flags.Flags`|0|
|`Effects[15].Flags.FragmentIndex`|0|
|`Name`|Coup de Grace|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-c71dad8ae22b"></a>

## VKR_Two_070_AdvancedWarhammer_Perk_WasSkullcrusher3

- Identidade estável Housecarl: `0C1E97:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Apply Spell Conditions Fix.esp`; profundidade de override: 4.
- Nome: Shattering Strike; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBDC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-9420fcfa750f); Rank=0; Priority=190; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBDE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-a60703ccee15); Rank=0; Priority=189; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[2] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4EE227:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-961e3474b9f6); Rank=0; Priority=170; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[3] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4EE229:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-6912a8cf86f8); Rank=0; Priority=169; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[4] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBD0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-bedc77ef142c); Rank=0; Priority=168; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[5] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBD2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-446aaec99456); Rank=0; Priority=167; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[6] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8472:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-a3260eafa517); Rank=0; Priority=165; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[7] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8476:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-5b4e45bd37ee); Rank=0; Priority=164; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[8] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBD4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-0979479256b2); Rank=0; Priority=163; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[9] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBD6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-4fc96b95208d); Rank=0; Priority=162; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[10] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8474:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-f648c50f1db3); Rank=0; Priority=160; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[11] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`4F8478:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-625195788dc4); Rank=0; Priority=159; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[12] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBD8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-fccf39b60dce); Rank=0; Priority=158; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[13] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`51BBDA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-354ced5c8bfc); Rank=0; Priority=157; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[14] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitChance; Modification=Add; Value=100; Rank=0; Priority=100; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[15] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=3; Rank=0; Priority=99; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=TwoHanded<br>Parameter1=TwoHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF84:Skyrim.esm`](../perks/PERKS_044.md#r-55231644c77c)<br>Parameter1.Link=[`03AF84:Skyrim.esm`](../perks/PERKS_044.md#r-55231644c77c)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AF84:Skyrim.esm`](../perks/PERKS_044.md#r-55231644c77c)<br>Parameter1.Link=[`03AF84:Skyrim.esm`](../perks/PERKS_044.md#r-55231644c77c)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)<br>Parameter1.Link=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`03AF84:Skyrim.esm`](../perks/PERKS_044.md#r-55231644c77c)<br>Parameter1.Link=[`03AF84:Skyrim.esm`](../perks/PERKS_044.md#r-55231644c77c)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)<br>Parameter1.Link=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)<br>Parameter1.Link=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)<br>Parameter1.Link=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)<br>Parameter1.Link=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[2]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)<br>Parameter1.Link=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[4]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|OR|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[6]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)<br>Parameter1.Link=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)<br>Parameter1.Link=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[8].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)<br>Parameter1.Link=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[8].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[8].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm<br>Parameter1.Link=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)<br>Parameter1.Link=[`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-9a95556bea89)|aliases=False; package=False|
|`Effects[9].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)<br>Parameter1.Link=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[9].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[9].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[10].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)<br>Parameter1.Link=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[10].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[10].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[11].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)<br>Parameter1.Link=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[11].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[11].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[12].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)<br>Parameter1.Link=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[12].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[12].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[1]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)<br>Parameter1.Link=[`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_059.md#r-86e3a4cf5171)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[2]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm<br>Parameter1.Link=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[3]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)<br>Parameter1.Link=[`03AF9E:Skyrim.esm`](../perks/PERKS_043.md#r-8acbece383e6)|aliases=False; package=False|
|`Effects[13].Conditions[0].Conditions[4]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)<br>Parameter1.Link=[`0C1E96:Skyrim.esm`](../perks/PERKS_044.md#r-0b1dbf7ddd3d)|aliases=False; package=False|
|`Effects[13].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[13].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)<br>Parameter1.Link=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|
|`Effects[14].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[14].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[14].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`4E3FF4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_032.md#r-7bbd2952a00c)<br>Parameter1.Link=[`4E3FF4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_032.md#r-7bbd2952a00c)|aliases=False; package=False|
|`Effects[15].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[15].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06D930:Skyrim.esm<br>Parameter1.Link=06D930:Skyrim.esm|aliases=False; package=False|
|`Effects[15].Conditions[2].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`4E3FF4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_032.md#r-7bbd2952a00c)<br>Parameter1.Link=[`4E3FF4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_032.md#r-7bbd2952a00c)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 16 item(s)]|
|`Conditions`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=51BBDC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`51BBDC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-9420fcfa750f)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=51BBDE:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`51BBDE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-a60703ccee15)|
|`Effects[1].EntryPoint`|ApplyCombatHitSpell|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointSelectSpell] Spell=4EE227:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[2].Spell`|[`4EE227:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-961e3474b9f6)|
|`Effects[2].EntryPoint`|ApplyCombatHitSpell|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|170|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointSelectSpell] Spell=4EE229:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[3].Spell`|[`4EE229:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_055.md#r-6912a8cf86f8)|
|`Effects[3].EntryPoint`|ApplyCombatHitSpell|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|169|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointSelectSpell] Spell=51BBD0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[4].Spell`|[`51BBD0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-bedc77ef142c)|
|`Effects[4].EntryPoint`|ApplyCombatHitSpell|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|168|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointSelectSpell] Spell=51BBD2:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[5].Spell`|[`51BBD2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-446aaec99456)|
|`Effects[5].EntryPoint`|ApplyCombatHitSpell|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|167|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointSelectSpell] Spell=4F8472:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[6].Spell`|[`4F8472:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-a3260eafa517)|
|`Effects[6].EntryPoint`|ApplyCombatHitSpell|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|165|
|`Effects[6].Conditions`|[list: 3 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointSelectSpell] Spell=4F8476:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[7].Spell`|[`4F8476:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-5b4e45bd37ee)|
|`Effects[7].EntryPoint`|ApplyCombatHitSpell|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|164|
|`Effects[7].Conditions`|[list: 3 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Effects[8]`|[PerkEntryPointSelectSpell] Spell=51BBD4:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[8].Spell`|[`51BBD4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-0979479256b2)|
|`Effects[8].EntryPoint`|ApplyCombatHitSpell|
|`Effects[8].PerkConditionTabCount`|3|
|`Effects[8].Rank`|0|
|`Effects[8].Priority`|163|
|`Effects[8].Conditions`|[list: 3 item(s)]|
|`Effects[8].Flags`|[PerkScriptFlag]|
|`Effects[8].Flags.Flags`|0|
|`Effects[8].Flags.FragmentIndex`|0|
|`Effects[9]`|[PerkEntryPointSelectSpell] Spell=51BBD6:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[9].Spell`|[`51BBD6:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-4fc96b95208d)|
|`Effects[9].EntryPoint`|ApplyCombatHitSpell|
|`Effects[9].PerkConditionTabCount`|3|
|`Effects[9].Rank`|0|
|`Effects[9].Priority`|162|
|`Effects[9].Conditions`|[list: 3 item(s)]|
|`Effects[9].Flags`|[PerkScriptFlag]|
|`Effects[9].Flags.Flags`|0|
|`Effects[9].Flags.FragmentIndex`|0|
|`Effects[10]`|[PerkEntryPointSelectSpell] Spell=4F8474:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[10].Spell`|[`4F8474:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-f648c50f1db3)|
|`Effects[10].EntryPoint`|ApplyCombatHitSpell|
|`Effects[10].PerkConditionTabCount`|3|
|`Effects[10].Rank`|0|
|`Effects[10].Priority`|160|
|`Effects[10].Conditions`|[list: 3 item(s)]|
|`Effects[10].Flags`|[PerkScriptFlag]|
|`Effects[10].Flags.Flags`|0|
|`Effects[10].Flags.FragmentIndex`|0|
|`Effects[11]`|[PerkEntryPointSelectSpell] Spell=4F8478:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[11].Spell`|[`4F8478:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_057.md#r-625195788dc4)|
|`Effects[11].EntryPoint`|ApplyCombatHitSpell|
|`Effects[11].PerkConditionTabCount`|3|
|`Effects[11].Rank`|0|
|`Effects[11].Priority`|159|
|`Effects[11].Conditions`|[list: 3 item(s)]|
|`Effects[11].Flags`|[PerkScriptFlag]|
|`Effects[11].Flags.Flags`|0|
|`Effects[11].Flags.FragmentIndex`|0|
|`Effects[12]`|[PerkEntryPointSelectSpell] Spell=51BBD8:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[12].Spell`|[`51BBD8:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-fccf39b60dce)|
|`Effects[12].EntryPoint`|ApplyCombatHitSpell|
|`Effects[12].PerkConditionTabCount`|3|
|`Effects[12].Rank`|0|
|`Effects[12].Priority`|158|
|`Effects[12].Conditions`|[list: 3 item(s)]|
|`Effects[12].Flags`|[PerkScriptFlag]|
|`Effects[12].Flags.Flags`|0|
|`Effects[12].Flags.FragmentIndex`|0|
|`Effects[13]`|[PerkEntryPointSelectSpell] Spell=51BBDA:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[13].Spell`|[`51BBDA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_058.md#r-354ced5c8bfc)|
|`Effects[13].EntryPoint`|ApplyCombatHitSpell|
|`Effects[13].PerkConditionTabCount`|3|
|`Effects[13].Rank`|0|
|`Effects[13].Priority`|157|
|`Effects[13].Conditions`|[list: 3 item(s)]|
|`Effects[13].Flags`|[PerkScriptFlag]|
|`Effects[13].Flags.Flags`|0|
|`Effects[13].Flags.FragmentIndex`|0|
|`Effects[14]`|[PerkEntryPointModifyValue]|
|`Effects[14].Modification`|Add|
|`Effects[14].Value`|100|
|`Effects[14].EntryPoint`|CalculateMyCriticalHitChance|
|`Effects[14].PerkConditionTabCount`|3|
|`Effects[14].Rank`|0|
|`Effects[14].Priority`|100|
|`Effects[14].Conditions`|[list: 3 item(s)]|
|`Effects[14].Flags`|[PerkScriptFlag]|
|`Effects[14].Flags.Flags`|0|
|`Effects[14].Flags.FragmentIndex`|0|
|`Effects[15]`|[PerkEntryPointModifyValue]|
|`Effects[15].Modification`|Multiply|
|`Effects[15].Value`|3|
|`Effects[15].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[15].PerkConditionTabCount`|3|
|`Effects[15].Rank`|0|
|`Effects[15].Priority`|99|
|`Effects[15].Conditions`|[list: 3 item(s)]|
|`Effects[15].Flags`|[PerkScriptFlag]|
|`Effects[15].Flags.Flags`|0|
|`Effects[15].Flags.FragmentIndex`|0|
|`Name`|Shattering Strike|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
