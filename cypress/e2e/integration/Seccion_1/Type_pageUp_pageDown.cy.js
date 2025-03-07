/// <reference types="cypress" />

describe("Ejemplo de Type PageUp y PageDown", () => {

    it("Type --> PageUp", () => {
        cy.visit("https://demoqa.com/text-box")
        //cy.title().should('eq', 'DEMOQA') 
        cy.wait(500)
       // cy.get("[name='q']").type("cypress io {enter}")
       cy.get('body').type('{pageup}')
       cy.wait(500)
       cy.get('body').type('{pagedown}')
       cy.scrollTo('top')
       cy.wait(500)
       cy.scrollTo('bottom')
    });
    

});