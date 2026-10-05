# CEF e sessões de crafting

## 1. Aetherius UI Core

Crafting usa a infraestrutura oficial de UI.

Não cria:

- browser próprio paralelo;
- transporte próprio;
- segunda sessão de autenticação.

## 2. Abertura por workstation

A CEF abre após:

1. resolver workstation;
2. validar distância;
3. validar profissão;
4. validar workstation policy;
5. montar recipe slice.

## 3. Recipe list

A lista recebida pelo cliente já está filtrada.

~~~ts
interface CraftRecipeView {
  definitionId: string;
  displayName: string;
  iconId?: string;

  requiredRank: ProfessionRank;
  category: string;

  requirements: RequirementView[];
  materials: MaterialView[];

  available: boolean;
  unavailableReason?: string;
}
~~~

Não enviar recipes de outra profissão e confiar em CSS para escondê-las.

## 4. Session

~~~ts
interface CraftSession {
  sessionId: string;
  actorKey: ActorKey;
  profession: ArtisanProfession;
  workstationRef: string;
  workstationTypeId: string;

  catalogRevision: number;
  professionRevision: number;

  selectedRecipeId?: string;
  workflowProfileId?: string;
  stage: string;

  createdAt: Instant;
  expiresAt: Instant;
  sequenceNumber: number;
}
~~~

## 5. CEF commands

Conceituais:

~~~text
crafting.workstation.open
crafting.session.snapshot
crafting.recipe.select
crafting.stage.input
crafting.session.cancel
~~~

Workflows específicos podem registrar commands próprios.

## 6. Client input

Permitido:

- selecionar recipe do snapshot;
- clicks/releases/path/keys necessários ao minigame;
- cancelar.

Não permitido como authority:

- output item;
- quantity;
- profession;
- rank;
- materials consumed;
- success=true;
- XP;
- benefit roll.

## 7. UI layout

A estrutura pode reutilizar a filosofia de três áreas já presente nos planos:

~~~text
01 PROJETO
02 PEÇA
03 PROCESSO
~~~

Cada profissão pode personalizar rótulos/etapas sem criar sistema de UI separado.

## 8. Workstation-specific list

Artífice na Forge:

~~~text
Forge UI
profession=artificer
recipes=[lantern/hoe/... classified for Forge]
~~~

Ferreiro na mesma Forge:

~~~text
Forge UI
profession=blacksmith
recipes=[iron/steel/... blacksmith recipes]
~~~

O cliente não recebe a união.

## 9. Stage read model

~~~ts
interface CraftStageView {
  stageId: string;
  state: "ready" | "active" | "failed" | "complete";
  challenge?: PresentationChallenge;
  retryPolicy?: string;
}
~~~

Targets secretos/RNG não precisam ser expostos integralmente.

## 10. Session invalidation

Invalidar quando:

- distância perdida;
- workstation desaparece;
- actor/session epoch muda;
- profession revision incompatível;
- catalog revision muda;
- timeout;
- critical capability cai.

## 11. Reconnect

CEF deve pedir snapshot.

Não reconstruir sucesso a partir de estado local.

## 12. Vanilla UI

A workstation profissional deve ter hijack/roteamento seguro para o CEF.

O menu vanilla não pode ser alternativa para burlar profession filters.

## 13. Logs de UI

Registrar eventos econômicos/estágios, não mouse-move frame a frame.

## 14. Responsividade

CEF pode interpolar barras e animações localmente para fluidez, mas resolução final permanece server-side.


## 15. Direção visual obrigatória

A implementação visual de Ferreiro e Curtidor deve seguir `CRAFTING_UI_VISUAL_GUIDELINES.md` e as referências anexadas em `docs/assets/`.

Regras obrigatórias:

- não existem Guilda dos Ferreiros ou Guilda dos Curtidores;
- nenhum indicativo de guilda dessas profissões deve aparecer na UI;
- os elementos gráficos específicos devem ser desenhados à mão;
- cores, estados, destaques e tokens visuais devem vir do AetheriusUI_Core;
- as imagens anexadas são referência de layout/UX, não paleta ou asset final.
