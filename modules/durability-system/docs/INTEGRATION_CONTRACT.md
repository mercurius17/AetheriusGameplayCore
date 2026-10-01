# Contrato de integração verificado

## Servidor local analisado

Snapshot examinado: `Test de VOIP/aetherius-server-main/server`.

- `phase0-basic.js` usa `core/module-registry.js`, que registra módulos por `id`, `enabledBy`, dependências e `initialize()`.
- `database.js` expõe pool MySQL, `query()` e `getConnection()`.
- `inventory-service.js` encaminha mudanças para `core/transaction-service.js`.
- `core/transaction-service.js` usa transação MySQL, `FOR UPDATE`, ledger e aplicação pós-commit ao cliente.
- O SkyMP expõe `mp.sendCustomPacket(userId, json)` para servidor → cliente e `mp.on('customPacket', ...)` para o caminho inverso.
- `mp.makeProperty` e `mp.triggerClient` existem, mas o pacote usa custom packets para não depender de uma propriedade nova não instalada no cliente.

O módulo foi escrito para ser registrado no `module-registry` por `server/module.js` e para receber o objeto `db` existente por `SqlMaintenancePersistence`. Ele não cria outro banco.

## Cliente local analisado

Snapshot examinado: `Test de VOIP/aetherius-client-main/client`.

- `src/index.ts` instancia uma lista de listeners com `SpApiInteractor`.
- `NetworkingService` roteia `MsgType.CustomPacket` para `customPacketMessage`.
- `BridgeService` já transforma eventos CEF em `CustomPacketMessage` com `contentJsonDump`.
- `BrowserService` mantém o browser CEF disponível apenas fora dos menus vanilla incompatíveis.

O listener entregue em `client/src/services/services/AetheriusDurabilityService.ts` segue esse contrato. A UI é deliberadamente independente do inventário vanilla: o servidor continua validando o item MISC no inventário autoritativo.

## Combate e autoridade

O cliente local tem `HitService`, mas `gamemode/core/hit-events.js` documenta o payload de hit como evidência enviada pelo cliente e rejeita usá-lo para enforcement de dano. Por isso o módulo não liga consumo ou multiplicadores diretamente a esse evento.

`recordEffectiveEvent()` deve ser chamado pelo ponto onde o servidor já aceitou o dano/bloqueio e já conhece a arma, escudo e peças defensivas efetivamente empregados. Material, dano e Armor Rating são parâmetros confiáveis apenas desse pipeline.

## Repositórios pedidos pelo prompt

- `AetheriusDamageSystem`: não há snapshot local nesta árvore e a URL remota não foi acessível durante a verificação;
- `Aetherius Server`: há snapshot local em `Test de VOIP/aetherius-server-main`, usado para o contrato acima;
- `Aetherius Client`: há snapshot local em `Test de VOIP/aetherius-client-main`, usado para o contrato acima.

Não foi declarada integração concreta com o `AetheriusDamageSystem` sem ler seu pipeline real.
