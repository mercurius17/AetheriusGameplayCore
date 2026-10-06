# Aetherius Profession System

> [!IMPORTANT]
> Este módulo é o **governador canônico das profissões** do AetheriusGameplayCore. Ele não implementa mineração, coleta, crafting, refino, encantamento ou alquimia. Ele possui o estado profissional do personagem, decide autorização/progressão e publica a projeção usada pela Aetherius UI Core.

> [!IMPORTANT]
> Ownership, Host Ports, persistência, identidades de Forms e integração com a UI devem obedecer a [Arquitetura Canônica do AetheriusGameplayCore](../../docs/architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md).

## Responsabilidade do módulo

O `profession-system` é o único writer de:

- profissão especializada escolhida pelo personagem;
- XP profissional;
- rank profissional;
- Vigor Profissional;
- promoção de rank;
- bloqueios/desbloqueios globais de progressão;
- autorização profissional consumida pelos módulos externos;
- read model profissional entregue à Aetherius UI Core;
- ledger idempotente de atividades profissionais já creditadas.

A filosofia econômica é baseada em:

- **1 profissão especializada por personagem**;
- quatro profissões de coleta acessíveis a todos em **Novato**;
- progressão apenas na profissão escolhida;
- cinco ranks: **Novato -> Aprendiz -> Adepto -> Especialista -> Mestre**;
- servidor como autoridade de XP, rank, vigor, unlocks e recompensas;
- throughput econômico limitado por Vigor Profissional, recursos e configurações;
- tiers de alto impacto podendo permanecer implementados, porém bloqueados pela staff.

## O que este módulo não possui

Os sistemas abaixo permanecem externos ao governador:

| Domínio | Owner esperado |
|---|---|
| interação com veins, plantas, fazendas e carcaças | `gathering-system` |
| receitas, sessões, materiais, minigames e criação de itens | `crafting-system` |
| tier por instância, moldes, risco e minigames de refino | `refinement-system` |
| aplicação de encantamentos | `enchantment-system` |
| alquimia | sistema externo a ser definido |
| inventário e item instances | Host Inventory / `InventoryTransactionPort` |
| manutenção/durabilidade | `durability-system` |
| efeitos de dano/Armor Rating | `damage-system` |

Esses módulos consultam o `profession-system` para saber **quem pode fazer o quê**, em qual rank e com qual custo profissional. Depois de um resultado válido, reportam uma atividade profissional concluída para liquidação idempotente de Vigor/XP.

## Housecarl e catálogos dinâmicos

Profissões não podem depender de posições fixas da load order.

Valores, IDs, records, COBJ, categorias, keywords, materiais, restrições e catálogos utilizados pelos módulos profissionais devem ser obtidos a partir da load order real por meio do **Housecarl** e normalizados para o `RecordCatalog` compartilhado.

Regras obrigatórias:

- não persistir plugin index/mod index;
- não hardcodar `0xXX......` supondo posição fixa de plugin;
- usar `StableFormKey = pluginName + localFormId` para identidade persistente;
- montar catálogos/receitas a partir dos winning records e mappings da release;
- resolver Runtime FormID somente na camada apropriada do host/catálogo;
- ausência ou ambiguidade de record deve tornar a entrada indisponível, nunca produzir fallback inventado;
- gameplay não consulta Housecarl a cada ação: Housecarl alimenta/audita definitions e o runtime consome um catálogo imutável e versionado.

Veja [Integração externa e Housecarl](docs/EXTERNAL_SYSTEMS_AND_HOUSECARL.md).

## Perks vanilla

Com exceção de **Alquimia** e **Encantamento**, cuja política ainda será definida, as profissões **não usam perks vanilla das árvores de skill para autorizar crafting, aprimoramento/refino ou progressão profissional**.

Logo, Ferreiro, Curtidor, Alfaiate, Cozinheiro, Artífice e os Coletores dependem de:

1. profissão selecionada;
2. rank profissional;
3. unlocks/configuração;
4. catálogo dinâmico;
5. regras do módulo externo correspondente.

**Cozinheiro** também absorve integralmente o antigo escopo do Cervejeiro: fermentação, hidromel, vinho, bebidas alcoólicas, receitas raras e Skooma ilegal passam a ser conteúdo da mesma carreira profissional e usam o mesmo rank, XP e Vigor do Cozinheiro.

Perks vanilla de Smithing ou equivalentes não substituem esses gates e não concedem acesso automático a receitas/tier/refino.

## Documentação

- [Conceito e arquitetura técnica](docs/PROFESSION_SYSTEM_TECHNICAL_DESIGN.md)
- [Catálogo e progressão das profissões](docs/PROFESSION_CATALOG_AND_PROGRESSION.md)
- [Sistemas externos, Housecarl e montagem dinâmica de catálogos](docs/EXTERNAL_SYSTEMS_AND_HOUSECARL.md)

## Estado

Esta etapa é **documental**. Nenhuma implementação funcional é declarada pronta por estes arquivos.
