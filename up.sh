#!/bin/sh

docker compose up --build --force-recreate --remove-orphans
# docker stats