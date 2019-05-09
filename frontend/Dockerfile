FROM node:10.15-stretch

ARG APP_PATH
ARG NODE_ENV

RUN apt-get update -qq
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get install -qq -y yarn

RUN mkdir -p ${APP_PATH}/frontend

COPY package.json ${APP_PATH}/frontend
COPY yarn.lock ${APP_PATH}/frontend

ENV NODE_ENV=${NODE_ENV}

WORKDIR ${APP_PATH}/frontend

RUN yarn install

COPY . ${APP_PATH}/frontend
