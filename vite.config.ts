import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@rive": new URL("./src/components/rive", import.meta.url).pathname,
      "@components": new URL("./src/components/", import.meta.url).pathname,
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
});
