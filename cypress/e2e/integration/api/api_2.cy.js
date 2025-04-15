/// <reference types="cypress" />
//import 'cypress-file-upload';

require('cypress-xpath');
require('cypress-plugin-tab');
require('@4tw/cypress-drag-drop');


describe('pruebas de api 4', () => {

    it('prueba API 4', function () {

        const datos = {
            "Nombre": "Juan",
            "Apellido": "Pérez",
            "Edad": 30,
            "Ciudad": "Madrid",
            "Pais": "España",
            "Cursos": [{
                "Nombre": "JavaScript",
                "Descripcion": "Curso de JavaScript",
            },
            {
                "Nombre": "Python",
                "Descripcion": "Curso de Python",
            },
            {
                "Nombre": "Java",
                "Descripcion": "Curso de Java",
            }]
        }
        cy.log(datos["Nombre"])
        cy.log(datos["Apellido"])
        cy.log(datos["Edad"])
        cy.log(datos["Ciudad"])
        cy.log(datos["Pais"])
        cy.log(datos.Nombre)
        cy.log(datos.Apellido)
        cy.log("---------------")
        cy.log(datos.Cursos)
        cy.log(datos.Cursos[1])
        cy.log(datos.Cursos[2].Descripcion)
       
    })

});