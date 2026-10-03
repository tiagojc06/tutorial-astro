// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tutorial-astro-aura.netlify.app/",

  image: {
    // Define una lista de dominios de origen de imágenes permitidos para la optimización remota de imágenes. Astro no optimizará ninguna otra imagen remota.
    domains: ["docs.astro.build"],
  },

  integrations: [preact()],
});