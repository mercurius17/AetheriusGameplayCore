# CEF, sessões e animações de coleta

## 1. Princípio

A interface CEF é apresentação e entrada de intenção.

Ela não mede o tempo autoritativo, não decide reward, não decide rank e não mantém stock global.

O GatheringSystem deve integrar-se à **Aetherius UI Core** através de `UiTransportPort` e do router autenticado existente.

Não criar:

- segundo browser;
- segundo sistema de sessão;
- `mp.events.callRemote` paralelo;
- authority de gameplay no frontend.

## 2. Superfície contextual

A coleta deve usar um painel contextual CEF, independente da aba de Profissões.

O painel pode ser aberto ao interagir com:

- vein/mining entry;
- planta harvestable;
- marker de fazenda;
- carcaça.

## 3. Mining panel

Read model conceitual:

```ts
interface MiningInteractionReadModel {
  sessionRevision: number;

  mine: {
    siteId: string;
    displayName: string;
    oreType: string;
    stockRemaining: number;
    capacity: number;
    workersActive: number;
    workersMax: number;
    available: boolean;
    cooldownEndsAt?: string;
  };

  actor: {
    effectiveRank: ProfessionRank;
    hasRequiredTool: boolean;
    xpEligible: boolean;
    vigorAvailable: number;
  };

  cycle: {
    state: "idle" | "running" | "committing" | "stopped";
    startedAt?: string;
    completesAt?: string;
    sequence?: number;
  };

  actions: {
    canStart: boolean;
    canStop: boolean;
    unavailableReason?: string;
  };
}
```

O progresso visual deriva de `startedAt/completesAt`.

## 4. Herbalism panel

Reutiliza o shell contextual, alterando:

- nome da planta;
- ingrediente-base;
- site;
- stock/cooldown;
- rank;
- timer;
- bônus de profissão quando apropriado.

A UI não recebe a lista completa da random bonus pool quando isso for indesejável ao design; pode apresentar "chance de ingrediente adicional".

## 5. Farming panel

Deve mostrar:

- fazenda;
- região;
- ciclo/pool ativo de forma apropriada ao jogador;
- status;
- ferramenta;
- duração;
- progressão aplicável.

Não precisa revelar pesos RNG internos.

## 6. Hunting panel

Mais simples:

```text
Animal
Estado: morto / disponível
Ação: Processar carcaça
Rank efetivo
Categorias possíveis
```

Não há timer obrigatório de 60 s neste planejamento.

## 7. Commands

Exemplos conceituais:

```text
gathering.interaction.open
gathering.session.start
gathering.session.stop
gathering.session.snapshot
gathering.carcass.process
```

Payload do cliente contém apenas IDs de UI/session conhecidos e hints estritamente necessários.

Nunca aceitar:

```text
oreType
itemIdToGrant
quantity
xp
rank
stockRemaining
cycleCompleted=true
rngResult
```

como authority.

## 8. Server events/read models

Exemplos:

```text
gathering.interaction.state
gathering.session.started
gathering.session.updated
gathering.cycle.completed
gathering.session.stopped
gathering.site.depleted
gathering.site.cooldown
gathering.error
```

Esses nomes são conceituais.

## 9. Animações

### 9.1. Mining

Ao iniciar sessão válida:

- projetar animação de mineração;
- mantê-la/loopá-la enquanto a sessão estiver ativa;
- interromper ao sair da sessão.

### 9.2. Herbalism

Usar animação de coleta definida no interaction profile.

### 9.3. Farming

Usar animação de enxada durante o ciclo.

### 9.4. Hunting

Processamento pode possuir animação própria futura, mas não é requisito para a regra econômica atual.

## 10. Animação não é prova

O servidor controla a sessão por:

- target;
- posição;
- tempo;
- lease;
- ferramenta;
- profissão;
- stock.

Se a animação falhar visualmente, isso não deve conceder um reward extra nem transformar o cliente em authority.

Se a projection de animação for capability obrigatória para UX, a sessão pode ser recusada como `unsupported` quando essa capability estiver ausente; isso é feature policy, não anti-cheat.

## 11. Cancelamento

O jogador pode cancelar pelo CEF.

Também ocorre cancelamento server-side por:

- distância;
- morte/incapacitação;
- logout;
- disconnect;
- troca de célula incompatível;
- ferramenta removida;
- Vigor insuficiente;
- depletion;
- lease perdido.

## 12. Ciclo contínuo

Para mineração:

```text
start
 -> cycle 1 (60 s)
 -> reward
 -> cycle 2 (60 s)
 -> reward
 -> ...
 -> stop
```

Cada ciclo tem operationId próprio.

A UI pode continuar aberta e atualizar stock/resultados a cada cycle commit.

## 13. Cooldown display

Quando site está depleted:

```text
RECURSO ESGOTADO
Disponível novamente em: <server timestamp>
```

O cliente calcula countdown visual a partir do timestamp, mas o servidor decide a disponibilidade.

## 14. Workers display

Mining deve refletir os dois slots globais:

```text
Trabalhadores: 1 / 2
```

Se 2/2:

```text
canStart=false
reason="site-worker-cap-reached"
```

Herbalism/farming exibem workers quando seu profile possuir limite.

## 15. Recovery de UI

Reconectar/reabrir UI deve consultar snapshot server-side.

A UI nunca reconstrói uma sessão apenas porque localmente ainda existia timer.

## 16. Aetherius UI Core

O GatheringSystem fornece:

- manifest/capability da superfície;
- read models;
- commands;
- presentation metadata.

Aetherius UI Core continua owner de:

- shell;
- lifecycle da view;
- foco;
- cursor;
- navegação;
- transporte;
- autenticação de sessão.
