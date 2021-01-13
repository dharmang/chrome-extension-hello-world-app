pipeline {
  agent {
    docker {
      image 'node:alpine'
    }
  }

  stages {
    stage('Build') {
      steps {
          sh 'npm install'
          sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
          echo 'Testing..'
      }
    }
    stage('Deploy') {
      steps {
          echo 'Deploying....'
      }
    }
  }
}
