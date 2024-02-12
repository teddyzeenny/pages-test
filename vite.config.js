import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteEjsPlugin } from "vite-plugin-ejs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pages-test/",
  plugins: [
    react(),
    ViteEjsPlugin({
      configValue: "Config Value",
    }),
  ],
});
