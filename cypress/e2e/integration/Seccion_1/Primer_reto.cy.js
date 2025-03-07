/// <reference types="cypress" />

describe("Primer Reto", () => {

    it(" ", () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq', 'DEMOQA') 
        cy.wait(500)

        cy.get('#searchBox').should('be.visible').type('Cierra')
        cy.get('#searchBox').should('be.visible').clear() // borra el contenido del input

        cy.get('#addNewRecordButton').should('be.visible').should('have.text', 'Add').should('be.enabled').click()

        cy.get('#firstName').should('be.visible').type('Juan')
        cy.get('#lastName').should('be.visible').type('Mateo')
        cy.get('#userEmail').should('be.visible').type('Juan@mateo.com')
        cy.get('#age').should('be.visible').type('23')
        cy.get('#salary').should('be.visible').type('85000')
        cy.get('#department').should('be.visible').type('Depto 789')

        cy.get('#submit').should('be.visible').should('have.text', 'Submit').should('be.enabled').click()
        
        cy.get('#searchBox').should('be.visible').type('Mateo')
        cy.wait(500)    
        cy.get('#searchBox').should('be.visible').clear() // borra el contenido del input

        //Editar un campo
        cy.get('#edit-record-4').should('be.visible').click()
        cy.wait(500)   
        cy.get('#firstName').should('be.visible').clear().type('Juanito')
        cy.wait(500)   
        cy.get('#submit').should('be.visible').should('have.text', 'Submit').should('be.enabled').click()

        //Eliminar un campo
        cy.get('#delete-record-4').should('be.visible').click()
        



    });
    
});