# bulder
FROM node:alpine AS builder

WORKDIR /app

COPY ./package.json ./yarn.lock ./tsconfig.json ./
RUN yarn

COPY ./src/migration ./src/migration
RUN yarn build

# runner
FROM node:alpine

RUN addgroup -S migration-group && adduser -S migration-user -G migration-group
USER migration-user

WORKDIR /app

COPY --chown=node-app:node-group --from=builder ./app ./
CMD yarn migration