FROM node:16.14-alpine
WORKDIR /usr/src/app/backend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENTRYPOINT [ "npm","start" ]