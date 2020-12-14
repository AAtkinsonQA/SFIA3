#!/bin/bash

cd kube
# kubectl create ns pipeline
# kubectl apply -f nginx-config.yaml -n pipeline
# kubectl apply -f secret.yaml -n pipeline
# kubectl apply -f backend.yaml -f frontend.yaml -f nginx.yaml
# kubectl describe service/nginx-lb -n pipeline

#kubectl rollout restart deployment/frontend
#kubectl rollout restart deployment/microservices
kubectl apply -f frontend.yaml -f create.yaml -f delete.yaml -f get.yaml -f getsingle.yaml -f update.yaml
kubectl apply -f nginx.yaml -f nginx.conf.yaml
kubectl describe service/nginx-lb
