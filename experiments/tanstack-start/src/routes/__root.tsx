import { createRootRoute, HeadContent, Link, Outlet, Scripts } from '@tanstack/react-router'
import WhatsAppFloat from '../components/WhatsAppFloat'
import '../index.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex,nofollow' },
    ],
  }),
  component: Root,
  notFoundComponent: MissingPage,
})

function Root() {
  return (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>
        <Outlet />
        <WhatsAppFloat />
        <Scripts />
      </body>
    </html>
  )
}

function MissingPage() {
  return (
    <main className="section-container min-h-screen pt-36 pb-20">
      <p className="text-sm text-muted-foreground mb-4">Erro 404</p>
      <h1 className="text-display mb-6">Página não encontrada</h1>
      <p className="text-body mb-8">Este endereço não corresponde a uma página disponível na MyHostVIP.</p>
      <Link to="/" className="text-primary underline underline-offset-4">Voltar ao início</Link>
    </main>
  )
}
