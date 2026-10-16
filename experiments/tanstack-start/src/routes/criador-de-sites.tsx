import { seoHead } from '../lib/seo'
import { createFileRoute } from '@tanstack/react-router'
import SiteBuilder from '../pages/SiteBuilder'

export const Route = createFileRoute('/criador-de-sites')({
  head: () => seoHead('/criador-de-sites', "Criador de Sites | MyHostVIP", "Saiba como criar sites com WordPress e as ferramentas apresentadas pela MyHostVIP."),
  component: SiteBuilder,
})
