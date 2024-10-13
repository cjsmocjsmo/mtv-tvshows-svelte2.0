#!/bin/bash

if ! echo "$1" | grep -qE '^[0-9]+\.[0-9]+\.[0-9]+$'; then
    echo "The second argument must be a valid version string (e.g., 0.0.1)"
    exit 1
fi

echo "$1";

arch = uname -m;

if [ "$arch" == "armv7l" ]; then
    cp -pvr ./RPI/32/Dockerfile ./Dockerfile;
elif [ "$arch" == "aarch64" ]; then
    cp -pvr ./RPI/64/Dockerfile ./Dockerfile;
elif [ "$arch" == "x86_64" ]; then
    cp -pvr ./RPI/64/Dockerfile ./Dockerfile;
fi

git pull https://github.com/cjsmocjsmo/mtv-tvshows-svelte2.0.git;

# If all checks pass, print the arguments

count1=$(echo "$1" | sed 's/\.//g' )
count=$((count1+1-1))
minusone=$((count-1))

echo "Version: $1";
echo "mtvtvshowssvelte:$1";
echo "mtvtvshowssvelte$count";
echo "mtvtvshowssvelte$minusone";

if [ "$minusone" -eq 0 ]; then
    
    npm install;

    npm run build;

    docker build -t mtvtvshowssvelte:$1 .;
    
    docker run --name mtvtvshowssvelte1 -d -p 8091:80 mtvtvshowssvelte:$1;

    rm ./Dockerfile;

    exit 0;
fi

if [ "$minusone" -eq 1 ]; then
    # Build the Docker image

    docker stop mtvtvshowssvelte1;

    docker rm mtvtvshowssvelte1;

    npm install;

    npm run build;

    docker build -t mtvtvshowssvelte:$1 .;

    docker run --name mtvtvshowssvelte$count -d -p 8091:80 mtvtvshowssvelte:$2;

    rm ./Dockerfile;

    exit 0;
fi


if [ "$minusone" -gt 1 ]; then
    # Build the Docker image

    docker stop mtvtvshowssvelte$minusone;

    docker rm mtvtvshowssvelte$minusone;

    npm install;

    npm run build;

    docker build -t mtvtvshowssvelte:$1 .;

    docker run --name mtvtvshowssvelte$count -d -p 8091:80 mtvtvshowssvelte:$1;

    rm ./Dockerfile;

    exit 0;
fi