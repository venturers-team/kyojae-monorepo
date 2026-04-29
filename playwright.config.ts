import { defineConfig, devices } from '@playwright/test';

const PORTS = {
  paperclip: 4321,
} as const;

export default defineConfig({
  testDir: './apps',
  testMatch: '**/tests/e2e/*.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'paperclip',
      testMatch: 'paperclip/tests/e2e/*.spec.ts',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: `http://localhost:${PORTS.paperclip}`,
      },
    },
  ],
  webServer: [
    {
      name: 'paperclip-preview',
      command: `pnpm --filter paperclip exec astro preview --port ${PORTS.paperclip}`,
      port: PORTS.paperclip,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
  ],
});
