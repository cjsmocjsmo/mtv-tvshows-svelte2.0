#!/bin/bash

# Check if there are at least two arguments provided
if [ "$#" -ne 2 ]; then
    echo "You must enter exactly 2 arguments:\n\tarchitecture (32 or 64) and version (e.g., 0.0.1)"
    exit 1
fi

# Check if the first argument is either 32 or 64
# If not, print an error message and exit the script
if [ "$1" != "32" ] && [ "$1" != "64" ]; then
    echo "The first argument must be either 32 or 64"
    exit 1
fi

# Check if the second argument is a valid version string
# If not, print an error message and exit the script
if ! echo "$2" | grep -qE '^[0-9]+\.[0-9]+\.[0-9]+$'; then
    echo "The second argument must be a valid version string (e.g., 0.0.1)"
    exit 1
fi

echo "$1";
echo "$2";

if [ "$1" -eq 32 ]; then
    cp -pvr ./RPI/32/Dockerfile ./Dockerfile;
fi

if [ "$1" -eq 64 ]; then
    cp -pvr ./RPI/64/Dockerfile ./Dockerfile;
fi

git pull https://github.com/cjsmocjsmo/mtv-tvshows-svelte2.0.git;

# If all checks pass, print the arguments

count1=$(echo "$2" | sed 's/\.//g' )
count=$((count1+1-1))
minusone=$((count-1))

echo "Version: $2";
echo "mtvtvshowssvelte:$2";
echo "mtvtvshowssvelte$count";
echo "mtvtvshowssvelte$minusone";

if [ "$minusone" -eq 0 ]; then
    
    npm install --force;

    npm run build;

    docker build -t mtvtvshowssvelte:$2 .;
    
    docker run --name mtvtvshowssvelte1 -d -p 8091:80 mtvtvshowssvelte:$2;

    rm ./Dockerfile;

    exit 0;
fi

if [ "$minusone" -eq 1 ]; then
    # Build the Docker image

    docker stop mtvtvshowssvelte1;

    docker rm mtvtvshowssvelte1;

    npm install --force;

    npm run build;

    docker build -t mtvtvshowssvelte:$2 .;

    docker run --name mtvtvshowssvelte$count -d -p 8091:80 mtvtvshowssvelte:$2;

    rm ./Dockerfile;

    exit 0;
fi


if [ "$minusone" -gt 1 ]; then
    # Build the Docker image

    docker stop mtvtvshowssvelte$minusone;

    docker rm mtvtvshowssvelte$minusone;

    npm install --force;

    npm run build;

    docker build -t mtvtvshowssvelte:$2 .;

    docker run --name mtvtvshowssvelte$count -d -p 8091:80 mtvtvshowssvelte:$2;

    rm ./Dockerfile;

    exit 0;
fi