/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');


describe("Manejo de los Alias", () => {

    it("Alias UNO", () => {
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")

        cy.get(':nth-child(1) > td > input').should('be.visible').as('user')
        cy.get('@user').type("Juan")

        cy.get(':nth-child(2) > td > input').should('be.visible').as('ape')
        cy.get('@ape').type("Alvarez")

        cy.get('textarea').should('be.visible').as('obs')
        cy.get('@obs').type("Observaciones de ejercicio")

        cy.get(':nth-child(7) > td > select').should('be.visible').as('valores')
        cy.get('@valores').select(['Selection Item 1', 'Selection Item 3'])

        cy.get(':nth-child(8) > td > select').should('be.visible').as('drop')
        cy.get('@drop').select("Drop Down Item 2").should("have.value","dd2")

        cy.get('[type="submit"]').click()
 
    });

});