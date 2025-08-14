import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000, // Test duration timeout in this case 60s
  retries: 0,
  use: {
    browserName: 'chromium',  // Browser: Chromium
    headless: false,          
    viewport: { width: 1280, height: 800 },
    ignoreHTTPSErrors: true,
    video: 'off',             // No video stored
    screenshot: 'only-on-failure', // Screenshoot in case of failed
    launchOptions: {
      slowMo: 50, // Slows down the test to show how the browser works
    },
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
