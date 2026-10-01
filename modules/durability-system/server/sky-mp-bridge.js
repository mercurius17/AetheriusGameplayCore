const { parseClientPacket, statePacket, notificationPacket } = require('./protocol');

function installSkyMpBridge(options = {}) {
  const { mp, service } = options;
  if (!mp || typeof mp.on !== 'function') throw new Error('SkyMP bridge requer mp.on()');
  if (!service) throw new Error('SkyMP bridge requer o serviço de manutenção');
  if (typeof options.resolveCharacterId !== 'function') throw new Error('resolveCharacterId é obrigatório');
  const resolveEquipment = options.resolveEquipment || (() => []);
  const resolveKitBaseId = options.resolveKitBaseId || (() => null);
  const send = options.send || ((userId, payload) => mp.sendCustomPacket(userId, payload));

  const sendState = async (userId, actorId, characterId, requestId) => {
    const status = await service.getStatus(characterId, await resolveEquipment({ userId, actorId, characterId }));
    send(userId, statePacket(status, requestId));
    return status;
  };

  const handlePacket = async (userId, rawContent) => {
    const actorId = typeof mp.getUserActor === 'function' ? mp.getUserActor(userId) : undefined;
    if (!actorId) return;
    const packet = parseClientPacket(rawContent);
    if (!packet.ok) {
      send(userId, statePacket({ ok: false, reason: packet.reason }, null));
      return;
    }
    const characterId = await options.resolveCharacterId({ userId, actorId });
    if (characterId === undefined || characterId === null) return;
    if (packet.type === 'requestState') {
      await sendState(userId, actorId, characterId, null);
      return;
    }
    if (packet.type === 'useKit') {
      const kit = service._catalog().getByStableId(packet.data.kitKey);
      const baseId = kit ? await resolveKitBaseId({ kit, actorId, characterId }) : null;
      const result = await service.activateKit({ characterId, actorId, kitKey: packet.data.kitKey, baseId, requestId: packet.data.requestId });
      send(userId, statePacket({ ok: result.ok, action: 'useKit', result }, packet.data.requestId));
      if (result.ok) await sendState(userId, actorId, characterId, packet.data.requestId);
    }
  };

  mp.on('customPacket', (userId, rawContent) => {
    Promise.resolve(handlePacket(userId, rawContent)).catch(error => console.error('[AetheriusDurabilitySystem] packet error:', error.message));
  });

  const notify = service.notifier;
  service.notifier = (notification) => {
    try {
      const actorId = options.resolveActorId ? options.resolveActorId(notification.characterId) : null;
      const userId = options.resolveUserId ? options.resolveUserId(actorId) : null;
      if (userId !== null && userId !== undefined) send(userId, notificationPacket(notification));
    } finally {
      notify(notification);
    }
  };

  return {
    service,
    handlePacket,
    pushState: sendState,
    recordEffectiveEvent: async event => {
      const result = await service.handleEffectiveEvent(event);
      if (result.ok && !result.skipped && options.resolveActorId && options.resolveUserId) {
        const actorId = await options.resolveActorId(event.characterId);
        const userId = actorId === null || actorId === undefined ? null : await options.resolveUserId(actorId);
        if (userId !== null && userId !== undefined) await sendState(userId, actorId, event.characterId, event.eventId);
      }
      return result;
    }
  };
}

module.exports = { installSkyMpBridge };
