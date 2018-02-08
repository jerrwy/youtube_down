#!/bin/sh

tag="$(date +%Y%m%d%H%M%S)"

imageName='moyunchen/youtube_down:'${tag}

echo user:$1,password:$2

docker login -u $1 -p $2

docker build -t ${imageName} .

docker push ${imageName}