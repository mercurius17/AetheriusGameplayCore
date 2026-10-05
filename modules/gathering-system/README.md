# Aetherius Gathering System

> [!IMPORTANT]
> O `gathering-system` é o domínio executor das profissões de coleta do Aetherius: **Minerador, Herbalista, Caçador e Fazendeiro**. Ele não possui XP, rank ou Vigor Profissional; esses fatos pertencem ao `profession-system`.

> [!IMPORTANT]
> Em caso de conflito, a precedência é:
> 1. `docs/architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md` para arquitetura, authority, persistência e Host Ports;
> 2. documentação consolidada do `profession-system` e documentos de Profissões do Drive para progressão, yields e regras econômicas;
> 3. esta documentação para implementação da interação de coleta.
>
> As regras operacionais adicionadas aqui complementam os documentos anteriores e **não substituem progressão, yields ou gates já definidos**.

## Regra transversal de balanceamento

**Todos os valores numéricos do GatheringSystem devem ser facilmente customizáveis por configuração/definitions versionadas.**

Isso inclui explicitamente:

- estoque de minas;
- cooldown de minas;
- duração de ciclo;
- limite de trabalhadores;
- yields;
- chances de gema/duplicação;
- capacidade/cooldown de Herbalismo;
- pools, pesos, ciclos, estoque e cooldown de Fazendas;
- TTL/leases e demais valores operacionais que possam exigir tuning.

Os números documentados são defaults de balanceamento atuais, não constantes obrigatórias de código.

A regra transversal está em `docs/architecture/AETHERIUS_BALANCE_CONFIGURATION_POLICY.md`.

## Objetivo

O módulo deve implementar a interação física e econômica de coleta no mundo:

- detectar recursos e alvos válidos;
- resolver dinamicamente o tipo de recurso a partir da release real;
- abrir o painel CEF contextual;
- iniciar/cancelar sessões server-authoritative;
- controlar animações como apresentação;
- controlar duração de cada ciclo;
- controlar estoque, esgotamento, cooldown, concorrência e rotação;
- calcular o yield de coleta conforme a progressão oficial;
- conceder recursos por transação autoritativa;
- reportar a atividade concluída ao `profession-system` por um adapter de progressão;
- persistir estado global necessário;
- impedir duplicação, replay e concorrência indevida.

## Coletores suportados

| Profissão | Mecânica principal |
|---|---|
| Minerador | extração contínua em minas mapeadas, estoque global, limite de trabalhadores e cooldown |
| Herbalista | coleta server-authoritative iniciada sobre plantas/FLORAs harvestable, com sessão temporizada e cooldown global do recurso |
| Caçador | processamento único de carcaças de animais mortos, sem cooldown de recurso |
| Fazendeiro | interação em fazendas mapeadas, pools regionais fixas/rotativas e ciclos controlados pela staff |

## Regra de coleta geral

Todos os personagens possuem acesso **Novato** às quatro coletas quando atendem aos requisitos físicos da atividade.

Isso não cria quatro profissões especializadas.

Somente a profissão selecionada no `profession-system`:

- recebe XP;
- progride além de Novato;
- utiliza desbloqueios de Aprendiz em diante.

Uma coleta Novato realizada por personagem especializado em outra profissão pode consumir Vigor após sucesso, mas **não gera XP da profissão não selecionada**.

## Requisitos

| Coleta | Requisito |
|---|---|
| Mineração | Picareta |
| Herbalismo | Bolsa/Satchel |
| Fazenda | Enxada/Hoe |
| Caça | nenhum item profissional adicional |

A validação de posse do item usa inventário autoritativo. O cliente não declara que possui a ferramenta.

## Housecarl e load order

O módulo não pode hardcodar posição de plugins.

Housecarl deve alimentar/auditar os catálogos de:

- minas e suas referências;
- tipos de minério;
- plantas harvestable;
- ingredientes-base;
- animais e espécies;
- fazendas, regiões e interaction markers;
- ferramentas;
- pools e records relevantes.

Persistência usa `StableFormKey`, nunca Runtime FormID como identidade durável.

## Perks vanilla

Nenhum dos quatro Coletores usa perks vanilla para progressão, autorização ou yield profissional.

## Documentação

- [Arquitetura técnica](docs/GATHERING_SYSTEM_TECHNICAL_DESIGN.md)
- [Mecânicas e progressão dos quatro Coletores](docs/GATHERER_MECHANICS_AND_PROGRESSION.md)
- [Detecção de recursos, Housecarl e catálogos](docs/RESOURCE_DETECTION_AND_CATALOGS.md)
- [CEF, sessões e animações](docs/CEF_SESSIONS_AND_ANIMATIONS.md)
- [Adapter do ProfessionSystem e contratos](docs/PROFESSION_ADAPTER_AND_CONTRACTS.md)
- [Persistência, concorrência, cooldown e recovery](docs/PERSISTENCE_CONCURRENCY_AND_RECOVERY.md)
- [Plano de implementação e testes](docs/IMPLEMENTATION_PLAN_AND_TESTS.md)

## Estado

Esta etapa é documental. A presença destes arquivos **não significa que as capabilities de world interaction, inventory transaction, animação ou persistência estejam implementadas**.
