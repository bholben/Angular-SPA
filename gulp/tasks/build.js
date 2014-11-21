'use strict';

var gulp = require('gulp'),
    nib = require('nib'),
    $ = require('gulp-load-plugins')({ lazy: false });

var paths = require('../paths.js');

module.exports = {

  copyAssets: function () {
    return function () {
      var assets = gulp.src(paths.src.assets)
        .pipe(gulp.dest(paths.dest.root));
      return assets;
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
      return gulp.src(paths.src.stylus)
        // 'nib' adds autoprefixing and some other niceties.
        .pipe($.stylus({use: nib(), compress: !paths.isDev}))
        .pipe($.if(paths.isDev, $.rename('app.css'), $.rename('app.min.css')))
        .pipe(gulp.dest(paths.dest.root));
    };
  },

  buildJS: function () {
    return function () {
      return gulp.src(paths.src.js)
        .pipe($.if(!paths.isDev, $.uglify({preserveComments: 'some'})))
        .pipe($.if(!paths.isDev, $.rename({extname: '.min.js'})))
        .pipe(gulp.dest(paths.dest.root));
    };
  }

};

