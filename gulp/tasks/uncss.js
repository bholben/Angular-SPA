'use strict';

var gulp = require('gulp'),
    del = require('del'),
    glob = require('glob'),
    $ = require('gulp-load-plugins')({ lazy: false });

var paths = require('../paths.js');

module.exports = {

  uncssBower: function () {
    return function () {
      // Deleting CSS maps saves space, but it might send error to console.
      del(paths.dest.uncssCSSMap);
      return gulp.src(paths.dest.uncssBower)
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
        // Take inventory of the CSS selectors used in these HTML files,
        // and rip the unused selectors out of the CSS files.
        .pipe($.uncss({html: glob.sync(paths.dest.uncssHTML)}))
        .pipe($.minifyCss())
        .pipe(gulp.dest(paths.dest.root));
    };
  }

};

