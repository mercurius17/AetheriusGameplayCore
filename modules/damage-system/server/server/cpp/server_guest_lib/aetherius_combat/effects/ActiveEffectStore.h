#pragma once
#include "../context/DamageContext.h"
#include <limits>
#include <map>
#include <memory>
#include <functional>
namespace aetherius::combat {
enum class StackingRule { Coexist, Add, Strongest, Latest, RefreshDuration, MaxN, UniqueSource };
struct ActiveEffectInstance {
  uint64_t instanceId = 0;
  StableFormKey effectKey, sourceForm;
  uint32_t sourceActorId = 0;
  double magnitude = 0;
  // Absolute server epoch milliseconds support restart; the caller supplies time.
  uint64_t startTime = 0, expiresAt = 0, tickInterval = 0, nextTick = 0;
  std::string stackingGroup, provenance;
  StackingRule stackingRule = StackingRule::Coexist;
  unsigned maxStacks = 1;
  bool persistent = false, concentration = false;
};
class ActiveEffectStore {
public:
  uint64_t Add(ActiveEffectInstance e, uint64_t now) {
    if (!std::isfinite(e.magnitude) || e.expiresAt <= now || e.startTime > now || e.stackingGroup.empty() || !e.maxStacks)
      throw std::invalid_argument("invalid effect instance");
    if(e.effectKey.plugin.empty() || e.sourceForm.plugin.empty() || !e.effectKey.localId || !e.sourceForm.localId ||
       static_cast<int>(e.stackingRule)<0 || static_cast<int>(e.stackingRule)>6)
      throw std::invalid_argument("invalid effect identity/rule");
    Expire(now);
    if(instances.size()>=4096) throw std::invalid_argument("effect capacity exceeded");
    std::vector<uint64_t> same;
    for (const auto& [id,old] : instances) if (old.stackingGroup == e.stackingGroup) {
      if (old.stackingRule != e.stackingRule) throw std::invalid_argument("conflicting group rule");
      same.push_back(id);
    }
    if (e.stackingRule == StackingRule::Strongest && !same.empty()) {
      const auto& old=instances.at(same.front());
      if (std::abs(old.magnitude) >= std::abs(e.magnitude)) return old.instanceId;
    }
    if (e.stackingRule == StackingRule::RefreshDuration && !same.empty()) {
      auto& old=instances.at(same.front()); old.expiresAt=std::max(old.expiresAt,e.expiresAt); ++revision; return old.instanceId;
    }
    if (e.stackingRule == StackingRule::Latest || e.stackingRule == StackingRule::Strongest)
      for (auto id : same) instances.erase(id);
    if (e.stackingRule == StackingRule::UniqueSource)
      for (auto id : same) if (instances.at(id).sourceActorId == e.sourceActorId) instances.erase(id);
    if (e.stackingRule == StackingRule::MaxN && same.size() >= e.maxStacks)
      while (same.size() >= e.maxStacks) { instances.erase(same.front()); same.erase(same.begin()); }
    if (nextId == std::numeric_limits<uint64_t>::max()) throw std::overflow_error("effect IDs exhausted");
    e.instanceId = nextId++;
    if (e.tickInterval) {
      if (now > std::numeric_limits<uint64_t>::max()-e.tickInterval) throw std::overflow_error("tick overflow");
      e.nextTick=now+e.tickInterval;
    }
    instances.emplace(e.instanceId,e); ++revision; return e.instanceId;
  }
  void Remove(uint64_t id) { if(instances.erase(id)) ++revision; }
  void Expire(uint64_t now) {
    for(auto it=instances.begin();it!=instances.end();) {
      if(it->second.expiresAt<=now) { it=instances.erase(it); ++revision; } else ++it;
    }
  }
  double Sum(const std::string& group) const {
    double sum=0; for(const auto& [id,e]:instances) if(e.stackingGroup==group) sum+=e.magnitude;
    return sum;
  }
  // One central server tick, at most one callback per effect per tick.
  // Missed pulses are deliberately skipped, preventing reconnect burst damage.
  void Tick(uint64_t now, const std::function<bool(uint32_t)>& channelActive,
            const std::function<void(const ActiveEffectInstance&)>& apply) {
    Expire(now);
    std::vector<ActiveEffectInstance> due;
    for(auto it=instances.begin();it!=instances.end();) {
      auto& e=it->second;
      if(e.concentration && !channelActive(e.sourceActorId)) { it=instances.erase(it); ++revision; continue; }
      if(e.tickInterval && e.nextTick<=now) {
        due.push_back(e);
        if (now > std::numeric_limits<uint64_t>::max()-e.tickInterval) throw std::overflow_error("tick overflow");
        e.nextTick=now+e.tickInterval;
      }
      ++it;
    }
    for(const auto& e:due) if(instances.count(e.instanceId)) apply(e);
  }
  uint64_t Revision() const { return revision; }
  size_t Size() const { return instances.size(); }
  nlohmann::json Save() const {
    nlohmann::json result=nlohmann::json::array();
    for(const auto& [id,e]:instances) if(e.persistent && !e.concentration)
      result.push_back({{"effectKey",e.effectKey.ToString()},{"sourceForm",e.sourceForm.ToString()},
        {"sourceActorId",e.sourceActorId},{"magnitude",e.magnitude},{"startTime",e.startTime},{"expiresAt",e.expiresAt},
        {"tickInterval",e.tickInterval},{"stackingGroup",e.stackingGroup},{"stackingRule",static_cast<int>(e.stackingRule)},
        {"maxStacks",e.maxStacks},{"provenance",e.provenance}});
    return {{"schemaVersion",1},{"instances",result}};
  }
  static ActiveEffectStore Restore(const nlohmann::json& j,uint64_t now) {
    if(j.at("schemaVersion")!=1 || !j.at("instances").is_array() || j.at("instances").size()>4096)
      throw std::invalid_argument("invalid effect schema");
    ActiveEffectStore out;
    for(const auto& row:j.at("instances")) {
      ActiveEffectInstance e;
      e.effectKey=StableFormKey::Parse(row.at("effectKey")); e.sourceForm=StableFormKey::Parse(row.at("sourceForm"));
      e.sourceActorId=static_cast<uint32_t>(Number(row,"sourceActorId",0,4294967295.0));
      e.magnitude=Number(row,"magnitude",-1000000,1000000);
      e.startTime=static_cast<uint64_t>(Number(row,"startTime",0,9007199254740991.0));
      e.expiresAt=static_cast<uint64_t>(Number(row,"expiresAt",0,9007199254740991.0));
      e.tickInterval=static_cast<uint64_t>(Number(row,"tickInterval",0,1000000));
      const auto rule=Number(row,"stackingRule",0,6);
      if(std::floor(rule)!=rule) throw std::invalid_argument("invalid stacking rule");
      e.stackingRule=static_cast<StackingRule>(static_cast<int>(rule));
      e.maxStacks=static_cast<unsigned>(Number(row,"maxStacks",1,4096));
      e.stackingGroup=row.at("stackingGroup"); e.provenance=row.at("provenance"); e.persistent=true;
      if(e.expiresAt>now) out.Add(e,now);
    }
    return out;
  }
private:
  uint64_t nextId=1,revision=0;
  std::map<uint64_t,ActiveEffectInstance> instances;
};
class EffectScheduler {
public:
  void Attach(uint32_t actor,std::shared_ptr<ActiveEffectStore> store) { stores[actor]=store; }
  void Detach(uint32_t actor) { stores.erase(actor); }
  void Tick(uint64_t now,const std::function<bool(uint32_t)>& channelActive,
            const std::function<void(uint32_t,const ActiveEffectInstance&)>& apply) {
    // Weak ownership prevents dangling actors after logout/destroy.
    std::vector<std::pair<uint32_t,std::shared_ptr<ActiveEffectStore>>> live;
    for(auto it=stores.begin();it!=stores.end();) {
      if(auto s=it->second.lock()) { live.push_back({it->first,s}); ++it; } else it=stores.erase(it);
    }
    for(auto& [actor,s]:live) s->Tick(now,channelActive,[&](const auto& e){apply(actor,e);});
  }
private:
  std::map<uint32_t,std::weak_ptr<ActiveEffectStore>> stores;
};
}
