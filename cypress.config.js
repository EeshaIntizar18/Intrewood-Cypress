const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  projectId: 'cgyte9',
  chromeWebSecurity:false,
  

  
  
    "reporter": "junit",
    "reporterOptions": {
       "mochaFile": "cypress/results/results-[hash].xml",
       "toConsole": true
    },
   
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
