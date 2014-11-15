'use strict';

// TODO:
  //  - Is memory leak issue real (bower injection)?

var gulp = require('gulp'),
    order = require('gulp-order'),
    inject = require('gulp-inject'),
    jade = require('gulp-jade');

var paths = require('./paths.js');

module.exports = {

  injectIndex: function () {
    // 'ignorePath' removes this string from the injected path.
    // 'name' must match the injection call in the template.
    var bowerOrder = order(['**jquery**', '**bootstrap**']);
    return gulp.src(paths.src.index())
      .pipe(inject(  // Inject bower files.
        gulp.src(paths.dest.bower(paths.env), {read: false}).pipe(bowerOrder),
        {ignorePath: paths.dest.root(paths.env), name: 'components'}))
      .pipe(inject(  // Inject custom files.
        gulp.src(paths.dest.custom(paths.env), {read: false}),
        {ignorePath: paths.dest.root(paths.env), name: 'app'}))
      .pipe(jade({pretty: true}))
      .pipe(gulp.dest(paths.dest.root(paths.env)));
  },
};

