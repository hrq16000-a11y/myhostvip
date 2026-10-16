import { seoHead } from '../lib/seo'
import { createFileRoute } from '@tanstack/react-router'
import Plans from '../pages/Plans'

export const Route = createFileRoute('/planos')({
  head: () => seoHead('/planos', "Planos de Hospedagem | MyHostVIP", "Conheça as opções e características dos planos de hospedagem da MyHostVIP."),
  component: Plans,
})
