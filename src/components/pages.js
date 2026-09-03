function esc(str = '') {
  return str.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

function titleHTML(title) {
  return esc(title).replace(/\n/g, '<br>')
}

function bodyHTML(body = []) {
  return body.map((block) => `${block.heading ? `<h2>${esc(block.heading)}</h2>` : ''}<p>${esc(block.text)}</p>`).join('')
}

function photoGrid(photos = [], alt) {
  return `<div class="photo-grid">${photos.map((src, i) => `<button class="photo-tile" type="button" data-photo-src="${src}" data-photo-alt="${esc(alt)} ${i + 1}" data-photo-index="${i + 1}" data-photo-total="${photos.length}"><img src="${src}" alt="${esc(alt)} ${i + 1}" loading="lazy"></button>`).join('')}</div>`
}

// -- one render function per page "kind" --

function renderCover(page) {
  return `
    <div class="cover-visual" style="background-image:url('${page.image}')"><div class="cover-shade"></div></div>
    <div class="page-copy cover-copy">
      <p class="eyebrow">${esc(page.eyebrow)}</p>
      <h1>${titleHTML(page.title)}</h1>
      <p class="lede">${esc(page.lede)}</p>
      <button class="cta" type="button" data-go="${page.cta.target}">${esc(page.cta.label)}</button>
    </div>`
}

function renderCopyPhotos(page) {
  return `
    <div class="page-copy">
      <p class="eyebrow">${esc(page.eyebrow)}</p>
      <h1>${titleHTML(page.title)}</h1>
      <p class="lede">${esc(page.lede)}</p>
      ${bodyHTML(page.body)}
      ${page.signature ? `<p class="signature">${esc(page.signature)}</p>` : ''}
      ${page.note ? `<p class="tag">${esc(page.note)}</p>` : ''}
    </div>
    ${page.photos?.length ? `<div class="page-visual">${photoGrid(page.photos, page.title.replace('\n', ' '))}</div>` : ''}`
}

function renderProjectGrid(page) {
  return `
    <div class="page-copy">
      <p class="eyebrow">${esc(page.eyebrow)}</p>
      <h1>${titleHTML(page.title)}</h1>
      <p class="lede">${esc(page.lede)}</p>
      ${bodyHTML(page.body)}
    </div>
    <div class="page-visual">
      <div class="project-grid">
        ${page.cars.map((car) => `
          <button class="project-tile" type="button" data-go="${car.id}" aria-label="Ver ${esc(car.name)}">
            <img src="${car.cover}" alt="${esc(car.name)}" loading="lazy">
            <span class="project-tile-shade"></span>
            <span class="project-tile-label">
              <span class="project-tile-name">${esc(car.name)}</span>
              <span class="project-tile-cta">Ver projeto →</span>
            </span>
          </button>`).join('')}
      </div>
    </div>`
}

function specSections(specs = []) {
  return specs.map((section) => `
    <h2>${esc(section.heading)}</h2>
    <ul class="spec-list">${section.items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
  `).join('')
}

function renderCarDetail(page) {
  const car = page.car
  return `
    <div class="page-copy">
      <button class="back-link" type="button" data-go="projects">&larr; Voltar aos projetos</button>
      <p class="eyebrow">${esc(page.eyebrow)}</p>
      <h1>${titleHTML(car.name)}</h1>
      ${car.tagline ? `<p class="lede">${esc(car.tagline)}</p>` : ''}
      ${car.intro ? `<p>${esc(car.intro)}</p>` : ''}
      ${specSections(car.specs)}
    </div>
    <div class="page-visual">${photoGrid(car.photos, car.name)}</div>`
}

function renderCopyList(page) {
  return `
    <div class="page-copy">
      <p class="eyebrow">${esc(page.eyebrow)}</p>
      <h1>${titleHTML(page.title)}</h1>
      <p class="lede">${esc(page.lede)}</p>
      ${bodyHTML(page.body)}
    </div>
    <div class="page-visual">
      <ul class="highlight-list">${page.highlights.map((h) => `<li${h.target ? ` data-go="${esc(h.target)}"` : ''}><h3>${esc(h.title)}</h3><p>${esc(h.text)}</p></li>`).join('')}</ul>
    </div>`
}

function renderCopyLogos(page) {
  return `
    <div class="page-copy">
      <p class="eyebrow">${esc(page.eyebrow)}</p>
      <h1>${titleHTML(page.title)}</h1>
      <p class="lede">${esc(page.lede)}</p>
    </div>
    <div class="page-visual">
      <div class="partner-grid">${page.partners.map((p) => `<span>${esc(p)}</span>`).join('')}</div>
    </div>`
}

function renderCopyMap(page) {
  return `
    <div class="page-copy">
      <p class="eyebrow">${esc(page.eyebrow)}</p>
      <h1>${titleHTML(page.title)}</h1>
      <p class="lede">${esc(page.lede)}</p>
      ${bodyHTML(page.body)}
      <div class="info-card">
        ${page.address.map((line) => `<p>${esc(line)}</p>`).join('')}
        <a href="${page.mapUrl}" target="_blank" rel="noreferrer">Abrir no mapa</a>
      </div>
    </div>
    <div class="page-visual">${photoGrid(page.photos, page.title.replace('\n', ' '))}</div>`
}

function renderCopyForm(page) {
  return `
    <div class="page-copy">
      <p class="eyebrow">${esc(page.eyebrow)}</p>
      <h1>${titleHTML(page.title)}</h1>
      <p class="lede">${esc(page.lede)}</p>
      ${bodyHTML(page.body)}
      <div class="info-card">
        <p class="info-label">Morada</p>
        ${page.address.map((line) => `<p>${esc(line)}</p>`).join('')}
        <p class="info-label">Horário</p>
        <p>${esc(page.hours)}</p>
        <p class="info-label">Contactos</p>
        <a href="mailto:${page.email}">${esc(page.email)}</a>
        <a href="tel:${page.phoneHref}">${esc(page.phone)}</a>
      </div>
    </div>
    <div class="page-visual">
      <form class="contact-form" id="contact-form" novalidate data-mailto="${page.email}">
        <p class="info-label">Pedido de orçamento</p>
        <label>Nome<input type="text" name="nome" required></label>
        <label>Email<input type="email" name="email" required></label>
        <label>Telefone (opcional)<input type="tel" name="telefone"></label>
        <label>Mensagem<textarea name="mensagem" rows="4" required placeholder="Conte-nos sobre o seu carro e o que precisa..."></textarea></label>
        <button type="submit" class="cta cta-block">Enviar pedido</button>
        <p class="form-hint" data-default-text="Ao enviar, abrimos o seu cliente de email com a mensagem pronta.">Ao enviar, abrimos o seu cliente de email com a mensagem pronta.</p>
      </form>
    </div>`
}

const RENDERERS = {
  cover: renderCover,
  'copy-photos': renderCopyPhotos,
  'copy-list': renderCopyList,
  'copy-logos': renderCopyLogos,
  'copy-map': renderCopyMap,
  'copy-form': renderCopyForm,
  'project-grid': renderProjectGrid,
  'car-detail': renderCarDetail,
}

export function renderPage(page) {
  const renderer = RENDERERS[page.kind]
  if (!renderer) throw new Error(`Unknown page kind: ${page.kind}`)
  const noVisualClass = page.id === 'about' ? ' page-no-visual' : ''
  return `<article class="page page-${page.kind}${noVisualClass}" data-page-id="${page.id}">${renderer(page)}</article>`
}
