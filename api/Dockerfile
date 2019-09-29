FROM mhart/alpine-node:12.11 AS builder
# The Dockerfile's author
LABEL Aaron Thomas
# Install patches and add bash
RUN apk update && apk upgrade && apk add bash

ARG PACKAGE_PATH=
ARG WORKING_DIR=/src
WORKDIR $WORKING_DIR

COPY $PACKAGE_PATH/package.json $WORKING_DIR/package.json
COPY $PACKAGE_PATH/yarn.lock $WORKING_DIR/yarn.lock


COPY . /src

RUN yarn
# Our Nginx container will forward HTTP traffic to containers of 
# this image via port 3000. For this, 3000 needs to be 'open'.
# EXPOSE 3000

VOLUME $WORKING_DIR/node_modules
CMD [ "yarn", "dev" ]