FROM ruby:2.5.3-stretch

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

RUN mkdir -p /backend

COPY ./Gemfile /backend/Gemfile
COPY ./Gemfile.lock /backend/Gemfile.lock

RUN useradd -m -s /bin/bash -u 1000 astral
USER astral

WORKDIR /backend

RUN bundle install
