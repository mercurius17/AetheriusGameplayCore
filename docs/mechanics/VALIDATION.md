# Validação do complemento de mecânicas

Esta é validação documental, não certificação de gameplay. Nenhum arquivo funcional dos módulos, Server, Client ou UI foi alterado para produzir este complemento. Os resultados de testes da auditoria original não foram reclassificados nem apresentados como novas execuções.

## Método de extração

1. Reconfirmar a instância Housecarl, perfil e epoch da coleta original.
2. Extrair metadados das 1.493 PERKs, incluindo Name, NextPerk, NumRanks, Playable, Hidden, Level, Trait e IsDeleted.
3. Identificar as dez PERKs com expansão limitada na coleta original e consultar Conditions/VMAD e Effects em grupos de até três entradas, depth 8: 83 consultas sequenciais.
4. Verificar que cada índice de effect esperado dessas dez PERKs está presente e que nenhuma expansão complementar contém nota de truncamento.
5. Mesclar os novos campos por record, preservando os outros registros e as evidências históricas. Derivar fichas e links a partir dos campos, sem criar identidades a partir de descrições.
6. Seguir links disponíveis para records mágicos da extração original e seu suplemento de SPEL. Verificar contagem e ausência de truncamento no conjunto alcançado.
7. Cruzar as configurações de classes com o manifesto histórico e candidatos por nome/EditorID, sem alterar os mappings originais.
8. Validar links locais, âncoras explícitas, cercas Markdown, contagens, hashes e escopo de alterações no Git.

## Limites

A reextração resolve limites de expansão das dez PERKs, não prova todos os comportamentos do engine. Campos fora do recorte, código PEX/DLL, aliases dinâmicos, semântica de entry points e integração em runtime precisam das provas especificadas nos manuais. As seis masteries continuam identificadas como manifesto histórico, sem fingir nova certificação end-to-end.

As fichas mantêm valores operacionais e nomes para identificação; não copiam páginas inteiras de descrições de mods. Paths opacos/unused e índices internos redundantes são omitidos das tabelas de leitura, mas os fatos extraídos de PERK estão no arquivo comprimido. Um índice interno não deve virar identidade persistível.

## Evidência verificável

- [coverage.json](coverage.json): contagens derivadas e records reextraídos.
- [validation-report.json](validation-report.json): resultado das verificações documentais.
- [manifest-sha256.json](manifest-sha256.json): hashes do pacote, excluindo o próprio manifesto.
- [extraction-provenance.json](extraction-provenance.json): identificação e hashes dos inputs usados na ampliação.
- [build_catalog.py](tools/build_catalog.py): geração dos catálogos a partir dos inputs Housecarl, sem consultar jogo nem modificar plugins.
- [validate_package.py](tools/validate_package.py): verificação de links, fichas e invariantes documentais.

Para regenerar catálogos, fornecer uma pasta com `magic-perk-definitions.jsonl`, `spell-extra.jsonl`, `perk-metadata.jsonl` e `perk-expansions/*.jsonl`. Os dois primeiros são inputs da coleta original; o export comprimido publicado é a evidência final de PERK, não substituto de todo input mágico. O comando aceita `--input-dir` e `--repo-root`. Os manuais interpretativos são editados separadamente e não são sobrescritos pelo gerador.

Não foi iniciada nova compilação nem sessão de Skyrim para esta ampliação. As leituras e consultas foram sequenciais para reduzir impacto na máquina durante outras atividades do usuário.
