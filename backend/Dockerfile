FROM ruby:2.5.3-stretch

ARG USER_ID
ARG GROUP_ID

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev
RUN if [ ${USER_ID:-0} -ne 0 ] && [ ${GROUP_ID:-0} -ne 0 ]; then \
#    userdel -f astral &&\
#    if getent group astral ; then groupdel astral; fi &&\
    groupadd -g ${GROUP_ID} astral &&\
    useradd -l -u ${USER_ID} -g astral astral &&\
    install -d -m 0755 -o astral -g astral /home/astral &&\
    chown --changes --silent --no-dereference --recursive \
          --from=33:33 ${USER_ID}:${GROUP_ID} \
        /home/astral \
;fi

USER astral

RUN mkdir -p /home/astral/backend

WORKDIR /home/astral/backend

COPY ./Gemfile /home/astral/backend/Gemfile
COPY ./Gemfile.lock /home/astral/backend/Gemfile.lock
#RUN gem install bundler
ENV BUNDLE_PATH /home/astral/bundle
ENV GEM_HOME=/home/astral/bundle
ENV PATH $GEM_HOME/bin:$GEM_HOME/gems/bin:$PATH

RUN bundle install