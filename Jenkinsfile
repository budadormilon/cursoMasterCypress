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
                        //bat 'npm update'                       
                        bat 'npx cypress run --record --key 7bccb50b-edbe-4314-93e1-013e65dd8e45 --spec cypress/e2e/integration/Seccion_1/ --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agente2_2"
                    }
                    steps {
                        git credentialsId: '36861a3f-3c8e-4a5e-a689-a2e495dfd85c', branch: 'main' , url: 'https://github.com/budadormilon/cursoMasterCypress.git'                        
                        bat 'npm install'
                        //bat 'npm update'                       
                        bat 'npx cypress run --record --key 7bccb50b-edbe-4314-93e1-013e65dd8e45 --spec cypress/e2e/integration/Seccion_1/ --parallel'                   
                    }
                }

               stage('Slave 3') {
                    agent {
                        label "Agente2_3"
                    }
                    steps {
                        git credentialsId: '36861a3f-3c8e-4a5e-a689-a2e495dfd85c', branch: 'main' , url: 'https://github.com/budadormilon/cursoMasterCypress.git'                        
                        bat 'npm install'
                       // bat 'npm update'                       
                        bat 'npx cypress run --record --key 7bccb50b-edbe-4314-93e1-013e65dd8e45 --spec cypress/e2e/integration/Seccion_1/ --parallel'                    
                    }
                }
                stage('Slave 4') {
                    agent {
                        label "Agente2_4"
                    }
                    steps {
                        git credentialsId: '36861a3f-3c8e-4a5e-a689-a2e495dfd85c', branch: 'main' , url: 'https://github.com/budadormilon/cursoMasterCypress.git'                        
                        bat 'npm install'
                        //bat 'npm update'                       
                        bat 'npx cypress run --record --key 7bccb50b-edbe-4314-93e1-013e65dd8e45 --spec cypress/e2e/integration/Seccion_1/ --parallel'
                    
                    }
                }

                
   
                  
            }

             
        }

    }
            
}