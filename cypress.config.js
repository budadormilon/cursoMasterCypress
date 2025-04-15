const { defineConfig } = require("Cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  compilerOptions: {
    // La opción "baseUrl" establece la carpeta raíz desde la cual se resuelven las rutas relativas
    // En este caso, al definir "baseUrl": "cypress", estamos indicando que el directorio base es la carpeta "cypress".
    // Esto permite escribir importaciones más simples y cortas, evitando tener que usar rutas relativas largas.
    baseUrl: "cypress",
  },

  retries: {
    runMode: 0,     // No reintentos en CI
    openMode: 0     // 0 reintento en modo interactivo
  },
  projectId: 'qk38ng', // <- add this line

  e2e: {
    // Configuraciones de video
    video: true,  // Asegura que la grabación de video esté activada
    videosFolder: "cypress/videos",  // Ruta donde se guardarán los videos
    videoCompression: 32,

    // Configuraciones de capturas de pantalla
    viewportWidth: 1920, // Ancho en píxeles
    viewportHeight: 1080, // Alto en píxeles

    // Habilita la función experimental de Studio
    experimentalStudio: true,  

    async setupNodeEvents(on, config) {
      // implement node event listeners here

      const bundler = createBundler({ plugins: [createEsbuildPlugin(config)], });

      on("file:preprocessor", bundler);

      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },

    // Configuraciones de preprocesador
    specPattern: [
      "cypress/e2e/cucumber_features/*.feature",        // Patrón de búsqueda de archivos feature de Cucumber
      'cypress/e2e/integration/**/*.js'         // Archivos JS de pruebas normales

    ],
    excludeSpecPattern: '**/cucumber_step_definitions/**/*.js', // Excluye los archivos de definiciones de pasos de Cucumber

    "defaultCommandTimeout": 4000, // Tiempo de espera por defecto
    "env": {
      urlAutomationPractice: "http://www.automationpractice.pl", // URL de la página de Automation Practice
      urlDemoQA: "https://demoqa.com/automation-practice-form", // URL de la página de DemoQA
      urlOpenCart: "https://demo.opencart.com" // URL de la página de OpenCart   
    },


    // Configuraciones de seguridad
    chromeWebSecurity: false

  }
});

