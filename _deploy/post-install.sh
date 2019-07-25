#!/bin/sh

echo "-------------------- RUNNING POST INSTALL ------------------------"
mkdir public && mkdir public/images
cp -a ./src/images ./public
echo "-------------------- FINISHED POST INSTALL -----------------------"