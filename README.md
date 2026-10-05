# AetheriusGameplayCore

Monorepo dos sistemas de gameplay do **Aetherius Roleplay**.

Este repositório consolida os sistemas que precisam evoluir de forma coordenada para o ambiente SkyMP/Aetherius. A migração inicial preservou as baselines; a integração UI descrita abaixo acrescenta alterações ao ClassSystem.

## Arquitetura canônica

A fonte normativa atual para decisões de arquitetura e implementação é [docs/architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md](docs/architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md).

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
