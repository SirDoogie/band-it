FROM ruby:2.5.3-stretch

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

RUN mkdir /backend
WORKDIR /backend

ADD Gemfile Gemfile.lock /backend/

RUN bundle install

ADD . .