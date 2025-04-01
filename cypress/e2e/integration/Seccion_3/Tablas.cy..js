/// <reference types="cypress" />

const { each } = require('lodash');

require('cypress-xpath');
require('cypress-plugin-tab');


describe("Elementos de una Tabla", () => {

    it.only("Tablas - Seelccionar por CHILDREN", () => {
        cy.visit("https://www.w3schools.com/howto/howto_js_filter_elements.asp");

        cy.get('#mycontainerclass').children("[onclick=\"activeFunction();filterSelection('cars')\"]").click({ force: true })

    });


    it.only("Tablas - Seelccionar por elementos EQ", () => {
        cy.visit("https://demoqa.com/buttons");

        cy.get('div > [type=button]').eq(2).should('contain', 'Click Me').click()

    });

    it("Tablas - Seelccionar por FILTER", () => {
        cy.visit("https://www.w3schools.com/howto/howto_js_filter_elements.asp");

        cy.get('button').filter(':contains("Cars")').click({ force: true }) //contains es útil para buscar un elemento que contenga un texto específico.     
    });

    it.only("Tablas - Seelccionar por FIND", () => {
        cy.visit("https://testautomationpractice.blogspot.com/#");

        cy.get('.widget-content').find('#confirmBtn').should('contain', 'Confirmation Alert').click({ force: true })
        cy.get('.widget-content').contains('Simple Alert').should('contain', 'Simple Alert').click({ force: true }) //contains es útil para buscar un elemento que contenga un texto específico.   


    });


    it.only("Tablas - Seleccionar por FIRST y LAST", () => {
        cy.visit("https://testautomationpractice.blogspot.com/#");

        cy.get('#HTML9 > .widget-content > button').first().should('contain', 'Simple Alert').click({ force: true })
        cy.get('#HTML9 > .widget-content > button').last().should('contain', 'Prompt Alert').click({ force: true })
    });

    it("Tablas - Seleccionar por NextAll", () => {
        cy.visit("https://testautomationpractice.blogspot.com/#");

        cy.get('#HTML9 > .widget-content > button').should('have.length', 3)

    });

    it("Tablas - Seleccionar elemento Padre", () => {
        cy.visit("https://testautomationpractice.blogspot.com/#");

        cy.get('#HTML9 > .widget-content > button').parent().should('have.class', 'widget-content')

    });

    it("Tablas - checkear checkboxes", () => {
        cy.visit("https://editor.datatables.net/examples/api/checkbox.html");

        cy.get('#dt-search-0').type("lo")

        cy.get('[type="checkbox"]').each(($checkbox) => {
            cy.wrap($checkbox).check().wait(400);
        });

    });

    it("Tablas - Captura datos de tabla", () => {
        cy.visit("https://editor.datatables.net/examples/api/checkbox.html");

        const datos = [];

        cy.get('[id^="row_"]') // 1. Seleccionar todas las filas

            .each((filaActual, indiceDeFila) => { // 2. Para cada fila...

                const celdas = filaActual.find('td'); // 3. Buscar todas las celdas/columnas en esta fila


                datos[indiceDeFila] = []; // 4. Crear un array vacío para esta fila en los datos


                celdas.each((indiceDeCelda, celda) => { // 5. Para cada celda en la fila...

                    datos[indiceDeFila].push(Cypress.$(celda).text().trim()); // 6. Extraer texto y agregar a la fila actual
                });
            }).then(() => {

                datos.forEach((fila, indiceFila) => { // Iterar sobre cada fila y sus columnas para mostrar el texto

                    cy.log(`Fila ${indiceFila}:`, fila.join(' | ')); // Convertir cada fila (arreglo) a un string legible
                });


                cy.window().then((win) => { // Opcional: Ver la matriz como tabla en la consola del navegador
                    win.console.table(datos);
                });
            });
    });

    it("Tablas - Captura datos y suma valores de una columna especifica de una tabla que tiene simbolo $", () => {
        cy.visit("https://tablepress.org/demo/");

        const datos = []; // 1. Array para almacenar datos
        let cantidadTd = 0; // 2. Acumulador de sumatoria
        let cantidad = 0; // 3. Contador de elementos válidos

        cy.get('#dt-length-0').select("100")

        cy.get('.row-striping td').each(($el, index) => { // 4. Selección de celdas
            datos[index] = $el.text() // 5. Almacenar texto de cada celda
        }).then(() => { // 6. Ejecutar tras completar la captura
            for (let i = 0; i < datos.length; i++) {
                cy.log(datos[i]) // 7. Mostrar cada valor en log

                if (datos[i].includes('$')) { // 8. Filtro para valores monetarios
                    const valorNumerico = parseFloat( // 9. Conversión a número
                        datos[i].replace('$', '') // 10. Eliminar símbolo monetario
                    );

                    if (!isNaN(valorNumerico)) { // 11. Validar conversión numérica
                        cantidadTd += valorNumerico; // 12. Acumular total
                        cantidad++; // 13. Contar elementos
                    }
                }
            }

            // 14. Resultados finales
            cy.log("La cantidadTd total es: " + cantidadTd);
            cy.log("La cantidad es: " + cantidad);
            cy.log("El promedio es " + cantidadTd / cantidad);

            // 15. Assertion de verificación
            expect(cantidadTd).to.be.oneOf([508.61, 41.17]);

        })
    })

    it("Tablas - Captura datos de una columna en funcion de un dato de otra columna", () => {
        cy.visit("https://tablepress.org/demo/");
        cy.get('#dt-length-0').select("100")

        let cantidadFilas;
        cy.get('.row-striping tr').then(($filas) => {
            cantidadFilas = $filas.length;
            let elemento = ""
            let tasa = 0
            //cy.log(cantidadFilas); // Esto imprimirá la cantidad de filas encontradas
            for (let i = 1; i <= cantidadFilas; i++) {

                cy.get('.row-striping > :nth-child(' + i + ') > :nth-child(3)').then(($el) => {
                    elemento = $el.text()
                    if (elemento.includes("Brazil")) {
                        cy.log("Hola")
                        cy.get('.row-striping > :nth-child(' + i + ') > :nth-child(7)').then(($fee) => {
                            tasa = $fee.text()
                            cy.log(tasa)
                        })
                    }
                });
            }
        });
    })
})



