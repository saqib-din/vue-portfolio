import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    vue(),

    sitemap({
      hostname: 'https://saqib-din.vercel.app'
    })
  ],

  server: {
    port: 3000
  }
})