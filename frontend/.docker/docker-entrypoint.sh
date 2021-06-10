#!/bin/sh
set -e

PATH="$PATH:$(yarn global bin)"
export PATH

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi

exec "$@"
