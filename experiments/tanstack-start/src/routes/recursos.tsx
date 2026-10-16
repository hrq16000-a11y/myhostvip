import { seoHead } from '../lib/seo'
import { createFileRoute } from '@tanstack/react-router'
import Resources from '../pages/Resources'

export const Route = createFileRoute('/recursos')({
  head: () => seoHead('/recursos', "Recursos de Hospedagem | MyHostVIP", "Explore recursos, ferramentas e opções para hospedagem e gestão de sites."),
  component: Resources,
})
