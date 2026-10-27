import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const pkg = (name: string) =>
  fileURLToPath(new URL(`../../packages/${name}/src/index.ts`, import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Resolve workspace packages to source; see packages/config/tsconfig/base.json.
  resolve: {
    alias: {
      "@zakath/api-client": pkg("api-client"),
      "@zakath/ui-web": pkg("ui-web"),
      "@zakath/validators": pkg("validators"),
    },
  },
  server: { port: 5173 },
});
