import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Get current directory using ESM compatible approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.svelte"),
      name: "SvelteZoom",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["svelte"],
      output: {
        globals: {
          svelte: "Svelte"
        }
      }
    }
  }
});
