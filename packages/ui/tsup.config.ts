import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  // treeshake: true,
  // splitting: true,
  // minify: true,
  external: ["react"],
  ...options,
}));
