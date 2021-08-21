# bulder
FROM node:alpine AS builder

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn

COPY ./tsconfig.json ./
COPY ./src ./src
RUN yarn build

COPY *.pem ./

# runner
FROM node:alpine

RUN addgroup -S node-group && adduser -S node-app -G node-group
USER node-app

WORKDIR /app

COPY --chown=node-app:node-group --from=builder ./app ./
CMD yarn start