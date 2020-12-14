#!/bin/bash

cd kube
# kubectl create ns pipeline
# kubectl apply -f nginx-config.yaml -n pipeline
# kubectl apply -f secret.yaml -n pipeline
# kubectl apply -f backend.yaml -f frontend.yaml -f nginx.yaml
# kubectl describe service/nginx-lb -n pipeline

kubectl rollout restart deployment/frontend -n project
kubectl rollout restart deployment/microservices -n project
kubectl apply -f nginx-conf.yaml -n project
Kubectl apply -f service-cip.yaml -f frontend-cip.yaml
kubectl describe service/nginx-loadbalancer -n project