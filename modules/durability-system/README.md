# AetheriusDurabilitySystem

Módulo autoritativo de manutenção por cargas de combate para Aetherius/SkyMP.

## Estado da entrega

Implementado no pacote:

- configuração única e validada em `config/maintenance-config.json`;
- reservas por personagem, categoria e material;
- ativação transacional de kits com limite, remoção do item e idempotência;
- persistência SQL compatível com as tabelas de inventário existentes;
- ciclos de combate sem consumo por equipamento equipado, tempo conectado ou exploração;
- última carga válida até o fim do ciclo;
- multiplicadores autoritativos de armas e contribuição de Armor Rating;
- bridge de custom packets SkyMP sem aceitar saldo, material ou multiplicador do cliente;
- painel `MANUTENÇÃO` e serviço TypeScript de cliente;
- migração SQL, testes funcionais/concurrency/security e benchmark sintético.

Pendente para ativação de produção:

- inserir o módulo no `phase0-basic.js` real;
- ligar `recordEffectiveEvent()` ao pipeline autoritativo de dano físico do AetheriusDamageSystem;
- criar os 30 registros MISC com Housecarl e preencher os FormIDs qualificados no catálogo;
- adicionar o serviço TypeScript à lista de listeners do cliente e incluir os dois assets da UI no CEF existente.

Esses pontos permanecem explícitos porque o pedido restringe edições a esta pasta e os três repositórios remotos não puderam ser verificados integralmente. O cliente local disponível identifica hits, mas o servidor local os trata como evidência de cliente, não como autoridade de dano.

## Uso local

```text
npm run validate
npm test
npm run benchmark
```

O benchmark é uma medição de domínio em memória, não um teste de produção com 100/300/500 conexões de rede, MySQL e Skyrim carregado.

## Contrato autoritativo

O servidor deve chamar:

```js
await bridge.recordEffectiveEvent({
  authority: 'server',
  characterId,
  actorId,
  eventId,
  type: 'weapon_hit',
  physicalWeapon: true,
  weaponMaterials: ['steel']
});
```

Tipos aceitos:

- `weapon_hit`: arma física efetivamente usada; suporta dual wield por lista de materiais;
- `physical_damage_received`: só materiais das peças cuja contribuição defensiva foi realmente usada;
- `shield_block`: somente o material do escudo quando o bloqueio foi efetivo.

Eventos sem `authority: "server"`, sem `eventId`, mágicos, rejeitados ou sem material classificado não consomem cargas.

## Configuração

O administrador edita somente `config/maintenance-config.json` e executa o reload explícito do `configStore`. Penalidades são multiplicadores da contribuição de arma/Armor Rating; a curva final de redução não é alterada nem penalizada novamente.

Alterar `charges` afeta novas ativações. Reservas já adquiridas permanecem com o valor salvo. FormIDs `null` são intencionais até o patch Housecarl ser criado e lido de volta.

## Integração

Consulte:

- `IMPLEMENTATION_REPORT.md` — relatório técnico e limitações;
- `docs/INTEGRATION_CONTRACT.md` — pontos reais observados no servidor/cliente local;
- `database/001_aetherius_durability.sql` — migração no banco existente;
- `patching/housecarl-source-records.json` — fontes verificadas para os modelos MISC dos ícones;
- `ui/maintenance-panel.js` e `ui/maintenance-panel.css` — aba MANUTENÇÃO;
- `client/src/services/services/AetheriusDurabilityService.ts` — listener de custom packets.
