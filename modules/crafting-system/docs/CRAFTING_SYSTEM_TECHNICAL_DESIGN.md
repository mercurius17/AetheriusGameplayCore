# Crafting System — Arquitetura técnica

Data: 05/10/2026
Status: especificação normativa do módulo, subordinada à arquitetura canônica e ao ProfessionSystem.

## 1. Objetivo

O crafting-system transforma uma interação autorizada com uma workstation em uma sessão CEF server-authoritative de fabricação.

Ele deve responder:

- qual workstation foi ativada;
- quais profissões podem utilizá-la;
- se a profissão selecionada do personagem autoriza a workstation;
- quais receitas daquela profissão são compatíveis com a workstation;
- quais receitas estão liberadas para o rank atual;
- quais requisitos adicionais existem;
- quais materiais precisam ser reservados/consumidos;
- qual máquina de estados/minigame corresponde ao ofício;
- quando o item final pode ser criado;
- como liquidar XP/Vigor e bônus de profissão sem duplicar regras.

## 2. Ownership

O crafting-system é o único writer de:

~~~text
crafting recipe catalog projection
workstation-profession mappings
crafting sessions
crafting stage state
crafting challenge state
crafting operation ledger
material reservations pertencentes ao workflow de crafting
crafting audit events
~~~

Não é owner de:

~~~text
selectedProfession / professionRank / professionXp / professionVigor
inventory item instances
refinementTier
enchantments
alchemy results
membership facts
class facts
~~~

## 3. Princípios

### 3.1. Server-authoritative

CEF nunca:

- cria item;
- remove material;
- define recipe final;
- informa sucesso como authority;
- concede XP;
- define rank;
- decide bônus econômico;
- altera item persistente.

### 3.2. Workstation é capability, não profissão

Uma workstation pode ser usada por várias profissões.

Exemplo:

~~~text
Forge
 +-- Blacksmith recipes
 +-- Artificer recipes
 +-- future profession-specific recipes
~~~

O personagem não recebe todos os catálogos da Forge; recebe apenas o slice de sua profissão.

### 3.3. Crafting e refinement são domínios separados

Crafting cria o item-base.

Refinement altera estado por instância e vive no refinement-system.

### 3.4. Crafting-base tolerante

A progressão profissional aparece por:

- receitas;
- materiais;
- custo;
- raridade;
- bônus;
- membership;
- conteúdo desbloqueado.

Não por tornar automaticamente o minigame-base mais severo conforme rank/material.

O refino é o lugar principal de:

- precisão;
- risco;
- regressão;
- mastery mecânica.

## 4. Dependências

| Dependência | Uso |
|---|---|
| ProfessionSystem | profissão, rank, gates, Vigor, XP, bônus |
| RecordCatalog | records/COBJ/winning records |
| Housecarl | scan/auditoria/authoring do catálogo |
| InventoryTransactionPort | materiais + criação do output |
| WorldSnapshotPort | distância/contexto |
| UiTransportPort | CEF/read models/commands |
| ClockPort | sessões/timers |
| RngPort | bônus server-side |
| membership/faction port | restrições de guilda |
| refinement-system | após criação, quando usuário entra em refino |

Pode ser necessário um WorkbenchInteractionPort público se o host não expuser referência e tipo da workstation com semântica suficiente.

## 5. Workstation interaction

Fluxo:

~~~text
player activates workstation
        |
        v
resolve authoritative workstation
        |
        v
resolve selected profession
        |
        v
is profession allowed on workstation?
        |
    no --+--> deny / vanilla suppressed as policy
        |
       yes
        |
        v
build filtered recipe view
        |
        v
open Aetherius CEF
~~~

## 6. Catálogo

O catálogo é derivado da release real.

~~~text
Housecarl
 + COBJ
 + output records
 + bench keyword
 + ingredients
 + conditions
 + keywords
 + material/category
 + winning overrides
 + explicit profession mappings
      |
      v
Validated CraftingCatalog
      |
      +--> profession slice
      +--> workstation slice
      +--> rank slice
      +--> UI read model
~~~

## 7. Recipe visibility

Uma receita aparece apenas se:

~~~text
recipe.profession == selectedProfession
AND recipe.workstation is compatible with active workstation
AND recipe.enabled
AND recipe.requiredRank <= effective selected-profession rank
AND global gate permits it
AND presentation policy permits visibility
AND catalog resolution is valid
~~~

Para requisitos como guild membership, a policy pode optar por ocultar a receita ou exibir como bloqueada com motivo.

O requisito central é: **receitas de outra profissão nunca aparecem**.

## 8. Profession authorization

O profession-system deve expor autorização para:

- abrir determinada workstation como profissão;
- iniciar recipe;
- liquidar atividade concluída.

O CraftingSystem não duplica essa regra.

## 9. Máquina genérica

~~~text
OPEN_WORKSTATION
 -> LOAD_PROFESSION_CATALOG
 -> SELECT_RECIPE
 -> AUTHORIZE_ACTIVITY
 -> VALIDATE/RESERVE MATERIALS
 -> RUN PROFESSION-SPECIFIC STAGES
 -> FINAL_REVALIDATION
 -> COMMIT OUTPUT
 -> SETTLE PROFESSION
 -> COMPLETE
~~~

## 10. Item creation

O item só existe após commit final.

Não permitir:

~~~text
CEF -> addItem
client -> craft result
vanilla local craft -> trust reconciliation
~~~

Fluxo correto:

~~~text
CEF intent
 -> server validation
 -> InventoryTransactionPort
 -> commit
 -> profession settlement
 -> read model
~~~

## 11. Vanilla menus

Para workstations gerenciadas pelo Aetherius, o fluxo vanilla que permitiria craft paralelo deve ser interceptado/substituído.

Não pode coexistir:

- CEF profissional;
- menu vanilla criando os mesmos itens sem gates.

A estratégia de host deve ser explicitamente implementada e testada.

## 12. Persisted / Derived / Runtime / Definition

### Persisted

- operation ledger;
- recovery state necessário;
- event/outbox;
- eventualmente session recovery crítica.

### Derived

- receitas visíveis;
- material profile;
- profession/workstation compatibility;
- UI recipe groups.

### Runtime

- CraftSession;
- challenge;
- stage;
- temporary reservations;
- active workstation binding.

### Definition

- COBJ normalized recipe;
- profession mapping;
- required rank;
- workstation mapping;
- material/category tags;
- membership restrictions;
- stage profile.

## 13. Interface com UI Core

Aetherius UI Core continua owner do shell/transporte.

CraftingSystem registra a superfície contextual e envia read models revisionados.

## 14. Segurança

Obrigatório:

- target/workstation resolvido server-side;
- actor autenticado;
- distância revalidada;
- recipeId recebido da UI precisa pertencer ao snapshot autorizado;
- materiais validados no servidor;
- stage inputs rate-limited;
- operationId idempotente;
- stale session rejeitada;
- replay não cria segundo item;
- profession/rank revalidados no commit.

## 15. Rollout

Por profissão/feature:

~~~text
off -> audit -> shadow -> canary -> active
~~~

É permitido ter Blacksmith/Tanner ativos e Artificer em audit.

## 16. Resultado esperado

O módulo deve tornar o catálogo e o fluxo artesanal independentes de posições de plugin, permitir múltiplas profissões por workstation sem vazamento de receitas e manter toda economia sob authority do servidor.
