# Monorepo Migration Policy

A primeira fase do AetheriusGameplayCore é de **consolidação, não de refatoração**.

## Regras

- O conteúdo importado permanece byte-identical à origem no commit de migração.
- Duplicações existentes entre repositórios são preservadas inicialmente.
- Mudanças funcionais devem ocorrer em commits posteriores e identificáveis.
- Contratos compartilhados serão extraídos apenas quando houver testes que comprovem equivalência.
- Dependências internas devem permanecer direcionais; estar no mesmo repositório não autoriza acesso irrestrito entre módulos.
- `aetherius-server` e `aetherius-client` continuam fora deste monorepo e serão integrados por interfaces/adaptadores explícitos.
- Repositórios antigos só devem ser arquivados depois de build, integração, testes e rollback estarem validados.

## Próxima fase

O próximo trabalho arquitetural deverá identificar:

- contratos duplicados;
- ownership de estado;
- dependências entre Class / ActorState / Damage / Enemy / Leveling / Durability;
- shared contracts realmente necessários;
- integração PostgreSQL;
- integração Aetherius Server/Client;
- compatibilidade com load order, ESL e records vencedores;
- estratégia de testes unitários, integração e golden tests.
