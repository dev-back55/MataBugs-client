const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ew51dn',
  e2e: {
    baseUrl: "http://localhost:3000",
    experimentalStudio: true,
    chromeWebSecurity: false
  },
  env: {
    randomNumber: Math.floor(Math.random() * 10000)
  }
});


// setupNodeEvents(on, config) {
//   // implement node event listeners here
// },
