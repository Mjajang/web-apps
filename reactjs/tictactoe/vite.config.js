import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/web-apps/reactjs/tictactoe/", // Adjust to your repository's subdirectory
});
