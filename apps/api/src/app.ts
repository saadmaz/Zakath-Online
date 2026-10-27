import { Hono } from "hono";
import { cors } from "hono/cors";
import { v1 } from "./routes/v1";

export function createApp({ corsOrigins }: { corsOrigins: string[] }) {
  const app = new Hono();

  app.use("*", cors({ origin: corsOrigins }));

  app.get("/health", (c) => c.json({ status: "ok" as const }));
  app.route("/v1", v1);

  return app;
}
