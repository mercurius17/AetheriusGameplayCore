# 1. Funcionamento das perks: do record ao resultado

## 1.1 Quatro coisas diferentes

Uma perk possui uma **definição** no catálogo, uma **concessão** a um ator, uma **avaliação** em determinado evento e um **resultado** aplicado. Esses quatro estados não são intercambiáveis. O record pode existir sem ter sido concedido; a concessão pode existir com conditions falsas; a condition pode passar localmente sem haver implementação autoritativa no servidor; uma animação pode aparecer mesmo que nenhum dano tenha sido confirmado.

Exemplo: conceder One-Handed Mastery deve criar um grant com origem, rank e identidade estável. No ataque, a implementação consulta a skill e os keywords da arma, verifica as conditions e calcula o multiplicador. O servidor aplica o resultado uma vez e projeta o estado. O cliente ter `HasPerk=true` é apenas uma parte dessa cadeia.

## 1.2 Anatomia e identidade

|Parte|Significado para esta implementação|
|---|---|
|Master original + local ID|Identidade persistível. O plugin que sobrescreve não passa a ser dono do FormID|
|EditorID e Name|Rótulos de pesquisa; não substituem identidade nem versão do conteúdo|
|Winner|Plugin cujo record vence a load order auditada; camada runtime posterior pode mudar o resultado|
|NumRanks / NextPerk|Metadados de progressão que exigem interpretação por cadeia; não somar automaticamente ranks diferentes|
|Level / Playable / Hidden / Trait|Metadados do record. Não constituem sozinhos autorização de classe ou regra econômica|
|Conditions do record|Condições do nível superior; distinguir seleção/elegibilidade das condições de cada effect na fixture do engine|
|Effects[n]|Entradas operacionais, cada uma com tipo, rank, prioridade, parâmetros e suas próprias conditions|
|VMAD / fragmentos|Possível execução por script. Ter os metadados não equivale a auditar ou executar o código do script|

Housecarl apresenta `0BABE4:Skyrim.esm`; o manifesto de combate usa `Skyrim.esm:0BABE4`. São representações distintas do mesmo par, não strings para comparar sem codec. O runtime ID inclui índices de carregamento; nunca gravá-lo como identidade durável de uma perk. Records light exigem codec específico. Um ator ou item instanciado precisa de identidade própria, além do FormKey de sua definição.

## 1.3 Principais formas de efeito

**Ability:** o effect aponta para uma SPEL, geralmente com seus próprios MGEFs e conditions. A perk pode conceder passivos, resistências ou scripts indiretos. Revogar a origem de classe não deve remover a mesma ability concedida por raça, quest, equipamento ou outro sistema. A união de fontes produz o conjunto efetivo.

**Entry point numérico:** uma operação atua em uma etapa específica, como dano de ataque, custo de magia ou armadura. `Multiply 1.1` significa um fator naquela etapa; não é “mais 1,1 de dano”, nem `1 + 1.1 × skill`. `Add 5`, `Set 5` e `Multiply 5` produzem resultados diferentes. Operações que usam Actor Value dependem do AV exato e da variante de Modification; não podem ser reduzidas a um percentual fixo.

**Seleção de spell:** um entry point pode disparar magia ao atingir, atacar, dar bash ou reanimar. O proc tem gatilho, receptor e cadeia de efeitos próprios. Aplicar uma spell uma vez por frame, por observador ou por retransmissão transforma uma única perk em várias execuções indevidas.

**Quest/ativação/interface:** efeitos podem alterar interação, texto ou estágio de quest. Uma autorização para apresentar uma opção não autoriza alterar inventário ou estado global. Quests locais, pessoais, de party e compartilhadas precisam de escopos distintos.

O [catálogo](PERK_INDEX.md) apresenta todas as entradas extraídas, não apenas as que parecem ligadas a combate. As [fichas mágicas](MAGIC_INDEX.md) permitem seguir as dependências disponíveis.

## 1.4 Ranks, seleção e composição

Preservar separadamente `grant.rank`, o `Rank` serializado de cada effect, `NumRanks`, a posição na cadeia NextPerk e o nome textual como “Mage Armor (2)”. O registro de combate atual valida apenas `grant.rank == 1`. Isso não autoriza converter todo `Effects[n].Rank=0` em “perk nível zero”, nem associar `(2)` ao segundo record com nome semelhante. A conversão exige fixture e identidade explícita.

Contrato proposto para concessões: cada fonte mantém sua contribuição; o resolvedor de grants produz um rank efetivo conforme a política da perk. Para progressão substitutiva, escolher o estágio mais alto validado; para efeitos realmente cumulativos, compor conforme o record. A escolha é por definição versionada, nunca “somar todos os ranks porque existem”. Remover a fonte A deve recalcular a união com B antes de alterar a projeção.

Preservar ordem de effects, `Priority`, abas e flags. Soma e multiplicação não comutam: `(100+20)×1,5=180`, mas `100×1,5+20=170`. Uma ordenação própria do servidor precisa ser explicitamente especificada e comparada ao comportamento alvo; o número da prioridade por si só não prova qual operação o engine executa primeiro em todos os entry points.

## 1.5 O subconjunto realmente presente no Damage

Fontes: [PerkRegistry.h](../../modules/damage-system/server/server/cpp/server_guest_lib/aetherius_combat/perks/PerkRegistry.h) e [verified-perks.json](../../modules/class-system/config/verified-perks.json).

O registry aceita cinco entry points: `CalculateWeaponDamage`, `ModAttackDamage`, `CalculateMyCriticalHitDamage`, `ModArmorRating` e `ModPercentBlocked`. Aceita somente conditions `HasPerk` e `HasKeyword`, com comparação booleana e `orNext`; calcula `1 + coefficient × Skill` e multiplica os handlers aplicáveis. Não implementa um interpretador genérico de PERK, CTDA, Set/Add/Multiply, quests ou procs.

|Mastery do manifesto|Entrada principal|Fator principal|Componente crítico adicional|
|---|---|---|---|
|One-Handed|CalculateWeaponDamage|`1 + 0,01 × OneHanded`|`1 + 0,05 × OneHanded` sobre criticalBase|
|Two-Handed|ModAttackDamage|`1 + 0,01 × TwoHanded`|`1 + 0,05 × TwoHanded` sobre criticalBase|
|Archery|CalculateWeaponDamage|`1 + 0,01 × Marksman`|`1 + 0,05 × Marksman` sobre criticalBase|
|Block|ModPercentBlocked|`1 + 0,005 × Block`|Não declarado|
|Heavy Armor|ModArmorRating|`1 + 0,01 × HeavyArmor`|Não declarado|
|Light Armor|ModArmorRating|`1 + 0,01 × LightArmor`|Não declarado|

Todas têm conditions próprias no manifesto, incluindo exclusão de outra perk; armas e armaduras também filtram keywords. Portanto, a tabela não afirma que o fator sempre se aplica. O manifesto foi verificado em epoch histórico diferente do snapshot atual: revalidar hashes e semântica antes de liberar. O registry aceitar o nome de um entry point não significa suportar todos os effects que o utilizam. `ModAttackDamage Multiply 1.1` do patch ADXP, por exemplo, não é representado fielmente pelo handler de mastery baseado em skill.

## 1.6 Patch Vokrii–ADXP: por que a descrição pode enganar

As comparações completas permanecem em [PATCH_REVIEW](../audit/2026-10-02/PATCH_REVIEW.md) e nos exports before/after da auditoria.

|Perk / chave Housecarl|Mudança observada|Consequência multiplayer|
|---|---|---|
|Sweep — `03AF9E:Skyrim.esm`|Remove restrições direcionais `IsAttackType`; mantém power attack; entradas SetSweepAttack, ModPowerAttackDamage e ApplyCombatHitSpell|Servidor precisa validar power attack, conjunto de vítimas e proc por vítima. Replicar animação não calcula dano de área|
|Dual Flurry 1 — `106256:Skyrim.esm`|Ability de velocidade substituída por `ModAttackDamage Multiply 1.1`, condicionado a equipamento|Não apresentar como aumento de velocidade sem verificar o winner; não aceitar multiplicador enviado pelo cliente|
|Dual Flurry 2 — `106257:Skyrim.esm`|Multiplicador 1.2 com gates de equipamento|Resolver rank e exclusão entre versões; evitar 1.1 × 1.2 por concessão cumulativa acidental|
|Warmaster — `4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`|Remove direção frontal; mantém power attack e condições de marcador no alvo; crítico condicional|Estado do marcador pertence à vítima autoritativa; dois atacantes não podem observar estados divergentes do mesmo alvo|
|Crater Maker — `4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`|Remove gate frontal; crítico e spell de knockdown condicionais|Derrubar visualmente não prova controle de movimento autoritativo; exigir port de CC e dedupe do proc|
|Disarming Slash — `4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`|Remove gate lateral; spell/disarm condicionado a power attack|Desarme exige ownership de equipamento/inventário e tratamento de NPC, jogador e item protegido|

Não inferir uma chance final apenas do texto da perk. Chance, marcador, duração e resistência podem estar em SPEL/MGEF e scripts ligados. A revisão identifica mudanças dos records; a reprodução em multiplayer ainda depende dos ports e dos testes descritos neste pacote.

## 1.7 Casos de concessão e revogação

1. Classe e quest concedem a mesma perk: duas origens, uma presença efetiva; remover classe preserva quest.
2. Perk temporária expira durante o ataque: o evento usa a revisão capturada no ponto de decisão definido, não uma mistura de estados antes/depois.
3. Respec enquanto há DoT: a instância registra a política de snapshot. Revogar a perk não deve retroativamente recriar todo dano anterior. Decidir explicitamente se ticks futuros usam magnitude capturada ou live.
4. Reconexão: reconstruir grants a partir dos fatos duráveis e conferir revisão, sem “dar tudo novamente” a cada login.
5. Mudança de modlist: suspender grants com identidade/semântica incompatível; não remapear por nome parecido.
6. NPC com perk nativa: não aplicar novamente a mesma contribuição em um segundo pipeline servidor. A matriz de ownership precisa cobrir NPCs também.

## 1.8 Definição de perk certificada

Uma perk só recebe esse status se sua identidade/rank e winner estiverem pinados, todos os efeitos relevantes estiverem extraídos, todas as conditions tiverem contexto e semântica testados, as dependências estiverem resolvidas e cada mutação tiver owner único. Também são necessários casos negativos, dois clientes, concorrência, reconexão e equivalência com o oráculo escolhido. “Extraída”, “mapeada”, “implementada em helper” e “certificada em runtime” devem continuar como estados separados.
