import { zValidator } from "@hono/zod-validator";
import { contactMessageSchema } from "@zakath/validators";
import { Hono } from "hono";

export const v1 = new Hono();

// Example route showing shared Zod validation. The message is not stored or sent anywhere yet.
v1.post("/contact", zValidator("json", contactMessageSchema), (c) => {
  c.req.valid("json");
  return c.json({ received: true as const }, 202);
});
