#!/bin/bash
REPOSITORY=/home/ubuntu/
TARGET=node-express-mysql-swagger
sudo pm2 kill
cd $REPOSITORY
chmod 777 $TARGET
cd $TARGET
npm ci
npm run setdocs
sudo pm2 start npm -- start
