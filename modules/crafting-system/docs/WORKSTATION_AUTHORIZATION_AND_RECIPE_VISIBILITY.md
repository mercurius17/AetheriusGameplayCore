# Workstations, autorização profissional e visibilidade de receitas

## 1. Regra central

Ao selecionar uma profissão artesanal, o personagem recebe autorização para usar as workstations declaradas no perfil daquela profissão.

Essa autorização não é derivada de perk vanilla.

## 2. Dois gates distintos

### Gate A — pode usar a workstation?

Exemplo:

~~~text
selectedProfession = artificer
station = forge
policy says artificer -> forge
=> workstation authorized
~~~

### Gate B — quais receitas pode ver/usar?

Depois de abrir:

~~~text
catalog
 -> filter selectedProfession=artificer
 -> filter activeStation=forge
 -> filter rank/gates/membership
 -> UI
~~~

Portanto:

~~~text
usar Forge != receber receitas de Blacksmith
usar Tanning Rack != receber receitas de Tanner
~~~

## 3. Artífice

Decisão explícita:

O Artífice pode utilizar múltiplas workstations, incluindo, conforme o catálogo/configuração:

- Forja;
- Curtume / Tanning Rack;
- outras bancadas pertinentes aos itens classificados como Artífice.

Ao abrir Forja como Artífice:

- aparecem apenas receitas de Artífice associadas à Forja.

Ao abrir Curtume como Artífice:

- aparecem apenas receitas de Artífice associadas ao Curtume.

Itens de Ferreiro/Curtidor ficam ausentes da interface.

## 4. Perfis de workstation

O catálogo deve definir workstations semanticamente.

Exemplo conceitual:

~~~ts
type WorkstationTypeId =
  | "forge"
  | "tanning-rack"
  | "cooking"
  | "artisan-bench"
  | "other";

interface WorkstationDefinition {
  workstationTypeId: WorkstationTypeId;
  benchKeywordKeys: StableFormKey[];
  presentationId: string;
  enabled: boolean;
}
~~~

Não usar Runtime FormID persistente.

## 5. Mapeamento inicial por profissão

O mapping final é data-driven e auditado.

| Profissão | Workstations |
|---|---|
| Ferreiro | Forja e bancadas diretamente necessárias ao workflow de ferraria |
| Curtidor | Curtume e bancadas diretamente necessárias ao workflow de couro |
| Cozinheiro | estação de cozinha aplicável e workstations de fermentação/bebidas definidas pelas recipes; todo o antigo escopo do Cervejeiro usa a profissão Cozinheiro |
| Alfaiate | workstation definida para o workflow de alfaiataria; não presumir vanilla se não houver correspondência |
| Artífice | múltiplas, incluindo Forja e Curtume |
| Encantador | routed ao enchantment-system |
| Alquimista | routed ao sistema externo de alquimia |

A tabela não autoriza inventar uma workstation onde o design específico ainda não definiu uma.

## 6. Ativação

O cliente envia intenção de ativação.

O servidor precisa resolver:

- referência concreta;
- base form;
- bench keyword;
- station type;
- distância;
- profissão selecionada;
- capability da profissão.

## 7. Supressão do menu vanilla

Se a workstation for gerenciada pelo Aetherius e o personagem estiver autorizado, deve abrir CEF profissional em vez do fluxo vanilla que permitiria recipe leakage.

Se não estiver autorizado, a policy deve impedir qualquer crafting econômico que contorne os gates.

## 8. Recipe visibility pipeline

~~~text
all validated recipes
        |
        v
profession == selectedProfession
        |
        v
station compatibility
        |
        v
rank <= player rank
        |
        v
global feature/tier gate
        |
        v
membership/conditions
        |
        v
availability policy
        |
        v
CEF recipe list
~~~

## 9. Rank

Receitas acima do rank não podem ser executadas.

A UI pode ocultar ou exibir bloqueada conforme design; o servidor sempre revalida.

## 10. Guild membership

Receita de guilda:

~~~text
profession correct
+ rank correct
+ station correct
+ membership correct
= usable
~~~

Membership vem do owner apropriado.

## 11. Material availability

Falta de material não precisa ocultar receita.

É permitido mostrar recipe visível com materials insufficient e canCraft=false.

Isso é diferente de recipe não pertencente à profissão, que deve permanecer fora do slice.

## 12. Workstation session binding

Cada sessão se vincula a:

~~~text
actor
session epoch
world workstation ref
workstation type
profession
catalog revision
~~~

Trocar de profissão/epoch ou perder distância invalida sessão.

## 13. Read model

~~~ts
interface WorkstationCraftingReadModel {
  revision: number;
  profession: ArtisanProfession;

  station: {
    typeId: string;
    displayName: string;
    referenceId: string;
  };

  recipes: CraftingRecipeView[];

  capability: {
    canUse: boolean;
    reason?: string;
  };
}
~~~

A UI não recebe receitas de outras profissões para escondê-las no frontend. A filtragem ocorre no servidor.

## 14. Segurança contra recipe leakage

O servidor precisa rejeitar:

- recipeId não presente no snapshot da sessão;
- recipe de outra profissão;
- recipe de outra workstation;
- recipe acima do rank;
- recipe globalmente bloqueada.

## 15. Mudanças de catálogo

Se catalog revision mudar enquanto sessão está aberta:

- invalidar/recarregar snapshot;
- não permitir commit com recipe definition stale.

## 16. Aceite

O sistema está correto quando duas profissões podem compartilhar a mesma Forge e cada uma recebe somente seu próprio catálogo, sem hardcode de plugin e sem bypass por menu vanilla.


## 17. Invariante de isolamento por profissão

**Receitas de outra profissão nunca entram no read model enviado ao cliente.**

Esse isolamento ocorre no servidor antes da projeção CEF.

Compartilhar uma workstation significa compartilhar o ponto físico de interação, não compartilhar catálogo, autorização, recipes ou progressão.

Exemplo obrigatório:

~~~text
Forge:
  Blacksmith session -> somente Blacksmith recipes
  Artificer session  -> somente Artificer recipes

Tanning Rack:
  Tanner session     -> somente Tanner recipes
  Artificer session  -> somente Artificer recipes
~~~

Mesmo um cliente modificado que tente enviar um recipeDefinitionId de outro slice deve ser rejeitado pelo servidor.
