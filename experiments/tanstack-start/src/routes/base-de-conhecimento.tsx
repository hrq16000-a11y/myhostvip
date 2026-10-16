import { seoHead } from '../lib/seo'
import { createFileRoute } from '@tanstack/react-router'
import KnowledgeBase from '../pages/KnowledgeBase'

export const Route = createFileRoute('/base-de-conhecimento')({
  head: () => seoHead('/base-de-conhecimento', "Base de Conhecimento | MyHostVIP", "Encontre assuntos e categorias de ajuda sobre hospedagem, domínios e WordPress."),
  component: KnowledgeBase,
})
