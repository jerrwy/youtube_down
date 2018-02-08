#!/bin/sh

tag="$(date +%Y%m%d%H%M%S)"

imageName='moyunchen/youtube_down:'${tag}

echo username:${USERNAME},password:${PASSWORD}

docker login -u ${USERNAME} -p ${PASSWORD}

docker build -t ${imageName} .

docker push ${imageName} 