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
                        credentialsId: '36861a3f-3c8e-4a5e-a689-a2e495dfd85c',
                        git url: 'https://github.com/budadormilon/cursoMasterCypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --spec cypress/e2e/integration/Seccion_3/ --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agente2_2"
                    }
                    steps {
                        credentialsId: '36861a3f-3c8e-4a5e-a689-a2e495dfd85c',
                        git url: 'https://github.com/budadormilon/cursoMasterCypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --spec cypress/e2e/integration/Seccion_3/ --parallel'
                    
                    }
                }

               stage('Slave 3') {
                    agent {
                        label "Agente2_3"
                    }
                    steps {
                        credentialsId: '36861a3f-3c8e-4a5e-a689-a2e495dfd85c',
                        git url: 'https://github.com/budadormilon/cursoMasterCypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --spec cypress/e2e/integration/Seccion_3/ --parallel'
                    
                    }
                }
                stage('Slave 4') {
                    agent {
                        label "Agente2_4"
                    }
                    steps {
                        credentialsId: '36861a3f-3c8e-4a5e-a689-a2e495dfd85c',
                        git url: 'https://github.com/budadormilon/cursoMasterCypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --spec cypress/e2e/integration/Seccion_3/ --parallel'
                    
                    }
                }

                
   
                  
            }

             
        }

    }
            
}