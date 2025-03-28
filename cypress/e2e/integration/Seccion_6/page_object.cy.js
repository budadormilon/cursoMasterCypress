/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');

import ProyectoUno_PO from '../../../support/PageObjects/proyectoUno_POO/proyectoUno_PO.js'
const master = new ProyectoUno_PO()

describe('Page Object Model', () => {
    
    master.visitHome()

    it('titulo', () => {
        master.cargar_formulario_DemoQA_BloqueUNO("Carlos", "Rodriguez", "email@gmail.com", "Female")
        master.cargar_formulario_DemoQA_BloqueDOS(1234567890, 17, "December", "1980", "Maths")
        master.cargar_formulario_DemoQA_BloqueTRES("Music", "CH.jpg", "Sangara 4345", "Haryana", "Panipat")
        cy.clickear("#submit")

    })

});