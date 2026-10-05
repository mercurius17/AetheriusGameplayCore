# Persistência, concorrência, cooldown e recovery

## 1. Objetivo

Coleta altera recursos econômicos compartilhados.

Logo, precisa sobreviver a:

- concorrência;
- reconnect;
- crash;
- retry;
- replay;
- dois jogadores no mesmo recurso;
- múltiplos processos/instâncias do servidor.

PostgreSQL é a store durável planejada.

## 2. Tabelas conceituais

### 2.1. Site state

```text
gathering_site_state
- site_id PK
- definition_revision
- kind
- capacity
- stock_remaining
- status
- depleted_at nullable
- available_at nullable
- state_revision
- updated_at
```

### 2.2. Worker leases

```text
gathering_worker_lease
- lease_id PK
- site_id
- character_id
- session_id
- acquired_at
- expires_at
- heartbeat_at
- UNIQUE(site_id, character_id)
```

A regra de limite deve ser validada transacionalmente.

Para mineração:

```text
count(active leases for mine) < activeDefinition.maxConcurrentWorkers
```

O default atual é 2, mas o limite deve ser configurável.

### 2.3. Sessions

```text
gathering_session
- session_id PK
- character_id
- site_id
- entry_id
- kind
- state
- session_epoch
- started_at
- last_cycle_sequence
- closed_at
- close_reason
```

Sessions podem ser mantidas majoritariamente em memória e checkpointadas conforme necessidade, mas qualquer estado que afete exclusividade global precisa ser recuperável.

### 2.4. Cycle ledger

```text
gathering_cycle_ledger
- operation_id PK
- session_id
- sequence
- character_id
- site_id
- activity_type
- activity_rank
- yield_json
- inventory_transaction_id
- profession_result_ref
- state
- committed_at
```

### 2.5. Carcass state

```text
gathering_carcass_state
- carcass_instance_key PK
- species_id
- spawn_generation
- processed
- processed_by
- operation_id UNIQUE
- processed_at
- expires_at nullable
```

### 2.6. Farm cycle state

```text
gathering_farm_cycle_state
- farm_site_id PK
- active_cycle_id
- cycle_revision
- starts_at
- ends_at nullable
- stock_state_json nullable
- updated_at
```

## 3. Mining stock

Uma mina nova/restaurada usa a **definition ativa**:

```text
capacity = activeDefinition.capacity       // default atual: 500
stock_remaining = activeDefinition.capacity
status = available
```

O valor 500 não deve existir como constante no repository/service.

No commit de um cycle:

```sql
lock row
assert stock_remaining > 0
stock_remaining = stock_remaining - 1
if stock_remaining == 0:
  status = depleted
  depleted_at = now
  available_at = now + activeDefinition.cooldownSeconds  // default atual: 72h
commit
```

SQL acima é conceitual; usar repository/UnitOfWork.

## 4. Cooldown

Não persistir countdown por segundo.

Persistir:

```text
available_at
```

No acesso:

```text
if status == depleted and now >= available_at:
  restore atomically
```

Isso reduz jobs e mantém comportamento determinístico após restart.

## 5. Concorrência de 2 mineradores

Acquire deve ser atômico.

Não fazer:

```text
count = query()
if count < 2:
  insert lease
```

sem lock/constraint apropriado.

A implementação pode usar:

- row lock do site;
- transaction;
- advisory lock;
- outra primitive PostgreSQL auditada.

O objetivo é provar que uma corrida 2->3 não ocorre.

## 6. Lease

Lease evita slot preso após disconnect.

Exemplo:

```text
lease TTL = curto/configurável
heartbeat = server-side
expired lease = não conta
```

O cliente não envia heartbeat de authority; o servidor pode atualizar lease enquanto a sessão autenticada é válida.

## 7. Cycle operationId

Formato lógico:

```text
gather:<sessionId>:<sequence>
```

Não precisa usar exatamente esse formato, mas precisa ser:

- único;
- reproduzível durante recovery;
- não reutilizável em outra sessão.

## 8. Inventory + Gathering + Profession

Há três owners:

```text
Gathering state
Inventory
Profession progression
```

Não existe transação SQL única se Inventory estiver fora do mesmo store/owner.

Usar saga/prepare-commit-recover com operationId comum.

Fluxo recomendado:

```text
1. validate cycle
2. prepare profession activity / vigor
3. prepare inventory grant
4. reserve gathering stock/carcass/farm result
5. persist operation intent
6. commit gathering state
7. commit inventory
8. settle profession
9. mark ledger complete
10. emit outbox
```

A ordem final deve ser adaptada às guarantees reais dos Host Ports.

O requisito é recovery determinístico.

## 9. Failure recovery

### Inventory prepared, Gathering not committed

Cancelar inventory reservation.

### Gathering committed, Inventory pending

Retry idempotente pelo mesmo operationId.

### Inventory committed, Profession pending

Retry settlement pelo mesmo operationId.

### Profession already settled, response lost

Dedupe ledger retorna resultado existente.

## 10. Depletion race

Com dois miners e `stock_remaining=1`:

- apenas um cycle pode reservar a última unidade;
- o segundo não pode produzir stock negativo;
- o segundo recebe depletion;
- sua sessão é encerrada ou pausada conforme UI policy;
- cycle incompleto não consome Vigor.

## 11. Carcass race

Dois jogadores processam a mesma carcaça:

```text
transaction A claims
transaction B sees processed/claim
A commits
B rejected
```

Nunca dois rewards.

## 12. Farm rolls

RNG deve ocorrer server-side e o resultado deve entrar no ledger do cycle.

Retry não rerrola.

```text
operationId X -> same authoritative farm roll
```

## 13. Gem/bonus rolls

A mesma regra vale para:

- common gems;
- perfect gems;
- Herbalist random ingredient;
- duplication;
- farm duplication.

O RNG result é gravado como parte do resultado autoritativo.

## 14. Disconnect

### Antes do cycle commit

- nenhum reward;
- nenhum XP;
- nenhum Vigor;
- lease expira/é liberado.

### Depois do commit

- operação continua recuperável;
- reconnect não duplica reward.

## 15. Restart

No bootstrap:

1. expire leases vencidos;
2. recuperar operations incompletas;
3. recalcular cooldown por `available_at`;
4. carregar farm cycles;
5. validar definition revisions;
6. bloquear feature se catálogo persistido for incompatível.

## 16. Carcass TTL

Carcass state pode ser eliminado depois que a spawn generation não puder mais existir.

Nunca remover cedo o bastante para permitir reprocessar a mesma carcaça.

A policy deve ser derivada do lifecycle real do NPC/spawn.

## 17. Audit logs

Registrar:

```text
GATHER_SESSION_START
GATHER_SESSION_STOP
GATHER_CYCLE_COMMIT
GATHER_CYCLE_REJECT
GATHER_SITE_DEPLETED
GATHER_SITE_RESTORED
GATHER_LEASE_ACQUIRED
GATHER_LEASE_RELEASED
HUNT_CARCASS_PROCESSED
FARM_CYCLE_CHANGED
GATHER_RECOVERY_RETRY
```

Campos:

- timestamp;
- actor;
- session;
- operation;
- site/carcass;
- definition revision;
- rank;
- yield;
- stock before/after;
- inventory transaction;
- profession settlement;
- reason.

## 18. Metrics

- cycles/hora por site;
- active workers;
- depletion time;
- downtime por cooldown;
- average session duration;
- aborted cycles;
- tool missing rejects;
- Vigor rejects;
- XP settlements;
- duplicate/replay rejects;
- inventory recovery count;
- farm output por pool/cycle;
- species processed;
- Herbalist bonus frequency.

## 19. Administração

Mudança administrativa de:

- stock;
- cooldown;
- farm cycle;
- enable/disable;

deve gerar audit event e revision.

Não editar tabelas manualmente como fluxo normal de operação.

## 20. Configuração e estado persistido

Parâmetros de balanceamento pertencem às definitions; estado econômico pertence à persistência.

Exemplo:

~~~text
Definition revision 42:
  capacity = 500
  cooldownSeconds = 259200
  maxConcurrentWorkers = 2

Persisted state:
  stockRemaining = 173
  availableAt = null
  definitionRevision = 42
~~~

Ao restaurar um site após cooldown, a capacidade deve ser obtida da revision de configuration aplicável, e não de literal compilado.

Mudanças administrativas/configuráveis de capacidade, cooldown, worker cap, cycle time ou yield devem possuir revision e auditabilidade.

