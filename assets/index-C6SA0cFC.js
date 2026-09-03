(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=e=>`/oficina-esboco/${e.replace(/^\//,``)}`,t={mark:`RR`,name:`Technik Performance`,location:`Valongo · Portugal`,address:`Rua do Negral 1007`,country:`Valongo, Portugal`,hours:`Seg – Sex, 08:30 – 18:00`,email:`cardosorodrigo1000@gmail.com`,phone:`960 455 763`},n=[{id:`about-cover`,label:`Sobre nós`},{id:`services-cover`,label:`Serviços`},{id:`projects-cover`,label:`Projetos`},{id:`location-cover`,label:`Localização`},{id:`contact-cover`,label:`Contactos e marcações`}],r=[e(`/workshop/workshop-1.jpg`),e(`/workshop/workshop-2.jpg`),e(`/workshop/workshop-3.jpg`),e(`/workshop/workshop-4.jpg`),e(`/workshop/workshop-5.jpg`),`https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2400&q=90`,`https://i.imgur.com/8KjB9QY.jpeg`,`https://i.imgur.com/3R2kF4L.jpeg`,`https://i.imgur.com/9P5vH8N.jpeg`],i=[`https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2400&q=90`,`https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=90`,`https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=2400&q=90`,`https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=2400&q=90`],a=[{id:`home`,kind:`cover`,number:`00`,eyebrow:`Valongo · Portugal`,title:`Performance,
com propósito.`,lede:`Uma oficina independente para máquinas que pedem mais. Engenharia, detalhe e paixão reunidos no mesmo lugar.`,image:`https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2400&q=90`,cta:{label:`Conhecer a oficina`,target:`about`}},{id:`about-cover`,tabId:`about-cover`,kind:`cover`,number:`01`,eyebrow:`01 · Sobre nós`,title:`Sobre nós.`,lede:`Conheça a oficina, os critérios e a ambição por trás de cada intervenção.`,image:i[3],cta:{label:`Conhecer`,target:`about`}},{id:`about`,tabId:`about-cover`,kind:`copy-photos`,number:`01`,eyebrow:`01 · Sobre nós`,title:`Mais do que
uma oficina.`,lede:`A RR Technik é uma oficina especializada em carros desportivos e de marcas premium, fundada por dois sócios com o mesmo critério: se vai ser feito, é para ser feito com excelência.`,body:[{heading:`No que acreditamos`,text:`Excelência em cada intervenção, com procedimentos certificados, parâmetros específicos e grelhas de avaliação rigorosas aplicadas a cada trabalho. Honestidade total com o cliente: o orçamento vem antes do trabalho, sem surpresas na fatura. E dedicação constante à aprendizagem, porque cada geração de carros traz sistemas novos, e queremos estar sempre na vanguarda da técnica e do conhecimento que colocamos ao serviço de cada carro.`},{heading:`Para onde vamos`,text:`A ambição é clara: ser a referência em Portugal para preparação e afinação de automóveis de performance, e o parceiro de confiança de equipas amadoras e profissionais por todo o país. A base já está montada, com banco de potência próprio, alinhamento de geometria 3D, quatro postos de elevação e parcerias com marcas como KW, Brembo, Motul e Michelin. O resto constrói-se cliente a cliente, carro a carro.`}],signature:`Rodrigo e Rafael, RR Technik`},{id:`services-cover`,tabId:`services-cover`,kind:`cover`,number:`02`,eyebrow:`02 · Serviços`,title:`Serviços.`,lede:`Manutenção, modificações, reprogramações e vendas a consignação para carros que pedem mais.`,image:i[0],cta:{label:`Ver serviços`,target:`services`}},{id:`services`,tabId:`services-cover`,kind:`copy-list`,number:`02`,eyebrow:`02 · Serviços`,title:`Afinamos
o extraordinário.`,lede:`Na RR Technik, cada intervenção é pensada para o carro que temos à nossa frente. Não existe um "tamanho único" quando se fala de performance.`,body:[{text:`Manutenção, modificações, reprogramações e vendas a consignação — cada intervenção é pensada para o carro que temos à nossa frente, sem soluções universais.`},{text:`Cada orçamento é apresentado antes do trabalho começar, com tudo explicado, para que a decisão seja sempre sua.`}],highlights:[{title:`Manutenção`,text:`Revisões, diagnose e assistência mecânica para todas as marcas desportivas e premium.`,target:null},{title:`Modificações`,text:`Alterações e upgrades mecânicos e estéticos com rigor e documentação.`,target:null},{title:`Reprogramações`,text:`Afinações eletrónicas e otimizações de ECU para maior performance e eficiência.`,target:`reprogramacoes`},{title:`Vendas a consignação`,text:`Venda do seu veículo com gestão profissional, fotografia e divulgação.`,target:null}]},{id:`reprogramacoes`,tabId:`services-cover`,kind:`copy-photos`,number:`02`,eyebrow:`02 · Reprogramações`,title:`Reprogramações.`,lede:`Afinações eletrónicas e otimizações de ECU para maior performance e eficiência.`,body:[{text:`Trabalhamos com banco de potência próprio e software de última geração para garantir resultados seguros e fiáveis.`}],photos:[e(`/reprogramacoes/reprogramacao-1.jpg`),e(`/reprogramacoes/reprogramacao-2.jpg`),e(`/reprogramacoes/reprogramacao-3.jpg`),e(`/reprogramacoes/reprogramacao-4.jpg`),e(`/reprogramacoes/reprogramacao-5.jpg`)]},{id:`projects-cover`,tabId:`projects-cover`,kind:`cover`,number:`03`,eyebrow:`03 · Projetos`,title:`Projetos.`,lede:`Carros, intervenções e resultados construídos com rigor.`,image:i[2],cta:{label:`Ver projetos`,target:`projects`}},{id:`projects`,tabId:`projects-cover`,kind:`copy-photos`,number:`03`,eyebrow:`03 · Projetos`,title:`Cada carro,
uma história.`,lede:`Cada carro que passa pela RR Technik conta uma história: uma preparação para pista, uma afinação que faltava ou um problema que mais ninguém tinha resolvido.`,body:[{text:`Esta é a montra desse trabalho: os carros, as intervenções, os resultados. Uma forma de mostrar, e não apenas dizer, o que significa rigor aplicado à performance.`}],note:`Secção a atualizar com os primeiros projetos`,photos:r},{id:`location-cover`,tabId:`location-cover`,kind:`cover`,number:`04`,eyebrow:`04 · Localização`,title:`Localização.`,lede:`Encontre a RR Technik em Valongo, com acesso fácil pela A4 e A41.`,image:r[1],cta:{label:`Ver localização`,target:`location`}},{id:`location`,tabId:`location-cover`,kind:`copy-map`,number:`04`,eyebrow:`04 · Onde estamos`,title:`Chegue ao
ponto certo.`,lede:`Estamos em Valongo, a poucos minutos do nó da A4/A41. É um acesso pensado para quem vem de reboque, de trailer ou simplesmente a conduzir.`,body:[{text:`A oficina foi construída de raiz para este propósito: uma nave equipada com quatro postos de elevação, banco de potência próprio, alinhamento de geometria 3D e ventilação forçada em toda a área de trabalho. Um espaço à medida dos carros que recebe.`}],address:[`Rua do Negral 1007`,`Valongo, Portugal`],mapUrl:`https://maps.google.com/?q=Rua+do+Negral+1007+Valongo+Portugal`,photos:r},{id:`contact-cover`,tabId:`contact-cover`,kind:`cover`,number:`05`,eyebrow:`05 · Contactos e marcações`,title:`Fale connosco.`,lede:`O próximo capítulo do seu carro começa aqui.`,image:`https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2400&q=90`,cta:{label:`Contactar`,target:`contact`}},{id:`contact`,tabId:`contact-cover`,kind:`copy-form`,number:`05`,eyebrow:`05 · Visite-nos`,title:`O próximo capítulo
começa aqui.`,lede:`Tem um carro que merece mais atenção do que está a ter? Fale connosco.`,body:[{text:`Respondemos a todos os pedidos de orçamento sem compromisso, e as marcações são feitas com a antecedência necessária para dedicarmos a cada carro o tempo que ele precisa. Nada de trabalho apressado.`}],address:[`Rua do Negral 1007`,`Valongo, Portugal`],hours:`Seg – Sex, 08:30 – 18:00`,email:`cardosorodrigo1000@gmail.com`,phone:`+351 960 455 763`,phoneHref:`+351 960455763`}];function o(e,t,n){return`
    <div class="app-shell">
      <header class="topbar">
        <button class="brand" type="button" data-go="home" aria-label="RR Technik, início">
          <span>${e.mark}</span>
          <small>${e.name}</small>
        </button>
        <nav class="tabs" aria-label="Navegação principal">
          ${t.map(e=>`<button type="button" class="tab" data-go="${e.id}">${e.label}</button>`).join(``)}
        </nav>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Abrir menu">
          <span></span><span></span>
        </button>
      </header>

      <div class="mobile-nav" aria-hidden="true">
        ${t.map(e=>`<button type="button" class="mobile-tab" data-go="${e.id}">${e.label}</button>`).join(``)}
      </div>

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
          <strong>${e.mark}</strong>
          <span>${e.name}</span>
        </div>
        <nav class="footer-nav" aria-label="Explorar">
          <p>Explorar</p>
          ${t.slice(0,2).map(e=>`<button class="footer-link" type="button" data-go="${e.id}">${e.label}</button>`).join(``)}
        </nav>
        <nav class="footer-nav" aria-label="RR Technik">
          <p>RR Technik</p>
          ${t.slice(2).map(e=>`<button class="footer-link" type="button" data-go="${e.id}">${e.label}</button>`).join(``)}
        </nav>
        <div class="footer-contact">
          <p>Visite-nos</p>
          <span>${e.address}</span>
          <span>${e.country}</span>
          <span>${e.hours}</span>
          <a href="mailto:${e.email}">${e.email}</a>
          <a href="tel:${e.phone.replace(/\s/g,``)}">${e.phone}</a>
        </div>
      </footer>

      <aside class="lightbox" id="lightbox" aria-hidden="true">
        <button class="lightbox-close" type="button" aria-label="Fechar imagem">×</button>
        <img src="" alt="">
        <span class="lightbox-count"></span>
      </aside>
    </div>`}function s(e=``){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function c(e){return s(e).replace(/\n/g,`<br>`)}function l(e=[]){return e.map(e=>`${e.heading?`<h2>${s(e.heading)}</h2>`:``}<p>${s(e.text)}</p>`).join(``)}function u(e=[],t){return`<div class="photo-grid">${e.map((n,r)=>`<button class="photo-tile" type="button" data-photo-src="${n}" data-photo-alt="${s(t)} ${r+1}" data-photo-index="${r+1}" data-photo-total="${e.length}"><img src="${n}" alt="${s(t)} ${r+1}" loading="lazy"></button>`).join(``)}</div>`}function d(e){return`
    <div class="cover-visual" style="background-image:url('${e.image}')"><div class="cover-shade"></div></div>
    <div class="page-copy cover-copy">
      <p class="eyebrow">${s(e.eyebrow)}</p>
      <h1>${c(e.title)}</h1>
      <p class="lede">${s(e.lede)}</p>
      <button class="cta" type="button" data-go="${e.cta.target}">${s(e.cta.label)}</button>
    </div>`}function f(e){return`
    <div class="page-copy">
      <p class="eyebrow">${s(e.eyebrow)}</p>
      <h1>${c(e.title)}</h1>
      <p class="lede">${s(e.lede)}</p>
      ${l(e.body)}
      ${e.signature?`<p class="signature">${s(e.signature)}</p>`:``}
      ${e.note?`<p class="tag">${s(e.note)}</p>`:``}
    </div>
    ${e.photos?.length?`<div class="page-visual">${u(e.photos,e.title.replace(`
`,` `))}</div>`:``}`}function p(e){return`
    <div class="page-copy">
      <p class="eyebrow">${s(e.eyebrow)}</p>
      <h1>${c(e.title)}</h1>
      <p class="lede">${s(e.lede)}</p>
      ${l(e.body)}
    </div>
    <div class="page-visual">
      <ul class="highlight-list">${e.highlights.map(e=>`<li${e.target?` data-go="${s(e.target)}"`:``}><h3>${s(e.title)}</h3><p>${s(e.text)}</p></li>`).join(``)}</ul>
    </div>`}function m(e){return`
    <div class="page-copy">
      <p class="eyebrow">${s(e.eyebrow)}</p>
      <h1>${c(e.title)}</h1>
      <p class="lede">${s(e.lede)}</p>
    </div>
    <div class="page-visual">
      <div class="partner-grid">${e.partners.map(e=>`<span>${s(e)}</span>`).join(``)}</div>
    </div>`}function h(e){return`
    <div class="page-copy">
      <p class="eyebrow">${s(e.eyebrow)}</p>
      <h1>${c(e.title)}</h1>
      <p class="lede">${s(e.lede)}</p>
      ${l(e.body)}
      <div class="info-card">
        ${e.address.map(e=>`<p>${s(e)}</p>`).join(``)}
        <a href="${e.mapUrl}" target="_blank" rel="noreferrer">Abrir no mapa</a>
      </div>
    </div>
    <div class="page-visual">${u(e.photos,e.title.replace(`
`,` `))}</div>`}function g(e){return`
    <div class="page-copy">
      <p class="eyebrow">${s(e.eyebrow)}</p>
      <h1>${c(e.title)}</h1>
      <p class="lede">${s(e.lede)}</p>
      ${l(e.body)}
      <div class="info-card">
        <p class="info-label">Morada</p>
        ${e.address.map(e=>`<p>${s(e)}</p>`).join(``)}
        <p class="info-label">Horário</p>
        <p>${s(e.hours)}</p>
        <p class="info-label">Contactos</p>
        <a href="mailto:${e.email}">${s(e.email)}</a>
        <a href="tel:${e.phoneHref}">${s(e.phone)}</a>
      </div>
    </div>
    <div class="page-visual">
      <form class="contact-form" id="contact-form" novalidate data-mailto="${e.email}">
        <p class="info-label">Pedido de orçamento</p>
        <label>Nome<input type="text" name="nome" required></label>
        <label>Email<input type="email" name="email" required></label>
        <label>Telefone (opcional)<input type="tel" name="telefone"></label>
        <label>Mensagem<textarea name="mensagem" rows="4" required placeholder="Conte-nos sobre o seu carro e o que precisa..."></textarea></label>
        <button type="submit" class="cta cta-block">Enviar pedido</button>
        <p class="form-hint" data-default-text="Ao enviar, abrimos o seu cliente de email com a mensagem pronta.">Ao enviar, abrimos o seu cliente de email com a mensagem pronta.</p>
      </form>
    </div>`}var _={cover:d,"copy-photos":f,"copy-list":p,"copy-logos":m,"copy-map":h,"copy-form":g};function v(e){let t=_[e.kind];if(!t)throw Error(`Unknown page kind: ${e.kind}`);let n=e.id===`about`?` page-no-visual`:``;return`<article class="page page-${e.kind}${n}" data-page-id="${e.id}">${t(e)}</article>`}var y=document.querySelector(`#app`);y.innerHTML=o(t,n,a.length);var b=document.querySelector(`#stage`),x=document.querySelector(`#pager-fill`),S=document.querySelector(`#pager-count`),C=document.querySelector(`#pager-dots`),w=document.querySelector(`.menu-toggle`),T=document.querySelector(`.mobile-nav`),E=document.querySelector(`#lightbox`),D=E.querySelector(`img`),O=E.querySelector(`.lightbox-count`),k=a.filter(e=>e.id===e.tabId?.replace(`-cover`,``)).length,A=a.filter(e=>e.id===`home`||e.id.endsWith(`-cover`));C.innerHTML=A.map((e,t)=>`<button class="dot" type="button" data-index="${t}" aria-label="Ir para ${e.eyebrow}"></button>`).join(``);var j=[...C.querySelectorAll(`.dot`)],M=-1;function N(e){let t=a[e],n=A.findIndex(e=>e.id===(t.tabId||t.id));document.querySelectorAll(`.tab, .mobile-tab`).forEach(e=>e.classList.toggle(`is-active`,e.dataset.go===(t.tabId||t.id))),j.forEach((e,t)=>e.classList.toggle(`is-active`,t===n)),x.style.height=`${Number(t.number)/k*100}%`,S.textContent=`${t.number} / ${String(k).padStart(2,`0`)}`}function P(e,{instant:t=!1}={}){let n=a[e];if(!n)return;M=e;let r=()=>{b.innerHTML=v(n),b.dataset.kind=n.kind,b.firstElementChild.scrollTop=0,b.querySelector(`.page-copy`)?.scrollTo(0,0),requestAnimationFrame(()=>b.classList.add(`is-visible`)),R()};t||!b.firstElementChild?r():(b.classList.remove(`is-visible`),window.setTimeout(r,220)),N(e),history.replaceState(null,``,`#${n.id}`)}function F(e){let t=a.findIndex(t=>t.id===e);t>=0&&t!==M&&P(t)}function I(e){let t=(A.findIndex(e=>e.id===(a[M].tabId||a[M].id))+e+A.length)%A.length,n=a.findIndex(e=>e.id===A[t].id);n!==M&&P(n)}function L(e){let t=a.findIndex(t=>t.id===A[e]?.id);t>=0&&t!==M&&P(t)}function R(){let e=b.querySelector(`#contact-form`);e&&e.addEventListener(`submit`,t=>{t.preventDefault();let n=new FormData(e),r=n.get(`nome`)?.toString().trim()||``,i=n.get(`email`)?.toString().trim()||``,a=n.get(`telefone`)?.toString().trim()||``,o=n.get(`mensagem`)?.toString().trim()||``,s=[`Nome: ${r}`,`Email: ${i}`,a?`Telefone: ${a}`:``,``,o].filter(Boolean).join(`
`),c=`mailto:${e.dataset.mailto}?subject=Pedido%20de%20or%C3%A7amento%20-%20RR%20Technik&body=${encodeURIComponent(s)}`,l=e.querySelector(`.form-hint`);l&&(l.textContent=`A abrir o seu cliente de email…`),window.location.href=c,window.setTimeout(()=>{l&&(l.textContent=l.dataset.defaultText)},4e3)}),b.querySelectorAll(`.photo-tile`).forEach(e=>{e.addEventListener(`click`,()=>{D.src=e.dataset.photoSrc,D.alt=e.dataset.photoAlt,O.textContent=`${e.dataset.photoIndex.padStart(2,`0`)} / ${e.dataset.photoTotal.padStart(2,`0`)}`,E.classList.add(`is-open`),E.setAttribute(`aria-hidden`,`false`)})}),b.querySelectorAll(`[data-go]`).forEach(e=>{e.addEventListener(`click`,()=>F(e.dataset.go))})}document.querySelectorAll(`.tab, .mobile-tab, .footer-link, .brand`).forEach(e=>{e.addEventListener(`click`,()=>{F(e.dataset.go),T.classList.remove(`is-open`),w.setAttribute(`aria-expanded`,`false`)})}),document.querySelector(`.pager-prev`).addEventListener(`click`,()=>I(-1)),document.querySelector(`.pager-next`).addEventListener(`click`,()=>I(1)),j.forEach(e=>e.addEventListener(`click`,()=>L(Number(e.dataset.index)))),w.addEventListener(`click`,()=>{let e=T.classList.toggle(`is-open`);w.setAttribute(`aria-expanded`,String(e)),T.setAttribute(`aria-hidden`,String(!e))}),E.querySelector(`.lightbox-close`).addEventListener(`click`,()=>{E.classList.remove(`is-open`),E.setAttribute(`aria-hidden`,`true`)}),document.addEventListener(`keydown`,e=>{if(E.classList.contains(`is-open`)){e.key===`Escape`&&E.querySelector(`.lightbox-close`).click();return}(e.key===`ArrowRight`||e.key===`ArrowDown`)&&I(1),(e.key===`ArrowLeft`||e.key===`ArrowUp`)&&I(-1)});var z=0;document.querySelector(`.stage`).addEventListener(`touchstart`,e=>{z=e.changedTouches[0].screenX},{passive:!0}),document.querySelector(`.stage`).addEventListener(`touchend`,e=>{let t=e.changedTouches[0].screenX-z;Math.abs(t)>50&&I(t<0?1:-1)},{passive:!0}),window.addEventListener(`hashchange`,()=>F(window.location.hash.slice(1)));var B=window.location.hash.slice(1),V=a.findIndex(e=>e.id===B);P(V>=0?V:0,{instant:!0});