# 10. Cobertura, lacunas e decisões de implementação

## 10.1 Balanço honesto da documentação

A primeira entrega era ampla em arquitetura e evidências, mas não suficiente para afirmar que o funcionamento de cada perk estava explicado. Esta ampliação acrescenta manuais de execução, fórmulas, persistência, conditions e cenários multiplayer, além de catálogos navegáveis de cada perk extraída e seus links mágicos. Ela não transforma ausência de runtime em prova de compatibilidade.

|Escopo|Cobertura desta ampliação|Limite|
|---|---|---|
|PERK instalada|1.493 fichas com identidade, winner, metadados, effects e CTDA|Recorte de campos extraídos; sem auditoria universal de scripts/DLLs|
|Perks antes truncadas|10 records reextraídos em 83 chamadas sequenciais por subpaths|Nenhuma nota de truncamento restante nas PERKs desse recorte|
|Entry points|71 valores distintos com contrato, contexto, teste e fichas|Enum 48 não resolvido; semântica de engine precisa de oráculo|
|Conditions das PERKs|83 funções indexadas, parâmetros em cada ficha|Não equivalem às 178 funções do inventário geral|
|Cadeias mágicas|1.540 records alcançáveis pelos links extraídos|Sem truncamento detectado nesse conjunto; não inclui dependências dinâmicas invisíveis ao recorte|
|Classes|18 classes e 350 ocorrências nos estágios|Concessão configurada não prova aplicação efetiva|
|Perk mappings|162 entradas,156 IDs zero|146 candidatas por nome, dez sem correspondência exata; seis no manifesto histórico|
|Runtime e banco|Contratos e cenários detalhados|Sem nova sessão de jogo nem teste PostgreSQL nesta ampliação|

O [coverage.json](coverage.json) conserva contagens e as dez identidades reextraídas. [perk-facts.jsonl.gz](perk-facts.jsonl.gz) preserva o recorte factual das PERKs ampliadas, incluindo campos opacos que as tabelas omitem por não ter semântica documentada. A validação e os hashes do pacote ficam em [VALIDATION](VALIDATION.md) e [manifest](manifest-sha256.json).

## 10.2 Evolução do blocker B07

A auditoria original registrou 67 notas de truncamento em 63 records. Esses números permanecem como resultado histórico da primeira coleta. Dez desses records eram PERKs e foram reextraídos por subpaths nesta ampliação. Restam 53 records originalmente afetados fora desse reparo; além deles, campos não solicitados, scripts e comportamentos runtime continuam fora de uma certificação geral. Não alterar a auditoria histórica para sugerir que toda lacuna de dados desapareceu.

## 10.3 Achados adicionais que precisam virar trabalho

|ID|Achado|Ação proposta|Acceptance|
|---|---|---|---|
|D01|156 IDs placeholder no mapping|Resolver por FormKey/semântica; retirar fallback de nome como prova|Todas as perks da release têm identidade/rank/winner pinados|
|D02|Registry só cobre seis masteries e formato reduzido|Compilador de effects com matriz de suporte explícita|Rejeita qualquer operação/contexto não certificado|
|D03|Selecionar mesma classe reinicializa progresso|Comando idempotente e reset separado|P02 passa sem perda de XP/atributos|
|D04|attributePoints configurado não equivale a concessão inicial|Reconciliar contrato de pontos e baseline|Saldo por estágio documentado e testado, sem pontos inventados|
|D05|Effect instanceId/nextTick não persistidos|Versionar schema e política de tick/restart|M11 e recovery causal passam|
|D06|sourceActorId runtime salvo|Adicionar identidade estável e generation|Restart/remapeamento não troca autoria|
|D07|RefreshDuration/UniqueSource têm autoria/grupo limitados|Política por família, mantendo rastreio de fonte|Dois casters/spells não colidem indevidamente|
|D08|Cap 4096 verificado antes de refresh/substituição|Definir admissão e atualização em capacidade cheia|M09 tem comportamento aprovado e não perde efeito antigo|
|D09|PartyEligibility não valida todos os componentes finitos localmente|Validação de snapshot confiável e coordenadas|X02 rejeita NaN/infinito/array curto|
|D10|Enum de entry point 48 sem nome|Resolver contra schema/engine/fixture|Semântica demonstrada ou feature continua unsupported|
|D11|Código mágico helper não equivale a integração|Port público + scheduler + effects reais|Cadeia de spell funciona uma vez em dois clientes|
|D12|Cache UI não reserva inflight|Receipt/idempotência no domínio|Duplicata concorrente executa uma vez|

Esses itens são achados/plano; nenhum foi corrigido funcionalmente neste commit de documentação. A implementação deve preservar os testes de caracterização e não transformar todo comportamento legado em contrato desejado.

## 10.4 Decisões propostas que exigem validação de produto/runtime

|Decisão|Proposta inicial|Como fechar|
|---|---|---|
|PvP/friendly fire|Off no primeiro rollout até serviço de relações completo|Homologar efeitos hostis além de HP e registrar política por zona/duelo|
|Conditions sem contexto|Unsupported explícito bloqueia feature|Golden do compilador e reasonCode na UI/admin|
|Stacking|Política por família derivada do comportamento auditado|Fixtures com dois casters e efeitos concorrentes|
|Magnitude de DoT|Declarar snapshot/live por definição; sem default silencioso|Respec, buff posterior e morte do caster testados|
|Tempo offline|Declarar por família; concentração encerra|Restart/reconnect e relógio testados|
|Rollout|off→audit→shadow→canary→active com readiness|Ports e matriz de suporte aprovados; flag sozinha não libera|
|RNG|Uma decisão por evento/escopo e replay estável|Retry/concorrência não rerollam|
|Fontes de grants|União por origem e revogação seletiva|Preservação de quest/raça/equipamento comprovada; B03 resolvido para strict|

## 10.5 Integração com as fases existentes

Usar [IMPLEMENTATION_PHASES](../audit/2026-10-02/IMPLEMENTATION_PHASES.md) como plano de execução, sem renumerar seus 18 campos por fase. Em F0, incorporar mappings e evidência complementar de B07. Antes de grants/classes, fechar D01/D03/D04. Antes de effects/persistência, fechar D05–D08. Antes de XP, fechar D09 e B04. Antes de UI ativa, fechar D12. Antes de combate/magia, fechar D02/D10/D11, B02 e os oráculos de conditions.

B01 produção não comprovada, B02 ports de combate, B03 remoção global de spells no Client, B04 death proof, B05 inventário atômico, B06 overlay divergente e B08 runtime/banco/scripts continuam vigentes. Política atual: ausências de capability podem ser resolvidas por mudanças controladas em Server/Client que exponham Host APIs públicas, mínimas, versionadas e testadas. O GameplayCore continua sendo o local da lógica de gameplay; monkey patches e internals privados não são solução final. Consulte [a arquitetura canônica](../architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md).

## 10.6 O que significa “não deixar faltar” nesta etapa

O objetivo documental é tornar visíveis a mecânica, suas dependências, o comportamento atual, a decisão proposta, o impacto multiplayer e o critério de prova. Não é responsável inventar a semântica de um enum, declarar resolvido um candidato por nome ou dizer que uma DLL está funcionando sem executar o runtime. Onde essa prova falta, a documentação especifica exatamente o que obter e qual feature permanece bloqueada.
