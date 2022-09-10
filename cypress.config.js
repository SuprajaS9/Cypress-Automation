const { defineConfig } = require("cypress");
//const registerCypressGrep = require('cypress-grep')
//registerCypressGrep()

module.exports = defineConfig({
  projectId: "e57qhk",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      require('cypress-grep/src/plugin')(config);
      return config;
    },
  },
});

/*const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // e2e options here
  }
})*/
