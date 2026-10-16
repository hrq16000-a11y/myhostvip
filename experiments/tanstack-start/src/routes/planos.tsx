import { createFileRoute } from '@tanstack/react-router'
import Plans from '../pages/Plans'

export const Route = createFileRoute('/planos')({
  head: () => ({
    meta: [
      { title: 'Planos de Hospedagem | MyHostVIP' },
      { name: 'description', content: 'Conheça as opções e características dos planos de hospedagem da MyHostVIP.' },
    ],
  }),
  component: Plans,
})
