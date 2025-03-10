/// <reference types="cypress" />
require('cypress-xpath');

describe("Primer Reto", () => {

    it("Probando la App", () => {
        cy.visit("https://computer-database.gatling.io/")
        cy.title().should('eq', 'Computers database')
        cy.wait(500)

        //Buscamos una computadora
        cy.get('#searchbox').should('be.visible').type('ACE')
        cy.get('#searchsubmit').should('be.visible').click()

        //Agregar una computadora
        cy.get('#add').should('be.visible').click()
        cy.get('.clearfix:contains("Computer name") input').should('be.visible').type('Apple medio pelo')
        cy.get('.clearfix:contains("Introduced") input').should('be.visible').type('2021-01-01')
        cy.get('.clearfix:contains("Discontinued") input').should('be.visible').type('2022-01-01')
        cy.get('.clearfix:contains("Company") select').should('be.visible').select("Apple Inc.").should('have.value', '1').wait(500)
        cy.wait(500)
        cy.get('.primary[type="submit"]').should('be.visible').click()

        //Verificamos mensaje de la computadora creada
        cy.get('.alert-message').should('be.visible').contains('Computer Apple medio pelo has been created')



    });

});