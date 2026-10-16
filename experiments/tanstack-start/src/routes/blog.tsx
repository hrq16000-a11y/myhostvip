import { createFileRoute } from '@tanstack/react-router'
import Blog from '../pages/Blog'

export const Route = createFileRoute('/blog')({
  head: () => ({
    meta: [
      { title: 'Blog de Hospedagem e Sites | MyHostVIP' },
      { name: 'description', content: 'Artigos e temas sobre hospedagem, WordPress, criação de sites e marketing digital.' },
    ],
  }),
  component: Blog,
})
