FROM php:8-fpm-alpine

RUN addgroup -g 1000 www \
    && adduser -D -u 1000 -G www www

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN apk add --no-cache --virtual .phpize-deps $PHPIZE_DEPS \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && apk del --no-network .phpize-deps

RUN apk add --no-cache postgresql-dev \
    && docker-php-ext-install opcache pdo_pgsql intl

RUN sed -i 's/www-data/www/g' /usr/local/etc/php-fpm.d/www.conf

WORKDIR /usr/app

USER www
