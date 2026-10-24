# Architecture

## Monorepo

- Package manager: pnpm workspaces
- Task runner: Turborepo
- Apps live in `apps/*`
- Shared packages live in `packages/*`

## Apps

- `apps/landing`: Next.js App Router static-export landing site
- `apps/web`: Next.js App Router user-facing web app
- `apps/admin`: Vite + React admin app
- `apps/mobile`: Expo managed app with expo-router
- `apps/api`: Hono Node API

## Shared packages

- `packages/core`: pure TypeScript domain signatures
- `packages/db`: Drizzle schema and migrations for Postgres
- `packages/validators`: shared Zod schemas
- `packages/api-client`: typed fetch API client
- `packages/ui-web`: shared React UI primitives
- `packages/config`: shared tsconfig/eslint/prettier config
