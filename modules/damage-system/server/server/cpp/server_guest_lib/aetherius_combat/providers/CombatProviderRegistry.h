#pragma once
#include "../debug/CombatTrace.h"
#include "../forms/StableFormKey.h"
#include <cmath>
#include <memory>
#include <stdexcept>

class MpActor;
class Inventory;
namespace aetherius::combat {
struct ItemInstanceView {
  uint32_t actorId = 0;
  StableFormKey base;
  // Assigned by authoritative inventory adapter; never use a client extra-data hash.
  std::string instanceId;
};
struct ItemCombatModifiers {
  double flatWeaponDamage = 0, weaponDamageMultiplier = 1;
  double flatArmorRating = 0, armorRatingMultiplier = 1;
  std::string source, sourceId;
};
class IItemCombatModifierProvider {
public:
  virtual ~IItemCombatModifierProvider() = default;
  virtual ItemCombatModifiers GetModifiers(const ItemInstanceView& item) const = 0;
};
class ICombatProfileProvider {
public:
  virtual ~ICombatProfileProvider() = default;
  virtual std::string GetProfileJson(uint32_t actorId) const = 0;
};
struct CombatModifiers { double flatArmor = 0, damageMultiplier = 1; std::string source, sourceId; };
class ICombatModifierProvider {
public:
  virtual ~ICombatModifierProvider() = default;
  virtual CombatModifiers GetModifiers(uint32_t actorId) const = 0;
};
class CombatProviderRegistry {
public:
  void Register(std::shared_ptr<const IItemCombatModifierProvider> provider) {
    if (!provider) throw std::invalid_argument("null provider");
    items.push_back(std::move(provider)); ++revision;
  }
  void Invalidate() { ++revision; }
  void Register(std::shared_ptr<const ICombatModifierProvider> provider) {
    if (!provider) throw std::invalid_argument("null provider");
    combat.push_back(std::move(provider)); ++revision;
  }
  CombatModifiers GetCombat(uint32_t actorId, CombatTrace& trace) const {
    CombatModifiers out;
    for (const auto& provider : combat) {
      const auto m=provider->GetModifiers(actorId);
      if (!std::isfinite(m.flatArmor) || !std::isfinite(m.damageMultiplier) || m.damageMultiplier<0)
        throw std::invalid_argument("invalid authorized combat modifier");
      out.flatArmor+=m.flatArmor; out.damageMultiplier*=m.damageMultiplier;
      trace.Add("provider.armor",m.flatArmor,m.source+":"+m.sourceId);
      trace.Add("provider.damageMultiplier",m.damageMultiplier,m.source+":"+m.sourceId);
    }
    return out;
  }
  uint64_t Revision() const { return revision; }
  ItemCombatModifiers Get(const ItemInstanceView& item, CombatTrace& trace) const {
    ItemCombatModifiers out;
    for (const auto& provider : items) {
      auto m = provider->GetModifiers(item);
      if (!std::isfinite(m.flatWeaponDamage) || !std::isfinite(m.flatArmorRating) ||
          !std::isfinite(m.weaponDamageMultiplier) || m.weaponDamageMultiplier < 0 ||
          !std::isfinite(m.armorRatingMultiplier) || m.armorRatingMultiplier < 0)
        throw std::invalid_argument("invalid authorized item modifier");
      out.flatWeaponDamage += m.flatWeaponDamage; out.flatArmorRating += m.flatArmorRating;
      out.weaponDamageMultiplier *= m.weaponDamageMultiplier; out.armorRatingMultiplier *= m.armorRatingMultiplier;
      trace.Add("item.weapon.flat",m.flatWeaponDamage,m.source+":"+m.sourceId);
      trace.Add("item.weapon.multiplier",m.weaponDamageMultiplier,m.source+":"+m.sourceId);
      trace.Add("item.armor.flat",m.flatArmorRating,m.source+":"+m.sourceId);
    }
    return out;
  }
private:
  uint64_t revision = 0;
  std::vector<std::shared_ptr<const IItemCombatModifierProvider>> items;
  std::vector<std::shared_ptr<const ICombatModifierProvider>> combat;
};
}
