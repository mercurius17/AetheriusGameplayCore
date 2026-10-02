# 9. Testes de mecânicas e multiplayer

## 9.1 O que foi executado e o que é roteiro

Esta ampliação altera documentação e exports de evidência. Os cenários abaixo são **especificação de testes futuros**, não resultados de sessões de jogo realizadas. A [validação de baseline](../audit/2026-10-02/VALIDATION.md) continua sendo a evidência executada: Enemy 77 pass/5 skip, Leveling 44 pass, Durability 11 pass, Damage TS6 pass, Damage C++2 pass em Debug, UI14 pass e Class 44 pass/6 fail. Esses resultados não certificam integração nativa, PostgreSQL ou multiplayer.

Para liberar uma mecânica, registrar versão de Server/Client/Core/UI, manifest MO2/plugin/overlay, configuração, banco de teste, personagens, cenário, trace, recursos antes/depois, eventos econômicos, screenshots/vídeo quando úteis e resultado esperado/obtido. Testes só de apresentação não substituem inspeção do estado autoritativo.

## 9.2 Ambiente de homologação

Usar mundo e banco descartáveis, dois clientes A/B e um observador quando a feature o exigir. O servidor deve expor os ports públicos necessários ou o cenário fica `BLOCKED`, nunca `PASS` por simulação. Fixar dados de combate e RNG nos testes de helper; usar runtime real para prova de comportamento do host. Não instalar patches nas bases como etapa implícita de um teste.

Executar primeiro uma família de efeitos e uma classe de fixture, medir recursos e ampliar progressivamente. Interromper ativação se houver dupla aplicação, perda de inventário, morte duplicada, crash, divergência de catálogo ou evento de origem não autenticada. Rollback deve ser exercitado com eventos já confirmados.

## 9.3 Matriz reproduzível

|ID|Preparação e ação|Resultado obrigatório / evidência|
|---|---|---|
|P01|Conceder a mesma mastery por classe e quest; revogar classe|Perk efetiva permanece pela quest; journal preserva as duas origens|
|P02|Repetir seleção da mesma classe após ganhar XP|No-op no contrato proposto; detectar reset atual como falha de baseline|
|P03|Classe solicita perk com localId 0|Não aplicar FormID0 nem resolver silenciosamente por primeiro nome parecido|
|P04|Grant rank 2 num registry que só aceita 1|Rejeição explícita, sem ignorar rank ou conceder bônus parcial|
|P05|Ataque com/sem keyword elegível para mastery|Apenas o elegível recebe o fator, trace mostra condition decisiva|
|P06|Adicionar a perk de exclusão do manifesto|Mastery correspondente deixa de contribuir conforme condition|
|P07|Trocar arma entre intenção e hit|Política de snapshot/revisão escolhe um estado coerente, não mistura base antiga e keyword nova|
|P08|Comparar flurry winner ADXP com predecessor|Validar mudança de speed ability para Multiply 1.1/1.2 e condições de equipamento|
|P09|Sweep em três vítimas, incluindo aliado|Cada vítima elegível recebe uma aplicação; aliado não sofre CC/proc hostil se política bloquear|
|P10|Warmaster com marcador presente/ausente no alvo|Crítico condicional segue estado da vítima, não do caster|
|C01|CTDA `(A OR B) AND C` com quatro combinações|Tabela verdade correta; OR não ultrapassa grupo/aba|
|C02|Mesmo HasKeyword em aba de arma e aba de alvo|Usa records/contextos distintos; inverter atores muda resultado esperado|
|C03|Condition desconhecida negada ou comparada com 0|Retorna unsupported e bloqueia feature, não passa por falso default|
|C04|Comparação no limiar e imediatamente abaixo/acima|Operadores inclusivos/exclusivos preservados|
|C05|Alias válido, ausente e índice de package|Índice não vira FormKey; contexto ausente identificado pelo path|
|D01|Exemplo físico base 20/skill 50/armor 250/block 50|Resultado 14.625 sem crítico/mastery de Block, trace das etapas|
|D02|Mesmo caso com Block Mastery aplicável|Resultado 12.65625 no helper configurado|
|D03|Mesmo caso com itemMultiplier 0.7|Resultado 10.2375, penalidade aplicada uma vez|
|D04|CriticalBase 5 com mastery crítica e roll positivo|Componente 17.5 e final 21.45 no exemplo especificado|
|D05|Armadura 499.9/500/500.1/1000/1000.1|Curva contínua, cap preservado e valores finitos|
|D06|Payload de dano, chance ou multiplicador arbitrário|Valores não substituem providers autorizados|
|D07|Nativo e core habilitados acidentalmente|Teste detecta dupla aplicação e readiness impede release|
|M01|Fire 100, resistmagic 0.25, fire 0.4|Helper retorna 45; absorção testada separadamente|
|M02|Caps 0.85 e 0.85|Resultado 2.25 de 100, sem soma de resistências|
|M03|Spell com HP/Magicka/Stamina|Componentes debitados nos recursos corretos|
|M04|Mesmo castId reenviado antes/depois da resposta|Uma decisão de absorção e uma cadeia de procs|
|M05|Dois casters aplicam mesmo DoT|Stacking e autoria obedecem política específica, sem sobrescrita acidental|
|M06|RefreshDuration por segundo caster|Caracterizar preservação atual de magnitude/fonte; aprovar ou alterar contrato explicitamente|
|M07|UniqueSource com duas spells do mesmo caster|Detectar colisão atual por sourceActorId; fixture define comportamento desejado|
|M08|MaxN cheio com magnitudes/durações diferentes|Caracterizar remoção por ID mais antigo, não mais fraco|
|M09|Store 4096 e refresh/substituição|Caracterizar rejeição atual antes de substituição; não presumir atualização bem-sucedida|
|M10|nextTick 1000, Tick 3500, interval 1000|Um callback e nextTick 4500; expiry 3500 impede callback|
|M11|Save/Restore de efeito persistente|Provar IDs novos/fase reiniciada na baseline; migração futura precisa preservar contrato aprovado|
|M12|Concentração com disconnect, morte e recurso zero|Canal termina e nenhum pulso indevido continua após cancelamento|
|M13|Dispel por origem com buff idêntico de outra fonte|Remove somente instâncias elegíveis; nunca remove-all|
|M14|Enchantment em duas armas iguais|Charges e effects pertencem à instância correta|
|M15|Consumo de veneno/kit com timeout|Recovery retorna estado conhecido; nenhum débito/refund duplicado|
|N01|A/B acertam golpe letal no mesmo NPC|Uma transição de morte e uma premiação por destinatário elegível|
|N02|NPC respawna com mesma base|Nova generation pode premiar; replay da morte antiga não afeta nova vida|
|N03|Migrar host do NPC durante DoT|Host antigo perde autoridade; efeito não duplica nem desaparece sem regra|
|N04|Summon tenta atingir aliado do dono|Política de relação usa dono e impede bypass de PvP|
|N05|Projétil chega após fim de duelo|Revalidação de relação segue política aprovada; nada depende de ordem local de UI|
|X01|Party no limite 5000 e 5000.1|Primeiro elegível e segundo inelegível, se restante do contexto for válido|
|X02|Posição com NaN, infinita, array curto|Rejeitar antes da distância; detectar lacuna atual de validação local|
|X03|Membro online sem dano próprio e snapshot válido|Respeitar participationRequired=falseda configuração auditada|
|X04|Troca de party durante processamento de morte|Snapshot único determina recipients; sem duas distribuições|
|X05|Dois awards simultâneos no mesmo personagem|Nenhuma perda de update e cada ledgerKey uma vez|
|X06|Fadiga níveis 14/15 e fronteira 06:00|Ciclo e cap corretos com timezone configurado|
|X07|Level-up atravessa vários milestones|Cada grant uma vez, sem rank cumulativo acidental|
|R01|Crash antes/depois do commit de XP|Estado e receipt coerentes; outbox retoma sem duplicar award|
|R02|Reconnect durante comando econômico|Snapshot/receipt distingue confirmado, rejeitado e pending|
|R03|Dois commandIds iguais com payloads diferentes|Conflito explícito, nenhuma segunda mutação|
|R04|Rollback após XP/kit confirmados|Preserva journal ou entra manutenção; não restaura saldo antigo cegamente|
|U01|Delta fora de ordem ou sessão antiga|Rejeita/resync, sem regressão de revision|
|U02|Snapshot acima 16 KiBou array acima 256|Paginação/erro controlado, sem truncar silenciosamente grants|
|U03|Perk prevista porém unsupported|UI explica status e não promete efeito ativo|
|O01|Modlist/hash diferente entre clientes/servidor|Readiness bloqueia feature, exibe divergência concreta|
|O02|B02/B03/B04/B05 indisponíveis|Recursos dependentes permanecem off; nenhum fallback permissivo|
|O03|Carga crescente de efeitos/observadores|Medir memória, filas e tick; backpressure não perde operações econômicas|

## 9.4 Regra de aprovação

Cada perk candidata à primeira release precisa de pelo menos um caso positivo, um negativo por gate material, um caso de revogação, concorrência/retry e dois clientes. Efeitos econômicos acrescentam crash/recovery; CC/AI acrescentam host migration; AOE acrescenta múltiplos alvos/party; duração acrescenta expiração/reconnect. Uma dependência sem capacidade deixa o caso BLOCKED com motivo, sem converter para skip benigno na certificação.

Os [entry points](ENTRY_POINTS.md) acrescentam um teste específico para cada mecanismo observado. O checklist geral não substitui esses casos. A evidência de aprovação deve apontar para FormKey+hash, testId e resultado de runtime, e expirar quando a semântica do catálogo mudar.
