/// <reference types="cypress" />
require('cypress-xpath');


describe("Reto con Select", () => {

    it.only("Prueba con select Dual Listbox", () => {
        cy.visit("https://www.virtuosoft.eu/code/bootstrap-duallistbox/");
        cy.title().should('eq', 'Bootstrap Dual Listbox')
        cy.wait(500)

        const opciones = ["Option 9", "Option 11", "Option 7"];

        cy.get('#bootstrap-duallistbox-nonselected-list_duallistbox_demo2').then($select => {
            opciones.forEach(opcion => {
                cy.wrap($select).select(opcion).then(() => {
                    cy.get('.filtered button.move[title="Move selected"]').click();
                    cy.wait(500)
                })
                
            })
        });
    });



    it("Prueba con select Dual Listbox", () => {
        cy.visit("https://www.patternfly.org/components/dual-list-selector/");
        cy.title().should('eq', 'PatternFly • Dual list selector')
        cy.wait(500)

        cy.get('#pf-random-id-9 > .pf-m-available > .pf-v6-c-dual-list-selector__menu')
        .contains('Option 2').click();
      
      cy.get('#pf-random-id-9 > .pf-m-available > .pf-v6-c-dual-list-selector__menu')
        .contains('Option 3').click();    
        cy.get('#pf-random-id-9 > .pf-v6-c-dual-list-selector__controls > :nth-child(1) > .pf-v6-c-button').click();
    });


});

