#include "aetherius_combat/physical/PhysicalDamagePipeline.h"
#include "aetherius_combat/magic/MagicDamagePipeline.h"
#include "aetherius_combat/effects/ActiveEffectStore.h"
#include "aetherius_combat/providers/CombatProviderRegistry.h"
#include "aetherius_combat/stats/CombatStatsCache.h"
#include <fstream>
#include <iostream>
#include <limits>
#include <random>
#include <chrono>
using namespace aetherius::combat;
namespace {
int checks=0;
void Check(bool v,const char* why) { ++checks; if(!v) throw std::runtime_error(why); }
void Near(double a,double b) { Check(std::abs(a-b)<1e-8,"numeric mismatch"); }
template<class F> void Reject(F f) { bool rejected=false; try {f();} catch(const std::exception&) {rejected=true;} Check(rejected,"expected rejection"); }
nlohmann::json Read(const char* file) {
  std::ifstream in(std::string(COMBAT_CONFIG_DIR)+"/"+file);
  if(!in) throw std::runtime_error("missing fixture");
  nlohmann::json j; in>>j; return j;
}
nlohmann::json Profile(uint64_t revision=1) {
  return {{"schemaVersion",1},{"revision",revision},{"skills",{{"OneHanded",60},{"Block",80},{"HeavyArmor",60}}},
    {"perks",nlohmann::json::array()},{"baseAttributes",{{"health",300},{"magicka",120},{"stamina",160}}}};
}
struct FixedRng:CombatRng { double value=.5; int calls=0; double Unit() override { ++calls; return value; } };
struct Refinement:IItemCombatModifierProvider {
  ItemCombatModifiers GetModifiers(const ItemInstanceView& i) const override {
    if(i.instanceId!="authorized-1") return {};
    return {3,1.2,20,1.1,"PROFESSION_REFINEMENT","approved-7"};
  }
};
}
int main() {
  try {
    CombatSettings s=CombatSettings::FromJson(Read("aetherius-combat.json"));
    Near(ArmorReduction(-1),0); Near(ArmorReduction(0),0); Near(ArmorReduction(1),.0016);
    Near(ArmorReduction(499),.7984); Near(ArmorReduction(500),.8); Near(ArmorReduction(501),.8002);
    Near(ArmorReduction(750),.85); Near(ArmorReduction(999),.8998); Near(ArmorReduction(1000),.9); Near(ArmorReduction(5000),.9);
    Reject([]{ArmorReduction(std::numeric_limits<double>::quiet_NaN());});
    Reject([]{ArmorReduction(std::numeric_limits<double>::infinity());});
    auto invalid=Read("aetherius-combat.json"); invalid["armor"]["hardCapRating"]=500;
    Reject([&]{CombatSettings::FromJson(invalid);});
    invalid=Read("aetherius-combat.json"); invalid["enabled"]=1; Reject([&]{CombatSettings::FromJson(invalid);});
    invalid=Read("aetherius-combat.json"); invalid["global"]["physicalDamageMultiplier"]="1"; Reject([&]{CombatSettings::FromJson(invalid);});
    invalid=Read("aetherius-combat.json"); invalid["typo"]=1; Reject([&]{CombatSettings::FromJson(invalid);});
    invalid=Read("aetherius-combat.json"); invalid["effects"]["tickMilliseconds"]=250.5; Reject([&]{CombatSettings::FromJson(invalid);});
    Check(!s.enabled && s.mode=="legacy","rollback default");

    ActorCombatState state; Check(state.Apply(CombatProfile::FromJson(Profile(2))),"new profile");
    Check(!state.Apply(CombatProfile::FromJson(Profile(1))),"stale profile");
    Check(!state.Apply(CombatProfile::FromJson(Profile(2))),"equal revision");
    Near(state.profile.Skill("OneHanded"),60);
    auto bad=Profile(); bad["skills"]["OneHanded"]=101; Reject([&]{CombatProfile::FromJson(bad);});
    bad=Profile(); bad["skills"]["ClientDamage"]=999; Reject([&]{CombatProfile::FromJson(bad);});
    bad=Profile(); bad["revision"]=1.5; Reject([&]{CombatProfile::FromJson(bad);});
    bad=Profile(); bad["schemaVersion"]=2; Reject([&]{CombatProfile::FromJson(bad);});
    bad=Profile(); bad["perks"]={{{"key","Skyrim.esm:0BABE4"},{"rank",1},{"source","CLIENT"}}}; Reject([&]{CombatProfile::FromJson(bad);});
    bad=Profile(); bad["strategyUsed"]="FALLBACK_MOCK"; Reject([&]{CombatProfile::FromJson(bad);});
    const auto saved=state.profile.ToJson(); auto reconnected=CombatProfile::FromJson(saved);
    Near(reconnected.Skill("OneHanded"),60); Check(reconnected.revision==2,"restart revision");
    auto reset=Profile(3); reset["skills"]=nlohmann::json::object(); Check(state.Apply(CombatProfile::FromJson(reset)),"class reset"); Near(state.profile.Skill("OneHanded"),0);

    auto key=StableFormKey::Parse("Skyrim.ESM:0babe4"); Check(key==StableFormKey::Parse("skyrim.esm:0BABE4"),"case normalize");
    StableFormKey::Parse("Light.esl:000ABC"); StableFormKey::Parse("ESPFE.esp:000ABC");
    Reject([]{StableFormKey::Parse("FE123ABC");}); Reject([]{StableFormKey::Parse("Skyrim.esm:000000");}); Reject([]{StableFormKey::Parse("../Skyrim.esm:0BABE4");});

    PerkRegistry perks; auto catalog=Read("verified-perks.json"); perks.Load(catalog);
    auto attack=CombatProfile::FromJson(Profile()),defense=CombatProfile::FromJson(Profile());
    FixedRng rng; CombatTrace trace(true);
    DamageContext c{attack,defense,"OneHanded",{StableFormKey::Parse("Skyrim.esm:01E713")},4,0,1,0};
    for(double skill:{0.,20.,40.,60.,80.,100.}) {
      attack.skills["OneHanded"]=skill; Near(PhysicalDamage(c,s,perks,rng,trace).health,4*(1+.005*skill));
    }
    attack.skills["OneHanded"]=60;
    attack.perks={{key,1}}; perks.Validate(attack);
    Near(PhysicalDamage(c,s,perks,rng,trace).health,4*1.3*1.6);
    c.armor=500; Near(PhysicalDamage(c,s,perks,rng,trace).health,1.664); c.armor=0;
    c.weaponKeywords.clear(); Near(PhysicalDamage(c,s,perks,rng,trace).health,5.2);
    c.weaponKeywords={StableFormKey::Parse("Skyrim.esm:01E713")};
    // Unknown handler is rejected at profile boundary; Matches also safely handles conditions.
    auto unknown=attack; unknown.perks.push_back({StableFormKey::Parse("test.esp:000001"),1}); Reject([&]{perks.Validate(unknown);});
    unknown=attack; unknown.perks[0].rank=2; Reject([&]{perks.Validate(unknown);});
    auto disabled=attack; disabled.perks.push_back({StableFormKey::Parse("Skyrim.esm:079343"),1});
    Near(perks.Multiplier("CalculateWeaponDamage",disabled,c.weaponKeywords,trace),1);
    c.criticalChance=1; c.criticalBase=2;
    Near(PhysicalDamage(c,s,perks,rng,trace).health,4*1.3*1.6+2*4); // .05*60 + 1 critical only
    c.criticalChance=0; c.criticalBase=0;
    Check(rng.calls==0,"no RNG draw for zero/one chance");
    // Every verified mastery, including false weapon and forbidden keyword conditions.
    for(const auto& p:catalog.at("perks")) {
      auto prof=CombatProfile::FromJson(Profile()); auto perkKey=StableFormKey::Parse(p.at("key")); prof.perks={{perkKey,1}};
      perks.Validate(prof);
      for(const auto& effect:p.at("effects")) {
        const auto skill=effect.at("skill").get<std::string>(); prof.skills[skill]=60;
        std::vector<StableFormKey> kw;
        for(const auto& group:effect.at("conditions")) for(const auto& cond:group)
          if(cond.at("function")=="HasKeyword" && cond.at("expected")==true) kw.push_back(StableFormKey::Parse(cond.at("key")));
        const auto point=effect.at("entryPoint").get<std::string>();
        Near(perks.Multiplier(point,prof,kw,trace),1+60*effect.at("coefficient").get<double>());
        bool requiresKeyword=false;
        for(const auto& group:effect.at("conditions")) for(const auto& cond:group)
          if(cond.at("function")=="HasKeyword") requiresKeyword=true;
        if(requiresKeyword) Near(perks.Multiplier(point,prof,{},trace),1);
      }
    }
    defense.perks={{StableFormKey::Parse("Skyrim.esm:0BCD2A"),1}};
    auto heavy={StableFormKey::Parse("Skyrim.esm:06BBD2")};
    Near(ArmorPiece(13,"HeavyArmor",defense,heavy,0,1,perks,s,trace),13*1.3*1.6);
    auto forbidden=std::vector<StableFormKey>(heavy); forbidden.push_back(StableFormKey::Parse("Skyrim.esm:0965B2"));
    Near(ArmorPiece(13,"HeavyArmor",defense,forbidden,0,1,perks,s,trace),13*1.3);
    c.blocked=true; defense.perks.clear(); Near(PhysicalDamage(c,s,perks,rng,trace).health,8.32*(1-.44));
    defense.perks={{StableFormKey::Parse("Skyrim.esm:0BCCAE"),1}};
    Near(BlockReduction(defense,perks,s,trace),.44*1.4); c.blocked=false;
    Check(!trace.Steps().empty(),"trace steps"); CombatTrace off; PhysicalDamage(c,s,perks,rng,off); Check(off.Steps().empty(),"trace off");
    // Client skill spoof has no field in DamageContext or CombatProfile API.
    const double clientSkill=93; (void)clientSkill; Near(PhysicalDamage(c,s,perks,rng,trace).health,8.32);

    CombatProviderRegistry providers; ItemInstanceView item{7,StableFormKey::Parse("Skyrim.esm:01397E"),"authorized-1"};
    auto neutral=providers.Get(item,trace); Near(neutral.flatWeaponDamage,0); Near(neutral.weaponDamageMultiplier,1);
    providers.Register(std::make_shared<Refinement>());
    auto refined=providers.Get(item,trace); Near(refined.flatWeaponDamage,3); Near(refined.weaponDamageMultiplier,1.2);
    item.instanceId="client-claim"; Near(providers.Get(item,trace).flatWeaponDamage,0);
    CombatStatsCache<double> cache; CombatRevision rev{1,1,1,providers.Revision()}; int builds=0;
    auto build=[&]{++builds;return 13.;}; Near(cache.Get(rev,build),13); cache.Get(rev,build); Check(builds==1,"cache hit");
    ++rev.profile; cache.Get(rev,build); ++rev.equipment; cache.Get(rev,build); ++rev.effects; cache.Get(rev,build); ++rev.providers; cache.Get(rev,build);
    Check(builds==5 && cache.hits==1,"cache invalidation");

    CombatSnapshot snapshot; snapshot.magicResistance=.25; snapshot.fireResistance=.5;
    MagicDamageComponent magic{key,key,Resource::Health,Element::Fire,100};
    Near(MagicDamage({magic},snapshot,s,rng,trace).health,37.5);
    snapshot.fireResistance=-.5; Near(MagicDamage({magic},snapshot,s,rng,trace).health,112.5);
    snapshot.fireResistance=2; snapshot.magicResistance=2; Near(MagicDamage({magic},snapshot,s,rng,trace).health,2.25);
    snapshot.magicResistance=0; snapshot.frostResistance=.5; snapshot.shockResistance=.25;
    auto frost=magic; frost.element=Element::Frost; frost.resource=Resource::Stamina;
    auto shock=magic; shock.element=Element::Shock; shock.resource=Resource::Magicka;
    auto components=MagicDamage({frost,shock},snapshot,s,rng,trace); Near(components.stamina,50); Near(components.magicka,75); Near(components.health,0);
    snapshot.absorptionChance=.3; rng.value=.2; Check(MagicDamage({magic},snapshot,s,rng,trace).absorbed,"absorption success");
    rng.value=.4; Check(!MagicDamage({magic},snapshot,s,rng,trace).absorbed,"absorption failure");
    snapshot.absorptionChance=1.1; Reject([&]{MagicDamage({magic},snapshot,s,rng,trace);});

    for(auto rule:{StackingRule::Coexist,StackingRule::Add,StackingRule::Strongest,StackingRule::Latest,StackingRule::RefreshDuration,StackingRule::MaxN,StackingRule::UniqueSource}) {
      ActiveEffectStore effects;
      ActiveEffectInstance e; e.effectKey=key; e.sourceForm=key; e.magnitude=-10; e.expiresAt=1000; e.stackingGroup="armor"; e.stackingRule=rule;
      effects.Add(e,0); e.magnitude=-20; effects.Add(e,0);
      Near(effects.Sum("armor"),rule==StackingRule::Coexist || rule==StackingRule::Add?-30:rule==StackingRule::RefreshDuration?-10:-20);
      effects.Expire(1000); Check(effects.Size()==0,"expiry boundary");
    }
    auto effects=std::make_shared<ActiveEffectStore>();
    ActiveEffectInstance e; e.effectKey=key; e.sourceForm=key; e.magnitude=4; e.expiresAt=1000; e.tickInterval=250; e.stackingGroup="burn"; e.persistent=true;
    effects->Add(e,0); EffectScheduler scheduler; scheduler.Attach(1,effects); int pulses=0;
    auto apply=[&](uint32_t,const auto&){++pulses;}; auto channel=[](uint32_t){return true;};
    scheduler.Tick(249,channel,apply); Check(pulses==0,"not due"); scheduler.Tick(250,channel,apply); Check(pulses==1,"dot tick");
    scheduler.Tick(250,channel,apply); Check(pulses==1,"same tick replay"); scheduler.Tick(900,channel,apply); Check(pulses==2,"skip missed pulses");
    auto persisted=effects->Save(); auto restored=ActiveEffectStore::Restore(persisted,900); Check(restored.Size()==1,"persistent restore");
    Check(ActiveEffectStore::Restore(persisted,1000).Size()==0,"expired reconnect");
    e.concentration=true; e.stackingGroup="concentration"; effects->Add(e,900);
    scheduler.Tick(950,[](uint32_t){return false;},apply); Check(effects->Size()==1,"cancel channel");
    scheduler.Detach(1); scheduler.Tick(1000,channel,apply); Check(pulses==2,"logout detached");
    persisted["schemaVersion"]=2; Reject([&]{ActiveEffectStore::Restore(persisted,900);});
    e.magnitude=std::numeric_limits<double>::quiet_NaN(); Reject([&]{effects->Add(e,950);});

    // 40x40 synthetic workload: RAM-only core; no disk/DB in loop.
    const auto start=std::chrono::steady_clock::now();
    double total=0; c.armor=500;
    for(int i=0;i<160000;i++) total+=PhysicalDamage(c,s,perks,rng,off).health;
    Check(total>0,"benchmark results");
    std::cout << "PASS " << checks << " checks; 160000 hits in " << std::chrono::duration<double,std::milli>(std::chrono::steady_clock::now()-start).count() << " ms\n";
    return 0;
  } catch(const std::exception& e) { std::cerr << "FAIL after " << checks << " checks: " << e.what() << '\n'; return 1; }
}
