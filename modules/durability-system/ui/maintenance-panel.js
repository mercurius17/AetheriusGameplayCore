(function () {
  "use strict";

  var state = { enabled: false, reserves: [], equipped: [], kits: [], cycle: null };
  var root;

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character];
    });
  }

  function send(type, data) {
    if (window.skyrimPlatform && typeof window.skyrimPlatform.sendMessage === "function") {
      window.skyrimPlatform.sendMessage("cef::ui:event", type, data || {});
    }
  }

  function row(reserve) {
    var weapon = reserve.weapons == null ? "—" : reserve.weapons;
    var armor = reserve.armor == null ? "—" : reserve.armor;
    return "<tr><td>" + esc(reserve.displayName) + "</td><td>" + weapon + (reserve.weaponCoverageActive ? " <span class='status-covered'>●</span>" : "") + "</td><td>" + armor + (reserve.armorCoverageActive ? " <span class='status-covered'>●</span>" : "") + "</td></tr>";
  }

  function equipmentCard(item) {
    var klass = item.status.indexOf("Cobertura") === 0 ? "status-covered" : item.status === "Conservado" ? "status-kept" : "status-empty";
    return "<div class='equipment-card'><div><strong>" + esc(item.name) + "</strong></div><div class='muted'>" + esc(item.material || "material desconhecido") + " · " + (item.charges || 0) + " cargas</div><div class='" + klass + "'>" + esc(item.status) + "</div></div>";
  }

  function kitCard(kit) {
    return "<div class='kit-card'><div><strong>" + esc(kit.displayName) + "</strong></div><div class='muted'>" + esc(kit.category === "weapons" ? "Armas" : "Armaduras") + " · +" + kit.charges + " cargas</div><button data-maintenance-kit='" + esc(kit.stableId) + "'>Usar kit</button></div>";
  }

  function render() {
    if (!root) return;
    root.querySelector(".maintenance-body").innerHTML =
      (!state.enabled ? "<div class='maintenance-error'>A manutenção está desativada pelo servidor.</div>" : "") +
      "<p class='muted'>As cargas são compartilhadas por categoria e material. O cliente apenas apresenta o estado autoritativo.</p>" +
      "<table><thead><tr><th>Material</th><th>Armas</th><th>Armaduras</th></tr></thead><tbody>" + state.reserves.map(row).join("") + "</tbody></table>" +
      "<h3>Equipamentos equipados</h3><div class='equipment-grid'>" + (state.equipped.length ? state.equipped.map(equipmentCard).join("") : "<span class='muted'>Nenhum equipamento sujeito à manutenção.</span>") + "</div>" +
      "<h3 style='margin-top:18px'>Kits disponíveis</h3><div class='kit-grid'>" + state.kits.map(kitCard).join("") + "</div>";
    root.querySelectorAll("[data-maintenance-kit]").forEach(function (button) {
      button.addEventListener("click", function () { send("aetherius:maintenance:useKit", { kitKey: button.getAttribute("data-maintenance-kit"), requestId: "ui-" + Date.now() + "-" + Math.random().toString(36).slice(2) }); });
    });
  }

  function mount() {
    if (root) return root;
    var style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "maintenance-panel.css";
    document.head.appendChild(style);
    root = document.createElement("section");
    root.id = "aetherius-maintenance-panel";
    root.innerHTML = "<div class='maintenance-header'><h2>MANUTENÇÃO</h2><button data-maintenance-close='1'>Fechar</button></div><div class='maintenance-body'></div>";
    document.body.appendChild(root);
    root.querySelector("[data-maintenance-close]").addEventListener("click", close);
    render();
    return root;
  }

  function open() { mount().classList.add("is-open"); render(); }
  function close() { if (root) root.classList.remove("is-open"); }
  function setState(next) { state = Object.assign(state, next || {}); mount(); render(); }

  window.AetheriusMaintenancePanel = { mount: mount, open: open, close: close, setState: setState };
}());
