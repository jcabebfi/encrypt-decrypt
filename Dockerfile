FROM node:10-alpine
WORKDIR /usr/src/index

RUN npm install

COPY . .

CMD ["npm","start"]