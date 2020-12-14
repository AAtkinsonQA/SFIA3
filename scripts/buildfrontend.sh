#! /bin/bash

rm -rf SFIA3
git clone --branch backend xxxx.git
cd SFIA3

docker build -t nexus-IP:repo-port/sfia3-frontend:latest
docker push nexus-IP:repo-port/sfia3-frontend:latest