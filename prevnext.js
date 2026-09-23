/* Prev/next project navigation, injected into each case-study page. */
(function () {
  var ORDER = [
    { file: "Proyecto Vedimaq.dc.html", es: "Vedimaq", en: "Vedimaq" },
    { file: "Proyecto PiX.dc.html", es: "PiX", en: "PiX" },
    { file: "Proyecto Savia.dc.html", es: "Savia", en: "Savia" },
    { file: "Proyecto Trinidad Ureta.dc.html", es: "Trinidad Ureta", en: "Trinidad Ureta" },
    { file: "Proyecto Dunas de Concon.dc.html", es: "Dunas de Concón", en: "Concón Dunes" },
    { file: "Proyecto Ubicate.dc.html", es: "App Ubícate", en: "Ubícate App" }
  ];

  function lang() {
    try { return localStorage.getItem("bb-lang") === "en" ? "en" : "es"; } catch (e) { return "es"; }
  }

  function build() {
    var here = decodeURIComponent(location.pathname.split("/").pop() || "");
    var i = -1;
    for (var k = 0; k < ORDER.length; k++) if (ORDER[k].file === here) i = k;
    if (i < 0) return true;

    var cand = document.querySelectorAll('a[href^="Portafolio Belen Briones.dc.html#proyectos"]');
    var back = null;
    for (var c = 0; c < cand.length; c++) {
      var a = cand[c];
      if (a.closest("header") || a.closest("footer")) continue;
      var txt = (a.textContent || "").toLowerCase();
      if (txt.indexOf("todos los proyectos") >= 0 || txt.indexOf("all projects") >= 0) back = a;
    }
    if (!back) return false;
    var row = back.parentNode;
    if (row.querySelector(".bb-prevnext")) return true;

    var L = lang();
    var wrap = document.createElement("div");
    wrap.className = "bb-prevnext";
    wrap.style.cssText = "display:flex;flex-wrap:wrap;gap:10px;margin-left:auto;";

    function link(item, dir) {
      var a = document.createElement("a");
      a.href = item.file;
      a.textContent = dir === "prev" ? "‹ " + item[L] : item[L] + " ›";
      a.style.cssText = "font-size:15px;font-weight:600;padding:13px 20px;border-radius:15px;" +
        "border:1px solid rgba(26,23,20,0.18);color:inherit;text-decoration:none;white-space:nowrap;";
      return a;
    }

    if (i > 0) wrap.appendChild(link(ORDER[i - 1], "prev"));
    if (i < ORDER.length - 1) wrap.appendChild(link(ORDER[i + 1], "next"));
    if (wrap.children.length) row.appendChild(wrap);
    return true;
  }

  function boot() {
    if (build()) return;
    var n = 0;
    var iv = setInterval(function () { n++; if (build() || n > 40) clearInterval(iv); }, 150);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
