# Pesquisa técnica: Vokrii, fórmulas de dano e resistência física e sua integração ao SkyMP

**Objeto da pesquisa:** analisar como o mod *Vokrii – Minimalistic Perks of Skyrim* modifica o combate original de Skyrim, sua influência sobre dano físico, resistência, habilidades e vantagens, e as implicações no SkyMP e no Aetherius Roleplay.

**Versão de referência:** Vokrii 3.8.2, identificada na pesquisa anterior como versão principal na página do mod. Alterações posteriores podem mudar perks e valores.

**Fontes de referência:** [Vokrii no Nexus Mods](https://www.nexusmods.com/skyrimspecialedition/mods/26176); [documentação de dano do SkyMP](https://github.com/skyrim-multiplayer/skymp/blob/main/docs/docs_onhit_and_damage.md); [TES5DamageFormula.cpp no SkyMP](https://github.com/skyrim-multiplayer/skymp/blob/main/skymp5-server/cpp/server_guest_lib/formulas/TES5DamageFormula.cpp); [TES5DamageFormula.cpp no fork mercurius17](https://github.com/mercurius17/skymp/blob/main/skymp5-server/cpp/server_guest_lib/formulas/TES5DamageFormula.cpp).

> **Escopo da verificação:** os efeitos e números de perks a seguir decorrem das descrições públicas consultadas para a pesquisa, enquanto as constatações sobre o servidor decorrem do arquivo `TES5DamageFormula.cpp` consultado no fork. Os registros internos do `Vokrii.esp` e todos os caminhos de execução do gamemode não foram integralmente auditados. As expressões de composição de efeitos são modelos de referência, não transcrições linha a linha do motor do jogo.

---

## 1. O que o Vokrii altera

Vokrii é um overhaul de árvores de vantagens (*perks*) que procura preservar a estrutura do Skyrim original, mas reformula a progressão de habilidades e introduz efeitos ofensivos e defensivos. Sua influência sobre o combate pode ser dividida em cinco categorias:

| Categoria | Alterações |
|---|---|
| Dano físico | Multiplicadores ligados a habilidades, armas, atributos e condições de combate. |
| Resistência física | Modificadores de armadura, redução direta de dano e efeitos condicionais. |
| Ataques especiais | Críticos, ataques poderosos, sangramentos e efeitos de incapacitação. |
| Progressão | Vantagens cujo efeito escala com o nível de habilidade. |
| Interações | Dependência de Health, Stamina, equipamento, movimento e estado do alvo. |

O Vokrii não substitui necessariamente uma fórmula inteira por outra: muitas vantagens usam mecanismos já existentes no motor de Skyrim, enquanto outras acrescentam efeitos e condições. No SkyMP, é preciso distinguir o que o cliente processa visual ou localmente daquilo que o servidor utiliza para calcular o dano autoritativo.

## 2. One-Handed, Two-Handed e Archery: habilidades e Mastery

No Skyrim original, a progressão básica de habilidade para dano de arma é representada por:

\[
M_{\mathrm{skill}}=1+\frac{H}{200}
\]

em que `H` é o nível de One-Handed, Two-Handed ou Archery. Uma habilidade no nível 100 fornece multiplicador básico de `1,5`.

### 2.1. One-Handed Mastery

A descrição pública de **One-Handed Mastery** informa aumento de **1% de dano por nível de One-Handed** e **5% de dano crítico por nível**. Em lugar dos cinco níveis originais de Armsman, o bônus da Mastery escala com a habilidade:

\[
M_{\mathrm{Mastery}}=1+\frac{H}{100}
\]

| One-Handed | Bônus da Mastery | Multiplicador |
|---:|---:|---:|
| 20 | 20% | 1,20 |
| 40 | 40% | 1,40 |
| 60 | 60% | 1,60 |
| 80 | 80% | 1,80 |
| 100 | 100% | 2,00 |

A Mastery não substitui automaticamente o multiplicador natural da habilidade. Como representação dos dois efeitos:

\[
D=(B+S)\times M_{\mathrm{skill}}\times M_{\mathrm{Mastery}}
\]

em que `B` é o dano-base da arma e `S` sua melhoria de Smithing. **A implementação exata deve respeitar o agrupamento de modificadores realizado pelo motor**, sobretudo na presença de outros efeitos de dano.

**Exemplo:** espada de dano-base 20, One-Handed 100 e One-Handed Mastery:

\[
D=20\times1{,}5\times2=\boxed{60}
\]

Esse valor de referência coincide com a combinação One-Handed 100 + Armsman 5 do Skyrim original, mas a progressão por perks é diferente.

### 2.2. Two-Handed Mastery

Two-Handed Mastery segue a mesma descrição de escala: **1% de dano e 5% de dano crítico por nível de Two-Handed**. Considerando apenas os efeitos naturais de habilidade e Mastery:

\[
D=(B+S)\left(1+\frac H{200}\right)\left(1+\frac H{100}\right)
\]

| Two-Handed | Habilidade | Mastery | Multiplicador conjunto |
|---:|---:|---:|---:|
| 20 | 1,10 | 1,20 | 1,32 |
| 40 | 1,20 | 1,40 | 1,68 |
| 60 | 1,30 | 1,60 | 2,08 |
| 80 | 1,40 | 1,80 | 2,52 |
| 100 | 1,50 | 2,00 | 3,00 |

O servidor precisa distinguir o **nível da habilidade** da **perk efetivamente adquirida**: dois personagens com Two-Handed 80 não devem necessariamente receber o mesmo multiplicador se apenas um tiver Mastery.

### 2.3. Archery Mastery e distância

Archery Mastery também acrescenta 1% de dano e 5% de dano crítico por nível. Vokrii introduz ainda modificadores dependentes da distância:

| Perk | Condição e bônus descritos |
|---|---|
| Far Shot | Até 20% ou 40% de dano extra contra alvos além de 60 pés (cerca de 18,3 m), conforme nível da perk e distância. |
| Point Blank Shot | Até 20% ou 40% de dano extra contra alvos a menos de 20 pés (cerca de 6,1 m), conforme nível e proximidade. |

Um modelo de cálculo é:

\[
D_{\mathrm{arco}}=D_{\mathrm{base}}M_{\mathrm{skill}}M_{\mathrm{Mastery}}M_{\mathrm{distância}}
\]

A documentação pública informa os bônus máximos, mas não basta para reconstruir a interpolação exata em todas as distâncias. É preciso examinar os registros da perk e validar a distância no instante do impacto no ambiente multiplayer.

## 3. Ataques poderosos e atributos: Furious Strength e Ferocious Strength

**Furious Strength**, na árvore One-Handed, acrescenta **0,1% de dano em ataques poderosos por ponto de Stamina** considerado pela perk. **Ferocious Strength**, em Two-Handed, utiliza uma escala análoga. **Disciplined Fighter** reduz em 25% o custo de Stamina de ataques poderosos de uma mão.

A escala percentual descrita pode ser representada por:

\[
M_{\mathrm{força}}=1+0{,}001S
\]

| Stamina considerada | Bônus | Multiplicador |
|---:|---:|---:|
| 100 | 10% | 1,10 |
| 200 | 20% | 1,20 |
| 300 | 30% | 1,30 |
| 400 | 40% | 1,40 |
| 500 | 50% | 1,50 |

**Exemplo ilustrativo:** espada de dano-base 20, One-Handed 100, Mastery, ataque poderoso 2× e Stamina considerada 300:

\[
20\times1{,}5\times2\times2\times1{,}3=\boxed{156}
\]

O exemplo não inclui outros efeitos. Deve-se confirmar no `Vokrii.esp` se o parâmetro é Stamina base, máxima ou corrente e em que momento é lido; caso seja corrente, a ordem entre gasto de Stamina e cálculo do ataque altera o resultado.

## 4. Heavy Armor e Light Armor

As Masteries defensivas modificam a armadura dos equipamentos segundo o nível da habilidade correspondente. É preciso manter separados o efeito natural da skill defensiva e o efeito da perk: não basta substituir uma progressão pela outra.

### 4.1. Heavy Armor Mastery

A descrição pública informa aumento de **1% da armadura fornecida por peças pesadas por nível de Heavy Armor**, permitindo representar a escala da perk como:

\[
M_{\mathrm{Mastery}}=1+\frac H{100}
\]

No nível 100, a escala da Mastery é 2× sobre a contribuição afetada, sujeita às regras de composição com outros efeitos. Vantagens como Heavy Armor Fit e Matching Heavy Set adicionam condições ligadas às peças e ao conjunto utilizado.

### 4.2. Battle Fatigue

Battle Fatigue pode reduzir em **até 20%** o dano recebido de atacantes com pouca Stamina, desde que o defensor satisfaça as condições de equipamento. O efeito depende, portanto, do **estado do atacante**, não apenas da armadura do defensor.

Modelo conceitual:

\[
D_{\mathrm{recebido}}=D_{\mathrm{ataque}}(1-R_{\mathrm{armadura}})(1-R_{\mathrm{BattleFatigue}})
\]

O valor exato da redução depende das condições internas da perk. Ela não deve ser implementada como bônus permanente de Armor Rating.

### 4.3. Tower of Strength

Tower of Strength fornece **25% de redução de dano contra ataques poderosos e bashes** enquanto são atendidas as condições de equipamento pesado.

Exemplo com 50% de redução por armadura, ataque poderoso de 100 e perk ativa:

\[
100\times0{,}5\times0{,}75=\boxed{37{,}5}
\]

Essa redução atua sobre o dano restante; não equivale a acrescentar 25 pontos percentuais à porcentagem da armadura.

### 4.4. Wardancer

Wardancer aumenta em **20% o dano de ataques e o dano crítico** quando as condições do conjunto leve são atendidas. Um ataque não bloqueado recebido desativa temporariamente o efeito por **10 segundos**.

```text
Possui Wardancer e conjunto exigido?
  Não → sem bônus
  Sim → recebeu golpe não bloqueado nos últimos 10 s?
          Sim → bônus desativado
          Não → aplicar bônus
```

Exemplo isolado: 60 de dano tornam-se `60 × 1,2 = 72` enquanto o efeito estiver ativo. O SkyMP precisa manter o estado temporário no servidor, e não verificar apenas se o jogador possui a perk.

### 4.5. Evasive Sprint

Evasive Sprint fornece **50% de redução de dano durante sprint**, observadas suas condições de equipamento. Exemplo com ataque de 100 e 60% de redução por armadura:

\[
100\times0{,}4\times0{,}5=\boxed{20}
\]

No multiplayer, o estado de sprint deve ser confirmado para o instante do ataque. Apenas confiar no estado visual ou em uma declaração isolada do cliente permite inconsistências ou abusos.

## 5. Redução temporária de armadura: Denting Blows e Crushing Blows

Essas vantagens diferem da penetração percentual de Bone Breaker e Skull Crusher do Skyrim original. Em vez de apenas ignorar uma porcentagem da proteção num golpe, as descrições do Vokrii indicam **redução temporária do valor de armadura do alvo**.

| Perk | Nível 1 | Nível 2 | Duração descrita |
|---|---:|---:|---:|
| Denting Blows (maças) | −100 AR | −150 AR | 10 s |
| Crushing Blows (martelos de guerra) | −150 AR | −200 AR | 10 s |

**Exemplo com fórmula vanilla de armadura:** um alvo com 500 AR efetivos tem 60% de redução (`500 × 0,0012`). Após uma redução de 150 AR, fica com 350 AR, ou 42% de redução. O dano de um ataque de 100 passa de 40 para 58, supondo o debuff já ativo.

O momento de ativação em relação ao golpe que desencadeia a redução, os critérios de acumulação, substituição e renovação exigem inspeção dos registros internos do mod. No SkyMP, o servidor deve gerenciar a duração e o estado do debuff.

## 6. Interação com a fórmula de resistência planejada para o Aetherius

O modelo discutido para o servidor pretende:

- **500 pontos de armadura → 80% de redução física**;
- **1.000 pontos de armadura → 90% de redução física (hard cap)**.

Uma função por partes que satisfaz esses marcos é:

\[
R(A)=\begin{cases}
0{,}0016A, & 0\le A\le500\\
0{,}8+0{,}0002(A-500), & 500<A\le1000\\
0{,}9, & A>1000
\end{cases}
\]

É necessário estabelecer se `A` representa armadura efetiva ou o valor exibido na interface e como tratar os bônus ocultos de armadura.

**Impacto de debuffs de Vokrii em alvo com 500 AR:**

| Condição | Armadura após efeito | Redução pelo modelo Aetherius | Dano recebido de ataque de 100 |
|---|---:|---:|---:|
| Sem debuff | 500 | 80% | 20 |
| Denting Blows 2 (−150) | 350 | 56% | 44 |
| Crushing Blows 2 (−200) | 300 | 48% | 52 |

No exemplo, Denting Blows 2 aumenta o dano recebido de 20 para 44, **120% de aumento relativo**. Com a curva vanilla, reduzir um alvo de 500 para 350 AR faz o dano subir de 40 para 58, aumento relativo de 45%.

**Conclusão:** preservar os mesmos valores absolutos de redução de armadura pode gerar impactos bem diferentes após alterar a curva defensiva. O balanceamento deve considerar essa interação, sem supor que o efeito da perk será idêntico ao observado no jogo original.

## 7. Críticos no Vokrii

As Masteries de One-Handed, Two-Handed e Archery acrescentam, conforme suas descrições, **5% de dano crítico por nível de habilidade**. Isso não equivale a 5% de dano *total* por nível: o modificador age sobre o componente crítico pertinente.

Exemplo didático: dano físico normal 60, componente crítico adicional de referência 10, habilidade 100 e Mastery com aumento crítico de 500%:

\[
D_{\mathrm{crítico\ adicional}}=10\times6=60
\]

Nesse cenário simplificado, o dano do golpe seria `60 + 60 = 120`, sem contar outros efeitos ou detalhes internos do motor.

| Perk | Efeito descrito |
|---|---|
| Execute | Ataques poderosos com espada contra alvos abaixo de 20% de Health: crítico com multiplicador de 10× sobre o componente crítico correspondente. |
| Shieldbiter | Ataques poderosos com machado de guerra podem atravessar bloqueios e produzir crítico de 6×. |
| Coup de Grace | Ataques poderosos com espadão contra alvos abaixo de 30% de Health: crítico de 10×. |
| Warmaster | Ataques poderosos frontais com duas mãos podem paralisar o alvo e produzir crítico de 2×. |

Essas condições não podem ser substituídas por uma regra universal `critical = true → dano × 2`. É necessário tratar tipo de arma, categoria do golpe, Health do alvo e perk que produz o efeito.

## 8. O que o código consultado do SkyMP realmente faz

A documentação do SkyMP descreve um evento de ataque `OnHit` e uma interface `IDamageFormula`, com implementação `TES5DamageFormula`. O próprio projeto registra que a reprodução das fórmulas de Skyrim é incompleta.

No arquivo consultado do fork `mercurius17/skymp`, a função ofensiva principal é:

```cpp
float TES5DamageFormulaImpl::CalcWeaponRating() const
{
  // TODO(#457): take other components into account
  return GetBaseWeaponDamage();
}
```

`GetBaseWeaponDamage()` consulta o dano do registro `WEAP` identificado por `hitData.source`. **Essa função não considera One-Handed, Two-Handed, Archery, suas Masteries ou as melhorias individualizadas de Smithing.** Portanto, se esse caminho for o cálculo autoritativo utilizado no combate do servidor, instalar Vokrii no cliente não fará a progressão ofensiva completa funcionar no servidor.

Na defesa, `CalcArmorRatingComponent()` soma o valor-base de peças de `ARMO` equipadas e determinados efeitos de encantamento ligados a `DamageResist`. Há comentário TODO sobre componentes ausentes. O código, nesse trecho, não recompõe integralmente os efeitos de Heavy Armor, Light Armor e suas perks de Vokrii.

Para bloqueio, a implementação consultada contém:

```cpp
if (hitData.isHitBlocked) {
  // TODO(#460): implement correct block formula
  damage *= 0.1f;
}
```

Isso significa um multiplicador **fixo de 0,1** quando o hit é marcado como bloqueado, sem consulta, nesse trecho, ao nível de Block, Block Mastery ou Weapon Block. Também há TODOs relativos a dificuldade e modificador furtivo, e a função aplica `1.3f` ao ataque furtivo quando a flag correspondente está ativa.

> **Limite desta auditoria:** as constatações acima são verificadas no arquivo consultado; não demonstram que todos os caminhos de dano do gamemode do Aetherius utilizam essa implementação, nem excluem substituições de `IDamageFormula` por outros componentes.

## 9. Dados necessários para suporte a Vokrii no servidor

| Dados autoritativos | Finalidade |
|---|---|
| One-Handed, Two-Handed, Archery | Multiplicadores de dano por habilidade. |
| Heavy Armor, Light Armor, Block | Proteção e bloqueio. |
| Perks efetivamente adquiridas | Ativar apenas vantagens elegíveis. |
| Health e Stamina, com semântica correta | Perks que escalam ou exigem estados específicos. |
| Equipamentos, arma, munição e Smithing | Dano físico e Armor Rating individualizados. |
| Efeitos ativos e temporizadores | Buffs, Wardancer e debuffs de armadura. |
| Tipo de ataque e bloqueio | Ataques poderosos, críticos, furtivos, bashes e defesa. |
| Posição, distância e movimento | Far Shot, Point Blank Shot e Evasive Sprint. |
| Componentes físicos e elementais separados | Armas encantadas, magias e resistências específicas. |

O servidor precisa validar os valores e condições; efeitos apresentados pelo cliente não constituem, por si só, prova autoritativa de dano ou proteção.

## 10. Modelo de arquitetura de cálculo

```text
EVENTO DE ATAQUE VALIDADO
  ↓
IDENTIFICAR ARMA / MUNIÇÃO / DANO-BASE / SMITHING
  ↓
APLICAR HABILIDADE CORRESPONDENTE
  ↓
APLICAR PERKS OFENSIVAS (INCLUINDO VOKRII)
  ↓
APLICAR EFEITOS ATIVOS E CONDIÇÕES DO ATAQUE
  ↓
SEPARAR COMPONENTES FÍSICO / MÁGICO / ELEMENTAL
  ↓
CALCULAR ARMADURA EFETIVA DO ALVO
  ↓
PROCESSAR PENETRAÇÃO E REDUÇÕES TEMPORÁRIAS DE ARMADURA
  ↓
CONVERTER ARMADURA EM REDUÇÃO PELA CURVA CONFIGURADA
  ↓
APLICAR BLOQUEIO E MODIFICADORES DEFENSIVOS PERTINENTES
  ↓
APLICAR DANO FINAL AO HEALTH; ATUALIZAR EFEITOS / TEMPORIZADORES
```

A ordem acima é **arquitetural**: para fidelidade exata, confirmar os estágios internos de cada efeito e evitar contagem dupla quando um modificador já estiver incorporado ao atributo efetivo do personagem.

### 10.1. Grupos funcionais de perks

**Modificadores matemáticos:** One-Handed/Two-Handed/Archery Mastery; Furious/Ferocious Strength; Heavy/Light Armor Mastery.

**Efeitos condicionais e temporários:** Wardancer, Evasive Sprint, Battle Fatigue, Denting Blows, Crushing Blows.

**Mecânicas especiais:** Execute, Coup de Grace, Shieldbiter, Warmaster, Arrow to the Knee e outros efeitos de desarme, sangramento ou incapacitação.

Nem toda perk exige reimplementação integral se o efeito for processado de forma autoritativa por um mecanismo existente; contudo, **toda perk que altere dano, resistência ou estado multiplayer precisa ter suas consequências reconhecidas pelo servidor**.

## 11. Block e dano elemental

A documentação do Vokrii descreve Block Mastery com aumento de eficácia do bloqueio de **0,5% por nível de Block**; Weapon Block melhora o bloqueio com armas em **25%**; Elemental Protection reduz em **50%** o dano elemental recebido durante bloqueio válido com escudo.

Um único golpe com espada encantada pode combinar dano físico e elemental. A resolução deve separar a redução física do bloqueio e armadura, a resistência mágica/elemental e os efeitos de perks como Elemental Protection. Aplicar a redução de armadura ao somatório indiscriminado de dano físico e de fogo não reproduz adequadamente essas mecânicas.

## 12. Interação com classes do Aetherius

Uma classe personalizada pode acrescentar bônus exclusivos simultaneamente a One-Handed Mastery, Furious Strength, Fortify One-Handed e efeitos temporários. Uma arquitetura modular deve permitir registrar os modificadores por **fonte**, **categoria**, **condição**, **duração** e **estágio de aplicação**, evitando duplicação de um mesmo bônus.

O sistema de classes não precisa substituir o Vokrii: ele pode acrescentar modificadores próprios ao conjunto de efeitos, desde que as regras de acumulação sejam explícitas e testáveis.

## 13. Outros efeitos indiretos

**Conjuration:** perks podem melhorar armas conjuradas; é preciso preservar a contribuição da habilidade de arma, dos bônus de Conjuration e de outros efeitos efetivamente aplicáveis.

**Smithing:** mudanças na progressão de melhoria alteram dano-base efetivo e armadura dos itens; valores de itens melhorados devem existir no estado autoritativo do servidor.

**Lion's Arrow:** vincula efeitos mágicos a disparos, exigindo resolução separada do ataque físico e do componente mágico.

**NPCs:** a distribuição de perks do Vokrii a NPCs não deve ser presumida idêntica à do jogador; sistemas próprios de progressão de NPCs podem modificar essa situação.

## 14. Situação e adaptações identificadas

| Área | Situação no trecho auditado | Trabalho necessário |
|---|---|---|
| Dano-base | Consulta registro `WEAP`. | Incluir melhorias e modificadores individuais quando aplicáveis. |
| Skills ofensivas | Não entram em `CalcWeaponRating()`. | Calcular multiplicadores de habilidades e perks. |
| Masteries | Não são consultadas no cálculo examinado. | Consultar perks e reproduzir os efeitos. |
| Skills defensivas | O cálculo examinado privilegia valores-base de equipamento. | Integrar habilidades e vantagens defensivas. |
| Debuffs de armadura | Não são integralmente representados na fórmula básica. | Controlar duração, magnitude, acumulabilidade e remoção. |
| Efeitos condicionais | Dependem de dados contextuais. | Validar Health, Stamina, distância, sprint e tipo de golpe. |
| Críticos | Exigem componentes específicos. | Separar dano normal e adicional crítico; aplicar condições. |
| Block | Multiplicador fixo quando marcado como bloqueado. | Reproduzir efeitos de habilidade, equipamento e perks. |

## 15. Conclusão e próxima verificação técnica

O Vokrii amplia o número de fatores que influenciam um ataque, mas não transforma todo bônus em um multiplicador global indistinto. Há modificadores de arma, habilidade, perk, atributo, condição de ataque, estado temporário e defesa.

No arquivo `TES5DamageFormula.cpp` consultado, a implementação de dano do SkyMP não reproduz automaticamente muitos desses componentes. **Instalar o Vokrii no cliente, portanto, não garante que o servidor aplique suas perks no dano autoritativo.**

No Aetherius, a curva planejada de armadura (80% em 500 AR; 90% em 1.000 AR) altera expressivamente o impacto relativo de perks como Denting Blows e Crushing Blows. Esse comportamento exige testes e calibragem específicos.

Para converter a pesquisa em uma especificação de implementação exata, é necessário inspecionar os registros `PERK`, `MGEF`, `SPEL` e demais dados do `Vokrii.esp`, identificar FormIDs/EditorIDs e condições reais de cada efeito, além de auditar todos os caminhos de cálculo e aplicação de dano no fork e no gamemode. Só então será possível classificar com segurança quais vantagens já funcionam, quais funcionam parcialmente e quais precisam ser implementadas no servidor.

---

## Referências

1. [Vokrii — Minimalistic Perks of Skyrim (Nexus Mods)](https://www.nexusmods.com/skyrimspecialedition/mods/26176)
2. [SkyMP — OnHit and damage](https://github.com/skyrim-multiplayer/skymp/blob/main/docs/docs_onhit_and_damage.md)
3. [SkyMP — TES5DamageFormula.cpp](https://github.com/skyrim-multiplayer/skymp/blob/main/skymp5-server/cpp/server_guest_lib/formulas/TES5DamageFormula.cpp)
4. [Fork mercurius17 — TES5DamageFormula.cpp](https://github.com/mercurius17/skymp/blob/main/skymp5-server/cpp/server_guest_lib/formulas/TES5DamageFormula.cpp)
