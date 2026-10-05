# Mecânicas e progressão dos Coletores

Este documento combina as regras consolidadas dos documentos de Profissões com as novas especificações de interação.

Quando uma regra operacional nova conflitar com yield/progressão anterior, **yield/progressão anterior prevalece**.

# 1. Minerador

## 1.1. Conceito

O Minerador extrai recursos de minas mapeadas da release.

Cada mina deve possuir um `mineSiteId` estável e reunir as veins/references que pertencem logicamente àquela mina.

O sistema deve detectar:

- qual referência foi ativada;
- a qual mina ela pertence;
- qual tipo de minério aquela referência fornece;
- qual rank mínimo é necessário;
- se a mina possui estoque;
- se está em cooldown;
- quantos trabalhadores ativos existem.

## 1.2. Estoque e cooldown

Baseline atual de balanceamento:

| Regra | Valor |
|---|---:|
| estoque global por mina | 500 unidades de minério |
| cooldown após esgotamento | 72 horas |
| trabalhadores simultâneos | máximo 2 por mina |
| ciclo-base | 60 segundos |

**500, 72 horas, 2 trabalhadores e 60 segundos são defaults configuráveis.** A mecânica de estoque global/cooldown/concorrência é obrigatória, mas esses números devem vir de definitions de balanceamento e poderão ser ajustados posteriormente sem alteração de código.

O estoque é **global**, compartilhado por todos os jogadores.

Quando `stockRemaining == 0`:

```text
status = depleted
availableAt = depletedAt + 72h
```

Nenhuma nova sessão pode começar.

No primeiro acesso após `availableAt`, ou por job seguro equivalente, a mina retorna a 500.

## 1.3. O que consome estoque

Cada ciclo de extração concluído consome **1 unidade do estoque principal da mina**.

Bônus de profissão não precisam consumir estoque adicional:

- carvão adicional do Novato;
- gema comum;
- gema perfeita;
- duplicação de Mestre.

Esses efeitos são rewards do ciclo profissional, não novas unidades-base extraídas.

## 1.4. Sessão

Ao interagir com uma vein/entrada autorizada:

1. servidor resolve a reference;
2. mapeia para `mineSiteId`;
3. valida Picareta;
4. valida rank/tipo de minério;
5. valida `stockRemaining > 0`;
6. valida slot de trabalhador (< 2);
7. adquire lease;
8. abre CEF;
9. inicia animação de mineração;
10. inicia ciclo de 60 s.

Ao completar 60 s, um cycle commit produz o yield e, se a sessão continuar, inicia o próximo minuto.

## 1.5. Progressão oficial

### Novato

- pode minerar Ferro;
- após um ciclo válido: **1 Iron Ore + 1 Coal**.

A regra "1 minério por minuto" descreve o recurso-base. O carvão permanece porque já faz parte da progressão autoritativa anterior.

### Aprendiz

- mantém acesso anterior;
- 1% de chance **total** de encontrar uma gema comum ao concluir o ciclo.

O roll de gema é único; depois um segundo roll escolhe a gema na pool autorizada.

### Adepto

- libera Corundum;
- libera Silver;
- chance total de gema comum: 2%.

### Especialista

- libera Gold;
- chance total de gema comum: 3%.

### Mestre

Pode permanecer globalmente bloqueado.

Quando habilitado:

- libera Orichalcum;
- libera Quicksilver;
- libera recurso específico/controlado de Metal Dwemer;
- 20% de chance de duplicar os recursos obtidos;
- 1% de chance própria de gema perfeita.

## 1.6. Metal Dwemer

Não usar clutter Dwemer vanilla como fonte paralela de Dwarven Ingot.

O recurso Dwemer deve possuir site/recurso explicitamente mapeado.

## 1.7. Minas mistas

Se uma localização possuir mais de um tipo de resource node:

- a mina continua com estoque global de 500;
- o output principal é resolvido pela referência/node efetivamente usado;
- cada node possui rank gate próprio;
- não inferir tipo apenas pelo nome da mina;
- casos ambíguos exigem mapping explícito.

## 1.8. Smelting

O documento geral atribui smelting ao Minerador.

Entretanto, smelting é transformação de material, não coleta de world resource. Portanto a extração fica neste módulo e o smelting deve ser implementado por um domínio de processamento/crafting apropriado, consultando o mesmo rank do Minerador.

A taxa econômica padrão definida para o processamento é:

~~~text
3 minérios -> 1 ingot
~~~

Exemplo:

~~~text
3 Iron Ore -> 1 Iron Ingot
~~~

Essa proporção deve ser consumida de uma definition configurável pelo sistema de processamento/crafting. O GatheringSystem não deve hardcodar a conversão nem produzir ingots diretamente ao minerar.

---

# 2. Herbalista

## 2.1. Conceito

O Herbalista interage com plantas que normalmente possuem ação de harvest no Skyrim.

A interação vanilla não pode produzir loot paralelo não autorizado.

O sistema deve interceptar/substituir a concessão econômica de harvest para que:

- a planta seja reconhecida server-side;
- seja aberta a interação CEF;
- o ciclo dure 60 s;
- o reward seja calculado pelo servidor;
- o vanilla harvest não duplique o ingrediente.

## 2.2. Detecção

Cada referência harvestable elegível é mapeada para:

```text
herbalEntryId
herbalSiteId
basePlantForm
baseIngredient
region/biome tags
resource profile
```

A reference deve ser resolvida dinamicamente por catálogo.

## 2.3. Sessão e cooldown

A engine é a mesma de resource sites:

- interaction CEF;
- animação apropriada;
- ciclo de 60 s;
- estado global;
- cooldown após esgotamento;
- leases;
- recovery.

O **cooldown-base após depletion é 72 horas**, seguindo a regra solicitada para o mesmo perfil de coleta.

A capacidade de um herbal site deve ser configurada/mapeada. Não assumir 500 por planta: esse valor foi definido especificamente para minas.

O limite de workers usa o mesmo mecanismo de lease e pode ser configurado por site; o perfil inicial pode espelhar o Minerador quando desejado, sem transformar "2" em constante estrutural para toda planta.

## 2.4. Progressão oficial

### Novato

Após 1 minuto válido:

- 1 unidade do ingrediente-base da planta.

### Aprendiz

- 2 unidades do ingrediente-base.

### Adepto

- resultado do rank anterior;
- 10% de chance de ingrediente alquímico adicional aleatório.

### Especialista

- resultado anterior;
- chance de ingrediente adicional sobe para 20%.

### Mestre

- mantém os efeitos anteriores;
- 20% de chance de receber o dobro do resultado da interação.

## 2.5. Pool adicional consolidada

A limitação antiga a ingredientes botânicos/regionais está superada pela decisão posterior do projeto.

A pool do bônus aleatório pode conter **qualquer ingrediente alquímico autorizado presente no catálogo da release**, inclusive ingredientes associados a criaturas.

Exemplos válidos:

- Vampire Dust;
- Sabre Cat Eye;
- demais ingredientes reconhecidos pelo catálogo de alquimia.

O ingrediente-base continua sendo determinado pela planta. O item aleatório é um bônus econômico separado.

---

# 3. Caçador

## 3.1. Conceito

O Caçador processa animais mortos.

Não existe cooldown global de "caça".

A disponibilidade depende de:

- o animal existir no mundo;
- estar morto;
- estar classificado como animal processável;
- sua carcaça ainda não ter sido processada.

## 3.2. Identidade da carcaça

O sistema precisa de identidade de **spawn instance**, não apenas Base Form.

Exemplo conceitual:

```text
carcassInstanceKey =
  world reference identity
  + spawn generation
  + authoritative death generation
```

Isso impede que respawns futuros herdem indevidamente `processed=true`.

## 3.3. Processamento único global

A carcaça pode ser processada uma única vez.

A primeira operação que adquirir o lock e concluir:

```text
processed = true
processedBy = actorKey
processedAt = serverTime
operationId = ...
```

Qualquer outro jogador recebe "carcaça já processada".

## 3.4. Loot profissional

Para animais sujeitos ao sistema, o loot profissional da carcaça deve conter **somente os recursos definidos pela progressão e pela espécie**.

É obrigatório evitar duplicação com:

- loot vanilla;
- EnemySystem;
- outros loot adapters;
- scripts do mod de criatura.

Deve existir um contrato claro de ownership do loot animal.

## 3.5. Progressão oficial

### Novato

- 1 carne pertinente à espécie.

### Aprendiz

- adiciona 1 pele/hide pertinente.

### Adepto

- adiciona 1 ingrediente alquímico pertinente à espécie.

### Especialista

- passa a 2 unidades de cada categoria já desbloqueada.

### Mestre

- mantém o rendimento do Especialista;
- 20% de chance de duplicação por processamento.

## 3.6. Ferramenta

Nenhuma ferramenta profissional adicional.

As armas usadas para matar o animal não são requisito de processamento.

## 3.7. Interface

Pode utilizar um painel CEF contextual de "Processar carcaça", mas não precisa de timer de 60 s nem cooldown de resource site.

O servidor valida morte e espécie antes de apresentar qualquer yield.

---

# 4. Fazendeiro

## 4.1. Conceito

Todas as fazendas aplicáveis da release devem ser mapeadas em `FarmSiteDefinition`.

Como "fazenda" é uma classificação semântica de localização e não apenas um único tipo de record, Housecarl deve fornecer os world records/locations e o catálogo final deve aceitar mapping explícito.

Cada fazenda possui:

- identidade própria;
- região/hold;
- interaction markers;
- pool fixa;
- pools rotativas;
- ciclo ativo;
- política de estoque/cooldown;
- ferramentas;
- presentation metadata.

## 4.2. Interação

Ao usar o marker/ponto de interação:

1. validar Enxada/Hoe;
2. validar rank;
3. validar ciclo ativo;
4. abrir CEF;
5. iniciar animação de enxada;
6. executar 60 s;
7. resolver rolls;
8. conceder items;
9. liquidar Vigor/XP;
10. atualizar estado/estoque/ciclo se aplicável.

## 4.3. Progressão oficial

### Novato

- 1 item aleatório por interação.

### Aprendiz

- 2 itens aleatórios.

### Adepto

- 3 itens aleatórios.

### Especialista

- 3 rolls;
- cada roll possui 10% de chance de duplicação.

### Mestre

- 3 rolls;
- cada roll possui 20% de chance de duplicação.

## 4.4. Pools

Cada fazenda pode possuir:

```text
fixedPool
regionalPool
rotationPool
importPool (quando explicitamente previsto)
```

As pools devem ser coerentes com região e economia.

Planejamentos anteriores incluem como categorias/recursos possíveis:

- trigo;
- alho-poró;
- batata;
- repolho;
- leite;
- ovos;
- manteiga;
- queijos;
- carnes domésticas;
- farinha;
- sal;
- tomate;
- cenoura;
- peixe/salmão;
- mel;
- Moon Sugar apenas quando tratada como importação/rotação autorizada.

Essa relação não substitui o catálogo da release. O mapping final é data-driven.

## 4.5. Rotatividade

A staff deve poder:

- trocar o ciclo ativo;
- aumentar/reduzir oferta;
- deslocar recursos entre fazendas;
- controlar pools de importação;
- alterar duração de ciclos;
- bloquear temporariamente uma pool.

A rotação não deve exigir recompilação.

## 4.6. Estoque/cooldown

Os documentos superiores permitem estoque global e cooldown por fazenda para limitar escala econômica.

Diferentemente da mineração, não há regra consolidada exigindo "500/72h" para toda fazenda.

Logo:

- capacidade é configuração da fazenda/ciclo;
- cooldown é configuração;
- a staff controla o perfil;
- o engine reaproveita a mesma infraestrutura global de resource sites.

## 4.7. Ervas alquímicas

Ervas/plantas de alquimia permanecem fora da pool normal do Fazendeiro e pertencem ao Herbalista, salvo decisão explícita futura de conteúdo.

---

# 5. Coleta geral

Todos os personagens podem executar o nível Novato de:

- Minerador;
- Herbalista;
- Caçador;
- Fazendeiro;

desde que atendam:

- ferramenta, quando exigida;
- target válido;
- disponibilidade;
- distância;
- Vigor;
- demais requirements.

Se a profissão selecionada for outra:

```text
effectiveRank = novice
xpEligible = false
```

O reward Novato continua existindo.

# 6. Perks vanilla

Nenhuma das quatro progressões usa perks vanilla como authority.

Rank, yield, gates e bônus vêm do `profession-system` + definitions de gathering.


# 7. Política de valores configuráveis

Todos os valores numéricos deste documento devem ser tratados como **baseline de balanceamento**, salvo indicação explícita de invariável estrutural.

Devem ser facilmente ajustáveis:

- estoque de mina;
- cooldown;
- número máximo de trabalhadores;
- tempo de coleta;
- quantidade de yield;
- chances de gema;
- chances de duplicação;
- quantidade por rank;
- capacidade de Herbalismo;
- cooldown de Herbalismo;
- pesos e tamanhos de pools;
- ciclo/rotação de Fazenda;
- estoque/cooldown de Fazenda.

A implementação deve consumir configuration/definitions versionadas. Não espalhar literais como `500`, `72h`, `2`, `60s`, `1%`, `20%` pelo código.

Ver `docs/architecture/AETHERIUS_BALANCE_CONFIGURATION_POLICY.md`.
