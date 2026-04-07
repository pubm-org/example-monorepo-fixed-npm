import { defineConfig } from "@pubm/core";

export default defineConfig({
  versioning: "fixed",
  packages: [
    { path: "packages/core", registries: ["npm"] },
    { path: "packages/utils", registries: ["npm"] },
  ],
  branch: "main",
});
