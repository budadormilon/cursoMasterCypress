/// <reference types="cypress" />
require('cypress-xpath');


describe("Reto con Select", () => {

    it("Referencias a Windows - propiedad charset", () => {
        cy.visit("https://testsheepnz.github.io/random-game-instructions.html");
        cy.title().should('eq', 'The Number Game - Instructions')
        cy.wait(500)

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8'); // Verifica que la propiedad charset del documento sea UTF-8
        
        //  cy.get('meta[charset]').should('have.attr', 'charset', 'UTF-8');
        //  cy.request('/').its('headers').should('include', { 'content-type': 'text/html; charset=UTF-8' });
        //  cy.contains('Término con tilde').should('be.visible');
        //  cy.get('body').should('contain', '€'); // Verifica que el símbolo de euro se muestra correctamente
        cy.title().should('not.be.empty');
        //cy.get('img').each(($img) => {cy.wrap($img).should('have.attr', 'alt').and('not.be.empty');});
        cy.get('html').should('have.attr', 'lang').and('not.be.empty');
        cy.get('html').should('have.attr', 'lang').and('not.be.empty');
        //  cy.get('button').should('be.visible').and('not.be.disabled');
        cy.get('a').each(($link) => {
            cy.wrap($link).should('have.attr', 'href').and('not.be.empty');
        });


    });

    it("Referencias a Windows - validar URL", () => {
        cy.visit("https://testsheepnz.github.io/random-game-instructions.html");
        cy.title().should('eq', 'The Number Game - Instructions')
        cy.wait(500)

       cy.url().should('eq', 'https://testsheepnz.github.io/random-game-instructions.html'); //Valida que la URL sea exactamente igual
       
       cy.url().should('include', 'random-game-instructions.html'); //Verifica que la URL contenga el fragmento random-game-instructions.html. 
       //Uso: Se usa cuando no necesitas validar la URL completa, sino solo una parte (útil si la URL tiene parámetros dinámicos como tokens o IDs que pueden cambiar).

    });
});