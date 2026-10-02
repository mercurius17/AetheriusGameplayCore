# 3. Conditions, contexto e avaliação

## 3.1 O que precisa viajar junto com uma CTDA

Uma condition não é apenas o nome de uma função. A unidade de interpretação inclui função, parâmetros tipados, operador de comparação, valor ou global de comparação, flags, RunOnType, referência/índice de RunOn, aliases/package data e posição no grupo. Em PERK há ainda `RunOnTabIndex`, que escolhe uma aba de contexto do entry point. A aba e o RunOn interno são eixos distintos.

As [fichas](PERK_INDEX.md) preservam essas informações em tabelas. O [índice de funções](PERK_CONDITIONS.md) cobre 83 funções observadas nas perks; a [auditoria geral](../audit/2026-10-02/CONDITION_SUPPORT.md) contém 178 funções no conjunto mais amplo de records, com escopo de extração diferente. Existir um handler na base Server não prova que o GameplayCore o chama com os mesmos parâmetros ou contexto.

## 3.2 AND/OR e comparação

O subconjunto de `PerkRegistry` acumula condições ligadas por `orNext` como disjunção e exige cada grupo encerrado como verdadeiro. A sequência `A OR B`, seguida por `C`, representa `(A ∨ B) ∧ C` nesse modelo. Não transformar a lista inteira em `any()` nem em `all()`. Um OR terminal é tratado pelo código atual como encerramento do grupo; a equivalência do compilador genérico com cada formato serializado precisa de fixture.

Exemplo booleano: `(arma tem keyword espada OU machado) E ator não tem perk substituta`. Espada sem perk substituta passa; machado com perk substituta falha; arco sem ambos os keywords falha. Verificar também grupos de uma condição, lista vazia, OR terminal e múltiplas abas. A lista vazia pode ter comportamento diferente de contexto ausente; o compilador não deve confundi-los.

Comparação numérica preserva `EqualTo`, `NotEqualTo`, `GreaterThan`, `GreaterThanOrEqualTo`, `LessThan` e `LessThanOrEqualTo` conforme observado. Testar fronteiras exatamente no limiar. Não reduzir `GetLevel >= 30` ou `GetActorValue < 0.5` a booleano. Comparação com global lê a global versionada do contexto correto, não converte o FormKey da global em número.

## 3.3 Fontes de contexto

|Família de condition|Entrada necessária|Armadilha multiplayer|Teste mínimo|
|---|---|---|---|
|HasPerk / HasSpell|Conjunto efetivo por origem e revisão do ator selecionado|Consultar só o caster quando a condition se refere à vítima|Trocar sujeitos e manter o restante igual|
|HasKeyword / WornHasKeyword|Record ou equipamento efetivamente selecionado; overlay de keywords|Misturar keywords do ator, arma e spell|Mesma arma em atores distintos; troca de slot|
|GetEquippedItemType|Mão/slot e classificação do equipamento|Dual wield não é uma flag livre do cliente|Duas armas, arma+escudo, mão vazia, troca durante ação|
|GetActorValue / GetBaseActorValue|AV corrente/base, unidade e derivação corretas|Confundir percentual com valor absoluto ou base com buff|AV base 100, máximo 150, corrente 75|
|HasMagicEffect / HasMagicEffectKeyword|Instâncias efetivas no alvo e instante escolhido|Record existir no catálogo não significa efeito ativo|Antes, durante e exatamente após expiração|
|GetIsID / GetIsReference|Base definition ou referência conforme a função|Usar local ID sem master ou confundir NPC base com spawn|Dois NPCs da mesma base e duas bases com local ID igual|
|GetInFaction / GetIsRace|Fato do ator correto e revisão|Usar facção local sem reconciliar override|Mudança temporária de facção e retorno|
|IsPowerAttacking / IsAttackType / IsBlocking|Estado do evento/host e janela temporal|Pacote autodeclarado permite bonus permanente|Ataque comum e power attack com mesmo dano base|
|GetDistance / posição / orientação|Mundo, instância, transforms autorizados e instante|Distância entre mundos ou posição atrasada|Fronteira de alcance e teleporte|
|Quest / stage / alias|Escopo pessoal, party ou mundo e resolvedor de alias|Usar quest local do observador para todos|Jogadores em estágios diferentes|
|Random / chance|RNG autoritativo associado ao evento|Nova chance a cada reenvio ou observador|Duplicata retorna o mesmo resultado|
|Detecção / furtividade / hostilidade|Contexto de percepção e relações do host|Cliente invisível visualmente não prova indetectabilidade|Dois observadores com percepções diferentes|

As famílias são orientação de projeto. Cada função concreta e sua sobrecarga ainda precisa ser registrada com parâmetros, unidade, sujeito e testes. Um nome parecido não autoriza reaproveitar o handler de outra função.

## 3.4 Modelo proposto de contexto

`ConditionContext` referencia evento, world instance, tick, caster, target, source item instance, spell, effect instance, catálogo e revisões de ator/equipamento/grants/efeitos. O resolvedor de cada entry point define suas abas. `RunOnType=Subject` é interpretado a partir dessa aba; não é sinônimo universal de “jogador local”.

Parâmetros FormLink são convertidos para chave estável. Parâmetros de alias, package e event são índices de contextos específicos e não FormIDs. O campo numérico `Parameter1.Index` que acompanha um Link pode refletir codificação interna de masters; usar o Link normalizado como identidade. Preserve os bytes opacos na evidência, mas não invente semântica para `Unknown1`/`Unknown2`.

## 3.5 Estado desconhecido não é false

Proposta: avaliação retorna `true`, `false` ou `unsupported(reason)`. Uma função não implementada, um alias ausente ou contexto não autorizado produz `unsupported`, e a feature dependente permanece bloqueada. Converter desconhecido para false pode quebrar condições negadas: `HasMagicEffect == 0` se tornaria verdadeira justamente quando não se sabe nada sobre os efeitos.

O registry reduzido atual retorna false para função desconhecida em `Matches`, mas `Load` rejeita funções fora das duas permitidas. Não extrapolar esse contrato para o interpretador geral. O compilador deve rejeitar antecipadamente definições sem cobertura, emitir path exato e impedir que o resultado seja tratado como suporte parcial silencioso.

## 3.6 Cache e invalidação

Cache de avaliação só é seguro quando sua chave inclui todas as dependências. Conditions estáticas de catálogo podem ser pré-compiladas; conditions de equipment/grants precisam da revisão correspondente; HP, distância, effects e animação normalmente exigem o snapshot do evento. Um cache por `perkKey + actorId` é insuficiente.

Ao trocar arma, vencer buff, alterar party, morrer, mudar world ou atualizar catálogo, invalidar apenas os caches dependentes, com chave/generation. Não fazer consulta ao banco a cada CTDA ou hit. O read model em memória deve ser coerente com o commit durável e expor revisão para diagnóstico.

## 3.7 Oráculos e fixture

Cada golden deve registrar FormKey, hash do winner/overlay, entry point, effect index, rank, aba, função, parâmetros, input completo e resultado esperado. Comparar engine e servidor quando houver capacidade de observação. Sem engine disponível, testes de unidade provam apenas o contrato proposto, e isso precisa constar no resultado.

Casos obrigatórios: condição verdadeira/falsa; fronteira numérica; OR final; duas abas usando o mesmo nome de função; sujeito e alvo invertidos; alias válido/inválido; efeito expirando no tick; catálogo incompatível; número não finito; referência removida; reenvio do evento; mesmo NPC base com instâncias diferentes. Reportar divergência por path, não só “perk não funcionou”.
