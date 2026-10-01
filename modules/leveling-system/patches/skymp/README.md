# SkyMP patches

No SkyMP patch was required for the standalone implementation. The audited fork already exposes
server-side death/respawn lifecycle information, while the new consumer prefers the domain event
from AetheriusEnemySystem. Any future host patch must include a commit base, unified diff, tests,
and rollback instructions here without being applied automatically.
