import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: 'jsdom',
        include: ['test/**/*.test.js'],
        globals: true,
        reporters: 'dot',
    }
})
