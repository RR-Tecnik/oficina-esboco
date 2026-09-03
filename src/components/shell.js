export function renderShell(brand, nav, pageCount) {
  return `
    <div class="app-shell">
      <header class="topbar">
        <button class="brand" type="button" data-go="home" aria-label="RR Technik, início">
          <span>${brand.mark}</span>
          <small>${brand.name}</small>
        </button>
        <nav class="tabs" aria-label="Navegação principal">
          ${nav.map((item) => `<button type="button" class="tab" data-go="${item.id}">${item.label}</button>`).join('')}
        </nav>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Abrir menu">
          <span></span><span></span>
        </button>
      </header>

      <div class="mobile-nav" aria-hidden="true">
        ${nav.map((item) => `<button type="button" class="mobile-tab" data-go="${item.id}">${item.label}</button>`).join('')}
      </div>

      <section class="stage" id="stage" aria-live="polite"></section>

      <nav class="pager" aria-label="Percorrer páginas">
        <button class="pager-arrow pager-prev" type="button" aria-label="Página anterior"><span></span></button>
        <div class="pager-track"><span class="pager-fill" id="pager-fill"></span></div>
        <span class="pager-count" id="pager-count">00 / 05</span>
        <button class="pager-arrow pager-next" type="button" aria-label="Página seguinte"><span></span></button>
      </nav>

      <div class="pager-dots" id="pager-dots"></div>

      <aside class="lightbox" id="lightbox" aria-hidden="true">
        <button class="lightbox-close" type="button" aria-label="Fechar imagem">×</button>
        <img src="" alt="">
        <span class="lightbox-count"></span>
      </aside>
    </div>`
}
