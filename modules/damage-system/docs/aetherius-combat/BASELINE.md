# Baseline — 30/09/2026

HEADs remotos obtidos por clone antes das alterações:

| Projeto | HEAD |
|---|---|
| Base_Aetherius_SkyMP | e1c483346447c29972cabf28b17eb5febc91bd04 |
| AetheriusClassSystem | c9d811f10524c27648db552f6185433df917f67d |
| AetheriusDamageSystem | 70fccfdef533a9599a85951c9594af3945ff8d2b |

Todos coincidem com os baselines. A pasta de destino estava vazia e foi populada com o DamageSystem. Cópias de referência e dependências ficam ignoradas dentro desta pasta. Nenhum projeto externo foi editado.

Housecarl 2.0.0+5e3c744862bc17c85ebe850830603a9a3e6f0779, perfil `AETHERIUS - GRAFICO - QUALIDADE`, 551 mods e 423 plugins ativos, epoch `e2-d180c51adf12773b`. A epoch é evidência de auditoria, não substitui os hashes do manifesto de produção. A versão nominal/hash binário do Vokrii não foi inferida de descrições públicas.

Código lido: fórmulas, OnHit/OnWeaponHit/OnSpellHit, MpActor, change forms, ScampServer, module registry, FormDesc, libespm WEAP/ARMO; types, skillResolver, perkResolver, clientPerkApplier, classSystem, levelingSystem, playerRepository, classes-config, perk-mappings e AUDIT do ClassSystem.

O baseline não possuía código nem testes no DamageSystem. A Base tem Catch2 e requer vcpkg/submódulos e Visual Studio 2022; ClassSystem usa Jest/TypeScript. Os resultados efetivamente executados constam em VALIDATION.md.

Restrição do usuário: alterações somente em AetheriusDamageSystem. Integrações externas são entregues como patches revisáveis e validadas em cópias internas. Não foram aplicadas a uma instalação externa nem publicadas.

O prompt pede GPT-5.6 Sol/high; esta conversa não permite trocar o próprio modelo executor. Não foi criada outra conversa para contornar essa limitação.
