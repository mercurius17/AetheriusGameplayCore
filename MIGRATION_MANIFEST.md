# Migration Manifest — AetheriusGameplayCore

Data do snapshot: 2026-10-01

A migração inicial foi executada como cópia lossless dos HEADs abaixo.

| Módulo | Repositório de origem | Commit importado | Arquivos | Integridade |
|---|---|---|---:|---|
| `class-system` | `mercurius17/AetheriusClassSystem` | `2406c3d680c4ceddcea70f7b202deba010af3360` | 108 | SHA/mode 108/108 |
| `damage-system` | `mercurius17/AetheriusDamageSystem` | `f21faf5c4a1264f787545e20a1e4dbadc6362e80` | 52 | SHA/mode 52/52 |
| `enemy-system` | `mercurius17/AetheriusEnemySystem` | `c61031b9d12a6619c0848606901e5b4fabb1c9d5` | 66 | SHA/mode 66/66 |
| `leveling-system` | `mercurius17/AetheriusLevelingSystem` | `c339797c24345810c478cd1618777d55ff755852` | 76 | SHA/mode 76/76 |
| `durability-system` | `mercurius17/AetheriusDurabilitySystem` | `4146fc89d0c9112bd63c019f0c5fcabe036c4502` | 23 | SHA/mode 23/23 |
| `actor-state-system` | novo módulo | — | scaffold | sem implementação de origem |

**Total preservado dos repositórios de origem: 325 arquivos.**

## Regra da baseline

Esta importação não deve ser usada como justificativa para apagar imediatamente os repositórios antigos. Eles permanecem como baseline/histórico até que o monorepo tenha:

1. build/teste equivalente ou superior;
2. contratos compartilhados estabilizados;
3. integrações com servidor/cliente validadas;
4. estratégia de release definida;
5. rollback documentado.

## Validação realizada

Para cada módulo importado, a árvore Git do monorepo foi comparada à árvore Git do commit de origem:

- caminho relativo;
- quantidade de blobs;
- SHA de cada blob;
- modo Git de cada arquivo;
- ausência de extras dentro do módulo importado.

Resultado: **0 arquivos ausentes, 0 divergências de SHA, 0 divergências de modo e 0 extras** nos cinco módulos migrados.
