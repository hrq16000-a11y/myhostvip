import { seoHead } from '../lib/seo'
import { createFileRoute } from '@tanstack/react-router'
import Home from '../pages/Index'

export const Route = createFileRoute('/')({
  head: () => seoHead('/', "MyHostVIP - Hospedagem Rápida e Poderosa para Sites e Landing Pages", "Conheça os planos MyHostVIP de hospedagem e soluções para WordPress. Consulte preços, disponibilidade e recursos antes de contratar."),
  component: Home,
})
