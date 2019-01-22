FROM node:10.15-stretch

RUN apt-get update -qq
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN mkdir -p /frontend

COPY ./package.json /frontend/package.json
COPY ./yarn.lock /frontend/yarn.lock

#RUN useradd -m -s /bin/bash -u 1000 astral
#USER astral

WORKDIR /frontend

RUN yarn install
