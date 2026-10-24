import { Card } from '@zakath-online/ui-web';
import { Link, Route, Routes } from 'react-router-dom';

function Placeholder({ title }: { title: string }) {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <Card>
        <h1>{title}</h1>
        <p>Placeholder page.</p>
      </Card>
    </main>
  );
}

export default function App() {
  return (
    <>
      <nav className="flex gap-4 p-4">
        <Link to="/login">Login</Link>
        <Link to="/users">Users</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Placeholder title="Admin Login" />} />
        <Route path="/users" element={<Placeholder title="Users" />} />
        <Route path="/settings" element={<Placeholder title="Settings" />} />
        <Route path="*" element={<Placeholder title="Admin Home" />} />
      </Routes>
    </>
  );
}
