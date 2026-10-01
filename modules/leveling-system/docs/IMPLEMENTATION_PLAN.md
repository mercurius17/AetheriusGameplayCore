# Implementation plan and status

1. Workspace audit - concluído; estado inicial registrado.
2. Source lock - concluído; fontes locais, snapshots externos e contexto houseCARL registrados.
3. Legacy audit - concluído para leveling, bestiary, party, raid, persistence e hooks.
4. External contracts - concluído para `EnemyKilledEventV1`, descriptor, context e class bridge.
5. Data-driven configuration - concluído com sete JSONs e sete schemas.
6. Exact XP catalog - concluído e extensível para mods por JSON; Ice Wraith e Thalmor estão
   classificados como MEDIUM e possuem categorias exatas aprovadas.
7. Enemy scaling - concluído para 1..100, incluindo segundo softcap de +2% após nível 40.
8. Content relevance - concluído com -5% por nível acima da faixa e redução máxima de 90%.
9. Party/Raid - tabelas e política final de elegibilidade concluídas; participação em dano não é
   exigida e perfis `FIXED` ignoram o modificador.
10. Persistence/idempotency - interfaces, memória transacional e adapter SkyMP concluídos;
   atomicidade real de `mp.get/mp.set` permanece pendente.
11. XP pipeline - concluída em `src/integration/enemy-consumer.mjs`.
12. Level-up - concluído com múltiplos níveis, 15 pontos por avanço e cap 40.
13. Fatigue - concluído com reset IANA 06:00 `America/Sao_Paulo`.
14. Class integration - eventos e `ClassProgressionPort` concluídos; nenhum perk duplicado.
15. Simulator - concluído, offline e read-only.
16. Test suite - concluída para configuração, matemática, party, fatigue, rejeições e replay.
17. Migration plan - concluído; patches externos não aplicados.
18. Universal enemy coverage - índice plugin/FormID local e auditoria completa concluídos; binding
   ao snapshot vencedor do EnemySystem fica para o projeto de integração.
19. Single XP authority - coordenador e bloqueio fail-closed concluídos; binding aos switches reais
   do host fica para o projeto de integração.
20. Final audit - executar após qualquer mudança de configuração antes de integrar no host.
