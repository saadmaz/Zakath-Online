import { z } from "zod";

export const healthResponseSchema = z.object({
  status: z.literal("ok"),
});
export type HealthResponse = z.infer<typeof healthResponseSchema>;

export const contactMessageSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.email(),
  message: z.string().trim().min(1).max(5000),
});
export type ContactMessage = z.infer<typeof contactMessageSchema>;

export const contactMessageResponseSchema = z.object({
  received: z.literal(true),
});
export type ContactMessageResponse = z.infer<typeof contactMessageResponseSchema>;
