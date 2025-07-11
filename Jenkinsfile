pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/admiregroup2025/Admire-Holidays-backend.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Restart PM2') {
            steps {
                sh 'pm2 delete admire-backend || true'
                sh 'pm2 start src/index.js --name admire-backend'
            }
        }
    }
}