#!/bin/sh

imageName='moyunchen/youtube_down:lastest'

echo username:${USERNAME},password:${PASSWORD}

docker login -u ${USERNAME} -p ${PASSWORD}

docker build -t ${imageName} .

docker push ${imageName} 