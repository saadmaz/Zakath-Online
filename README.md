# Zakath Online

Monorepo for Zakath Online: marketing site, user web app, admin panel, mobile app and API,
sharing TypeScript packages through pnpm workspaces and Turborepo.

## Structure

```
zakath-online/
├── apps/
│   ├── landing/        # Next.js (static export), marketing site, SEO, no auth
│   ├── web/            # Next.js, authenticated user app
│   ├── admin/          # Vite + React, internal panel, separate deploy and auth rules
│   ├── mobile/         # Expo (React Native), iOS + Android
│   └── api/            # Hono on Node, single source of truth for web, admin, mobile
├── packages/
│   ├── core/           # zakat/nisab calculation, pure TS, no I/O, fully tested
│   ├── db/             # Drizzle schema + migrations (Postgres)
│   ├── validators/     # shared Zod schemas, used by api and all clients
│   ├── api-client/     # typed client for the API, used by web, admin, mobile
│   ├── ui-web/         # shared React components for landing, web, admin
│   └── config/         # shared tsconfig, eslint, prettier
├── docs/
│   ├── architecture.md
│   └── zakat-rules.md  # sources and rulings behind core, reviewed by a scholar
├── .github/workflows/  # CI with path filters per app
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

See [docs/architecture.md](docs/architecture.md) for how the pieces fit together.

## Requirements

- Node.js 22+
- pnpm 11 (`corepack enable` picks up the version from `package.json`)
- Postgres, only when working on `packages/db`
- Expo Go or an iOS/Android simulator for `apps/mobile`

## Setup

```sh
pnpm install
```

### Why workspace packages are imported by path

The repo lives on an exFAT drive, which supports neither symlinks, junctions nor hard links.
pnpm normally links workspace packages into `node_modules`, so instead:

- `pnpm-workspace.yaml` uses a flat, copied `node_modules` (`nodeLinker: hoisted`,
  `packageImportMethod: copy`) and skips dependency install scripts (`ignoreScripts`).
- Apps do **not** list `@zakath/*` packages in `package.json`. Imports like `@zakath/ui-web`
  resolve to `packages/*/src` through `paths` in `packages/config/tsconfig/base.json`
  (and `apps/mobile/tsconfig.json`, and `resolve.alias` in `apps/admin/vite.config.ts`).
  When an app starts using a new package, add it to those path maps.
- Shared ESLint and tsconfig files are referenced by relative path, e.g.
  `../../packages/config/tsconfig/base.json`.
- Turborepo cannot see cross-package dependencies, so CI treats each package as its own target.

If the repo moves to an NTFS drive, this can be switched back to normal `workspace:*`
dependencies.

A first install takes around 20 minutes on this drive. If it fails with `EPERM`, close
the editor (its TypeScript server locks files in `node_modules`), delete `node_modules`
and retry.

Copy each `.env.example` you need to `.env` (or `.env.local` for the Next.js apps) and fill it in.
Never commit real `.env` files.

## Common commands

Run from the repo root:

| Command          | What it does                                 |
| ---------------- | -------------------------------------------- |
| `pnpm dev`       | Start every app in dev mode                  |
| `pnpm build`     | Build every app                              |
| `pnpm lint`      | Lint everything                              |
| `pnpm typecheck` | Type-check everything                        |
| `pnpm test`      | Run tests (currently `packages/core`)        |
| `pnpm format`    | Format with Prettier                         |

## Running a single app

| App     | Command                                  | URL                    |
| ------- | ---------------------------------------- | ---------------------- |
| landing | `pnpm --filter @zakath/landing dev`      | http://localhost:3000  |
| web     | `pnpm --filter @zakath/web dev`          | http://localhost:3001  |
| admin   | `pnpm --filter @zakath/admin dev`        | http://localhost:5173  |
| api     | `pnpm --filter @zakath/api dev`          | http://localhost:4000  |
| mobile  | `pnpm --filter @zakath/mobile dev`       | Expo dev server (scan the QR code) |

To run an app together with its dependencies' tasks, use Turborepo: `pnpm turbo run dev --filter=@zakath/web...`.

## Database

```sh
cp packages/db/.env.example packages/db/.env   # set DATABASE_URL
pnpm --filter @zakath/db db:generate            # create a migration from the schema
pnpm --filter @zakath/db db:migrate             # apply migrations
```

## Zakat logic

`packages/core` is written by hand, not generated. Every rule must first be recorded in
[docs/zakat-rules.md](docs/zakat-rules.md) with its source and be reviewed before it is
implemented. A wrong calculation is a religious-correctness bug, not a UI bug.
