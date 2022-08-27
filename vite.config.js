import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  plugins: [vue()],
  server: {
    port: 4000,
    host: true,
    open: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    },
    rollupOptions: {
      input: 'index.html',
      output: {

      }
    }
  }
})
