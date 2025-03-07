/// <reference types="cypress" />

describe("Bienvenido al curso de cypress Seccion 1", () => {

    it("Primer test -> Hola mundo", () => {
        cy.log("hola Mundo")
        cy.wait(500)
    });

    it("Segundo test -> campo name", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.get('#userName').type("Hola Mundo")
        cy.wait(500)
    });
    
});