# Gestform

## Requirement

This project require

- nodejs : https://nodejs.org/en/
- docker : https://www.docker.com/

PS: if you have docker, you can run this project into a devcontainer using VSCode

## Build

The current docker build could not execute yet UT while building the image please make sure UT run on your environement before building image

`npm install && npm run test`

`npm run docker:build` will build a docker image with name "gestform-front"

## Run build image

`npm run docker:run` will run into a container the image build with `npm run docker:build` on port 80
