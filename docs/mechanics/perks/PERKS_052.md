# Perks instaladas — parte 052

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-e5c842c53de9"></a>

## VKR_Hea_000_HeavyArmorMastery_Perk_WasJuggernaut1

- Identidade estável Housecarl: `0BCD2A:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Heavy Armor Mastery; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModArmorRating; Modification=MultiplyOnePlusAVMult; ActorValue=HeavyArmor; Value=0.01; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`07935E:Skyrim.esm`](../perks/PERKS_052.md#r-832bed934179)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=0965B2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|HeavyArmor|
|`Effects[0].Value`|0.01|
|`Effects[0].Modification`|MultiplyOnePlusAVMult|
|`Effects[0].EntryPoint`|ModArmorRating|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Heavy Armor Mastery|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a20f4ca06339"></a>

## VKR_Hea_020_Cushioned1_Perk_WasCushioned

- Identidade estável Housecarl: `0BCD2B:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Cushioned; ranks declarados: 1; NextPerk: [`008029:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-da25e48b436c).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModFallingDamage; Modification=Multiply; Value=0.5; Rank=0; Priority=170; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BCD2A:Skyrim.esm`](../perks/PERKS_052.md#r-e5c842c53de9)<br>Parameter1.Link=[`0BCD2A:Skyrim.esm`](../perks/PERKS_052.md#r-e5c842c53de9)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`008029:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-da25e48b436c)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-1140a94a546f)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModFallingDamage|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|170|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Cushioned|
|`NextPerk`|[`008029:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-da25e48b436c)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-da25e48b436c"></a>

## VKR_Hea_020_Cushioned2_Perk

- Identidade estável Housecarl: `008029:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Cushioned; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModFallingDamage; Modification=Multiply; Value=0; Rank=0; Priority=170; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BCD2B:Skyrim.esm`](../perks/PERKS_052.md#r-a20f4ca06339)<br>Parameter1.Link=[`0BCD2B:Skyrim.esm`](../perks/PERKS_052.md#r-a20f4ca06339)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-1140a94a546f)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModFallingDamage|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|170|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Cushioned|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7379d83c0efd"></a>

## VKR_Hea_030_BattleFatigue_Perk

- Identidade estável Housecarl: `2C1037:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Battle Fatigue; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.8; Rank=0; Priority=200; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.85; Rank=0; Priority=199; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.9; Rank=0; Priority=198; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.95; Rank=0; Priority=197; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BCD2A:Skyrim.esm`](../perks/PERKS_052.md#r-e5c842c53de9)<br>Parameter1.Link=[`0BCD2A:Skyrim.esm`](../perks/PERKS_052.md#r-e5c842c53de9)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-1140a94a546f)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|GetActorValuePercent|1|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.125|0|ActorValue=Stamina<br>Parameter1=Stamina|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-1140a94a546f)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|GetActorValuePercent|1|Subject; ref=(null link); index=-1|GreaterThan 0.125|0|ActorValue=Stamina<br>Parameter1=Stamina|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|GetActorValuePercent|1|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.25|0|ActorValue=Stamina<br>Parameter1=Stamina|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[2]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[3]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[4]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-1140a94a546f)|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|GetActorValuePercent|1|Subject; ref=(null link); index=-1|GreaterThan 0.25|0|ActorValue=Stamina<br>Parameter1=Stamina|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|GetActorValuePercent|1|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.375|0|ActorValue=Stamina<br>Parameter1=Stamina|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[2]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[3]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[4]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-1140a94a546f)|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[0]`|GetActorValuePercent|1|Subject; ref=(null link); index=-1|GreaterThan 0.375|0|ActorValue=Stamina<br>Parameter1=Stamina|aliases=False; package=False|
|`Effects[3].Conditions[1].Conditions[1]`|GetActorValuePercent|1|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Stamina<br>Parameter1=Stamina|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.8|
|`Effects[0].EntryPoint`|ModIncomingDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0.85|
|`Effects[1].EntryPoint`|ModIncomingDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|199|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|0.9|
|`Effects[2].EntryPoint`|ModIncomingDamage|
|`Effects[2].PerkConditionTabCount`|3|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|198|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|0.95|
|`Effects[3].EntryPoint`|ModIncomingDamage|
|`Effects[3].PerkConditionTabCount`|3|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|197|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Name`|Battle Fatigue|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-ae695847f9ff"></a>

## VKR_Hea_030_HeavyArmorFit_Perk_30_WasWellFitted

- Identidade estável Housecarl: `058F6F:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Heavy Armor Fit; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.15; Rank=0; Priority=190; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BCD2A:Skyrim.esm`](../perks/PERKS_052.md#r-e5c842c53de9)<br>Parameter1.Link=[`0BCD2A:Skyrim.esm`](../perks/PERKS_052.md#r-e5c842c53de9)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-1140a94a546f)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.15|
|`Effects[0].EntryPoint`|ModArmorRating|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|190|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Heavy Armor Fit|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-1140a94a546f"></a>

## VKR_Hea_040_FaceOfDeath_Perk

- Identidade estável Housecarl: `008028:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Face of Death; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.2; Rank=0; Priority=123; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058F6F:Skyrim.esm`](../perks/PERKS_052.md#r-ae695847f9ff)<br>Parameter1.Link=[`058F6F:Skyrim.esm`](../perks/PERKS_052.md#r-ae695847f9ff)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.2|
|`Effects[0].EntryPoint`|ModArmorRating|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|123|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Face of Death|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-9cdfdce50329"></a>

## VKR_Hea_040_ImmovableObject_Perk

- Identidade estável Housecarl: `2C1038:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Immovable Object; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`07E6FA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_042.md#r-7c633cdfc22d); Rank=0; Priority=170. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`2C1037:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-7379d83c0efd)<br>Parameter1.Link=[`2C1037:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-7379d83c0efd)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=07E6FA:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`07E6FA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_042.md#r-7c633cdfc22d)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|170|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Immovable Object|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-60e407c3cdf7"></a>

## VKR_Hea_050_HeavyArmorTraining_Perk_WasConditioning

- Identidade estável Housecarl: `058F6D:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Heavy Armor Training; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorWeight; Modification=Multiply; Value=0; Rank=0; Priority=168; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModArmorWeight; Modification=Multiply; Value=0; Rank=0; Priority=167; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModArmorWeight; Modification=Multiply; Value=0; Rank=0; Priority=166; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[3] — PerkEntryPointModifyValue**: EntryPoint=ModArmorWeight; Modification=Multiply; Value=0; Rank=0; Priority=165; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058F6F:Skyrim.esm`](../perks/PERKS_052.md#r-ae695847f9ff)<br>Parameter1.Link=[`058F6F:Skyrim.esm`](../perks/PERKS_052.md#r-ae695847f9ff)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModArmorWeight|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|168|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0|
|`Effects[1].EntryPoint`|ModArmorWeight|
|`Effects[1].PerkConditionTabCount`|2|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|167|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|0|
|`Effects[2].EntryPoint`|ModArmorWeight|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|166|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Effects[3]`|[PerkEntryPointModifyValue]|
|`Effects[3].Modification`|Multiply|
|`Effects[3].Value`|0|
|`Effects[3].EntryPoint`|ModArmorWeight|
|`Effects[3].PerkConditionTabCount`|2|
|`Effects[3].Rank`|0|
|`Effects[3].Priority`|165|
|`Effects[3].Conditions`|[list: 1 item(s)]|
|`Effects[3].Flags`|[PerkScriptFlag]|
|`Effects[3].Flags.Flags`|0|
|`Effects[3].Flags.FragmentIndex`|0|
|`Name`|Heavy Armor Training|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7fa122992e3a"></a>

## VKR_Hea_060_ReapTheWhirlwind_Perk

- Identidade estável Housecarl: `008037:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Reap the Whirlwind; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAttackDamage; Modification=Multiply; Value=1.2; Rank=0; Priority=117; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=CalculateMyCriticalHitDamage; Modification=Multiply; Value=1.2; Rank=0; Priority=116; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`2C1038:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-9cdfdce50329)<br>Parameter1.Link=[`2C1038:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-9cdfdce50329)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`2C103A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_024.md#r-6efcb408c9c2)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetIsID|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`2C103A:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_024.md#r-6efcb408c9c2)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.2|
|`Effects[0].EntryPoint`|ModAttackDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|117|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.2|
|`Effects[1].EntryPoint`|CalculateMyCriticalHitDamage|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|116|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Reap the Whirlwind|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-3555a901d26d"></a>

## VKR_Hea_060_TowerOfStrength_Perk_WasTowerOfStrength

- Identidade estável Housecarl: `058F6C:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Tower of Strength; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.75; Rank=0; Priority=200; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058F6D:Skyrim.esm`](../perks/PERKS_052.md#r-60e407c3cdf7)<br>Parameter1.Link=[`058F6D:Skyrim.esm`](../perks/PERKS_052.md#r-60e407c3cdf7)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-1140a94a546f)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsPowerAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|IsAttackType|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=000F54:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModIncomingDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Tower of Strength|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0014e312778a"></a>

## VKR_Hea_070_MatchingHeavySet_Perk_WasMatchingSetHeavy

- Identidade estável Housecarl: `107832:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 4.
- Nome: Matching Heavy Set; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.15; Rank=0; Priority=155; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058F6D:Skyrim.esm`](../perks/PERKS_052.md#r-60e407c3cdf7)<br>Parameter1.Link=[`058F6D:Skyrim.esm`](../perks/PERKS_052.md#r-60e407c3cdf7)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 3|OR|Keyword=06BBD4:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 3|OR|Keyword=06BBD5:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 3|OR|Keyword=06BBD7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 3|OR|Keyword=06BBE2:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 3|OR|Keyword=06BBE5:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 3|OR|Keyword=06BBE3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 3|OR|Keyword=06BBE4:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 3|OR|Keyword=06BBE6:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[8]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 3|OR|Keyword=06BBE7:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[9]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 3|OR|Keyword=06BBD8:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[10]`|WornApparelHasKeywordCount|0|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 3|OR|Keyword=0009C0:Update.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.15|
|`Effects[0].EntryPoint`|ModArmorRating|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|155|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Matching Heavy Set|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-0d135dc6061c"></a>

## VKR_Hea_080_ElementalDefense_Perk

- Identidade estável Housecarl: `2C1039:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Elemental Defense; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingSpellMagnitude; Modification=Multiply; Value=0.85; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`058F6C:Skyrim.esm`](../perks/PERKS_052.md#r-3555a901d26d)<br>Parameter1.Link=[`058F6C:Skyrim.esm`](../perks/PERKS_052.md#r-3555a901d26d)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-1140a94a546f)|aliases=False; package=False|
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
|`Effects[0].Value`|0.85|
|`Effects[0].EntryPoint`|ModIncomingSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Elemental Defense|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-8204a51f3fc2"></a>

## VKR_Hea_090_GlancingBlows_Perk_WasReflectBlows

- Identidade estável Housecarl: `105F33:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Glancing Blows; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`344BC1:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_051.md#r-aa78b206f5a2); Rank=0; Priority=185. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`2C1039:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-0d135dc6061c)<br>Parameter1.Link=[`2C1039:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-0d135dc6061c)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=344BC1:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`344BC1:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_051.md#r-aa78b206f5a2)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|185|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Glancing Blows|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-93be165ee64d"></a>

## VKR_Hea_100_FaceOfTheMountain_Perk

- Identidade estável Housecarl: `0DD7FA:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Face of the Mountain; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`07E6FA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_042.md#r-7c633cdfc22d); Rank=0; Priority=110. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`008037:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-7fa122992e3a)<br>Parameter1.Link=[`008037:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-7fa122992e3a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=07E6FA:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`07E6FA:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_042.md#r-7c633cdfc22d)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|110|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Face of the Mountain|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-832bed934179"></a>

## VKR_Hea_old_HeavyArmorMastery2_Perk_WasJuggernaut2

- Identidade estável Housecarl: `07935E:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Heavy Armor Mastery; ranks declarados: 1; NextPerk: [`079361:Skyrim.esm`](../perks/PERKS_052.md#r-df6f364ed317).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.4; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BCD2A:Skyrim.esm`](../perks/PERKS_052.md#r-e5c842c53de9)<br>Parameter1.Link=[`0BCD2A:Skyrim.esm`](../perks/PERKS_052.md#r-e5c842c53de9)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079361:Skyrim.esm`](../perks/PERKS_052.md#r-df6f364ed317)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD2:Skyrim.esm|aliases=False; package=False|
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
|`Name`|Heavy Armor Mastery|
|`NextPerk`|[`079361:Skyrim.esm`](../perks/PERKS_052.md#r-df6f364ed317)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-df6f364ed317"></a>

## VKR_Hea_old_HeavyArmorMastery3_Perk_WasJuggernaut3

- Identidade estável Housecarl: `079361:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Heavy Armor Mastery; ranks declarados: 1; NextPerk: [`079362:Skyrim.esm`](../perks/PERKS_052.md#r-be7697d95147).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.6; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`07935E:Skyrim.esm`](../perks/PERKS_052.md#r-832bed934179)<br>Parameter1.Link=[`07935E:Skyrim.esm`](../perks/PERKS_052.md#r-832bed934179)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079362:Skyrim.esm`](../perks/PERKS_052.md#r-be7697d95147)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD2:Skyrim.esm|aliases=False; package=False|
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
|`Name`|Heavy Armor Mastery|
|`NextPerk`|[`079362:Skyrim.esm`](../perks/PERKS_052.md#r-be7697d95147)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-be7697d95147"></a>

## VKR_Hea_old_HeavyArmorMastery4_Perk_WasJuggernaut4

- Identidade estável Housecarl: `079362:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Heavy Armor Mastery; ranks declarados: 1; NextPerk: [`079374:Skyrim.esm`](../perks/PERKS_052.md#r-a168f857ee19).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=1.8; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`079361:Skyrim.esm`](../perks/PERKS_052.md#r-df6f364ed317)<br>Parameter1.Link=[`079361:Skyrim.esm`](../perks/PERKS_052.md#r-df6f364ed317)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`079374:Skyrim.esm`](../perks/PERKS_052.md#r-a168f857ee19)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD2:Skyrim.esm|aliases=False; package=False|
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
|`Name`|Heavy Armor Mastery|
|`NextPerk`|[`079374:Skyrim.esm`](../perks/PERKS_052.md#r-a168f857ee19)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a168f857ee19"></a>

## VKR_Hea_old_HeavyArmorMastery5_Perk_WasJuggernaut5

- Identidade estável Housecarl: `079374:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Heavy Armor Mastery; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModArmorRating; Modification=Multiply; Value=2; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`079362:Skyrim.esm`](../perks/PERKS_052.md#r-be7697d95147)<br>Parameter1.Link=[`079362:Skyrim.esm`](../perks/PERKS_052.md#r-be7697d95147)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06BBD2:Skyrim.esm|aliases=False; package=False|
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
|`Name`|Heavy Armor Mastery|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-5c4906367497"></a>

## VKR_Hea_old_Sovereign_Perk

- Identidade estável Housecarl: `2C103E:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Never Kneel; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.75; Rank=0; Priority=200; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=HeavyArmor<br>Parameter1=HeavyArmor|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0BCD2A:Skyrim.esm`](../perks/PERKS_052.md#r-e5c842c53de9)<br>Parameter1.Link=[`0BCD2A:Skyrim.esm`](../perks/PERKS_052.md#r-e5c842c53de9)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-1140a94a546f)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|IsPowerAttacking|1|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModIncomingDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Never Kneel|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-79612550b467"></a>

## VKR_Ill_000_IllusionMastery_Perk_WasIllusion1

- Identidade estável Housecarl: `0F2CA9:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Illusion Mastery; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellCost; Modification=MultiplyOnePlusAVMult; ActorValue=Illusion; Value=-0.005; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA9:Skyrim.esm`](../perks/PERKS_052.md#r-79612550b467)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C3:Skyrim.esm`](../perks/PERKS_053.md#r-82028c83c2e4)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C4:Skyrim.esm`](../perks/PERKS_053.md#r-134f18186f67)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C5:Skyrim.esm`](../perks/PERKS_053.md#r-714a5b419de6)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C6:Skyrim.esm`](../perks/PERKS_053.md#r-c25c45386c2e)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Illusion|
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
|`Name`|Illusion Mastery|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-dac0690b4b04"></a>

## VKR_Ill_020_IllusionDualCasting_Perk_WasIllusionDualCasting

- Identidade estável Housecarl: `0153D0:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Illusion Dual Casting; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=CanDualCastSpell; Modification=Set; Value=1; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CA9:Skyrim.esm`](../perks/PERKS_052.md#r-79612550b467)<br>Parameter1.Link=[`0F2CA9:Skyrim.esm`](../perks/PERKS_052.md#r-79612550b467)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|

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
|`Name`|Illusion Dual Casting|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-bdc261676638"></a>

## VKR_Ill_040_Terror_Perk_WasAspectOfTerror

- Identidade estável Housecarl: `059B78:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Terror; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`059B77:Skyrim.esm`](../perks/PERKS_013.md#r-12c3c6e49bf0)<br>Parameter1.Link=[`059B77:Skyrim.esm`](../perks/PERKS_013.md#r-12c3c6e49bf0)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Terror|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-dc2a281aaddb"></a>

## VKR_Ill_050_QuietCasting_Perk_WasQuietCasting

- Identidade estável Housecarl: `0581FD:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Quiet Casting; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCastingSoundEvent; Modification=Set; Value=0; Rank=0; Priority=150; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CA9:Skyrim.esm`](../perks/PERKS_052.md#r-79612550b467)<br>Parameter1.Link=[`0F2CA9:Skyrim.esm`](../perks/PERKS_052.md#r-79612550b467)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Set|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModSpellCastingSoundEvent|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|150|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Quiet Casting|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-fc658b8a8d4a"></a>

## VKR_Ill_070_MasterOfTheMind1_Perk_WasMasterOfTheMind

- Identidade estável Housecarl: `059B76:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Master of the Mind; ranks declarados: 1; NextPerk: [`307ED7:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-a0b7fbbaf691).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=0.5; Rank=0; Priority=130; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkQuestEffect**: Quest=05F596:Skyrim.esm; Stage=10; Rank=0; Priority=0. Aciona uma etapa de quest. Estado de quest e autoridade multiplayer precisam de contrato próprio; não tratar como bônus numérico.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0581E1:Skyrim.esm`](../perks/PERKS_013.md#r-fdbba8e5c52a)<br>Parameter1.Link=[`0581E1:Skyrim.esm`](../perks/PERKS_013.md#r-fdbba8e5c52a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`307ED7:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-a0b7fbbaf691)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=078098:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=01CEAD:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[0]`|GetIsID|2|Subject; ref=(null link); index=-1|EqualTo 0|0|Object=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[1]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013797:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[2]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=013796:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[3]`|HasKeyword|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=01397A:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2].Conditions[4]`|IsUndead|2|Subject; ref=(null link); index=-1|EqualTo 1|OR|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModSpellDuration|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|130|
|`Effects[0].Conditions`|[list: 3 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkQuestEffect] Quest=05F596:Skyrim.esm|
|`Effects[1].Quest`|05F596:Skyrim.esm|
|`Effects[1].Stage`|10|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Master of the Mind|
|`NextPerk`|[`307ED7:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-a0b7fbbaf691)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a0b7fbbaf691"></a>

## VKR_Ill_070_MasterOfTheMind2_Perk

- Identidade estável Housecarl: `307ED7:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Master of the Mind; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|ActorValue=Illusion<br>Parameter1=Illusion|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`059B76:Skyrim.esm`](../perks/PERKS_052.md#r-fc658b8a8d4a)<br>Parameter1.Link=[`059B76:Skyrim.esm`](../perks/PERKS_052.md#r-fc658b8a8d4a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Master of the Mind|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
