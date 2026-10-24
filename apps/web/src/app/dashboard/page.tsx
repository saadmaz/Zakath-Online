import { Card } from '@zakath-online/ui-web';
import { StubAuthProvider } from '@/lib/auth';

export default async function DashboardPage() {
  const auth = new StubAuthProvider();
  const isAuthenticated = await auth.isAuthenticated();

  return (
    <main className="mx-auto max-w-3xl p-8">
      <Card>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-2 text-slate-600">Placeholder dashboard page.</p>
        <p className="mt-2 text-slate-500">Auth status: {isAuthenticated ? 'signed in' : 'guest'}</p>
      </Card>
    </main>
  );
}
