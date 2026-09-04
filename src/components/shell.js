export function renderShell(brand, nav, pageCount) {
  return `
    <div class="app-shell">
      <div class="preloader" id="preloader" role="presentation">
        <div class="preloader-mark">
          <svg viewBox="0 0 200 90" aria-hidden="true" focusable="false">
            <text x="100" y="66" text-anchor="middle" class="preloader-rr">${brand.mark}</text>
          </svg>
          <span class="preloader-sub">${brand.name}</span>
        </div>
      </div>
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

      <div class="rail" aria-hidden="true"><span class="rail-fill" id="rail-fill"></span></div>

      <section class="stage" id="stage" aria-live="polite"></section>

      <nav class="pager" aria-label="Percorrer páginas">
        <button class="pager-arrow pager-prev" type="button" aria-label="Página anterior"><span></span></button>
        <div class="pager-track"><span class="pager-fill" id="pager-fill"></span></div>
        <span class="pager-count" id="pager-count">00 / 05</span>
        <button class="pager-arrow pager-next" type="button" aria-label="Página seguinte"><span></span></button>
      </nav>

      <div class="pager-dots" id="pager-dots"></div>

      <footer class="site-footer">
        <div class="footer-brand">
          <strong>${brand.mark}</strong>
          <span>${brand.name}</span>
        </div>
        <nav class="footer-nav" aria-label="Explorar">
          <p>Explorar</p>
          ${nav.slice(0, 2).map((item) => `<button class="footer-link" type="button" data-go="${item.id}">${item.label}</button>`).join('')}
        </nav>
        <nav class="footer-nav" aria-label="RR Technik">
          <p>RR Technik</p>
          ${nav.slice(2).map((item) => `<button class="footer-link" type="button" data-go="${item.id}">${item.label}</button>`).join('')}
        </nav>
        <div class="footer-contact">
          <p>Visite-nos</p>
          <span>${brand.address}</span>
          <span>${brand.country}</span>
          <span>${brand.hours}</span>
          <a href="mailto:${brand.email}">${brand.email}</a>
          <a href="tel:${brand.phone.replace(/\s/g, '')}">${brand.phone}</a>
        </div>
      </footer>

      <aside class="lightbox" id="lightbox" aria-hidden="true">
        <button class="lightbox-close" type="button" aria-label="Fechar imagem">×</button>
        <img src="" alt="">
        <span class="lightbox-count"></span>
      </aside>
    </div>`
}
