pipeline {
    agent any

    environment {
        IMAGE_NAME = 'adhirajsingh1/jenkins-demo-pipeline'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub-credentials', url: '']) {
                    script {
                        docker.image("${IMAGE_NAME}:latest").push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Optionally deploy container...'
                // docker run -d -p 3000:3000 adhirajsingh1/jenkins-demo-pipeline:latest
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
    }
}
