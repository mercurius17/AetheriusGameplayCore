"""Validate documentation coverage and local references; does not run gameplay."""
import collections
import gzip
import hashlib
import json
import pathlib
import re
import subprocess
import urllib.parse

O = pathlib.Path(__file__).resolve().parents[1]
R = O.parents[1]
errors = []
checks = {}
mds = sorted(O.rglob('*.md'))
cache = {}
link_count = 0
for p in mds:
    s = p.read_text(encoding='utf-8')
    cache[p.resolve()] = s
    if sum(line.startswith('```') for line in s.splitlines()) % 2:
        errors.append(f'Unbalanced fence: {p.relative_to(R)}')
    for target in re.findall(r'\[[^\]\n]*\]\(([^\n)]+)\)', s):
        if re.match(r'^[a-z]+://', target):
            continue
        path, _, fragment = urllib.parse.unquote(target).partition('#')
        dest = (p.parent / path).resolve() if path else p.resolve()
        link_count += 1
        generated_outputs = {(O/'validation-report.json').resolve(), (O/'manifest-sha256.json').resolve()}
        if not dest.exists() and dest not in generated_outputs:
            errors.append(f'Missing target: {p.relative_to(R)} -> {target}')
        elif fragment.startswith('r-'):
            t = cache.get(dest)
            if t is None:
                t = dest.read_text(encoding='utf-8')
                cache[dest] = t
            if f'id="{fragment}"' not in t:
                errors.append(f'Missing anchor: {p.relative_to(R)} -> {target}')
coverage = json.loads((O / 'coverage.json').read_text(encoding='utf-8'))
with gzip.open(O / 'perk-facts.jsonl.gz', 'rt', encoding='utf-8') as f:
    perks = [json.loads(line) for line in f]
ids = {r['formid'] for r in perks}
checks['perkRecords'] = len(perks)
checks['uniquePerkRecords'] = len(ids)
checks['perkAnchors'] = sum(len(re.findall(r'<a id="r-', p.read_text(encoding='utf-8'))) for p in (O/'perks').glob('*.md'))
checks['magicAnchors'] = sum(len(re.findall(r'<a id="r-', p.read_text(encoding='utf-8'))) for p in (O/'magic').glob('*.md'))
checks['entryPointSections'] = (O/'ENTRY_POINTS.md').read_text(encoding='utf-8').count('\n## ')
checks['conditionSections'] = (O/'PERK_CONDITIONS.md').read_text(encoding='utf-8').count('\n## ')
checks['classSections'] = (O/'CLASS_STAGES.md').read_text(encoding='utf-8').count('\n## ')
checks['localLinksChecked'] = link_count
checks['markdownFiles'] = len(mds)
checks['reexpandedPerks'] = len(coverage['expandedPerks'])
checks['perkTruncationNotes'] = sum('truncat' in x.get('note','').lower() for r in perks for x in r['fields'])
expected = {'perkRecords':1493,'uniquePerkRecords':1493,'perkAnchors':1493,'magicAnchors':1540,'entryPointSections':71,'conditionSections':83,'classSections':18,'reexpandedPerks':10,'perkTruncationNotes':0}
for key,value in expected.items():
    if checks[key] != value:
        errors.append(f'{key}: expected {value}, got {checks[key]}')
entry = collections.Counter(x['value'] for r in perks for x in r['fields'] if x['path'].endswith('.EntryPoint'))
if dict(entry) != coverage['entryPoints']:
    errors.append('Entry-point coverage disagrees with facts')
for r in perks:
    d = {x['path']:x for x in r['fields']}
    root = d.get('Effects',{}).get('note','')
    if re.fullmatch(r'\[list: \d+ item\(s\)\]',root):
        n = int(re.search(r'\d+',root).group())
        seen = {int(re.match(r'Effects\[(\d+)\]$',x).group(1)) for x in d if re.fullmatch(r'Effects\[\d+\]',x)}
        if seen != set(range(n)):
            errors.append(f'Incomplete effect indices: {r["formid"]}')
changed = subprocess.check_output(['git','-C',str(R),'diff','--name-only','a85395af6513011d3eb33f737aa733223be79704'],text=True).splitlines()
outside = [p for p in changed if not (p.startswith('docs/mechanics/') or p in ['README.md','AETHERIUS_GAMEPLAY_CORE_PLANEJAMENTO_HOLISTICO.md'])]
checks['functionalFilesChangedSinceFirstPlanningCommit'] = len(outside)
if outside:
    errors.append('Unexpected change scope: '+str(outside))
report = {'kind':'documentation-only','status':'PASS' if not errors else 'FAIL','checks':checks,'errors':errors,'notExecuted':['new gameplay session','new component builds/tests','PostgreSQL integration','runtime perk certification']}
(O/'validation-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8',newline='\n')
manifest = {}
for p in sorted(O.rglob('*')):
    if p.is_file() and p.name != 'manifest-sha256.json' and '__pycache__' not in p.parts:
        manifest[p.relative_to(O).as_posix()] = hashlib.sha256(p.read_bytes()).hexdigest()
(O/'manifest-sha256.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8',newline='\n')
print(json.dumps(report,ensure_ascii=False))
raise SystemExit(bool(errors))
