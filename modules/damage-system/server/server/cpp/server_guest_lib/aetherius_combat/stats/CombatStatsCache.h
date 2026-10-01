#pragma once
#include "../state/ActorCombatState.h"
#include <optional>
namespace aetherius::combat {
template<class T> class CombatStatsCache {
public:
  template<class Build> const T& Get(const CombatRevision& current,Build build) {
    if(!value || current.profile!=key.profile || current.equipment!=key.equipment ||
       current.effects!=key.effects || current.providers!=key.providers) {
      T next=build(); value=std::move(next); key=current; ++misses;
    } else ++hits;
    return *value;
  }
  void Invalidate() { value.reset(); }
  uint64_t hits=0,misses=0;
private:
  CombatRevision key;
  std::optional<T> value;
};
}
