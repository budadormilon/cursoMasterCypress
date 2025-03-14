/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');


describe("Campos de tipo Fecha", () => {

    it("Fecha uno", () => {
        cy.visit("https://material.angular.io/components/datepicker/examples")
        cy.contains('.docs-example-viewer-wrapper', 'Date range picker forms integration')
            .find('.mat-mdc-form-field-icon-suffix')
            .should('be.visible')
            .should('be.visible') // Verifica que el span es visible
            .click()
    });
    it.only("Fecha uno", () => {
        cy.visit("https://ant.design/components/date-picker")
        
        cy.get('#date-picker-demo-basic >>> :nth-child(1) >>> input', {timeout:10000}).should('be.visible').type("2024-01-02").wait(200).tab()
    });
    


});