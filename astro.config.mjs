import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://mage-os.org',
  integrations: [
    vue(),
    tailwind()
  ]
})
