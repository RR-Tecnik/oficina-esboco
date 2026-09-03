// Resolve assets guardados em /public tendo em conta o "base" configurado
// no vite.config.js (ex: '/oficina-esboco/'). Sem isto, um caminho absoluto
// como '/reprogramacoes/foto.jpg' escrito diretamente numa string ignora o
// base path e parte de imagens quando o site é publicado numa subpasta
// (como acontece no GitHub Pages).
const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const brand = {
  mark: 'RR',
  name: 'Technik Performance',
  location: 'Valongo · Portugal',
  address: 'Rua do Negral 1007',
  country: 'Valongo, Portugal',
  hours: 'Seg – Sex, 08:30 – 18:00',
  email: 'cardosorodrigo1000@gmail.com',
  phone: '960 455 763',
}

// Keep the tab order aligned with the page order below.
export const nav = [
  { id: 'about-cover', label: 'Sobre nós' },
  { id: 'services-cover', label: 'Serviços' },
  { id: 'projects-cover', label: 'Projetos' },
  { id: 'location-cover', label: 'Localização' },
  { id: 'contact-cover', label: 'Contactos e marcações' },
]

const workshopPhotos = [
  asset('/workshop/workshop-1.jpg'),
  asset('/workshop/workshop-2.jpg'),
  asset('/workshop/workshop-3.jpg'),
  asset('/workshop/workshop-4.jpg'),
  asset('/workshop/workshop-5.jpg'),
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2400&q=90',
  'https://i.imgur.com/8KjB9QY.jpeg',
  'https://i.imgur.com/3R2kF4L.jpeg',
  'https://i.imgur.com/9P5vH8N.jpeg',
]

const carCoverPhotos = [
  'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2400&q=90',
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=90',
  'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=2400&q=90',
  'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=2400&q=90',
]

// Each entry is one full-screen page. `kind` decides which layout
// template renders it (see components/pages.js). Arrows, dots and tabs
// all follow this array in order.
export const pages = [
  {
    id: 'home',
    kind: 'cover',
    number: '00',
    eyebrow: 'Valongo · Portugal',
    title: 'Performance,\ncom propósito.',
    lede: 'Uma oficina independente para máquinas que pedem mais. Engenharia, detalhe e paixão reunidos no mesmo lugar.',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2400&q=90',
    cta: { label: 'Conhecer a oficina', target: 'about' },
  },
  {
    id: 'about-cover',
    tabId: 'about-cover',
    kind: 'cover',
    number: '01',
    eyebrow: '01 · Sobre nós',
    title: 'Sobre nós.',
    lede: 'Conheça a oficina, os critérios e a ambição por trás de cada intervenção.',
    image: carCoverPhotos[3],
    cta: { label: 'Conhecer', target: 'about' },
  },
  {
    id: 'about',
    tabId: 'about-cover',
    kind: 'copy-photos',
    number: '01',
    eyebrow: '01 · Sobre nós',
    title: 'Mais do que\numa oficina.',
    lede: 'A RR Technik é uma oficina especializada em carros desportivos e de marcas premium, fundada por dois sócios com o mesmo critério: se vai ser feito, é para ser feito com excelência.',
    body: [
      { heading: 'No que acreditamos', text: 'Excelência em cada intervenção, com procedimentos certificados, parâmetros específicos e grelhas de avaliação rigorosas aplicadas a cada trabalho. Honestidade total com o cliente: o orçamento vem antes do trabalho, sem surpresas na fatura. E dedicação constante à aprendizagem, porque cada geração de carros traz sistemas novos, e queremos estar sempre na vanguarda da técnica e do conhecimento que colocamos ao serviço de cada carro.' },
      { heading: 'Para onde vamos', text: 'A ambição é clara: ser a referência em Portugal para preparação e afinação de automóveis de performance, e o parceiro de confiança de equipas amadoras e profissionais por todo o país. A base já está montada, com banco de potência próprio, alinhamento de geometria 3D, quatro postos de elevação e parcerias com marcas como KW, Brembo, Motul e Michelin. O resto constrói-se cliente a cliente, carro a carro.' },
    ],
    signature: 'Rodrigo e Rafael, RR Technik',
  },
  {
    id: 'services-cover',
    tabId: 'services-cover',
    kind: 'cover',
    number: '02',
    eyebrow: '02 · Serviços',
    title: 'Serviços.',
    lede: 'Manutenção, modificações, reprogramações e vendas a consignação para carros que pedem mais.',
    image: carCoverPhotos[0],
    cta: { label: 'Ver serviços', target: 'services' },
  },
  {
    id: 'services',
    tabId: 'services-cover',
    kind: 'copy-list',
    number: '02',
    eyebrow: '02 · Serviços',
    title: 'Afinamos\no extraordinário.',
    lede: 'Na RR Technik, cada intervenção é pensada para o carro que temos à nossa frente. Não existe um "tamanho único" quando se fala de performance.',
    body: [
      { text: 'Manutenção, modificações, reprogramações e vendas a consignação — cada intervenção é pensada para o carro que temos à nossa frente, sem soluções universais.' },
      { text: 'Cada orçamento é apresentado antes do trabalho começar, com tudo explicado, para que a decisão seja sempre sua.' },
    ],
    highlights: [
      { title: 'Manutenção', text: 'Revisões, diagnose e assistência mecânica para todas as marcas desportivas e premium.', target: null },
      { title: 'Modificações', text: 'Alterações e upgrades mecânicos e estéticos com rigor e documentação.', target: null },
      { title: 'Reprogramações', text: 'Afinações eletrónicas e otimizações de ECU para maior performance e eficiência.', target: 'reprogramacoes' },
      { title: 'Vendas a consignação', text: 'Venda do seu veículo com gestão profissional, fotografia e divulgação.', target: null },
    ],
  },
  {
    id: 'reprogramacoes',
    tabId: 'services-cover',
    kind: 'copy-photos',
    number: '02',
    eyebrow: '02 · Reprogramações',
    title: 'Reprogramações.',
    lede: 'Afinações eletrónicas e otimizações de ECU para maior performance e eficiência.',
    body: [
      { text: 'Trabalhamos com banco de potência próprio e software de última geração para garantir resultados seguros e fiáveis.' },
    ],
    photos: [
      asset('/reprogramacoes/reprogramacao-1.jpg'),
      asset('/reprogramacoes/reprogramacao-2.jpg'),
      asset('/reprogramacoes/reprogramacao-3.jpg'),
      asset('/reprogramacoes/reprogramacao-4.jpg'),
      asset('/reprogramacoes/reprogramacao-5.jpg'),
    ],
  },
  {
    id: 'projects-cover',
    tabId: 'projects-cover',
    kind: 'cover',
    number: '03',
    eyebrow: '03 · Projetos',
    title: 'Projetos.',
    lede: 'Carros, intervenções e resultados construídos com rigor.',
    image: carCoverPhotos[2],
    cta: { label: 'Ver projetos', target: 'projects' },
  },
  {
    id: 'projects',
    tabId: 'projects-cover',
    kind: 'copy-photos',
    number: '03',
    eyebrow: '03 · Projetos',
    title: 'Cada carro,\numa história.',
    lede: 'Cada carro que passa pela RR Technik conta uma história: uma preparação para pista, uma afinação que faltava ou um problema que mais ninguém tinha resolvido.',
    body: [
      { text: 'Esta é a montra desse trabalho: os carros, as intervenções, os resultados. Uma forma de mostrar, e não apenas dizer, o que significa rigor aplicado à performance.' },
    ],
    note: 'Secção a atualizar com os primeiros projetos',
    photos: workshopPhotos,
  },
  {
    id: 'location-cover',
    tabId: 'location-cover',
    kind: 'cover',
    number: '04',
    eyebrow: '04 · Localização',
    title: 'Localização.',
    lede: 'Encontre a RR Technik em Valongo, com acesso fácil pela A4 e A41.',
    image: workshopPhotos[1],
    cta: { label: 'Ver localização', target: 'location' },
  },
  {
    id: 'location',
    tabId: 'location-cover',
    kind: 'copy-map',
    number: '04',
    eyebrow: '04 · Onde estamos',
    title: 'Chegue ao\nponto certo.',
    lede: 'Estamos em Valongo, a poucos minutos do nó da A4/A41. É um acesso pensado para quem vem de reboque, de trailer ou simplesmente a conduzir.',
    body: [
      { text: 'A oficina foi construída de raiz para este propósito: uma nave equipada com quatro postos de elevação, banco de potência próprio, alinhamento de geometria 3D e ventilação forçada em toda a área de trabalho. Um espaço à medida dos carros que recebe.' },
    ],
    address: ['Rua do Negral 1007', 'Valongo, Portugal'],
    mapUrl: 'https://maps.google.com/?q=Rua+do+Negral+1007+Valongo+Portugal',
    photos: workshopPhotos,
  },
  {
    id: 'contact-cover',
    tabId: 'contact-cover',
    kind: 'cover',
    number: '05',
    eyebrow: '05 · Contactos e marcações',
    title: 'Fale connosco.',
    lede: 'O próximo capítulo do seu carro começa aqui.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2400&q=90',
    cta: { label: 'Contactar', target: 'contact' },
  },
  {
    id: 'contact',
    tabId: 'contact-cover',
    kind: 'copy-form',
    number: '05',
    eyebrow: '05 · Visite-nos',
    title: 'O próximo capítulo\ncomeça aqui.',
    lede: 'Tem um carro que merece mais atenção do que está a ter? Fale connosco.',
    body: [
      { text: 'Respondemos a todos os pedidos de orçamento sem compromisso, e as marcações são feitas com a antecedência necessária para dedicarmos a cada carro o tempo que ele precisa. Nada de trabalho apressado.' },
    ],
    address: ['Rua do Negral 1007', 'Valongo, Portugal'],
    hours: 'Seg – Sex, 08:30 – 18:00',
    email: 'cardosorodrigo1000@gmail.com',
    phone: '+351 960 455 763',
    phoneHref: '+351 960455763',
  },
]
