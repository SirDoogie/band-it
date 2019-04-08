FROM node:10.15-stretch

ARG APP_PATH

RUN apt-get update -qq
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get install -qq -y yarn

RUN mkdir -p ${APP_PATH}/frontend
WORKDIR ${APP_PATH}/frontend

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install
