/// <reference types="cypress" />
//import 'cypress-file-upload';

require('cypress-xpath');
require('cypress-plugin-tab');
require('@4tw/cypress-drag-drop');


describe('pruebas de api 1', () => {

    it('prueba API 1', function () {
        
        const datos = {
            "Nombre" : "Juan",
            "Apellido" : "Pérez",
            "Edad" : 30,
            "Ciudad" : "Madrid",
            "Pais" : "España"
        }
        cy.log(datos["Nombre"])
        cy.log(datos["Apellido"])
        cy.log(datos["Edad"])
        cy.log(datos["Ciudad"])
        cy.log(datos["Pais"])
        
    })

});