import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src",
      formats: ["es"],
    },
  },
});
