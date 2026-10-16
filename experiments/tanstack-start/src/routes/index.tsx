import { createFileRoute } from '@tanstack/react-router'
import Home from '../pages/Index'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'MyHostVIP - Hospedagem Rápida e Poderosa para Sites e Landing Pages' },
      { name: 'description', content: 'Hospedagem profissional com SSD, LiteSpeed, SSL grátis e WordPress. Crie sites e landing pages ilimitadas a partir de R$4,99/mês.' },
    ],
  }),
  component: Home,
})
