import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
}

export function Card({ title, className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-neutral-200 bg-white p-6 shadow-sm ${className}`}
      {...props}
    >
      {title ? <h2 className="mb-2 text-lg font-semibold text-neutral-900">{title}</h2> : null}
      {children}
    </div>
  );
}
