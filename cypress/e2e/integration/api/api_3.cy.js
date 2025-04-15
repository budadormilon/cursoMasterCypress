/// <reference types="cypress" />
//import 'cypress-file-upload';

require('cypress-xpath');
require('cypress-plugin-tab');
require('@4tw/cypress-drag-drop');
const { fakerES } = require('@faker-js/faker');

//import { faker } from '@faker-js/faker/locale/es_MX.js'; // Importar la localización específica






describe('APIs', () => {

    let datos;

    it('Get en comments', function () {

        //Es una manera de verificar que esta vivo (que Status devuelva 200)
        datos = cy.request("http://localhost:3000/comments")
        datos.its('status').should('eq', 200)

        // Es otra manera de verificar lo mismo (que Status devuelva 200)
        cy.request("http://localhost:3000/comments").its('status').should('eq', 200)

        // Es otra manera de verificar lo mismo (que Status devuelva 200), esta parece mas larga, pero adentro se pueden poner mas expects.
        cy.request("http://localhost:3000/comments").should((response) => {
            expect(response.status).to.eq(200)
        })

    })

    it('Get en comments 2', function () {

        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/posts',
            headers: {
                accept: 'application/json'
            }
        }).then(response => {
            let datos;
            datos = JSON.parse(JSON.stringify(response.body))

            cy.log(datos)
            cy.wait(200)
            expect(datos[1]).has.property('title', "cypress-servidor-2021")
            expect(datos[1]).has.property('author', "Leandro 2")

        })

    })


    it('POST y DELETE en metodo post', function () {

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
                "title": "Insertando un valor via Cypress",
                "author": "Leandro"
            }
        }).then(response => {
            expect(response.status).to.eq(201)
            datos = JSON.parse(JSON.stringify(response.body.id))
            cy.log('ID creado: ' + datos)

            cy.request({
                method: 'DELETE',
                url: 'http://localhost:3000/posts/' + datos,
                headers: {
                    accept: 'application/json'
                }
            }).then(response => {
                expect(response.status).to.eq(200)
                cy.log('ID eliminado: ' + datos)
            })

        })

    })

    it('Post en metodo post - Inserta múltiples registros con frases random', function () {

        
      
        for (let i = 0; i < 10; i++) {
         
            const randomTitle = fakerES.music.artist();
            const randomAuthor = fakerES.person.fullName();
          cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
              title: randomTitle,
              author: randomAuthor
            }
          }).then(response => {
            expect(response.status).to.eq(201);
            const id = response.body.id;
            cy.log(`ID creado: ${id} - ${randomTitle} / ${randomAuthor}`);
          });
        }
      });
      

      it.only('Elimina posts desde el ID 5 hasta el último', () => {
        const eliminarPost = (id) => {
          cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/posts/'+id,
            headers: {
              accept: 'application/json'
            },
            failOnStatusCode: false // ← permite continuar incluso si el DELETE falla
          }).then((response) => {
            if (response.status === 200) {
              cy.log(`✅ ID ${id} eliminado`);
              eliminarPost(id + 1); // llamada recursiva al siguiente ID
            } else {
              cy.log(`⛔ ID ${id} no existe o ya no hay más registros (Status: ${response.status})`);
            }
          });
        };
      
        eliminarPost(5); // Comenzar desde ID = 5
      });
      

});

/*
Post en comments
Get en comments
Delete en comments (x id)
Post en posts
Get en posts (x id)
Get en posts (All)
Put en posts (x id)
Delete en posts (x id)
*/