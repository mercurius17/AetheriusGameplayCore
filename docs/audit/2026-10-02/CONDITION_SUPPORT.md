# Conditions observadas e plano de suporte

Contagens são das extrações disponíveis, não cobertura completa de records com expansão truncada. `Handler base` é somente existência no código da factory; nenhum status abaixo certifica integração no GameplayCore. Cada função precisa do contexto/parâmetros/RunOn do occurrence e golden.

|Função|Ocorrências|Handler base|Prioridade / fonte de contexto proposta|Exemplo (Housecarl)|
|---|---:|---|---|---|
|HasPerk|5295|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`10F21E:Skyrim.esm`|
|GetIsID|5279|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`10FAED:Skyrim.esm`|
|HasKeyword|3763|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`10FE04:Skyrim.esm`|
|GetItemCount|2641|Sim; validar semântica|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`10F13F:Skyrim.esm`|
|GetInFaction|2248|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`10F9DB:Skyrim.esm`|
|EPTemperingItemIsEnchanted|1972|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`000F61:Skyrim.esm`|
|GetGlobalValue|1646|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`0E7326:Skyrim.esm`|
|HasMagicEffect|1482|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`105874:Skyrim.esm`|
|GetBaseActorValue|1117|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`1090A4:Skyrim.esm`|
|LocationHasKeyword|818|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0009EE:ccQDRSSE001-SurvivalMode.esl`|
|GetInCurrentLocAlias|766|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`106A5E:Skyrim.esm`|
|GetLevel|751|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`10A284:Skyrim.esm`|
|HasRefType|678|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10BF8E:Skyrim.esm`|
|HasMagicEffectKeyword|625|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`018C58:Dawnguard.esm`|
|GetDead|617|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`0F5D24:Skyrim.esm`|
|IsUndead|498|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`10FDD4:Skyrim.esm`|
|GetIsReference|443|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`02BA1D:Skyrim.esm`|
|HasSpell|428|Sim; validar semântica|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`06C3D0:Skyrim.esm`|
|WornHasKeyword|379|Sim; validar semântica|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`051B1A:Skyrim.esm`|
|IsLinkedTo|340|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10BF8E:Skyrim.esm`|
|SpellHasCastingPerk|321|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`1076FE:Skyrim.esm`|
|GetEquippedItemType|317|Sim; validar semântica|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`012CCC:Dawnguard.esm`|
|EPMagic_SpellHasKeyword|306|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10CB92:Skyrim.esm`|
|IsInList|287|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0009EE:ccQDRSSE001-SurvivalMode.esl`|
|GetIsRace|282|Sim; validar semântica|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`10582E:Skyrim.esm`|
|GetIsVoiceType|278|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10F676:Skyrim.esm`|
|IsPowerAttacking|275|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0008CD:SCSI-ACTbfco-Main.esp`|
|IsChild|272|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10582E:Skyrim.esm`|
|GetDistance|267|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`205A8B:Triumvirate - Mage Archetypes.esp`|
|GetPlayerTeammate|265|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0E40D0:Skyrim.esm`|
|IsCommandedActor|239|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10FDD4:Skyrim.esm`|
|IsHostileToActor|239|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10FDD3:Skyrim.esm`|
|GetStageDone|228|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0F11A9:Skyrim.esm`|
|LocationHasRefType|223|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`105D1D:Skyrim.esm`|
|IsInCombat|217|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10FC17:Skyrim.esm`|
|GetActorValuePercent|210|Sim; validar semântica|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`109D0D:Skyrim.esm`|
|GetInCurrentLoc|208|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`00080A:RASS - Visual Effects.esl`|
|IsUnique|206|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`028A13:Skyrim.esm`|
|GetInCurrentLocFormList|205|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`03784E:Dragonborn.esm`|
|GetFactionRank|202|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0C6E33:Skyrim.esm`|
|GetActorValue|201|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`109D0D:Skyrim.esm`|
|GetCurrentTime|200|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0E5F64:Skyrim.esm`|
|WornApparelHasKeywordCount|200|Sim; validar semântica|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`10C1CA:Skyrim.esm`|
|IsAttackType|199|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`01DF8F:Dragonborn.esm`|
|GetStage|198|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10F21E:Skyrim.esm`|
|GetIsObjectType|195|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`000801:FirstPersonInteractions.esp`|
|GetRandomPercent|193|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`106255:Skyrim.esm`|
|GetIsPlayableRace|192|Sim; validar semântica|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`000D65:XPMSE.esp`|
|EPMagic_SpellHasSkill|180|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0F5B56:Skyrim.esm`|
|GetVMQuestVariable|178|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10FAED:Skyrim.esm`|
|IsInInterior|139|Sim; validar semântica|P2: host/world/quest/event context; unsupported até prova específica|`10319E:Skyrim.esm`|
|HasSameEditorLocAsRefAlias|123|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`106A5E:Skyrim.esm`|
|GetShouldAttack|118|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0E0CD2:Skyrim.esm`|
|GetQuestCompleted|110|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`253F79:LostGrimoire.esp`|
|GetDisabled|106|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`06693F:Stendarr Rising.esp`|
|GetAllowWorldInteractions|104|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0AD7AD:Skyrim.esm`|
|IsActor|102|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`00C60E:Dawnguard.esm`|
|GetEquipped|94|Sim; validar semântica|P2: host/world/quest/event context; unsupported até prova específica|`105A03:Skyrim.esm`|
|GetIsEditorLocAlias|94|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`105D1D:Skyrim.esm`|
|LocAliasIsLocation|92|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`106A5E:Skyrim.esm`|
|GetIsEditorLocation|90|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0876E6:Skyrim.esm`|
|GetInWorldspace|83|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`012D15:Dawnguard.esm`|
|IsSwimming|79|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`02BA1D:Skyrim.esm`|
|GetRestrained|74|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0E5F5B:Skyrim.esm`|
|IsBlocking|67|Sim; validar semântica|P2: host/world/quest/event context; unsupported até prova específica|`10CAAE:Skyrim.esm`|
|IsPlayerInRegion|65|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`00087F:ccQDRSSE001-SurvivalMode.esl`|
|GetInCell|58|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0FE927:LostGrimoire.esp`|
|GetQuestRunning|53|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`02BA1D:Skyrim.esm`|
|EffectWasDualCast|53|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`154603:Triumvirate - Mage Archetypes.esp`|
|GetIsAliasRef|53|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10557C:Skyrim.esm`|
|GetRelationshipRank|51|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`07431B:Skyrim.esm`|
|EPMagic_IsAdvanceSkill|42|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0E5F49:Skyrim.esm`|
|IsSprinting|42|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10CAAE:Skyrim.esm`|
|GetKeywordDataForCurrentLocation|42|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`050AF1:Skyrim.esm`|
|GetIsCurrentWeather|41|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`00081B:RASS - Visual Effects.esl`|
|IsCasting|37|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`24272F:Triumvirate - Mage Archetypes.esp`|
|GetDetected|33|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`2214DC:LostGrimoire.esp`|
|HasFamilyRelationship|28|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`02C493:Skyrim.esm`|
|IsEssential|27|Não registrado|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`0F5D24:Skyrim.esm`|
|GetIsGhost|27|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`034839:Dragonborn.esm`|
|GetVATSFrontAreaFree|27|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`30818C:Triumvirate - Mage Archetypes.esp`|
|IsSneaking|26|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0F23C6:Skyrim.esm`|
|IsGuard|26|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0D66F2:Skyrim.esm`|
|IsAttacking|24|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0008CD:SCSI-ACTbfco-Main.esp`|
|IsInScene|21|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`2B944F:LostGrimoire.esp`|
|GetVATSBackAreaFree|20|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`30818E:Triumvirate - Mage Archetypes.esp`|
|IsPS3|20|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`00A304:unofficial skyrim special edition patch.esp`|
|GetMovementDirection|19|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`30818C:Triumvirate - Mage Archetypes.esp`|
|EPAlchemyEffectHasKeyword|19|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0CB06C:Apothecary.esp`|
|GetRelativeAngle|18|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`30D2A5:Triumvirate - Mage Archetypes.esp`|
|GetValue|18|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10FBF5:Skyrim.esm`|
|GetLockLevel|17|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0E7326:Skyrim.esm`|
|GetLightLevel|17|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`395F0F:Triumvirate - Mage Archetypes.esp`|
|IsDualCasting|17|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`02A78F:Triumvirate - Mage Archetypes.esp`|
|GetVATSMode|17|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`330A39:Triumvirate - Mage Archetypes.esp`|
|GetGraphVariableInt|16|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0008CD:SCSI-ACTbfco-Main.esp`|
|LocAliasHasKeyword|15|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`006BAC:Dawnguard.esm`|
|IsWeaponSkillType|14|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0FF15B:Skyrim.esm`|
|HasBeenEaten|13|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0EE5C3:Skyrim.esm`|
|IsRidingMount|13|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10CAAF:Skyrim.esm`|
|GetFactionRelation|13|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`047AE6:Skyrim.esm`|
|GetSleeping|12|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`02C29E:Dragonborn.esm`|
|GetPos|12|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`00087F:ccQDRSSE001-SurvivalMode.esl`|
|GetHeadingAngle|12|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`04CB47:ShadowSpellPackage.esp`|
|GetKeywordDataForLocation|12|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0BD758:Skyrim.esm`|
|GetLineOfSight|12|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0ADC8C:Skyrim.esm`|
|GetDestroyed|12|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`3A012D:Triumvirate - Mage Archetypes.esp`|
|GetLocked|11|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0E7326:Skyrim.esm`|
|GetPCMiscStat|11|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`1D54FD:LostGrimoire.esp`|
|GetIgnoreFriendlyHits|11|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`3C0BB8:LostGrimoire.esp`|
|GetInSharedCrimeFaction|11|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`03833C:Skyrim.esm`|
|GetCombatState|10|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`005137:Dawnguard.esm`|
|IsRaining|10|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`03D382:Dragonborn.esm`|
|GetIsCurrentPackage|10|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0FC076:Skyrim.esm`|
|GetOffersServicesNow|10|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`03EFBA:Skyrim.esm`|
|GetSitting|9|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`00283C:Dawnguard.esm`|
|GetFlyingState|9|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`03CD63:Dragonborn.esm`|
|GetDestructionStage|9|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`3A012D:Triumvirate - Mage Archetypes.esp`|
|IsBleedingOut|8|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`00E7D1:Dawnguard.esm`|
|HasBoundWeaponEquipped|8|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`423DB2:Triumvirate - Mage Archetypes.esp`|
|GetCurrentDeliveryType|8|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`2EE9A2:Vokrii - Minimalistic Perks of Skyrim.esp`|
|GetIsSex|7|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0727FB:Skyrim.esm`|
|GetIsFlying|7|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`008446:Dawnguard.esm`|
|IsCombatTarget|7|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`1364C6:LostGrimoire.esp`|
|GetAttackState|7|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`000805:Aetherius.esp`|
|IsWeaponOut|7|Sim; validar semântica|P2: host/world/quest/event context; unsupported até prova específica|`5026A0:Vokrii - Minimalistic Perks of Skyrim.esp`|
|HasAssociationType|7|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0403B0:Skyrim.esm`|
|GetDeadCount|7|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`046EF1:Skyrim.esm`|
|IsOnFlyingMount|6|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`03784E:Dragonborn.esm`|
|HasEquippedSpell|6|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`24272F:Triumvirate - Mage Archetypes.esp`|
|HasLoaded3D|6|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`000D65:XPMSE.esp`|
|IsUnlockedDoor|5|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0110CF:Dawnguard.esm`|
|IsSnowing|5|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`00081B:RASS - Visual Effects.esl`|
|GetVATSLeftAreaFree|5|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`30818F:Triumvirate - Mage Archetypes.esp`|
|IsInSameCurrentLocAsRefAlias|5|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`1062A7:Skyrim.esm`|
|IsProtected|5|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`025251:Skyrim.esm`|
|IsInDangerousWater|4|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`03784E:Dragonborn.esm`|
|IsWeaponMagicOut|4|Sim; validar semântica|P2: host/world/quest/event context; unsupported até prova específica|`35E384:Triumvirate - Mage Archetypes.esp`|
|GetCurrentCastingType|4|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`2EE9A2:Vokrii - Minimalistic Perks of Skyrim.esp`|
|IsInDialogueWithPlayer|4|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0190C3:Dawnguard.esm`|
|GetPermanentActorValue|3|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0581ED:Skyrim.esm`|
|GetVATSRightAreaFree|3|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`30818D:Triumvirate - Mage Archetypes.esp`|
|IsPleasant|3|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0F5B5D:Skyrim.esm`|
|IsTrespassing|3|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`33EAD2:Curse of the Vampire.esp`|
|IsCurrentFurnitureObj|3|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`017739:Dragonborn.esm`|
|EPAlchemyGetMakingPoison|3|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`058216:Skyrim.esm`|
|GetMovementSpeed|2|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`01A934:Dawnguard.esm`|
|GetHealthPercentage|2|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`03CD63:Dragonborn.esm`|
|IsOverEncumbered|2|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`000917:ccQDRSSE001-SurvivalMode.esl`|
|IsMoving|2|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0009C5:ccQDRSSE001-SurvivalMode.esl`|
|GetPCIsSex|2|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`000806:Shadow Clone on Self.esp`|
|GetDisease|2|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`3C89D0:Triumvirate - Mage Archetypes.esp`|
|IsRunning|2|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`191252:Triumvirate - Mage Archetypes.esp`|
|SpellHasKeyword|2|Sim; validar semântica|P1: catálogo + actor/equipment/effect snapshot; implementar e validar|`F08A1B:MysticismMagic.esp`|
|GetVampireFeed|2|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0CF02C:Skyrim.esm`|
|SameRaceAsPC|2|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`058F75:Skyrim.esm`|
|IsTorchOut|2|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0FE304:Skyrim.esm`|
|GetCombatTargetHasKeyword|2|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`036E9E:Vokrii - Minimalistic Perks of Skyrim.esp`|
|IsScenePlaying|2|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0D661C:Skyrim.esm`|
|GetTalkedToPC|2|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`020BC9:Skyrim.esm`|
|IsShieldOut|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`105A03:Skyrim.esm`|
|IsAllowedToFly|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`10D4BC:Skyrim.esm`|
|IsInFurnitureState|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`15DDD5:Apothecary.esp`|
|IsStaggered|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`ADA501:Update.esm`|
|IsPlayerActionActive|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0D79A0:Skyrim.esm`|
|IsPoison|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`105F28:Skyrim.esm`|
|IsPlayerGrabbedRef|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`25BB97:Vokrii - Minimalistic Perks of Skyrim.esp`|
|ShouldAttackKill|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`395C6B:Vokrii - Minimalistic Perks of Skyrim.esp`|
|GetWantBlocking|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`900017:Update.esm`|
|GetClothingValue|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0350F4:Skyrim.esm`|
|GetCrimeGold|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0BC09D:Skyrim.esm`|
|GetMapMarkerVisible|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`03923B:Dragonborn.esm`|
|GetDaysInJail|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0167D3:Skyrim.esm`|
|GetIntimidateSuccess|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`025231:Skyrim.esm`|
|GetLowestRelationshipRank|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`039792:Skyrim.esm`|
|HasSameEditorLocAsRef|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`03FA17:Skyrim.esm`|
|IsInMyOwnedCell|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0C7919:Skyrim.esm`|
|GetLocAliasRefTypeAliveCount|1|Não registrado|P2: host/world/quest/event context; unsupported até prova específica|`0D5F08:Skyrim.esm`|
