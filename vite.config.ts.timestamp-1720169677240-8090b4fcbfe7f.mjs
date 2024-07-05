// vite.config.ts
import { defineConfig } from "file:///Users/mg/Mikaela/animation-portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///Users/mg/Mikaela/animation-portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///Users/mg/Mikaela/animation-portfolio/node_modules/vite-plugin-svgr/dist/index.js";
import { nodePolyfills } from "file:///Users/mg/Mikaela/animation-portfolio/node_modules/vite-plugin-node-polyfills/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///Users/mg/Mikaela/animation-portfolio/vite.config.ts";
var vite_config_default = defineConfig({
  base: "/",
  plugins: [
    react(),
    svgr(),
    nodePolyfills({
      protocolImports: true
    }),
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.slice(-3) === "javascript-function-argument.md") {
          return `export default ${JSON.stringify(code)};`;
        }
      }
    }
  ],
  resolve: {
    alias: {
      buffer: "buffer",
      "@rive": new URL("./src/components/rive", __vite_injected_original_import_meta_url).pathname,
      "@components": new URL("./src/components/", __vite_injected_original_import_meta_url).pathname,
      "@": new URL("./src", __vite_injected_original_import_meta_url).pathname
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWcvTWlrYWVsYS9hbmltYXRpb24tcG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWcvTWlrYWVsYS9hbmltYXRpb24tcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tZy9NaWthZWxhL2FuaW1hdGlvbi1wb3J0Zm9saW8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgc3ZnciBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiO1xuaW1wb3J0IHsgbm9kZVBvbHlmaWxscyB9IGZyb20gXCJ2aXRlLXBsdWdpbi1ub2RlLXBvbHlmaWxsc1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogXCIvXCIsXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHN2Z3IoKSxcbiAgICBub2RlUG9seWZpbGxzKHtcbiAgICAgIHByb3RvY29sSW1wb3J0czogdHJ1ZSxcbiAgICB9KSxcbiAgICB7XG4gICAgICBuYW1lOiBcIm1hcmtkb3duLWxvYWRlclwiLFxuICAgICAgdHJhbnNmb3JtKGNvZGUsIGlkKSB7XG4gICAgICAgIGlmIChpZC5zbGljZSgtMykgPT09IFwiamF2YXNjcmlwdC1mdW5jdGlvbi1hcmd1bWVudC5tZFwiKSB7XG4gICAgICAgICAgcmV0dXJuIGBleHBvcnQgZGVmYXVsdCAke0pTT04uc3RyaW5naWZ5KGNvZGUpfTtgO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgYnVmZmVyOiBcImJ1ZmZlclwiLFxuICAgICAgXCJAcml2ZVwiOiBuZXcgVVJMKFwiLi9zcmMvY29tcG9uZW50cy9yaXZlXCIsIGltcG9ydC5tZXRhLnVybCkucGF0aG5hbWUsXG4gICAgICBcIkBjb21wb25lbnRzXCI6IG5ldyBVUkwoXCIuL3NyYy9jb21wb25lbnRzL1wiLCBpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLFxuICAgICAgXCJAXCI6IG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVMsU0FBUyxvQkFBb0I7QUFFOVQsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQUpvSixJQUFNLDJDQUEyQztBQU9uTyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxjQUFjO0FBQUEsTUFDWixpQkFBaUI7QUFBQSxJQUNuQixDQUFDO0FBQUEsSUFDRDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sVUFBVSxNQUFNLElBQUk7QUFDbEIsWUFBSSxHQUFHLE1BQU0sRUFBRSxNQUFNLG1DQUFtQztBQUN0RCxpQkFBTyxrQkFBa0IsS0FBSyxVQUFVLElBQUksQ0FBQztBQUFBLFFBQy9DO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixTQUFTLElBQUksSUFBSSx5QkFBeUIsd0NBQWUsRUFBRTtBQUFBLE1BQzNELGVBQWUsSUFBSSxJQUFJLHFCQUFxQix3Q0FBZSxFQUFFO0FBQUEsTUFDN0QsS0FBSyxJQUFJLElBQUksU0FBUyx3Q0FBZSxFQUFFO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
