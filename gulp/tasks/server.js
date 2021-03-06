'use strict';

var browserSync = require('browser-sync');

var paths = require('../paths.js');

module.exports = {

  serve: function (root) {
    // index.html must be in 'baseDir'.
    // Changes in 'files' get a live reload.
    browserSync({
      server: {baseDir: root || paths.dest.root},
      port: 8088,
      files: paths.dest.any
    });
  }
};

