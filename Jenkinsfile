pipeline {
  agent any
  environment{
    NEXUS_IP = credentials('NEXUS_VM_IP')
    TESTVM_IP = credentials('TEST_VM_IP')
  }
  stages {
    stage('Run tests') {
      steps {
      sh "chmod a+x ./scripts/testscript.sh"
      sh "ssh -o StrictHostKeyChecking=no ubuntu@$TESTVM_IP < scripts/testscript.sh"
      }
      }
    stage('Build and push images') {
      steps {
      sh "chmod a+x ./scripts/buildbackend.sh"
      sh "ssh -o StrictHostKeyChecking=no ubuntu@$NEXUS_IP < scripts/buildbackend.sh"
      sh "chmod a+x ./scripts/buildfrontend.sh"
      sh "ssh -o StrictHostKeyChecking=no ubuntu@$NEXUS_IP < scripts/buildfrontend.sh"
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
