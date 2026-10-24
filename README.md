# zakath-online

TypeScript monorepo scaffold using pnpm workspaces and Turborepo.

## Structure

- `apps/landing` - Next.js landing pages (`/`, `/about`, `/contact`)
- `apps/web` - Next.js web app (`/login`, `/dashboard`)
- `apps/admin` - Vite React admin app (`/login`, `/users`, `/settings`)
- `apps/mobile` - Expo managed app with expo-router (`/login`, `/`)
- `apps/api` - Hono API (`GET /health`, `GET /v1/example`)
- `packages/core` - pure TypeScript placeholder `calculateZakat` signature
- `packages/db` - Drizzle Postgres schema + migration config
- `packages/validators` - shared Zod validators
- `packages/api-client` - typed fetch client using shared validators
- `packages/ui-web` - shared React `Button` and `Card`
- `packages/config` - shared base tsconfig/eslint/prettier config

## Setup

```bash
corepack enable
corepack prepare pnpm@9.12.0 --activate
pnpm install
```

## Run

```bash
pnpm dev
```

Run one app:

```bash
pnpm --filter landing dev
pnpm --filter web dev
pnpm --filter admin dev
pnpm --filter mobile start
pnpm --filter api dev
```

## Validate

```bash
pnpm typecheck
pnpm build
```
