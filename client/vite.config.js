import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Bind to all network interfaces
    port: 80, // Set port to 80
    strictPort: true // Fail if port 80 is in use
  },
  build: {
    outDir: "dist" // Output directory for production build
  }
});
