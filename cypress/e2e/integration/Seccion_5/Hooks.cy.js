/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');


describe('descripcion', { testIsolation: false },  () => {
    let tiempo = 500
    before(()=>{
        // Limpiar cookies y almacenamiento antes de visitar la página
        cy.clearCookies();
        cy.clearLocalStorage();

        //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout")
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')
        cy.wait(tiempo)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('button[type=submit]').should('be.visible').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('be.visible').click()
        
        cy.wait(tiempo)
        
    }
    )

    it('prueba UNO', () => {
        cy.get('input[type="checkbox"]').click({ force: true , multiple: true }).should('be.checked')
        cy.wait(tiempo)
        
    })

    it('prueba DOS', () => {
        cy.get('input[type="checkbox"]').click({ force: true, multiple: true  }).should('not.be.checked')
        cy.wait(tiempo)
        
    })

    it('prueba TRES', () => {
        cy.get('input[type="checkbox"]').click({ force: true, multiple: true  }).should('be.checked')
        cy.wait(tiempo)
        
    })

});