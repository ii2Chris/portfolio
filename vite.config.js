import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Important for React projects!

export default defineConfig({
  plugins: [react()],
});
