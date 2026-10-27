import { Button, Card } from "@zakath/ui-web";

export function LoginPage() {
  return (
    <div className="mx-auto max-w-sm px-4 py-24">
      <Card title="Admin sign in">
        <p className="mb-4 text-sm text-neutral-600">Authentication is not implemented yet.</p>
        <Button disabled className="w-full">
          Sign in
        </Button>
      </Card>
    </div>
  );
}
