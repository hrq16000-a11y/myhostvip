import { createFileRoute } from '@tanstack/react-router'
import Affiliates from '../pages/Affiliates'

export const Route = createFileRoute('/afiliados')({
  head: () => ({
    meta: [
      { title: 'Programa de Afiliados | MyHostVIP' },
      { name: 'description', content: 'Conheça a proposta do programa de afiliados MyHostVIP e seus recursos.' },
    ],
  }),
  component: Affiliates,
})
