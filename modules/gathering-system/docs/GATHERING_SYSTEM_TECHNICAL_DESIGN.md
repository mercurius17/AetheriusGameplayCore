# Gathering System — Arquitetura técnica

Data: 05/10/2026  
Status: plano normativo do módulo, subordinado à arquitetura canônica e às regras de profissão já consolidadas.

## 1. Domínio

O `gathering-system` responde por transformar uma interação válida com o mundo em uma **atividade de coleta autoritativa**.

Ele deve saber:

- qual recurso/world reference foi usado;
- a qual site lógico ele pertence;
- qual tipo de recurso aquele site oferece;
- se o site está disponível;
- quantos jogadores podem trabalhar nele;
- se o ator está apto a iniciar/manter a sessão;
- quando um ciclo de coleta foi realmente concluído;
- qual yield deve ser produzido pela progressão oficial;
- como reservar e conceder o resultado sem duplicação;
- quando um site entra/sai de cooldown;
- quando uma carcaça já foi processada;
- qual pool/ciclo agrícola está ativo.

Ele **não** possui carreira profissional.

## 2. Ownership

O `gathering-system` é o único writer dos fatos de coleta abaixo:

```text
gathering site stock
gathering site depletion state
gathering site cooldown / availableAt
active gathering leases
gathering sessions
gathering cycle ledger
carcass processed state
farm active cycle / pool revision
resource-site runtime revision
```

Não escreve:

```text
selectedProfession
professionXp
professionRank
professionVigor
characterLevel
inventory item instances
class state
damage state
```

## 3. Dependências

### 3.1. ProfessionSystem

Consumido exclusivamente por adapter público para:

- autorização;
- effective profession rank;
- Vigor;
- gates globais;
- liquidação de XP/Vigor após uma atividade válida.

### 3.2. RecordCatalog / Housecarl

Usado para definitions da release:

- forms;
- winning records;
- tipos/categorias;
- mappings;
- references conhecidas;
- recursos;
- ferramentas.

Housecarl é authoring/audit, não dependência por ciclo.

### 3.3. Host Ports existentes

O módulo deve consumir, quando disponíveis:

| Port | Uso |
|---|---|
| `IdentityPort` | ator/sessão autenticados |
| `WorldSnapshotPort` | posição, célula, worldspace, contexto |
| `InventoryTransactionPort` | validar ferramentas e conceder yield atomicamente |
| `ClockPort` | duração de ciclos, leases e cooldown |
| `RngPort` | rolls server-side |
| `UiTransportPort` | CEF/read models/commands |
| `NativeDeathPort` | morte/generation necessária ao processamento de carcaças |

### 3.4. Capabilities adicionais que podem ser necessárias

Se o host atual não expuser semântica suficiente, deve ser criado um port público mínimo, e não um acesso a internals:

```ts
interface WorldInteractionPort {
  resolveTarget(actorKey: ActorKey, clientTargetHint?: unknown): Promise<ResolvedWorldTarget>;
  canInteract(actorKey: ActorKey, target: ResolvedWorldTarget): Promise<boolean>;
}

interface AnimationProjectionPort {
  startGatheringAnimation(actorKey: ActorKey, animationId: string): Promise<void>;
  stopGatheringAnimation(actorKey: ActorKey, reason: string): Promise<void>;
}
```

A animação é apresentação. O servidor não considera "a animação está tocando" como prova suficiente de coleta.

## 4. Configurabilidade obrigatória

O GatheringSystem deve obedecer à política `docs/architecture/AETHERIUS_BALANCE_CONFIGURATION_POLICY.md`.

A lógica estrutural define que um site possui capacidade, cooldown, concorrência, duração de ciclo e yield. **Os números concretos desses parâmetros vêm das definitions.**

Exemplo conceitual:

~~~ts
interface GatheringBalanceProfile {
  capacity: number;
  cooldownSeconds: number;
  maxConcurrentWorkers: number;
  cycleSeconds: number;
  baseYield: number;
  leaseTtlSeconds?: number;
}
~~~

Defaults atuais de mineração:

~~~text
capacity = 500
cooldown = 72h
maxConcurrentWorkers = 2
cycle = 60s
~~~

Esses valores devem poder ser alterados sem modificar o código do domínio.

O runtime deve suportar:

- default global por tipo de recurso;
- override por site;
- revision de configuration;
- validação de valores;
- snapshot consistente durante sessão;
- read model refletindo o valor efetivo.

## 5. Abstrações centrais

### 4.1. Resource Site

Um site representa o recurso econômico compartilhado.

```ts
type GatheringKind = "mining" | "herbalism" | "farming" | "hunting";

interface GatheringSiteDefinition {
  siteId: string;
  kind: Exclude<GatheringKind, "hunting">;
  entryReferences: StableFormKey[];
  regionId?: string;

  capacity?: number;
  cooldownSeconds?: number;
  maxConcurrentWorkers?: number;

  requiredTool?: StableFormKey;
  resourceProfileId: string;
  enabled: boolean;
}
```

Para mineração, o site é a **mina lógica**, não necessariamente uma única vein.

Para herbalismo, um site pode representar uma planta individual ou um patch/agrupamento de plantas conforme o catálogo. A capacidade deve ser explicitamente definida; não deve herdar 500 apenas porque minas usam 500.

Para fazendas, o site representa a fazenda e seus interaction markers.

### 4.2. Resource Node / Entry Reference

É a referência concreta no mundo usada para iniciar a interação.

```ts
interface GatheringEntryDefinition {
  entryId: string;
  siteId: string;
  worldReferenceKey: StableFormKey;
  baseFormKey: StableFormKey;
  resourceTypeId?: string;
  interactionProfileId: string;
}
```

O jogador pode fornecer apenas uma intenção/hint de alvo. O servidor resolve e valida a referência real.

### 4.3. Session

```ts
interface GatheringSession {
  sessionId: string;
  actorKey: ActorKey;
  siteId: string;
  entryId: string;
  kind: GatheringKind;

  startedAt: Instant;
  cycleStartedAt: Instant;
  state: "opening" | "active" | "stopping" | "closed";

  leaseExpiresAt: Instant;
  revision: number;
}
```

### 4.4. Cycle

Cada minuto de trabalho concluído é uma operação econômica separada.

```ts
interface GatheringCycle {
  operationId: string;
  sessionId: string;
  sequence: number;
  startedAt: Instant;
  completesAt: Instant;
  activityRank: ProfessionRank;
}
```

Isso permite sessão contínua, mas mantém cada recompensa idempotente.

## 6. Máquina de estados genérica

```text
DISCOVER_TARGET
      |
      v
RESOLVE_SITE
      |
      v
VALIDATE_REQUIREMENTS
      |
      v
AUTHORIZE_PROFESSION
      |
      v
ACQUIRE_WORKER_LEASE
      |
      v
OPEN_CEF
      |
      v
START_ANIMATION
      |
      v
ACTIVE_CYCLE (60 s)
      |
      +-- cancel/distance/tool lost -> STOP
      |
      +-- complete -> REVALIDATE
                         |
                         v
                    RESERVE_OUTPUT
                         |
                         v
                    COMMIT_CYCLE
                         |
                         +--> stock/carcass/farm state
                         +--> inventory yield
                         +--> profession settlement
                         +--> log/outbox
                         |
                         v
                    NEXT_CYCLE or STOP
```

## 7. Regra de um minuto

Mineração, Herbalismo e Fazenda usam, no balanceamento atual, ciclo-base de **60 segundos**.

Os 60 segundos são um default configurável, não uma constante estrutural.

A duração é controlada por `ClockPort`.

O timer CEF é apenas projeção do tempo server-side.

Ao terminar 60 segundos, o sistema revalida:

- sessão;
- actor binding/session epoch;
- distância;
- alvo/site;
- ferramenta;
- profession authorization;
- Vigor;
- disponibilidade/estoque;
- lease;
- capability de inventário.

Somente após essas validações o ciclo pode gerar resultado.

## 8. Sessão contínua

Mineração pode continuar em ciclos sucessivos de 60 s enquanto:

- jogador não cancelar;
- permanecer em alcance;
- possuir Picareta;
- site possuir estoque;
- cooldown não iniciar;
- lease continuar válido;
- houver Vigor;
- rank ainda autorizar aquele recurso.

Herbalismo e Fazenda podem utilizar a mesma engine de sessão. O profile de cada site decide se a sessão é contínua ou single-cycle.

## 9. Ordem de validação

A ordem deve respeitar o documento consolidado de profissões:

1. autenticar personagem;
2. resolver profissão escolhida/effective gathering rank;
3. validar gate global de rank;
4. resolver alvo/site e distância;
5. validar disponibilidade/processamento;
6. validar ferramenta;
7. validar Vigor/autorização;
8. executar o ciclo;
9. só então comprometer o custo profissional;
10. entregar yield;
11. conceder XP quando aplicável;
12. persistir cooldown/state/log.

Na implementação transacional, passos 9–12 devem ser orquestrados de modo idempotente para não haver "recurso sem XP/Vigor" ou "Vigor sem recurso".

## 10. Coleta Novato universal

`ProfessionSystem` deve responder um effective rank de Novato para os quatro Coletores quando o personagem não escolheu aquela profissão.

Exemplo:

```text
selectedProfession = blacksmith
request = mining iron
effectiveGatheringRank = novice
xpEligible = false
```

O `gathering-system` não inventa essa regra localmente; ela vem do adapter do governador.

## 11. Yield

O yield é calculado server-side a partir de:

```text
GatheringSiteDefinition
+ resourceProfile
+ effective profession rank
+ global gates
+ server RNG
+ active farm/resource cycle
= GatheringYield
```

O cliente não envia quantidade final nem item IDs para concessão.

## 12. Interface com inventário

O yield deve ser concedido via `InventoryTransactionPort`.

Uma operação de coleta precisa de `operationId` estável.

Fluxo mínimo:

```text
prepare inventory grant
reserve gathering state
commit authoritative cycle
recover deterministically on partial failure
```

A solução final deve seguir o protocolo de prepare/commit/recover do Host Inventory.

## 13. Interrupções

A sessão termina sem reward do ciclo incompleto em:

- jogador se afastar;
- alvo deixar de ser válido;
- ferramenta deixar de estar disponível;
- logout;
- disconnect além do grace;
- mudança de epoch;
- início do cooldown;
- esgotamento;
- Vigor insuficiente;
- capability crítica cair;
- cancelamento explícito.

Ciclos já committed não são revertidos por cancelamento posterior.

## 14. Anti-cheat

Regras obrigatórias:

- target hint do cliente nunca é authority;
- timer do cliente nunca é authority;
- cliente nunca informa tipo de minério/planta;
- cliente nunca informa quantidade;
- cliente nunca informa rank;
- cliente nunca informa resultado do RNG;
- uma única sessão economicamente ativa de mesmo tipo por personagem, salvo regra futura;
- rate limit de comandos CEF;
- leases expiram;
- operationId é deduplicado;
- grants usam transaction port;
- world distance é revalidada server-side.

## 15. Compatibilidade

A feature deve possuir assinatura baseada em:

- gathering definitions;
- relevant RecordCatalog slice;
- profession definitions;
- farm rotations;
- Host capabilities.

Mudança em plugin index sem mudança de StableFormKey não pode invalidar o domínio por si só.

## 16. Readiness

Estados esperados por subfeature:

```text
mining: off/audit/shadow/canary/active
herbalism: off/audit/shadow/canary/active
hunting: off/audit/shadow/canary/active
farming: off/audit/shadow/canary/active
```

Cada coletor pode ser ativado independentemente.

## 17. Resultado arquitetural

O módulo deve permitir que novas minas, plantas, animais e fazendas sejam incorporados por scan/mapping/configuração sem reescrever a regra central.

A progressão permanece no `profession-system`; o mundo e a coleta permanecem no `gathering-system`; o inventário permanece no Host Inventory.
