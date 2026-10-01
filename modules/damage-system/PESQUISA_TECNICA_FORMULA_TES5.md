# Pesquisa técnica: Como Skyrim calcula o dano físico e a resistência física

> Pesquisa sobre as mecânicas de combate físico de *The Elder Scrolls V: Skyrim*, incluindo armas, habilidades, vantagens (*perks*), armadura, bloqueio e exemplos de cálculo. Conteúdo organizado a partir da pesquisa apresentada nesta conversa.
>
> **Nota metodológica:** as fórmulas abaixo descrevem o funcionamento de referência documentado pela comunidade para o jogo original. Não são uma transcrição integral do código da Creation Engine. Resultados precisos podem variar conforme a edição do jogo, atualizações, condições específicas do ataque, arredondamentos e mods.

## 1. Visão geral do sistema de combate

O jogo calcula inicialmente o dano do ataque, considerando atributos da arma, melhorias, habilidade do personagem, perks, equipamentos, poções e outros efeitos. Em seguida, avalia as defesas do alvo para determinar quanto dano será subtraído de sua vida.

```text
1. Identificar a arma utilizada.
             ↓
2. Obter o dano-base da arma e suas melhorias.
             ↓
3. Aplicar o multiplicador da skill correspondente.
             ↓
4. Aplicar os bônus das perks.
             ↓
5. Aplicar os modificadores de equipamentos,
   poções e outros efeitos ativos.
             ↓
6. Aplicar os modificadores do ataque:
   ataque normal, poderoso, furtivo etc.
             ↓
7. Determinar o dano físico produzido.
             ↓
8. Verificar as condições defensivas do alvo:
   bloqueio, armadura e penetração de armadura.
             ↓
9. Aplicar outros modificadores pertinentes,
   como dificuldade e efeitos especiais.
             ↓
10. Determinar o dano final recebido pelo alvo.
```

A sequência acima é conceitual: o motor possui particularidades para críticos, ataques de longo alcance, encantamentos e vantagens específicas.

## 2. Fórmula principal do dano físico de armas

Uma fórmula de referência para o dano da arma antes das condições específicas do golpe e das defesas do alvo é:

$$
\boxed{D=(B+S)\times\left(1+\frac{H}{200}\right)\times(1+P)\times(1+E)}
$$

| Variável | Significado |
|---|---|
| $D$ | Dano calculado da arma antes dos modificadores do golpe e das defesas. |
| $B$ | Dano-base da arma. |
| $S$ | Dano adicional obtido por melhorias de Smithing. |
| $H$ | Nível da habilidade correspondente à categoria da arma. |
| $P$ | Bônus percentual das perks aplicáveis à arma. |
| $E$ | Bônus percentual dos efeitos aplicáveis, como equipamentos e poções. |

Os fatores não são todos somados entre si. Uma arma de dano-base 20 com bônus de 50% da habilidade e 100% de uma perk resulta em:

$$D=20\times1{,}5\times2=\boxed{60}$$

**Atenção:** bônus originados por diversas fontes de uma mesma categoria podem ser somados antes de compor um multiplicador; não se deve multiplicar indiscriminadamente cada bônus individual.

## 3. Influência das habilidades ofensivas

As três habilidades diretamente relacionadas ao aumento do dano de armas convencionais são **One-Handed** (armas de uma mão), **Two-Handed** (armas de duas mãos) e **Archery** (arcos e bestas). Cada ponto de habilidade aumenta o dano correspondente em 0,5% em relação ao valor considerado pela fórmula básica.

$$\boxed{M_{\text{skill}}=1+\frac{H}{200}}$$

| Nível da skill | Bônus de dano | Multiplicador |
|---:|---:|---:|
| 0 | 0% | 1,00 |
| 15 | 7,5% | 1,075 |
| 20 | 10% | 1,10 |
| 30 | 15% | 1,15 |
| 40 | 20% | 1,20 |
| 50 | 25% | 1,25 |
| 60 | 30% | 1,30 |
| 70 | 35% | 1,35 |
| 80 | 40% | 1,40 |
| 90 | 45% | 1,45 |
| 100 | 50% | 1,50 |

Exemplo: One-Handed 60 proporciona $1+60/200=1{,}30$, isto é, 30% de bônus direto ao dano da categoria. Uma habilidade no nível 100 gera multiplicador 1,5, não 2,0. Os bônus de perks, melhorias e efeitos são considerados à parte.

## 4. One-Handed: armas de uma mão

One-Handed governa espadas, machados, maças e adagas de uma mão. Armas com mesmo dano-base recebem o mesmo multiplicador direto de habilidade, mas suas vantagens específicas podem modificar o resultado do ataque.

### 4.1. Perk Armsman

Armsman possui cinco níveis e acrescenta 20% de dano por nível, até 100%:

| Nível de Armsman | Bônus | Multiplicador |
|---:|---:|---:|
| 0 | 0% | 1,00 |
| 1 | 20% | 1,20 |
| 2 | 40% | 1,40 |
| 3 | 60% | 1,60 |
| 4 | 80% | 1,80 |
| 5 | 100% | 2,00 |

Com One-Handed 100 e Armsman 5, o multiplicador conjunto é $1{,}5\times2=3$. Assim, uma arma de dano-base 20 gera 60 pontos antes dos demais fatores.

**Exemplo detalhado:** espada com dano-base 20, One-Handed 80, Armsman 4, sem Smithing ou outros efeitos:

$$D=20\times1{,}4\times1{,}8=\boxed{50{,}4}$$

O resultado matemático é apresentado sem arredondamento; a interface e as etapas internas do motor podem apresentar diferenças de arredondamento.

### 4.2. Perks de categorias específicas

| Perk | Arma ou condição | Efeito |
|---|---|---|
| Bladesman | Espadas | Probabilidade maior de dano crítico. |
| Hack and Slash | Machados | Dano adicional de sangramento. |
| Bone Breaker | Maças | Ignora parte da armadura do alvo. |
| Savage Strike | Armas de uma mão | Aumenta em 25% o dano de ataques poderosos realizados sem movimento. |
| Dual Flurry | Duas armas | Aumenta a velocidade de ataques com duas armas. |
| Dual Savagery | Duas armas | Aumenta em 50% o dano dos ataques poderosos com duas armas. |

Bone Breaker tem três níveis, que permitem ignorar 25%, 50% ou 75% da armadura aplicável. Bladesman apresenta probabilidades de crítico de 10%, 15% e 20%. Hack and Slash acrescenta sangramento: não equivale a um multiplicador universal de todos os golpes.

**Adagas:** são governadas por One-Handed e se beneficiam de Armsman, mas, no jogo original sem correções não oficiais, os efeitos convencionais de Fortify One-Handed oriundos de encantamentos e poções não aumentam seu dano exatamente como nas outras armas de uma mão. Assassin's Blade, da árvore Sneak, modifica o dano furtivo de adagas.

## 5. Two-Handed: armas de duas mãos

Two-Handed governa espadões, machados de batalha e martelos de guerra. Seu multiplicador básico de habilidade é igual ao de One-Handed:

$$D=(B+S)\times\left(1+\frac{H_{\text{Two-Handed}}}{200}\right)\times(1+P)\times(1+E)$$

Two-Handed 100 gera bônus direto de 50%. A perk **Barbarian** possui cinco níveis, até +100%. Assim, Two-Handed 100 + Barbarian 5 geram multiplicador conjunto de 3. Uma arma com dano-base 30 produz $30\times3=\boxed{90}$ antes de outros fatores.

| Perk | Arma ou condição | Efeito |
|---|---|---|
| Barbarian | Todas as armas de duas mãos | Até 100% de aumento no dano. |
| Deep Wounds | Espadões | Aumenta a probabilidade de dano crítico. |
| Limbsplitter | Machados de batalha | Produz dano adicional de sangramento. |
| Skull Crusher | Martelos de guerra | Ignora 25%, 50% ou 75% da armadura aplicável. |
| Devastating Blow | Ataque poderoso sem movimento | Aumenta o dano em 25%. |
| Great Critical Charge | Ataque poderoso em corrida | Permite ataque com bônus de dano crítico. |
| Sweep | Ataque poderoso lateral | Permite atingir vários inimigos à frente. |

Skull Crusher, assim como Bone Breaker, afeta a defesa considerada contra o ataque; Barbarian aumenta diretamente o dano ofensivo. Armas de duas mãos também podem diferir em velocidade de ataque e dano-base, de modo que dano por golpe e DPS não são sinônimos.

## 6. Archery: arcos e bestas

Archery segue a mesma progressão básica: cada ponto da habilidade aumenta o dano em 0,5%. O cálculo de um disparo convencional precisa considerar **arco/besta e munição**:

$$
\boxed{D_{\text{arco}}=(B_{\text{arco}}+S_{\text{arco}}+B_{\text{flecha}})\times\left(1+\frac{H_{\text{Archery}}}{200}\right)\times(1+P)\times(1+E)}
$$

| Elemento | Significado |
|---|---|
| $B_{\text{arco}}$ | Dano-base do arco. |
| $S_{\text{arco}}$ | Melhoria de Smithing aplicada ao arco. |
| $B_{\text{flecha}}$ | Dano-base da flecha. |
| $H_{\text{Archery}}$ | Nível da habilidade Archery. |
| $P$, $E$ | Perks e demais efeitos aplicáveis. |

O disparo real ainda pode depender do tempo de tensionamento do arco, condições furtivas, críticos e efeitos especiais. A interface pode não exibir o total da mesma forma que a fórmula considera a munição.

### 6.1. Overdraw e exemplo

Overdraw possui cinco níveis de +20% cada, até +100%. Archery 100 + Overdraw 5 resultam em multiplicador conjunto 3 antes de outros fatores.

Arco 18 + flecha 12, Archery 80, Overdraw 4, sem outras melhorias:

$$D=(18+12)\times1{,}4\times1{,}8=\boxed{75{,}6}$$

Determinadas bestas aprimoradas ignoram 50% da armadura do alvo. Bestas também possuem mecânica de disparo distinta do tensionamento manual de arcos.

## 7. Smithing: melhoria permanente da arma

Smithing não aumenta diretamente cada golpe apenas por ter nível elevado: o personagem precisa **melhorar a arma**. A melhoria acrescenta dano ao valor-base **antes** dos multiplicadores ofensivos:

$$\boxed{D=(B+S)\times M_{\text{skill}}\times M_{\text{perks}}\times M_{\text{efeitos}}}$$

Uma espada de base 20, One-Handed 100 e Armsman 5 causa $20\times1{,}5\times2=60$. Se uma melhoria acrescentar 10 pontos ao dano-base, o resultado passa a $(20+10)\times1{,}5\times2=\boxed{90}$. Uma melhoria de +10 no valor-base, portanto, elevou em 30 o dano calculado. A qualidade da melhoria depende de Smithing, perks de forja, Fortify Smithing e características do equipamento.

## 8. Efeitos de equipamentos, encantamentos e poções

Fortify One-Handed, Fortify Two-Handed e Fortify Archery aumentam o dano das categorias correspondentes, sem necessariamente modificar permanentemente a arma. Exemplo: espada de base 20, One-Handed 100, Armsman 5 e Fortify One-Handed +30%:

$$D=20\times1{,}5\times2\times1{,}3=\boxed{78}$$

Fontes distintas podem ser agregadas conforme suas categorias de efeitos; não se deve pressupor que todos os percentuais sejam somados entre si nem que todos sejam multiplicados individualmente.

**Distinção importante:** Fortify One-Handed modifica o dano físico da arma; um encantamento *Fire Damage* adiciona uma parcela de dano mágico/elemental que exige cálculo separado das resistências pertinentes.

## 9. Ataques poderosos

Como referência para um ataque poderoso corpo a corpo convencional:

$$\boxed{D_{\text{poderoso}}=D_{\text{normal}}\times2}$$

Um ataque normal de 40 pontos se transforma em 80, antes de considerar vantagens específicas e defesas. Ataques poderosos consomem Stamina e podem provocar outros efeitos, como desequilíbrio.

### 9.1. Savage Strike e Devastating Blow

Essas perks acrescentam 25% ao dano de ataques poderosos realizados nas condições pertinentes:

$$D_{\text{poderoso}}=D_{\text{normal}}\times2\times1{,}25=\boxed{D_{\text{normal}}\times2{,}5}$$

Se o golpe normal causa 40, o poderoso com o bônus aplicável causa 100 antes das defesas.

### 9.2. Duas armas

Cada arma possui seus próprios valores, melhorias e efeitos, embora ambas consultem One-Handed. Ataques poderosos combinados envolvem sequência de golpes, animações e perks como Dual Savagery. Não é adequado presumir que seu dano seja apenas o dobro da soma das duas armas.

## 10. Ataques furtivos e críticos

### 10.1. Furtividade

Multiplicadores furtivos básicos de referência:

| Categoria | Multiplicador furtivo básico |
|---|---:|
| Armas de uma mão | 3× |
| Armas de duas mãos | 2× |
| Arcos | 2× |
| Adagas | 3× |

Perks específicas alteram os multiplicadores pertinentes:

| Perk | Efeito |
|---|---|
| Backstab | Permite ataques furtivos com armas de uma mão com multiplicador 6×. |
| Deadly Aim | Aumenta ataques furtivos com arcos para 3×. |
| Assassin's Blade | Aumenta ataques furtivos com adagas para 15×. |

Esses multiplicadores especiais substituem o multiplicador básico aplicável, em vez de serem multiplicados por ele. Exemplo: adaga com 30 de dano físico normal e Assassin's Blade: $30\times15=\boxed{450}$ antes das defesas. Venenos e danos de encantamento não recebem automaticamente o mesmo multiplicador do componente físico.

### 10.2. Críticos

Bladesman e Deep Wounds aumentam a probabilidade de crítico, mas o dano crítico adicional de armas convencionais **não equivale necessariamente a multiplicar todo o dano final**. Em condições documentadas do Skyrim original, a parcela crítica adicional deriva de características originais da arma e não acompanha automaticamente os aumentos de nível, perks de dano ou Smithing. Seu cálculo exato depende do registro da arma e do efeito crítico envolvido.

## 11. Fórmula da resistência física

A armadura convencional de Skyrim é convertida em redução percentual linear, com teto de **80%**. O jogo não subtrai diretamente os pontos de armadura do dano do ataque.

$$
\boxed{R=\min(0{,}0012\times A_{\text{efetiva}},\ 0{,}80)}
$$

| Variável | Significado |
|---|---|
| $R$ | Fração do dano físico reduzida pela armadura. |
| $A_{\text{efetiva}}$ | Armadura efetivamente considerada no cálculo. |
| $0{,}0012$ | Equivale a **0,12 ponto percentual de redução por ponto de armadura**. |
| $0{,}80$ | Teto de 80% de redução convencional. |

O dano recebido após armadura é:

$$\boxed{D_{\text{recebido}}=D_{\text{ataque}}\times(1-R)}$$

Ataque de 100 contra resistência física de 50%: $100\times(1-0{,}5)=50$. O valor de armadura efetiva pode ser maior que o exibido ao jogador devido à armadura oculta.

## 12. Armadura oculta

Em situações convencionais, cada peça de armadura equipada adiciona **25 pontos de armadura oculta**, inclusive escudo; quatro peças geram +100 e quatro peças mais escudo, +125. Roupas comuns ou acessórios que não sejam armaduras não recebem automaticamente esse bônus.

$$\boxed{A_{\text{efetiva}}=A_{\text{exibida}}+(25\times N)}$$

Para armadura exibida 300 e quatro peças, temos $300+100=400$ de armadura efetiva. Sua redução é $400\times0{,}0012=0{,}48$, ou 48%. Um golpe físico de 100 é reduzido para $100\times0{,}52=\boxed{52}$.

## 13. Limite de 80% e progressão de armadura

A armadura efetiva necessária para alcançar o teto é:

$$A_{\text{efetiva}}=\frac{0{,}80}{0{,}0012}\approx\boxed{666{,}67}$$

| Peças equipadas | Armadura oculta | Armadura exibida para alcançar 80% |
|---:|---:|---:|
| 0 | 0 | 667 |
| 1 | 25 | 642 |
| 2 | 50 | 617 |
| 3 | 75 | 592 |
| 4 | 100 | 567 |
| 5 | 125 | 542 |

| Armadura efetiva | Redução física | Dano recebido de um ataque de 100 |
|---:|---:|---:|
| 0 | 0% | 100 |
| 100 | 12% | 88 |
| 200 | 24% | 76 |
| 300 | 36% | 64 |
| 400 | 48% | 52 |
| 500 | 60% | 40 |
| 600 | 72% | 28 |
| 667 | 80% | 20 |
| 800 | 80% | 20 |
| 1.000 | 80% | 20 |

Portanto, **500 pontos de armadura efetiva geram 60% de redução, não 80%**; já 1.000 não produzem 90% de redução convencional, pois existe o teto de 80%. Armadura acima do teto pode manter relevância contra efeitos de penetração.

## 14. Heavy Armor e Light Armor

Essas habilidades **aumentam o valor de armadura dos equipamentos correspondentes**. Não acrescentam diretamente uma porcentagem fixa de redução física. Para o personagem do jogador, a fórmula básica de referência é:

$$\boxed{M_{\text{armadura, jogador}}=1+0{,}4\times\frac{H}{100}}$$

| Nível da skill | Aumento do valor de armadura | Multiplicador |
|---:|---:|---:|
| 0 | 0% | 1,00 |
| 20 | 8% | 1,08 |
| 40 | 16% | 1,16 |
| 60 | 24% | 1,24 |
| 80 | 32% | 1,32 |
| 100 | 40% | 1,40 |

Exemplo: armadura pesada base 100 com Heavy Armor 100 passa a contribuir com $100\times1{,}4=140$ antes de outros efeitos. O ganho de 40 pontos equivale a $40\times0{,}12\%=4{,}8$ pontos percentuais adicionais de redução, se o total estiver abaixo do teto.

### 14.1. Particularidade dos NPCs

A fórmula básica de referência documentada para NPCs utiliza coeficiente diferente:

$$\boxed{M_{\text{armadura, NPC}}=1+1{,}5\times\frac{H}{100}}$$

Uma peça com base 40, quando usada por personagem com habilidade 100, contribui com $40\times1{,}4=56$ pela fórmula básica do jogador, ou $40\times2{,}5=100$ pela fórmula básica de NPC. Esses coeficientes são aproximações documentadas pela comunidade e não contemplam todas as particularidades internas.

## 15. Perks de Heavy Armor e Light Armor

| Perk | Skill | Funcionamento |
|---|---|---|
| Juggernaut | Heavy Armor | Aumenta a armadura de equipamentos pesados, até 100%. |
| Agile Defender | Light Armor | Aumenta a armadura de equipamentos leves, até 100%. |
| Well Fitted | Heavy Armor | Acrescenta 25% de armadura quando as condições de equipamento são atendidas. |
| Custom Fit | Light Armor | Acrescenta 25% de armadura quando as condições de equipamento são atendidas. |
| Matching Set | Heavy Armor e Light Armor | Acrescenta 25% de armadura quando as condições do conjunto correspondente são atendidas. |

Essas perks modificam o valor de armadura antes da conversão em resistência. **+25% de armadura não equivale a +25 pontos percentuais de redução física.** Uma representação aproximada da etapa de composição é:

$$
A_{\text{exibida}}=\sum_{i=1}^{n}\left[(B_i+S_i)\times M_{\text{skill},i}\times M_{\text{conjunto},i}\times M_{\text{perk},i}\right]+A_{\text{escudo}}+A_{\text{efeitos}}
$$

| Variável | Significado |
|---|---|
| $B_i$ | Armadura-base de cada peça. |
| $S_i$ | Bônus de Smithing da peça. |
| $M_{\text{skill},i}$ | Multiplicador da habilidade pertinente. |
| $M_{\text{conjunto},i}$ | Modificadores de conjunto aplicáveis. |
| $M_{\text{perk},i}$ | Modificadores das perks aplicáveis. |
| $A_{\text{escudo}}$ | Contribuição do escudo, conforme suas regras específicas. |
| $A_{\text{efeitos}}$ | Outros efeitos que adicionam armadura. |

A seguir, somam-se os pontos ocultos aplicáveis e calcula-se $R=\min(A_{\text{efetiva}}\times0{,}0012,0{,}80)$.

## 16. Penetração de armadura

Bone Breaker, Skull Crusher e certas bestas aprimoradas podem ignorar parte da armadura do alvo. As perks citadas possuem três níveis: 25%, 50% ou 75% de penetração aplicável. Esse efeito modifica a defesa considerada, não o dano-base original da arma.

**Exemplo ilustrativo:** alvo com armadura efetiva de 400 possui 48% de redução. Se o golpe ignora 50% da armadura considerada:

$$A_{\text{considerada}}=400\times(1-0{,}50)=200$$

$$R=200\times0{,}0012=0{,}24=24\%$$

Um ataque de 100 causaria 52 sem penetração e 76 com penetração nesse modelo simplificado. A implementação exata deve respeitar quais parcelas de armadura cada efeito do jogo afeta.

## 17. Habilidade Block

Block reduz o dano de ataques **efetivamente bloqueados** com escudo ou arma. Seu resultado depende da habilidade Block, do equipamento, das perks, de efeitos ativos e do tipo de ataque. O limite convencional de redução por bloqueio é de **85%**.

Uma fórmula aproximada documentada para escudo é:

$$
\boxed{B_{\text{escudo}}=\left[45+0{,}2\times A_{\text{base, escudo}}\times\left(1+\frac{1{,}5H_{\text{Block}}}{100}\right)\right]\times M_{\text{perks}}\times M_{\text{efeitos}}}
$$

O resultado é uma porcentagem, sujeita ao teto aplicável. O bloqueio com armas usa uma base diferente; há particularidades documentadas em seu cálculo, inclusive em relação à arma do atacante.

### 17.1. Interação entre bloqueio e armadura

Um ataque físico de 100 contra bloqueio de 50% e armadura que reduz 80% resulta em:

$$100\times(1-0{,}50)\times(1-0{,}80)=\boxed{10}$$

A redução conjunta é 90%, embora a parcela **exclusivamente atribuída à armadura** esteja limitada a 80%. Se bloqueio reduz 85% e armadura reduz mais 80% do restante, o alvo recebe 3% do dano inicial, desde que o ataque esteja sujeito a ambos os mecanismos e não existam efeitos excepcionais.

## 18. Dificuldade do jogo

A dificuldade ajusta o dano recebido pelo jogador e por NPCs. Valores de referência:

| Dificuldade | Dano recebido por NPCs | Dano recebido pelo jogador |
|---|---:|---:|
| Novice | 2,00× | 0,50× |
| Apprentice | 1,50× | 0,75× |
| Adept | 1,00× | 1,00× |
| Expert | 0,75× | 1,50× |
| Master | 0,50× | 2,00× |
| Legendary | 0,25× | 3,00× |

Assim, na dificuldade Legendary, o jogador recebe três vezes o dano de referência, enquanto os NPCs recebem um quarto do dano de referência. Isso deve ser distinguido do atributo de dano da arma.

## 19. Quais tipos de dano a armadura reduz?

Armadura reduz o **componente físico** de ataques pertinentes. Encantamentos de fogo, gelo ou choque, venenos e outros efeitos exigem seus próprios cálculos. Não é correto somar indiscriminadamente todos os componentes e aplicar a resistência física ao total.

Exemplo: ataque com 50 de dano físico e 20 de fogo contra alvo com 60% de redução física e 50% de resistência a fogo, sem outras defesas:

$$D_{\text{físico}}=50\times0{,}4=20$$

$$D_{\text{fogo}}=20\times0{,}5=10$$

$$\boxed{D_{\text{total}}=20+10=30}$$

## 20. Exemplo completo: da arma ao HP

**Atacante:** espada com dano-base 20; melhoria de Smithing +5; One-Handed 80; Armsman 3; Fortify One-Handed +25%; ataque normal.

**Defensor:** armadura exibida 300; quatro peças equipadas; sem bloqueio nem resistências adicionais; HP inicial 150. Considere dificuldade Adept e ausência de outros fatores.

| Etapa | Conta | Resultado |
|---|---|---:|
| Arma + Smithing | $20+5$ | 25 |
| One-Handed 80 | $25\times1{,}4$ | 35 |
| Armsman 3 | $35\times1{,}6$ | 56 |
| Fortify One-Handed 25% | $56\times1{,}25$ | **70 de dano físico produzido** |
| Armadura efetiva | $300+(4\times25)$ | 400 |
| Redução por armadura | $400\times0{,}0012$ | 48% |
| Dano físico recebido | $70\times(1-0{,}48)$ | **36,4** |
| HP após o golpe | $150-36{,}4$ | **113,6** |

São valores matemáticos sem arredondamento, adequados a uma demonstração conceitual da interação das fórmulas.

## 21. Troca de arma e escolha da skill

O jogo consulta a habilidade que corresponde à categoria da arma equipada, e não o nível geral do personagem nem sua habilidade ofensiva mais alta. Considere um personagem com One-Handed 100, Two-Handed 20 e Archery 50, usando armas de mesmo dano-base 20:

| Categoria | Skill consultada | Multiplicador | Dano antes dos demais fatores |
|---|---|---:|---:|
| Espada de uma mão | One-Handed 100 | 1,50 | 30 |
| Espadão | Two-Handed 20 | 1,10 | 22 |
| Arco (valor ilustrativo sem discriminar munição) | Archery 50 | 1,25 | 25 |

O nível geral do personagem não entra diretamente no multiplicador básico de dano da arma. Ele pode influenciar o combate indiretamente por perks e progressão de personagem, equipamento e inimigos.

## 22. Particularidades adicionais da implementação original

- **Criaturas e armadura natural:** aparência de carapaça ou placas não significa que a criatura possua automaticamente a mesma armadura que um humanoide equipado. Importam os valores e efeitos efetivamente atribuídos a ela.
- **Críticos:** não devem ser implementados como um multiplicador universal do dano final, pois há regras específicas para a parcela de crítico.
- **Velocidade e DPS:** duas armas com igual dano por golpe podem apresentar DPS diferente devido à velocidade, às animações e às condições de combate.
- **Precisão da reprodução:** edição do jogo, patches não oficiais, mods, arredondamentos, particularidades de efeitos e interações de perks podem modificar os resultados.

## 23. Síntese das fórmulas

| Mecânica | Fórmula ou funcionamento de referência |
|---|---|
| One-Handed | $1+H/200$ |
| Two-Handed | $1+H/200$ |
| Archery | $1+H/200$ |
| Armsman / Barbarian / Overdraw | Até +100% de dano, em cinco níveis. |
| Smithing | Adiciona dano ao valor-base antes dos multiplicadores. |
| Ataque poderoso convencional | 2× o dano normal. |
| Savage Strike / Devastating Blow | +25% nos ataques poderosos que atendem às condições da perk. |
| Heavy Armor / Light Armor (jogador) | $1+0{,}4\times H/100$ no valor das peças aplicáveis. |
| Heavy Armor / Light Armor (NPC, referência) | $1+1{,}5\times H/100$ no valor das peças aplicáveis. |
| Armadura oculta | +25 por peça aplicável equipada, inclusive escudo. |
| Redução por armadura | $\min(0{,}0012\times A_{\text{efetiva}},0{,}80)$. |
| Teto convencional de armadura | 80% de redução física. |
| Armadura efetiva para atingir o teto | Aproximadamente 667. |
| Armadura exibida para atingir o teto com quatro peças | Aproximadamente 567. |
| Armadura exibida para atingir o teto com quatro peças e escudo | Aproximadamente 542. |
| Teto convencional de bloqueio | 85% de redução por bloqueio. |

## 24. Implicações para a arquitetura de combate do Aetherius Roleplay / SkyMP

A reprodução da fórmula ofensiva do Skyrim **não exige utilizar a fórmula defensiva original**. É possível manter os efeitos de One-Handed, Two-Handed e Archery e substituir independentemente a curva de resistência física.

$$\boxed{D_{\text{arma}}=(B+S)\times M_{\text{skill}}\times M_{\text{perks}}\times M_{\text{efeitos}}}$$

Para separar as responsabilidades em uma arquitetura multiplayer:

1. **Dano-base da arma:** atributo do equipamento, independente do personagem.
2. **Skills ofensivas:** multiplicadores associados à categoria da arma e ao nível correspondente do atacante.
3. **Perks e efeitos ofensivos:** aplicados segundo suas condições, categorias e regras de empilhamento.
4. **Dano de golpe:** distingue ataque normal, poderoso, furtivo, crítico e componentes especiais.
5. **Defesas do alvo:** bloqueio, armadura, penetração e outros modificadores pertinentes devem ser resolvidos separadamente do valor-base da arma.
6. **Componentes de dano:** físico, mágico, elemental, veneno e encantamentos devem seguir seus próprios mecanismos defensivos.
7. **HP final:** somente após o cálculo das parcelas efetivamente recebidas.

Uma fórmula física personalizada pode, portanto, coexistir com habilidades ofensivas próximas ao vanilla. Para reproduzir o comportamento completo do jogo, a implementação precisa considerar também bloqueio, furtividade, críticos, ataques poderosos, vantagens específicas, tipos de dano e particularidades de equipamento.

---

## Referências citadas na pesquisa original

As fontes abaixo foram utilizadas ou mencionadas na resposta da conversa, com diferentes níveis de autoridade. Para especificação de implementação, convém conferir cada mecânica em documentação técnica confiável e testes reproduzíveis da edição do jogo utilizada.

- [Skyrim Wiki/Fandom — Damage](https://skyrim.fandom.com/wiki/Damage)
- [Skyrim Wiki/Fandom — Armor](https://skyrim.fandom.com/wiki/Armor)
- [Elder Scrolls Wiki — One-Handed (Skyrim)](https://elderscrolls.fandom.com/wiki/One-Handed_%28Skyrim%29)
- [Elder Scrolls Wiki — Two-Handed (Skyrim)](https://elderscrolls.fandom.com/wiki/Two-Handed_%28Skyrim%29)
- [Elder Scrolls Wiki — Smithing (Skyrim)](https://elderscrolls.fandom.com/wiki/Smithing_%28Skyrim%29)
- [Elder Scrolls Wiki — Difficulty](https://elderscrolls.fandom.com/wiki/Difficulty)
- [Skyrim Wiki/Fandom — Archery](https://skyrim.fandom.com/wiki/Archery)
- [GameFAQs — Bow and arrow damage calculations](https://gamefaqs.gamespot.com/xbox360/615803-the-elder-scrolls-v-skyrim/answers/323150-what-are-the-arrow-and-bow-damage-calculations)
- [AFK Mods — Block with a weapon formula bug](https://www.afkmods.com/index.php?/topic/4523-block-with-a-weapon-formula-bug/)
- [Gaming Stack Exchange — Blocking mechanics and armour cap](https://gaming.stackexchange.com/questions/127805/blocking-mechanics-and-armour-cap)
- [GameFAQs — Armor formula discussion](https://gamefaqs.gamespot.com/boards/615803-the-elder-scrolls-v-skyrim/61513088)
