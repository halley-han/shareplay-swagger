#!/bin/bash
REPOSITORY=/home/ubuntu/
TARGET= node-express-mysql-swagger
sudo pm2 kill
cd $REPOSITORY
rm -rf TARGET
mkdir TARGET
chmod 707 TARGET