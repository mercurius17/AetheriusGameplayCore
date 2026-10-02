# Overrides por plugin e revisão de impacto

Esta é uma revisão estrutural gerada de records/masters/cadeias reais, com exemplos concretos e instruções de consumo. Não é classificação pelo nome, nem declaração de inspeção humana integral. O exame manual aprofundado de ADXP está na seção12 do documento principal. Headers contam todo tipo; árvores/campos selecionados cobrem 24 assinaturas centrais. Diferença de campo não prova intenção.

As diferenças abaixo são do predecessor contra o winner, isto é, o valor fora do parêntese pertence ao predecessor. Listas podem ser resumidas; consultar winning-fields e expandir subpaths para aprovação final. Ausência de exemplo não significa ausência de impacto.

## 1. Update.esm

Formato **ESM**; provider **<game Data>**; overrides em headers **6044**; winner de **336** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** GMST=53, KYWD=30, TXST=7, GLOB=16, FACT=4, RACE=27, MGEF=53, LTEX=15, ENCH=6, SPEL=30, SCRL=3, ACTI=28, ARMO=156, BOOK=5, CONT=11, DOOR=11, INGR=4, MISC=4, STAT=379, MSTT=2, GRAS=27, FLOR=5, FURN=1, WEAP=25, AMMO=1, NPC_=21, LVLN=3, ALCH=26, COBJ=6, PROJ=1, LVLI=8, WTHR=69, REGN=2, NAVI=1, CELL=2319, REFR=9619, ACHR=44, NAVM=309, WRLD=13, LAND=1743, DIAL=90, INFO=139, QUST=84, IDLE=152, PACK=20, LSCR=3, WATR=38, EXPL=1, IMGS=217, IMAD=40, FLST=15, PERK=16, BPTD=1, AVIF=1, CAMS=108, CPTH=160, IPCT=17, IPDS=17, ARMA=30, ECZN=2, LCTN=11, MESG=93, DOBJ=1, MUSC=3, FSTP=17, FSTS=2, DLBR=11, MUST=6, DLVW=5, SCEN=9, MATO=32, SNDR=23, VOLI=36.

**Campos selecionados diferentes do predecessor:** VirtualMachineAdapter.Scripts (42), VirtualMachineAdapter.Aliases (11), Aliases (11), Flags (9), MajorFlags (8), Stages (7), VirtualMachineAdapter.Fragments (7), BodyTemplate.FirstPersonFlags (6), Effects (5), Conditions (4), DialogConditions (3), VirtualMachineAdapter.ObjectFormat (2).

- `0EE5C3:Skyrim.esm` / `DA11Cannibalism`: Skyrim.esm → Update.esm.
  - Effects: 1 vs Update.esm 1 item(s), contents differ — only here: [0] Spell=(null link), EntryPoint=Activate, PerkConditionTabCount=2 (+134 more field(s)); only in Update.esm: [0] Spell=(null link), EntryPoint=Activate, PerkConditionTabCount=2 (+159 more field(s))
- `10FDD6:Skyrim.esm` / `MS04RewardNoDisplay`: Skyrim.esm → Update.esm.
  - Effects: 1 vs Update.esm 1 item(s), contents differ — only here: [0] BaseEffect=10FDD7:Skyrim.esm, Data=[EffectData], Data.Magnitude=0.25 (+3 more field(s)); only in Update.esm: [0] BaseEffect=10FDD7:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s))
- `10C1CA:Skyrim.esm` / `PerkMatchingSetHeavy`: Skyrim.esm → Update.esm.
  - Effects: 1 vs Update.esm 1 item(s), contents differ — only here: [0] BaseEffect=06BBD0:Skyrim.esm, Data=[EffectData], Data.Magnitude=0.25 (+228 more field(s)); only in Update.esm: [0] BaseEffect=06BBD0:Skyrim.esm, Data=[EffectData], Data.Magnitude=0.25 (+278 more field(s))
- `06BBD1:Skyrim.esm` / `PerkMatchingSet`: Skyrim.esm → Update.esm.
  - Effects: 1 vs Update.esm 1 item(s), contents differ — only here: [0] BaseEffect=06BBD0:Skyrim.esm, Data=[EffectData], Data.Magnitude=0.25 (+228 more field(s)); only in Update.esm: [0] BaseEffect=06BBD0:Skyrim.esm, Data=[EffectData], Data.Magnitude=0.25 (+403 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 2. Dawnguard.esm

Formato **ESM**; provider **<game Data>**; overrides em headers **2278**; winner de **318** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** GMST=7, KYWD=101, LCRT=15, AACT=2, TXST=53, GLOB=176, CLAS=5, FACT=82, HDPT=41, RACE=46, SOUN=71, ASPC=4, MGEF=263, LTEX=12, ENCH=28, SPEL=308, SCRL=1, ACTI=282, TACT=3, ARMO=171, BOOK=65, CONT=37, DOOR=30, INGR=5, LIGH=31, MISC=59, STAT=930, MSTT=34, GRAS=1, TREE=48, FLOR=3, FURN=30, WEAP=100, AMMO=25, NPC_=623, LVLN=92, KEYM=5, ALCH=4, IDLM=2, COBJ=91, PROJ=35, HAZD=1, LVLI=109, WTHR=15, CLMT=1, RFCT=42, REGN=50, NAVI=1, CELL=11334, REFR=66094, NAVM=1922, ACHR=908, PHZD=4, WRLD=16, LAND=2223, DIAL=2038, INFO=3457, QUST=199, IDLE=388, PACK=682, CSTY=19, LSCR=19, LVSP=3, ANIO=4, WATR=11, EFSH=52, EXPL=45, DEBR=2, IMGS=9, IMAD=37, FLST=77, PERK=57, BPTD=4, ADDN=2, AVIF=3, VTYP=21, IPCT=47, IPDS=41, ARMA=150, ECZN=19, LCTN=62, MESG=89, DOBJ=1, LGTM=24, MUSC=14, FSTP=37, FSTS=7, SMBN=11, SMQN=36, SMEN=1, DLBR=403, MUST=67, DLVW=157, WOOP=12, SHOU=24, RELA=1, SCEN=198, OTFT=69, ARTO=61, MATO=2, MOVT=6, SNDR=399, SOPM=6, CLFM=1, REVB=1, VOLI=1.

**Campos selecionados diferentes do predecessor:** MajorFlags (101), Effects (20), PlayerSkills.Unused (13), PlayerSkills.Unused2 (13), Entries (12), Base (10), VirtualMachineAdapter.Scripts (9), Items (8), BaseCost (7), DefaultOutfit (5), Conditions (4), Location (3).

- `02BA1D:Skyrim.esm` / `PlayerWerewolfFeed`: Skyrim.esm → Dawnguard.esm.
  - Effects: 6 vs Dawnguard.esm 8 item(s) — only here: [0] Modification=Add, Value=1, EntryPoint=FilterActivation (+208 more field(s)); [1] Text=Feed, EntryPoint=SetActivateLabel, PerkConditionTabCount=2 (+159 more field(s)) (+4 more element(s)); only in Dawnguard.esm: [0] Modification=Add, Value=1, EntryPoint=FilterActivation (+136 more field(s)); [1] Modification=Add, Value=1, EntryPoint=FilterActivation (+183 more field(s)) (+6 more element(s))
- `0ED09E:Skyrim.esm` / `AbVampire04`: Skyrim.esm → Dawnguard.esm.
  - Effects: 1 vs Dawnguard.esm 1 item(s), contents differ — only here: [0] BaseEffect=024315:Skyrim.esm, Data=[EffectData], Data.Magnitude=100 (+3 more field(s)); only in Dawnguard.esm: [0] BaseEffect=024315:Skyrim.esm, Data=[EffectData], Data.Magnitude=50 (+3 more field(s))
- `0ED09D:Skyrim.esm` / `AbVampire03`: Skyrim.esm → Dawnguard.esm.
  - Effects: 1 vs Dawnguard.esm 1 item(s), contents differ — only here: [0] BaseEffect=024315:Skyrim.esm, Data=[EffectData], Data.Magnitude=75 (+3 more field(s)); only in Dawnguard.esm: [0] BaseEffect=024315:Skyrim.esm, Data=[EffectData], Data.Magnitude=40 (+3 more field(s))
- `0ED099:Skyrim.esm` / `AbVampire02`: Skyrim.esm → Dawnguard.esm.
  - Effects: 1 vs Dawnguard.esm 1 item(s), contents differ — only here: [0] BaseEffect=024315:Skyrim.esm, Data=[EffectData], Data.Magnitude=50 (+3 more field(s)); only in Dawnguard.esm: [0] BaseEffect=024315:Skyrim.esm, Data=[EffectData], Data.Magnitude=30 (+3 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 3. HearthFires.esm

Formato **ESM**; provider **<game Data>**; overrides em headers **1272**; winner de **86** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** GMST=10, KYWD=235, LCRT=15, TXST=21, GLOB=114, CLAS=1, FACT=142, SOUN=1, MGEF=46, ENCH=43, SPEL=3, ACTI=15, ARMO=5, BOOK=15, CONT=29, DOOR=9, INGR=2, LIGH=1, MISC=559, STAT=186, TREE=33, FLOR=5, FURN=27, WEAP=1, NPC_=50, ALCH=28, IDLM=9, COBJ=507, LVLI=22, NAVI=1, CELL=247, ACHR=213, REFR=12463, NAVM=137, WRLD=6, LAND=34, DIAL=482, INFO=1706, QUST=41, IDLE=36, PACK=280, CSTY=1, LSCR=4, ANIO=6, FLST=66, PERK=1, IPCT=2, IPDS=1, ARMA=2, LCTN=22, MESG=14, DOBJ=1, SMBN=2, SMQN=8, SMEN=1, DLBR=66, DLVW=41, RELA=3, SCEN=4, OTFT=3, SNDR=8.

**Campos selecionados diferentes do predecessor:** MajorFlags (20), VirtualMachineAdapter.Scripts (11), Factions (8), Aliases (6), EventConditions (5), VirtualMachineAdapter (4), VirtualMachineAdapter.Version only in HearthFires.esm (4), VirtualMachineAdapter.ObjectFormat only in HearthFires.esm (4), Flags (3), VirtualMachineAdapter.Aliases only in HearthFires.esm (1), VirtualMachineAdapter.Versioning only in HearthFires.esm (1), VirtualMachineAdapter.ExtraBindDataVersion only in HearthFires.esm (1).

- `013294:Skyrim.esm` / `Knud`: Skyrim.esm → HearthFires.esm.
  - Factions: same 3 item(s), ORDER DIFFERS from HearthFires.esm
- `013359:Skyrim.esm` / `Francois`: Skyrim.esm → HearthFires.esm.
  - Factions: 3 vs HearthFires.esm 4 item(s) — only in HearthFires.esm: [3] Faction=004290:HearthFires.esm, Rank=-1, Fluff=000000
- `013363:Skyrim.esm` / `Hroar`: Skyrim.esm → HearthFires.esm.
  - Factions: 3 vs HearthFires.esm 4 item(s) — only in HearthFires.esm: [3] Faction=004290:HearthFires.esm, Rank=-1, Fluff=000000
- `013378:Skyrim.esm` / `Runa`: Skyrim.esm → HearthFires.esm.
  - Factions: 3 vs HearthFires.esm 4 item(s) — only in HearthFires.esm: [3] Faction=004290:HearthFires.esm, Rank=-1, Fluff=000000

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 4. Dragonborn.esm

Formato **ESM**; provider **<game Data>**; overrides em headers **388**; winner de **48** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** GMST=5, KYWD=69, LCRT=45, TXST=59, GLOB=147, CLAS=15, FACT=102, RACE=32, SOUN=96, ASPC=3, MGEF=321, LTEX=11, ENCH=71, SPEL=272, SCRL=24, ACTI=311, TACT=2, ARMO=741, BOOK=148, CONT=90, DOOR=28, INGR=11, LIGH=29, MISC=26, STAT=1085, MSTT=81, GRAS=3, TREE=32, FLOR=9, FURN=59, WEAP=683, AMMO=5, NPC_=713, LVLN=60, KEYM=38, ALCH=22, IDLM=2, COBJ=182, PROJ=67, HAZD=6, LVLI=632, WTHR=9, CLMT=2, SPGD=2, RFCT=23, REGN=20, NAVI=1, CELL=45237, REFR=78754, NAVM=1723, ACHR=1309, PHZD=55, PGRE=2, WRLD=5, LAND=34515, DIAL=2197, INFO=4421, QUST=256, IDLE=509, PACK=668, CSTY=33, LSCR=30, LVSP=6, ANIO=9, WATR=7, EFSH=55, EXPL=89, DEBR=1, IMGS=9, IMAD=17, FLST=150, PERK=74, BPTD=9, ADDN=1, VTYP=19, MATT=1, IPCT=82, IPDS=60, ARMA=165, ECZN=57, LCTN=98, MESG=177, DOBJ=1, LGTM=10, MUSC=7, FSTP=22, FSTS=11, SMBN=15, SMQN=43, SMEN=2, DLBR=395, MUST=21, DLVW=188, WOOP=14, SHOU=18, RELA=27, SCEN=224, OTFT=57, ARTO=56, MATO=8, MOVT=9, SNDR=377, SOPM=11, VOLI=5.

**Campos selecionados diferentes do predecessor:** Effects (10), Location (6), MajorFlags (5), VirtualMachineAdapter.Scripts (4), PlayerSkills.Unused (4), PlayerSkills.Unused2 (4), BaseCost (3), PlayerSkills.FarAwayModelDistance (3), Factions (3), Perks (3), VirtualMachineAdapter (1), VirtualMachineAdapter.Version only in Dragonborn.esm (1).

- `10E38C:Skyrim.esm` / `MGRSummonDremoraCOPY0000`: Skyrim.esm → Dragonborn.esm.
  - Effects: 1 vs Dragonborn.esm 2 item(s) — only here: [0] BaseEffect=099F35:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+28 more field(s)); only in Dragonborn.esm: [0] BaseEffect=099F35:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+28 more field(s)); [1] BaseEffect=099F35:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+28 more field(s))
- `05D174:Skyrim.esm` / `VoiceFrostBreath3`: Skyrim.esm → Dragonborn.esm.
  - BaseCost=56 (Dragonborn.esm 57)
  - Effects: 3 vs Dragonborn.esm 4 item(s) — only in Dragonborn.esm: [3] BaseEffect=020E96:Dragonborn.esm, Data=[EffectData], Data.Magnitude=0 (+53 more field(s))
- `05D173:Skyrim.esm` / `VoiceFrostBreath2`: Skyrim.esm → Dragonborn.esm.
  - BaseCost=42 (Dragonborn.esm 43)
  - Effects: 3 vs Dragonborn.esm 4 item(s) — only in Dragonborn.esm: [3] BaseEffect=020E96:Dragonborn.esm, Data=[EffectData], Data.Magnitude=0 (+53 more field(s))
- `05D172:Skyrim.esm` / `VoiceFrostBreath1`: Skyrim.esm → Dragonborn.esm.
  - BaseCost=29 (Dragonborn.esm 30)
  - Effects: 3 vs Dragonborn.esm 4 item(s) — only in Dragonborn.esm: [3] BaseEffect=020E96:Dragonborn.esm, Data=[EffectData], Data.Magnitude=0 (+53 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 5. ccBGSSSE001-Fish.esm

Formato **ESM**; provider **CreationClubContent**; overrides em headers **724**; winner de **157** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=13, LCRT=2, TXST=28, GLOB=66, FACT=6, RACE=4, SOUN=5, MGEF=12, ENCH=13, SPEL=9, ACTI=175, ARMO=40, BOOK=57, CONT=20, DOOR=1, INGR=9, LIGH=4, MISC=25, STAT=55, FLOR=11, WEAP=19, NPC_=26, LVLN=1, KEYM=2, ALCH=49, COBJ=96, PROJ=1, LVLI=61, NAVI=1, CELL=610, REFR=3833, ACHR=48, NAVM=3, WRLD=14, DIAL=149, INFO=190, QUST=33, PACK=50, CSTY=2, LSCR=5, EFSH=1, EXPL=3, IMAD=5, FLST=153, ARMA=22, LCTN=9, MESG=31, DLBR=62, SCEN=1, OTFT=11, ARTO=1, SNDR=13.

**Campos selecionados diferentes do predecessor:** MajorFlags (3), Items (1).

- `01A676:Skyrim.esm` / `MilaValentinaREF`: Skyrim.esm → ccBGSSSE001-Fish.esm.
  - MajorFlags=0 (ccBGSSSE001-Fish.esm Persistent)
- `0D9547:Skyrim.esm` / `None`: Skyrim.esm → ccBGSSSE001-Fish.esm.
  - MajorFlags=0 (ccBGSSSE001-Fish.esm InitiallyDisabled)
- `02A9EE:Skyrim.esm` / `None`: Skyrim.esm → ccBGSSSE001-Fish.esm.
  - MajorFlags=Persistent (ccBGSSSE001-Fish.esm 263168)
- `10EE1E:Skyrim.esm` / `critterSalmonLootable`: Skyrim.esm → ccBGSSSE001-Fish.esm.
  - Items: 1 vs ccBGSSSE001-Fish.esm 1 item(s), contents differ — only here: [0] 065C9F:Skyrim.esm; only in ccBGSSSE001-Fish.esm: [0] 00089B:ccBGSSSE001-Fish.esm

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 6. ccQDRSSE001-SurvivalMode.esl

Formato **ESL**; provider **CreationClubContent**; overrides em headers **165**; winner de **33** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=9, GLOB=61, SOUN=18, MGEF=146, SPEL=95, SCRL=2, ACTI=1, STAT=3, ALCH=127, COBJ=13, NAVI=1, CELL=1, REFR=24, NAVM=1, QUST=9, LSCR=13, EFSH=2, IMAD=26, FLST=25, PERK=4, MESG=73, DOBJ=1, SNDR=18.

**Campos selecionados diferentes do predecessor:** Effects (17), Conditions (15), VirtualMachineAdapter (5), VirtualMachineAdapter.Version only in ccQDRSSE001-SurvivalMode.esl (5), VirtualMachineAdapter.ObjectFormat only in ccQDRSSE001-SurvivalMode.esl (5), VirtualMachineAdapter.Scripts (5), BaseCost (1), Flags (1), Archetype (1), Archetype.AssociationKey (1), Archetype.Type (1), Archetype.Association (1).

- `0CDA1D:Skyrim.esm` / `MarriageRested`: Update.esm → ccQDRSSE001-SurvivalMode.esl.
  - Effects: 1 vs ccQDRSSE001-SurvivalMode.esl 2 item(s) — only here: [0] BaseEffect=10D96C:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s)); only in ccQDRSSE001-SurvivalMode.esl: [0] BaseEffect=10D96C:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+28 more field(s)); [1] BaseEffect=00084E:ccQDRSSE001-SurvivalMode.esl, Data=[EffectData], Data.Magnitude=0 (+28 more field(s))
- `0FB981:Skyrim.esm` / `Rested`: Update.esm → ccQDRSSE001-SurvivalMode.esl.
  - Effects: 1 vs ccQDRSSE001-SurvivalMode.esl 2 item(s) — only here: [0] BaseEffect=10D968:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s)); only in ccQDRSSE001-SurvivalMode.esl: [0] BaseEffect=10D968:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+28 more field(s)); [1] BaseEffect=000857:ccQDRSSE001-SurvivalMode.esl, Data=[EffectData], Data.Magnitude=0 (+28 more field(s))
- `0FB984:Skyrim.esm` / `WellRested`: Update.esm → ccQDRSSE001-SurvivalMode.esl.
  - Effects: 1 vs ccQDRSSE001-SurvivalMode.esl 2 item(s) — only here: [0] BaseEffect=10D96B:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s)); only in ccQDRSSE001-SurvivalMode.esl: [0] BaseEffect=10D96B:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+28 more field(s)); [1] BaseEffect=000858:ccQDRSSE001-SurvivalMode.esl, Data=[EffectData], Data.Magnitude=0 (+28 more field(s))
- `108A3F:Skyrim.esm` / `PerkDualFlurry30`: Skyrim.esm → ccQDRSSE001-SurvivalMode.esl.
  - Effects: 1 vs ccQDRSSE001-SurvivalMode.esl 1 item(s), contents differ — only here: [0] BaseEffect=108A3E:Skyrim.esm, Data=[EffectData], Data.Magnitude=1.2 (+120 more field(s)); only in ccQDRSSE001-SurvivalMode.esl: [0] BaseEffect=108A3E:Skyrim.esm, Data=[EffectData], Data.Magnitude=1.2 (+170 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 8. ccvsvsse003-necroarts.esl

Formato **ESL**; provider **Styles of Skyrim - Alchemist Outfit Variations**; overrides em headers **9**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=8, TXST=2, CLAS=1, FACT=3, RACE=4, MGEF=73, ENCH=14, SPEL=50, ACTI=2, ARMO=29, BOOK=13, CONT=1, WEAP=7, AMMO=1, NPC_=59, PROJ=2, HAZD=1, LVLI=17, RFCT=6, CELL=6, REFR=12, WRLD=1, DIAL=2, INFO=2, QUST=2, PACK=1, CSTY=3, LVSP=2, EFSH=18, EXPL=2, FLST=2, PERK=5, VTYP=1, ARMA=26, OTFT=7, ARTO=10, SNDR=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 9. ccBGSSSE025-AdvDSGS.esm

Formato **ESM**; provider **CreationClubContent**; overrides em headers **48**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=8, TXST=13, GLOB=14, FACT=4, HDPT=7, RACE=6, SOUN=3, MGEF=17, ENCH=1, SPEL=17, SCRL=5, ACTI=19, ARMO=40, BOOK=30, CONT=3, DOOR=3, INGR=4, LIGH=4, MISC=8, STAT=45, MSTT=1, WEAP=47, AMMO=6, NPC_=75, LVLN=8, KEYM=2, ALCH=1, COBJ=112, PROJ=4, SLGM=2, LVLI=49, NAVI=1, CELL=21, REFR=2120, ACHR=49, NAVM=3, WRLD=3, DIAL=51, INFO=59, QUST=17, PACK=10, LSCR=2, WATR=2, EFSH=1, IMGS=1, FLST=19, PERK=3, ARMA=36, ECZN=1, LCTN=1, MESG=7, SMBN=1, SMQN=1, DLBR=19, OTFT=18, SNDR=5, CLFM=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 11. unofficial skyrim special edition patch.esp

Formato **ESM**; provider **Unofficial Skyrim Special Edition Patch - USSEP**; overrides em headers **55788**; winner de **3859** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ccbgssse001-fish.esm, ccqdrsse001-survivalmode.esl, ccbgssse037-curios.esl, ccbgssse025-advdsgs.esm, _ResourcePack.esl.

**Tipos nos headers:** GMST=6, KYWD=5, TXST=10, GLOB=21, CLAS=17, FACT=72, RACE=28, SOUN=2, MGEF=422, ENCH=53, SPEL=227, SCRL=47, ACTI=142, ARMO=501, BOOK=627, CONT=89, DOOR=6, INGR=96, LIGH=217, MISC=171, STAT=82, MSTT=13, GRAS=1, TREE=32, FLOR=14, FURN=18, WEAP=530, AMMO=15, NPC_=992, LVLN=11, KEYM=126, ALCH=76, COBJ=91, PROJ=14, HAZD=4, SLGM=5, LVLI=259, WTHR=9, RFCT=1, REGN=2, NAVI=1, CELL=4335, REFR=36513, NAVM=807, ACHR=928, WRLD=43, LAND=2, DIAL=3322, INFO=5696, QUST=653, IDLE=19, PACK=442, LSCR=114, LVSP=2, EFSH=2, EXPL=4, IMAD=1, FLST=33, PERK=130, BPTD=1, AVIF=1, IPCT=10, IPDS=3, ARMA=266, ECZN=18, LCTN=222, MESG=41, FSTP=10, FSTS=1, SMQN=34, DLBR=3, MUST=1, SHOU=7, RELA=15, SCEN=161, OTFT=21, SNDR=48.

**Campos selecionados diferentes do predecessor:** VirtualMachineAdapter.Scripts (667), PlayerSkills.Unused (447), PlayerSkills.Unused2 (447), Aliases (285), Factions (279), MajorFlags (193), VirtualMachineAdapter.Aliases (176), Items (159), Flags (131), Configuration.Flags (117), VirtualMachineAdapter (108), Conditions (107).

- `079AF5:Skyrim.esm` / `DA04BloodHarvestPerk`: Skyrim.esm → unofficial skyrim special edition patch.esp.
  - Effects: 5 vs unofficial skyrim special edition patch.esp 5 item(s), contents differ — only here: [0] Spell=(null link), EntryPoint=Activate, PerkConditionTabCount=2 (+106 more field(s)); [1] Spell=(null link), EntryPoint=Activate, PerkConditionTabCount=2 (+106 more field(s)) (+3 more element(s)); only in unofficial skyrim special edition patch.esp: [0] Spell=(null link), EntryPoint=Activate, PerkConditionTabCount=2 (+131 more field(s)); [1] Spell=(null link), EntryPoint=Activate, PerkConditionTabCount=2 (+131 more field(s)) (+3 more element(s))
- `0AEC05:Skyrim.esm` / `PlayerUnderforgeAccessPerk`: Dawnguard.esm → unofficial skyrim special edition patch.esp.
  - Effects: 1 vs unofficial skyrim special edition patch.esp 1 item(s), contents differ — only here: [0] Modification=Set, Value=1, EntryPoint=FilterActivation (+114 more field(s)); only in unofficial skyrim special edition patch.esp: [0] Modification=Set, Value=1, EntryPoint=FilterActivation (+139 more field(s))
- `0E5F46:Skyrim.esm` / `doomThiefPerk`: Skyrim.esm → unofficial skyrim special edition patch.esp.
  - Effects: 1 vs unofficial skyrim special edition patch.esp 1 item(s), contents differ — only here: [0] Modification=Multiply, Value=1.2, EntryPoint=ModSkillUse (+172 more field(s)); only in unofficial skyrim special edition patch.esp: [0] Modification=Multiply, Value=1.2, EntryPoint=ModSkillUse (+149 more field(s))
- `0E5F4A:Skyrim.esm` / `doomWarriorPerk`: Skyrim.esm → unofficial skyrim special edition patch.esp.
  - Effects: 1 vs unofficial skyrim special edition patch.esp 1 item(s), contents differ — only here: [0] Modification=Multiply, Value=1.2, EntryPoint=ModSkillUse (+126 more field(s)); only in unofficial skyrim special edition patch.esp: [0] Modification=Multiply, Value=1.2, EntryPoint=ModSkillUse (+149 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 12. Grand Solitude - The Walls of High King Erling.esp

Formato **ESM**; provider **Grand Solitude - The Walls of High King Erling**; overrides em headers **4381**; winner de **34** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ccBGSSSE001-Fish.esm, ccBGSSSE037-Curios.esl, ccBGSSSE025-AdvDSGS.esm, _ResourcePack.esl, unofficial skyrim special edition patch.esp.

**Tipos nos headers:** TXST=21, FACT=30, ACTI=5, CONT=14, LIGH=3, STAT=421, TREE=11, FLOR=8, FURN=5, NPC_=90, KEYM=18, WTHR=1, REGN=1, NAVI=1, CELL=71, REFR=24820, ACHR=110, NAVM=109, WRLD=2, LAND=14, PHZD=24, DIAL=1, INFO=3, QUST=2, PACK=151, FLST=17, LCTN=22, RELA=18, OTFT=1.

**Campos selecionados diferentes do predecessor:** VirtualMachineAdapter.Aliases (1), VirtualMachineAdapter.Fragments (1), VirtualMachineAdapter.Scripts (1).

- `0B2FD9:Skyrim.esm` / `SolitudeOpening`: Skyrim.esm → Grand Solitude - The Walls of High King Erling.esp.
  - VirtualMachineAdapter.Aliases: 15 vs Grand Solitude - The Walls of High King Erling.esp 15 item(s), contents differ — only here: [0] Property=[ScriptObjectProperty] Object=0B2FD9:Skyrim.esm, Property.Object=0B2FD9:Skyrim.esm, Property.Alias=36 (+22 more field(s)); [1] Property=[ScriptObjectProperty] Object=0B2FD9:Skyrim.esm, Property.Object=0B2FD9:Skyrim.esm, Property.Alias=87 (+22 more field(s)) (+10 more element(s)); only in Grand Solitude - The Walls of High King Erling.esp: [0] Property=[ScriptObjectProperty] Object=0B2FD9:Skyrim.esm, Property.Object=0B2FD9:Skyrim.esm, Property.Alias=36 (+22 more field(s)); [1] Property=[ScriptObjectProperty] Object=0B2FD9:Skyrim.esm, Property.Object=0B2FD9:Skyrim.esm, Property.Alias=87 (+22 more field(s)) (+10 more element(s))
  - VirtualMachineAdapter.Fragments: same 11 item(s), ORDER DIFFERS from Grand Solitude - The Walls of High King Erling.esp
  - VirtualMachineAdapter.Scripts: 2 vs Grand Solitude - The Walls of High King Erling.esp 2 item(s), contents differ — only here: [1] Name=QF_DialogueSolitudeOpeningSce_000B2FD9, Flags=Local, Properties=[list: 40 item(s)] (+240 more field(s)); only in Grand Solitude - The Walls of High King Erling.esp: [1] Name=QF_DialogueSolitudeOpeningSce_000B2FD9, Flags=Local, Properties=[list: 40 item(s)] (+240 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 14. JK's College of Winterhold.esp

Formato **ESM**; provider **JK's College of Winterhold**; overrides em headers **2361**; winner de **4** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=10, ACTI=3, CONT=14, LIGH=2, STAT=231, FURN=6, KEYM=1, NAVI=1, CELL=16, REFR=7499, ACHR=7, NAVM=37, WRLD=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 15. Whiterun Has Walls.esm

Formato **ESPFE**; provider **Whiterun Has Walls Redone**; overrides em headers **347**; winner de **11** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** STAT=63, CELL=38, REFR=719, WRLD=3, MESG=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 16. Whiterun Has Walls - Navmeshed.esm

Formato **ESPFE**; provider **Whiterun Has Walls Redone**; overrides em headers **30**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Whiterun Has Walls.esm.

**Tipos nos headers:** NPC_=24, NAVI=1, CELL=18, NAVM=24, REFR=59, WRLD=2, ACHR=24, PACK=18.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 17. Atmoran Legacy.esp

Formato **ESPFE**; provider **Atmoran Legacy - A Windhelm Overhaul**; overrides em headers **64**; winner de **5** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** STAT=9, WRLD=2, CELL=12, REFR=52, LAND=2.

**Campos selecionados diferentes do predecessor:** Location (2).

- `0090AC:Skyrim.esm` / `None`: unofficial skyrim special edition patch.esp → Atmoran Legacy.esp.
  - Location=018A57:Skyrim.esm (Atmoran Legacy.esp has Location ABSENT)
- `00B498:Skyrim.esm` / `None`: unofficial skyrim special edition patch.esp → Atmoran Legacy.esp.
  - Location=018A57:Skyrim.esm (Atmoran Legacy.esp has Location ABSENT)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 18. Embers XD.esm

Formato **ESM**; provider **Embers XD**; overrides em headers **13**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** STAT=2, MSTT=1, WRLD=2, CELL=5, REFR=5.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 25. Treescale.esm

Formato **ESPFE**; provider **Happy Little Trees**; overrides em headers **12339**; winner de **724** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** WRLD=1, CELL=1507, REFR=10831.

**Campos selecionados diferentes do predecessor:** MajorFlags (34), Location (4).

- `009677:Skyrim.esm` / `WhiterunAttackStart02`: unofficial skyrim special edition patch.esp → Treescale.esm.
  - Location=018A56:Skyrim.esm (Treescale.esm 016772:Skyrim.esm)
- `0098CB:Skyrim.esm` / `None`: unofficial skyrim special edition patch.esp → Treescale.esm.
  - Location=018EE5:Skyrim.esm (Treescale.esm has Location ABSENT)
- `00BCAA:Skyrim.esm` / `None`: unofficial skyrim special edition patch.esp → Treescale.esm.
  - Location=0D566B:Skyrim.esm (Treescale.esm has Location ABSENT)
- `00BCE4:Skyrim.esm` / `None`: Skyrim.esm → Treescale.esm.
  - MajorFlags=0 (Treescale.esm 262144)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 26. SCSI-ACTbfco-Main.esp

Formato **ESPFE**; provider **BFCO - Attack Behavior Framework (SSE AE VR)**; overrides em headers **20**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** GMST=6, KYWD=10, GLOB=15, MGEF=25, SPEL=9, QUST=2, IDLE=111, PERK=15.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 27. HammetDungeon01.esm

Formato **ESM**; provider **Hammet's Dungeon Pack 1 SE**; overrides em headers **89**; winner de **34** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** MGEF=17, ENCH=26, SPEL=15, ACTI=1, ARMO=19, BOOK=27, CONT=24, MISC=1, WEAP=36, NPC_=106, LVLN=5, KEYM=23, COBJ=38, NAVI=1, CELL=322, REFR=88678, ACHR=1374, NAVM=671, WRLD=5, LAND=149, QUST=5, LVSP=1, ECZN=30, LCTN=30, MESG=18, RELA=5, OTFT=6.

**Campos selecionados diferentes do predecessor:** Location (21).

- `0090C6:Skyrim.esm` / `NzundgarExt`: Treescale.esm → HammetDungeon01.esm.
  - Location: ABSENT here (HammetDungeon01.esm has 1D4294:HammetDungeon01.esm)
- `008F2C:Skyrim.esm` / `FahlmzundExt`: Skyrim.esm → HammetDungeon01.esm.
  - Location: ABSENT here (HammetDungeon01.esm has C101CA:HammetDungeon01.esm)
- `009889:Skyrim.esm` / `VulhuleExt`: Skyrim.esm → HammetDungeon01.esm.
  - Location: ABSENT here (HammetDungeon01.esm has CE6D5C:HammetDungeon01.esm)
- `0098B3:Skyrim.esm` / `InkhazndExt`: Treescale.esm → HammetDungeon01.esm.
  - Location: ABSENT here (HammetDungeon01.esm has 1805CB:HammetDungeon01.esm)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 28. HammetDungeon02.esm

Formato **ESM**; provider **Hammet Dungeon Pack 2 SE**; overrides em headers **52**; winner de **18** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** MGEF=4, ENCH=9, SPEL=3, ACTI=1, ARMO=4, BOOK=20, CONT=13, MISC=4, WEAP=15, NPC_=72, KEYM=13, COBJ=22, NAVI=1, CELL=213, REFR=49263, PHZD=1, ACHR=946, NAVM=286, WRLD=5, LAND=101, QUST=9, ECZN=16, LCTN=16, MESG=5, OTFT=5.

**Campos selecionados diferentes do predecessor:** Location (10).

- `0038B8:Skyrim.esm` / `DarkfrostNew`: unofficial skyrim special edition patch.esp → HammetDungeon02.esm.
  - Location: ABSENT here (HammetDungeon02.esm has 0EA855:HammetDungeon02.esm)
- `00989F:Skyrim.esm` / `SilentVeilExt`: Skyrim.esm → HammetDungeon02.esm.
  - Location: ABSENT here (HammetDungeon02.esm has 0EA8B3:HammetDungeon02.esm)
- `0096A5:Skyrim.esm` / `SilveryolExt`: Treescale.esm → HammetDungeon02.esm.
  - Location: ABSENT here (HammetDungeon02.esm has 016976:HammetDungeon02.esm)
- `00705F:Skyrim.esm` / `None`: Skyrim.esm → HammetDungeon02.esm.
  - Location: ABSENT here (HammetDungeon02.esm has 1DAE8B:HammetDungeon02.esm)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 30. Apachii_DivineEleganceStore.esm

Formato **ESM**; provider **AETHERIUS - CUSTOM SETTINGS**; overrides em headers **26**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** TXST=416, FACT=3, HDPT=16, MGEF=1, ENCH=3, ARMO=467, CONT=38, DOOR=1, LIGH=12, MISC=1, STAT=87, MSTT=1, FURN=4, NPC_=3, COBJ=250, PROJ=1, LVLI=4, NAVI=1, CELL=9, REFR=683, ACHR=3, NAVM=9, WRLD=1, PACK=6, ARMA=1339, LCTN=1, OTFT=4.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 35. cheddars_mashups.esl

Formato **ESL**; provider **Cheddar's Mashups**; overrides em headers **1**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** ARMO=106, COBJ=185, LVLI=1, ARMA=131.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 36. 1NDArmor.esl

Formato **ESL**; provider **Mythic Dawn armor SE**; overrides em headers **12**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** ARMO=8, CONT=1, STAT=1, WEAP=1, COBJ=17, CELL=3, REFR=19, WRLD=1, ARMA=8.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 37. 1FlutedArmor.esl

Formato **ESL**; provider **Fluted Armor SE**; overrides em headers **2**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** ARMO=6, NPC_=1, COBJ=5, WRLD=1, CELL=1, REFR=2, ACHR=1, ARMA=6, OTFT=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 38. 1AncArgArm.esl

Formato **ESL**; provider **Ancient Argonian Armor SE**; overrides em headers **5**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** ARMO=5, CONT=1, COBJ=5, WRLD=1, CELL=3, REFR=6, ARMA=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 39. 1SilverArmor.esl

Formato **ESL**; provider **Silver Armor SE**; overrides em headers **5**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** ARMO=6, CONT=1, COBJ=12, WRLD=2, CELL=3, REFR=5, ARMA=7.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 40. 1FS.esl

Formato **ESL**; provider **Infantry Armor SE**; overrides em headers **3**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** ARMO=8, CONT=1, STAT=1, WEAP=1, NPC_=2, COBJ=18, WRLD=1, CELL=2, REFR=1, ACHR=2, ARMA=6, OTFT=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 41. 1YsmirArmorSE.esl

Formato **ESL**; provider **Ysmir Armor SE**; overrides em headers **5**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** ARMO=4, CONT=1, COBJ=4, CELL=4, REFR=4, WRLD=1, ARMA=4.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 43. Better Dynamic Snow SE - DisableRefs.esm

Formato **ESM**; provider **Better Dynamic Snow SE**; overrides em headers **45**; winner de **3** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** STAT=26, WRLD=1, CELL=11, REFR=33, MATO=3.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 46. NoviceBoltSpells.esp

Formato **ESPFE**; provider **Novice Bolt Spells**; overrides em headers **15**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** MGEF=3, SPEL=18, BOOK=6, CELL=1, REFR=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 47. COTN Dawnstar - The White Hall.esp

Formato **ESPFE**; provider **Dawnstar Windpeak Inn and White Hall**; overrides em headers **450**; winner de **5** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, HearthFires.esm, Dragonborn.esm, Unofficial Skyrim Special Edition Patch.esp.

**Tipos nos headers:** STAT=1, CELL=2, REFR=1360, ACHR=5, NAVM=1, WRLD=1, LCTN=1.

**Campos selecionados diferentes do predecessor:** MajorFlags (2).

- `01A6C2:Skyrim.esm` / `BulfrekREF`: Skyrim.esm → COTN Dawnstar - The White Hall.esp.
  - MajorFlags=0 (COTN Dawnstar - The White Hall.esp Persistent)
- `01A6C3:Skyrim.esm` / `MadenaREF`: Skyrim.esm → COTN Dawnstar - The White Hall.esp.
  - MajorFlags=0 (COTN Dawnstar - The White Hall.esp Persistent)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 48. cheddars_mashups.esp

Formato **ESP**; provider **Cheddar's Mashups**; overrides em headers **1**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** ARMO=106, COBJ=185, LVLI=1, ARMA=131.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 49. Stendarr Rising.esp

Formato **ESP**; provider **Stendarr Rising - The Hall of the Vigilant Rebuild**; overrides em headers **207**; winner de **20** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=1, TXST=17, GLOB=20, FACT=2, ACTI=6, ARMO=2, BOOK=5, CONT=14, DOOR=2, MISC=35, STAT=175, MSTT=6, FURN=3, NPC_=11, KEYM=2, COBJ=35, LVLI=1, NAVI=1, CELL=14, REFR=3127, ACHR=57, NAVM=17, WRLD=1, LAND=9, DIAL=2, INFO=4, QUST=2, PACK=11, FLST=1, ARMA=2, RELA=8, OTFT=1.

**Campos selecionados diferentes do predecessor:** MajorFlags (10), Entries (1).

- `0848D2:Skyrim.esm` / `None`: Dawnguard.esm → Stendarr Rising.esp.
  - MajorFlags=32 (Stendarr Rising.esp Persistent, InitiallyDisabled)
- `01A009:Dawnguard.esm` / `None`: Dawnguard.esm → Stendarr Rising.esp.
  - MajorFlags=StartsDead (Stendarr Rising.esp StartsDead, InitiallyDisabled, DoNotHavokSettle)
- `019FFB:Dawnguard.esm` / `None`: Dawnguard.esm → Stendarr Rising.esp.
  - MajorFlags=StartsDead (Stendarr Rising.esp StartsDead, InitiallyDisabled)
- `01A003:Dawnguard.esm` / `None`: Dawnguard.esm → Stendarr Rising.esp.
  - MajorFlags=StartsDead (Stendarr Rising.esp StartsDead, InitiallyDisabled)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 53. SMIM-SE-Merged-All.esp

Formato **ESP**; provider **Static Mesh Improvement Mod - SMIM**; overrides em headers **163**; winner de **13** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=3, CONT=1, STAT=32, CELL=31, REFR=124, WRLD=4, MATO=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 54. LORKHAN - UI Sound Effects.esp

Formato **ESPFE**; provider **LORKHAN - Soundtrack Replacer**; overrides em headers **6**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** SNDR=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 56. ShadowSpellPackage.esp

Formato **ESP**; provider **Shadow Spell Package**; overrides em headers **4**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=7, TXST=1, GLOB=10, RACE=2, SOUN=5, MGEF=101, ENCH=20, SPEL=64, SCRL=16, ACTI=1, ARMO=2, BOOK=31, LIGH=6, STAT=6, WEAP=19, NPC_=8, COBJ=18, PROJ=6, HAZD=2, WTHR=3, RFCT=11, CELL=1, REFR=2, DIAL=1, QUST=5, EFSH=15, EXPL=7, IMGS=4, IMAD=11, FLST=68, PERK=14, ADDN=2, IPCT=8, IPDS=6, ARMA=2, ARTO=18, SNDR=26.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 57. Shadow Spell Package - Tweaks and Bug Fixes.esp

Formato **ESPFE**; provider **Shadow Spell Package - Tweaks and Bug Fixes**; overrides em headers **45**; winner de **43** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, ShadowSpellPackage.esp.

**Tipos nos headers:** MGEF=31, ENCH=2, SPEL=22, NPC_=3, EFSH=1.

**Campos selecionados diferentes do predecessor:** Effects (20), VirtualMachineAdapter.Scripts (10), ActorEffect (3), BaseCost (2).

- `001DD3:ShadowSpellPackage.esp` / `_SSPSear01`: ShadowSpellPackage.esp → Shadow Spell Package - Tweaks and Bug Fixes.esp.
  - Effects: 2 vs Shadow Spell Package - Tweaks and Bug Fixes.esp 2 item(s), contents differ — only here: [0] BaseEffect=000D69:ShadowSpellPackage.esp, Data=[EffectData], Data.Magnitude=3 (+3 more field(s)); [1] BaseEffect=051C55:ShadowSpellPackage.esp, Data=[EffectData], Data.Magnitude=3 (+3 more field(s)); only in Shadow Spell Package - Tweaks and Bug Fixes.esp: [0] BaseEffect=000D69:ShadowSpellPackage.esp, Data=[EffectData], Data.Magnitude=2 (+3 more field(s)); [1] BaseEffect=051C55:ShadowSpellPackage.esp, Data=[EffectData], Data.Magnitude=2 (+3 more field(s))
- `0028A0:ShadowSpellPackage.esp` / `_SSPCreepingTerror`: ShadowSpellPackage.esp → Shadow Spell Package - Tweaks and Bug Fixes.esp.
  - Effects: 5 vs Shadow Spell Package - Tweaks and Bug Fixes.esp 5 item(s), contents differ — only here: [0] BaseEffect=01E5A6:ShadowSpellPackage.esp, Data=[EffectData], Data.Magnitude=12 (+3 more field(s)); [4] BaseEffect=0012F2:ShadowSpellPackage.esp, Data=[EffectData], Data.Magnitude=12 (+3 more field(s)); only in Shadow Spell Package - Tweaks and Bug Fixes.esp: [0] BaseEffect=01E5A6:ShadowSpellPackage.esp, Data=[EffectData], Data.Magnitude=6 (+3 more field(s)); [4] BaseEffect=0012F2:ShadowSpellPackage.esp, Data=[EffectData], Data.Magnitude=6 (+3 more field(s))
- `002E26:ShadowSpellPackage.esp` / `_SSPSear02`: ShadowSpellPackage.esp → Shadow Spell Package - Tweaks and Bug Fixes.esp.
  - Effects: 2 vs Shadow Spell Package - Tweaks and Bug Fixes.esp 2 item(s), contents differ — only here: [0] BaseEffect=000D69:ShadowSpellPackage.esp, Data=[EffectData], Data.Magnitude=6 (+3 more field(s)); [1] BaseEffect=051C55:ShadowSpellPackage.esp, Data=[EffectData], Data.Magnitude=6 (+3 more field(s)); only in Shadow Spell Package - Tweaks and Bug Fixes.esp: [0] BaseEffect=00080B:Shadow Spell Package - Tweaks and Bug Fixes.esp, Data=[EffectData], Data.Magnitude=3 (+3 more field(s)); [1] BaseEffect=051C55:ShadowSpellPackage.esp, Data=[EffectData], Data.Magnitude=3 (+3 more field(s))
- `002E27:ShadowSpellPackage.esp` / `_SSPSear03`: ShadowSpellPackage.esp → Shadow Spell Package - Tweaks and Bug Fixes.esp.
  - Effects: 2 vs Shadow Spell Package - Tweaks and Bug Fixes.esp 2 item(s), contents differ — only here: [0] BaseEffect=000D69:ShadowSpellPackage.esp, Data=[EffectData], Data.Magnitude=12 (+3 more field(s)); [1] BaseEffect=051C55:ShadowSpellPackage.esp, Data=[EffectData], Data.Magnitude=12 (+3 more field(s)); only in Shadow Spell Package - Tweaks and Bug Fixes.esp: [0] BaseEffect=00080C:Shadow Spell Package - Tweaks and Bug Fixes.esp, Data=[EffectData], Data.Magnitude=6 (+3 more field(s)); [1] BaseEffect=051C55:ShadowSpellPackage.esp, Data=[EffectData], Data.Magnitude=6 (+3 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 58. CompanionsArmorRedone.esp

Formato **ESPFE**; provider **Companions Wolf Armor Redone**; overrides em headers **4**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** ARMO=9, COBJ=6, ARMA=8.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 59. Imperial Armors and Weapons Retexture SE - Penitus Pants.esp

Formato **ESPFE**; provider **Imperial Armors and Weapons Retexture SE**; overrides em headers **1**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** TXST=2, ARMA=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 60. Hand Placed Enemies - Light.esp

Formato **ESPFE**; provider **Hand placed enemies - Light (Populated spawns and dungeons)**; overrides em headers **379**; winner de **97** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** NPC_=17, CELL=267, REFR=235, ACHR=1264, WRLD=9, PACK=2.

**Campos selecionados diferentes do predecessor:** MajorFlags (10).

- `0DBF74:Skyrim.esm` / `None`: unofficial skyrim special edition patch.esp → Hand Placed Enemies - Light.esp.
  - MajorFlags=0 (Hand Placed Enemies - Light.esp Persistent)
- `009966:Dawnguard.esm` / `None`: Dawnguard.esm → Hand Placed Enemies - Light.esp.
  - MajorFlags=0 (Hand Placed Enemies - Light.esp Persistent)
- `030A87:Skyrim.esm` / `None`: Skyrim.esm → Hand Placed Enemies - Light.esp.
  - MajorFlags=0 (Hand Placed Enemies - Light.esp Persistent)
- `04CEF7:Skyrim.esm` / `None`: Skyrim.esm → Hand Placed Enemies - Light.esp.
  - MajorFlags=0 (Hand Placed Enemies - Light.esp Persistent)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 61. DaedricArmorRedone.esp

Formato **ESP**; provider **Daedric Armor Redone**; overrides em headers **8**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** ARMO=12, ARMA=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 62. Rough Leather Armor.esp

Formato **ESP**; provider **Rough Leather Armor - Unofficial SE Port**; overrides em headers **1**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** ARMO=4, CONT=1, COBJ=8, ARMA=5.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 63. WSEnhancer.esp

Formato **ESP**; provider **Window Shadows RT**; overrides em headers **583**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** LIGH=2, CELL=450, REFR=1, LGTM=130.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 64. Shadows.esp

Formato **ESP**; provider **Window Shadows RT Updated**; overrides em headers **5528**; winner de **276** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=13, LIGH=541, STAT=28, CELL=515, REFR=7661, LGTM=130.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 65. SwimmingExtensions.esp

Formato **ESPFE**; provider **Swimming Extensions - Swimming Overhaul (Svimex)**; overrides em headers **14**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** DIAL=2, INFO=12.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 66. Obsidian Weathers.esp

Formato **ESP**; provider **Obsidian Weathers and Seasons**; overrides em headers **900**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** GMST=1, GLOB=9, MGEF=1, SPEL=1, LIGH=3, WTHR=86, CLMT=2, SPGD=7, REGN=24, WRLD=1, CELL=5, REFR=783, QUST=1, IMGS=4, IMAD=9, MESG=3, VOLI=23, SNDR=42, LENS=3.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 67. Obsidian Weathers - Patch - Rudy ENB.esp

Formato **ESPFE**; provider **Rudy ENB SE for Obsidian Weathers - LUX - ELFX**; overrides em headers **78**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, Obsidian Weathers.esp.

**Tipos nos headers:** LIGH=3, WTHR=68, SPGD=2, REGN=4, VOLI=19.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 68. Merethic Grasslands.esp

Formato **ESPFE**; provider **Merethic Grasslands - Vanilla - Faultier's - Vanaheimr**; overrides em headers **29**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** LTEX=29, GRAS=100.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 72. ForswornHeaddressVariants.esp

Formato **ESPFE**; provider **Forsworn Headdress And Armor Variants**; overrides em headers **2**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=3, ARMO=16, COBJ=18, LVLI=4, ARMA=56, OTFT=1.

**Campos selecionados diferentes do predecessor:** Entries (1).

- `0647B2:Skyrim.esm` / `LItemForswornHelmet50`: Skyrim.esm → ForswornHeaddressVariants.esp.
  - Entries: 1 vs ForswornHeaddressVariants.esp 5 item(s) — only here: [0] Data=[LeveledItemEntryData] Reference=0D8D52:Skyrim.esm, Data.Level=1, Data.Unknown=0 (+4 more field(s)); only in ForswornHeaddressVariants.esp: [0] Data=[LeveledItemEntryData] Reference=000032:ForswornHeaddressVariants.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)); [1] Data=[LeveledItemEntryData] Reference=000032:ForswornHeaddressVariants.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)) (+3 more element(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 73. Ancient_Vampire_Armor.esp

Formato **ESPFE**; provider **Ancient Vampire Armorset**; overrides em headers **1**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm.

**Tipos nos headers:** ARMO=9, COBJ=18, CELL=1, REFR=9, ARMA=9.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 74. FaceMasksOfSkyrim.esp

Formato **ESPFE**; provider **Face Masks of Skyrim Redux (Orcs - HD - SPID-KEF)**; overrides em headers **1**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=2, TXST=8, ARMO=16, COBJ=16, LVLI=1, ARMA=64.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 75. BeastHHBB.esp

Formato **ESPFE**; provider **BeastHHBB**; overrides em headers **66**; winner de **23** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Unofficial Skyrim Special Edition Patch.esp.

**Tipos nos headers:** TXST=15, HDPT=1186, NPC_=66, OTFT=3.

**Campos selecionados diferentes do predecessor:** PlayerSkills.Unused (23), PlayerSkills.Unused2 (23), VirtualMachineAdapter.Scripts (7), Items (7), Configuration.TemplateFlags (6), PlayerSkills.SkillValues[OneHanded] (4), PlayerSkills.SkillValues[HeavyArmor] (4), PlayerSkills.SkillValues[Alteration] (4), PlayerSkills.SkillValues[Conjuration] (4), PlayerSkills.SkillValues[Illusion] (4), DefaultOutfit (4), Factions (1).

- `013373:Skyrim.esm` / `TalenJei`: unofficial skyrim special edition patch.esp → BeastHHBB.esp.
  - PlayerSkills.Unused=16746 (BeastHHBB.esp 16748)
  - PlayerSkills.Unused2=09DE01 (BeastHHBB.esp 425FD2)
  - VirtualMachineAdapter.Scripts: 2 vs BeastHHBB.esp 2 item(s), contents differ — only here: [1] Name=WIDeadBodyCleanupScript, Flags=Local, Properties=[list: 2 item(s)] (+12 more field(s)); only in BeastHHBB.esp: [1] Name=WIDeadBodyCleanupScript, Flags=Local, Properties=[list: 2 item(s)] (+12 more field(s))
- `013382:Skyrim.esm` / `Wujeeta`: Skyrim.esm → BeastHHBB.esp.
  - PlayerSkills.Unused=0 (BeastHHBB.esp 16748)
  - PlayerSkills.Unused2=000100 (BeastHHBB.esp 345ED2)
  - Factions: same 4 item(s), ORDER DIFFERS from BeastHHBB.esp
  - Items: same 2 item(s), ORDER DIFFERS from BeastHHBB.esp
- `013268:Skyrim.esm` / `Deeja`: unofficial skyrim special edition patch.esp → BeastHHBB.esp.
  - PlayerSkills.Unused=16746 (BeastHHBB.esp 16748)
  - PlayerSkills.Unused2=0F25AA (BeastHHBB.esp B75ED2)
  - VirtualMachineAdapter.Scripts: 1 vs BeastHHBB.esp 1 item(s), contents differ — only here: [0] Name=WIDeadBodyCleanupScript, Flags=Local, Properties=[list: 2 item(s)] (+12 more field(s)); only in BeastHHBB.esp: [0] Name=WIDeadBodyCleanupScript, Flags=Local, Properties=[list: 2 item(s)] (+12 more field(s))
- `013284:Skyrim.esm` / `GulumEi`: unofficial skyrim special edition patch.esp → BeastHHBB.esp.
  - PlayerSkills.Unused=16746 (BeastHHBB.esp 16748)
  - PlayerSkills.Unused2=0F25AA (BeastHHBB.esp B75ED2)
  - VirtualMachineAdapter.Scripts: 2 vs BeastHHBB.esp 2 item(s), contents differ — only here: [1] Name=WIDeadBodyCleanupScript, Flags=Local, Properties=[list: 2 item(s)] (+12 more field(s)); only in BeastHHBB.esp: [1] Name=WIDeadBodyCleanupScript, Flags=Local, Properties=[list: 2 item(s)] (+12 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 77. BetterArgonianHorns.esp

Formato **ESPFE**; provider **Better Argonian Horns**; overrides em headers **43**; winner de **17** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** HDPT=76, NPC_=17.

**Campos selecionados diferentes do predecessor:** PlayerSkills.Unused (17), PlayerSkills.Unused2 (17).

- `0B2E16:Skyrim.esm` / `ArgonianFemalePreset06`: Skyrim.esm → BetterArgonianHorns.esp.
  - PlayerSkills.Unused=11 (BetterArgonianHorns.esp 16743)
  - PlayerSkills.Unused2=7E5400 (BetterArgonianHorns.esp E18853)
- `10D3BE:Skyrim.esm` / `ArgonianFemalePreset07`: Skyrim.esm → BetterArgonianHorns.esp.
  - PlayerSkills.Unused=16 (BetterArgonianHorns.esp 16743)
  - PlayerSkills.Unused2=7E5400 (BetterArgonianHorns.esp E18853)
- `10D3BF:Skyrim.esm` / `ArgonianFemalePreset08`: Skyrim.esm → BetterArgonianHorns.esp.
  - PlayerSkills.Unused=16 (BetterArgonianHorns.esp 16743)
  - PlayerSkills.Unused2=7E5400 (BetterArgonianHorns.esp E18853)
- `10D3C0:Skyrim.esm` / `ArgonianFemalePreset09`: Skyrim.esm → BetterArgonianHorns.esp.
  - PlayerSkills.Unused=16 (BetterArgonianHorns.esp 16743)
  - PlayerSkills.Unused2=7E5400 (BetterArgonianHorns.esp E18853)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 78. KabuArgonianFins - Better Argonian Horns Patch.esp

Formato **ESPFE**; provider **Kabu's Argonian Fins**; overrides em headers **57**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, KabuArgonianFins.esp, BetterArgonianHorns.esp.

**Tipos nos headers:** HDPT=57.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 79. DawnguardArsenal.esp

Formato **ESP**; provider **Dawnguard Arsenal SSE**; overrides em headers **62**; winner de **5** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm.

**Tipos nos headers:** TXST=1, CLAS=2, MGEF=14, SPEL=6, BOOK=4, CONT=3, LIGH=5, STAT=10, WEAP=14, NPC_=14, COBJ=28, PROJ=5, HAZD=6, LVLI=6, CELL=2, ACHR=8, REFR=19, WRLD=1, QUST=2, LSCR=1, EXPL=3, FLST=1, PERK=1, IPCT=7, IPDS=5, ARMA=1, OTFT=2, SNDR=2.

**Campos selecionados diferentes do predecessor:** Items (3), MajorFlags (2), Conditions (2), Configuration.TemplateFlags (1), PlayerSkills.Unused (1), PlayerSkills.Unused2 (1), CombatStyle (1), Perks (1).

- `00336B:Dawnguard.esm` / `DLC1SorineJurard`: unofficial skyrim special edition patch.esp → DawnguardArsenal.esp.
  - Configuration.TemplateFlags=SpellList, AIData, AIPackages, Script, DefPackList, AttackData, Keywords (DawnguardArsenal.esp AIPackages, Script, DefPackList, AttackData, Keywords)
  - PlayerSkills.Unused=16746 (DawnguardArsenal.esp 16748)
  - PlayerSkills.Unused2=1C25AA (DawnguardArsenal.esp 6D2A88)
  - CombatStyle=03BE1B:Skyrim.esm (DawnguardArsenal.esp 03BE1D:Skyrim.esm)
- `010DEA:Dawnguard.esm` / `DLC1DawnguardExterior03Ref`: Dawnguard.esm → DawnguardArsenal.esp.
  - MajorFlags=0 (DawnguardArsenal.esp Persistent)
- `010DE8:Dawnguard.esm` / `DLC1DawnguardExterior01Ref`: Dawnguard.esm → DawnguardArsenal.esp.
  - MajorFlags=0 (DawnguardArsenal.esp Persistent)
- `00F80E:Dawnguard.esm` / `DLC1RecipeTechSteelCrossbow`: Dawnguard.esm → DawnguardArsenal.esp.
  - Conditions: 2 vs DawnguardArsenal.esp 2 item(s), contents differ — only here: [0] ComparisonValue=0, Data=[GetGlobalValueConditionData] Reference=Null, Data.Global=00398A:Dawnguard.esm (+21 more field(s)); [1] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=0CB40D:Skyrim.esm (+21 more field(s)); only in DawnguardArsenal.esp: [0] ComparisonValue=0, Data=[GetGlobalValueConditionData] Reference=Null, Data.Global=00398A:Dawnguard.esm (+21 more field(s)); [1] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=0CB40D:Skyrim.esm (+21 more field(s))
  - Items: 2 vs DawnguardArsenal.esp 3 item(s) — only here: [1] Item=[ContainerItem] Item=06F993:Skyrim.esm, Item.Item=06F993:Skyrim.esm, Item.Count=3 (+1 more field(s)); only in DawnguardArsenal.esp: [1] Item=[ContainerItem] Item=06F993:Skyrim.esm, Item.Item=06F993:Skyrim.esm, Item.Count=1 (+1 more field(s)); [2] Item=[ContainerItem] Item=0800E4:Skyrim.esm, Item.Item=0800E4:Skyrim.esm, Item.Count=3 (+1 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 80. ClefJ's Fort Dawnguard.esp

Formato **ESPFE**; provider **ClefJ's Fort Dawnguard**; overrides em headers **1547**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm.

**Tipos nos headers:** TXST=1, STAT=28, MSTT=1, REGN=1, NAVI=1, CELL=19, REFR=2933, ACHR=16, NAVM=20, WRLD=1, LAND=15, LCTN=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 81. dawnguardRobes.esp

Formato **ESPFE**; provider **Dawnguard Robes**; overrides em headers **1**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm.

**Tipos nos headers:** TXST=2, ENCH=1, ARMO=4, COBJ=4, ARMA=3, OTFT=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 83. Dawnguard Hoods.esp

Formato **ESP**; provider **Dawnguard Hoods**; overrides em headers **14**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm.

**Tipos nos headers:** KYWD=3, GLOB=8, ARMO=2, CONT=1, COBJ=4, WRLD=1, CELL=1, REFR=2, ARMA=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 85. Nordic Ruins of Skyrim.esp

Formato **ESP**; provider **Nordic Ruins of Skyrim SSE**; overrides em headers **279**; winner de **70** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** STAT=1, NAVI=1, WRLD=1, CELL=92, REFR=552, NAVM=155, LAND=4.

**Campos selecionados diferentes do predecessor:** Location (2).

- `00BD30:Skyrim.esm` / `ForelhostBrokenTower`: unofficial skyrim special edition patch.esp → Nordic Ruins of Skyrim.esp.
  - Location=01917A:Skyrim.esm (Nordic Ruins of Skyrim.esp has Location ABSENT)
- `009AC6:Skyrim.esm` / `None`: unofficial skyrim special edition patch.esp → Nordic Ruins of Skyrim.esp.
  - Location=033DA0:Skyrim.esm (Nordic Ruins of Skyrim.esp has Location ABSENT)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 86. B&BArmorScaling.esp

Formato **ESPFE**; provider **Blade and Blunt - Armor Rating Scaling Standalone**; overrides em headers **3**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** GMST=3.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 87. dD-No Spinning Death Animation.esp

Formato **ESPFE**; provider **UNDERDOG Death Animations OAR - DAR**; overrides em headers **8**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** IDLE=8.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 89. EnemyModsTheIsolatedApothecary.esp

Formato **ESP**; provider **The Isolated Apothecary**; overrides em headers **36**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** BOOK=3, CONT=11, DOOR=1, LIGH=3, STAT=211, MSTT=1, FURN=14, NAVI=1, CELL=9, ACHR=8, REFR=1232, NAVM=10, WRLD=1, LAND=4, IMGS=1, LGTM=1, MUSC=1, MUST=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 91. Divine Elegance No Store.esp

Formato **ESPFE**; provider **Divine Elegance No Store**; overrides em headers **126**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Apachii_DivineEleganceStore.esm, Update.esm.

**Tipos nos headers:** WRLD=1, CELL=8, REFR=110, NAVM=7.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 92. Apachii_DivineEleganceStore_Patch.esp

Formato **ESP**; provider **Apachii Divine Elegance Store**; overrides em headers **44**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Apachii_DivineEleganceStore.esm.

**Tipos nos headers:** RACE=21, NAVI=1, WRLD=1, CELL=8, NAVM=6, REFR=7.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 93. Apachii_DivineEleganceStore_Dawnguard_Patch.esp

Formato **ESP**; provider **Apachii Divine Elegance Store**; overrides em headers **44**; winner de **3** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Apachii_DivineEleganceStore.esm.

**Tipos nos headers:** RACE=21, NAVI=1, WRLD=1, CELL=8, NAVM=6, REFR=7.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 94. Unmarked Locations Pack - All In One.esp

Formato **ESP**; provider **Unmarked Locations Pack - All In One**; overrides em headers **301**; winner de **182** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** SOUN=5, SPEL=4, ACTI=70, ARMO=2, BOOK=30, CONT=19, DOOR=2, MISC=8, STAT=36, MSTT=1, FURN=3, NPC_=25, KEYM=5, ALCH=3, NAVI=1, CELL=283, REFR=5220, NAVM=1, ACHR=61, WRLD=6, LAND=12, MESG=71, SHOU=1, SNDR=9.

**Campos selecionados diferentes do predecessor:** MajorFlags (13), Location (2).

- `008F7F:Skyrim.esm` / `None`: HammetDungeon02.esm → Unmarked Locations Pack - All In One.esp.
  - Location=02D405:HammetDungeon02.esm (Unmarked Locations Pack - All In One.esp has Location ABSENT)
- `04DE20:Skyrim.esm` / `None`: Skyrim.esm → Unmarked Locations Pack - All In One.esp.
  - MajorFlags=Persistent (Unmarked Locations Pack - All In One.esp 263168)
- `030814:Skyrim.esm` / `None`: Skyrim.esm → Unmarked Locations Pack - All In One.esp.
  - MajorFlags=0 (Unmarked Locations Pack - All In One.esp 262144)
- `03070C:Skyrim.esm` / `None`: Skyrim.esm → Unmarked Locations Pack - All In One.esp.
  - MajorFlags=0 (Unmarked Locations Pack - All In One.esp 262144)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 96. DragonPriestArmor.esp

Formato **ESP**; provider **Armory of the Dragon Cult - Dragon Priest Armor**; overrides em headers **4**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=1, TXST=2, ARMO=123, CONT=1, COBJ=252, CELL=1, REFR=1, QUST=1, ARMA=69, SMQN=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 97. Rudy Nordic Pottery SSE.esp

Formato **ESP**; provider **Rudy HQ - Miscellaneous SE**; overrides em headers **2**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** TXST=1, MISC=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 103. Shadow Clone on Self.esp

Formato **ESPFE**; provider **Shadow Clone on Self - Illusion Spell**; overrides em headers **2**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm.

**Tipos nos headers:** GLOB=1, RACE=1, MGEF=6, SPEL=4, ARMO=1, BOOK=1, NPC_=2, LVLI=2, CSTY=1, FLST=1, PERK=10, ARMA=1, MESG=2, OTFT=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 105. Disable Kill Cam and Kill Moves.esp

Formato **ESPFE**; provider **Disable Kill Cam And Kill Moves**; overrides em headers **87**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dragonborn.esm.

**Tipos nos headers:** GLOB=1, IDLE=84, CSTY=1, CPTH=1.

**Campos selecionados diferentes do predecessor:** Data (1).

- `100F19:Skyrim.esm` / `KillMove`: Skyrim.esm → Disable Kill Cam and Kill Moves.esp.
  - Data=1 (Disable Kill Cam and Kill Moves.esp 0)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 106. Hammet's Dungeon Pack + North Keep Patch.esp

Formato **ESPFE**; provider **SupportEgirl's Patch Hub**; overrides em headers **14**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, HammetDungeon01.esm.

**Tipos nos headers:** CELL=3, REFR=9, WRLD=1, LAND=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 108. Cloaks&Capes.esp

Formato **ESP**; provider **Cloaks and Capes**; overrides em headers **23**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm.

**Tipos nos headers:** KYWD=23, TXST=25, ARMO=25, COBJ=25, ARMA=25.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 109. ToosTruus Choice for RASS - Glowing Shader Fix.esp

Formato **ESPFE**; provider **ToosTruus Choice for R.A.S.S**; overrides em headers **2**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, RASS - Visual Effects.esl.

**Tipos nos headers:** EFSH=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 110. MoonsAndStars.esp

Formato **ESPFE**; provider **Moons and Stars - Sky Overhaul SKSE**; overrides em headers **7**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** GMST=9.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 111. Vernim Wood.esp

Formato **ESP**; provider **Vernim Wood**; overrides em headers **252**; winner de **40** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=3, GLOB=4, FACT=18, ACTI=3, ARMO=1, BOOK=3, CONT=5, MISC=8, STAT=31, WEAP=3, NPC_=37, LVLN=2, KEYM=6, LVLI=6, NAVI=1, CELL=45, REFR=3234, ACHR=68, NAVM=78, WRLD=1, LAND=16, DIAL=289, INFO=408, QUST=15, PACK=40, FLST=8, LCTN=10, MESG=2, SMQN=2, DLBR=155, DLVW=18, RELA=13, SCEN=3, OTFT=2.

**Campos selecionados diferentes do predecessor:** MajorFlags (10), Location (3), Configuration.Level.Level (1), Configuration.Flags (1), Configuration.StaminaOffset (1), Configuration.TemplateFlags (1), Configuration.HealthOffset (1), PlayerSkills.SkillValues[OneHanded] (1), PlayerSkills.SkillValues[TwoHanded] (1), PlayerSkills.SkillValues[Archery] (1), PlayerSkills.SkillValues[Block] (1), PlayerSkills.SkillValues[Smithing] (1).

- `0E160D:Skyrim.esm` / `dunCragslaneLvlPitWolf`: Update.esm → Vernim Wood.esp.
  - Configuration.Level.Level=1 (Vernim Wood.esp 6)
  - Configuration.Flags=Respawn (Vernim Wood.esp Respawn, AutoCalcStats)
  - Configuration.StaminaOffset=0 (Vernim Wood.esp 30)
  - Configuration.TemplateFlags=Traits, Stats, SpellList, ModelAnimation, Script, AttackData (Vernim Wood.esp Traits, SpellList, ModelAnimation, Script, AttackData)
- `0689F8:Skyrim.esm` / `None`: Skyrim.esm → Vernim Wood.esp.
  - MajorFlags=Persistent (Vernim Wood.esp Persistent, InitiallyDisabled)
- `0F50C3:Skyrim.esm` / `None`: Skyrim.esm → Vernim Wood.esp.
  - MajorFlags=0 (Vernim Wood.esp Persistent)
- `019E0E:Skyrim.esm` / `GrogmarRef`: Skyrim.esm → Vernim Wood.esp.
  - MajorFlags=0 (Vernim Wood.esp Persistent)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 112. Vernim Wood Ownership Flagged.esp

Formato **ESPFE**; provider **SupportEgirl's Patch Hub**; overrides em headers **53**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Vernim Wood.esp.

**Tipos nos headers:** WRLD=1, CELL=1, REFR=51.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 113. Sunthgat.esp

Formato **ESP**; provider **Sunthgat**; overrides em headers **23**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=2, FACT=4, CONT=1, MISC=1, STAT=3, WEAP=1, NPC_=6, KEYM=3, NAVI=1, CELL=13, REFR=632, ACHR=5, NAVM=15, WRLD=1, LAND=4, DIAL=13, INFO=13, QUST=4, PACK=9, FLST=4, LCTN=5, SMQN=1, DLBR=10, DLVW=4, RELA=1, OTFT=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 114. Reich Corigate.esp

Formato **ESP**; provider **Reich Corigate**; overrides em headers **57**; winner de **3** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm.

**Tipos nos headers:** TXST=7, FACT=11, BOOK=1, CONT=5, DOOR=7, STAT=125, FURN=1, NPC_=35, KEYM=8, NAVI=1, CELL=40, REFR=3034, ACHR=43, NAVM=51, WRLD=2, LAND=14, PACK=42, FLST=11, LCTN=15, RELA=13, OTFT=4.

**Campos selecionados diferentes do predecessor:** Location (2), MajorFlags (1).

- `082718:Skyrim.esm` / `None`: Skyrim.esm → Reich Corigate.esp.
  - MajorFlags=0 (Reich Corigate.esp InitiallyDisabled)
- `009890:Skyrim.esm` / `ReichCorigateExterior06`: Treescale.esm → Reich Corigate.esp.
  - Location: ABSENT here (Reich Corigate.esp has 005863:Reich Corigate.esp)
- `009891:Skyrim.esm` / `ReichCorigateExterior04`: Treescale.esm → Reich Corigate.esp.
  - Location: ABSENT here (Reich Corigate.esp has 005863:Reich Corigate.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 115. New Weynon.esp

Formato **ESP**; provider **New Weynon**; overrides em headers **70**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=1, FACT=8, ENCH=1, ARMO=1, BOOK=2, CONT=4, MISC=2, STAT=11, WEAP=1, NPC_=8, KEYM=5, LVLI=1, NAVI=1, CELL=20, REFR=683, ACHR=8, NAVM=24, WRLD=1, LAND=4, DIAL=20, INFO=26, QUST=5, PACK=4, FLST=4, LCTN=7, SMQN=1, DLBR=15, DLVW=5, RELA=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 116. Neugrad.esp

Formato **ESP**; provider **Neugrad**; overrides em headers **571**; winner de **44** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=2, TXST=5, GLOB=2, FACT=20, MGEF=4, ENCH=4, SPEL=6, ACTI=2, ARMO=3, BOOK=5, CONT=7, MISC=7, STAT=33, WEAP=7, NPC_=49, KEYM=9, PROJ=1, LVLI=5, NAVI=1, CELL=78, REFR=5225, ACHR=102, NAVM=97, WRLD=3, LAND=47, PGRE=1, DIAL=171, INFO=208, QUST=26, PACK=65, FLST=6, ARMA=1, LCTN=16, MESG=1, SMQN=1, DLBR=87, DLVW=28, RELA=10, SCEN=1, OTFT=5.

**Campos selecionados diferentes do predecessor:** PlayerSkills.Unused (3), PlayerSkills.Unused2 (3), Factions (3), VirtualMachineAdapter.Scripts (3), Location (3), VirtualMachineAdapter (2), Configuration.TemplateFlags (2), VirtualMachineAdapter.Version only in Neugrad.esp (2), VirtualMachineAdapter.ObjectFormat only in Neugrad.esp (2).

- `0B11EF:Skyrim.esm` / `dunSouthfringeSpellsword`: Skyrim.esm → Neugrad.esp.
  - VirtualMachineAdapter: ABSENT here (Neugrad.esp has [VirtualMachineAdapter])
  - Configuration.TemplateFlags=Traits, Stats, Factions, AIPackages, ModelAnimation, Script, DefPackList, AttackData, Keywords (Neugrad.esp Traits, Stats, AIPackages, ModelAnimation, Script, DefPackList, AttackData, Keywords)
  - PlayerSkills.Unused=0 (Neugrad.esp 16748)
  - PlayerSkills.Unused2=000100 (Neugrad.esp 013217)
- `03A745:Skyrim.esm` / `dunSouthfringeSelveniNethri`: Skyrim.esm → Neugrad.esp.
  - PlayerSkills.Unused=0 (Neugrad.esp 16748)
  - PlayerSkills.Unused2=000100 (Neugrad.esp 013217)
  - Factions: 1 vs Neugrad.esp 2 item(s) — only in Neugrad.esp: [1] Faction=0FF117:Neugrad.esp, Rank=0, Fluff=000000
- `0B11A7:Skyrim.esm` / `dunSouthfringePetFox`: Skyrim.esm → Neugrad.esp.
  - VirtualMachineAdapter: ABSENT here (Neugrad.esp has [VirtualMachineAdapter])
  - Configuration.TemplateFlags=Traits, Stats, SpellList, AIData, Inventory, Script, AttackData, Keywords (Neugrad.esp Traits, Stats, SpellList, Inventory, Script, AttackData, Keywords)
  - PlayerSkills.Unused=0 (Neugrad.esp 16748)
  - PlayerSkills.Unused2=000100 (Neugrad.esp 013217)
- `0098C8:Skyrim.esm` / `TormolExterior02`: Skyrim.esm → Neugrad.esp.
  - Location: ABSENT here (Neugrad.esp has 155B7F:Neugrad.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 117. Neugrad Ownership Flagged.esp

Formato **ESPFE**; provider **SupportEgirl's Patch Hub**; overrides em headers **18**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Neugrad.esp.

**Tipos nos headers:** WRLD=1, CELL=1, REFR=16.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 118. Laintar Dale.esp

Formato **ESP**; provider **Laintar Dale**; overrides em headers **207**; winner de **19** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=6, FACT=13, CONT=5, DOOR=1, STAT=102, MSTT=3, FURN=1, NPC_=27, KEYM=9, NAVI=1, CELL=35, REFR=2248, ACHR=34, NAVM=67, WRLD=1, LAND=17, DIAL=51, INFO=90, QUST=8, PACK=39, FLST=9, LCTN=11, SMQN=1, DLBR=50, DLVW=10, RELA=12, OTFT=3.

**Campos selecionados diferentes do predecessor:** Location (1).

- `00B432:Skyrim.esm` / `LaintarDaleEdge`: Update.esm → Laintar Dale.esp.
  - Location: ABSENT here (Laintar Dale.esp has 029636:Laintar Dale.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 119. Laintar Dale Rock Fix.esp

Formato **ESPFE**; provider **SupportEgirl's Patch Hub**; overrides em headers **3**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Laintar Dale.esp.

**Tipos nos headers:** WRLD=1, CELL=1, REFR=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 120. Lainalten.esp

Formato **ESP**; provider **Lainalten**; overrides em headers **56**; winner de **4** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=2, FACT=7, CONT=2, STAT=33, MSTT=1, NPC_=10, KEYM=3, NAVI=1, CELL=20, REFR=618, ACHR=16, NAVM=40, WRLD=1, LAND=9, PACK=8, FLST=4, LCTN=7, RELA=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 121. Iggath.esp

Formato **ESP**; provider **Iggath**; overrides em headers **67**; winner de **9** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** FACT=6, CONT=2, STAT=6, NPC_=7, KEYM=3, NAVI=1, CELL=16, REFR=690, ACHR=10, NAVM=13, WRLD=1, LAND=11, DIAL=10, INFO=10, QUST=2, PACK=11, FLST=3, LCTN=4, SMQN=1, DLBR=8, DLVW=2, RELA=4.

**Campos selecionados diferentes do predecessor:** MajorFlags (2), Location (1).

- `1060D8:Skyrim.esm` / `None`: Skyrim.esm → Iggath.esp.
  - MajorFlags=0 (Iggath.esp Persistent, InitiallyDisabled)
- `1060D6:Skyrim.esm` / `None`: Skyrim.esm → Iggath.esp.
  - MajorFlags=0 (Iggath.esp Persistent, InitiallyDisabled)
- `0095D7:Skyrim.esm` / `IggathExterior`: unofficial skyrim special edition patch.esp → Iggath.esp.
  - Location: ABSENT here (Iggath.esp has 0059C9:Iggath.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 122. Greymoor.esp

Formato **ESP**; provider **Greymoor**; overrides em headers **72**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=1, FACT=6, ARMO=1, CONT=2, MISC=1, STAT=1, WEAP=1, NPC_=7, KEYM=3, NAVI=1, CELL=18, REFR=886, NAVM=22, ACHR=13, WRLD=1, LAND=9, DIAL=20, INFO=32, QUST=4, PACK=9, FLST=2, LCTN=5, SMQN=1, DLBR=8, DLVW=3, RELA=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 123. Granitehall.esp

Formato **ESP**; provider **Granitehall**; overrides em headers **58**; winner de **5** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=4, FACT=8, BOOK=1, CONT=3, STAT=71, FURN=2, NPC_=18, KEYM=5, NAVI=1, CELL=21, REFR=1408, ACHR=20, NAVM=40, WRLD=1, LAND=9, PACK=20, FLST=7, LCTN=8, RELA=12, OTFT=1.

**Campos selecionados diferentes do predecessor:** MajorFlags (2).

- `0DC5A4:Skyrim.esm` / `None`: Skyrim.esm → Granitehall.esp.
  - MajorFlags=Persistent (Granitehall.esp Persistent, InitiallyDisabled)
- `0DC53E:Skyrim.esm` / `None`: Skyrim.esm → Granitehall.esp.
  - MajorFlags=0 (Granitehall.esp InitiallyDisabled)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 124. Granite Hill.esp

Formato **ESP**; provider **Granite Hill Village**; overrides em headers **160**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=4, FACT=12, MGEF=1, ENCH=3, ARMO=2, BOOK=5, CONT=4, MISC=5, STAT=95, MSTT=2, FURN=1, WEAP=1, NPC_=31, KEYM=11, LVLI=3, NAVI=1, CELL=34, REFR=2643, ACHR=36, NAVM=64, WRLD=1, LAND=12, DIAL=86, INFO=106, QUST=18, PACK=26, FLST=12, LCTN=14, SMQN=1, DLBR=42, DLVW=15, RELA=7, OTFT=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 125. Falkhurst.esp

Formato **ESP**; provider **Falkhurst**; overrides em headers **61**; winner de **18** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=2, GLOB=9, FACT=10, ENCH=2, ARMO=1, CONT=2, MISC=6, STAT=4, WEAP=2, NPC_=9, KEYM=4, ALCH=3, LVLI=2, NAVI=1, CELL=22, REFR=953, ACHR=10, NAVM=23, WRLD=1, LAND=5, DIAL=158, INFO=196, QUST=20, PACK=10, FLST=3, LCTN=6, SMQN=2, DLBR=68, DLVW=14, RELA=5, SCEN=8, OTFT=2.

**Campos selecionados diferentes do predecessor:** MajorFlags (2), PlayerSkills.Unused (1), PlayerSkills.Unused2 (1), Factions (1), Location (1), Type (1), Aliases (1), Stages (1), VirtualMachineAdapter.Aliases (1), VirtualMachineAdapter.Fragments (1), VirtualMachineAdapter.Scripts (1).

- `039BB7:Skyrim.esm` / `dunHarmugstahlWarlock`: Skyrim.esm → Falkhurst.esp.
  - PlayerSkills.Unused=0 (Falkhurst.esp 16748)
  - PlayerSkills.Unused2=000100 (Falkhurst.esp 12A8EB)
  - Factions: 1 vs Falkhurst.esp 1 item(s), contents differ — only here: [0] Faction=08C408:Skyrim.esm, Rank=0, Fluff=000000; only in Falkhurst.esp: [0] Faction=089A58:Falkhurst.esp, Rank=0, Fluff=000000
- `008BF5:Dawnguard.esm` / `None`: Dawnguard.esm → Falkhurst.esp.
  - MajorFlags=0 (Falkhurst.esp Persistent)
- `105A30:Skyrim.esm` / `None`: Skyrim.esm → Falkhurst.esp.
  - MajorFlags=0 (Falkhurst.esp Persistent)
- `009D00:Skyrim.esm` / `FalkhurstExterior`: Sunthgat.esp → Falkhurst.esp.
  - Location=000874:Sunthgat.esp (Falkhurst.esp 000874:Falkhurst.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 126. Dunpar Wall.esp

Formato **ESP**; provider **Dunpar Wall**; overrides em headers **71**; winner de **5** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=8, FACT=10, ENCH=1, BOOK=2, CONT=4, STAT=88, MSTT=1, WEAP=1, NPC_=22, KEYM=7, NAVI=1, CELL=21, REFR=1925, ACHR=30, NAVM=37, WRLD=1, LAND=4, PACK=19, FLST=7, LCTN=9, RELA=4, OTFT=1.

**Campos selecionados diferentes do predecessor:** MajorFlags (2).

- `0848E2:Skyrim.esm` / `None`: unofficial skyrim special edition patch.esp → Dunpar Wall.esp.
  - MajorFlags=Persistent (Dunpar Wall.esp Persistent, InitiallyDisabled)
- `0848E3:Skyrim.esm` / `None`: unofficial skyrim special edition patch.esp → Dunpar Wall.esp.
  - MajorFlags=0 (Dunpar Wall.esp InitiallyDisabled)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 127. Cracked Tusk Stronghold Lite.esp

Formato **ESPFE**; provider **Cracked Tusk Keep**; overrides em headers **223**; winner de **10** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** STAT=1, NAVI=1, WRLD=1, CELL=11, REFR=988, LAND=9, NAVM=15, ACHR=4, LCTN=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 128. Stonehills.esp

Formato **ESP**; provider **Stonehills**; overrides em headers **468**; winner de **10** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=6, FACT=8, CONT=2, DOOR=1, STAT=58, MSTT=1, NPC_=11, KEYM=5, NAVI=1, CELL=22, REFR=1373, ACHR=14, NAVM=46, WRLD=1, LAND=11, PACK=15, FLST=4, LCTN=6, RELA=4, OTFT=2.

**Campos selecionados diferentes do predecessor:** MajorFlags (1), Flags (1).

- `01AA59:Skyrim.esm` / `SirgarREF`: unofficial skyrim special edition patch.esp → Stonehills.esp.
  - MajorFlags=Persistent (Stonehills.esp 0)
- `02817E:Skyrim.esm` / `TownStonehillsFaction`: Skyrim.esm → Stonehills.esp.
  - Flags=0 (Stonehills.esp CanBeOwner)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 129. Amol Village.esp

Formato **ESP**; provider **Amol Village**; overrides em headers **62**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=5, FACT=9, ENCH=1, ARMO=1, CONT=4, INGR=1, MISC=1, STAT=66, WEAP=1, NPC_=14, KEYM=7, ALCH=1, NAVI=1, CELL=17, REFR=1224, ACHR=15, NAVM=19, WRLD=1, LAND=8, DIAL=30, INFO=31, QUST=6, PACK=18, FLST=5, LCTN=6, SMQN=1, DLBR=17, DLVW=6, RELA=2, OTFT=1.

**Campos selecionados diferentes do predecessor:** VirtualMachineAdapter (1), VirtualMachineAdapter.Version (1), VirtualMachineAdapter.ObjectFormat (1), Configuration.Flags (1), PlayerSkills.Unused (1), PlayerSkills.Unused2 (1), Factions (1), Items (1), Perks (1), VirtualMachineAdapter.Scripts (1).

- `019FE8:Skyrim.esm` / `Golldir`: unofficial skyrim special edition patch.esp → Amol Village.esp.
  - VirtualMachineAdapter=[VirtualMachineAdapter] (Amol Village.esp has VirtualMachineAdapter ABSENT)
  - VirtualMachineAdapter.Version=5 (Amol Village.esp has no VirtualMachineAdapter.Version)
  - VirtualMachineAdapter.ObjectFormat=2 (Amol Village.esp has no VirtualMachineAdapter.ObjectFormat)
  - Configuration.Flags=AutoCalcStats, Unique, Protected (Amol Village.esp AutoCalcStats, Protected)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 130. Amber Guard.esp

Formato **ESP**; provider **Amber Guard**; overrides em headers **244**; winner de **36** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=17, FACT=12, MGEF=10, ENCH=4, SPEL=2, ACTI=7, ARMO=6, BOOK=8, CONT=5, DOOR=5, MISC=5, STAT=132, MSTT=2, FURN=1, WEAP=6, NPC_=46, KEYM=16, ALCH=2, LVLI=5, NAVI=1, CELL=76, REFR=6075, NAVM=116, ACHR=100, WRLD=1, LAND=31, DIAL=239, INFO=319, QUST=20, PACK=69, EFSH=1, FLST=13, PERK=3, LCTN=22, MESG=1, SMQN=1, DLBR=150, DLVW=18, RELA=24, SCEN=2, OTFT=5.

**Campos selecionados diferentes do predecessor:** Location (6), MajorFlags (4), VirtualMachineAdapter.Scripts (1), EncounterZone (1).

- `0C14B3:Skyrim.esm` / `None`: Skyrim.esm → Amber Guard.esp.
  - MajorFlags=0 (Amber Guard.esp Persistent)
  - VirtualMachineAdapter.Scripts: 2 vs Amber Guard.esp 2 item(s), contents differ — only here: [0] Name=dunRebelsCairnBossBattle, Flags=Local, Properties=[list: 5 item(s)] (+30 more field(s)); [1] Name=masterAmbushScript, Flags=Inherited, Properties=[list: 1 item(s)] (+4 more field(s)); only in Amber Guard.esp: [0] Name=dunRebelsCairnBossBattle, Flags=Local, Properties=[list: 5 item(s)] (+30 more field(s)); [1] Name=masterambushscript, Flags=Inherited, Properties=[list: 1 item(s)] (+4 more field(s))
- `10835A:Skyrim.esm` / `None`: Skyrim.esm → Amber Guard.esp.
  - MajorFlags=0 (Amber Guard.esp Persistent, InitiallyDisabled)
- `083318:Skyrim.esm` / `None`: Skyrim.esm → Amber Guard.esp.
  - MajorFlags=0 (Amber Guard.esp Persistent, InitiallyDisabled)
- `108359:Skyrim.esm` / `None`: Skyrim.esm → Amber Guard.esp.
  - MajorFlags=0 (Amber Guard.esp Persistent, InitiallyDisabled)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 131. AnotherOakwood.esp

Formato **ESP**; provider **Oakwood**; overrides em headers **241**; winner de **8** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=14, FACT=14, CONT=5, DOOR=2, STAT=140, MSTT=1, FURN=1, NPC_=41, KEYM=12, NAVI=1, CELL=42, REFR=3346, ACHR=50, NAVM=90, WRLD=1, LAND=17, PACK=46, FLST=12, LCTN=15, RELA=28, OTFT=3.

**Campos selecionados diferentes do predecessor:** MajorFlags (4).

- `0EC185:Skyrim.esm` / `None`: Skyrim.esm → AnotherOakwood.esp.
  - MajorFlags=Persistent (AnotherOakwood.esp Persistent, InitiallyDisabled)
- `0FA2D4:Skyrim.esm` / `None`: Skyrim.esm → AnotherOakwood.esp.
  - MajorFlags=0 (AnotherOakwood.esp InitiallyDisabled)
- `0FA2D3:Skyrim.esm` / `None`: Skyrim.esm → AnotherOakwood.esp.
  - MajorFlags=0 (AnotherOakwood.esp InitiallyDisabled)
- `0EC184:Skyrim.esm` / `None`: Skyrim.esm → AnotherOakwood.esp.
  - MajorFlags=0 (AnotherOakwood.esp InitiallyDisabled)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 132. Lillemyr.esp

Formato **ESPFE**; provider **Lillemyr**; overrides em headers **42**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, HearthFires.esm.

**Tipos nos headers:** TXST=2, FACT=4, CONT=2, STAT=3, NPC_=5, NAVI=1, WRLD=1, CELL=13, REFR=667, LAND=4, NAVM=12, ACHR=4, DIAL=67, INFO=79, QUST=15, PACK=9, LCTN=1, SMQN=2, DLBR=20, DLVW=5, RELA=1, SCEN=10.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 133. North Keep.esp

Formato **ESP**; provider **Northkeep**; overrides em headers **55**; winner de **8** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=4, FACT=10, MGEF=1, SPEL=1, ACTI=1, BOOK=1, CONT=3, DOOR=2, STAT=17, MSTT=2, FURN=1, NPC_=25, KEYM=5, NAVI=1, CELL=20, REFR=2238, NAVM=25, ACHR=26, WRLD=1, LAND=8, DIAL=197, INFO=269, QUST=38, PACK=37, FLST=4, LCTN=9, MESG=1, SMQN=2, DLBR=68, DLVW=18, RELA=12, SCEN=25, OTFT=2.

**Campos selecionados diferentes do predecessor:** Location (4).

- `009C02:Skyrim.esm` / `NorthkeepExterior03`: Treescale.esm → North Keep.esp.
  - Location: ABSENT here (North Keep.esp has 021319:North Keep.esp)
- `009C03:Skyrim.esm` / `POIPineForest09`: Treescale.esm → North Keep.esp.
  - Location: ABSENT here (North Keep.esp has 021319:North Keep.esp)
- `009C44:Skyrim.esm` / `NorthkeepExterior04`: Treescale.esm → North Keep.esp.
  - Location: ABSENT here (North Keep.esp has 021319:North Keep.esp)
- `009C45:Skyrim.esm` / `NorthkeepExterior02`: Treescale.esm → North Keep.esp.
  - Location: ABSENT here (North Keep.esp has 021319:North Keep.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 134. North Keep Ownership Flagged.esp

Formato **ESPFE**; provider **SupportEgirl's Patch Hub**; overrides em headers **69**; winner de **3** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, HearthFires.esm, North Keep.esp.

**Tipos nos headers:** CELL=3, WRLD=1, REFR=65.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 140. Particle Patch.esp

Formato **ESPFE**; provider **Particle Patch**; overrides em headers **10**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm.

**Tipos nos headers:** EFSH=10.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 141. CeykyndArmor.esp

Formato **ESPFE**; provider **Thalmor Ceykynd Armors**; overrides em headers **2**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** MGEF=1, SPEL=1, ARMO=6, MISC=1, STAT=5, WEAP=2, NPC_=9, LVLN=3, COBJ=16, LVLI=10, CELL=2, ACHR=2, QUST=1, PACK=2, CSTY=1, LSCR=2, PERK=1, ARMA=10, OTFT=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 142. MasterSpellsRunes.esp

Formato **ESPFE**; provider **Master Spells Runes - ESPFE**; overrides em headers **13**; winner de **11** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** MGEF=13, SPEL=11, PROJ=1, ARTO=12.

**Campos selecionados diferentes do predecessor:** Effects (11).

- `0B92CE:Skyrim.esm` / `AbBlizzardCastBodyFX`: Skyrim.esm → MasterSpellsRunes.esp.
  - Effects: 1 vs MasterSpellsRunes.esp 2 item(s) — only in MasterSpellsRunes.esp: [1] BaseEffect=000005:MasterSpellsRunes.esp, Data=[EffectData], Data.Magnitude=100 (+3 more field(s))
- `0592D8:Skyrim.esm` / `AbLightningStormCastBodyFX`: Skyrim.esm → MasterSpellsRunes.esp.
  - Effects: 1 vs MasterSpellsRunes.esp 3 item(s) — only in MasterSpellsRunes.esp: [1] BaseEffect=000D63:MasterSpellsRunes.esp, Data=[EffectData], Data.Magnitude=100 (+3 more field(s)); [2] BaseEffect=000001:MasterSpellsRunes.esp, Data=[EffectData], Data.Magnitude=100 (+3 more field(s))
- `03104A:Skyrim.esm` / `AbParalyzeMassCastBodyFX`: Skyrim.esm → MasterSpellsRunes.esp.
  - Effects: 1 vs MasterSpellsRunes.esp 2 item(s) — only in MasterSpellsRunes.esp: [1] BaseEffect=000009:MasterSpellsRunes.esp, Data=[EffectData], Data.Magnitude=100 (+3 more field(s))
- `080E34:Skyrim.esm` / `AbFireStormCastBodyFX`: Skyrim.esm → MasterSpellsRunes.esp.
  - Effects: 1 vs MasterSpellsRunes.esp 2 item(s) — only in MasterSpellsRunes.esp: [1] BaseEffect=000003:MasterSpellsRunes.esp, Data=[EffectData], Data.Magnitude=100 (+3 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 144. CeykyndOpenHelmet.esp

Formato **ESPFE**; provider **Thalmor Ceykynd Armors**; overrides em headers **8**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, Dragonborn.esm, CeykyndArmor.esp.

**Tipos nos headers:** ARMO=2, ARMA=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 145. Triumvirate - Mage Archetypes.esp

Formato **ESP**; provider **Triumvirate (Balanced)**; overrides em headers **36**; winner de **9** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=86, TXST=1, GLOB=31, CLAS=1, FACT=18, RACE=16, SOUN=17, MGEF=362, ENCH=31, SPEL=185, ACTI=11, ARMO=16, BOOK=75, CONT=29, LIGH=40, STAT=30, WEAP=29, NPC_=41, ALCH=1, PROJ=16, HAZD=11, LVLI=96, RFCT=15, CELL=6, ACHR=4, REFR=13, WRLD=1, DIAL=9, INFO=15, QUST=18, PACK=1, EFSH=47, EXPL=29, DEBR=1, IMAD=100, FLST=23, PERK=11, VTYP=1, IPCT=14, IPDS=11, ARMA=15, MESG=22, DLBR=5, OTFT=2, ARTO=102, SNDR=273.

**Campos selecionados diferentes do predecessor:** MajorFlags (2).

- `019DCC:Skyrim.esm` / `NuraRef`: Skyrim.esm → Triumvirate - Mage Archetypes.esp.
  - MajorFlags=0 (Triumvirate - Mage Archetypes.esp Persistent)
- `1066DF:Skyrim.esm` / `None`: Skyrim.esm → Triumvirate - Mage Archetypes.esp.
  - MajorFlags=0 (Triumvirate - Mage Archetypes.esp Persistent)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 146. Mortal Enemies - No RunWalk Changes.esp

Formato **ESP**; provider **Mortal Enemies SE**; overrides em headers **100**; winner de **72** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dragonborn.esm, Dawnguard.esm.

**Tipos nos headers:** RACE=92, MOVT=8.

**Campos selecionados diferentes do predecessor:** SkillBoost0.Skill (28), SkillBoost6.Skill (28), Keywords (27), SkillBoost0.Boost (25), SkillBoost6.Boost (25), SkillBoost1.Skill (13), SkillBoost1.Boost (13), SkillBoost5.Skill (13), SkillBoost5.Boost (13), SkillBoost2.Skill (7), SkillBoost2.Boost (7), SkillBoost4.Skill (7).

- `0131EB:Skyrim.esm` / `ChaurusRace`: Skyrim.esm → Mortal Enemies - No RunWalk Changes.esp.
  - SkillBoost0.Skill=Alchemy (Mortal Enemies - No RunWalk Changes.esp 255)
  - SkillBoost6.Skill=255 (Mortal Enemies - No RunWalk Changes.esp Alchemy)
  - Keywords: same 2 item(s), ORDER DIFFERS from Mortal Enemies - No RunWalk Changes.esp
- `0131EE:Skyrim.esm` / `DogRace`: Skyrim.esm → Mortal Enemies - No RunWalk Changes.esp.
  - SkillBoost0.Skill=Sneak (Mortal Enemies - No RunWalk Changes.esp 255)
  - SkillBoost0.Boost=35 (Mortal Enemies - No RunWalk Changes.esp 0)
  - SkillBoost6.Skill=255 (Mortal Enemies - No RunWalk Changes.esp Sneak)
  - SkillBoost6.Boost=0 (Mortal Enemies - No RunWalk Changes.esp 35)
- `0131EF:Skyrim.esm` / `DragonPriestRace`: unofficial skyrim special edition patch.esp → Mortal Enemies - No RunWalk Changes.esp.
  - SkillBoost0.Skill=Sneak (Mortal Enemies - No RunWalk Changes.esp 255)
  - SkillBoost0.Boost=40 (Mortal Enemies - No RunWalk Changes.esp 0)
  - SkillBoost6.Skill=255 (Mortal Enemies - No RunWalk Changes.esp Sneak)
  - SkillBoost6.Boost=0 (Mortal Enemies - No RunWalk Changes.esp 40)
- `0131F2:Skyrim.esm` / `DwarvenSphereRace`: Skyrim.esm → Mortal Enemies - No RunWalk Changes.esp.
  - ActorEffect: same 2 item(s), ORDER DIFFERS from Mortal Enemies - No RunWalk Changes.esp

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 147. PraedysSkeletons.esp

Formato **ESPFE**; provider **Skeleton Replacer HD - SE**; overrides em headers **3**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** ARMO=3, ARMA=2.

**Campos selecionados diferentes do predecessor:** MajorFlags (1).

- `03D306:Dragonborn.esm` / `DLC2MiraakSkeleton`: Dragonborn.esm → PraedysSkeletons.esp.
  - MajorFlags=NonPlayable (PraedysSkeletons.esp 0)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 148. Open World Loot.esp

Formato **ESPFE**; provider **Open World Loot - Encounter Zone and Loot Overhaul**; overrides em headers **1306**; winner de **578** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ccBGSSSE001-Fish.esm, ccBGSSSE025-AdvDSGS.esm, Unofficial Skyrim Special Edition Patch.esp, ccbgssse037-curios.esl.

**Tipos nos headers:** GMST=7, FACT=2, CONT=66, NPC_=89, LVLI=1909, QUST=1, ECZN=319, OTFT=12.

**Campos selecionados diferentes do predecessor:** Entries (502), Items (67), PlayerSkills.Unused2 (42), Flags (20), PlayerSkills.Unused (14), Factions (12), DefaultOutfit (11), VirtualMachineAdapter.Scripts (8), Configuration.TemplateFlags (8), ActorEffect (8), PlayerSkills.SkillValues[OneHanded] (7), PlayerSkills.SkillValues[TwoHanded] (7).

- `013B81:Skyrim.esm` / `Ghorbash`: unofficial skyrim special edition patch.esp → Open World Loot.esp.
  - Configuration.Flags=AutoCalcStats, Unique (Open World Loot.esp AutoCalcStats, Unique, DoesntAffectStealthMeter)
  - PlayerSkills.Unused=16746 (Open World Loot.esp 16738)
  - PlayerSkills.Unused2=0F25AA (Open World Loot.esp AF5CA5)
  - Items: 3 vs Open World Loot.esp 3 item(s), contents differ — only here: [0] Item=[ContainerItem] Item=013983:Skyrim.esm, Item.Item=013983:Skyrim.esm, Item.Count=1 (+1 more field(s)); only in Open World Loot.esp: [2] Item=[ContainerItem] Item=000837:Open World Loot.esp, Item.Item=000837:Open World Loot.esp, Item.Count=1 (+1 more field(s))
- `016973:Skyrim.esm` / `CWQuartermasterImperial`: Skyrim.esm → Open World Loot.esp.
  - PlayerSkills.Unused2=000100 (Open World Loot.esp 001E00)
  - Factions: same 8 item(s), ORDER DIFFERS from Open World Loot.esp
  - Items: 5 vs Open World Loot.esp 4 item(s) — only here: [0] Item=[ContainerItem] Item=037C0E:Skyrim.esm, Item.Item=037C0E:Skyrim.esm, Item.Count=12 (+1 more field(s)); [1] Item=[ContainerItem] Item=013841:Skyrim.esm, Item.Item=013841:Skyrim.esm, Item.Count=1 (+1 more field(s)) (+3 more element(s)); only in Open World Loot.esp: [0] Item=[ContainerItem] Item=0008FC:Open World Loot.esp, Item.Item=0008FC:Open World Loot.esp, Item.Count=1 (+1 more field(s)); [1] Item=[ContainerItem] Item=000A43:Open World Loot.esp, Item.Item=000A43:Open World Loot.esp, Item.Count=20 (+1 more field(s)) (+2 more element(s))
- `016ACE:Skyrim.esm` / `CWQuartermasterSons`: Skyrim.esm → Open World Loot.esp.
  - PlayerSkills.Unused2=000100 (Open World Loot.esp 001E00)
  - Factions: same 8 item(s), ORDER DIFFERS from Open World Loot.esp
  - Items: 4 vs Open World Loot.esp 3 item(s) — only here: [0] Item=[ContainerItem] Item=01397F:Skyrim.esm, Item.Item=01397F:Skyrim.esm, Item.Count=12 (+1 more field(s)); [1] Item=[ContainerItem] Item=013986:Skyrim.esm, Item.Item=013986:Skyrim.esm, Item.Count=1 (+1 more field(s)) (+1 more element(s)); only in Open World Loot.esp: [1] Item=[ContainerItem] Item=000816:Open World Loot.esp, Item.Item=000816:Open World Loot.esp, Item.Count=1 (+1 more field(s)); [2] Item=[ContainerItem] Item=000819:Open World Loot.esp, Item.Item=000819:Open World Loot.esp, Item.Count=1 (+1 more field(s))
- `019E1A:Skyrim.esm` / `Ugor`: unofficial skyrim special edition patch.esp → Open World Loot.esp.
  - Items: 2 vs Open World Loot.esp 2 item(s), contents differ — only here: [0] Item=[ContainerItem] Item=013955:Skyrim.esm, Item.Item=013955:Skyrim.esm, Item.Count=1 (+1 more field(s)); [1] Item=[ContainerItem] Item=013989:Skyrim.esm, Item.Item=013989:Skyrim.esm, Item.Count=1 (+1 more field(s)); only in Open World Loot.esp: [0] Item=[ContainerItem] Item=000836:Open World Loot.esp, Item.Item=000836:Open World Loot.esp, Item.Count=1 (+1 more field(s)); [1] Item=[ContainerItem] Item=000885:Open World Loot.esp, Item.Item=000885:Open World Loot.esp, Item.Count=1 (+1 more field(s))
  - VirtualMachineAdapter.Scripts: 1 vs Open World Loot.esp 1 item(s), contents differ — only here: [0] Name=WIDeadBodyCleanupScript, Flags=Local, Properties=[list: 2 item(s)] (+12 more field(s)); only in Open World Loot.esp: [0] Name=WIDeadBodyCleanupScript, Flags=Local, Properties=[list: 2 item(s)] (+12 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 149. LostGrimoire.esp

Formato **ESP**; provider **Lost Grimoire SSE**; overrides em headers **6**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=45, TXST=8, GLOB=6, CLAS=3, FACT=20, HDPT=15, RACE=19, SOUN=16, ASPC=1, MGEF=365, ENCH=63, SPEL=286, SCRL=101, ACTI=35, TACT=1, ARMO=20, BOOK=114, CONT=13, LIGH=10, MISC=4, STAT=23, MSTT=2, FURN=4, WEAP=66, AMMO=2, NPC_=46, LVLN=2, COBJ=52, PROJ=28, HAZD=22, LVLI=9, WTHR=2, RFCT=25, REGN=1, NAVI=1, CELL=3, REFR=739, ACHR=4, NAVM=3, WRLD=1, DIAL=4, INFO=7, QUST=19, IDLE=39, PACK=12, CSTY=1, ANIO=2, EFSH=51, EXPL=54, IMAD=7, FLST=109, PERK=32, ADDN=11, IPCT=13, IPDS=9, ARMA=25, LCTN=1, MESG=50, DLBR=3, SHOU=1, SCEN=12, OTFT=6, ARTO=52, MOVT=8, SNDR=7, CLFM=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 150. HappyLittleTrees.esp

Formato **ESP**; provider **Happy Little Trees**; overrides em headers **879**; winner de **75** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, HearthFires.esm.

**Tipos nos headers:** TXST=1, STAT=19, TREE=58, FURN=1, WRLD=1, CELL=116, REFR=686.

**Campos selecionados diferentes do predecessor:** Location (5).

- `0092B5:Skyrim.esm` / `None`: Lillemyr.esp → HappyLittleTrees.esp.
  - Location=05254B:Skyrim.esm (HappyLittleTrees.esp has Location ABSENT)
- `0092B4:Skyrim.esm` / `None`: Lillemyr.esp → HappyLittleTrees.esp.
  - Location=05254B:Skyrim.esm (HappyLittleTrees.esp has Location ABSENT)
- `0092D5:Skyrim.esm` / `None`: Lillemyr.esp → HappyLittleTrees.esp.
  - Location=05254B:Skyrim.esm (HappyLittleTrees.esp has Location ABSENT)
- `009338:Skyrim.esm` / `MovarthsLairExterior02`: Treescale.esm → HappyLittleTrees.esp.
  - Location: ABSENT here (HappyLittleTrees.esp has 01BDFC:Skyrim.esm)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 152. QwibNewLantern_ISL.esp

Formato **ESPFE**; provider **Inverse Square Lighting for Simple Wearable Lanterns - Remasterd**; overrides em headers **4**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, QwibNewLanterns.esp.

**Tipos nos headers:** LIGH=4.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 153. Eli_LeatherBackpack.esp

Formato **ESP**; provider **Simple Leather Backpack**; overrides em headers **4**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** KYWD=1, TXST=1, ENCH=1, ARMO=12, BOOK=1, COBJ=12, WRLD=2, CELL=2, REFR=2, FLST=1, ARMA=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 154. Insignificant Object Remover.esp

Formato **ESP**; provider **Insignificant Object Remover**; overrides em headers **6**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** GRAS=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 155. PuddingFace_SimpleSpellsPackage.esp

Formato **ESPFE**; provider **Simple Spells Pack**; overrides em headers **55**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=1, CLAS=2, RACE=2, MGEF=230, ENCH=5, SPEL=175, ACTI=7, ARMO=12, BOOK=116, LIGH=16, STAT=11, WEAP=12, NPC_=62, PROJ=19, LVLI=67, WRLD=2, CELL=4, REFR=2, QUST=5, CSTY=1, LVSP=2, EFSH=13, EXPL=14, IMAD=8, PERK=13, IPCT=12, IPDS=10, ARMA=9, MESG=2, SHOU=2, OTFT=3, ARTO=32.

**Campos selecionados diferentes do predecessor:** Entries (6).

- `0A273A:Skyrim.esm` / `LItemSpellTomes100Conjuration`: Skyrim.esm → PuddingFace_SimpleSpellsPackage.esp.
  - Entries: 4 vs PuddingFace_SimpleSpellsPackage.esp 19 item(s) — only in PuddingFace_SimpleSpellsPackage.esp: [4] Data=[LeveledItemEntryData] Reference=0008FF:PuddingFace_SimpleSpellsPackage.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)); [5] Data=[LeveledItemEntryData] Reference=000904:PuddingFace_SimpleSpellsPackage.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)) (+13 more element(s))
- `0A273B:Skyrim.esm` / `LItemSpellTomes100Destruction`: Skyrim.esm → PuddingFace_SimpleSpellsPackage.esp.
  - Entries: 3 vs PuddingFace_SimpleSpellsPackage.esp 19 item(s) — only in PuddingFace_SimpleSpellsPackage.esp: [3] Data=[LeveledItemEntryData] Reference=000942:PuddingFace_SimpleSpellsPackage.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)); [4] Data=[LeveledItemEntryData] Reference=000943:PuddingFace_SimpleSpellsPackage.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)) (+14 more element(s))
- `0A273C:Skyrim.esm` / `LItemSpellTomes100Illusion`: Shadow Clone on Self.esp → PuddingFace_SimpleSpellsPackage.esp.
  - Entries: 5 vs PuddingFace_SimpleSpellsPackage.esp 5 item(s), contents differ — only here: [4] Data=[LeveledItemEntryData] Reference=000808:Shadow Clone on Self.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)); only in PuddingFace_SimpleSpellsPackage.esp: [4] Data=[LeveledItemEntryData] Reference=000936:PuddingFace_SimpleSpellsPackage.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s))
- `0DD645:Skyrim.esm` / `LItemSpellTomes100Alteration`: Skyrim.esm → PuddingFace_SimpleSpellsPackage.esp.
  - Entries: 2 vs PuddingFace_SimpleSpellsPackage.esp 8 item(s) — only in PuddingFace_SimpleSpellsPackage.esp: [2] Data=[LeveledItemEntryData] Reference=000925:PuddingFace_SimpleSpellsPackage.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)); [3] Data=[LeveledItemEntryData] Reference=00092C:PuddingFace_SimpleSpellsPackage.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)) (+4 more element(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 156. Better Dynamic Snow SE.esp

Formato **ESP**; provider **Better Dynamic Snow SE**; overrides em headers **442**; winner de **37** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Better Dynamic Snow SE - DisableRefs.esm.

**Tipos nos headers:** STAT=49, WRLD=1, CELL=85, REFR=288, MATO=19.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 157. Better Dynamic Snow SE - No Glacier Snow.esp

Formato **ESPFE**; provider **Better Dynamic Snow SE**; overrides em headers **2**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** MATO=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 158. IcyFixes.esp

Formato **ESPFE**; provider **Icy Mesh Remaster - Ice Glaciers - LOD - other fixes**; overrides em headers **477**; winner de **96** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** STAT=152, WRLD=3, CELL=108, REFR=231, MATO=3.

**Campos selecionados diferentes do predecessor:** MajorFlags (4), Location (2).

- `00B40F:Skyrim.esm` / `None`: Laintar Dale.esp → IcyFixes.esp.
  - Location=029636:Laintar Dale.esp (IcyFixes.esp has Location ABSENT)
- `00B410:Skyrim.esm` / `None`: Laintar Dale.esp → IcyFixes.esp.
  - Location=029636:Laintar Dale.esp (IcyFixes.esp has Location ABSENT)
- `00B320:Skyrim.esm` / `None`: Skyrim.esm → IcyFixes.esp.
  - MajorFlags=0 (IcyFixes.esp 262144)
- `00B3C4:Skyrim.esm` / `None`: Skyrim.esm → IcyFixes.esp.
  - MajorFlags=0 (IcyFixes.esp 262144)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 159. XPMSE.esp

Formato **ESP**; provider **XP32 Maximum Skeleton Special Extended - XPMSSE**; overrides em headers **11**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** GMST=11, KYWD=1, MGEF=3, SPEL=3, QUST=2, FLST=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 160. Dragon Priest Fix - Behaviour Overhaul.esp

Formato **ESPFE**; provider **Dragon Priest Fix - Behaviour Overhaul**; overrides em headers **11**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** IDLE=30, MOVT=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 162. noCamColl_2_SE.esp

Formato **ESP**; provider **No Camera Collision (..no Fade out any more)**; overrides em headers **2**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** COLL=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 165. Enhanced Interiors Lite.esp

Formato **ESP**; provider **Enhanced Interiors Lite**; overrides em headers **7697**; winner de **49** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm.

**Tipos nos headers:** CONT=402, LIGH=1, STAT=637, FURN=1, NPC_=56, IDLM=2, NAVI=1, CELL=41, REFR=22693, NAVM=60, ACHR=25, WRLD=5, PACK=1, LCTN=23.

**Campos selecionados diferentes do predecessor:** MajorFlags (1), Flags (1).

- `10D20E:Skyrim.esm` / `None`: Skyrim.esm → Enhanced Interiors Lite.esp.
  - MajorFlags=StartsDead (Enhanced Interiors Lite.esp StartsDead, Persistent, InitiallyDisabled)
- `016BDA:Skyrim.esm` / `RiftenWarehouse`: Vernim Wood.esp → Enhanced Interiors Lite.esp.
  - Flags=IsInteriorCell, PublicArea (Enhanced Interiors Lite.esp IsInteriorCell)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 166. JKs Skyrim.esp

Formato **ESP**; provider **JK's Skyrim**; overrides em headers **2070**; winner de **38** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=4, FACT=11, ACTI=5, ARMO=3, CONT=37, DOOR=9, LIGH=2, MISC=2, STAT=293, MSTT=3, TREE=3, FLOR=1, FURN=3, WEAP=1, NPC_=39, KEYM=17, IDLM=1, LVLI=27, NAVI=1, CELL=200, REFR=20229, NAVM=189, ACHR=122, WRLD=7, LAND=45, PACK=53, FLST=8, LCTN=4, OTFT=6.

**Campos selecionados diferentes do predecessor:** Location (1).

- `00EDC2:Dragonborn.esm` / `None`: HammetDungeon01.esm → JKs Skyrim.esp.
  - Location=402EF2:HammetDungeon01.esm (JKs Skyrim.esp has Location ABSENT)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 167. JK's Skyrim - Reduced Cut - Dragon Bridge.esp

Formato **ESP**; provider **JK's Skyrim AIO - Reduced Cut**; overrides em headers **473**; winner de **4** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, JKs Skyrim.esp.

**Tipos nos headers:** NAVI=1, WRLD=1, CELL=9, REFR=453, ACHR=4, NAVM=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 168. JK's Skyrim - Lightened.esp

Formato **ESP**; provider **JK's Skyrim AIO - Reduced Cut**; overrides em headers **5321**; winner de **35** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, JKs Skyrim.esp.

**Tipos nos headers:** WRLD=6, CELL=103, REFR=5284, ACHR=33.

**Campos selecionados diferentes do predecessor:** MajorFlags (14).

- `10669B:Skyrim.esm` / `None`: Skyrim.esm → JK's Skyrim - Lightened.esp.
  - MajorFlags=0 (JK's Skyrim - Lightened.esp Persistent, InitiallyDisabled)
- `1066C4:Skyrim.esm` / `None`: Skyrim.esm → JK's Skyrim - Lightened.esp.
  - MajorFlags=0 (JK's Skyrim - Lightened.esp Persistent, InitiallyDisabled)
- `1066DE:Skyrim.esm` / `None`: JKs Skyrim.esp → JK's Skyrim - Lightened.esp.
  - MajorFlags=0 (JK's Skyrim - Lightened.esp Persistent, InitiallyDisabled)
- `023FCE:JKs Skyrim.esp` / `None`: JKs Skyrim.esp → JK's Skyrim - Lightened.esp.
  - MajorFlags=0 (JK's Skyrim - Lightened.esp Persistent, InitiallyDisabled)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 169. JK's Castle Volkihar.esp

Formato **ESPFE**; provider **JK's Castle Volkihar**; overrides em headers **1537**; winner de **26** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=10, ACTI=1, CONT=11, DOOR=1, STAT=111, MSTT=5, FURN=1, WEAP=1, KEYM=3, LVLI=2, NAVI=1, CELL=35, NAVM=80, REFR=5311, ACHR=9, WRLD=2, LAND=22, LCTN=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 170. weapons armor clothing & clutter fixes.esp

Formato **ESP**; provider **Weapons Armor Clothing and Clutter Fixes**; overrides em headers **5936**; winner de **881** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, unofficial skyrim special edition patch.esp.

**Tipos nos headers:** GMST=8, KYWD=181, TXST=21, GLOB=3, HDPT=1, RACE=1, ENCH=40, SPEL=30, ARMO=2139, CONT=50, INGR=8, LIGH=1, MISC=269, STAT=2, WEAP=3189, AMMO=20, NPC_=78, ALCH=33, COBJ=81, PROJ=38, LVLI=1225, CELL=16, REFR=309, QUST=2, PACK=7, LSCR=1, FLST=8, PERK=26, ARMA=192, DOBJ=1, OTFT=29.

**Campos selecionados diferentes do predecessor:** Keywords (357), Entries (291), Value (213), ArmorRating (156), BasicStats.Value (91), BasicStats.Weight (84), Critical.Unused3 (74), Critical.Unused (72), Race (61), Conditions (59), BasicStats.Damage (56), Items (54).

- `052190:Skyrim.esm` / `DragonArmor`: unofficial skyrim special edition patch.esp → weapons armor clothing & clutter fixes.esp.
  - Effects: 1 vs weapons armor clothing & clutter fixes.esp 1 item(s), contents differ — only here: [0] Modification=Multiply, Value=2, EntryPoint=ModTemperingHealth (+86 more field(s)); only in weapons armor clothing & clutter fixes.esp: [0] Modification=Multiply, Value=2, EntryPoint=ModTemperingHealth (+189 more field(s))
- `0CB40D:Skyrim.esm` / `SteelSmithing`: unofficial skyrim special edition patch.esp → weapons armor clothing & clutter fixes.esp.
  - Effects: 1 vs weapons armor clothing & clutter fixes.esp 1 item(s), contents differ — only here: [0] Modification=Multiply, Value=2, EntryPoint=ModTemperingHealth (+136 more field(s)); only in weapons armor clothing & clutter fixes.esp: [0] Modification=Multiply, Value=2, EntryPoint=ModTemperingHealth (+1264 more field(s))
- `0CB40E:Skyrim.esm` / `DwarvenSmithing`: Skyrim.esm → weapons armor clothing & clutter fixes.esp.
  - Effects: 1 vs weapons armor clothing & clutter fixes.esp 1 item(s), contents differ — only here: [0] Modification=Multiply, Value=2, EntryPoint=ModTemperingHealth (+86 more field(s)); only in weapons armor clothing & clutter fixes.esp: [0] Modification=Multiply, Value=2, EntryPoint=ModTemperingHealth (+289 more field(s))
- `0CB40F:Skyrim.esm` / `ElvenSmithing`: Skyrim.esm → weapons armor clothing & clutter fixes.esp.
  - Effects: 1 vs weapons armor clothing & clutter fixes.esp 1 item(s), contents differ — only here: [0] Modification=Multiply, Value=2, EntryPoint=ModTemperingHealth (+86 more field(s)); only in weapons armor clothing & clutter fixes.esp: [0] Modification=Multiply, Value=2, EntryPoint=ModTemperingHealth (+339 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 171. MysticismMagic.esp

Formato **ESP**; provider **Mysticism - A Magic Overhaul**; overrides em headers **957**; winner de **497** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=51, TXST=9, GLOB=4, CLAS=2, FACT=2, HDPT=1, RACE=2, SOUN=2, MGEF=748, ENCH=200, SPEL=444, SCRL=243, ACTI=2, ARMO=5, BOOK=296, CONT=21, LIGH=11, MISC=1, STAT=16, WEAP=187, AMMO=2, NPC_=51, COBJ=145, PROJ=72, HAZD=41, LVLI=271, CELL=11, REFR=16, WRLD=2, QUST=2, EFSH=27, EXPL=65, FLST=1, PERK=26, ADDN=10, IPCT=31, IPDS=18, ARMA=3, MESG=1, SMQN=1, OTFT=3, ARTO=55, SNDR=18, DUAL=24.

**Campos selecionados diferentes do predecessor:** BaseCost (216), Flags (188), Effects (122), ChargeTime (104), Conditions (78), Keywords (63), EnchantmentAmount (58), Entries (56), Critical.Unused (41), Critical.Unused3 (41), VirtualMachineAdapter.Scripts (30), PlayerSkills.Unused (20).

- `012FD0:Skyrim.esm` / `MAG_Firebolt`: Skyrim.esm → MysticismMagic.esp.
  - Flags=0 (MysticismMagic.esp ManualCostCalc)
  - BaseCost=41 (MysticismMagic.esp 40)
  - Effects: 3 vs MysticismMagic.esp 3 item(s), contents differ — only here: [0] BaseEffect=012F03:Skyrim.esm, Data=[EffectData], Data.Magnitude=25 (+3 more field(s)); only in MysticismMagic.esp: [0] BaseEffect=012F03:Skyrim.esm, Data=[EffectData], Data.Magnitude=20 (+3 more field(s))
- `013018:Skyrim.esm` / `MAG_LesserWard`: Skyrim.esm → MysticismMagic.esp.
  - Flags=0 (MysticismMagic.esp ManualCostCalc)
  - BaseCost=34 (MysticismMagic.esp 15)
  - Effects: 2 vs MysticismMagic.esp 3 item(s) — only here: [0] BaseEffect=00014C:Skyrim.esm, Data=[EffectData], Data.Magnitude=40 (+3 more field(s)); [1] BaseEffect=0FCC62:Skyrim.esm, Data=[EffectData], Data.Magnitude=40 (+3 more field(s)); only in MysticismMagic.esp: [0] BaseEffect=00014C:Skyrim.esm, Data=[EffectData], Data.Magnitude=30 (+3 more field(s)); [1] BaseEffect=78E9EA:MysticismMagic.esp, Data=[EffectData], Data.Magnitude=75 (+3 more field(s)) (+1 more element(s))
- `016C3F:Skyrim.esm` / `MAG_DreadZombieLeftHand`: unofficial skyrim special edition patch.esp → MysticismMagic.esp.
  - Flags=NoAbsorbOrReflect (MysticismMagic.esp ManualCostCalc, NoAbsorbOrReflect)
  - BaseCost=257 (MysticismMagic.esp 368)
  - ChargeTime=0.5 (MysticismMagic.esp 1)
  - Effects: 3 vs MysticismMagic.esp 3 item(s), contents differ — only here: [0] BaseEffect=016C3D:Skyrim.esm, Data=[EffectData], Data.Magnitude=30 (+3 more field(s)); [1] BaseEffect=101063:Skyrim.esm, Data=[EffectData], Data.Magnitude=3 (+3 more field(s)) (+1 more element(s)); only in MysticismMagic.esp: [0] BaseEffect=016C3D:Skyrim.esm, Data=[EffectData], Data.Magnitude=30 (+3 more field(s)); [1] BaseEffect=10EAD9:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s)) (+1 more element(s))
- `01C789:Skyrim.esm` / `MAG_Fireball`: unofficial skyrim special edition patch.esp → MysticismMagic.esp.
  - Flags=0 (MysticismMagic.esp ManualCostCalc, AreaEffectIgnoresLOS)
  - BaseCost=86 (MysticismMagic.esp 132)
  - ChargeTime=0.5 (MysticismMagic.esp 1)
  - Effects: 3 vs MysticismMagic.esp 3 item(s), contents differ — only here: [1] BaseEffect=0153D3:Skyrim.esm, Data=[EffectData], Data.Magnitude=0.25 (+3 more field(s)); only in MysticismMagic.esp: [1] BaseEffect=0153D3:Skyrim.esm, Data=[EffectData], Data.Magnitude=0.25 (+3 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 172. NoviceBoltSpell-Mysticism.esp

Formato **ESPFE**; provider **Novice Bolt Spells**; overrides em headers **10**; winner de **4** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, NoviceBoltSpells.esp, MysticismMagic.esp.

**Tipos nos headers:** MGEF=2, SPEL=5, BOOK=5.

**Campos selecionados diferentes do predecessor:** CastType (4), ChargeTime (4), Effects (4), BaseCost (1).

- `012FCD:Skyrim.esm` / `MAG_Flames`: MysticismMagic.esp → NoviceBoltSpell-Mysticism.esp.
  - CastType=Concentration (NoviceBoltSpell-Mysticism.esp FireAndForget)
  - BaseCost=16 (NoviceBoltSpell-Mysticism.esp 15)
  - ChargeTime=0 (NoviceBoltSpell-Mysticism.esp 0.5)
  - Effects: 2 vs NoviceBoltSpell-Mysticism.esp 3 item(s) — only here: [0] BaseEffect=013CA9:Skyrim.esm, Data=[EffectData], Data.Magnitude=8 (+3 more field(s)); [1] BaseEffect=0F392F:Skyrim.esm, Data=[EffectData], Data.Magnitude=99 (+3 more field(s)); only in NoviceBoltSpell-Mysticism.esp: [0] BaseEffect=00080C:NoviceBoltSpells.esp, Data=[EffectData], Data.Magnitude=10 (+3 more field(s)); [1] BaseEffect=0F392D:Skyrim.esm, Data=[EffectData], Data.Magnitude=99 (+3 more field(s)) (+1 more element(s))
- `02B96B:Skyrim.esm` / `MAG_Frostbite`: MysticismMagic.esp → NoviceBoltSpell-Mysticism.esp.
  - CastType=Concentration (NoviceBoltSpell-Mysticism.esp FireAndForget)
  - ChargeTime=0 (NoviceBoltSpell-Mysticism.esp 0.5)
  - Effects: 3 vs NoviceBoltSpell-Mysticism.esp 4 item(s) — only here: [0] BaseEffect=013CAA:Skyrim.esm, Data=[EffectData], Data.Magnitude=8 (+3 more field(s)); [1] BaseEffect=0B729D:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s)) (+1 more element(s)); only in NoviceBoltSpell-Mysticism.esp: [0] BaseEffect=00080D:NoviceBoltSpells.esp, Data=[EffectData], Data.Magnitude=10 (+3 more field(s)); [1] BaseEffect=0B729F:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s)) (+2 more element(s))
- `02DD2A:Skyrim.esm` / `MAG_Sparks`: MysticismMagic.esp → NoviceBoltSpell-Mysticism.esp.
  - CastType=Concentration (NoviceBoltSpell-Mysticism.esp FireAndForget)
  - ChargeTime=0 (NoviceBoltSpell-Mysticism.esp 0.5)
  - Effects: 2 vs NoviceBoltSpell-Mysticism.esp 3 item(s) — only here: [0] BaseEffect=013CAB:Skyrim.esm, Data=[EffectData], Data.Magnitude=8 (+3 more field(s)); [1] BaseEffect=0F3F0C:Skyrim.esm, Data=[EffectData], Data.Magnitude=200 (+3 more field(s)); only in NoviceBoltSpell-Mysticism.esp: [0] BaseEffect=00080E:NoviceBoltSpells.esp, Data=[EffectData], Data.Magnitude=10 (+3 more field(s)); [1] BaseEffect=0F3F0D:Skyrim.esm, Data=[EffectData], Data.Magnitude=200 (+3 more field(s)) (+1 more element(s))
- `7388D3:MysticismMagic.esp` / `MAG_SunbeamBolt`: MysticismMagic.esp → NoviceBoltSpell-Mysticism.esp.
  - CastType=Concentration (NoviceBoltSpell-Mysticism.esp FireAndForget)
  - ChargeTime=0 (NoviceBoltSpell-Mysticism.esp 0.5)
  - Effects: 1 vs NoviceBoltSpell-Mysticism.esp 1 item(s), contents differ — only here: [0] BaseEffect=7388D2:MysticismMagic.esp, Data=[EffectData], Data.Magnitude=8 (+3 more field(s)); only in NoviceBoltSpell-Mysticism.esp: [0] BaseEffect=000801:NoviceBoltSpell-Mysticism.esp, Data=[EffectData], Data.Magnitude=10 (+3 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 173. 360 Ward.esp

Formato **ESPFE**; provider **360 Ward**; overrides em headers **11**; winner de **9** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, MysticismMagic.esp.

**Tipos nos headers:** MGEF=11, RFCT=1, ARTO=1.

**Campos selecionados diferentes do predecessor:** VirtualMachineAdapter (9), VirtualMachineAdapter.Version only in 360 Ward.esp (9), VirtualMachineAdapter.ObjectFormat only in 360 Ward.esp (9), VirtualMachineAdapter.Scripts (9).

- `00014C:Skyrim.esm` / `MAG_WardConcSelf0`: MysticismMagic.esp → 360 Ward.esp.
  - VirtualMachineAdapter: ABSENT here (360 Ward.esp has [VirtualMachineAdapter])
  - VirtualMachineAdapter.Version only in 360 Ward.esp: 5
  - VirtualMachineAdapter.ObjectFormat only in 360 Ward.esp: 2
  - VirtualMachineAdapter.Scripts: 0 vs 360 Ward.esp 1 item(s) — only in 360 Ward.esp: [0] Name=SphereWard, Flags=Local, Properties=[list: 1 item(s)] (+6 more field(s))
- `05AD60:Skyrim.esm` / `MAG_WardConcSelf25`: MysticismMagic.esp → 360 Ward.esp.
  - VirtualMachineAdapter: ABSENT here (360 Ward.esp has [VirtualMachineAdapter])
  - VirtualMachineAdapter.Version only in 360 Ward.esp: 5
  - VirtualMachineAdapter.ObjectFormat only in 360 Ward.esp: 2
  - VirtualMachineAdapter.Scripts: 0 vs 360 Ward.esp 1 item(s) — only in 360 Ward.esp: [0] Name=SphereWard, Flags=Local, Properties=[list: 1 item(s)] (+6 more field(s))
- `05AD61:Skyrim.esm` / `MAG_WardConcSelf50`: MysticismMagic.esp → 360 Ward.esp.
  - VirtualMachineAdapter: ABSENT here (360 Ward.esp has [VirtualMachineAdapter])
  - VirtualMachineAdapter.Version only in 360 Ward.esp: 5
  - VirtualMachineAdapter.ObjectFormat only in 360 Ward.esp: 2
  - VirtualMachineAdapter.Scripts: 0 vs 360 Ward.esp 1 item(s) — only in 360 Ward.esp: [0] Name=SphereWard, Flags=Local, Properties=[list: 1 item(s)] (+6 more field(s))
- `283347:MysticismMagic.esp` / `MAG_WardConcSelf75`: MysticismMagic.esp → 360 Ward.esp.
  - VirtualMachineAdapter: ABSENT here (360 Ward.esp has [VirtualMachineAdapter])
  - VirtualMachineAdapter.Version only in 360 Ward.esp: 5
  - VirtualMachineAdapter.ObjectFormat only in 360 Ward.esp: 2
  - VirtualMachineAdapter.Scripts: 0 vs 360 Ward.esp 1 item(s) — only in 360 Ward.esp: [0] Name=SphereWard, Flags=Local, Properties=[list: 1 item(s)] (+6 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 174. JK's Fort Dawnguard.esp

Formato **ESPFE**; provider **JK's Fort Dawnguard**; overrides em headers **1033**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=3, ARMO=5, CONT=2, STAT=35, FURN=1, WEAP=2, NAVI=1, CELL=19, REFR=2882, ACHR=4, NAVM=36, WRLD=1, LAND=16.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 175. JKs-ClefJs Fort Dawnguard.esp

Formato **ESPFE**; provider **JK's - ClefJ's Fort Dawnguard**; overrides em headers **3503**; winner de **25** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ClefJ's Fort Dawnguard.esp, JK's Fort Dawnguard.esp.

**Tipos nos headers:** STAT=5, NAVI=1, CELL=19, REFR=3534, ACHR=16, NAVM=21, WRLD=1, LAND=15.

**Campos selecionados diferentes do predecessor:** MajorFlags (5).

- `01AA7B:Dawnguard.esm` / `None`: JK's Fort Dawnguard.esp → JKs-ClefJs Fort Dawnguard.esp.
  - MajorFlags=0 (JKs-ClefJs Fort Dawnguard.esp Persistent)
- `01AA7C:Dawnguard.esm` / `None`: JK's Fort Dawnguard.esp → JKs-ClefJs Fort Dawnguard.esp.
  - MajorFlags=0 (JKs-ClefJs Fort Dawnguard.esp Persistent)
- `000BA3:ClefJ's Fort Dawnguard.esp` / `None`: ClefJ's Fort Dawnguard.esp → JKs-ClefJs Fort Dawnguard.esp.
  - MajorFlags=Persistent (JKs-ClefJs Fort Dawnguard.esp Persistent, InitiallyDisabled)
- `000BA4:ClefJ's Fort Dawnguard.esp` / `None`: ClefJ's Fort Dawnguard.esp → JKs-ClefJs Fort Dawnguard.esp.
  - MajorFlags=Persistent (JKs-ClefJs Fort Dawnguard.esp Persistent, InitiallyDisabled)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 176. JKs-ClefJs Fort Dawnguard - Dawnguard Arsenal patch.esp

Formato **ESPFE**; provider **JK's - ClefJ's Fort Dawnguard**; overrides em headers **22**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, DawnguardArsenal.esp, ClefJ's Fort Dawnguard.esp, JK's Fort Dawnguard.esp, JKs-ClefJs Fort Dawnguard.esp.

**Tipos nos headers:** CELL=2, REFR=13, ACHR=6, WRLD=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 177. JKs-ClefJs Fort Dawnguard - HLT patch.esp

Formato **ESPFE**; provider **JK's - ClefJ's Fort Dawnguard**; overrides em headers **8**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ClefJ's Fort Dawnguard.esp, JK's Fort Dawnguard.esp, JKs-ClefJs Fort Dawnguard.esp, HappyLittleTrees.esp.

**Tipos nos headers:** WRLD=1, CELL=2, REFR=5.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 178. JKs-ClefJs Fort Dawnguard - USSEP patch.esp

Formato **ESPFE**; provider **JK's - ClefJ's Fort Dawnguard**; overrides em headers **3**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, unofficial skyrim special edition patch.esp, ClefJ's Fort Dawnguard.esp, JK's Fort Dawnguard.esp, JKs-ClefJs Fort Dawnguard.esp.

**Tipos nos headers:** WRLD=1, CELL=1, REFR=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 179. JKs-ClefJs Fort Dawnguard - WACCF patch.esp

Formato **ESPFE**; provider **JK's - ClefJ's Fort Dawnguard**; overrides em headers **12**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, Weapons Armor Clothing & Clutter Fixes.esp, ClefJ's Fort Dawnguard.esp, JK's Fort Dawnguard.esp, JKs-ClefJs Fort Dawnguard.esp.

**Tipos nos headers:** CELL=1, REFR=11.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 180. Grand Solitude - JKs Skyrim patch.esp

Formato **ESPFE**; provider **Grand Solitude Patch Collection**; overrides em headers **977**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, HearthFires.esm, unofficial skyrim special edition patch.esp, Grand Solitude - The Walls of High King Erling.esp, JKs Skyrim.esp.

**Tipos nos headers:** NAVI=1, WRLD=1, CELL=10, REFR=953, NAVM=15, PHZD=5.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 181. JK's Dark Brotherhood Sanctuary.esp

Formato **ESPFE**; provider **JK's Dark Brotherhood Sanctuaries**; overrides em headers **911**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=4, ACTI=1, CONT=8, DOOR=1, STAT=31, FURN=1, NAVI=1, CELL=7, REFR=2779, ACHR=7, NAVM=2, WRLD=1, LAND=2, PACK=9.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 182. Skyrim Revamped - Complete Enemy Overhaul.esp

Formato **ESP**; provider **Skyrim Revamped - Complete Enemy Overhaul**; overrides em headers **847**; winner de **521** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=14, TXST=2, GLOB=1, CLAS=4, HDPT=4, RACE=16, SOUN=2, MGEF=107, ENCH=3, SPEL=116, ARMO=16, LIGH=6, STAT=5, WEAP=8, AMMO=2, NPC_=820, LVLN=158, PROJ=21, HAZD=3, LVLI=2, PACK=9, CSTY=161, LVSP=1, EFSH=5, EXPL=11, IMAD=8, FLST=5, PERK=17, IPCT=5, IPDS=4, ARMA=17, SHOU=9, OTFT=5, ARTO=8, SNDR=37, DUAL=1.

**Campos selecionados diferentes do predecessor:** PlayerSkills.Unused2 (431), PlayerSkills.Unused (428), Perks (403), ActorEffect (252), CombatStyle (144), Items (139), PlayerSkills.Health (90), VirtualMachineAdapter.Scripts (74), PlayerSkills.SkillValues[Sneak] (72), PlayerSkills.SkillValues[Destruction] (69), PlayerSkills.Magicka (69), Configuration.Level.Level (68).

- `0434DD:Skyrim.esm` / `crSpider01PoisonSpit`: Skyrim.esm → Skyrim Revamped - Complete Enemy Overhaul.esp.
  - Effects: 1 vs Skyrim Revamped - Complete Enemy Overhaul.esp 1 item(s), contents differ — only here: [0] BaseEffect=046005:Skyrim.esm, Data=[EffectData], Data.Magnitude=3 (+3 more field(s)); only in Skyrim Revamped - Complete Enemy Overhaul.esp: [0] BaseEffect=046005:Skyrim.esm, Data=[EffectData], Data.Magnitude=4 (+3 more field(s))
- `04CCF9:Skyrim.esm` / `crSpider02PoisonSpit`: Skyrim.esm → Skyrim Revamped - Complete Enemy Overhaul.esp.
  - Effects: 1 vs Skyrim Revamped - Complete Enemy Overhaul.esp 1 item(s), contents differ — only here: [0] BaseEffect=046005:Skyrim.esm, Data=[EffectData], Data.Magnitude=5 (+3 more field(s)); only in Skyrim Revamped - Complete Enemy Overhaul.esp: [0] BaseEffect=046005:Skyrim.esm, Data=[EffectData], Data.Magnitude=4 (+3 more field(s))
- `04CCFA:Skyrim.esm` / `crSpider03PoisonSpit`: Skyrim.esm → Skyrim Revamped - Complete Enemy Overhaul.esp.
  - Effects: 1 vs Skyrim Revamped - Complete Enemy Overhaul.esp 1 item(s), contents differ — only here: [0] BaseEffect=046005:Skyrim.esm, Data=[EffectData], Data.Magnitude=10 (+3 more field(s)); only in Skyrim Revamped - Complete Enemy Overhaul.esp: [0] BaseEffect=046005:Skyrim.esm, Data=[EffectData], Data.Magnitude=4 (+3 more field(s))
- `053474:Skyrim.esm` / `crChaurusPoisonBite01`: Skyrim.esm → Skyrim Revamped - Complete Enemy Overhaul.esp.
  - Effects: 1 vs Skyrim Revamped - Complete Enemy Overhaul.esp 1 item(s), contents differ — only here: [0] BaseEffect=06F6FC:Skyrim.esm, Data=[EffectData], Data.Magnitude=5 (+3 more field(s)); only in Skyrim Revamped - Complete Enemy Overhaul.esp: [0] BaseEffect=06F6FC:Skyrim.esm, Data=[EffectData], Data.Magnitude=30 (+3 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 183. The Restless Dead.esp

Formato **ESP**; provider **The Restless Dead (A Draugr and Skeleton Overhaul)**; overrides em headers **1142**; winner de **1044** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=64, TXST=11, CLAS=19, RACE=23, SOUN=3, MGEF=126, ENCH=41, SPEL=158, ARMO=415, BOOK=3, MISC=1, STAT=38, WEAP=371, AMMO=11, NPC_=1343, LVLN=1071, COBJ=102, PROJ=20, LVLI=588, RFCT=13, CELL=107, ACHR=812, REFR=3, WRLD=4, QUST=2, CSTY=72, LVSP=13, EFSH=15, EXPL=17, IMAD=4, PERK=145, ARMA=342, LCTN=5, MESG=3, SHOU=36, OTFT=403, ARTO=16.

**Campos selecionados diferentes do predecessor:** Base (805), VirtualMachineAdapter.Scripts (163), PlayerSkills.Unused2 (106), Configuration.TemplateFlags (85), CombatStyle (80), Items (71), PlayerSkills.Magicka (62), PlayerSkills.Stamina (62), Perks (62), DefaultOutfit (60), PlayerSkills.Unused (60), Keywords (56).

- `01BB28:Skyrim.esm` / `JyrikGauldurson`: Skyrim Revamped - Complete Enemy Overhaul.esp → The Restless Dead.esp.
  - Configuration.Level=[PcLevelMult] (The Restless Dead.esp [NpcLevel])
  - Configuration.Level.LevelMult=1.5 (The Restless Dead.esp has no Configuration.Level.LevelMult)
  - Configuration.Flags=AutoCalcStats, DoesNotBleed, IsGhost (The Restless Dead.esp IsGhost)
  - Configuration.MagickaOffset=500 (The Restless Dead.esp 0)
- `01E7AC:Skyrim.esm` / `LvlDraugrWarlockMale`: Skyrim.esm → The Restless Dead.esp.
  - Configuration.TemplateFlags=Traits, Stats, Factions, SpellList, AIData, AIPackages, BaseData, Inventory, Script, DefPackList, AttackData (The Restless Dead.esp Traits, Stats, Factions, SpellList, AIData, AIPackages, BaseData, Inventory, Script, DefPackList, AttackData, Keywords)
  - PlayerSkills.Unused=1 (The Restless Dead.esp 16748)
  - PlayerSkills.Unused2=7E5400 (The Restless Dead.esp D7D1DE)
- `01E7AD:Skyrim.esm` / `LvlDraugrMelee2HMale`: Skyrim.esm → The Restless Dead.esp.
  - Configuration.TemplateFlags=Traits, Stats, Factions, SpellList, AIData, AIPackages, ModelAnimation, BaseData, Inventory, Script, DefPackList, AttackData (The Restless Dead.esp Traits, Stats, Factions, SpellList, AIData, AIPackages, ModelAnimation, BaseData, Inventory, Script, DefPackList, AttackData, Keywords)
  - PlayerSkills.Unused=1 (The Restless Dead.esp 16748)
  - PlayerSkills.Unused2=7E5400 (The Restless Dead.esp D7D1DE)
- `025EAE:Skyrim.esm` / `LvlDraugrMelee2HFemale`: Skyrim.esm → The Restless Dead.esp.
  - Configuration.TemplateFlags=Traits, Stats, Factions, SpellList, AIData, AIPackages, ModelAnimation, BaseData, Inventory, Script, DefPackList, AttackData (The Restless Dead.esp Traits, Stats, Factions, SpellList, AIData, AIPackages, ModelAnimation, BaseData, Inventory, Script, DefPackList, AttackData, Keywords)
  - PlayerSkills.Unused=2 (The Restless Dead.esp 16748)
  - PlayerSkills.Unused2=7E5400 (The Restless Dead.esp D7D1DE)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 184. TRD Patch - Hand Placed Enemies - Light.esp

Formato **ESPFE**; provider **The Restless Dead (A Draugr and Skeleton Overhaul)**; overrides em headers **145**; winner de **137** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, The Restless Dead.esp, Hand Placed Enemies - Light.esp.

**Tipos nos headers:** NPC_=6, CELL=18, ACHR=127.

**Campos selecionados diferentes do predecessor:** Base (126), VirtualMachineAdapter (17), VirtualMachineAdapter.Scripts (17), MajorFlags (12), VirtualMachineAdapter.Version only in TRD Patch - Hand Placed Enemies - Light.esp (9), VirtualMachineAdapter.ObjectFormat only in TRD Patch - Hand Placed Enemies - Light.esp (9), VirtualMachineAdapter.Version (8), VirtualMachineAdapter.ObjectFormat (8), Conditions (5), Effects (5), Keywords (5), ActorEffect (5).

- `000891:Hand Placed Enemies - Light.esp` / `None`: Hand Placed Enemies - Light.esp → TRD Patch - Hand Placed Enemies - Light.esp.
  - Base=09CB63:Skyrim.esm (TRD Patch - Hand Placed Enemies - Light.esp 000D09:TRD Patch - Hand Placed Enemies - Light.esp)
  - MajorFlags=0 (TRD Patch - Hand Placed Enemies - Light.esp InitiallyDisabled)
- `000890:Hand Placed Enemies - Light.esp` / `None`: Hand Placed Enemies - Light.esp → TRD Patch - Hand Placed Enemies - Light.esp.
  - Base=09CB62:Skyrim.esm (TRD Patch - Hand Placed Enemies - Light.esp 000D09:TRD Patch - Hand Placed Enemies - Light.esp)
  - MajorFlags=0 (TRD Patch - Hand Placed Enemies - Light.esp InitiallyDisabled)
- `00088D:Hand Placed Enemies - Light.esp` / `None`: Hand Placed Enemies - Light.esp → TRD Patch - Hand Placed Enemies - Light.esp.
  - Base=0F5BBE:Skyrim.esm (TRD Patch - Hand Placed Enemies - Light.esp 801784:The Restless Dead.esp)
- `00088A:Hand Placed Enemies - Light.esp` / `None`: Hand Placed Enemies - Light.esp → TRD Patch - Hand Placed Enemies - Light.esp.
  - Base=09CB62:Skyrim.esm (TRD Patch - Hand Placed Enemies - Light.esp BE25A4:The Restless Dead.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 185. TRD Patch - WACCF.esp

Formato **ESPFE**; provider **The Restless Dead (A Draugr and Skeleton Overhaul)**; overrides em headers **167**; winner de **140** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Weapons Armor Clothing & Clutter Fixes.esp, The Restless Dead.esp.

**Tipos nos headers:** ARMO=5, WEAP=150, AMMO=1, PROJ=11.

**Campos selecionados diferentes do predecessor:** Keywords (121), Data.Speed (37), BasicStats.Value (18), BasicStats.Weight (16).

- `01CB64:Skyrim.esm` / `DraugrBattleAxe`: The Restless Dead.esp → TRD Patch - WACCF.esp.
  - BasicStats.Value=28 (TRD Patch - WACCF.esp 60)
  - Keywords: 3 vs TRD Patch - WACCF.esp 4 item(s) — only in TRD Patch - WACCF.esp: [3] AF0102:Update.esm
- `0236A5:Skyrim.esm` / `DraugrGreatsword`: The Restless Dead.esp → TRD Patch - WACCF.esp.
  - BasicStats.Value=35 (TRD Patch - WACCF.esp 75)
  - Data.Speed=0.75 (TRD Patch - WACCF.esp 0.8)
  - Keywords: 3 vs TRD Patch - WACCF.esp 4 item(s) — only in TRD Patch - WACCF.esp: [3] AF0102:Update.esm
- `02C66F:Skyrim.esm` / `DraugrSword`: The Restless Dead.esp → TRD Patch - WACCF.esp.
  - BasicStats.Value=13 (TRD Patch - WACCF.esp 35)
  - BasicStats.Weight=12 (TRD Patch - WACCF.esp 11)
  - Keywords: 3 vs TRD Patch - WACCF.esp 5 item(s) — only in TRD Patch - WACCF.esp: [3] AF0102:Update.esm; [4] DA0159:Update.esm
- `02C672:Skyrim.esm` / `DraugrWarAxe`: The Restless Dead.esp → TRD Patch - WACCF.esp.
  - BasicStats.Value=15 (TRD Patch - WACCF.esp 45)
  - BasicStats.Weight=14 (TRD Patch - WACCF.esp 13)
  - Keywords: 3 vs TRD Patch - WACCF.esp 4 item(s) — only in TRD Patch - WACCF.esp: [3] AF0102:Update.esm

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 186. Bandit War.esp

Formato **ESP**; provider **Lawless - A Bandit Overhaul**; overrides em headers **804**; winner de **707** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=2, CLAS=22, MGEF=12, SPEL=25, ARMO=4, WEAP=15, NPC_=2972, LVLN=505, COBJ=8, LVLI=154, CELL=27, ACHR=42, WRLD=1, QUST=1, CSTY=21, LVSP=4, PERK=21, ARMA=6, MESG=1, OTFT=28.

**Campos selecionados diferentes do predecessor:** PlayerSkills.Unused2 (589), Items (501), PlayerSkills.Unused (488), PlayerSkills.Health (480), PlayerSkills.Stamina (480), Configuration.HealthOffset (476), Configuration.StaminaOffset (475), Perks (472), PlayerSkills.SkillValues[Sneak] (418), PlayerSkills.SkillValues[LightArmor] (413), Configuration.TemplateFlags (260), Template (249).

- `013679:Skyrim.esm` / `dunCrackedTuskGhunzul`: Skyrim.esm → Bandit War.esp.
  - Configuration.TemplateFlags=Traits, Stats, Factions, SpellList, Inventory, DefPackList, AttackData, Keywords (Bandit War.esp Traits, Stats, Factions, SpellList, DefPackList, AttackData, Keywords)
  - Template=0E8B1F:Skyrim.esm (Bandit War.esp 151233:Bandit War.esp)
  - PlayerSkills.Unused=0 (Bandit War.esp 16748)
  - PlayerSkills.Unused2=000100 (Bandit War.esp 18FF07)
- `01B074:Skyrim.esm` / `AlainDufont`: Skyrim.esm → Bandit War.esp.
  - Configuration.Level.Level=4 (Bandit War.esp 16)
  - Configuration.MagickaOffset=0 (Bandit War.esp -25)
  - Configuration.StaminaOffset=0 (Bandit War.esp 100)
  - Configuration.TemplateFlags=0 (Bandit War.esp Stats, SpellList, AttackData)
- `01B0BD:Skyrim.esm` / `LvlBanditMissileCommonerFArcher`: Skyrim.esm → Bandit War.esp.
  - Template=01A342:Skyrim.esm (Bandit War.esp 15123E:Bandit War.esp)
  - PlayerSkills.Unused=1 (Bandit War.esp 16748)
  - PlayerSkills.Unused2=7E5400 (Bandit War.esp 18FF07)
- `01BA08:Skyrim.esm` / `Telrav`: Skyrim.esm → Bandit War.esp.
  - Template=01B0BE:Skyrim.esm (Bandit War.esp 15123F:Bandit War.esp)
  - PlayerSkills.Unused=0 (Bandit War.esp 16748)
  - PlayerSkills.Unused2=000100 (Bandit War.esp 18FF07)
  - CombatStyle: ABSENT here (Bandit War.esp has 03BE1D:Skyrim.esm)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 187. Apothecary.esp

Formato **ESP**; provider **Apothecary - An Alchemy Overhaul**; overrides em headers **573**; winner de **527** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=23, TXST=1, MGEF=71, SPEL=8, BOOK=5, CONT=1, INGR=115, FLOR=8, ALCH=310, LVLI=120, QUST=1, EFSH=1, FLST=2, PERK=5, SMQN=1, ARTO=1.

**Campos selecionados diferentes do predecessor:** Effects (310), Value (248), Entries (63), BaseCost (56), Keywords (40), Flags (20), VirtualMachineAdapter.Scripts (15), Archetype.ActorValue (14), Conditions (12), Archetype.Type (10), ResistValue (8), Archetype (7).

- `0A725C:Skyrim.esm` / `AlchemySkillBoosts`: unofficial skyrim special edition patch.esp → Apothecary.esp.
  - Effects: 19 vs Apothecary.esp 19 item(s), contents differ — only here: [1] ActorValue=AlterationPowerModifier, Value=0.01, Modification=MultiplyOnePlusAVMult (+35 more field(s)); only in Apothecary.esp: [1] ActorValue=AlterationPowerModifier, Value=0.01, Modification=MultiplyOnePlusAVMult (+60 more field(s))
- `10BF0A:Skyrim.esm` / `MAG_SinderionsLegacyPerk`: unofficial skyrim special edition patch.esp → Apothecary.esp.
  - Effects: 1 vs Apothecary.esp 1 item(s), contents differ — only here: [0] Modification=Multiply, Value=2, EntryPoint=ModPotionsCreated (+34 more field(s)); only in Apothecary.esp: [0] Modification=Add, Value=1, EntryPoint=ModPotionsCreated (+8 more field(s))
- `10BF09:Skyrim.esm` / `MAG_SinderionsLegacySpell`: Skyrim.esm → Apothecary.esp.
  - EquipmentType=025BEE:Skyrim.esm (Apothecary.esp 013F44:Skyrim.esm)
- `073F30:Skyrim.esm` / `MAG_AlchParalysis`: unofficial skyrim special edition patch.esp → Apothecary.esp.
  - VirtualMachineAdapter: ABSENT here (Apothecary.esp has [VirtualMachineAdapter])
  - Flags=Hostile, Recover, NoMagnitude, NoArea, PowerAffectsDuration (Apothecary.esp Hostile, Recover, NoArea, PowerAffectsMagnitude)
  - Archetype.Type=Paralysis (Apothecary.esp Rally)
  - Archetype.ActorValue=Paralysis (Apothecary.esp Confidence)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 188. Thaumaturgy.esp

Formato **ESP**; provider **Thaumaturgy - An Enchanting Overhaul**; overrides em headers **6214**; winner de **4023** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** GMST=5, KYWD=57, TXST=1, GLOB=1, MGEF=185, ENCH=573, SPEL=11, ARMO=4802, LIGH=2, STAT=3, WEAP=4858, PROJ=3, HAZD=2, LVLI=1342, RFCT=2, CELL=2, REFR=2, QUST=1, EFSH=24, FLST=56, PERK=25, IPCT=3, IPDS=3, SMQN=1, ARTO=2, SNDR=2.

**Campos selecionados diferentes do predecessor:** Keywords (1732), BasicStats.Damage (1205), BasicStats.Value (1143), Data.Flags (1110), Critical.Damage (1090), BasicStats.Weight (1079), Critical.Unused (708), Critical.Unused3 (708), Value (432), Data.Speed (416), EnchantmentAmount (340), Entries (336).

- `0CF788:Skyrim.esm` / `PerkSkillBoosts`: unofficial skyrim special edition patch.esp → Thaumaturgy.esp.
  - Effects: 18 vs Thaumaturgy.esp 17 item(s) — only here: [0] ActorValue=AlchemyModifier, Value=0.01, Modification=MultiplyOnePlusAVMult (+9 more field(s))
- `ADA501:Update.esm` / `MAG_ControllerGeneralPerk`: Apothecary.esp → Thaumaturgy.esp.
  - Effects[17].Conditions[0].Conditions[2].Data.Keyword: UNREADABLE here — not compared (floi: form mode, null or unreadable FormKey on FormLinkOrIndex`1)
- `08B65C:Skyrim.esm` / `MAG_EnchFortifyPotionsDurationConstantSelf`: unofficial skyrim special edition patch.esp → Thaumaturgy.esp.
  - Archetype.ActorValue=AlchemyModifier (Thaumaturgy.esp AlchemySkillAdvance)
  - BaseCost=17 (Thaumaturgy.esp 10)
- `092A57:Skyrim.esm` / `MAG_EnchMuffleConstantSelf`: unofficial skyrim special edition patch.esp → Thaumaturgy.esp.
  - Flags=Recover, NoDuration, NoArea, PowerAffectsMagnitude (Thaumaturgy.esp Recover, NoDuration, NoArea)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 189. Artificer.esp

Formato **ESPFE**; provider **Artificer - An Artifact Overhaul**; overrides em headers **502**; winner de **341** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, MysticismMagic.esp, Thaumaturgy.esp.

**Tipos nos headers:** KYWD=7, TXST=29, SOUN=2, MGEF=300, ENCH=144, SPEL=67, ACTI=6, ARMO=158, BOOK=1, CONT=1, STAT=26, WEAP=105, NPC_=15, LVLN=2, KEYM=1, ALCH=6, COBJ=63, PROJ=3, SLGM=1, LVLI=23, CELL=5, REFR=10, WRLD=1, DIAL=6, QUST=12, CSTY=1, EFSH=9, EXPL=4, FLST=5, PERK=47, ARMA=11, MESG=20, SMQN=1, OTFT=3, ARTO=1.

**Campos selecionados diferentes do predecessor:** EnchantmentAmount (123), Effects (120), Flags (86), Keywords (86), ObjectEffect (74), BasicStats.Value (55), VirtualMachineAdapter.Scripts (46), Value (39), BasicStats.Weight (34), BaseCost (27), BasicStats.Damage (26), VirtualMachineAdapter (23).

- `0F5D2F:Skyrim.esm` / `MAG_dunMossMotherPerk`: unofficial skyrim special edition patch.esp → Artificer.esp.
  - Effects: 1 vs Artificer.esp 1 item(s), contents differ — only here: [0] Modification=Add, Value=25, EntryPoint=CalculateMyCriticalHitChance (+36 more field(s)); only in Artificer.esp: [0] Modification=Add, Value=10, EntryPoint=CalculateMyCriticalHitChance (+36 more field(s))
- `0142AC:Dawnguard.esm` / `MAG_AetherialShieldPerk`: Dawnguard.esm → Artificer.esp.
  - Effects: 1 vs Artificer.esp 1 item(s), contents differ — only here: [0] Spell=0142AD:Dawnguard.esm, EntryPoint=ApplyBashingSpell, PerkConditionTabCount=2 (+35 more field(s)); only in Artificer.esp: [0] Spell=0142AD:Dawnguard.esm, EntryPoint=ApplyWeaponSwingSpell, PerkConditionTabCount=3 (+84 more field(s))
- `01E7ED:Dragonborn.esm` / `MAG_BlackBookScholarsInsightPerk`: Dragonborn.esm → Artificer.esp.
  - Effects: 1 vs Artificer.esp 1 item(s), contents differ — only here: [0] Modification=Add, Value=1, EntryPoint=AdjustBookSkillPoints (+8 more field(s)); only in Artificer.esp: [0] Modification=Multiply, Value=1.1, EntryPoint=ModSkillUse (+8 more field(s))
- `01E7F0:Dragonborn.esm` / `MAG_BlackBookCompanionsInsightPerk`: Dragonborn.esm → Artificer.esp.
  - Effects: 2 vs Artificer.esp 2 item(s), contents differ — only here: [0] Modification=Multiply, Value=0, EntryPoint=ModSpellMagnitude (+158 more field(s)); only in Artificer.esp: [0] Modification=Multiply, Value=0, EntryPoint=ModSpellMagnitude (+233 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 190. DragonPriestArmorArtificer.esp

Formato **ESPFE**; provider **Armory of the Dragon Cult - Dragon Priest Armor**; overrides em headers **4**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dragonborn.esm, DragonPriestArmor.esp, Artificer.esp, Thaumaturgy.esp.

**Tipos nos headers:** ARMO=4.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 191. JK's The Bards College.esp

Formato **ESPFE**; provider **JK's The Bards College**; overrides em headers **745**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=4, CONT=3, MISC=1, STAT=53, FURN=1, NAVI=1, CELL=4, REFR=2196, ACHR=5, NAVM=2, WRLD=1, LCTN=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 192. JK's High Hrothgar.esp

Formato **ESPFE**; provider **JK's High Hrothgar**; overrides em headers **477**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=11, GLOB=2, CONT=5, STAT=47, MSTT=1, FURN=1, NAVI=1, CELL=9, REFR=2244, NAVM=20, WRLD=1, LAND=5, QUST=1, FLST=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 193. Embers XD.esp

Formato **ESP**; provider **Embers XD**; overrides em headers **439**; winner de **92** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=1, STAT=15, MSTT=32, CELL=138, REFR=400, WRLD=6, LAND=11, EXPL=1, ADDN=15.

**Campos selecionados diferentes do predecessor:** Flags (1).

- `01382D:Skyrim.esm` / `StonehillsSorlisHouse`: Stonehills.esp → Embers XD.esp.
  - Flags=IsInteriorCell, PublicArea, ShowSky (Embers XD.esp IsInteriorCell, ShowSky)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 194. JKs-ClefJs Fort Dawnguard - Embers XD patch.esp

Formato **ESPFE**; provider **JK's - ClefJ's Fort Dawnguard**; overrides em headers **5**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, ClefJ's Fort Dawnguard.esp, Embers XD.esp, JK's Fort Dawnguard.esp, JKs-ClefJs Fort Dawnguard.esp.

**Tipos nos headers:** CELL=1, REFR=4.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 195. TRD Patch - Mortal Enemies.esp

Formato **ESPFE**; provider **The Restless Dead (A Draugr and Skeleton Overhaul)**; overrides em headers **20**; winner de **20** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, The Restless Dead.esp.

**Tipos nos headers:** RACE=20.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 196. TRD Patch - CC Fishing.esp

Formato **ESPFE**; provider **The Restless Dead (A Draugr and Skeleton Overhaul)**; overrides em headers **59**; winner de **44** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ccBGSSSE001-Fish.esm, The Restless Dead.esp.

**Tipos nos headers:** WEAP=42, COBJ=6, LVLI=11.

**Campos selecionados diferentes do predecessor:** Template (32), BasicStats.Damage (6), Items (6), Critical.Damage (5), Critical.Unused3 (5).

- `12F96C:The Restless Dead.esp` / `zzTRD_DC_EnchDraugrWarhammerHonedShock02`: The Restless Dead.esp → TRD Patch - CC Fishing.esp.
  - Template=12F959:The Restless Dead.esp (TRD Patch - CC Fishing.esp 08A1EF:ccBGSSSE001-Fish.esm)
- `12A84D:The Restless Dead.esp` / `zzTRD_DC_EnchDraugrWarhammerFire01`: The Restless Dead.esp → TRD Patch - CC Fishing.esp.
  - Template=12061D:The Restless Dead.esp (TRD Patch - CC Fishing.esp 000E47:ccBGSSSE001-Fish.esm)
- `000E46:ccBGSSSE001-Fish.esm` / `ccBGSSSE001_DraugrMace`: ccBGSSSE001-Fish.esm → TRD Patch - CC Fishing.esp.
  - BasicStats.Damage=10 (TRD Patch - CC Fishing.esp 9)
  - Critical.Damage=5 (TRD Patch - CC Fishing.esp 4)
  - Critical.Unused3=1 (TRD Patch - CC Fishing.esp 0)
- `000E47:ccBGSSSE001-Fish.esm` / `ccBGSSSE001_DraugrWarhammer`: ccBGSSSE001-Fish.esm → TRD Patch - CC Fishing.esp.
  - BasicStats.Damage=20 (TRD Patch - CC Fishing.esp 18)
  - Critical.Damage=10 (TRD Patch - CC Fishing.esp 9)
  - Critical.Unused3=1 (TRD Patch - CC Fishing.esp 0)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 197. TRD Optional File - Difficulty (IV) - Hard.esp

Formato **ESPFE**; provider **The Restless Dead (A Draugr and Skeleton Overhaul)**; overrides em headers **108**; winner de **84** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, The Restless Dead.esp.

**Tipos nos headers:** LVLN=69, LVLI=39.

**Campos selecionados diferentes do predecessor:** Flags (68), Entries (16).

- `82F0ED:The Restless Dead.esp` / `zzTRD_RD_LCharDraugrWarlockFemale_Ancient`: The Restless Dead.esp → TRD Optional File - Difficulty (IV) - Hard.esp.
  - Flags=CalculateFromAllLevelsLessThanOrEqualPlayer, CalculateForEachItemInCount (TRD Optional File - Difficulty (IV) - Hard.esp CalculateForEachItemInCount)
- `BDD49D:The Restless Dead.esp` / `zzTRD_RD_LCharSkeletonMelee2H_Ancient`: The Restless Dead.esp → TRD Optional File - Difficulty (IV) - Hard.esp.
  - Flags=CalculateFromAllLevelsLessThanOrEqualPlayer, CalculateForEachItemInCount (TRD Optional File - Difficulty (IV) - Hard.esp CalculateForEachItemInCount)
- `BE25A3:The Restless Dead.esp` / `zzTRD_RD_LCharSkeletonMelee2H`: The Restless Dead.esp → TRD Optional File - Difficulty (IV) - Hard.esp.
  - Flags=CalculateFromAllLevelsLessThanOrEqualPlayer, CalculateForEachItemInCount (TRD Optional File - Difficulty (IV) - Hard.esp CalculateForEachItemInCount)
- `BDD49A:The Restless Dead.esp` / `zzTRD_RD_LCharSkeletonMelee1H_Ancient`: The Restless Dead.esp → TRD Optional File - Difficulty (IV) - Hard.esp.
  - Flags=CalculateFromAllLevelsLessThanOrEqualPlayer, CalculateForEachItemInCount (TRD Optional File - Difficulty (IV) - Hard.esp CalculateForEachItemInCount)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 198. TRD Patch - USSEP.esp

Formato **ESPFE**; provider **The Restless Dead (A Draugr and Skeleton Overhaul)**; overrides em headers **22**; winner de **20** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, The Restless Dead.esp.

**Tipos nos headers:** WEAP=18, WRLD=1, CELL=3.

**Campos selecionados diferentes do predecessor:** Data.RumbleLeftMotorStrength (10), Data.RumbleRightMotorStrength (10), Data.RumbleDuration (10), BasicStats.Damage (8), Critical.Damage (7), Data.Flags (6), Template (4), Keywords (2), Data.Stagger (1), Data.Speed (1).

- `05BF07:Skyrim.esm` / `EnchDraugrBattleAxeFrost01`: Thaumaturgy.esp → TRD Patch - USSEP.esp.
  - BasicStats.Damage=18 (TRD Patch - USSEP.esp 16)
- `05BF09:Skyrim.esm` / `EnchDraugrGreatswordFrost01`: Thaumaturgy.esp → TRD Patch - USSEP.esp.
  - BasicStats.Damage=17 (TRD Patch - USSEP.esp 15)
  - Data.Flags=DontUseFirstPersonIsAnim, DontUseThirdPersonISAnim (TRD Patch - USSEP.esp 0)
  - Critical.Damage=8 (TRD Patch - USSEP.esp 7)
- `05BF0C:Skyrim.esm` / `EnchDraugrSwordFrost01`: Thaumaturgy.esp → TRD Patch - USSEP.esp.
  - BasicStats.Damage=8 (TRD Patch - USSEP.esp 7)
  - Data.Flags=DontUseFirstPersonIsAnim, DontUseThirdPersonISAnim (TRD Patch - USSEP.esp 0)
  - Critical.Damage=4 (TRD Patch - USSEP.esp 3)
- `05BF0F:Skyrim.esm` / `EnchDraugrWarAxeFrost01`: Thaumaturgy.esp → TRD Patch - USSEP.esp.
  - BasicStats.Damage=9 (TRD Patch - USSEP.esp 8)
  - Data.Flags=DontUseFirstPersonIsAnim, DontUseThirdPersonISAnim (TRD Patch - USSEP.esp 0)
  - Critical.Damage=6 (TRD Patch - USSEP.esp 4)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 199. JK's Thieves Guild.esp

Formato **ESPFE**; provider **JK's Thieves Guild HQ**; overrides em headers **471**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=6, CONT=3, DOOR=2, STAT=98, FURN=1, KEYM=1, NAVI=1, CELL=3, REFR=2227, NAVM=9, ACHR=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 200. JK's Sky Haven Temple.esp

Formato **ESPFE**; provider **JK's Sky Haven Temple**; overrides em headers **413**; winner de **5** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=11, ACTI=11, CONT=14, DOOR=1, LIGH=1, MISC=1, STAT=88, TREE=1, FURN=4, NAVI=1, CELL=16, REFR=1999, ACHR=3, NAVM=21, WRLD=1, LAND=7.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 201. JK's Jorrvaskr.esp

Formato **ESPFE**; provider **JK's Jorrvaskr**; overrides em headers **337**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=5, GLOB=2, ACTI=1, STAT=17, FURN=1, NPC_=1, NAVI=1, CELL=2, REFR=1310, NAVM=3, ACHR=1, QUST=1, PACK=2, FLST=1.

**Campos selecionados diferentes do predecessor:** PlayerSkills.Unused (1), PlayerSkills.Unused2 (1).

- `013BB6:Skyrim.esm` / `Tilma`: unofficial skyrim special edition patch.esp → JK's Jorrvaskr.esp.
  - PlayerSkills.Unused=16746 (JK's Jorrvaskr.esp 16748)
  - PlayerSkills.Unused2=0F25AA (JK's Jorrvaskr.esp 04E10E)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 202. JK's Nightingale Hall.esp

Formato **ESPFE**; provider **JK's Nightingale Hall**; overrides em headers **326**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=2, CONT=7, STAT=35, FURN=1, NAVI=1, CELL=1, REFR=1400, ACHR=4, NAVM=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 203. JK's Palace of the Kings.esp

Formato **ESPFE**; provider **JK's Palace of the Kings**; overrides em headers **324**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=7, ARMO=6, STAT=34, NPC_=3, NAVI=1, CELL=4, REFR=2295, ACHR=1, NAVM=1, PACK=2, OTFT=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 204. waccf_armor and clothing extension.esp

Formato **ESP**; provider **Armor and Clothing Extension**; overrides em headers **292**; winner de **117** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=46, TXST=99, GLOB=33, MGEF=1, ENCH=6, SPEL=2, ARMO=159, CONT=3, MISC=4, FURN=2, NPC_=10, COBJ=43, LVLI=68, CELL=16, REFR=28, WRLD=2, DIAL=2, INFO=2, QUST=9, FLST=1, PERK=1, ARMA=128, MESG=1, OTFT=160.

**Campos selecionados diferentes do predecessor:** ArmorRating (33), Value (33), Keywords (33), PlayerSkills.Unused (10), PlayerSkills.Unused2 (10), DefaultOutfit (9), Entries (6), Items (4), ObjectEffect (4), ActorEffect (3), BodyTemplate.FirstPersonFlags (3), Factions (2).

- `013BC1:Skyrim.esm` / `POIMageRundi`: Skyrim.esm → waccf_armor and clothing extension.esp.
  - PlayerSkills.Unused=0 (waccf_armor and clothing extension.esp 16748)
  - PlayerSkills.Unused2=000100 (waccf_armor and clothing extension.esp AD0787)
  - DefaultOutfit=10FE69:Skyrim.esm (waccf_armor and clothing extension.esp 0ECD52:Skyrim.esm)
- `0457F7:Skyrim.esm` / `TreasCorpseCommonerDarkElfFemale`: Skyrim.esm → waccf_armor and clothing extension.esp.
  - PlayerSkills.Unused=0 (waccf_armor and clothing extension.esp 16748)
  - PlayerSkills.Unused2=000100 (waccf_armor and clothing extension.esp AD0787)
  - DefaultOutfit=09D4B5:Skyrim.esm (waccf_armor and clothing extension.esp 1A92EB:waccf_armor and clothing extension.esp)
- `045800:Skyrim.esm` / `TreasCorpseCommonerDarkElfM`: Skyrim.esm → waccf_armor and clothing extension.esp.
  - PlayerSkills.Unused=0 (waccf_armor and clothing extension.esp 16748)
  - PlayerSkills.Unused2=000100 (waccf_armor and clothing extension.esp AD0787)
  - DefaultOutfit=09D4B5:Skyrim.esm (waccf_armor and clothing extension.esp 1A92EB:waccf_armor and clothing extension.esp)
- `05B907:Skyrim.esm` / `dunPOITalosWorshipperCorpse03`: Skyrim.esm → waccf_armor and clothing extension.esp.
  - PlayerSkills.Unused=0 (waccf_armor and clothing extension.esp 16748)
  - PlayerSkills.Unused2=000100 (waccf_armor and clothing extension.esp AD0787)
  - DefaultOutfit=0C2A5A:Skyrim.esm (waccf_armor and clothing extension.esp 2504D6:waccf_armor and clothing extension.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 205. Grand Solitude - ACE patch.esp

Formato **ESPFE**; provider **Grand Solitude Patch Collection**; overrides em headers **5**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Grand Solitude - The Walls of High King Erling.esp, waccf_armor and clothing extension.esp.

**Tipos nos headers:** CELL=1, REFR=4.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 206. Pilgrim.esp

Formato **ESP**; provider **Pilgrim - A Religion Overhaul**; overrides em headers **241**; winner de **78** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=32, TXST=2, GLOB=2, FACT=6, MGEF=273, ENCH=9, SPEL=137, SCRL=5, ACTI=50, BOOK=9, CONT=6, STAT=51, MSTT=1, FURN=3, NPC_=1, LVLI=25, RFCT=1, NAVI=1, CELL=67, REFR=744, ACHR=8, NAVM=1, WRLD=4, DIAL=5, INFO=13, QUST=2, PACK=1, EFSH=1, EXPL=1, FLST=6, PERK=79, MESG=32, SMQN=1, DLBR=1, ARTO=1.

**Campos selecionados diferentes do predecessor:** BaseCost (28), Effects (23), Flags (19), Archetype.ActorValue (14), Keywords (14), EnchantmentAmount (9), Archetype (7), Archetype.Type (7), Archetype.AssociationKey (7), Archetype.Association (7), MajorFlags (3).

- `0FB988:Skyrim.esm` / `MAG_AltarAkatosh`: Skyrim.esm → Pilgrim.esp.
  - Flags=0 (Pilgrim.esp IgnoreResistance, NoAbsorbOrReflect)
  - BaseCost=402104 (Pilgrim.esp 16)
  - Effects: 2 vs Pilgrim.esp 4 item(s) — only here: [1] BaseEffect=0FBFF5:Skyrim.esm, Data=[EffectData], Data.Magnitude=25 (+3 more field(s)); only in Pilgrim.esp: [1] BaseEffect=325F2B:Pilgrim.esp, Data=[EffectData], Data.Magnitude=0 (+28 more field(s)); [2] BaseEffect=07A17C:Pilgrim.esp, Data=[EffectData], Data.Magnitude=10 (+28 more field(s)) (+1 more element(s))
- `0FB994:Skyrim.esm` / `MAG_AltarArkay`: Skyrim.esm → Pilgrim.esp.
  - Flags=0 (Pilgrim.esp IgnoreResistance, NoAbsorbOrReflect)
  - BaseCost=1101664 (Pilgrim.esp 22)
  - Effects: 2 vs Pilgrim.esp 3 item(s) — only here: [1] BaseEffect=0FBFF5:Skyrim.esm, Data=[EffectData], Data.Magnitude=25 (+3 more field(s)); only in Pilgrim.esp: [1] BaseEffect=33523A:Pilgrim.esp, Data=[EffectData], Data.Magnitude=0 (+28 more field(s)); [2] BaseEffect=1AEFAE:Pilgrim.esp, Data=[EffectData], Data.Magnitude=0 (+51 more field(s))
- `0FB995:Skyrim.esm` / `MAG_AltarDibella`: Skyrim.esm → Pilgrim.esp.
  - Flags=0 (Pilgrim.esp IgnoreResistance, NoAbsorbOrReflect)
  - BaseCost=402104 (Pilgrim.esp 22)
  - Effects: 2 vs Pilgrim.esp 3 item(s) — only here: [0] BaseEffect=0FB98A:Skyrim.esm, Data=[EffectData], Data.Magnitude=10 (+3 more field(s)); [1] BaseEffect=0FBFF5:Skyrim.esm, Data=[EffectData], Data.Magnitude=25 (+3 more field(s)); only in Pilgrim.esp: [0] BaseEffect=0FB98A:Skyrim.esm, Data=[EffectData], Data.Magnitude=25 (+3 more field(s)); [1] BaseEffect=33523D:Pilgrim.esp, Data=[EffectData], Data.Magnitude=0 (+28 more field(s)) (+1 more element(s))
- `0FB996:Skyrim.esm` / `MAG_AltarJulianos`: Skyrim.esm → Pilgrim.esp.
  - Flags=0 (Pilgrim.esp IgnoreResistance, NoAbsorbOrReflect)
  - BaseCost=1101664 (Pilgrim.esp 22)
  - Effects: 2 vs Pilgrim.esp 3 item(s) — only here: [1] BaseEffect=0FBFF5:Skyrim.esm, Data=[EffectData], Data.Magnitude=25 (+3 more field(s)); only in Pilgrim.esp: [1] BaseEffect=335244:Pilgrim.esp, Data=[EffectData], Data.Magnitude=0 (+28 more field(s)); [2] BaseEffect=1AEFAE:Pilgrim.esp, Data=[EffectData], Data.Magnitude=0 (+51 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 207. Grand Solitude - Pilgrim patch.esp

Formato **ESPFE**; provider **Grand Solitude Patch Collection**; overrides em headers **19**; winner de **3** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Grand Solitude - The Walls of High King Erling.esp, Pilgrim.esp.

**Tipos nos headers:** CELL=2, ACHR=3, REFR=13, WRLD=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 208. JKs Sky Haven Temple - JKs Skyrim Patch.esp

Formato **ESPFE**; provider **JK's Guild HQ Interiors Patch Collection**; overrides em headers **226**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, JKs Skyrim.esp.

**Tipos nos headers:** WRLD=1, CELL=3, REFR=222.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 209. HAG - Occult Orphan Rock.esp

Formato **ESPFE**; provider **HAG - Occult Orphan Rock**; overrides em headers **202**; winner de **10** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=1, BOOK=1, STAT=41, NPC_=1, NAVI=1, CELL=16, REFR=1534, ACHR=37, NAVM=27, WRLD=1, LAND=4, PACK=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 210. Better Vampire NPCs.esp

Formato **ESP**; provider **Better Vampire NPCs 2.3**; overrides em headers **175**; winner de **140** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm.

**Tipos nos headers:** KYWD=1, TXST=11, GLOB=8, CLAS=8, HDPT=19, RACE=4, MGEF=40, ENCH=4, SPEL=37, ACTI=2, ARMO=23, LIGH=5, MISC=2, STAT=19, WEAP=52, AMMO=5, NPC_=159, LVLN=20, PROJ=6, HAZD=2, LVLI=157, NAVI=1, CELL=2, REFR=168, ACHR=94, NAVM=10, QUST=58, PACK=2, CSTY=4, LVSP=1, EFSH=9, EXPL=2, IMAD=1, FLST=1, PERK=13, IPCT=6, IPDS=2, ARMA=20, MESG=17, SMQN=4, OTFT=45, ARTO=4, SNDR=1.

**Campos selecionados diferentes do predecessor:** PlayerSkills.Unused (121), PlayerSkills.Unused2 (121), Configuration.CalcMaxLevel (118), Configuration.CalcMinLevel (116), ActorEffect (115), Items (115), CombatStyle (114), Perks (114), PlayerSkills.Health (110), PlayerSkills.Magicka (104), Configuration.Level (103), Configuration.Level.Level (103).

- `0132AA:Skyrim.esm` / `SybilleStentor`: unofficial skyrim special edition patch.esp → Better Vampire NPCs.esp.
  - Configuration.Level=[NpcLevel] (Better Vampire NPCs.esp [PcLevelMult])
  - Configuration.Level.Level=15 (Better Vampire NPCs.esp has no Configuration.Level.Level)
  - Configuration.CalcMinLevel=0 (Better Vampire NPCs.esp 15)
  - Configuration.CalcMaxLevel=100 (Better Vampire NPCs.esp 59)
- `0135E6:Skyrim.esm` / `Alva`: unofficial skyrim special edition patch.esp → Better Vampire NPCs.esp.
  - Configuration.CalcMaxLevel=15 (Better Vampire NPCs.esp 27)
  - PlayerSkills.SkillValues[Block]=20 (Better Vampire NPCs.esp 26)
  - PlayerSkills.SkillValues[Sneak]=23 (Better Vampire NPCs.esp 15)
  - PlayerSkills.SkillValues[Alteration]=18 (Better Vampire NPCs.esp 15)
- `01367B:Skyrim.esm` / `Hern`: unofficial skyrim special edition patch.esp → Better Vampire NPCs.esp.
  - Configuration.Level=[NpcLevel] (Better Vampire NPCs.esp [PcLevelMult])
  - Configuration.Level.Level=10 (Better Vampire NPCs.esp has no Configuration.Level.Level)
  - Configuration.CalcMinLevel=0 (Better Vampire NPCs.esp 10)
  - Configuration.CalcMaxLevel=0 (Better Vampire NPCs.esp 27)
- `01367C:Skyrim.esm` / `Hert`: unofficial skyrim special edition patch.esp → Better Vampire NPCs.esp.
  - Configuration.Level=[NpcLevel] (Better Vampire NPCs.esp [PcLevelMult])
  - Configuration.Level.Level=10 (Better Vampire NPCs.esp has no Configuration.Level.Level)
  - Configuration.CalcMinLevel=0 (Better Vampire NPCs.esp 10)
  - Configuration.CalcMaxLevel=0 (Better Vampire NPCs.esp 27)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 211. BVNPC Combat Style Patch.esp

Formato **ESPFE**; provider **BVNPC combat styles patch for Simple Spells Pack Bats Powers**; overrides em headers **4**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Better Vampire NPCs.esp.

**Tipos nos headers:** CSTY=4.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 212. man_DaedricShrines.esp

Formato **ESP**; provider **Daedric Shrines - All in One**; overrides em headers **141**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** ACTI=2, MISC=2, STAT=20, NAVI=1, CELL=33, REFR=474, NAVM=1, WRLD=3, LAND=7, ACHR=3, IMGS=1, LGTM=1.

**Campos selecionados diferentes do predecessor:** Location (1).

- `009339:Skyrim.esm` / `MovarthsLairExterior03`: HappyLittleTrees.esp → man_DaedricShrines.esp.
  - Location=01BDFC:Skyrim.esm (man_DaedricShrines.esp has Location ABSENT)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 213. man_sithis.esp

Formato **ESPFE**; provider **Statue of Sithis**; overrides em headers **2**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** STAT=1, CELL=2, REFR=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 214. Pilgrim - Daedric Shrines Patch.esp

Formato **ESPFE**; provider **Pilgrim and Daedric Shrines Consistency and Tweaks**; overrides em headers **233**; winner de **32** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, Pilgrim.esp, man_sithis.esp, man_DaedricShrines.esp.

**Tipos nos headers:** ACTI=16, STAT=1, CELL=45, REFR=197, WRLD=4, LAND=4, ACHR=1.

**Campos selecionados diferentes do predecessor:** MajorFlags (1), Flags (1).

- `03282E:Dragonborn.esm` / `None`: man_DaedricShrines.esp → Pilgrim - Daedric Shrines Patch.esp.
  - MajorFlags=StartsDead (Pilgrim - Daedric Shrines Patch.esp StartsDead, DoNotHavokSettle)
- `019DFE:Dawnguard.esm` / `DLC1VampireCastleBossRoom`: man_DaedricShrines.esp → Pilgrim - Daedric Shrines Patch.esp.
  - Flags=IsInteriorCell, HasWater, PublicArea (Pilgrim - Daedric Shrines Patch.esp IsInteriorCell, PublicArea)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 215. Whiterun Has Walls - JK's Skyrim Patch.esp

Formato **ESPFE**; provider **Whiterun Has Walls Redone**; overrides em headers **192**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Whiterun Has Walls.esm, JKs Skyrim.esp.

**Tipos nos headers:** WRLD=2, CELL=16, REFR=187.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 216. Whiterun Has Walls - Exterior City Entrance.esp

Formato **ESPFE**; provider **Whiterun Has Walls Redone**; overrides em headers **106**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Whiterun Has Walls.esm.

**Tipos nos headers:** STAT=4, NPC_=8, NAVI=1, WRLD=1, CELL=7, REFR=473, NAVM=9, ACHR=12, PACK=7.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 217. Northern Scenery _Tundra.esp

Formato **ESPFE**; provider **Northern Scenery - Whiterun's Tundra**; overrides em headers **92**; winner de **28** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** TXST=3, BOOK=1, CONT=1, STAT=7, WRLD=1, CELL=32, REFR=365, ACHR=7, LAND=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 218. JK's The Ragged Flagon.esp

Formato **ESPFE**; provider **JK's The Ragged Flagon**; overrides em headers **93**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=4, STAT=16, NAVI=1, CELL=1, REFR=509, NAVM=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 219. AlternativeRiften.esp

Formato **ESPFE**; provider **Alternative Riften - Revived and Optimized**; overrides em headers **92**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** STAT=14, FURN=1, NAVI=1, WRLD=1, CELL=6, REFR=151, NAVM=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 220. Grand Solitude - New NPCs Disabled.esp

Formato **ESPFE**; provider **Grand Solitude - New NPCs Disabled**; overrides em headers **88**; winner de **86** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Grand Solitude - The Walls of High King Erling.esp.

**Tipos nos headers:** CELL=19, ACHR=68, WRLD=1.

**Campos selecionados diferentes do predecessor:** MajorFlags (68).

- `A691EC:Grand Solitude - The Walls of High King Erling.esp` / `WSEnbjorfREF`: Grand Solitude - The Walls of High King Erling.esp → Grand Solitude - New NPCs Disabled.esp.
  - MajorFlags=Persistent (Grand Solitude - New NPCs Disabled.esp InitiallyDisabled)
- `A691ED:Grand Solitude - The Walls of High King Erling.esp` / `WSThorwynREF`: Grand Solitude - The Walls of High King Erling.esp → Grand Solitude - New NPCs Disabled.esp.
  - MajorFlags=Persistent (Grand Solitude - New NPCs Disabled.esp InitiallyDisabled)
- `A691EF:Grand Solitude - The Walls of High King Erling.esp` / `WSJorvardREF`: Grand Solitude - The Walls of High King Erling.esp → Grand Solitude - New NPCs Disabled.esp.
  - MajorFlags=Persistent (Grand Solitude - New NPCs Disabled.esp InitiallyDisabled)
- `A691F1:Grand Solitude - The Walls of High King Erling.esp` / `WSLorodREF`: Grand Solitude - The Walls of High King Erling.esp → Grand Solitude - New NPCs Disabled.esp.
  - MajorFlags=Persistent (Grand Solitude - New NPCs Disabled.esp InitiallyDisabled)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 221. Alternative Riften - JK's Skyrim AIO - Patch.esp

Formato **ESPFE**; provider **Alternative Riften - Revived and Optimized**; overrides em headers **57**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, JKs Skyrim.esp, AlternativeRiften.esp.

**Tipos nos headers:** NAVI=1, WRLD=1, CELL=3, LAND=2, NAVM=1, REFR=64.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 222. Pilgrim - Shrines Fit for the Divine.esp

Formato **ESPFE**; provider **Pilgrim Religion Overhaul - Shrines fit for the Divine**; overrides em headers **64**; winner de **15** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, Pilgrim.esp.

**Tipos nos headers:** STAT=12, WRLD=1, CELL=17, REFR=161, LAND=8, ACHR=7.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 223. Whiterun Has Walls - Exterior City Entrance - JK's Skyrim Patch.esp

Formato **ESPFE**; provider **Whiterun Has Walls Redone**; overrides em headers **55**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Whiterun Has Walls.esm, Whiterun Has Walls - Exterior City Entrance.esp, JKs Skyrim.esp, Whiterun Has Walls - JK's Skyrim Patch.esp.

**Tipos nos headers:** WRLD=1, CELL=5, REFR=49.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 224. NorScenery_YsgramorTomb.esp

Formato **ESPFE**; provider **Northern Scenery - Ysgramor's Tomb**; overrides em headers **52**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** STAT=7, NAVI=1, CELL=7, REFR=109, WRLD=1, LAND=3, NAVM=15.

**Campos selecionados diferentes do predecessor:** Location (2).

- `008E2A:Skyrim.esm` / `None`: unofficial skyrim special edition patch.esp → NorScenery_YsgramorTomb.esp.
  - Location=019265:Skyrim.esm (NorScenery_YsgramorTomb.esp has Location ABSENT)
- `008E49:Skyrim.esm` / `None`: unofficial skyrim special edition patch.esp → NorScenery_YsgramorTomb.esp.
  - Location=019265:Skyrim.esm (NorScenery_YsgramorTomb.esp has Location ABSENT)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 225. Beyond the Border - Diverse Border Gates.esp

Formato **ESPFE**; provider **Across the Border - Diverse Border Gates**; overrides em headers **49**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** STAT=4, WRLD=1, CELL=12, REFR=84, ACHR=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 226. JKs Skyrim - CC Fishing patch.esp

Formato **ESPFE**; provider **JK's Skyrim Patch Collection**; overrides em headers **45**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, HearthFires.esm, ccBGSSSE001-Fish.esm, JKs Skyrim.esp.

**Tipos nos headers:** WRLD=3, CELL=9, REFR=33.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 227. Northern Scenery_Ansilvund.esp

Formato **ESP**; provider **Northern Scenery - Ansilvund**; overrides em headers **44**; winner de **5** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** CONT=5, STAT=16, NPC_=2, WRLD=1, CELL=4, REFR=175, ACHR=3.

**Campos selecionados diferentes do predecessor:** Location (1).

- `00BAE0:Skyrim.esm` / `None`: unofficial skyrim special edition patch.esp → Northern Scenery_Ansilvund.esp.
  - Location=01BDFD:Skyrim.esm (Northern Scenery_Ansilvund.esp has Location ABSENT)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 228. NorthernScenery_IronBindBarrow.esp

Formato **ESPFE**; provider **Northern Scenery - IronBind Barrow**; overrides em headers **42**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** STAT=5, WRLD=1, CELL=9, REFR=81.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 229. Embers XD - Patch - JKs Skyrim.esp

Formato **ESPFE**; provider **Embers XD**; overrides em headers **31**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, JKs Skyrim.esp, Embers XD.esp.

**Tipos nos headers:** WRLD=2, CELL=6, REFR=23.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 230. Markarth - City of Stone.esp

Formato **ESPFE**; provider **Markarth - City of Stone**; overrides em headers **39**; winner de **15** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** STAT=5, WRLD=2, CELL=20, REFR=554.

**Campos selecionados diferentes do predecessor:** MajorFlags (3).

- `020EEE:Skyrim.esm` / `None`: Skyrim.esm → Markarth - City of Stone.esp.
  - MajorFlags=0 (Markarth - City of Stone.esp 262144)
- `020EE8:Skyrim.esm` / `None`: Skyrim.esm → Markarth - City of Stone.esp.
  - MajorFlags=0 (Markarth - City of Stone.esp 262144)
- `05B3D9:Skyrim.esm` / `None`: Skyrim.esm → Markarth - City of Stone.esp.
  - MajorFlags=0 (Markarth - City of Stone.esp 262144)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 231. Missives.esp

Formato **ESP**; provider **Missives**; overrides em headers **27**; winner de **8** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** GLOB=344, ACTI=1, BOOK=26, CONT=1, MISC=1, NPC_=3, LVLN=3, LVLI=32, WRLD=6, CELL=21, REFR=52, DIAL=426, INFO=426, QUST=265, PACK=28, FLST=38, MESG=11, DLBR=426.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 232. Grand Solitude - Missives patch.esp

Formato **ESPFE**; provider **Grand Solitude Patch Collection**; overrides em headers **8**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Missives.esp, Grand Solitude - The Walls of High King Erling.esp.

**Tipos nos headers:** WRLD=1, CELL=3, REFR=4.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 233. Missives - Bigger Trigger Box Range.esp

Formato **ESPFE**; provider **Missives - Bigger Trigger Box**; overrides em headers **24**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Missives.esp.

**Tipos nos headers:** WRLD=6, CELL=9, REFR=9.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 234. JKs Castle Volkihar - CC Fishing patch.esp

Formato **ESPFE**; provider **JK's Guild HQ Interiors Patch Collection**; overrides em headers **20**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, ccBGSSSE001-Fish.esm, JK's Castle Volkihar.esp.

**Tipos nos headers:** WRLD=1, CELL=7, REFR=12.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 235. Northern Scenery - BleakFallBarrow.esp

Formato **ESPFE**; provider **Northern Scenery - Bleak Falls Barrow**; overrides em headers **18**; winner de **3** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** WRLD=1, CELL=5, REFR=33.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 236. Northern Scenery_Angarvunde.esp

Formato **ESPFE**; provider **Northern Scenery - Angarvunde**; overrides em headers **15**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** CONT=1, STAT=8, NAVI=1, WRLD=1, CELL=3, REFR=77.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 237. MoonGlowSize.esp

Formato **ESPFE**; provider **Praedy's Night Sky AIO - SE**; overrides em headers **2**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** GMST=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 238. JK's Castle Volkihar LOD.esp

Formato **ESPFE**; provider **JK's Castle Volkihar LOD fix**; overrides em headers **2**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, JK's Castle Volkihar.esp.

**Tipos nos headers:** STAT=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 239. Whiterun Has Walls - Occlusion.esp

Formato **ESPFE**; provider **Whiterun Has Walls Redone**; overrides em headers **13**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Whiterun Has Walls.esm.

**Tipos nos headers:** WRLD=1, CELL=8, REFR=72.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 240. Whiterun Has Walls - Clutter.esp

Formato **ESPFE**; provider **Whiterun Has Walls Redone**; overrides em headers **7**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Whiterun Has Walls.esm.

**Tipos nos headers:** WRLD=1, CELL=6, REFR=254.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 241. Nordic Windhelm Chimney Smoke.esp

Formato **ESPFE**; provider **Nordic Windhelm**; overrides em headers **12**; winner de **5** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** WRLD=1, CELL=7, REFR=9, LAND=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 243. Embers XD - Fire Magick Add-On.esp

Formato **ESPFE**; provider **Embers XD**; overrides em headers **12**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Embers XD.esp.

**Tipos nos headers:** PROJ=3, EFSH=9, ADDN=3.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 244. Embers XD - Patch - Survival Mode.esp

Formato **ESPFE**; provider **Embers XD**; overrides em headers **1**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dragonborn.esm, ccQDRSSE001-SurvivalMode.esl, Embers XD.esp.

**Tipos nos headers:** FLST=1.

**Campos selecionados diferentes do predecessor:** Items (1).

- `0008AA:ccQDRSSE001-SurvivalMode.esl` / `Survival_WarmUpObjectsList`: unofficial skyrim special edition patch.esp → Embers XD - Patch - Survival Mode.esp.
  - Items: 58 vs Embers XD - Patch - Survival Mode.esp 69 item(s) — only here: [56] 0153C8:Skyrim.esm; [57] 0EF2D6:Skyrim.esm; only in Embers XD - Patch - Survival Mode.esp: [56] 06A956:Embers XD.esp; [57] 0982A3:Embers XD.esp (+11 more element(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 245. Racial Body Morphs - Extreme.esp

Formato **ESP**; provider **Racial Body Morphs Redux - Extreme**; overrides em headers **26**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** RACE=26.

**Campos selecionados diferentes do predecessor:** SkillBoost0.Skill (2), SkillBoost0.Boost (2), SkillBoost1.Skill (2), SkillBoost2.Skill (2), SkillBoost3.Skill (2), SkillBoost4.Skill (2), SkillBoost5.Skill (2), SkillBoost6.Skill (2), SkillBoost6.Boost (2), SkillBoost5.Boost (1), SkillBoost4.Boost (1).

- `071E6A:Skyrim.esm` / `InvisibleRace`: Skyrim.esm → Racial Body Morphs - Extreme.esp.
  - SkillBoost0.Skill=Restoration (Racial Body Morphs - Extreme.esp 255)
  - SkillBoost0.Boost=10 (Racial Body Morphs - Extreme.esp 0)
  - SkillBoost1.Skill=Destruction (Racial Body Morphs - Extreme.esp OneHanded)
  - SkillBoost2.Skill=Enchanting (Racial Body Morphs - Extreme.esp Block)
- `097A3D:Skyrim.esm` / `DA13AfflictedRace`: Skyrim.esm → Racial Body Morphs - Extreme.esp.
  - SkillBoost0.Skill=Conjuration (Racial Body Morphs - Extreme.esp 255)
  - SkillBoost0.Boost=10 (Racial Body Morphs - Extreme.esp 0)
  - SkillBoost1.Skill=Illusion (Racial Body Morphs - Extreme.esp Alchemy)
  - SkillBoost2.Skill=Restoration (Racial Body Morphs - Extreme.esp Speech)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 246. JKs Skyrim - USSEP patch.esp

Formato **ESPFE**; provider **JK's Skyrim Patch Collection**; overrides em headers **3**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, unofficial skyrim special edition patch.esp, JKs Skyrim.esp.

**Tipos nos headers:** WRLD=1, CELL=1, REFR=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 247. JKs Palace of the Kings - Embers XD Patch.esp

Formato **ESPFE**; provider **JK's Interiors Patch Collection**; overrides em headers **6**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Embers XD.esp, JK's Palace of the Kings.esp.

**Tipos nos headers:** CELL=1, REFR=7.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 248. JKs Ragged Flagon - Embers XD Patch.esp

Formato **ESPFE**; provider **JK's Interiors Patch Collection**; overrides em headers **6**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, JK's The Ragged Flagon.esp, Embers XD.esp.

**Tipos nos headers:** CELL=1, REFR=5.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 249. JKs Ragged Flagon - USSEP Patch.esp

Formato **ESPFE**; provider **JK's Interiors Patch Collection**; overrides em headers **3**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Unofficial Skyrim Special Edition Patch.esp, JK's The Ragged Flagon.esp.

**Tipos nos headers:** NAVI=1, CELL=1, NAVM=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 250. JKs Palace of the Kings - USSEP Patch.esp

Formato **ESPFE**; provider **JK's Interiors Patch Collection**; overrides em headers **1**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Unofficial Skyrim Special Edition Patch.esp, JK's Palace of the Kings.esp.

**Tipos nos headers:** PACK=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 251. JKs College of Winterhold - USSEP patch.esp

Formato **ESPFE**; provider **JK's Guild HQ Interiors Patch Collection**; overrides em headers **11**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, Unofficial Skyrim Special Edition Patch.esp, JK's College of Winterhold.esp.

**Tipos nos headers:** CELL=3, REFR=8.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 252. JKs Sky Haven Temple - USSEP Patch.esp

Formato **ESPFE**; provider **JK's Guild HQ Interiors Patch Collection**; overrides em headers **3**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Unofficial Skyrim Special Edition Patch.esp, JK's Sky Haven Temple.esp.

**Tipos nos headers:** ACTI=1, WRLD=1, CELL=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 253. JKs Dark Brotherhood Sanctuary - USSEP patch.esp

Formato **ESPFE**; provider **JK's Guild HQ Interiors Patch Collection**; overrides em headers **3**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Unofficial Skyrim Special Edition Patch.esp, JK's Dark Brotherhood Sanctuary.esp.

**Tipos nos headers:** CELL=1, REFR=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 254. JKs Castle Volkihar - Embers XD patch.esp

Formato **ESPFE**; provider **JK's Guild HQ Interiors Patch Collection**; overrides em headers **6**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, JK's Castle Volkihar.esp, Embers XD.esp.

**Tipos nos headers:** CELL=1, REFR=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 255. JKs Thieves Guild - USSEP patch.esp

Formato **ESPFE**; provider **JK's Guild HQ Interiors Patch Collection**; overrides em headers **17**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, unofficial skyrim special edition patch.esp, JK's Thieves Guild.esp.

**Tipos nos headers:** CELL=1, REFR=16.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 256. JKs Bards College - USSEP patch.esp

Formato **ESPFE**; provider **JK's Guild HQ Interiors Patch Collection**; overrides em headers **13**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Unofficial Skyrim Special Edition Patch.esp, JK's The Bards College.esp.

**Tipos nos headers:** CELL=1, ACHR=1, REFR=11.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 257. JKs Thieves Guild - Daedric Shrines patch.esp

Formato **ESPFE**; provider **JK's Guild HQ Interiors Patch Collection**; overrides em headers **8**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, man_DaedricShrines.esp, JK's Thieves Guild.esp.

**Tipos nos headers:** ACTI=2, CELL=1, REFR=5.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 258. JKs High Hrothgar - Embers XD patch.esp

Formato **ESPFE**; provider **JK's Guild HQ Interiors Patch Collection**; overrides em headers **10**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, JK's High Hrothgar.esp.

**Tipos nos headers:** CELL=1, REFR=9.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 259. JKs Dark Brotherhood Sanctuary - Man Sithis Statue patch.esp

Formato **ESPFE**; provider **JK's Guild HQ Interiors Patch Collection**; overrides em headers **4**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, JK's Dark Brotherhood Sanctuary.esp, man_sithis.esp.

**Tipos nos headers:** CELL=1, REFR=4.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 260. JKs Nightingale Hall - Daedric Shrines patch.esp

Formato **ESPFE**; provider **JK's Guild HQ Interiors Patch Collection**; overrides em headers **2**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, JK's Nightingale Hall.esp.

**Tipos nos headers:** CELL=1, REFR=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 261. Curse of the Vampire.esp

Formato **ESP**; provider **Curse of the Vampire SSE**; overrides em headers **28**; winner de **21** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=1, GLOB=17, SOUN=3, MGEF=74, SPEL=77, SCRL=1, CONT=1, LIGH=1, PROJ=2, LVLI=2, QUST=4, LSCR=5, EFSH=3, EXPL=1, IMAD=5, FLST=2, PERK=34, AVIF=1, IPCT=1, IPDS=1, MESG=15, ARTO=3, SNDR=4.

**Campos selecionados diferentes do predecessor:** Effects (11), BaseCost (5), VirtualMachineAdapter.Scripts (3), ChargeTime (2), Conditions (1), Type (1), MagicSkill (1), Items (1), PerkTree (1), Data (1), Aliases (1), VirtualMachineAdapter.Aliases (1).

- `016908:Dawnguard.esm` / `DLC1GargoylePerk`: Dawnguard.esm → Curse of the Vampire.esp.
  - Conditions: 1 vs Curse of the Vampire.esp 1 item(s), contents differ — only here: [0] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=00599A:Dawnguard.esm (+21 more field(s)); only in Curse of the Vampire.esp: [0] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=33EB12:Curse of the Vampire.esp (+21 more field(s))
  - Effects: 1 vs Curse of the Vampire.esp 1 item(s), contents differ — only here: [0] Quest=01964A:Dawnguard.esm, Stage=20, Unknown=000000 (+7 more field(s)); only in Curse of the Vampire.esp: [0] Quest=306FBE:Curse of the Vampire.esp, Stage=20, Unknown=000000 (+7 more field(s))
- `0CF02C:Skyrim.esm` / `VampireFeed`: Dawnguard.esm → Curse of the Vampire.esp.
  - Effects: 2 vs Curse of the Vampire.esp 2 item(s), contents differ — only here: [0] Spell=(null link), EntryPoint=Activate, PerkConditionTabCount=2 (+374 more field(s)); [1] Spell=(null link), EntryPoint=Activate, PerkConditionTabCount=2 (+253 more field(s)); only in Curse of the Vampire.esp: [0] Spell=7A93D8:Curse of the Vampire.esp, EntryPoint=Activate, PerkConditionTabCount=2 (+374 more field(s)); [1] Spell=7A93D8:Curse of the Vampire.esp, EntryPoint=Activate, PerkConditionTabCount=2 (+253 more field(s))
- `0C4DE2:Skyrim.esm` / `VampireCharm`: Dawnguard.esm → Curse of the Vampire.esp.
  - Type=Power (Curse of the Vampire.esp LesserPower)
  - Effects: 4 vs Curse of the Vampire.esp 4 item(s), contents differ — only here: [0] BaseEffect=04DEE7:Skyrim.esm, Data=[EffectData], Data.Magnitude=8 (+3 more field(s)); [1] BaseEffect=09E0BB:Skyrim.esm, Data=[EffectData], Data.Magnitude=8 (+3 more field(s)) (+2 more element(s)); only in Curse of the Vampire.esp: [0] BaseEffect=6CEC98:Curse of the Vampire.esp, Data=[EffectData], Data.Magnitude=50 (+51 more field(s)); [1] BaseEffect=09E0BB:Skyrim.esm, Data=[EffectData], Data.Magnitude=50 (+51 more field(s)) (+2 more element(s))
- `0ED0A8:Skyrim.esm` / `VampireVampirism`: Skyrim.esm → Curse of the Vampire.esp.
  - BaseCost=0 (Curse of the Vampire.esp 792)
  - Effects: 1 vs Curse of the Vampire.esp 4 item(s) — only here: [0] BaseEffect=0E40D3:Skyrim.esm, Data=[EffectData], Data.Magnitude=100 (+3 more field(s)); only in Curse of the Vampire.esp: [0] BaseEffect=0C1E8C:Skyrim.esm, Data=[EffectData], Data.Magnitude=100 (+28 more field(s)); [1] BaseEffect=12BC22:Curse of the Vampire.esp, Data=[EffectData], Data.Magnitude=0 (+28 more field(s)) (+2 more element(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 262. Manbeast.esp

Formato **ESPFE**; provider **Manbeast - A Werewolf Overhaul**; overrides em headers **80**; winner de **65** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=10, TXST=1, GLOB=6, RACE=1, MGEF=94, ENCH=4, SPEL=54, ACTI=3, ARMO=4, BOOK=1, NPC_=3, QUST=2, EFSH=2, FLST=3, PERK=43, AVIF=1, IPCT=1, IPDS=1, MESG=7, WOOP=6, SHOU=6, ARTO=1, SNDR=1.

**Campos selecionados diferentes do predecessor:** Effects (33), ChargeTime (13), Conditions (12), BaseCost (12), Flags (9), Keywords (5), Archetype.ActorValue (5), Archetype (4), EnchantmentAmount (4), Archetype.Type (3), Configuration.HealthOffset (3), PlayerSkills.Health (3).

- `0059A5:Dawnguard.esm` / `MAG_UnusedPerk`: unofficial skyrim special edition patch.esp → Manbeast.esp.
  - Conditions: 1 vs Manbeast.esp 0 item(s) — only here: [0] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=0059A4:Dawnguard.esm (+21 more field(s))
  - Effects: 1 vs Manbeast.esp 0 item(s) — only here: [0] Quest=000E46:Skyrim.esm, Stage=50, Unknown=000000 (+7 more field(s))
- `0059A6:Dawnguard.esm` / `MAG_SavageFeedingPerk`: Dawnguard.esm → Manbeast.esp.
  - Effects: 1 vs Manbeast.esp 0 item(s) — only here: [0] Quest=000E46:Skyrim.esm, Stage=70, Unknown=000000 (+7 more field(s))
- `0059A7:Dawnguard.esm` / `MAG_GorgingPerk`: unofficial skyrim special edition patch.esp → Manbeast.esp.
  - Effects: 1 vs Manbeast.esp 0 item(s) — only here: [0] Quest=000E46:Skyrim.esm, Stage=60, Unknown=000000 (+7 more field(s))
- `0059A8:Dawnguard.esm` / `MAG_TotemOfTerrorPerk`: Dawnguard.esm → Manbeast.esp.
  - Effects: 1 vs Manbeast.esp 0 item(s) — only here: [0] Quest=000E46:Skyrim.esm, Stage=80, Unknown=000000 (+7 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 263. Mundus.esp

Formato **ESPFE**; provider **Mundus - A Standing Stone Overhaul**; overrides em headers **63**; winner de **18** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** KYWD=8, MGEF=36, SPEL=15, STAT=1, LSCR=11, EFSH=1, PERK=9, MESG=26.

**Campos selecionados diferentes do predecessor:** Effects (14), Flags (5), BaseCost (4), EquipmentType (4), ChargeTime (3), CastType (3), Type (3), TargetType (2), Archetype.ActorValue (2), Archetype (1), Archetype.Type (1).

- `0E5F45:Skyrim.esm` / `MAG_ThiefDoomStoneSpell01`: unofficial skyrim special edition patch.esp → Mundus.esp.
  - Effects: 1 vs Mundus.esp 2 item(s) — only here: [0] BaseEffect=0E5F44:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s)); only in Mundus.esp: [0] BaseEffect=0E5F44:Skyrim.esm, Data=[EffectData], Data.Magnitude=50 (+3 more field(s)); [1] BaseEffect=000815:Mundus.esp, Data=[EffectData], Data.Magnitude=10 (+3 more field(s))
- `0E5F47:Skyrim.esm` / `MAG_MageDoomStoneSpell01`: unofficial skyrim special edition patch.esp → Mundus.esp.
  - Effects: 1 vs Mundus.esp 1 item(s), contents differ — only here: [0] BaseEffect=0E5F48:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s)); only in Mundus.esp: [0] BaseEffect=0E5F48:Skyrim.esm, Data=[EffectData], Data.Magnitude=50 (+3 more field(s))
- `0E5F4C:Skyrim.esm` / `MAG_WarriorDoomStoneSpell01`: unofficial skyrim special edition patch.esp → Mundus.esp.
  - Effects: 1 vs Mundus.esp 1 item(s), contents differ — only here: [0] BaseEffect=0E5F4B:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s)); only in Mundus.esp: [0] BaseEffect=0E5F4B:Skyrim.esm, Data=[EffectData], Data.Magnitude=50 (+3 more field(s))
- `0E5F4E:Skyrim.esm` / `MAG_ApprenticeDoomStoneSpell01`: unofficial skyrim special edition patch.esp → Mundus.esp.
  - ChargeTime=0.5 (Mundus.esp 0)
  - Effects: 1 vs Mundus.esp 1 item(s), contents differ — only here: [0] BaseEffect=10F20E:Skyrim.esm, Data=[EffectData], Data.Magnitude=100 (+3 more field(s)); only in Mundus.esp: [0] BaseEffect=00080A:Mundus.esp, Data=[EffectData], Data.Magnitude=3 (+3 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 264. MundusUSSEP.esp

Formato **ESPFE**; provider **Mundus - A Standing Stone Overhaul**; overrides em headers **1**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Unofficial Skyrim Special Edition Patch.esp.

**Tipos nos headers:** LSCR=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 265. Artificer - USSEP.esp

Formato **ESPFE**; provider **Artificer - An Artifact Overhaul**; overrides em headers **35**; winner de **26** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, Unofficial Skyrim Special Edition Patch.esp, Artificer.esp.

**Tipos nos headers:** ARMO=10, WEAP=2, NPC_=2, COBJ=21.

**Campos selecionados diferentes do predecessor:** Conditions (21), Keywords (2), Items (1), VirtualMachineAdapter (1), VirtualMachineAdapter.Version only in Artificer - USSEP.esp (1), VirtualMachineAdapter.ObjectFormat only in Artificer - USSEP.esp (1), VirtualMachineAdapter.Scripts (1).

- `00352D:Dawnguard.esm` / `DLC1VigilantTolan`: Artificer.esp → Artificer - USSEP.esp.
  - Items: 4 vs Artificer - USSEP.esp 3 item(s) — only here: [2] Item=[ContainerItem] Item=0CC844:Skyrim.esm, Item.Item=0CC844:Skyrim.esm, Item.Count=1 (+1 more field(s))
- `026B0B:Dragonborn.esm` / `MAG_Stormfang`: Artificer.esp → Artificer - USSEP.esp.
  - VirtualMachineAdapter: ABSENT here (Artificer - USSEP.esp has [VirtualMachineAdapter])
  - VirtualMachineAdapter.Version only in Artificer - USSEP.esp: 5
  - VirtualMachineAdapter.ObjectFormat only in Artificer - USSEP.esp: 2
  - Keywords: same 3 item(s), ORDER DIFFERS from Artificer - USSEP.esp
- `0F9904:Skyrim.esm` / `MAG_DiademoftheSavant`: Artificer.esp → Artificer - USSEP.esp.
  - Keywords: same 4 item(s), ORDER DIFFERS from Artificer - USSEP.esp
- `900017:Update.esm` / `USKPTemperWeaponMGRKeening`: unofficial skyrim special edition patch.esp → Artificer - USSEP.esp.
  - Conditions: 2 vs Artificer - USSEP.esp 3 item(s) — only in Artificer - USSEP.esp: [2] ComparisonValue=0, Data=[GetWantBlockingConditionData] Reference=Null, Data.FirstUnusedIntParameter=0 (+19 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 266. Apothecary - Saints & Seducers Patch.esp

Formato **ESPFE**; provider **Apothecary - An Alchemy Overhaul**; overrides em headers **6**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, ccbgssse025-advdsgs.esm, Apothecary.esp.

**Tipos nos headers:** MGEF=1, INGR=4, ALCH=1.

**Campos selecionados diferentes do predecessor:** Effects (5), Keywords (2), Flags (1), VirtualMachineAdapter.Scripts (1).

- `0B9589:ccBGSSSE025-AdvDSGS.esm` / `ccBGSSSE025_MysticVenomFFSelf`: ccBGSSSE025-AdvDSGS.esm → Apothecary - Saints & Seducers Patch.esp.
  - Flags=Hostile, Detrimental, NoArea, FXPersist, NoRecast, PowerAffectsMagnitude, Painless, NoDeathDispel (Apothecary - Saints & Seducers Patch.esp Hostile, Detrimental, NoArea, FXPersist, NoRecast, PowerAffectsMagnitude, NoDeathDispel)
  - VirtualMachineAdapter.Scripts: 1 vs Apothecary - Saints & Seducers Patch.esp 1 item(s), contents differ — only here: [0] Name=MagicImodOnPlayerHitScript, Flags=Local, Properties=[list: 2 item(s)] (+12 more field(s)); only in Apothecary - Saints & Seducers Patch.esp: [0] Name=MagicImodOnPlayerHitScript, Flags=Local, Properties=[list: 2 item(s)] (+12 more field(s))
- `059151:ccBGSSSE025-AdvDSGS.esm` / `ccBGSSSE025_GreenButterfly`: ccBGSSSE025-AdvDSGS.esm → Apothecary - Saints & Seducers Patch.esp.
  - Effects: 4 vs Apothecary - Saints & Seducers Patch.esp 4 item(s), contents differ — only here: [0] BaseEffect=03EB17:Skyrim.esm, Data=[EffectData], Data.Magnitude=5 (+3 more field(s)); [1] BaseEffect=073F20:Skyrim.esm, Data=[EffectData], Data.Magnitude=1 (+3 more field(s)) (+1 more element(s)); only in Apothecary - Saints & Seducers Patch.esp: [0] BaseEffect=03EB17:Skyrim.esm, Data=[EffectData], Data.Magnitude=0.96 (+3 more field(s)); [1] BaseEffect=073F20:Skyrim.esm, Data=[EffectData], Data.Magnitude=3.33 (+3 more field(s)) (+1 more element(s))
- `059153:ccBGSSSE025-AdvDSGS.esm` / `ccBGSSSE025_PurpleButterfly`: unofficial skyrim special edition patch.esp → Apothecary - Saints & Seducers Patch.esp.
  - Effects: 4 vs Apothecary - Saints & Seducers Patch.esp 4 item(s), contents differ — only here: [0] BaseEffect=03EB06:Skyrim.esm, Data=[EffectData], Data.Magnitude=5 (+3 more field(s)); [1] BaseEffect=03EB07:Skyrim.esm, Data=[EffectData], Data.Magnitude=5 (+3 more field(s)) (+2 more element(s)); only in Apothecary - Saints & Seducers Patch.esp: [0] BaseEffect=03EB06:Skyrim.esm, Data=[EffectData], Data.Magnitude=2.67 (+3 more field(s)); [1] BaseEffect=03EB07:Skyrim.esm, Data=[EffectData], Data.Magnitude=2.67 (+3 more field(s)) (+2 more element(s))
- `059155:ccBGSSSE025-AdvDSGS.esm` / `ccBGSSSE025_Blissbug`: unofficial skyrim special edition patch.esp → Apothecary - Saints & Seducers Patch.esp.
  - Effects: 4 vs Apothecary - Saints & Seducers Patch.esp 4 item(s), contents differ — only here: [0] BaseEffect=073F2D:Skyrim.esm, Data=[EffectData], Data.Magnitude=3 (+3 more field(s)); [1] BaseEffect=03EAEA:Skyrim.esm, Data=[EffectData], Data.Magnitude=3 (+3 more field(s)) (+2 more element(s)); only in Apothecary - Saints & Seducers Patch.esp: [0] BaseEffect=073F2D:Skyrim.esm, Data=[EffectData], Data.Magnitude=6.66 (+3 more field(s)); [1] BaseEffect=03EAEA:Skyrim.esm, Data=[EffectData], Data.Magnitude=3.33 (+3 more field(s)) (+2 more element(s))
  - Keywords: 1 vs Apothecary - Saints & Seducers Patch.esp 0 item(s) — only here: [0] 08CDEB:Skyrim.esm

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 267. Apothecary - Rare Curios Patch.esp

Formato **ESPFE**; provider **Apothecary - An Alchemy Overhaul**; overrides em headers **56**; winner de **56** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ccbgssse037-curios.esl, Apothecary.esp.

**Tipos nos headers:** KYWD=1, MGEF=4, INGR=51, ALCH=1.

**Campos selecionados diferentes do predecessor:** Effects (52), Keywords (5), BaseCost (4), Flags (3), VirtualMachineAdapter.Scripts (2), MagicSkill (1), Archetype (1), Archetype.AssociationKey (1), Archetype.Association (1), Value (1).

- `000803:ccBGSSSE037-Curios.esl` / `ccBGSSSE037_AlchNightEye`: unofficial skyrim special edition patch.esp → Apothecary - Rare Curios Patch.esp.
  - MagicSkill=Illusion (Apothecary - Rare Curios Patch.esp None)
  - BaseCost=0.75 (Apothecary - Rare Curios Patch.esp 12)
  - Keywords: 1 vs Apothecary - Rare Curios Patch.esp 2 item(s) — only here: [0] 0AD7C6:Skyrim.esm; only in Apothecary - Rare Curios Patch.esp: [0] 065A28:Skyrim.esm; [1] 0F8A4E:Skyrim.esm
  - VirtualMachineAdapter.Scripts: 1 vs Apothecary - Rare Curios Patch.esp 1 item(s), contents differ — only here: [0] Name=magicNightEyeScript, Flags=Local, Properties=[list: 7 item(s)] (+40 more field(s)); only in Apothecary - Rare Curios Patch.esp: [0] Name=magicNightEyeScript, Flags=Local, Properties=[list: 7 item(s)] (+40 more field(s))
- `000812:ccBGSSSE037-Curios.esl` / `ccBGSSSE037_AlchAbsorbSpell`: unofficial skyrim special edition patch.esp → Apothecary - Rare Curios Patch.esp.
  - Flags=Recover, PowerAffectsDuration (Apothecary - Rare Curios Patch.esp Recover, PowerAffectsMagnitude)
  - Archetype=[MagicEffectPeakValueModArchetype] Association=Null (Apothecary - Rare Curios Patch.esp [MagicEffectPeakValueModArchetype] Association=000B00:Apothecary - Rare Curios Patch.esp)
  - Archetype.AssociationKey: ABSENT here (Apothecary - Rare Curios Patch.esp has 000B00:Apothecary - Rare Curios Patch.esp)
  - Archetype.Association: ABSENT here (Apothecary - Rare Curios Patch.esp has 000B00:Apothecary - Rare Curios Patch.esp)
- `000846:ccBGSSSE037-Curios.esl` / `ccBGSSSE037_AlchLight`: ccBGSSSE037-Curios.esl → Apothecary - Rare Curios Patch.esp.
  - BaseCost=0.5 (Apothecary - Rare Curios Patch.esp 8)
  - Keywords: 2 vs Apothecary - Rare Curios Patch.esp 3 item(s) — only in Apothecary - Rare Curios Patch.esp: [2] 0F8A4F:Skyrim.esm
- `000852:ccBGSSSE037-Curios.esl` / `ccBGSSSE037_AlchDamageHealthDuration`: ccBGSSSE037-Curios.esl → Apothecary - Rare Curios Patch.esp.
  - Flags=Detrimental, NoArea, PowerAffectsMagnitude (Apothecary - Rare Curios Patch.esp Hostile, Detrimental, NoArea, PowerAffectsMagnitude)
  - BaseCost=12 (Apothecary - Rare Curios Patch.esp 1.25)
  - Keywords: 1 vs Apothecary - Rare Curios Patch.esp 3 item(s) — only in Apothecary - Rare Curios Patch.esp: [1] 10F9DD:Skyrim.esm; [2] 0F3883:Apothecary.esp
  - VirtualMachineAdapter.Scripts: 1 vs Apothecary - Rare Curios Patch.esp 1 item(s), contents differ — only here: [0] Name=MagicImodOnPlayerHitScript, Flags=Local, Properties=[list: 2 item(s)] (+12 more field(s)); only in Apothecary - Rare Curios Patch.esp: [0] Name=MagicImodOnPlayerHitScript, Flags=Local, Properties=[list: 2 item(s)] (+12 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 268. Apothecary - Fishing Patch.esp

Formato **ESPFE**; provider **Apothecary - An Alchemy Overhaul**; overrides em headers **9**; winner de **9** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, ccBGSSSE001-Fish.esm, Apothecary.esp.

**Tipos nos headers:** INGR=9.

**Campos selecionados diferentes do predecessor:** Effects (9).

- `0008EB:ccBGSSSE001-Fish.esm` / `ccBGSSSE001_AngelfishIng`: ccBGSSSE001-Fish.esm → Apothecary - Fishing Patch.esp.
  - Effects: 4 vs Apothecary - Fishing Patch.esp 4 item(s), contents differ — only here: [0] BaseEffect=03EB06:Skyrim.esm, Data=[EffectData], Data.Magnitude=5 (+3 more field(s)); [1] BaseEffect=03EAEA:Skyrim.esm, Data=[EffectData], Data.Magnitude=3 (+3 more field(s)) (+2 more element(s)); only in Apothecary - Fishing Patch.esp: [0] BaseEffect=03EB06:Skyrim.esm, Data=[EffectData], Data.Magnitude=2.67 (+3 more field(s)); [1] BaseEffect=03EAEA:Skyrim.esm, Data=[EffectData], Data.Magnitude=3.33 (+3 more field(s)) (+2 more element(s))
- `0008EC:ccBGSSSE001-Fish.esm` / `ccBGSSSE001_PearlfishIng`: unofficial skyrim special edition patch.esp → Apothecary - Fishing Patch.esp.
  - Effects: 4 vs Apothecary - Fishing Patch.esp 4 item(s), contents differ — only here: [0] BaseEffect=03EB16:Skyrim.esm, Data=[EffectData], Data.Magnitude=5 (+3 more field(s)); [1] BaseEffect=03EAEB:Skyrim.esm, Data=[EffectData], Data.Magnitude=3 (+3 more field(s)) (+2 more element(s)); only in Apothecary - Fishing Patch.esp: [0] BaseEffect=03EB16:Skyrim.esm, Data=[EffectData], Data.Magnitude=0.96 (+3 more field(s)); [1] BaseEffect=03EAEB:Skyrim.esm, Data=[EffectData], Data.Magnitude=3.33 (+3 more field(s)) (+2 more element(s))
- `0008ED:ccBGSSSE001-Fish.esm` / `ccBGSSSE001_PygmySunfishIng`: unofficial skyrim special edition patch.esp → Apothecary - Fishing Patch.esp.
  - Effects: 4 vs Apothecary - Fishing Patch.esp 4 item(s), contents differ — only here: [0] BaseEffect=03EB16:Skyrim.esm, Data=[EffectData], Data.Magnitude=5 (+3 more field(s)); [1] BaseEffect=10DE5F:Skyrim.esm, Data=[EffectData], Data.Magnitude=1 (+3 more field(s)) (+2 more element(s)); only in Apothecary - Fishing Patch.esp: [0] BaseEffect=03EB16:Skyrim.esm, Data=[EffectData], Data.Magnitude=0.96 (+3 more field(s)); [1] BaseEffect=10DE5F:Skyrim.esm, Data=[EffectData], Data.Magnitude=0.52 (+3 more field(s)) (+2 more element(s))
- `0008EE:ccBGSSSE001-Fish.esm` / `ccBGSSSE001_GlassfishIng`: unofficial skyrim special edition patch.esp → Apothecary - Fishing Patch.esp.
  - Effects: 4 vs Apothecary - Fishing Patch.esp 4 item(s), contents differ — only here: [0] BaseEffect=03EB17:Skyrim.esm, Data=[EffectData], Data.Magnitude=5 (+3 more field(s)); [2] BaseEffect=03EB27:Skyrim.esm, Data=[EffectData], Data.Magnitude=1 (+3 more field(s)) (+1 more element(s)); only in Apothecary - Fishing Patch.esp: [0] BaseEffect=03EB17:Skyrim.esm, Data=[EffectData], Data.Magnitude=0.96 (+3 more field(s)); [2] BaseEffect=03EB27:Skyrim.esm, Data=[EffectData], Data.Magnitude=3.33 (+3 more field(s)) (+1 more element(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 269. Potion Remodels Apothecary Patch.esp

Formato **ESPFE**; provider **Apothecary and CACO Patches for Potion Remodels**; overrides em headers **32**; winner de **32** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Apothecary.esp.

**Tipos nos headers:** ALCH=32.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 270. Awesome Potions Simplified by Revoith.esp

Formato **ESPFE**; provider **Awesome Potions Simplified by Revoith**; overrides em headers **2**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** ALCH=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 271. smMealtime.esp

Formato **ESP**; provider **Mealtime - A simple ESO inspired Food Overhaul**; overrides em headers **86**; winner de **4** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=11, MGEF=12, ALCH=82.

**Campos selecionados diferentes do predecessor:** Archetype (4), Archetype.AssociationKey (4), Archetype.Association (4), Keywords (4).

- `1058A5:Skyrim.esm` / `FoodFortifyHealth`: Skyrim.esm → smMealtime.esp.
  - Archetype=[MagicEffectPeakValueModArchetype] Association=Null (smMealtime.esp [MagicEffectPeakValueModArchetype] Association=005907:smMealtime.esp)
  - Archetype.AssociationKey: ABSENT here (smMealtime.esp has 005907:smMealtime.esp)
  - Archetype.Association: ABSENT here (smMealtime.esp has 005907:smMealtime.esp)
  - Keywords: 1 vs smMealtime.esp 1 item(s), contents differ — only here: [0] 042503:Skyrim.esm; only in smMealtime.esp: [0] 005907:smMealtime.esp
- `1058A4:Skyrim.esm` / `FoodFortifyStamina`: unofficial skyrim special edition patch.esp → smMealtime.esp.
  - Archetype=[MagicEffectPeakValueModArchetype] Association=Null (smMealtime.esp [MagicEffectPeakValueModArchetype] Association=005906:smMealtime.esp)
  - Archetype.AssociationKey: ABSENT here (smMealtime.esp has 005906:smMealtime.esp)
  - Archetype.Association: ABSENT here (smMealtime.esp has 005906:smMealtime.esp)
  - Keywords: 2 vs smMealtime.esp 1 item(s) — only here: [0] 042504:Skyrim.esm; [1] 0F8A4E:Skyrim.esm; only in smMealtime.esp: [0] 005906:smMealtime.esp
- `1058A6:Skyrim.esm` / `FoodFortifyMagickaRate`: Skyrim.esm → smMealtime.esp.
  - Archetype=[MagicEffectPeakValueModArchetype] Association=Null (smMealtime.esp [MagicEffectPeakValueModArchetype] Association=005902:smMealtime.esp)
  - Archetype.AssociationKey: ABSENT here (smMealtime.esp has 005902:smMealtime.esp)
  - Archetype.Association: ABSENT here (smMealtime.esp has 005902:smMealtime.esp)
  - Keywords: 2 vs smMealtime.esp 2 item(s), contents differ — only here: [0] 065A34:Skyrim.esm; only in smMealtime.esp: [1] 005902:smMealtime.esp
- `1058A8:Skyrim.esm` / `FoodFortifyMagicka`: unofficial skyrim special edition patch.esp → smMealtime.esp.
  - Archetype=[MagicEffectPeakValueModArchetype] Association=Null (smMealtime.esp [MagicEffectPeakValueModArchetype] Association=005905:smMealtime.esp)
  - Archetype.AssociationKey: ABSENT here (smMealtime.esp has 005905:smMealtime.esp)
  - Archetype.Association: ABSENT here (smMealtime.esp has 005905:smMealtime.esp)
  - Keywords: 2 vs smMealtime.esp 1 item(s) — only here: [0] 042508:Skyrim.esm; [1] 0F8A4E:Skyrim.esm; only in smMealtime.esp: [0] 005905:smMealtime.esp

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 272. smMealtime - Survival Patch.esp

Formato **ESP**; provider **Mealtime - Survival mode patches**; overrides em headers **82**; winner de **82** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, HearthFires.esm, Dragonborn.esm, smMealtime.esp, ccqdrsse001-survivalmode.esl.

**Tipos nos headers:** ALCH=82.

**Campos selecionados diferentes do predecessor:** Effects (82).

- `064B2E:Skyrim.esm` / `FoodApple`: smMealtime.esp → smMealtime - Survival Patch.esp.
  - Effects: 1 vs smMealtime - Survival Patch.esp 2 item(s) — only in smMealtime - Survival Patch.esp: [1] BaseEffect=002EE2:Update.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s))
- `064B2F:Skyrim.esm` / `FoodApple02`: smMealtime.esp → smMealtime - Survival Patch.esp.
  - Effects: 1 vs smMealtime - Survival Patch.esp 2 item(s) — only in smMealtime - Survival Patch.esp: [1] BaseEffect=002EE2:Update.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s))
- `064B30:Skyrim.esm` / `FoodBoiledCremeTreat`: smMealtime.esp → smMealtime - Survival Patch.esp.
  - Effects: 2 vs smMealtime - Survival Patch.esp 3 item(s) — only in smMealtime - Survival Patch.esp: [2] BaseEffect=002EE2:Update.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s))
- `064B31:Skyrim.esm` / `FoodCheeseWedge01`: smMealtime.esp → smMealtime - Survival Patch.esp.
  - Effects: 1 vs smMealtime - Survival Patch.esp 2 item(s) — only in smMealtime - Survival Patch.esp: [1] BaseEffect=002EE1:Update.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 273. New Legion Redux.esp

Formato **ESPFE**; provider **New Legion Redux**; overrides em headers **14**; winner de **5** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** ARMO=6, COBJ=3, LVLI=4, ARMA=14, OTFT=2.

**Campos selecionados diferentes do predecessor:** Items (3), Entries (2).

- `0CD656:Skyrim.esm` / `OutfitListSoldierImperialOfficerTullius`: Skyrim.esm → New Legion Redux.esp.
  - Entries: 4 vs New Legion Redux.esp 5 item(s) — only in New Legion Redux.esp: [4] Data=[LeveledItemEntryData] Reference=000801:New Legion Redux.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s))
- `0D768E:Skyrim.esm` / `OutfitListSoldierImperialOfficerTulliusNoHelmet`: Skyrim.esm → New Legion Redux.esp.
  - Entries: 3 vs New Legion Redux.esp 4 item(s) — only in New Legion Redux.esp: [3] Data=[LeveledItemEntryData] Reference=000801:New Legion Redux.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s))
- `10FB04:Skyrim.esm` / `TemperArmorPenitusBoots`: Skyrim.esm → New Legion Redux.esp.
  - Items: 1 vs New Legion Redux.esp 1 item(s), contents differ — only here: [0] Item=[ContainerItem] Item=0DB5D2:Skyrim.esm, Item.Item=0DB5D2:Skyrim.esm, Item.Count=1 (+1 more field(s)); only in New Legion Redux.esp: [0] Item=[ContainerItem] Item=05ACE5:Skyrim.esm, Item.Item=05ACE5:Skyrim.esm, Item.Count=1 (+1 more field(s))
- `10FB06:Skyrim.esm` / `TemperArmorPenitusGauntlets`: Skyrim.esm → New Legion Redux.esp.
  - Items: 1 vs New Legion Redux.esp 1 item(s), contents differ — only here: [0] Item=[ContainerItem] Item=0DB5D2:Skyrim.esm, Item.Item=0DB5D2:Skyrim.esm, Item.Count=1 (+1 more field(s)); only in New Legion Redux.esp: [0] Item=[ContainerItem] Item=05ACE5:Skyrim.esm, Item.Item=05ACE5:Skyrim.esm, Item.Count=1 (+1 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 274. Sorcerer.esp

Formato **ESP**; provider **Sorcerer - A Staff and Scroll Overhaul**; overrides em headers **66**; winner de **18** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, MysticismMagic.esp.

**Tipos nos headers:** KYWD=17, TXST=1, GLOB=1, MGEF=6, SPEL=2, BOOK=244, CONT=7, MISC=4, STAT=2, FURN=2, WEAP=5, COBJ=1068, SLGM=8, LVLI=20, CELL=4, REFR=82, QUST=1, PERK=248, SMQN=1.

**Campos selecionados diferentes do predecessor:** BasicStats.Value (5), Keywords (5), Critical.Unused (4), Critical.Unused3 (4), Effects (1), Flags (1), Entries (1), Data.Flags (1), EnchantmentAmount (1).

- `017739:Dragonborn.esm` / `MAG_HeartstoneEnchantingControllerPerk`: Dragonborn.esm → Sorcerer.esp.
  - Effects: 1 vs Sorcerer.esp 1 item(s), contents differ — only here: [0] Modification=Multiply, Value=0.05, EntryPoint=ModSkillUse (+59 more field(s)); only in Sorcerer.esp: [0] Modification=Multiply, Value=0.025, EntryPoint=ModSkillUse (+59 more field(s))
- `0FFEA2:Skyrim.esm` / `LItemMiscVendorSoulGemEmpty`: Skyrim.esm → Sorcerer.esp.
  - Flags=CalculateFromAllLevelsLessThanOrEqualPlayer, CalculateForEachItemInCount (Sorcerer.esp CalculateForEachItemInCount)
  - Entries: 20 vs Sorcerer.esp 13 item(s) — only here: [3] Data=[LeveledItemEntryData] Reference=02E4E2:Skyrim.esm, Data.Level=1, Data.Unknown=0 (+4 more field(s)); [4] Data=[LeveledItemEntryData] Reference=02E4E4:Skyrim.esm, Data.Level=4, Data.Unknown=0 (+4 more field(s)) (+15 more element(s)); only in Sorcerer.esp: [3] Data=[LeveledItemEntryData] Reference=02E4E4:Skyrim.esm, Data.Level=1, Data.Unknown=0 (+4 more field(s)); [4] Data=[LeveledItemEntryData] Reference=02E4E4:Skyrim.esm, Data.Level=1, Data.Unknown=0 (+4 more field(s)) (+8 more element(s))
- `051B0C:Skyrim.esm` / `MAG_StaffTemplateRestoration`: Dragonborn.esm → Sorcerer.esp.
  - BasicStats.Value=500 (Sorcerer.esp 75)
  - Critical.Unused=21 (Sorcerer.esp 0)
  - Critical.Unused3=1 (Sorcerer.esp 0)
  - Keywords: 2 vs Sorcerer.esp 3 item(s) — only in Sorcerer.esp: [2] ADA160:Update.esm
- `07A91B:Skyrim.esm` / `MAG_StaffTemplateIllusion`: Dragonborn.esm → Sorcerer.esp.
  - BasicStats.Value=500 (Sorcerer.esp 75)
  - Critical.Unused=21 (Sorcerer.esp 0)
  - Critical.Unused3=1 (Sorcerer.esp 0)
  - Keywords: 2 vs Sorcerer.esp 3 item(s) — only in Sorcerer.esp: [2] ADA159:Update.esm

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 275. imp_helm_legend.esp

Formato **ESP**; provider **Improved closefaced helmets**; overrides em headers **89**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** ARMO=51, ARMA=141.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 276. Alchemy Requires Bottles Redux.esp

Formato **ESPFE**; provider **ALCHEMY OVERHAUL**; overrides em headers **25**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** CONT=25, MISC=1, LVLI=1, QUST=4, FLST=1, MESG=1, SMQN=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 279. GlassMaking&Recycling.esp

Formato **ESPFE**; provider **ALCHEMY OVERHAUL**; overrides em headers **38**; winner de **9** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** CONT=19, INGR=2, LIGH=1, MISC=12, STAT=3, COBJ=40, LVLI=19, FLST=2.

**Campos selecionados diferentes do predecessor:** Entries (6), Items (2).

- `03FFFE:Skyrim.esm` / `LItemBook3All`: unofficial skyrim special edition patch.esp → GlassMaking&Recycling.esp.
  - Entries: same 60 item(s), ORDER DIFFERS from GlassMaking&Recycling.esp
- `087131:Skyrim.esm` / `LItemIngredientsCommon`: Skyrim.esm → GlassMaking&Recycling.esp.
  - Entries: 32 vs GlassMaking&Recycling.esp 33 item(s) — only in GlassMaking&Recycling.esp: [32] Data=[LeveledItemEntryData] Reference=000847:GlassMaking&Recycling.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s))
- `09CD48:Skyrim.esm` / `LItemApothecaryIngredientsCommon75`: Skyrim.esm → GlassMaking&Recycling.esp.
  - Entries: 26 vs GlassMaking&Recycling.esp 27 item(s) — only in GlassMaking&Recycling.esp: [26] Data=[LeveledItemEntryData] Reference=000847:GlassMaking&Recycling.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s))
- `02AA0C:Dragonborn.esm` / `DLC2LItemBook2Combined`: unofficial skyrim special edition patch.esp → GlassMaking&Recycling.esp.
  - Entries: 98 vs GlassMaking&Recycling.esp 99 item(s) — only in GlassMaking&Recycling.esp: [97] Data=[LeveledItemEntryData] Reference=00084E:GlassMaking&Recycling.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 280. Alchemy Requires Bottles - Empty Bottle Patch.esp

Formato **ESPFE**; provider **ALCHEMY OVERHAUL**; overrides em headers **1**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Alchemy Requires Bottles Redux.esp.

**Tipos nos headers:** MISC=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 282. MacAwesomeEmptyAlchemyBottles.esp

Formato **ESPFE**; provider **Mac's Empty Bottles for Alchemy Requires Bottles Redux - Awesome Potions Simplified Version**; overrides em headers **1**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Alchemy Requires Bottles Redux.esp, Awesome Potions Simplified by Revoith.esp.

**Tipos nos headers:** MISC=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 283. DragonPriestArmor_ICH_Patch.esp

Formato **ESPFE**; provider **Armory of the Dragon Cult - Dragon Priest Armor**; overrides em headers **6**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, Dragonborn.esm, imp_helm_legend.esp, DragonPriestArmor.esp.

**Tipos nos headers:** ARMA=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 287. NB-FurHoods.esp

Formato **ESP**; provider **Northborn Fur Hoods**; overrides em headers **23**; winner de **10** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** KYWD=23, ARMO=18, MISC=3, COBJ=46, ARMA=24.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 288. Black Mage Armor SE.esp

Formato **ESP**; provider **Black Mage Armor SE**; overrides em headers **3**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** KYWD=3, TXST=3, GLOB=1, MGEF=1, SPEL=1, ARMO=80, CONT=2, MISC=1, COBJ=126, LVLI=4, CELL=1, REFR=3, QUST=2, PERK=1, ARMA=55.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 289. Sentinel.esp

Formato **ESPFE**; provider **Sentinel - An Equipment Overhaul**; overrides em headers **49**; winner de **11** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, Sentinel - Master Plugin.esp.

**Tipos nos headers:** KYWD=25, TXST=67, ARMO=256, STAT=40, WEAP=35, COBJ=530, LVLI=87, DIAL=1, INFO=22, ARMA=378, OTFT=55.

**Campos selecionados diferentes do predecessor:** Conditions (1), Items (1).

- `0145C2:Dawnguard.esm` / `DLC1RecipeArmorShellbugHelmet`: Dawnguard.esm → Sentinel.esp.
  - Conditions: 0 vs Sentinel.esp 1 item(s) — only in Sentinel.esp: [0] ComparisonValue=1, Data=[GetItemCountConditionData] Reference=Null, Data.ItemOrList=0195AA:Dawnguard.esm (+21 more field(s))
  - Items: same 2 item(s), ORDER DIFFERS from Sentinel.esp

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 290. SteelRetexture_SentinelGildedSteelArmor.esp

Formato **ESPFE**; provider **Steel Armors and Weapons Retexture SE**; overrides em headers **6**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Sentinel.esp.

**Tipos nos headers:** TXST=5, ARMA=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 292. Grimoire - Thaumaturgy.esp

Formato **ESPFE**; provider **Grimoire - An Enchanting Addon for Sentinel**; overrides em headers **3315**; winner de **671** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dragonborn.esm, Sentinel.esp, Grimoire.esp, Thaumaturgy.esp.

**Tipos nos headers:** ARMO=2644, WEAP=441, LVLI=230.

**Campos selecionados diferentes do predecessor:** Entries (230).

- `001266:Grimoire.esp` / `sTH_Hide0Boots01`: Grimoire.esp → Grimoire - Thaumaturgy.esp.
  - Entries: 6 vs Grimoire - Thaumaturgy.esp 10 item(s) — only in Grimoire - Thaumaturgy.esp: [6] Data=[LeveledItemEntryData] Reference=11153C:Thaumaturgy.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)); [7] Data=[LeveledItemEntryData] Reference=111567:Thaumaturgy.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)) (+2 more element(s))
- `001267:Grimoire.esp` / `sTH_Hide0Boots02`: Grimoire.esp → Grimoire - Thaumaturgy.esp.
  - Entries: 6 vs Grimoire - Thaumaturgy.esp 7 item(s) — only in Grimoire - Thaumaturgy.esp: [6] Data=[LeveledItemEntryData] Reference=11153D:Thaumaturgy.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s))
- `001269:Grimoire.esp` / `sTH_Hide0Cuirass01`: Grimoire.esp → Grimoire - Thaumaturgy.esp.
  - Entries: 7 vs Grimoire - Thaumaturgy.esp 15 item(s) — only in Grimoire - Thaumaturgy.esp: [7] Data=[LeveledItemEntryData] Reference=01E08E:Thaumaturgy.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)); [8] Data=[LeveledItemEntryData] Reference=0D47D5:Thaumaturgy.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)) (+6 more element(s))
- `00126A:Grimoire.esp` / `sTH_Hide0Cuirass02`: Grimoire.esp → Grimoire - Thaumaturgy.esp.
  - Entries: 7 vs Grimoire - Thaumaturgy.esp 14 item(s) — only in Grimoire - Thaumaturgy.esp: [7] Data=[LeveledItemEntryData] Reference=01E08F:Thaumaturgy.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)); [8] Data=[LeveledItemEntryData] Reference=0D47D6:Thaumaturgy.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s)) (+5 more element(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 293. Sentinel - Priests and Acolytes.esp

Formato **ESPFE**; provider **Sentinel - An Equipment Overhaul**; overrides em headers **5**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, Sentinel.esp.

**Tipos nos headers:** KYWD=3, TXST=23, ARMO=40, COBJ=38, LVLI=5, ARMA=43, OTFT=16.

**Campos selecionados diferentes do predecessor:** ArmorRating (2), Value (2), Keywords (2), MajorFlags (1).

- `016FFE:Skyrim.esm` / `DremoraRobesBlack`: waccf_armor and clothing extension.esp → Sentinel - Priests and Acolytes.esp.
  - MajorFlags=0 (Sentinel - Priests and Acolytes.esp NonPlayable)
  - ArmorRating=5 (Sentinel - Priests and Acolytes.esp 0)
  - Value=25 (Sentinel - Priests and Acolytes.esp 5)
  - Keywords: 6 vs Sentinel - Priests and Acolytes.esp 3 item(s) — only here: [3] AF0254:Update.esm; [4] AF0126:Update.esm (+1 more element(s))
- `0376DA:Dragonborn.esm` / `DLC2DremoraRobesBlack`: waccf_armor and clothing extension.esp → Sentinel - Priests and Acolytes.esp.
  - ArmorRating=5 (Sentinel - Priests and Acolytes.esp 0)
  - Value=25 (Sentinel - Priests and Acolytes.esp 5)
  - Keywords: 6 vs Sentinel - Priests and Acolytes.esp 3 item(s) — only here: [3] AF0254:Update.esm; [4] AF0126:Update.esm (+1 more element(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 294. Sentinel - City Guards.esp

Formato **ESPFE**; provider **Sentinel - An Equipment Overhaul**; overrides em headers **19**; winner de **3** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, Sentinel.esp.

**Tipos nos headers:** ARMO=79, STAT=9, WEAP=9, COBJ=70, LVLI=46, ARMA=136, OTFT=17.

**Campos selecionados diferentes do predecessor:** Entries (3).

- `0D33C7:Skyrim.esm` / `OutfitListGuardWhiterun`: Skyrim.esm → Sentinel - City Guards.esp.
  - Entries: 4 vs Sentinel - City Guards.esp 1 item(s) — only here: [0] Data=[LeveledItemEntryData] Reference=02150D:Skyrim.esm, Data.Level=1, Data.Unknown=0 (+4 more field(s)); [1] Data=[LeveledItemEntryData] Reference=0A6D7F:Skyrim.esm, Data.Level=1, Data.Unknown=0 (+4 more field(s)) (+2 more element(s)); only in Sentinel - City Guards.esp: [0] Data=[LeveledItemEntryData] Reference=0008ED:Sentinel - City Guards.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s))
- `0E962D:Skyrim.esm` / `OutfitListGuardWhiterunNoHelmet`: Skyrim.esm → Sentinel - City Guards.esp.
  - Entries: 2 vs Sentinel - City Guards.esp 1 item(s) — only here: [0] Data=[LeveledItemEntryData] Reference=02150D:Skyrim.esm, Data.Level=1, Data.Unknown=0 (+4 more field(s)); [1] Data=[LeveledItemEntryData] Reference=0A6D7F:Skyrim.esm, Data.Level=1, Data.Unknown=0 (+4 more field(s)); only in Sentinel - City Guards.esp: [0] Data=[LeveledItemEntryData] Reference=00090F:Sentinel - City Guards.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s))
- `10B2F0:Skyrim.esm` / `OutfitListGuardWhiterunNormalHelmet`: Skyrim.esm → Sentinel - City Guards.esp.
  - Entries: 4 vs Sentinel - City Guards.esp 1 item(s) — only here: [0] Data=[LeveledItemEntryData] Reference=02150D:Skyrim.esm, Data.Level=1, Data.Unknown=0 (+4 more field(s)); [1] Data=[LeveledItemEntryData] Reference=0A6D7F:Skyrim.esm, Data.Level=1, Data.Unknown=0 (+4 more field(s)) (+2 more element(s)); only in Sentinel - City Guards.esp: [0] Data=[LeveledItemEntryData] Reference=0008ED:Sentinel - City Guards.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 298. Dynamic Sprint.esp

Formato **ESPFE**; provider **Dynamic Sprint**; overrides em headers **1**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** KYWD=4, MGEF=4, SPEL=4, MOVT=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 302. For Honor Reforged - Removed Effects Patch.esp

Formato **ESPFE**; provider **For Honor Reforged**; overrides em headers **6**; winner de **4** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, For Honor in Skyrim.esp, Smooth Moveset.esp.

**Tipos nos headers:** MGEF=4, SNDR=2.

**Campos selecionados diferentes do predecessor:** Archetype (1), Archetype.AssociationKey (1), Archetype.Association (1).

- `00081E:For Honor in Skyrim.esp` / `MA_EnchE_Weapon`: For Honor in Skyrim.esp → For Honor Reforged - Removed Effects Patch.esp.
  - Archetype=[MagicEffectEnhanceWeaponArchetype] Association=000812:For Honor in Skyrim.esp (For Honor Reforged - Removed Effects Patch.esp [MagicEffectEnhanceWeaponArchetype] Association=Null)
  - Archetype.AssociationKey=000812:For Honor in Skyrim.esp (For Honor Reforged - Removed Effects Patch.esp has Archetype.AssociationKey ABSENT)
  - Archetype.Association=000812:For Honor in Skyrim.esp (For Honor Reforged - Removed Effects Patch.esp has Archetype.Association ABSENT)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 303. For Honor Balance Patch.esp

Formato **ESPFE**; provider **For Honor Reforged**; overrides em headers **35**; winner de **29** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Smooth Moveset.esp, For Honor in Skyrim.esp.

**Tipos nos headers:** KYWD=7, MGEF=68, SPEL=56, QUST=1, PERK=12, MESG=2, SNDR=10.

**Campos selecionados diferentes do predecessor:** Effects (18), Archetype.Type (4), TargetType (3), VirtualMachineAdapter (3), VirtualMachineAdapter.Version (3), VirtualMachineAdapter.ObjectFormat (3), VirtualMachineAdapter.Scripts (3), Flags (2), Keywords (1), Archetype.ActorValue (1).

- `000819:For Honor in Skyrim.esp` / `StaggerResistance`: For Honor in Skyrim.esp → For Honor Balance Patch.esp.
  - Effects: 1 vs For Honor Balance Patch.esp 0 item(s) — only here: [0] Modification=Multiply, Value=0, EntryPoint=ModIncomingStagger (+8 more field(s))
- `000847:For Honor in Skyrim.esp` / `AttackDetection`: For Honor in Skyrim.esp → For Honor Balance Patch.esp.
  - Effects: 1 vs For Honor Balance Patch.esp 0 item(s) — only here: [0] Spell=00086B:For Honor in Skyrim.esp, EntryPoint=ApplyWeaponSwingSpell, PerkConditionTabCount=3 (+82 more field(s))
- `00084A:For Honor in Skyrim.esp` / `StaggerHit`: For Honor in Skyrim.esp → For Honor Balance Patch.esp.
  - Effects: 14 vs For Honor Balance Patch.esp 0 item(s) — only here: [0] Spell=000877:For Honor in Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+84 more field(s)); [1] Spell=000878:For Honor in Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+84 more field(s)) (+12 more element(s))
- `000866:For Honor in Skyrim.esp` / `ParryAttackDamage`: For Honor in Skyrim.esp → For Honor Balance Patch.esp.
  - Effects: 1 vs For Honor Balance Patch.esp 0 item(s) — only here: [0] Modification=Multiply, Value=2.5, EntryPoint=ModAttackDamage (+8 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 308. Dynamic Impact - Slash Effects X.esp

Formato **ESPFE**; provider **Dynamic Impact - Slash Effects X**; overrides em headers **46**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm.

**Tipos nos headers:** ADDN=6, IPCT=68, IPDS=11.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 312. imp_helm_Sentinel.esp

Formato **ESPFE**; provider **Sentinel - Improved Closefaced Helmets (ICH) Patch**; overrides em headers **2**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, Sentinel.esp.

**Tipos nos headers:** ARMO=2, ARMA=8.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 313. NoGrassias.esp

Formato **ESPFE**; provider **No Grassias - A Universal Grass Fix For Grass Mods**; overrides em headers **15**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** LTEX=15.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 314. MysticismTwoHanded.esp

Formato **ESP**; provider **Mysticism - Two Handed Master Spells**; overrides em headers **54**; winner de **25** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, MysticismMagic.esp.

**Tipos nos headers:** MGEF=41, SPEL=13.

**Campos selecionados diferentes do predecessor:** Keywords (25), VirtualMachineAdapter.Scripts (1), Conditions (1).

- `082A32:Skyrim.esm` / `MAG_FireDamageFFSelfArea20`: MysticismMagic.esp → MysticismTwoHanded.esp.
  - Keywords: 1 vs MysticismTwoHanded.esp 2 item(s) — only in MysticismTwoHanded.esp: [1] 0806E1:Skyrim.esm
- `082A33:Skyrim.esm` / `MAG_FireDamageFFSelfArea40`: MysticismMagic.esp → MysticismTwoHanded.esp.
  - Keywords: 1 vs MysticismTwoHanded.esp 2 item(s) — only in MysticismTwoHanded.esp: [1] 0806E1:Skyrim.esm
- `08C1AA:Skyrim.esm` / `MAG_TurnUndeadFFSelfArea100`: MysticismMagic.esp → MysticismTwoHanded.esp.
  - Keywords: 2 vs MysticismTwoHanded.esp 3 item(s) — only in MysticismTwoHanded.esp: [2] 0806E1:Skyrim.esm
  - VirtualMachineAdapter.Scripts: 2 vs MysticismTwoHanded.esp 2 item(s), contents differ — only here: [0] Name=magicAttachAshPileOnDeath, Flags=Local, Properties=[list: 2 item(s)] (+10 more field(s)); [1] Name=SayOnHitByMagicEffectScript, Flags=Local, Properties=[list: 3 item(s)] (+18 more field(s)); only in MysticismTwoHanded.esp: [0] Name=magicAttachAshPileOnDeath, Flags=Local, Properties=[list: 2 item(s)] (+10 more field(s)); [1] Name=SayOnHitByMagicEffectScript, Flags=Local, Properties=[list: 3 item(s)] (+18 more field(s))
- `09E0BD:Skyrim.esm` / `MAG_PerkMasterMindCalmFFSelfArea100`: MysticismMagic.esp → MysticismTwoHanded.esp.
  - Keywords: 2 vs MysticismTwoHanded.esp 3 item(s) — only in MysticismTwoHanded.esp: [2] 0806E1:Skyrim.esm

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 315. Simple Fishing Overhaul.esp

Formato **ESPFE**; provider **Simple Fishing Overhaul - Animations and Improved Quest Dialogue**; overrides em headers **169**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ccBGSSSE001-Fish.esm.

**Tipos nos headers:** GLOB=26, LVLI=1, DIAL=77, INFO=176, QUST=2, FLST=3, PERK=1, MESG=2.

**Campos selecionados diferentes do predecessor:** VirtualMachineAdapter.Scripts (1).

- `033A57:ccBGSSSE001-Fish.esm` / `ccBGSSSE001_FishingSystemQuest`: ccBGSSSE001-Fish.esm → Simple Fishing Overhaul.esp.
  - VirtualMachineAdapter.Scripts: 1 vs Simple Fishing Overhaul.esp 1 item(s), contents differ — only here: [0] Name=ccBGSSSE001_FishingSystemScript, Flags=Local, Properties=[list: 52 item(s)] (+312 more field(s)); only in Simple Fishing Overhaul.esp: [0] Name=ccBGSSSE001_FishingSystemScript, Flags=Local, Properties=[list: 62 item(s)] (+372 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 316. SFO_FKDiverseRacialSkeletonsPatch.esp

Formato **ESPFE**; provider **Simple Fishing Overhaul - Animations and Improved Quest Dialogue**; overrides em headers **20**; winner de **20** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Simple Fishing Overhaul.esp.

**Tipos nos headers:** GLOB=20.

**Campos selecionados diferentes do predecessor:** Data (18).

- `000803:Simple Fishing Overhaul.esp` / `RodHeight_FemaleNord`: Simple Fishing Overhaul.esp → SFO_FKDiverseRacialSkeletonsPatch.esp.
  - Data=8.5 (SFO_FKDiverseRacialSkeletonsPatch.esp 5.5)
- `000804:Simple Fishing Overhaul.esp` / `RodHeight_MaleArgonian`: Simple Fishing Overhaul.esp → SFO_FKDiverseRacialSkeletonsPatch.esp.
  - Data=10 (SFO_FKDiverseRacialSkeletonsPatch.esp 7)
- `000805:Simple Fishing Overhaul.esp` / `RodHeight_FemaleArgonian`: Simple Fishing Overhaul.esp → SFO_FKDiverseRacialSkeletonsPatch.esp.
  - Data=10 (SFO_FKDiverseRacialSkeletonsPatch.esp 12)
- `000806:Simple Fishing Overhaul.esp` / `RodHeight_MaleBreton`: Simple Fishing Overhaul.esp → SFO_FKDiverseRacialSkeletonsPatch.esp.
  - Data=10 (SFO_FKDiverseRacialSkeletonsPatch.esp 12)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 317. Fish Anywhere.esp

Formato **ESPFE**; provider **Fish Anywhere With Water**; overrides em headers **2**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ccBGSSSE001-Fish.esm.

**Tipos nos headers:** MGEF=1, SPEL=1, ACTI=1, STAT=1, NPC_=1, PROJ=1, CELL=1, REFR=11, ACHR=1, QUST=2, EXPL=1, FLST=1, MESG=2.

**Campos selecionados diferentes do predecessor:** Flags (1), Aliases (1), VirtualMachineAdapter.Aliases (1), VirtualMachineAdapter.Scripts (1).

- `0D1017:ccBGSSSE001-Fish.esm` / `ccBGSSSE001_FishingFollowerIdleQuest`: ccBGSSSE001-Fish.esm → Fish Anywhere.esp.
  - Flags=0 (Fish Anywhere.esp 4096)
  - Aliases: 4 vs Fish Anywhere.esp 13 item(s) — only here: [0] ID=0, Type=Reference, Name=Follower (+96 more field(s)); [1] ID=2, Type=Reference, Name=FollowerMarker (+47 more field(s)); only in Fish Anywhere.esp: [0] ID=0, Type=Reference, Name=Follower01 (+96 more field(s)); [1] ID=4, Type=Reference, Name=Follower02 (+96 more field(s)) (+9 more element(s))
  - VirtualMachineAdapter.Aliases: 2 vs Fish Anywhere.esp 11 item(s) — only in Fish Anywhere.esp: [1] Property=[ScriptObjectProperty] Object=0D1017:ccBGSSSE001-Fish.esm, Property.Object=0D1017:ccBGSSSE001-Fish.esm, Property.Alias=4 (+16 more field(s)); [2] Property=[ScriptObjectProperty] Object=0D1017:ccBGSSSE001-Fish.esm, Property.Object=0D1017:ccBGSSSE001-Fish.esm, Property.Alias=5 (+16 more field(s)) (+7 more element(s))
  - VirtualMachineAdapter.Scripts: 1 vs Fish Anywhere.esp 1 item(s), contents differ — only here: [0] Name=QF_ccBGSSSE001_FishingFollow_050D1017, Flags=Local, Properties=[list: 6 item(s)] (+36 more field(s)); only in Fish Anywhere.esp: [0] Name=QF_ccBGSSSE001_FishingFollow_050D1017, Flags=Local, Properties=[list: 15 item(s)] (+148 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 318. Dragons Change Weather 2.esp

Formato **ESPFE**; provider **Dragons Change Weather - Cinematic Dragon battles**; overrides em headers **4**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** MGEF=1, SPEL=2, WTHR=25, SPGD=11, QUST=1, IMAD=1.

**Campos selecionados diferentes do predecessor:** Effects (2), ChargeTime (1), BaseCost (1).

- `0D7D56:Skyrim.esm` / `AbDragonBloodDamageFX`: Skyrim.esm → Dragons Change Weather 2.esp.
  - ChargeTime=0 (Dragons Change Weather 2.esp 0.5)
  - Effects: 1 vs Dragons Change Weather 2.esp 2 item(s) — only in Dragons Change Weather 2.esp: [1] BaseEffect=00080C:Dragons Change Weather 2.esp, Data=[EffectData], Data.Magnitude=0 (+3 more field(s))
- `057B48:Skyrim.esm` / `AbDragon`: Skyrim.esm → Dragons Change Weather 2.esp.
  - BaseCost=5 (Dragons Change Weather 2.esp 20)
  - Effects: 1 vs Dragons Change Weather 2.esp 2 item(s) — only in Dragons Change Weather 2.esp: [1] BaseEffect=00080C:Dragons Change Weather 2.esp, Data=[EffectData], Data.Magnitude=0 (+3 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 319. Simply Stronger Dragons.esp

Formato **ESP**; provider **Simply Stronger Dragons**; overrides em headers **10**; winner de **10** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** RACE=1, SPEL=8, NPC_=2, PERK=2.

**Campos selecionados diferentes do predecessor:** Effects (7), PlayerSkills.Unused (2), PlayerSkills.Unused2 (2), ActorEffect (2), Factions (2), Perks (2), BaseCost (1), Starting[Health] (1), Configuration.TemplateFlags (1), MajorFlags (1), VirtualMachineAdapter.Scripts (1).

- `1046BD:Skyrim.esm` / `crDragonResistNPCs`: Skyrim.esm → Simply Stronger Dragons.esp.
  - Effects: 1 vs Simply Stronger Dragons.esp 3 item(s) — only in Simply Stronger Dragons.esp: [0] Modification=Multiply, Value=4, EntryPoint=ModSpellMagnitude (+8 more field(s)); [1] Modification=Multiply, Value=4, EntryPoint=ModAttackDamage (+8 more field(s))
- `0F77FA:Skyrim.esm` / `crDragonUnarmedDamage02`: Skyrim.esm → Simply Stronger Dragons.esp.
  - BaseCost=172 (Simply Stronger Dragons.esp 10047)
  - Effects: 1 vs Simply Stronger Dragons.esp 2 item(s) — only in Simply Stronger Dragons.esp: [1] BaseEffect=0A1A3F:Skyrim.esm, Data=[EffectData], Data.Magnitude=3612 (+3 more field(s))
- `10C4E3:Skyrim.esm` / `crDragonUnarmedDamage03`: Skyrim.esm → Simply Stronger Dragons.esp.
  - Effects: 1 vs Simply Stronger Dragons.esp 2 item(s) — only in Simply Stronger Dragons.esp: [1] BaseEffect=0A1A3F:Skyrim.esm, Data=[EffectData], Data.Magnitude=6685 (+3 more field(s))
- `10C4E4:Skyrim.esm` / `crDragonUnarmedDamage04`: Skyrim.esm → Simply Stronger Dragons.esp.
  - Effects: 1 vs Simply Stronger Dragons.esp 2 item(s) — only in Simply Stronger Dragons.esp: [1] BaseEffect=0A1A3F:Skyrim.esm, Data=[EffectData], Data.Magnitude=9450 (+3 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 320. Aetherius.esp

Formato **ESPFE**; provider **Aetherius - A Race Overhaul**; overrides em headers **61**; winner de **27** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** GMST=1, KYWD=7, GLOB=1, RACE=23, MGEF=45, SPEL=40, LVLI=1, LSCR=10, PERK=6.

**Campos selecionados diferentes do predecessor:** Effects (18), CastType (8), Type (8), BaseCost (3), EquipmentType (3), ChargeTime (2), Entries (1).

- `0AA01B:Skyrim.esm` / `MAG_ArgonianRacialSpell03`: unofficial skyrim special edition patch.esp → Aetherius.esp.
  - ChargeTime=0.5 (Aetherius.esp 0)
  - Effects: 1 vs Aetherius.esp 1 item(s), contents differ — only here: [0] BaseEffect=0AA01C:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s)); only in Aetherius.esp: [0] BaseEffect=000816:Aetherius.esp, Data=[EffectData], Data.Magnitude=0 (+3 more field(s))
- `0AA01D:Skyrim.esm` / `MAG_KhajiitRacialPower01`: Skyrim.esm → Aetherius.esp.
  - ChargeTime=0.5 (Aetherius.esp 0)
  - Effects: 1 vs Aetherius.esp 1 item(s), contents differ — only here: [0] BaseEffect=06B10C:Skyrim.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s)); only in Aetherius.esp: [0] BaseEffect=000830:Aetherius.esp, Data=[EffectData], Data.Magnitude=0 (+3 more field(s))
- `0AA01E:Skyrim.esm` / `MAG_KhajiitRacialSpell01`: unofficial skyrim special edition patch.esp → Aetherius.esp.
  - BaseCost=76 (Aetherius.esp 0)
  - Effects: 1 vs Aetherius.esp 2 item(s) — only here: [0] BaseEffect=10C4E7:Skyrim.esm, Data=[EffectData], Data.Magnitude=12 (+3 more field(s)); only in Aetherius.esp: [0] BaseEffect=ADA201:Update.esm, Data=[EffectData], Data.Magnitude=0 (+3 more field(s)); [1] BaseEffect=000820:Aetherius.esp, Data=[EffectData], Data.Magnitude=0 (+3 more field(s))
- `0AA01F:Skyrim.esm` / `MAG_BretonRacialSpell01`: unofficial skyrim special edition patch.esp → Aetherius.esp.
  - BaseCost=172 (Aetherius.esp 0)
  - Effects: 1 vs Aetherius.esp 1 item(s), contents differ — only here: [0] BaseEffect=053124:Skyrim.esm, Data=[EffectData], Data.Magnitude=25 (+3 more field(s)); only in Aetherius.esp: [0] BaseEffect=000819:Aetherius.esp, Data=[EffectData], Data.Magnitude=25 (+3 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 321. Aetherius Patch - Racial Body Morphs.esp

Formato **ESPFE**; provider **Aetherius Patch - Racial Body Morphs**; overrides em headers **24**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, Dragonborn.esm, Aetherius.esp.

**Tipos nos headers:** RACE=24.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 322. Vokrii - Minimalistic Perks of Skyrim.esp

Formato **ESP**; provider **Vokrii - Minimalistic Perks of Skyrim**; overrides em headers **377**; winner de **278** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** KYWD=62, GLOB=28, SOUN=6, MGEF=345, ENCH=4, SPEL=350, SCRL=1, ACTI=1, ARMO=23, CONT=20, INGR=1, LIGH=1, MISC=1, STAT=5, ALCH=1, COBJ=11, HAZD=1, LVLI=19, QUST=6, IDLE=2, PACK=3, EFSH=25, IMAD=1, FLST=38, PERK=426, AVIF=18, ARMA=2, MESG=39, ARTO=10, SNDR=5.

**Campos selecionados diferentes do predecessor:** Effects (204), Conditions (126), Items (19), PerkTree (16), BaseCost (8), VirtualMachineAdapter.Scripts (6), Flags (5), Entries (4), VirtualMachineAdapter (3), ChargeTime (3), Archetype.Type (3), VirtualMachineAdapter.Version only in Vokrii - Minimalistic Perks of Skyrim.esp (2).

- `058216:Skyrim.esm` / `VKR_Alc_030_Benefactor_Perk_WasBenefactor`: Skyrim.esm → Vokrii - Minimalistic Perks of Skyrim.esp.
  - Conditions: 2 vs Vokrii - Minimalistic Perks of Skyrim.esp 2 item(s), contents differ — only here: [0] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=058215:Skyrim.esm (+21 more field(s)); only in Vokrii - Minimalistic Perks of Skyrim.esp: [1] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=0BE127:Skyrim.esm (+21 more field(s))
  - Effects: 1 vs Vokrii - Minimalistic Perks of Skyrim.esp 1 item(s), contents differ — only here: [0] Modification=Multiply, Value=1.25, EntryPoint=ModAlchemyEffectiveness (+59 more field(s)); only in Vokrii - Minimalistic Perks of Skyrim.esp: [0] Modification=Multiply, Value=1.25, EntryPoint=ModAlchemyEffectiveness (+59 more field(s))
- `058217:Skyrim.esm` / `VKR_Alc_030_Poisoner_Perk_WasPoisoner`: Skyrim.esm → Vokrii - Minimalistic Perks of Skyrim.esp.
  - Conditions: 2 vs Vokrii - Minimalistic Perks of Skyrim.esp 2 item(s), contents differ — only here: [0] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=058215:Skyrim.esm (+21 more field(s)); only in Vokrii - Minimalistic Perks of Skyrim.esp: [1] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=0BE127:Skyrim.esm (+21 more field(s))
  - Effects: 1 vs Vokrii - Minimalistic Perks of Skyrim.esp 1 item(s), contents differ — only here: [0] Modification=Multiply, Value=1.25, EntryPoint=ModAlchemyEffectiveness (+59 more field(s)); only in Vokrii - Minimalistic Perks of Skyrim.esp: [0] Modification=Multiply, Value=1.25, EntryPoint=ModAlchemyEffectiveness (+59 more field(s))
- `058218:Skyrim.esm` / `VKR_Alc_050_Experimenter_Perk_WasExperimenter1`: Skyrim.esm → Vokrii - Minimalistic Perks of Skyrim.esp.
  - Conditions: same 2 item(s), ORDER DIFFERS from Vokrii - Minimalistic Perks of Skyrim.esp
  - Effects: 1 vs Vokrii - Minimalistic Perks of Skyrim.esp 1 item(s), contents differ — only here: [0] Modification=Set, Value=2, EntryPoint=ModInitialIngredientEffectsLearned (+36 more field(s)); only in Vokrii - Minimalistic Perks of Skyrim.esp: [0] Modification=Add, Value=3, EntryPoint=ModInitialIngredientEffectsLearned (+8 more field(s))
- `05821D:Skyrim.esm` / `VKR_Alc_070_Purity_Perk_WasPurity`: Update.esm → Vokrii - Minimalistic Perks of Skyrim.esp.
  - Conditions: 2 vs Vokrii - Minimalistic Perks of Skyrim.esp 3 item(s) — only here: [0] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=105F2C:Skyrim.esm (+21 more field(s)); [1] ComparisonValue=100, Data=[GetBaseActorValueConditionData] Reference=Null, Data.ActorValue=Alchemy (+19 more field(s)); only in Vokrii - Minimalistic Perks of Skyrim.esp: [0] ComparisonValue=70, Data=[GetBaseActorValueConditionData] Reference=Null, Data.ActorValue=Alchemy (+19 more field(s)); [1] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=105F2E:Skyrim.esm (+21 more field(s)) (+1 more element(s))
  - Effects: 1 vs Vokrii - Minimalistic Perks of Skyrim.esp 1 item(s), contents differ — only here: [0] Modification=Set, Value=1, EntryPoint=PurifyAlchemyIngredients (+8 more field(s)); only in Vokrii - Minimalistic Perks of Skyrim.esp: [0] Modification=Set, Value=1, EntryPoint=PurifyAlchemyIngredients (+8 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 323. Vokrii - ADXP Patch.esp

Formato **ESPFE**; provider **Vokrii - ADXP And Balance Patch**; overrides em headers **6**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Vokrii - Minimalistic Perks of Skyrim.esp.

**Tipos nos headers:** PERK=6.

**Campos selecionados diferentes do predecessor:** Effects (6), Conditions (2).

- `03AF9E:Skyrim.esm` / `VKR_Two_090_Sweep_Perk_WasSweep`: Vokrii - Minimalistic Perks of Skyrim.esp → Vokrii - ADXP Patch.esp.
  - Conditions: 2 vs Vokrii - ADXP Patch.esp 2 item(s), contents differ — only here: [1] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=4F3346:Vokrii - Minimalistic Perks of Skyrim.esp (+21 more field(s)); only in Vokrii - ADXP Patch.esp: [1] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=4F3346:Vokrii - Minimalistic Perks of Skyrim.esp (+21 more field(s))
  - Effects: 3 vs Vokrii - ADXP Patch.esp 3 item(s), contents differ — only here: [0] Spell=4F8494:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+136 more field(s)); [1] Modification=Multiply, Value=1.25, EntryPoint=ModPowerAttackDamage (+114 more field(s)) (+1 more element(s)); only in Vokrii - ADXP Patch.esp: [0] Modification=Set, Value=1, EntryPoint=SetSweepAttack (+112 more field(s)); [1] Modification=Multiply, Value=1.25, EntryPoint=ModPowerAttackDamage (+112 more field(s)) (+1 more element(s))
- `106256:Skyrim.esm` / `VKR_One_030_DualFlurry1_Perk_WasDualFlurry1`: Vokrii - Minimalistic Perks of Skyrim.esp → Vokrii - ADXP Patch.esp.
  - Effects: 1 vs Vokrii - ADXP Patch.esp 1 item(s), contents differ — only here: [0] Ability=108A3F:Skyrim.esm, Rank=0, Priority=0 (+5 more field(s)); only in Vokrii - ADXP Patch.esp: [0] Modification=Multiply, Value=1.1, EntryPoint=ModAttackDamage (+112 more field(s))
- `106257:Skyrim.esm` / `VKR_One_030_DualFlurry2_Perk_WasDualFlurry2`: Vokrii - Minimalistic Perks of Skyrim.esp → Vokrii - ADXP Patch.esp.
  - Effects: 1 vs Vokrii - ADXP Patch.esp 1 item(s), contents differ — only here: [0] Ability=108A40:Skyrim.esm, Rank=0, Priority=0 (+5 more field(s)); only in Vokrii - ADXP Patch.esp: [0] Modification=Multiply, Value=1.2, EntryPoint=ModAttackDamage (+112 more field(s))
- `4F3346:Vokrii - Minimalistic Perks of Skyrim.esp` / `VKR_Two_060_Warmaster_Perk`: Vokrii - Minimalistic Perks of Skyrim.esp → Vokrii - ADXP Patch.esp.
  - Effects: 4 vs Vokrii - ADXP Patch.esp 4 item(s), contents differ — only here: [0] Spell=4F8492:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+136 more field(s)); [1] Modification=Multiply, Value=1, EntryPoint=ModPowerAttackDamage (+114 more field(s)) (+2 more element(s)); only in Vokrii - ADXP Patch.esp: [0] Modification=Multiply, Value=2, EntryPoint=CalculateMyCriticalHitDamage (+140 more field(s)); [1] Modification=Add, Value=100, EntryPoint=CalculateMyCriticalHitChance (+140 more field(s)) (+2 more element(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 324. LostGrimoire_Vokrii_Patch.esp

Formato **ESPFE**; provider **Lost Grimoire SSE**; overrides em headers **13**; winner de **12** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, Dragonborn.esm, Vokrii - Minimalistic Perks of Skyrim.esp, LostGrimoire.esp.

**Tipos nos headers:** MGEF=6, ENCH=3, SPEL=1, FLST=3.

**Campos selecionados diferentes do predecessor:** Keywords (5), Effects (4), Items (3), EnchantmentAmount (1).

- `0106BF:LostGrimoire.esp` / `GRIM_SPELL_CON_BoundShield_bash`: LostGrimoire.esp → LostGrimoire_Vokrii_Patch.esp.
  - Effects: 3 vs LostGrimoire_Vokrii_Patch.esp 12 item(s) — only in LostGrimoire_Vokrii_Patch.esp: [3] BaseEffect=018FB5:Vokrii - Minimalistic Perks of Skyrim.esp, Data=[EffectData], Data.Magnitude=99 (+3 more field(s)); [4] BaseEffect=017A07:Vokrii - Minimalistic Perks of Skyrim.esp, Data=[EffectData], Data.Magnitude=100 (+3 more field(s)) (+7 more element(s))
- `07AD19:LostGrimoire.esp` / `GRIM_MGEF_RES00_RayOfLight`: LostGrimoire.esp → LostGrimoire_Vokrii_Patch.esp.
  - Keywords: 1 vs LostGrimoire_Vokrii_Patch.esp 2 item(s) — only in LostGrimoire_Vokrii_Patch.esp: [1] 24775E:Vokrii - Minimalistic Perks of Skyrim.esp
- `13B5ED:LostGrimoire.esp` / `GRIM_MGEF_RES25_SunburstRune`: LostGrimoire.esp → LostGrimoire_Vokrii_Patch.esp.
  - Keywords: 2 vs LostGrimoire_Vokrii_Patch.esp 3 item(s) — only in LostGrimoire_Vokrii_Patch.esp: [2] 24775E:Vokrii - Minimalistic Perks of Skyrim.esp
- `14FA42:LostGrimoire.esp` / `GRIM_MGEF_RES_WallOfLight_hazFFContact`: LostGrimoire.esp → LostGrimoire_Vokrii_Patch.esp.
  - Keywords: 1 vs LostGrimoire_Vokrii_Patch.esp 2 item(s) — only in LostGrimoire_Vokrii_Patch.esp: [1] 24775E:Vokrii - Minimalistic Perks of Skyrim.esp

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 325. Mysticism - Vokrii Compatibility Patch.esp

Formato **ESP**; provider **Vokrii - Minimalistic Perks of Skyrim**; overrides em headers **277**; winner de **197** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, MysticismMagic.esp, Vokrii - Minimalistic Perks of Skyrim.esp.

**Tipos nos headers:** MGEF=94, ENCH=64, SPEL=89, SCRL=53, FLST=1, PERK=18, AVIF=1.

**Campos selecionados diferentes do predecessor:** Effects (139), Conditions (39), EnchantmentAmount (34), Flags (31), BaseCost (27), Keywords (20), ChargeTime (15), VirtualMachineAdapter.Scripts (14), MagicSkill (13), HalfCostPerk (10), ResistValue (7), CastType (5).

- `3B4293:Vokrii - Minimalistic Perks of Skyrim.esp` / `VKR_Ill_020_Animage3_Perk`: Vokrii - Minimalistic Perks of Skyrim.esp → Mysticism - Vokrii Compatibility Patch.esp.
  - Effects: 2 vs Mysticism - Vokrii Compatibility Patch.esp 2 item(s), contents differ — only here: [0] Modification=Add, Value=20, EntryPoint=ModSpellMagnitude (+139 more field(s)); [1] Modification=Add, Value=20, EntryPoint=ModSpellMagnitude (+86 more field(s)); only in Mysticism - Vokrii Compatibility Patch.esp: [0] Modification=Add, Value=20, EntryPoint=ModSpellMagnitude (+214 more field(s)); [1] Modification=Add, Value=20, EntryPoint=ModSpellMagnitude (+161 more field(s))
- `019A7B:Vokrii - Minimalistic Perks of Skyrim.esp` / `VKR_Con_060_MYSTICISMDarkPower1_Perk`: Vokrii - Minimalistic Perks of Skyrim.esp → Mysticism - Vokrii Compatibility Patch.esp.
  - Effects: 1 vs Mysticism - Vokrii Compatibility Patch.esp 1 item(s), contents differ — only here: [0] Modification=Add, Value=15, EntryPoint=ModSpellMagnitude (+89 more field(s)); only in Mysticism - Vokrii Compatibility Patch.esp: [0] Modification=Add, Value=15, EntryPoint=ModSpellMagnitude (+89 more field(s))
- `02CB20:Vokrii - Minimalistic Perks of Skyrim.esp` / `VKR_Alt_070_ArcaneGuidance_Perk`: Vokrii - Minimalistic Perks of Skyrim.esp → Mysticism - Vokrii Compatibility Patch.esp.
  - Conditions: 2 vs Mysticism - Vokrii Compatibility Patch.esp 2 item(s), contents differ — only here: [1] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=02B56F:Vokrii - Minimalistic Perks of Skyrim.esp (+21 more field(s)); only in Mysticism - Vokrii Compatibility Patch.esp: [1] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=02B56F:Vokrii - Minimalistic Perks of Skyrim.esp (+21 more field(s))
  - Effects: 0 vs Mysticism - Vokrii Compatibility Patch.esp 1 item(s) — only in Mysticism - Vokrii Compatibility Patch.esp: [0] Modification=Add, Value=25, EntryPoint=ModSpellMagnitude (+36 more field(s))
- `3DCABA:Vokrii - Minimalistic Perks of Skyrim.esp` / `VKR_Con_060_MYSTICISMDarkPower2_Perk`: Vokrii - Minimalistic Perks of Skyrim.esp → Mysticism - Vokrii Compatibility Patch.esp.
  - Conditions: 2 vs Mysticism - Vokrii Compatibility Patch.esp 2 item(s), contents differ — only here: [1] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=019A7B:Vokrii - Minimalistic Perks of Skyrim.esp (+21 more field(s)); only in Mysticism - Vokrii Compatibility Patch.esp: [1] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=019A7B:Vokrii - Minimalistic Perks of Skyrim.esp (+21 more field(s))
  - Effects: 1 vs Mysticism - Vokrii Compatibility Patch.esp 1 item(s), contents differ — only here: [0] Modification=Add, Value=200, EntryPoint=ModSpellMagnitude (+61 more field(s)); only in Mysticism - Vokrii Compatibility Patch.esp: [0] Modification=Add, Value=250, EntryPoint=ModSpellMagnitude (+61 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 326. Vokrii - Thaumaturgy Compatibility Patch.esp

Formato **ESP**; provider **Vokrii - Minimalistic Perks of Skyrim**; overrides em headers **3**; winner de **3** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, Thaumaturgy.esp, Vokrii - Minimalistic Perks of Skyrim.esp.

**Tipos nos headers:** PERK=3.

**Campos selecionados diferentes do predecessor:** Effects (3).

- `058F80:Skyrim.esm` / `VKR_Enc_020_PowerStone1_Perk_WasFireEnchanter`: Vokrii - Minimalistic Perks of Skyrim.esp → Vokrii - Thaumaturgy Compatibility Patch.esp.
  - Effects: 4 vs Vokrii - Thaumaturgy Compatibility Patch.esp 4 item(s), contents differ — only here: [0] Modification=Multiply, Value=1.2, EntryPoint=ModSpellMagnitude (+179 more field(s)); [1] Modification=Multiply, Value=1.2, EntryPoint=ModSpellDuration (+204 more field(s)) (+2 more element(s)); only in Vokrii - Thaumaturgy Compatibility Patch.esp: [0] Modification=Multiply, Value=1.2, EntryPoint=ModSpellMagnitude (+204 more field(s)); [1] Modification=Multiply, Value=1.2, EntryPoint=ModSpellDuration (+229 more field(s)) (+2 more element(s))
- `214CBD:Vokrii - Minimalistic Perks of Skyrim.esp` / `VKR_Enc_020_PowerStone2_Perk`: Vokrii - Minimalistic Perks of Skyrim.esp → Vokrii - Thaumaturgy Compatibility Patch.esp.
  - Effects: 4 vs Vokrii - Thaumaturgy Compatibility Patch.esp 4 item(s), contents differ — only here: [0] Modification=Multiply, Value=1.35, EntryPoint=ModSpellMagnitude (+202 more field(s)); [1] Modification=Multiply, Value=1.35, EntryPoint=ModSpellDuration (+204 more field(s)) (+2 more element(s)); only in Vokrii - Thaumaturgy Compatibility Patch.esp: [0] Modification=Multiply, Value=1.35, EntryPoint=ModSpellMagnitude (+227 more field(s)); [1] Modification=Multiply, Value=1.35, EntryPoint=ModSpellDuration (+229 more field(s)) (+2 more element(s))
- `32B658:Vokrii - Minimalistic Perks of Skyrim.esp` / `VKR_Enc_020_PowerStone3_Perk`: Vokrii - Minimalistic Perks of Skyrim.esp → Vokrii - Thaumaturgy Compatibility Patch.esp.
  - Effects: 4 vs Vokrii - Thaumaturgy Compatibility Patch.esp 4 item(s), contents differ — only here: [0] Modification=Multiply, Value=1.5, EntryPoint=ModSpellMagnitude (+177 more field(s)); [1] Modification=Multiply, Value=1.5, EntryPoint=ModSpellDuration (+179 more field(s)) (+2 more element(s)); only in Vokrii - Thaumaturgy Compatibility Patch.esp: [0] Modification=Multiply, Value=1.5, EntryPoint=ModSpellMagnitude (+202 more field(s)); [1] Modification=Multiply, Value=1.5, EntryPoint=ModSpellDuration (+204 more field(s)) (+2 more element(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 327. Vokrii - Apply Spell Conditions Fix.esp

Formato **ESPFE**; provider **Vokrii - Scrambled Bugs Compatibility**; overrides em headers **184**; winner de **184** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, Vokrii - Minimalistic Perks of Skyrim.esp.

**Tipos nos headers:** SPEL=157, PERK=27.

**Campos selecionados diferentes do predecessor:** Effects (178).

- `03AF83:Skyrim.esm` / `VKR_Two_030_BasicGreatsword1_Perk_WasBladesman1`: Vokrii - Minimalistic Perks of Skyrim.esp → Vokrii - Apply Spell Conditions Fix.esp.
  - Effects: 6 vs Vokrii - Apply Spell Conditions Fix.esp 6 item(s), contents differ — only here: [0] Spell=4E9121:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+116 more field(s)); [1] Spell=4E9123:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+116 more field(s)); only in Vokrii - Apply Spell Conditions Fix.esp: [0] Spell=4E9121:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+264 more field(s)); [1] Spell=4E9123:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+264 more field(s))
- `03AF84:Skyrim.esm` / `VKR_Two_030_BasicWarhammer1_Perk_WasSkullcrusher1`: Vokrii - Minimalistic Perks of Skyrim.esp → Vokrii - Apply Spell Conditions Fix.esp.
  - Effects: 7 vs Vokrii - Apply Spell Conditions Fix.esp 7 item(s), contents differ — only here: [0] Spell=4E9118:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+116 more field(s)); [1] Spell=4E911A:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+116 more field(s)); only in Vokrii - Apply Spell Conditions Fix.esp: [0] Spell=4E9118:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+264 more field(s)); [1] Spell=4E911A:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+264 more field(s))
- `03FFFA:Skyrim.esm` / `VKR_One_030_BasicWarAxe1_Perk_WasHackAndSlash1`: Vokrii - Minimalistic Perks of Skyrim.esp → Vokrii - Apply Spell Conditions Fix.esp.
  - Effects: 8 vs Vokrii - Apply Spell Conditions Fix.esp 8 item(s), contents differ — only here: [0] Spell=41E7F5:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+116 more field(s)); [1] Spell=4E90F8:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+116 more field(s)); only in Vokrii - Apply Spell Conditions Fix.esp: [0] Spell=41E7F5:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+264 more field(s)); [1] Spell=4E90F8:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+264 more field(s))
- `058F64:Skyrim.esm` / `VKR_Arc_040_ImpalingShot_Perk_WasBullseye`: Vokrii - Minimalistic Perks of Skyrim.esp → Vokrii - Apply Spell Conditions Fix.esp.
  - Effects: 1 vs Vokrii - Apply Spell Conditions Fix.esp 1 item(s), contents differ — only here: [0] Spell=47EB7D:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+35 more field(s)); only in Vokrii - Apply Spell Conditions Fix.esp: [0] Spell=47EB7D:Vokrii - Minimalistic Perks of Skyrim.esp, EntryPoint=ApplyCombatHitSpell, PerkConditionTabCount=3 (+88 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 328. PilgrimVokriiMysticismPatch.esp

Formato **ESPFE**; provider **Pilgrim - A Religion Overhaul**; overrides em headers **16**; winner de **16** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Mysticism - Vokrii Compatibility Patch.esp, Vokrii - Minimalistic Perks of Skyrim.esp, MysticismMagic.esp, Pilgrim.esp.

**Tipos nos headers:** KYWD=4, MGEF=5, SPEL=4, PERK=5, AVIF=2.

**Campos selecionados diferentes do predecessor:** PerkTree (2), Effects (1), Keywords (1).

- `33A36D:Pilgrim.esp` / `MAG_PilgrimAurielPerk`: Pilgrim.esp → PilgrimVokriiMysticismPatch.esp.
  - Effects: 1 vs PilgrimVokriiMysticismPatch.esp 2 item(s) — only in PilgrimVokriiMysticismPatch.esp: [1] Modification=Multiply, Value=1.25, EntryPoint=ModSpellMagnitude (+36 more field(s))
- `33A36E:Pilgrim.esp` / `MAG_PilgrimAurielEffect`: Pilgrim.esp → PilgrimVokriiMysticismPatch.esp.
  - Keywords: 1 vs PilgrimVokriiMysticismPatch.esp 0 item(s) — only here: [0] 616107:Update.esm
- `000459:Skyrim.esm` / `AVConjuration`: Vokrii - Minimalistic Perks of Skyrim.esp → PilgrimVokriiMysticismPatch.esp.
  - PerkTree: 19 vs PilgrimVokriiMysticismPatch.esp 20 item(s) — only here: [1] Perk=0F2CA7:Skyrim.esm, FNAM=01000000, PerkGridX=3 (+10 more field(s)); only in PilgrimVokriiMysticismPatch.esp: [1] Perk=0F2CA7:Skyrim.esm, FNAM=01000000, PerkGridX=3 (+11 more field(s)); [19] Perk=000802:PilgrimVokriiMysticismPatch.esp, FNAM=01000000, PerkGridX=3 (+6 more field(s))
- `00045C:Skyrim.esm` / `AVRestoration`: Mysticism - Vokrii Compatibility Patch.esp → PilgrimVokriiMysticismPatch.esp.
  - PerkTree: 19 vs PilgrimVokriiMysticismPatch.esp 20 item(s) — only here: [1] Perk=0F2CAA:Skyrim.esm, FNAM=01000000, PerkGridX=5 (+11 more field(s)); [2] Perk=0153D1:Skyrim.esm, FNAM=01000000, PerkGridX=3 (+6 more field(s)) (+8 more element(s)); only in PilgrimVokriiMysticismPatch.esp: [1] Perk=0F2CAA:Skyrim.esm, FNAM=01000000, PerkGridX=5 (+12 more field(s)); [2] Perk=0153D1:Skyrim.esm, FNAM=01000000, PerkGridX=3 (+6 more field(s)) (+9 more element(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 329. Open Sesame - Dungeons Unlocked.esp

Formato **ESPFE**; provider **Open Sesame - Dungeons Unlocked**; overrides em headers **220**; winner de **64** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** NPC_=1, CELL=35, REFR=154, ACHR=31, WRLD=5.

**Campos selecionados diferentes do predecessor:** Base (3), PlayerSkills.Unused (1), PlayerSkills.Unused2 (1), Items (1), MajorFlags (1).

- `018D93:Dragonborn.esm` / `DLC2dunGyldenhulAdventurer`: Dragonborn.esm → Open Sesame - Dungeons Unlocked.esp.
  - PlayerSkills.Unused=0 (Open Sesame - Dungeons Unlocked.esp 16738)
  - PlayerSkills.Unused2=000100 (Open Sesame - Dungeons Unlocked.esp 7284FD)
  - Items: same 5 item(s), ORDER DIFFERS from Open Sesame - Dungeons Unlocked.esp
- `0943BA:Skyrim.esm` / `None`: The Restless Dead.esp → Open Sesame - Dungeons Unlocked.esp.
  - Base=80B98F:The Restless Dead.esp (Open Sesame - Dungeons Unlocked.esp 06F83A:Skyrim.esm)
- `094466:Skyrim.esm` / `None`: The Restless Dead.esp → Open Sesame - Dungeons Unlocked.esp.
  - Base=810A9B:The Restless Dead.esp (Open Sesame - Dungeons Unlocked.esp 04A59A:Skyrim.esm)
- `09447A:Skyrim.esm` / `None`: The Restless Dead.esp → Open Sesame - Dungeons Unlocked.esp.
  - Base=810A99:The Restless Dead.esp (Open Sesame - Dungeons Unlocked.esp 0BF7B3:Skyrim.esm)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 330. Humanoid Dragon Priest.esp

Formato **ESPFE**; provider **Humanoid Dragon Priests**; overrides em headers **44**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dragonborn.esm.

**Tipos nos headers:** RACE=1, MGEF=1, SPEL=1, ARMO=13, NPC_=22, RFCT=1, ARMA=24, OTFT=13, ARTO=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 332. The Great City of Winterhold v4.esp

Formato **ESP**; provider **The Great City Of Winterhold SSE Edition**; overrides em headers **2127**; winner de **60** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Resources - The Great Cities.esp.

**Tipos nos headers:** FACT=14, ACTI=1, BOOK=1, CONT=3, DOOR=1, STAT=114, NPC_=19, KEYM=6, NAVI=1, CELL=57, REFR=9829, ACHR=72, NAVM=78, WRLD=1, LAND=30, DIAL=45, INFO=97, QUST=10, PACK=47, FLST=2, LCTN=17, MESG=1, SMQN=2, DLBR=12, DLVW=5, RELA=12, SCEN=7, OTFT=1.

**Campos selecionados diferentes do predecessor:** Location (3), MajorFlags (2).

- `0841D4:Skyrim.esm` / `None`: Skyrim.esm → The Great City of Winterhold v4.esp.
  - MajorFlags=Persistent (The Great City of Winterhold v4.esp Persistent, InitiallyDisabled)
- `0841D5:Skyrim.esm` / `None`: Skyrim.esm → The Great City of Winterhold v4.esp.
  - MajorFlags=0 (The Great City of Winterhold v4.esp InitiallyDisabled)
- `008E44:Skyrim.esm` / `WinterholdDocksExterior03`: unofficial skyrim special edition patch.esp → The Great City of Winterhold v4.esp.
  - Location: ABSENT here (The Great City of Winterhold v4.esp has 4403ED:The Great City of Winterhold v4.esp)
- `008E45:Skyrim.esm` / `WinterholdDocksExterior02`: Skyrim.esm → The Great City of Winterhold v4.esp.
  - Location: ABSENT here (The Great City of Winterhold v4.esp has 4403ED:The Great City of Winterhold v4.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 333. JK's Skyrim - Lightened - Great City of Winterhold.esp

Formato **ESPFE**; provider **JK's Skyrim AIO - Reduced Cut**; overrides em headers **121**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, JKs Skyrim.esp, JK's Skyrim - Lightened.esp, Resources - The Great Cities.esp, The Great City of Winterhold v4.esp.

**Tipos nos headers:** WRLD=1, CELL=9, REFR=111.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 334. TGC Winterhold - Embers XD patch.esp

Formato **ESPFE**; provider **The Great City of Winterhold Patch Collection**; overrides em headers **25**; winner de **4** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Embers XD.esp, The Great City of Winterhold v4.esp.

**Tipos nos headers:** CELL=4, REFR=21.

**Campos selecionados diferentes do predecessor:** Location (1).

- `2C4200:The Great City of Winterhold v4.esp` / `WinterholdWarehouseTGCoWH`: The Great City of Winterhold v4.esp → TGC Winterhold - Embers XD patch.esp.
  - Location=4403EE:The Great City of Winterhold v4.esp (TGC Winterhold - Embers XD patch.esp 459700:The Great City of Winterhold v4.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 335. TGC Winterhold - Missives patch.esp

Formato **ESPFE**; provider **The Great City of Winterhold Patch Collection**; overrides em headers **7**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Missives.esp, The Great City of Winterhold v4.esp.

**Tipos nos headers:** WRLD=1, CELL=2, REFR=4.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 336. 1AncientImperial.esp

Formato **ESPFE**; provider **Ancient Imperial Armor SE**; overrides em headers **20**; winner de **20** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** ARMO=9, STAT=1, WEAP=1, COBJ=18, CELL=20, REFR=38, ARMA=11.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 338. Man-at-arms Set_Alt Progression.esp

Formato **ESPFE**; provider **Man-at-Arms Set**; overrides em headers **48**; winner de **32** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Man-at-arms Set.esp.

**Tipos nos headers:** ARMO=16, COBJ=32.

**Campos selecionados diferentes do predecessor:** Items (30), Conditions (16).

- `000007:Man-at-arms Set.esp` / `RecipeArmorManatarms_Boots`: Man-at-arms Set.esp → Man-at-arms Set_Alt Progression.esp.
  - Conditions: 1 vs Man-at-arms Set_Alt Progression.esp 0 item(s) — only here: [0] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=0CB40D:Skyrim.esm (+21 more field(s))
- `000008:Man-at-arms Set.esp` / `RecipeArmorManatarms_Gauntlets`: Man-at-arms Set.esp → Man-at-arms Set_Alt Progression.esp.
  - Conditions: 1 vs Man-at-arms Set_Alt Progression.esp 0 item(s) — only here: [0] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=0CB40D:Skyrim.esm (+21 more field(s))
  - Items: 3 vs Man-at-arms Set_Alt Progression.esp 2 item(s) — only here: [2] Item=[ContainerItem] Item=0DB5D2:Skyrim.esm, Item.Item=0DB5D2:Skyrim.esm, Item.Count=2 (+1 more field(s))
- `000009:Man-at-arms Set.esp` / `RecipeArmorManatarms_Helmet`: Man-at-arms Set.esp → Man-at-arms Set_Alt Progression.esp.
  - Conditions: 1 vs Man-at-arms Set_Alt Progression.esp 0 item(s) — only here: [0] ComparisonValue=1, Data=[HasPerkConditionData] Reference=Null, Data.Perk=0CB40D:Skyrim.esm (+21 more field(s))
  - Items: 2 vs Man-at-arms Set_Alt Progression.esp 2 item(s), contents differ — only here: [0] Item=[ContainerItem] Item=05ACE4:Skyrim.esm, Item.Item=05ACE4:Skyrim.esm, Item.Count=1 (+1 more field(s)); [1] Item=[ContainerItem] Item=05ACE5:Skyrim.esm, Item.Item=05ACE5:Skyrim.esm, Item.Count=1 (+1 more field(s)); only in Man-at-arms Set_Alt Progression.esp: [0] Item=[ContainerItem] Item=05ACE4:Skyrim.esm, Item.Item=05ACE4:Skyrim.esm, Item.Count=3 (+1 more field(s)); [1] Item=[ContainerItem] Item=0800E4:Skyrim.esm, Item.Item=0800E4:Skyrim.esm, Item.Count=2 (+1 more field(s))
- `00000A:Man-at-arms Set.esp` / `TemperArmorManatarms_Helmet`: Man-at-arms Set.esp → Man-at-arms Set_Alt Progression.esp.
  - Items: 1 vs Man-at-arms Set_Alt Progression.esp 1 item(s), contents differ — only here: [0] Item=[ContainerItem] Item=05ACE5:Skyrim.esm, Item.Item=05ACE5:Skyrim.esm, Item.Count=1 (+1 more field(s)); only in Man-at-arms Set_Alt Progression.esp: [0] Item=[ContainerItem] Item=05ACE4:Skyrim.esm, Item.Item=05ACE4:Skyrim.esm, Item.Count=1 (+1 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 339. Armors of the Velothi PtI - My version by Xtudo.esp

Formato **ESPFE**; provider **Armors of the Velothi PtI - My version by Xtudo SE - 1K**; overrides em headers **2**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dragonborn.esm.

**Tipos nos headers:** ARMO=15, NPC_=1, COBJ=30, WRLD=1, CELL=1, ACHR=1, ARMA=21, OTFT=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 341. FurSet by keung.esp

Formato **ESP**; provider **FurArmorSetSE(FrostFall Aware)**; overrides em headers **13**; winner de **13** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm.

**Tipos nos headers:** KYWD=13, TXST=6, ENCH=51, ARMO=225, COBJ=264, ARMA=64.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 342. FurSet Survival Patch.esp

Formato **ESPFE**; provider **FurArmorSetSE Survival Mode Patch**; overrides em headers **225**; winner de **169** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, FurSet by keung.esp.

**Tipos nos headers:** ARMO=225.

**Campos selecionados diferentes do predecessor:** Keywords (169).

- `011B4D:FurSet by keung.esp` / `A_Furset_Poncho_SabreCatLeopard`: FurSet by keung.esp → FurSet Survival Patch.esp.
  - Keywords: 6 vs FurSet Survival Patch.esp 8 item(s) — only in FurSet Survival Patch.esp: [4] 002ED9:Update.esm; [5] 0A8657:Skyrim.esm
- `011B54:FurSet by keung.esp` / `A_Furset_Poncho_SabreCatTiger`: FurSet by keung.esp → FurSet Survival Patch.esp.
  - Keywords: 6 vs FurSet Survival Patch.esp 8 item(s) — only in FurSet Survival Patch.esp: [3] 0A8657:Skyrim.esm; [4] 002ED9:Update.esm
- `011B5A:FurSet by keung.esp` / `A_Furset_Poncho_SabreCatSnow`: FurSet by keung.esp → FurSet Survival Patch.esp.
  - Keywords: 6 vs FurSet Survival Patch.esp 8 item(s) — only in FurSet Survival Patch.esp: [3] 002ED9:Update.esm; [4] 0A8657:Skyrim.esm
- `011B5B:FurSet by keung.esp` / `A_FurSet_Poncho_Wolf`: FurSet by keung.esp → FurSet Survival Patch.esp.
  - Keywords: 6 vs FurSet Survival Patch.esp 8 item(s) — only in FurSet Survival Patch.esp: [3] 002ED9:Update.esm; [4] 0A8657:Skyrim.esm

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 346. WS-JK's The Ragged Flagon.esp

Formato **ESPFE**; provider **Window Shadows - Patches for JK's Interiors**; overrides em headers **4**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Shadows.esp, JK's The Ragged Flagon.esp.

**Tipos nos headers:** CELL=1, REFR=3.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 347. WS-JK's Sky Haven Temple.esp

Formato **ESPFE**; provider **Window Shadows - Patches for JK's Interiors**; overrides em headers **31**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Shadows.esp, JK's Sky Haven Temple.esp.

**Tipos nos headers:** CELL=1, REFR=30.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 348. WS-JK's Jorrvaskr.esp

Formato **ESPFE**; provider **Window Shadows - Patches for JK's Interiors**; overrides em headers **50**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Shadows.esp, JK's Jorrvaskr.esp.

**Tipos nos headers:** CELL=2, REFR=51.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 349. WS-JK's College of Winterhold Patch.esp

Formato **ESPFE**; provider **Window Shadows - Patches for JK's Interiors**; overrides em headers **85**; winner de **5** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Unofficial Skyrim Special Edition Patch.esp, Shadows.esp, JK's College of Winterhold.esp.

**Tipos nos headers:** CELL=5, REFR=80.

**Campos selecionados diferentes do predecessor:** Flags (1).

- `0CAB91:Skyrim.esm` / `WinterholdCollegeHallofAttainment`: JKs College of Winterhold - USSEP patch.esp → WS-JK's College of Winterhold Patch.esp.
  - Flags=IsInteriorCell, HasWater, ShowSky (WS-JK's College of Winterhold Patch.esp IsInteriorCell, HasWater)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 350. WS-JK's High Hrothgar.esp

Formato **ESPFE**; provider **Window Shadows - Patches for JK's Interiors**; overrides em headers **75**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, Shadows.esp, JK's High Hrothgar.esp.

**Tipos nos headers:** CELL=1, REFR=76.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 351. WS-JK's Palace of the Kings.esp

Formato **ESPFE**; provider **Window Shadows - Patches for JK's Interiors**; overrides em headers **69**; winner de **4** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Unofficial Skyrim Special Edition Patch.esp, Shadows.esp, JK's Palace of the Kings.esp.

**Tipos nos headers:** CELL=4, REFR=90.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 352. WS-JK's The Bards College.esp

Formato **ESPFE**; provider **Window Shadows - Patches for JK's Interiors**; overrides em headers **78**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Shadows.esp, JK's The Bards College.esp.

**Tipos nos headers:** CELL=1, REFR=80.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 353. Fortified Morthal.esp

Formato **ESPFE**; provider **Fortified Morthal - Patch Collection**; overrides em headers **415**; winner de **8** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** ACTI=1, DOOR=10, STAT=103, MSTT=2, TREE=1, NAVI=1, CELL=19, REFR=1629, WRLD=1, NAVM=42, ACHR=14, LAND=7, LCTN=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 354. COTN - Morthal.esp

Formato **ESPFE**; provider **Cities of the North - Morthal**; overrides em headers **401**; winner de **8** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, unofficial skyrim special edition patch.esp, Fortified Morthal.esp.

**Tipos nos headers:** STAT=2, CELL=4, REFR=1101, ACHR=6, NAVM=1, WRLD=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 355. Fortified Morthal - Fishing Patch.esp

Formato **ESPFE**; provider **Fortified Morthal - Patch Collection**; overrides em headers **4**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ccbgssse001-fish.esm, Fortified Morthal.esp.

**Tipos nos headers:** WRLD=1, CELL=1, REFR=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 356. Fortified Morthal - Jk's Skyrim Patch.esp

Formato **ESPFE**; provider **Fortified Morthal - Patch Collection**; overrides em headers **159**; winner de **4** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, JKs Skyrim.esp, Fortified Morthal.esp.

**Tipos nos headers:** STAT=21, NAVI=1, WRLD=1, CELL=12, REFR=154, NAVM=25.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 357. COTN - Falkreath.esp

Formato **ESP**; provider **Cities of the North - Falkreath**; overrides em headers **2559**; winner de **22** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ccBGSSSE001-Fish.esm, ccQDRSSE001-SurvivalMode.esl, ccbgssse037-curios.esl, ccBGSSSE025-AdvDSGS.esm, Unofficial Skyrim Special Edition Patch.esp.

**Tipos nos headers:** FACT=2, ACTI=1, STAT=84, NPC_=2, KEYM=2, NAVI=1, CELL=42, REFR=5520, ACHR=31, NAVM=62, WRLD=1, LAND=22, PACK=4, FLST=2, LCTN=11.

**Campos selecionados diferentes do predecessor:** MajorFlags (4).

- `04E5EA:Skyrim.esm` / `ThadgeirRef`: unofficial skyrim special edition patch.esp → COTN - Falkreath.esp.
  - MajorFlags=0 (COTN - Falkreath.esp Persistent)
- `072667:Skyrim.esm` / `DelacourtREF`: unofficial skyrim special edition patch.esp → COTN - Falkreath.esp.
  - MajorFlags=0 (COTN - Falkreath.esp Persistent)
- `03A19F:Skyrim.esm` / `LodRef`: Skyrim.esm → COTN - Falkreath.esp.
  - MajorFlags=0 (COTN - Falkreath.esp Persistent)
- `1066B0:Skyrim.esm` / `None`: unofficial skyrim special edition patch.esp → COTN - Falkreath.esp.
  - MajorFlags=0 (COTN - Falkreath.esp Persistent)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 358. COTN Falkreath - CC - Fishing Patch.esp

Formato **ESPFE**; provider **Cities of the North - Falkreath Patch Collection**; overrides em headers **6**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ccBGSSSE001-Fish.esm, Unofficial Skyrim Special Edition Patch.esp, COTN - Falkreath.esp.

**Tipos nos headers:** CELL=2, REFR=3, WRLD=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 359. COTN Falkreath - Embers XD Patch.esp

Formato **ESPFE**; provider **Cities of the North - Falkreath Patch Collection**; overrides em headers **68**; winner de **12** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Unofficial Skyrim Special Edition Patch.esp, COTN - Falkreath.esp, Embers XD.esp.

**Tipos nos headers:** CELL=20, REFR=51, WRLD=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 360. COTN Falkreath Addons.esp

Formato **ESPFE**; provider **Cities of the North - Falkreath Patch Collection**; overrides em headers **6**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Unofficial Skyrim Special Edition Patch.esp, COTN - Falkreath.esp.

**Tipos nos headers:** TREE=1, WRLD=1, CELL=4, REFR=67.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 361. COTN Falkreath - Missives patch.esp

Formato **ESPFE**; provider **Cities of the North - Falkreath Patch Collection**; overrides em headers **7**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Missives.esp, COTN - Falkreath.esp.

**Tipos nos headers:** WRLD=1, CELL=2, REFR=5.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 362. COTN Falkreath - Grass Mods Patch.esp

Formato **ESPFE**; provider **Cities of the North - Falkreath Patch Collection**; overrides em headers **37**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, COTN - Falkreath.esp.

**Tipos nos headers:** WRLD=1, CELL=18, LAND=18.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 363. COTN Falkreath - JKs Skyrim Patch.esp

Formato **ESPFE**; provider **Cities of the North - Falkreath Patch Collection**; overrides em headers **740**; winner de **3** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, JKs Skyrim.esp, COTN - Falkreath.esp.

**Tipos nos headers:** TXST=1, STAT=3, NAVI=1, WRLD=1, CELL=8, REFR=757, ACHR=3, NAVM=10, LCTN=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 365. Unique Farmhouse Architecture - Dawnstar - Better Dynamic Snow Patch.esp

Formato **ESPFE**; provider **Unique Farmhouse Architecture - Dawnstar (Base Object Swapper)**; overrides em headers **12**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Better Dynamic Snow SE - DisableRefs.esm, Better Dynamic Snow SE.esp, Unique Farmhouse Architecture - Dawnstar.esp.

**Tipos nos headers:** STAT=12.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 366. Interesting Locations.esp

Formato **ESP**; provider **Interesting Locations**; overrides em headers **434**; winner de **85** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** ARMO=1, BOOK=4, CONT=67, DOOR=1, FLOR=6, WEAP=1, NPC_=64, KEYM=7, LVLI=1, NAVI=1, WRLD=3, CELL=145, REFR=5453, ACHR=140, LAND=30, NAVM=56.

**Campos selecionados diferentes do predecessor:** Location (3), MajorFlags (2), Base (1).

- `1060D9:Skyrim.esm` / `None`: Skyrim.esm → Interesting Locations.esp.
  - MajorFlags=0 (Interesting Locations.esp Persistent, InitiallyDisabled)
- `1060DA:Skyrim.esm` / `None`: Skyrim.esm → Interesting Locations.esp.
  - MajorFlags=0 (Interesting Locations.esp Persistent, InitiallyDisabled)
- `09F361:Skyrim.esm` / `None`: Skyrim.esm → Interesting Locations.esp.
  - Base=023ABE:Skyrim.esm (Interesting Locations.esp 1F169B:Interesting Locations.esp)
- `0095B4:Skyrim.esm` / `None`: HammetDungeon02.esm → Interesting Locations.esp.
  - Location=078EFC:HammetDungeon02.esm (Interesting Locations.esp has Location ABSENT)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 367. Interesting Locations - USSEP Patch.esp

Formato **ESPFE**; provider **Interesting Locations - Patch Collection**; overrides em headers **3**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ccbgssse001-fish.esm, ccqdrsse001-survivalmode.esl, ccbgssse037-curios.esl, ccbgssse025-advdsgs.esm, _ResourcePack.esl, unofficial skyrim special edition patch.esp, Interesting Locations.esp.

**Tipos nos headers:** WRLD=1, CELL=1, REFR=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 368. Interesting Locations - Whiterun Has Walls Patch.esp

Formato **ESPFE**; provider **Interesting Locations - Patch Collection**; overrides em headers **96**; winner de **5** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Whiterun Has Walls.esm, Interesting Locations.esp.

**Tipos nos headers:** WRLD=1, CELL=5, REFR=90.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 369. Interesting Locations - Jk's Skyrim Patch.esp

Formato **ESPFE**; provider **Interesting Locations - Patch Collection**; overrides em headers **106**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, JKs Skyrim.esp, Interesting Locations.esp.

**Tipos nos headers:** WRLD=1, CELL=5, REFR=99, ACHR=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 370. Northern Roads.esp

Formato **ESP**; provider **Northern Roads**; overrides em headers **12322**; winner de **912** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm.

**Tipos nos headers:** TXST=29, LTEX=22, STAT=124, MSTT=10, NAVI=1, WRLD=3, CELL=1260, REFR=13235, ACHR=8, LAND=1249, NAVM=125.

**Campos selecionados diferentes do predecessor:** Location (11), VirtualMachineAdapter.Scripts (1), MajorFlags (1).

- `01BA06:Skyrim.esm` / `None`: unofficial skyrim special edition patch.esp → Northern Roads.esp.
  - VirtualMachineAdapter.Scripts: 1 vs Northern Roads.esp 1 item(s), contents differ — only here: [0] Name=TelravMasterSCRIPT, Flags=Local, Properties=[list: 13 item(s)] (+78 more field(s)); only in Northern Roads.esp: [0] Name=TelravMasterSCRIPT, Flags=Local, Properties=[list: 13 item(s)] (+78 more field(s))
- `08FC08:Skyrim.esm` / `None`: Amber Guard.esp → Northern Roads.esp.
  - MajorFlags=StartsDead, Persistent (Northern Roads.esp StartsDead)
- `008FCC:Skyrim.esm` / `None`: Dunpar Wall.esp → Northern Roads.esp.
  - Location=0095CF:Dunpar Wall.esp (Northern Roads.esp has Location ABSENT)
- `009093:Skyrim.esm` / `None`: HammetDungeon02.esm → Northern Roads.esp.
  - Location=072962:HammetDungeon02.esm (Northern Roads.esp has Location ABSENT)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 371. Northern Roads - Grass Patch.esp

Formato **ESPFE**; provider **Northern Roads**; overrides em headers **29**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Northern Roads.esp.

**Tipos nos headers:** LTEX=29.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 372. Northern Roads - USSEP Additions.esp

Formato **ESPFE**; provider **Northern Roads - Patches Compendium**; overrides em headers **32**; winner de **11** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Unofficial Skyrim Special Edition Patch.esp, Northern Roads.esp.

**Tipos nos headers:** WRLD=2, CELL=12, REFR=18.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 373. Northern Roads - Happy Little Trees patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **40**; winner de **9** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Northern Roads.esp, HappyLittleTrees.esp.

**Tipos nos headers:** WRLD=1, CELL=17, REFR=22.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 374. Northern Roads - Rocks Patch.esp

Formato **ESPFE**; provider **Northern Roads - Patches Compendium**; overrides em headers **488**; winner de **130** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Unofficial Skyrim Special Edition Patch.esp, Northern Roads.esp.

**Tipos nos headers:** WRLD=1, CELL=156, REFR=331.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 375. Northern Roads - CC Fishing patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **29**; winner de **9** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dragonborn.esm, ccBGSSSE001-Fish.esm, Northern Roads.esp.

**Tipos nos headers:** WRLD=1, CELL=12, REFR=16.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 376. Northern Roads - CC Saints and Seducers patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **3**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, ccBGSSSE025-AdvDSGS.esm, Northern Roads.esp.

**Tipos nos headers:** WRLD=1, CELL=1, REFR=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 377. Northern Roads - JKs Sky Haven Temple patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **11**; winner de **5** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Northern Roads.esp, JK's Sky Haven Temple.esp.

**Tipos nos headers:** WRLD=1, CELL=5, LAND=5.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 378. Northern Roads - Pilgrim Shrines Fit for the Divine patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **18**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Northern Roads.esp, Pilgrim.esp, Pilgrim - Shrines Fit for the Divine.esp.

**Tipos nos headers:** WRLD=1, CELL=6, LAND=6, REFR=5.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 379. Northern Roads - Floating Plants Fix.esp

Formato **ESPFE**; provider **Northern Roads - Patches Compendium**; overrides em headers **7**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Northern Roads.esp.

**Tipos nos headers:** WRLD=1, CELL=2, REFR=4.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 380. Northern Roads - JKs Skyrim patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **335**; winner de **38** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, JKs Skyrim.esp, Northern Roads.esp.

**Tipos nos headers:** NAVI=1, WRLD=1, CELL=53, REFR=225, LAND=41, NAVM=16, ACHR=1.

**Campos selecionados diferentes do predecessor:** Location (1).

- `009349:Skyrim.esm` / `DragonBridgeExterior03`: Northern Roads.esp → Northern Roads - JKs Skyrim patch.esp.
  - Location=018A46:Skyrim.esm (Northern Roads - JKs Skyrim patch.esp 020006:Skyrim.esm)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 381. Northern Roads - Grand Solitude patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **86**; winner de **13** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Grand Solitude - The Walls of High King Erling.esp, Northern Roads.esp.

**Tipos nos headers:** TXST=1, LTEX=1, STAT=1, WRLD=1, CELL=13, LAND=9, REFR=66.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 382. Northern Roads - Stonehills patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **27**; winner de **10** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Northern Roads.esp, Stonehills.esp.

**Tipos nos headers:** WRLD=1, CELL=10, LAND=10, REFR=6.

**Campos selecionados diferentes do predecessor:** Location (1).

- `0093B8:Skyrim.esm` / `StonehillsBathhouseExterior`: Northern Roads.esp → Northern Roads - Stonehills patch.esp.
  - Location: ABSENT here (Northern Roads - Stonehills patch.esp has 018A52:Skyrim.esm)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 383. Northern Roads - Amber Guard patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **97**; winner de **11** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Amber Guard.esp, Northern Roads.esp.

**Tipos nos headers:** STAT=11, NAVI=1, WRLD=1, CELL=11, LAND=11, REFR=71, NAVM=2.

**Campos selecionados diferentes do predecessor:** Location (4).

- `009476:Skyrim.esm` / `AmberGuardExterior05`: Northern Roads.esp → Northern Roads - Amber Guard patch.esp.
  - Location: ABSENT here (Northern Roads - Amber Guard patch.esp has 003788:Amber Guard.esp)
- `009477:Skyrim.esm` / `AmberGuardExterior01`: Northern Roads.esp → Northern Roads - Amber Guard patch.esp.
  - Location: ABSENT here (Northern Roads - Amber Guard patch.esp has 003788:Amber Guard.esp)
- `009497:Skyrim.esm` / `AmberGuardExterior03`: Northern Roads.esp → Northern Roads - Amber Guard patch.esp.
  - Location: ABSENT here (Northern Roads - Amber Guard patch.esp has 003788:Amber Guard.esp)
- `009498:Skyrim.esm` / `AmberGuardExterior02`: Northern Roads.esp → Northern Roads - Amber Guard patch.esp.
  - Location: ABSENT here (Northern Roads - Amber Guard patch.esp has 003788:Amber Guard.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 384. Northern Roads - Amol Village patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **67**; winner de **10** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Amol Village.esp, Northern Roads.esp.

**Tipos nos headers:** STAT=3, NAVI=1, WRLD=1, CELL=8, LAND=8, NAVM=5, REFR=39, ACHR=2.

**Campos selecionados diferentes do predecessor:** Location (3).

- `009629:Skyrim.esm` / `AmolVillageExterior02`: Northern Roads.esp → Northern Roads - Amol Village patch.esp.
  - Location: ABSENT here (Northern Roads - Amol Village patch.esp has 00AD91:Amol Village.esp)
- `009648:Skyrim.esm` / `AmolVillageExterior01`: Northern Roads.esp → Northern Roads - Amol Village patch.esp.
  - Location: ABSENT here (Northern Roads - Amol Village patch.esp has 00AD91:Amol Village.esp)
- `009649:Skyrim.esm` / `AmolVillageExterior03`: Northern Roads.esp → Northern Roads - Amol Village patch.esp.
  - Location: ABSENT here (Northern Roads - Amol Village patch.esp has 00AD91:Amol Village.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 385. Northern Roads - Another Oakwood patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **73**; winner de **14** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, AnotherOakwood.esp, Northern Roads.esp.

**Tipos nos headers:** WRLD=1, CELL=15, LAND=15, REFR=42.

**Campos selecionados diferentes do predecessor:** Location (4).

- `009BD8:Skyrim.esm` / `OakwoodExterior02`: Northern Roads - Rocks Patch.esp → Northern Roads - Another Oakwood patch.esp.
  - Location: ABSENT here (Northern Roads - Another Oakwood patch.esp has 001A9C:AnotherOakwood.esp)
- `009BD9:Skyrim.esm` / `OakwoodExterior01`: Northern Roads.esp → Northern Roads - Another Oakwood patch.esp.
  - Location: ABSENT here (Northern Roads - Another Oakwood patch.esp has 001A9C:AnotherOakwood.esp)
- `009BB6:Skyrim.esm` / `OakwoodExterior04`: Northern Roads - Rocks Patch.esp → Northern Roads - Another Oakwood patch.esp.
  - Location: ABSENT here (Northern Roads - Another Oakwood patch.esp has 001A9C:AnotherOakwood.esp)
- `009BB7:Skyrim.esm` / `OakwoodExterior03`: Northern Roads - Rocks Patch.esp → Northern Roads - Another Oakwood patch.esp.
  - Location: ABSENT here (Northern Roads - Another Oakwood patch.esp has 001A9C:AnotherOakwood.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 386. Northern Roads - Dunpar Wall patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **17**; winner de **8** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Northern Roads.esp, Dunpar Wall.esp.

**Tipos nos headers:** WRLD=1, CELL=8, LAND=8.

**Campos selecionados diferentes do predecessor:** Location (4).

- `008F8E:Skyrim.esm` / `DunparWallExterior02`: Northern Roads.esp → Northern Roads - Dunpar Wall patch.esp.
  - Location: ABSENT here (Northern Roads - Dunpar Wall patch.esp has 0095CF:Dunpar Wall.esp)
- `008FAD:Skyrim.esm` / `DunparWallExterior01`: Northern Roads.esp → Northern Roads - Dunpar Wall patch.esp.
  - Location: ABSENT here (Northern Roads - Dunpar Wall patch.esp has 0095CF:Dunpar Wall.esp)
- `008F8D:Skyrim.esm` / `DunparWallExterior04`: Northern Roads.esp → Northern Roads - Dunpar Wall patch.esp.
  - Location: ABSENT here (Northern Roads - Dunpar Wall patch.esp has 0095CF:Dunpar Wall.esp)
- `008FAC:Skyrim.esm` / `DunparWallExterior03`: Northern Roads.esp → Northern Roads - Dunpar Wall patch.esp.
  - Location: ABSENT here (Northern Roads - Dunpar Wall patch.esp has 0095CF:Dunpar Wall.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 387. Northern Roads - Granite Hill Village patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **25**; winner de **3** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Granite Hill.esp, Northern Roads.esp.

**Tipos nos headers:** WRLD=1, CELL=9, LAND=9, REFR=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 388. Northern Roads - Granitehall patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **21**; winner de **7** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Northern Roads.esp, Granitehall.esp.

**Tipos nos headers:** WRLD=1, CELL=7, LAND=7, REFR=6.

**Campos selecionados diferentes do predecessor:** Location (2).

- `009523:Skyrim.esm` / `GranitehallExterior01`: Northern Roads.esp → Northern Roads - Granitehall patch.esp.
  - Location: ABSENT here (Northern Roads - Granitehall patch.esp has 00085A:Granitehall.esp)
- `009544:Skyrim.esm` / `GranitehallExterior04`: Northern Roads.esp → Northern Roads - Granitehall patch.esp.
  - Location: ABSENT here (Northern Roads - Granitehall patch.esp has 00085A:Granitehall.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 389. Northern Roads - Greymoor patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **81**; winner de **7** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Northern Roads.esp, Greymoor.esp.

**Tipos nos headers:** NAVI=1, WRLD=1, CELL=8, REFR=62, LAND=7, NAVM=2.

**Campos selecionados diferentes do predecessor:** Location (3).

- `0099A5:Skyrim.esm` / `GreymoorVillageExterior02`: Northern Roads.esp → Northern Roads - Greymoor patch.esp.
  - Location: ABSENT here (Northern Roads - Greymoor patch.esp has 005A76:Greymoor.esp)
- `0099A6:Skyrim.esm` / `GreymoorVillageExterior04`: Northern Scenery _Tundra.esp → Northern Roads - Greymoor patch.esp.
  - Location: ABSENT here (Northern Roads - Greymoor patch.esp has 005A76:Greymoor.esp)
- `0099C6:Skyrim.esm` / `GreymoorVillageExterior01`: Northern Roads.esp → Northern Roads - Greymoor patch.esp.
  - Location: ABSENT here (Northern Roads - Greymoor patch.esp has 005A76:Greymoor.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 390. Northern Roads - Lainalten patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **49**; winner de **11** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Lainalten.esp, Northern Roads.esp.

**Tipos nos headers:** NAVI=1, WRLD=1, CELL=12, NAVM=8, LAND=10, REFR=17.

**Campos selecionados diferentes do predecessor:** Location (2).

- `00946F:Skyrim.esm` / `LainaltenExterior02`: Northern Roads.esp → Northern Roads - Lainalten patch.esp.
  - Location: ABSENT here (Northern Roads - Lainalten patch.esp has 0095D2:Lainalten.esp)
- `00948F:Skyrim.esm` / `LainaltenExterior01`: Northern Roads.esp → Northern Roads - Lainalten patch.esp.
  - Location: ABSENT here (Northern Roads - Lainalten patch.esp has 0095D2:Lainalten.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 391. Northern Roads - Neugrad Patch.esp

Formato **ESPFE**; provider **Northern Roads - Patches Compendium**; overrides em headers **23**; winner de **8** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Neugrad.esp, Northern Roads.esp.

**Tipos nos headers:** CELL=8, WRLD=1, LAND=6, REFR=8.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 392. Northern Roads - New Weynon patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **43**; winner de **8** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Northern Roads.esp, New Weynon.esp.

**Tipos nos headers:** STAT=5, WRLD=1, CELL=8, LAND=8, REFR=26.

**Campos selecionados diferentes do predecessor:** Location (1).

- `00911F:Skyrim.esm` / `LoreiusFarmExterior05`: Northern Roads.esp → Northern Roads - New Weynon patch.esp.
  - Location: ABSENT here (Northern Roads - New Weynon patch.esp has 018E3B:Skyrim.esm)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 393. Northern Roads - Reich Corigate patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **26**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Northern Roads.esp, Reich Corigate.esp.

**Tipos nos headers:** WRLD=1, CELL=6, LAND=6, REFR=13.

**Campos selecionados diferentes do predecessor:** Location (2).

- `009854:Skyrim.esm` / `ReichCorigateExterior03`: Northern Roads.esp → Northern Roads - Reich Corigate patch.esp.
  - Location: ABSENT here (Northern Roads - Reich Corigate patch.esp has 005863:Reich Corigate.esp)
- `009872:Skyrim.esm` / `ReichCorigateExterior01`: Northern Roads.esp → Northern Roads - Reich Corigate patch.esp.
  - Location: ABSENT here (Northern Roads - Reich Corigate patch.esp has 005863:Reich Corigate.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 394. Northern Roads - Nordic Ruins of Skyrim patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **3**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Nordic Ruins of Skyrim.esp, Northern Roads.esp.

**Tipos nos headers:** WRLD=1, CELL=1, LAND=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 395. Northern Roads - Vernim Wood patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **62**; winner de **4** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Vernim Wood.esp, Northern Roads.esp.

**Tipos nos headers:** NAVI=1, WRLD=1, CELL=10, REFR=38, LAND=8, NAVM=4.

**Campos selecionados diferentes do predecessor:** Location (2).

- `009717:Skyrim.esm` / `VernimWoodExterior03`: Northern Roads.esp → Northern Roads - Vernim Wood patch.esp.
  - Location: ABSENT here (Northern Roads - Vernim Wood patch.esp has 0294E4:Vernim Wood.esp)
- `009718:Skyrim.esm` / `VernimWoodExterior04`: Northern Roads.esp → Northern Roads - Vernim Wood patch.esp.
  - Location: ABSENT here (Northern Roads - Vernim Wood patch.esp has 0294E4:Vernim Wood.esp)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 396. Northern Roads - Hag Occult Orphan Rock Patch.esp

Formato **ESPFE**; provider **Northern Roads - Patches Compendium**; overrides em headers **9**; winner de **4** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, HAG - Occult Orphan Rock.esp, Northern Roads.esp.

**Tipos nos headers:** WRLD=1, CELL=4, LAND=4.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 397. Northern Roads - COTN Falkreath Patch.esp

Formato **ESPFE**; provider **Northern Roads Patch Collection**; overrides em headers **76**; winner de **19** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, COTN - Falkreath.esp, Northern Roads.esp.

**Tipos nos headers:** WRLD=1, CELL=19, LAND=19, REFR=37.

**Campos selecionados diferentes do predecessor:** Location (2).

- `009C3F:Skyrim.esm` / `None`: COTN Falkreath - Grass Mods Patch.esp → Northern Roads - COTN Falkreath Patch.esp.
  - Location=018A49:Skyrim.esm (Northern Roads - COTN Falkreath Patch.esp has Location ABSENT)
- `009C3E:Skyrim.esm` / `None`: COTN Falkreath - Grass Mods Patch.esp → Northern Roads - COTN Falkreath Patch.esp.
  - Location=018A49:Skyrim.esm (Northern Roads - COTN Falkreath Patch.esp has Location ABSENT)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 398. Northern Roads - Fortified Morthal Patch.esp

Formato **ESPFE**; provider **Northern Roads - Patches Compendium**; overrides em headers **39**; winner de **4** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Fortified Morthal.esp, Northern Roads.esp.

**Tipos nos headers:** NAVI=1, WRLD=1, CELL=6, REFR=23, NAVM=10.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 399. Vernim Wood Inn Door Patch.esp

Formato **ESPFE**; provider **SupportEgirl's Patch Hub**; overrides em headers **7**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Northern Roads.esp, Vernim Wood.esp, Northern Roads - Vernim Wood patch.esp.

**Tipos nos headers:** WRLD=1, CELL=2, REFR=7.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 400. Granite Hill Northern Roads Landscape Fixes.esp

Formato **ESPFE**; provider **SupportEgirl's Patch Hub**; overrides em headers **20**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Granite Hill.esp, Northern Roads.esp, Northern Roads - Granite Hill Village patch.esp.

**Tipos nos headers:** WRLD=1, CELL=6, REFR=7, LAND=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 401. Granite Hill Ownership Flagged.esp

Formato **ESPFE**; provider **SupportEgirl's Patch Hub**; overrides em headers **72**; winner de **3** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Granite Hill.esp.

**Tipos nos headers:** WRLD=1, CELL=5, REFR=66.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 402. Vernim Wood Northern Roads Patch Updated.esp

Formato **ESPFE**; provider **SupportEgirl's Patch Hub**; overrides em headers **21**; winner de **6** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Northern Roads.esp, Vernim Wood.esp.

**Tipos nos headers:** WRLD=1, CELL=6, LAND=1, REFR=16.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 403. Stendarr Rising - Completed From Start.esp

Formato **ESPFE**; provider **AETHERIUS - CUSTOM SETTINGS**; overrides em headers **28**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, Stendarr Rising.esp.

**Tipos nos headers:** CELL=2, REFR=25, WRLD=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 404. Fort Dawnguard - Completed From Start - JKs ClefJs.esp

Formato **ESPFE**; provider **AETHERIUS - CUSTOM SETTINGS**; overrides em headers **15**; winner de **2** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, JKs-ClefJs Fort Dawnguard.esp.

**Tipos nos headers:** CELL=2, REFR=12, WRLD=1.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 405. Predator Vision.esp

Formato **ESP**; provider **Predator Vision - Night Eye and Thermal Vision Overhaul**; overrides em headers **16**; winner de **7** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm.

**Tipos nos headers:** GLOB=14, MGEF=14, SPEL=10, BOOK=4, INGR=4, LVLI=11, QUST=3, EFSH=2, IMAD=8.

**Campos selecionados diferentes do predecessor:** Effects (4), Entries (3), Keywords (1).

- `0C4DE1:Skyrim.esm` / `VampireHuntersSight`: Curse of the Vampire.esp → Predator Vision.esp.
  - Effects: 1 vs Predator Vision.esp 1 item(s), contents differ — only here: [0] BaseEffect=08E129:Curse of the Vampire.esp, Data=[EffectData], Data.Magnitude=0 (+3 more field(s)); only in Predator Vision.esp: [0] BaseEffect=007042:Predator Vision.esp, Data=[EffectData], Data.Magnitude=0 (+3 more field(s))
- `03AD9E:Skyrim.esm` / `DeathItemWolf`: Open World Loot.esp → Predator Vision.esp.
  - Entries: 1 vs Predator Vision.esp 3 item(s) — only in Predator Vision.esp: [1] Data=[LeveledItemEntryData] Reference=0F961F:Skyrim.esm, Data.Level=1, Data.Unknown=0 (+4 more field(s)); [2] Data=[LeveledItemEntryData] Reference=02458A:Predator Vision.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s))
- `09CD49:Skyrim.esm` / `LItemApothecaryIngredienstUncommon75`: unofficial skyrim special edition patch.esp → Predator Vision.esp.
  - Entries: 45 vs Predator Vision.esp 46 item(s) — only in Predator Vision.esp: [45] Data=[LeveledItemEntryData] Reference=02458A:Predator Vision.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s))
- `03AD9F:Skyrim.esm` / `DeathItemWolfIce`: Open World Loot.esp → Predator Vision.esp.
  - Entries: 1 vs Predator Vision.esp 3 item(s) — only in Predator Vision.esp: [1] Data=[LeveledItemEntryData] Reference=0F961F:Skyrim.esm, Data.Level=1, Data.Unknown=0 (+4 more field(s)); [2] Data=[LeveledItemEntryData] Reference=02458A:Predator Vision.esp, Data.Level=1, Data.Unknown=0 (+4 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 406. NightEyeENBFix_PredatorVision.esp

Formato **ESPFE**; provider **Rudy ENB SE for Obsidian Weathers - LUX - ELFX**; overrides em headers **10**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Predator Vision.esp.

**Tipos nos headers:** MGEF=1, IMAD=9.

**Campos selecionados diferentes do predecessor:** VirtualMachineAdapter.Scripts (1).

- `06B10C:Skyrim.esm` / `NightEyeEffect`: Predator Vision.esp → NightEyeENBFix_PredatorVision.esp.
  - VirtualMachineAdapter.Scripts: 1 vs NightEyeENBFix_PredatorVision.esp 1 item(s), contents differ — only here: [0] Name=magicNightEyeScript, Flags=Local, Properties=[list: 7 item(s)] (+40 more field(s)); only in NightEyeENBFix_PredatorVision.esp: [0] Name=magicNightEyeScript, Flags=Local, Properties=[list: 7 item(s)] (+40 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 407. TGC Winterhold - JKs CoW Patch.esp

Formato **ESPFE**; provider **The Great City of Winterhold Patch Collection**; overrides em headers **12**; winner de **4** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, JK's College of Winterhold.esp, Resources - The Great Cities.esp, The Great City of Winterhold v4.esp.

**Tipos nos headers:** NAVI=1, WRLD=1, CELL=7, NAVM=3.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 408. TGC Winterhold - JKs Skyrim patch.esp

Formato **ESPFE**; provider **The Great City of Winterhold Patch Collection**; overrides em headers **1331**; winner de **16** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Resources - The Great Cities.esp, The Great City of Winterhold v4.esp, JKs Skyrim.esp.

**Tipos nos headers:** NAVI=1, WRLD=1, CELL=15, REFR=1280, NAVM=21, LAND=10, ACHR=3.

**Campos selecionados diferentes do predecessor:** MajorFlags (3), Flags (1).

- `0089A0:JKs Skyrim.esp` / `None`: JK's Skyrim - Lightened.esp → TGC Winterhold - JKs Skyrim patch.esp.
  - MajorFlags=0 (TGC Winterhold - JKs Skyrim patch.esp InitiallyDisabled)
- `0089A1:JKs Skyrim.esp` / `None`: JK's Skyrim - Lightened.esp → TGC Winterhold - JKs Skyrim patch.esp.
  - MajorFlags=0 (TGC Winterhold - JKs Skyrim patch.esp InitiallyDisabled)
- `024BBF:JKs Skyrim.esp` / `None`: JKs Skyrim.esp → TGC Winterhold - JKs Skyrim patch.esp.
  - MajorFlags=0 (TGC Winterhold - JKs Skyrim patch.esp InitiallyDisabled)
- `008EBF:Skyrim.esm` / `None`: JK's Skyrim - Lightened - Great City of Winterhold.esp → TGC Winterhold - JKs Skyrim patch.esp.
  - Flags=HasWater (TGC Winterhold - JKs Skyrim patch.esp HasWater, HandChanged)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 409. Interesting Locations - Unmarked Locations Pack Patch.esp

Formato **ESPFE**; provider **Interesting Locations - Patch Collection**; overrides em headers **4**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Interesting Locations.esp, Unmarked Locations Pack - All In One.esp.

**Tipos nos headers:** WRLD=1, CELL=1, REFR=2.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 410. Interesting Locations - Northern Scenery _Tundra Patch.esp

Formato **ESPFE**; provider **Interesting Locations - Patch Collection**; overrides em headers **7**; winner de **1** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Interesting Locations.esp, Northern Scenery _Tundra.esp.

**Tipos nos headers:** WRLD=1, CELL=2, REFR=4.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 411. Interesting Locations - Northern Roads Patch.esp

Formato **ESPFE**; provider **Interesting Locations - Patch Collection**; overrides em headers **167**; winner de **32** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Interesting Locations.esp, Northern Roads.esp.

**Tipos nos headers:** WRLD=1, CELL=28, REFR=108, ACHR=4, LAND=26.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 412. Vanaheimr - Northern Roads Patch.esp

Formato **ESPFE**; provider **Vanaheimr - Northern Roads - Complex Material - PBR**; overrides em headers **33**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Northern Roads.esp.

**Tipos nos headers:** TXST=18, LTEX=23.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 413. Pilgrim - Shrines Fit for the Divine - NR Patch.esp

Formato **ESPFE**; provider **Pilgrim Religion Overhaul - Shrines fit for the Divine**; overrides em headers **18**; winner de **3** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, Northern Roads.esp, Pilgrim.esp, Pilgrim - Shrines Fit for the Divine.esp.

**Tipos nos headers:** WRLD=1, CELL=6, LAND=6, REFR=5.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 415. AETHERIUS - INIMIGOS.esp

Formato **ESPFE**; provider **AETHERIUS - CUSTOM SETTINGS**; overrides em headers **43**; winner de **43** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Dawnguard.esm, Dragonborn.esm, Skyrim Revamped - Complete Enemy Overhaul.esp, Bandit War.esp, Artificer.esp, Better Vampire NPCs.esp, Humanoid Dragon Priest.esp, MysticismMagic.esp.

**Tipos nos headers:** NPC_=43.

**Campos selecionados diferentes do predecessor:** Perks (40), ActorEffect (31), PlayerSkills.Health (23), PlayerSkills.Magicka (22), Configuration.Level.Level (20), Configuration.HealthOffset (13), Configuration.MagickaOffset (10), PlayerSkills.Unused2 (4), Items (3), PlayerSkills.SkillValues[OneHanded] (3), PlayerSkills.SkillValues[LightArmor] (3), PlayerSkills.SkillValues[Conjuration] (3).

- `02025A:Skyrim.esm` / `EncDragonPriestFire`: Humanoid Dragon Priest.esp → AETHERIUS - INIMIGOS.esp.
  - Configuration.Level.Level=50 (AETHERIUS - INIMIGOS.esp 70)
  - PlayerSkills.Health=1490 (AETHERIUS - INIMIGOS.esp 1690)
  - PlayerSkills.Magicka=545 (AETHERIUS - INIMIGOS.esp 645)
  - Perks: 9 vs AETHERIUS - INIMIGOS.esp 13 item(s) — only here: [0] Perk=053128:Skyrim.esm, Rank=1, Fluff=AB5716; [1] Perk=0581F5:Skyrim.esm, Rank=1, Fluff=AB5716 (+7 more element(s)); only in AETHERIUS - INIMIGOS.esp: [0] Perk=0153CF:Skyrim.esm, Rank=1, Fluff=000000; [1] Perk=05312A:Skyrim.esm, Rank=1, Fluff=000000 (+11 more element(s))
- `02025B:Skyrim.esm` / `EncDragonPriestFrost`: Humanoid Dragon Priest.esp → AETHERIUS - INIMIGOS.esp.
  - Configuration.Level.Level=50 (AETHERIUS - INIMIGOS.esp 70)
  - PlayerSkills.Health=1490 (AETHERIUS - INIMIGOS.esp 1690)
  - PlayerSkills.Magicka=545 (AETHERIUS - INIMIGOS.esp 645)
  - Perks: 9 vs AETHERIUS - INIMIGOS.esp 13 item(s) — only here: [0] Perk=053128:Skyrim.esm, Rank=1, Fluff=A65716; [1] Perk=0581F5:Skyrim.esm, Rank=1, Fluff=A65716 (+7 more element(s)); only in AETHERIUS - INIMIGOS.esp: [0] Perk=0153CF:Skyrim.esm, Rank=1, Fluff=000000; [1] Perk=05312A:Skyrim.esm, Rank=1, Fluff=000000 (+11 more element(s))
- `02025C:Skyrim.esm` / `EncDragonPriestShock`: Humanoid Dragon Priest.esp → AETHERIUS - INIMIGOS.esp.
  - Configuration.Level.Level=50 (AETHERIUS - INIMIGOS.esp 70)
  - PlayerSkills.Health=1490 (AETHERIUS - INIMIGOS.esp 1690)
  - PlayerSkills.Magicka=545 (AETHERIUS - INIMIGOS.esp 645)
  - Perks: 9 vs AETHERIUS - INIMIGOS.esp 13 item(s) — only here: [0] Perk=053128:Skyrim.esm, Rank=1, Fluff=A25716; [1] Perk=0581F5:Skyrim.esm, Rank=1, Fluff=A25716 (+7 more element(s)); only in AETHERIUS - INIMIGOS.esp: [0] Perk=0153CF:Skyrim.esm, Rank=1, Fluff=000000; [1] Perk=05312A:Skyrim.esm, Rank=1, Fluff=000000 (+11 more element(s))
- `023A93:Skyrim.esm` / `EncDragonPriest`: Humanoid Dragon Priest.esp → AETHERIUS - INIMIGOS.esp.
  - Configuration.Level.Level=50 (AETHERIUS - INIMIGOS.esp 70)
  - PlayerSkills.Health=1490 (AETHERIUS - INIMIGOS.esp 1690)
  - PlayerSkills.Magicka=545 (AETHERIUS - INIMIGOS.esp 645)
  - Perks: 12 vs AETHERIUS - INIMIGOS.esp 15 item(s) — only here: [0] Perk=053128:Skyrim.esm, Rank=1, Fluff=000000; [8] Perk=0D799A:Skyrim.esm, Rank=1, Fluff=000000; only in AETHERIUS - INIMIGOS.esp: [0] Perk=05312A:Skyrim.esm, Rank=1, Fluff=000000; [2] Perk=0581DE:Skyrim.esm, Rank=1, Fluff=000000 (+3 more element(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 416. AETHERIUS - BALANCE.esp

Formato **ESP**; provider **AETHERIUS - CUSTOM SETTINGS**; overrides em headers **705**; winner de **697** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, ccvsvsse003-necroarts.esl, ccBGSSSE025-AdvDSGS.esm, ShadowSpellPackage.esp, DawnguardArsenal.esp, MasterSpellsRunes.esp, Triumvirate - Mage Archetypes.esp, Open World Loot.esp, LostGrimoire.esp, PuddingFace_SimpleSpellsPackage.esp, MysticismMagic.esp, 360 Ward.esp, Apothecary.esp, Aetherius.esp, Vokrii - Minimalistic Perks of Skyrim.esp, Mysticism - Vokrii Compatibility Patch.esp.

**Tipos nos headers:** GMST=7, RACE=24, MGEF=175, SPEL=184, INGR=2, PROJ=1, ECZN=319.

**Campos selecionados diferentes do predecessor:** ChargeTime (168), EquipmentType (118), Keywords (114), MinLevel (56), Effects (26), BodyTemplate.FirstPersonFlags (21), Conditions (17), Conditions[0].Data.TargetNpc (7), Flags (2), MaxLevel (1).

- `07A82B:Skyrim.esm` / `MAG_FireStorm`: MysticismTwoHanded.esp → AETHERIUS - BALANCE.esp.
  - ChargeTime=1.5 (AETHERIUS - BALANCE.esp 6)
- `07E5D5:Skyrim.esm` / `MAG_ConjureFlameMonarch`: MysticismMagic.esp → AETHERIUS - BALANCE.esp.
  - EquipmentType=013F44:Skyrim.esm (AETHERIUS - BALANCE.esp 013F45:Skyrim.esm)
  - ChargeTime=1 (AETHERIUS - BALANCE.esp 6)
- `07E5D6:Skyrim.esm` / `MAG_ConjureFrostMonarch`: MysticismMagic.esp → AETHERIUS - BALANCE.esp.
  - EquipmentType=013F44:Skyrim.esm (AETHERIUS - BALANCE.esp 013F45:Skyrim.esm)
  - ChargeTime=1 (AETHERIUS - BALANCE.esp 6)
- `07E5D7:Skyrim.esm` / `MAG_ConjureStormMonarch`: MysticismMagic.esp → AETHERIUS - BALANCE.esp.
  - EquipmentType=013F44:Skyrim.esm (AETHERIUS - BALANCE.esp 013F45:Skyrim.esm)
  - ChargeTime=1 (AETHERIUS - BALANCE.esp 6)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 417. AETHERIUS - ITEM BALANCE.esp

Formato **ESP**; provider **AETHERIUS - CUSTOM SETTINGS**; overrides em headers **9494**; winner de **9231** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm, ccvsvsse003-necroarts.esl, ccBGSSSE025-AdvDSGS.esm, HammetDungeon01.esm, HammetDungeon02.esm, Apachii_DivineEleganceStore.esm, cheddars_mashups.esl, 1NDArmor.esl, 1FlutedArmor.esl, 1AncArgArm.esl, 1SilverArmor.esl, 1FS.esl, 1YsmirArmorSE.esl, cheddars_mashups.esp, Arch'sLionMane.esp, CompanionsArmorRedone.esp, DaedricArmorRedone.esp, Rough Leather Armor.esp, ForswornHeaddressVariants.esp, Ancient_Vampire_Armor.esp, Dawnguard Hoods.esp, DragonPriestArmor.esp, Vision of Skyrim II.esp, Greymoor.esp, Granite Hill.esp, Falkhurst.esp, Amber Guard.esp, CeykyndArmor.esp, NW_Steel_Plate_Armors.esp, LostGrimoire.esp, PuddingFace_SimpleSpellsPackage.esp, JKs Skyrim.esp, weapons armor clothing & clutter fixes.esp, MysticismMagic.esp, JK's Fort Dawnguard.esp, Skyrim Revamped - Complete Enemy Overhaul.esp, The Restless Dead.esp, Bandit War.esp, Thaumaturgy.esp, Artificer.esp, JK's Palace of the Kings.esp, waccf_armor and clothing extension.esp, Better Vampire NPCs.esp, New Legion Redux.esp, imp_helm_legend.esp, [FB] Master Thief Armor.esp, NB-FurHoods.esp, Black Mage Armor SE.esp, Sentinel.esp, Grimoire.esp, Sentinel - City Guards.esp, imp_helm_Sentinel.esp, Vokrii - Minimalistic Perks of Skyrim.esp, 1AncientImperial.esp, Man-at-arms Set.esp, Armors of the Velothi PtI - My version by Xtudo.esp, Armors of the Velothi.esp, FurSet by keung.esp, Black Bear Ancient Nord Armor.esp.

**Tipos nos headers:** ARMO=9493, LIGH=1.

**Campos selecionados diferentes do predecessor:** ArmorRating (8971), Keywords (745), BodyTemplate.ArmorType (118), ObjectEffect (16).

- `012E46:Skyrim.esm` / `ArmorIronGauntlets`: weapons armor clothing & clutter fixes.esp → AETHERIUS - ITEM BALANCE.esp.
  - ArmorRating=11 (AETHERIUS - ITEM BALANCE.esp 13)
- `012E49:Skyrim.esm` / `ArmorIronCuirass`: weapons armor clothing & clutter fixes.esp → AETHERIUS - ITEM BALANCE.esp.
  - ArmorRating=25 (AETHERIUS - ITEM BALANCE.esp 32)
- `012E4B:Skyrim.esm` / `ArmorIronBoots`: weapons armor clothing & clutter fixes.esp → AETHERIUS - ITEM BALANCE.esp.
  - ArmorRating=11 (AETHERIUS - ITEM BALANCE.esp 13)
- `012EB6:Skyrim.esm` / `ArmorIronShield`: weapons armor clothing & clutter fixes.esp → AETHERIUS - ITEM BALANCE.esp.
  - ArmorRating=20 (AETHERIUS - ITEM BALANCE.esp 26)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 418. AETHERIUS - LEVELED LISTS.esp

Formato **ESP**; provider **AETHERIUS - CUSTOM SETTINGS**; overrides em headers **2193**; winner de **2183** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ccBGSSSE001-Fish.esm, ccBGSSSE025-AdvDSGS.esm, ccBGSSSE037-Curios.esl, unofficial skyrim special edition patch.esp, Grand Solitude - The Walls of High King Erling.esp, Sentinel - Master Plugin.esp, CeykyndArmor.esp, NW_Steel_Plate_Armors.esp, Open World Loot.esp, LostGrimoire.esp, PuddingFace_SimpleSpellsPackage.esp, Enhanced Interiors Lite.esp, JKs Skyrim.esp, weapons armor clothing & clutter fixes.esp, MysticismMagic.esp, JK's Fort Dawnguard.esp, Skyrim Revamped - Complete Enemy Overhaul.esp, The Restless Dead.esp, Bandit War.esp, Thaumaturgy.esp, Artificer.esp, JK's Palace of the Kings.esp, waccf_armor and clothing extension.esp, Better Vampire NPCs.esp, Sentinel.esp, Sentinel - City Guards.esp.

**Tipos nos headers:** CONT=10, AMMO=3, NPC_=1195, LVLN=53, LVLI=959.

**Campos selecionados diferentes do predecessor:** Items (1195), Entries (980), PlayerSkills.Unused2 (427), VirtualMachineAdapter.Scripts (49), PlayerSkills.Unused (28), Flags (11), Factions (9), Perks (3), DefaultOutfit (3), Configuration.Flags (3), Keywords (3), Configuration.CalcMaxLevel (2).

- `000007:Skyrim.esm` / `Player`: Skyrim.esm → AETHERIUS - LEVELED LISTS.esp.
  - PlayerSkills.Unused2=000100 (AETHERIUS - LEVELED LISTS.esp 001E00)
  - ActorEffect: 3 vs AETHERIUS - LEVELED LISTS.esp 1 item(s) — only here: [0] 012FCD:Skyrim.esm; [1] 012FCC:Skyrim.esm
  - Factions: same 4 item(s), ORDER DIFFERS from AETHERIUS - LEVELED LISTS.esp
  - Items: 16 vs AETHERIUS - LEVELED LISTS.esp 1 item(s) — only here: [0] Item=[ContainerItem] Item=00000A:Skyrim.esm, Item.Item=00000A:Skyrim.esm, Item.Count=10 (+1 more field(s)); [1] Item=[ContainerItem] Item=013790:Skyrim.esm, Item.Item=013790:Skyrim.esm, Item.Count=1 (+1 more field(s)) (+14 more element(s)); only in AETHERIUS - LEVELED LISTS.esp: [0] Item=[ContainerItem] Item=00000F:Skyrim.esm, Item.Item=00000F:Skyrim.esm, Item.Count=100 (+1 more field(s))
- `013255:Skyrim.esm` / `Addvar`: unofficial skyrim special edition patch.esp → AETHERIUS - LEVELED LISTS.esp.
  - Items: 3 vs AETHERIUS - LEVELED LISTS.esp 3 item(s), contents differ — only here: [0] Item=[ContainerItem] Item=01397E:Skyrim.esm, Item.Item=01397E:Skyrim.esm, Item.Count=1 (+1 more field(s)); only in AETHERIUS - LEVELED LISTS.esp: [0] Item=[ContainerItem] Item=000803:Open World Loot.esp, Item.Item=000803:Open World Loot.esp, Item.Count=1 (+1 more field(s))
- `01325C:Skyrim.esm` / `AiaArria`: unofficial skyrim special edition patch.esp → AETHERIUS - LEVELED LISTS.esp.
  - Items: 5 vs AETHERIUS - LEVELED LISTS.esp 5 item(s), contents differ — only here: [0] Item=[ContainerItem] Item=01397E:Skyrim.esm, Item.Item=01397E:Skyrim.esm, Item.Count=1 (+1 more field(s)); only in AETHERIUS - LEVELED LISTS.esp: [0] Item=[ContainerItem] Item=000803:Open World Loot.esp, Item.Item=000803:Open World Loot.esp, Item.Count=1 (+1 more field(s))
- `01325F:Skyrim.esm` / `Ahtar`: Skyrim.esm → AETHERIUS - LEVELED LISTS.esp.
  - PlayerSkills.Unused2=000100 (AETHERIUS - LEVELED LISTS.esp 001E00)
  - Items: 4 vs AETHERIUS - LEVELED LISTS.esp 4 item(s), contents differ — only here: [3] Item=[ContainerItem] Item=013991:Skyrim.esm, Item.Item=013991:Skyrim.esm, Item.Count=1 (+1 more field(s)); only in AETHERIUS - LEVELED LISTS.esp: [3] Item=[ContainerItem] Item=000836:Open World Loot.esp, Item.Item=000836:Open World Loot.esp, Item.Count=1 (+1 more field(s))

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 419. AETHERIUS - WORLD EDITS.esp

Formato **ESP**; provider **AETHERIUS - CUSTOM SETTINGS**; overrides em headers **326**; winner de **23** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ccBGSSSE001-Fish.esm, ccQDRSSE001-SurvivalMode.esl, ccBGSSSE037-Curios.esl, ccBGSSSE025-AdvDSGS.esm, _ResourcePack.esl, unofficial skyrim special edition patch.esp, Grand Solitude - The Walls of High King Erling.esp, Embers XD.esm, Better Dynamic Snow SE - DisableRefs.esm, Laintar Dale.esp, Laintar Dale Rock Fix.esp, Lainalten.esp, HappyLittleTrees.esp, Better Dynamic Snow SE.esp, JKs Skyrim.esp, JK's Skyrim - Reduced Cut - Dragon Bridge.esp, JK's Skyrim - Lightened.esp, Grand Solitude - JKs Skyrim patch.esp, Embers XD.esp, waccf_armor and clothing extension.esp, Grand Solitude - ACE patch.esp, Pilgrim.esp, Grand Solitude - Pilgrim patch.esp, man_DaedricShrines.esp, man_sithis.esp, Pilgrim - Daedric Shrines Patch.esp, AlternativeRiften.esp, Grand Solitude - New NPCs Disabled.esp, Alternative Riften - JK's Skyrim AIO - Patch.esp, Pilgrim - Shrines Fit for the Divine.esp, Embers XD - Patch - JKs Skyrim.esp, Missives.esp, Grand Solitude - Missives patch.esp, Nordic Windhelm Chimney Smoke.esp, Resources - The Great Cities.esp, The Great City of Winterhold v4.esp, JK's Skyrim - Lightened - Great City of Winterhold.esp, Fortified Morthal.esp, Fortified Morthal - Jk's Skyrim Patch.esp, Northern Roads.esp, Northern Roads - Happy Little Trees patch.esp, Northern Roads - CC Fishing patch.esp, Northern Roads - Pilgrim Shrines Fit for the Divine patch.esp, Northern Roads - JKs Skyrim patch.esp, Northern Roads - Grand Solitude patch.esp, Northern Roads - Lainalten patch.esp, Northern Roads - Fortified Morthal Patch.esp, TGC Winterhold - JKs Skyrim patch.esp, Pilgrim - Shrines Fit for the Divine - NR Patch.esp.

**Tipos nos headers:** CELL=23, REFR=314, WRLD=4, LAND=6.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 422. Aetherius - Black Logo.esp

Formato **ESPFE**; provider **AETHERIUS - MENU E LOGO**; overrides em headers **380**; winner de **0** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, HearthFires.esm, Dragonborn.esm, ccBGSSSE001-Fish.esm, ccQDRSSE001-SurvivalMode.esl, ccBGSSSE025-AdvDSGS.esm, unofficial skyrim special edition patch.esp, DawnguardArsenal.esp, CeykyndArmor.esp.

**Tipos nos headers:** LSCR=380.

Sem exemplo diferencial disponível nesse recorte; conferir providers no grafo. Não rotular como visual/ITM por isso.

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.

## 423. FWMF for Fantasy Paper Maps.esp

Formato **ESP**; provider **Flat World Map Framework (FWMF)**; overrides em headers **48**; winner de **47** identidades contestadas do catálogo central.

**Masters:** Skyrim.esm, Update.esm, Dawnguard.esm, Dragonborn.esm.

**Tipos nos headers:** GMST=1, WTHR=1, WRLD=47, IMGS=1.

**Campos selecionados diferentes do predecessor:** Location (1), EncounterZone (1), Flags (1).

- `01CDD3:Skyrim.esm` / `LabyrinthianWorld`: The Restless Dead.esp → FWMF for Fantasy Paper Maps.esp.
  - Location=0EAA62:Skyrim.esm (FWMF for Fantasy Paper Maps.esp 019262:Skyrim.esm)
  - EncounterZone=0EAA61:Skyrim.esm (FWMF for Fantasy Paper Maps.esp 03EC42:Skyrim.esm)
- `01EE62:Skyrim.esm` / `Blackreach`: Northern Roads.esp → FWMF for Fantasy Paper Maps.esp.
  - Flags=SmallWorld, CannotFastTravel, NoSky (FWMF for Fantasy Paper Maps.esp CannotFastTravel)

**Uso no plano:** invalidar definitions dependentes do tipo; validar conditions/entrypoints se PERK/SPEL/MGEF; templates/quest safety se NPC/ACHR/ECZN; equipment/material se ARMO/WEAP/AMMO; outras assinaturas exigem triagem própria antes de ativar feature.
