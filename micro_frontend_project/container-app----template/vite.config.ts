import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        homeapp: "http://localhost:5001/remoteEntry.js",
        cardapp: "http://localhost:5002/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
   server: {
    port: 5000,
  },
  build: {
    target: "esnext",
  },
});