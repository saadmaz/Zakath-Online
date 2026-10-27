import type { Metadata } from "next";

export const metadata: Metadata = { title: "About | Zakath Online" };

export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="text-neutral-600">About copy goes here.</p>
    </div>
  );
}
