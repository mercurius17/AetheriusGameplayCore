# 2. Autoridade, execução e sincronização multiplayer

## 2.1 Fronteiras de responsabilidade

Contrato proposto: o servidor decide fatos compartilhados; o cliente envia intenções e apresenta projeções. Um cliente dono da simulação de um NPC não recebe, por isso, autorização irrestrita para declarar dano, morte, loot ou XP. O transporte autenticado identifica a sessão; não torna verdadeiros os valores de seu payload.

|Fato|Owner proposto|Dados que o cliente pode oferecer|Condição de liberação|
|---|---|---|---|
|Escolha de classe, grants|Class, com transação de progressão|Classe desejada e revisão esperada|Identidades resolvidas e comando idempotente|
|XP, nível, milestones|Leveling|Pedido de leitura; nunca quantidade de XP|Evento de origem autorizado e ledger único|
|Estado agregado de combate|ActorState como fachada dos stores existentes|Intenções de ação|Um writer por campo; sem terceiro effects store|
|Dano e efeitos derivados|Damage conectado ao host|Evidência de input/hit, sem valor final|Port público de aplicação e contexto confiável — B02|
|Movimento, animação, contatos|Host/runtime autorizado|Input, previsão, observações|Contrato de validação; não presumir que o core TS possui física|
|Inventário/charges/manutenção|Owner de inventário + Durability|Item/ação solicitada|Instância estável e transação recuperável — B05|
|Morte e crédito|Host de combate|Observação não conclusiva|Proof com generation e vínculo causal — B04|
|Interface|AetheriusUI como projeção|Comandos permitidos|Sessão, schema, capability e versão|

**Situação observada:** a base Server examinada não exporta os ports de combat/effects exigidos pelo código importado. Não é suficiente adicionar uma interface TypeScript com esses nomes. Enquanto não houver capacidade pública equivalente, o fluxo abaixo é especificação para audit/shadow; aplicação autoritativa continua bloqueada. Server e Client permanecem read-only neste planejamento.

## 2.2 Um ataque, passo a passo

1. O transporte identifica sessão e ator; valida schema, tamanho, rate limit, nonce e escopo. Um campo `attackerId` arbitrário não substitui essa identidade.
2. O adapter associa a intenção ao evento autorizado do host. Resolve vida/generation de atacante e vítima, mundo/instância e equipamento. Sem prova suficiente de contato, alcance ou tipo de ataque, não promover relato do cliente a dano confirmado.
3. Reserva `combatEventId` no domínio de dedupe. Duplicata em andamento aguarda o mesmo resultado; duplicata concluída recebe o resultado existente. A reserva precede RNG e aplicação.
4. Captura `catalogRevision`, revisão de grants, equipamento, effects, relação PvP e estado da vítima. O evento trabalha com um snapshot coerente.
5. Resolve base da arma, skill, perks, conditions, chance crítica e contexto de defesa por fontes autorizadas. O cliente não escolhe magnitude, chance, tipo elemental ou lista final de vítimas.
6. Calcula componentes e procs em uma sequência definida. Cada proc leva `parentEventId`, índice do effect e identidade da vítima. Limites de recursão/fan-out impedem ciclos como reflect → on-hit → reflect.
7. Aplica a mutação pelo port do único owner. Se houver discrepância de revisão, rejeita ou recalcula por política explícita; não confirma parte e esquece o resto.
8. Registra resultado e evidência de decisão. Eventos de morte/crédito derivam da transição confirmada de vida, não do total que a UI exibiu.
9. Publica projeção para atacante, vítima e observadores, com versão e causalidade. ACK de UI confirma recebimento, não validade do cálculo.

O limite de recursão e o teto de vítimas são parâmetros de release ainda a medir, não números arbitrários a embutir na engine. Se um limite truncar uma mecânica, isso deve ser visível na telemetria e na especificação de suporte.

## 2.3 Evitar dano duplicado

Há pelo menos quatro origens possíveis: cálculo nativo legado, helper autoritativo novo, spell/proc disparado localmente e retransmissão de rede. A implantação deve atribuir ownership **por componente**. “Dano físico no servidor” não responde quem aplica enchantment, veneno, stagger e spell de on-hit.

Para cada efeito, a matriz de release registra `native`, `core`, `presentation-only` ou `disabled`. Trocar de owner exige demonstrar que o anterior não aplica mais a mesma mutação. Subtrair posteriormente o dano duplicado não resolve mortes, scripts, aggro ou procs que já ocorreram. Se o host não oferecer interceptação suficiente, manter a feature desligada; não mascarar o problema com um fator de compensação.

## 2.4 PvE, PvP e friendly fire

Proposta inicial: PvP e friendly fire ficam desabilitados até a política de relações estar implementada e testada. Isso é uma decisão de rollout proposta, não estado observado do jogo. O serviço de relações precisa distinguir jogador, NPC, summon, dono do summon, party, raid, facção, duelo, zona e world instance.

Uma AOE deve avaliar a elegibilidade de cada vítima antes de aplicar dano, debuff, stagger e proc. Bloquear HP mas permitir paralisia ou desarme ainda é friendly fire. Cura, buffs e dispel têm política de alvo própria; “não hostil” não equivale automaticamente a “aliado autorizado”. A relação deve ser capturada no evento, impedindo que uma mudança de party entre cálculo e commit modifique silenciosamente os alvos.

|Situação|Regra a especificar e testar|
|---|---|
|Dois jogadores atacam o mesmo NPC|Eventos distintos, estado serializado da vítima, morte e XP uma única vez|
|Jogador atinge aliado com sweep|Excluir efeitos hostis por vítima; não apenas dano direto|
|Summon ataca jogador|Resolver dono e relação; não contornar PvP pela identidade NPC|
|Duelo termina com projétil em voo|Política explícita para autorização no lançamento e no impacto; proposta conservadora: revalidar relação no impacto|
|Debuff lançado antes de entrar na party|Decidir manutenção/remoção na transição; não depende de qual cliente atualizou primeiro|
|Cura no mesmo tick de dano letal|Ordenação autoritativa; não ressuscitar por pacote atrasado sem regra de revive|
|Desarme em item protegido|Negar mutação com motivo; não criar cópia no chão nem destruir item|

## 2.5 Latência e previsão

O cliente pode prever animação, som, mira e feedback provisório. Recursos e resultados confirmados usam revisão do servidor. Correção visual precisa distinguir “ataque enviado”, “resultado confirmado” e “ação recusada”; não exibir um proc garantido antes da decisão.

Timestamp do cliente é evidência, não relógio oficial. Rewind, se vier a existir, exige janela limitada, histórico confiável, política de colisão e validação do host; este planejamento não presume essas capacidades. Pacotes fora da janela ou de geração antiga não podem alterar o ator atual. Reordenar mensagens não deve reordenar transações já confirmadas.

## 2.6 NPCs, migração de host e observadores

O estado durável e a identidade do NPC não podem depender do cliente que atualmente o observa. A troca de host precisa de fencing token/generation: mensagens do host anterior deixam de ser válidas. Effects e cooldowns continuam vinculados ao ator correto, e a inscrição do scheduler antigo é removida.

Ao entrar na área, um observador recebe snapshot atual de resources, efeitos relevantes e animações que ainda façam sentido. Não recebe replay de todos os hits passados como novas ações. O snapshot deve carregar estado suficiente para reconstruir apresentação sem executar novamente on-hit, consumo ou XP.

## 2.7 RNG e reentrância

Crítico, absorção, chance de proc e loot são sorteados uma vez por evento autorizado e por escopo definido. Repetir request não faz novo sorteio. Seed ou resultado usados pelo replay ficam associados ao evento; não expor segredos que permitam prever toda a sequência competitiva. Uma cadeia AOE precisa declarar se o sorteio é por cast, por vítima ou por effect — isso varia e deve ser certificado.

Callbacks podem remover efeitos ou matar atores enquanto outros procs estão pendentes. A execução precisa verificar validade da instância e geração antes de cada mutação. Evitar referências a objetos destruídos e impedir que efeitos criados durante uma iteração produzam loops ilimitados no mesmo tick.

## 2.8 Critério de sincronização correta

Dois clientes concordarem visualmente não basta: ambos podem estar reproduzindo o mesmo erro. A prova exige que recursos autoritativos, conjunto de efeitos, grants, inventário e ledger coincidam com o resultado esperado, com uma única aplicação por evento. O [roteiro de testes](09_TESTES_MULTIPLAYER.md) exige servidor, dois clientes e falhas controladas antes de certificação.
