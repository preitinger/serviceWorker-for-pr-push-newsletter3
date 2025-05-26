#!/bin/sh

pwd

project=$1
version=$2

if [ "${project}" = "" -o "${version}" = "" ]
then
    echo "usage: $0 <project> <version>"
    echo "       for example: $0 pr-scheduler 35"
    exit 1
fi

if echo "${project}" | grep '[''"]'
then
    echo "project ${project} contains ' or \"" && false 
fi &&

cd $(dirname $0) &&
(
    echo "export const PROJECT: string = '${project}'"
    echo "export const VERSION: number = ${version}"
) >generated/version.ts &&

echo "       $0      -   The End." ||
( echo "       $0      -   ERROR." && false )
