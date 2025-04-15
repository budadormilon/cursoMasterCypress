/// <reference types="Cypress" />
require('cypress-xpath');

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




        /* ==== Generated with Cypress Studio ==== */
        cy.get('#searchBox').clear('C');
        cy.get('#searchBox').type('Cierra');
        cy.get('#basic-addon2 > span > svg').click();
        cy.get('#edit-record-1 > svg > path').click();
        cy.get('#salary').should('be.visible');
        cy.get('#salary').clear().type('50000');
        cy.get('#submit').click();
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(5)').should('have.text', '50000');
        cy.get(':nth-child(2) > .group-header > .header-wrapper').click();
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click();
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
        cy.get('#hobbies-checkbox-1').check();
        cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();
        cy.get('#gender-radio-2').check();
        cy.get('#state').click();
        //cy.get('[style="text-align:center;display:block;max-width:970px;height:auto;overflow:hidden;margin:auto"] > :nth-child(4)').click();
        //cy.get('#react-select-3-option-1').click();
        //cy.get('.css-tlfecz-indicatorContainer > .css-19bqh2r > path').click();
        cy.get('#react-select-3-option-2').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#userName-label').should('have.text', 'Name');
        cy.get('#dateOfBirthInput').should('have.value', '08 Apr 2025');
        cy.get('#currentAddress').should('have.attr', 'placeholder', 'Current Address');
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').should('have.text', 'Reading');
        cy.get(':nth-child(5) > .group-header > .header-wrapper > .header-text').click();
        cy.get(':nth-child(5) > .element-list > .menu-list > #item-0').click();
        cy.get('#demo-tab-grid').click();
        cy.get('.create-grid').click();
        cy.get('.create-grid').click();
        cy.get('.create-grid > :nth-child(5)').should('have.text', 'Five');
        /* ==== End Cypress Studio ==== */
    });
    
   

});