const SITE = 'https://myhostvip.com'

/** Keep metadata tied to real public routes, never Vercel preview URLs. */
export const publicPaths = [
  '/', '/planos', '/hospedagem', '/criador-de-sites', '/recursos', '/templates',
  '/afiliados', '/blog', '/base-de-conhecimento', '/contato',
] as const
export type PublicPath = (typeof publicPaths)[number]

export function seoHead(path: PublicPath, title: string, description: string) {
  const url = SITE + (path === '/' ? '/' : path)
  const page = {
    '@context': 'https://schema.org',
    '@type': path === '/contato' ? 'ContactPage' : 'WebPage',
    '@id': url + '#webpage',
    url,
    name: title,
    description,
    inLanguage: 'pt-BR',
    isPartOf: { '@type': 'WebSite', '@id': SITE + '/#website', name: 'MyHostVIP', url: SITE + '/' },
    about: { '@type': 'Organization', name: 'MyHostVIP', url: SITE + '/' },
  }
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:site_name', content: 'MyHostVIP' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ],
    links: [{ rel: 'canonical', href: url }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify(page) }],
  }
}
