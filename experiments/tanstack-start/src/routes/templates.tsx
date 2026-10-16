import { seoHead } from '../lib/seo'
import { createFileRoute } from '@tanstack/react-router'
import Templates from '../pages/Templates'

export const Route = createFileRoute('/templates')({
  head: () => seoHead('/templates', "Templates para Sites | MyHostVIP", "Explore os modelos e categorias de templates de sites apresentados pela MyHostVIP."),
  component: Templates,
})
