import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact | Zakath Online" };

export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-neutral-600">Contact details go here.</p>
    </div>
  );
}
