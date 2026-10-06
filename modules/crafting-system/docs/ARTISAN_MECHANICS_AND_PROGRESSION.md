# Artesãos — mecânicas e progressão

Este documento registra como o CraftingSystem consome a progressão definida pelo ProfessionSystem.

## 1. Regra comum

Ranks:

Novato -> Aprendiz -> Adepto -> Especialista -> Mestre

O rank controla:

- acesso a recipes;
- categorias e materiais;
- benefícios;
- gates econômicos;
- apresentação de conteúdo;
- elegibilidade para workflows.

O CraftingSystem não calcula XP/rank.

## 2. Ferreiro

| Rank | Conteúdo |
|---|---|
| Novato | armas/equipamentos/flechas de Ferro, Picaretas, Kit de Manutenção de Ferro |
| Aprendiz | Heavy Armor de guildas aplicáveis, membership obrigatório, 10% de chance de preservar um material |
| Adepto | armas/equipamentos/flechas de Aço, Kit de Aço |
| Especialista | armas/equipamentos de Steel Plate, Kit de Steel Plate |
| Mestre | Nordic/Dwemer/Orcish culturais + kits; gate global inicialmente bloqueável |

Teto econômico regular: Steel Plate.

Smithing perks vanilla não liberam recipes.

### 2.1. Economia-base de metal

A conversão econômica padrão de minério para lingote é:

~~~text
3 minérios -> 1 ingot
~~~

Exemplo:

~~~text
3 Iron Ore -> 1 Iron Ingot
~~~

A mesma proporção deve ser utilizada para materiais equivalentes que possuam cadeia minério -> ingot, salvo override explícito de balanceamento.

Um **set completo de determinado material metálico** deve exigir, somadas as receitas das peças do conjunto, **30 ingots** daquele material.

A composição econômica de set completo adotada pelo projeto é:

- armadura;
- peito;
- bota;
- luva;
- escudo.

O custo de 30 ingots é o orçamento total do set; a distribuição entre as peças individuais deve ser configurável.

Como referência econômica derivada, 30 ingots equivalem a 90 unidades de minério quando toda a matéria-prima é obtida pela conversão 3:1.

## 3. Curtidor

| Rank | Conteúdo |
|---|---|
| Novato | equipamentos de Pele de Animal + kit correspondente |
| Aprendiz | Light Armor de guildas aplicáveis + membership + 10% material save |
| Adepto | Couro + kit |
| Especialista | Élficos + kit |
| Mestre | conteúdos culturais Nordic/Dwemer/Orcish conforme mapping aprovado |

Crafting-base segue o plano específico do Curtidor.

Smithing/Light Armor perks vanilla não liberam recipes.

### 3.1. Economia-base de couro

A conversão econômica padrão é:

~~~text
3 peles de animal -> 1 couro
~~~

Um **set completo de Couro** deve consumir, somadas todas as receitas das peças do conjunto, **30 couros**.

Como referência econômica derivada, 30 couros equivalem a 90 peles de animal quando todo o couro é produzido pela conversão 3:1.

### 3.2. Sets de pele pura

Sets classificados especificamente como **pele pura** utilizam um orçamento diferente:

~~~text
15 couros + 5 peles de animal
~~~

Ou seja, usam metade do orçamento normal de couro de um set completo, acrescido de 5 peles brutas.

A distribuição de couro/peles entre as peças individuais permanece configurável.

## 4. Cozinheiro

| Rank | Conteúdo |
|---|---|
| Novato | refeições simples/carnes grelhadas |
| Aprendiz | ensopados de vegetais |
| Adepto | ensopados de carne |
| Especialista | demais recipes; 20% chance de não consumir um ingrediente |
| Mestre | 20% chance de receber duas porções |

Benefícios são server-side e idempotentes.

## 5. Artífice

| Rank | Conteúdo |
|---|---|
| Novato | Enxadas, Lanternas, Tochas, Masks/Bandanas aplicáveis, Bolsas/Satchels |
| Aprendiz | Mochilas, Anéis, Utensílios, filled Petty/Lesser soul gems |
| Adepto | Colares, Amuletos, Brasões/Insígnias, filled Common/Greater soul gems |
| Especialista | Tiaras, filled Grand soul gems |
| Mestre | 20% chance de não consumir um ingrediente |

O Artífice é transversal a workstations.

Receita define a workstation apropriada. A profissão pode ser autorizada em mais de uma workstation.

## 6. Alfaiate

| Rank | Conteúdo |
|---|---|
| Novato | roupas simples/common |
| Aprendiz | capas, acessórios de pele, capuzes, roupas de guilda |
| Adepto | roupas elaboradas/nobres aplicáveis |
| Especialista | roupas nobres avançadas |
| Mestre | 20% chance de não consumir um material |

Workstation específica precisa ser definida no catálogo/implementation profile; não inferir uma bancada vanilla incorreta.

## 7. Cervejeiro

Escopo:

- hidromel;
- vinho;
- álcool;
- Skooma ilegal.

O framework de ranks existe, mas os desbloqueios específicos continuam pendentes.

CraftingSystem deve suportar o ofício por data/configuração sem inventar uma progressão.

## 8. Alquimista

Não é implementado pelo CraftingSystem genérico nesta fase.

Carreira pertence ao ProfessionSystem; execução pertence ao sistema externo de alquimia.

Perks vanilla: decisão pendente.

## 9. Encantador

Não é implementado pelo CraftingSystem genérico.

Execução pertence ao enchantment-system.

Perks vanilla: decisão pendente.

## 10. Workstation authorization

Selecionar uma profissão artesanal habilita apenas workstations listadas na policy daquela profissão.

Não existe "qualquer artesão pode usar qualquer bancada".

## 11. XP/Vigor e proteção econômica entre ranks

Craft concluído reporta:

~~~text
profession
activity=crafting
activityRank=recipe.requiredRank
recipe definition
authoritative result ref
~~~

ProfessionSystem decide XP, anti-powerlevel, Vigor e promoção.

Além da redução de XP para conteúdo abaixo do rank atual, **todos os artesãos devem pagar mais Vigor ao produzir itens de ranks inferiores ao seu**. A finalidade é evitar que Especialistas e Mestres dominem também o mercado de itens básicos apenas porque já não precisam do XP dessas receitas.

Baseline inicial de Vigor:

| Diferença de rank | Vigor efetivo |
|---|---:|
| mesmo rank | 1,00x o custo-base |
| 1 rank abaixo | 1,50x |
| 2 ranks abaixo | 2,00x |
| 3 ranks abaixo | 3,00x |
| 4 ranks abaixo | 4,00x |

Exemplo: se uma receita custa 5% de Vigor, um Ferreiro Mestre paga 20% ao fabricar uma receita Novato. Isso limita a 5 crafts desse tier com a barra cheia e abre espaço econômico para ferreiros de ranks menores.

A regra é transversal a Cozinheiro, Artífice, Ferreiro, Curtidor, Alfaiate, Encantador, Alquimista e Cervejeiro sempre que exista uma atividade de produção com `activityRank` definido.

Importante:

- XP reduzido e Vigor aumentado são mecanismos complementares e independentes;
- o custo final é calculado pelo ProfessionSystem, nunca pelo CEF;
- Vigor insuficiente bloqueia o início antes do consumo/reserva de materiais;
- os multiplicadores devem ser configuráveis globalmente e por override;
- a penalidade é econômica e **não** aumenta a dificuldade mecânica do minigame-base.

## 12. Bônus

Bônus como:

- preservar material;
- porção duplicada;

são resolvidos server-side.

RNG precisa ser gravado no operation ledger para retry não rerrolar.

## 13. Membership

Recipes de guilda exigem:

- profissão;
- rank;
- workstation;
- membership.

## 14. Master gates

Conteúdo Mestre pode estar catalogado mas indisponível.

A UI deve receber reason.

## 15. Sem perks vanilla

Para Ferreiro, Curtidor, Cozinheiro, Artífice, Alfaiate e Cervejeiro:

- perks vanilla não são gate;
- skill vanilla não é rank;
- recipe COBJ vanilla não basta para autorizar craft.

A autorização profissional é do Aetherius.


## 16. Balanceamento configurável de receitas

Todos os custos descritos neste documento são **valores-base de balanceamento**, não constantes hardcoded.

Toda receita deve permitir ajuste posterior, sem recompilar código, de pelo menos:

- quantidade de cada ingrediente;
- proporção de conversão de matéria-prima;
- orçamento total de material por set;
- distribuição do orçamento entre peças;
- output count;
- rank exigido;
- workstation;
- membership/gates;
- flags de habilitação;
- bônus profissionais aplicáveis.

O catálogo gerado via Housecarl fornece os records e receitas da release, enquanto uma camada de configuração do Aetherius aplica os valores econômicos desejados.
