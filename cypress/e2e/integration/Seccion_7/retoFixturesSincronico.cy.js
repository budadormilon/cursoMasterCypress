/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');


describe('Carga de datos mediante fixtures - Un test por elemento', () => {
    const tiempo = 500;

    // Cargamos el fixture de forma síncrona
    const datosFixture = require('../../../fixtures/retoFixtures/MOCK_DATA.json');

    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'DEMOQA');
        cy.wait(tiempo);
    });

    // Generamos los tests dinámicamente
    datosFixture.forEach((elemento, index) => {
        it.only(`Test case #${index + 1}: Carga datos del elemento ${index + 1}`, () => {
            cy.tipear_texto_visible('#userName', elemento.nombre);
            cy.tipear_texto_visible('#userEmail', elemento.email);
            cy.tipear_texto_visible('#currentAddress', elemento.direccionUno);
            cy.tipear_texto_visible('#permanentAddress', elemento.direccionDos);

            cy.get('#submit').click();

            // Validaciones
            cy.get('#output').should('be.visible');
            cy.get('#name').should('contain', elemento.nombre);
        });
    });


});