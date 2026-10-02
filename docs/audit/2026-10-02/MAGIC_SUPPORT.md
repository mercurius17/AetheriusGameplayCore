# Archetypes reais e gates

A coluna plano não declara suporte implementado. Runtime mágico integrado permanece bloqueado B02; cada record ainda exige flags/conditions/target/cast semantics.

|Archetype|MGEFs|Plano de executor / requisito|Exemplo|
|---|---:|---|---|
|Script|1782|F10c: port/implementação específica de cada script/record; sem executor genérico presumido|`017192:Skyrim.esm`|
|ValueModifier|1160|F10a: AV/stacking/resistance auditados; ActiveEffectStore existente + ResourcePort|`017331:Skyrim.esm`|
|PeakValueModifier|931|F10a: AV/stacking/resistance auditados; ActiveEffectStore existente + ResourcePort|`01729D:Skyrim.esm`|
|SummonCreature|342|F10c: Enemy spawn/lifecycle + quest safety; bloquear sem port|`10EE4B:Skyrim.esm`|
|DualValueModifier|274|F10a: AV/stacking/resistance auditados; ActiveEffectStore existente + ResourcePort|`10FDD3:Skyrim.esm`|
|Absorb|167|F10a: AV/stacking/resistance auditados; ActiveEffectStore existente + ResourcePort|`0FDBC8:Skyrim.esm`|
|Cloak|148|F10b: área/LOS/target schedule/cadência autorizados|`10FC13:Skyrim.esm`|
|Stagger|130|F10b/c: especificação por record/contexto; unsupported até golden + host capability|`10AB4A:Skyrim.esm`|
|Rally|60|F10c: AI/context authority; bloquear sem port|`09E0C5:Skyrim.esm`|
|Demoralize|51|F10c: AI/context authority; bloquear sem port|`0E40C2:Skyrim.esm`|
|Paralysis|50|F10b/c: especificação por record/contexto; unsupported até golden + host capability|`0D4FF1:Skyrim.esm`|
|SpawnHazard|49|F10b: área/LOS/target schedule/cadência autorizados|`0B238A:Skyrim.esm`|
|Calm|41|F10c: AI/context authority; bloquear sem port|`10FF0C:Skyrim.esm`|
|DetectLife|39|F10b: separar apresentação local de custo/grant autorizado|`010A80:Dawnguard.esm`|
|Invisibility|38|F10b/c: especificação por record/contexto; unsupported até golden + host capability|`0FDBC2:Skyrim.esm`|
|TurnUndead|27|F10c: AI/context authority; bloquear sem port|`0FB408:Skyrim.esm`|
|Bound|27|F10b/c: especificação por record/contexto; unsupported até golden + host capability|`0CBE31:LostGrimoire.esp`|
|Frenzy|24|F10c: AI/context authority; bloquear sem port|`10FDD4:Skyrim.esm`|
|Reanimate|18|F10c: Enemy spawn/lifecycle + quest safety; bloquear sem port|`0E152A:Skyrim.esm`|
|Light|17|F10b: separar apresentação local de custo/grant autorizado|`0749B3:Skyrim.esm`|
|Etherealize|17|F10b/c: especificação por record/contexto; unsupported até golden + host capability|`064D68:Skyrim.esm`|
|AccumulateMagnitude|17|F10a: AV/stacking/resistance auditados; ActiveEffectStore existente + ResourcePort|`00082B:PuddingFace_SimpleSpellsPackage.esp`|
|CureDisease|12|F10b: remoção seletiva por elegibilidade/source, nunca remove-all|`10E949:Skyrim.esm`|
|SpawnScriptedRef|12|F10c: Enemy spawn/lifecycle + quest safety; bloquear sem port|`07430D:Skyrim.esm`|
|SlowTime|12|F10b/c: especificação por record/contexto; unsupported até golden + host capability|`048ACD:Skyrim.esm`|
|Banish|10|F10c: Enemy spawn/lifecycle + quest safety; bloquear sem port|`000819:ccvsvsse003-necroarts.esl`|
|Disarm|8|F10b/c: especificação por record/contexto; unsupported até golden + host capability|`105F1B:Skyrim.esm`|
|EnhanceWeapon|6|F10b/c: especificação por record/contexto; unsupported até golden + host capability|`03CECE:Dragonborn.esm`|
|CurePoison|5|F10b: remoção seletiva por elegibilidade/source, nunca remove-all|`109ADD:Skyrim.esm`|
|GrabActor|5|F10b/c: especificação por record/contexto; unsupported até golden + host capability|`007EBD:Dawnguard.esm`|
|SoulTrap|4|F10b/c: especificação por record/contexto; unsupported até golden + host capability|`0F5D24:Skyrim.esm`|
|CommandSummoned|3|F10c: Enemy spawn/lifecycle + quest safety; bloquear sem port|`06F954:Skyrim.esm`|
|Werewolf|2|F10c: state machine transformation + race/grants; bloquear sem transição validada|`06E1DD:Skyrim.esm`|
|Telekinesis|2|F10b/c: especificação por record/contexto; unsupported até golden + host capability|`1364D4:LostGrimoire.esp`|
|Dispel|2|F10b: remoção seletiva por elegibilidade/source, nunca remove-all|`000981:PuddingFace_SimpleSpellsPackage.esp`|
|Guide|1|F10b: separar apresentação local de custo/grant autorizado|`02113F:Skyrim.esm`|
|WerewolfFeed|1|F10c: state machine transformation + race/grants; bloquear sem transição validada|`106395:Skyrim.esm`|
|VampireLord|1|F10c: state machine transformation + race/grants; bloquear sem transição validada|`00283C:Dawnguard.esm`|
|ValueAndParts|1|F10a: AV/stacking/resistance auditados; ActiveEffectStore existente + ResourcePort|`03B00F:Dragonborn.esm`|
