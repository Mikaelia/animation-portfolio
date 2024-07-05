import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    svgr(),
    nodePolyfills({
      protocolImports: true,
    }),
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.slice(-3) === "javascript-function-argument.md") {
          return `export default ${JSON.stringify(code)};`;
        }
      },
    },
  ],
  resolve: {
    alias: {
      buffer: "buffer",
      "@rive": new URL("./src/components/rive", import.meta.url).pathname,
      "@components": new URL("./src/components/", import.meta.url).pathname,
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
});
