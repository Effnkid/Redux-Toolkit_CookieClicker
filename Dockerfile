# syntax=docker/dockerfile:1

# start with  a base image 
FROM node:16-alpine3.16

RUN apk add --no-cache bash

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . /app

EXPOSE 3000



CMD ["npm","start"]

