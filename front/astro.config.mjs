import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercelServerless,
    i18n:{
        defaultLocale: "en",
        locales: ["en", "fr", "zh", "es"],
        routing:{
            prefixDefaultLocale: false
        }
    }
});

