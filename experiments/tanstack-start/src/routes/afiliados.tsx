import { seoHead } from '../lib/seo'
import { createFileRoute } from '@tanstack/react-router'
import Affiliates from '../pages/Affiliates'

export const Route = createFileRoute('/afiliados')({
  head: () => seoHead('/afiliados', "Parcerias e Indicações | MyHostVIP", "Conheça possibilidades de parceria e consulte as condições atuais diretamente com a equipe MyHostVIP."),
  component: Affiliates,
})
