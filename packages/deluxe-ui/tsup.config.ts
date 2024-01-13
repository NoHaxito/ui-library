import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src/index.ts"],
    clean: true,
    dts: true,
    format: ["esm", "cjs"],
    minify: true,
    target: "es2022",
    tsconfig: "tsconfig.json",
    sourcemap: true,
    banner: { js: '"use client";' },
  };
});
