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
    it("Each DOS - hace click en un producto", () => {
        cy.visit("http://www.automationpractice.pl/index.php?id_category=3&controller=category");

        cy.get('.product-container .product-name').each(($el, index) => {
            if ($el.text().includes('Blouse')) {
                //cy.get('.product-container .product-name').eq(index).click()
                cy.wrap($el).click() //Es lo mismo de arriba pero mejor
            }
        })

    })



    it("Each TRES - Poner en la cesta productos con each", () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
    
        // Obtener la lista de productos una sola vez
        cy.get('[data-test="inventory-item-name"]').then(($products) => {
            // Iterar usando índice en lugar de .each()
            for (let index = 0; index < $products.length; index++) {
                // Re-seleccionar los productos en cada iteración
                cy.get('[data-test="inventory-item-name"]').eq(index).click();
                cy.get('[data-test="add-to-cart"]').click();
                cy.get('[data-test="shopping-cart-badge"]').should('contain.text', index + 1);
                cy.get('[data-test="back-to-products"]').click();
            }
        });
    });
    

});
