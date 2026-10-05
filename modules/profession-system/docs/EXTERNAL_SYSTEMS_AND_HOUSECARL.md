# Sistemas externos, Housecarl e catálogos dinâmicos

Status: contrato arquitetural do ecossistema de profissões.

## 1. Regra central

O `profession-system` governa a carreira. As profissões executam suas mecânicas em **sistemas externos**.

Nenhum desses sistemas pode depender de posições fixas de plugins na load order.

Housecarl deve ser usado para descobrir e auditar:

- plugins carregados;
- masters;
- winning records;
- Form local IDs;
- EditorIDs;
- keywords;
- materiais;
- categorias;
- COBJ/recipes;
- ingredientes;
- estações;
- condições;
- requisitos de facção/guilda;
- records alterados por patches.

A informação adquirida é normalizada para catálogos versionados consumidos pelo GameplayCore.

## 2. Housecarl não é dependency de hot path

A integração correta é:

```text
load order real
     |
     v
Housecarl scan / audit
     |
     v
normalized catalog artifact
     |
     v
RecordCatalog / profession-specific definitions
     |
     +---------------------------+
     |             |             |
     v             v             v
Crafting       Gathering     Enchantment
System         System        System
     \             |             /
      \            |            /
       +------ ProfessionSystem
                 governor
```

Housecarl pode ser usado:

- na preparação da release;
- em auditorias;
- na geração/atualização de catálogos;
- em bootstrap controlado quando a arquitetura permitir.

Housecarl **não** deve ser consultado a cada mineração, craft, hit ou clique de UI.

O runtime usa definitions imutáveis correspondentes à release.

## 3. Identidade de Forms

### 3.1. Proibido

Não persistir ou usar como contrato:

```text
0x1A123456
0xFE012ABC
"plugin está no índice 42"
"ESL está no slot 0x123"
```

Esses valores dependem da ordem de carregamento e podem mudar entre releases.

### 3.2. Obrigatório

Persistência e contracts devem usar `StableFormKey`.

Modelo conceitual:

```ts
interface StableFormKey {
  pluginName: string;
  localFormId: number;
}
```

Pode existir metadata complementar:

```ts
interface CatalogFormRef {
  key: StableFormKey;
  editorId?: string;
  recordType: string;
  winningPlugin: string;
  keywords: StableFormKey[];
  sourceHash?: string;
}
```

Runtime FormID é uma resolução temporária e não deve ser usado como identidade durável.

## 4. Patches e winning records

A profissão deve enxergar o estado efetivo da release, não o record original isolado.

Exemplo:

```text
ArmorMod.esp
   |
BalancePatch.esp
   |
AetheriusPatch.esp
   |
   v
winning ARMO record
```

O catálogo profissional deve usar o winning record resultante.

Isso vale para:

- damage;
- armor rating;
- keywords;
- value;
- weight;
- ingredient list;
- crafting conditions;
- tempering recipe;
- station;
- enchantability;
- outras propriedades pertinentes ao sistema externo.

## 5. Catálogos por domínio

### 5.1. ProfessionSystem

Mantém definitions de carreira:

- profissão;
- categoria;
- ranks;
- gates;
- thresholds;
- bônus profissionais;
- IDs lógicos de activities;
- apresentação/UI.

Não deve armazenar cópia completa da load order.

### 5.2. CraftingSystem

Mantém catálogo de:

- outputs;
- receitas;
- ingredientes;
- estações;
- categorias;
- rank profissional exigido;
- membership/guild restrictions;
- flags globais;
- relação com kits/refino quando aplicável.

### 5.3. GatheringSystem

Mantém catálogo de:

- veins;
- flora;
- fazendas;
- espécies processáveis;
- ferramentas;
- yield pools;
- cooldown/stock policy;
- rank exigido.

### 5.4. RefinementSystem

Mantém definitions de:

- categorias de equipamento refináveis;
- base values;
- material/categoria;
- elegibilidade;
- custos por tier;
- multiplicadores;
- regras de sessão.

### 5.5. EnchantmentSystem

Mantém catálogo de:

- itens elegíveis;
- enchantments;
- soul gems/recursos;
- regras ainda a definir;
- restrições por rank/material.

## 6. Montagem dinâmica de receitas

Uma receita profissional não deve existir somente porque um desenvolvedor copiou um FormID para JSON.

O pipeline recomendado:

```text
Housecarl
  |
  +-- records
  +-- COBJ
  +-- keywords
  +-- conditions
  +-- plugins/masters
  +-- winning overrides
  |
  v
RawReleaseCatalog
  |
  v
Profession classification rules
  |
  +-- category
  +-- material
  +-- equipment type
  +-- source plugin
  +-- membership restriction
  +-- explicit allow/deny override
  |
  v
ProfessionCraftMapping
  |
  v
Validated recipe catalog
```

Modelo conceitual:

```ts
interface ProfessionCraftMapping {
  recipeKey: StableFormKey;
  outputKey: StableFormKey;

  profession:
    | "blacksmith"
    | "cook"
    | "tanner"
    | "tailor"
    | "brewer"
    | "artificer"
    | "alchemist"
    | "enchanter";

  requiredRank:
    | "novice"
    | "apprentice"
    | "adept"
    | "expert"
    | "master";

  globallyEnabled: boolean;

  category: string;
  materialTag?: string;

  factionOrMembershipRequirements?: string[];
  specialConditions?: string[];
}
```

A interface acima é conceitual. O schema final deve usar contracts compartilhados do Core.

## 7. Classificação automática + overrides explícitos

Nem todo conteúdo poderá ser classificado com segurança apenas por keywords.

Por isso o catálogo deve combinar:

1. classificação automática;
2. regras de inclusão;
3. regras de exclusão;
4. overrides explícitos auditáveis.

Exemplo:

```text
ARMO has ArmorHeavy + material Iron
 -> candidate: blacksmith/novice

BUT:
source is a guild-specific set
 -> add membership requirement

BUT:
explicit deny rule
 -> unavailable
```

Overrides devem usar `StableFormKey`, EditorID ou outra identidade estável, nunca mod index.

## 8. Regra de fallback

Se um item/recipe não puder ser resolvido de maneira segura:

```text
resolved=false
reason="missing-winning-record"
```

ou

```text
resolved=false
reason="ambiguous-profession-classification"
```

Não fazer:

- assumir plugin index antigo;
- usar FormID de outra release;
- inventar recipe;
- liberar item sem categoria;
- cair silenciosamente em vanilla.

## 9. Assinatura de compatibilidade

O conjunto profissional deve possuir assinatura baseada em dependências relevantes.

Exemplo conceitual:

```text
ProfessionFeatureCompatibilitySignature =
  hash(
    profession definitions
    + relevant RecordCatalog slice
    + recipe mappings
    + gathering mappings
    + host capabilities
  )
```

Uma alteração em mod/patch que mude um recipe relevante precisa invalidar ou reauditar somente as features afetadas, não necessariamente o servidor inteiro.

## 10. Integração com ProfessionSystem

Módulos externos devem consumir um port semelhante a:

```ts
interface ProfessionGovernorPort {
  authorizeActivity(input: ProfessionActivityRequest):
    Promise<ProfessionAuthorization>;

  settleCompletedActivity(input: ProfessionActivityCompleted):
    Promise<ProfessionSettlement>;

  getProfessionState(actorKey: string):
    Promise<ProfessionStateSnapshot>;
}
```

Eles não recebem acesso direto às tabelas do governador.

## 11. GatheringSystem

Fluxo:

```text
player interacts
   |
GatheringSystem
   |
   +-- resolve target via catalog
   +-- validate tool
   +-- validate distance/state
   +-- ask ProfessionSystem authorization
   +-- execute authoritative gather
   +-- commit yield
   |
   v
ProfessionSystem settles XP/Vigor
```

O `gathering-system` conhece a mecânica do recurso. O governador conhece carreira/progressão.

## 12. CraftingSystem

Fluxo:

```text
recipe selected
   |
CraftingSystem
   |
   +-- resolve recipe catalog
   +-- required profession/rank
   +-- ProfessionSystem authorization
   +-- inventory prepare
   +-- crafting session/minigame
   +-- inventory commit
   |
   v
ProfessionSystem settles XP/Vigor
```

### 12.1. Crafting tolerante

A fabricação-base deve seguir a direção já estabelecida no planejamento mais recente:

- progressão profissional libera conteúdo;
- material/rank não torna automaticamente o minigame-base mais severo;
- refino concentra dificuldade mecânica e risco.

Essa política evita transformar aquisição de rank em penalidade de usabilidade.

## 13. RefinementSystem

O refino é externo e compartilhado.

O `profession-system` pode responder:

- profissão;
- rank;
- autorização;
- Vigor/XP policy.

O `refinement-system` decide:

- se aquela item instance é refinável;
- tier atual;
- target tier;
- materiais;
- desafios;
- resultado;
- regressão;
- persistência do tier.

### 13.1. Sem perks vanilla

Para Ferreiro/Curtidor:

- Smithing perks não liberam refino;
- Smithing skill não substitui rank profissional;
- tempering vanilla não deve virar segunda authority.

## 14. EnchantmentSystem

O Encantador utiliza módulo próprio porque encantamento possui:

- aplicação de effects;
- soul resources;
- equipment eligibility;
- integração futura com records de enchantment;
- possível relação com perks vanilla ainda não definida.

O ProfessionSystem não deve antecipar essa decisão.

## 15. Alchemy

Alquimia também deve permanecer externa.

Até a arquitetura definitiva:

- governador mantém carreira/rank;
- catálogo pode descobrir ingredients/effects;
- sistema de alquimia decide recipes/combinations/resultados;
- perks vanilla permanecem em decisão.

## 16. Aetherius UI Core

O `profession-system` é o backend funcional da aba de Profissões.

Aetherius UI Core continua owner de:

- shell;
- view;
- navegação;
- cursor/foco;
- transporte;
- sessão autenticada.

O módulo registra apenas commands/read models pelo transporte oficial.

### 16.1. UI nunca recebe FormID instável como contrato

Preferir:

```json
{
  "definitionId": "blacksmith:steel:sword",
  "displayName": "Steel Sword",
  "iconId": "weapon-sword",
  "available": true
}
```

Quando identidade de record for necessária no servidor, usar StableFormKey no contract server-side apropriado.

## 17. Perks vanilla — regra formal

### Não utilizados como authority profissional

- Ferreiro;
- Curtidor;
- Cozinheiro;
- Alfaiate;
- Cervejeiro;
- Artífice;
- Minerador;
- Herbalista;
- Fazendeiro;
- Caçador.

Isso inclui perks relacionadas a:

- crafting;
- smithing;
- tempering;
- aprimoramento;
- acesso a material.

### Em decisão

- Alquimista;
- Encantador.

Até decisão formal, nenhum adapter deve inferir comportamento baseado em perks dessas duas árvores.

## 18. Auditoria de release

Antes de ativar uma release profissional:

1. scan Housecarl da load order real;
2. verificar masters e patches;
3. gerar/atualizar RecordCatalog;
4. classificar recipes/resources;
5. aplicar overrides;
6. gerar relatório de entradas não resolvidas;
7. validar FeatureCompatibilitySignature;
8. executar golden tests do catálogo;
9. somente então habilitar a feature.

## 19. Golden tests recomendados

Exemplos:

- Iron Sword resolve para Ferreiro Novato;
- Steel item resolve para Ferreiro Adepto;
- guild Heavy Armor exige membership;
- guild Light Armor exige membership;
- recipe de mod continua resolvendo depois de mudança de plugin index;
- ESL continua resolvendo por StableFormKey;
- patch altera ingredients e winning recipe é respeitada;
- item excluído não reaparece por fallback;
- plugin ausente marca recipe indisponível;
- duas Forms com mesmo EditorID não geram seleção silenciosa;
- runtime FormID diferente entre releases não muda identidade persistida.

## 20. Resultado esperado

A arquitetura deve permitir trocar, adicionar, remover ou reordenar plugins sem reescrever código de profissões.

Uma nova release deve exigir:

- scan/auditoria;
- classificação/mapping;
- validação;
- assinatura de compatibilidade;

e não uma caça manual a índices de load order espalhados pelo código.

Esse princípio é obrigatório para todas as profissões e para todos os sistemas externos que as executam.
