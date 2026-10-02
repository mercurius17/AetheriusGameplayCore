# Validação executada

Data:02/10/2026. Código nas baselines da seção3 do planejamento. Nenhuma suite foi alterada para obter aprovação. Não houve integração in-game nem implantação de arquitetura.

|Componente|Comando/ambiente|Resultado|
|---|---|---|
|Enemy|Node22.23.2, `node --test tests/*.test.mjs` no módulo|82 testes:77 pass,0 fail,5 skip|
|Leveling|Node22.23.2, `node --test tests/*.test.mjs` no módulo|44 pass,0 fail|
|Durability|Node22.23.2, `node --test tests/*.test.js` no módulo|11 pass,0 fail|
|Class|`npm ci` pelo lockfile, depois `npm test` (inclui sync-data/pretest e Jest runInBand)|44 pass,6 fail;2 suites pass/4 fail|
|Damage TS|`npm ci`, `npm test` (TypeScript build e node test)|6 pass,0 fail|
|Damage C++|CMake3.31.10, MSVC19.44.35229, Windows SDK10.0.26100, configuração Debug|Build combat_tests e metrics_tests; CTest2/2 pass em4,35s|
|UI Core|esbuild de tests/core.test.ts para CJS, Node executado com cwd do UI Core|14 pass,0 fail|

Logs: pasta [validation](validation). Os builds nativos foram feitos antes do pedido para reduzir impacto no PC; não se repetiu compilação ampla depois. Auditoria restante foi sequencial/streaming.

## Falhas Class preservadas

`tests/classes.test.ts`: expectativa de resolução de perks e total esperado351 contra350 observado. `tests/perkResolver.test.ts`: expectativas de resolver todas as162 entradas não se confirmam com resolução mock desautorizada no contexto. `tests/leveling.test.ts` e `tests/server.test.ts`: expectativas de awardedPlayers em fluxos legacy de kill/dedupe retornam vazio. Ver mensagens completas no log; estas falhas pedem caracterização da intenção e não autorização para restaurar spoofing.

A primeira chamada direta de Jest havia omitido `pretest`; foi descartada como baseline e repetida via `npm test`. O pretest reescreveu dados UI gerados; esse único arquivo foi restaurado ao conteúdo rastreado. `node_modules` e builds ficaram fora do commit. O mesmo cuidado vale para UI: execução inicialmente fora do cwd do repo não encontrou assets; execução correta teve14 pass. Não se reportam erros de cwd como defeito do produto.

## Build nativo reproduzível

Selecionar includes existentes de nlohmann/json e libprometheus (usados do checkout local da base), sem baixar/instalar toolchain nova. Em diretório de build separado:

```text
cmake -S <GameplayCore>/modules/damage-system -B <build-dir> -G "Visual Studio 17 2022" -A x64 -DJSON_INCLUDE=<include-json> -DPROMETHEUS_INCLUDE=<include-prometheus>
cmake --build <build-dir> --config Debug --target combat_tests metrics_tests
ctest --test-dir <build-dir> -C Debug --output-on-failure
```

Debug preserva asserts. O CMake do módulo compila helpers/tests; não compila o addon completo com `AetheriusDamageFormula.cpp` ligado a MpActor do Server real. Portanto2/2 pass não resolve B02. A ponte nativa Meridian não foi compilada/testada nesta execução.

## Verificação documental

O pacote final deve ter424 entradas de plugin,550 mods,367pesquisas,165.372winners centrais,33.415trees,39 archetypes,178 funções/41.665 occurrences observadas e todos os links relativos válidos. O manifesto SHA-256 registra todos os arquivos de evidência salvo ele mesmo. ZIPs base são revalidados pelo hash; nenhum plugin/binário de jogo é redistribuído. A validação de integridade não converte lacunas documentadas em cobertura de runtime.

Nenhum teste PostgreSQL ou de load/reconnect foi apresentado como executado: são critérios futuros das fases. Nenhuma performance de produção foi inferida a partir da duração de testes unitários.
