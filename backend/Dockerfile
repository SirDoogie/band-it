FROM ruby:2.5.3-stretch

ARG APP_PATH
ARG RAILS_ENV

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev imagemagick libmagickwand-dev
RUN echo "gem: --no-document" >> $HOME/.gemrc
RUN gem install bundler

RUN mkdir -p ${APP_PATH}/backend

COPY Gemfile ${APP_PATH}/backend/Gemfile
COPY Gemfile.lock ${APP_PATH}/backend/Gemfile.lock

ENV RAILS_ENV=${RAILS_ENV}

WORKDIR ${APP_PATH}/backend

RUN bundle install

COPY . ${APP_PATH}/backend