import { createFileRoute } from '@tanstack/react-router'
import Resources from '../pages/Resources'

export const Route = createFileRoute('/recursos')({
  head: () => ({
    meta: [
      { title: 'Recursos de Hospedagem | MyHostVIP' },
      { name: 'description', content: 'Explore recursos, ferramentas e opções para hospedagem e gestão de sites.' },
    ],
  }),
  component: Resources,
})
