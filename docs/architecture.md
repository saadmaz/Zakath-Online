# Architecture

## Overview

Zakath Online is a pnpm + Turborepo monorepo with five deployable apps and six shared packages.

```
apps/landing  ─┐
apps/web      ─┼─► packages/ui-web
apps/admin    ─┘
apps/web, apps/admin, apps/mobile ─► packages/api-client ─► packages/validators
apps/api ─► packages/validators   (packages/db and packages/core are not wired in yet)
```

| App            | Stack                        | Purpose                                            | Port |
| -------------- | ---------------------------- | -------------------------------------------------- | ---- |
| `apps/landing` | Next.js, static export       | Marketing site, SEO, no auth                       | 3000 |
| `apps/web`     | Next.js App Router           | Authenticated user app                             | 3001 |
| `apps/admin`   | Vite + React + React Router  | Internal panel, deployed and secured separately    | 5173 |
| `apps/mobile`  | Expo (expo-router)           | iOS and Android                                    | Metro |
| `apps/api`     | Hono on Node                 | Single source of truth for web, admin, mobile      | 4000 |

## Packages

- **`core`**: zakat calculation. Pure TypeScript, no I/O, no dependencies. Every rule must be
  documented in [zakat-rules.md](./zakat-rules.md) first. Written by hand, not generated.
- **`db`**: Drizzle ORM schema and migrations for Postgres. Only `apps/api` should import it.
- **`validators`**: Zod schemas shared by the API and every client. The API contract lives here.
- **`api-client`**: typed `fetch` client that parses responses with the shared schemas.
- **`ui-web`**: React DOM components for landing, web and admin. Not used by mobile.
- **`config`**: shared `tsconfig`, ESLint and Prettier configuration.

## Decisions

- **Internal packages ship TypeScript source** (`exports` points at `src/*.ts`). Next.js
  transpiles them via `transpilePackages`, Vite and Metro handle TS natively, and the API is
  bundled with `tsup`. There is no separate build step for packages.
- **Share logic with mobile, not screens.** Mobile uses `validators` and `api-client`. It does
  not use `ui-web`, because React DOM and React Native components do not share well.
- **Admin is a separate app** with its own deploy and auth rules, so a compromised user session
  in `web` does not reach admin functionality.
- **Separate API** because mobile and admin both need a stable, versioned contract (`/v1`).

## Not done yet

- Authentication (web has a stub `AuthProvider` in `apps/web/src/lib/auth.ts`).
- Wiring `packages/db` into the API.
- Any zakat logic in `packages/core`.
- Deployment targets and environments.
