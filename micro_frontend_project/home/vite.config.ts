import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "homeapp",
      filename: "remoteEntry.js",
      exposes: {
        "./Home": "./src/Home.tsx",
      },
       shared: ["react", "react-dom"],
    }),
  ],
   server: {
    port: 5001,
     cors: true,
  },
  build:{
    target: "esnext",
  }
});