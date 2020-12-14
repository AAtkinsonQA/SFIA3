#! /bin/bash

rm -rf SFIA3
git clone --branch backend xxxx.git

testmc() {
    cd SFIA3/$1
    mvn test
    cd ..
}

testmc create
testmc get
testmc getSingle
testmc delete
testmc update