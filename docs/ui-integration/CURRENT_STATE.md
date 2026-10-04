# Integração UI — estado em 04/10/2026

O ClassSystem foi integrado ao AetheriusUI_Core no servidor/cliente locais e no Skyrim AE 1.6.1170. CLASSE e GRUPO abrem com projeções reais do domínio; o usuário confirmou ambos no jogo. A integração local opera em **consulta**, com mutações bloqueadas por capabilities ausentes.

## Conteúdo desta entrega

- `modules/class-system/integrations/register-class.cjs`: bootstrap no host real, registro dos módulos e serialização de projeções.
- `server/storage/playerRepository.ts`: falhas de leitura/JSON/ownership/esquema não geram defaults; cache só muda após persistência bem-sucedida.
- `server/uiModule.ts` e UI de classe/grupo: remoção de campos opcionais undefined na projeção, gating de ações e ausência de vida artificial de membros.
- `modules/class-system/vendor/ui-core/`: contrato/SDK do Core com PROVENANCE e hashes; router limita sessão, revisão, payloads e replay concorrente.
- `integrations/ui-runtime-changes/`: cópia completa do snapshot externo também versionado no UI Core. Contém as alterações de aetherius-server, aetherius-client e MeridianUI em patches/fontes, sem commits nos repositórios externos.

As baselines e aplicação estão no [README do snapshot](../../integrations/ui-runtime-changes/README.md). Esse snapshot inclui transporte, consulta de inventário/feitiços, bindings nativos, foco/input, renderer NIF e correções de alpha. O shell e bridge próprios continuam no AetheriusUI_Core; aplicar o snapshot isoladamente não substitui o build dos dois projetos.

## Estado observado e testes

O usuário confirmou radial/ícones/animações, CLASSE/GRUPO, leitura de itens/feitiços, abertura do mapa nativo e aparecimento dos modelos. As últimas correções de opacidade dos modelos e TAB fechar apenas o mapa foram compiladas/instaladas e ainda precisam de confirmação visual no jogo. A consulta de inventário usa ator autenticado no servidor; preview/mapa são apresentação local e não autoridade de gameplay.

Rechecado antes do commit: `npm run build` passou. `npm test -- --silent`: 49 aprovados/55, com as mesmas seis falhas preexistentes em quatro suítes. Os cinco testes de persistência novos passam. Não se declara a suíte totalmente aprovada.

| Suíte pendente | Falhas atuais |
|---|---|
| classes | Perk sem resolução runtime; expectativa de 351 referências versus 350. |
| perkResolver | Resolução de perk e relatório 162/162 sem provider runtime. |
| leveling | Expectativa antiga de recompensa de abate sem confirmação autoritativa. |
| server | Expectativa antiga de recompensa/deduplicação de abate. |

Core: 17/17 rechecados; UI/mapa/navegação 23/23; cliente 28/28 na integração; bridge 1/1; renderer 5/5 mais GPU física com alpha/occlusão sintéticos. Host nativo leu a load order local de 424 plugins e verificou isolamento/rejeição de mutações. Testes do ClassSystem não validam os outros módulos deste monorepo.

## Limites de autoridade

O host pinado não fornece CombatProfile/reconciliação de grants nem transação de Party suficiente para liberar ações. Seleção de classe, alocação/reset, alteração de grupo e operações de inventário continuam desabilitadas. Grants de outras fontes não são apagados. ActorState permanece scaffold; Damage/Durability não foram ativados por esta integração. O módulo de Leveling separado não é inicializado como um segundo escritor.

TrueHUD conserva vida/magia/vigor. Providers ausentes não são substituídos por valores simulados. O backend local de testes e os assets/templates de UI não comprovam uma persistência de produção nem integração de todos os destinos do radial.

Confira [REMAINING_IMPLEMENTATION.md](REMAINING_IMPLEMENTATION.md). O relatório detalhado de build/implantação está em AetheriusUI_Core `docs/VALIDATION_REPORT.md` e `docs/BUILD_AND_DEPLOY.md`; evidências/binários locais ficam em `C:\Code\Aetherius-MP-Teste`, fora dos commits de fonte.
