/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');


describe('Navegacion entre las paginas', () => {

    it('Back y Fordward', () => {
        let tiempo = 500
        cy.visit('https://demoqa.com/')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(tiempo)

        cy.get('.category-cards > :nth-child(1) > :nth-child(1)').should('be.visible').click({ force: true });
        cy.wait(500)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').should('be.visible').click({ force: true });
        cy.wait(500)

        cy.go("back")
        cy.go("forward")
        cy.go("back")
        cy.go("back")
    })

    it.only('Refresh', () => {
        let tiempo = 500
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(tiempo)

        cy.get('#userName').should('be.visible').type('pedro');
        cy.wait(500)

        cy.get('#userEmail').should('be.visible').type('ibañex');
        cy.wait(500)

        cy.reload()

    })
});