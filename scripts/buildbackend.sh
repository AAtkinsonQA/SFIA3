#! /bin/bash

rm -rf SFIA3
git clone --branch JenkinsTest https://github.com/qatrainingjaguila/SFIA3.git
cd SFIA3

buildpush() {
    cd MicroServices/$1
    sudo docker build -t qatrainingjaguila/sfia3-$1:latest .
    sudo docker push qatrainingjaguila/sfia3-$1:latest
    #docker build -t nexus-IP:repo-port/sfia3-$1:latest .
    #docker push nexus-IP:repo-port/sfia3-$1:latest
    cd ../..
}
 
buildpush create
buildpush get
buildpush getsingle
buildpush delete
buildpush update
