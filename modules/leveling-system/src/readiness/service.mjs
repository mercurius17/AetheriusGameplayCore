export class LevelingReadinessService {
  constructor({ configResult, repository, hasEnemyConsumer = true, experienceAuthority = null, enemyCoverage = null, enemySystemCompatibility = null }) { this.configResult = configResult; this.repository = repository; this.hasEnemyConsumer = hasEnemyConsumer; this.experienceAuthority = experienceAuthority; this.enemyCoverage = enemyCoverage; this.enemySystemCompatibility = enemySystemCompatibility; }

  check() {
    const blockers = [];
    if (!this.configResult || this.configResult.status === 'NOT_READY') blockers.push('CONFIG_NOT_READY');
    if (!this.repository || typeof this.repository.transaction !== 'function') blockers.push('PERSISTENCE_TRANSACTION_UNAVAILABLE');
    if (!this.hasEnemyConsumer) blockers.push('ENEMY_CONSUMER_UNAVAILABLE');
    const authority = this.experienceAuthority?.check?.();
    if (!authority?.ok) blockers.push('EXPERIENCE_AUTHORITY_NOT_EXCLUSIVE');
    const coverage = this.enemyCoverage?.check?.();
    if (!coverage?.ok) blockers.push('ENEMY_COVERAGE_INCOMPLETE');
    if (this.enemySystemCompatibility?.status === 'INCOMPATIBLE') blockers.push('ENEMY_SYSTEM_CONTRACT_INCOMPATIBLE');
    if (this.enemySystemCompatibility?.status === 'PARTIAL') blockers.push('ENEMY_SYSTEM_CATEGORY_COVERAGE_PARTIAL');
    return { status: blockers.length > 0 ? 'NOT_READY' : this.configResult.status, blockers, configErrors: this.configResult?.errors ?? [], enemySystemCompatibility: this.enemySystemCompatibility };
  }
}
