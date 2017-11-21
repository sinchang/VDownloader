#!/bin/sh
npm run build
zip -r file.zip ./build/*
