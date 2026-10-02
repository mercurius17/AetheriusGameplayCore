# Perks instaladas — parte 004

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-ce1ed4729abc"></a>

## OREO_crSneakAttack250

- Identidade estável Housecarl: `146EAD:Bandit War.esp`.
- Tipo: `Perk`; winner: `Bandit War.esp`; profundidade de override: 1.
- Nome: Sneak Attack; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=3.5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`0C80FF:Bandit War.esp`](../magic/MAGIC_016.md#r-5f8eb135bd33)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`156368:Bandit War.esp`](../magic/MAGIC_020.md#r-9cf233ecc1c3)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|3.5|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Sneak Attack|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-456e00599823"></a>

## OREO_crSneakAttack3

- Identidade estável Housecarl: `0C8134:Bandit War.esp`.
- Tipo: `Perk`; winner: `Bandit War.esp`; profundidade de override: 1.
- Nome: Sneak Attack; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=4; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`0C80FF:Bandit War.esp`](../magic/MAGIC_016.md#r-5f8eb135bd33)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`156368:Bandit War.esp`](../magic/MAGIC_020.md#r-9cf233ecc1c3)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|4|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Sneak Attack|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-3e8e1d85843b"></a>

## OREO_crSneakAttack4

- Identidade estável Housecarl: `10F156:Bandit War.esp`.
- Tipo: `Perk`; winner: `Bandit War.esp`; profundidade de override: 1.
- Nome: Sneak Attack; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=5; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`0C80FF:Bandit War.esp`](../magic/MAGIC_016.md#r-5f8eb135bd33)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|MagicEffect=[`156368:Bandit War.esp`](../magic/MAGIC_020.md#r-9cf233ecc1c3)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|5|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Sneak Attack|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7cbe08a10f52"></a>

## OREO_DestructionSpellCost

- Identidade estável Housecarl: `03F194:Bandit War.esp`.
- Tipo: `Perk`; winner: `Bandit War.esp`; profundidade de override: 1.
- Nome: NPC Destruction Costs; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.25; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C1:Skyrim.esm`](../perks/PERKS_050.md#r-963fe743f3ef)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C2:Skyrim.esm`](../perks/PERKS_051.md#r-e9763c3626fb)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C0:Skyrim.esm`](../perks/PERKS_050.md#r-907ca88f27ab)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BF:Skyrim.esm`](../perks/PERKS_050.md#r-66e84f71d455)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA8:Skyrim.esm`](../perks/PERKS_049.md#r-90ecb10b697a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.25|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
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
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|0.75|
|`Effects[2].EntryPoint`|ModSpellCost|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Name`|NPC Destruction Costs|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-beeec507c1de"></a>

## OREO_Rage

- Identidade estável Housecarl: `067A7C:Bandit War.esp`.
- Tipo: `Perk`; winner: `Bandit War.esp`; profundidade de override: 1.
- Nome: Rage; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=1.25; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=1.25; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.25; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|ActorValue=Destruction<br>Parameter1=Destruction|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01CEAF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA001:Update.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=101BDE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[6]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=ADA002:Update.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.25|
|`Effects[0].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.25|
|`Effects[1].EntryPoint`|ModIncomingDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|1.25|
|`Effects[2].EntryPoint`|ModAttackDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Name`|Rage|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0aa513f0a9c0"></a>

## OREO_RestorationSpellCost

- Identidade estável Housecarl: `119437:Bandit War.esp`.
- Tipo: `Perk`; winner: `Bandit War.esp`; profundidade de override: 1.
- Nome: NPC Restoration Costs; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.25; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.5; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.75; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C9:Skyrim.esm`](../perks/PERKS_057.md#r-b00389b66551)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44CA:Skyrim.esm`](../perks/PERKS_057.md#r-6d5688b2d543)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C8:Skyrim.esm`](../perks/PERKS_057.md#r-7576fdc84d0d)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Restoration<br>Parameter1=Restoration|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C7:Skyrim.esm`](../perks/PERKS_057.md#r-177c876aaf88)|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CAA:Skyrim.esm`](../perks/PERKS_056.md#r-89be12cae610)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.25|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
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
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|0.75|
|`Effects[2].EntryPoint`|ModSpellCost|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|0|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Name`|NPC Restoration Costs|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-6fc6cb839d15"></a>

## BloodglassPerk

- Identidade estável Housecarl: `104BBF:Better Vampire NPCs.esp`.
- Tipo: `Perk`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.
- Nome: Bloodglass Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`104BC1:Better Vampire NPCs.esp`](../magic/MAGIC_045.md#r-7aba40773b44); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=104BBD:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetGlobalValue|2|Subject; ref=(null link); index=-1|LessThan 10000|0|Global=10EA3D:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|GetRandomPercent|2|Subject; ref=(null link); index=-1|GreaterThan 85|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|GetDead|2|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0D205E:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|IsUndead|2|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=013796:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[6]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01397A:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[7]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0A82BB:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[8]`|GetActorValue|2|Subject; ref=(null link); index=-1|NotEqualTo 789|OR|ActorValue=Variable01<br>Parameter1=Variable01|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[9]`|IsBleedingOut|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=104BC1:Better Vampire NPCs.esp|
|`Effects[0].Spell`|[`104BC1:Better Vampire NPCs.esp`](../magic/MAGIC_045.md#r-7aba40773b44)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Bloodglass Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-32c3481d5526"></a>

## BVNPCDLC1NightCloakPerk

- Identidade estável Housecarl: `070028:Better Vampire NPCs.esp`.
- Tipo: `Perk`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.
- Nome: Night Cloak Mortal; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`070029:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-cb41a0a382f7); Rank=0; Priority=0. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E3:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E3:Better Vampire NPCs.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=070029:Better Vampire NPCs.esp|
|`Effects[0].Ability`|[`070029:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-cb41a0a382f7)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Night Cloak Mortal|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-e95a0d184f62"></a>

## BVNPCVampireBlinkPerk1

- Identidade estável Housecarl: `06127C:Better Vampire NPCs.esp`.
- Tipo: `Perk`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.
- Nome: Vampire Blink Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyWeaponSwingSpell; Spell=[`06127E:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-7fa567a29dd7); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E1:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E1:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 99|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.35|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsCasting|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=06127E:Better Vampire NPCs.esp|
|`Effects[0].Spell`|[`06127E:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-7fa567a29dd7)|
|`Effects[0].EntryPoint`|ApplyWeaponSwingSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Vampire Blink Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-5c9c4a43a060"></a>

## BVNPCVampireBlinkPerk2

- Identidade estável Housecarl: `079EA9:Better Vampire NPCs.esp`.
- Tipo: `Perk`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.
- Nome: Vampire Blink Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyWeaponSwingSpell; Spell=[`06127E:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-7fa567a29dd7); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E1:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E1:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 95|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.35|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsCasting|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=06127E:Better Vampire NPCs.esp|
|`Effects[0].Spell`|[`06127E:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-7fa567a29dd7)|
|`Effects[0].EntryPoint`|ApplyWeaponSwingSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Vampire Blink Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b83ba037aeb6"></a>

## BVNPCVampireBlinkPerk3

- Identidade estável Housecarl: `079EAA:Better Vampire NPCs.esp`.
- Tipo: `Perk`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.
- Nome: Vampire Blink Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyWeaponSwingSpell; Spell=[`06127E:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-7fa567a29dd7); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E1:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E1:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.35|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsCasting|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=06127E:Better Vampire NPCs.esp|
|`Effects[0].Spell`|[`06127E:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-7fa567a29dd7)|
|`Effects[0].EntryPoint`|ApplyWeaponSwingSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Vampire Blink Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-6a4948f2a033"></a>

## BVNPCVampireBlinkPerk4

- Identidade estável Housecarl: `079EAB:Better Vampire NPCs.esp`.
- Tipo: `Perk`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.
- Nome: Vampire Blink Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyWeaponSwingSpell; Spell=[`06127E:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-7fa567a29dd7); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E1:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E1:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 85|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.35|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsCasting|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=06127E:Better Vampire NPCs.esp|
|`Effects[0].Spell`|[`06127E:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-7fa567a29dd7)|
|`Effects[0].EntryPoint`|ApplyWeaponSwingSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Vampire Blink Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-c86b931768d3"></a>

## BVNPCVampireBlinkPerk5

- Identidade estável Housecarl: `079EAC:Better Vampire NPCs.esp`.
- Tipo: `Perk`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.
- Nome: Vampire Blink Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyWeaponSwingSpell; Spell=[`06127E:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-7fa567a29dd7); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E1:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E1:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 0.35|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsCasting|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=06127E:Better Vampire NPCs.esp|
|`Effects[0].Spell`|[`06127E:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-7fa567a29dd7)|
|`Effects[0].EntryPoint`|ApplyWeaponSwingSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Vampire Blink Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-cab97ded3aa4"></a>

## BVNPCVampireMistPerk1

- Identidade estável Housecarl: `0661B4:Better Vampire NPCs.esp`.
- Tipo: `Perk`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.
- Nome: Vampire Mist Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyWeaponSwingSpell; Spell=[`0661B3:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-0ffeba1f33e4); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E2:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E2:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 75|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`00F5B6:Better Vampire NPCs.esp`](../magic/MAGIC_008.md#r-060f99360107)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.33|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsCasting|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=0661B3:Better Vampire NPCs.esp|
|`Effects[0].Spell`|[`0661B3:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-0ffeba1f33e4)|
|`Effects[0].EntryPoint`|ApplyWeaponSwingSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Vampire Mist Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a4a487ce9d6d"></a>

## BVNPCVampireMistPerk2

- Identidade estável Housecarl: `079EA4:Better Vampire NPCs.esp`.
- Tipo: `Perk`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.
- Nome: Vampire Mist Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyWeaponSwingSpell; Spell=[`0661B3:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-0ffeba1f33e4); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E2:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E2:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`00F5B6:Better Vampire NPCs.esp`](../magic/MAGIC_008.md#r-060f99360107)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.33|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsCasting|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=0661B3:Better Vampire NPCs.esp|
|`Effects[0].Spell`|[`0661B3:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-0ffeba1f33e4)|
|`Effects[0].EntryPoint`|ApplyWeaponSwingSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Vampire Mist Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-da9563ac3246"></a>

## BVNPCVampireMistPerk3

- Identidade estável Housecarl: `079EA5:Better Vampire NPCs.esp`.
- Tipo: `Perk`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.
- Nome: Vampire Mist Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyWeaponSwingSpell; Spell=[`0661B3:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-0ffeba1f33e4); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E2:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E2:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`00F5B6:Better Vampire NPCs.esp`](../magic/MAGIC_008.md#r-060f99360107)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.33|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsCasting|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=0661B3:Better Vampire NPCs.esp|
|`Effects[0].Spell`|[`0661B3:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-0ffeba1f33e4)|
|`Effects[0].EntryPoint`|ApplyWeaponSwingSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Vampire Mist Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b80ed547121e"></a>

## BVNPCVampireMistPerk4

- Identidade estável Housecarl: `079EA6:Better Vampire NPCs.esp`.
- Tipo: `Perk`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.
- Nome: Vampire Mist Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyWeaponSwingSpell; Spell=[`0661B3:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-0ffeba1f33e4); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E2:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E2:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 93|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`00F5B6:Better Vampire NPCs.esp`](../magic/MAGIC_008.md#r-060f99360107)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.33|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsCasting|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=0661B3:Better Vampire NPCs.esp|
|`Effects[0].Spell`|[`0661B3:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-0ffeba1f33e4)|
|`Effects[0].EntryPoint`|ApplyWeaponSwingSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Vampire Mist Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-306b5ad50105"></a>

## BVNPCVampireMistPerk5

- Identidade estável Housecarl: `079EA7:Better Vampire NPCs.esp`.
- Tipo: `Perk`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.
- Nome: Vampire Mist Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyWeaponSwingSpell; Spell=[`0661B3:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-0ffeba1f33e4); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E2:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E2:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 96|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`00F5B6:Better Vampire NPCs.esp`](../magic/MAGIC_008.md#r-060f99360107)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.33|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsCasting|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=0661B3:Better Vampire NPCs.esp|
|`Effects[0].Spell`|[`0661B3:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-0ffeba1f33e4)|
|`Effects[0].EntryPoint`|ApplyWeaponSwingSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Vampire Mist Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-511f189d9daa"></a>

## BVNPCVampireMistPerk6

- Identidade estável Housecarl: `079EA8:Better Vampire NPCs.esp`.
- Tipo: `Perk`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.
- Nome: Vampire Mist Perk; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyWeaponSwingSpell; Spell=[`0661B3:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-0ffeba1f33e4); Rank=0; Priority=0; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E2:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E2:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetRandomPercent|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 99|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasMagicEffect|0|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`00F5B6:Better Vampire NPCs.esp`](../magic/MAGIC_008.md#r-060f99360107)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetActorValuePercent|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.33|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsCasting|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 1 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=0661B3:Better Vampire NPCs.esp|
|`Effects[0].Spell`|[`0661B3:Better Vampire NPCs.esp`](../magic/MAGIC_042.md#r-0ffeba1f33e4)|
|`Effects[0].EntryPoint`|ApplyWeaponSwingSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Vampire Mist Perk|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-62b8b719a646"></a>

## BlackMageMatchingSet

- Identidade estável Housecarl: `012BAD:Black Mage Armor SE.esp`.
- Tipo: `Perk`; winner: `Black Mage Armor SE.esp`; profundidade de override: 1.
- Nome: Black Mage Matching Set; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`051B17:Skyrim.esm`](../perks/PERKS_053.md#r-4df37ebaa825)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 4|OR|Keyword=012BAA:Black Mage Armor SE.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 4|OR|Keyword=012BAB:Black Mage Armor SE.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.2|
|`Effects[0].EntryPoint`|ModArmorRating|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Black Mage Matching Set|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7ddf7ce9f49e"></a>

## ccBGSSSE025_MatchingSet

- Identidade estável Housecarl: `21BD61:ccBGSSSE025-AdvDSGS.esm`.
- Tipo: `Perk`; winner: `ccBGSSSE025-AdvDSGS.esm`; profundidade de override: 1.
- Nome: Matching Set; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`051B17:Skyrim.esm`](../perks/PERKS_053.md#r-4df37ebaa825)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 4|OR|Keyword=21BD66:ccBGSSSE025-AdvDSGS.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 4|OR|Keyword=21BD64:ccBGSSSE025-AdvDSGS.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.2|
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

<a id="r-e97b6b0b6e04"></a>

## ccBGSSSE025_MatchingSetHeavy

- Identidade estável Housecarl: `21BD62:ccBGSSSE025-AdvDSGS.esm`.
- Tipo: `Perk`; winner: `ccBGSSSE025-AdvDSGS.esm`; profundidade de override: 1.
- Nome: Matching Set; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.2; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`107832:Skyrim.esm`](../perks/PERKS_052.md#r-0014e312778a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 4|OR|Keyword=21BD63:ccBGSSSE025-AdvDSGS.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|EqualTo 4|OR|Keyword=21BD65:ccBGSSSE025-AdvDSGS.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.2|
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

<a id="r-f580c9074e6a"></a>

## ccBGSSSE025_Smithing

- Identidade estável Housecarl: `21BD6B:ccBGSSSE025-AdvDSGS.esm`.
- Tipo: `Perk`; winner: `ccBGSSSE025-AdvDSGS.esm`; profundidade de override: 1.
- Nome: Smithing; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=10; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=9; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModTemperingHealth; Modification=Multiply; Value=2; Rank=0; Priority=7; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB413:Skyrim.esm`](../perks/PERKS_060.md#r-9a6325446320)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=21BD64:ccBGSSSE025-AdvDSGS.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=21BD63:ccBGSSSE025-AdvDSGS.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=21BD6A:ccBGSSSE025-AdvDSGS.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=21BD69:ccBGSSSE025-AdvDSGS.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB411:Skyrim.esm`](../perks/PERKS_060.md#r-4401abe3eaa9)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=21BD66:ccBGSSSE025-AdvDSGS.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=21BD67:ccBGSSSE025-AdvDSGS.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB412:Skyrim.esm`](../perks/PERKS_060.md#r-fafe9a88d856)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=21BD65:ccBGSSSE025-AdvDSGS.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=21BD68:ccBGSSSE025-AdvDSGS.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModTemperingHealth|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|10|
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
|`Effects[1].Priority`|9|
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
|`Effects[2].Priority`|7|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Name`|Smithing|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-031a82039303"></a>

## ccBGSSSE037_PoisonedPerk

- Identidade estável Housecarl: `00084F:ccBGSSSE037-Curios.esl`.
- Tipo: `Perk`; winner: `ccBGSSSE037-Curios.esl`; profundidade de override: 1.
- Nome: Poisoned; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ShouldApplyPlacedItem; Modification=Set; Value=1; Rank=0; Priority=0; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`000D98:ccBGSSSE037-Curios.esl`](../magic/MAGIC_001.md#r-b7ef10ab38aa)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`000849:ccBGSSSE037-Curios.esl`](../magic/MAGIC_001.md#r-8e732d29de5e)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|1|
|`Effects[0].EntryPoint`|ShouldApplyPlacedItem|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Poisoned|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-fe7e7d6d4eb5"></a>

## Survival_ExhuastionReduceConsumables

- Identidade estável Housecarl: `0009ED:ccQDRSSE001-SurvivalMode.esl`.
- Tipo: `Perk`; winner: `ccQDRSSE001-SurvivalMode.esl`; profundidade de override: 1.
- Nome: Exhaustion Consumable Debuff; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.8; Rank=0; Priority=4; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.6; Rank=0; Priority=3; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.4; Rank=0; Priority=2; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.2; Rank=0; Priority=1; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=000826:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 160|0|Global=000816:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 340|0|Global=000816:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0F8A4E:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F8A4F:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=00080B:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=000826:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 340|0|Global=000816:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 560|0|Global=000816:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0F8A4E:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F8A4F:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=00080B:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=000826:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 560|0|Global=000816:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|LessThan 800|0|Global=000816:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0F8A4E:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F8A4F:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=00080B:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=000826:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 800|0|Global=000816:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0F8A4E:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[1]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0F8A4F:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[2]`|EPMagic_SpellHasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=00080B:ccQDRSSE001-SurvivalMode.esl|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.8|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|4|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0.6|
|`Effects[1].EntryPoint`|ModSpellMagnitude|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|3|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|0.4|
|`Effects[2].EntryPoint`|ModSpellMagnitude|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|2|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|0.2|
|`Effects[3].EntryPoint`|ModSpellMagnitude|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|1|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Name`|Exhaustion Consumable Debuff|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
