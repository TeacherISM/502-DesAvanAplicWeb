import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // add your custom spec pattern if needed
    baseUrl: 'http://localhost:5173', // optional, helps shorten cy.visit()
  },
});
