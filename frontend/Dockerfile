FROM node:11.6.0-stretch

RUN apt-get update -qq
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN mkdir /frontend
WORKDIR /frontend

ADD package.json yarn.lock /frontend/

RUN yarn install

ADD . .
