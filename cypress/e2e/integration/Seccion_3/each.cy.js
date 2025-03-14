/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');


describe("Bucles For y Each", () => {

    it("For uno", () => {
        for (let i = 1; i <= 10; i++) {
            cy.log("Lea " + i)
        }
    });

    it("For dos", () => {
        for (let i = 1; i <= 10; i++) {
            let x = 5
            cy.log(x + " x " + i + " = " + i * x)
        }
    });

    it("Each UNO - loguea nombres de productos con $el.text()", () => {
        cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category");

        cy.get('.product-container .product-name').each(($el, index) => {
            cy.log(index + " - " + $el.text())
            console.log(index + " - " + $el.text().trim()); // Imprime en consola con saltos de línea       
        })

    })
    it.only("Each DOS - hace click en un producto", () => {
        cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category");

        cy.get('.product-container .product-name').each(($el, index) => {
            if ($el.text().trim() === 'Printed Chiffon Dress') {
                cy.get('.product-container .product-name').eq(index).click()
            }
        })

    })
});
