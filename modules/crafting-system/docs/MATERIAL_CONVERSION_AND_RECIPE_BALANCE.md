# Conversão de materiais e balanceamento de receitas

Status: baseline econômico configurável do CraftingSystem.

## 1. Princípio

As quantidades abaixo definem o **balanceamento inicial desejado** para a economia profissional.

Elas não devem ser implementadas como constantes rígidas espalhadas pelo código.

Toda taxa de conversão e todo custo de recipe/set deve existir em definitions/configuração versionada para permitir rebalanceamento posterior.

## 2. Minério -> ingot

Taxa padrão:

~~~text
3 minérios -> 1 ingot
~~~

Exemplo:

~~~text
3 Iron Ore -> 1 Iron Ingot
~~~

A mesma proporção é o baseline para outras cadeias equivalentes ore -> matching ingot, salvo override explícito de material.

O processamento é separado da coleta: minerar entrega minério; uma operação de processamento/smelting converte minério em ingot.

## 3. Sets metálicos

Um set completo de determinado material metálico deve consumir **30 ingots no total**.

A composição econômica do set completo é:

- armadura;
- peito;
- bota;
- luva;
- escudo.

O valor 30 representa o orçamento agregado das recipes do set.

A distribuição por peça é configurável.

Exemplo conceitual:

~~~json
{
  "setCostProfileId": "steel-full-set",
  "primaryMaterial": "steel-ingot",
  "total": 30,
  "pieces": {
    "armor": 0,
    "chest": 0,
    "boots": 0,
    "gloves": 0,
    "shield": 0
  }
}
~~~

Os zeros acima significam "preencher por configuração"; o documento não fixa a divisão individual.

Como equivalência econômica:

~~~text
30 ingots x 3 ore = 90 ore
~~~

se todo o material for produzido pela conversão padrão.

## 4. Peles -> couro

Taxa padrão:

~~~text
3 peles de animal -> 1 couro
~~~

A produção de couro do Curtidor continua sem minigame, mas a operação é server-authoritative e transacional.

## 5. Set completo de Couro

Um set completo de Couro deve consumir **30 couros no total**.

A distribuição pelas peças é configurável.

Equivalência econômica, caso todo couro venha de peles:

~~~text
30 leather x 3 hides = 90 animal hides
~~~

## 6. Sets de pele pura

Sets classificados especificamente como **pele pura** utilizam:

~~~text
15 couros + 5 peles de animal
~~~

Isso representa:

- metade do orçamento normal de couro;
- mais 5 peles brutas.

Se os 15 couros também forem produzidos exclusivamente por peles:

~~~text
15 leather x 3 hides = 45 hides
45 hides + 5 raw hides = 50 hides equivalentes
~~~

Essa equivalência serve para análise econômica; a recipe continua separando couro processado de pele bruta.

## 7. Receita individual versus orçamento de set

O sistema não deve inferir que todas as peças custam a mesma quantidade.

A regra correta é:

~~~text
sum(piece recipe primary material costs) = set budget
~~~

Para set metálico:

~~~text
sum(ingots) = 30
~~~

Para set de Couro:

~~~text
sum(leather) = 30
~~~

Para set de pele pura:

~~~text
sum(leather) = 15
sum(raw hides) = 5
~~~

Isso permite, por exemplo, que o peito custe mais do que luvas/botas sem alterar o orçamento total.

## 8. Housecarl e COBJ

Housecarl continua responsável por descobrir:

- COBJ;
- ingredientes originais;
- output;
- workstation;
- conditions;
- winning records.

Porém o Aetherius possui uma camada própria de balanceamento.

Logo:

~~~text
Housecarl/COBJ
    |
    v
structural recipe
    |
    v
Aetherius recipe balance profile
    |
    v
effective professional recipe
~~~

O COBJ não obriga o Aetherius a usar as quantidades vanilla.

## 9. Configuração sugerida

Exemplo conceitual:

~~~json
{
  "materialConversions": {
    "iron": {
      "inputCategory": "iron-ore",
      "inputCount": 3,
      "outputCategory": "iron-ingot",
      "outputCount": 1
    },
    "leather": {
      "inputCategory": "animal-hide",
      "inputCount": 3,
      "outputCategory": "leather",
      "outputCount": 1
    }
  },
  "setBudgets": {
    "metal-default": {
      "primaryMaterialCount": 30
    },
    "leather-default": {
      "primaryMaterialCount": 30
    },
    "pure-hide-default": {
      "leatherCount": 15,
      "rawHideCount": 5
    }
  }
}
~~~

Os nomes finais de schema podem mudar.

## 10. Configurabilidade obrigatória

Toda recipe profissional deve permitir ajuste posterior de:

- inputs;
- quantities;
- output count;
- material conversion ratio;
- set budget;
- per-piece cost;
- secondary materials;
- profession/rank;
- workstation;
- membership;
- enabled/disabled state.

Mudanças de balanceamento não devem exigir recompilar o CraftingSystem.

## 11. Validação

No bootstrap/auditoria, o sistema deve detectar:

- set cujo custo agregado não corresponde ao budget configurado;
- conversion profile sem input/output resolvido;
- recipe usando custo vanilla quando um override deveria existir;
- piece sem associação ao set;
- material profile ambíguo;
- valores negativos/zero inválidos.

Entradas inválidas não devem ser silenciosamente ativadas.

## 12. Testes obrigatórios

- 3 Iron Ore -> 1 Iron Ingot;
- 6 Iron Ore -> 2 Iron Ingots;
- 30 ingots = budget de set metálico completo;
- 3 hides -> 1 leather;
- 30 leather = budget de set de Couro;
- 15 leather + 5 hides = budget de set de pele pura;
- alterar a distribuição por peça preserva o budget;
- alterar o budget em config muda recipes sem alteração de código;
- retry não duplica conversão;
- Housecarl/plugin reorder não altera os valores configurados.
