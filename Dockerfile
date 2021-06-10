FROM node:14.17

WORKDIR /

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "node", "build/server.js" ]
