# AetheriusActorStateSystem

> [!IMPORTANT]
> A arquitetura final deste módulo já está definida em [docs/architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md](../../docs/architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md). Este README descreve o scaffold/origem do módulo; em caso de conflito, prevalece a arquitetura canônica.

Este diretório reserva o domínio de **estado autoritativo agregado do ator** dentro do AetheriusGameplayCore.

## Estado atual

Scaffold apenas. Não existe implementação migrada porque não havia um repositório `AetheriusActorStateSystem`/ `ActorStateSystem` de origem no momento da consolidação.

A implementação deve seguir a arquitetura canônica: ActorState é compositor de facts/grants/projeções e não cria um segundo `ActorCombatState` ou `ActiveEffectStore`.

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
6. A arquitetura final está definida no documento canônico; auditorias de load order/records continuam sendo evidência para compor e validar as projections.
