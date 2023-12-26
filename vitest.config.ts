import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

const r = (p: string) => resolve(__dirname, p)
export default defineConfig({
  optimizeDeps: {
    disabled: true,
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
  },
})
