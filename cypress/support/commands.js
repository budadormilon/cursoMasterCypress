// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import '@4tw/cypress-drag-drop'

Cypress.Commands.add('tipear_texto_visible', (selector, texto) => {
    cy.get(selector).should('be.visible').type(texto);
})

Cypress.Commands.add('tipear_texto_visible_xpath', (selector, texto) => {
    cy.get(selector).should('be.visible').type(texto);
})

Cypress.Commands.add('clickear', (selector) => {
    cy.get(selector).should('be.visible').click();
})

Cypress.Commands.add('clickear_force', (selector) => {
    cy.get(selector).should('be.visible').click({ force: true });
})

Cypress.Commands.add('clickear_force_xpath', (selector) => {
    cy.xpath(selector).should('be.visible').click({ force: true });
})


Cypress.Commands.add('cargar_formulario_DemoQA', (nom, ape, email, genero, tel, diaCumple, mesCumple, anoCumple, tema, hobbies, adjunto, direccion, estado, ciudad) => {
    cy.get('#firstName').should('be.visible').type(nom);
    cy.get('#lastName').should('be.visible').type(ape);
    cy.get('#userEmail').should('be.visible').type(email);
    cy.get('#genterWrapper .custom-control:contains("' + genero + '") input').click({ force: true })
    cy.get('#userNumber').should('be.visible').type(tel);
    cy.get('#dateOfBirthInput').should('be.visible').click();
    cy.get('.react-datepicker__year-select').select(anoCumple)
    cy.get('.react-datepicker__month-select').select(mesCumple)
    cy.get('.react-datepicker__day--0' + diaCumple).click()
    cy.get('.subjects-auto-complete__value-container').should('be.visible').type(tema + '{enter}');
    cy.get('#hobbiesWrapper .custom-control:contains("' + hobbies + '") input').click({ force: true });
    cy.get('input[type=file]').should('be.visible').selectFile('cypress/fixtures/imagenes/CH.jpg')
    cy.get('#currentAddress').should('be.visible').type(direccion);
    cy.get('#state').should('be.visible').click();
    cy.get('[id*=react-select-3-option-]:contains("' + estado + '")').click();
    cy.get('#city').should('be.visible').click();
    cy.get('[id*=react-select-4-option-]:contains("' + ciudad + '")').click();
})

Cypress.Commands.add('cargar_formulario_DemoQA', (nom, ape, email, genero, tel, diaCumple, mesCumple, anoCumple, tema, hobbies, adjunto, direccion, estado, ciudad) => {

    nom && cy.get('#firstName').should('be.visible').type(nom);
    ape && cy.get('#lastName').should('be.visible').type(ape);
    email && cy.get('#userEmail').should('be.visible').type(email);
    genero && cy.get('#genterWrapper .custom-control:contains("' + genero + '") input').click({ force: true })
    tel && cy.get('#userNumber').should('be.visible').type(tel);

    // Seleccion de Fecha
    diaCumple && anoCumple && mesCumple && cy.get('#dateOfBirthInput').should('be.visible').click();
    diaCumple && anoCumple && mesCumple && cy.get('.react-datepicker__year-select').select(anoCumple)
    diaCumple && anoCumple && mesCumple && cy.get('.react-datepicker__month-select').select(mesCumple)
    diaCumple && anoCumple && mesCumple && cy.get('.react-datepicker__day--0' + diaCumple).click()

    tema && cy.get('.subjects-auto-complete__value-container').should('be.visible').type(tema + '{enter}');
    hobbies && cy.get('#hobbiesWrapper .custom-control:contains("' + hobbies + '") input').click({ force: true });
    adjunto && cy.get('input[type=file]').should('be.visible').selectFile('cypress/fixtures/imagenes/' + adjunto)
    direccion && cy.get('#currentAddress').should('be.visible').type(direccion);
    cy.get('#state').should('be.visible').click();
    cy.get('[id*=react-select-3-option-]:contains("' + estado + '")').click();
    cy.get('#city').should('be.visible').click();
    cy.get('[id*=react-select-4-option-]:contains("' + ciudad + '")').click();
})

Cypress.Commands.add('verificar_carga_formulario_DemoQA', (nom, ape, email, genero, tel, diaCumple, mesCumple, anoCumple, tema, hobbies, adjunto, direccion, estado, ciudad) => {
    let arregloFormulario = [nom + " " + ape, email, genero, tel, diaCumple + " " + mesCumple + "," + anoCumple, tema, hobbies, adjunto, direccion, estado + " " + ciudad];
    for (let i = 0; i <= 9; i++) {
        if (arregloFormulario[i] != "") {
            cy.get('tbody > :nth-child(' + (i + 1) + ') > :nth-child(2)').should('contain.text', arregloFormulario[i])
        }
    }
})

Cypress.Commands.add('verificar_color_borde_dato_obligatorio', (selector) => {
    cy.get(selector).should('have.css', 'border-color', 'rgb(220, 53, 69)')
})

Cypress.Commands.add('verificar_color_texto_dato_obligatorio', (selector) => {
    cy.get(selector).should('have.css', 'color', 'rgb(220, 53, 69)')
})

Cypress.Commands.add('verificar_texto_dato_obligatorio', (selector, mensaje, nombre_campo) => {
    cy.get(selector).should('be.visible').should('contain', mensaje).then(() => {
        cy.log('######################')
        cy.log('El ' + nombre_campo + ' no es valido.')
        cy.log('######################')
    })
}
)
