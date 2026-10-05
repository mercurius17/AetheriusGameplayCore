# AetheriusGameplayCore

Monorepo dos sistemas de gameplay do **Aetherius Roleplay**.

Este repositório consolida os sistemas que precisam evoluir de forma coordenada para o ambiente SkyMP/Aetherius. A migração inicial preservou as baselines; a integração UI descrita abaixo acrescenta alterações ao ClassSystem.

## Arquitetura canônica

A fonte normativa atual para decisões de arquitetura e implementação é [docs/architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md](docs/architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md).

A política transversal de configuração e balanceamento está em [docs/architecture/AETHERIUS_BALANCE_CONFIGURATION_POLICY.md](docs/architecture/AETHERIUS_BALANCE_CONFIGURATION_POLICY.md). Valores numéricos de gameplay/economia — como estoque e cooldown de minas, duração de ciclos, yields, chances, custos de receitas, conversões de materiais, XP/Vigor e parâmetros de refino — devem ser tratados como **defaults configuráveis**, não como constantes rígidas espalhadas pelo código.

O planejamento holístico de 02/10/2026 permanece como auditoria histórica e pacote de evidências. Quando houver conflito de regra arquitetural, prevalece a arquitetura canônica. Em particular, `aetherius-server` e `aetherius-client` podem receber alterações controladas para expor Host APIs públicas, mínimas e versionadas; a lógica de gameplay permanece no GameplayCore.

## Estado atual da integração UI

O ClassSystem integra CLASSE/GRUPO ao AetheriusUI_Core em modo de consulta, com persistência protegida e SDK compartilhado. Ações dependentes de CombatProfile, grants e transações de grupo permanecem bloqueadas.

Consulte [estado atual](docs/ui-integration/CURRENT_STATE.md) e [implementação restante](docs/ui-integration/REMAINING_IMPLEMENTATION.md). As alterações pertinentes de aetherius-server, aetherius-client e MeridianUI estão preservadas neste repositório em [integrations/ui-runtime-changes](integrations/ui-runtime-changes/README.md), com uma cópia idêntica no UI Core. São patches/fontes sobre baselines exatas, não repositórios externos aninhados.

Build do ClassSystem aprovado; testes atuais: 49/55, com seis falhas preexistentes explicitadas nos documentos. A integração não habilita autoridade de gameplay no cliente.

## Módulos

O [guia completo de compilação das DLLs e integração UI](docs/ui-integration/BUILD_AND_DLLS.md) documenta o bridge CommonLibSSE-NG, Meridian/CEF, addon nativo do servidor, ClassSystem, empacotamento e validação. A mesma referência está preservada no UI Core; os caches locais e a reprodução em máquina limpa estão explicitamente diferenciados.

- `modules/class-system/` — progressão de classes, skills, perks, grupos/raids e projeções associadas.
- `modules/damage-system/` — combate autoritativo, dano físico/mágico, perks, efeitos e estado de combate.
- `modules/actor-state-system/` — compositor autoritativo de facts/grants/projeções do ator; ainda em implementação, sem criar um segundo combat/effects store.
- `modules/enemy-system/` — descoberta/classificação de inimigos, dungeons, encounter data e integrações.
- `modules/leveling-system/` — XP, progressão global, fadiga, party XP e integração com inimigos.
- `modules/durability-system/` — manutenção/durabilidade, materiais, persistência e integração SkyMP.
- `modules/profession-system/` — governador das profissões: profissão escolhida, XP profissional, rank, Vigor, gates, progressão e integração funcional com o Aetherius UI Core.
- `modules/gathering-system/` — execução das profissões de coleta: Minerador, Herbalista, Caçador e Fazendeiro; recursos globais, cooldowns, concorrência, carcaças, fazendas, CEF e integração com o governador.
- `modules/crafting-system/` — execução server-authoritative do artesanato, autorização de workstations, catálogo dinâmico de receitas/itens, CEF, transações e workflows de Ferreiro/Curtidor e demais artesãos.
- `modules/refinement-system/` — definição conceitual do refino por instância de equipamento, tiers I/II/III, risco, regressão e integração futura com Ferreiro/Curtidor e DamageSystem.
- `modules/enchantment-system/` — placeholder documental para encantamento; sistema ainda não definido/desenvolvido e **fora do escopo da release Alpha**.


## Novas inserções — Profissões, coleta e economia

O repositório passou a incluir a base documental dos sistemas econômicos/profissionais do Aetherius. Esses módulos foram separados para preservar ownership claro: o `profession-system` governa a carreira; `gathering-system`, `crafting-system`, `refinement-system` e sistemas futuros executam as mecânicas especializadas.

### ProfessionSystem

O [ProfessionSystem](modules/profession-system/README.md) é o governador canônico das profissões.

Responsabilidades principais:

- profissão especializada selecionada;
- XP profissional e rank;
- Vigor Profissional;
- gates globais;
- autorização/liquidação de atividades;
- integração da área de Profissões com o Aetherius UI Core.

Todos os personagens continuam podendo realizar coleta em nível **Novato** quando atendem aos requisitos, mas apenas a profissão selecionada ganha XP e progride além desse nível.

### GatheringSystem

O [GatheringSystem](modules/gathering-system/README.md) documenta a execução de:

- Minerador;
- Herbalista;
- Caçador;
- Fazendeiro.

Entre as regras atuais de balanceamento:

- minas usam, por padrão, estoque global de 500 unidades;
- cooldown padrão após esgotamento: 72 horas;
- até 2 mineradores simultâneos por mina;
- ciclo-base de coleta: 60 segundos;
- carcaças são processadas uma única vez;
- fazendas usam pools regionais/fixas/rotativas.

Esses valores são **configuráveis** e podem ser rebalanceados sem alteração da lógica do domínio.

### CraftingSystem

O [CraftingSystem](modules/crafting-system/README.md) concentra o artesanato server-authoritative.

A documentação atual cobre:

- autorização de workstations por profissão;
- filtragem server-side de receitas;
- catálogo de itens/receitas construído dinamicamente a partir da load order;
- Housecarl + RecordCatalog + winning records;
- integração com InventoryTransactionPort;
- XP/Vigor via ProfessionSystem;
- workflows de Ferreiro e Curtidor;
- interfaces CEF;
- regras de UI alinhadas ao AetheriusUI_Core.

Uma mesma workstation pode ser usada por profissões diferentes sem compartilhar catálogo. Exemplo:

```text
Forge:
  Ferreiro -> somente receitas de Ferreiro
  Artífice -> somente receitas de Artífice

Curtume:
  Curtidor -> somente receitas de Curtidor
  Artífice -> somente receitas de Artífice
```

O catálogo não deve depender de posição fixa de plugin. Housecarl é usado para descobrir/auditar COBJ, outputs, ingredientes, workstations, keywords, conditions, materials e winning records, enquanto o runtime trabalha com definitions estáveis.

A documentação de balanceamento de materiais está em [MATERIAL_CONVERSION_AND_RECIPE_BALANCE.md](modules/crafting-system/docs/MATERIAL_CONVERSION_AND_RECIPE_BALANCE.md). Defaults atuais:

```text
3 minério -> 1 ingot
3 peles -> 1 couro

set metálico completo -> 30 ingots
set de Couro completo -> 30 couros
set de pele pura -> 15 couros + 5 peles
```

Todos esses valores devem permanecer facilmente configuráveis.

As referências de interface de Ferreiro e Curtidor estão documentadas em [CRAFTING_UI_VISUAL_GUIDELINES.md](modules/crafting-system/docs/CRAFTING_UI_VISUAL_GUIDELINES.md). Elas definem a direção de layout/UX, enquanto a implementação final deve utilizar cores/tokens do AetheriusUI_Core e elementos gráficos desenhados à mão. Não existem Guilda dos Ferreiros nem Guilda dos Curtidores; a interface definitiva não deve sugerir essas organizações.

### RefinementSystem

O [RefinementSystem](modules/refinement-system/README.md) possui, por enquanto, apenas definição conceitual.

A proposta atual inclui:

- tier de refino persistido por instância;
- Tier I / II / III;
- baseline atual de +25% / +50% / +75% sobre o valor-base;
- progressão sequencial;
- moldes;
- minigame por ciclos;
- risco de falha e regressão de tier;
- integração futura com DamageSystem.

Os valores numéricos de refino também são considerados parâmetros de balanceamento configuráveis.

### EnchantmentSystem

O [EnchantmentSystem](modules/enchantment-system/README.md) ainda não possui design técnico/conceitual suficiente para implementação.

Ele permanece como placeholder documental e **não fará parte da release Alpha**. Nenhum outro módulo deve inventar comportamento de encantamento ou usar enchanting vanilla como fallback para contornar a ausência do sistema autoritativo.

### Política de balanceamento

A regra geral para os novos sistemas é:

> números de gameplay/economia são defaults configuráveis, salvo quando um documento declarar explicitamente que determinado valor é uma invariável estrutural.

Isso inclui, entre outros:

- XP e thresholds;
- Vigor;
- estoque/cooldown de recursos;
- duração de atividades;
- concorrência;
- yields;
- chances;
- conversões;
- custos de recipes;
- budgets de sets;
- parâmetros de refino.

A referência canônica é [AETHERIUS_BALANCE_CONFIGURATION_POLICY.md](docs/architecture/AETHERIUS_BALANCE_CONFIGURATION_POLICY.md).


## Estado da migração

A importação inicial é **lossless**: os cinco repositórios existentes foram copiados para módulos próprios com conteúdo e modos Git idênticos aos snapshots de origem. Nenhuma deduplicação ou refatoração funcional foi feita durante o transporte.

O `ActorStateSystem` ainda não possuía repositório próprio; por isso foi criado somente como scaffold arquitetural, sem implementação especulativa.

Consulte `MIGRATION_MANIFEST.md` para os commits de origem e a prova de integridade.

## Planejamento integrado

O [planejamento holístico de 02/10/2026](AETHERIUS_GAMEPLAY_CORE_PLANEJAMENTO_HOLISTICO.md) audita os seis módulos, a instância MO2 `D:\modOrganizer`, os 424 plugins e as baselines Server/Client. Ele permanece como evidência histórica. O plano normativo corrente é a [arquitetura canônica](docs/architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md).

O [pacote de evidências](docs/audit/2026-10-02/README.md) contém inventários, winning records, overrides, pesquisa documental e resultados de testes. É uma entrega de planejamento: os blockers de runtime estão explícitos e nenhuma funcionalidade nova foi ativada.

O [manual detalhado de mecânicas e multiplayer](docs/mechanics/README.md) complementa o plano com funcionamento de perks, conditions, fórmulas, efeitos, classes, persistência e cenários de validação. Inclui fichas das 1.493 perks instaladas, 1.540 records mágicos ligados a elas e todos os estágios das 18 classes, distinguindo dados observados, propostas e suporte ainda pendente.

## Princípio arquitetural

A existência no mesmo monorepo não elimina fronteiras de responsabilidade. Os módulos devem continuar com autoridades claras e contratos explícitos. Refatorações compartilhadas, deduplicação de contratos e integração com `aetherius-server` / `aetherius-client` serão realizadas em commits posteriores, após planejamento e testes.

## Repositórios de origem

Os repositórios originais permanecem intactos como referência histórica durante a transição. O `AetheriusGameplayCore` passa a ser o destino da evolução integrada desses sistemas após a validação da migração.
