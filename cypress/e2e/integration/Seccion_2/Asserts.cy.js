/// <reference types="Cypress" />
require('cypress-xpath');


describe("Practicas con Assert", () => {

    it("Prueba con Assert .CONTAINS()", () => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.title().should('eq', 'My Shop')
        cy.wait(500)

        cy.get('.menu-content').contains("Women").click();

    });

    it("Prueba con Assert .FIND()", () => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.title().should('eq', 'My Shop')
        cy.wait(500)

        cy.get('.menu-content').contains("Women").click();

        cy.get('.product-container').find('.product-name').contains('Blouse').click();
        //cy.get('.product-container').find('.product-image-container').filter("[title='Blouse']").click();
        //cy.get('.product-container').find('.product-image-container a[title="Blouse"]').click();
        //cy.get('.product-container').find('.product-image-container a').filter('[title="Blouse"]').click();
        //cy.get('.product-container').find('.product-name').filter('[title="Blouse"]').click();


    });

    it("Prueba con Assert .TEXT()", () => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.title().should('eq', 'My Shop')
        cy.wait(500)

        cy.get('.menu-content').contains("Women").click();

        cy.get('.product-container').find('.product-name').eq(2).click();

        cy.get('#product_condition').contains('New product').should('be.visible');

        cy.get('#product_condition .editable').then((e) => {
            expect(e.text()).to.eq('New product');
            if (e.text() === 'New product') {
                cy.log('Es producto nuevo');
            }
        })
    })

    it("Prueba con Assert .TEXT() con funcion SLICE()", () => {

        cy.visit("http://www.automationpractice.pl/index.php");
        cy.title().should('eq', 'My Shop')
        cy.wait(500)

        cy.get('.menu-content').contains("Women").click();

        cy.get('.product-container').find('.product-name').eq(2).click();

        cy.get('#our_price_display').then((e) => {

            let precio = parseFloat(e.text().slice(1, 3))

            expect(precio).to.eq(26);

            if (parseFloat(e.text()) > '100.00') {

                cy.log('El precio es superior a $100.00. No comprar. Precio: ' + precio);

            } else {

                cy.log('El precio es inferior a $100.00. Comprar. Precio: ' + precio);

            }
        })


    });


    it("Prueba con Assert have.text() y contain.text()", () => {

        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(500)

        cy.get('#userName').should('be.visible').type('Juanito Perez');
        cy.get('#userEmail').should('be.visible').type('Juanitoperez@gmail.com');
        cy.get('#submit').click();

        cy.get('#name').should('be.visible').should('have.text', 'Name:Juanito Perez'); // have.text() verifica el texto exacto
        cy.get('#email').should('be.visible').should('have.text', 'Email:Juanitoperez@gmail.com');

        cy.get('#name').should('be.visible').should('contain.text', 'Juanito'); // contain.text() verifica parte del texto 
        cy.get('#email').should('be.visible').should('contain.text', 'Juanitoperez@gmail.com');

    });

    it("Prueba con contain y have.value + then", () => {

        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(500)

        cy.get('#userName').should('be.visible').type('Juanito Perez');

        cy.get('#userName').should('have.value', 'Juanito Perez').then(() => { //aca verifica qe este cargado el user name para poner mail y apretar submit
            cy.get('#userEmail').should('be.visible').type('Juanitoperez@gmail.com');
            cy.get('#submit').click()
        });
        cy.get('#userName').should('contain.value', 'Juanito Pe').then(() => { //aca verifica qe este cargado el user name para poner mail y apretar submit
            cy.log('El usuario tiene el nombre medianamente correcto')
        });
    });

    it("Prueba con have.class", () => {

        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(500)

        cy.get('#userName').should('be.visible').should('have.class','form-control').type('Juanito Perez');


    });
    
    it("Prueba con have.class y la funcion and", () => {

        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(500)

        cy.get('#userName').should('be.visible').and('have.class','form-control').type('Juanito Perez');

    });

    it("Prueba con not.have.class", () => {

        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(500)

        cy.get('#userName').should('be.visible').and('not.have.class','form2-control').type('Juanito Perez');

    });

    it("Prueba con Assert length de una tabla y css", () => {

        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(500)

        cy.get('.rt-table .rt-td')
        .filter((index, el) => !el.innerHTML.includes('<span>&nbsp;</span>')) //saca los elementos vacios
        .should('have.length', 21).should('have.css', 'padding', '7px 5px');

    });

    it("Prueba con Assert contain desde inicio", () => {

        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(500)

        cy.contains("[type='button']","Submit").should('be.visible').click(); //cy.contains es útil para buscar un elemento que no tiene ID y tiene un texto específico.

    });


    
    it("Reto con Assert usando have.css e invoke", () => {

        cy.visit("https://demoqa.com/buttons")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(500)

        cy.get("[type='button']").filter(':contains("Click Me")').eq(2).click().should('be.visible').click(); //cy.contains es útil para buscar un elemento que contenga un texto específico.

        cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click').should('have.css', 'color', 'rgb(33, 37, 41)');
        cy.get('#dynamicClickMessage').invoke('text').should('eq', 'You have done a dynamic click') //invoke('text') es útil para obtener el texto de un elemento
        cy.get('#dynamicClickMessage').should('have.css', 'color', 'rgb(33, 37, 41)'); //have.css es útil para obtener el color de un elemento

    });
});
it("Reto con Assert usando invoke attr color borde", () => {

    cy.visit("https://demoqa.com/text-box")
    cy.title().should('eq', 'DEMOQA')
    cy.wait(500)

   // cy.get('#userName').invoke('attr','placeholder',"Full Name").should('be.visible').type('Juanito Perez');
    cy.get('#userName').invoke('attr','placeholder').should('contain','Full Name').then(() => {
        cy.get('#userName').invoke('attr', 'style', 'border: 2px solid red;').type('Juanito Perez').wait(2000).invoke('removeAttr', 'style');

        cy.get('#permanentAddress-label').invoke('attr', 'style', 'border: 2px solid red;').should('have.text','Permanent Address').wait(2000).invoke('removeAttr', 'style');
    })

});

