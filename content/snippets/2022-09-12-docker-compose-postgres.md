---
author: Trian Damai
title: Docker compose postgresSQL
description: Docker compose PostgresSQL rdbms.
slug: docker-compose-postgressql
createdAt: 2022-09-13 09:22
updatedAt: 2022-09-13 09:22
image: https://source.unsplash.com/INHtWKpBTsA/1600x900
tags:
    - PostgresSQl
    - Docker
    - Docker Compose
prev_title: Mengenal Jetpack compose
prev_link: /article/2021-12-20-mengenal-jetpack-compose
next_title: Lazy Column & Lazy Grid
next_link: /article/2021-12-24-lazygrid-dalam-lazycoumn
---

```yml{1}[docker-compose.yml]
```yml
version: "3"

services:
  postgres:
    image: postgres:14.3
    environment:
      POSTGRES_USER: <YOUR PG USER>
      POSTGRES_PASSWORD: <YOUR PG PASWORD>
      POSTGRES_DB: <YOUR PG DATABABASE PASSWORD>
    ports:
      - "3306:5432"
    restart: always
```