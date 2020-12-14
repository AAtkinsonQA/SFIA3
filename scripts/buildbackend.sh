#! /bin/bash

rm -rf SFIA3
git clone --branch backend xxxx.git
cd SFIA3

buildpush() {
    cd $1
    docker build -t nexus-IP:repo-port/sfia3-$1:latest .
    docker push nexus-IP:repo-port/sfia3-$1:latest
    cd ..
}
 
buildpush create 
buildpush get
buildpush getSingle
buildpush delete
buildpush update