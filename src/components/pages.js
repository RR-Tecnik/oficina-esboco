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
  const alt = page.title.replace('\n', ' ')
  const rows = [
    { label: 'Morada', value: page.address.map((line) => esc(line)).join('<br>') },
    page.access ? { label: 'Acessos', value: esc(page.access) } : null,
    page.hours ? { label: 'Horário', value: esc(page.hours) } : null,
  ].filter(Boolean)
  return `
    <div class="page-copy">
      <p class="eyebrow">${esc(page.eyebrow)}</p>
      <h1>${titleHTML(page.title)}</h1>
      <p class="lede">${esc(page.lede)}</p>
      ${bodyHTML(page.body)}
      <div class="location-info">
        ${rows.map((row) => `
          <div class="location-row">
            <span class="location-row-label">${row.label}</span>
            <span class="location-row-value">${row.value}</span>
          </div>`).join('')}
        <a class="cta location-cta" href="${page.mapUrl}" target="_blank" rel="noreferrer">Abrir no Google Maps →</a>
      </div>
    </div>
    <div class="page-visual">
      <div class="location-visual">
        ${page.mapEmbed ? `<div class="location-map"><iframe src="${page.mapEmbed}" title="Mapa · ${esc(alt)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>` : ''}
        <div class="location-gallery">
          ${page.photos.map((src, i) => `<button class="photo-tile${i === 0 ? ' is-hero' : ''}" type="button" data-photo-src="${src}" data-photo-alt="${esc(alt)} ${i + 1}" data-photo-index="${i + 1}" data-photo-total="${page.photos.length}"><img src="${src}" alt="${esc(alt)} ${i + 1}" loading="lazy"></button>`).join('')}
        </div>
      </div>
    </div>`
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
      <div class="contact-visual">
        ${page.calLink ? `
        <div class="cal-cta">
          <p class="info-label">Prefere marcar já?</p>
          <p class="cal-cta-text">Escolha o dia e a hora que lhe dão mais jeito, sem trocas de email.</p>
          <button type="button" class="cta cta-block" data-cal-link="${esc(page.calLink)}" data-cal-namespace="" data-cal-config='{"layout":"month_view"}'>Marcar visita →</button>
        </div>` : ''}
        <form class="contact-form" id="contact-form" novalidate data-mailto="${page.email}">
          <p class="info-label">Pedido de orçamento</p>
          <label>Nome<input type="text" name="nome" autocomplete="name" required></label>
          <label>Email<input type="email" name="email" autocomplete="email" required></label>
          <label>Telefone (opcional)<input type="tel" name="telefone" autocomplete="tel"></label>
          <label>Mensagem<textarea name="mensagem" rows="4" required placeholder="Conte-nos sobre o seu carro e o que precisa..."></textarea></label>
          <input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" aria-hidden="true" style="display:none">
          <button type="submit" class="cta cta-block">Enviar pedido</button>
          <p class="form-hint" data-default-text="Respondemos a todos os pedidos, normalmente em 1–2 dias úteis.">Respondemos a todos os pedidos, normalmente em 1–2 dias úteis.</p>
        </form>
      </div>
    </div>`
}

function renderServiceDoc(page) {
  return `
    <div class="service-doc">
      <header class="service-doc-head">
        <button class="back-link" type="button" data-go="services">&larr; Voltar aos serviços</button>
        <p class="eyebrow">${esc(page.eyebrow)}</p>
        <h1>${titleHTML(page.title)}</h1>
        <p class="lede">${esc(page.lede)}</p>
        ${page.intro ? `<p>${esc(page.intro)}</p>` : ''}
      </header>

      <section class="service-block">
        <h2 class="service-block-title">${esc(page.plansTitle)}</h2>
        <div class="plan-grid">
          ${page.plans.map((plan) => `
            <article class="plan-card${plan.feature ? ' is-feature' : ''}">
              <span class="plan-tier">${esc(plan.tier)}</span>
              <h3>${esc(plan.name)}</h3>
              <p class="plan-desc">${esc(plan.desc)}</p>
              <ul class="plan-list">${plan.items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
            </article>`).join('')}
        </div>
      </section>

      <section class="service-block">
        <h2 class="service-block-title">${esc(page.intervalsTitle)}</h2>
        <p>${esc(page.intervalsIntro)}</p>
        <div class="interval-grid">
          ${page.intervals.map((interval) => `
            <div class="interval-item">
              <p class="interval-label">${esc(interval.label)}</p>
              <p>${esc(interval.text)}</p>
            </div>`).join('')}
        </div>
      </section>

      <section class="service-block service-block-split">
        ${page.columns.map((col) => `
          <div>
            <h2 class="service-block-title">${esc(col.heading)}</h2>
            <p>${esc(col.text)}</p>
          </div>`).join('')}
      </section>

      <section class="service-block">
        <h2 class="service-block-title">${esc(page.stepsTitle)}</h2>
        <ol class="step-list">
          ${page.steps.map((step, i) => `
            <li><span class="step-n">${String(i + 1).padStart(2, '0')}</span><p>${esc(step)}</p></li>`).join('')}
        </ol>
        ${page.outro ? `<p class="service-outro">${esc(page.outro)}</p>` : ''}
      </section>
    </div>`
}

function guideVariantHTML(v) {
  return `
    <p class="lede">${esc(v.lede)}</p>
    ${(v.intro || []).map((text) => `<p>${esc(text)}</p>`).join('')}

    <section class="service-block">
      <h2 class="service-block-title">${esc(v.areasTitle)}</h2>
      <div class="area-grid">
        ${v.areas.map((area) => `
          <article class="area-card">
            <h3>${esc(area.heading)}</h3>
            <p>${esc(area.text)}</p>
          </article>`).join('')}
      </div>
    </section>

    <section class="service-block service-block-split">
      ${v.columns.map((col) => `
        <div>
          <h2 class="service-block-title">${esc(col.heading)}</h2>
          <p>${esc(col.text)}</p>
        </div>`).join('')}
    </section>

    <section class="service-block">
      <h2 class="service-block-title">${esc(v.stepsTitle)}</h2>
      <ol class="step-list">
        ${v.steps.map((step, i) => `
          <li><span class="step-n">${String(i + 1).padStart(2, '0')}</span><p>${esc(step)}</p></li>`).join('')}
      </ol>
      ${v.outro ? `<p class="service-outro">${esc(v.outro)}</p>` : ''}
    </section>`
}

function renderReprog(page) {
  const alt = 'Reprogramações RR Technik'
  return `
    <div class="service-doc">
      <header class="service-doc-head">
        <button class="back-link" type="button" data-go="services">&larr; Voltar aos serviços</button>
        <p class="eyebrow">${esc(page.eyebrow)}</p>
        <h1>${titleHTML(page.title)}</h1>
        <p class="lede">${esc(page.lede)}</p>
        ${page.intro ? `<p>${esc(page.intro)}</p>` : ''}
      </header>

      <section class="service-block">
        <h2 class="service-block-title">${esc(page.areasTitle)}</h2>
        <div class="area-grid">
          ${page.areas.map((area) => `
            <article class="area-card">
              <h3>${esc(area.heading)}</h3>
              <p>${esc(area.text)}</p>
            </article>`).join('')}
        </div>
      </section>

      <section class="service-block">
        <h2 class="service-block-title">${esc(page.stepsTitle)}</h2>
        <ol class="step-list">
          ${page.steps.map((step, i) => `
            <li><span class="step-n">${String(i + 1).padStart(2, '0')}</span><p>${esc(step)}</p></li>`).join('')}
        </ol>
        ${page.outro ? `<p class="service-outro">${esc(page.outro)}</p>` : ''}
      </section>

      ${page.photos?.length ? `
      <section class="service-block">
        <h2 class="service-block-title">${esc(page.galleryTitle || 'Galeria')}</h2>
        <div class="reprog-gallery">
          ${page.photos.map((src, i) => `<button class="photo-tile${i === 0 ? ' is-hero' : ''}" type="button" data-photo-src="${src}" data-photo-alt="${esc(alt)} ${i + 1}" data-photo-index="${i + 1}" data-photo-total="${page.photos.length}"><img src="${src}" alt="${esc(alt)} ${i + 1}" loading="lazy"></button>`).join('')}
        </div>
      </section>` : ''}
    </div>`
}

function renderAbout(page) {
  return `
    <div class="about-doc">
      <header class="about-masthead">
        <p class="eyebrow">${esc(page.eyebrow)}</p>
        <h1>${titleHTML(page.title)}</h1>
        <p class="lede">${esc(page.lede)}</p>
      </header>

      <div class="about-pillars">
        ${page.body.map((block) => `
          <article class="about-pillar">
            <h2>${esc(block.heading)}</h2>
            <p>${esc(block.text)}</p>
          </article>`).join('')}
      </div>

      <section class="about-base">
        <dl class="about-facts">
          ${page.facts.map((fact) => `
            <div class="about-fact">
              <dt>${esc(fact.label)}</dt>
              <dd>${esc(fact.value)}</dd>
            </div>`).join('')}
        </dl>
        ${page.partners?.length ? `<div class="partner-grid about-partner-grid">${page.partners.map((p) => `<span>${esc(p)}</span>`).join('')}</div>` : ''}
      </section>

      ${page.signature ? `<p class="about-signature">${esc(page.signature)}</p>` : ''}
    </div>`
}

function renderServiceGuide(page) {
  return `
    <div class="service-doc">
      <header class="service-doc-head">
        <button class="back-link" type="button" data-go="services">&larr; Voltar aos serviços</button>
        <p class="eyebrow">${esc(page.eyebrow)}</p>
        <h1>${titleHTML(page.title)}</h1>
        <div class="guide-toggle" role="tablist" aria-label="${esc(page.title)}">
          ${page.toggle.map((t, i) => `<button type="button" role="tab" class="guide-toggle-btn${i === 0 ? ' is-active' : ''}" data-guide-target="${esc(t.id)}" aria-selected="${i === 0 ? 'true' : 'false'}">${esc(t.label)}</button>`).join('')}
        </div>
      </header>
      ${page.toggle.map((t, i) => `<div class="guide-panel" data-guide-panel="${esc(t.id)}"${i === 0 ? '' : ' hidden'}>${guideVariantHTML(page.variants[t.id])}</div>`).join('')}
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
  'service-doc': renderServiceDoc,
  'service-guide': renderServiceGuide,
  reprog: renderReprog,
  about: renderAbout,
}

export function renderPage(page) {
  const renderer = RENDERERS[page.kind]
  if (!renderer) throw new Error(`Unknown page kind: ${page.kind}`)
  const number = page.number ? ` data-number="${esc(page.number)}"` : ''
  return `<article class="page page-${page.kind}" data-page-id="${page.id}"${number}>${renderer(page)}</article>`
}
