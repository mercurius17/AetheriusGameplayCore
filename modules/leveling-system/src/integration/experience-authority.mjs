export const LEVELING_AUTHORITY_ID = 'AetheriusLevelingSystem';

function enabledAuthorities(entries) {
  return (Array.isArray(entries) ? entries : []).filter((entry) => entry?.enabled === true).map((entry) => entry.id);
}

export class ExperienceAuthorityCoordinator {
  constructor({ listAuthorities, disableAuthority = null }) {
    this.listAuthorities = listAuthorities;
    this.disableAuthority = disableAuthority;
  }

  check() {
    if (typeof this.listAuthorities !== 'function') return { ok: false, reason: 'AUTHORITY_DISCOVERY_UNBOUND', activeAuthorities: [] };
    try {
      const activeAuthorities = enabledAuthorities(this.listAuthorities());
      const ok = activeAuthorities.length === 1 && activeAuthorities[0] === LEVELING_AUTHORITY_ID;
      return { ok, reason: ok ? null : 'CONFLICTING_XP_AUTHORITIES', activeAuthorities, requiredAuthority: LEVELING_AUTHORITY_ID };
    } catch (error) {
      return { ok: false, reason: 'AUTHORITY_DISCOVERY_FAILED', error: error.message, activeAuthorities: [], requiredAuthority: LEVELING_AUTHORITY_ID };
    }
  }

  disableConflicts() {
    if (typeof this.listAuthorities !== 'function' || typeof this.disableAuthority !== 'function') return { ok: false, reason: 'AUTHORITY_DISABLE_UNBOUND', disabled: [] };
    const disabled = [];
    try {
      const conflicts = enabledAuthorities(this.listAuthorities()).filter((id) => id !== LEVELING_AUTHORITY_ID);
      for (const id of conflicts) {
        const result = this.disableAuthority(id);
        if (result !== true) return { ok: false, reason: 'AUTHORITY_DISABLE_FAILED', failedAuthority: id, disabled };
        disabled.push(id);
      }
      return { ...this.check(), disabled };
    } catch (error) {
      return { ok: false, reason: 'AUTHORITY_DISABLE_FAILED', error: error.message, disabled };
    }
  }
}

export function createSimulationAuthorityCoordinator() {
  return new ExperienceAuthorityCoordinator({ listAuthorities: () => [{ id: LEVELING_AUTHORITY_ID, enabled: true }] });
}
