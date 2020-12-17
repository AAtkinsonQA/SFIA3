#! /bin/bash

rm -rf SFIA3
git clone --branch JenkinsTest https://github.com/qatrainingjaguila/SFIA3.git
cd SFIA3/MicroServices

testmc() {
    cd $1
    mvn test
    cd ..
}

testmc create
testmc get
testmc getsingle
testmc delete
testmc update
