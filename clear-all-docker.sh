#/bin/bash
# cleaner for docker

docker ps --all
docker images --all

docker rm -f $(docker ps -a -q)
docker rmi -f $(docker images -a -q)
docker builder prune