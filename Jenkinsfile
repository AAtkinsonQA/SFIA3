pipeline {
  agent any
  stages {
    stage('Run tests') {
      steps {
      sh "chmod a+x ./scripts/testscript.sh"
      sh "ssh ubuntu@$TESTVM_IP < scripts/testscript.sh"
      }
      }
    stage('Push images to nexus') {
      steps {
      sh "chmod a+x ./scripts/buildbackend.sh"
      sh "ssh ubuntu@$NEXUS_IP < scripts/buildbackend.sh"
      sh "chmod a+x ./scripts/buildfrontend.sh"
      sh "ssh ubuntu@$NEXUS_IP < scripts/buildfrontend.sh"
      }
      }  
    stage('Deploy kubernetes') {
      steps {
      sh "chmod a+x ./scripts/deploykube.sh"
      sh "./scripts/deploykube.sh"
      }
      }
  }
}