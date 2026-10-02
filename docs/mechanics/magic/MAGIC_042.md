# Cadeias mágicas referenciadas — parte 042

[Índice](../MAGIC_INDEX.md) · [Como interpretar](../01_PERKS_FUNCIONAMENTO.md) · [Conditions](../03_CONDITIONS_CONTEXTO.md)

Fatos do winner em `e2-ad3c01c2aa184e91`; não são certificação de execução multiplayer. `Rank` e `Priority` são valores serializados. Ausência de campo não significa valor zero. Links não presentes no catálogo devem ser consultados nas evidências originais.

<a id="r-63df943d2705"></a>

## MAG_Stoneflesh

- Identidade estável Housecarl: `05AD5D:Skyrim.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)<br>Parameter1.Link=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)|aliases=False; package=False|
|`Effects[1].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D799A:Skyrim.esm`](../perks/PERKS_046.md#r-872158b13447)<br>Parameter1.Link=[`0D799A:Skyrim.esm`](../perks/PERKS_046.md#r-872158b13447)|aliases=False; package=False|
|`Effects[2].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D799B:Skyrim.esm`](../perks/PERKS_046.md#r-71e49c2b6f93)<br>Parameter1.Link=[`0D799B:Skyrim.esm`](../perks/PERKS_046.md#r-71e49c2b6f93)|aliases=False; package=False|
|`Effects[3].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=059B7A:Skyrim.esm|
|`Effects[0].BaseEffect`|[`059B7A:Skyrim.esm`](../magic/MAGIC_013.md#r-459717ec2c49)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|80|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|120|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=104AB5:Skyrim.esm|
|`Effects[1].BaseEffect`|[`104AB5:Skyrim.esm`](../magic/MAGIC_018.md#r-195829277191)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|80|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|120|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=104ABA:Skyrim.esm|
|`Effects[2].BaseEffect`|[`104ABA:Skyrim.esm`](../magic/MAGIC_018.md#r-b90c1f5bc9ba)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|40|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|120|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=104AB9:Skyrim.esm|
|`Effects[3].BaseEffect`|[`104AB9:Skyrim.esm`](../magic/MAGIC_018.md#r-f3a078078caa)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|40|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|120|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|181|
|`ChargeTime`|1|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44B7:Skyrim.esm`](../perks/PERKS_046.md#r-79b0a2f1ffb0)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-78e958018a94"></a>

## MAG_Ebonyflesh

- Identidade estável Housecarl: `05AD5E:Skyrim.esm`.
- Tipo: `Spell`; winner: `MysticismMagic.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[1].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)<br>Parameter1.Link=[`0D7999:Skyrim.esm`](../perks/PERKS_046.md#r-7ce9164c62bb)|aliases=False; package=False|
|`Effects[1].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D799A:Skyrim.esm`](../perks/PERKS_046.md#r-872158b13447)<br>Parameter1.Link=[`0D799A:Skyrim.esm`](../perks/PERKS_046.md#r-872158b13447)|aliases=False; package=False|
|`Effects[2].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[2].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[0]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`0D799B:Skyrim.esm`](../perks/PERKS_046.md#r-71e49c2b6f93)<br>Parameter1.Link=[`0D799B:Skyrim.esm`](../perks/PERKS_046.md#r-71e49c2b6f93)|aliases=False; package=False|
|`Effects[3].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=059B7C:Skyrim.esm|
|`Effects[0].BaseEffect`|[`059B7C:Skyrim.esm`](../magic/MAGIC_013.md#r-8abb064ee51d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|160|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|120|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=104AB5:Skyrim.esm|
|`Effects[1].BaseEffect`|[`104AB5:Skyrim.esm`](../magic/MAGIC_018.md#r-195829277191)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|160|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|120|
|`Effects[1].Conditions`|[list: 3 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=104ABA:Skyrim.esm|
|`Effects[2].BaseEffect`|[`104ABA:Skyrim.esm`](../magic/MAGIC_018.md#r-b90c1f5bc9ba)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|80|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|120|
|`Effects[2].Conditions`|[list: 3 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=104AB9:Skyrim.esm|
|`Effects[3].BaseEffect`|[`104AB9:Skyrim.esm`](../magic/MAGIC_018.md#r-f3a078078caa)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|80|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|120|
|`Effects[3].Conditions`|[list: 3 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|370|
|`ChargeTime`|1|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44B9:Skyrim.esm`](../perks/PERKS_047.md#r-9f8812f31465)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-479ffb662203"></a>

## GRIM_AB_CON_FamiliarBoost_mammoth

- Identidade estável Housecarl: `05C6A5:LostGrimoire.esp`.
- Tipo: `Spell`; winner: `LostGrimoire.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=05C6A3:LostGrimoire.esp|
|`Effects[0].BaseEffect`|[`05C6A3:LostGrimoire.esp`](../magic/MAGIC_013.md#r-ca3260dfb964)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|50|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=05C6A4:LostGrimoire.esp|
|`Effects[1].BaseEffect`|[`05C6A4:LostGrimoire.esp`](../magic/MAGIC_013.md#r-f2791a7175be)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-30c5e9075c10"></a>

## VoiceFrostBreath1

- Identidade estável Housecarl: `05D172:Skyrim.esm`.
- Tipo: `Spell`; winner: `Dragonborn.esm`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[3].Conditions[0]`|GetIsID|record|Target; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 3|0|Global=020E99:Dragonborn.esm<br>Parameter1.Link=020E99:Dragonborn.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=05D16F:Skyrim.esm|
|`Effects[0].BaseEffect`|[`05D16F:Skyrim.esm`](../magic/MAGIC_013.md#r-c5781dbbc376)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|10|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|5|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0B729F:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0B729F:Skyrim.esm`](../magic/MAGIC_016.md#r-5aa3d975b854)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|5|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=0A44C0:Skyrim.esm|
|`Effects[2].BaseEffect`|[`0A44C0:Skyrim.esm`](../magic/MAGIC_015.md#r-98824fa35ea7)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0.05|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=020E96:Dragonborn.esm|
|`Effects[3].BaseEffect`|[`020E96:Dragonborn.esm`](../magic/MAGIC_009.md#r-3954970152f1)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|0|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|15|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|30|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-041ebeffc754"></a>

## VoiceFrostBreath2

- Identidade estável Housecarl: `05D173:Skyrim.esm`.
- Tipo: `Spell`; winner: `Dragonborn.esm`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[3].Conditions[0]`|GetIsID|record|Target; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 3|0|Global=020E99:Dragonborn.esm<br>Parameter1.Link=020E99:Dragonborn.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=05D170:Skyrim.esm|
|`Effects[0].BaseEffect`|[`05D170:Skyrim.esm`](../magic/MAGIC_013.md#r-96abcb9eb1e7)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|14|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|5|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0B729F:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0B729F:Skyrim.esm`](../magic/MAGIC_016.md#r-5aa3d975b854)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|5|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=0A44C0:Skyrim.esm|
|`Effects[2].BaseEffect`|[`0A44C0:Skyrim.esm`](../magic/MAGIC_015.md#r-98824fa35ea7)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0.5|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=020E96:Dragonborn.esm|
|`Effects[3].BaseEffect`|[`020E96:Dragonborn.esm`](../magic/MAGIC_009.md#r-3954970152f1)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|0|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|15|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|43|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-8a249e6293f8"></a>

## VoiceFrostBreath3

- Identidade estável Housecarl: `05D174:Skyrim.esm`.
- Tipo: `Spell`; winner: `Dragonborn.esm`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[3].Conditions[0]`|GetIsID|record|Target; ref=(null link); index=-1|EqualTo 1|0|Object=000007:Skyrim.esm<br>Parameter1.Link=000007:Skyrim.esm|aliases=False; package=False|
|`Effects[3].Conditions[1]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 3|0|Global=020E99:Dragonborn.esm<br>Parameter1.Link=020E99:Dragonborn.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 4 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=05D171:Skyrim.esm|
|`Effects[0].BaseEffect`|[`05D171:Skyrim.esm`](../magic/MAGIC_013.md#r-a9939c3a328d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|18|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|5|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=0B729F:Skyrim.esm|
|`Effects[1].BaseEffect`|[`0B729F:Skyrim.esm`](../magic/MAGIC_016.md#r-5aa3d975b854)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|5|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=0A44C0:Skyrim.esm|
|`Effects[2].BaseEffect`|[`0A44C0:Skyrim.esm`](../magic/MAGIC_015.md#r-98824fa35ea7)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|1|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=020E96:Dragonborn.esm|
|`Effects[3].BaseEffect`|[`020E96:Dragonborn.esm`](../magic/MAGIC_009.md#r-3954970152f1)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|0|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|15|
|`Effects[3].Conditions`|[list: 2 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|57|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-0fe684681584"></a>

## VoiceBecomeEthereal1

- Identidade estável Housecarl: `05F6EB:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=064D68:Skyrim.esm|
|`Effects[0].BaseEffect`|[`064D68:Skyrim.esm`](../magic/MAGIC_013.md#r-e402e8791edc)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|8|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-8a03c09ce36c"></a>

## VoiceBecomeEthereal2

- Identidade estável Housecarl: `05F6EC:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=064D68:Skyrim.esm|
|`Effects[0].BaseEffect`|[`064D68:Skyrim.esm`](../magic/MAGIC_013.md#r-e402e8791edc)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|13|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-f4dab57dbc80"></a>

## VoiceBecomeEthereal3

- Identidade estável Housecarl: `05F6ED:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=064D68:Skyrim.esm|
|`Effects[0].BaseEffect`|[`064D68:Skyrim.esm`](../magic/MAGIC_013.md#r-e402e8791edc)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|18|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-7fa567a29dd7"></a>

## BVNPCVampireBlinkSpell

- Identidade estável Housecarl: `06127E:Better Vampire NPCs.esp`.
- Tipo: `Spell`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E1:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E1:Better Vampire NPCs.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=06127A:Better Vampire NPCs.esp|
|`Effects[0].BaseEffect`|[`06127A:Better Vampire NPCs.esp`](../magic/MAGIC_013.md#r-96fbc6f05a75)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-a4fa7bd69101"></a>

## VKR_Autoperk_ArmorExpertise_Spell_Ab

- Identidade estável Housecarl: `064A1D:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[1]`|WornApparelHasKeywordCount|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 2|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[1].Conditions[0]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[1]`|WornApparelHasKeywordCount|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 2|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=064A1C:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`064A1C:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_013.md#r-c94269594d2d)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 2 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=56CC66:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[1].BaseEffect`|[`56CC66:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_033.md#r-f8bdf003e81a)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 2 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-0ffeba1f33e4"></a>

## BVNPCVampireMistSpell

- Identidade estável Housecarl: `0661B3:Better Vampire NPCs.esp`.
- Tipo: `Spell`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E2:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E2:Better Vampire NPCs.esp|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0661B6:Better Vampire NPCs.esp|
|`Effects[0].BaseEffect`|[`0661B6:Better Vampire NPCs.esp`](../magic/MAGIC_013.md#r-623a5ebf4b3f)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|300|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-b1223ba2b593"></a>

## MGRArnielSpell

- Identidade estável Housecarl: `06A104:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=06A10B:Skyrim.esm|
|`Effects[0].BaseEffect`|[`06A10B:Skyrim.esm`](../magic/MAGIC_013.md#r-53db5dba4e66)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|1|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|0|
|`CastType`|Concentration|
|`TargetType`|Aimed|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|1|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-680433fdaa8c"></a>

## VKR_Arc_PowerShot_Spell_Ab

- Identidade estável Housecarl: `06C0F4:Skyrim.esm`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 2.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetRandomPercent|record|Subject; ref=(null link); index=-1|LessThan 25|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=06C0F3:Skyrim.esm|
|`Effects[0].BaseEffect`|[`06C0F3:Skyrim.esm`](../magic/MAGIC_013.md#r-16369819d67f)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.25|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Flags`|ManualCostCalc|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-cb41a0a382f7"></a>

## BVNPCDLC1abNightCloakMortal

- Identidade estável Housecarl: `070029:Better Vampire NPCs.esp`.
- Tipo: `Spell`; winner: `Better Vampire NPCs.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E3:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E3:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[0].Conditions[1]`|GetLevel|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[2]`|GetLevel|record|Subject; ref=(null link); index=-1|LessThan 20|0|—|aliases=False; package=False|
|`Effects[0].Conditions[3]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[0].Conditions[4]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[0].Conditions[5]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E3:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E3:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[1].Conditions[1]`|GetLevel|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 20|0|—|aliases=False; package=False|
|`Effects[1].Conditions[2]`|GetLevel|record|Subject; ref=(null link); index=-1|LessThan 30|0|—|aliases=False; package=False|
|`Effects[1].Conditions[3]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[1].Conditions[4]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[1].Conditions[5]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E3:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E3:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[2].Conditions[1]`|GetLevel|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 30|0|—|aliases=False; package=False|
|`Effects[2].Conditions[2]`|GetLevel|record|Subject; ref=(null link); index=-1|LessThan 40|0|—|aliases=False; package=False|
|`Effects[2].Conditions[3]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[2].Conditions[4]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[2].Conditions[5]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E3:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E3:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[3].Conditions[1]`|GetLevel|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 40|0|—|aliases=False; package=False|
|`Effects[3].Conditions[2]`|GetLevel|record|Subject; ref=(null link); index=-1|LessThan 50|0|—|aliases=False; package=False|
|`Effects[3].Conditions[3]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[3].Conditions[4]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[3].Conditions[5]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E3:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E3:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[4].Conditions[1]`|GetLevel|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 50|0|—|aliases=False; package=False|
|`Effects[4].Conditions[2]`|GetLevel|record|Subject; ref=(null link); index=-1|LessThan 60|0|—|aliases=False; package=False|
|`Effects[4].Conditions[3]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[4].Conditions[4]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[4].Conditions[5]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E3:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E3:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[5].Conditions[1]`|GetLevel|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 60|0|—|aliases=False; package=False|
|`Effects[5].Conditions[2]`|GetLevel|record|Subject; ref=(null link); index=-1|LessThan 70|0|—|aliases=False; package=False|
|`Effects[5].Conditions[3]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[5].Conditions[4]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[5].Conditions[5]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[6].Conditions[0]`|GetGlobalValue|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Global=0A90E3:Better Vampire NPCs.esp<br>Parameter1.Link=0A90E3:Better Vampire NPCs.esp|aliases=False; package=False|
|`Effects[6].Conditions[1]`|GetLevel|record|Subject; ref=(null link); index=-1|GreaterThanOrEqualTo 70|0|—|aliases=False; package=False|
|`Effects[6].Conditions[2]`|IsInCombat|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|
|`Effects[6].Conditions[3]`|GetIsRace|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Race=00283A:Dawnguard.esm<br>Parameter1.Link=00283A:Dawnguard.esm|aliases=False; package=False|
|`Effects[6].Conditions[4]`|IsBlocking|record|Subject; ref=(null link); index=-1|EqualTo 1|0|—|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 7 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=070027:Better Vampire NPCs.esp|
|`Effects[0].BaseEffect`|[`070027:Better Vampire NPCs.esp`](../magic/MAGIC_014.md#r-630f9f66afab)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|8|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 6 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=070027:Better Vampire NPCs.esp|
|`Effects[1].BaseEffect`|[`070027:Better Vampire NPCs.esp`](../magic/MAGIC_014.md#r-630f9f66afab)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|10|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|1|
|`Effects[1].Conditions`|[list: 6 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=070027:Better Vampire NPCs.esp|
|`Effects[2].BaseEffect`|[`070027:Better Vampire NPCs.esp`](../magic/MAGIC_014.md#r-630f9f66afab)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|12|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 6 item(s)]|
|`Effects[3]`|[Effect] BaseEffect=070027:Better Vampire NPCs.esp|
|`Effects[3].BaseEffect`|[`070027:Better Vampire NPCs.esp`](../magic/MAGIC_014.md#r-630f9f66afab)|
|`Effects[3].Data`|[EffectData]|
|`Effects[3].Data.Magnitude`|14|
|`Effects[3].Data.Area`|0|
|`Effects[3].Data.Duration`|1|
|`Effects[3].Conditions`|[list: 6 item(s)]|
|`Effects[4]`|[Effect] BaseEffect=070027:Better Vampire NPCs.esp|
|`Effects[4].BaseEffect`|[`070027:Better Vampire NPCs.esp`](../magic/MAGIC_014.md#r-630f9f66afab)|
|`Effects[4].Data`|[EffectData]|
|`Effects[4].Data.Magnitude`|16|
|`Effects[4].Data.Area`|0|
|`Effects[4].Data.Duration`|1|
|`Effects[4].Conditions`|[list: 6 item(s)]|
|`Effects[5]`|[Effect] BaseEffect=070027:Better Vampire NPCs.esp|
|`Effects[5].BaseEffect`|[`070027:Better Vampire NPCs.esp`](../magic/MAGIC_014.md#r-630f9f66afab)|
|`Effects[5].Data`|[EffectData]|
|`Effects[5].Data.Magnitude`|18|
|`Effects[5].Data.Area`|0|
|`Effects[5].Data.Duration`|1|
|`Effects[5].Conditions`|[list: 6 item(s)]|
|`Effects[6]`|[Effect] BaseEffect=070027:Better Vampire NPCs.esp|
|`Effects[6].BaseEffect`|[`070027:Better Vampire NPCs.esp`](../magic/MAGIC_014.md#r-630f9f66afab)|
|`Effects[6].Data`|[EffectData]|
|`Effects[6].Data.Magnitude`|22|
|`Effects[6].Data.Area`|0|
|`Effects[6].Data.Duration`|1|
|`Effects[6].Conditions`|[list: 5 item(s)]|
|`Flags`|0|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-d12726a2cf73"></a>

## MAG_PilgrimTallPapaLadyDummy

- Identidade estável Housecarl: `07A178:Pilgrim.esp`.
- Tipo: `Spell`; winner: `Pilgrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Health<br>Parameter1=Health|aliases=False; package=False|
|`Effects[1].Conditions[0]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Magicka<br>Parameter1=Magicka|aliases=False; package=False|
|`Effects[2].Conditions[0]`|GetActorValuePercent|record|Subject; ref=(null link); index=-1|LessThanOrEqualTo 0.5|0|ActorValue=Stamina<br>Parameter1=Stamina|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=38B4BE:Pilgrim.esp|
|`Effects[0].BaseEffect`|[`38B4BE:Pilgrim.esp`](../magic/MAGIC_030.md#r-1185e280cde5)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|50|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 1 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=38B4BF:Pilgrim.esp|
|`Effects[1].BaseEffect`|[`38B4BF:Pilgrim.esp`](../magic/MAGIC_030.md#r-a05321597cf6)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|50|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|0|
|`Effects[1].Conditions`|[list: 1 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=38B4C0:Pilgrim.esp|
|`Effects[2].BaseEffect`|[`38B4C0:Pilgrim.esp`](../magic/MAGIC_030.md#r-6a10e4f27eae)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|50|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|0|
|`Effects[2].Conditions`|[list: 1 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-ea5e0de76e51"></a>

## VKR_Bck_QuickReflexes_Spell_ProcOnSelf

- Identidade estável Housecarl: `07B101:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=07B100:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`07B100:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_014.md#r-34f663e144f0)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0.05|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-7c633cdfc22d"></a>

## VKR_Hea_HeavyArmorOnHitProc_Spell_Ab

- Identidade estável Housecarl: `07E6FA:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD3:Skyrim.esm<br>Parameter1.Link=06BBD3:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm<br>Parameter1.Link=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm<br>Parameter1.Link=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[3]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm<br>Parameter1.Link=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[4]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06C0EE:Skyrim.esm<br>Parameter1.Link=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[5]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-1140a94a546f)<br>Parameter1.Link=[`008028:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_052.md#r-1140a94a546f)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=07E6F9:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`07E6F9:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_014.md#r-3b659e2bf371)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 6 item(s)]|
|`Flags`|IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|

<a id="r-0bb0cb8bc464"></a>

## MAG_DeadThrall

- Identidade estável Housecarl: `07E8DF:Skyrim.esm`.
- Tipo: `Spell`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 4.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 2 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=07E8E0:Skyrim.esm|
|`Effects[0].BaseEffect`|[`07E8E0:Skyrim.esm`](../magic/MAGIC_014.md#r-dfb6c4c65175)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|40|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|999999|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=08BB2A:Skyrim.esm|
|`Effects[1].BaseEffect`|[`08BB2A:Skyrim.esm`](../magic/MAGIC_015.md#r-fe1a9dc6438d)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|3|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|999999|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Aimed|
|`EquipmentType`|013F45:Skyrim.esm|
|`BaseCost`|672|
|`ChargeTime`|6|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44BE:Skyrim.esm`](../perks/PERKS_049.md#r-bafe0e87a888)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-974f217265b5"></a>

## MAG_Blizzard

- Identidade estável Housecarl: `07E8E4:Skyrim.esm`.
- Tipo: `Spell`; winner: `AETHERIUS - BALANCE.esp`; profundidade de override: 5.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0B79FE:Skyrim.esm|
|`Effects[0].BaseEffect`|[`0B79FE:Skyrim.esm`](../magic/MAGIC_016.md#r-a4c4f44e7140)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|10|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=BD4421:MysticismMagic.esp|
|`Effects[1].BaseEffect`|[`BD4421:MysticismMagic.esp`](../magic/MAGIC_033.md#r-e45faf7b9f8d)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0.01|
|`Effects[1].Data.Area`|0|
|`Effects[1].Data.Duration`|10|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=BDE626:MysticismMagic.esp|
|`Effects[2].BaseEffect`|[`BDE626:MysticismMagic.esp`](../magic/MAGIC_033.md#r-5bdba18a1a9a)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|0|
|`Effects[2].Data.Area`|0|
|`Effects[2].Data.Duration`|1|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F45:Skyrim.esm|
|`BaseCost`|520|
|`ChargeTime`|6|
|`Type`|Spell|
|`HalfCostPerk`|[`0C44C2:Skyrim.esm`](../perks/PERKS_051.md#r-e9763c3626fb)|
|`CastDuration`|0|
|`Range`|0|

<a id="r-8593e90f907b"></a>

## VoiceKynesPeace1

- Identidade estável Housecarl: `082A34:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=082A37:Skyrim.esm|
|`Effects[0].BaseEffect`|[`082A37:Skyrim.esm`](../magic/MAGIC_014.md#r-5ac78d7395ba)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|75|
|`Effects[0].Data.Duration`|60|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=06E0C1:Skyrim.esm|
|`Effects[1].BaseEffect`|[`06E0C1:Skyrim.esm`](../magic/MAGIC_014.md#r-6abad52cad29)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|75|
|`Effects[1].Data.Duration`|60|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=10E4F6:Skyrim.esm|
|`Effects[2].BaseEffect`|[`10E4F6:Skyrim.esm`](../magic/MAGIC_019.md#r-70803f44a3ab)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|20|
|`Effects[2].Data.Area`|75|
|`Effects[2].Data.Duration`|60|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, AreaEffectIgnoresLOS|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F45:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-4284ab2017f7"></a>

## VoiceKynesPeace2

- Identidade estável Housecarl: `082A39:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=082A36:Skyrim.esm|
|`Effects[0].BaseEffect`|[`082A36:Skyrim.esm`](../magic/MAGIC_014.md#r-4924972e38f5)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|150|
|`Effects[0].Data.Duration`|120|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=06E0C1:Skyrim.esm|
|`Effects[1].BaseEffect`|[`06E0C1:Skyrim.esm`](../magic/MAGIC_014.md#r-6abad52cad29)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|150|
|`Effects[1].Data.Duration`|120|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=10E4F7:Skyrim.esm|
|`Effects[2].BaseEffect`|[`10E4F7:Skyrim.esm`](../magic/MAGIC_019.md#r-333fe25133d6)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|20|
|`Effects[2].Data.Area`|150|
|`Effects[2].Data.Duration`|120|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, AreaEffectIgnoresLOS|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F45:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-a56b1307f61c"></a>

## VoiceKynesPeace3

- Identidade estável Housecarl: `082A3A:Skyrim.esm`.
- Tipo: `Spell`; winner: `Skyrim.esm`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 3 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=082A38:Skyrim.esm|
|`Effects[0].BaseEffect`|[`082A38:Skyrim.esm`](../magic/MAGIC_014.md#r-d2d3ab157154)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|20|
|`Effects[0].Data.Area`|250|
|`Effects[0].Data.Duration`|180|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Effects[1]`|[Effect] BaseEffect=06E0C1:Skyrim.esm|
|`Effects[1].BaseEffect`|[`06E0C1:Skyrim.esm`](../magic/MAGIC_014.md#r-6abad52cad29)|
|`Effects[1].Data`|[EffectData]|
|`Effects[1].Data.Magnitude`|0|
|`Effects[1].Data.Area`|250|
|`Effects[1].Data.Duration`|180|
|`Effects[1].Conditions`|[list: 0 item(s)]|
|`Effects[2]`|[Effect] BaseEffect=10E4F8:Skyrim.esm|
|`Effects[2].BaseEffect`|[`10E4F8:Skyrim.esm`](../magic/MAGIC_019.md#r-9dd8a8000db4)|
|`Effects[2].Data`|[EffectData]|
|`Effects[2].Data.Magnitude`|20|
|`Effects[2].Data.Area`|250|
|`Effects[2].Data.Duration`|180|
|`Effects[2].Conditions`|[list: 0 item(s)]|
|`Flags`|ManualCostCalc, AreaEffectIgnoresLOS|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F45:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Voice|
|`CastDuration`|0|
|`Range`|0|

<a id="r-b8e49b91970f"></a>

## VKR_Lia_EvasiveLeap_Spell_ProcOnSelf

- Identidade estável Housecarl: `0868A5:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

Nenhuma CTDA expandida neste record. Isso não elimina conditions em links ou scripts.

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0868A7:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`0868A7:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_014.md#r-f2583253f8d6)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|1|
|`Effects[0].Conditions`|[list: 0 item(s)]|
|`Flags`|3473408|
|`CastType`|FireAndForget|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0|
|`Type`|Spell|
|`CastDuration`|0|
|`Range`|0|

<a id="r-e9a548e2e4f6"></a>

## VKR_Lia_EvasiveLeap_Spell_Ab

- Identidade estável Housecarl: `0868A8:Vokrii - Minimalistic Perks of Skyrim.esp`.
- Tipo: `Spell`; winner: `Vokrii - Minimalistic Perks of Skyrim.esp`; profundidade de override: 1.

### Conditions completas extraídas

|Caminho CTDA|Função|Aba|RunOn|Comparação|Flags (OR etc.)|Parâmetros|Contexto adicional|
|---|---|---|---|---|---|---|---|
|`Effects[0].Conditions[0]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 0|0|Keyword=06BBD2:Skyrim.esm<br>Parameter1.Link=06BBD2:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[1]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0ED:Skyrim.esm<br>Parameter1.Link=06C0ED:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[2]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EC:Skyrim.esm<br>Parameter1.Link=06C0EC:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[3]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Keyword=06C0EF:Skyrim.esm<br>Parameter1.Link=06C0EF:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[4]`|WornHasKeyword|record|Subject; ref=(null link); index=-1|EqualTo 1|OR|Keyword=06C0EE:Skyrim.esm<br>Parameter1.Link=06C0EE:Skyrim.esm|aliases=False; package=False|
|`Effects[0].Conditions[5]`|HasPerk|record|Subject; ref=(null link); index=-1|EqualTo 1|0|Perk=[`007AB5:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_053.md#r-d175b0dbe844)<br>Parameter1.Link=[`007AB5:Vokrii - Minimalistic Perks of Skyrim.esp`](../perks/PERKS_053.md#r-d175b0dbe844)|aliases=False; package=False|

### Campos operacionais adicionais

|Caminho|Valor observado|
|---|---|
|`Effects`|[list: 1 item(s)]|
|`Effects[0]`|[Effect] BaseEffect=0868A4:Vokrii - Minimalistic Perks of Skyrim.esp|
|`Effects[0].BaseEffect`|[`0868A4:Vokrii - Minimalistic Perks of Skyrim.esp`](../magic/MAGIC_014.md#r-451cc354a307)|
|`Effects[0].Data`|[EffectData]|
|`Effects[0].Data.Magnitude`|0|
|`Effects[0].Data.Area`|0|
|`Effects[0].Data.Duration`|0|
|`Effects[0].Conditions`|[list: 6 item(s)]|
|`Flags`|ManualCostCalc, IgnoreResistance, NoAbsorbOrReflect|
|`CastType`|ConstantEffect|
|`TargetType`|Self|
|`EquipmentType`|013F44:Skyrim.esm|
|`BaseCost`|0|
|`ChargeTime`|0.5|
|`Type`|Ability|
|`CastDuration`|0|
|`Range`|0|
