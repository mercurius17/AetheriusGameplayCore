# AetheriusLevelingSystem

Sistema server-side, orientado a dados, para progressão de nível de classe e concessão de XP no
Aetherius SkyMP. O módulo foi projetado para se tornar a autoridade exclusiva de experiência,
funcionar com inimigos do jogo base e de mods e permanecer independente da posição dos plugins na
load order do Mod Organizer 2.

> **Estado atual: `PARTIAL`.** O núcleo, as regras aprovadas e os mecanismos de integração estão
> implementados e testados, mas a ativação em produção permanece bloqueada até a definição de
> persistência transacional durável. A compatibilidade de categorias
> com o AetheriusEnemySystem está completa. Consulte
> [`USER_REVIEW_REQUIRED.md`](USER_REVIEW_REQUIRED.md).

## Recursos principais

- progressão de `PlayerClassLevel` do nível 1 ao 40, com 15 pontos de atributo por nível;
- XP base e XP fixa de chefes editáveis exclusivamente por JSON;
- escala de inimigos do nível 1 ao 100, incluindo o segundo softcap de 2% após o nível 40;
- relevância de conteúdo com redução de 5% por nível acima da faixa e piso de 10% do XP;
- elegibilidade de grupo por estado online, mesma célula e distância máxima de 5.000 unidades;
- nenhum requisito de dano, participação no combate ou golpe final;
- chefes de XP fixa ignoram escala, relevância, grupo e fadiga;
- identidade estável por `plugin + FormID local`, sem vínculo com load order fixa;
- auditoria completa dos inimigos vanilla e adicionados por mods;
- bloqueio preventivo quando a cobertura está incompleta ou existe outra autoridade de XP;
- processamento idempotente de eventos e trilha detalhada de auditoria;
- ponte executável para o evento `aetherius.enemy.killed.v1` do AetheriusEnemySystem;
- implementação Node.js ESM sem dependências externas de runtime.

## Cálculo de XP

Para inimigos regulares, a pipeline é:

```text
XP base do JSON
  × escala do nível de combate do inimigo
  × relevância para o nível de classe
  × modificador de grupo ou raid
  → aplicação da fadiga diária
  → progressão de nível e pontos de atributo
```

### Escala do nível do inimigo

| EnemyCombatLevel | Multiplicador |
| --- | --- |
| 1–20 | `1 + (nível - 1) × 0,20` |
| 21–40 | `4,80 + (nível - 20) × 0,05` |
| 41–100 | `5,80 + (nível - 40) × 0,02` |

### Relevância de conteúdo

- abaixo ou dentro da faixa recomendada: 100% do XP;
- acima da faixa: redução de 5% por nível excedente;
- redução máxima: 90%, garantindo pelo menos 10% do XP.

### Chefes de XP fixa

Perfis com `awardMode: "FIXED"`, como Dragon Priest e Dragon, concedem exatamente o `fixedXp`
definido em [`config/enemy-base-xp.json`](config/enemy-base-xp.json) a cada jogador elegível. Esses
perfis não recebem escala de nível, redução de relevância, modificador de grupo nem fadiga.

### Grupo e raid

Todo membro é tratado pelas mesmas regras: deve estar online, na mesma célula/área e a até 5.000
unidades. Não é necessário causar dano ou participar do combate, e o jogador do golpe final não
recebe tratamento especial. Um evento com `killerId: 0` ainda pode premiar um grupo quando o host
fornece um snapshot autoritativo válido.

Os multiplicadores para grupos de 1–20 jogadores estão em
[`config/party-xp.json`](config/party-xp.json).

## Integração com AetheriusEnemySystem

[`src/integration/aetherius-enemy-system.mjs`](src/integration/aetherius-enemy-system.mjs) fornece a
fronteira executável entre os projetos:

- assina o `EventHub` do Enemy System;
- valida o evento nos dois contratos antes de calcular XP;
- transforma `EnemyRegistry.enemies` em uma auditoria de cobertura;
- vincula a cobertura ao epoch atual do MO2;
- compara versão, evento, exports e categorias compartilhadas;
- fornece ao scanner do Enemy System o catálogo ativo derivado do JSON;
- conecta e desconecta toda a integração por uma única função.

A ligação permanece estrutural, sem dependência npm rígida. Assim, os sistemas podem ser versionados
separadamente e unidos pelo projeto definitivo de integração do servidor.

```js
import * as enemySystemApi from '../AetheriusEnemySystem/src/index.mjs';
import {
  ConfigLoader,
  XpAwardService,
  connectAetheriusEnemySystem,
  createAetheriusEnemySystemXpContract
} from './src/index.mjs';

const configResult = await new ConfigLoader(process.cwd()).load();

const xpService = new XpAwardService({
  configResult,
  repository,
  idempotencyStore,
  experienceAuthority
});

const xpCategoryContract = createAetheriusEnemySystemXpContract({
  catalog: xpService.catalog
});
const enemyRegistry = new enemySystemApi.EnemyScanner({
  xpCategoryContract,
  winningOverrideResolver
}).scan(enemyRecords, { encounterProfiles });

const integration = connectAetheriusEnemySystem({
  enemySystemApi,
  eventHub,
  xpService,
  readRegistry: () => enemyRegistry,
  readEpoch: () => currentMo2Epoch,
  partySnapshotProvider: (event) => partyHost.snapshotForDeath(event)
});
```

Detalhes e responsabilidades do host estão em
[`docs/INTEGRATION_AETHERIUS_ENEMY_SYSTEM.md`](docs/INTEGRATION_AETHERIUS_ENEMY_SYSTEM.md).

## Cobertura dinâmica do MO2

O projeto recebe o snapshot dos registros `NPC_` vencedores da load order atual. A identidade
persistente usa o nome normalizado do plugin e o FormID local; índices de plugin e FormIDs de
runtime nunca são persistidos.

Uma mudança na load order invalida a auditoria anterior. O sistema só volta a conceder XP depois de
uma nova auditoria provar que todos os inimigos encontrados estão cobertos ou foram excluídos de
forma explícita. Não existe resolução por nome, categoria aproximada nem XP padrão.

## Autoridade exclusiva de XP

`ExperienceAuthorityCoordinator` localiza e desativa autoridades de XP legadas ou concorrentes. Em
produção, o processamento permanece bloqueado até que `AetheriusLevelingSystem` seja a única
autoridade habilitada.

## Configuração

Todos os valores de produção ficam em [`config/`](config/) e são validados ao carregar o sistema.
Os contratos correspondentes ficam em [`schemas/`](schemas/).

| Arquivo | Responsabilidade |
| --- | --- |
| `enemy-base-xp.json` | XP base/fixa, categorias e equivalências dos inimigos |
| `enemy-level-scaling.json` | fórmulas de escala por nível de combate |
| `content-relevance.json` | faixa recomendada e redução por nível excedente |
| `party-xp.json` | elegibilidade e multiplicadores de grupo/raid |
| `fatigue.json` | limite diário e horário de reinício |
| `level-progression.json` | XP necessária do nível 1 ao 40 |
| `enemy-coverage-policy.json` | identidade, descoberta MO2 e política de cobertura |

Para adicionar uma família de inimigos de mod, crie uma categoria exata em
`enemy-base-xp.json`. O manifesto de integração a transforma automaticamente em uma família
`SNAKE_CASE` reconhecida pelo scanner; mapeamentos excepcionais podem ser fornecidos explicitamente.
Uma categoria ausente do JSON não concede XP e permanece visível no relatório de cobertura.

## Requisitos

- Node.js 22 ou mais recente;
- nenhuma instalação de pacote é necessária atualmente;
- AetheriusEnemySystem ao lado deste projeto para a verificação cruzada opcional;
- MO2 e houseCARL para gerar evidências da load order real.

## Comandos

```bash
npm test
npm run verify
npm run readiness
npm run verify:enemy-system
npm run simulate
```

| Comando | Resultado |
| --- | --- |
| `npm test` | executa a suíte automatizada |
| `npm run verify` | valida os JSONs e invariantes cruzadas |
| `npm run readiness` | informa se o sistema pode ser conectado com segurança |
| `npm run verify:enemy-system` | verifica o contrato do repositório irmão |
| `npm run simulate` | executa a pipeline offline sem alterar personagens reais |

## Estrutura

```text
config/     balanceamento e políticas editáveis
docs/       arquitetura, decisões, integração e relatórios
schemas/    contratos JSON das configurações
src/        domínio, políticas, integração, persistência e auditoria
tests/      testes automatizados
tools/      validação e simulador offline
patches/    fronteiras documentadas para integrações futuras
```

## Segurança e estado atual

O sistema adota comportamento *fail-closed*: não inventa categorias, XP ou equivalências quando
faltam dados. Eventos repetidos são rejeitados por `eventId + playerId`; XP, level-ups e pontos de
atributo devem ser gravados na mesma transação.

A suíte possui 44 testes automatizados. O estado de produção permanece `PARTIAL` pelo seguinte ponto:

- persistência transacional/CAS durável ainda não ligada ao host.

Nenhum fallback é aplicado para esconder essas diferenças.

## Documentação

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — pipeline e responsabilidades;
- [`docs/CONFIGURATION_GUIDE.md`](docs/CONFIGURATION_GUIDE.md) — edição segura dos JSONs;
- [`docs/USER_APPROVED_XP_POLICY.md`](docs/USER_APPROVED_XP_POLICY.md) — decisões aprovadas;
- [`docs/MO2_DYNAMIC_ENEMY_COVERAGE.md`](docs/MO2_DYNAMIC_ENEMY_COVERAGE.md) — cobertura dinâmica;
- [`docs/EXPERIENCE_AUTHORITY.md`](docs/EXPERIENCE_AUTHORITY.md) — autoridade exclusiva;
- [`docs/PERSISTENCE_AND_IDEMPOTENCY.md`](docs/PERSISTENCE_AND_IDEMPOTENCY.md) — transações;
- [`docs/TEST_REPORT.md`](docs/TEST_REPORT.md) — validação automatizada.

O PDF de especificação fornecido pelo projeto permanece como fonte principal e oficial dos valores
de balanceamento. As decisões posteriores aprovadas estão vinculadas à versão de configuração
`user-approved-2026-09-12-r3`.
