import { Button, Card } from '@zakath-online/ui-web';

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <Card>
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="mt-2 text-slate-600">Authentication placeholder screen.</p>
        <div className="mt-4">
          <Button>Sign in (stub)</Button>
        </div>
      </Card>
    </main>
  );
}
