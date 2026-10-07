/* ==========================================================================
   WIKI — navegação, pesquisa e artigos.
   Os conteúdos estão em js/data/wiki-data.js.

   Endereços:
     wiki.html                 todos os artigos
     wiki.html#/s/<secção>     artigos de uma secção
     wiki.html#/a/<artigo>     um artigo
   ========================================================================== */
(function () {
  "use strict";

  var D = window.WIKI_DATA;
  var I = window.PlussyIcons;

  var elSide = document.getElementById("wiki-side");
  var elMain = document.getElementById("wiki-main");
  var elSearch = document.getElementById("wiki-search");
  var elClear = document.getElementById("wiki-clear");
  var elToggle = document.getElementById("wiki-toggle");
  if (!elSide || !elMain || !elSearch) return;

  /* ---------- Utilitários ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function norm(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  function escRe(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function plain(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return d.textContent || "";
  }
  function fmtDate(iso) {
    var d = new Date(iso + "T00:00:00");
    return isNaN(d) ? iso : d.toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" });
  }

  /* ---------- Índices ---------- */
  var sections = {};
  var groupOf = {};
  D.groups.forEach(function (g) {
    g.sections.forEach(function (s) { sections[s.id] = s; groupOf[s.id] = g; });
  });

  var order = [];
  var byId = {};
  D.groups.forEach(function (g) {
    g.sections.forEach(function (s) {
      D.articles.forEach(function (a) { if (a.section === s.id) order.push(a); });
    });
  });
  order.forEach(function (a) {
    byId[a.id] = a;
    a._t = norm(a.title);
    a._n = norm(a.title + " " + a.summary + " " + (a.tags || []).join(" "));
    a._b = norm(plain(a.content));
  });
  if (order.length !== D.articles.length && window.console) {
    console.warn("Wiki: há artigos com uma 'section' que não existe em WIKI_DATA.groups.");
  }

  function inSection(id) {
    return order.filter(function (a) { return a.section === id; });
  }

  /* ---------- Estado ---------- */
  var query = "";
  var groupFilter = "all";

  /* ---------- Barra lateral ---------- */
  function renderSide() {
    var html = '<a class="side-link side-all" href="#/" data-side="all"><span>Todos os artigos</span>' +
      '<span class="side-link__count">' + order.length + "</span></a>";
    D.groups.forEach(function (g) {
      html += '<div class="side-group"><h2>' + esc(g.title) + '</h2><ul class="side-list">';
      g.sections.forEach(function (s) {
        html += '<li><a class="side-link" href="#/s/' + s.id + '" data-side="' + s.id + '"><span>' + esc(s.title) +
          '</span><span class="side-link__count">' + inSection(s.id).length + "</span></a></li>";
      });
      html += "</ul></div>";
    });
    elSide.innerHTML = html;
  }

  function setActive(key) {
    elSide.querySelectorAll("[data-side]").forEach(function (a) {
      if (a.getAttribute("data-side") === key) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  /* ---------- Pesquisa ---------- */
  function terms() {
    return norm(query).split(/\s+/).filter(Boolean);
  }

  function runSearch() {
    var ts = terms();
    return order.map(function (a) {
      var score = 0;
      for (var i = 0; i < ts.length; i++) {
        if (a._t.indexOf(ts[i]) > -1) score += 10;
        else if (a._n.indexOf(ts[i]) > -1) score += 4;
        else if (a._b.indexOf(ts[i]) > -1) score += 1;
        else return null;
      }
      return { a: a, score: score };
    }).filter(Boolean).sort(function (x, y) { return y.score - x.score; }).map(function (x) { return x.a; });
  }

  function highlight(text) {
    var raw = query.trim().split(/\s+/).filter(Boolean);
    if (!raw.length) return esc(text);
    var re = new RegExp("(" + raw.map(escRe).join("|") + ")", "gi");
    return text.split(re).map(function (part, i) {
      return i % 2 ? "<mark>" + esc(part) + "</mark>" : esc(part);
    }).join("");
  }

  /* ---------- Vistas ---------- */
  function chips() {
    var items = [{ id: "all", title: "Todos" }].concat(D.groups);
    return '<div class="chips" role="group" aria-label="Filtrar por categoria">' + items.map(function (g) {
      return '<button class="chip" type="button" data-group="' + g.id + '" aria-pressed="' + (g.id === groupFilter) + '">' + esc(g.title) + "</button>";
    }).join("") + "</div>";
  }

  function cards(list, showSection) {
    return '<div class="wcards">' + list.map(function (a) {
      return '<a class="wcard" href="#/a/' + a.id + '">' +
        (a.image ? '<img class="wcard__img" src="' + esc(a.image.src) + '" alt="" loading="lazy">' : "") +
        (showSection ? '<span class="wcard__section">' + esc(sections[a.section].title) + "</span>" : "") +
        "<h3>" + highlight(a.title) + "</h3><p>" + highlight(a.summary) + "</p></a>";
    }).join("") + "</div>";
  }

  function filterByGroup(list) {
    if (groupFilter === "all") return list;
    return list.filter(function (a) { return groupOf[a.section].id === groupFilter; });
  }

  function emptyState() {
    return '<div class="empty"><h2>Nenhum artigo encontrado</h2>' +
      "<p>Tenta outras palavras ou escolhe uma categoria na lista.</p>" +
      '<button class="btn btn--dark btn--sm" type="button" data-reset>Limpar pesquisa</button></div>';
  }

  function viewAll() {
    var list = filterByGroup(order);
    document.title = "Wiki | PlussyCraft";
    return "<h1>Todos os artigos</h1>" +
      '<p class="wiki__lead">Tudo o que precisas para jogar no PlussyCraft. Escolhe uma categoria ou pesquisa por palavra.</p>' +
      chips() + (list.length ? cards(list, true) : emptyState());
  }

  function viewSearch() {
    var list = filterByGroup(runSearch());
    document.title = "Pesquisa na Wiki | PlussyCraft";
    var count = list.length + (list.length === 1 ? " resultado" : " resultados");
    return "<h1>Resultados da pesquisa</h1>" +
      '<p class="wiki__lead" aria-live="polite">' + count + " para «" + esc(query.trim()) + "»</p>" +
      chips() + (list.length ? cards(list, true) : emptyState());
  }

  function viewSection(s) {
    var list = inSection(s.id);
    var g = groupOf[s.id];
    document.title = s.title + " | Wiki PlussyCraft";
    return '<nav class="crumbs" aria-label="Localização"><a href="#/">Wiki</a>' + I.get("chevron", 14) +
      "<span>" + esc(g.title) + "</span></nav><h1>" + esc(s.title) + "</h1>" +
      '<p class="wiki__lead">' + list.length + (list.length === 1 ? " artigo" : " artigos") + " nesta secção.</p>" +
      (list.length ? cards(list, false) : '<div class="empty"><h2>Ainda sem artigos</h2><p>Esta secção vai ser preenchida em breve.</p></div>');
  }

  function viewArticle(a) {
    var s = sections[a.section];
    var g = groupOf[a.section];
    var i = order.indexOf(a);
    var prev = order[i - 1];
    var next = order[i + 1];
    var related = inSection(a.section).filter(function (x) { return x.id !== a.id; });
    document.title = a.title + " | Wiki PlussyCraft";

    var html = '<article class="article"><nav class="crumbs" aria-label="Localização"><a href="#/">Wiki</a>' + I.get("chevron", 14) +
      "<span>" + esc(g.title) + "</span>" + I.get("chevron", 14) +
      '<a href="#/s/' + s.id + '">' + esc(s.title) + "</a></nav>" +
      "<h1>" + esc(a.title) + '</h1><p class="article__meta">Atualizado em ' + fmtDate(a.updated) + "</p>" +
      (a.image ? '<figure class="wiki-img article__cover"><img src="' + esc(a.image.src) + '" alt="' + esc(a.image.alt || "") + '"></figure>' : "") +
      '<div class="prose">' + a.content + "</div>";

    if (related.length) {
      html += '<section class="related"><h2>Mais em ' + esc(s.title) + "</h2><ul>" + related.map(function (r) {
        return '<li><a href="#/a/' + r.id + '">' + esc(r.title) + "</a></li>";
      }).join("") + "</ul></section>";
    }

    html += '<nav class="pager" aria-label="Outros artigos">' +
      (prev ? '<a class="prev" href="#/a/' + prev.id + '"><small>Anterior</small><strong>' + esc(prev.title) + "</strong></a>" : "<span></span>") +
      (next ? '<a class="next" href="#/a/' + next.id + '"><small>Seguinte</small><strong>' + esc(next.title) + "</strong></a>" : "") +
      "</nav></article>";
    return html;
  }

  /* ---------- Rotas ---------- */
  function route() {
    var h = window.location.hash.replace(/^#\/?/, "").split("/");
    return { type: h[0], id: decodeURIComponent(h[1] || "") };
  }

  function render(scrollTop) {
    var html, active = "all";
    var r = route();

    if (query.trim()) {
      html = viewSearch();
      active = null;
    } else if (r.type === "a" && byId[r.id]) {
      html = viewArticle(byId[r.id]);
      active = byId[r.id].section;
    } else if (r.type === "s" && sections[r.id]) {
      var list = inSection(r.id);
      if (list.length === 1) {
        if (window.history.replaceState) window.history.replaceState(null, "", "#/a/" + list[0].id);
        html = viewArticle(list[0]);
        active = r.id;
      } else {
        html = viewSection(sections[r.id]);
        active = r.id;
      }
    } else {
      html = viewAll();
    }

    elMain.innerHTML = html;
    setActive(active);
    elClear.hidden = !query;
    if (scrollTop) {
      var top = elMain.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    }
  }

  /* ---------- Eventos ---------- */
  elSearch.addEventListener("input", function () {
    query = elSearch.value;
    render(false);
  });

  elClear.addEventListener("click", function () {
    query = "";
    elSearch.value = "";
    render(false);
    elSearch.focus();
  });

  elSearch.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && elSearch.value) {
      query = "";
      elSearch.value = "";
      render(false);
    }
  });

  window.addEventListener("hashchange", function () {
    render(true);
  });

  elSide.addEventListener("click", function (e) {
    var a = e.target.closest("a[data-side]");
    if (!a) return;
    if (query) {
      query = "";
      elSearch.value = "";
    }
    elSide.classList.remove("is-open");
    elToggle.setAttribute("aria-expanded", "false");
    /* Se o endereço não muda, o hashchange não dispara: forçar a atualização. */
    var target = a.getAttribute("href");
    if (window.location.hash === target || (target === "#/" && !window.location.hash)) {
      e.preventDefault();
      render(true);
    }
  });

  /* Se uma imagem não existir, mostra uma caixa com o caminho esperado
     (nas miniaturas dos cartões, simplesmente esconde a imagem). */
  elMain.addEventListener("error", function (e) {
    var img = e.target;
    if (!img || img.tagName !== "IMG") return;
    if (img.classList.contains("wcard__img")) { img.remove(); return; }
    if (!img.closest(".wiki-img")) return;
    var box = document.createElement("div");
    box.className = "img-placeholder";
    var strong = document.createElement("strong");
    strong.textContent = "Imagem por adicionar";
    var code = document.createElement("code");
    code.textContent = img.getAttribute("src");
    box.appendChild(strong);
    box.appendChild(code);
    img.replaceWith(box);
  }, true);

  elMain.addEventListener("click", function (e) {
    var chip = e.target.closest("[data-group]");
    if (chip) {
      groupFilter = chip.getAttribute("data-group");
      render(false);
      return;
    }
    if (e.target.closest("[data-reset]")) {
      query = "";
      groupFilter = "all";
      elSearch.value = "";
      render(false);
    }
  });

  elToggle.addEventListener("click", function () {
    var open = !elSide.classList.contains("is-open");
    elSide.classList.toggle("is-open", open);
    elToggle.setAttribute("aria-expanded", String(open));
  });

  /* ---------- Arranque ---------- */
  renderSide();
  render(false);
})();
