FROM ruby:2.5.3-stretch

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev
RUN useradd --create-home -s /bin/bash astral

RUN mkdir -p /home/astral/backend

WORKDIR /home/astral/backend

COPY ./Gemfile /home/astral/backend/Gemfile
COPY ./Gemfile.lock /home/astral/backend/Gemfile.lock
#RUN gem install bundler
ENV BUNDLE_PATH /home/astral/bundle
ENV GEM_HOME=/home/astral/bundle
ENV PATH $GEM_HOME/bin:$GEM_HOME/gems/bin:$PATH

RUN bundle install

RUN chown -R astral:astral /home/astral
USER astral