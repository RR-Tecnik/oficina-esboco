import './style.css'

const slides = [
  { id: 'atelier', eyebrow: 'Rua do Negral 1007 · Portugal', title: 'Performance,\ncom propósito.', description: 'Um atelier independente para máquinas que pedem mais. Engenharia, detalhe e paixão reunidos no mesmo lugar.', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2400&q=90', action: 'Descobrir o atelier' },
  { id: 'atelier-about', eyebrow: '01 / A nossa visão', title: 'Mais do que\numa oficina.', description: 'Somos um espaço dedicado a quem vê o automóvel como uma extensão de si. Cada projeto nasce de uma conversa, ganha forma com precisão e sai com uma nova personalidade.', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=2000&q=85', action: 'Conhecer a equipa' },
  { id: 'services', eyebrow: '02 / Serviços', title: 'Afinamos\no extraordinário.', description: 'Da manutenção preventiva à preparação de pista, tratamos cada intervenção com a mesma obsessão pelo detalhe.', image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=2000&q=85', action: 'Ver serviços' },
  { id: 'partners', eyebrow: '03 / A nossa rede', title: 'Os melhores\nno mesmo ritmo.', description: 'Trabalhamos com especialistas que partilham a nossa exigência: manutenção, software, pista, performance e detalhe.', image: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=2000&q=85', action: 'Ver parceiros' },
  { id: 'gallery', eyebrow: '04 / Caderno de estrada', title: 'Feito para\ndeixar marca.', description: 'Momentos de pista, metal trabalhado e máquinas que contam histórias. Uma seleção do nosso universo em movimento.', image: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=2000&q=85', action: 'Explorar galeria' },
  { id: 'location', eyebrow: '05 / Onde estamos', title: 'Chegue ao\nponto certo.', description: 'O atelier vive na Rua do Negral 1007, Portugal. Um espaço reservado para projetos com ambição.', image: 'https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=2000&q=85', action: 'Abrir localização' },
  { id: 'contact', eyebrow: '06 / Visite-nos', title: 'O próximo capítulo\ncomeça aqui.', description: 'Traga a sua ideia, o seu carro ou simplesmente a vontade de o tornar mais seu. Estamos prontos para ouvir.', image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=2000&q=85', action: 'Entrar em contacto' },
]

const serviceItems = [
  ['Manutenção', 'Manutenção preventiva e acompanhamento mecânico para manter cada carro no seu melhor estado.'],
  ['Modificações', 'Alterações pensadas para reforçar a identidade, o comportamento e a presença de cada automóvel.'],
  ['Reprogramação', 'Ajustes de software pensados para entregar uma resposta mais precisa, progressiva e personalizada.'],
  ['Vendas à consignação', 'Apresentação e venda de automóveis selecionados com acompanhamento próximo e transparente.'],
]

document.querySelector('#app').innerHTML = `
  <main class="site-shell">
    <header class="topbar">
      <a class="brand" href="#atelier" aria-label="RR Tecnik - início"><span>RR</span><small>Tecnik<br>performance</small></a>
      <nav class="main-nav" aria-label="Navegação principal"><a href="#atelier-about" data-nav="1">Sobre Nós</a><div class="services-menu"><button class="services-trigger" type="button" aria-expanded="false">Serviços <span>⌄</span></button><div class="services-dropdown">${serviceItems.map(([name], index) => `<button type="button" class="service-option" data-service="${index}">${name}</button>`).join('')}</div></div><a href="#location" data-nav="5">Localização</a><a href="#gallery" data-nav="4">Projetos</a><a href="#contact" data-nav="6">Contactos e marcações</a></nav>
    </header>
    <section class="viewport" aria-live="polite">
      <div class="slides">${slides.map((slide, index) => `<article class="slide ${index === 0 ? 'is-active' : ''}" data-slide="${index}" id="${slide.id}"><div class="slide-image" style="background-image: url('${slide.image}')"></div><div class="image-shade"></div><div class="slide-content"><p class="eyebrow">${slide.eyebrow}</p><h1>${slide.title.replace('\n', '<br>')}</h1><p class="description">${slide.description}</p><a class="primary-link" href="#${slide.id === 'atelier' ? 'atelier-about' : slide.id === 'contact' ? 'contact' : slide.id}">${slide.action}<span>↗</span></a></div>${slide.id === 'services' ? '<div class="service-list"><div><span>01</span>Manutenção</div><div><span>02</span>Modificações</div><div><span>03</span>Reprogramação</div><div><span>04</span>Vendas à consignação</div></div>' : ''}${slide.id === 'partners' ? '<div class="partner-list"><span>KW</span><span>034</span><span>HJS</span><span>ST</span></div>' : ''}${slide.id === 'location' ? '<div class="contact-card"><p>Rua do Negral 1007</p><p>Portugal</p><a href="https://maps.google.com/?q=Rua+do+Negral+1007+Portugal" target="_blank" rel="noreferrer">Abrir no mapa ↗</a></div>' : ''}${slide.id === 'contact' ? '<div class="contact-card"><p>Rua do Negral 1007</p><p>Portugal</p><a href="mailto:cardosorodrigo1000@gmail.com">cardosorodrigo1000@gmail.com</a><a href="tel:960455763">960 455 763</a></div>' : ''}</article>`).join('')}</div>
    </section>
    <div class="side-rail"><div class="progress"><span></span></div><span class="counter"><b>01</b> / ${String(slides.length).padStart(2, '0')}</span></div>
    <button class="arrow arrow-prev" type="button" aria-label="Anterior"><span></span></button><button class="arrow arrow-next" type="button" aria-label="Seguinte"><span></span></button>
    <div class="mobile-dots" aria-label="Escolher secção">${slides.map((slide, i) => `<button class="dot ${i === 0 ? 'is-active' : ''}" data-go="${i}" aria-label="Ir para ${slide.eyebrow}"></button>`).join('')}</div>
    <section class="footer-panel" id="contact-details">
      <div class="footer-mark"><span>RR</span><small>Tecnik<br>performance</small></div>
      <div class="footer-column"><small>Explorar</small><a href="#atelier-about">Sobre nós</a><a href="#services">Serviços</a><a href="#partners">Parcerias</a></div>
      <div class="footer-column"><small>RR Tecnik</small><a href="#gallery">Galeria</a><a href="#location">Localização</a><a href="#contact">Contactos</a></div>
      <div class="footer-column contact-info"><small>Visite-nos</small><p>Rua do Negral 1007<br>Portugal</p><p>Seg — Sex · 08:30 — 18:00</p><a href="mailto:cardosorodrigo1000@gmail.com">cardosorodrigo1000@gmail.com</a><a href="tel:960455763">960 455 763</a></div>
    </section>
    <footer class="footer"><span>© 2026 RR Tecnik</span><span>Performance / Detail / Drive</span><span>Instagram&nbsp; ↗</span></footer>
    <aside class="service-detail" aria-hidden="true"><button class="detail-close" type="button" aria-label="Fechar">×</button><p class="eyebrow">Serviços / RR Tecnik</p><h2></h2><p class="detail-copy"></p><a href="#contact" class="primary-link">Falar sobre este serviço <span>↗</span></a></aside>
  </main>
`

let current = 0
const slideElements = [...document.querySelectorAll('.slide')]
const navLinks = [...document.querySelectorAll('[data-nav]')]
const dots = [...document.querySelectorAll('.dot')]
const progress = document.querySelector('.progress span')
const counter = document.querySelector('.counter')
const servicesTrigger = document.querySelector('.services-trigger')
const servicesMenu = document.querySelector('.services-menu')
const serviceDetail = document.querySelector('.service-detail')

function goTo(index) {
  current = (index + slides.length) % slides.length
  slideElements.forEach((slide, i) => slide.classList.toggle('is-active', i === current))
  navLinks.forEach((link) => link.classList.toggle('is-active', Number(link.dataset.nav) === current))
  dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current))
  progress.style.height = `${((current + 1) / slides.length) * 100}%`
  counter.innerHTML = `<b>${String(current + 1).padStart(2, '0')}</b> / ${String(slides.length).padStart(2, '0')}`
  history.replaceState(null, '', `#${slides[current].id}`)
}

document.querySelector('.arrow-prev').addEventListener('click', () => goTo(current - 1))
document.querySelector('.arrow-next').addEventListener('click', () => goTo(current + 1))
dots.forEach((dot) => dot.addEventListener('click', () => goTo(Number(dot.dataset.go))))
navLinks.forEach((link) => link.addEventListener('click', (event) => { event.preventDefault(); goTo(Number(link.dataset.nav)) }))
servicesTrigger.addEventListener('click', () => { const open = servicesMenu.classList.toggle('is-open'); servicesTrigger.setAttribute('aria-expanded', String(open)) })
document.querySelectorAll('.service-option').forEach((option) => option.addEventListener('click', () => { const [name, copy] = serviceItems[Number(option.dataset.service)]; serviceDetail.querySelector('h2').textContent = name; serviceDetail.querySelector('.detail-copy').textContent = copy; serviceDetail.classList.add('is-open'); serviceDetail.setAttribute('aria-hidden', 'false'); servicesMenu.classList.remove('is-open'); servicesTrigger.setAttribute('aria-expanded', 'false') }))
document.querySelector('.detail-close').addEventListener('click', () => { serviceDetail.classList.remove('is-open'); serviceDetail.setAttribute('aria-hidden', 'true') })
document.addEventListener('click', (event) => { if (!servicesMenu.contains(event.target)) { servicesMenu.classList.remove('is-open'); servicesTrigger.setAttribute('aria-expanded', 'false') } })
document.addEventListener('keydown', (event) => { if (event.key === 'ArrowRight' || event.key === 'ArrowDown') goTo(current + 1); if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') goTo(current - 1) })
let touchStart = 0
document.querySelector('.viewport').addEventListener('touchstart', (event) => { touchStart = event.changedTouches[0].screenX }, { passive: true })
document.querySelector('.viewport').addEventListener('touchend', (event) => { const distance = event.changedTouches[0].screenX - touchStart; if (Math.abs(distance) > 50) goTo(current + (distance < 0 ? 1 : -1)) }, { passive: true })
const initial = slides.findIndex((slide) => slide.id === window.location.hash.slice(1))
goTo(initial >= 0 ? initial : 0)
window.addEventListener('hashchange', () => {
  const next = slides.findIndex((slide) => slide.id === window.location.hash.slice(1))
  if (next >= 0 && next !== current) goTo(next)
})