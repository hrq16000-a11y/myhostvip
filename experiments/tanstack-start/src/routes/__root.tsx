import type { ReactNode } from 'react'
import { createRootRoute, HeadContent, Outlet, Scripts, Link } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Critical: this isolated proof must not compete with the live domain in search.
      { name: 'robots', content: 'noindex,nofollow' },
    ],
  }),
  component: Root,
})

function Root() {
  return (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>
        <header className="nav">
          <Link to="/" className="brand">MyHostVIP</Link>
          <nav aria-label="Navegação piloto">
            <Link to="/">Início</Link>
            <Link to="/planos">Planos</Link>
          </nav>
        </header>
        <Outlet />
        <footer className="footer">Prova isolada de renderização no servidor — não é a versão comercial do MyHostVIP.</footer>
        <Scripts />
      </body>
    </html>
  )
}
