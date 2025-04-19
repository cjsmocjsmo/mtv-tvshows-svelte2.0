#!/bin/bash

basepath="/home/cjsmo/mtv-tvshows-svelte2.0";
builddir="$basepath/build";

git pull https://github.com/cjsmocjsmo/mtv-tvshows-svelte2.0.git;

rm -rf $builddir;

npm install;

npm run build;

arch=$(uname -m);

if [ "$arch" = "armv7l" ]; then
    docker build -t mtvtvshowssvelte:arm32 -f ./arm32/Dockerfile .;
    docker run --name mtvtvshowssvelte1 -d -p 8091:80 mtvtvshowssvelte:arm32;
fi

if [ "$arch" = "aarch64" ]; then
    docker build -t mtvtvshowssvelte:arm64 -f ./arm64/Dockerfile .;
    docker run --name mtvtvshowssvelte1 -d -p 8091:80 mtvtvshowssvelte:arm64;
fi

if [ "$arch" = "x86_64" ]; then
    docker build -t mtvtvshowssvelte:amd64 -f ./amd64/Dockerfile .;
    docker run --name mtvtvshowssvelte1 -d -p 8091:80 mtvtvshowssvelte:amd64;
fi

if [ "$arch" = "i386" ]; then
    echo "i386 architecture not supported";
    exit 1;
fi