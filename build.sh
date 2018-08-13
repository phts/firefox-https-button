#!/usr/bin/env bash

rm -r ./dist
mkdir -p ./dist
cd src
zip -r ../dist/https-button.xpi *
