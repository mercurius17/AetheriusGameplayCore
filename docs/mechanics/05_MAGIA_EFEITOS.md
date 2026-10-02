# 5. Magia, active effects, enchantments e alquimia

## 5.1 A cadeia de definição

Uma PERK pode selecionar ou conceder uma SPEL; a SPEL contém effects com base MGEF, magnitude, área, duração e conditions. MGEF define archetype, AVs, resistências, flags, casting/target type e possíveis scripts/links. ENCH, ALCH e INGR reutilizam partes dessa estrutura, mas têm ciclo de vida, custos e origem diferentes. Não deduzir a mecânica só pelo nome da spell.

O [índice mágico](MAGIC_INDEX.md) contém 1.540 records alcançados por links das extrações de perks, incluindo links de conditions e cadeias indiretas. É um grafo do recorte disponível, não uma auditoria de todo código PEX/DLL. Uma dependência externa continua pendente mesmo quando nenhuma linha do record foi truncada.

## 5.2 Archetypes: contratos por família

|Família|Estado/ação necessária|Risco multiplayer|Liberação|
|---|---|---|---|
|ValueModifier / PeakValueModifier / DualValueModifier|AV correto, base/current/max e regra de stacking|Buff duplicado ou remoção de valor de outra origem|Composição e revogação por instância testadas|
|Absorb|Débito na vítima e crédito no beneficiário|Criar recurso sem debitá-lo, ou creditar atacante errado|Uma operação causal com resultado dos dois lados|
|Cloak / hazard|Emitter, posição, mundo, periodicidade e conjunto de alvos|Cada cliente criar seu próprio pulso de área|Owner único do emitter e pulseId por alvo|
|Summon / Reanimate / Command|Spawn identity, dono, limite, lifetime e AI|Duplicar entidade ou escapar de PvP pelo summon|Port autorizado de entidades e cleanup|
|Paralysis / Stagger / Disarm|Movimento, resistência, equipamento e duração|Estado visual divergir de input/combate|Port de CC/inventário; imunidades explícitas|
|Calm / Frenzy / Rally / Demoralize / TurnUndead|AI, hostilidade, level gate e duração|Host local alterar facções ou escolher vítima divergente|Contexto de AI/quest disponível e certificado|
|Invisibility / DetectLife / Light|Percepção e apresentação separadas|Invisibilidade visual interpretada como imunidade|Regras de detecção do host e projections adequadas|
|Bound / EnhanceWeapon|Item temporário, ownership e remoção|Item permanente duplicado ao reconectar|Instância e grant por fonte|
|Cure / dispel|Filtro de efeitos e origem|Remover todas as spells ou buffs inocentes|Filtro explícito e efeito idempotente|
|SoulTrap / Banish / Etherealize|Death credit, entidade, flags de interação|Duplicação econômica ou invulnerabilidade indevida|Contrato específico e teste end-to-end|
|SlowTime|Tempo de simulação, animação e custo|Um cliente desacelerar o mundo compartilhado|Política multiplayer própria; não assumir suporte|
|Script / SpawnScriptedRef / transformação|Código e lifecycle externos|Script local repetir side effects ou alterar identidade|Auditoria do script/DLL e port necessário|

A lista agrupa mecanismos; os 39 archetypes observados no inventário original permanecem em [MAGIC_SUPPORT](../audit/2026-10-02/MAGIC_SUPPORT.md). Nenhuma família é automaticamente suportada porque seus campos foram lidos.

## 5.3 O ActiveEffectStore que já existe

Fonte: [ActiveEffectStore.h](../../modules/damage-system/server/server/cpp/server_guest_lib/aetherius_combat/effects/ActiveEffectStore.h). Reutilizar esse store e o estado de combate existente no desenho da fachada ActorState; não criar um terceiro sistema de efeitos paralelo.

Uma instância atual registra effectKey, sourceForm, sourceActorId, magnitude, start/expires, intervalo/nextTick, stackingGroup, provenance, regra, maxStacks, persistent e concentration. O ID da instância é um contador local do store. As regras abaixo são comportamento observado do helper, não decisões finais para todos os mods.

|Regra|Comportamento atual|Consequência a decidir/testar|
|---|---|---|
|Coexist|Mantém as instâncias|A agregação posterior define como contribuem|
|Add|Também mantém instâncias; `Sum` soma magnitudes do grupo|O nome Add não acrescenta sozinho outra matemática diferente de Coexist|
|Strongest|Compara valor absoluto com a primeira instância; se a antiga é maior/igual, devolve seu ID; caso contrário remove as anteriores|Efeito fraco não renova duração; valor negativo de módulo maior também vence|
|Latest|Remove as instâncias anteriores do grupo e insere a nova|Último na ordem de commit, não timestamp livre do cliente|
|RefreshDuration|Estende expiry da primeira instância usando máximo; mantém magnitude e fonte antigas|Novo caster pode renovar efeito sem receber autoria; política de crédito precisa ser explícita|
|MaxN|Remove IDs mais antigos até abrir espaço|Não escolhe a menor magnitude nem a expiração mais próxima|
|UniqueSource|Remove instâncias com o mesmo sourceActorId|Não distingue sourceForm/provenance; duas spells do mesmo caster podem colidir|

Mesmo stackingGroup exige a mesma regra, ou Add lança erro. Grupo precisa incluir escopo adequado de mecânica e alvo; usar só nome visual junta efeitos incompatíveis. `Sum` não expira efeitos sozinho: o ciclo de atualização deve garantir expiração antes de leitura quando necessário.

## 5.4 Lacunas concretas do store

- A capacidade 4096 é verificada antes de refresh/substituição. Um grupo que poderia ser atualizado sem crescer pode ser rejeitado quando o store está cheio. Especificar e testar a política antes de corrigir; esta entrega só documenta.
- Save persiste somente `persistent && !concentration`. Não grava instanceId nem nextTick. Restore chama Add: novos IDs são gerados e o próximo pulso passa a ser `now + interval`.
- `sourceActorId` é uint 32 runtime no formato atual. Não é identidade durável suficiente após restart/remapeamento; proposta de migração precisa adicionar identidade estável da instância/ator e fencing.
- RefreshDuration preserva autoria antiga. UniqueSource identifica apenas ator. Ambos exigem decisão específica para crédito, dispel por fonte e múltiplos feitiços do mesmo caster.
- Strongest usa módulo da magnitude. Isso pode conflitar com grupos que misturem buff positivo e debuff negativo. Tais grupos devem ser separados ou possuir comparador explícito.
- Revision indica mutações do store, mas não substitui ID durável do evento nem transação com recursos/ledger.

Não afirmar que “persistência de effects já está pronta” apenas porque há Save/Restore. É preciso versionar a migração e provar recuperação com dois atores, mudanças de runtime IDs e eventos ainda em andamento.

## 5.5 Scheduler, tempo e concentração

O Tick expira primeiro os efeitos vencidos. Remove concentração quando `channelActive(sourceActorId)` retorna false. Para uma instância devida, executa no máximo um callback naquele Tick e move nextTick para `now + interval`; pulsos perdidos são descartados. Não há burst automático de todos os ticks atrasados. O scheduler usa weak_ptr e requer detach/limpeza do vínculo ao destruir ou desanexar atores.

Exemplo observado do algoritmo: intervalo 1000 ms, nextTick 1000, callback só ocorre em 3500. Ele executa um pulso em 3500 e agenda 4500; não executa três pulsos atrasados. Se expiry=3500, a expiração ocorre antes e nenhum pulso roda. Restore reinicia a fase do intervalo. Esses comportamentos devem ser aceitos explicitamente ou alterados em futura implementação, com testes de balanceamento.

Proposta: relógio monotônico para scheduling da sessão, timestamp durável/tempo restante com política clara para restart. Definir se duração corre offline por família. Concentração termina em disconnect, morte, cancelamento, troca incompatível de item ou falta de recurso conforme contrato; não restaurar concentração automaticamente ao login. Gasto de Magicka e aplicação do pulso precisam pertencer ao mesmo evento lógico.

## 5.6 Procs, DoT e stacking entre jogadores

Cada proc tem identidade derivada do evento pai, effect index, alvo e ordinal autorizado. Duplicar o packet não duplica o proc. Cada tick usa instância + sequência persistível/geração conforme política de recuperação; o instanceId local atual não basta para dedupe entre restarts.

Dois magos aplicando o mesmo DoT exigem política declarada: coexistem por caster, vence o mais forte, renova a duração ou compartilham teto? O record e seu comportamento observado devem orientar a escolha. Autoria, threat e XP seguem a contribuição realmente aplicada, não apenas o último personagem a clicar. Não usar uma regra global de stacking para todas as magias.

Para magnitude capturada no cast, buffs posteriores não alteram ticks existentes. Para magnitude live, o tick consulta providers e revisions e precisa definir como trata respec/morte/desconexão do caster. Ambas são políticas possíveis; cada família deve ter uma marcada e um teste. A default de rollout proposta é bloquear qualquer família sem essa definição.

## 5.7 Enchantments e venenos

Armadura encantada contribui enquanto a instância estiver equipada e suas conditions forem satisfeitas. Duas peças com a mesma base são duas instâncias, e remover uma não pode retirar o efeito da outra. Weapon enchant associa hit autorizado, arma instanciada, carga, effects e alvo. Débito de carga ocorre uma vez segundo política de hit/miss/resistência documentada. Não consumi-la no cliente e novamente no servidor.

Veneno aplicado a arma possui origem do consumível, doses e regras de proc. Dose não é propriedade universal do FormKey da arma: pertence à instância. Resistência, imunidade, aplicação em undead e efeitos de stamina/magicka dependem dos MGEFs reais. Sem port de inventário/charges transacional, B05 mantém essas features bloqueadas.

## 5.8 Alquimia, crafting e economia

Ingredientes expõem efeitos conhecidos/desconhecidos, mas a receita e o resultado econômico precisam de contrato próprio. Uma transação valida estação, acesso, skill/perks, ingredientes instanciados, quantidades, escolha de effects e resultado pinado no catálogo; reserva/debita uma vez e entrega uma vez. Desconexão entre débito e entrega requer recovery.

`ModAlchemyEffectiveness`, `ModPotionsCreated`, `PurifyAlchemyIngredients` e `ModInitialIngredientEffectsLearned` não são todos modificadores de dano. Alguns alteram magnitude, contagem ou conhecimento. Testar inventário e conhecimento, não só HP de um alvo. A UI só apresenta receitas disponíveis e estimativas derivadas; não é autoridade para enviar a potion final desejada.

## 5.9 Morte, dispel e limpeza

Cada definição deve declarar sobreviver à morte, expirar offline, persistir restart, remover ao desequipar, remover por cura/dispel e comportamento na troca de world. Limpeza deve operar por instância/fonte; nunca `remove all spells` como substituto de revogação. O Client baseline contém um caminho global de remoção/reaplicação de learnedSpells: B03 impede garantir esse invariante estrito nessa baseline, mesmo que o servidor componha grants corretamente.
