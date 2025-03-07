const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920, // Ancho en píxeles
    viewportHeight: 1080, // Alto en píxeles
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      "cypress/e2e/cucumber_features/*.feature",        // Patrón de búsqueda de archivos feature de Cucumber
      'cypress/e2e/integration/**/*.js'         // Archivos JS de pruebas normales
      
    ],
  },
  
});
