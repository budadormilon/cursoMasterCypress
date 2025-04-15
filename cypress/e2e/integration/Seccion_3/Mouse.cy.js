/// <reference types="Cypress" />
require('cypress-xpath');
import '@4tw/cypress-drag-drop';



describe("Cypress Eventos con el Mouse", () => {

    it("Mouse - Drag and Drop", () => {
        cy.visit("https://demoqa.com/droppable");
        cy.title().should('eq', 'DEMOQA')
        cy.wait(500)
        cy.get('#draggable').drag('#droppable', { force: true }).then(() => {
            cy.wait(2500)
            cy.get('#droppableExample-tab-revertable').click({ force: true })
            cy.wait(2500)
            cy.get('#notRevertable').drag('#droppable', { force: true })

            cy.get('#revertable').drag('#droppable', { force: true })
            cy.wait(5500)
        });

    });



    it("Mouse - MouseOver y MouseOut", () => {
        cy.visit("https://www.html-code-generator.com/demo/html/mouseover-image");
        //  cy.title().should('eq', 'DEMOQA')
        cy.wait(500)

        cy.xpath("//*[@id='dmo-load-msover']/img[1]").trigger('mouseover', { force: true }).should('have.attr', 'src', '/images/CSSpicture.png');
        cy.xpath("//*[@id='dmo-load-msover']/img[1]").trigger('mouseout', { force: true }).should('have.attr', 'src', '/images/HTMLpicture.png');
        cy.get('[src="/images/demo/4.jpg"]').trigger('mouseover', { force: true }).should('have.attr', 'src', '/images/demo/5.jpg');
        cy.get('[src="/images/demo/5.jpg"]').trigger('mouseout', { force: true }).should('have.attr', 'src', '/images/demo/4.jpg');
    });

    it("Mouse - Slider", () => {
        cy.visit("https://www.w3schools.com/howto/howto_js_rangeslider.asp");
        //cy.title().should('eq', 'Rangeslider - jQuery Mobile Demos')
        cy.wait(500)

        cy.get('#slidecontainer > :nth-child(2)').invoke('attr', 'value', "99")
        cy.wait(500)
        cy.get('#id2').invoke('attr', 'value', "99")
        cy.wait(500)
        cy.get('#id1').invoke('attr', 'value', "99")
        cy.wait(500)
        cy.get('#id3').invoke('attr', 'value', "0")
        cy.wait(500)
        
    });

}); 