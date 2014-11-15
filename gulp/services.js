'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync');

var paths = require('./paths.js'),
    build = require('./build.js'),
    inject = require('./inject.js');

var services = {

  watchFiles: function () {
    // Watch paths need to be relative for new/deleted file detection.
    gulp.watch(paths.src.stylus, build.buildCSS());
    gulp.watch(paths.src.js, build.buildJS());
    gulp.watch(paths.src.jade, build.buildHTML());
    gulp.watch(paths.src.index, inject.injectIndex);
  },

  serve: function () {
    // index.html must be in 'baseDir'.
    // Changes in 'files' get a live reload.
    browserSync({
      server: {baseDir: paths.dest.root},
      port: 8088,
      files: paths.dest.any
    });
  }
};

module.exports = services;

