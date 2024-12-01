const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl :"https://btech.com", 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
