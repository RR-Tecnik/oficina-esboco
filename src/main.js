import './style.css'
import { brand, nav, pages } from './data/content.js'
import { renderShell } from './components/shell.js'
import { renderPage } from './components/pages.js'

const app = document.querySelector('#app')
app.innerHTML = renderShell(brand, nav, pages.length)

const stage = document.querySelector('#stage')
const pagerFill = document.querySelector('#pager-fill')
const pagerCount = document.querySelector('#pager-count')
const dotsHost = document.querySelector('#pager-dots')
const menuToggle = document.querySelector('.menu-toggle')
const mobileNav = document.querySelector('.mobile-nav')
const lightbox = document.querySelector('#lightbox')
const lightboxImg = lightbox.querySelector('img')
const lightboxCount = lightbox.querySelector('.lightbox-count')
const sectionCount = pages.filter((page) => page.id === page.tabId?.replace('-cover', '')).length

dotsHost.innerHTML = pages.map((page, i) => `<button class="dot" type="button" data-index="${i}" aria-label="Ir para ${page.eyebrow}"></button>`).join('')
const dots = [...dotsHost.querySelectorAll('.dot')]

let current = -1

function setActiveChrome(index) {
  const page = pages[index]
  document.querySelectorAll('.tab, .mobile-tab').forEach((el) => el.classList.toggle('is-active', el.dataset.go === (page.tabId || page.id)))
  dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index))
  pagerFill.style.height = `${(Number(page.number) / sectionCount) * 100}%`
  pagerCount.textContent = `${page.number} / ${String(sectionCount).padStart(2, '0')}`
}

function mountPage(index, { instant = false } = {}) {
  const page = pages[index]
  if (!page) return
  current = index

  const swap = () => {
    stage.innerHTML = renderPage(page)
    stage.dataset.kind = page.kind
    stage.firstElementChild.scrollTop = 0
    stage.querySelector('.page-copy')?.scrollTo(0, 0)
    requestAnimationFrame(() => stage.classList.add('is-visible'))
    wirePageContent()
  }

  if (instant || !stage.firstElementChild) {
    swap()
  } else {
    stage.classList.remove('is-visible')
    window.setTimeout(swap, 220)
  }

  setActiveChrome(index)
  history.replaceState(null, '', `#${page.id}`)
}

function goToId(id) {
  const index = pages.findIndex((p) => p.id === id)
  if (index >= 0 && index !== current) mountPage(index)
}

function goToIndex(index) {
  const next = (index + pages.length) % pages.length
  if (next !== current) mountPage(next)
}

function wirePageContent() {
  const form = stage.querySelector('#contact-form')
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const data = new FormData(form)
      const nome = data.get('nome')?.toString().trim() || ''
      const email = data.get('email')?.toString().trim() || ''
      const telefone = data.get('telefone')?.toString().trim() || ''
      const mensagem = data.get('mensagem')?.toString().trim() || ''
      const body = [`Nome: ${nome}`, `Email: ${email}`, telefone ? `Telefone: ${telefone}` : '', '', mensagem].filter(Boolean).join('\n')
      const mailto = `mailto:${form.dataset.mailto}?subject=${encodeURIComponent('Pedido de orçamento - RR Technik')}&body=${encodeURIComponent(body)}`
      const hint = form.querySelector('.form-hint')
      if (hint) hint.textContent = 'A abrir o seu cliente de email…'
      window.location.href = mailto
      window.setTimeout(() => { if (hint) hint.textContent = hint.dataset.defaultText }, 4000)
    })
  }

  stage.querySelectorAll('.photo-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      lightboxImg.src = tile.dataset.photoSrc
      lightboxImg.alt = tile.dataset.photoAlt
      lightboxCount.textContent = `${tile.dataset.photoIndex.padStart(2, '0')} / ${tile.dataset.photoTotal.padStart(2, '0')}`
      lightbox.classList.add('is-open')
      lightbox.setAttribute('aria-hidden', 'false')
    })
  })

  stage.querySelectorAll('[data-go]').forEach((el) => {
    el.addEventListener('click', () => goToId(el.dataset.go))
  })
}

// -- global navigation wiring (chrome only renders once) --
document.querySelectorAll('.tab, .mobile-tab, .brand').forEach((el) => {
  el.addEventListener('click', () => {
    goToId(el.dataset.go)
    mobileNav.classList.remove('is-open')
    menuToggle.setAttribute('aria-expanded', 'false')
  })
})
document.querySelector('.pager-prev').addEventListener('click', () => goToIndex(current - 1))
document.querySelector('.pager-next').addEventListener('click', () => goToIndex(current + 1))
dots.forEach((dot) => dot.addEventListener('click', () => goToIndex(Number(dot.dataset.index))))
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
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') goToIndex(current + 1)
  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') goToIndex(current - 1)
})
let touchStartX = 0
document.querySelector('.stage').addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX }, { passive: true })
document.querySelector('.stage').addEventListener('touchend', (e) => {
  const distance = e.changedTouches[0].screenX - touchStartX
  if (Math.abs(distance) > 50) goToIndex(current + (distance < 0 ? 1 : -1))
}, { passive: true })
window.addEventListener('hashchange', () => goToId(window.location.hash.slice(1)))

// -- initial mount --
const initialId = window.location.hash.slice(1)
const initialIndex = pages.findIndex((p) => p.id === initialId)
mountPage(initialIndex >= 0 ? initialIndex : 0, { instant: true })
