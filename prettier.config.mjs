// Shared settings live in packages/config. Imported by path because F: (exFAT)
// cannot link workspace packages into node_modules.
import config from "./packages/config/prettier.json" with { type: "json" };

export default config;
