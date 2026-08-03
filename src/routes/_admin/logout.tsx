import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/logout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_admin/logout"!</div>
}
