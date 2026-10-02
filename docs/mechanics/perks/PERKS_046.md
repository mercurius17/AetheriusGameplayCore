# Perks instaladas — parte 046

[Índice](../PERK_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-55727020f75d"></a>

## VKR_Alc_old_AlchemyMastery5_Perk_WasAlchemist5

- Identidade estável Housecarl: `0C07CD:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Alchemy Mastery; ranks declarados: 5; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModAlchemyEffectiveness; Modification=Multiply; Value=2; Rank=0; Priority=200; PerkConditionTabCount=1. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Alchemy<br>Parameter1=Alchemy|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C07CC:Skyrim.esm`](../perks/PERKS_045.md#r-c4fdec31ca73)<br>Parameter1.Link=[`0C07CC:Skyrim.esm`](../perks/PERKS_045.md#r-c4fdec31ca73)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|2|
|`Effects[0].EntryPoint`|ModAlchemyEffectiveness|
|`Effects[0].PerkConditionTabCount`|1|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Alchemy Mastery|
|`NumRanks`|5|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-38df2c435d06"></a>

## VKR_Alc_old_Druid_Perk

- Identidade estável Housecarl: `48DE86:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Druid; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`312101:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-fdb68ce7304f); Rank=0; Priority=105. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=Alchemy<br>Parameter1=Alchemy|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`105F2E:Skyrim.esm`](../perks/PERKS_045.md#r-e496f669e808)<br>Parameter1.Link=[`105F2E:Skyrim.esm`](../perks/PERKS_045.md#r-e496f669e808)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=312101:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`312101:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_049.md#r-fdb68ce7304f)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|105|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Druid|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-80a29b73991a"></a>

## VKR_Alt_000_AlterationMastery_Perk_WasAlteration1

- Identidade estável Housecarl: `0F2CA6:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Alteration Mastery; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyActorValue**: EntryPoint=ModSpellCost; Modification=MultiplyOnePlusAVMult; ActorValue=Alteration; Value=-0.005; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point usando um Actor Value e um coeficiente. É necessário ler Modification, ActorValue, Value e conditions juntos; copiar somente o percentual da descrição perde a fórmula.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`0C44B7:Skyrim.esm`](../perks/PERKS_046.md#r-79b0a2f1ffb0)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44B7:Skyrim.esm`](../perks/PERKS_046.md#r-79b0a2f1ffb0)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44B8:Skyrim.esm`](../perks/PERKS_046.md#r-1cf1b8b5f298)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44B9:Skyrim.esm`](../perks/PERKS_047.md#r-9f8812f31465)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BA:Skyrim.esm`](../perks/PERKS_047.md#r-805c55af7322)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 0 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyActorValue]|
|`Effects[0].ActorValue`|Alteration|
|`Effects[0].Value`|-0.005|
|`Effects[0].Modification`|MultiplyOnePlusAVMult|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Alteration Mastery|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7d161c732c87"></a>

## VKR_Alt_020_AlterationDualCasting_Perk_WasAlterationDualCasting

- Identidade estável Housecarl: `0153CD:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Alteration Dual Casting; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=CanDualCastSpell; Modification=Set; Value=1; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)<br>Parameter1.Link=[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|

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
|`Name`|Alteration Dual Casting|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7ce9164c62bb"></a>

## VKR_Alt_020_MageArmor1_Perk_WasMageArmor1

- Identidade estável Housecarl: `0D7999:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Mage Armor; ranks declarados: 1; NextPerk: [`0D799A:Skyrim.esm`](../perks/PERKS_046.md#r-872158b13447).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)<br>Parameter1.Link=[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Mage Armor|
|`NextPerk`|[`0D799A:Skyrim.esm`](../perks/PERKS_046.md#r-872158b13447)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-872158b13447"></a>

## VKR_Alt_020_MageArmor2_Perk_WasMageArmor2

- Identidade estável Housecarl: `0D799A:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Mage Armor; ranks declarados: 1; NextPerk: [`0D799B:Skyrim.esm`](../perks/PERKS_046.md#r-71e49c2b6f93).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)<br>Parameter1.Link=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Mage Armor|
|`NextPerk`|[`0D799B:Skyrim.esm`](../perks/PERKS_046.md#r-71e49c2b6f93)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-71e49c2b6f93"></a>

## VKR_Alt_020_MageArmor3_Perk_WasMageArmor3

- Identidade estável Housecarl: `0D799B:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Mage Armor; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

Não há entrada de efeito expandida. Verifique scripts, cadeia NextPerk e possíveis campos ausentes antes de classificar como inerte.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D799A:Skyrim.esm`](../perks/PERKS_046.md#r-872158b13447)<br>Parameter1.Link=[`0D799A:Skyrim.esm`](../perks/PERKS_046.md#r-872158b13447)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 0 item(s)]|
|`Name`|Mage Armor|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-c0d2f8c1202c"></a>

## VKR_Alt_020_MagicResistance1_Perk_WasMagicResistance1

- Identidade estável Housecarl: `053128:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Magic Resistance; ranks declarados: 1; NextPerk: [`053129:Skyrim.esm`](../perks/PERKS_046.md#r-ebf6e0c97936).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`053125:Skyrim.esm`](../magic/MAGIC_041.md#r-ab840e30454f); Rank=0; Priority=100. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)<br>Parameter1.Link=[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=053125:Skyrim.esm|
|`Effects[0].Ability`|[`053125:Skyrim.esm`](../magic/MAGIC_041.md#r-ab840e30454f)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|100|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Magic Resistance|
|`NextPerk`|[`053129:Skyrim.esm`](../perks/PERKS_046.md#r-ebf6e0c97936)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-ebf6e0c97936"></a>

## VKR_Alt_020_MagicResistance2_Perk_WasMagicResistance2

- Identidade estável Housecarl: `053129:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Magic Resistance; ranks declarados: 1; NextPerk: [`05312A:Skyrim.esm`](../perks/PERKS_046.md#r-76de91cd28b2).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`053126:Skyrim.esm`](../magic/MAGIC_041.md#r-8d5a3d741df9); Rank=0; Priority=100. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`053128:Skyrim.esm`](../perks/PERKS_046.md#r-c0d2f8c1202c)<br>Parameter1.Link=[`053128:Skyrim.esm`](../perks/PERKS_046.md#r-c0d2f8c1202c)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=053126:Skyrim.esm|
|`Effects[0].Ability`|[`053126:Skyrim.esm`](../magic/MAGIC_041.md#r-8d5a3d741df9)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|100|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Magic Resistance|
|`NextPerk`|[`05312A:Skyrim.esm`](../perks/PERKS_046.md#r-76de91cd28b2)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-76de91cd28b2"></a>

## VKR_Alt_020_MagicResistance3_Perk_WasMagicResistance3

- Identidade estável Housecarl: `05312A:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Magic Resistance; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`053127:Skyrim.esm`](../magic/MAGIC_041.md#r-9dcfe21260eb); Rank=0; Priority=100. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`053129:Skyrim.esm`](../perks/PERKS_046.md#r-ebf6e0c97936)<br>Parameter1.Link=[`053129:Skyrim.esm`](../perks/PERKS_046.md#r-ebf6e0c97936)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=053127:Skyrim.esm|
|`Effects[0].Ability`|[`053127:Skyrim.esm`](../magic/MAGIC_041.md#r-9dcfe21260eb)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|100|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Magic Resistance|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-6f1503674786"></a>

## VKR_Alt_030_Battlemage2_Perk

- Identidade estável Housecarl: `32142A:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Battlemage; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.3; Rank=0; Priority=172; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=1.3; Rank=0; Priority=171; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`32142C:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-eb569a4e222b)<br>Parameter1.Link=[`32142C:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_043.md#r-eb569a4e222b)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA8:Skyrim.esm`](../perks/PERKS_049.md#r-90ecb10b697a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BF:Skyrim.esm`](../perks/PERKS_050.md#r-66e84f71d455)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C0:Skyrim.esm`](../perks/PERKS_050.md#r-907ca88f27ab)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C1:Skyrim.esm`](../perks/PERKS_050.md#r-963fe743f3ef)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C2:Skyrim.esm`](../perks/PERKS_051.md#r-e9763c3626fb)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CAA:Skyrim.esm`](../perks/PERKS_056.md#r-89be12cae610)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C7:Skyrim.esm`](../perks/PERKS_057.md#r-177c876aaf88)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C8:Skyrim.esm`](../perks/PERKS_057.md#r-7576fdc84d0d)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[8]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C9:Skyrim.esm`](../perks/PERKS_057.md#r-b00389b66551)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[9]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44CA:Skyrim.esm`](../perks/PERKS_057.md#r-6d5688b2d543)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`32142B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_025.md#r-8bc507861b36)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44B8:Skyrim.esm`](../perks/PERKS_046.md#r-1cf1b8b5f298)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44B7:Skyrim.esm`](../perks/PERKS_046.md#r-79b0a2f1ffb0)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44B9:Skyrim.esm`](../perks/PERKS_047.md#r-9f8812f31465)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[4]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BA:Skyrim.esm`](../perks/PERKS_047.md#r-805c55af7322)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[5]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA7:Skyrim.esm`](../perks/PERKS_048.md#r-6a917fa6c4aa)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[6]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BB:Skyrim.esm`](../perks/PERKS_049.md#r-43b92818b25c)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[7]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BC:Skyrim.esm`](../perks/PERKS_049.md#r-5c66b51aba5a)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[8]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BD:Skyrim.esm`](../perks/PERKS_049.md#r-3595777cbcf1)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[9]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BE:Skyrim.esm`](../perks/PERKS_049.md#r-bafe0e87a888)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[10]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA9:Skyrim.esm`](../perks/PERKS_052.md#r-79612550b467)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[11]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C3:Skyrim.esm`](../perks/PERKS_053.md#r-82028c83c2e4)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[12]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C4:Skyrim.esm`](../perks/PERKS_053.md#r-134f18186f67)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[13]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C5:Skyrim.esm`](../perks/PERKS_053.md#r-714a5b419de6)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[14]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C6:Skyrim.esm`](../perks/PERKS_053.md#r-c25c45386c2e)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasMagicEffect|2|Subject; ref=(null link); index=-1|EqualTo 1|0|MagicEffect=[`32142B:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_025.md#r-8bc507861b36)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.3|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|172|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.3|
|`Effects[1].EntryPoint`|ModSpellDuration|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|171|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Battlemage|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-adb345829ca9"></a>

## VKR_Alt_040_SorcerersRobes_Perk

- Identidade estável Housecarl: `377658:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Sorcerer's Robes; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=1.25; Rank=0; Priority=199; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=1.25; Rank=0; Priority=198; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)<br>Parameter1.Link=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA8:Skyrim.esm`](../perks/PERKS_049.md#r-90ecb10b697a)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BF:Skyrim.esm`](../perks/PERKS_050.md#r-66e84f71d455)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C0:Skyrim.esm`](../perks/PERKS_050.md#r-907ca88f27ab)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C1:Skyrim.esm`](../perks/PERKS_050.md#r-963fe743f3ef)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[4]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C2:Skyrim.esm`](../perks/PERKS_051.md#r-e9763c3626fb)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[5]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CAA:Skyrim.esm`](../perks/PERKS_056.md#r-89be12cae610)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[6]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C7:Skyrim.esm`](../perks/PERKS_057.md#r-177c876aaf88)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[7]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C8:Skyrim.esm`](../perks/PERKS_057.md#r-7576fdc84d0d)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[8]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C9:Skyrim.esm`](../perks/PERKS_057.md#r-b00389b66551)|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[9]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44CA:Skyrim.esm`](../perks/PERKS_057.md#r-6d5688b2d543)|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44B8:Skyrim.esm`](../perks/PERKS_046.md#r-1cf1b8b5f298)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44B7:Skyrim.esm`](../perks/PERKS_046.md#r-79b0a2f1ffb0)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44B9:Skyrim.esm`](../perks/PERKS_047.md#r-9f8812f31465)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[4]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BA:Skyrim.esm`](../perks/PERKS_047.md#r-805c55af7322)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[5]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA7:Skyrim.esm`](../perks/PERKS_048.md#r-6a917fa6c4aa)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[6]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BB:Skyrim.esm`](../perks/PERKS_049.md#r-43b92818b25c)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[7]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BC:Skyrim.esm`](../perks/PERKS_049.md#r-5c66b51aba5a)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[8]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BD:Skyrim.esm`](../perks/PERKS_049.md#r-3595777cbcf1)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[9]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44BE:Skyrim.esm`](../perks/PERKS_049.md#r-bafe0e87a888)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[10]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA9:Skyrim.esm`](../perks/PERKS_052.md#r-79612550b467)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[11]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C3:Skyrim.esm`](../perks/PERKS_053.md#r-82028c83c2e4)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[12]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C4:Skyrim.esm`](../perks/PERKS_053.md#r-134f18186f67)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[13]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C5:Skyrim.esm`](../perks/PERKS_053.md#r-714a5b419de6)|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[14]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0C44C6:Skyrim.esm`](../perks/PERKS_053.md#r-c25c45386c2e)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.25|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|199|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|1.25|
|`Effects[1].EntryPoint`|ModSpellDuration|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|198|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Name`|Sorcerer's Robes|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-75779335a192"></a>

## VKR_Alt_040_Stability_Perk_WasStability

- Identidade estável Housecarl: `0581FC:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.
- Nome: Stability; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=1.25; Rank=0; Priority=180; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)<br>Parameter1.Link=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|EPMagic_SpellHasSkill|1|Subject; ref=(null link); index=-1|EqualTo 1|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Spell<br>Parameter1=Spell|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Scroll<br>Parameter1=Scroll|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|GetIsObjectType|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|FormType=Enchantment<br>Parameter1=Enchantment|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|1.25|
|`Effects[0].EntryPoint`|ModSpellDuration|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|180|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Stability|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-663690aa8fa7"></a>

## VKR_Alt_050_OcatosPreparation_Perk

- Identidade estável Housecarl: `395C65:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Ocato's Preparation; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`395C69:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_053.md#r-3efeb95e1d47); Rank=0; Priority=110. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)<br>Parameter1.Link=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=395C69:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`395C69:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_053.md#r-3efeb95e1d47)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|110|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Ocato's Preparation|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-9da4f265f8ca"></a>

## VKR_Alt_050_TelekineticForce1_Perk

- Identidade estável Housecarl: `02CB0D:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Telekinetic Force; ranks declarados: 1; NextPerk: [`25197E:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_046.md#r-a499408fff3c).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModTelekinesisDamage; Modification=Add; Value=250; Rank=0; Priority=5; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)<br>Parameter1.Link=[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|HasPerk|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Perk=[`25197E:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_046.md#r-a499408fff3c)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|250|
|`Effects[0].EntryPoint`|ModTelekinesisDamage|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|5|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Telekinetic Force|
|`NextPerk`|[`25197E:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_046.md#r-a499408fff3c)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-a499408fff3c"></a>

## VKR_Alt_050_TelekineticForce2_Perk

- Identidade estável Housecarl: `25197E:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Telekinetic Force; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModTelekinesisDamage; Modification=Add; Value=500; Rank=0; Priority=5; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`02CB0D:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_046.md#r-9da4f265f8ca)<br>Parameter1.Link=[`02CB0D:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_046.md#r-9da4f265f8ca)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Add|
|`Effects[0].Value`|500|
|`Effects[0].EntryPoint`|ModTelekinesisDamage|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|5|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Telekinetic Force|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-c90a3106a6f4"></a>

## VKR_Alt_060_AlterSelf1_Perk

- Identidade estável Housecarl: `02B56F:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Alter Self; ranks declarados: 1; NextPerk: [`01D661:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_046.md#r-582a552aea2c).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`02B56D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-6468986e4e66); Rank=0; Priority=150. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`053128:Skyrim.esm`](../perks/PERKS_046.md#r-c0d2f8c1202c)<br>Parameter1.Link=[`053128:Skyrim.esm`](../perks/PERKS_046.md#r-c0d2f8c1202c)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=02B56D:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`02B56D:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_040.md#r-6468986e4e66)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|150|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Alter Self|
|`NextPerk`|[`01D661:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_046.md#r-582a552aea2c)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-582a552aea2c"></a>

## VKR_Alt_060_AlterSelf2_Perk

- Identidade estável Housecarl: `01D661:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Alter Self; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`01D65F:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_039.md#r-c2957799aba5); Rank=0; Priority=145. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`02B56F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_046.md#r-c90a3106a6f4)<br>Parameter1.Link=[`02B56F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_046.md#r-c90a3106a6f4)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=01D65F:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`01D65F:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_039.md#r-c2957799aba5)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|145|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Alter Self|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-51d9d93179ca"></a>

## VKR_Alt_060_Initiate_Perk

- Identidade estável Housecarl: `01B57F:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Initiate; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0; Rank=0; Priority=2; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0581FC:Skyrim.esm`](../perks/PERKS_046.md#r-75779335a192)<br>Parameter1.Link=[`0581FC:Skyrim.esm`](../perks/PERKS_046.md#r-75779335a192)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA7:Skyrim.esm`](../perks/PERKS_048.md#r-6a917fa6c4aa)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA8:Skyrim.esm`](../perks/PERKS_049.md#r-90ecb10b697a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CA9:Skyrim.esm`](../perks/PERKS_052.md#r-79612550b467)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[4]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Perk=[`0F2CAA:Skyrim.esm`](../perks/PERKS_056.md#r-89be12cae610)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[5]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`08D5BF:Skyrim.esm`](../magic/MAGIC_043.md#r-fa9ed586c07f)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[6]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`08D5C0:Skyrim.esm`](../magic/MAGIC_043.md#r-6d194e9e8253)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[7]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`08D5C1:Skyrim.esm`](../magic/MAGIC_043.md#r-4ca05c3de9c9)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[8]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Object=[`08D5C2:Skyrim.esm`](../magic/MAGIC_043.md#r-098543f7342b)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[9]`|GetIsID|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Object=[`06A104:Skyrim.esm`](../magic/MAGIC_042.md#r-b1223ba2b593)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|2|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Initiate|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-b905c8b04f3e"></a>

## VKR_Alt_080_Atronach_Perk_WasAtronach

- Identidade estável Housecarl: `0581F7:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Atronach; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`0954D7:Skyrim.esm`](../magic/MAGIC_043.md#r-fc7719587580); Rank=0; Priority=110. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`02B56F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_046.md#r-c90a3106a6f4)<br>Parameter1.Link=[`02B56F:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_046.md#r-c90a3106a6f4)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=0954D7:Skyrim.esm|
|`Effects[0].Ability`|[`0954D7:Skyrim.esm`](../magic/MAGIC_043.md#r-fc7719587580)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|110|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Atronach|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-d8a682a088b9"></a>

## VKR_Alt_080_ForceOfWill_Perk

- Identidade estável Housecarl: `01B591:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Force of Will; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModIncomingDamage; Modification=Multiply; Value=0.8; Rank=0; Priority=102; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 80|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`377658:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_046.md#r-adb345829ca9)<br>Parameter1.Link=[`377658:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_046.md#r-adb345829ca9)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|IsCasting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|IsDualCasting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[2]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[3]`|WornHasKeyword|0|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.8|
|`Effects[0].EntryPoint`|ModIncomingDamage|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|102|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Force of Will|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-7f87c815a374"></a>

## VKR_Alt_090_ParalyzingEscape_Perk

- Identidade estável Housecarl: `395C75:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Hethoth's Escape; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkAbilityEffect**: Ability=[`395C70:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_053.md#r-15fb5670a88d); Rank=0; Priority=105. Concede uma ability ligada; o resultado depende dos efeitos SPEL → MGEF. Concessão e remoção precisam guardar a origem; a presença da perk não prova que o dano remoto foi aplicado.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 90|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`02CB20:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_013.md#r-4bd28f7517a0)<br>Parameter1.Link=[`02CB20:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_013.md#r-4bd28f7517a0)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkAbilityEffect] Ability=395C70:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].Ability`|[`395C70:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_053.md#r-15fb5670a88d)|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|105|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Hethoth's Escape|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-8c7826c4016c"></a>

## VKR_Alt_100_Ritualist_Perk_CreditHaddeqi

- Identidade estável Housecarl: `321436:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.
- Nome: Ritualist; ranks declarados: 1; NextPerk: (null link).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellMagnitude; Modification=Multiply; Value=0.75; Rank=0; Priority=105; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[1] — PerkEntryPointModifyValue**: EntryPoint=ModSpellDuration; Modification=Multiply; Value=0.75; Rank=0; Priority=104; PerkConditionTabCount=3. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.
- **Effects[2] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=1; Rank=0; Priority=103; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 100|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0581FC:Skyrim.esm`](../perks/PERKS_046.md#r-75779335a192)<br>Parameter1.Link=[`0581FC:Skyrim.esm`](../perks/PERKS_046.md#r-75779335a192)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|GetMovementDirection|0|Subject; ref=(null link); index=-1|NotEqualTo 0|0|—|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[1]`|IsCasting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0806E1:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=08BB92:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[0]`|GetMovementDirection|0|Subject; ref=(null link); index=-1|NotEqualTo 0|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0].Conditions[1]`|IsCasting|0|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0806E1:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=08BB92:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0].Conditions[0]`|GetMovementDirection|0|Subject; ref=(null link); index=-1|NotEqualTo 0|0|—|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[0]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=0806E1:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[1].Conditions[1]`|HasKeyword|1|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=08BB92:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.75|
|`Effects[0].EntryPoint`|ModSpellMagnitude|
|`Effects[0].PerkConditionTabCount`|3|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|105|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Effects[1]`|[PerkEntryPointModifyValue]|
|`Effects[1].Modification`|Multiply|
|`Effects[1].Value`|0.75|
|`Effects[1].EntryPoint`|ModSpellDuration|
|`Effects[1].PerkConditionTabCount`|3|
|`Effects[1].Rank`|0|
|`Effects[1].Priority`|104|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Effects[1].Flags`|[PerkScriptFlag]|
|`Effects[1].Flags.Flags`|0|
|`Effects[1].Flags.FragmentIndex`|0|
|`Effects[2]`|[PerkEntryPointModifyValue]|
|`Effects[2].Modification`|Multiply|
|`Effects[2].Value`|1|
|`Effects[2].EntryPoint`|ModSpellCost|
|`Effects[2].PerkConditionTabCount`|2|
|`Effects[2].Rank`|0|
|`Effects[2].Priority`|103|
|`Effects[2].Conditions`|[list: 2 item(s)]|
|`Effects[2].Flags`|[PerkScriptFlag]|
|`Effects[2].Flags.Flags`|0|
|`Effects[2].Flags.FragmentIndex`|0|
|`Name`|Ritualist|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-79b0a2f1ffb0"></a>

## VKR_Alt_old_AlterationMastery2_Perk_WasAlteration2

- Identidade estável Housecarl: `0C44B7:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Alteration Mastery; ranks declarados: 1; NextPerk: [`0C44B8:Skyrim.esm`](../perks/PERKS_046.md#r-1cf1b8b5f298).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.5; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 25|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)<br>Parameter1.Link=[`0F2CA6:Skyrim.esm`](../perks/PERKS_046.md#r-80a29b73991a)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C44B7:Skyrim.esm`](../perks/PERKS_046.md#r-79b0a2f1ffb0)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Alteration Mastery|
|`NextPerk`|[`0C44B8:Skyrim.esm`](../perks/PERKS_046.md#r-1cf1b8b5f298)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|

<a id="r-1cf1b8b5f298"></a>

## VKR_Alt_old_AlterationMastery3_Perk_WasAlteration3

- Identidade estável Housecarl: `0C44B8:Skyrim.esm`.
- Tipo: `Perk`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 3.
- Nome: Alteration Mastery; ranks declarados: 1; NextPerk: [`0C44B9:Skyrim.esm`](../perks/PERKS_047.md#r-9f8812f31465).
- Metadados: Level=0, Playable=True, Hidden=False, Trait=False, IsDeleted=False.

### Funcionamento dos efeitos observados

- **Effects[0] — PerkEntryPointModifyValue**: EntryPoint=ModSpellCost; Modification=Multiply; Value=0.5; Rank=0; Priority=200; PerkConditionTabCount=2. Modifica o valor do entry point por Set, Add ou Multiply. O ponto de aplicação e os alvos vêm do evento e das abas de conditions; não é automaticamente um bônus global permanente.

**Impacto multiplayer a verificar nesta perk:** avaliar cada CTDA no contexto indicado abaixo; decidir ownership por efeito, manter identidade da fonte, executar RNG e mutações compartilhadas uma vez e emitir projeção versionada. Effects diferentes podem exigir capacidades diferentes. Uma única condition desconhecida impede classificar a perk inteira como fiel; usar o critério de suporte de [entry points](../ENTRY_POINTS.md).

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Conditions[0]`|GetBaseActorValue|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|ActorValue=Alteration<br>Parameter1=Alteration|aliases=False; package=False|
|`Conditions[1]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C44B7:Skyrim.esm`](../perks/PERKS_046.md#r-79b0a2f1ffb0)<br>Parameter1.Link=[`0C44B7:Skyrim.esm`](../perks/PERKS_046.md#r-79b0a2f1ffb0)|aliases=False; package=False|
|`Effects[0].Conditions[0].Conditions[0]`|SpellHasCastingPerk|1|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0C44B8:Skyrim.esm`](../perks/PERKS_046.md#r-1cf1b8b5f298)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Conditions`|[list: 2 item(s)]|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[PerkEntryPointModifyValue]|
|`Effects[0].Modification`|Multiply|
|`Effects[0].Value`|0.5|
|`Effects[0].EntryPoint`|ModSpellCost|
|`Effects[0].PerkConditionTabCount`|2|
|`Effects[0].Rank`|0|
|`Effects[0].Priority`|200|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[0].Flags`|[PerkScriptFlag]|
|`Effects[0].Flags.Flags`|0|
|`Effects[0].Flags.FragmentIndex`|0|
|`Name`|Alteration Mastery|
|`NextPerk`|[`0C44B9:Skyrim.esm`](../perks/PERKS_047.md#r-9f8812f31465)|
|`NumRanks`|1|
|`Playable`|True|
|`Hidden`|False|
|`Level`|0|
|`Trait`|False|
|`IsDeleted`|False|
