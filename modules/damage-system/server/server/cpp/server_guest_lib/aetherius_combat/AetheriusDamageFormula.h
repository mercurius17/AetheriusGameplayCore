#pragma once
#include "formulas/IDamageFormula.h"
#include "config/CombatSettings.h"
#include "perks/PerkRegistry.h"
#include "providers/CombatProviderRegistry.h"
#include "stats/EquipmentCombatStats.h"
#include <functional>
#include <random>
namespace espm { class Loader; }
namespace aetherius::combat {
class AetheriusDamageFormula final : public IDamageFormula {
public:
  using Observe = std::function<void(double,double)>;
  AetheriusDamageFormula(CombatSettings settings,PerkRegistry perks,Observe observe = {});
  float CalculateDamage(const MpActor&,const MpActor&,const HitData&) const override;
  float CalculateDamage(const MpActor&,const MpActor&,const SpellCastData&) const override;
  CombatProviderRegistry& Providers() { return providers; }
private:
  const EquipmentCombatStats& Equipment(const MpActor& actor) const;
  CombatSettings settings;
  PerkRegistry perks;
  CombatProviderRegistry providers;
  Observe observe;
  mutable std::mt19937_64 random;
};
// Startup only: verify record winners and plugin checksums through the existing loader.
void VerifyAuditedCatalog(const nlohmann::json& catalog,espm::Loader& loader);
}
