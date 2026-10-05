# AetheriusDamageSystem

> [!IMPORTANT]
> O código e os patches deste módulo registram a implementação experimental anterior à arquitetura canônica. Para integração futura, use [AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md](../../docs/architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md): Damage continua owner do cálculo, mas Host Combat/Effects/Resource APIs devem ser públicas, mínimas e versionadas. Patches históricos não são o contrato final.

Motor de combate nativo experimental e patches de integração para a Base Aetherius e ClassSystem. **Legacy permanece padrão; ainda não é release de produção.**

O núcleo implementa profiles exatos/revisionados, identidade estável, curva de armadura, dano físico, seis Masteries verificadas por Housecarl, providers, cache, trace, componentes mágicos e efeitos por instância. A integração nativa e os limites estão detalhados em [IMPLEMENTATION_STATUS](docs/aetherius-combat/IMPLEMENTATION_STATUS.md).

Na entrega experimental original, as alterações foram mantidas inteiramente nesta pasta e integrações externas foram registradas em `integration/`. [INTEGRATION](docs/aetherius-combat/INTEGRATION.md) preserva esse caminho apenas como referência histórica; novas integrações devem seguir a Host API canônica. [HOUSECARL_RECORD_AUDIT](docs/aetherius-combat/HOUSECARL_RECORD_AUDIT.md) registra origem, winner, conditions e tradução; [VALIDATION](docs/aetherius-combat/VALIDATION.md) separa testes executados de verificações bloqueadas.

Teste local TypeScript: `npm ci` e `npm test`.

Teste local C++: disponibilizar nlohmann/json v3.11.3 em `JSON_INCLUDE` (ou `.deps/json/single_include`), depois executar `cmake -S . -B build`, `cmake --build build` e `ctest --test-dir build --output-on-failure`. Windows MinGW: selecionar `-G "MinGW Makefiles"`. O teste Prometheus é adicional e exige os headers da mesma versão da Base e suporte a `std::mutex`.

As pesquisas originais abaixo/na raiz permanecem como referências históricas; o audit dos plugins instalados prevalece sobre descrições públicas.
