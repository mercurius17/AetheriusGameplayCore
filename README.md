# AetheriusGameplayCore

Monorepo dos sistemas de gameplay do **Aetherius Roleplay**.

Este repositório consolida, sem alterar o conteúdo das baselines de origem, os sistemas que precisam evoluir de forma coordenada para o ambiente SkyMP/Aetherius.

## Módulos

- `modules/class-system/` — progressão de classes, skills, perks, grupos/raids e projeções associadas.
- `modules/damage-system/` — combate autoritativo, dano físico/mágico, perks, efeitos e estado de combate.
- `modules/actor-state-system/` — módulo reservado para o futuro estado autoritativo agregado do ator.
- `modules/enemy-system/` — descoberta/classificação de inimigos, dungeons, encounter data e integrações.
- `modules/leveling-system/` — XP, progressão global, fadiga, party XP e integração com inimigos.
- `modules/durability-system/` — manutenção/durabilidade, materiais, persistência e integração SkyMP.

## Estado da migração

A importação inicial é **lossless**: os cinco repositórios existentes foram copiados para módulos próprios com conteúdo e modos Git idênticos aos snapshots de origem. Nenhuma deduplicação ou refatoração funcional foi feita durante o transporte.

O `ActorStateSystem` ainda não possuía repositório próprio; por isso foi criado somente como scaffold arquitetural, sem implementação especulativa.

Consulte `MIGRATION_MANIFEST.md` para os commits de origem e a prova de integridade.

## Planejamento integrado

O [planejamento holístico de 02/10/2026](AETHERIUS_GAMEPLAY_CORE_PLANEJAMENTO_HOLISTICO.md) audita os seis módulos, a instância MO2 `D:\modOrganizer`, os 424 plugins e as baselines Server/Client. Inclui ownership, contratos, PostgreSQL, adapters externos, testes e fases de implementação.

O [pacote de evidências](docs/audit/2026-10-02/README.md) contém inventários, winning records, overrides, pesquisa documental e resultados de testes. É uma entrega de planejamento: os blockers de runtime estão explícitos e nenhuma funcionalidade nova foi ativada.

## Princípio arquitetural

A existência no mesmo monorepo não elimina fronteiras de responsabilidade. Os módulos devem continuar com autoridades claras e contratos explícitos. Refatorações compartilhadas, deduplicação de contratos e integração com `aetherius-server` / `aetherius-client` serão realizadas em commits posteriores, após planejamento e testes.

## Repositórios de origem

Os repositórios originais permanecem intactos como referência histórica durante a transição. O `AetheriusGameplayCore` passa a ser o destino da evolução integrada desses sistemas após a validação da migração.
