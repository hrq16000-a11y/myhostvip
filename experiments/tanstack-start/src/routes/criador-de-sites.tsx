import { createFileRoute } from '@tanstack/react-router'
import SiteBuilder from '../pages/SiteBuilder'

export const Route = createFileRoute('/criador-de-sites')({
  head: () => ({
    meta: [
      { title: 'Criador de Sites | MyHostVIP' },
      { name: 'description', content: 'Saiba como criar sites com WordPress e as ferramentas apresentadas pela MyHostVIP.' },
    ],
  }),
  component: SiteBuilder,
})
