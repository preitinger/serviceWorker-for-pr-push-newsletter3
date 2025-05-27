#!/bin/sh

pwd

project=$1
versionMain=$2
versionSub=$3

if [ "${project}" = "" -o "${versionMain}" = "" -o "${versionSub}" = "" ]
then
    echo "usage: $0 <project> <versionMain> <versionSub>"
    echo "       for example: $0 pr-scheduler 0 35"
    exit 1
fi

if echo "${project}" | grep '[''"]'
then
    echo "project ${project} contains ' or \"" && false 
fi &&

cd $(dirname $0) &&
(
    echo "import { TVersion } from '../src/submodules/pr-lib-sw-utils/sw-utils'

export const PROJECT: string = '${project}'
export const VERSION: TVersion = {
    main: ${versionMain},
    sub: ${versionSub}
}
"
    # echo "export const PROJECT: string = '${project}'"
    # echo "export const VERSION: number = ${version}"
) >generated/version.ts &&

echo "       $0      -   The End." ||
( echo "       $0      -   ERROR." && false )
