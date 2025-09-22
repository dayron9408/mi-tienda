import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // 👈 importante para rutas en Render
  plugins: [tailwindcss(), react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
