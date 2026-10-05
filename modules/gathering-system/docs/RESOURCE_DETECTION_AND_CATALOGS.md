# Detecção de recursos, Housecarl e catálogos

## 1. Objetivo

O `gathering-system` precisa reconhecer recursos do mundo sem depender de:

- posição de plugin;
- Runtime FormID persistido;
- nomes visuais frágeis;
- decisões enviadas pelo cliente;
- listas manuais espalhadas pelo código.

A release deve produzir catálogos determinísticos e auditáveis.

## 2. Pipeline

```text
Load order real
   |
   v
Housecarl scan/audit
   |
   +-- plugins/masters
   +-- winning records
   +-- world references
   +-- locations/cells/worldspaces
   +-- FLORA/harvest data
   +-- mining-related references
   +-- NPC/RACE/species facts
   +-- tools/items
   |
   v
Raw Gathering Catalog
   |
   v
Classification + explicit mappings
   |
   v
Validated Gathering Definitions
   |
   v
RecordCatalog slice
   |
   v
GatheringSystem runtime
```

## 3. Stable identity

Persistência usa `StableFormKey`.

```ts
interface StableFormKey {
  pluginName: string;
  localFormId: number;
}
```

Não persistir:

```text
0xXX123456
0xFEYYYZZZ
modIndex
lightIndex
loadOrderPosition
```

## 4. Mine Catalog

### 4.1. Objetivo

Descobrir todas as referências relevantes de mineração e agrupá-las em minas lógicas.

```ts
interface MineSiteDefinition {
  mineSiteId: string;
  displayName: string;

  locationKeys: StableFormKey[];
  entryIds: string[];

  capacity: 500;
  cooldownSeconds: 259200;
  maxConcurrentWorkers: 2;

  enabled: boolean;
  presentationId: string;
}

interface MineEntryDefinition {
  entryId: string;
  mineSiteId: string;

  referenceKey: StableFormKey;
  baseFormKey: StableFormKey;

  oreTypeId: string;
  requiredRank: ProfessionRank;
}
```

### 4.2. Agrupamento

Não assumir que "uma vein = uma mina".

Uma mina pode conter múltiplas references.

O mapping deve considerar:

- location/cell;
- proximidade;
- records de mineração;
- contexto de worldspace;
- overrides explícitos.

### 4.3. Tipo do minério

O tipo é resolvido pelo catálogo, não pelo cliente.

Exemplo:

```text
runtime target ref
 -> resolve StableFormKey
 -> MineEntryDefinition
 -> oreTypeId
 -> resource profile
```

### 4.4. Ambiguidade

Se Housecarl não conseguir classificar de forma segura:

```json
{
  "enabled": false,
  "reason": "ambiguous-mining-resource"
}
```

A release não pode adivinhar o minério.

## 5. Herbalism Catalog

### 5.1. Fontes

O catálogo deve localizar plantas/FLORAs que possuam comportamento de harvest relevante na release.

Para cada entrada:

```ts
interface HerbalEntryDefinition {
  entryId: string;
  herbalSiteId: string;

  referenceKey: StableFormKey;
  basePlantKey: StableFormKey;
  baseIngredientKey: StableFormKey;

  regionTags: string[];
  enabled: boolean;
}
```

### 5.2. Site

```ts
interface HerbalSiteDefinition {
  herbalSiteId: string;
  entryIds: string[];

  capacity: number;
  cooldownSeconds: 259200;
  maxConcurrentWorkers: number;

  interactionProfileId: string;
}
```

A capacidade deve ser data-driven.

### 5.3. Vanilla harvest

O inventário/reward do vanilla harvest não pode coexistir como segunda fonte.

A integração deve escolher uma estratégia suportada pelo host, por exemplo:

- interceptar o activation result;
- desabilitar a concessão vanilla para entries gerenciadas;
- substituir a ação por command do GatheringSystem.

O resultado obrigatório é: **um único owner econômico do harvest**.

## 6. Hunter Species Catalog

### 6.1. Classificação

O sistema deve reconhecer todas as espécies classificadas como animais processáveis.

Definitions podem consumir facts de:

- NPC;
- RACE;
- keywords;
- EnemySystem classification;
- explicit allow/deny mappings.

```ts
interface HuntSpeciesDefinition {
  speciesId: string;
  raceKeys: StableFormKey[];
  npcKeys?: StableFormKey[];

  meatItem: StableFormKey;
  hideItem?: StableFormKey;
  alchemyIngredient?: StableFormKey;

  enabled: boolean;
}
```

### 6.2. "Todos os animais"

"Todos" significa todos os animais reconhecidos e mapeados pela release.

Criaturas/monstros não devem ser incluídos automaticamente só porque usam um skeleton semelhante.

Casos novos de mods precisam entrar por scan + classification/override.

## 7. Farm Catalog

### 7.1. Por que mapping explícito é necessário

"Fazenda" não é um record type único.

O catálogo deve combinar:

- locations;
- cells;
- world references;
- markers;
- buildings;
- region/hold;
- explicit staff mapping.

```ts
interface FarmSiteDefinition {
  farmSiteId: string;
  displayName: string;

  regionId: string;
  locationKeys: StableFormKey[];
  interactionEntries: StableFormKey[];

  fixedPoolId: string;
  rotationGroupId?: string;

  stockProfileId?: string;
  enabled: boolean;
}
```

### 7.2. Resource pool

```ts
interface FarmResourcePool {
  poolId: string;
  entries: Array<{
    itemKey: StableFormKey;
    weight: number;
    minRank?: ProfessionRank;
    tags?: string[];
  }>;
}
```

Os pesos são server-side.

### 7.3. Rotação

```ts
interface FarmRotationDefinition {
  rotationGroupId: string;
  cycles: Array<{
    cycleId: string;
    poolIds: string[];
    durationSeconds: number;
    enabled: boolean;
  }>;
}
```

A staff deve conseguir alterar a ativação sem recompilar.

## 8. Tool Catalog

Ferramentas:

```text
mining -> Pickaxe
herbalism -> Satchel/Bag
farming -> Hoe
hunting -> none
```

O catálogo pode aceitar múltiplas Forms equivalentes quando mods adicionarem variantes válidas.

Exemplo:

```ts
interface ToolRequirement {
  requirementId: string;
  acceptedItemKeys: StableFormKey[];
  quantity: number;
}
```

## 9. Profession rank mappings

O GatheringSystem não determina rank a partir de minério/planta.

O resource definition declara `requiredRank`; o ProfessionSystem decide o effective rank do ator.

```text
resource.requiredRank <= authorization.effectiveRank
```

## 10. Catalog validation

Antes de uma release:

- nenhuma entry habilitada pode ter Form não resolvida;
- todo site precisa de ID estável;
- toda mine entry precisa de ore type;
- toda plant entry precisa de base ingredient;
- toda espécie precisa de yield válido para Novato;
- toda fazenda precisa de region + interaction point;
- tool references precisam existir;
- pools não podem conter itens ausentes;
- Mestre bloqueado não pode aparecer como executável;
- winning records precisam corresponder à release.

## 11. Overrides

Exemplo conceitual:

```json
{
  "gatheringOverrides": {
    "deny": [
      { "key": "SomePlugin.esp|0x1234", "reason": "quest-only" }
    ],
    "mineAssignments": [
      {
        "reference": "MiningMod.esp|0x0201",
        "mineSiteId": "mine:example",
        "oreTypeId": "silver"
      }
    ]
  }
}
```

A notação acima representa plugin + local ID, não Runtime FormID.

## 12. Feature compatibility

Cada subfeature usa o slice relevante.

Exemplo:

```text
MiningSignature =
 hash(
   mine definitions
   + ore profiles
   + tool definitions
   + relevant winning records
   + profession gates
 )
```

Adicionar um mod de roupas não deve invalidar Mining.

## 13. Relatório de auditoria

A geração da release deve produzir:

- sites encontrados;
- entries encontradas;
- entries não classificadas;
- duplicates;
- unresolved Forms;
- disabled entries;
- overrides aplicados;
- signature final.

O relatório deve ser suficiente para revisar a load order antes de ativar a feature.
