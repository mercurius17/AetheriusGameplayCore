#include "TestUtils.hpp"
#include <catch2/catch_all.hpp>
#include "formulas/TES5DamageFormula.h"
PartOne& GetPartOne();

// Run with the existing vanilla unit fixture, not the locally modded load order.
// These values record the old implementation exactly; no Aetherius corrections.
TEST_CASE("Legacy attack flag golden matrix", "[TES5DamageFormula][combat-legacy]")
{
  auto& p=GetPartOne();
  DoConnect(p,0);
  p.CreateActor(0xff000000,{0,0,0},0,0x3c);
  p.SetUserActor(0,0xff000000);
  auto& actor=p.worldState.GetFormAt<MpActor>(0xff000000);
  actor.SetEquipment(Equipment());
  TES5DamageFormula formula;
  HitData hit;
  hit.aggressor=0x14; hit.target=0x14; hit.source=0x1397E;
  REQUIRE(formula.CalculateDamage(actor,actor,hit)==4.f);
  hit.isPowerAttack=true;
  REQUIRE(formula.CalculateDamage(actor,actor,hit)==8.f);
  hit.isPowerAttack=false; hit.isHitBlocked=true;
  REQUIRE(formula.CalculateDamage(actor,actor,hit)==4.f*.1f);
  hit.isHitBlocked=false; hit.isSneakAttack=true;
  REQUIRE(formula.CalculateDamage(actor,actor,hit)==4.f*1.3f);
  hit.isPowerAttack=true; hit.isHitBlocked=true;
  REQUIRE(formula.CalculateDamage(actor,actor,hit)==4.f*2.f*.1f*1.3f);
  p.DestroyActor(0xff000000);
  DoDisconnect(p,0);
}
