/// <reference types="cypress" />
require('cypress-xpath');


describe("Carga de Archivos", () => {

    it("Se carga Archivo (upload)", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should('eq', 'DEMOQA')
        cy.wait(500)

        cy.get('input[type=file]').should('be.visible').selectFile('cypress/fixtures/imagenes/CH.jpg')    
    });

    it.only("Se carga Archivo (upload) - Drag & Drop", () => {
        cy.visit("https://www.dragdrop.com/test");
        cy.title().should('eq', 'Test drag & drop emails and attachments - DragDrop')
        cy.wait(500)

        cy.get('#demo-upload').should('be.visible').selectFile('cypress/fixtures/imagenes/CH.jpg', {
            action: 'drag-drop'
          }) 
    });


});