# Artesãos — mecânicas e progressão

Este documento registra como o CraftingSystem consome a progressão definida pelo ProfessionSystem.

## 1. Regra comum

Ranks:

Novato -> Aprendiz -> Adepto -> Especialista -> Mestre

O rank controla:

- acesso a recipes;
- categorias e materiais;
- benefícios;
- gates econômicos;
- apresentação de conteúdo;
- elegibilidade para workflows.

O CraftingSystem não calcula XP/rank.

## 2. Ferreiro

| Rank | Conteúdo |
|---|---|
| Novato | armas/equipamentos/flechas de Ferro, Picaretas, Kit de Manutenção de Ferro |
| Aprendiz | Heavy Armor de guildas aplicáveis, membership obrigatório, 10% de chance de preservar um material |
| Adepto | armas/equipamentos/flechas de Aço, Kit de Aço |
| Especialista | armas/equipamentos de Steel Plate, Kit de Steel Plate |
| Mestre | Nordic/Dwemer/Orcish culturais + kits; gate global inicialmente bloqueável |

Teto econômico regular: Steel Plate.

Smithing perks vanilla não liberam recipes.

## 3. Curtidor

| Rank | Conteúdo |
|---|---|
| Novato | equipamentos de Pele de Animal + kit correspondente |
| Aprendiz | Light Armor de guildas aplicáveis + membership + 10% material save |
| Adepto | Couro + kit |
| Especialista | Élficos + kit |
| Mestre | conteúdos culturais Nordic/Dwemer/Orcish conforme mapping aprovado |

Crafting-base segue o plano específico do Curtidor.

Smithing/Light Armor perks vanilla não liberam recipes.

## 4. Cozinheiro

| Rank | Conteúdo |
|---|---|
| Novato | refeições simples/carnes grelhadas |
| Aprendiz | ensopados de vegetais |
| Adepto | ensopados de carne |
| Especialista | demais recipes; 20% chance de não consumir um ingrediente |
| Mestre | 20% chance de receber duas porções |

Benefícios são server-side e idempotentes.

## 5. Artífice

| Rank | Conteúdo |
|---|---|
| Novato | Enxadas, Lanternas, Tochas, Masks/Bandanas aplicáveis, Bolsas/Satchels |
| Aprendiz | Mochilas, Anéis, Utensílios, filled Petty/Lesser soul gems |
| Adepto | Colares, Amuletos, Brasões/Insígnias, filled Common/Greater soul gems |
| Especialista | Tiaras, filled Grand soul gems |
| Mestre | 20% chance de não consumir um ingrediente |

O Artífice é transversal a workstations.

Receita define a workstation apropriada. A profissão pode ser autorizada em mais de uma workstation.

## 6. Alfaiate

| Rank | Conteúdo |
|---|---|
| Novato | roupas simples/common |
| Aprendiz | capas, acessórios de pele, capuzes, roupas de guilda |
| Adepto | roupas elaboradas/nobres aplicáveis |
| Especialista | roupas nobres avançadas |
| Mestre | 20% chance de não consumir um material |

Workstation específica precisa ser definida no catálogo/implementation profile; não inferir uma bancada vanilla incorreta.

## 7. Cervejeiro

Escopo:

- hidromel;
- vinho;
- álcool;
- Skooma ilegal.

O framework de ranks existe, mas os desbloqueios específicos continuam pendentes.

CraftingSystem deve suportar o ofício por data/configuração sem inventar uma progressão.

## 8. Alquimista

Não é implementado pelo CraftingSystem genérico nesta fase.

Carreira pertence ao ProfessionSystem; execução pertence ao sistema externo de alquimia.

Perks vanilla: decisão pendente.

## 9. Encantador

Não é implementado pelo CraftingSystem genérico.

Execução pertence ao enchantment-system.

Perks vanilla: decisão pendente.

## 10. Workstation authorization

Selecionar uma profissão artesanal habilita apenas workstations listadas na policy daquela profissão.

Não existe "qualquer artesão pode usar qualquer bancada".

## 11. XP/Vigor

Craft concluído reporta:

~~~text
profession
activity=crafting
activityRank=recipe.requiredRank
recipe definition
authoritative result ref
~~~

ProfessionSystem decide XP, anti-powerlevel, Vigor e promoção.

## 12. Bônus

Bônus como:

- preservar material;
- porção duplicada;

são resolvidos server-side.

RNG precisa ser gravado no operation ledger para retry não rerrolar.

## 13. Membership

Recipes de guilda exigem:

- profissão;
- rank;
- workstation;
- membership.

## 14. Master gates

Conteúdo Mestre pode estar catalogado mas indisponível.

A UI deve receber reason.

## 15. Sem perks vanilla

Para Ferreiro, Curtidor, Cozinheiro, Artífice, Alfaiate e Cervejeiro:

- perks vanilla não são gate;
- skill vanilla não é rank;
- recipe COBJ vanilla não basta para autorizar craft.

A autorização profissional é do Aetherius.
