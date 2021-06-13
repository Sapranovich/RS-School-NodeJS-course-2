FROM node:14.17

WORKDIR /

COPY package*.json .

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD [ "node", "build/server.js" ]
