/// <reference types="cypress" />

describe("Introduccion a los Asserts", () => {

    it("Demo de los asserts", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA') 
        cy.wait(500)
        

        cy.get('#userName').should('be.visible').type("Pedro")
        cy.get('#userEmail').should('be.visible').type("Perez")
        
        cy.get('#currentAddress').should('be.empty').should('be.visible').should('be.enabled').type("Calle falsa 123") //que este vacio el campo, que este visible y que este habilitado
        
    });
    
});