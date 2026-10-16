import { createFileRoute } from '@tanstack/react-router'
import Templates from '../pages/Templates'

export const Route = createFileRoute('/templates')({
  head: () => ({
    meta: [
      { title: 'Templates para Sites | MyHostVIP' },
      { name: 'description', content: 'Explore os modelos e categorias de templates de sites apresentados pela MyHostVIP.' },
    ],
  }),
  component: Templates,
})
