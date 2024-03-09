import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import Unfonts from 'unplugin-fonts/vite'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    Unfonts({
      google: {
        families: [
          {
            name: 'Montserrat',
            styles: 'ital,wght@0,100..900;1,100..900',
          },
        ],
      },
    }),
  ],
})
