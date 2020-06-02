FROM node:12.16-alpine

COPY ./data/getTransformWordList.js /usr/src/app/data/getTransformWordList.js
COPY ./core/autoComplete.js /usr/src/app/core/autoComplete.js
COPY ./index.js /usr/src/app/
COPY ./server.js /usr/src/app/
COPY ./package.json /usr/src/app/

WORKDIR /usr/src/app

VOLUME ["/usr/src/app/data", "/usr/src/app/core"]

RUN yarn install

EXPOSE 8080
CMD ["yarn", "start"]
