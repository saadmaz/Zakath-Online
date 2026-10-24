import { z } from 'zod';

export const healthResponseSchema = z.object({
  status: z.literal('ok')
});

export const exampleQuerySchema = z.object({
  name: z.string().min(1).optional()
});

export const exampleResponseSchema = z.object({
  message: z.string()
});

export type HealthResponse = z.infer<typeof healthResponseSchema>;
export type ExampleQuery = z.infer<typeof exampleQuerySchema>;
export type ExampleResponse = z.infer<typeof exampleResponseSchema>;
