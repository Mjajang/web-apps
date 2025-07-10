import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Use global test functions like `describe`, `it`, etc.
    environment: "jsdom", // Use jsdom for DOM-related tests
    setupFiles: "./src/__tests__/setupTests.js", // Add this line
  },
});
