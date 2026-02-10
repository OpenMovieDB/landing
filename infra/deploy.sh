#!/bin/bash

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}=====================================${NC}"
echo -e "${GREEN}  OpenMovieAPI - Kubernetes Deployment${NC}"
echo -e "${GREEN}=====================================${NC}"
echo ""

if ! command -v kubectl &> /dev/null; then
    echo -e "${RED}❌ kubectl не установлен${NC}"
    exit 1
fi

wait_for_deployment() {
    local deployment=$1
    local namespace=$2
    echo -e "${YELLOW}⏳ Ожидание готовности deployment ${deployment}...${NC}"
    kubectl rollout status deployment/${deployment} -n ${namespace} --timeout=5m
    echo -e "${GREEN}✅ Deployment ${deployment} готов${NC}"
}

echo -e "${YELLOW}📦 Деплой openmovieapi.dev${NC}"
echo ""

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml

wait_for_deployment "omdb-landing" "kinopoisk"

echo ""
echo -e "${GREEN}✅ Деплой завершен!${NC}"
echo ""

echo -e "${YELLOW}📊 Статус ресурсов:${NC}"
echo ""
echo "Pods:"
kubectl get pods -n kinopoisk -l app=omdb-landing
echo ""
echo "Services:"
kubectl get svc -n kinopoisk | grep -E "NAME|omdb"
echo ""
echo "Ingresses:"
kubectl get ingress -n kinopoisk | grep -E "NAME|omdb"
echo ""
