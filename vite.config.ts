import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // test: {
  //   globals: true, // 👈 this is the key
  //   environment: "jsdom",
  //   setupFiles: "./src/setupTests.ts", // optional but recommended
  // },
});
