import { createFileRoute } from '@tanstack/react-router'
import Hosting from '../pages/Hosting'

export const Route = createFileRoute('/hospedagem')({
  head: () => ({
    meta: [
      { title: 'Hospedagem de Sites | MyHostVIP' },
      { name: 'description', content: 'Conheça os recursos e opções de hospedagem de sites apresentados pela MyHostVIP.' },
    ],
  }),
  component: Hosting,
})
