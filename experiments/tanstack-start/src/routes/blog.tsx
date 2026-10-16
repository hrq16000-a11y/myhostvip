import { seoHead } from '../lib/seo'
import { createFileRoute } from '@tanstack/react-router'
import Blog from '../pages/Blog'

export const Route = createFileRoute('/blog')({
  head: () => seoHead('/blog', "Blog de Hospedagem e Sites | MyHostVIP", "Artigos e temas sobre hospedagem, WordPress, criação de sites e marketing digital."),
  component: Blog,
})
