# Ferreiro e Curtidor — workflows de crafting

Este documento consolida os planos específicos existentes no Drive e as decisões posteriores do projeto.

## 1. Precedência

O plano antigo do Ferreiro definiu um workflow detalhado e originalmente propôs escalada mecânica por rank.

O plano mais recente do Curtidor definiu explicitamente:

- crafting deliberadamente tolerante;
- material não aumenta dificuldade-base;
- rank não aumenta dificuldade-base;
- progressão aparece em recipe/economia;
- refino concentra dificuldade e risco.

Essa filosofia é aplicada também ao Ferreiro para compatibilidade arquitetural com a decisão mais recente.

Os estágios conceituais do Ferreiro permanecem; o que é superado é a necessidade de torná-los progressivamente mais difíceis por rank/material.

# 2. Ferreiro

## 2.1. Workflow

~~~text
SELECT_PROJECT
 -> HEAT_FORGE
 -> MELT_METAL
 -> SHAPE_METAL
 -> COOL
 -> FINAL_COMMIT
~~~

Etapas:

1. Aquecer Forja
2. Derreter Metal
3. Moldar Metal
4. Resfriamento

## 2.2. Sessão

forge.heated pertence à sessão, não ao personagem globalmente.

Fechar/invalidar sessão remove esse estado temporário.

## 2.3. Tolerância

Cada etapa mantém interação artesanal, mas o perfil-base deve ser tolerante.

Não fazer:

~~~text
Master recipe -> hitbox drasticamente menor
Expert -> timing muito mais severo
material raro -> minigame automaticamente punitivo
~~~

Diferenças podem existir por natureza da etapa/slot, mas não como punição automática por progressão.

## 2.4. Material profile

O workflow pode precisar de material profile para fusão/moldagem.

O profile deve vir do catálogo Housecarl/mapping, não de Runtime FormID hardcoded.

### 2.4.1. Conversão minério -> ingot

A taxa econômica padrão é:

~~~text
3 ore -> 1 ingot
~~~

Exemplo:

~~~text
3 Iron Ore -> 1 Iron Ingot
~~~

Essa conversão é uma receita de **processamento de matéria-prima** e não deve ser confundida com a etapa visual "Derreter Metal" de uma sessão de fabricação de equipamento.

A proporção 3:1 deve ser data-driven e poderá ser rebalanceada posteriormente.

### 2.4.2. Orçamento de set metálico

Um set completo de determinado material utiliza **30 ingots no total**, somados entre as receitas de:

- armadura;
- peito;
- bota;
- luva;
- escudo.

Não é necessário hardcodar um custo fixo por peça. A configuração deve garantir que o orçamento do conjunto completo some 30, permitindo redistribuir custos entre slots em ajustes futuros.

## 2.5. Falhas

Falhas intermediárias podem produzir penalidades locais configuráveis.

Regras gerais:

- nenhuma falha concede XP de conclusão;
- não duplicar consumo;
- progressão de etapas precisa ser server-side;
- políticas de perda precisam ser documentadas em config;
- crafting não deve se tornar mais punitivo que o refino.

## 2.6. Commit

Somente depois de Resfriamento bem-sucedido o item pode existir no inventário.

# 3. Curtidor

## 3.1. Produção de couro

Couro é produzido sem minigame, conforme plano específico.

A operação ainda é server-authoritative e transacional.

A taxa econômica padrão é:

~~~text
3 peles de animal -> 1 couro
~~~

Essa proporção deve ser configurável e não hardcoded.

## 3.2. Workflow de equipamento

~~~text
SELECT_RECIPE
 -> CHECK/PREPARE_TABLE
 -> BUILD_MOLD
 -> SEW
 -> FINISH
 -> FINAL_COMMIT
~~~

Etapas:

1. Preparar Mesa
2. Construir Molde
3. Costura
4. Retoques Finais

## 3.3. Preparar Mesa

- vale pela sessão;
- usa perfil de baixa dificuldade;
- falha compromete somente o custo definido para aquela tentativa.

## 3.4. Construir Molde

Plano atual:

- 2 Leather Strips;
- 10 segundos;
- avaliação por cobertura tolerante;
- não exige desenho perfeito;
- backtracking permitido;
- falha perde 1 tira;
- outra tira permanece;
- jogador repõe 1 para tentar novamente.

## 3.5. Costura

Baseline do plano:

- um ponto por vez;
- 8 acertos para peças pequenas;
- 10 para peças grandes;
- hitbox ampla;
- 2,25 s por ponto;
- 5 erros permitidos;
- 6º erro falha tentativa;
- sem escalada por rank/material.

Na falha completa:

- materiais da costura são perdidos conforme policy;
- mesa permanece;
- molde permanece;
- reinicia apenas Costura;
- sem XP de conclusão.

## 3.6. Retoques

- timing com Espaço;
- zona ampla;
- falha sem punição econômica;
- apenas repete a etapa.

## 3.7. Commit

Item nasce somente após sucesso em Retoques.

## 3.8. Orçamento de sets de Couro

Um set completo de Couro utiliza **30 couros no total**, distribuídos entre as receitas das peças do conjunto.

A soma é normativa para o baseline de balanceamento; a distribuição individual é configurável.

## 3.9. Sets de pele pura

Sets classificados especificamente como **pele pura** usam:

~~~text
15 couros + 5 peles de animal
~~~

Isso corresponde a metade do orçamento normal de couro de um set completo, acrescida de 5 peles brutas.

O catálogo deve distinguir claramente:

~~~text
materialProfile = leather
materialProfile = pure-hide
~~~

para que as duas economias não sejam confundidas.

# 4. Bônus Aprendiz

Ferreiro e Curtidor possuem 10% de chance de preservar um material no crafting em seu rank Aprendiz conforme progressão oficial.

O roll:

- é server-side;
- ocorre uma vez por operação elegível;
- é persistido no ledger;
- não pode ser rerrolado por retry;
- não pode ressuscitar materiais já perdidos em tentativas intermediárias, salvo policy explícita.

# 5. Refinamento

Nenhum dos dois implementa refino dentro do CraftingSystem.

Ambos encaminham item elegível ao mesmo refinement-system.

O refino mantém:

- Tier I/II/III;
- +25/+50/+75% sobre base;
- estado per-instance;
- risco;
- desafios JIT;
- regressão;
- persistência própria.

# 6. Workstations

Ferreiro e Curtidor recebem autorização de suas workstations conforme policy.

A workstation ativa também participa do filtro de recipes.

# 7. Vanilla perks

Não usar Smithing perks como authority.

# 8. Testes obrigatórios

### Ferreiro

- stages em ordem;
- Forge state é session-scoped;
- rank maior não piora perfil-base;
- output só no final;
- wrong profession recipe impossível;
- Steel/Steel Plate/Master gates corretos.

### Curtidor

- leather sem minigame;
- Prepare Table session-scoped;
- Mold 2 strips/10 s;
- failure perde 1 strip;
- Sewing 5 erros tolerados;
- Finishing sem perda;
- mesmo perfil mecânico para ranks/materials;
- output único.

### Ambos

- ProfessionAdapter;
- InventoryTransactionPort;
- replay;
- disconnect;
- catalog revision;
- workstation authorization;
- no vanilla bypass.


# 9. Configurabilidade obrigatória

Nenhum dos seguintes valores deve existir como constante espalhada no código:

- 3 ore -> 1 ingot;
- 3 hides -> 1 leather;
- 30 ingots por set metálico;
- 30 leather por set de Couro;
- 15 leather + 5 hides por set de pele pura;
- distribuição de custos por peça.

Esses valores pertencem a profiles/definitions versionados de balanceamento.

A lógica do código deve consumir as definitions e validar as receitas; mudanças econômicas futuras devem ser possíveis por configuração e regeneração/auditoria de catálogo.
