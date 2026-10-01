-- AetheriusDurabilitySystem — migração idempotente
-- Não cria um banco separado: usa o mesmo schema do gamemode Aetherius.

CREATE TABLE IF NOT EXISTS character_maintenance_balances (
  character_id BIGINT NOT NULL,
  category VARCHAR(16) NOT NULL,
  material VARCHAR(48) NOT NULL,
  charges INT UNSIGNED NOT NULL DEFAULT 0,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (character_id, category, material),
  CONSTRAINT chk_maintenance_category CHECK (category IN ('weapons', 'armor')),
  CONSTRAINT chk_maintenance_charges CHECK (charges >= 0)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS character_maintenance_sessions (
  character_id BIGINT NOT NULL PRIMARY KEY,
  cycle_json JSON NULL,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS character_maintenance_ledger (
  idempotency_key VARCHAR(191) NOT NULL PRIMARY KEY,
  character_id BIGINT NOT NULL,
  operation VARCHAR(32) NOT NULL,
  result_json JSON NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_maintenance_ledger_character (character_id, created_at),
  CONSTRAINT chk_maintenance_operation CHECK (operation IN ('kit_activation', 'charge_consumption'))
) ENGINE=InnoDB;
