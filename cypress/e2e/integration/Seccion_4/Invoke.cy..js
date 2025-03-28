/// <reference types="cypress" />
require('cypress-xpath');
require('cypress-plugin-tab');


describe("Manejo de lo funcion Invoke", () => {

    it("Uso de Invoke text", () => {
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")


        cy.get(':nth-child(3) > td').invoke("text").as('texto')
        cy.get('@texto').should('contain', 'TextArea Comment:')


        cy.get(':nth-child(2) > td').invoke("text").as('TitleName')
        cy.get('@TitleName').should('contain', 'Password:').then(() =>
            cy.get(':nth-child(2) > td > input').type("holis")
        )
    });

    it("Uso de Invoke estilos", () => {
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        cy.get(':nth-child(2) > td > input').invoke('attr', 'style', 'background-color:blue; color:red; font-size:50px;').type("Que color tiene?")
    });

    it("Uso de Invoke ocultando elemento", () => {
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        cy.wait(200)
        cy.get(':nth-child(2) > td > input').invoke('hide')
        cy.wait(200)
        cy.get(':nth-child(2) > td > input').invoke('show')
        cy.wait(200)
        cy.get(':nth-child(2) > td > input').invoke('css', 'display', 'none'); //lo oculto con css
        cy.wait(200)
        cy.get(':nth-child(2) > td > input').invoke('css', 'display', 'inline'); //lo muestro con css

    });

    it("Reto con Invoke ocultando elemento", () => {
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html")
        cy.wait(200)
        cy.get(':nth-child(2) > td').invoke('hide')
        cy.wait(200)
        cy.get(':nth-child(1) > td > input').type("Pedrito").then(() => {

            cy.get(':nth-child(2) > td').invoke('show')
            cy.wait(200)
            cy.get(':nth-child(2) > td > input').type("Gutierrez")
        })

    });

    it("Reto con Invoke verificando scr que tenga imagen", () => {
        cy.visit("https://testpages.eviltester.com/styled/index.html")
        cy.wait(200)
       
        cy.get(':nth-child(2) > .thumb > a > img').invoke('attr','src').should('include',"/images/microapps/simple-calculator-300x300.png")
    });


    it("Reto con Invoke modificando el target blank", () => {
        cy.visit("https://www.w3schools.com/tags/att_a_target.asp")
        cy.wait(200)
       
        cy.get('.w3-example > .w3-btn').invoke('removeAttr','target').click({force: true} )
    });
    
});
//×  Seccion_2/Checkboxes.cy.js               00:30        3        2        1  
//×  Seccion_4/Invoke.cy..js                  02:10        6        5        1 