# Catálogo e progressão das profissões

Status: definição conceitual consolidada para o `profession-system`.

## 1. Regra geral de progressão

Todas as profissões especializadas utilizam a mesma escala de ranks:

`Novato -> Aprendiz -> Adepto -> Especialista -> Mestre`

Limiares iniciais:

| Rank | XP acumulado sugerido |
|---|---:|
| Novato | 0 |
| Aprendiz | 500 |
| Adepto | 1.500 |
| Especialista | 3.500 |
| Mestre | 6.000 |

Esses valores são configuráveis.

A progressão não é definida por skill vanilla nem pela presença de perks vanilla. O rank profissional é um fato do `profession-system`.

Exceções em aberto:

- **Alquimista:** a relação futura com perks vanilla de Alchemy ainda não foi definida.
- **Encantador:** a relação futura com perks vanilla de Enchanting ainda não foi definida.

Nenhum outro ofício deve usar perks vanilla como gate de crafting, aprimoramento ou progressão.

---

# 2. Coletores

## 2.1. Fazendeiro

### Conceito

Fazendas são pontos econômicos controlados pelo servidor. Cada fazenda possui identidade própria, localização validada, pools de recursos e ciclos configuráveis.

Uma fazenda pode produzir:

- grãos;
- vegetais;
- laticínios;
- ingredientes culinários;
- recursos pecuários;
- outros insumos econômicos aprovados.

O `gathering-system` executa a interação. O `profession-system` apenas fornece rank/autorização e liquida Vigor/XP após sucesso.

### Ferramenta

**Enxada / Hoe**.

Sem a ferramenta exigida, a ação é recusada sem XP e sem consumo de Vigor.

### Progressão

| Rank | Efeito |
|---|---|
| Novato | 1 item aleatório por interação |
| Aprendiz | 2 itens aleatórios por interação |
| Adepto | 3 itens aleatórios por interação |
| Especialista | 3 rolls; cada roll possui 10% de chance de duplicação |
| Mestre | 3 rolls; cada roll possui 20% de chance de duplicação |

### Regras adicionais

- pools podem conter parte fixa e parte rotativa;
- staff pode alterar ciclos e distribuição de recursos;
- pode existir estoque global/cooldown por fazenda;
- crescimento econômico não deve escalar linearmente apenas com número de jogadores;
- plantas/ervas de alquimia pertencem ao Herbalista, salvo decisão explícita de catálogo.

---

## 2.2. Minerador

### Conceito

A mineração é uma fonte controlada de minérios e materiais. Não replica automaticamente toda a cadeia vanilla.

Somente veins e recursos autorizados pelo catálogo da release podem ser usados.

### Ferramenta

**Picareta**.

### Progressão

| Rank | Efeito |
|---|---|
| Novato | após a interação válida, obtém 1 Iron Ore + 1 Coal; acesso a Ferro |
| Aprendiz | mantém o anterior + 1% de chance total de gema comum |
| Adepto | libera Corundum e Silver; chance total de gema comum sobe para 2% |
| Especialista | libera Gold; chance total de gema comum sobe para 3% |
| Mestre | libera Orichalcum, Quicksilver e recurso controlado de Metal Dwemer; 20% de chance de duplicar recursos; 1% de chance de gema perfeita |

### Gate Mestre

O Mestre do Minerador deve existir tecnicamente, porém pode permanecer globalmente bloqueado.

Enquanto bloqueado:

- o personagem pode ficar elegível por XP;
- a promoção não é aplicada;
- Orichalcum, Quicksilver e recurso Dwemer não entram na economia regular.

### Gemas

A porcentagem representa a **chance total de encontrar uma gema**. Após sucesso, um segundo roll escolhe a gema na pool autorizada.

Não existe uma chance independente para cada tipo.

### Metal Dwemer

Não utilizar clutter vanilla como fonte paralela irrestrita.

O material para Dwarven Ingot deve vir de um depósito/recurso explicitamente controlado pelo sistema.

---

## 2.3. Caçador

### Conceito

O Caçador transforma animais abatidos em recursos econômicos.

O animal é abatido pelas regras normais de combate. Depois, uma interação server-side processa a carcaça.

Cada carcaça pode ser processada apenas uma vez no estado global.

### Ferramenta

Nenhuma ferramenta profissional adicional.

O jogador utiliza as armas normais do personagem para caçar.

### Progressão

| Rank | Efeito |
|---|---|
| Novato | 1 carne pertinente ao animal |
| Aprendiz | adiciona 1 pele/hide pertinente |
| Adepto | adiciona 1 ingrediente alquímico pertinente |
| Especialista | 2 unidades de cada categoria já desbloqueada para aquela espécie |
| Mestre | mantém rendimento do Especialista + 20% de chance de duplicação por interação |

### Regras adicionais

- tabela de yield deve ser definida por espécie;
- `processed=true` é global para aquela geração da carcaça;
- nenhum segundo jogador pode extrair recursos novamente;
- XP/Vigor só são liquidados quando o processamento autoritativo for concluído.

---

## 2.4. Herbalista

### Conceito

O Herbalista é a fonte profissional de plantas e ingredientes alquímicos obtidos por interação no mundo.

### Ferramenta

**Bolsa / Satchel**.

### Progressão

| Rank | Efeito |
|---|---|
| Novato | recebe 1 unidade do recurso-base coletado |
| Aprendiz | recebe 2 unidades do recurso-base |
| Adepto | 10% de chance de receber um ingrediente alquímico adicional aleatório |
| Especialista | chance do ingrediente adicional sobe para 20% |
| Mestre | mantém efeitos anteriores + 20% de chance de duplicar o resultado da interação |

### Regra consolidada para a pool adicional

A regra antiga que limitava o bônus apenas a ingredientes botânicos/regionais está **superada pela decisão posterior do projeto**.

A pool de ingrediente aleatório adicional deve poder abranger **todos os ingredientes alquímicos autorizados existentes no catálogo da release**, inclusive materiais normalmente associados a criaturas.

Exemplos conceituais válidos:

- Vampire Dust;
- Sabre Cat Eye;
- outros ingredientes de alquimia presentes na load order.

Objetivo: inserir ingredientes raros na economia sem depender de alterar o loot normal de inimigos.

Isso não significa que a planta-base deixa de ter identidade. O recurso-base da interação continua sendo a planta/erva correspondente; o roll adicional é uma mecânica econômica separada.

A pool final continua configurável e sujeita a enable/disable pela staff.

---

# 3. Artesãos

## 3.1. Cozinheiro

### Conceito

Transforma ingredientes culinários em refeições com efeitos/buffs definidos pelos sistemas externos.

### Progressão

| Rank | Desbloqueios / efeitos |
|---|---|
| Novato | refeições simples, como carnes grelhadas |
| Aprendiz | ensopados de vegetais |
| Adepto | ensopados de carne |
| Especialista | libera as demais receitas; 20% de chance de não consumir um dos ingredientes |
| Mestre | 20% de chance de receber duas porções |

### Regra técnica

Receitas reais devem ser montadas dinamicamente pelo `crafting-system` a partir do catálogo da load order, não por FormIDs absolutos.

O bônus de economia de material é calculado server-side.

---

## 3.2. Artífice

### Conceito

Produz objetos utilitários, decorativos e acessórios que não pertencem primariamente ao Ferreiro, Curtidor ou Alfaiate.

Escopo conceitual:

- joias;
- lanternas;
- tochas;
- utensílios;
- ornamentos;
- brasões;
- insígnias;
- mochilas;
- ferramentas utilitárias;
- bolsas/satchels.

### Progressão

| Rank | Desbloqueios / efeitos |
|---|---|
| Novato | Enxadas, Lanternas, Tochas, Bandanas/Máscaras aplicáveis e Bolsas/Satchels |
| Aprendiz | Mochilas, Anéis, Utensílios de Cozinha, soul gems preenchidas Petty/Lesser |
| Adepto | Colares, Amuletos, Brasões/Insígnias, soul gems preenchidas Common/Greater |
| Especialista | Tiaras e soul gems preenchidas Grand |
| Mestre | 20% de chance de não consumir um dos ingredientes durante o craft |

### Regra de catálogo

Nomes de mods citados em planejamentos anteriores são exemplos de origem de conteúdo, não contratos de posição na load order.

Housecarl deve descobrir os records reais e o `crafting-system` deve montar o catálogo por categoria/mapping.

---

## 3.3. Ferreiro

### Conceito

Produz:

- armas;
- flechas;
- armaduras pesadas;
- ferramentas aplicáveis;
- kits de manutenção associados aos materiais autorizados.

O Ferreiro também é uma das profissões que pode alimentar o `refinement-system`, porém o refino é um domínio separado.

### Progressão

| Rank | Desbloqueios / efeitos |
|---|---|
| Novato | armas/equipamentos/flechas de Ferro, Picaretas, Kit de Manutenção de Ferro |
| Aprendiz | sets de guilda aplicáveis da categoria Heavy Armor, com membership obrigatório; 10% de chance de preservar um material |
| Adepto | armas/equipamentos/flechas de Aço + Kit de Manutenção de Aço |
| Especialista | armas/equipamentos de Steel Plate + Kit de Manutenção de Steel Plate |
| Mestre | armas/equipamentos/flechas culturais Nordic, Dwemer e Orcish + kits correspondentes |

### Gate Mestre

Mestre deve permanecer inicialmente bloqueável pela staff.

### Teto tecnológico

A economia regular deve ter **Steel Plate** como teto normal.

Nordic, Dwemer e Orcish são tratados como conteúdo cultural/horizontal de Mestre, não como escalada automática da economia vanilla.

### Perks vanilla

Ferreiro **não usa perks vanilla de Smithing** para:

- liberar receitas;
- definir rank;
- permitir crafting;
- permitir refinement;
- determinar bônus profissional.

A autoridade vem exclusivamente do ProfessionSystem + sistemas externos.

---

## 3.4. Curtidor

### Conceito

Produz armaduras leves, equipamentos associados e kits de manutenção.

O Curtidor utiliza o `crafting-system` para fabricação e o mesmo `refinement-system` compartilhado com o Ferreiro para aprimoramento.

### Progressão

| Rank | Desbloqueios / efeitos |
|---|---|
| Novato | equipamentos de Pele de Animal e Kit de Manutenção correspondente |
| Aprendiz | sets de guilda aplicáveis de Light Armor, membership obrigatório; 10% de chance de preservar um material |
| Adepto | equipamentos de Couro + Kit de Manutenção de Couro |
| Especialista | equipamentos/flechas Élficas + Kit de Manutenção Élfico |
| Mestre | equipamentos culturais Nordic, Dwemer e Orcish conforme mapping aprovado |

### Filosofia do crafting

A fabricação-base deve ser tolerante.

Ranks superiores:

- liberam receitas;
- alteram economia;
- liberam materiais/conteúdo;
- podem conceder benefícios profissionais.

Ranks superiores **não devem tornar o crafting-base mecanicamente mais difícil**.

A dificuldade mecânica e o risco devem se concentrar no `refinement-system`.

### Perks vanilla

Curtidor não depende de perks vanilla de Smithing/Light Armor para autorizar crafting ou refino.

---

## 3.5. Alfaiate

### Conceito

Produz roupas, capas, acessórios de pele, capuzes e vestimentas especiais.

### Progressão

| Rank | Desbloqueios / efeitos |
|---|---|
| Novato | roupas simples vanilla: fazendeiro, mineiro e outras roupas comuns |
| Aprendiz | Capas, acessórios de pele, capuzes e roupas de guilda com membership |
| Adepto | roupas mais elaboradas, incluindo itens nobres/aplicáveis de mods |
| Especialista | roupas nobres avançadas |
| Mestre | 20% de chance de não consumir um dos materiais |

### Regra de catálogo

Categorias devem ser descobertas/mapeadas dinamicamente a partir da release.

Não hardcodar plugin index de mods de vestuário.

---

## 3.6. Encantador

### Conceito

Encanta equipamentos e joias por meio do `enchantment-system`.

O `profession-system` governa carreira, rank, Vigor e XP. O sistema externo governa aplicação efetiva dos enchantments.

### Progressão conceitual atual

| Rank | Desbloqueios |
|---|---|
| Novato | encantar armas/equipamentos de Ferro e Pele; Anéis |
| Aprendiz | Aço e Couro; Colares e Amuletos |
| Adepto | Élficos e Steel Plate; Tiaras |
| Especialista | materiais culturais: Dwemer, Nordic e Orcish |
| Mestre | Ébano e Stalhrim; conversão de Grand White Soul Gem preenchida em Black Soul Gem preenchida, tratada como ilegal |

### Regra de disponibilidade

Poder encantar uma categoria **não cria uma fonte econômica daquele item**.

Se Ebony/Stalhrim estiver fora da economia regular, o Encantador só pode trabalhar com esses itens quando eles existirem por uma origem autorizada.

### Perks vanilla: decisão pendente

Ainda não está definido se perks vanilla da árvore de Enchanting participarão:

- da potência;
- da elegibilidade;
- de custos;
- de efeitos;
- de progressão.

Até decisão explícita, nenhuma implementação deve presumir comportamento.

---

## 3.7. Alquimista

### Conceito

Produz:

- poções;
- venenos;
- outros produtos alquímicos autorizados.

A implementação será externa ao `profession-system`.

Planejamentos anteriores citam possível integração com sistemas de alquimia existentes, mas a solução definitiva não está definida.

### Progressão

O **framework de rank** é o mesmo das demais profissões:

`Novato -> Aprendiz -> Adepto -> Especialista -> Mestre`

Porém, os **desbloqueios específicos por rank do Alquimista ainda não estão definidos** nos documentos consolidados.

Portanto o módulo deve:

- suportar XP/rank genericamente;
- não inventar tiers de poção;
- não inventar ingredientes proibidos/permitidos;
- aguardar definição do sistema externo antes de preencher `profession definitions`.

### Perks vanilla: decisão pendente

Ainda não está definido se perks vanilla de Alchemy participarão da mecânica.

Não assumir inclusão nem exclusão.

---

## 3.8. Cervejeiro

### Conceito

Produz:

- hidromel;
- vinho;
- outras bebidas alcoólicas;
- Skooma, tratada como produção ilegal.

### Progressão

O framework de ranks já está definido globalmente, mas **os desbloqueios específicos por rank do Cervejeiro ainda não estão consolidados no material-fonte atual**.

O `profession-system` deve registrar a profissão e permitir definição posterior sem recompilar o domínio central.

Até a definição:

- não inventar receitas por rank;
- não inventar bônus;
- não inferir progressão a partir de perks vanilla;
- deixar recipe catalog/capability como incompleto.

---

# 4. Matriz de dependência econômica

| Coletor | Profissões alimentadas |
|---|---|
| Fazendeiro | Cozinheiro, Cervejeiro, Alfaiate |
| Caçador | Cozinheiro, Alfaiate, Curtidor, Alquimista |
| Herbalista | Alquimista, Cozinheiro, Cervejeiro |
| Minerador | Ferreiro, Curtidor, Artífice, Cervejeiro |

Essa matriz representa design econômico. Não implica transferência automática de item.

---

# 5. Requisitos de itens de coleta

| Atividade | Requisito |
|---|---|
| Mineração | Picareta |
| Herbalismo | Bolsa/Satchel |
| Fazenda | Enxada/Hoe |
| Caça | nenhum item profissional adicional |

As ferramentas são validadas pelo `gathering-system` via inventário autoritativo.

---

# 6. Guildas e membership

Receitas de guilda são elegíveis somente quando o personagem satisfaz os requisitos de membership.

Exemplos:

- Heavy Armor de determinada guilda para Ferreiro;
- Light Armor de determinada guilda para Curtidor;
- roupas de guilda para Alfaiate.

O `profession-system` pode fornecer rank profissional, mas membership pertence ao owner competente e deve ser consultado por contrato.

---

# 7. Regra de conteúdo Mestre

Mestre não significa que todo conteúdo vanilla de alto tier entra automaticamente na economia.

Cada profissão pode possuir:

- `masterImplemented`;
- `masterGloballyEnabled`;
- `masterCatalogReady`;
- `masterExternalCapabilityReady`.

A promoção e a execução dependem dos gates relevantes.

---

# 8. Resumo de decisões e pendências

| Profissão | Progressão específica | Perks vanilla |
|---|---|---|
| Fazendeiro | definida | não usados |
| Minerador | definida | não usados |
| Caçador | definida | não usados |
| Herbalista | definida | não usados |
| Cozinheiro | definida | não usados |
| Artífice | definida | não usados |
| Ferreiro | definida | não usados |
| Curtidor | definida | não usados |
| Alfaiate | definida | não usados |
| Encantador | definida conceitualmente | **política pendente** |
| Alquimista | desbloqueios por rank pendentes | **política pendente** |
| Cervejeiro | desbloqueios por rank pendentes | não usados |

Guarda e Mensageiro permanecem fora do escopo desta rodada e deverão receber definição própria antes de serem tratados como profissões funcionais.
