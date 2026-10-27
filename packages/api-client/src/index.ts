import {
  contactMessageResponseSchema,
  healthResponseSchema,
  type ContactMessage,
  type ContactMessageResponse,
  type HealthResponse,
} from "@zakath/validators";
import type { z } from "zod";

export interface ApiClientOptions {
  baseUrl: string;
  fetch?: typeof fetch;
}

export class ApiError extends Error {
  readonly status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export function createApiClient({ baseUrl, fetch: fetchImpl = fetch }: ApiClientOptions) {
  const root = baseUrl.replace(/\/+$/, "");

  async function request<T extends z.ZodType>(
    schema: T,
    path: string,
    init?: RequestInit,
  ): Promise<z.infer<T>> {
    const res = await fetchImpl(`${root}${path}`, {
      ...init,
      headers: { "content-type": "application/json", ...init?.headers },
    });
    if (!res.ok) {
      throw new ApiError(res.status, `${init?.method ?? "GET"} ${path} failed: ${res.status}`);
    }
    return schema.parse(await res.json());
  }

  return {
    health: (): Promise<HealthResponse> => request(healthResponseSchema, "/health"),
    sendContactMessage: (input: ContactMessage): Promise<ContactMessageResponse> =>
      request(contactMessageResponseSchema, "/v1/contact", {
        method: "POST",
        body: JSON.stringify(input),
      }),
  };
}

export type ApiClient = ReturnType<typeof createApiClient>;
