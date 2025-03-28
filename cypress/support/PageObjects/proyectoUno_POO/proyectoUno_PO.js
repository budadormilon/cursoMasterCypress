class ProyectoUno_PO {
    visitHome() {
        beforeEach(() => {
            cy.visit('https://demoqa.com/automation-practice-form')
            cy.title().should('eq', 'DEMOQA')
            cy.wait(500)

        });
    }

    cargar_formulario_DemoQA_BloqueUNO(nom, ape, email, genero) {
        cy.get('#firstName').should('be.visible').type(nom);
        cy.get('#lastName').should('be.visible').type(ape);
        cy.get('#userEmail').should('be.visible').type(email);
        cy.get('#genterWrapper .custom-control:contains("' + genero + '") input').click({ force: true })
    }

    cargar_formulario_DemoQA_BloqueDOS(tel, diaCumple, mesCumple, anoCumple, tema) {
        cy.get('#userNumber').should('be.visible').type(tel);
        cy.get('#dateOfBirthInput').should('be.visible').click();
        cy.get('.react-datepicker__year-select').select(anoCumple)
        cy.get('.react-datepicker__month-select').select(mesCumple)
        cy.get('.react-datepicker__day--0' + diaCumple).click()
        cy.get('.subjects-auto-complete__value-container').should('be.visible').type(tema + '{enter}');
    }

    cargar_formulario_DemoQA_BloqueTRES(hobbies, adjunto, direccion, estado, ciudad) {
        cy.get('#hobbiesWrapper .custom-control:contains("' + hobbies + '") input').click({ force: true });
        cy.get('input[type=file]').should('be.visible').selectFile('cypress/fixtures/imagenes/CH.jpg')
        cy.get('#currentAddress').should('be.visible').type(direccion);
        cy.get('#state').should('be.visible').click();
        cy.get('[id*=react-select-3-option-]:contains("' + estado + '")').click();
        cy.get('#city').should('be.visible').click();
        cy.get('[id*=react-select-4-option-]:contains("' + ciudad + '")').click();
    }


}

export default ProyectoUno_PO;