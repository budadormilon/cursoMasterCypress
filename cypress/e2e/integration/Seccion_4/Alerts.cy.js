/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');


describe("Manejo de Alertas", () => {

    it("Cerrar alerts nativos", () => {
        cy.visit("https://testpages.eviltester.com/styled/alerts/alert-test.html")

        // Stubea el prompt para que no aparezca y devuelva un valor (opcional)
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Holis'); // Cierra el prompt sin ingresar texto
        });

        // Realiza la acción que dispara el prompt
        cy.get('#promptexample').click()
        
        // Verificación opcional
        cy.window().its('prompt').should('be.called');
    });

});