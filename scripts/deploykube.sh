#!/bin/bash

cd kube

kubectl rollout restart deployment/frontend
kubectl rollout restart deployment/create
kubectl rollout restart deployment/deletecont
kubectl rollout restart deployment/getcont
kubectl rollout restart deployment/getsinglecont
kubectl rollout restart deployment/updatecont

sudo kubectl apply -f frontend.yaml -f create.yaml -f delete.yaml -f get.yaml -f getsingle.yaml -f update.yaml
sudo kubectl apply -f nginx-conf.yaml 
sudo kubectl apply -f nginx.yaml
kubectl describe service/nginx-lb
