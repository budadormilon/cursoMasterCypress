/// <reference types="cypress" />
require('cypress-xpath');


describe("Radio button", () => {

    it("selecciona radio button", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')
        cy.wait(500)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('button[type=submit]').should('be.visible').click()
        cy.get(':nth-child(6) > .oxd-main-menu-item').click()
        cy.wait(2500)
        cy.get('label:contains("Female") input', { timeout: 10000 }).should('not.be.disabled').check({ force: true }).should('be.checked')
        
       
        
    })


})





