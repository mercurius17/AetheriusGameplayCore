#pragma once
// Same registry passed to networking/ScampServer; no extra endpoint or server.
#include <charconv>
#include <prometheus/counter.h>
namespace aetherius::combat {
class CombatMetrics {
public:
  explicit CombatMetrics(prometheus::Registry& registry)
    : hits(prometheus::BuildCounter().Name("aetherius_combat_hits_total").Help("Accepted Aetherius physical hits").Register(registry).Add({})),
      physical(prometheus::BuildCounter().Name("aetherius_combat_physical_damage_total").Help("Resolved physical damage").Register(registry).Add({})),
      seconds(prometheus::BuildCounter().Name("aetherius_combat_pipeline_seconds_total").Help("Total physical pipeline time").Register(registry).Add({})) {}
  void Observe(double damage,double duration) { hits.Increment(); physical.Increment(damage); seconds.Increment(duration); }
private:
  prometheus::Counter<double>& hits;
  prometheus::Counter<double>& physical;
  prometheus::Counter<double>& seconds;
};
}
