FROM node:alpine as Builder

WORKDIR /foobartory

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY src ./src
COPY tsconfig.json ./tsconfig.json

RUN npm run build

FROM node:alpine

WORKDIR /foobartory

COPY package.json ./
COPY package-lock.json ./

RUN npm install --only=production

COPY --from=Builder /foobartory/build .

ENTRYPOINT ["node", "index.js"]