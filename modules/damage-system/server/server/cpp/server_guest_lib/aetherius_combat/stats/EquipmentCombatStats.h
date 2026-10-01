#pragma once
#include "../context/DamageContext.h"
#include "CombatStatsCache.h"
#include <map>
namespace aetherius::combat {
struct WeaponCombatStats {
  double damage = 0;
  double flatItemDamage = 0, itemMultiplier = 1;
  std::string skill;
  std::vector<StableFormKey> keywords;
  std::vector<TraceStep> provenance;
};
struct EquipmentCombatStats {
  std::map<uint32_t,WeaponCombatStats> weapons;
  double armor = 0, unarmedDamage = 0;
  std::vector<TraceStep> armorTrace;
};
}
