'use strict';

// TODO:
  //  - Get rid of unused CSS rules (gulp-uncss).
  //  - Convert to coffee?

var gulp = require('gulp'),
    nib = require('nib'),
    $ = require('gulp-load-plugins')({ lazy: false });

var paths = require('./paths.js');

module.exports = {

  copyAssets: function () {
    return function () {
      return gulp.src(paths.src.assets)
        .pipe(gulp.dest(paths.dest.root));
    };
  },

  buildHTML: function () {
    return function () {
      return gulp.src(paths.src.jade)
        // 'pretty' jade means uncompressed.
        .pipe($.jade({pretty: paths.isDev}))
        .pipe(gulp.dest(paths.dest.root));
    };
  },

  buildCSS: function () {
    return function () {
      return gulp.src(paths.src.cssMaster)
        // 'nib' adds autoprefixing and some other niceties.
        .pipe($.stylus({use: nib(), compress: !paths.isDev}))
        .pipe($.rename('app.css'))
        .pipe(gulp.dest(paths.dest.root));
    };
  },

  buildJS: function () {
    return function () {
      return gulp.src(paths.src.js)
        .pipe($.angularFilesort())
        .pipe($.uglify({preserveComments: 'some'}))
        .pipe(gulp.dest(paths.dest.root));
    };
  },
};

