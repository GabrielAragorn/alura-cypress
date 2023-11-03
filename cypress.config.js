module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      module.exports = defineConfig({
        e2e: {
            setupNodeEvents(on, config) {
                { "reporter"; "mochawesome",
                    "reporterOptions"; 
                        { "reportDir"; "cypress/report/mochawesome-report",
                        "overwrite"; true,
                        "html"; true,
                        "json"; false,
                        "timestamp"; "mmddyyyy_HHMMss" }}
            },
        },
      });
    
      
    },
  },
};
