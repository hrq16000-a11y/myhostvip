import type { ComponentProps } from 'react'
import { Link as StartLink, useLocation } from '@tanstack/react-router'

/**
 * Transitional adapter for the unchanged React Router components.
 * Every original public pathname is now served by TanStack Start.
 * Hash or external links stay native anchors instead of becoming invalid routes.
 */
type RoutePath =
  | '/'
  | '/planos'
  | '/hospedagem'
  | '/criador-de-sites'
  | '/recursos'
  | '/templates'
  | '/afiliados'
  | '/blog'
  | '/base-de-conhecimento'
  | '/contato'

const migrated = new Set<string>([
  '/', '/planos', '/hospedagem', '/criador-de-sites', '/recursos',
  '/templates', '/afiliados', '/blog', '/base-de-conhecimento', '/contato',
])

type LinkProps = Omit<ComponentProps<'a'>, 'href'> & { to: string }

export function Link({ to, children, ...props }: LinkProps) {
  if (migrated.has(to)) {
    return <StartLink to={to as RoutePath} {...props}>{children}</StartLink>
  }
  // Do not route placeholder href="#" through TanStack.
  const href = to.startsWith('/') ? `https://myhostvip.com${to}` : to
  return <a {...props} href={href}>{children}</a>
}

export { useLocation }
