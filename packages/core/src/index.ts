/**
 * Zakat calculation core.
 *
 * Pure TypeScript: no I/O, no runtime dependencies. Every rule implemented here
 * must be traceable to a source recorded in docs/zakat-rules.md. Nisab values,
 * asset categories and madhab differences are deliberately not defined yet.
 */

/** An amount in a single currency, as a decimal string to avoid float rounding. */
export interface Money {
  amount: string;
  /** ISO 4217 currency code. */
  currency: string;
}

/** Shape to be defined once docs/zakat-rules.md has been reviewed. */
export type ZakatInput = Record<string, never>;

export interface ZakatResult {
  zakatDue: Money;
}

export function calculateZakat(_input: ZakatInput): ZakatResult {
  throw new Error("not implemented");
}
