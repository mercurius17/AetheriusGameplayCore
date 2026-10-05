# Plano de implementação e testes do CraftingSystem

## 1. Fase 0 — Auditoria da release

Housecarl:

- plugins/masters;
- COBJ;
- workstation keywords;
- outputs;
- inputs;
- conditions;
- keywords;
- materials;
- guild conditions;
- mod categories;
- patches.

Gerar:

- raw catalog;
- profession mappings;
- workstation mappings;
- unresolved report;
- CraftingCatalogSignature.

## 2. Fase 1 — Contracts

Implementar/validar:

- CraftingProfessionAdapter;
- WorkbenchInteractionPort;
- InventoryTransactionPort;
- UiTransportPort;
- ClockPort;
- RngPort;
- membership port;
- catalog contracts.

## 3. Fase 2 — Catalog engine

- normalize COBJ;
- resolve winning records;
- classify outputs;
- classify material;
- assign profession;
- assign rank;
- assign station;
- apply overrides;
- validate conditions;
- golden tests;
- material conversion profiles;
- set cost profiles;
- recipe balance overrides;
- validação de orçamento total por set.

## 4. Fase 3 — Workstation authorization

- resolve workstation ref;
- map station type;
- ask ProfessionSystem;
- open only for allowed profession;
- build server-filtered recipe slice;
- suppress bypass vanilla.

Primeiro teste crítico:

~~~text
same Forge
Blacksmith -> Blacksmith recipes
Artificer -> Artificer recipes
~~~

Segundo teste crítico:

~~~text
same Tanning Rack
Tanner -> Tanner recipes
Artificer -> Artificer recipes
~~~

## 5. Fase 4 — Shared session/transaction engine

- CraftSessionService;
- recipe selection;
- reservations;
- operation ledger;
- stage orchestration;
- commit/recover;
- audit;
- metrics.

## 6. Fase 5 — Curtidor

Usar plano mais recente como referência de UX:

- leather direct;
- Prepare Table;
- Build Mold;
- Sewing;
- Finishing;
- tolerant profile;
- ProfessionAdapter;
- 10% Apprentice benefit.

## 7. Fase 6 — Ferreiro

Preservar workflow:

- Heat Forge;
- Melt Metal;
- Shape Metal;
- Cool;
- material profiles;
- tolerant baseline;
- profession catalog/ranks;
- 10% Apprentice benefit;
- Master gate.

## 8. Fase 7 — Artífice

Prioridade arquitetural:

- multi-workstation authorization;
- Forge + Tanning Rack;
- category mappings;
- recipes filtered by active station;
- no recipe leakage;
- profession progression items;
- material-save benefit at Master.

## 9. Fase 8 — Cozinheiro e Alfaiate

Implementar catalog/workflows próprios:

- rank recipes;
- benefits;
- station policy;
- UI profile.

Não inventar minigames não aprovados; podem iniciar com workflow simples server-authoritative.

## 10. Fase 9 — Cervejeiro

Somente após progressão específica ser definida.

Infraestrutura pode existir em audit sem recipes active.

## 11. Alquimia e Encantamento

Não implementar aqui.

Integrar por módulos externos.

## 12. Unit tests — workstation

- selected profession authorizes correct stations;
- unauthorized station denied;
- Artificer Forge allowed;
- Artificer Tanning Rack allowed;
- same Forge Blacksmith/Artificer different slices;
- same Tanning Rack Tanner/Artificer different slices;
- recipe of other profession never in read model;
- forged recipeId rejected;
- catalog revision invalidates session.

## 13. Unit tests — catalog

- COBJ normalize;
- winning record;
- ESL StableFormKey;
- mod reorder safe;
- bench keyword resolve;
- output category;
- material profile;
- profession mapping;
- rank mapping;
- membership;
- explicit override;
- unresolved denied.

## 14. Unit tests — ProfessionAdapter

- rank gate;
- Master gate;
- Vigor;
- XP settlement only after final output;
- retry no duplicate XP;
- perk vanilla does not authorize;
- benefit profile correct.

## 15. Unit tests — transactions

- materials reserved once;
- stage failure follows policy;
- final item created once;
- retry no double consumption;
- retry no reroll benefit;
- inventory failure recoverable;
- profession settlement retry.

## 16. Ferreiro tests

- 3 ore -> 1 ingot;
- 3 Iron Ore -> 1 Iron Ingot;
- full metal set recipe budget sums 30 ingots;
- per-piece distribution can change by config without code change;
- workflow order;
- Forge heat session-scoped;
- material profile resolved;
- rank does not harden baseline minigame;
- Iron/Steel/Steel Plate gates;
- Master blocked;
- guild membership.

## 17. Curtidor tests

- 3 animal hides -> 1 leather;
- full leather set recipe budget sums 30 leather;
- pure-hide set sums 15 leather + 5 hides;
- per-piece distribution can change by config without code change;
- leather no minigame;
- table session-scoped;
- mold 2 strips;
- 10 s;
- failure loses 1 strip;
- sewing 5 errors tolerated;
- finishing no economic penalty;
- rank/material do not harden minigame.

## 18. Artífice tests

- each category assigned;
- Forge recipes only at Forge;
- Tanning recipes only at Tanning Rack;
- rings/jewelry mappings;
- soul gem categories by rank;
- Master material-save;
- no Blacksmith/Tanner recipes leak.

## 19. Integration tests

1. open Forge as Blacksmith;
2. open same Forge as Artificer;
3. open Tanning Rack as Tanner;
4. open same rack as Artificer;
5. rank promotion updates recipe slice;
6. membership gain updates availability;
7. plugin reorder;
8. patch changes recipe inputs;
9. CEF disconnect mid-stage;
10. inventory failure;
11. operation replay;
12. Master gate toggled;
13. vanilla crafting bypass attempt;
14. stale recipe snapshot.

## 20. Security tests

- forged workstation;
- forged recipe;
- forged profession;
- forged rank;
- forged material counts;
- forged success;
- forged output;
- client calls final commit directly;
- sequence replay;
- session hijack;
- out-of-range station;
- modified CEF.

## 21. Metrics

- opens by workstation/profession;
- recipes visible;
- recipe rejects;
- stage success/failure;
- average crafting time;
- materials spent/preserved;
- recovery count;
- vanilla bypass rejects;
- catalog unresolved count.

## 22. Acceptance

Produção só quando:

1. ProfessionSystem continua owner de carreira;
2. workstations têm authority server-side;
3. profissão selecionada define workstation authorization;
4. recipe slice é filtrado no servidor;
5. Artífice compartilha bancadas sem herdar outras receitas;
6. Housecarl/RecordCatalog correspondem à release;
7. no plugin position hardcoded;
8. perks vanilla não liberam crafting;
9. CEF não cria items;
10. InventoryTransactionPort é idempotente;
11. XP/Vigor usam adapter;
12. Ferreiro/Curtidor obedecem planos consolidados;
13. vanilla bypass é bloqueado;
14. golden/integration/security tests passam;
15. rollout/rollback existe por profissão;
16. conversões e budgets de set são data-driven;
17. receitas podem ser rebalanceadas sem recompilar o domínio.
