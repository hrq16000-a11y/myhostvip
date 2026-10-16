import { seoHead } from '../lib/seo'
import { createFileRoute } from '@tanstack/react-router'
import Contact from '../pages/Contact'

export const Route = createFileRoute('/contato')({
  head: () => seoHead('/contato', "Contato | MyHostVIP", "Conheça os canais de contato informados pela MyHostVIP."),
  component: Contact,
})
