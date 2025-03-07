/// <reference types="cypress" />
require('cypress-plugin-tab')


describe("Funciones para Type Tab", () => {

    it("Type --> TAB", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.wait(500)
        cy.get('#userName').type('Juan Pérez').tab()
        .type('lalo@gmail.com').tab()
        .type('curapaligue 894').tab()
        .type('CABA').tab().click()
        //cy.get('#userEmail').should('have.focus').tab({ shift: true })    
        //cy.get('#userName').should('have.focus')
    });
    
});