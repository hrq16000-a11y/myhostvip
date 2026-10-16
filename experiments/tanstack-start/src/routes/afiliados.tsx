import { seoHead } from '../lib/seo'
import { createFileRoute } from '@tanstack/react-router'
import Affiliates from '../pages/Affiliates'

export const Route = createFileRoute('/afiliados')({
  head: () => seoHead('/afiliados', "Programa de Afiliados | MyHostVIP", "Conheça a proposta do programa de afiliados MyHostVIP e seus recursos."),
  component: Affiliates,
})
