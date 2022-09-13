---
author: Trian Damai
title: Docker compose mysql,phpmyadmin
description: Docker compose phpmyadmin setup for mysql rdbms.
slug: docker-compose-mysql-phpmyadmin
createdAt: 2022-09-13 09:22
updatedAt: 2022-09-13 09:22
image: https://source.unsplash.com/INHtWKpBTsA/1600x900
tags:
    - MYSQL
    - Docker
    - PHPMYADMIN
prev_title: Mengenal Jetpack compose
prev_link: /article/2021-12-20-mengenal-jetpack-compose
next_title: Lazy Column & Lazy Grid
next_link: /article/2021-12-24-lazygrid-dalam-lazycoumn
---

```yml{1}[docker-compose.yml]
version: '3'

services:
  # Database
  db:
    image: mysql:8
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: <YOUR DATABASE ROOT PASSWORD>
      MYSQL_DATABASE: <YOUR DATABASE NAME>
      MYSQL_USER: <YOUR USER>
      MYSQL_PASSWORD: <YOUR MYSQL PASSWORD>
    ports:
      - '3306:3306'
    networks:
      - wpsite
  # phpmyadmin
  phpmyadmin:
    depends_on:
      - db
    image: phpmyadmin/phpmyadmin
    restart: always
    ports:
      - '8080:80'
    environment:
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: <YOUR DATABASE ROOT PASSWORD>
    networks:
      - wpsite
networks:
  wpsite:
volumes:
  db_data:

```