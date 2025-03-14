/// <reference types="cypress" />
require('cypress-xpath');


describe("Select Menu", () => {

    it("Pruebas con Select de un Dropdown", () => {
        cy.visit("https://demoqa.com/select-menu")

        // cy.get('#withOptGroup')
        cy.get('#oldSelectMenu').invoke('attr', 'size', '10');
        cy.get('select[id*="oldSelectMenu"]').should('be.visible').select("Green").should('have.value', '2')
        cy.get('select[id*="oldSelectMenu"]').should('be.visible').select("Magenta").should('have.value', '9')

    });


    it("Pruebas con Select con autocompletado", () => {
        cy.visit("https://google.com")
        cy.get('[name="q"]').should('be.visible').type('ferrari{enter}')
        // cy.get('#withOptGroup')


    });

    it("Pruebas con MultiSelect", () => {
        cy.visit("https://demoqa.com/select-menu")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(500)

        cy.get('#cars')
            .should('be.visible')
            .select(['Volvo', 'Opel', 'Audi'])
            .should(($el) => {
                expect($el.val()).to.deep.equal(['volvo', 'opel', 'audi']); // Comparación correcta del array
            });
    });


    it.only("Pruebas con MultiSelect con promesa then", () => {
        cy.visit("https://demoqa.com/select-menu")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(500)

        cy.get('#cars').should('be.visible').select(['Volvo', 'Opel', 'Audi']).then(() => {
            cy.get('#selectOne').click();
        });
        
        const expectedText = ['Dr.', 'Mr.', 'Mrs.', 'Ms.', 'Prof.', 'Other'];

        cy.get('[id*="react-select-3-option-"]').each(($el, index) => {
            cy.wrap($el).should('have.text', expectedText[index]);
        });
    });



});