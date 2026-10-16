import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/planos')({
  head: () => ({
    meta: [
      { title: 'Planos de Hospedagem | MyHostVIP — Piloto SSR' },
      { name: 'description', content: 'Validação de HTML individual de uma página de planos, com rota própria e título específico.' },
    ],
  }),
  component: PlanosPage,
})

function PlanosPage() {
  return (
    <main className="layout">
      <p className="eyebrow">TanStack Start · rota independente</p>
      <h1>Planos de hospedagem MyHostVIP</h1>
      <p>Os preços, características e condições comerciais devem ser preservados e verificados antes da migração da página original.</p>
      <Link to="/">Voltar à apresentação</Link>
    </main>
  )
}
