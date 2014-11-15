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
      return gulp.src(paths.src.assets())
        .pipe(gulp.dest(paths.dest.root(paths.env)));
    };
  },

  buildHTML: function () {
    return function () {
      return gulp.src(paths.src.jade())
        // 'pretty' jade means uncompressed.
        .pipe($.jade({pretty: true}))
        .pipe(gulp.dest(paths.dest.root(paths.env)));
    };
  },

  buildCSS: function () {
    return function () {
      return gulp.src(paths.src.cssMaster())
        // 'nib' adds autoprefixing and some other niceties.
        .pipe($.stylus({use: nib(), compress: false}))
        .pipe($.concat('app.css'))
        .pipe(gulp.dest(paths.dest.root(paths.env)));
    };
  },

  buildJS: function () {
    return function () {
      return gulp.src(paths.src.js())
        .pipe($.angularFilesort())
        .pipe($.uglify({preserveComments: 'some'}))
        .pipe(gulp.dest(paths.dest.root(paths.env)));
    };
  },
};

