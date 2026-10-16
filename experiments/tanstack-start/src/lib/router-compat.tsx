import type { ComponentProps } from 'react'
import { Link as StartLink, useLocation } from '@tanstack/react-router'

// Temporary bridge for unchanged original components.
// Not-yet-migrated links continue to the existing commercial domain.
type LinkProps = Omit<ComponentProps<'a'>, 'href'> & { to: string }
export function Link({ to, children, ...props }: LinkProps) {
  if (to === '/' || to === '/planos') {
    return <StartLink to={to} {...props}>{children}</StartLink>
  }
  const href = to.startsWith('/') ? `https://myhostvip.com${to}` : to
  return <a {...props} href={href}>{children}</a>
}
export { useLocation }
