# Perks instaladas — parte 055

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-d01d4b850ef4"></a>

## VKR_One_030_BasicDagger2_Perk

- Identidade estável Housecarl: `004EFB:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Fangs; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.2; Rank=0; Priority=190; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`004EFA:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_054.md#r-f2cf9958c487)<br>Parameter1.Link=[`004EFA:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_054.md#r-f2cf9958c487)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasMagicEffectKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=042509:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`4196D2:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_031.md#r-7e1be327048c)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 0|0|MagicEffect=[`344BC0:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_026.md#r-cfd167e90cc8)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.2|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Fangs|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-36342356efa9"></a>

## VKR_One_040_FuriousStrength_Perk_WasSavageStrike

- Identidade estável Housecarl: `03AF81:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Furious Strength; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModPowerAttackDamage; Modification=MultiplyOnePlusAVMult; ActorValue=Stamina; Value=0.001; Rank=0; Priority=120; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`052D50:Skyrim.esm`](../perks/PERKS_054.md#r-c40e4ad90342)<br>Parameter1.Link=[`052D50:Skyrim.esm`](../perks/PERKS_054.md#r-c40e4ad90342)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Stamina|
|`Effects[0].Value`|0.001|
|`Effects[0].Modification`|MultiplyOnePlusAVMult|
|`Effects[0].EntryPoint`|ModPowerAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|120|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Furious Strength|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-4c4904b87f12"></a>

## VKR_One_050_ValorousCharge_Perk_WasCriticalCharge

- Identidade estável Housecarl: `0CB406:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Valorous Charge; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=1.13; Rank=0; Priority=178; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=1.25; Rank=0; Priority=177; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=1.38; Rank=0; Priority=176; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=1.5; Rank=0; Priority=175; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[4] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.13; Rank=0; Priority=154; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[5] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.25; Rank=0; Priority=153; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[6] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.38; Rank=0; Priority=152; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[7] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.5; Rank=0; Priority=151; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03AF81:Skyrim.esm`](../perks/PERKS_055.md#r-36342356efa9)<br>Parameter1.Link=[`03AF81:Skyrim.esm`](../perks/PERKS_055.md#r-36342356efa9)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|IsSprinting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|GreaterThan 0.5|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[1]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.625|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|IsSprinting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[0]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|GreaterThan 0.625|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[1].Conditions[2].Conditions[1]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.75|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|IsSprinting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[0]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|GreaterThan 0.75|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[2].Conditions[2].Conditions[1]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.875|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|IsSprinting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2].Conditions[0]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|GreaterThan 0.875|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[0]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[0].Conditions[1]`|IsSprinting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[0]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|GreaterThan 0.5|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[4].Conditions[2].Conditions[1]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.625|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[0]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[0].Conditions[1]`|IsSprinting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[0]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|GreaterThan 0.625|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[5].Conditions[2].Conditions[1]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.75|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[0]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[0].Conditions[1]`|IsSprinting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[6].Conditions[2].Conditions[0]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|GreaterThan 0.75|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[6].Conditions[2].Conditions[1]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.875|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[0]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E6:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[0].Conditions[1]`|IsSprinting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[7].Conditions[2].Conditions[0]`|GetActorValuePercent|2|Subject; ref=(null link); index=-1|GreaterThan 0.875|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 8 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.13|
|`Effects[0].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|178|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.25|
|`Effects[1].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|177|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|1.38|
|`Effects[2].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|176|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|1.5|
|`Effects[3].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|175|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Effects[4]`|[PerkEntryPointModifyValue]|
|`Effects[4].Modification`|Multiply|
|`Effects[4].Value`|1.13|
|`Effects[4].EntryPoint`|ModAttackDamage|
|`Effects[4].PerkConditionTabCount`|3|
|`Effects[4].Rank`|0|
|`Effects[4].Priority`|154|
|`Effects[4].Conditions`|[list: 3 item(s)]|
|`Effects[4].Flags`|[PerkScriptFlag]|
|`Effects[4].Flags.Flags`|0|
|`Effects[4].Flags.FragmentIndex`|0|
|`Effects[5]`|[PerkEntryPointModifyValue]|
|`Effects[5].Modification`|Multiply|
|`Effects[5].Value`|1.25|
|`Effects[5].EntryPoint`|ModAttackDamage|
|`Effects[5].PerkConditionTabCount`|3|
|`Effects[5].Rank`|0|
|`Effects[5].Priority`|153|
|`Effects[5].Conditions`|[list: 3 item(s)]|
|`Effects[5].Flags`|[PerkScriptFlag]|
|`Effects[5].Flags.Flags`|0|
|`Effects[5].Flags.FragmentIndex`|0|
|`Effects[6]`|[PerkEntryPointModifyValue]|
|`Effects[6].Modification`|Multiply|
|`Effects[6].Value`|1.38|
|`Effects[6].EntryPoint`|ModAttackDamage|
|`Effects[6].PerkConditionTabCount`|3|
|`Effects[6].Rank`|0|
|`Effects[6].Priority`|152|
|`Effects[6].Conditions`|[list: 3 item(s)]|
|`Effects[6].Flags`|[PerkScriptFlag]|
|`Effects[6].Flags.Flags`|0|
|`Effects[6].Flags.FragmentIndex`|0|
|`Effects[7]`|[PerkEntryPointModifyValue]|
|`Effects[7].Modification`|Multiply|
|`Effects[7].Value`|1.5|
|`Effects[7].EntryPoint`|ModAttackDamage|
|`Effects[7].PerkConditionTabCount`|3|
|`Effects[7].Rank`|0|
|`Effects[7].Priority`|151|
|`Effects[7].Conditions`|[list: 3 item(s)]|
|`Effects[7].Flags`|[PerkScriptFlag]|
|`Effects[7].Flags.Flags`|0|
|`Effects[7].Flags.FragmentIndex`|0|
|`Name`|Valorous Charge|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2d9289b0a65e"></a>

## VKR_One_060_DualSavagery_Perk_WasDualSavagery

- Identidade estável Housecarl: `106258:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Dual Savagery; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.5; Rank=0; Priority=100; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModTargetStagger; Modification=Multiply; Value=1.5; Rank=0; Priority=60; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106256:Skyrim.esm`](../perks/PERKS_043.md#r-bcf919957d77)<br>Parameter1.Link=[`106256:Skyrim.esm`](../perks/PERKS_043.md#r-bcf919957d77)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 4|0|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 4|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 4|0|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 4|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.5|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|100|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.5|
|`Effects[1].EntryPoint`|ModTargetStagger|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|60|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Dual Savagery|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-82089f5f3b5e"></a>

## VKR_One_080_Bladedancer_Perk

- Identidade estável Housecarl: `344BC9:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Bladedancer; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.7; Rank=0; Priority=105; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`106258:Skyrim.esm`](../perks/PERKS_055.md#r-2d9289b0a65e)<br>Parameter1.Link=[`106258:Skyrim.esm`](../perks/PERKS_055.md#r-2d9289b0a65e)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsPowerAttacking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 4|0|ItemSource=Left<br>Parameter1=Left|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|GreaterThan 0|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|GetEquippedItemType|0|Subject; ref=(null link); index=-1|LessThanOrEqualTo 4|0|ItemSource=Right<br>Parameter1=Right|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.7|
|`Effects[0].EntryPoint`|ModIncomingDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|105|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Bladedancer|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-11685b8770e2"></a>

## VKR_One_100_VictoryRush_Perk_WasParalyzingStrike

- Identidade estável Housecarl: `03AFA6:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Victory Rush; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`344BCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_051.md#r-bf446e4b9b09); Rank=0; Priority=220; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`353F1B:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-032d19a9a357)<br>Parameter1.Link=[`353F1B:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-032d19a9a357)|aliases=False; package=False|
|`Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)<br>Parameter1.Link=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)|aliases=False; package=False|
|`Conditions[3]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C1E91:Skyrim.esm`](../perks/PERKS_044.md#r-0357a69d30c1)<br>Parameter1.Link=[`0C1E91:Skyrim.esm`](../perks/PERKS_044.md#r-0357a69d30c1)|aliases=False; package=False|
|`Conditions[4]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C3679:Skyrim.esm`](../perks/PERKS_044.md#r-db5412e5d266)<br>Parameter1.Link=[`0C3679:Skyrim.esm`](../perks/PERKS_044.md#r-db5412e5d266)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 5 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=344BCC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`344BCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_051.md#r-bf446e4b9b09)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|220|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Victory Rush|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-5b59fac7f0e6"></a>

## VKR_One_old_Fangs3_Perk

- Identidade estável Housecarl: `004EFC:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Fangs; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.3; Rank=0; Priority=190; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`004EFB:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-d01d4b850ef4)<br>Parameter1.Link=[`004EFB:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-d01d4b850ef4)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasMagicEffectKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=042509:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.3|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Fangs|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-4ac64b2763fe"></a>

## VKR_One_old_OneHandedMastery2_Perk_WasArmsman2

- Identidade estável Housecarl: `079343:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: One-Handed Mastery; ranks declarados: 1; NextPerk: [`079342:Skyrim.esm`](../perks/PERKS_055.md#r-81ab7cc30d37).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=CalculateWeaponDamage; Modification=Multiply; Value=1.4; Rank=0; Priority=200; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=3; Rank=0; Priority=195; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BABE4:Skyrim.esm`](../perks/PERKS_054.md#r-877bfe6db601)<br>Parameter1.Link=[`0BABE4:Skyrim.esm`](../perks/PERKS_054.md#r-877bfe6db601)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079342:Skyrim.esm`](../perks/PERKS_055.md#r-81ab7cc30d37)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079342:Skyrim.esm`](../perks/PERKS_055.md#r-81ab7cc30d37)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.4|
|`Effects[0].EntryPoint`|CalculateWeaponDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|3|
|`Effects[1].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|195|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|One-Handed Mastery|
|`NextPerk`|[`079342:Skyrim.esm`](../perks/PERKS_055.md#r-81ab7cc30d37)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-81ab7cc30d37"></a>

## VKR_One_old_OneHandedMastery3_Perk_WasArmsman3

- Identidade estável Housecarl: `079342:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: One-Handed Mastery; ranks declarados: 1; NextPerk: [`079344:Skyrim.esm`](../perks/PERKS_055.md#r-30e1e580e69f).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=CalculateWeaponDamage; Modification=Multiply; Value=1.6; Rank=0; Priority=200; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=4; Rank=0; Priority=195; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`079343:Skyrim.esm`](../perks/PERKS_055.md#r-4ac64b2763fe)<br>Parameter1.Link=[`079343:Skyrim.esm`](../perks/PERKS_055.md#r-4ac64b2763fe)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079344:Skyrim.esm`](../perks/PERKS_055.md#r-30e1e580e69f)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079344:Skyrim.esm`](../perks/PERKS_055.md#r-30e1e580e69f)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.6|
|`Effects[0].EntryPoint`|CalculateWeaponDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|4|
|`Effects[1].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|195|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|One-Handed Mastery|
|`NextPerk`|[`079344:Skyrim.esm`](../perks/PERKS_055.md#r-30e1e580e69f)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-30e1e580e69f"></a>

## VKR_One_old_OneHandedMastery4_Perk_WasArmsman4

- Identidade estável Housecarl: `079344:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: One-Handed Mastery; ranks declarados: 1; NextPerk: [`079345:Skyrim.esm`](../perks/PERKS_055.md#r-926c6974af6d).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=CalculateWeaponDamage; Modification=Multiply; Value=1.8; Rank=0; Priority=200; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=5; Rank=0; Priority=195; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`079342:Skyrim.esm`](../perks/PERKS_055.md#r-81ab7cc30d37)<br>Parameter1.Link=[`079342:Skyrim.esm`](../perks/PERKS_055.md#r-81ab7cc30d37)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079345:Skyrim.esm`](../perks/PERKS_055.md#r-926c6974af6d)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079345:Skyrim.esm`](../perks/PERKS_055.md#r-926c6974af6d)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.8|
|`Effects[0].EntryPoint`|CalculateWeaponDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|5|
|`Effects[1].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|195|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|One-Handed Mastery|
|`NextPerk`|[`079345:Skyrim.esm`](../perks/PERKS_055.md#r-926c6974af6d)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-926c6974af6d"></a>

## VKR_One_old_OneHandedMastery5_Perk_WasArmsman5

- Identidade estável Housecarl: `079345:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: One-Handed Mastery; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=CalculateWeaponDamage; Modification=Multiply; Value=2; Rank=0; Priority=200; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=6; Rank=0; Priority=195; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`079344:Skyrim.esm`](../perks/PERKS_055.md#r-30e1e580e69f)<br>Parameter1.Link=[`079344:Skyrim.esm`](../perks/PERKS_055.md#r-30e1e580e69f)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|CalculateWeaponDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|6|
|`Effects[1].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|195|
|`Effects[1].Conditions`|[list: 1 item(s)]|
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

<a id="r-1b07afe3d161"></a>

## VKR_One_old_SweepAttack_Perk

- Identidade estável Housecarl: `344BC8:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Sweep Attack; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=SetSweepAttack; Modification=Set; Value=1; Rank=0; Priority=0; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0CB406:Skyrim.esm`](../perks/PERKS_055.md#r-4c4904b87f12)<br>Parameter1.Link=[`0CB406:Skyrim.esm`](../perks/PERKS_055.md#r-4c4904b87f12)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsAttackType|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=0914E7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|1|
|`Effects[0].EntryPoint`|SetSweepAttack|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Sweep Attack|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2b8b395d7b7a"></a>

## VKR_One_old_VictoryRush_Perk

- Identidade estável Housecarl: `344BCB:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Victory Rush; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointSelectSpell**: EntryPoint=ApplyCombatHitSpell; Spell=[`344BCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_051.md#r-bf446e4b9b09); Rank=0; Priority=220; PerkConditionTabCount=3. Seleciona uma spell no entry point. Validar gatilho, alvo, duração e cadeia SPEL → MGEF antes de aplicar; o servidor precisa impedir um segundo proc pelo cliente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|ActorValue=OneHanded<br>Parameter1=OneHanded|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)<br>Parameter1.Link=[`0C1E93:Skyrim.esm`](../perks/PERKS_044.md#r-c87b239e2633)|aliases=False; package=False|
|`Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C1E91:Skyrim.esm`](../perks/PERKS_044.md#r-0357a69d30c1)<br>Parameter1.Link=[`0C1E91:Skyrim.esm`](../perks/PERKS_044.md#r-0357a69d30c1)|aliases=False; package=False|
|`Conditions[3]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C3679:Skyrim.esm`](../perks/PERKS_044.md#r-db5412e5d266)<br>Parameter1.Link=[`0C3679:Skyrim.esm`](../perks/PERKS_044.md#r-db5412e5d266)|aliases=False; package=False|
|`Conditions[4]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`353F1B:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-032d19a9a357)<br>Parameter1.Link=[`353F1B:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_044.md#r-032d19a9a357)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E713:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E714:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01E711:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=01E712:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 5 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointSelectSpell] Spell=344BCC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Spell`|[`344BCC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_051.md#r-bf446e4b9b09)|
|`Effects[0].EntryPoint`|ApplyCombatHitSpell|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|220|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Victory Rush|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-fda24d34e5e3"></a>

## VKR_Pic_000_PickpocketMastery_Perk_WasLightFingers1

- Identidade estável Housecarl: `0BE124:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Pickpocket Mastery; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModPickpocketChance; Modification=AddAVMult; ActorValue=Pickpocket; Value=1; Rank=0; Priority=200; PerkConditionTabCount=3. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`018E6A:Skyrim.esm`](../perks/PERKS_056.md#r-e49a32d0e17f)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Pickpocket|
|`Effects[0].Value`|1|
|`Effects[0].Modification`|AddAVMult|
|`Effects[0].EntryPoint`|ModPickpocketChance|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Pickpocket Mastery|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-57c9cc31faf9"></a>

## VKR_Pic_020_Cutpurse_Perk_WasCutpurse

- Identidade estável Housecarl: `058204:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Cutpurse; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModPickpocketChance; Modification=Add; Value=50; Rank=0; Priority=150; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=Pickpocket<br>Parameter1=Pickpocket|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BE124:Skyrim.esm`](../perks/PERKS_055.md#r-fda24d34e5e3)<br>Parameter1.Link=[`0BE124:Skyrim.esm`](../perks/PERKS_055.md#r-fda24d34e5e3)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=00000F:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=08F95A:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetIsObjectType|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Key<br>Parameter1=Key|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0914ED:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=06851E:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|50|
|`Effects[0].EntryPoint`|ModPickpocketChance|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|150|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Cutpurse|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-cc04234f53c3"></a>

## VKR_Pic_030_Oblivious_Perk_WasNightThief

- Identidade estável Housecarl: `058202:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Oblivious; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModPickpocketChance; Modification=Add; Value=25; Rank=0; Priority=145; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=Pickpocket<br>Parameter1=Pickpocket|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058204:Skyrim.esm`](../perks/PERKS_055.md#r-57c9cc31faf9)<br>Parameter1.Link=[`058204:Skyrim.esm`](../perks/PERKS_055.md#r-57c9cc31faf9)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsSneaking|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetDetected|1|Subject; ref=(null link); index=-1|EqualTo 0|0|TargetNpc=000014:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|25|
|`Effects[0].EntryPoint`|ModPickpocketChance|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|145|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Oblivious|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b765df42f1c5"></a>

## VKR_Pic_030_Payday_Perk

- Identidade estável Housecarl: `032D1F:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Payday; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`26FFBC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-dda001a3d20b); Rank=0; Priority=80. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=Pickpocket<br>Parameter1=Pickpocket|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BE124:Skyrim.esm`](../perks/PERKS_055.md#r-fda24d34e5e3)<br>Parameter1.Link=[`0BE124:Skyrim.esm`](../perks/PERKS_055.md#r-fda24d34e5e3)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=26FFBC:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`26FFBC:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-dda001a3d20b)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|80|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Payday|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-2f3c0b817752"></a>

## VKR_Pic_040_DeathsEmperor1_Perk

- Identidade estável Housecarl: `03222D:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Death's Emperor; ranks declarados: 1; NextPerk: [`032231:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-3d8fefad2320).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModPickpocketChance; Modification=Add; Value=100; Rank=0; Priority=102; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkAbilityEffect**: Ability=[`2750C3:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-3c3a0b772029); Rank=0; Priority=50. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Pickpocket<br>Parameter1=Pickpocket|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058204:Skyrim.esm`](../perks/PERKS_055.md#r-57c9cc31faf9)<br>Parameter1.Link=[`058204:Skyrim.esm`](../perks/PERKS_055.md#r-57c9cc31faf9)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetItemCount|1|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 1|0|ItemOrList=032228:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=032228:Vokrii - Minimalistic Perks of Skyrim.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|100|
|`Effects[0].EntryPoint`|ModPickpocketChance|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|102|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkAbilityEffect] Ability=2750C3:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].Ability`|[`2750C3:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_048.md#r-3c3a0b772029)|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|50|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Death's Emperor|
|`NextPerk`|[`032231:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-3d8fefad2320)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-3d8fefad2320"></a>

## VKR_Pic_040_DeathsEmperor2_Perk

- Identidade estável Housecarl: `032231:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Death's Emperor; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=Pickpocket<br>Parameter1=Pickpocket|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`03222D:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-2f3c0b817752)<br>Parameter1.Link=[`03222D:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-2f3c0b817752)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Death's Emperor|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-e24976f010c8"></a>

## VKR_Pic_040_Poisoned_Perk_WasPoisoned

- Identidade estável Housecarl: `105F28:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Poisoned; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ShouldApplyPlacedItem; Modification=Set; Value=1; Rank=0; Priority=100; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Pickpocket<br>Parameter1=Pickpocket|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`058202:Skyrim.esm`](../perks/PERKS_055.md#r-cc04234f53c3)<br>Parameter1.Link=[`058202:Skyrim.esm`](../perks/PERKS_055.md#r-cc04234f53c3)|aliases=False; package=False|
|`Conditions[2]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`03222D:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-2f3c0b817752)<br>Parameter1.Link=[`03222D:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-2f3c0b817752)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsPoison|2|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 3 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|1|
|`Effects[0].EntryPoint`|ShouldApplyPlacedItem|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|100|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Poisoned|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-312d809df32f"></a>

## VKR_Pic_050_ExtraPockets_Perk_WasHiddenPockets

- Identidade estável Housecarl: `096590:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Extra Pockets; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`096592:Skyrim.esm`](../magic/MAGIC_043.md#r-8b4d8c9035d1); Rank=0; Priority=30. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Pickpocket<br>Parameter1=Pickpocket|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BE124:Skyrim.esm`](../perks/PERKS_055.md#r-fda24d34e5e3)<br>Parameter1.Link=[`0BE124:Skyrim.esm`](../perks/PERKS_055.md#r-fda24d34e5e3)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=096592:Skyrim.esm|
|`Effects[0].Ability`|[`096592:Skyrim.esm`](../magic/MAGIC_043.md#r-8b4d8c9035d1)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|30|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Extra Pockets|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0ae4872ff1bd"></a>

## VKR_Pic_060_LawlessTimes1_Perk

- Identidade estável Housecarl: `034873:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Lawless Times; ranks declarados: 1; NextPerk: [`4B1599:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-58dc98ad5b07).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`034871:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-989268315f6c); Rank=0; Priority=85. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Pickpocket<br>Parameter1=Pickpocket|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058202:Skyrim.esm`](../perks/PERKS_055.md#r-cc04234f53c3)<br>Parameter1.Link=[`058202:Skyrim.esm`](../perks/PERKS_055.md#r-cc04234f53c3)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=034871:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`034871:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-989268315f6c)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|85|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Lawless Times|
|`NextPerk`|[`4B1599:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-58dc98ad5b07)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-58dc98ad5b07"></a>

## VKR_Pic_060_LawlessTimes2_Perk

- Identidade estável Housecarl: `4B1599:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Lawless Times; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=Pickpocket<br>Parameter1=Pickpocket|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`034873:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-0ae4872ff1bd)<br>Parameter1.Link=[`034873:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-0ae4872ff1bd)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Lawless Times|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-35ab4687c7e5"></a>

## VKR_Pic_070_Trickster_Perk_WasMisdirection

- Identidade estável Housecarl: `058201:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Trickster; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=CanPickpocketEquippedItem; Modification=Set; Value=1; Rank=0; Priority=150; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=Pickpocket<br>Parameter1=Pickpocket|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`105F28:Skyrim.esm`](../perks/PERKS_055.md#r-e24976f010c8)<br>Parameter1.Link=[`105F28:Skyrim.esm`](../perks/PERKS_055.md#r-e24976f010c8)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=08F958:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=10CD0A:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=10CD09:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|1|
|`Effects[0].EntryPoint`|CanPickpocketEquippedItem|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|150|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Trickster|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-e8b88ca71206"></a>

## VKR_Pic_080_ConspicuousWealth_Perk

- Identidade estável Housecarl: `33A982:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Conspicuous Wealth; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`33A980:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_050.md#r-31f2c10a519f); Rank=0; Priority=80. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Pickpocket<br>Parameter1=Pickpocket|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`032D1F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-b765df42f1c5)<br>Parameter1.Link=[`032D1F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_055.md#r-b765df42f1c5)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=33A980:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`33A980:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_050.md#r-31f2c10a519f)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|80|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Conspicuous Wealth|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
