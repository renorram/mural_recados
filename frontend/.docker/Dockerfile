FROM node:15-alpine AS base

WORKDIR /usr/app

USER node

EXPOSE 3000
EXPOSE 3001

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["yarn", "start"]
