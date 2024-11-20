import { defineConfig } from 'vite';
import path from 'path';

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env
export default defineConfig({
  plugins: [],
  root: 'src/',
  base: './',
  publicDir: '../public',
  server: {
    host: true,
    open: !isCodeSandbox
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  assetsInclude: [],
  test: {
    browser: {
      provider: 'playwright', // 'webdriverio' | 'playwright'
      enabled: true,
      name: 'chromium', // browser name is required
      headless: true, // overridden in CLI
      viewport: { width: 800, height: 600 },
      providerOptions: {}
    },
    allowOnly: true,
    maxConcurrency: 1,
    minWorkers: 1,
    testTimeout: 5000,
    restoreMocks: true,
    sequence: {
      concurrent: false
    }
  }
});
