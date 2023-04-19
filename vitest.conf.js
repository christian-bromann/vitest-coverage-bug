/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.js'],
    exclude: [
      'dist', '.idea', '.git', '.cache',
      '**/node_modules/**', 'examples/**'
    ],
    coverage: {
      enabled: true,
      exclude: ['**/build/**', '**/__fixtures__/**', '**/*.test.ts'],
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
})
