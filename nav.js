/* Responsive hamburger nav for the project pages (progressive enhancement). */
(function () {
  var BP = 860;

  function injectStyle() {
    if (document.getElementById("bb-nav-style")) return;
    var s = document.createElement("style");
    s.id = "bb-nav-style";
    s.textContent =
      ".bb-burger{display:none;width:46px;height:46px;align-items:center;justify-content:center;" +
      "border:1px solid rgba(26,23,20,0.18);background:rgba(255,255,255,0.5);color:#1A1714;" +
      "font-size:19px;line-height:1;border-radius:50%;cursor:pointer;font-family:inherit;}" +
      ".bb-panel{display:none;border-top:1px solid rgba(26,23,20,0.10);background:rgba(255,255,255,0.97);" +
      "padding:8px clamp(16px,4vw,40px) 20px;flex-direction:column;}" +
      ".bb-panel.bb-open{display:flex;}" +
      ".bb-panel > *{padding:13px 0;border-bottom:1px solid rgba(26,23,20,0.08);font-size:17px;}" +
      ".bb-panel .bb-actions{display:flex;flex-wrap:wrap;gap:10px;border-bottom:none;padding-top:16px;}" +
      "@media (max-width:" + (BP - 1) + "px){.bb-nav-hidden{display:none !important;}.bb-burger{display:flex;}}";
    document.head.appendChild(s);
  }

  function build() {
    var header = document.querySelector("header");
    if (!header) return false;
    var nav = header.querySelector("nav");
    if (!nav) return false;
    if (header.querySelector(".bb-burger")) return true;

    var kids = Array.prototype.slice.call(nav.children);
    if (kids.length < 2) return false;

    var items = kids.slice(1);
    items.forEach(function (el) { el.classList.add("bb-nav-hidden"); });

    var burger = document.createElement("button");
    burger.type = "button";
    burger.className = "bb-burger";
    burger.setAttribute("aria-label", "Menú");
    burger.textContent = "☰";
    nav.appendChild(burger);

    var panel = document.createElement("div");
    panel.className = "bb-panel";
    var actions = document.createElement("div");
    actions.className = "bb-actions";

    items.forEach(function (el) {
      var clone = el.cloneNode(true);
      clone.classList.remove("bb-nav-hidden");
      var isAction = el.tagName === "BUTTON" || el.hasAttribute("data-lang-toggle") ||
        (el.getAttribute("href") || "").indexOf("wa.me") === 0 ||
        (el.getAttribute("href") || "").indexOf("https://wa.me") === 0;
      if (isAction) {
        clone.style.padding = "13px 20px";
        actions.appendChild(clone);
      } else {
        clone.style.display = "block";
        clone.style.color = "#1A1714";
        clone.style.fontWeight = "500";
        panel.appendChild(clone);
      }
    });
    if (actions.children.length) panel.appendChild(actions);
    header.appendChild(panel);

    burger.addEventListener("click", function () {
      var open = panel.classList.toggle("bb-open");
      burger.textContent = open ? "✕" : "☰";
    });
    panel.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        panel.classList.remove("bb-open");
        burger.textContent = "☰";
      }
    });
    return true;
  }

  function boot() {
    injectStyle();
    if (build()) return;
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      if (build() || tries > 40) clearInterval(iv);
    }, 150);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
