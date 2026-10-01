#include "aetherius_combat/debug/CombatMetrics.h"
#include <iostream>
int main() {
  prometheus::Registry registry;
  aetherius::combat::CombatMetrics metrics(registry);
  metrics.Observe(12.48,.001);
  const auto text=registry.serialize();
  if(text.find("aetherius_combat_hits_total 1")==std::string::npos ||
     text.find("aetherius_combat_physical_damage_total 12.48")==std::string::npos) return 1;
  std::cout << "PASS existing Prometheus registry exposition\n";
}
