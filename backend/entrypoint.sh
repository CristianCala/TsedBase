#!/bin/sh

yarn typeorm migration:run -d src/datasources/PostgresDatasource.ts

yarn dev;
