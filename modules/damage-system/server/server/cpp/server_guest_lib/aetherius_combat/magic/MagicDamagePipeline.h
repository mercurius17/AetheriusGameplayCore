#pragma once
#include "../physical/PhysicalDamagePipeline.h"
namespace aetherius::combat {
struct MagicDamageComponent {
  StableFormKey effect, source;
  Resource resource = Resource::Health;
  Element element = Element::None;
  double magnitude = 0;
  uint64_t durationMilliseconds = 0;
  bool concentration = false;
};
inline DamageResult MagicDamage(const std::vector<MagicDamageComponent>& components,
                               const CombatSnapshot& target, const CombatSettings& s,
                               CombatRng& rng, CombatTrace& trace) {
  DamageResult result;
  if (rng.Roll(target.absorptionChance)) { result.absorbed = true; trace.Add("spell.absorbed",1); return result; }
  for (const auto& c : components) {
    double elementResistance = 0;
    switch(c.element) {
      case Element::Fire: elementResistance=target.fireResistance; break;
      case Element::Frost: elementResistance=target.frostResistance; break;
      case Element::Shock: elementResistance=target.shockResistance; break;
      case Element::Poison: elementResistance=target.poisonResistance; break;
      case Element::None: break;
    }
    if (!std::isfinite(elementResistance) || !std::isfinite(target.magicResistance)) throw std::invalid_argument("invalid resistance");
    const double d = Nonnegative(c.magnitude) * s.magicMultiplier *
      (1-std::clamp(target.magicResistance,-1.0,s.magicCap)) *
      (1-std::clamp(elementResistance,-1.0,s.elementalCap));
    trace.Add("magic.component",d,c.effect.ToString());
    switch(c.resource) { case Resource::Health: result.health+=d; break; case Resource::Magicka: result.magicka+=d; break; case Resource::Stamina: result.stamina+=d; break; }
  }
  Nonnegative(result.health); Nonnegative(result.magicka); Nonnegative(result.stamina);
  return result;
}
}
