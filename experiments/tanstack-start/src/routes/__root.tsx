import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
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
