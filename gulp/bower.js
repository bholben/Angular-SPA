'use strict';

// TODO:
  //  - Update bower.json overrides.
  //  - Use CDN links for production (gulp-cdnizer?).

var gulp = require('gulp'),
    bower = require('main-bower-files'),
    $ = require('gulp-load-plugins')({ lazy: false });

var paths = require('./paths.js');

module.exports = {

  copyBower: function () {
    var filterFonts = $.filter('**/*.{ttf,woff,eof,svg}'),
        filterImg   = $.filter('**/*.{png,jpg,gif}'),
        filterOther = $.filter('**/*.{css,js,map}');

    return function () {
      return gulp.src(bower({env: paths.env}))

        .pipe(filterFonts)
        .pipe(gulp.dest(paths.dest.fonts))
        .pipe(filterFonts.restore())

        .pipe(filterImg)
        .pipe(gulp.dest(paths.dest.img))
        .pipe(filterImg.restore())

        .pipe(filterOther)
        // .pipe($.sourcemaps.init())
        .pipe(gulp.dest(paths.dest.lib))
        // .pipe($.sourcemaps.write())
        .pipe(filterOther.restore());

    };
  }
};

