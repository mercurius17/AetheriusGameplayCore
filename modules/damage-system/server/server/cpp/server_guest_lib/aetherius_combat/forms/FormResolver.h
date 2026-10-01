#pragma once
#include "StableFormKey.h"
#include "libespm/CombineBrowser.h"
namespace aetherius::combat {
inline uint32_t Resolve(const StableFormKey& key,const espm::CombineBrowser& browser) {
  const auto source=browser.FindSourceByFilename(key.plugin.c_str());
  if(!source) throw std::invalid_argument("missing combat plugin "+key.plugin);
  return browser.ToRuntimeFormId(*source,key.localId);
}
inline StableFormKey Stable(uint32_t id,const espm::CombineBrowser& browser) {
  const auto resolved=browser.ResolveRuntimeFormId(id);
  if(!resolved.source || !resolved.localId) throw std::invalid_argument("dynamic/null record cannot be persisted");
  const auto* metadata=browser.GetSourceMetadata(*resolved.source);
  if(!metadata) throw std::invalid_argument("missing source metadata");
  std::ostringstream text;
  text << metadata->fileName << ':' << std::hex << std::setw(6) << std::setfill('0') << *resolved.localId;
  return StableFormKey::Parse(text.str());
}
}
