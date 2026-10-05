# Aetherius Enchantment System

> [!IMPORTANT]
> O `enchantment-system` ainda **não foi conceitualmente definido nem desenvolvido**.

## Estado atual

O Aetherius já possui a profissão de **Encantador** registrada no planejamento geral de profissões, mas o sistema técnico responsável por encantamentos ainda não possui definição suficiente para implementação.

Ainda não estão decididos, entre outros pontos:

- funcionamento exato do processo de encantamento;
- interface;
- relação com Soul Gems;
- tratamento de enchantments presentes na load order;
- relação com Thaumaturgy, Grimoire of Sentinel ou outros mods;
- política de potência;
- custos;
- regras de aplicação;
- persistência;
- relação com perks vanilla de Enchanting;
- integração final com equipamentos e inventário.

Nenhuma dessas decisões deve ser presumida ou inventada durante a implementação de outros módulos.

## Release Alpha

O `enchantment-system` **não fará parte da release Alpha do servidor Aetherius**.

Para a Alpha:

- o módulo deve permanecer desativado;
- nenhuma capability de encantamento deve ser declarada pronta;
- a UI deve tratar a feature como indisponível quando necessário;
- nenhuma dependência crítica da Alpha pode exigir o funcionamento deste módulo;
- nenhum fallback para enchanting vanilla deve ser usado para contornar a ausência do sistema autoritativo.

## Relação com ProfessionSystem

O `profession-system` pode manter a existência conceitual da profissão Encantador e sua progressão planejada, porém isso não significa que a mecânica esteja disponível.

O estado correto durante a Alpha é:

~~~text
profession definition exists
enchantment capability = unavailable
release Alpha = excluded
~~~

## Próxima etapa futura

Após a Alpha, o sistema deverá receber um planejamento próprio antes de qualquer implementação funcional.

Esse planejamento futuro deverá definir formalmente:

- ownership;
- catálogo;
- workstations;
- itens elegíveis;
- enchantments;
- Soul Gems;
- perks;
- transações;
- persistência;
- interface;
- segurança;
- integração com ProfessionSystem;
- integração com Inventory;
- compatibilidade com a load order.

Até lá, este módulo funciona apenas como **placeholder documental de feature futura**.
