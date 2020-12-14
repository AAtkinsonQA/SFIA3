#! /bin/bash

rm -rf SFIA3
git clone --branch JenkinsTest https://github.com/qatrainingjaguila/SFIA3.git

testmc() {
    cd SFIA3/MicroServices/$1
    mvn test
    cd ../..
}

testmc create
testmc get
testmc getSingle
testmc delete
testmc update
