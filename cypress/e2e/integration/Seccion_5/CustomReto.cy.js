/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');


describe('Reto Custom', () => {

    let tiempo = 500

    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(tiempo)

    });

    it('Custom formulario en Bloque y verificacion', () => {

        cy.cargar_formulario_DemoQA("Lea", "Boero", "lean.boco@gmai.com", "Female", 1234567890, "17", "December", "1980", "Maths", "Music", "CH.jpg", "Sangara 4345", "Haryana", "Panipat")
        cy.clickear("#submit")
        cy.verificar_carga_formulario_DemoQA("Lea", "Boero", "lean.boco@gmai.com", "Female", 1234567890, "17", "December", "1980", "Maths", "Music", "CH.jpg", "Sangara 4345", "Haryana", "Panipat")

    })

    it.only('Custom formulario en Bloque valida obligatorios', () => {
        cy.cargar_formulario_DemoQA("", "", "lean.boco@gmai.com", "", "", "17", "December", "1980", "Maths", "Music", "CH.jpg", "Sangara 4345", "Haryana", "Panipat")
       // cy.get('#firstName').should('be.visible').clear()
       // cy.get('#lastName').should('be.visible').clear()
       // cy.get('#genterWrapper .custom-control:contains("' + genero + '") input').clear()
        //cy.get('#userNumber').should('be.visible').clear()
        cy.clickear("#submit")
        cy.verificar_color_borde_dato_obligatorio('#firstName')
        cy.verificar_color_borde_dato_obligatorio('#lastName')
        cy.verificar_color_borde_dato_obligatorio('#userNumber')
        cy.verificar_color_texto_dato_obligatorio('.custom-control-input:invalid~.custom-control-label')




    })

});