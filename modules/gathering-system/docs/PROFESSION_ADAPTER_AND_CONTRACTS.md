# Adapter do ProfessionSystem e contratos de atividade

## 1. Objetivo

O GatheringSystem não pode atualizar diretamente:

- XP profissional;
- rank;
- Vigor;
- promoção;
- profession selection.

Deve existir um adapter explícito entre os domínios.

Nome recomendado:

`GatheringProfessionAdapter`

Ele implementa a linguagem do GatheringSystem sobre o contrato público do governador.

## 2. Responsabilidades

O adapter deve:

- consultar effective rank;
- saber se a coleta Novato universal é permitida;
- informar se XP é elegível;
- validar Vigor;
- consultar gates globais;
- resolver custo da activity;
- preparar/liquidar a atividade com idempotência;
- retornar promoção/revisão resultante;
- nunca duplicar fórmula de XP.

## 3. Autorização inicial

```ts
interface GatheringAuthorizationRequest {
  requestId: string;
  actorKey: ActorKey;

  profession:
    | "miner"
    | "herbalist"
    | "hunter"
    | "farmer";

  activityType: string;
  activityRank: ProfessionRank;

  resourceDefinitionId: string;
  sessionEpoch: string;
}

interface GatheringAuthorization {
  allowed: boolean;
  reason?: string;

  effectiveRank: ProfessionRank;
  selectedProfession: string | null;

  xpEligible: boolean;

  vigor: {
    current: number;
    cost: number;
  };

  professionRevision: number;
}
```

A resposta é snapshot de autorização, não um cheque eterno.

## 4. Revalidação no commit

Como sessões podem durar minutos, a autorização precisa ser revalidada no momento do cycle commit.

Exemplo:

```ts
interface ProfessionActivityPrepare {
  operationId: string;
  actorKey: ActorKey;
  profession: GatheringProfession;
  activityType: string;
  activityRank: ProfessionRank;
  sourceSystem: "gathering-system";
  expectedProfessionRevision?: number;
}
```

Resultado conceitual:

```ts
interface ProfessionActivityReservation {
  reservationId: string;
  operationId: string;
  allowed: boolean;
  expiresAt: Instant;

  vigorCost: number;
  xpPolicy: "eligible" | "no-xp-universal-novice";
}
```

Se o contrato do ProfessionSystem permanecer apenas `authorize + settle`, o adapter deve reautorizar imediatamente antes do commit e usar operationId/ledger para recovery.

A implementação ideal pode evoluir para `prepare/commit/cancel` sem transferir ownership.

## 5. Commit profissional

Após o GatheringSystem ter um resultado autoritativo e uma operação econômica recuperável:

```ts
interface GatheringProfessionSettlement {
  operationId: string;
  reservationId?: string;
  actorKey: ActorKey;

  profession: GatheringProfession;
  activityType: string;
  activityRank: ProfessionRank;

  sourceSystem: "gathering-system";
  authoritativeResultRef: string;
}
```

O ProfessionSystem calcula:

- Vigor final;
- XP base;
- anti-powerlevel;
- XP zero quando não é profissão selecionada;
- promoção;
- gate de Mestre;
- nova revision.

O GatheringSystem não envia `xpAward=17`.

## 6. XP adapter

O "adaptador de ganho de experiência" deve ser uma camada fina.

Errado:

```ts
if (rank === "expert") xp += 17;
```

dentro do GatheringSystem.

Correto:

```text
GatheringSystem
 -> activity completed: mining/gold/expert
 -> GatheringProfessionAdapter
 -> ProfessionSystem
 -> authoritative XP policy
```

## 7. Activity types

IDs lógicos sugeridos:

```text
gathering.mining.iron
gathering.mining.corundum
gathering.mining.silver
gathering.mining.gold
gathering.mining.orichalcum
gathering.mining.quicksilver
gathering.mining.dwemer

gathering.herbalism.harvest
gathering.hunting.process-carcass
gathering.farming.harvest
```

Esses IDs não são Forms.

## 8. Gathering yield interface

```ts
interface GatheringYield {
  operationId: string;
  entries: Array<{
    itemKey: StableFormKey;
    quantity: number;
    reason:
      | "base"
      | "rank-yield"
      | "common-gem"
      | "perfect-gem"
      | "bonus-ingredient"
      | "duplication"
      | "farm-roll";
  }>;

  sourceDefinitionId: string;
}
```

O yield é calculado no GatheringSystem e concedido pelo InventoryTransactionPort.

## 9. Rank gates

O resource definition declara required rank.

O adapter pergunta ao ProfessionSystem effective rank.

Exemplo:

```text
actor selected profession = miner
rank = adept
target = gold
required = expert
=> deny

actor selected profession = cook
universal mining rank = novice
target = iron
required = novice
=> allow, xpEligible=false
```

## 10. Vigor

Cada cycle completo é uma atividade profissional válida.

Baseline de custo vem do ProfessionSystem/configuração.

O GatheringSystem:

- não regenera Vigor;
- não persiste Vigor;
- não calcula regen;
- não decrementa Vigor localmente.

## 11. Result reference

O `authoritativeResultRef` deve apontar para um ledger/commit de gathering que prove:

- site/carcass;
- cycle;
- reward;
- inventory transaction;
- timestamp.

Isso permite auditoria e recovery.

## 12. Interface de sessão

```ts
interface GatheringSessionService {
  openInteraction(actor: ActorKey, targetHint: unknown): Promise<GatheringInteractionView>;
  startSession(actor: ActorKey, request: StartGatheringRequest): Promise<GatheringSessionView>;
  stopSession(actor: ActorKey, sessionId: string, reason: string): Promise<void>;
  snapshot(actor: ActorKey, sessionId: string): Promise<GatheringSessionView>;
}
```

## 13. Interface de resource state

```ts
interface GatheringResourceRepository {
  getSiteForUpdate(siteId: string, tx: UnitOfWork): Promise<GatheringSiteState>;
  reserveUnit(siteId: string, operationId: string, tx: UnitOfWork): Promise<ResourceReservation>;
  markDepleted(siteId: string, at: Instant, tx: UnitOfWork): Promise<void>;
  refreshIfCooldownExpired(siteId: string, now: Instant, tx: UnitOfWork): Promise<GatheringSiteState>;
}
```

## 14. Interface de hunting

```ts
interface CarcassProcessingService {
  resolveCarcass(actor: ActorKey, targetHint: unknown): Promise<ResolvedCarcass>;
  process(actor: ActorKey, carcass: ResolvedCarcass, operationId: string): Promise<HuntingResult>;
}
```

## 15. Interface de farm rotations

```ts
interface FarmCycleService {
  getActiveCycle(farmSiteId: string, now: Instant): Promise<FarmCycleSnapshot>;
  setActiveCycle(command: AdminFarmCycleCommand): Promise<void>;
  resolvePool(farmSiteId: string, cycleId: string): Promise<FarmResourcePool>;
}
```

## 16. Errors

Razões canônicas sugeridas:

```text
profession-rank-too-low
profession-gate-locked
profession-vigor-insufficient
tool-missing
target-invalid
target-too-far
resource-depleted
resource-cooldown
worker-cap-reached
carcass-already-processed
species-not-supported
catalog-unresolved
inventory-unavailable
session-stale
operation-replayed
capability-unavailable
```

## 17. Eventos

GatheringSystem pode publicar:

```text
GatheringSessionStarted
GatheringCycleCommitted
GatheringSiteDepleted
GatheringSiteRestored
CarcassProcessed
FarmCycleChanged
```

ProfessionSystem publica separadamente seus fatos de progressão.

## 18. Regra de boundary

Nenhum import do GatheringSystem deve acessar repository/tabela interna do ProfessionSystem.

Integração ocorre por contrato público.
