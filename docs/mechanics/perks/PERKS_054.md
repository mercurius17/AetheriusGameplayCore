# Perks instaladas — parte 054

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-2bdf22914a87"></a>

## VKR_Lia_old_LightArmorMastery2_Perk_WasAgileDefender2

- Identidade estável Housecarl: `079376:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Light Armor Mastery; ranks declarados: 1; NextPerk: [`079389:Skyrim.esm`](../perks/PERKS_054.md#r-fa7657db2fa6).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.4; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=LightArmor<br>Parameter1=LightArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BE123:Skyrim.esm`](../perks/PERKS_053.md#r-667a622e229c)<br>Parameter1.Link=[`0BE123:Skyrim.esm`](../perks/PERKS_053.md#r-667a622e229c)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079389:Skyrim.esm`](../perks/PERKS_054.md#r-fa7657db2fa6)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0965B2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.4|
|`Effects[0].EntryPoint`|ModArmorRating|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Light Armor Mastery|
|`NextPerk`|[`079389:Skyrim.esm`](../perks/PERKS_054.md#r-fa7657db2fa6)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-fa7657db2fa6"></a>

## VKR_Lia_old_LightArmorMastery3_Perk_WasAgileDefender3

- Identidade estável Housecarl: `079389:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Light Armor Mastery; ranks declarados: 1; NextPerk: [`079391:Skyrim.esm`](../perks/PERKS_054.md#r-a0ea006565cf).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.6; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=LightArmor<br>Parameter1=LightArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`079376:Skyrim.esm`](../perks/PERKS_054.md#r-2bdf22914a87)<br>Parameter1.Link=[`079376:Skyrim.esm`](../perks/PERKS_054.md#r-2bdf22914a87)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079391:Skyrim.esm`](../perks/PERKS_054.md#r-a0ea006565cf)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0965B2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.6|
|`Effects[0].EntryPoint`|ModArmorRating|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Light Armor Mastery|
|`NextPerk`|[`079391:Skyrim.esm`](../perks/PERKS_054.md#r-a0ea006565cf)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a0ea006565cf"></a>

## VKR_Lia_old_LightArmorMastery4_Perk_WasAgileDefender4

- Identidade estável Housecarl: `079391:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Light Armor Mastery; ranks declarados: 1; NextPerk: [`079392:Skyrim.esm`](../perks/PERKS_054.md#r-595986451f33).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.8; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=LightArmor<br>Parameter1=LightArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`079389:Skyrim.esm`](../perks/PERKS_054.md#r-fa7657db2fa6)<br>Parameter1.Link=[`079389:Skyrim.esm`](../perks/PERKS_054.md#r-fa7657db2fa6)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079392:Skyrim.esm`](../perks/PERKS_054.md#r-595986451f33)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0965B2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.8|
|`Effects[0].EntryPoint`|ModArmorRating|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Light Armor Mastery|
|`NextPerk`|[`079392:Skyrim.esm`](../perks/PERKS_054.md#r-595986451f33)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-595986451f33"></a>

## VKR_Lia_old_LightArmorMastery5_Perk_WasAgileDefender5

- Identidade estável Housecarl: `079392:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Light Armor Mastery; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=2; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=LightArmor<br>Parameter1=LightArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`079391:Skyrim.esm`](../perks/PERKS_054.md#r-a0ea006565cf)<br>Parameter1.Link=[`079391:Skyrim.esm`](../perks/PERKS_054.md#r-a0ea006565cf)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0965B2:Skyrim.esm|aliases=False; package=False|

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
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Light Armor Mastery|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-36ad04fd7c0b"></a>

## VKR_Lia_old_Windrunner_Perk

- Identidade estável Housecarl: `009B8B:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Windrunner; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`009B89:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_038.md#r-9554ec936393); Rank=0; Priority=199. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=LightArmor<br>Parameter1=LightArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`051B1B:Skyrim.esm`](../perks/PERKS_053.md#r-7ead22c8ed91)<br>Parameter1.Link=[`051B1B:Skyrim.esm`](../perks/PERKS_053.md#r-7ead22c8ed91)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=009B89:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`009B89:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_038.md#r-9554ec936393)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|199|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Windrunner|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-e445910e1a6f"></a>

## VKR_Lia_Wardancer_Perk_Proc

- Identidade estável Housecarl: `007AB8:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Wardancer - Proc; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=True, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.2; Rank=0; Priority=150; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=1.2; Rank=0; Priority=149; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`2290EB:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_053.md#r-6ec03dcad393)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`2290EB:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_053.md#r-6ec03dcad393)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.2|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|150|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.2|
|`Effects[1].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|149|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Wardancer - Proc|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|True|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-fef4c842d0fc"></a>

## VKR_Loc_000_LockpickingMastery_Perk_WasLocks1

- Identidade estável Housecarl: `0F392A:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Lockpicking Mastery; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModLockpickSweetSpot; Modification=MultiplyOnePlusAVMult; ActorValue=Lockpicking; Value=0.01; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0BE125:Skyrim.esm`](../perks/PERKS_054.md#r-f5abac2d853e)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Lockpicking|
|`Effects[0].Value`|0.01|
|`Effects[0].Modification`|MultiplyOnePlusAVMult|
|`Effects[0].EntryPoint`|ModLockpickSweetSpot|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Lockpicking Mastery|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-5d2772fc1556"></a>

## VKR_Loc_020_Looter_Perk_WasGoldenTouch

- Identidade estável Housecarl: `05820A:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Looter; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`26AEAA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-7d35c7aae574); Rank=0; Priority=50. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkQuestEffect**: Quest=05F596:Skyrim.esm; Stage=30; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F392A:Skyrim.esm`](../perks/PERKS_054.md#r-fef4c842d0fc)<br>Parameter1.Link=[`0F392A:Skyrim.esm`](../perks/PERKS_054.md#r-fef4c842d0fc)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=26AEAA:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`26AEAA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-7d35c7aae574)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|50|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkQuestEffect] Quest=05F596:Skyrim.esm|
|`Effects[1].Quest`|05F596:Skyrim.esm|
|`Effects[1].Stage`|30|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Looter|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-dbfb26f1d836"></a>

## VKR_Loc_030_QuickHands_Perk_WasQuickHands

- Identidade estável Housecarl: `106259:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Quick Hands; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModLockpickingCrimeChance; Modification=Set; Value=0; Rank=0; Priority=60; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F392A:Skyrim.esm`](../perks/PERKS_054.md#r-fef4c842d0fc)<br>Parameter1.Link=[`0F392A:Skyrim.esm`](../perks/PERKS_054.md#r-fef4c842d0fc)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModLockpickingCrimeChance|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Quick Hands|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0bd45e6cae15"></a>

## VKR_Loc_040_Lockdown_Perk

- Identidade estável Housecarl: `265D9A:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Lockdown; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=[`034DEE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-b02e3a7b3299); Rank=0; Priority=195; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F392A:Skyrim.esm`](../perks/PERKS_054.md#r-fef4c842d0fc)<br>Parameter1.Link=[`0F392A:Skyrim.esm`](../perks/PERKS_054.md#r-fef4c842d0fc)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsActor|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01397A:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|IsHostileToActor|1|Subject; ref=(null link); index=-1|EqualTo 1|0|TargetNpc=000014:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|HasMagicEffectKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=265D9F:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|IsCommandedActor|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`49D193:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_032.md#r-8dfac43eb943)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointAddActivateChoice] Spell=034DEE:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`034DEE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-b02e3a7b3299)|
|`Effects[0].EntryPoint`|Activate|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|195|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].ButtonLabel`|Lockdown|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Lockdown|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-f6cf55d6ccb0"></a>

## VKR_Loc_050_WaxKey_Perk_WasWaxKey

- Identidade estável Housecarl: `107830:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Wax Key; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModLockpickingKeyRewardChance; Modification=Set; Value=100; Rank=0; Priority=100; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106259:Skyrim.esm`](../perks/PERKS_054.md#r-dbfb26f1d836)<br>Parameter1.Link=[`106259:Skyrim.esm`](../perks/PERKS_054.md#r-dbfb26f1d836)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|100|
|`Effects[0].EntryPoint`|ModLockpickingKeyRewardChance|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|100|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Wax Key|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7711d3d52cc4"></a>

## VKR_Loc_060_Hotwire_Perk

- Identidade estável Housecarl: `265D9B:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Hotwire; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=[`0358CE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-99c912ea799b); Rank=0; Priority=190; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[1] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=189; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`265D9A:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_054.md#r-0bd45e6cae15)<br>Parameter1.Link=[`265D9A:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_054.md#r-0bd45e6cae15)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsActor|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01397A:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`034DED:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_011.md#r-775569c2d99c)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|HasMagicEffectKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=265D9F:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|IsCommandedActor|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|HasMagicEffect|1|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`49D193:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_032.md#r-8dfac43eb943)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|IsActor|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01397A:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasMagicEffectKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=265D9F:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|GetDead|1|Subject; ref=(null link); index=-1|EqualTo 0|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointAddActivateChoice] Spell=0358CE:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`0358CE:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-99c912ea799b)|
|`Effects[0].EntryPoint`|Activate|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].ButtonLabel`|Hotwire|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[1].EntryPoint`|Activate|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|189|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].ButtonLabel`|Self Destruct|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|1|
|`VirtualMachineAdapter`|[PerkAdapter]|
|`VirtualMachineAdapter.ScriptFragments`|[PerkScriptFragments]|
|`VirtualMachineAdapter.ScriptFragments.Fragments`|[list: 1 item(s)]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentIndex`|1|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].ScriptName`|PRKF_VKR_Loc_060_Hotwire_Per_04265D9B|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentName`|Fragment_18|
|`VirtualMachineAdapter.ScriptFragments.ExtraBindDataVersion`|2|
|`VirtualMachineAdapter.ScriptFragments.FileName`|PRKF_VKR_Loc_060_Hotwire_Per_04265D9B|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=PRKF_VKR_Loc_060_Hotwire_Per_04265D9B|
|`VirtualMachineAdapter.Scripts[0].Name`|PRKF_VKR_Loc_060_Hotwire_Per_04265D9B|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 4 item(s)]|
|`VirtualMachineAdapter.Scripts[0].Properties[0]`|[ScriptIntProperty] Name=VKR_FollowerID|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Data`|0|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Name`|VKR_FollowerID|
|`VirtualMachineAdapter.Scripts[0].Properties[0].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[1]`|[ScriptBoolProperty] Name=VKR_Kill|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Data`|True|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Name`|VKR_Kill|
|`VirtualMachineAdapter.Scripts[0].Properties[1].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[2]`|[ScriptStringProperty] Name=VKR_SkillType|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Data`|Lockpicking|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Name`|VKR_SkillType|
|`VirtualMachineAdapter.Scripts[0].Properties[2].Flags`|Edited|
|`VirtualMachineAdapter.Scripts[0].Properties[3]`|[ScriptObjectProperty] Name=VKR_Shared_Quest|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Object`|265D9D:Vokrii - Minimalistic Perks of Skyrim.esp|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Alias`|-1|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Name`|VKR_Shared_Quest|
|`VirtualMachineAdapter.Scripts[0].Properties[3].Flags`|Edited|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
|`Name`|Hotwire|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-5c3b31d34f96"></a>

## VKR_Loc_060_TreasureHunter_Perk_WasTreasureHunter

- Identidade estável Housecarl: `105F26:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Treasure Hunter; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`26AEAC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-5b262e217d24); Rank=0; Priority=45. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.
- **Effects[1] — PerkQuestEffect**: Quest=05F596:Skyrim.esm; Stage=40; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`05820A:Skyrim.esm`](../perks/PERKS_054.md#r-5d2772fc1556)<br>Parameter1.Link=[`05820A:Skyrim.esm`](../perks/PERKS_054.md#r-5d2772fc1556)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=26AEAC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`26AEAC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-5b262e217d24)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|45|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkQuestEffect] Quest=05F596:Skyrim.esm|
|`Effects[1].Quest`|05F596:Skyrim.esm|
|`Effects[1].Stage`|40|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Treasure Hunter|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b1553ed1d06c"></a>

## VKR_Loc_070_DungeonMaster_Perk

- Identidade estável Housecarl: `03173E:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Dungeon Master; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106259:Skyrim.esm`](../perks/PERKS_054.md#r-dbfb26f1d836)<br>Parameter1.Link=[`106259:Skyrim.esm`](../perks/PERKS_054.md#r-dbfb26f1d836)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Dungeon Master|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-9f7c89e9a550"></a>

## VKR_Loc_080_LuckyGuess_Perk_WasLocksmith

- Identidade estável Housecarl: `058208:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Lucky Guess; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=SetLockpickStartingArc; Modification=Set; Value=25; Rank=0; Priority=100; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`107830:Skyrim.esm`](../perks/PERKS_054.md#r-f6cf55d6ccb0)<br>Parameter1.Link=[`107830:Skyrim.esm`](../perks/PERKS_054.md#r-f6cf55d6ccb0)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|25|
|`Effects[0].EntryPoint`|SetLockpickStartingArc|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|100|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Lucky Guess|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-e0c545ae4b14"></a>

## VKR_Loc_090_Archaeologist_Perk

- Identidade estável Housecarl: `26AEB2:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Archaeologist; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`26AEB0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-c130a36e7437); Rank=0; Priority=40. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`105F26:Skyrim.esm`](../perks/PERKS_054.md#r-5c3b31d34f96)<br>Parameter1.Link=[`105F26:Skyrim.esm`](../perks/PERKS_054.md#r-5c3b31d34f96)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=26AEB0:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`26AEB0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-c130a36e7437)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|40|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Archaeologist|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-9e0dceec7374"></a>

## VKR_Loc_090_Overdrive_Perk

- Identidade estável Housecarl: `26AEB5:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Overdrive; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`265D9B:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_054.md#r-7711d3d52cc4)<br>Parameter1.Link=[`265D9B:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_054.md#r-7711d3d52cc4)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Overdrive|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-ac4eaec05574"></a>

## VKR_Loc_100_Lockmaster_Perk_WasUnbreakable

- Identidade estável Housecarl: `058209:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Lawyer; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointAddActivateChoice**: EntryPoint=Activate; Spell=(null link); Rank=0; Priority=252; PerkConditionTabCount=2. Acrescenta uma escolha de ativação; o cliente apresenta a ação, mas permissões e consequências compartilhadas devem ser validadas pelo servidor.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModLockpickSweetSpot; Modification=Multiply; Value=5; Rank=0; Priority=251; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058208:Skyrim.esm`](../perks/PERKS_054.md#r-9f7c89e9a550)<br>Parameter1.Link=[`058208:Skyrim.esm`](../perks/PERKS_054.md#r-9f7c89e9a550)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetGlobalValue|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=669E8C:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetLocked|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|GetLockLevel|1|Subject; ref=(null link); index=-1|LessThanOrEqualTo 75|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetLocked|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetLockLevel|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 50|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointAddActivateChoice] Spell=Null|
|`Effects[0].EntryPoint`|Activate|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|252|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].ButtonLabel`|Bypass Lock|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|5|
|`Effects[1].EntryPoint`|ModLockpickSweetSpot|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|251|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`VirtualMachineAdapter`|[PerkAdapter]|
|`VirtualMachineAdapter.ScriptFragments`|[PerkScriptFragments]|
|`VirtualMachineAdapter.ScriptFragments.Fragments`|[list: 1 item(s)]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0]`|[IndexedScriptFragment]|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentIndex`|0|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].ScriptName`|PRKF_ORD_LocMAX_SeenThisBefo_00058209|
|`VirtualMachineAdapter.ScriptFragments.Fragments[0].FragmentName`|Fragment_0|
|`VirtualMachineAdapter.ScriptFragments.ExtraBindDataVersion`|2|
|`VirtualMachineAdapter.ScriptFragments.FileName`|PRKF_ORD_LocMAX_SeenThisBefo_00058209|
|`VirtualMachineAdapter.Scripts`|[list: 1 item(s)]|
|`VirtualMachineAdapter.Scripts[0]`|[ScriptEntry] Name=PRKF_ORD_LocMAX_SeenThisBefo_00058209|
|`VirtualMachineAdapter.Scripts[0].Name`|PRKF_ORD_LocMAX_SeenThisBefo_00058209|
|`VirtualMachineAdapter.Scripts[0].Flags`|Local|
|`VirtualMachineAdapter.Scripts[0].Properties`|[list: 0 item(s)]|
|`VirtualMachineAdapter.Version`|5|
|`VirtualMachineAdapter.ObjectFormat`|2|
|`Name`|Lawyer|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-f5abac2d853e"></a>

## VKR_Loc_old_LockpickingMastery2_Perk_WasLocks2

- Identidade estável Housecarl: `0BE125:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Lockpicking Mastery; ranks declarados: 5; NextPerk: [`0C3680:Skyrim.esm`](../perks/PERKS_054.md#r-beae1fc27b82).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModLockpickSweetSpot; Modification=Multiply; Value=2.25; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 25|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F392A:Skyrim.esm`](../perks/PERKS_054.md#r-fef4c842d0fc)<br>Parameter1.Link=[`0F392A:Skyrim.esm`](../perks/PERKS_054.md#r-fef4c842d0fc)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetLockLevel|1|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 25|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetLockLevel|1|Subject; ref=(null link); index=-1|LessThan 50|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2.25|
|`Effects[0].EntryPoint`|ModLockpickSweetSpot|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Lockpicking Mastery|
|`NextPerk`|[`0C3680:Skyrim.esm`](../perks/PERKS_054.md#r-beae1fc27b82)|
|`NumRanks`|5|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-beae1fc27b82"></a>

## VKR_Loc_old_LockpickingMastery3_Perk_WasLocks3

- Identidade estável Housecarl: `0C3680:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Lockpicking Mastery; ranks declarados: 5; NextPerk: [`0C3681:Skyrim.esm`](../perks/PERKS_054.md#r-c96ef0b02d6d).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModLockpickSweetSpot; Modification=Multiply; Value=2.5; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BE125:Skyrim.esm`](../perks/PERKS_054.md#r-f5abac2d853e)<br>Parameter1.Link=[`0BE125:Skyrim.esm`](../perks/PERKS_054.md#r-f5abac2d853e)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetLockLevel|1|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetLockLevel|1|Subject; ref=(null link); index=-1|LessThan 75|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2.5|
|`Effects[0].EntryPoint`|ModLockpickSweetSpot|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Lockpicking Mastery|
|`NextPerk`|[`0C3681:Skyrim.esm`](../perks/PERKS_054.md#r-c96ef0b02d6d)|
|`NumRanks`|5|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-c96ef0b02d6d"></a>

## VKR_Loc_old_LockpickingMastery4_Perk_WasLocks4

- Identidade estável Housecarl: `0C3681:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Lockpicking Mastery; ranks declarados: 5; NextPerk: [`0C3682:Skyrim.esm`](../perks/PERKS_054.md#r-1ad9a2123f1b).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModLockpickSweetSpot; Modification=Multiply; Value=2.75; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 75|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C3680:Skyrim.esm`](../perks/PERKS_054.md#r-beae1fc27b82)<br>Parameter1.Link=[`0C3680:Skyrim.esm`](../perks/PERKS_054.md#r-beae1fc27b82)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetLockLevel|1|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 75|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetLockLevel|1|Subject; ref=(null link); index=-1|LessThan 100|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2.75|
|`Effects[0].EntryPoint`|ModLockpickSweetSpot|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Lockpicking Mastery|
|`NextPerk`|[`0C3682:Skyrim.esm`](../perks/PERKS_054.md#r-1ad9a2123f1b)|
|`NumRanks`|5|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-1ad9a2123f1b"></a>

## VKR_Loc_old_LockpickingMastery5_Perk_WasLocks5

- Identidade estável Housecarl: `0C3682:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Lockpicking Mastery; ranks declarados: 5; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModLockpickSweetSpot; Modification=Multiply; Value=3; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|ActorValue=Lockpicking<br>Parameter1=Lockpicking|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C3681:Skyrim.esm`](../perks/PERKS_054.md#r-c96ef0b02d6d)<br>Parameter1.Link=[`0C3681:Skyrim.esm`](../perks/PERKS_054.md#r-c96ef0b02d6d)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetLockLevel|1|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetLockLevel|1|Subject; ref=(null link); index=-1|LessThan 255|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|3|
|`Effects[0].EntryPoint`|ModLockpickSweetSpot|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Lockpicking Mastery|
|`NumRanks`|5|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-877bfe6db601"></a>

## VKR_One_000_OneHandedMastery_Perk_WasArmsman1

- Identidade estável Housecarl: `0BABE4:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: One-Handed Mastery; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=CalculateWeaponDamage; Modification=MultiplyOnePlusAVMult; ActorValue=OneHanded; Value=0.01; Rank=0; Priority=200; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.
- **Effects[1] — PerkEntryPointModifyActorValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=MultiplyOnePlusAVMult; ActorValue=OneHanded; Value=0.05; Rank=0; Priority=195; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079343:Skyrim.esm`](../perks/PERKS_055.md#r-4ac64b2763fe)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079343:Skyrim.esm`](../perks/PERKS_055.md#r-4ac64b2763fe)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|OneHanded|
|`Effects[0].Value`|0.01|
|`Effects[0].Modification`|MultiplyOnePlusAVMult|
|`Effects[0].EntryPoint`|CalculateWeaponDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyActorValue]|
|`Effects[1].ActorValue`|OneHanded|
|`Effects[1].Value`|0.05|
|`Effects[1].Modification`|MultiplyOnePlusAVMult|
|`Effects[1].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|195|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|One-Handed Mastery|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-c40e4ad90342"></a>

## VKR_One_020_DisciplinedFighter_Perk_20_WasFightingStance

- Identidade estável Housecarl: `052D50:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Disciplined Fighter; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModPowerAttackStamina; Modification=Multiply; Value=0.75; Rank=0; Priority=190; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BABE4:Skyrim.esm`](../perks/PERKS_054.md#r-877bfe6db601)<br>Parameter1.Link=[`0BABE4:Skyrim.esm`](../perks/PERKS_054.md#r-877bfe6db601)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModPowerAttackStamina|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Disciplined Fighter|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-f2cf9958c487"></a>

## VKR_One_030_BasicDagger1_Perk

- Identidade estável Housecarl: `004EFA:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Fangs; ranks declarados: 1; NextPerk: [`004EFB:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-d01d4b850ef4).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.1; Rank=0; Priority=190; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BABE4:Skyrim.esm`](../perks/PERKS_054.md#r-877bfe6db601)<br>Parameter1.Link=[`0BABE4:Skyrim.esm`](../perks/PERKS_054.md#r-877bfe6db601)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`004EFB:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-d01d4b850ef4)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|HasMagicEffectKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=042509:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`4196D2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-7e1be327048c)|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[2]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.1|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Fangs|
|`NextPerk`|[`004EFB:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-d01d4b850ef4)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
