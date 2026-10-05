# Monorepo Migration Policy

> [!NOTE]
> Esta política descreve a migração inicial. A fase arquitetural posterior já foi definida em [docs/architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md](architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md), que prevalece para implementação futura.

A primeira fase do AetheriusGameplayCore é de **consolidação, não de refatoração**.

## Regras

- O conteúdo importado permanece byte-identical à origem no commit de migração.
- Duplicações existentes entre repositórios são preservadas inicialmente.
- Mudanças funcionais devem ocorrer em commits posteriores e identificáveis.
- Contratos compartilhados serão extraídos apenas quando houver testes que comprovem equivalência.
- Dependências internas devem permanecer direcionais; estar no mesmo repositório não autoriza acesso irrestrito entre módulos.
- `aetherius-server` e `aetherius-client` continuam fora deste monorepo e são integrados por Host APIs/interfaces explícitas. Esses repositórios podem receber mudanças controladas para expor capacidades públicas e versionadas; a lógica de gameplay permanece neste monorepo.
- Repositórios antigos só devem ser arquivados depois de build, integração, testes e rollback estarem validados.

## Estado atual

A fase de identificação acima foi concluída pelo planejamento/auditoria e consolidada na arquitetura canônica. O trabalho seguinte é execução incremental: Host API e capabilities, contratos/catalog, PostgreSQL, ActorState/Class, Enemy/Conditions, Leveling/Durability, Damage/Magic e homologação por feature. Novos sistemas devem obedecer ao contrato de entrada definido na arquitetura canônica.
