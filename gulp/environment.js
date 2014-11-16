'use strict';

var ENVIRONMENT = 'dev';  // 'dev'  ==> compiles to: 'build'
                          // 'prod' ==> compiles to: 'dist'
                          // 'cdn'  ==> compiles to: 'dist' with CDN links

module.exports = ENVIRONMENT;

