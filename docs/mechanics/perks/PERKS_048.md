# Perks instaladas — parte 048

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-e42af08431bf"></a>

## VKR_Arc_090_HuntersFocus_Perk_WasCriticalShot3

- Identidade estável Housecarl: `105F1F:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Hunter's Focus; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingStagger; Modification=Multiply; Value=0; Rank=0; Priority=190; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=Archery<br>Parameter1=Archery|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`051B12:Skyrim.esm`](../perks/PERKS_047.md#r-3b9912efed3d)<br>Parameter1.Link=[`051B12:Skyrim.esm`](../perks/PERKS_047.md#r-3b9912efed3d)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetAttackState|0|Subject; ref=(null link); index=-1|EqualTo 9|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetAttackState|0|Subject; ref=(null link); index=-1|EqualTo 10|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModIncomingStagger|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Hunter's Focus|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-8cad25771d32"></a>

## VKR_Arc_100_PinningShot_Perk

- Identidade estável Housecarl: `2EE993:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Pinning Shot; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`47EB7D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-0779b3266dcd); Rank=0; Priority=186; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|ActorValue=Archery<br>Parameter1=Archery|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-24f12cde8947)<br>Parameter1.Link=[`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-24f12cde8947)|aliases=False; package=False|
|`Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`2EE98B:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-74fb664a15a6)<br>Parameter1.Link=[`2EE98B:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-74fb664a15a6)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=47EB7D:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`47EB7D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_054.md#r-0779b3266dcd)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|186|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Pinning Shot|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-093d0d3d89d8"></a>

## VKR_Bck_000_BlockMastery_Perk_WasShieldWall1

- Identidade estável Housecarl: `0BCCAE:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Block Mastery; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModPercentBlocked; Modification=MultiplyOnePlusAVMult; ActorValue=Block; Value=0.005; Rank=0; Priority=200; PerkConditionTabCount=1. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079355:Skyrim.esm`](../perks/PERKS_048.md#r-69e1c30428fe)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Block|
|`Effects[0].Value`|0.005|
|`Effects[0].Modification`|MultiplyOnePlusAVMult|
|`Effects[0].EntryPoint`|ModPercentBlocked|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Block Mastery|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-f97bdb56a407"></a>

## VKR_Bck_020_PowerBash_Perk_WasPowerBash

- Identidade estável Housecarl: `058F67:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Power Bash; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BCCAE:Skyrim.esm`](../perks/PERKS_048.md#r-093d0d3d89d8)<br>Parameter1.Link=[`0BCCAE:Skyrim.esm`](../perks/PERKS_048.md#r-093d0d3d89d8)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Power Bash|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7d35aa697653"></a>

## VKR_Bck_020_UnwaveringDefense_Perk

- Identidade estável Housecarl: `2DF671:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Unwavering Defense; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`223FDB:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_047.md#r-d01f934ed8d9); Rank=0; Priority=150. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BCCAE:Skyrim.esm`](../perks/PERKS_048.md#r-093d0d3d89d8)<br>Parameter1.Link=[`0BCCAE:Skyrim.esm`](../perks/PERKS_048.md#r-093d0d3d89d8)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=223FDB:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`223FDB:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_047.md#r-d01f934ed8d9)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|150|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Unwavering Defense|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-3782237bd6a1"></a>

## VKR_Bck_030_DeflectArrows_Perk_WasDeflectArrows

- Identidade estável Housecarl: `058F68:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Deflect Arrows; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=191; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModShieldDefectArrowChance; Modification=Set; Value=100; Rank=0; Priority=190; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BCCAE:Skyrim.esm`](../perks/PERKS_048.md#r-093d0d3d89d8)<br>Parameter1.Link=[`0BCCAE:Skyrim.esm`](../perks/PERKS_048.md#r-093d0d3d89d8)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsAttackType|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=000F54:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E715:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0965B2:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModIncomingDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|191|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Set|
|`Effects[1].Value`|100|
|`Effects[1].EntryPoint`|ModShieldDefectArrowChance|
|`Effects[1].PerkConditionTabCount`|1|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|190|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Deflect Arrows|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2f4c41620f91"></a>

## VKR_Bck_030_WeaponBlock_Perk

- Identidade estável Housecarl: `2DF675:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Weapon Block; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModPercentBlocked; Modification=Multiply; Value=1.25; Rank=0; Priority=239; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BCCAE:Skyrim.esm`](../perks/PERKS_048.md#r-093d0d3d89d8)<br>Parameter1.Link=[`0BCCAE:Skyrim.esm`](../perks/PERKS_048.md#r-093d0d3d89d8)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0965B2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.25|
|`Effects[0].EntryPoint`|ModPercentBlocked|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|239|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Weapon Block|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-102c473a28dd"></a>

## VKR_Bck_040_QuickReflexes_Perk_WasQuickReflexes

- Identidade estável Housecarl: `0D8C33:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Quick Reflexes; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyWeaponSwingSpell; Spell=[`0D8C31:Skyrim.esm`](../magic/MAGIC_044.md#r-70ef31db60df); Rank=0; Priority=200; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BCCAE:Skyrim.esm`](../perks/PERKS_048.md#r-093d0d3d89d8)<br>Parameter1.Link=[`0BCCAE:Skyrim.esm`](../perks/PERKS_048.md#r-093d0d3d89d8)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsPowerAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=0D8C31:Skyrim.esm|
|`Effects[0].Spell`|[`0D8C31:Skyrim.esm`](../magic/MAGIC_044.md#r-70ef31db60df)|
|`Effects[0].EntryPoint`|ApplyWeaponSwingSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Quick Reflexes|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-9e812f99e188"></a>

## VKR_Bck_040_TorchBash_Perk

- Identidade estável Housecarl: `223FE6:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Torch Bash; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058F67:Skyrim.esm`](../perks/PERKS_048.md#r-f97bdb56a407)<br>Parameter1.Link=[`058F67:Skyrim.esm`](../perks/PERKS_048.md#r-f97bdb56a407)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Torch Bash|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b08049325512"></a>

## VKR_Bck_050_DeadlyBash1_Perk_WasDeadlyBash

- Identidade estável Housecarl: `05F594:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Deadly Bash; ranks declarados: 1; NextPerk: [`223FE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_048.md#r-cdbc6b76e928).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModBashingDamage; Modification=Multiply; Value=5; Rank=0; Priority=180; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058F67:Skyrim.esm`](../perks/PERKS_048.md#r-f97bdb56a407)<br>Parameter1.Link=[`058F67:Skyrim.esm`](../perks/PERKS_048.md#r-f97bdb56a407)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`223FE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_048.md#r-cdbc6b76e928)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|5|
|`Effects[0].EntryPoint`|ModBashingDamage|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|180|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Deadly Bash|
|`NextPerk`|[`223FE2:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_048.md#r-cdbc6b76e928)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-cdbc6b76e928"></a>

## VKR_Bck_050_DeadlyBash2_Perk

- Identidade estável Housecarl: `223FE2:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Deadly Bash; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModBashingDamage; Modification=Multiply; Value=15; Rank=0; Priority=180; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`05F594:Skyrim.esm`](../perks/PERKS_048.md#r-b08049325512)<br>Parameter1.Link=[`05F594:Skyrim.esm`](../perks/PERKS_048.md#r-b08049325512)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|15|
|`Effects[0].EntryPoint`|ModBashingDamage|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|180|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Deadly Bash|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-69e2186a0e06"></a>

## VKR_Bck_050_ElementalProtection_Perk_WasElementalProtection

- Identidade estável Housecarl: `058F69:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Elemental Protection; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=0.5; Rank=0; Priority=185; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058F68:Skyrim.esm`](../perks/PERKS_048.md#r-3782237bd6a1)<br>Parameter1.Link=[`058F68:Skyrim.esm`](../perks/PERKS_048.md#r-3782237bd6a1)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0965B2:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0B62E4:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|185|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Elemental Protection|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-8472fda89f19"></a>

## VKR_Bck_060_PokeTheDragon_Perk

- Identidade estável Housecarl: `2DF672:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Poke the Dragon; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitChance; Modification=Set; Value=100; Rank=0; Priority=184; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=2; Rank=0; Priority=183; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`2DF671:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_048.md#r-7d35aa697653)<br>Parameter1.Link=[`2DF671:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_048.md#r-7d35aa697653)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`223FDD:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_021.md#r-5b7460382aba)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`223FDD:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_021.md#r-5b7460382aba)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|100|
|`Effects[0].EntryPoint`|CalculateMyCriticalHitChance|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|184|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|2|
|`Effects[1].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|183|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Poke the Dragon|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0d9a71433afd"></a>

## VKR_Bck_070_BlockRunner_Perk_WasBlockRunner

- Identidade estável Housecarl: `106253:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Block Runner; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectText**: EntryPoint=SetBooleanGraphVariable; Rank=0; Priority=20; PerkConditionTabCount=1. Seleciona texto no entry point; não concede autoridade para executar a ação que a interface mostra.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058F68:Skyrim.esm`](../perks/PERKS_048.md#r-3782237bd6a1)<br>Parameter1.Link=[`058F68:Skyrim.esm`](../perks/PERKS_048.md#r-3782237bd6a1)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectText]|
|`Effects[0].Text`|bPerkShieldCharge|
|`Effects[0].EntryPoint`|SetBooleanGraphVariable|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|20|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Block Runner|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2cf209b48868"></a>

## VKR_Bck_090_DragonTail_Perk

- Identidade estável Housecarl: `058F66:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Dragon Tail; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyBashingSpell; Spell=[`00A666:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_038.md#r-5eefbb32bff6); Rank=0; Priority=120; PerkConditionTabCount=2. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.
- **Effects[1] — PerkEntryPointSelectSpell**: EntryPoint=ApplyBashingSpell; Spell=[`321439:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-abfaa8f77792); Rank=0; Priority=119; PerkConditionTabCount=2. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`05F594:Skyrim.esm`](../perks/PERKS_048.md#r-b08049325512)<br>Parameter1.Link=[`05F594:Skyrim.esm`](../perks/PERKS_048.md#r-b08049325512)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`2DF676:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-06f7e04c7b51)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsPowerAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`2DF676:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-06f7e04c7b51)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|IsPowerAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=00A666:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`00A666:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_038.md#r-5eefbb32bff6)|
|`Effects[0].EntryPoint`|ApplyBashingSpell|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|120|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointSelectSpell] Spell=321439:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Spell`|[`321439:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-abfaa8f77792)|
|`Effects[1].EntryPoint`|ApplyBashingSpell|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|119|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Dragon Tail|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-944855012fdd"></a>

## VKR_Bck_090_ShieldCharge_Perk_WasShieldCharge

- Identidade estável Housecarl: `058F6A:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Shield Charge; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`0090AA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_038.md#r-5a8bd9fcffd4); Rank=0; Priority=110. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106253:Skyrim.esm`](../perks/PERKS_048.md#r-0d9a71433afd)<br>Parameter1.Link=[`106253:Skyrim.esm`](../perks/PERKS_048.md#r-0d9a71433afd)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=0090AA:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`0090AA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_038.md#r-5a8bd9fcffd4)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|110|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Shield Charge|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-506910fd68e3"></a>

## VKR_Bck_100_Stoneheart_Perk

- Identidade estável Housecarl: `2DF673:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Stoneheart; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingStagger; Modification=Multiply; Value=0; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`2DF672:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_048.md#r-8472fda89f19)<br>Parameter1.Link=[`2DF672:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_048.md#r-8472fda89f19)|aliases=False; package=False|
|`Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`058F6A:Skyrim.esm`](../perks/PERKS_048.md#r-944855012fdd)<br>Parameter1.Link=[`058F6A:Skyrim.esm`](../perks/PERKS_048.md#r-944855012fdd)|aliases=False; package=False|
|`Conditions[3]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`058F66:Skyrim.esm`](../perks/PERKS_048.md#r-2cf209b48868)<br>Parameter1.Link=[`058F66:Skyrim.esm`](../perks/PERKS_048.md#r-2cf209b48868)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsBlocking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 4 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModIncomingStagger|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Stoneheart|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-69e1c30428fe"></a>

## VKR_Bck_old_BlockMastery2_Perk_WasShieldWall2

- Identidade estável Housecarl: `079355:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Block Mastery; ranks declarados: 1; NextPerk: [`079356:Skyrim.esm`](../perks/PERKS_048.md#r-2c463d46ec3d).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModPercentBlocked; Modification=Multiply; Value=1.2; Rank=0; Priority=200; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BCCAE:Skyrim.esm`](../perks/PERKS_048.md#r-093d0d3d89d8)<br>Parameter1.Link=[`0BCCAE:Skyrim.esm`](../perks/PERKS_048.md#r-093d0d3d89d8)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079356:Skyrim.esm`](../perks/PERKS_048.md#r-2c463d46ec3d)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.2|
|`Effects[0].EntryPoint`|ModPercentBlocked|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Block Mastery|
|`NextPerk`|[`079356:Skyrim.esm`](../perks/PERKS_048.md#r-2c463d46ec3d)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2c463d46ec3d"></a>

## VKR_Bck_old_BlockMastery3_Perk_WasShieldWall3

- Identidade estável Housecarl: `079356:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Block Mastery; ranks declarados: 1; NextPerk: [`079357:Skyrim.esm`](../perks/PERKS_048.md#r-776210cb42f4).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModPercentBlocked; Modification=Multiply; Value=1.3; Rank=0; Priority=200; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`079355:Skyrim.esm`](../perks/PERKS_048.md#r-69e1c30428fe)<br>Parameter1.Link=[`079355:Skyrim.esm`](../perks/PERKS_048.md#r-69e1c30428fe)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079357:Skyrim.esm`](../perks/PERKS_048.md#r-776210cb42f4)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.3|
|`Effects[0].EntryPoint`|ModPercentBlocked|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Block Mastery|
|`NextPerk`|[`079357:Skyrim.esm`](../perks/PERKS_048.md#r-776210cb42f4)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-776210cb42f4"></a>

## VKR_Bck_old_BlockMastery4_Perk_WasShieldWall4

- Identidade estável Housecarl: `079357:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Block Mastery; ranks declarados: 1; NextPerk: [`079358:Skyrim.esm`](../perks/PERKS_048.md#r-73d56e550d99).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModPercentBlocked; Modification=Multiply; Value=1.4; Rank=0; Priority=200; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`079356:Skyrim.esm`](../perks/PERKS_048.md#r-2c463d46ec3d)<br>Parameter1.Link=[`079356:Skyrim.esm`](../perks/PERKS_048.md#r-2c463d46ec3d)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079358:Skyrim.esm`](../perks/PERKS_048.md#r-73d56e550d99)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.4|
|`Effects[0].EntryPoint`|ModPercentBlocked|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Block Mastery|
|`NextPerk`|[`079358:Skyrim.esm`](../perks/PERKS_048.md#r-73d56e550d99)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-73d56e550d99"></a>

## VKR_Bck_old_BlockMastery5_Perk_WasShieldWall5

- Identidade estável Housecarl: `079358:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Block Mastery; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModPercentBlocked; Modification=Multiply; Value=1.5; Rank=0; Priority=200; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`079357:Skyrim.esm`](../perks/PERKS_048.md#r-776210cb42f4)<br>Parameter1.Link=[`079357:Skyrim.esm`](../perks/PERKS_048.md#r-776210cb42f4)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.5|
|`Effects[0].EntryPoint`|ModPercentBlocked|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Block Mastery|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a7a4cf845c91"></a>

## VKR_Bck_old_DragonTail_Perk

- Identidade estável Housecarl: `00A665:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Dragon Tail; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyBashingSpell; Spell=[`00A666:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_038.md#r-5eefbb32bff6); Rank=0; Priority=149; PerkConditionTabCount=2. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`05F594:Skyrim.esm`](../perks/PERKS_048.md#r-b08049325512)<br>Parameter1.Link=[`05F594:Skyrim.esm`](../perks/PERKS_048.md#r-b08049325512)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsPowerAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=00A666:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`00A666:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_038.md#r-5eefbb32bff6)|
|`Effects[0].EntryPoint`|ApplyBashingSpell|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|149|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Dragon Tail|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-ba74e923d0f6"></a>

## VKR_Bck_old_Ironclad_Perk

- Identidade estável Housecarl: `447041:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Ironclad; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=2; Rank=0; Priority=235; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Block<br>Parameter1=Block|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058F68:Skyrim.esm`](../perks/PERKS_048.md#r-3782237bd6a1)<br>Parameter1.Link=[`058F68:Skyrim.esm`](../perks/PERKS_048.md#r-3782237bd6a1)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0965B2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModArmorRating|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|235|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Ironclad|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-6a917fa6c4aa"></a>

## VKR_Con_000_ConjurationMastery_Perk_WasConjuration1

- Identidade estável Housecarl: `0F2CA7:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Conjuration Mastery; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellCost; Modification=MultiplyOnePlusAVMult; ActorValue=Conjuration; Value=-0.005; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA7:Skyrim.esm`](../perks/PERKS_048.md#r-6a917fa6c4aa)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BB:Skyrim.esm`](../perks/PERKS_049.md#r-43b92818b25c)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BC:Skyrim.esm`](../perks/PERKS_049.md#r-5c66b51aba5a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BD:Skyrim.esm`](../perks/PERKS_049.md#r-3595777cbcf1)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BE:Skyrim.esm`](../perks/PERKS_049.md#r-bafe0e87a888)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Conjuration|
|`Effects[0].Value`|-0.005|
|`Effects[0].Modification`|MultiplyOnePlusAVMult|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Conjuration Mastery|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-10211941cb7c"></a>

## VKR_Con_020_ConjurationDualCasting_Perk_WasConjurationDualCasting

- Identidade estável Housecarl: `0153CE:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Conjuration Dual Casting; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=CanDualCastSpell; Modification=Set; Value=1; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=Conjuration<br>Parameter1=Conjuration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CA7:Skyrim.esm`](../perks/PERKS_048.md#r-6a917fa6c4aa)<br>Parameter1.Link=[`0F2CA7:Skyrim.esm`](../perks/PERKS_048.md#r-6a917fa6c4aa)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Conjuration<br>Parameter1=Conjuration|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|1|
|`Effects[0].EntryPoint`|CanDualCastSpell|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Conjuration Dual Casting|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
