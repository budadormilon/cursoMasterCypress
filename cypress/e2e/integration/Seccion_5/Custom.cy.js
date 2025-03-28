/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');


describe('custom commands', () => {

    let tiempo = 500

    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(tiempo)

    });

    it('Custom p1', () => {

        cy.tipear_texto_visible("#userName", "JuanCa")
        cy.tipear_texto_visible("#userEmail", "Beloco")
        cy.clickear("#submit")

    })

    
});