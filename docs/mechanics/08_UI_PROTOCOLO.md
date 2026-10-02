# 8. Interface, protocolo, diagnóstico e recursos

## 8.1 Interface como projeção

O AetheriusUI_Core é o destino de apresentação; não criar uma segunda UI autoritativa no GameplayCore. O snapshot deve mostrar classe, XP/nível, pontos, skills, perks por status, efeitos relevantes, manutenção e readiness. Separar “prevista no estágio”, “concedida”, “identidade pendente”, “efeito não suportado” e “ativa no contexto atual”.

Uma perk concedida cuja condition exige power attack não está “quebrada” quando um ataque comum não recebe bônus. A interface pode explicar a condição conhecida sem prometer execução não certificada. Não exibir apenas um ícone verde porque o nome consta em unlockedPerks.

## 8.2 Comandos e resposta

Comandos de classe, atributos, respec e manutenção levam requestId/commandId, revisão esperada e somente os parâmetros necessários. O actor vem do transporte autenticado. Resposta contém status, reasonCode, revisão confirmada e snapshot/delta ou instrução de resync. Erros funcionais devem ser compreensíveis: identidade não resolvida, catálogo divergente, estado mudou, recurso indisponível, permissão ausente, saldo insuficiente.

O protocolo auditado tem limite 16 KiB, profundidade 16, arrays até 256, números finitos e rejeição de chaves perigosas. O limite nativo 18 KiB não relaxa o contrato 16 KiB. Catálogos de 1.493 perks não devem ser enviados como um único snapshot: paginar/consultar detalhes e projetar apenas grants/efeitos relevantes, com versão de catálogo.

O router mantém cache 512/120 s de respostas, mas não reserva execução em andamento. Dois requests concorrentes podem passar antes do cache. Idempotência durável no domínio continua necessária; desabilitar o botão enquanto aguarda é conveniência visual, não controle de concorrência.

## 8.3 Revisões e resync

Snapshot carrega session generation, characterId, stateRevision e catalogRevision. Delta informa baseRevision e nova revisão; se a base não corresponder, solicitar snapshot completo. Mensagem de sessão anterior ou catálogo incompatível é rejeitada. Ao reconnect, descartar previsão não confirmada e reconciliar receipts pendentes.

Fatos visíveis de outros atores devem ser mínimos e apropriados ao jogo. Não transmitir inventário completo, quests privadas ou dados administrativos a todos os observadores para simplificar conditions locais. O servidor pode calcular a condition e expor apenas seu resultado necessário à apresentação.

## 8.4 Diagnóstico de uma perk

Fluxo operacional: confirmar nome→FormKey→winner; verificar grant e origem; verificar rank efetivo; conferir effect e entry point; inspecionar conditions no evento; conferir capacidade do owner; inspecionar aplicação e revision; comparar projeção recebida. Esse caminho distingue falha de identidade, condição legítima, semântica ausente, aplicação duplicada e UI atrasada.

Proposta de reasonCodes internos: `CATALOG_MISMATCH`, `PERK_ID_UNRESOLVED`, `PERK_RANK_UNSUPPORTED`, `CONDITION_CONTEXT_UNAVAILABLE`, `ENTRY_POINT_UNSUPPORTED`, `BASE_CAPABILITY_MISSING`, `STALE_REVISION`, `DUPLICATE_COMMAND`, `INVENTORY_RECOVERY_PENDING`. Os nomes são proposta de contrato, não exports já implementados.

## 8.5 Métricas e logs

|Sinal|Utilidade|Cuidados|
|---|---|---|
|unsupported por função/effect|Priorizar cobertura real|Agrupar por versão e não por toda ocorrência de hit|
|duplicatas evitadas / conflitos de revisão|Diagnosticar retransmissão e concorrência|Separar retry normal de payload conflitante|
|latência de cálculo e aplicação|Identificar gargalo de gameplay|Medir p 50/p 95/p 99 e tamanho do contexto|
|effects ativos, ticks, expirados e overflow|Detectar vazamento e bursts|Limites por ator/mundo e telemetria de rejeição|
|outbox atrasada / recovery pendente|Detectar commit sem projeção e inventário incerto|Alertar por idade e impacto econômico|
|divergência entre owners|Detectar dupla aplicação ou snapshot incompatível|Correlacionar eventId, não comparar só texto visual|
|memória e filas|Evitar pressão no host|Limitar caches, batches e retenção de traces|

Logs devem ter versão de catálogo, evento, paths de conditions relevantes e resultado, sem credenciais ou dumps completos de personagem desnecessários. Traces detalhados sob demanda e janela limitada; métricas agregadas no fluxo normal.

## 8.6 Uso moderado de memória e CPU

Na preparação desta documentação, as chamadas Housecarl foram sequenciais e os arquivos grandes foram lidos por streaming quando necessário. Nenhum jogo, build pesado ou conjunto paralelo de agentes foi iniciado para ampliar Markdown. Isso reduz a carga da tarefa, sem prometer controlar a RAM de outros aplicativos.

Para a implementação: não materializar todo export de 1 GB em cada módulo; compilar catálogos uma vez por release, carregar índices necessários, usar snapshots imutáveis e caches com teto, paginar UI e limitar filas. Nenhuma consulta DB por hit/CTDA. Exportações administrativas devem rodar em batches e com cancelamento, separadas do tick de gameplay. Definir orçamento a partir de medição em homologação; não inventar um teto de MB que o processo atual não foi instrumentado para cumprir.
