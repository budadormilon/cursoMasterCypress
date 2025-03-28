const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true, // Habilita la grabación de videos
    videoUploadOnPasses: false, // Solo guarda videos si una prueba falla
    videoCompression: 32, // Ajusta la compresión del video (0 para desactivar la compresión)
    videosFolder: "cypress/videos", // Ruta donde se guardarán los videos
    viewportWidth: 1920, // Ancho en píxeles
    viewportHeight: 1080, // Alto en píxeles
    chromeWebSecurity: false, // Deshabilita la seguridad de Chrome
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      //"cypress/e2e/cucumber_features/*.feature",        // Patrón de búsqueda de archivos feature de Cucumber
      'cypress/e2e/integration/**/*.js'         // Archivos JS de pruebas normales
      
    ],
  },
  
  retries: 0,
  
});
