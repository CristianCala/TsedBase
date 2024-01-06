FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN apk add --no-cache bash

ENTRYPOINT ["yarn", "dev"]
