# Records auditados antes dos handlers

Fonte: Housecarl sobre a instalação real, epoch `e2-d180c51adf12773b`, 30/09/2026. `mastery-conditions.jsonl` contém os fields completos e CTDAs; `mastery-trees.jsonl` registra toda a cadeia de overrides. `vokrii-perks.jsonl` é inventário, não prova de suporte a 426 perks.

Todas as seis Masteries têm origem **Skyrim.esm**, winner **Vokrii - Minimalistic Perks of Skyrim.esp**, signature **PERK**, NumRanks=1, rank de efeito 0 e conditions globais vazias. Identidade persistente usa o plugin de origem, nunca o winner ou o runtime ID.

| Nome / EditorID | Local ID / StableFormKey | Entry point / coeficiente | Conditions dos efeitos |
|---|---|---|---|
| One-Handed / VKR_One_000_OneHandedMastery_Perk_WasArmsman1 | 0BABE4 / Skyrim.esm:0BABE4 | CalculateWeaponDamage .01; CalculateMyCriticalHitDamage .05; OneHanded | HasPerk(079343)=0; ANY keywords 01E714,01E711,01E712,01E713 |
| Two-Handed / VKR_Two_000_TwoHandedMastery_Perk_WasBarbarian1 | 0BABE8 / Skyrim.esm:0BABE8 | ModAttackDamage .01; CalculateMyCriticalHitDamage .05; TwoHanded | HasPerk(079346)=0; ANY keywords 06D932,06D931,06D930 |
| Archery / VKR_Arc_000_ArcheryMastery_Perk_WasOverdraw1 | 0BABED / Skyrim.esm:0BABED | CalculateWeaponDamage .01; CalculateMyCriticalHitDamage .05; Archery | HasPerk(07934A)=0; keyword 01E715 |
| Block / VKR_Bck_000_BlockMastery_Perk_WasShieldWall1 | 0BCCAE / Skyrim.esm:0BCCAE | ModPercentBlocked .005; Block | HasPerk(079355)=0 |
| Heavy Armor / VKR_Hea_000_HeavyArmorMastery_Perk_WasJuggernaut1 | 0BCD2A / Skyrim.esm:0BCD2A | ModArmorRating .01; HeavyArmor | HasPerk(07935E)=0; keyword 06BBD2=1 AND 0965B2=0 |
| Light Armor / VKR_Lia_000_LightArmorMastery_Perk_WasAgileDefender1 | 0BE123 / Skyrim.esm:0BE123 | ModArmorRating .01; LightArmor | HasPerk(079376)=0; keyword 06BBD3=1 AND 0965B2=0 |

Keywords e perks em conditions usam também Skyrim.esm como origem. Modificação: MultiplyOnePlusAVMult => multiplicador `1 + coeficiente * skill autoritativa`. OR/AND são preservados; Archery é normalizado para Marksman no contrato da Base. Crítico multiplica apenas o componente crítico, não todo o golpe. Armor avalia a condição por peça, excluindo keyword 0965B2; não usa um multiplicador indiscriminado sobre o total.

Chains: Skyrim.esm -> Vokrii para cinco Masteries; Block: Skyrim.esm -> unofficial skyrim special edition patch.esp -> Vokrii. Nenhum patch ADXP, Mysticism, Thaumaturgy ou Apply Spell Conditions Fix vence estas seis identidades na instalação auditada. Esses patches alteram outras perks: por exemplo Impaling Shot 058F64 e Iron Fist 058F6E são vencidos por Apply Spell Conditions Fix. Não foram implementados handlers dessas outras perks.

MGEF/SPEL associados: nenhum nos efeitos destas seis Masteries. Tests: `verified masteries`, `mastery conditions`, `armor per piece`, `critical component` na suíte nativa. A build de produção deve verificar o catálogo com a load order local; a auditoria não autoriza reutilizar coeficientes após atualização dos plugins.

Golden equipamento: IronDagger, WEAP, Skyrim.esm:01397E, dano 4, winner weapons armor clothing & clutter fixes.esp; ArmorIronGauntlets, ARMO, Skyrim.esm:012E46, rating **13**, HeavyArmor, winner **AETHERIUS - ITEM BALANCE.esp**. O rating 10 do teste vanilla da Base não corresponde à instalação auditada. Estes valores são fixtures de teste, não um catálogo hardcoded de equipamento.

Não foi auditada paridade ampla de magia/ENCH/RACE/AVIF ou de todas as perks condicionais das classes. A documentação de pendências distingue infraestrutura testada de comportamento conectado ao runtime.
