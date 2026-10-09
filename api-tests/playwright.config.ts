import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['html', { outputFolder: 'playwright-report-api', open: 'never' }],
    ['list']
  ],
  use: {
    baseURL: 'https://api.open-meteo.com', // Sin el /v1
    extraHTTPHeaders: {
        'Accept': 'application/json',
        },
    },
});