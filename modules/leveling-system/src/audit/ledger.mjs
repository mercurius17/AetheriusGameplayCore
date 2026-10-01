let sequence = 0;

export class ProgressionAuditLedger {
  constructor() { this.entries = []; }

  append(entry) {
    const normalized = { ledgerId: `ledger-${++sequence}`, timestamp: new Date().toISOString(), ...entry };
    this.entries.push(structuredClone(normalized));
    return structuredClone(normalized);
  }

  all() { return structuredClone(this.entries); }
}
