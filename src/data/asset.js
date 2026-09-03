// Resolve assets guardados em /public tendo em conta o "base" configurado
// no vite.config.js (ex: '/oficina-esboco/'). Sem isto, um caminho absoluto
// como '/reprogramacoes/foto.jpg' escrito diretamente numa string ignora o
// base path e parte de imagens quando o site é publicado numa subpasta
// (como acontece no GitHub Pages).
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
