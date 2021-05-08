FROM node:current-alpine3.13

WORKDIR /app

COPY . .

RUN npm install --production

EXPOSE 3001

CMD ["node", "./src/app"]
