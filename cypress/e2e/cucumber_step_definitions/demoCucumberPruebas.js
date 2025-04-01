import { Given, And, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given ('Abrir el navegador principal', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.title().should('eq', 'DEMOQA')
})

When ('cargamos el nombre {word}', (Name) => {
    cy.tipear_texto_visible('#userName', Name);
})

When ('cargamos el email {word}', (Mail) => {
    cy.tipear_texto_visible('#userEmail', Mail);
})

When ('cargamos la direccion {word} {word}', (dir1, dir2) => {
    cy.tipear_texto_visible('#currentAddress', dir1);
    cy.tipear_texto_visible('#permanentAddress', dir2);
    
})

When ('click en boton', () => {
    cy.get('#submit').click(); 
})

Then ('validar que {word} fue cargada', (Name) => {
 // Validaciones
 cy.get('#output').should('be.visible');
 cy.get('#name').should('contain', Name); 
})





