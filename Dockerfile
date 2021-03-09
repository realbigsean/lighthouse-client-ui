FROM node:15.10-buster-slim
RUN mkdir -p /lighthouse-client-ui
WORKDIR /lighthouse-client-ui
ADD . /lighthouse-client-ui
RUN apt-get update && \
    apt-get install -y g++ make python && \
    yarn
CMD ["yarn", "start"]
EXPOSE 3000