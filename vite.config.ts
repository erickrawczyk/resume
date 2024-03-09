import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import Unfonts from 'unplugin-fonts/vite'
import { viteSingleFile } from "vite-plugin-singlefile"


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
      custom: {
        families: [
          {
            name: 'Montserrat',
            src: './src/assets/fonts/*.ttf',
          },
        ],
      },
    }),
    viteSingleFile(),
  ],
})
