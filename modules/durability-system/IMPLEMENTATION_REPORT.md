# Relatório técnico — AetheriusDurabilitySystem

## 1. Escopo aplicado

O pedido do usuário foi interpretado como: criar uma pasta local chamada `AetheriusDurabilitySystem` e escrever somente dentro de `C:\Code\Aetherius - SkyMP`. O prompt anexado foi tratado como especificação funcional, não como autorização para editar os snapshots externos, o MO2 ou plugins já instalados.

## 2. Componentes desenvolvidos

| Componente | Arquivo | Resultado |
|---|---|---|
| Configuração/validação | `config/maintenance-config.json`, `server/config.js`, `schemas/maintenance-config.schema.json` | 20 materiais, 12 kits de armas, 18 kits de armaduras, penalidade inicial 30%, limites e ciclos configuráveis |
| Catálogo/classificação | `server/catalog.js`, `server/material-catalog.js` | IDs estáveis; classificação somente a partir de registros marcados como autoridade do servidor |
| Domínio autoritativo | `server/maintenance-service.js` | reservas, ciclos, cobertura, última carga, multiplicadores e notificações |
| Persistência | `server/persistence.js`, `database/001_aetherius_durability.sql` | adapter MySQL no schema existente e adapter em memória para testes |
| SkyMP | `server/protocol.js`, `server/sky-mp-bridge.js`, `server/module.js` | custom packets, idempotência, identidade personagem/ator fornecida pelo host |
| Cliente/UI | `client/src/services/services/AetheriusDurabilityService.ts`, `ui/maintenance-panel.*` | snapshot autoritativo, ações de kit e aba MANUTENÇÃO |
| Housecarl | `patching/housecarl-source-records.json` | fontes verificadas para Hammer e Sylgja's Satchel; nenhum plugin externo foi criado |
| Testes/medição | `tests/maintenance.test.js`, `benchmarks/run.js` | funcionais, concorrência, persistência, segurança e benchmark sintético |

## 3. Fluxos de segurança

### Ativação de kit

1. O cliente envia somente `kitKey` e `requestId`.
2. O bridge resolve o ator e o personagem por callbacks do servidor.
3. O catálogo resolve o registro MISC por mapping do servidor; o FormID do cliente é ignorado.
4. A persistência trava o inventário, confirma uma unidade, valida o limite e altera inventário + reserva + ledger numa transação.
5. `requestId` é chave idempotente; reenvios devolvem o resultado anterior.
6. A UI recebe o novo snapshot após o commit.

### Combate

Somente `authority: "server"` e eventos efetivamente aceitos pelo pipeline de dano podem chamar `recordEffectiveEvent()`. O primeiro uso de cada combinação categoria/material por ciclo tenta consumir uma carga; ataques repetidos daquela combinação não fazem nova gravação. Um bloqueio só usa o escudo, e magia não usa reserva de arma.

## 4. Fórmulas

Sem cobertura, `getMultiplier()` usa `1 - efficiencyPenalty`. Com reserva positiva ou cobertura temporária válida, usa `1`. `applyWeaponDamage()` altera apenas a contribuição de dano físico da arma. `applyArmorContribution()` altera a contribuição de Armor Rating por peça; a curva final de redução e o hard cap permanecem fora deste módulo, no pipeline Aetherius.

## 5. Resultados dos testes

Executado em 22/09/2026:

```text
11 testes passaram; 0 falharam.
```

Coberturas incluídas: nenhum consumo sem combate, ataques repetidos, dual wield, magia, dano físico, bloqueio, última carga, saldo não negativo, persistência/reconexão, reenvio idempotente, corrida de dois requests, configuração inválida e adulteração de evento do cliente.

## 6. Benchmark sintético

Com 20 eventos por jogador, adapter em memória e uma sincronização de snapshot por jogador:

| Jogadores | Evento médio baseline | Evento médio manutenção | Escritas | Ledger | Sync | Tráfego de snapshot |
|---:|---:|---:|---:|---:|---:|---:|
| 100 | 0,041 µs | 39,947 µs | 2.300 | 200 | 100 | 707.400 bytes |
| 300 | 0,008 µs | 23,104 µs | 6.900 | 600 | 300 | 2.122.200 bytes |
| 500 | 0,009 µs | 20,163 µs | 11.500 | 1.000 | 500 | 3.538.001 bytes |

Os valores são medição do domínio Node em memória. Não são evidência de latência de produção: ainda faltam Skyrim, rede, MySQL, serialização nativa e o pipeline de dano real. A contagem de ledger demonstra a propriedade desejada: 2 gravações de carga por jogador no primeiro uso das duas combinações, não uma gravação por ataque.

## 7. Housecarl e ESP/ESL

O MO2 ativo foi lido pelo Housecarl antes de registrar os ícones. O registro vencedor de `Hammer` foi `05CAE1:Skyrim.esm`, EDID `BlacksmithHammer01`, com modelo `Clutter\\Blacksmith\\BlacksmithNoviceHammer01.nif`. O registro vencedor de `Sylgja's Satchel` foi `0E49F7:Skyrim.esm`, EDID `FFSS02SylgjaSatchel`, com modelo `Clutter\\Containers\\Satchel.nif`.

Os 30 kits estão descritos no JSON com EDIDs estáveis e `formId: null`. Isso é proposital: criar um ESP/ESL fora da pasta solicitada violaria o escopo de edição. Após a criação Housecarl, cada `formId` deve ser preenchido como `XXXXXX:AetheriusDurabilitySystem.esp` (ou o nome real escolhido) e o callback `resolveKitBaseId()` deve resolver o runtime FormID da load order ativa.

## 8. Limitações e dependências pendentes

- O snapshot `AetheriusDamageSystem` não estava disponível localmente e a URL remota não foi verificável; a ligação de dano autoritativo não foi inventada.
- Nenhum plugin MISC foi criado, pois Housecarl grava na instância MO2, fora da pasta permitida pelo usuário.
- O cliente local não foi alterado; é necessário incluir o listener e os assets da UI no build real.
- A classificação automática cobre os keywords/aliases do catálogo. Itens modded sem keyword conhecida exigem mapping explícito do servidor; eles são excluídos com segurança.
- O benchmark não substitui um ensaio de carga com jogadores reais, banco e rede.

## 9. Comandos de verificação

```text
cd C:\Code\Aetherius - SkyMP\AetheriusDurabilitySystem
npm run validate
npm test
npm run benchmark
```
