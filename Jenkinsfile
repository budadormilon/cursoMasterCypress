pipeline {
    agent any
       
    tools {nodejs "Node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente2_1"
                    }
                    steps {
                        git credentialsId: '36861a3f-3c8e-4a5e-a689-a2e495dfd85c', branch: 'main' , url: 'https://github.com/budadormilon/cursoMasterCypress.git'                        
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --spec cypress/e2e/integration/Seccion_3/ --parallel'
                    
                    }
                }

               

             
        }

    }
            
}