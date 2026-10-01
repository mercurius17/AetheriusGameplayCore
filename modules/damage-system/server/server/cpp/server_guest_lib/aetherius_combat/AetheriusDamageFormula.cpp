#include "AetheriusDamageFormula.h"
#include "MpActor.h"
#include "WorldState.h"
#include "forms/FormResolver.h"
#include "physical/PhysicalDamagePipeline.h"
#include <chrono>
#include <limits>
#include <spdlog/spdlog.h>

namespace aetherius::combat {
void VerifyAuditedCatalog(const nlohmann::json& catalog,espm::Loader& loader) {
  const auto info=loader.GetFilesInfo();
  const auto& browser=loader.GetBrowser();
  std::set<std::string> pinned;
  for(const auto& pin:catalog.at("pluginPins")) {
    const auto filename=pin.at("filename").get<std::string>();
    const auto found=info.find(filename);
    if(found==info.end() || found->second.crc32!=pin.at("crc32").get<uint32_t>() ||
       found->second.size!=pin.at("size").get<size_t>())
      throw std::runtime_error("audited combat plugin checksum mismatch: "+filename);
    pinned.insert(filename);
  }
  for(const auto& row:catalog.at("perks")) {
    const auto key=StableFormKey::Parse(row.at("key"));
    const auto record=browser.LookupById(Resolve(key,browser));
    const auto* source=browser.GetSourceMetadata(record.fileIdx);
    const auto winner=row.at("winner").get<std::string>();
    const char* editorId=record.rec?record.rec->GetEditorId(browser.GetCache()):nullptr;
    if(!record.rec || record.rec->GetType()!="PERK" || !source || source->fileName!=winner ||
       !editorId || editorId!=row.at("editorId").get<std::string>() || !pinned.count(winner))
      throw std::runtime_error("audited combat winner mismatch: "+key.ToString());
  }
}
AetheriusDamageFormula::AetheriusDamageFormula(CombatSettings s,PerkRegistry p,Observe o)
  : settings(std::move(s)),perks(std::move(p)),observe(std::move(o)),random(std::random_device{}()) {}

const EquipmentCombatStats& AetheriusDamageFormula::Equipment(const MpActor& actor) const {
  const auto& state=actor.GetCombatState();
  auto revision=state.revision; revision.providers=providers.Revision();
  auto& cache=actor.GetCombatEquipmentCache();
  return cache.Get(revision,[&] {
    perks.Validate(state.profile);
    EquipmentCombatStats stats;
    auto* world=actor.GetParent();
    if(!world) throw std::runtime_error("combat actor has no world");
    const auto& browser=world->GetEspm().GetBrowser();
    CombatTrace trace(settings.trace);
    stats.unarmedDamage=espm::GetData<espm::RACE>(actor.GetRaceId(),world).unarmedDamage;
    for(const auto& item:actor.GetEquipment().inv.entries) {
      if(item.GetWorn()==Inventory::Worn::None || !item.count) continue;
      const auto record=browser.LookupById(item.baseId);
      if(!record.rec) throw std::runtime_error("equipped record missing");
      std::vector<StableFormKey> keywords;
      for(auto local:record.rec->GetKeywordIds(browser.GetCache()))
        keywords.push_back(Stable(record.ToGlobalId(local),browser));
      // Default provider is neutral. Existing client-origin health/refinement extras
      // are intentionally excluded until a persistent authoritative instance adapter exists.
      CombatTrace itemTrace(settings.trace);
      const auto modifiers=providers.Get({actor.GetFormId(),Stable(item.baseId,browser),""},itemTrace);
      if(record.rec->GetType()=="WEAP") {
        const auto w=espm::GetData<espm::WEAP>(item.baseId,world);
        if(!w.weapData || !w.weapDNAM) throw std::runtime_error("invalid WEAP data");
        std::string skill;
        switch(w.weapDNAM->animType) {
          case espm::WEAP::AnimType::OneHandSword: case espm::WEAP::AnimType::OneHandDagger:
          case espm::WEAP::AnimType::OneHandAxe: case espm::WEAP::AnimType::OneHandMace: skill="OneHanded"; break;
          case espm::WEAP::AnimType::TwoHandSword: case espm::WEAP::AnimType::TwoHandAxe: skill="TwoHanded"; break;
          case espm::WEAP::AnimType::Bow: case espm::WEAP::AnimType::Crossbow: skill="Marksman"; break;
          default: throw std::runtime_error("unsupported weapon animation type");
        }
        if(stats.weapons.count(item.baseId)) throw std::runtime_error("equipped item instances share a base ID; authoritative instance selection required");
        stats.weapons[item.baseId]={static_cast<double>(w.weapData->damage),modifiers.flatWeaponDamage,modifiers.weaponDamageMultiplier,skill,std::move(keywords),itemTrace.Steps()};
      } else if(record.rec->GetType()=="ARMO") {
        const auto a=espm::GetData<espm::ARMO>(item.baseId,world);
        if(a.enchantmentFormId || item.enchantmentId.value_or(0))
          throw std::runtime_error("enchanted armor requires audited ENCH/MGEF resolver");
        const auto type=a.bod2.present?a.bod2.skill:a.bodt.skill;
        const std::string skill=type==0?"LightArmor":type==1?"HeavyArmor":"";
        stats.armor+=ArmorPiece(a.baseRatingX100/100.0,skill,state.profile,keywords,modifiers.flatArmorRating,
          modifiers.armorRatingMultiplier,perks,settings,itemTrace);
        stats.armorTrace.insert(stats.armorTrace.end(),itemTrace.Steps().begin(),itemTrace.Steps().end());
      }
    }
    return stats;
  });
}
float AetheriusDamageFormula::CalculateDamage(const MpActor& attacker,const MpActor& defender,const HitData& hit) const {
  const auto begin=std::chrono::steady_clock::now();
  const auto& offense=attacker.GetCombatState().profile;
  const auto& defense=defender.GetCombatState().profile;
  if(!offense.revision || !defense.revision) throw std::runtime_error("combat profile required for both actors");
  const auto& equipment=Equipment(attacker);
  const auto& targetEquipment=Equipment(defender);
  DamageContext context{offense,defense,"",{},0,0,1,targetEquipment.armor};
  CombatTrace trace(settings.trace);
  const auto combatModifiers=providers.GetCombat(attacker.GetFormId(),trace);
  context.attackMultiplier=combatModifiers.damageMultiplier;
  context.armor+=providers.GetCombat(defender.GetFormId(),trace).flatArmor;
  for(const auto& step:targetEquipment.armorTrace) trace.Add(step.stage,step.value,step.source);
  if(hit.source==0x1f4) context.weaponBase=equipment.unarmedDamage;
  else {
    const auto found=equipment.weapons.find(hit.source);
    if(found==equipment.weapons.end()) throw std::runtime_error("combat source is not equipped");
    context.weaponBase=found->second.damage; context.weaponSkill=found->second.skill; context.weaponKeywords=found->second.keywords;
    context.flatItemDamage=found->second.flatItemDamage; context.itemMultiplier=found->second.itemMultiplier;
    for(const auto& step:found->second.provenance) trace.Add(step.stage,step.value,step.source);
  }
  // Packet booleans are observations. Bonus attack states await native animation
  // authorization; no client power/sneak/bash flag can grant a multiplier here.
  context.blocked=hit.isHitBlocked && defender.IsBlockActive();
  class Rng final:public CombatRng {
  public: explicit Rng(std::mt19937_64& e):engine(e){} double Unit() override {return std::generate_canonical<double,53>(engine);}
  private: std::mt19937_64& engine;
  } rng(random);
  const auto result=PhysicalDamage(context,settings,perks,rng,trace);
  if(result.health>std::numeric_limits<float>::max()) throw std::overflow_error("damage overflow");
  for(const auto& step:trace.Steps()) spdlog::debug("combat {}={} source={}",step.stage,step.value,step.source);
  if(observe) observe(result.health,std::chrono::duration<double>(std::chrono::steady_clock::now()-begin).count());
  return static_cast<float>(result.health);
}
float AetheriusDamageFormula::CalculateDamage(const MpActor&,const MpActor&,const SpellCastData&) const {
  // Never silently approximate unsupported spells by summing Health magnitudes.
  throw std::runtime_error("Aetherius magic runtime integration pending winning SPEL/MGEF condition audit");
}
}
