import { Card } from "@zakath/ui-web";
import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await auth.getSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
      <Card title="Placeholder">
        <p className="text-neutral-600">Signed in as {session.user.email}.</p>
      </Card>
    </main>
  );
}
