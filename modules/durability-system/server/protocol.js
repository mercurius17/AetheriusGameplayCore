const MAX_PACKET_BYTES = 8192;

function parseClientPacket(rawContent) {
  if (typeof rawContent !== 'string' || Buffer.byteLength(rawContent, 'utf8') > MAX_PACKET_BYTES) return { ok: false, reason: 'INVALID_PACKET' };
  let packet;
  try { packet = JSON.parse(rawContent); } catch { return { ok: false, reason: 'INVALID_JSON' }; }
  if (packet && typeof packet.contentJsonDump === 'string') {
    try { packet = JSON.parse(packet.contentJsonDump); } catch { return { ok: false, reason: 'INVALID_JSON' }; }
  }
  if (!packet || typeof packet !== 'object' || typeof packet.type !== 'string' || !packet.type.startsWith('aetherius:maintenance:')) {
    return { ok: false, reason: 'UNKNOWN_EVENT' };
  }
  const data = packet.data && typeof packet.data === 'object' ? packet.data : {};
  if (packet.type === 'aetherius:maintenance:requestState') {
    return { ok: true, type: 'requestState', data: {} };
  }
  if (packet.type === 'aetherius:maintenance:useKit') {
    if (typeof data.kitKey !== 'string' || data.kitKey.length < 3 || data.kitKey.length > 96) return { ok: false, reason: 'INVALID_KIT_KEY' };
    if (typeof data.requestId !== 'string' || data.requestId.length < 8 || data.requestId.length > 128) return { ok: false, reason: 'INVALID_REQUEST_ID' };
    return { ok: true, type: 'useKit', data: { kitKey: data.kitKey, requestId: data.requestId } };
  }
  return { ok: false, reason: 'UNKNOWN_EVENT' };
}

function statePacket(data, requestId) {
  return JSON.stringify({ customPacketType: 'aetheriusMaintenanceState', requestId: requestId || null, data });
}

function notificationPacket(notification) {
  return JSON.stringify({ customPacketType: 'aetheriusMaintenanceNotification', data: notification });
}

module.exports = { MAX_PACKET_BYTES, parseClientPacket, statePacket, notificationPacket };
