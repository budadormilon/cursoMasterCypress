/// <reference types="cypress" />
require('cypress-xpath');


describe("Nueva seccion checkbox", () => {

    it("checkea todos los checks", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')
        cy.wait(500)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('button[type=submit]').should('be.visible').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('be.visible').click()

        cy.get('input[type="checkbox"]').check({ force: true }).should('be.checked')
        cy.wait(500)
        cy.get('input[type="checkbox"]').uncheck({ force: true }).should('not.be.checked')
        
    })


    it("checkea solo un check", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq', 'OrangeHRM')
    cy.wait(500)

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    cy.get('button[type=submit]').should('be.visible').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('be.visible').click()
    cy.get('div[role="row"]:contains("BarbaNegraBarbaBranca") input').check({ force: true })
})

    it("check complejo", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')
        cy.wait(500)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('button[type=submit]').should('be.visible').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('be.visible').click()

        cy.get('div[role="row"]:contains("FMLName") input').check({ force: true })

        let cantidadCheckboxes;

        cy.get('div[role="row"]:contains("FMLName") input')
          .then($elements => {
            cantidadCheckboxes = $elements.length;  // Guardamos la cantidad de elementos
            // Usamos cy.wrap para que esté disponible en el contexto de Cypress
            cy.get('.oxd-text:contains("(' + cantidadCheckboxes + ') Records Selected")').should('be.visible').should('have.text', '(' + cantidadCheckboxes + ') Records Selected')
        cy.wait(2500)
          });

        //cy.get('div[role="row"]:contains("FMLName1") input').check({ force: true })
       // cy.get('div[role="row"]:contains("Gia.Crist") input').check({ force: true })
        let cantidadSeleccionada = 1
        

        cy.get('.oxd-checkbox-input.oxd-checkbox-input--active')
  .parent() // Subimos al <label>
  .find('input[type="checkbox"]').as('contenedorDeCheckboxes');

        cy.get('@contenedorDeCheckboxes').then(($checkboxes) => {
          let cantidadSeleccionada = 0;
        
          cy.wrap($checkboxes).each(($el, index) => {
            if (index > 0) {
              cy.wrap($el).then(($checkbox) => {
                if ($checkbox.prop('checked')) {
                  cy.wrap($checkbox).uncheck({ force: true }).should('not.be.checked');
                } else {
                  cy.wrap($checkbox).check({ force: true }).should('be.checked');
                  cantidadSeleccionada++;
                  cy.log("cantidadSeleccionada es: "+cantidadSeleccionada);
                }
              });
            }
          });
        
          cy.then(() => {
            cy.get('.oxd-text:contains("'+cantidadSeleccionada+') Records Selected")')
              .should('be.visible')
              .should('have.text', `(${cantidadSeleccionada}) Records Selected`);
          });
        });
        
    })
})





