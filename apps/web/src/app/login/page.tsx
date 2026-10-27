import { Button, Card } from "@zakath/ui-web";

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-sm px-4 py-24">
      <Card title="Sign in">
        <p className="mb-4 text-sm text-neutral-600">
          Authentication is not implemented yet. See src/lib/auth.ts.
        </p>
        <Button disabled className="w-full">
          Sign in
        </Button>
      </Card>
    </main>
  );
}
