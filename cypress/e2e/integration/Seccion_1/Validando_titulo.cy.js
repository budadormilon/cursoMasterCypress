/// <reference types="cypress" />

describe("Seccion 1 validando el titulo", () => {

    it("Validar titulo de pagina", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA') // Verifica que el titulo de la pagina sea igual a DEMOQA
        
    });
    
});