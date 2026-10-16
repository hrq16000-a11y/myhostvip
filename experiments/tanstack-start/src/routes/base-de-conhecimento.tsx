import { createFileRoute } from '@tanstack/react-router'
import KnowledgeBase from '../pages/KnowledgeBase'

export const Route = createFileRoute('/base-de-conhecimento')({
  head: () => ({
    meta: [
      { title: 'Base de Conhecimento | MyHostVIP' },
      { name: 'description', content: 'Encontre assuntos e categorias de ajuda sobre hospedagem, domínios e WordPress.' },
    ],
  }),
  component: KnowledgeBase,
})
