# Aetherius — Política de Configuração e Balanceamento

Data: 05/10/2026  
Status: regra transversal para sistemas de gameplay e economia.

## 1. Princípio obrigatório

Todo valor numérico ou parâmetro de balanceamento que possa razoavelmente precisar de ajuste durante Alpha, testes, operação do servidor ou rebalanceamento futuro deve existir em **definitions/configuração versionada**, e não como constante rígida espalhada pelo código.

A implementação deve separar:

~~~text
regra estrutural
+
valor de balanceamento configurável
~~~

Exemplo:

~~~text
Regra estrutural:
uma mina possui estoque, entra em cooldown ao esgotar e limita trabalhadores simultâneos.

Balanceamento atual:
stock = 500
cooldown = 72h
maxWorkers = 2
cycleDuration = 60s
~~~

Os números acima são defaults/baselines atuais e devem poder ser alterados sem reescrever a lógica do sistema.

## 2. O que deve ser configurável

A regra se aplica, entre outros, a:

### Gathering

- estoque máximo de cada mina/site;
- cooldown após esgotamento;
- duração do ciclo de coleta;
- máximo de trabalhadores simultâneos;
- quantidade-base de yield;
- chance de duplicação;
- chance de gemas;
- chance de ingrediente adicional;
- capacidade de herbal sites;
- estoque/cooldown de fazendas;
- duração de ciclos agrícolas;
- pesos de pools;
- rotação de recursos;
- tool requirements quando tratados como policy;
- habilitação de sites/resources.

### Crafting

- proporção minério -> ingot;
- proporção pele -> couro;
- custos de recipes;
- custo total de set;
- distribuição do custo por peça;
- ingredientes secundários;
- output count;
- chance de preservar material;
- chance de output duplicado;
- duração/tolerância de etapas;
- requisitos de rank;
- habilitação de recipe/tier;
- workstation mappings quando tratados como configuração de conteúdo.

### ProfessionSystem

- thresholds de XP;
- XP por atividade;
- fatores anti-powerlevel;
- Vigor máximo;
- custo de Vigor;
- atraso de regeneração;
- taxa de regeneração;
- gates globais;
- chances/bônus profissionais.

### Refinement

- multiplicadores por tier;
- custo de moldes;
- número de ciclos;
- tempo de sequência;
- tolerância de falhas;
- materiais;
- regras quantitativas de regressão/risco quando configuráveis;
- habilitação de tiers.

## 3. Valores conceituais não são constants de código

Quando a documentação disser:

~~~text
500 minérios
72 horas
60 segundos
2 trabalhadores
3 ore -> 1 ingot
30 ingots
20%
5 ciclos
~~~

isso significa:

> valor-base atualmente aprovado para balanceamento

e **não**:

> literal obrigatório compilado dentro do domínio.

O comportamento estrutural continua obrigatório, mas o número deve vir da configuração.

## 4. Configuração por escopo

O sistema deve permitir defaults globais e overrides específicos.

Exemplo conceitual:

~~~json
{
  "gathering": {
    "miningDefaults": {
      "capacity": 500,
      "cooldownSeconds": 259200,
      "maxConcurrentWorkers": 2,
      "cycleSeconds": 60
    },
    "siteOverrides": {
      "mine:example": {
        "capacity": 750
      }
    }
  }
}
~~~

Assim uma mina especial pode ter outro estoque sem exigir branch de código.

## 5. Source of truth

Valores ativos devem vir de uma camada de configuration/definitions cuja versão seja conhecida pelo runtime.

A configuração deve possuir:

- schema;
- validação;
- revision/version;
- defaults explícitos;
- overrides auditáveis;
- capability de rejeitar valores inválidos;
- assinatura/compatibilidade quando necessário.

## 6. Não duplicar números em módulos

Um mesmo parâmetro não deve ser copiado manualmente em múltiplos arquivos de código.

Exemplo incorreto:

~~~text
MiningService.ts -> 500
MiningRepository.ts -> 500
MiningUI.ts -> 500
AdminCommand.ts -> 500
~~~

Correto:

~~~text
MiningBalanceDefinition.capacity = 500

MiningService
MiningRepository
UI read model
Admin tooling
    -> consomem a mesma definition
~~~

A UI deve receber valores efetivos do servidor quando precisar apresentá-los.

## 7. Hot reload e administração

Quando seguro, valores puramente de balanceamento devem poder ser alterados por:

- nova configuration revision;
- reload controlado;
- command administrativo;
- próxima release de definitions;

sem recompilar binários.

Nem todo valor precisa obrigatoriamente suportar hot reload em produção. Porém **nenhum ajuste comum de balanceamento deve exigir alteração da lógica do domínio**.

Mudanças que afetem uma sessão já ativa devem possuir policy explícita:

- sessão mantém snapshot antigo até terminar; ou
- sessão é invalidada e recarregada.

Nunca aplicar mudança parcial silenciosa no meio de uma transação econômica.

## 8. Persistência versus configuração

A persistência registra o **estado efetivo** do mundo; a configuração define seus parâmetros.

Exemplo de mineração:

~~~text
Definition:
capacity = 500
cooldownSeconds = 259200

Persisted state:
stockRemaining = 173
availableAt = null
definitionRevision = 42
~~~

Ao restaurar uma mina após cooldown, o novo estoque deve vir da definition ativa compatível, e não de uma constante compilada.

## 9. Mudança de configuração

Alterações de valores precisam ser auditáveis.

Registrar quando aplicável:

- chave alterada;
- valor anterior;
- valor novo;
- revision;
- autor/origem;
- timestamp;
- sites/recipes/features afetados.

## 10. Validação

Configurações inválidas devem falhar de forma explícita.

Exemplos:

- capacidade <= 0;
- cooldown negativo;
- max workers <= 0;
- chance fora de 0–100%;
- recipe com quantidade negativa;
- set budget incompatível;
- tier multiplier inválido;
- duration <= 0.

Não usar fallback silencioso para números hardcoded.

## 11. Testes obrigatórios

Cada sistema deve provar que:

1. usa o default configurado;
2. aceita override válido;
3. rejeita override inválido;
4. mudança de valor não exige alterar código;
5. read models refletem o valor efetivo;
6. restart preserva estado e reaplica definitions corretamente;
7. idempotência continua válida após mudança de configuração;
8. sessões tratam revision change de forma determinística.

## 12. Regra de interpretação documental

A partir deste documento, todos os números de gameplay/economia presentes na documentação do Aetherius devem ser interpretados como **defaults configuráveis**, salvo quando um documento declarar explicitamente que determinado valor é uma invariável estrutural por motivo técnico.

Na ausência dessa declaração explícita, o valor deve ser externalizado.
