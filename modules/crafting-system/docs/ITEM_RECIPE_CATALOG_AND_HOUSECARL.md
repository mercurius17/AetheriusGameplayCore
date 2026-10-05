# Catálogo de itens/receitas e Housecarl

## 1. Objetivo

Construir um catálogo profissional de itens e receitas da load order real, incluindo mods e patches, capaz de responder:

- o que é este item;
- a qual profissão pertence;
- em qual workstation aparece;
- qual rank exige;
- quais materiais consome;
- quais condições possui;
- se é conteúdo de guilda/cultura;
- se está habilitado;
- qual workflow artesanal deve usar.

## 2. Housecarl como authoring/auditoria

Housecarl deve extrair/auditar:

- plugin + masters;
- winning records;
- COBJ;
- output;
- output count;
- ingredient list;
- bench keyword;
- recipe conditions;
- output record type;
- output keywords;
- material keywords;
- armor type;
- weapon type;
- clothing/jewelry classification;
- source plugin;
- relevant faction/quest conditions;
- patches que alterem esses records.

Runtime não consulta Housecarl por craft.

## 3. Identidade

Persistir StableFormKey com pluginName + localFormId.

Proibido persistir mod index/runtime FormID.

## 4. Raw catalog

~~~ts
interface RawCraftRecord {
  recipeKey: StableFormKey;
  outputKey: StableFormKey;
  outputCount: number;
  benchKeywordKey: StableFormKey;
  inputs: Array<{ itemKey: StableFormKey; count: number }>;
  conditions: NormalizedCondition[];
  outputFacts: CatalogOutputFacts;
}
~~~

## 5. Professional classification

~~~text
COBJ + output facts
   |
   v
classification rules
   |
   +-- profession
   +-- rank
   +-- category
   +-- material
   +-- station
   +-- guild/membership
   +-- workflow
   |
   v
ProfessionCraftMapping
~~~

## 6. Modelo normalizado

~~~ts
interface CraftRecipeDefinition {
  definitionId: string;
  recipeKey: StableFormKey;
  outputKey: StableFormKey;

  profession:
    | "blacksmith"
    | "cook"
    | "tanner"
    | "tailor"
    | "brewer"
    | "artificer";

  requiredRank:
    | "novice"
    | "apprentice"
    | "adept"
    | "expert"
    | "master";

  stationTypes: string[];
  workflowProfileId: string;
  outputCount: number;
  inputs: CraftInputDefinition[];
  categoryTags: string[];
  materialProfileId?: string;
  membershipRequirements?: string[];
  normalizedConditions: NormalizedCondition[];
  globallyEnabled: boolean;
  classificationConfidence: "auto" | "override";
}
~~~

Alquimia/Encantamento usam catálogos próprios de seus sistemas externos.

## 7. Regras de classificação

Prioridade:

1. override explícito;
2. receita/COBJ + bench;
3. output keywords/type/material;
4. source/plugin rules;
5. conditions;
6. unresolved.

Nunca usar fallback genérico para Ferreiro ou Artífice.

## 8. Ferreiro

Candidates:

- armas;
- flechas;
- Heavy Armor;
- ferramentas/kits pertinentes;
- materiais definidos pela progressão.

O rank final obedece à progressão consolidada, não à cadeia vanilla automática.

~~~text
Iron -> Novice
guild Heavy Armor -> Apprentice + membership
Steel -> Adept
Steel Plate -> Expert
Nordic/Dwemer/Orcish -> Master gate
~~~

## 9. Curtidor

Candidates:

- light equipment;
- hide/leather categories;
- kits pertinentes;
- guild Light Armor;
- Elven;
- cultural Master mappings conforme design.

O plano específico do Curtidor é autoridade sobre workflow.

## 10. Cozinheiro

Classificar apenas recipes destinadas ao ofício de cozinha:

- simple/grilled;
- vegetable stews;
- meat stews;
- demais foods autorizados.

Não assumir que todo record de comida pertence ao Cozinheiro sem recipe/mapping.

## 11. Alfaiate

Candidates:

- clothing;
- cloaks;
- fur accessories;
- hoods;
- guild clothes;
- noble clothing;
- explicitly mapped mod clothing.

## 12. Cervejeiro

Candidates:

- mead;
- wine;
- alcohol;
- Skooma quando definida;
- outros recipes explicitamente aprovados.

A progressão específica por rank ainda deve ser preenchida quando definida.

## 13. Artífice

O Artífice exige classificação transversal.

Candidates podem incluir:

- hoes;
- lanterns;
- torches;
- masks/bandanas;
- satchels;
- backpacks;
- rings;
- necklaces;
- amulets;
- kitchen utensils;
- crests/insignia;
- tiaras;
- soul gems conforme progressão;
- outros objetos utilitários/decorativos aprovados.

Como essas categorias podem usar workstations diferentes, cada recipe declara stationTypes.

## 14. Workstation não define profissão sozinha

Uma recipe em Forge não é automaticamente Blacksmith.

Uma recipe em Tanning Rack não é automaticamente Tanner.

~~~text
bench = Forge
output = Lantern
profession mapping = Artificer
=> Artificer recipe at Forge
~~~

Esse princípio é essencial para o Artífice.

## 15. Conditions

Conditions vanilla/mods devem ser normalizadas.

Algumas podem ser:

- convertidas em requirement;
- avaliadas via condition engine;
- substituídas por regra profissional;
- marcadas unsupported.

Não ignorar silenciosamente conditions desconhecidas.

## 16. Membership

Mappings de guilda preservam a intenção, mas o catálogo não persiste boolean stale do personagem.

## 17. Material profiles

Material profile pode ser derivado por:

1. override;
2. output keyword;
3. known material mapping;
4. explicit source rule.

Se não puder ser determinado com segurança, a recipe fica unresolved.

## 18. Mods e patches

Usar winning record.

Se patch altera ingredients, bench, keyword ou output facts, o catálogo precisa refletir o vencedor da release.

## 19. Overrides

Overrides usam StableFormKey/EditorID, nunca posição de plugin.

## 20. Unresolved report

Toda geração deve listar:

- recipe sem profissão;
- output sem material;
- station desconhecida;
- condition unsupported;
- duplicate classification;
- missing form;
- missing master;
- disabled by gate.

Unresolved não entra silenciosamente na UI.

## 21. Assinatura

~~~text
CraftingCatalogSignature =
 hash(
   COBJ winners
   + relevant output winners
   + professional mappings
   + workstation mappings
   + overrides
 )
~~~

## 22. Golden tests

Manter fixtures para provar:

- item de mod continua na mesma profissão após reorder;
- ESL resolve;
- patch de COBJ altera inputs;
- Artífice recipe em Forge não vaza para Ferreiro;
- Blacksmith recipe não vaza para Artífice;
- guild recipe mantém membership;
- Master gate desabilita execução;
- missing plugin remove recipe com reason.

## 23. Resultado

O catálogo deve permitir atualizar a load order sem espalhar IDs e categorias manuais pelo código, mantendo revisão explícita sobre ambiguidades.
