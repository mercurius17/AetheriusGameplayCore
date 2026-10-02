# Evidências da auditoria — 02/10/2026

Leia primeiro o [planejamento holístico](../../../AETHERIUS_GAMEPLAY_CORE_PLANEJAMENTO_HOLISTICO.md). Este pacote é documentação e fatos extraídos; não instala mods, não altera records e não implementa gameplay.

|Arquivo|Uso|
|---|---|
|[IMPLEMENTATION_PHASES.md](IMPLEMENTATION_PHASES.md)|13 fases, cada uma com18 campos de execução/aceite|
|[VALIDATION.md](VALIDATION.md)|Resultados e limites dos testes executados|
|[PLUGIN_CATALOG.md](PLUGIN_CATALOG.md), plugins.json, plugins-matrix.csv|Todos424 plugins, masters/flags/hashes/domínios candidatos|
|snapshot.json, loadorder-comparison.json|Perfil/epoch e divergências entre fontes|
|mods.json, runtime-assets.json, skse-inventory.json|Mods e assets/DLLs/configs observados|
|[MOD_RESEARCH.md](MOD_RESEARCH.md), mod-research.json|367 consultas Nexus vinculadas à instalação|
|[PATCH_REVIEW.md](PATCH_REVIEW.md), override-summary.json|Revisão estrutural baseada em records reais|
|winning-records.jsonl.gz|165.372 identidades centrais; runtime IDs apenas como evidência do snapshot|
|winning-fields.jsonl.gz|Campos selecionados em cinco passes; facts, não plugin redistribuível|
|override-trees.jsonl.gz|33.415 árvores dos records centrais contestados|
|vokrii-adxp-before/after.jsonl.gz, vokrii-adxp-diff.json|Comparação integral dos seis PERKs, manualmente examinada|
|critical-fixtures.json|Exemplos reais AETHERIUS com predecessor/winner|
|[CONDITION_SUPPORT.md](CONDITION_SUPPORT.md), condition-catalog.json|178 funções observadas; gates por função|
|condition-occurrences.jsonl.gz|41.665 occurrences extraídas com parâmetros/flags/runOn|
|[MAGIC_SUPPORT.md](MAGIC_SUPPORT.md), magic-catalog.json|39 archetypes e entrypoints/tipos de spell|
|integrity-errors.jsonl.gz|1.100 links pendentes reportados pelo sweep de errors|
|field-extraction-gaps.json|67 notas de truncamento em63 records; não escondidas da cobertura|
|skypatcher-layer.txt|Inventário/applicability/conflitos da camada runtime|
|source-index.json, exact-duplicates.json|Hashes/símbolos de fontes e12 grupos byte-idênticos|
|zip-baselines.json|Hashes dos ZIPs Server/Client, sem SHA git inventado|
|evidence-sha256.json|Manifesto de integridade do pacote, exclui a si próprio|

## Método e escopo

Housecarl foi apontado para `D:\modOrganizer` e perfil qualidade. As consultas de records usaram epoch `e2-ad3c01c2aa184e91`. A leitura de todos os headers de424 plugins serviu para inventário; winners e chains vieram do Housecarl. As24assinaturas centrais: PERK/SPEL/MGEF/ENCH/INGR/ALCH/RACE/NPC_/LVLN/LVLI/ECZN/CELL/ACHR/WEAP/ARMO/AMMO/COBJ/FLST/AVIF/QUST/KYWD/FACT/GLOB/WRLD. Supplemental: GMST/CSTY/LCTN/OTFT/PROJ/SCRL/HAZD/CONT/ACTI/DOOR. Quests/factions receberam extração complementar de campos próprios.

Formato fonte: `housecarl_records`, `source=winner`, `project=summary` para identidades; `project=fields`, profundidade6 ou8, listas de campos por família. `to_file` exportou o scope completo. Trees foram divididas em140 lotes de até240 formids com `project=tree` e campos selecionados; nenhum offset foi presumido no export. Os lotes iniciais incluíram SkillBoost0..6 e ActorValues adicionais; os finais mantiveram o núcleo comum de gameplay. O catálogo de fields central preserva os boosts disponíveis independentemente do recorte do tree.

Before/after ADXP: `source=Vokrii - Minimalistic Perks of Skyrim.esp` e `source=winner`, seis forms, `project=everything`, depth8. Descrições narrativas foram omitidas dos arquivos publicados; os campos técnicos da comparação foram preservados. Não confundir diferenças em índices codificados de FormLinkOrIndex com mudança no Link estável. Diferenças por índice de effect podem ser reordenação.

Os exports brutos locais foram reduzidos por streaming a facts com valores/links/shapes, sem os milhares de `(no field)` por record. Descrições/textos narrativos foram omitidos do catálogo agregado e do recorte ADXP. Exportar valor de um campo não certifica que o servidor o suporta. Cabeçalhos de transporte com caminhos absolutos foram removidos dos JSONL publicados; hashes/epoch/escopo permanecem neste pacote.

## Limites que afetam interpretação

- Existem67 avisos explícitos de expansão limitada a2.000 linhas/record em63 identidades. As contagens de conditions são **observadas**, não garantia de completude absoluta. A lista de gaps permite novas leituras focalizadas por subpaths. Nenhum record dependente desses campos deve ser certificado ainda.
- Árvores comparam providers ao winner final; deltas de listas podem estar abreviados. Não existe alegação de inspeção humana individual dos165 milrecords. Revisão aprofundada manual de ADXP está explicitamente separada da triagem automática integral.
- O sweep executado foi `findings=errors`: refs/masters/parse. Não executou todo check de VMAD/dialogue/facegen e não detecta todo problema espacial/navmesh.
- Inventário SKSE descreve DLL metadata/config VFS, não prova carregamento/execução. Assets exclusivamente em BSAs vanilla têm ressalva por Skyrim.ini ausente. Loose inventory não cobre todo mesh/OAR/HKX nem interpreta/decompila todo PEX.
- A camada SkyPatcher é uma leitura de aplicabilidade/replay, não evidência de que o servidor headless executa essa camada. Nenhum mod foi habilitado, desabilitado, atualizado ou patchado.
- Server/Client foram fornecidos como ZIPs; acesso aos remotes não retornou baseline verificável. Nenhum jogo/servidor ativo foi usado como teste. B01–B08 permanecem no planejamento.

## Consultar sem carregar arquivos grandes na RAM

Use Python3 e streaming:

```python
import gzip, json
with gzip.open('winning-fields.jsonl.gz', 'rt', encoding='utf-8') as stream:
    for line in stream:
        row = json.loads(line)
        if row['formid'] == '02025A:Skyrim.esm':
            print(json.dumps(row, ensure_ascii=False, indent=2))
```

Para reexecutar a auditoria, use os hashes/escopos acima e Housecarl na mesma instância; uma mudança de epoch ou conteúdo gera **outro snapshot**, não sobrescreve este release. As APIs/schema de tools devem ser consultadas na versão instalada. Não copiar mods/ZIPs/caches privados para Git para reproduzir dados.
