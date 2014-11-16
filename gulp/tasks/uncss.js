'use strict';

var gulp = require('gulp'),
    glob = require('glob'),
    $ = require('gulp-load-plugins')({ lazy: false });

var paths = require('../paths.js');

module.exports = {

  uncssBower: function () {
    return function () {
      return gulp.src(paths.dest.uncssBower)
        .pipe($.ignore.exclude(paths.isDev))  // Stops here if 'dev'

        // Take inventory of the CSS selectors used in these HTML files,
        // and rip the unused selectors out of the CSS files.
        .pipe($.uncss({html: glob.sync(paths.dest.uncssHTML)}))
        .pipe($.minifyCss())
        .pipe(gulp.dest(paths.dest.lib));
    };
  },

  uncssCustom: function () {
    return function () {
      return gulp.src(paths.dest.uncssCustom)
        .pipe($.ignore.exclude(paths.isDev))  // Stops here if 'dev'

        // Take inventory of the CSS selectors used in these HTML files,
        // and rip the unused selectors out of the CSS files.
        .pipe($.uncss({html: glob.sync(paths.dest.uncssHTML)}))
        .pipe($.minifyCss())
        .pipe(gulp.dest(paths.dest.root));
    };
  }

};

