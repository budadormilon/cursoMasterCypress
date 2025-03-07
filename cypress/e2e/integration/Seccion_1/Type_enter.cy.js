/// <reference types="cypress" />

describe("Funciones para Type", () => {

    it("Type --> ENTER", () => {
        cy.visit("https://www.google.com/?hl=es")
        cy.title().should('eq', 'Google') 
        cy.wait(500)
        cy.get("[name='q']").type("cypress io {enter}")

    });
    
});