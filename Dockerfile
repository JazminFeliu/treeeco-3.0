FROM ubuntu:20.04

RUN apt-get update && apt-get install -y curl

#Node 16
#RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - 
#Node 14
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - 
RUN apt-get install -y nodejs

#Yarn
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | tee /usr/share/keyrings/yarnkey.gpg >/dev/null
RUN echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn

EXPOSE 80
EXPOSE 9229

CMD /bin/bash