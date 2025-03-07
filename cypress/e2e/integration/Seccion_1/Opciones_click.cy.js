/// <reference types="cypress" />

describe("Opciones de Click", () => {

    it("Click sencillo", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM') 
        cy.wait(500)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('button[type=submit]').should('be.visible').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click()
        cy.get(':nth-child(6) > .oxd-main-menu-item').should('be.visible').click()
    });

    it("Click Force true", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM') 
        cy.wait(500)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('button[type=submit]').should('be.visible').click()
        cy.get(':nth-child(6) > .oxd-main-menu-item').should('be.visible').click({force:true})
    });
    
    it.only("Click por COORDENADAS", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM') 
        cy.wait(500)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")

        cy.get('button[type=submit]').should('be.visible').click()
       // cy.wait(1500)
        //cy.get('html').should('be.visible').click(123,405)       //Performance
       // cy.wait(1500)
        cy.get('html').should('be.visible').click(79,211)       //PIM A partir del elemento HTML se corre 79 a la derecha y 211 para abajo
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible').click(70,5)   // A partir de un elemento se corre 70 a la derecha y 5 para abajo
    });
    
});