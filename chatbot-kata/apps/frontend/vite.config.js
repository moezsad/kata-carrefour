import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
     "@": fileURLToPath(new URL("./src", import.meta.url)),
//      chat: fileURLToPath(new URL("../../packages/chat", import.meta.url)),
//      message: fileURLToPath(new URL("../../packages/message", import.meta.url)),
//      "message-list": fileURLToPath(new URL("../../packages/message-list", import.meta.url)),
//      input: fileURLToPath(new URL("../../packages/input", import.meta.url)),
    },
  },
  server: {
    port: 5173,
  },
});