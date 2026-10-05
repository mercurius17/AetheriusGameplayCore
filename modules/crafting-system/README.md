# Aetherius Crafting System

> [!IMPORTANT]
> O crafting-system é o domínio executor do artesanato do Aetherius. O profession-system continua sendo o governador da carreira e o único owner de profissão escolhida, XP, rank e Vigor Profissional.

> [!IMPORTANT]
> Precedência documental:
> 1. arquitetura canônica do AetheriusGameplayCore;
> 2. documentação consolidada do profession-system e documentos de Profissões do Drive;
> 3. planos específicos de Ferreiro/Curtidor do Drive, reinterpretados pelas decisões mais recentes;
> 4. esta documentação para execução do crafting e integração de workstations.
>
> Em conflito entre o plano antigo do Ferreiro e o plano mais recente do Curtidor sobre dificuldade de fabricação, prevalece a decisão mais recente já consolidada: **crafting-base é tolerante; rank/material controlam conteúdo e economia, não tornam automaticamente o minigame mais difícil. O refino concentra risco e dificuldade.**

## Responsabilidade

O módulo deve implementar:

- descoberta e classificação de workstations;
- autorização de uso de workstation conforme profissão escolhida;
- catálogo de itens e receitas gerado a partir da load order real;
- filtragem de receitas pela profissão, workstation, rank e condições;
- CEF de crafting;
- sessões e máquinas de estado de fabricação;
- minigames específicos por ofício;
- validação server-side de materiais;
- transações idempotentes de inventário;
- integração de XP/Vigor via adapter do profession-system;
- benefícios profissionais server-side;
- logs, telemetria, recovery e rollout.

## Regra de workstation

Ao escolher uma profissão artesanal, o jogador recebe autorização para utilizar as workstations definidas para aquele ofício.

A autorização para abrir uma workstation **não concede receitas de outras profissões que também usam a mesma bancada**.

Exemplo:

~~~text
Artífice
  -> pode usar Forge
  -> pode usar Tanning Rack
  -> ao abrir Forge: vê somente receitas de Artífice compatíveis com Forge
  -> ao abrir Tanning Rack: vê somente receitas de Artífice compatíveis com Tanning Rack
  -> nunca recebe automaticamente receitas de Ferreiro ou Curtidor
~~~

A mesma workstation pode servir a múltiplas profissões por meio de catálogos filtrados.

## Housecarl

O catálogo de crafting deve ser construído dinamicamente com informações obtidas/auditadas pelo Housecarl:

- COBJ;
- winning records;
- outputs;
- ingredientes;
- workstation/bench keyword;
- keywords;
- material;
- categoria;
- source plugin;
- faction/guild conditions;
- demais conditions;
- patches/overrides.

Não hardcodar posição de plugins ou Runtime FormIDs persistentes.

## Perks vanilla

Exceto Alquimia e Encantamento, cuja política continua pendente:

- perks vanilla não concedem profissão;
- perks vanilla não liberam receitas profissionais;
- perks vanilla não autorizam workstation;
- perks vanilla não liberam refino;
- perks vanilla não substituem rank profissional.

## Limites

Este módulo não possui:

- refinementTier nem minigame de refino — refinement-system;
- aplicação de enchantments — enchantment-system;
- alquimia — sistema externo a definir;
- XP/rank/Vigor — profession-system;
- item instances — Host Inventory.

## Documentação

- Arquitetura técnica: docs/CRAFTING_SYSTEM_TECHNICAL_DESIGN.md
- Workstations e autorização profissional: docs/WORKSTATION_AUTHORIZATION_AND_RECIPE_VISIBILITY.md
- Catálogo Housecarl de itens e receitas: docs/ITEM_RECIPE_CATALOG_AND_HOUSECARL.md
- Conversão de materiais e balanceamento de receitas: docs/MATERIAL_CONVERSION_AND_RECIPE_BALANCE.md
- Mecânicas e progressão dos artesãos: docs/ARTISAN_MECHANICS_AND_PROGRESSION.md
- Ferreiro e Curtidor: docs/BLACKSMITH_AND_TANNER_CRAFTING.md
- Profession adapter, transações e benefícios: docs/PROFESSION_ADAPTER_AND_TRANSACTIONS.md
- CEF e sessões: docs/CEF_AND_CRAFTING_SESSIONS.md
- Referências visuais e diretrizes de design: docs/CRAFTING_UI_VISUAL_GUIDELINES.md
- Plano de implementação e testes: docs/IMPLEMENTATION_PLAN_AND_TESTS.md

## Estado

Documentação de planejamento. Nenhuma capability de crafting é declarada implementada por estes arquivos.
