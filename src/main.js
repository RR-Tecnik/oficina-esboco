import './style.css'
import { brand, nav, pages } from './data/content.js'
import { renderShell } from './components/shell.js'
import { renderPage } from './components/pages.js'

// -- Cal.com booking widget (loads only if a link is configured in brand.calLink) --
if (brand.calLink) {
  (function loadCal(C, A, L) {
    const push = (a, ar) => a.q.push(ar)
    const d = C.document
    C.Cal = C.Cal || function (...ar) {
      const cal = C.Cal
      if (!cal.loaded) {
        cal.ns = {}
        cal.q = cal.q || []
        d.head.appendChild(d.createElement('script')).src = A
        cal.loaded = true
      }
      if (ar[0] === L) {
        const api = (...apiAr) => push(api, apiAr)
        const namespace = ar[1]
        api.q = api.q || []
        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api
          push(cal.ns[namespace], ar)
          push(cal, ['initNamespace', namespace])
        } else push(cal, ar)
        return
      }
      push(cal, ar)
    }
  })(window, 'https://app.cal.com/embed/embed.js', 'init')

  window.Cal('init', { origin: 'https://cal.com' })
  window.Cal('ui', {
    styles: { branding: { brandColor: '#0f7ec0' } },
    hideEventTypeDetails: false,
    layout: 'month_view',
  })
}

const app = document.querySelector('#app')
app.innerHTML = renderShell(brand, nav, pages.length)

const stage = document.querySelector('#stage')
const pagerFill = document.querySelector('#pager-fill')
const railFill = document.querySelector('#rail-fill')
const pagerCount = document.querySelector('#pager-count')
const dotsHost = document.querySelector('#pager-dots')
const menuToggle = document.querySelector('.menu-toggle')
const mobileNav = document.querySelector('.mobile-nav')
const lightbox = document.querySelector('#lightbox')
const lightboxImg = lightbox.querySelector('img')
const lightboxCount = lightbox.querySelector('.lightbox-count')
const sectionCount = pages.filter((page) => page.id === page.tabId?.replace('-cover', '')).length
const carouselPages = pages.filter((page) => page.id === 'home' || page.id.endsWith('-cover'))

dotsHost.innerHTML = carouselPages.map((page, i) => `<button class="dot" type="button" data-index="${i}" aria-label="Ir para ${page.eyebrow}"></button>`).join('')
const dots = [...dotsHost.querySelectorAll('.dot')]

let current = -1

function setActiveChrome(index) {
  const page = pages[index]
  const carouselIndex = carouselPages.findIndex((carouselPage) => carouselPage.id === (page.tabId || page.id))
  document.querySelectorAll('.tab, .mobile-tab').forEach((el) => el.classList.toggle('is-active', el.dataset.go === (page.tabId || page.id)))
  dots.forEach((dot, i) => dot.classList.toggle('is-active', i === carouselIndex))
  const progress = `${(Number(page.number) / sectionCount) * 100}%`
  pagerFill.style.height = progress
  if (railFill) railFill.style.height = progress
  pagerCount.textContent = `${page.number} / ${String(sectionCount).padStart(2, '0')}`
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
let navToken = 0

function staggerIn(pageEl) {
  if (prefersReducedMotion.matches) return
  const kids = pageEl.querySelectorAll('.page-copy > *, .cover-copy > *, .service-doc > *, .about-doc > *')
  kids.forEach((el, i) => { if (i < 6) el.style.setProperty('--rise-d', `${110 + i * 45}ms`) })
  pageEl.classList.add('is-mounting')
  window.setTimeout(() => pageEl.classList.remove('is-mounting'), 900)
}

function mountPage(index, { instant = false } = {}) {
  const page = pages[index]
  if (!page) return
  const previous = current
  current = index

  setActiveChrome(index)
  history.replaceState(null, '', `#${page.id}`)

  // collapse any transition still in flight so we always start from 0 or 1 page
  while (stage.children.length > 1) stage.firstElementChild.remove()
  const outgoing = stage.firstElementChild
  if (outgoing) {
    outgoing.classList.remove('is-entering', 'is-sliding')
    outgoing.style.transform = ''
    outgoing.style.opacity = ''
  }

  const holder = document.createElement('div')
  holder.innerHTML = renderPage(page)
  const nextEl = holder.firstElementChild
  stage.dataset.kind = page.kind

  if (instant || !outgoing || prefersReducedMotion.matches) {
    if (outgoing) outgoing.remove()
    stage.appendChild(nextEl)
    nextEl.scrollTop = 0
    nextEl.querySelector('.page-copy')?.scrollTo(0, 0)
    wirePageContent(nextEl)
    staggerIn(nextEl)
    return
  }

  const token = ++navToken
  const dir = index > previous ? 1 : -1

  nextEl.classList.add('is-entering')
  nextEl.style.transform = `translateX(${dir * 100}%)`
  stage.appendChild(nextEl)
  nextEl.querySelector('.page-copy')?.scrollTo(0, 0)
  wirePageContent(nextEl)
  staggerIn(nextEl)

  void nextEl.offsetWidth // commit the start position before transitioning

  requestAnimationFrame(() => {
    if (token !== navToken) return
    nextEl.classList.add('is-sliding')
    outgoing.classList.add('is-sliding')
    nextEl.style.transform = 'translateX(0)'
    outgoing.style.transform = `translateX(${dir * -30}%)`
    outgoing.style.opacity = '0.35'
  })

  const onEnd = (event) => {
    if (event.target !== nextEl || event.propertyName !== 'transform') return
    nextEl.removeEventListener('transitionend', onEnd)
    cleanup()
  }
  function cleanup() {
    if (token !== navToken) return
    nextEl.removeEventListener('transitionend', onEnd)
    outgoing.remove()
    nextEl.classList.remove('is-entering', 'is-sliding')
    nextEl.style.transform = ''
  }
  nextEl.addEventListener('transitionend', onEnd)
  window.setTimeout(cleanup, 760)
}

function goToId(id) {
  const index = pages.findIndex((p) => p.id === id)
  if (index >= 0 && index !== current) mountPage(index)
}

function goToIndex(direction) {
  const currentCarouselIndex = carouselPages.findIndex((carouselPage) => carouselPage.id === (pages[current].tabId || pages[current].id))
  const nextCarouselIndex = (currentCarouselIndex + direction + carouselPages.length) % carouselPages.length
  const next = pages.findIndex((page) => page.id === carouselPages[nextCarouselIndex].id)
  if (next !== current) mountPage(next)
}

function goToCarouselIndex(index) {
  const next = pages.findIndex((page) => page.id === carouselPages[index]?.id)
  if (next >= 0 && next !== current) mountPage(next)
}

function wirePageContent(root) {
  const form = root.querySelector('#contact-form')
  if (form) {
    const hint = form.querySelector('.form-hint')
    const submitButton = form.querySelector('button[type="submit"]')
    const setHint = (text, state) => {
      if (!hint) return
      hint.textContent = text
      hint.classList.remove('is-ok', 'is-error')
      hint.style.cursor = ''
      hint.onclick = null
      if (state) hint.classList.add(state)
    }
    const resetHintLater = () => window.setTimeout(() => {
      if (hint && !hint.classList.contains('is-ok')) setHint(hint.dataset.defaultText)
    }, 8000)

    form.addEventListener('submit', async (event) => {
      event.preventDefault()
      const data = new FormData(form)
      if (data.get('botcheck')) return // honeypot tripped

      const nome = data.get('nome')?.toString().trim() || ''
      const email = data.get('email')?.toString().trim() || ''
      const telefone = data.get('telefone')?.toString().trim() || ''
      const mensagem = data.get('mensagem')?.toString().trim() || ''
      const emailOk = /^\S+@\S+\.\S+$/.test(email)

      if (!nome || !emailOk || !mensagem) {
        setHint('Preencha o nome, um email válido e a mensagem.', 'is-error')
        form.querySelector(!nome ? '[name="nome"]' : !emailOk ? '[name="email"]' : '[name="mensagem"]')?.focus()
        return
      }

      const subject = 'Pedido de orçamento · RR Technik'
      const body = [`Nome: ${nome}`, `Email: ${email}`, telefone ? `Telefone: ${telefone}` : '', '', mensagem].filter(Boolean).join('\n')
      const mailto = `mailto:${form.dataset.mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      const key = brand.web3formsKey?.trim()

      if (!key) {
        setHint('A abrir o seu email…')
        window.location.href = mailto
        resetHintLater()
        return
      }

      if (submitButton) submitButton.disabled = true
      setHint('A enviar…')
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: key,
            subject,
            from_name: nome,
            name: nome,
            email,
            telefone: telefone || 'não indicado',
            message: mensagem,
            botcheck: '',
          }),
        })
        const out = await res.json().catch(() => ({}))
        if (res.ok && out.success) {
          form.reset()
          setHint('Pedido enviado. Respondemos em breve.', 'is-ok')
        } else {
          throw new Error(out.message || 'erro')
        }
      } catch (error) {
        setHint('Não deu para enviar agora. Toque para enviar por email.', 'is-error')
        if (hint) {
          hint.style.cursor = 'pointer'
          hint.onclick = () => { window.location.href = mailto }
        }
        resetHintLater()
      } finally {
        if (submitButton) submitButton.disabled = false
      }
    })
  }

  root.querySelectorAll('.photo-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      lightboxImg.src = tile.dataset.photoSrc
      lightboxImg.alt = tile.dataset.photoAlt
      lightboxCount.textContent = `${tile.dataset.photoIndex.padStart(2, '0')} / ${tile.dataset.photoTotal.padStart(2, '0')}`
      lightbox.classList.add('is-open')
      lightbox.setAttribute('aria-hidden', 'false')
    })
  })

  root.querySelectorAll('[data-go]').forEach((el) => {
    el.addEventListener('click', () => goToId(el.dataset.go))
  })

  const guideToggle = root.querySelector('.guide-toggle')
  if (guideToggle) {
    const buttons = [...guideToggle.querySelectorAll('.guide-toggle-btn')]
    const panels = [...root.querySelectorAll('.guide-panel')]
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.guideTarget
        buttons.forEach((b) => {
          const on = b === button
          b.classList.toggle('is-active', on)
          b.setAttribute('aria-selected', String(on))
        })
        panels.forEach((panel) => { panel.hidden = panel.dataset.guidePanel !== target })
        root.scrollTo({ top: 0 })
      })
    })
  }
}

// -- global navigation wiring (chrome only renders once) --
document.querySelectorAll('.tab, .mobile-tab, .footer-link, .brand').forEach((el) => {
  el.addEventListener('click', () => {
    goToId(el.dataset.go)
    mobileNav.classList.remove('is-open')
    menuToggle.setAttribute('aria-expanded', 'false')
  })
})
document.querySelector('.pager-prev').addEventListener('click', () => goToIndex(-1))
document.querySelector('.pager-next').addEventListener('click', () => goToIndex(1))
dots.forEach((dot) => dot.addEventListener('click', () => goToCarouselIndex(Number(dot.dataset.index))))
menuToggle.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('is-open')
  menuToggle.setAttribute('aria-expanded', String(open))
  mobileNav.setAttribute('aria-hidden', String(!open))
})
lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
  lightbox.classList.remove('is-open')
  lightbox.setAttribute('aria-hidden', 'true')
})
document.addEventListener('keydown', (event) => {
  if (lightbox.classList.contains('is-open')) {
    if (event.key === 'Escape') lightbox.querySelector('.lightbox-close').click()
    return
  }
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') goToIndex(1)
  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') goToIndex(-1)
})
let touchStartX = 0
document.querySelector('.stage').addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX }, { passive: true })
document.querySelector('.stage').addEventListener('touchend', (e) => {
  const distance = e.changedTouches[0].screenX - touchStartX
  if (Math.abs(distance) > 50) goToIndex(distance < 0 ? 1 : -1)
}, { passive: true })
window.addEventListener('hashchange', () => goToId(window.location.hash.slice(1)))

// -- preloader (RR mark draws in, then the curtain lifts), once per session --
const preloader = document.getElementById('preloader')
if (preloader) {
  let seen = null
  try { seen = sessionStorage.getItem('rr-intro') } catch { /* private mode */ }
  if (seen) {
    preloader.remove()
  } else {
    try { sessionStorage.setItem('rr-intro', '1') } catch { /* ignore */ }
    let dismissed = false
    const dismiss = () => {
      if (dismissed) return
      dismissed = true
      preloader.classList.add('is-done')
      preloader.addEventListener('transitionend', () => preloader.remove(), { once: true })
      window.setTimeout(() => preloader.remove(), 1000)
    }
    window.setTimeout(dismiss, prefersReducedMotion.matches ? 480 : 2050)
    preloader.addEventListener('click', dismiss)
    window.addEventListener('keydown', dismiss, { once: true })
  }
}

// -- initial mount --
const initialId = window.location.hash.slice(1)
const initialIndex = pages.findIndex((p) => p.id === initialId)
mountPage(initialIndex >= 0 ? initialIndex : 0, { instant: true })
