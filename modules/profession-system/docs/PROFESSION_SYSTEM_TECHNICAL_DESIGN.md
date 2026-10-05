# Profession System — Plano conceitual e arquitetura técnica

Data: 05/10/2026  
Status: documentação normativa do módulo, subordinada à arquitetura canônica do GameplayCore.

## 1. Objetivo

O `profession-system` existe para representar a carreira econômica do personagem e governar todos os sistemas profissionais do Aetherius sem absorver a implementação interna de cada atividade.

Ele deve responder de forma autoritativa:

- qual profissão o personagem escolheu;
- qual é o XP e o rank dessa profissão;
- qual é o Vigor Profissional atual;
- quais tiers profissionais estão globalmente liberados;
- se uma atividade profissional pode ser iniciada;
- quanto Vigor ela custa;
- quanto XP uma conclusão válida concede;
- se a conclusão promove o personagem;
- qual estado profissional deve ser projetado para a Aetherius UI Core.

O módulo **não** deve decidir como minerar, como desenhar um molde, como criar uma poção, como executar um minigame ou como aplicar um encantamento. Essas regras pertencem aos sistemas externos especializados.

## 2. Princípios de design

### 2.1. Especialização única

Cada personagem pode possuir somente **uma profissão especializada**.

A escolha é o eixo econômico da carreira do personagem. Por padrão, deve ser tratada como persistente. Qualquer troca/reset futuro precisa existir como command administrativo ou regra econômica explícita; jamais como alteração livre do cliente.

### 2.2. Coleta Novato universal

Todo personagem possui autorização básica de **Novato** para:

- Fazendeiro;
- Minerador;
- Herbalista;
- Caçador.

Essa autorização basal não equivale a possuir quatro profissões. Ela apenas permite participar da coleta introdutória.

Somente a profissão efetivamente escolhida:

- ganha XP profissional;
- avança de rank;
- recebe os desbloqueios de Aprendiz em diante;
- pode atingir Especialista/Mestre.

Exemplo: um Ferreiro pode minerar Ferro pelas regras de Minerador Novato, mas a mineração não gera XP de Minerador e nunca o promove a Aprendiz.

### 2.3. Cinco ranks

A progressão profissional é:

`Novato -> Aprendiz -> Adepto -> Especialista -> Mestre`

O rank representa simultaneamente:

- experiência acumulada;
- autorização econômica;
- acesso a categorias de recursos/receitas;
- acesso a bônus profissionais;
- elegibilidade para conteúdo liberado pela staff.

Rank não deve ser inferido a partir de perks vanilla.

### 2.4. Autoridade server-side

O cliente nunca é authority de:

- profissão escolhida;
- XP;
- rank;
- Vigor;
- custo de atividade;
- sucesso de atividade;
- desbloqueio;
- bônus econômico;
- receita autorizada;
- material consumido;
- item criado.

A UI envia intenção. Módulos externos validam suas mecânicas. O `profession-system` liquida progressão.

## 3. Ownership

O `profession-system` é o único writer dos seguintes fatos duráveis:

```text
selectedProfession
professionXp
professionRank
professionVigor
lastProfessionActivityAt
professionProgressionRevision
pendingPromotion/globalRankGateState
```

Também mantém o ledger idempotente de atividades que já produziram efeito profissional.

Não deve escrever:

- inventário;
- item instance;
- refinementTier;
- durabilidade;
- recursos de veins/fazendas/carcaças;
- recipes/COBJ do runtime;
- encantamentos aplicados;
- potions/poisons;
- resultado de minigames.

## 4. Categorias profissionais

### 4.1. Artesãos

- Alquimista
- Ferreiro
- Cozinheiro
- Encantador
- Curtidor
- Alfaiate
- Cervejeiro
- Artífice

### 4.2. Coletores

- Minerador
- Herbalista
- Fazendeiro
- Caçador

### 4.3. Serviços

Guarda e Mensageiro existem no design econômico mais amplo, porém não possuem progressão funcional definida neste ciclo documental. O governador deve reservar a categoria `service`, mas não inventar regras antes da definição de seus sistemas externos.

## 5. Vigor Profissional

### 5.1. Conceito

Vigor Profissional é um recurso econômico do personagem, diferente de Stamina do Skyrim. Ele limita o throughput de trabalho e impede produção/coleta ilimitada em sequência.

Defaults iniciais:

| Parâmetro | Valor |
|---|---:|
| máximo | 100% |
| custo básico de atividade | 5% |
| ações básicas com barra cheia | 20 |
| atraso para regenerar | 60 s |
| regeneração | 1% por minuto |
| regeneração durante atividade | bloqueada |

O custo real é definido por `activityType` e deve ser configurável.

### 5.2. Regra de consumo

Baseline:

- atividade recusada antes da execução: não consome Vigor;
- recurso esgotado/alvo já processado: não consome;
- falta de item/ferramenta/material: não consome;
- atividade que não produz o resultado profissional esperado: não concede XP;
- conclusão válida: módulo externo confirma o resultado e o governador liquida Vigor + XP de forma idempotente.

Se uma profissão futura precisar de uma política de falha diferente, essa exceção deve ser configurada no governador. O módulo externo não pode criar uma segunda política de Vigor.

### 5.3. Regeneração

Após qualquer atividade profissional liquidada:

1. registrar `lastProfessionActivityAt`;
2. aguardar `regenDelaySeconds`;
3. regenerar de acordo com o relógio autoritativo;
4. limitar ao máximo configurado.

A regeneração deve ser calculável por tempo, evitando timers persistidos a cada minuto.

## 6. XP profissional

XP profissional é separado de `totalXp` e `characterLevel`, que continuam pertencendo ao `leveling-system`.

### 6.1. XP base sugerido

| Tier da atividade | Multiplicador conceitual | XP base inicial |
|---|---:|---:|
| Novato | x2.0 | 10 |
| Aprendiz | x2.5 | 12 |
| Adepto | x3.0 | 15 |
| Especialista | x3.5 | 17 |
| Mestre | x4.0 | 20 |

Esses valores são balanceamento, não constantes estruturais.

### 6.2. Anti-powerlevel

O XP é reduzido quando um profissional executa conteúdo abaixo do próprio rank:

| Diferença | XP |
|---|---:|
| atividade do mesmo rank | 100% |
| 1 rank abaixo | 50% |
| 2+ ranks abaixo | 10% |

Atividades de coleta Novato executadas por alguém cuja profissão escolhida é outra não concedem XP.

### 6.3. Limiares iniciais

| Rank | XP acumulado |
|---|---:|
| Novato | 0 |
| Aprendiz | 500 |
| Adepto | 1.500 |
| Especialista | 3.500 |
| Mestre | 6.000 |

Todos os thresholds devem ser configuráveis.

### 6.4. Gate global de Mestre

Um personagem pode atingir o requisito de XP sem receber Mestre quando o tier estiver globalmente bloqueado.

O estado deve distinguir:

- XP atingido;
- promoção elegível;
- promoção bloqueada por configuração;
- promoção efetivamente aplicada.

A UI deve mostrar o motivo do bloqueio.

## 7. Contrato de atividade profissional

Os sistemas externos não escrevem XP/Vigor diretamente.

Modelo conceitual:

```ts
type ProfessionId =
  | "alchemist"
  | "blacksmith"
  | "cook"
  | "enchanter"
  | "tanner"
  | "tailor"
  | "brewer"
  | "artificer"
  | "miner"
  | "herbalist"
  | "farmer"
  | "hunter";

type ProfessionRank =
  | "novice"
  | "apprentice"
  | "adept"
  | "expert"
  | "master";

interface ProfessionActivityRequest {
  operationId: string;
  actorKey: string;
  profession: ProfessionId;
  activityType: string;
  activityRank: ProfessionRank;
  sourceSystem:
    | "gathering-system"
    | "crafting-system"
    | "refinement-system"
    | "enchantment-system"
    | "alchemy-system";
  definitionId?: string;
}

interface ProfessionAuthorization {
  allowed: boolean;
  reason?: string;
  effectiveRank: ProfessionRank;
  vigorCost: number;
  progressionRevision: number;
}

interface ProfessionActivityCompleted {
  operationId: string;
  actorKey: string;
  profession: ProfessionId;
  activityType: string;
  activityRank: ProfessionRank;
  sourceSystem: string;
  authoritativeResultRef: string;
}
```

O desenho final pode mudar, mas deve preservar:

- actor vindo do contexto autenticado, não do browser;
- `operationId` único;
- revisão esperada quando aplicável;
- liquidação idempotente;
- nenhuma confiança em XP/custo enviado pelo consumidor.

## 8. Fluxo de autorização e liquidação

```text
External domain
   |
   | authorizeActivity(...)
   v
ProfessionSystem
   |
   +-- profession/rank?
   +-- global gate?
   +-- vigor?
   +-- activity definition?
   |
   v
Authorization
   |
   v
External system validates its own domain
(world / recipe / materials / item / minigame)
   |
   v
Authoritative external commit
   |
   | completeActivity(operationId, resultRef)
   v
ProfessionSystem UnitOfWork
   +-- dedupe ledger
   +-- consume vigor
   +-- calculate XP
   +-- anti-powerlevel
   +-- promote if eligible
   +-- outbox event
   +-- bump revision
   |
   v
UI read model refresh
```

O governador não deve conceder XP antes de existir evidência autoritativa da conclusão no sistema externo.

## 9. Integração com Aetherius UI Core

O `profession-system` mantém a integração funcional da área de Profissões, mas **não cria shell, cursor, view própria ou transporte paralelo**.

Usa `UiTransportPort` e o roteamento autenticado do Aetherius UI Core.

### 9.1. Read model

Exemplo conceitual:

```ts
interface ProfessionReadModel {
  revision: number;
  selectedProfession: ProfessionId | null;
  category: "artisan" | "gatherer" | "service" | null;

  rank: ProfessionRank;
  xp: number;
  currentRankThreshold: number;
  nextRankThreshold: number | null;
  promotionBlockedReason?: string;

  vigor: {
    current: number;
    max: number;
    regenPerMinute: number;
    regenStartsAt?: string;
  };

  universalNoviceGathering: {
    miner: true;
    herbalist: true;
    farmer: true;
    hunter: true;
  };

  progression: ProfessionTierReadModel[];
  externalCapabilities: Record<string, {
    available: boolean;
    reason?: string;
  }>;
}
```

O read model pode agregar informações de apresentação fornecidas pelos módulos externos, mas nunca copiar seus estados mutáveis como segunda fonte de verdade.

### 9.2. Commands de UI

A UI pode, conforme capability:

- solicitar snapshot;
- selecionar profissão quando permitido;
- abrir detalhes de progressão;
- navegar para sistemas externos;
- solicitar eventual reset/troca se uma política futura autorizar.

A UI não pode:

- setar XP;
- setar rank;
- setar Vigor;
- liberar tier;
- declarar conclusão de crafting/coleta;
- criar item;
- conceder bônus.

## 10. Integração com sistemas externos

### GatheringSystem

Owner de:

- interação com recurso;
- distância/alvo;
- disponibilidade;
- cooldown/estoque;
- processamento de carcaça;
- yield do recurso.

Consulta o governador para rank/autorização/Vigor e reporta sucesso.

### CraftingSystem

Owner de:

- receitas;
- estações;
- materiais;
- sessões;
- minigames de fabricação;
- criação transacional do item.

Consulta o governador para rank, gates e benefícios profissionais.

### RefinementSystem

Owner de:

- `refinementTier` por item instance;
- materiais/moldes de refino;
- desafios;
- regressão/sucesso.

Não usa perks vanilla de Smithing como gate profissional.

### EnchantmentSystem

Owner do workflow de encantamento. O governador fornece rank e progressão do Encantador.

**A política sobre perks vanilla de Enchanting ainda não está definida e não deve ser presumida.**

### AlchemySystem

Sistema futuro/externo. O governador fornece carreira, rank, Vigor e XP.

**A política sobre perks vanilla de Alchemy ainda não está definida e não deve ser presumida.**

## 11. Regra sobre perks vanilla

Para todas as profissões, exceto Alquimista e Encantador enquanto essas duas permanecem em decisão:

- perks vanilla não concedem profissão;
- perks vanilla não concedem rank;
- perks vanilla não liberam receita profissional;
- perks vanilla não liberam tier de crafting;
- perks vanilla não liberam aprimoramento/refino;
- perks vanilla não substituem gates de guilda/membership;
- perks vanilla não alteram XP/Vigor profissional.

Especialmente para Ferreiro/Curtidor, o sistema não deve depender das perks vanilla de Smithing para determinar o que pode ser criado ou refinado.

## 12. Configuração

Valores de balanceamento devem ficar fora do código rígido.

Essa é uma regra **transversal a todos os sistemas profissionais**, não apenas a XP/Vigor.

O documento canônico complementar é `docs/architecture/AETHERIUS_BALANCE_CONFIGURATION_POLICY.md`.

Portanto, sistemas externos também devem externalizar parâmetros como:

- estoque/cooldown de recursos;
- duração de atividades;
- concorrência;
- yields e probabilidades;
- conversões de materiais;
- custos de receitas;
- budgets de sets;
- parâmetros de minigames/refino.

Valores presentes nos documentos são defaults atuais de balanceamento, salvo quando explicitamente marcados como invariantes estruturais.

Exemplo conceitual:

```json
{
  "professionSystem": {
    "rankThresholds": {
      "novice": 0,
      "apprentice": 500,
      "adept": 1500,
      "expert": 3500,
      "master": 6000
    },
    "vigor": {
      "max": 100,
      "regenDelaySeconds": 60,
      "regenPerMinute": 1
    },
    "xpByActivityRank": {
      "novice": 10,
      "apprentice": 12,
      "adept": 15,
      "expert": 17,
      "master": 20
    },
    "lowerRankXpFactor": {
      "same": 1.0,
      "oneBelow": 0.5,
      "twoOrMoreBelow": 0.1
    }
  }
}
```

Receitas, records e IDs da load order não pertencem a esse JSON como FormIDs absolutos. Eles são resolvidos por catálogo dinâmico.

## 13. Persistência planejada

O storage canônico é PostgreSQL.

Esquema conceitual:

```text
profession_character_state
- character_id PK
- selected_profession
- profession_xp
- profession_rank
- profession_vigor
- last_activity_at
- progression_revision
- updated_at

profession_activity_ledger
- operation_id PK
- character_id
- profession
- activity_type
- activity_rank
- source_system
- xp_awarded
- vigor_spent
- result_ref
- committed_at

profession_global_gates
- gate_key PK
- enabled
- revision
- updated_at
```

A implementação final deve usar o shared persistence kernel, UnitOfWork, ledger/outbox e constraints da arquitetura canônica.

## 14. Eventos de domínio sugeridos

- `ProfessionSelected`
- `ProfessionActivitySettled`
- `ProfessionXpGranted`
- `ProfessionRankPromoted`
- `ProfessionPromotionBlocked`
- `ProfessionVigorChanged`
- `ProfessionGlobalGateChanged`

Eventos são fatos já aceitos. Não substituem ownership nem transação.

## 15. Gates administrativos

A staff deve poder controlar sem recompilar:

- habilitação de profissão;
- habilitação de rank;
- Mestre global por profissão;
- thresholds;
- XP;
- custos de Vigor;
- regen;
- probabilidades/bônus profissionais;
- disponibilidade de conteúdos de alto impacto.

O desbloqueio global não cria Forms, itens ou receitas. Ele apenas remove um gate profissional; o sistema externo ainda precisa possuir catálogo e capability válidos.

## 16. Regras econômicas

Matriz conceitual de dependência:

| Coletor | Alimenta |
|---|---|
| Fazendeiro | Cozinheiro, Cervejeiro, Alfaiate |
| Caçador | Cozinheiro, Alfaiate, Curtidor, Alquimista |
| Herbalista | Alquimista, Cozinheiro, Cervejeiro |
| Minerador | Ferreiro, Curtidor, Artífice, Cervejeiro |

Essa matriz expressa design econômico, não autoriza o `profession-system` a mover itens. Transferência, crafting e consumo pertencem aos respectivos owners.

## 17. Idempotência e concorrência

Toda liquidação econômica deve suportar retry sem duplicação.

Requisitos mínimos:

- `operationId` único;
- uma atividade concluída não concede XP duas vezes;
- retry não consome Vigor duas vezes;
- revisão do estado profissional impede lost update;
- troca de sessão não permite reaproveitar autorização antiga;
- promotion e ledger ficam na mesma UnitOfWork quando aplicável.

## 18. Capability e rollout

O módulo deve ser ativável por feature:

`off -> audit -> shadow -> canary -> active`

Capabilities relevantes:

- persistence ready;
- UI transport ready;
- external gathering integration ready;
- external crafting integration ready;
- external refinement integration ready;
- enchantment integration ready;
- catalog compatibility valid.

Ausência de um sistema externo não deve desligar toda a carreira. A UI pode apresentar a profissão com capability `unavailable` e reason.

## 19. Critérios arquiteturais de aceite

Antes de chamar o módulo de implementado:

1. existe um único writer de XP/rank/Vigor;
2. coleta Novato universal funciona sem gerar XP indevido;
3. uma única profissão especializada persiste por personagem;
4. thresholds, Vigor e demais valores de balanceamento dos módulos externos são configuráveis;
5. ledger impede replay;
6. UI é read model + commands, não authority;
7. módulos externos só usam contratos públicos;
8. nenhuma receita depende de posição hardcoded de plugin;
9. StableFormKey é usado em definitions persistentes;
10. Housecarl/RecordCatalog correspondem à release real;
11. perks vanilla não viram gate das profissões não excepcionadas;
12. Alquimia/Encantamento permanecem sem decisão inventada sobre perks;
13. PostgreSQL/UnitOfWork suportam restart/retry;
14. rollout/rollback existem por feature.

## 20. Fontes conceituais usadas

Esta especificação consolida:

- documento geral `Aetherius_Sistema_de_Profissoes_Documento_Atualizado.pdf`;
- `Aetherius_Crafting_Refinement_Implementation_Plan_Profissoes.md`;
- `Aetherius_Curtidor_Plano_Implementacao_v1_1.md`;
- arquitetura canônica do `AetheriusGameplayCore`;
- decisões posteriores do projeto que substituem pontos antigos quando explicitamente registradas na documentação do módulo.
