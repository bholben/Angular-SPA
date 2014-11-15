'use strict';

var gulp = require('gulp'),
    del = require('del'),
    sequence = require('run-sequence');

var paths = require('./paths.js'),
    build = require('./build.js'),
    bower = require('./bower.js'),
    inject = require('./inject.js'),
    services = require('./services.js');

// Clean (delete destination directory)
gulp.task('clean', function (cb) { del(paths.dest.root, cb); });

// Build
gulp.task('build:bower', bower.copyBower())
    .task('build:assets', build.copyAssets())
    .task('build:html', build.buildHTML())
    .task('build:css', build.buildCSS())
    .task('build:js', build.buildJS())
    .task('build', ['build:assets', 'build:bower',
                    'build:html', 'build:css', 'build:js']);
// Inject
gulp.task('inject', inject.injectIndex);

// Watch
gulp.task('watch', services.watchFiles);

// Serve
gulp.task('serve', function () { services.serve(); });

// Put it all together
gulp.task('default', function (cb) {
      sequence('clean', 'build', 'inject', 'watch', 'serve', cb);
    });

