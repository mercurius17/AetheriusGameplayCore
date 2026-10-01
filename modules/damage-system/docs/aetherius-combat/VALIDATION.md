# Validação executada — 30/09/2026

## Resultados

| Verificação | Resultado |
|---|---|
| DamageSystem C++ CMake/MinGW Release, C++17, -Wall -Wextra -Werror -pedantic | Build do núcleo concluída |
| CTest combat_core | 1/1 suite passou; **116 verificações** na execução direta |
| Benchmark sintético núcleo RAM | 160.000 hits, **212,925 ms** na última execução (~1,33 µs/hit); não representa rede, addon ou raid em jogo |
| DamageSystem npm test / tsc | **6/6 testes**, build TypeScript passou |
| ClassSystem baseline sem patch | **50/50 testes**, 6 suites; build TypeScript passou |
| ClassSystem com patch + overlay na cópia interna | **54/54 testes**, 7 suites; build TypeScript passou |
| Patches Base/Class | git apply --cached --check contra índice baseline e git apply --reverse --check contra arquivos alterados passaram |
| Módulo lifecycle JS | node --check passou |
| Build completa da Base | **Não concluída**: CMake falhou porque server/vcpkg/scripts/buildsystems/vcpkg.cmake não existe (submódulo não inicializado) |
| Tentativa MSVC standalone | **Não concluída**: Visual Studio 18 2026 foi detectado, mas CMAKE_CXX_COMPILER não foi encontrado; a Base exige VS 2022 |
| Prometheus smoke test | **Não executado**: MinGW 8.1 instalado não fornece std::mutex. Tentativa falhou na compilação; CMake agora detecta essa limitação e avisa explicitamente ao omitir esse teste |
| Catch2 da Base / novo golden legado / addon ScampServer | **Não executados**, dependem da build nativa e fixtures da Base |
| Skyrim PvP/PvE/replay/reconnect real/40x40 | **Não executados** |

Cobertura do núcleo: limites de ArmorCurve, NaN/Inf, schema e revision, reset, origem CLASS, identidade estável, skills 0/20/40/60/80/100, spoof sem campo autoritativo, todas as seis Masteries/nove efeitos, conditions falsas/verdadeiras/OR, armor por peça e keyword proibida, crítico apenas no componente crítico, Block skill/Mastery, provider neutro/refino autorizado, cache por revisões, trace on/off, fire/frost/shock/weakness/caps/absorption, recursos separados, sete regras de stacking, expiração, DoT, cancelamento de concentração e persistence/restart por serialização.

Os testes TypeScript do adapter cobrem profiles exatos, revisão após reconnect, publicação falha sem avanço de revisão, reset, IDs estáveis e recusa de perks sem catálogo. Os novos testes no ClassSystem cobrem a retirada de mocks de produção e a preservação de progressão já carregada quando uma perk não suportada impede publicar o profile.

Os testes de classes/resolver existentes conservam suas assertions; mocks agora têm opt-in explícito no teste do resolver e lookup fixture apenas no teste de classes. Isso não converte mocks em records de produção. Nenhum golden da Base foi ajustado para esconder mudança de fórmula.

## Reprodução

```powershell
npm ci --ignore-scripts
npm test
cmake -S . -B build -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release
cmake --build build -j 2
ctest --test-dir build --output-on-failure
```

Dependência nativa para o núcleo: nlohmann/json **v3.11.3**, commit `9cca280a4d0ccf0c08f47a99aa71d1b0e52f8d03`, headers em `.deps/json/single_include` ou `JSON_INCLUDE`. Prometheus opcional para smoke test: commit **e6e54d2cbc1d3650d9ecec62d75404db7c9b653b**, igual ao port da Base; requer compilador com suporte a mutex. Dependências e cópias internas estão ignoradas, não são entregues como código do projeto.

Não há claim de build do servidor aprovado ou de cumprimento de todos os 23 critérios de aceite. Os limites constam em IMPLEMENTATION_STATUS.md; manter configuração em legacy até validar o servidor integrado.
