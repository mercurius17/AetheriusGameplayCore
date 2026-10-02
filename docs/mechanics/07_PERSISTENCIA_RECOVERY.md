# 7. Persistência, transações e recuperação

## 7.1 Objetos persistidos e identidades

Proposta de modelo PostgreSQL; nenhum schema/migration é implementado por esta documentação. Reutilizar contratos e repositórios existentes após inventário do banco real, ainda não obtido. Não manter JSON legado e PostgreSQL como dois writers independentes.

|Entidade lógica|Chave proposta|Conteúdo e invariantes|
|---|---|---|
|Character progression|characterId estável|Classe, nível, XP, atributos, ciclo diário, revision; um owner Leveling|
|Grant source|characterId + sourceType + sourceId + definitionKey|Rank e lifetime da contribuição; união efetiva derivada|
|Catalog release|content signature|Plugins/hashes, runtime overlay, versão de compilação e suporte|
|Actor incarnation|actorStableId + generation|Vínculo com runtime ID atual; impede evento de vida antiga|
|Effect instance durável|effectInstanceStableId|Origem, alvo, policyVersion, duração e estratégia de tick/restart|
|Item instance|inventory owner + instance key|Base, quantidade, extras, enchant/charge/doses e revisão|
|Command receipt|owner + commandId|Estado pending/committed/rejected, input hash e resposta final|
|XP ledger|death proof + recipient + regra de award|Quantidade, reason, before/after e correlação|
|Outbox|eventId único|Projeção/evento a publicar depois do commit|

Um commandId repetido com payload diferente deve ser rejeitado, não devolver sucesso para uma intenção diferente. Idempotência tem escopo e retenção adequados ao efeito econômico; TTL de UI não é garantia durável. `runtimeFormId` e `sourceActorId` numérico atual não são chaves de personagem ou instância entre restarts.

## 7.2 Transação de progressão

1. Validar comando/evento autorizado e catálogo compatível.
2. Abrir transação e reservar chave de idempotência; lock de linha ou compare-and-swap com revisão.
3. Ler estado e calcular XP permitido, fadiga, level-ups, milestones e novos grants.
4. Gravar progresso, receipt/ledger e outbox na mesma transação.
5. Commit; atualizar snapshot em memória a partir do resultado confirmado.
6. Publicar outbox com eventId e revision. Repetição de publicação é tolerada pelo consumidor.

Dois kills simultâneos do mesmo personagem precisam serializar atualização para não perder XP. Uma falha entre commit e publicação deixa outbox pendente; o reconnect solicita snapshot atual. Uma falha antes do commit não pode produzir projeção definitiva de nível novo.

## 7.3 Inventário em outro owner

Uma transação SQL não torna atômica a API externa de inventário. Proposta de protocolo: prepare/reserve com token idempotente, registrar intenção, commit/debit no owner, confirmar resultado durável e publicar. Em crash, recover(token) informa se a reserva foi debitada, expirada ou cancelada. Compensação só quando o estado é conhecido; não devolver item cegamente após timeout.

Exemplo de kit: reserva 1 kit, atualiza manutenção e confirma débito com correlação. Se faltar port com recovery, manter comando indisponível (B05). Não simular atomicidade escrevendo “kit consumido” no PostgreSQL enquanto o inventário nativo continua intacto.

## 7.4 Effects e restart

O Save atual não persiste IDs de instância nem fase de tick, e guarda sourceActorId runtime. A migração proposta precisa explicitar novo schema e conversão; não alterar interpretação do schema 1 silenciosamente. Para cada família decidir: expira pelo relógio real, congela offline, é descartada ou é reconstruída de uma concessão permanente.

Ao restaurar: validar catálogo e origem, resolver identidades estáveis, descartar expirados, respeitar limites, deduplicar instâncias e agendar conforme política. Não reproduzir ticks perdidos como explosão de dano no login. Concentração não é restaurada automaticamente. Persistir buff permanente por grant pode ser melhor do que salvar cópias infinitas de instâncias temporárias; a escolha deve preservar o owner único.

## 7.5 Falhas e resposta esperada

|Ponto da falha|Estado verdadeiro|Recuperação|
|---|---|---|
|Antes da reserva do comando|Nada confirmado|Reenviar com mesmo commandId|
|Após reserva, antes do commit|Pending/rollback|Retomar ou abortar pela política de lease/fencing|
|Após commit, antes da resposta|Resultado confirmado|Receipt devolve a mesma resposta sem nova aplicação|
|Após publicar, antes de marcar outbox|Evento pode ter sido entregue|Publicar de novo; consumidor deduplica eventId|
|Timeout do inventário|Resultado desconhecido|Consultar recover; não aplicar débito ou refund duplicado|
|Banco indisponível|Sem nova garantia durável|Recusar operações econômicas dependentes; leitura com indicação de estado|
|Cliente desconecta|Commit pode já existir|Snapshot/receipt no reconnect; não assumir cancelamento|
|Dois processos escrevem mesmo ator|Risco de split-brain|Lease/fencing e revisão rejeitam writer antigo|

Operações de combate frequentes não devem abrir transação SQL síncrona por hit. O desenho do journal/snapshot e a tolerância de perda em crash precisam de requisito explícito; não declarar durabilidade total se apenas memória foi alterada. Eventos econômicos derivados, como XP/loot, exigem confirmação durável e dedupe de origem.

## 7.6 Migração e rollback

Inventariar schema/versão, backup restaurável, contagens e owners. Importar em modo shadow com relatório por personagem: saldo, nível, classe, atributos, grants e fontes desconhecidas. Origem desconhecida não deve ser inventada como `class`; usar categoria de migração e revisão manual quando necessário.

Cutover: congelar writers antigos, importar delta final, reconciliar, habilitar um writer e publicar read models compatíveis. Rollback preserva schema aditivo e journal. Restaurar backup antigo depois de XP ou kits confirmados perde progresso/duplica valor; exige replay/compensação auditada ou manutenção read-only até conversão segura. Não executar down migration destrutiva como parte automática do rollback.

## 7.7 Invariantes a verificar

Um writer por fato; nenhum saldo negativo não autorizado; commandId único por operação; morte de uma generation premiada uma vez por destinatário; grant sem origem nunca removido em massa; outbox causal; revisions monotônicas; nenhum runtime ID persistido como identidade estável; nenhum payload de cliente convertido diretamente em saldo. Os testes de banco devem usar PostgreSQL descartável com concorrência e falhas, não apenas mocks em memória.
