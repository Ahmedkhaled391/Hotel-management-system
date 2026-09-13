import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: [
      { find: /^date-fns\/esm\/(.*)$/, replacement: "date-fns/$1" },
      { find: "date-fns/esm", replacement: "date-fns" },
    ],
  },
});
