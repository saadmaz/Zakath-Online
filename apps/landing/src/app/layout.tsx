import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zakath Online",
  description: "Placeholder description.",
};

const webAppUrl = process.env.NEXT_PUBLIC_WEB_APP_URL ?? "http://localhost:3001";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        <header className="border-b border-neutral-200 bg-white">
          <nav className="mx-auto flex max-w-5xl items-center gap-6 px-4 py-4 text-sm">
            <Link href="/" className="font-semibold">
              Zakath Online
            </Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <a href={`${webAppUrl}/login`} className="ml-auto">
              Sign in
            </a>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-12">{children}</main>
      </body>
    </html>
  );
}
