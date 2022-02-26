FROM node:alpine as Builder

WORKDIR /foobartory

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY src ./src
COPY tsconfig.json ./tsconfig.json

RUN yarn build

FROM node:alpine

WORKDIR /foobartory

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --production=true

COPY --from=Builder /foobartory/build .

ENTRYPOINT ["node", "index.js"]
