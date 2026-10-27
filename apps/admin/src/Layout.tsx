import { NavLink, Outlet } from "react-router";

export function Layout() {
  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-900">
      <aside className="w-56 border-r border-neutral-200 bg-white p-4">
        <p className="mb-6 font-semibold">Zakath Admin</p>
        <nav className="flex flex-col gap-2 text-sm">
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
