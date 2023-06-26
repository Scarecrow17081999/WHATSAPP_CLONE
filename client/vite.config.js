import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // string shorthand for simple case
      "/api": "http://localhost:8000",
      // with options if you need to use change origin
    },
  },
});
