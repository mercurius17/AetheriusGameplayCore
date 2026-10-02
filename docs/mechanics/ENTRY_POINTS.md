# Entry points: contrato de cada entrada observada

71 valores distintos no snapshot ampliado. As descrições abaixo são a interpretação operacional e o contrato **proposto** para certificação; não atestam que todos os entry points estejam implementados no engine servidor. Operation, valor, conditions e abas reais estão nas fichas ligadas. Para o enum48a semântica permanece desconhecida.

O registry atual aceita cinco nomes, mas somente o formato reduzido das seis masteries históricas. Nenhuma outra entrada recebe suporte por semelhança de nome. Para cada linha: extrair → resolver contexto → definir owner → implementar operação exata → testar caso positivo/negativo/duplicata → homologar dois clientes.

## 48

- Ocorrências de effect: 2; perks distintas: 2.
- Papel a validar: Enum numérico sem nome resolvido.
- Contexto mínimo: schema/engine e fixture específicos.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: bloquear compilação até identificar semântica; não adivinhar por proximidade numérica. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`30034C:LostGrimoire.esp`](perks/PERKS_010.md#r-d656954f40f7), [`1041A9:Skyrim.esm`](perks/PERKS_023.md#r-9d466d4d792f).

## Activate

- Ocorrências de effect: 60; perks distintas: 33.
- Papel a validar: Interação de ativação.
- Contexto mínimo: objeto, opção, alcance e permissão.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: dois usuários ativam com exclusão/transação adequada. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000A4A:Artificer.esp`](perks/PERKS_001.md#r-3b8cc16df7c1), [`0009EE:ccQDRSSE001-SurvivalMode.esl`](perks/PERKS_005.md#r-7bc52384161e), [`33EB12:Curse of the Vampire.esp`](perks/PERKS_006.md#r-6a4fa10960c2), [`0CF02C:Skyrim.esm`](perks/PERKS_006.md#r-1e00c75c9e15), [`00D00A:Dawnguard.esm`](perks/PERKS_007.md#r-22920703b6be), [`008A6E:Dawnguard.esm`](perks/PERKS_007.md#r-31d884664ea3), [`008E3F:Dawnguard.esm`](perks/PERKS_007.md#r-c5e8a6a45e19), [`00588B:Dawnguard.esm`](perks/PERKS_007.md#r-d586b8adac61), [`00599A:Dawnguard.esm`](perks/PERKS_007.md#r-2aa139d565d6), [`02BA1D:Skyrim.esm`](perks/PERKS_007.md#r-64022d3dd017), [`01CDF0:Dragonborn.esm`](perks/PERKS_009.md#r-d79e68c0f0f2), [`000801:FirstPersonInteractions.esp`](perks/PERKS_009.md#r-f444520d7470), [`3147AC:LostGrimoire.esp`](perks/PERKS_010.md#r-9572b442cae9), [`44E863:LostGrimoire.esp`](perks/PERKS_011.md#r-1fb8a2b191d9), [`317213:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_013.md#r-7791c026feb0), [`3C753A:MysticismMagic.esp`](perks/PERKS_014.md#r-0aad24bd2fc7), [`3C7539:MysticismMagic.esp`](perks/PERKS_014.md#r-fe7d9859fa7b), [`3C7537:MysticismMagic.esp`](perks/PERKS_014.md#r-bbfc8e855bea), [`4B0646:MysticismMagic.esp`](perks/PERKS_014.md#r-e5e956feef47), [`3C7538:MysticismMagic.esp`](perks/PERKS_014.md#r-8dd737c322c4), [`381262:Pilgrim.esp`](perks/PERKS_016.md#r-45abe6e7b190), [`0008CD:SCSI-ACTbfco-Main.esp`](perks/PERKS_018.md#r-e0be3d3eed88), [`000872:Simple Fishing Overhaul.esp`](perks/PERKS_020.md#r-d10d6a68d82b), [`0E7326:Skyrim.esm`](perks/PERKS_022.md#r-7fb3078227b9), [`079AF5:Skyrim.esm`](perks/PERKS_042.md#r-7d173caed6b9), [`01C05B:Dragonborn.esm`](perks/PERKS_042.md#r-e1f9f892a784), [`0EE5C3:Skyrim.esm`](perks/PERKS_043.md#r-182af4ea4f8b), [`2750D5:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_053.md#r-5b063f2ef7aa), [`265D9A:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_054.md#r-0bd45e6cae15), [`265D9B:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_054.md#r-7711d3d52cc4), [`058209:Skyrim.esm`](perks/PERKS_054.md#r-ac4eaec05574), [`0D79A0:Skyrim.esm`](perks/PERKS_056.md#r-870d8d76c55a), [`2750D4:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-11478210a3de).

## AddLeveledListOnDeath

- Ocorrências de effect: 5; perks distintas: 5.
- Papel a validar: Inclusão de loot nivelado na morte.
- Contexto mínimo: death proof, lista, nível e RNG.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: respawn novo pode gerar loot; mesmo deathId não pode gerar novamente. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`00098F:Artificer.esp`](perks/PERKS_002.md#r-bba41e70f434), [`436C39:Curse of the Vampire.esp`](perks/PERKS_005.md#r-ecec4f3f694b), [`377049:Pilgrim.esp`](perks/PERKS_015.md#r-6faf4fd76a6b), [`2B1D25:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_051.md#r-d983532d1907), [`2B1D27:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_051.md#r-140aaee3c9c9).

## AllowMountActor

- Ocorrências de effect: 1; perks distintas: 1.
- Papel a validar: Permissão de montar ator.
- Contexto mínimo: montaria, usuário e estado de ocupação.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: dois jogadores não adquirem o mesmo assento simultaneamente. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`01CAEA:Dragonborn.esm`](perks/PERKS_009.md#r-e696048fc003).

## ApplyBashingSpell

- Ocorrências de effect: 10; perks distintas: 8.
- Papel a validar: Proc de spell em bash.
- Contexto mínimo: bash autorizado, origem e vítima.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: ataque normal com mesmo alvo não ativa o proc. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000926:Artificer.esp`](perks/PERKS_002.md#r-5ed046676880), [`10582A:Skyrim.esm`](perks/PERKS_003.md#r-2c3085d8836f), [`0106C0:LostGrimoire.esp`](perks/PERKS_010.md#r-830d4aaabd78), [`105A03:Skyrim.esm`](perks/PERKS_022.md#r-c1a7c0e1c228), [`2DF676:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_044.md#r-06f7e04c7b51), [`0FE304:Skyrim.esm`](perks/PERKS_045.md#r-440520bf3ecc), [`058F66:Skyrim.esm`](perks/PERKS_048.md#r-2cf209b48868), [`00A665:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_048.md#r-a7a4cf845c91).

## ApplyCombatHitSpell

- Ocorrências de effect: 219; perks distintas: 64.
- Papel a validar: Proc de spell ao atingir.
- Contexto mínimo: hit confirmado, source effect e vítima.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: duas mensagens do mesmo hit geram um proc por alvo autorizado. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`197020:Amber Guard.esp`](perks/PERKS_001.md#r-17ac49bb9a60), [`0C2FF4:Bandit War.esp`](perks/PERKS_003.md#r-c1f437db44c9), [`0C2FF5:Bandit War.esp`](perks/PERKS_003.md#r-79e5007ce335), [`0C2FF6:Bandit War.esp`](perks/PERKS_003.md#r-10ce7c413d5c), [`0C2FF7:Bandit War.esp`](perks/PERKS_003.md#r-7e20afb132e3), [`0C2FF8:Bandit War.esp`](perks/PERKS_003.md#r-9e58ee4d616e), [`10F154:Bandit War.esp`](perks/PERKS_003.md#r-5774f8530068), [`104BBF:Better Vampire NPCs.esp`](perks/PERKS_004.md#r-6fc6cb839d15), [`015CAE:Dawnguard.esm`](perks/PERKS_006.md#r-f6680160691d), [`000602:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-3d3c10e6de31), [`000890:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-40b8d56296f2), [`00088E:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-b7e30ea1ca96), [`000876:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-eef5f3d5b3e0), [`00087B:For Honor in Skyrim.esp`](perks/PERKS_009.md#r-18bc028e1715), [`2D7A8E:LostGrimoire.esp`](perks/PERKS_009.md#r-f90218221bf1), [`371F37:Pilgrim.esp`](perks/PERKS_015.md#r-1b02ed25c89a), [`000817:Reforged Directional Combat.esp`](perks/PERKS_018.md#r-de0c06c4f340), [`00082C:Reforged Directional Combat.esp`](perks/PERKS_018.md#r-bde3bd24653f), [`0008CD:SCSI-ACTbfco-Main.esp`](perks/PERKS_018.md#r-e0be3d3eed88), [`0519B7:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_020.md#r-58405e727480), [`08958E:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_020.md#r-e8031a54834c), [`1AA000:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_021.md#r-e3f28ff5f378), [`144BE6:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_021.md#r-b8a350491b46), [`109D7A:Skyrim.esm`](perks/PERKS_021.md#r-d727f11c469f), [`109D82:Skyrim.esm`](perks/PERKS_021.md#r-88c485fe121e), [`109D83:Skyrim.esm`](perks/PERKS_021.md#r-294a648a2869), [`109D84:Skyrim.esm`](perks/PERKS_021.md#r-309fce4f5cd4), [`109D85:Skyrim.esm`](perks/PERKS_021.md#r-a215f3fcb443), [`105F1A:Skyrim.esm`](perks/PERKS_024.md#r-4af5137becc7), [`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-23906c3e8f79), [`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-9b51dbe57adc), [`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-9a95556bea89), [`03AF9E:Skyrim.esm`](perks/PERKS_043.md#r-8acbece383e6), [`32142C:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-eb569a4e222b), [`219DC7:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-1fc72afa8b5e), [`058F64:Skyrim.esm`](perks/PERKS_044.md#r-3b9fa145ab76), [`2EE98B:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_044.md#r-74fb664a15a6), [`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_044.md#r-24f12cde8947), [`058F6E:Skyrim.esm`](perks/PERKS_044.md#r-241ffb6020c2), [`2290EE:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_044.md#r-ccae6894aa5e), [`05F592:Skyrim.esm`](perks/PERKS_044.md#r-afbd60a632b3), [`0C1E92:Skyrim.esm`](perks/PERKS_044.md#r-0bc7d54ef774), [`05F56F:Skyrim.esm`](perks/PERKS_044.md#r-1423d9a1ea0e), [`0C1E90:Skyrim.esm`](perks/PERKS_044.md#r-95b7bbb76408), [`03FFFA:Skyrim.esm`](perks/PERKS_044.md#r-7a8202fd1d10), [`0C3678:Skyrim.esm`](perks/PERKS_044.md#r-7ba378fc7bb7), [`353F1B:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_044.md#r-032d19a9a357), [`0C1E93:Skyrim.esm`](perks/PERKS_044.md#r-c87b239e2633), [`0C1E91:Skyrim.esm`](perks/PERKS_044.md#r-0357a69d30c1), [`0C3679:Skyrim.esm`](perks/PERKS_044.md#r-db5412e5d266), [`0C5C05:Skyrim.esm`](perks/PERKS_044.md#r-2be7772f707a), [`0C5C06:Skyrim.esm`](perks/PERKS_044.md#r-7947bd0ff676), [`03AF83:Skyrim.esm`](perks/PERKS_044.md#r-78c21eec94d2), [`0C1E94:Skyrim.esm`](perks/PERKS_044.md#r-a13403527975), [`03AF84:Skyrim.esm`](perks/PERKS_044.md#r-55231644c77c), [`0C1E96:Skyrim.esm`](perks/PERKS_044.md#r-0b1dbf7ddd3d), [`0C5C07:Skyrim.esm`](perks/PERKS_044.md#r-4f893631ca29), [`0C1E95:Skyrim.esm`](perks/PERKS_044.md#r-747eb81f3a41), [`0C1E97:Skyrim.esm`](perks/PERKS_044.md#r-c71dad8ae22b), [`2EE993:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_048.md#r-8cad25771d32), [`04D4E3:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_053.md#r-305a4eb73708), [`03AFA6:Skyrim.esm`](perks/PERKS_055.md#r-11685b8770e2), [`344BCB:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_055.md#r-2b8b395d7b7a), [`344BCE:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_059.md#r-86e3a4cf5171).

## ApplyReanimateSpell

- Ocorrências de effect: 3; perks distintas: 3.
- Papel a validar: Proc associado à reanimação.
- Contexto mínimo: cadáver, novo actor generation e owner.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: reanimação repetida não cria vários atores do mesmo cadáver. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`027328:Dragonborn.esm`](perks/PERKS_008.md#r-0f87b0a6208e), [`0581DE:Skyrim.esm`](perks/PERKS_049.md#r-a7117ab3202a), [`016436:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_049.md#r-4cc57948dfde).

## ApplySneakingSpell

- Ocorrências de effect: 3; perks distintas: 3.
- Papel a validar: Proc de spell associado a sneaking.
- Contexto mínimo: transição/estado validado e spell.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: tick visual de crouch não cria instância ilimitada. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`105874:Skyrim.esm`](perks/PERKS_024.md#r-15e45309f8e8), [`058214:Skyrim.esm`](perks/PERKS_058.md#r-ac3482fb1962), [`302DC4:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-578fe65cc186).

## ApplyWeaponSwingSpell

- Ocorrências de effect: 14; perks distintas: 14.
- Papel a validar: Proc ao balançar arma.
- Contexto mínimo: swing autorizado e alvo/contexto da entrada.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: miss pode diferir de hit; não reaplicar o mesmo proc também no hit sem regra. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`0142AC:Dawnguard.esm`](perks/PERKS_001.md#r-7cd026d81594), [`06127C:Better Vampire NPCs.esp`](perks/PERKS_004.md#r-e95a0d184f62), [`079EA9:Better Vampire NPCs.esp`](perks/PERKS_004.md#r-5c9c4a43a060), [`079EAA:Better Vampire NPCs.esp`](perks/PERKS_004.md#r-b83ba037aeb6), [`079EAB:Better Vampire NPCs.esp`](perks/PERKS_004.md#r-6a4948f2a033), [`079EAC:Better Vampire NPCs.esp`](perks/PERKS_004.md#r-c86b931768d3), [`0661B4:Better Vampire NPCs.esp`](perks/PERKS_004.md#r-cab97ded3aa4), [`079EA4:Better Vampire NPCs.esp`](perks/PERKS_004.md#r-a4a487ce9d6d), [`079EA5:Better Vampire NPCs.esp`](perks/PERKS_004.md#r-da9563ac3246), [`079EA6:Better Vampire NPCs.esp`](perks/PERKS_004.md#r-b80ed547121e), [`079EA7:Better Vampire NPCs.esp`](perks/PERKS_004.md#r-306b5ad50105), [`079EA8:Better Vampire NPCs.esp`](perks/PERKS_004.md#r-511f189d9daa), [`000810:DynamicBlockHit.esp`](perks/PERKS_009.md#r-bab5d3b9a2ca), [`0D8C33:Skyrim.esm`](perks/PERKS_048.md#r-102c473a28dd).

## CalculateMyCriticalHitChance

- Ocorrências de effect: 23; perks distintas: 23.
- Papel a validar: Chance crítica do atacante.
- Contexto mínimo: ataque, caster/target tabs e RNG.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: chance100condicional não vira crítico permanente fora do gate. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`0F5D2F:Skyrim.esm`](perks/PERKS_002.md#r-c49d75457b06), [`03BD06:Dragonborn.esm`](perks/PERKS_008.md#r-f7a032337441), [`000890:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-40b8d56296f2), [`00086E:Manbeast.esp`](perks/PERKS_011.md#r-bf4467a24fd7), [`38B4A1:Pilgrim.esp`](perks/PERKS_016.md#r-124a1625ef02), [`0E6805:Skyrim.esm`](perks/PERKS_023.md#r-3f9eaeb6abb1), [`0008DE:Vision of Skyrim II.esp`](perks/PERKS_043.md#r-bd02ba600a83), [`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-23906c3e8f79), [`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-9b51dbe57adc), [`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-9a95556bea89), [`219DC7:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-1fc72afa8b5e), [`2EE98B:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_044.md#r-74fb664a15a6), [`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_044.md#r-24f12cde8947), [`353F1B:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_044.md#r-032d19a9a357), [`0C1E93:Skyrim.esm`](perks/PERKS_044.md#r-c87b239e2633), [`0C1E91:Skyrim.esm`](perks/PERKS_044.md#r-0357a69d30c1), [`0C3679:Skyrim.esm`](perks/PERKS_044.md#r-db5412e5d266), [`0C5C07:Skyrim.esm`](perks/PERKS_044.md#r-4f893631ca29), [`0C1E95:Skyrim.esm`](perks/PERKS_044.md#r-747eb81f3a41), [`0C1E97:Skyrim.esm`](perks/PERKS_044.md#r-c71dad8ae22b), [`2DF672:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_048.md#r-8472fda89f19), [`03FD10:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-1456516ce933), [`35902A:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_059.md#r-101917a9ef4f).

## CalculateMyCriticalHitDamage

- Ocorrências de effect: 48; perks distintas: 38.
- Papel a validar: Componente de dano crítico.
- Contexto mínimo: arma criticalBase e perks do atacante.
- Estado no registry: nome aceito no subconjunto de mastery; operações arbitrárias continuam sem suporte.
- Teste específico: não multiplicar o dano inteiro quando o contrato usa componente aditivo. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`00086E:Manbeast.esp`](perks/PERKS_011.md#r-bf4467a24fd7), [`38B4A1:Pilgrim.esp`](perks/PERKS_016.md#r-124a1625ef02), [`4F335F:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-23906c3e8f79), [`4F3360:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-9b51dbe57adc), [`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-9a95556bea89), [`2EE98B:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_044.md#r-74fb664a15a6), [`219DCC:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_044.md#r-24f12cde8947), [`353F1B:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_044.md#r-032d19a9a357), [`0C1E93:Skyrim.esm`](perks/PERKS_044.md#r-c87b239e2633), [`0C1E91:Skyrim.esm`](perks/PERKS_044.md#r-0357a69d30c1), [`0C3679:Skyrim.esm`](perks/PERKS_044.md#r-db5412e5d266), [`0C5C07:Skyrim.esm`](perks/PERKS_044.md#r-4f893631ca29), [`0C1E95:Skyrim.esm`](perks/PERKS_044.md#r-747eb81f3a41), [`0C1E97:Skyrim.esm`](perks/PERKS_044.md#r-c71dad8ae22b), [`07934A:Skyrim.esm`](perks/PERKS_047.md#r-1fc3776b7556), [`07934B:Skyrim.esm`](perks/PERKS_047.md#r-d74cbd848cdd), [`07934D:Skyrim.esm`](perks/PERKS_047.md#r-c9c69aaab1f6), [`079354:Skyrim.esm`](perks/PERKS_047.md#r-3be8c482211c), [`0BABED:Skyrim.esm`](perks/PERKS_047.md#r-688f774412cf), [`2DF672:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_048.md#r-8472fda89f19), [`008037:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_052.md#r-7fa122992e3a), [`007AB8:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_054.md#r-e445910e1a6f), [`0BABE4:Skyrim.esm`](perks/PERKS_054.md#r-877bfe6db601), [`0CB406:Skyrim.esm`](perks/PERKS_055.md#r-4c4904b87f12), [`079343:Skyrim.esm`](perks/PERKS_055.md#r-4ac64b2763fe), [`079342:Skyrim.esm`](perks/PERKS_055.md#r-81ab7cc30d37), [`079344:Skyrim.esm`](perks/PERKS_055.md#r-30e1e580e69f), [`079345:Skyrim.esm`](perks/PERKS_055.md#r-926c6974af6d), [`0363D5:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-3b18a10023d3), [`03FD10:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-1456516ce933), [`302DB5:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-ecc86cd67e76), [`0BABE8:Skyrim.esm`](perks/PERKS_059.md#r-7135540a6e7e), [`0CB407:Skyrim.esm`](perks/PERKS_059.md#r-20952c101a80), [`079346:Skyrim.esm`](perks/PERKS_059.md#r-51bda6968d11), [`079347:Skyrim.esm`](perks/PERKS_059.md#r-caecd5c79f9c), [`079348:Skyrim.esm`](perks/PERKS_059.md#r-e0f9288264f0), [`079349:Skyrim.esm`](perks/PERKS_059.md#r-9246457afb50), [`35902A:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_059.md#r-101917a9ef4f).

## CalculateWeaponDamage

- Ocorrências de effect: 23; perks distintas: 18.
- Papel a validar: Base/etapa de dano da arma.
- Contexto mínimo: arma, keywords, skill e atacante.
- Estado no registry: nome aceito no subconjunto de mastery; operações arbitrárias continuam sem suporte.
- Teste específico: trocar arma invalida o provider e suas conditions. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`10FAED:Skyrim.esm`](perks/PERKS_021.md#r-097fc5f1a7b1), [`0727FB:Skyrim.esm`](perks/PERKS_024.md#r-0ffe01df374d), [`0F8308:Skyrim.esm`](perks/PERKS_042.md#r-ef0ef1af9add), [`000854:ccBGSSSE037-Curios.esl`](perks/PERKS_042.md#r-15b094451996), [`02648F:Dragonborn.esm`](perks/PERKS_042.md#r-76051e2a1e42), [`10D685:Skyrim.esm`](perks/PERKS_043.md#r-cc0571fe59b8), [`00D83A:Dawnguard.esm`](perks/PERKS_045.md#r-3a1689817635), [`07934A:Skyrim.esm`](perks/PERKS_047.md#r-1fc3776b7556), [`07934B:Skyrim.esm`](perks/PERKS_047.md#r-d74cbd848cdd), [`07934D:Skyrim.esm`](perks/PERKS_047.md#r-c9c69aaab1f6), [`079354:Skyrim.esm`](perks/PERKS_047.md#r-3be8c482211c), [`0BABED:Skyrim.esm`](perks/PERKS_047.md#r-688f774412cf), [`0BABE4:Skyrim.esm`](perks/PERKS_054.md#r-877bfe6db601), [`079343:Skyrim.esm`](perks/PERKS_055.md#r-4ac64b2763fe), [`079342:Skyrim.esm`](perks/PERKS_055.md#r-81ab7cc30d37), [`079344:Skyrim.esm`](perks/PERKS_055.md#r-30e1e580e69f), [`079345:Skyrim.esm`](perks/PERKS_055.md#r-926c6974af6d), [`0363D5:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-3b18a10023d3).

## CanDualCastSpell

- Ocorrências de effect: 5; perks distintas: 5.
- Papel a validar: Permissão de dual cast.
- Contexto mínimo: duas mãos, spell, perk e contexto.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: duas intenções de cast independentes não viram dual cast grátis. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`0153CD:Skyrim.esm`](perks/PERKS_046.md#r-7d161c732c87), [`0153CE:Skyrim.esm`](perks/PERKS_048.md#r-10211941cb7c), [`0153CF:Skyrim.esm`](perks/PERKS_049.md#r-ff4c1ab0c9ea), [`0153D0:Skyrim.esm`](perks/PERKS_052.md#r-dac0690b4b04), [`0153D1:Skyrim.esm`](perks/PERKS_056.md#r-80cde4c5d024).

## CanPickpocketEquippedItem

- Ocorrências de effect: 2; perks distintas: 2.
- Papel a validar: Permissão de furtar item equipado.
- Contexto mínimo: alvo, slot, item e permissão PvP/NPC.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: remoção/transação não duplica nem deixa equipment fantasma. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`058201:Skyrim.esm`](perks/PERKS_055.md#r-35ab4687c7e5), [`058205:Skyrim.esm`](perks/PERKS_056.md#r-7ef59ff7dfbc).

## FilterActivation

- Ocorrências de effect: 19; perks distintas: 11.
- Papel a validar: Filtro de opções de ativação.
- Contexto mínimo: ator, objeto, escolha e permissões.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: opção escondida na UI continua recusada no servidor se enviada manualmente. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`752EC9:Curse of the Vampire.esp`](perks/PERKS_005.md#r-afe8ea087c63), [`008A6E:Dawnguard.esm`](perks/PERKS_007.md#r-31d884664ea3), [`0110CF:Dawnguard.esm`](perks/PERKS_007.md#r-85239bfaff1e), [`02BA1D:Skyrim.esm`](perks/PERKS_007.md#r-64022d3dd017), [`01CDE7:Dragonborn.esm`](perks/PERKS_009.md#r-073a930c1a69), [`084F53:LostGrimoire.esp`](perks/PERKS_010.md#r-aee98b1506a9), [`30034C:LostGrimoire.esp`](perks/PERKS_010.md#r-d656954f40f7), [`30CFF4:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_013.md#r-444c2b97d839), [`0D55F7:Skyrim.esm`](perks/PERKS_023.md#r-834bb84ecbad), [`02A78F:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-e43ec4cf005f), [`0AEC05:Skyrim.esm`](perks/PERKS_043.md#r-5ab22ab98248).

## GetMaxCarryWeight

- Ocorrências de effect: 1; perks distintas: 1.
- Papel a validar: Limite de carga.
- Contexto mínimo: ator e grants/equipamento efetivos.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: revogar uma fonte preserva outra e recalcula encumbrance. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`3EFE24:Curse of the Vampire.esp`](perks/PERKS_005.md#r-c572c288809b).

## MakeLockpicksUnbreakable

- Ocorrências de effect: 1; perks distintas: 1.
- Papel a validar: Quebra de lockpick.
- Contexto mínimo: tentativa, resultado e inventário.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: falha preserva lockpick só sob conditions válidas. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`10F13F:Skyrim.esm`](perks/PERKS_024.md#r-5035244dacd0).

## ModAlchemyEffectiveness

- Ocorrências de effect: 14; perks distintas: 11.
- Papel a validar: Potência do resultado alquímico.
- Contexto mínimo: receita, skill, perks e efeitos válidos.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: a mesma receita gera o resultado previsto e consome ingredientes uma vez. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`0A725C:Skyrim.esm`](perks/PERKS_001.md#r-beb9e1f662ae), [`0CB06C:Apothecary.esp`](perks/PERKS_001.md#r-bc7abe2f1197), [`0BE127:Skyrim.esm`](perks/PERKS_045.md#r-b1410728bd58), [`058215:Skyrim.esm`](perks/PERKS_045.md#r-94485d41eb06), [`058216:Skyrim.esm`](perks/PERKS_045.md#r-20edad1b8553), [`058217:Skyrim.esm`](perks/PERKS_045.md#r-818f171703d2), [`0C07CA:Skyrim.esm`](perks/PERKS_045.md#r-f119186447b2), [`0C07CB:Skyrim.esm`](perks/PERKS_045.md#r-220bb89c334f), [`0C07CC:Skyrim.esm`](perks/PERKS_045.md#r-c4fdec31ca73), [`0C07CD:Skyrim.esm`](perks/PERKS_046.md#r-55727020f75d), [`3B9399:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-a02ca415f2ed).

## ModArmorRating

- Ocorrências de effect: 110; perks distintas: 46.
- Papel a validar: Rating de armadura.
- Contexto mínimo: peça, material/keywords, skill e defensor.
- Estado no registry: nome aceito no subconjunto de mastery; operações arbitrárias continuam sem suporte.
- Teste específico: somente peças elegíveis recebem fator; desequipar remove a contribuição correta. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`0008DD:Artificer.esp`](perks/PERKS_002.md#r-39093180b1ad), [`012BAD:Black Mage Armor SE.esp`](perks/PERKS_004.md#r-62b8b719a646), [`21BD61:ccBGSSSE025-AdvDSGS.esm`](perks/PERKS_004.md#r-7ddf7ce9f49e), [`21BD62:ccBGSSSE025-AdvDSGS.esm`](perks/PERKS_004.md#r-e97b6b0b6e04), [`0138C3:Dawnguard.esm`](perks/PERKS_007.md#r-4f432a8edd42), [`01ED99:Dragonborn.esm`](perks/PERKS_007.md#r-85728fc89d61), [`01DF9E:Dragonborn.esm`](perks/PERKS_008.md#r-84109c21be72), [`000606:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-03cf2d1f9204), [`00088E:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-b7e30ea1ca96), [`D696A9:MysticismMagic.esp`](perks/PERKS_014.md#r-f4449e9fae68), [`1B4204:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_020.md#r-d15844f49467), [`1C3510:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_020.md#r-70a6c1fa94be), [`109639:Skyrim.esm`](perks/PERKS_022.md#r-bba4d51b258e), [`045619:The Restless Dead.esp`](perks/PERKS_037.md#r-9e7606b62f2a), [`1CC95B:The Restless Dead.esp`](perks/PERKS_037.md#r-c9df69c18af7), [`045616:The Restless Dead.esp`](perks/PERKS_037.md#r-f28c2f2aab7a), [`1CC95C:The Restless Dead.esp`](perks/PERKS_037.md#r-f10abba10424), [`84D6FD:The Restless Dead.esp`](perks/PERKS_039.md#r-b885119244f5), [`84D6FE:The Restless Dead.esp`](perks/PERKS_039.md#r-f3d2982ad38c), [`0009D4:Update.esm`](perks/PERKS_043.md#r-10fb7d45c8b0), [`0008EC:Vision of Skyrim II.esp`](perks/PERKS_043.md#r-58dc6cde4323), [`00D83A:Dawnguard.esm`](perks/PERKS_045.md#r-3a1689817635), [`024109:Dragonborn.esm`](perks/PERKS_045.md#r-8c45b1a68b79), [`02410A:Dragonborn.esm`](perks/PERKS_045.md#r-c41ee84709b5), [`447041:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_048.md#r-ba74e923d0f6), [`0BCD2A:Skyrim.esm`](perks/PERKS_052.md#r-e5c842c53de9), [`058F6F:Skyrim.esm`](perks/PERKS_052.md#r-ae695847f9ff), [`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_052.md#r-1140a94a546f), [`107832:Skyrim.esm`](perks/PERKS_052.md#r-0014e312778a), [`07935E:Skyrim.esm`](perks/PERKS_052.md#r-832bed934179), [`079361:Skyrim.esm`](perks/PERKS_052.md#r-df6f364ed317), [`079362:Skyrim.esm`](perks/PERKS_052.md#r-be7697d95147), [`079374:Skyrim.esm`](perks/PERKS_052.md#r-a168f857ee19), [`0BE123:Skyrim.esm`](perks/PERKS_053.md#r-667a622e229c), [`051B1B:Skyrim.esm`](perks/PERKS_053.md#r-7ead22c8ed91), [`007AB5:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_053.md#r-d175b0dbe844), [`051B17:Skyrim.esm`](perks/PERKS_053.md#r-4df37ebaa825), [`079376:Skyrim.esm`](perks/PERKS_054.md#r-2bdf22914a87), [`079389:Skyrim.esm`](perks/PERKS_054.md#r-fa7657db2fa6), [`079391:Skyrim.esm`](perks/PERKS_054.md#r-a0ea006565cf), [`079392:Skyrim.esm`](perks/PERKS_054.md#r-595986451f33), [`3B9399:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-a02ca415f2ed), [`20AA8C:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-d96de031e924), [`00845D:waccf_armor and clothing extension.esp`](perks/PERKS_060.md#r-77d001ed1672), [`2ED98A:weapons armor clothing & clutter fixes.esp`](perks/PERKS_060.md#r-5a5e611f9dad), [`2ED989:weapons armor clothing & clutter fixes.esp`](perks/PERKS_060.md#r-1682c6c55687).

## ModArmorWeight

- Ocorrências de effect: 10; perks distintas: 4.
- Papel a validar: Peso efetivo da armadura.
- Contexto mínimo: itens equipados, inventário e perks.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: não alterar peso base global para outros jogadores. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`01BAC9:Skyrim.esm`](perks/PERKS_022.md#r-30b889e4bc8b), [`051B1A:Skyrim.esm`](perks/PERKS_024.md#r-9a24ce5f5b38), [`058F6D:Skyrim.esm`](perks/PERKS_052.md#r-60e407c3cdf7), [`051B1C:Skyrim.esm`](perks/PERKS_053.md#r-1924a322cde2).

## ModAttackDamage

- Ocorrências de effect: 272; perks distintas: 129.
- Papel a validar: Dano na etapa de ataque.
- Contexto mínimo: arma, atacante, tipo de ataque e operação exata.
- Estado no registry: nome aceito no subconjunto de mastery; operações arbitrárias continuam sem suporte.
- Teste específico: distinguir Multiply1.1 de1+coeficiente×skill. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`2025FE:Amber Guard.esp`](perks/PERKS_001.md#r-2654ef6711ab), [`0A725C:Skyrim.esm`](perks/PERKS_001.md#r-beb9e1f662ae), [`01E7F0:Dragonborn.esm`](perks/PERKS_001.md#r-1d65414ca5d8), [`146EAB:Bandit War.esp`](perks/PERKS_003.md#r-77954607b034), [`0C8102:Bandit War.esp`](perks/PERKS_003.md#r-85d8dc6fa620), [`146EAC:Bandit War.esp`](perks/PERKS_003.md#r-ee905201d85e), [`0C8133:Bandit War.esp`](perks/PERKS_003.md#r-ce3015559b43), [`146EAD:Bandit War.esp`](perks/PERKS_004.md#r-ce1ed4729abc), [`0C8134:Bandit War.esp`](perks/PERKS_004.md#r-456e00599823), [`10F156:Bandit War.esp`](perks/PERKS_004.md#r-3e8e1d85843b), [`067A7C:Bandit War.esp`](perks/PERKS_004.md#r-beeec507c1de), [`3EFE24:Curse of the Vampire.esp`](perks/PERKS_005.md#r-c572c288809b), [`015C62:Dawnguard.esm`](perks/PERKS_006.md#r-bfcfda466ed3), [`011CFA:Dawnguard.esm`](perks/PERKS_006.md#r-2370e4cfb2b3), [`01A170:Dawnguard.esm`](perks/PERKS_006.md#r-6fd5062f38ab), [`01A16F:Dawnguard.esm`](perks/PERKS_006.md#r-65c872a1d437), [`01A171:Dawnguard.esm`](perks/PERKS_006.md#r-eecef689b0df), [`01A172:Dawnguard.esm`](perks/PERKS_006.md#r-18beae127809), [`0177B4:Dragonborn.esm`](perks/PERKS_007.md#r-e39d3e62ad42), [`01DF8F:Dragonborn.esm`](perks/PERKS_008.md#r-e1d8f1aadb5b), [`03D5B4:Dragonborn.esm`](perks/PERKS_008.md#r-6cf51c5a57e3), [`03D5CD:Dragonborn.esm`](perks/PERKS_008.md#r-85cb898dbea4), [`01CDE7:Dragonborn.esm`](perks/PERKS_009.md#r-073a930c1a69), [`0008A6:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-07d7e4de32c9), [`000890:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-40b8d56296f2), [`00088E:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-b7e30ea1ca96), [`000876:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-eef5f3d5b3e0), [`14A8F3:LostGrimoire.esp`](perks/PERKS_009.md#r-0d5e58fcf6dd), [`0C6D19:LostGrimoire.esp`](perks/PERKS_010.md#r-93b7c7926e40), [`0DB167:LostGrimoire.esp`](perks/PERKS_010.md#r-1560189ada96), [`2FB22E:LostGrimoire.esp`](perks/PERKS_010.md#r-ab9e0bae2591), [`347298:LostGrimoire.esp`](perks/PERKS_011.md#r-2b5251cc1af7), [`0059A4:Dawnguard.esm`](perks/PERKS_012.md#r-3cf7d8c7d485), [`007A3F:Dawnguard.esm`](perks/PERKS_012.md#r-f5b083e6f9a3), [`D6E7AC:MysticismMagic.esp`](perks/PERKS_014.md#r-f95df15aa588), [`D6E7AE:MysticismMagic.esp`](perks/PERKS_014.md#r-da7b9e57c787), [`D7DAB3:MysticismMagic.esp`](perks/PERKS_014.md#r-a962369bd7f1), [`D696A7:MysticismMagic.esp`](perks/PERKS_014.md#r-cd736df9b087), [`B230C2:MysticismMagic.esp`](perks/PERKS_014.md#r-5c1acf0b6b5d), [`033708:MysticismMagic.esp`](perks/PERKS_014.md#r-e545c67f3c74), [`371F37:Pilgrim.esp`](perks/PERKS_015.md#r-1b02ed25c89a), [`36CE1B:Pilgrim.esp`](perks/PERKS_015.md#r-47df3aeadf3a), [`386392:Pilgrim.esp`](perks/PERKS_015.md#r-36f1488a3b1f), [`367CF6:Pilgrim.esp`](perks/PERKS_015.md#r-c3feac4e798c), [`05BB51:Pilgrim.esp`](perks/PERKS_016.md#r-cd65ac27e413), [`371F31:Pilgrim.esp`](perks/PERKS_016.md#r-a2ec57f20ee1), [`000873:PuddingFace_SimpleSpellsPackage.esp`](perks/PERKS_018.md#r-4cc9a263b5d5), [`000807:Reforged Directional Combat.esp`](perks/PERKS_018.md#r-21a3c127e52f), [`0008CD:SCSI-ACTbfco-Main.esp`](perks/PERKS_018.md#r-e0be3d3eed88), [`000835:Shadow Clone on Self.esp`](perks/PERKS_019.md#r-033a7dddbb3e), [`00082D:Shadow Clone on Self.esp`](perks/PERKS_019.md#r-be69984d6dbd), [`00082E:Shadow Clone on Self.esp`](perks/PERKS_019.md#r-c819d2559eb4), [`00082F:Shadow Clone on Self.esp`](perks/PERKS_019.md#r-34fb51e36695), [`000830:Shadow Clone on Self.esp`](perks/PERKS_019.md#r-34c8565abdd7), [`000831:Shadow Clone on Self.esp`](perks/PERKS_019.md#r-47c18a0f2c55), [`1046BD:Skyrim.esm`](perks/PERKS_020.md#r-ff8395224450), [`00AA02:Simply Stronger Dragons.esp`](perks/PERKS_020.md#r-69b7b3b5537f), [`0519FD:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_020.md#r-a8cc03a0c072), [`1C3510:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_020.md#r-70a6c1fa94be), [`0519B6:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_020.md#r-799376d1e92b), [`251153:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_020.md#r-e34c7eb87b81), [`10C041:Skyrim.esm`](perks/PERKS_021.md#r-a790c09bdeac), [`107E29:Skyrim.esm`](perks/PERKS_021.md#r-44c90cd08ee0), [`10EC8D:Skyrim.esm`](perks/PERKS_021.md#r-c0209cff108c), [`10BEA8:Skyrim.esm`](perks/PERKS_021.md#r-8075bfd511fe), [`0D2059:Skyrim.esm`](perks/PERKS_022.md#r-59df59d3ce74), [`109C1B:Skyrim.esm`](perks/PERKS_023.md#r-e7686936352e), [`05CEC0:Skyrim.esm`](perks/PERKS_023.md#r-65b484aabf04), [`10E001:Skyrim.esm`](perks/PERKS_023.md#r-d1de326c9ed3), [`10C708:Skyrim.esm`](perks/PERKS_023.md#r-8e17fc5d59e2), [`0F0833:Skyrim.esm`](perks/PERKS_023.md#r-cc2f6ce1535f), [`0E40C0:Skyrim.esm`](perks/PERKS_023.md#r-ae53082a41fe), [`ADA501:Update.esm`](perks/PERKS_035.md#r-8c7b6db8e07a), [`0CF788:Skyrim.esm`](perks/PERKS_035.md#r-a908eaba9cba), [`045617:The Restless Dead.esp`](perks/PERKS_036.md#r-cac211bfd995), [`1CC956:The Restless Dead.esp`](perks/PERKS_036.md#r-4561465b8bb9), [`045618:The Restless Dead.esp`](perks/PERKS_037.md#r-750fc8d2ce4f), [`1CC957:The Restless Dead.esp`](perks/PERKS_037.md#r-cbe5535f3527), [`04561A:The Restless Dead.esp`](perks/PERKS_037.md#r-5ca13869184b), [`1CC960:The Restless Dead.esp`](perks/PERKS_037.md#r-2ab2c60c0a11), [`84D6FB:The Restless Dead.esp`](perks/PERKS_038.md#r-483d97dcae2c), [`84D6FC:The Restless Dead.esp`](perks/PERKS_039.md#r-bbd83f897952), [`242737:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-146f529f2008), [`242738:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-c4993843bcae), [`395F0F:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-d6157711c401), [`2B6F30:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-57fcca83083d), [`10D1E1:Skyrim.esm`](perks/PERKS_042.md#r-5b33d817caad), [`103A8F:Skyrim.esm`](perks/PERKS_042.md#r-827fe6f13637), [`101075:Skyrim.esm`](perks/PERKS_042.md#r-aaf99485fbed), [`103A90:Skyrim.esm`](perks/PERKS_042.md#r-96f0b1ad6586), [`0FA2C5:Skyrim.esm`](perks/PERKS_042.md#r-ce47c9b867a0), [`103A91:Skyrim.esm`](perks/PERKS_042.md#r-3788432b113c), [`0FA2C4:Skyrim.esm`](perks/PERKS_042.md#r-1e0d8c3f72e4), [`103A92:Skyrim.esm`](perks/PERKS_042.md#r-ff00ffcbbdf0), [`0FA2C6:Skyrim.esm`](perks/PERKS_042.md#r-c4c8421e2312), [`101076:Skyrim.esm`](perks/PERKS_042.md#r-d0a9c7cfcc8b), [`10BF7D:Skyrim.esm`](perks/PERKS_042.md#r-5b92c7783904), [`10B1D9:Skyrim.esm`](perks/PERKS_042.md#r-3bc2776541cb), [`0008D2:Vision of Skyrim II.esp`](perks/PERKS_043.md#r-9e125f2390e2), [`106256:Skyrim.esm`](perks/PERKS_043.md#r-bcf919957d77), [`106257:Skyrim.esm`](perks/PERKS_043.md#r-29ee2123b118), [`058F6E:Skyrim.esm`](perks/PERKS_044.md#r-241ffb6020c2), [`03FFFA:Skyrim.esm`](perks/PERKS_044.md#r-7a8202fd1d10), [`0C3678:Skyrim.esm`](perks/PERKS_044.md#r-7ba378fc7bb7), [`0C3679:Skyrim.esm`](perks/PERKS_044.md#r-db5412e5d266), [`0C5C05:Skyrim.esm`](perks/PERKS_044.md#r-2be7772f707a), [`0C5C06:Skyrim.esm`](perks/PERKS_044.md#r-7947bd0ff676), [`0C5C07:Skyrim.esm`](perks/PERKS_044.md#r-4f893631ca29), [`27F2E3:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-9833d7f8f90d), [`105F1C:Skyrim.esm`](perks/PERKS_047.md#r-a9c05b2a19ac), [`105F1E:Skyrim.esm`](perks/PERKS_047.md#r-1955ae67639f), [`2EE983:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-f7ef46d065f8), [`2EE984:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-6060aa4a53ed), [`008037:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_052.md#r-7fa122992e3a), [`0085B8:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_053.md#r-93b3d5d9afc0), [`069031:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_053.md#r-4717e4f2c13b), [`007AB8:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_054.md#r-e445910e1a6f), [`004EFA:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_054.md#r-f2cf9958c487), [`004EFB:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_055.md#r-d01d4b850ef4), [`0CB406:Skyrim.esm`](perks/PERKS_055.md#r-4c4904b87f12), [`106258:Skyrim.esm`](perks/PERKS_055.md#r-2d9289b0a65e), [`004EFC:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_055.md#r-5b59fac7f0e6), [`3B9399:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-a02ca415f2ed), [`0BABE8:Skyrim.esm`](perks/PERKS_059.md#r-7135540a6e7e), [`0CB407:Skyrim.esm`](perks/PERKS_059.md#r-20952c101a80), [`079346:Skyrim.esm`](perks/PERKS_059.md#r-51bda6968d11), [`079347:Skyrim.esm`](perks/PERKS_059.md#r-caecd5c79f9c), [`079348:Skyrim.esm`](perks/PERKS_059.md#r-e0f9288264f0), [`079349:Skyrim.esm`](perks/PERKS_059.md#r-9246457afb50).

## ModBashingDamage

- Ocorrências de effect: 8; perks distintas: 7.
- Papel a validar: Dano de bash.
- Contexto mínimo: shield/weapon, atacante e vítima.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: fator de bash não se aplica a todos os ataques. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`3EFE24:Curse of the Vampire.esp`](perks/PERKS_005.md#r-c572c288809b), [`358982:Pilgrim.esp`](perks/PERKS_015.md#r-810089a802cc), [`33525A:Pilgrim.esp`](perks/PERKS_017.md#r-8128f10c60e5), [`ADA501:Update.esm`](perks/PERKS_035.md#r-8c7b6db8e07a), [`00D83A:Dawnguard.esm`](perks/PERKS_045.md#r-3a1689817635), [`05F594:Skyrim.esm`](perks/PERKS_048.md#r-b08049325512), [`223FE2:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_048.md#r-cdbc6b76e928).

## ModBowZoom

- Ocorrências de effect: 1; perks distintas: 1.
- Papel a validar: Zoom de mira.
- Contexto mínimo: equipamento e input/apresentação.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: zoom não aumenta alcance/dano autoritativo por acidente. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`058F61:Skyrim.esm`](perks/PERKS_047.md#r-f6e2b8a9afc7).

## ModBuyPrices

- Ocorrências de effect: 14; perks distintas: 14.
- Papel a validar: Preço de compra.
- Contexto mínimo: vendedor, comprador, item, relação e economia.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: preço mostrado e débito confirmado usam a mesma revisão. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000808:Aetherius.esp`](perks/PERKS_001.md#r-682f2ae52b5a), [`0A725C:Skyrim.esm`](perks/PERKS_001.md#r-beb9e1f662ae), [`01E7F1:Dragonborn.esm`](perks/PERKS_001.md#r-d69b64b15eed), [`01EEC7:Dragonborn.esm`](perks/PERKS_008.md#r-6b9426ef959c), [`10F9DB:Skyrim.esm`](perks/PERKS_022.md#r-9bfe2feec760), [`06BC37:Skyrim.esm`](perks/PERKS_022.md#r-b5fde1e2e3b8), [`0CF788:Skyrim.esm`](perks/PERKS_035.md#r-a908eaba9cba), [`3B9399:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-a02ca415f2ed), [`0BE128:Skyrim.esm`](perks/PERKS_058.md#r-2e60995d58fb), [`058F75:Skyrim.esm`](perks/PERKS_058.md#r-d7e406e04eda), [`0C07CE:Skyrim.esm`](perks/PERKS_059.md#r-440cc2c9a8b7), [`0C07CF:Skyrim.esm`](perks/PERKS_059.md#r-46318c05a154), [`0C07D0:Skyrim.esm`](perks/PERKS_059.md#r-2ebc26eea68b), [`0C07D1:Skyrim.esm`](perks/PERKS_059.md#r-09818018e5d6).

## ModCommandedActorLimit

- Ocorrências de effect: 25; perks distintas: 24.
- Papel a validar: Limite de entidades comandadas.
- Contexto mínimo: dono, summons/reanimações e lifetime.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: reconnect/migração não reinicia contador permitindo summons extras. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`00084B:Artificer.esp`](perks/PERKS_002.md#r-d78d793132fa), [`0008AF:ccvsvsse003-necroarts.esl`](perks/PERKS_005.md#r-52b78a227494), [`0008D1:ccvsvsse003-necroarts.esl`](perks/PERKS_005.md#r-8d89e1e1637d), [`0008D2:ccvsvsse003-necroarts.esl`](perks/PERKS_005.md#r-7dda4ebfb2fb), [`000957:ccvsvsse003-necroarts.esl`](perks/PERKS_005.md#r-6f34ed99d9a0), [`01A33C:Dawnguard.esm`](perks/PERKS_007.md#r-38c617661f53), [`029EE4:Dragonborn.esm`](perks/PERKS_008.md#r-13eec6dbe863), [`21C3D8:LostGrimoire.esp`](perks/PERKS_010.md#r-87b241f096e8), [`000823:Mundus.esp`](perks/PERKS_012.md#r-b4a25ef42293), [`371F40:Pilgrim.esp`](perks/PERKS_015.md#r-24459e112822), [`000874:PuddingFace_SimpleSpellsPackage.esp`](perks/PERKS_018.md#r-1c0b7d95c746), [`0009F7:PuddingFace_SimpleSpellsPackage.esp`](perks/PERKS_018.md#r-06eead9241cc), [`0519E4:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_020.md#r-152102d7a321), [`0DF733:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_021.md#r-10e23c4f38be), [`106092:Skyrim.esm`](perks/PERKS_022.md#r-6a5cb406c434), [`53C777:The Restless Dead.esp`](perks/PERKS_037.md#r-e222c34d4dd6), [`53C778:The Restless Dead.esp`](perks/PERKS_037.md#r-dc3f133e6e88), [`53C779:The Restless Dead.esp`](perks/PERKS_037.md#r-3142eaa38403), [`65819D:The Restless Dead.esp`](perks/PERKS_040.md#r-64030b92c361), [`D9AF68:The Restless Dead.esp`](perks/PERKS_040.md#r-4404480180d9), [`D9AF69:The Restless Dead.esp`](perks/PERKS_040.md#r-44596864f173), [`0133D1:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-b07317c6c0cd), [`02A78F:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-e43ec4cf005f), [`0D5F1C:Skyrim.esm`](perks/PERKS_049.md#r-764f367b62fa).

## ModDetectionLight

- Ocorrências de effect: 2; perks distintas: 2.
- Papel a validar: Contribuição de luz à detecção.
- Contexto mínimo: observador, alvo, iluminação e host.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: luz renderizada pelo cliente não fornece sozinha autoridade de stealth. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`30034C:LostGrimoire.esp`](perks/PERKS_010.md#r-d656954f40f7), [`1041A9:Skyrim.esm`](perks/PERKS_023.md#r-9d466d4d792f).

## ModDetectionSneakSkill

- Ocorrências de effect: 24; perks distintas: 22.
- Papel a validar: Skill usada na detecção furtiva.
- Contexto mínimo: ator percebido e observador.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: dois observadores mantêm percepções independentes. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`0A725C:Skyrim.esm`](perks/PERKS_001.md#r-beb9e1f662ae), [`30034C:LostGrimoire.esp`](perks/PERKS_010.md#r-d656954f40f7), [`000D62:LostGrimoire.esp`](perks/PERKS_010.md#r-a9d9c5b4956c), [`000812:Mundus.esp`](perks/PERKS_012.md#r-e85363960102), [`2CA220:MysticismMagic.esp`](perks/PERKS_013.md#r-0669fda73ce3), [`041937:ShadowSpellPackage.esp`](perks/PERKS_020.md#r-59a4e8042dda), [`04E653:ShadowSpellPackage.esp`](perks/PERKS_020.md#r-8648dd532efb), [`022106:ShadowSpellPackage.esp`](perks/PERKS_020.md#r-f214200972ea), [`01CAAF:ShadowSpellPackage.esp`](perks/PERKS_020.md#r-2009d8b40711), [`0CF788:Skyrim.esm`](perks/PERKS_035.md#r-a908eaba9cba), [`10F1EC:Skyrim.esm`](perks/PERKS_043.md#r-806c1f961b31), [`002F1E:Update.esm`](perks/PERKS_043.md#r-9f0076f9d489), [`0515BF:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_056.md#r-d1e15d180356), [`3B9399:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-a02ca415f2ed), [`0BE126:Skyrim.esm`](perks/PERKS_057.md#r-0e6c624bb101), [`302DB3:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-81185242a0da), [`302DBE:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-2b6b358afc0e), [`0C07C6:Skyrim.esm`](perks/PERKS_058.md#r-2a4cfa093dd8), [`0C07C7:Skyrim.esm`](perks/PERKS_058.md#r-99d436fc802d), [`0C07C8:Skyrim.esm`](perks/PERKS_058.md#r-21610883b5b1), [`0C07C9:Skyrim.esm`](perks/PERKS_058.md#r-26dd316a086f), [`302DB8:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-30bc75866165).

## ModEnchantmentPower

- Ocorrências de effect: 29; perks distintas: 12.
- Papel a validar: Potência do encantamento criado.
- Contexto mínimo: receita, alma, perks e item.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: resultado pinado e transação de criação consistente. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`0A725C:Skyrim.esm`](perks/PERKS_001.md#r-beb9e1f662ae), [`026233:Dragonborn.esm`](perks/PERKS_008.md#r-1e288e907728), [`08D801:Thaumaturgy.esp`](perks/PERKS_035.md#r-e2f03a861f1e), [`27F2E3:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-9833d7f8f90d), [`0BEE97:Skyrim.esm`](perks/PERKS_051.md#r-fc8b7575d9c1), [`058F7D:Skyrim.esm`](perks/PERKS_051.md#r-f03e3bcb1c9a), [`058F7E:Skyrim.esm`](perks/PERKS_051.md#r-05ff528a8a01), [`058F82:Skyrim.esm`](perks/PERKS_051.md#r-2a2d14558fda), [`0C367C:Skyrim.esm`](perks/PERKS_051.md#r-b8ab73be711c), [`0C367D:Skyrim.esm`](perks/PERKS_051.md#r-751fa8aed940), [`0C367E:Skyrim.esm`](perks/PERKS_051.md#r-fe263a2d3528), [`0C367F:Skyrim.esm`](perks/PERKS_051.md#r-0b8e97a81326).

## ModFallingDamage

- Ocorrências de effect: 19; perks distintas: 19.
- Papel a validar: Dano de queda.
- Contexto mínimo: queda e contato autorizados pelo host.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: repetição do evento de pouso não aplica outro dano. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000827:Aetherius.esp`](perks/PERKS_001.md#r-e4416bb17ed0), [`33EB18:Curse of the Vampire.esp`](perks/PERKS_005.md#r-35550dc4309f), [`29794E:Curse of the Vampire.esp`](perks/PERKS_006.md#r-40fc4e567474), [`29794F:Curse of the Vampire.esp`](perks/PERKS_006.md#r-bdf8cd612ad3), [`01E801:Dragonborn.esm`](perks/PERKS_008.md#r-9efeae2ccedf), [`07AD03:LostGrimoire.esp`](perks/PERKS_009.md#r-871c827c9301), [`30034C:LostGrimoire.esp`](perks/PERKS_010.md#r-d656954f40f7), [`2F610A:LostGrimoire.esp`](perks/PERKS_010.md#r-1568c7635598), [`00082A:Manbeast.esp`](perks/PERKS_012.md#r-96ce8f6eb043), [`000811:Mundus.esp`](perks/PERKS_013.md#r-3bec89f0064f), [`2977A0:MysticismMagic.esp`](perks/PERKS_014.md#r-cf8d394a46e1), [`33524B:Pilgrim.esp`](perks/PERKS_017.md#r-fbaff533262f), [`0008A1:PuddingFace_SimpleSpellsPackage.esp`](perks/PERKS_018.md#r-2d96f55a875f), [`00098C:PuddingFace_SimpleSpellsPackage.esp`](perks/PERKS_018.md#r-2faf121e8fde), [`00098B:PuddingFace_SimpleSpellsPackage.esp`](perks/PERKS_018.md#r-54faafdbece6), [`0CA565:Thaumaturgy.esp`](perks/PERKS_035.md#r-bd0d5600f924), [`0BCD2B:Skyrim.esm`](perks/PERKS_052.md#r-a20f4ca06339), [`008029:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_052.md#r-da25e48b436c), [`00081F:WizardingTraversal.esl`](perks/PERKS_060.md#r-957cf4af2da2).

## ModIncomingDamage

- Ocorrências de effect: 104; perks distintas: 74.
- Papel a validar: Dano recebido.
- Contexto mínimo: vítima, tipo de evento e componentes.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: redução entra uma vez e não se repete no nativo e no core. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000805:Aetherius.esp`](perks/PERKS_001.md#r-f8cbd87e07d2), [`0A725C:Skyrim.esm`](perks/PERKS_001.md#r-beb9e1f662ae), [`027330:Dragonborn.esm`](perks/PERKS_001.md#r-a4d413b9fa4b), [`03399F:Dragonborn.esm`](perks/PERKS_001.md#r-8790bfe98653), [`0008DB:Artificer.esp`](perks/PERKS_002.md#r-44b8fc472dab), [`067A7C:Bandit War.esp`](perks/PERKS_004.md#r-beeec507c1de), [`29794E:Curse of the Vampire.esp`](perks/PERKS_006.md#r-40fc4e567474), [`29794F:Curse of the Vampire.esp`](perks/PERKS_006.md#r-bdf8cd612ad3), [`00FB02:Curse of the Vampire.esp`](perks/PERKS_006.md#r-089648b93136), [`03CA73:Dragonborn.esm`](perks/PERKS_007.md#r-f8ddb32be97d), [`01ED99:Dragonborn.esm`](perks/PERKS_007.md#r-85728fc89d61), [`01E7FE:Dragonborn.esm`](perks/PERKS_007.md#r-d6519889500c), [`01DF9E:Dragonborn.esm`](perks/PERKS_008.md#r-84109c21be72), [`000876:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-eef5f3d5b3e0), [`10DC78:LostGrimoire.esp`](perks/PERKS_010.md#r-695ef17dcb59), [`2F610A:LostGrimoire.esp`](perks/PERKS_010.md#r-1568c7635598), [`00080E:Manbeast.esp`](perks/PERKS_011.md#r-389f00544c12), [`00089E:Manbeast.esp`](perks/PERKS_012.md#r-dd8af331eea2), [`000808:Mundus.esp`](perks/PERKS_012.md#r-8b8f3c51fd04), [`00080D:Mundus.esp`](perks/PERKS_013.md#r-06391d8187aa), [`307EE0:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_013.md#r-5d66b9fb4b00), [`386392:Pilgrim.esp`](perks/PERKS_015.md#r-36f1488a3b1f), [`367CF6:Pilgrim.esp`](perks/PERKS_015.md#r-c3feac4e798c), [`075073:Pilgrim.esp`](perks/PERKS_016.md#r-8f7475d5fe37), [`05BB51:Pilgrim.esp`](perks/PERKS_016.md#r-cd65ac27e413), [`35DAC4:Pilgrim.esp`](perks/PERKS_016.md#r-51b03963874b), [`335253:Pilgrim.esp`](perks/PERKS_017.md#r-fb5e599eaacd), [`07A17F:Pilgrim.esp`](perks/PERKS_017.md#r-f17c48192153), [`35DAA6:Pilgrim.esp`](perks/PERKS_017.md#r-06e6f6cc15cf), [`000872:PuddingFace_SimpleSpellsPackage.esp`](perks/PERKS_018.md#r-cd8b32183990), [`000993:PuddingFace_SimpleSpellsPackage.esp`](perks/PERKS_018.md#r-a06b8f3b1253), [`000807:Reforged Directional Combat.esp`](perks/PERKS_018.md#r-21a3c127e52f), [`01CAAF:ShadowSpellPackage.esp`](perks/PERKS_020.md#r-2009d8b40711), [`1046BD:Skyrim.esm`](perks/PERKS_020.md#r-ff8395224450), [`0519B6:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_020.md#r-799376d1e92b), [`109D0D:Skyrim.esm`](perks/PERKS_021.md#r-8b5485d58fae), [`109639:Skyrim.esm`](perks/PERKS_022.md#r-bba4d51b258e), [`0D205B:Skyrim.esm`](perks/PERKS_022.md#r-ec8e0b8b3ad2), [`0EB24A:Skyrim.esm`](perks/PERKS_022.md#r-e300fceae469), [`05CEBE:Skyrim.esm`](perks/PERKS_023.md#r-6ebd85e7579a), [`0E863F:Skyrim.esm`](perks/PERKS_023.md#r-c40ad342d977), [`0E997B:Skyrim.esm`](perks/PERKS_023.md#r-d124baa9ef8d), [`0F5FF9:Skyrim.esm`](perks/PERKS_023.md#r-91aa08433206), [`1069BB:Skyrim.esm`](perks/PERKS_023.md#r-c1b22c7ce5ba), [`0E40C0:Skyrim.esm`](perks/PERKS_023.md#r-ae53082a41fe), [`ADA501:Update.esm`](perks/PERKS_035.md#r-8c7b6db8e07a), [`0CF788:Skyrim.esm`](perks/PERKS_035.md#r-a908eaba9cba), [`53C777:The Restless Dead.esp`](perks/PERKS_037.md#r-e222c34d4dd6), [`53C778:The Restless Dead.esp`](perks/PERKS_037.md#r-dc3f133e6e88), [`53C779:The Restless Dead.esp`](perks/PERKS_037.md#r-3142eaa38403), [`DA0071:The Restless Dead.esp`](perks/PERKS_039.md#r-5c05ce15d68c), [`DA0072:The Restless Dead.esp`](perks/PERKS_039.md#r-86eaccac0cdd), [`DA0073:The Restless Dead.esp`](perks/PERKS_039.md#r-34edf6006894), [`6BD5EE:The Restless Dead.esp`](perks/PERKS_041.md#r-bc9474a42c91), [`242738:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-c4993843bcae), [`181F3A:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-15c92ae9924f), [`3B4566:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-0100daf146f6), [`000822:UltimateEbonyWarrior.esp`](perks/PERKS_041.md#r-80c8132935be), [`00080C:UltimateEbonyWarrior.esp`](perks/PERKS_042.md#r-4f1ee13f1bcb), [`107E2C:Skyrim.esm`](perks/PERKS_043.md#r-7796b6dcab08), [`00D83A:Dawnguard.esm`](perks/PERKS_045.md#r-3a1689817635), [`01B591:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_046.md#r-d8a682a088b9), [`01BB2F:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-82df282ba98d), [`39AD7B:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-875db187525b), [`058F68:Skyrim.esm`](perks/PERKS_048.md#r-3782237bd6a1), [`3EBDC2:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_051.md#r-05b3bd813ee3), [`2C1037:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_052.md#r-7379d83c0efd), [`058F6C:Skyrim.esm`](perks/PERKS_052.md#r-3555a901d26d), [`2C103E:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_052.md#r-5c4906367497), [`669E8E:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_053.md#r-a1eb13d8a9ac), [`344BC9:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_055.md#r-82089f5f3b5e), [`2BBF34:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_056.md#r-3e924e19b60d), [`35E12F:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_056.md#r-6f1b672f0c61), [`00ECC6:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_059.md#r-db45b2c50982).

## ModIncomingSpellDuration

- Ocorrências de effect: 4; perks distintas: 4.
- Papel a validar: Duração recebida pelo alvo.
- Contexto mínimo: vítima, spell/effect e resistências/conditions.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: duração do alvoA não é reutilizada para alvoB. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`283501:Curse of the Vampire.esp`](perks/PERKS_006.md#r-fe9360b01a11), [`2F610A:LostGrimoire.esp`](perks/PERKS_010.md#r-1568c7635598), [`000872:PuddingFace_SimpleSpellsPackage.esp`](perks/PERKS_018.md#r-cd8b32183990), [`0B2846:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_056.md#r-b984f15d89b0).

## ModIncomingSpellMagnitude

- Ocorrências de effect: 48; perks distintas: 34.
- Papel a validar: Magnitude recebida pelo alvo.
- Contexto mínimo: vítima, spell, MGEF e conditions de recepção.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: trocar apenas a vítima altera somente o componente elegível. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000806:Aetherius.esp`](perks/PERKS_001.md#r-0f1c3e7b79ff), [`000805:Aetherius.esp`](perks/PERKS_001.md#r-f8cbd87e07d2), [`03399F:Dragonborn.esm`](perks/PERKS_001.md#r-8790bfe98653), [`0008DB:Artificer.esp`](perks/PERKS_002.md#r-44b8fc472dab), [`067A7C:Bandit War.esp`](perks/PERKS_004.md#r-beeec507c1de), [`283501:Curse of the Vampire.esp`](perks/PERKS_006.md#r-fe9360b01a11), [`283500:Curse of the Vampire.esp`](perks/PERKS_006.md#r-3e97ee694bc9), [`014CCE:Dawnguard.esm`](perks/PERKS_007.md#r-7b87d99b9247), [`01E7F6:Dragonborn.esm`](perks/PERKS_007.md#r-7cf3108d02cf), [`01E7FE:Dragonborn.esm`](perks/PERKS_007.md#r-d6519889500c), [`03D597:Dragonborn.esm`](perks/PERKS_008.md#r-184cc459a8f7), [`10DC78:LostGrimoire.esp`](perks/PERKS_010.md#r-695ef17dcb59), [`2F610A:LostGrimoire.esp`](perks/PERKS_010.md#r-1568c7635598), [`00080E:Manbeast.esp`](perks/PERKS_011.md#r-389f00544c12), [`00089E:Manbeast.esp`](perks/PERKS_012.md#r-dd8af331eea2), [`000808:Mundus.esp`](perks/PERKS_012.md#r-8b8f3c51fd04), [`00081A:Mundus.esp`](perks/PERKS_013.md#r-c4b0baaf5231), [`00080D:Mundus.esp`](perks/PERKS_013.md#r-06391d8187aa), [`371F37:Pilgrim.esp`](perks/PERKS_015.md#r-1b02ed25c89a), [`386392:Pilgrim.esp`](perks/PERKS_015.md#r-36f1488a3b1f), [`38B4A1:Pilgrim.esp`](perks/PERKS_016.md#r-124a1625ef02), [`05BB51:Pilgrim.esp`](perks/PERKS_016.md#r-cd65ac27e413), [`358986:Pilgrim.esp`](perks/PERKS_017.md#r-f4676c47e7a7), [`07A17F:Pilgrim.esp`](perks/PERKS_017.md#r-f17c48192153), [`35DAA6:Pilgrim.esp`](perks/PERKS_017.md#r-06e6f6cc15cf), [`000872:PuddingFace_SimpleSpellsPackage.esp`](perks/PERKS_018.md#r-cd8b32183990), [`0E5F4F:Skyrim.esm`](perks/PERKS_021.md#r-7c6570fea9e7), [`0EB24A:Skyrim.esm`](perks/PERKS_022.md#r-e300fceae469), [`ADA501:Update.esm`](perks/PERKS_035.md#r-8c7b6db8e07a), [`3B4566:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-0100daf146f6), [`00D83A:Dawnguard.esm`](perks/PERKS_045.md#r-3a1689817635), [`058F69:Skyrim.esm`](perks/PERKS_048.md#r-69e2186a0e06), [`2C1039:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_052.md#r-0d135dc6061c), [`0B2846:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_056.md#r-b984f15d89b0).

## ModIncomingStagger

- Ocorrências de effect: 16; perks distintas: 14.
- Papel a validar: Stagger recebido.
- Contexto mínimo: defensor, evento, resistência e movimento.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: imunidade/escala é consistente para vítima e observadores. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000606:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-03cf2d1f9204), [`00088D:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-7f6b537ff425), [`00088E:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-b7e30ea1ca96), [`000876:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-eef5f3d5b3e0), [`4C4AA8:MysticismMagic.esp`](perks/PERKS_014.md#r-53db060bd048), [`000872:PuddingFace_SimpleSpellsPackage.esp`](perks/PERKS_018.md#r-cd8b32183990), [`0E8279:Skyrim.esm`](perks/PERKS_023.md#r-8f276be66392), [`ADA501:Update.esm`](perks/PERKS_035.md#r-8c7b6db8e07a), [`000822:UltimateEbonyWarrior.esp`](perks/PERKS_041.md#r-80c8132935be), [`00080C:UltimateEbonyWarrior.esp`](perks/PERKS_042.md#r-4f1ee13f1bcb), [`39AD7B:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-875db187525b), [`105F1F:Skyrim.esm`](perks/PERKS_048.md#r-e42af08431bf), [`2DF673:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_048.md#r-506910fd68e3), [`03AFA7:Skyrim.esm`](perks/PERKS_059.md#r-59b1c8983334).

## ModIngredientsHarvested

- Ocorrências de effect: 2; perks distintas: 2.
- Papel a validar: Quantidade obtida em colheita.
- Contexto mínimo: ativação, planta instanciada, inventário e cooldown.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: dois jogadores colhendo a mesma planta não recebem duplicação indevida. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000808:Aetherius.esp`](perks/PERKS_001.md#r-682f2ae52b5a), [`105F2E:Skyrim.esm`](perks/PERKS_045.md#r-e496f669e808).

## ModInitialIngredientEffectsLearned

- Ocorrências de effect: 1; perks distintas: 1.
- Papel a validar: Conhecimento inicial de effects do ingrediente.
- Contexto mínimo: personagem, ingrediente e ação de descoberta.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: aprender efeito é persistente e não concede item extra. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`058218:Skyrim.esm`](perks/PERKS_045.md#r-d5ba2678d20f).

## ModLockpickSweetSpot

- Ocorrências de effect: 15; perks distintas: 15.
- Papel a validar: Janela de sucesso do lockpick.
- Contexto mínimo: fechadura, tentativa e perks.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: cliente não declara abertura só porque ampliou a janela visual. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`0A725C:Skyrim.esm`](perks/PERKS_001.md#r-beb9e1f662ae), [`0C5BFB:Skyrim.esm`](perks/PERKS_022.md#r-f9bd2a399ce6), [`0C5BFC:Skyrim.esm`](perks/PERKS_022.md#r-536444576146), [`0C5BFD:Skyrim.esm`](perks/PERKS_022.md#r-60a3d76682b1), [`0C5BFE:Skyrim.esm`](perks/PERKS_022.md#r-b94c1648cede), [`0C5BFF:Skyrim.esm`](perks/PERKS_022.md#r-e021a1697c7b), [`ADA501:Update.esm`](perks/PERKS_035.md#r-8c7b6db8e07a), [`0CF788:Skyrim.esm`](perks/PERKS_035.md#r-a908eaba9cba), [`0F392A:Skyrim.esm`](perks/PERKS_054.md#r-fef4c842d0fc), [`058209:Skyrim.esm`](perks/PERKS_054.md#r-ac4eaec05574), [`0BE125:Skyrim.esm`](perks/PERKS_054.md#r-f5abac2d853e), [`0C3680:Skyrim.esm`](perks/PERKS_054.md#r-beae1fc27b82), [`0C3681:Skyrim.esm`](perks/PERKS_054.md#r-c96ef0b02d6d), [`0C3682:Skyrim.esm`](perks/PERKS_054.md#r-1ad9a2123f1b), [`3B9399:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-a02ca415f2ed).

## ModLockpickingCrimeChance

- Ocorrências de effect: 1; perks distintas: 1.
- Papel a validar: Chance de crime no lockpicking.
- Contexto mínimo: tentativa, propriedade, testemunhas e RNG.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: crime tem escopo correto e não depende só da câmera local. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`106259:Skyrim.esm`](perks/PERKS_054.md#r-dbfb26f1d836).

## ModLockpickingKeyRewardChance

- Ocorrências de effect: 1; perks distintas: 1.
- Papel a validar: Chance de recompensa de chave.
- Contexto mínimo: fechadura, tentativa e inventário.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: uma abertura não cria chave a cada reconexão. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`107830:Skyrim.esm`](perks/PERKS_054.md#r-f6cf55d6ccb0).

## ModNumAppliedEnchantmentsAllowed

- Ocorrências de effect: 1; perks distintas: 1.
- Papel a validar: Limite de enchantments por item.
- Contexto mínimo: receita, item e perks.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: UI não envia terceiro enchant acima do limite autorizado. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`058F7F:Skyrim.esm`](perks/PERKS_051.md#r-0fd1d0b336c5).

## ModPercentBlocked

- Ocorrências de effect: 23; perks distintas: 14.
- Papel a validar: Fração de dano bloqueada.
- Contexto mínimo: defensor e janela/orientação de block.
- Estado no registry: nome aceito no subconjunto de mastery; operações arbitrárias continuam sem suporte.
- Teste específico: cap aplicado depois do fator; ataque por trás não ganha block indevido. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`0A725C:Skyrim.esm`](perks/PERKS_001.md#r-beb9e1f662ae), [`000606:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-03cf2d1f9204), [`000890:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-40b8d56296f2), [`358982:Pilgrim.esp`](perks/PERKS_015.md#r-810089a802cc), [`0CF788:Skyrim.esm`](perks/PERKS_035.md#r-a908eaba9cba), [`04561B:The Restless Dead.esp`](perks/PERKS_037.md#r-551fbc4e1080), [`1CC961:The Restless Dead.esp`](perks/PERKS_037.md#r-b341219b6e0d), [`0BCCAE:Skyrim.esm`](perks/PERKS_048.md#r-093d0d3d89d8), [`2DF675:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_048.md#r-2f4c41620f91), [`079355:Skyrim.esm`](perks/PERKS_048.md#r-69e1c30428fe), [`079356:Skyrim.esm`](perks/PERKS_048.md#r-2c463d46ec3d), [`079357:Skyrim.esm`](perks/PERKS_048.md#r-776210cb42f4), [`079358:Skyrim.esm`](perks/PERKS_048.md#r-73d56e550d99), [`3B9399:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-a02ca415f2ed).

## ModPickpocketChance

- Ocorrências de effect: 14; perks distintas: 14.
- Papel a validar: Chance de furto.
- Contexto mínimo: alvo, item, detecção e tentativa.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: RNG único e transferência atômica sem reroll por retry. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`0A725C:Skyrim.esm`](perks/PERKS_001.md#r-beb9e1f662ae), [`03D291:Dragonborn.esm`](perks/PERKS_008.md#r-61e226288f3f), [`10F21E:Skyrim.esm`](perks/PERKS_024.md#r-e26e819e56a9), [`ADA501:Update.esm`](perks/PERKS_035.md#r-8c7b6db8e07a), [`0CF788:Skyrim.esm`](perks/PERKS_035.md#r-a908eaba9cba), [`0BE124:Skyrim.esm`](perks/PERKS_055.md#r-fda24d34e5e3), [`058204:Skyrim.esm`](perks/PERKS_055.md#r-57c9cc31faf9), [`058202:Skyrim.esm`](perks/PERKS_055.md#r-cc04234f53c3), [`03222D:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_055.md#r-2f3c0b817752), [`018E6A:Skyrim.esm`](perks/PERKS_056.md#r-e49a32d0e17f), [`018E6B:Skyrim.esm`](perks/PERKS_056.md#r-e2313989e3cb), [`018E6C:Skyrim.esm`](perks/PERKS_056.md#r-304a58f0fb9a), [`018E6D:Skyrim.esm`](perks/PERKS_056.md#r-df5cd865e3b3), [`3B9399:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-a02ca415f2ed).

## ModPlayerIntimidation

- Ocorrências de effect: 7; perks distintas: 7.
- Papel a validar: Resultado/modificador de intimidação.
- Contexto mínimo: diálogo, speaker, target e quest.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: diálogo pessoal não altera quest global de outro jogador. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`29CA5B:Curse of the Vampire.esp`](perks/PERKS_005.md#r-4972f82738fe), [`29CA5A:Curse of the Vampire.esp`](perks/PERKS_005.md#r-62cca5c7399b), [`29CA59:Curse of the Vampire.esp`](perks/PERKS_006.md#r-6f076fffdf23), [`218FB1:Curse of the Vampire.esp`](perks/PERKS_006.md#r-0b57aaaaab83), [`2B0E89:Curse of the Vampire.esp`](perks/PERKS_006.md#r-e5db636c70b5), [`337F17:LostGrimoire.esp`](perks/PERKS_010.md#r-a7a5fd667966), [`1090A2:Skyrim.esm`](perks/PERKS_058.md#r-9d32f7c9d00d).

## ModPoisonDoseCount

- Ocorrências de effect: 10; perks distintas: 10.
- Papel a validar: Número de doses de veneno.
- Contexto mínimo: item instanciado, veneno e uso.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: duas armas iguais mantêm contadores separados. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`00087F:Artificer.esp`](perks/PERKS_002.md#r-423b25e97889), [`000846:Artificer.esp`](perks/PERKS_002.md#r-b6e5ae693369), [`0008DC:Artificer.esp`](perks/PERKS_002.md#r-ae7768c71f67), [`000819:Mundus.esp`](perks/PERKS_012.md#r-04fcb1f7daa3), [`38126F:Pilgrim.esp`](perks/PERKS_016.md#r-723be00a113f), [`38B4CD:Pilgrim.esp`](perks/PERKS_017.md#r-37234ac610ad), [`ADA501:Update.esm`](perks/PERKS_035.md#r-8c7b6db8e07a), [`105F2F:Skyrim.esm`](perks/PERKS_045.md#r-f96601810cc4), [`3120F8:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_045.md#r-c7dcabdc180e), [`3120F9:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_045.md#r-e7b86c7ab02c).

## ModPotionsCreated

- Ocorrências de effect: 3; perks distintas: 3.
- Papel a validar: Quantidade de poções produzidas.
- Contexto mínimo: receita, custo e resultado.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: quantidade extra não implica debitar/entregar duas vezes no retry. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`10BF0A:Skyrim.esm`](perks/PERKS_001.md#r-cc4d6fd45131), [`00080B:Artificer.esp`](perks/PERKS_003.md#r-8f72b36d6d6a), [`27A1E1:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_045.md#r-402eec55848b).

## ModPowerAttackDamage

- Ocorrências de effect: 13; perks distintas: 10.
- Papel a validar: Dano de power attack.
- Contexto mínimo: tipo autorizado, arma e vítima.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: restrição removida no patch só altera o gate correspondente. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`00082A:Manbeast.esp`](perks/PERKS_012.md#r-96ce8f6eb043), [`36CE1B:Pilgrim.esp`](perks/PERKS_015.md#r-47df3aeadf3a), [`35897E:Pilgrim.esp`](perks/PERKS_017.md#r-114b077fddb8), [`000838:Shadow Clone on Self.esp`](perks/PERKS_019.md#r-bcf3e467e306), [`ADA501:Update.esm`](perks/PERKS_035.md#r-8c7b6db8e07a), [`4F3346:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-9a95556bea89), [`03AF9E:Skyrim.esm`](perks/PERKS_043.md#r-8acbece383e6), [`03AF81:Skyrim.esm`](perks/PERKS_055.md#r-36342356efa9), [`005474:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_059.md#r-d692bc4b101a), [`052D52:Skyrim.esm`](perks/PERKS_059.md#r-5d72b84be89c).

## ModPowerAttackStamina

- Ocorrências de effect: 16; perks distintas: 15.
- Papel a validar: Custo de stamina do power attack.
- Contexto mínimo: tipo autorizado de ataque e recurso.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: packet falso de ataque comum não aciona custo/bonus de power attack. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000806:Aetherius.esp`](perks/PERKS_001.md#r-0f1c3e7b79ff), [`01E7F8:Dragonborn.esm`](perks/PERKS_008.md#r-49e2b3272f24), [`000890:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-40b8d56296f2), [`00088E:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-b7e30ea1ca96), [`371F2B:Pilgrim.esp`](perks/PERKS_015.md#r-2aea88a6c19e), [`35DAAE:Pilgrim.esp`](perks/PERKS_017.md#r-f5e7c594cb28), [`07A17E:Pilgrim.esp`](perks/PERKS_017.md#r-4a7a61ca8334), [`6BD5EE:The Restless Dead.esp`](perks/PERKS_041.md#r-bc9474a42c91), [`2B6F30:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-57fcca83083d), [`00080C:UltimateEbonyWarrior.esp`](perks/PERKS_042.md#r-4f1ee13f1bcb), [`2290EE:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_044.md#r-ccae6894aa5e), [`058F61:Skyrim.esm`](perks/PERKS_047.md#r-f6e2b8a9afc7), [`2D546B:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_053.md#r-3b2d754a9008), [`052D50:Skyrim.esm`](perks/PERKS_054.md#r-c40e4ad90342), [`052D51:Skyrim.esm`](perks/PERKS_059.md#r-7d74e23a3b63).

## ModRecoverArrowChance

- Ocorrências de effect: 2; perks distintas: 2.
- Papel a validar: Chance de recuperar flecha.
- Contexto mínimo: projétil, hit/loot e RNG.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: flecha recuperada pertence a uma única entrega. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`01A189:Dawnguard.esm`](perks/PERKS_006.md#r-4b8b030c45a9), [`051B12:Skyrim.esm`](perks/PERKS_047.md#r-3b9912efed3d).

## ModSellPrices

- Ocorrências de effect: 14; perks distintas: 14.
- Papel a validar: Preço de venda.
- Contexto mínimo: comprador/vendedor, quantidade e estado do item.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: venda concorrente da mesma instância confirma uma vez. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000808:Aetherius.esp`](perks/PERKS_001.md#r-682f2ae52b5a), [`0A725C:Skyrim.esm`](perks/PERKS_001.md#r-beb9e1f662ae), [`01E7F1:Dragonborn.esm`](perks/PERKS_001.md#r-d69b64b15eed), [`01EEC7:Dragonborn.esm`](perks/PERKS_008.md#r-6b9426ef959c), [`10F9DB:Skyrim.esm`](perks/PERKS_022.md#r-9bfe2feec760), [`06BC37:Skyrim.esm`](perks/PERKS_022.md#r-b5fde1e2e3b8), [`0CF788:Skyrim.esm`](perks/PERKS_035.md#r-a908eaba9cba), [`3B9399:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-a02ca415f2ed), [`0BE128:Skyrim.esm`](perks/PERKS_058.md#r-2e60995d58fb), [`058F75:Skyrim.esm`](perks/PERKS_058.md#r-d7e406e04eda), [`0C07CE:Skyrim.esm`](perks/PERKS_059.md#r-440cc2c9a8b7), [`0C07CF:Skyrim.esm`](perks/PERKS_059.md#r-46318c05a154), [`0C07D0:Skyrim.esm`](perks/PERKS_059.md#r-2ebc26eea68b), [`0C07D1:Skyrim.esm`](perks/PERKS_059.md#r-09818018e5d6).

## ModShieldDefectArrowChance

- Ocorrências de effect: 1; perks distintas: 1.
- Papel a validar: Chance de deflexão de projétil pelo shield.
- Contexto mínimo: trajetória/contato, block e RNG.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: defletir e aplicar dano não ocorrem ambos por owners diferentes. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`058F68:Skyrim.esm`](perks/PERKS_048.md#r-3782237bd6a1).

## ModShoutOk

- Ocorrências de effect: 3; perks distintas: 3.
- Papel a validar: Permissão contextual de shout.
- Contexto mínimo: ator, shout e estado autorizado.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: cliente não burla gate enviando apenas evento visual. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`008A6E:Dawnguard.esm`](perks/PERKS_007.md#r-31d884664ea3), [`02BA1D:Skyrim.esm`](perks/PERKS_007.md#r-64022d3dd017), [`0F11A9:Skyrim.esm`](perks/PERKS_021.md#r-8a904406c27a).

## ModSkillUse

- Ocorrências de effect: 23; perks distintas: 21.
- Papel a validar: Progresso nativo por uso de skill.
- Contexto mínimo: evento elegível e política de ownership de skills.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: não conceder XP nativo e de classe em duplicidade acidental. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`15DDD5:Apothecary.esp`](perks/PERKS_001.md#r-44a6b4e3551b), [`01E7ED:Dragonborn.esm`](perks/PERKS_001.md#r-9fa64a6a83a0), [`00090E:Artificer.esp`](perks/PERKS_002.md#r-6a9adf50ea40), [`00090F:Artificer.esp`](perks/PERKS_003.md#r-9ff3ee4109b2), [`000910:Artificer.esp`](perks/PERKS_003.md#r-b6e392c52de8), [`325F25:Pilgrim.esp`](perks/PERKS_014.md#r-464818993443), [`38B4A6:Pilgrim.esp`](perks/PERKS_015.md#r-3c8367138707), [`325F29:Pilgrim.esp`](perks/PERKS_015.md#r-b6fa63f65cfe), [`0E5F57:Skyrim.esm`](perks/PERKS_021.md#r-57b7af3f6951), [`0E5F49:Skyrim.esm`](perks/PERKS_022.md#r-172f6b2c5700), [`10D96A:Skyrim.esm`](perks/PERKS_024.md#r-e5e315b68d77), [`0FB980:Skyrim.esm`](perks/PERKS_024.md#r-6a45db5127cc), [`10D969:Skyrim.esm`](perks/PERKS_024.md#r-d46e2a1e148c), [`017739:Dragonborn.esm`](perks/PERKS_024.md#r-152e8bab2c20), [`0BC219:Sorcerer.esp`](perks/PERKS_034.md#r-d711d9eb424e), [`0BC21B:Sorcerer.esp`](perks/PERKS_034.md#r-de4d0943c9cb), [`ADA501:Update.esm`](perks/PERKS_035.md#r-8c7b6db8e07a), [`0E5F46:Skyrim.esm`](perks/PERKS_042.md#r-58c3ee92dcda), [`0E5F4A:Skyrim.esm`](perks/PERKS_042.md#r-c63e64b46fc6), [`0009D4:Update.esm`](perks/PERKS_043.md#r-10fb7d45c8b0), [`02029E:unofficial skyrim special edition patch.esp`](perks/PERKS_043.md#r-b686f271dd22).

## ModSneakAttackMult

- Ocorrências de effect: 10; perks distintas: 10.
- Papel a validar: Multiplicador de ataque furtivo.
- Contexto mínimo: detecção/awareness da vítima e evento.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: observadores diferentes não concedem críticos furtivos extras. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000827:Aetherius.esp`](perks/PERKS_001.md#r-e4416bb17ed0), [`000812:Mundus.esp`](perks/PERKS_012.md#r-e85363960102), [`371F31:Pilgrim.esp`](perks/PERKS_016.md#r-a2ec57f20ee1), [`38B4CF:Pilgrim.esp`](perks/PERKS_017.md#r-5de6ce6de238), [`0FF15B:Skyrim.esm`](perks/PERKS_021.md#r-daaebab90635), [`ADA501:Update.esm`](perks/PERKS_035.md#r-8c7b6db8e07a), [`058210:Skyrim.esm`](perks/PERKS_057.md#r-8f80f3d584b1), [`1036F0:Skyrim.esm`](perks/PERKS_057.md#r-2b396dfdb937), [`058211:Skyrim.esm`](perks/PERKS_057.md#r-49226addbeb5), [`302DB5:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-ecc86cd67e76).

## ModSoulGemEnchanting

- Ocorrências de effect: 1; perks distintas: 1.
- Papel a validar: Contribuição da gema ao encantamento.
- Contexto mínimo: receita, alma e item.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: troca de gema após preview exige nova revisão de receita. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`058F81:Skyrim.esm`](perks/PERKS_051.md#r-47d92f78e565).

## ModSoulGemRecharge

- Ocorrências de effect: 1; perks distintas: 1.
- Papel a validar: Recarga com gema.
- Contexto mínimo: instância de arma, gema e carga.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: retry não consome outra gema nem ultrapassa limite. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`058F7C:Skyrim.esm`](perks/PERKS_051.md#r-910e589d9f37).

## ModSoulPercentCapturedToWeapon

- Ocorrências de effect: 1; perks distintas: 1.
- Papel a validar: Fração de alma capturada para arma.
- Contexto mínimo: death proof, arma elegível e charge.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: uma alma não credita múltiplas capturas do mesmo evento. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`108A44:Skyrim.esm`](perks/PERKS_051.md#r-cbab647fe9f7).

## ModSpellCastingSoundEvent

- Ocorrências de effect: 2; perks distintas: 2.
- Papel a validar: Evento sonoro da conjuração.
- Contexto mínimo: cast e observadores.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: um cast gera uma apresentação por observador, sem aplicar gameplay novamente. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`235925:LostGrimoire.esp`](perks/PERKS_009.md#r-afb8c478436f), [`0581FD:Skyrim.esm`](perks/PERKS_052.md#r-dc2a281aaddb).

## ModSpellCost

- Ocorrências de effect: 131; perks distintas: 105.
- Papel a validar: Custo de conjuração.
- Contexto mínimo: spell, mão, modo de cast, Magicka e perks.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: custo reduzido debitado uma vez; concentração interrompe ao faltar recurso. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000800:Aetherius.esp`](perks/PERKS_001.md#r-94bc91e4b9e0), [`0250E7:Dragonborn.esm`](perks/PERKS_001.md#r-93a00b1dd80f), [`00094F:Artificer.esp`](perks/PERKS_001.md#r-990616893cf4), [`0008FF:Artificer.esp`](perks/PERKS_001.md#r-34b357e8478e), [`000859:Artificer.esp`](perks/PERKS_002.md#r-19f0d8b55d4e), [`0008DA:Artificer.esp`](perks/PERKS_002.md#r-64c62003f82c), [`00082E:Artificer.esp`](perks/PERKS_002.md#r-51e5f3065edc), [`0250E8:Dragonborn.esm`](perks/PERKS_002.md#r-62f87ed64dc9), [`000A44:Artificer.esp`](perks/PERKS_003.md#r-5b7c1e0ea018), [`0250E9:Dragonborn.esm`](perks/PERKS_003.md#r-4f082f1ad3d9), [`14C0A7:Bandit War.esp`](perks/PERKS_003.md#r-75661e3777c1), [`03F194:Bandit War.esp`](perks/PERKS_004.md#r-7cbe08a10f52), [`119437:Bandit War.esp`](perks/PERKS_004.md#r-0aa513f0a9c0), [`33EB0F:Curse of the Vampire.esp`](perks/PERKS_005.md#r-7f5a12525404), [`005995:Dawnguard.esm`](perks/PERKS_007.md#r-2f509f284e2a), [`01E7FB:Dragonborn.esm`](perks/PERKS_008.md#r-fe5caf07801d), [`01DFA9:Dragonborn.esm`](perks/PERKS_008.md#r-5f9a865349f8), [`10DC78:LostGrimoire.esp`](perks/PERKS_010.md#r-695ef17dcb59), [`00080B:Mundus.esp`](perks/PERKS_012.md#r-783fd0002771), [`F4F8C2:MysticismMagic.esp`](perks/PERKS_014.md#r-d357e4061535), [`371F3A:Pilgrim.esp`](perks/PERKS_015.md#r-8640041ba806), [`367D0A:Pilgrim.esp`](perks/PERKS_015.md#r-3d148949b81f), [`367CF2:Pilgrim.esp`](perks/PERKS_015.md#r-b4d5f458822c), [`35DA9D:Pilgrim.esp`](perks/PERKS_015.md#r-2f14e0b36580), [`37704F:Pilgrim.esp`](perks/PERKS_015.md#r-5c8a60d32e68), [`36CE1F:Pilgrim.esp`](perks/PERKS_015.md#r-81b48e9b6df9), [`36CE15:Pilgrim.esp`](perks/PERKS_015.md#r-1cdc27b9da85), [`36CE0E:Pilgrim.esp`](perks/PERKS_015.md#r-4b1e9cae6491), [`335245:Pilgrim.esp`](perks/PERKS_017.md#r-e87e2b3727e6), [`107E40:Pilgrim.esp`](perks/PERKS_017.md#r-ddb69cd7a9b9), [`38B4CB:Pilgrim.esp`](perks/PERKS_017.md#r-1508326adea7), [`041938:ShadowSpellPackage.esp`](perks/PERKS_020.md#r-1609e956f37b), [`01CAAF:ShadowSpellPackage.esp`](perks/PERKS_020.md#r-2009d8b40711), [`0581E9:Skyrim.esm`](perks/PERKS_022.md#r-bf86d27468ad), [`0581EC:Skyrim.esm`](perks/PERKS_022.md#r-c559833a09f3), [`1076F7:Skyrim.esm`](perks/PERKS_023.md#r-3edd8c761da3), [`1076F9:Skyrim.esm`](perks/PERKS_023.md#r-a8f656e56326), [`106AD2:Skyrim.esm`](perks/PERKS_023.md#r-ab86dc843460), [`1076FD:Skyrim.esm`](perks/PERKS_023.md#r-dc9eb62cf21c), [`0581EE:Skyrim.esm`](perks/PERKS_024.md#r-df39ae1bc5e0), [`0EEDDB:Sorcerer.esp`](perks/PERKS_034.md#r-080ff0210cf5), [`29CE28:Thaumaturgy.esp`](perks/PERKS_034.md#r-94f5d5d95f69), [`0CA564:Thaumaturgy.esp`](perks/PERKS_034.md#r-bc2fa2eb4ee3), [`0CA566:Thaumaturgy.esp`](perks/PERKS_034.md#r-da0d5a4fc360), [`0CA563:Thaumaturgy.esp`](perks/PERKS_034.md#r-7bcb3dc62429), [`0CA56E:Thaumaturgy.esp`](perks/PERKS_034.md#r-4d8644aa72cc), [`0CA56F:Thaumaturgy.esp`](perks/PERKS_034.md#r-56a4a31f45db), [`0CA570:Thaumaturgy.esp`](perks/PERKS_034.md#r-d28f116b94d1), [`0CA571:Thaumaturgy.esp`](perks/PERKS_035.md#r-5f5a0df11153), [`ADA501:Update.esm`](perks/PERKS_035.md#r-8c7b6db8e07a), [`0CA55E:Thaumaturgy.esp`](perks/PERKS_035.md#r-5468c6b5e280), [`0CA567:Thaumaturgy.esp`](perks/PERKS_035.md#r-35751ed41e44), [`0CA568:Thaumaturgy.esp`](perks/PERKS_035.md#r-edbb546d2444), [`0CA569:Thaumaturgy.esp`](perks/PERKS_035.md#r-395ab0b9b461), [`0CA56A:Thaumaturgy.esp`](perks/PERKS_035.md#r-78db1b5a16a2), [`0CA56B:Thaumaturgy.esp`](perks/PERKS_035.md#r-5b4b866c49dc), [`0CA56C:Thaumaturgy.esp`](perks/PERKS_035.md#r-6d885c55b21d), [`0CA56D:Thaumaturgy.esp`](perks/PERKS_035.md#r-b342aeaeafdc), [`0CA572:Thaumaturgy.esp`](perks/PERKS_035.md#r-5227caf93e80), [`0CA573:Thaumaturgy.esp`](perks/PERKS_035.md#r-2e2a50411d13), [`0CA574:Thaumaturgy.esp`](perks/PERKS_035.md#r-92f1fe7b9790), [`0CA575:Thaumaturgy.esp`](perks/PERKS_035.md#r-3b8a464348f1), [`0CF788:Skyrim.esm`](perks/PERKS_035.md#r-a908eaba9cba), [`6C7802:The Restless Dead.esp`](perks/PERKS_037.md#r-ee58047da58c), [`1CC95D:The Restless Dead.esp`](perks/PERKS_037.md#r-b51da5b059ae), [`6C7803:The Restless Dead.esp`](perks/PERKS_037.md#r-2ee4337c11bd), [`1CC95E:The Restless Dead.esp`](perks/PERKS_037.md#r-d2487086d0fc), [`6C7804:The Restless Dead.esp`](perks/PERKS_037.md#r-609117297430), [`1CC95F:The Restless Dead.esp`](perks/PERKS_037.md#r-d1955fc3495c), [`260D6B:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-3a36f4bd8690), [`02A78F:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-e43ec4cf005f), [`2B6F30:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-57fcca83083d), [`1076FB:Skyrim.esm`](perks/PERKS_043.md#r-fe031df3faac), [`0F2CA6:Skyrim.esm`](perks/PERKS_046.md#r-80a29b73991a), [`01B57F:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_046.md#r-51d9d93179ca), [`321436:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_046.md#r-8c7826c4016c), [`0C44B7:Skyrim.esm`](perks/PERKS_046.md#r-79b0a2f1ffb0), [`0C44B8:Skyrim.esm`](perks/PERKS_046.md#r-1cf1b8b5f298), [`0C44B9:Skyrim.esm`](perks/PERKS_047.md#r-9f8812f31465), [`0C44BA:Skyrim.esm`](perks/PERKS_047.md#r-805c55af7322), [`27F2E3:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-9833d7f8f90d), [`0F2CA7:Skyrim.esm`](perks/PERKS_048.md#r-6a917fa6c4aa), [`0C44BB:Skyrim.esm`](perks/PERKS_049.md#r-43b92818b25c), [`0C44BC:Skyrim.esm`](perks/PERKS_049.md#r-5c66b51aba5a), [`0C44BD:Skyrim.esm`](perks/PERKS_049.md#r-3595777cbcf1), [`0C44BE:Skyrim.esm`](perks/PERKS_049.md#r-bafe0e87a888), [`37254D:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_049.md#r-f5bb2af28062), [`0F2CA8:Skyrim.esm`](perks/PERKS_049.md#r-90ecb10b697a), [`0C44BF:Skyrim.esm`](perks/PERKS_050.md#r-66e84f71d455), [`0C44C0:Skyrim.esm`](perks/PERKS_050.md#r-907ca88f27ab), [`0C44C1:Skyrim.esm`](perks/PERKS_050.md#r-963fe743f3ef), [`0C44C2:Skyrim.esm`](perks/PERKS_051.md#r-e9763c3626fb), [`33076B:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_051.md#r-5034659d18b0), [`0F2CA9:Skyrim.esm`](perks/PERKS_052.md#r-79612550b467), [`0C44C3:Skyrim.esm`](perks/PERKS_053.md#r-82028c83c2e4), [`0C44C4:Skyrim.esm`](perks/PERKS_053.md#r-134f18186f67), [`0C44C5:Skyrim.esm`](perks/PERKS_053.md#r-714a5b419de6), [`0C44C6:Skyrim.esm`](perks/PERKS_053.md#r-c25c45386c2e), [`0F2CAA:Skyrim.esm`](perks/PERKS_056.md#r-89be12cae610), [`2BBF34:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_056.md#r-3e924e19b60d), [`35E12F:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_056.md#r-6f1b672f0c61), [`0C44C7:Skyrim.esm`](perks/PERKS_057.md#r-177c876aaf88), [`0C44C8:Skyrim.esm`](perks/PERKS_057.md#r-7576fdc84d0d), [`0C44C9:Skyrim.esm`](perks/PERKS_057.md#r-b00389b66551), [`0C44CA:Skyrim.esm`](perks/PERKS_057.md#r-6d5688b2d543).

## ModSpellDuration

- Ocorrências de effect: 78; perks distintas: 60.
- Papel a validar: Duração da magia no emissor.
- Contexto mínimo: cast, spell e skill/perks do caster.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: buff de duração muda expiry uma vez; repetir castId não estende de novo. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`00080B:Aetherius.esp`](perks/PERKS_001.md#r-9e77310d27bd), [`0A725C:Skyrim.esm`](perks/PERKS_001.md#r-beb9e1f662ae), [`0270E9:Dragonborn.esm`](perks/PERKS_001.md#r-bd751aeb1fe1), [`000853:Artificer.esp`](perks/PERKS_002.md#r-fd02c7b144ae), [`156445:Bandit War.esp`](perks/PERKS_003.md#r-4dd27d48ead2), [`01DF9B:Dragonborn.esm`](perks/PERKS_008.md#r-55f16461f04d), [`01773F:Dragonborn.esm`](perks/PERKS_008.md#r-3c53f1152ad8), [`000890:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-40b8d56296f2), [`00088E:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-b7e30ea1ca96), [`000876:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-eef5f3d5b3e0), [`000823:Mundus.esp`](perks/PERKS_012.md#r-b4a25ef42293), [`000819:Mundus.esp`](perks/PERKS_012.md#r-04fcb1f7daa3), [`307EF2:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_013.md#r-285118b12663), [`30CFF4:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_013.md#r-444c2b97d839), [`01EE06:Mysticism - Vokrii Compatibility Patch.esp`](perks/PERKS_013.md#r-58545640a151), [`F08A1B:MysticismMagic.esp`](perks/PERKS_014.md#r-664762ded7d0), [`33A36A:Pilgrim.esp`](perks/PERKS_015.md#r-51123ad00aa2), [`33A36B:Pilgrim.esp`](perks/PERKS_015.md#r-c0c231d13f2b), [`386398:Pilgrim.esp`](perks/PERKS_016.md#r-d95948accacb), [`36CE22:Pilgrim.esp`](perks/PERKS_016.md#r-26bcab0e8d02), [`35DABD:Pilgrim.esp`](perks/PERKS_016.md#r-bf90639aad50), [`0028B4:ShadowSpellPackage.esp`](perks/PERKS_020.md#r-0c19e10d136d), [`01230F:ShadowSpellPackage.esp`](perks/PERKS_020.md#r-0a0d016fcd1d), [`05821B:Skyrim.esm`](perks/PERKS_021.md#r-aafb8a992d7f), [`1076F8:Skyrim.esm`](perks/PERKS_023.md#r-59bd3392894e), [`1076FA:Skyrim.esm`](perks/PERKS_023.md#r-83e6b289fc1b), [`ADA501:Update.esm`](perks/PERKS_035.md#r-8c7b6db8e07a), [`09CB72:The Restless Dead.esp`](perks/PERKS_036.md#r-c6e92f6b33f3), [`65819D:The Restless Dead.esp`](perks/PERKS_040.md#r-64030b92c361), [`D9AF68:The Restless Dead.esp`](perks/PERKS_040.md#r-4404480180d9), [`D9AF69:The Restless Dead.esp`](perks/PERKS_040.md#r-44596864f173), [`395F0F:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-d6157711c401), [`1076FC:Skyrim.esm`](perks/PERKS_043.md#r-281c8155162b), [`32142C:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-eb569a4e222b), [`105F2A:Skyrim.esm`](perks/PERKS_045.md#r-9b2550c4e25f), [`321425:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_045.md#r-8d0ca8edaae0), [`32142A:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_046.md#r-6f1503674786), [`377658:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_046.md#r-adb345829ca9), [`0581FC:Skyrim.esm`](perks/PERKS_046.md#r-75779335a192), [`321436:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_046.md#r-8c7826c4016c), [`39AD7B:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-875db187525b), [`27F2E3:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-9833d7f8f90d), [`2EE9A4:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-9dec461e0236), [`2EE9A5:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-fcd9fa14aae1), [`0CB419:Skyrim.esm`](perks/PERKS_049.md#r-7e8ee13f6a0e), [`0581DD:Skyrim.esm`](perks/PERKS_049.md#r-21367769b1e7), [`2A7B21:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_050.md#r-17f387319d5d), [`214CB6:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_051.md#r-d67e33e13b59), [`214CB8:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_051.md#r-c1ac90366383), [`214CB9:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_051.md#r-2b9dd84cda0e), [`2B1D28:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_051.md#r-6506a068e962), [`059B76:Skyrim.esm`](perks/PERKS_052.md#r-fc658b8a8d4a), [`0581E4:Skyrim.esm`](perks/PERKS_056.md#r-fdaebc49d103), [`3B9399:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-a02ca415f2ed), [`2750CF:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-35dc4dd5b131), [`33A988:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-ff1142b7ba71), [`33A989:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-2cde7f7cb965), [`058F80:Skyrim.esm`](perks/PERKS_059.md#r-d7945dba590a), [`214CBD:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_060.md#r-5970c8fd5579), [`32B658:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_060.md#r-c1ea34be7ff8).

## ModSpellMagnitude

- Ocorrências de effect: 249; perks distintas: 167.
- Papel a validar: Magnitude produzida pelo caster.
- Contexto mínimo: spell/effect, skills e perks.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: magnitude capturada/live segue a política e não muda com UI local. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000827:Aetherius.esp`](perks/PERKS_001.md#r-e4416bb17ed0), [`2025FD:Amber Guard.esp`](perks/PERKS_001.md#r-bcb3e1aa1c68), [`0A725C:Skyrim.esm`](perks/PERKS_001.md#r-beb9e1f662ae), [`0270E9:Dragonborn.esm`](perks/PERKS_001.md#r-bd751aeb1fe1), [`01E7F0:Dragonborn.esm`](perks/PERKS_001.md#r-1d65414ca5d8), [`00097F:Artificer.esp`](perks/PERKS_002.md#r-8d20aeb6e22a), [`00091C:Artificer.esp`](perks/PERKS_002.md#r-4f736cbcec08), [`000940:Artificer.esp`](perks/PERKS_002.md#r-c9adfd773f0d), [`000A51:Artificer.esp`](perks/PERKS_003.md#r-0b4b98fd1635), [`0009ED:ccQDRSSE001-SurvivalMode.esl`](perks/PERKS_004.md#r-fe7e7d6d4eb5), [`0009EC:ccQDRSSE001-SurvivalMode.esl`](perks/PERKS_005.md#r-fd4307237e93), [`0E9345:Curse of the Vampire.esp`](perks/PERKS_005.md#r-888281f4f63a), [`73EAC4:Curse of the Vampire.esp`](perks/PERKS_005.md#r-06aeab5881ad), [`15DA6B:Curse of the Vampire.esp`](perks/PERKS_005.md#r-4b342ae1fe36), [`005054:Dawnguard.esm`](perks/PERKS_007.md#r-9bd981877493), [`01459D:Dawnguard.esm`](perks/PERKS_007.md#r-1d50651d609b), [`0177B4:Dragonborn.esm`](perks/PERKS_007.md#r-e39d3e62ad42), [`01773C:Dragonborn.esm`](perks/PERKS_007.md#r-f92f84fd3da6), [`01773D:Dragonborn.esm`](perks/PERKS_007.md#r-7d5d81675bf3), [`01DF9B:Dragonborn.esm`](perks/PERKS_008.md#r-55f16461f04d), [`017745:Dragonborn.esm`](perks/PERKS_008.md#r-f7e1f0b5f9e6), [`017743:Dragonborn.esm`](perks/PERKS_008.md#r-cdd019bfcf2f), [`017744:Dragonborn.esm`](perks/PERKS_008.md#r-51afaec8e5db), [`03D5B4:Dragonborn.esm`](perks/PERKS_008.md#r-6cf51c5a57e3), [`03D5CD:Dragonborn.esm`](perks/PERKS_008.md#r-85cb898dbea4), [`01773F:Dragonborn.esm`](perks/PERKS_008.md#r-3c53f1152ad8), [`01CDE7:Dragonborn.esm`](perks/PERKS_009.md#r-073a930c1a69), [`000890:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-40b8d56296f2), [`00088E:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-b7e30ea1ca96), [`000876:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-eef5f3d5b3e0), [`004295:HearthFires.esm`](perks/PERKS_009.md#r-740d31418f25), [`1364C6:LostGrimoire.esp`](perks/PERKS_009.md#r-b514586da429), [`14A8F3:LostGrimoire.esp`](perks/PERKS_009.md#r-0d5e58fcf6dd), [`0C6D19:LostGrimoire.esp`](perks/PERKS_010.md#r-93b7c7926e40), [`0CBE30:LostGrimoire.esp`](perks/PERKS_010.md#r-6eb30ef28941), [`374C02:LostGrimoire.esp`](perks/PERKS_010.md#r-9653d100754d), [`2DCBBD:LostGrimoire.esp`](perks/PERKS_010.md#r-4981758dbae1), [`244C42:LostGrimoire.esp`](perks/PERKS_010.md#r-943e13a37803), [`2214ED:LostGrimoire.esp`](perks/PERKS_010.md#r-4b23f9a36126), [`337F20:LostGrimoire.esp`](perks/PERKS_010.md#r-be066c469d3d), [`30F684:LostGrimoire.esp`](perks/PERKS_010.md#r-747a3b29ec4f), [`337F11:LostGrimoire.esp`](perks/PERKS_010.md#r-3cb15b7cbab3), [`000D62:LostGrimoire.esp`](perks/PERKS_010.md#r-a9d9c5b4956c), [`337F17:LostGrimoire.esp`](perks/PERKS_010.md#r-a7a5fd667966), [`347298:LostGrimoire.esp`](perks/PERKS_011.md#r-2b5251cc1af7), [`000812:Mundus.esp`](perks/PERKS_012.md#r-e85363960102), [`02CB20:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_013.md#r-4bd28f7517a0), [`019A7B:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_013.md#r-5a0624057a9e), [`3DCABA:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_013.md#r-99e8e921b611), [`0581E1:Skyrim.esm`](perks/PERKS_013.md#r-fdbba8e5c52a), [`0581E2:Skyrim.esm`](perks/PERKS_013.md#r-6008312af95f), [`3B4293:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_013.md#r-b2cc680b61be), [`30CFF4:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_013.md#r-444c2b97d839), [`D6E7AC:MysticismMagic.esp`](perks/PERKS_014.md#r-f95df15aa588), [`D6E7AE:MysticismMagic.esp`](perks/PERKS_014.md#r-da7b9e57c787), [`D7DAB3:MysticismMagic.esp`](perks/PERKS_014.md#r-a962369bd7f1), [`ADA503:Update.esm`](perks/PERKS_014.md#r-485b195dac48), [`ADA504:Update.esm`](perks/PERKS_014.md#r-7c9b82fa8764), [`36CE15:Pilgrim.esp`](perks/PERKS_015.md#r-1cdc27b9da85), [`377049:Pilgrim.esp`](perks/PERKS_015.md#r-6faf4fd76a6b), [`386392:Pilgrim.esp`](perks/PERKS_015.md#r-36f1488a3b1f), [`367CF6:Pilgrim.esp`](perks/PERKS_015.md#r-c3feac4e798c), [`0D542E:Pilgrim.esp`](perks/PERKS_016.md#r-d7908c4d6992), [`05BB51:Pilgrim.esp`](perks/PERKS_016.md#r-cd65ac27e413), [`0D542C:Pilgrim.esp`](perks/PERKS_016.md#r-a8dad4409d81), [`325F27:Pilgrim.esp`](perks/PERKS_016.md#r-55aaa2870c1b), [`325F26:Pilgrim.esp`](perks/PERKS_016.md#r-3cc3c3808d6c), [`38B4CF:Pilgrim.esp`](perks/PERKS_017.md#r-5de6ce6de238), [`335264:Pilgrim.esp`](perks/PERKS_017.md#r-89e809bb7ae8), [`33A36D:Pilgrim.esp`](perks/PERKS_018.md#r-668b32436fb0), [`00082C:Reforged Directional Combat.esp`](perks/PERKS_018.md#r-bde3bd24653f), [`0028AE:ShadowSpellPackage.esp`](perks/PERKS_019.md#r-513bf189e08e), [`0028B0:ShadowSpellPackage.esp`](perks/PERKS_019.md#r-f6ba51b91563), [`01230F:ShadowSpellPackage.esp`](perks/PERKS_020.md#r-0a0d016fcd1d), [`1046BD:Skyrim.esm`](perks/PERKS_020.md#r-ff8395224450), [`00AA02:Simply Stronger Dragons.esp`](perks/PERKS_020.md#r-69b7b3b5537f), [`1F0E1D:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_021.md#r-9c923163c163), [`05821B:Skyrim.esm`](perks/PERKS_021.md#r-aafb8a992d7f), [`10CB92:Skyrim.esm`](perks/PERKS_022.md#r-571b0bccdf67), [`10FE04:Skyrim.esm`](perks/PERKS_022.md#r-4be2a3d6a7c7), [`1076F5:Skyrim.esm`](perks/PERKS_023.md#r-86164d64ce1f), [`1076FE:Skyrim.esm`](perks/PERKS_023.md#r-88ffd23649e8), [`0E827B:Skyrim.esm`](perks/PERKS_023.md#r-1fb5902d4a3a), [`0581E8:Skyrim.esm`](perks/PERKS_024.md#r-e4e7443e0062), [`0581EB:Skyrim.esm`](perks/PERKS_024.md#r-668dd64fa50d), [`0581ED:Skyrim.esm`](perks/PERKS_024.md#r-4e46f6106bd6), [`0F5B56:Skyrim.esm`](perks/PERKS_024.md#r-12989a4ed167), [`ADA501:Update.esm`](perks/PERKS_035.md#r-8c7b6db8e07a), [`08D801:Thaumaturgy.esp`](perks/PERKS_035.md#r-e2f03a861f1e), [`8392F1:The Restless Dead.esp`](perks/PERKS_037.md#r-5c2207242453), [`1CC958:The Restless Dead.esp`](perks/PERKS_037.md#r-3f0154ae48ec), [`8392F2:The Restless Dead.esp`](perks/PERKS_037.md#r-e56a94a117e7), [`1CC959:The Restless Dead.esp`](perks/PERKS_037.md#r-1ce81c803f7b), [`8392F3:The Restless Dead.esp`](perks/PERKS_037.md#r-cb98ce292706), [`1CC95A:The Restless Dead.esp`](perks/PERKS_037.md#r-fc7c282b8b01), [`523247:The Restless Dead.esp`](perks/PERKS_038.md#r-0557e5fc5cec), [`1D6B7A:The Restless Dead.esp`](perks/PERKS_038.md#r-3443f4037fd4), [`523248:The Restless Dead.esp`](perks/PERKS_038.md#r-fe180b062eba), [`1D6B7B:The Restless Dead.esp`](perks/PERKS_038.md#r-c6441771fb15), [`523249:The Restless Dead.esp`](perks/PERKS_038.md#r-f3fa6b634685), [`1D6B7C:The Restless Dead.esp`](perks/PERKS_038.md#r-ff59eb9b0a09), [`523244:The Restless Dead.esp`](perks/PERKS_038.md#r-2acc9ac29439), [`1D6B7D:The Restless Dead.esp`](perks/PERKS_038.md#r-fdda956f71cd), [`523245:The Restless Dead.esp`](perks/PERKS_038.md#r-b8628d7e9894), [`1D6B7E:The Restless Dead.esp`](perks/PERKS_038.md#r-f13cd6409afe), [`523246:The Restless Dead.esp`](perks/PERKS_038.md#r-578f0dc86d4f), [`1D6B7F:The Restless Dead.esp`](perks/PERKS_038.md#r-541210a28df0), [`52834B:The Restless Dead.esp`](perks/PERKS_038.md#r-c6276e7f0f2b), [`1D6B80:The Restless Dead.esp`](perks/PERKS_038.md#r-b753793818c3), [`52834C:The Restless Dead.esp`](perks/PERKS_038.md#r-907b0a4dd687), [`1D6B81:The Restless Dead.esp`](perks/PERKS_038.md#r-7814bb776f55), [`52834D:The Restless Dead.esp`](perks/PERKS_038.md#r-77fffb23dd05), [`1D6B82:The Restless Dead.esp`](perks/PERKS_038.md#r-de19e3b5c12e), [`83E3F5:The Restless Dead.esp`](perks/PERKS_040.md#r-a53ca0ee0d44), [`83E3F6:The Restless Dead.esp`](perks/PERKS_040.md#r-ada951684e1e), [`83E3F7:The Restless Dead.esp`](perks/PERKS_040.md#r-ae5ff789af5e), [`53C77D:The Restless Dead.esp`](perks/PERKS_040.md#r-42269c516e65), [`CC1362:The Restless Dead.esp`](perks/PERKS_040.md#r-af774f70965c), [`CC1363:The Restless Dead.esp`](perks/PERKS_040.md#r-3f94fe6739ba), [`242738:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-c4993843bcae), [`02A78F:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-e43ec4cf005f), [`1545FF:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-f1efa37836ca), [`395F0F:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-d6157711c401), [`3E706B:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-9eadbde45376), [`2B6F30:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-57fcca83083d), [`0008EF:Vision of Skyrim II.esp`](perks/PERKS_043.md#r-8a7e5befbb9a), [`32142C:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_043.md#r-eb569a4e222b), [`32142A:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_046.md#r-6f1503674786), [`377658:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_046.md#r-adb345829ca9), [`321436:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_046.md#r-8c7826c4016c), [`39AD7B:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-875db187525b), [`27F2E3:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-9833d7f8f90d), [`2EE9A4:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-9dec461e0236), [`2EE9A5:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_047.md#r-fcd9fa14aae1), [`31721F:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_049.md#r-ec253e0fa548), [`0581E7:Skyrim.esm`](perks/PERKS_050.md#r-fc5ec273aeb6), [`10FCF8:Skyrim.esm`](perks/PERKS_050.md#r-1f020cea5ec5), [`0581EA:Skyrim.esm`](perks/PERKS_050.md#r-fd63aa6f292c), [`10FCF9:Skyrim.esm`](perks/PERKS_050.md#r-72c822ec1051), [`058200:Skyrim.esm`](perks/PERKS_050.md#r-1fad11d352e8), [`10FCFA:Skyrim.esm`](perks/PERKS_050.md#r-b956c952d443), [`63237F:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_050.md#r-f81a8792668a), [`632380:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_050.md#r-b4ef2ab47366), [`632381:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_050.md#r-3271a82c45b6), [`105F32:Skyrim.esm`](perks/PERKS_050.md#r-06c8aa8aaff8), [`32B649:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_050.md#r-d87db6a302b3), [`0F392E:Skyrim.esm`](perks/PERKS_050.md#r-c98521bd5920), [`2A7B21:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_050.md#r-17f387319d5d), [`01BB2E:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_050.md#r-c457f967c378), [`024E3C:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_051.md#r-9a86518407f2), [`214CB6:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_051.md#r-d67e33e13b59), [`214CB8:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_051.md#r-c1ac90366383), [`214CB9:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_051.md#r-2b9dd84cda0e), [`2B1D28:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_051.md#r-6506a068e962), [`0581F8:Skyrim.esm`](perks/PERKS_056.md#r-080f60401a6f), [`01490D:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_056.md#r-14d8ac7b99fb), [`0B2851:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_056.md#r-cc6922b45c42), [`35E130:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_056.md#r-bf2655f4a4a7), [`0581E4:Skyrim.esm`](perks/PERKS_056.md#r-fdaebc49d103), [`3B9399:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-a02ca415f2ed), [`03799E:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-43092c0d7cfb), [`2750CF:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-35dc4dd5b131), [`33A988:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-ff1142b7ba71), [`33A989:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_058.md#r-2cde7f7cb965), [`058F80:Skyrim.esm`](perks/PERKS_059.md#r-d7945dba590a), [`214CBD:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_060.md#r-5970c8fd5579), [`32B658:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_060.md#r-c1ea34be7ff8).

## ModSpellRange

- Ocorrências de effect: 9; perks distintas: 7.
- Papel a validar: Alcance da magia.
- Contexto mínimo: cast, delivery e transforms.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: fronteira de alcance e world instance são validadas pelo host. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`03A32E:Dragonborn.esm`](perks/PERKS_008.md#r-69d90838ae48), [`01773E:Dragonborn.esm`](perks/PERKS_009.md#r-4b6361293d8b), [`02A78F:Triumvirate - Mage Archetypes.esp`](perks/PERKS_041.md#r-e43ec4cf005f), [`105F30:Skyrim.esm`](perks/PERKS_049.md#r-7198fbd4e54e), [`105F31:Skyrim.esm`](perks/PERKS_049.md#r-cab530f8d8bf), [`105F32:Skyrim.esm`](perks/PERKS_050.md#r-06c8aa8aaff8), [`32B649:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_050.md#r-d87db6a302b3).

## ModTargetDamageResistance

- Ocorrências de effect: 11; perks distintas: 11.
- Papel a validar: Modificação da defesa do alvo no ataque.
- Contexto mínimo: vítima, ataque e regra de penetração.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: não gravar redução temporária como debuff permanente de armor. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`00399B:Dawnguard.esm`](perks/PERKS_007.md#r-91901e341fef), [`03D568:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_020.md#r-eae7ba88175e), [`04C8A2:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_020.md#r-05ac6af68281), [`20456E:The Restless Dead.esp`](perks/PERKS_041.md#r-6b071825e692), [`6C26FF:The Restless Dead.esp`](perks/PERKS_041.md#r-7b180fbea083), [`00080C:UltimateEbonyWarrior.esp`](perks/PERKS_042.md#r-4f1ee13f1bcb), [`05F592:Skyrim.esm`](perks/PERKS_044.md#r-afbd60a632b3), [`0C1E92:Skyrim.esm`](perks/PERKS_044.md#r-0bc7d54ef774), [`03AF84:Skyrim.esm`](perks/PERKS_044.md#r-55231644c77c), [`0C1E96:Skyrim.esm`](perks/PERKS_044.md#r-0b1dbf7ddd3d), [`105F2B:Skyrim.esm`](perks/PERKS_045.md#r-80373f087f6c).

## ModTargetStagger

- Ocorrências de effect: 6; perks distintas: 5.
- Papel a validar: Stagger aplicado ao alvo.
- Contexto mínimo: ataque, alvo e tipo de impacto.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: dano zero não implica automaticamente stagger zero ou permitido; testar política. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000890:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-40b8d56296f2), [`00088E:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-b7e30ea1ca96), [`000876:For Honor Balance Patch.esp`](perks/PERKS_009.md#r-eef5f3d5b3e0), [`0E8279:Skyrim.esm`](perks/PERKS_023.md#r-8f276be66392), [`106258:Skyrim.esm`](perks/PERKS_055.md#r-2d9289b0a65e).

## ModTelekinesisDamage

- Ocorrências de effect: 3; perks distintas: 3.
- Papel a validar: Dano de objeto lançado por telecinese.
- Contexto mínimo: objeto, owner, lançamento e contato.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: host novo não repete impacto de objeto antigo. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`3C7556:MysticismMagic.esp`](perks/PERKS_014.md#r-10cad5c3ac8c), [`02CB0D:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_046.md#r-9da4f265f8ca), [`25197E:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_046.md#r-a499408fff3c).

## ModTemperingHealth

- Ocorrências de effect: 22; perks distintas: 15.
- Papel a validar: Resultado de tempering do item.
- Contexto mínimo: instância, receita, skill e material.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: upgrade não multiplica toda arma da mesma base nem duplica material. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`0A725C:Skyrim.esm`](perks/PERKS_001.md#r-beb9e1f662ae), [`21BD6B:ccBGSSSE025-AdvDSGS.esm`](perks/PERKS_004.md#r-f580c9074e6a), [`0CF788:Skyrim.esm`](perks/PERKS_035.md#r-a908eaba9cba), [`00D83A:Dawnguard.esm`](perks/PERKS_045.md#r-3a1689817635), [`3B9399:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_057.md#r-a02ca415f2ed), [`0CB414:Skyrim.esm`](perks/PERKS_060.md#r-a17f77339868), [`0CB413:Skyrim.esm`](perks/PERKS_060.md#r-9a6325446320), [`024108:Dragonborn.esm`](perks/PERKS_060.md#r-ae725baf50f6), [`052190:Skyrim.esm`](perks/PERKS_060.md#r-d4fcf9311a50), [`0CB40E:Skyrim.esm`](perks/PERKS_060.md#r-964821445dca), [`0CB412:Skyrim.esm`](perks/PERKS_060.md#r-fafe9a88d856), [`0CB40F:Skyrim.esm`](perks/PERKS_060.md#r-5421fce7849b), [`0CB411:Skyrim.esm`](perks/PERKS_060.md#r-4401abe3eaa9), [`0CB410:Skyrim.esm`](perks/PERKS_060.md#r-0a9c6d390786), [`0CB40D:Skyrim.esm`](perks/PERKS_060.md#r-7eff36e4a77d).

## ModWardMagickaAbsorptionPct

- Ocorrências de effect: 3; perks distintas: 2.
- Papel a validar: Absorção de Magicka por ward.
- Contexto mínimo: ward ativo, spell recebida e recurso.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: absorção/ganho não é creditado novamente por observador. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`017740:Dragonborn.esm`](perks/PERKS_042.md#r-061f3528a9c5), [`068BCC:Skyrim.esm`](perks/PERKS_056.md#r-f6de31fd0908).

## PurifyAlchemyIngredients

- Ocorrências de effect: 1; perks distintas: 1.
- Papel a validar: Seleção/filtragem de efeitos alquímicos.
- Contexto mínimo: ingredientes, recipe e efeito benéfico/nocivo.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: produto remove somente effects previstos pelo contrato certificado. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`05821D:Skyrim.esm`](perks/PERKS_045.md#r-57c016242151).

## SetActivateLabel

- Ocorrências de effect: 4; perks distintas: 4.
- Papel a validar: Texto da ação de ativação.
- Contexto mínimo: objeto/opção e localização.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: mudar texto não muda a permissão/efeito econômico. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`008A6E:Dawnguard.esm`](perks/PERKS_007.md#r-31d884664ea3), [`02BA1D:Skyrim.esm`](perks/PERKS_007.md#r-64022d3dd017), [`03D597:Dragonborn.esm`](perks/PERKS_008.md#r-184cc459a8f7), [`0008CD:SCSI-ACTbfco-Main.esp`](perks/PERKS_018.md#r-e0be3d3eed88).

## SetBooleanGraphVariable

- Ocorrências de effect: 5; perks distintas: 5.
- Papel a validar: Variável booleana do grafo de animação.
- Contexto mínimo: ator/grafo, evento e lifecycle.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: variável visual não é prova autoritativa de hit/power attack. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`000855:Manbeast.esp`](perks/PERKS_011.md#r-16761f88cdab), [`149CEE:Skyrim Revamped - Complete Enemy Overhaul.esp`](perks/PERKS_021.md#r-24ba3a707cca), [`058F63:Skyrim.esm`](perks/PERKS_047.md#r-cf011f9e5e58), [`105F19:Skyrim.esm`](perks/PERKS_047.md#r-45ac2bc5c9e7), [`106253:Skyrim.esm`](perks/PERKS_048.md#r-0d9a71433afd).

## SetLockpickStartingArc

- Ocorrências de effect: 1; perks distintas: 1.
- Papel a validar: Posição inicial do lockpick.
- Contexto mínimo: minigame e tentativa.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: restart de UI não rerolla vantagem ilimitada. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`058208:Skyrim.esm`](perks/PERKS_054.md#r-9f7c89e9a550).

## SetSweepAttack

- Ocorrências de effect: 4; perks distintas: 4.
- Papel a validar: Habilitação/seleção de sweep.
- Contexto mínimo: geometria autorizada e conjunto de vítimas.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: cada vítima é validada e atingida uma vez por swing. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`00082A:Manbeast.esp`](perks/PERKS_012.md#r-96ce8f6eb043), [`00080C:UltimateEbonyWarrior.esp`](perks/PERKS_042.md#r-4f1ee13f1bcb), [`03AF9E:Skyrim.esm`](perks/PERKS_043.md#r-8acbece383e6), [`344BC8:Vokrii - Minimalistic Perks of Skyrim.esp`](perks/PERKS_055.md#r-1b07afe3d161).

## ShouldApplyPlacedItem

- Ocorrências de effect: 2; perks distintas: 2.
- Papel a validar: Gate de efeito associado a item colocado.
- Contexto mínimo: objeto colocado, alvo e evento de aplicação.
- Estado no registry: fora do registry reduzido; requer handler/port e homologação.
- Teste específico: fixture de entrada valida o significado antes de permitir side effect. Adicionar condição falsa, contexto ausente, concorrência e reconnect.
- Fichas: [`00084F:ccBGSSSE037-Curios.esl`](perks/PERKS_004.md#r-031a82039303), [`105F28:Skyrim.esm`](perks/PERKS_055.md#r-e24976f010c8).
