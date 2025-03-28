/// <reference types="cypress" />
require('cypress-xpath');


describe("Tipos de selectores", () => {

    it("Selector por ID", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA') 
        cy.wait(500)

        cy.get('#userName').should('be.visible').type('Juanito ID') 
    });

    it("Selector por Atributos", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA') 
        cy.wait(500)

        cy.get("[placeholder='Full Name']").should('be.visible').type('Juanito placeholder') 
    });
    
    it("Selector por XPath", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA') 
        cy.wait(500)

        cy.xpath("//*[@id='userName']").should('be.visible').type('Juanito xpath') 
        cy.get('input[type="email"]').should('be.visible').type('Juanito@xpath.com') 
        cy.xpath("(//textarea[@rows='5'])[1]").should('be.visible').type('Direccion xpath') 
    });

    it("Selector por Contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'DEMOQA') 
        cy.wait(500)

        cy.get('label:contains("Female")').should('be.visible').click()
        cy.wait(500)
        cy.get('.custom-control-label:contains("Male")').should('be.visible').click()

        cy.wait(500)
        cy.get('.custom-control-label').contains("Other").should('be.visible').click()

        cy.wait(1500)
        cy.get('.custom-control:contains("Male") > input').click({ force: true })

    });


    it("Selector por Copy Selector", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'DEMOQA') 
        cy.wait(500)

       cy.get('#userNumber').should('be.visible').type("1234567890") 

       //Otros selectores
       //   '[id*="wrapper"]:contains("Email") input'
       //   '[id*="wrapper"]:contains("Name") input[placeholder="First Name"]'
       //   'input[placeholder="Last Name"]'

       // condicionantes or y and en xpath
       //   //button[@type='submit' or @id='submit']
       //   //button[@type='submit' and @id='submit']   

       // xpath por texto
       //   //h1[text()='Practice Form']
       //   //div[text()='Book Store Application']

       //xpath por contains
       //   //span[contains(text(),'Box')]    //Trae todos los elementos span que contengan la palabra Box 
       });
});

