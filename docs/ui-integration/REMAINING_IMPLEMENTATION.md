# Pendências da integração GameplayCore/UI

Complementa o [estado atual](CURRENT_STATE.md) e segue [a arquitetura canônica](../architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md). Estas pendências não significam que os módulos de produção foram ativados por este commit. Quando uma capability de runtime não existir, a solução preferida é adicioná-la à Host API pública/versionada, mantendo a regra de gameplay no GameplayCore.

1. **CombatProfile e grants:** implementar os Host Ports de combat/profile/effects necessários e a reconciliação source-aware de perks/grants, com persistência e recuperação; somente então habilitar escolher classe, alocar/resetar atributos e efeitos associados.
2. **Party/raid:** implementar comandos transacionais de criação/convite/aceite/remoção, permissões, identidade autenticada, revisões, replay e persistência antes de liberar mutações pela UI.
3. **Inventário/feitiços:** implementar/validar InventoryTransactionPort e SpellProjectionPort públicos para equipar/consumir/destruir/aprender/favoritar/hotkeys com item instance e provenance; fechar escritores legados e validar isolamento, concorrência e reconexão. A consulta e o preview atuais não cumprem essa etapa.
4. **ActorState/providers:** completar os providers reais de combate, efeitos/custos, carga máxima e necessidades; integrar Damage/Durability por seus contratos. Não gerar dados artificiais para habilitar UI.
5. **Leveling:** escolher/reconciliar ownership com o módulo separado; impedir dois escritores de XP/atributos/recompensas. Abates/recompensas precisam de eventos confirmados no servidor.
6. **Testes:** resolver as seis falhas nas suítes classes, perkResolver, leveling e server; preservar os cinco testes de persistência; acrescentar integração real de grants/Party/adapter durável, duas sessões/atores e falhas entre persistência e resposta.
7. **Persistência de produção:** implementar o kernel PostgreSQL definido na arquitetura (schema/migrations, UnitOfWork, ledger, outbox, backup, reinício e recovery); não extrapolar armazenamento local de testes como prova de produção.
8. **Jogo e build:** confirmar as últimas correções de alpha/TAB com NIFs reais, testar dois clientes, auditar compatibilidade da load order/Papyrus, retirar dependências de cache/caminhos locais e preparar build reproduzível/CI e distribuição licenciada.

Critério de conclusão: providers reais disponíveis, escrita exclusiva/validada no servidor, capabilities coerentes, suíte relevante aprovada, persistência/reconexão comprovadas e validação multiplayer em jogo. Até lá, manter as ações dependentes em consulta.
