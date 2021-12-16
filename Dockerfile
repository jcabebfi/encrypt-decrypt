FROM node:10-alpine
WORKDIR /usr/src

RUN npm install

COPY . .

CMD ["npm","start"]