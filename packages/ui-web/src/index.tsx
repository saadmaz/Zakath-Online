import type { PropsWithChildren } from 'react';

export function Button({ children }: PropsWithChildren) {
  return (
    <button className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white">
      {children}
    </button>
  );
}

export function Card({ children }: PropsWithChildren) {
  return <div className="rounded-lg border border-slate-200 p-4 shadow-sm">{children}</div>;
}
