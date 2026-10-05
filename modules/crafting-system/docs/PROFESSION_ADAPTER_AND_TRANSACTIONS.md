# Profession adapter, transações e benefícios

## 1. Adapter obrigatório

Nome recomendado:

CraftingProfessionAdapter

O CraftingSystem não acessa tabelas do ProfessionSystem.

## 2. Autorização de workstation

~~~ts
interface WorkstationAuthorizationRequest {
  requestId: string;
  actorKey: ActorKey;
  workstationTypeId: string;
}

interface WorkstationAuthorization {
  allowed: boolean;
  profession: ArtisanProfession | null;
  professionRank?: ProfessionRank;
  reason?: string;
  professionRevision: number;
}
~~~

## 3. Recipe authorization

~~~ts
interface CraftAuthorizationRequest {
  requestId: string;
  actorKey: ActorKey;
  sessionId: string;
  recipeDefinitionId: string;
  activityRank: ProfessionRank;
  expectedProfessionRevision?: number;
}
~~~

Resposta inclui:

- allowed;
- reason;
- profession;
- effective rank;
- Vigor cost/policy;
- benefit profile;
- gate state.

## 4. XP adapter

CraftingSystem nunca calcula:

~~~text
10 / 12 / 15 / 17 / 20 XP
anti-powerlevel factor
rank promotion
Vigor regen
~~~

Ele reporta a conclusão.

~~~ts
interface CraftCompletedActivity {
  operationId: string;
  actorKey: ActorKey;
  profession: ArtisanProfession;
  activityType: "crafting";
  activityRank: ProfessionRank;
  recipeDefinitionId: string;
  authoritativeResultRef: string;
}
~~~

## 5. Transaction boundary

Crafting envolve:

- material consumption;
- output creation;
- profession settlement.

Usar operationId comum + prepare/commit/recover.

## 6. Fluxo recomendado

~~~text
1. validate session/recipe/station
2. reauthorize profession
3. prepare Profession activity/Vigor
4. prepare InventoryTransaction inputs/output
5. run/finalize stage machine
6. resolve professional benefits
7. persist crafting operation intent
8. commit inventory
9. settle ProfessionSystem
10. mark crafting operation complete
11. outbox/read model
~~~

A ordem final deve respeitar guarantees reais dos ports, mantendo recovery determinístico.

## 7. Material reservation

Estados:

~~~text
available
reserved
committed/consumed
released
~~~

Stage-specific losses precisam ser idempotentes.

## 8. Material preservation benefits

Exemplos:

- Ferreiro Aprendiz: 10%;
- Curtidor Aprendiz: 10%;
- Cozinheiro Especialista: 20%;
- Artífice Mestre: 20%;
- Alfaiate Mestre: 20%.

A eligibility vem do ProfessionSystem/recipe policy.

CraftingSystem resolve o efeito econômico server-side com RngPort e registra:

~~~text
benefit roll
eligible material group
preserved item
operationId
~~~

## 9. Cook Master duplicate portion

A duplicação de output do Cozinheiro Mestre:

- é server-side;
- não cria segundo XP;
- não consome segundo Vigor;
- é parte do mesmo operationId;
- outputCount final é persistido.

## 10. Membership

Membership check não pertence ao ProfessionSystem se outro owner já existir.

CraftingSystem consulta port adequado.

## 11. Failure

Uma falha intermediária:

- não concede XP;
- segue perda local do workflow;
- não chama settlement de conclusão;
- Vigor em falha permanece policy do ProfessionSystem/configuração.

## 12. Disconnect

Recovery precisa saber:

- stage;
- materials reserved/committed;
- output status;
- profession settlement status.

## 13. Replay

Mesmo operationId:

- não remove material outra vez;
- não cria output outra vez;
- não rerrola benefício;
- não concede XP outra vez.

## 14. Ledger

~~~text
crafting_operation_ledger
- operation_id PK
- actor
- profession
- station
- recipe
- catalog_revision
- stage
- input_transaction
- output_transaction
- benefit_result
- profession_result_ref
- state
- committed_at
~~~

## 15. Events

- CraftingSessionStarted
- CraftingRecipeSelected
- CraftingStageCompleted
- CraftingStageFailed
- CraftingOperationCommitted
- CraftingOperationRecovered

Progression events continuam no ProfessionSystem.
