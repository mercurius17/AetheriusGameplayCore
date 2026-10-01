# AetheriusActorStateSystem

Este diretório reserva o domínio de **estado autoritativo agregado do ator** dentro do AetheriusGameplayCore.

## Estado atual

Scaffold apenas. Não existe implementação migrada porque não havia um repositório `AetheriusActorStateSystem`/ `ActorStateSystem` de origem no momento da consolidação.

A implementação será definida pelo planejamento específico do ActorStateSystem e deverá respeitar as baselines já presentes neste monorepo.

## Papel pretendido

O ActorStateSystem deve funcionar como composição/orquestração de estado, não como duplicação dos stores existentes.

Fronteiras esperadas:

- ClassSystem: autoridade de progressão de classe/skills/perks concedidas pela classe.
- ActorStateSystem: composição de identidade, grants/proveniência, estado derivado e projeções autoritativas.
- DamageSystem: consumidor de snapshots de combate; continua sendo a autoridade das regras de dano.
- EnemySystem: autoridade de descoberta/classificação/registro de inimigos e conteúdo associado.
- LevelingSystem: autoridade de XP/progressão global.
- DurabilitySystem: autoridade de manutenção/durabilidade.
- SkyMP/Aetherius Server: equipamento, inventário e demais estados nativos devem ser reutilizados ou adaptados, não duplicados.

## Restrições iniciais

1. Não duplicar `ActorCombatState`, `ActiveEffectStore` ou stores equivalentes já existentes.
2. Não persistir runtime FormID cru como identidade estável.
3. Grants de perk/spell/ability/power devem preservar proveniência.
4. Estado persistido, derivado, runtime e definição de record devem ser tratados separadamente.
5. O cliente é projeção; consequências autoritativas permanecem no servidor.
6. A arquitetura final será definida somente após a auditoria da load order, records vencedores, patches e contratos existentes.
