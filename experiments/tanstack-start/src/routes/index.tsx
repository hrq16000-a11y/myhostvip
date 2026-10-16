import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Hospedagem de Sites e Landing Pages | MyHostVIP — Piloto SSR' },
      { name: 'description', content: 'Piloto técnico de renderização HTML no servidor para serviços de hospedagem MyHostVIP.' },
    ],
  }),
  component: IndexPage,
})

function IndexPage() {
  return (
    <main className="layout">
      <p className="eyebrow">TanStack Start · piloto técnico</p>
      <h1>Hospedagem de sites e landing pages MyHostVIP</h1>
      <p>Conheça soluções de hospedagem e criação de sites. Este conteúdo é renderizado no servidor para validação de SEO técnico.</p>
      <section aria-labelledby="benefits">
        <h2 id="benefits">Recursos apresentados no site MyHostVIP</h2>
        <ul>
          <li>Hospedagem com armazenamento SSD</li>
          <li>SSL gratuito</li>
          <li>Suporte para WordPress</li>
        </ul>
      </section>
      <Link className="cta" to="/planos">Conhecer os planos</Link>
    </main>
  )
}
