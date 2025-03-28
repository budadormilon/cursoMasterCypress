/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');


describe('Configuracion y uso de Snippets', () => {

    it('Snippets UNO', () => {
        let tiempo = 500
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(tiempo)
        
        cy.get('#userName').should('be.visible').type('Pedro', {force:true});
        cy.wait(500)
        
    })

});