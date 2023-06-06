import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import addClasses from 'rehype-add-classes'

// https://astro.build/config
export default defineConfig({
  site: 'https://nakuya.dev/',
  integrations: [sitemap(), react(), image(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-bold font-poppins',
          h2: 'text-2xl font-bold font-poppins',
          h3: 'text-xl font-bold font-poppins',
          h4: 'text-lg font-bold font-poppins',
          h5: 'font-bold font-poppins',
          h6: 'font-bold font-poppins',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6',
          a: 'underline underline-offset-2 hover:text-blue-500 decoration-blue-500'
        }
      ]
    ]
  }
})
