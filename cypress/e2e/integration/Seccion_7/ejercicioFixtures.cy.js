/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');


describe('Pruebas carga por Fixture', () => {

    let tiempo = 500

    before(function () {// ← Usar Función tradicional
        cy.fixture("datos_textBox").then((datos) => {
            this.datoso = datos;
        })
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(tiempo)

    });

    it('prueba con fixture', function () { // ← Usar Función tradicional

        cy.tipear_texto_visible('#userName', this.datoso.nombre);
        cy.tipear_texto_visible('#userEmail', this.datoso.email);
        cy.tipear_texto_visible('#currentAddress', this.datoso.direccionUno);
        cy.tipear_texto_visible('#permanentAddress', this.datoso.direccionDos);

    })

});