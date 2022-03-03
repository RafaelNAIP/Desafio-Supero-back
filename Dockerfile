FROM node:17.6-alpine3.14

WORKDIR /app/challenge

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

COPY package.json .

RUN npm install
RUN npm install typescript -g

COPY . .

RUN npm run build

CMD /wait && npm run start

EXPOSE 3333