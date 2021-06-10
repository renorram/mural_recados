FROM nginx:alpine

RUN addgroup -g 1000 www \
    && adduser -D -u 1000 -G www www

COPY nginx.conf /etc/nginx/nginx.conf
COPY site.conf /etc/nginx/conf.d/default.conf
