import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold" search={{}} >
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold" search={{}}>
          About
        </Link>
        <Link to="/jobs" className="[&.active]:font-bold"  search={{}}>
          Jobs
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})