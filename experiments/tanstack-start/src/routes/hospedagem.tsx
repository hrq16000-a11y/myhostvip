import { seoHead } from '../lib/seo'
import { createFileRoute } from '@tanstack/react-router'
import Hosting from '../pages/Hosting'

export const Route = createFileRoute('/hospedagem')({
  head: () => seoHead('/hospedagem', "Hospedagem de Sites | MyHostVIP", "Conheça os recursos e opções de hospedagem de sites apresentados pela MyHostVIP."),
  component: Hosting,
})
