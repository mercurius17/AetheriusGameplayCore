# Plano de implementação e testes do GatheringSystem

## 1. Meta

Implementar os quatro Coletores sem criar authority duplicada de profissão, inventário ou UI.

## 2. Fase 0 — Baseline e auditoria

Antes de código de gameplay:

- congelar baseline de GameplayCore/host/UI;
- scan Housecarl da load order;
- inventariar mining references;
- inventariar FLORAs/harvestables;
- inventariar species;
- inventariar farms/locations;
- inventariar ferramentas;
- gerar unresolved report;
- calcular signatures.

Saída:

```text
gathering-catalog manifest
mine mapping
herbal mapping
species mapping
farm mapping
tool mapping
audit report
```

## 3. Fase 1 — Contracts e capabilities

Implementar/validar:

- `GatheringProfessionAdapter`;
- world target resolution;
- distance validation;
- InventoryTransactionPort;
- ClockPort;
- RngPort;
- UiTransportPort;
- NativeDeathPort integration;
- animation projection, se necessária;
- capability report.

Sem capability, feature permanece `off/audit`.

## 4. Fase 2 — Shared gathering engine

Implementar:

- GatheringSiteDefinition;
- SiteState;
- SessionService;
- CycleService;
- WorkerLeaseService;
- CooldownService;
- YieldService;
- repositories;
- ledgers;
- outbox;
- errors;
- metrics.

Ainda sem regras específicas por profissão.

## 5. Fase 3 — Minerador

Implementar primeiro por ser a especificação de resource site mais fechada:

- mapear minas;
- agrupar veins;
- classificar ore types;
- stock via configuration (default atual: 500);
- cooldown via configuration (default atual: 72 h);
- worker cap via configuration (default atual: 2);
- Pickaxe;
- CEF;
- animation;
- cycle duration via configuration (default atual: 60 s);
- rank gates;
- coal;
- gem rolls;
- Master gate;
- Dwemer controlled resource;
- continuous session;
- depletion/recovery.

## 6. Fase 4 — Herbalista

- mapear FLORAs;
- interceptar vanilla harvest;
- base ingredient;
- Satchel;
- CEF;
- animation;
- 60 s;
- site capacity config;
- 72 h depletion cooldown;
- rank quantities;
- global authorized alchemy bonus pool;
- duplicate Master;
- prevent double-harvest.

## 7. Fase 5 — Caçador

- integrar death/spawn generation;
- species catalog;
- carcass identity;
- global claim;
- loot ownership;
- Novice meat;
- Apprentice hide;
- Adept ingredient;
- Expert quantities;
- Master duplication;
- no resource cooldown;
- processed-once guarantee.

## 8. Fase 6 — Fazendeiro

- mapear todas as farms;
- interaction markers;
- Hoe;
- 60 s animation;
- regional pools;
- fixed pool;
- rotation pool;
- admin cycle control;
- rank rolls;
- duplicate chance;
- optional global stock/cooldown;
- read model CEF.

## 9. Fase 7 — Aetherius UI Core

Criar/adaptar módulo contextual:

```text
gathering
  mining
  herbalism
  farming
  hunting
```

Sem criar shell paralelo.

Testar:

- open/close;
- session recovery;
- timer;
- stock;
- cooldown;
- workers;
- unavailable reasons;
- reconnect.

## 10. Fase 8 — Transaction hardening

- operation ledger;
- inventory prepare/commit/recover;
- profession settlement recovery;
- stock race;
- carcass race;
- lease expiry;
- disconnect;
- crash;
- restart;
- replay;
- rate limits.

## 11. Fase 9 — Rollout

Por coletor:

```text
off
 -> audit
 -> shadow
 -> canary
 -> active
```

Não ativar quatro mecânicas simultaneamente sem telemetria.

# 12. Unit tests — engine

Cobrir:

- site resolve;
- wrong target reject;
- wrong tool reject;
- out-of-range reject;
- cooldown reject;
- rank reject;
- Vigor reject;
- lease acquire;
- lease expire;
- max workers;
- cycle exactly one authoritative completion;
- cancel before 60 s yields nothing;
- operation replay yields nothing extra;
- RNG replay stable;
- cooldown lazy restore;
- state revision conflict.

# 13. Unit tests — Minerador

- Iron Novice -> 1 Iron + 1 Coal;
- Apprentice common gem total chance profile;
- Adept can Corundum/Silver;
- Novice cannot Corundum/Silver;
- Expert can Gold;
- Master blocked denies Master resources;
- enabled Master allows Orichalcum/Quicksilver/Dwemer;
- common gem chance 1/2/3% per rank;
- perfect gem 1% at Master;
- Master duplication 20%;
- gem/duplication do not decrement extra mine stock;
- each cycle decrements 1;
- capacity starts/restores from definition (default atual: 500);
- stock 1 cannot become -1;
- depletion uses configured cooldown (default atual: 72 h);
- configured worker cap is respected (default atual: 2);
- worker cap override changes behavior without code change;
- disconnect releases lease;
- mine mixed nodes resolve correct ore.

# 14. Unit tests — Herbalista

- vanilla reward suppressed for managed plant;
- Novice one base ingredient;
- Apprentice two;
- Adept 10% bonus profile;
- Expert 20%;
- bonus pool accepts non-botanical alchemy ingredients;
- Master duplication 20%;
- Satchel required;
- 60 s required;
- cooldown 72 h after site depletion;
- capacity is site config, not fixed 500;
- unresolved plant denied;
- retry does not reroll bonus.

# 15. Unit tests — Caçador

- living actor denied;
- non-animal denied;
- dead supported animal accepted;
- no tool required;
- Novice meat only;
- Apprentice adds hide;
- Adept adds species ingredient;
- Expert doubles unlocked categories;
- Master duplication profile;
- same carcass cannot be processed twice;
- two-player race gives one winner;
- respawn generation can be processed again;
- vanilla/Enemy loot does not duplicate professional yield.

# 16. Unit tests — Fazendeiro

- Hoe required;
- region pool resolves;
- fixed + rotation definitions resolve;
- Novice 1 roll;
- Apprentice 2;
- Adept 3;
- Expert 3 + 10% per-roll duplication;
- Master 3 + 20%;
- herbs excluded from normal farm pool;
- cycle switch changes pool;
- retry keeps same rolls;
- disabled pool unavailable;
- 60 s required.

# 17. Profession adapter tests

- non-specialized gatherer effective Novice;
- non-specialized Novice gets reward but zero XP;
- selected gatherer gets XP;
- anti-powerlevel remains ProfessionSystem responsibility;
- GatheringSystem cannot set XP;
- insufficient Vigor prevents cycle commit;
- settlement retry idempotent;
- rank promotion from settlement reflected on next cycle;
- Master gate changes authorization without restart.

# 18. Integration tests

Cenários obrigatórios:

1. two miners same mine;
2. third miner rejected;
3. mine reaches zero during two active sessions;
4. cooldown survives restart;
5. restore after 72 h;
6. disconnect at 59 s;
7. disconnect after committed cycle;
8. remove tool mid-cycle;
9. move out of range;
10. load-order index changes but StableFormKey still resolves;
11. patched winning mining record;
12. plant harvest cannot double vanilla + system reward;
13. carcass race;
14. animal respawn;
15. farm rotation while no session active;
16. farm rotation boundary during session;
17. ProfessionSystem unavailable;
18. InventoryTransactionPort unavailable;
19. UI reconnect;
20. operation replay.

# 19. Golden catalog tests

Guardar fixtures de release para provar:

- mine -> entries -> ore types;
- plant -> ingredient;
- species -> yields;
- farm -> region -> pools;
- tools;
- relevant winning records.

Mudança esperada precisa atualizar golden output conscientemente.

# 20. Performance tests

Mining/herbal/farm sessions não devem criar polling pesado.

Preferir:

- timers coarse-grained;
- server timestamps;
- scheduler compartilhado;
- DB apenas em transições econômicas;
- CEF updates throttled;
- leases com heartbeat controlado.

Testar carga com:

- muitos sites;
- múltiplos jogadores;
- cooldowns;
- farm rotations;
- concurrent cycle commits.

# 21. Security tests

- forged target;
- forged siteId;
- forged ore type;
- forged elapsed time;
- forged quantity;
- forged rank;
- forged RNG result;
- stale session;
- stale epoch;
- operation replay;
- spam start/stop;
- teleport during cycle;
- inventory full/failure;
- race on last stock;
- race on carcass.

# 22. Acceptance — Minerador

Pronto apenas quando:

- todas as minas alvo estão mapeadas/auditadas;
- tipo é resolvido server-side;
- stock/cooldown/worker cap são globais conforme a definition;
- defaults atuais 500/72 h/2 podem ser alterados por configuration;
- duração do ciclo é server-side e configurável (default atual: 60 s);
- progressão oficial é respeitada;
- Picareta é validada;
- CEF não é authority;
- stock não duplica;
- XP/Vigor passam pelo ProfessionSystem;
- restart/retry são seguros.

# 23. Acceptance — Herbalista

Pronto apenas quando:

- plantas válidas são detectadas;
- vanilla harvest não duplica;
- Satchel é validada;
- cycle dura 60 s;
- cooldown global funciona;
- progressão oficial funciona;
- bonus pool global autorizada funciona;
- XP/Vigor usam adapter.

# 24. Acceptance — Caçador

Pronto apenas quando:

- toda espécie suportada tem catalog;
- death/spawn generation é segura;
- cada carcaça processa uma vez;
- loot profissional não duplica;
- rank define categorias/quantidades;
- não há cooldown artificial.

# 25. Acceptance — Fazendeiro

Pronto apenas quando:

- fazendas estão mapeadas;
- marker/interação é validado;
- Hoe é exigida;
- animation + 60 s funcionam;
- pools regionais/fixas/rotativas funcionam;
- staff controla ciclos;
- yields respeitam rank;
- stock/cooldown são configuráveis e globais quando habilitados.

# 26. Acceptance geral

O GatheringSystem está apto para produção apenas quando:

- ProfessionSystem continua único owner de XP/rank/Vigor;
- Inventory continua owner de item instances;
- Housecarl/RecordCatalog correspondem à release;
- nenhum mod index está hardcoded;
- persistência PostgreSQL é idempotente;
- UI usa transport oficial;
- world interaction é validada server-side;
- capability report prova as dependências;
- rollback por subfeature existe.


# 27. Configuration/balance tests

Obrigatório provar que:

- alterar mine capacity de 500 para outro valor não exige mudança de código;
- alterar cooldown de 72h não exige mudança de código;
- alterar max workers de 2 não exige mudança de código;
- alterar cycle duration de 60s não exige mudança de código;
- alterar chances/yields não exige mudança de código;
- site override pode divergir do default global;
- config inválida é rejeitada;
- session usa uma revision consistente;
- UI mostra os valores efetivos quando aplicável;
- restart preserva state e reaplica definitions corretamente.
