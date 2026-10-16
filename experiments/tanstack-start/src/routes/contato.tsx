import { createFileRoute } from '@tanstack/react-router'
import Contact from '../pages/Contact'

export const Route = createFileRoute('/contato')({
  head: () => ({
    meta: [
      { title: 'Contato | MyHostVIP' },
      { name: 'description', content: 'Conheça os canais de contato informados pela MyHostVIP.' },
    ],
  }),
  component: Contact,
})
