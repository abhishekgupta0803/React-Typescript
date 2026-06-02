import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cardapp",
      filename: "remoteEntry.js",
      exposes: {
        "./Card": "./src/Card.tsx",
      },
       shared: ["react", "react-dom"],
    }),
  ],
   server: {
    port: 5002,
     cors: true,
  },
  build:{
    target: "esnext",
  },
 
});