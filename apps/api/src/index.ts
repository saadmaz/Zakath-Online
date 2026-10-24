import { serve } from '@hono/node-server';
import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import {
  exampleQuerySchema,
  exampleResponseSchema,
  healthResponseSchema
} from '@zakath-online/validators';

const app = new Hono();

app.get('/health', (c) => {
  return c.json(healthResponseSchema.parse({ status: 'ok' }));
});

const v1 = new Hono();

v1.get('/example', zValidator('query', exampleQuerySchema), (c) => {
  const query = c.req.valid('query');
  return c.json(
    exampleResponseSchema.parse({
      message: `Hello${query.name ? `, ${query.name}` : ''}`
    })
  );
});

app.route('/v1', v1);

const port = Number(process.env.PORT ?? 3001);

serve({
  fetch: app.fetch,
  port
});
