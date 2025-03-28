/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');


describe('Reto de Hooks', () => {
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('button[type=submit]').should('be.visible').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('be.visible').click()
        
    
    })

    afterEach(()=>{
        cy.get('.oxd-userdropdown-tab').should('be.visible').click({force:true});
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click({force:true});
           
    })

    it('selecion punto menu UNO', () => {
        cy.get(':nth-child(2) > .oxd-main-menu-item').should('be.visible').click({force:true});
    })

    it('selecion punto menu DOS', () => {
        cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').should('be.visible').click({force:true});
    })

    it('selecion punto menu TRES', () => {
        cy.get(':nth-child(12) > .oxd-main-menu-item').should('be.visible').click({force:true});
    })

});