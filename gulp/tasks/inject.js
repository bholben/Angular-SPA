'use strict';

// TODO:
  //  - Check for memory leak (bower injection)?

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({ lazy: false });

var paths = require('../paths.js');

module.exports = {

  injectIndex: function () {
    // 'ignorePath' removes this string from the injected path.
    // 'name' must match the injection call in the template.
    var bowerOrder = $.order(['**jquery**', '**bootstrap**']);
    return gulp.src(paths.src.index)
      .pipe($.inject(  // Inject bower files.
        gulp.src(paths.dest.bower, {read: false})
          .pipe(bowerOrder),
          {ignorePath: paths.dest.root, name: 'components'}))
      .pipe($.inject(  // Inject custom files.
        gulp.src(paths.dest.custom, {read: false}),
          {ignorePath: paths.dest.root, name: 'app'}))
      .pipe($.jade({pretty: true}))
      .pipe(gulp.dest(paths.dest.root))
      .pipe($.ignore.include(paths.isCDN))  // Proceeds only if CDN requested
      .pipe($.cdnizer([
        // 'file' is the string in index.html that gets replaced.
        {
          file: '/lib/jquery.min.js',
          package: 'jquery',
          test: 'window.jQuery',
          cdn: '//ajax.googleapis.com/ajax/libs/jquery/${ version }/jquery.min.js'
        },
        {
          file: '/lib/bootstrap.min.js',
          package: 'bootstrap',
          test: '$.fn.modal',
          cdn: '//maxcdn.bootstrapcdn.com/bootstrap/${ version }/js/bootstrap.min.js'
        }
      ]))
      .pipe(gulp.dest(paths.dest.root));
  },
};

