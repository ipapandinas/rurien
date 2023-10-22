import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  // PORT
  server: {
    port: 3000,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "static",
  adapter: vercelStatic(),
});
