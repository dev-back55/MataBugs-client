const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ew51dn",

  e2e: {
    baseUrl: "http://localhost:3000",
    experimentalStudio: true,
    chromeWebSecurity: false,
  },

  env: {
    randomNumber: Math.floor(Math.random() * 10000),
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});