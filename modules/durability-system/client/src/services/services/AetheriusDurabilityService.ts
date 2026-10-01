import { MsgType } from "../../messages";

/**
 * Adaptador fino para o cliente SkyMP existente.
 *
 * Ele só envia intenções (abrir, consultar e usar um kit) e exibe snapshots
 * assinados pelo servidor. Não calcula cargas, materiais, multiplicadores ou
 * cobertura. Adicione a classe à lista de listeners do aetherius-client.
 */
export class AetheriusDurabilityService {
  private readonly stateEvent = "aetherius:maintenance:state";

  constructor(private readonly sp: any, private readonly controller: any) {
    this.controller.emitter.on("customPacketMessage", (event: any) => this.onCustomPacket(event));
    this.controller.on("browserWindowLoaded", () => this.requestState());
  }

  public open() {
    this.execute("window.AetheriusMaintenancePanel && window.AetheriusMaintenancePanel.open();");
    this.requestState();
  }

  public close() {
    this.execute("window.AetheriusMaintenancePanel && window.AetheriusMaintenancePanel.close();");
  }

  public requestState() {
    this.send({ type: "aetherius:maintenance:requestState", data: {} });
  }

  public useKit(kitKey: string) {
    const requestId = `kit-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    this.send({ type: "aetherius:maintenance:useKit", data: { kitKey, requestId } });
  }

  private send(payload: unknown) {
    this.controller.emitter.emit("sendMessage", {
      message: { t: MsgType.CustomPacket, contentJsonDump: JSON.stringify(payload) },
      reliability: "reliable"
    });
  }

  private onCustomPacket(event: any) {
    let payload: any;
    try { payload = JSON.parse(event.message.contentJsonDump); } catch { return; }
    if (payload.customPacketType !== "aetheriusMaintenanceState") return;
    const serialized = JSON.stringify(payload.data || {}).replace(/\\/g, "\\\\").replace(/`/g, "\\`");
    this.execute(`window.AetheriusMaintenancePanel && window.AetheriusMaintenancePanel.setState(JSON.parse(\`${serialized}\`));`);
    this.execute(`window.dispatchEvent(new CustomEvent('${this.stateEvent}', { detail: JSON.parse(\`${serialized}\`) }));`);
  }

  private execute(script: string) {
    try { this.sp.browser.executeJavaScript(script); } catch { /* UI indisponível não afeta a autoridade do servidor */ }
  }
}
