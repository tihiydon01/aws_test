#!/bin/sh

/bin/serverless offline start &
sleep 30s
node node_modules/.bin/mocha -t 25000