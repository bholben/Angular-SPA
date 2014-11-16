'use strict';

var gulp = require('gulp'),
    del = require('del'),
    sequence = require('run-sequence');

var paths = require('./paths.js'),
    build = require('./build.js'),
    bower = require('./bower.js'),
    inject = require('./inject.js'),
    uncss = require('./uncss.js'),
    watcher = require('./watcher.js'),
    server = require('./server.js');

// Clean (delete destination directory)
gulp.task('clean', function (cb) { del(paths.dest.all, cb); });

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

// UnCSS
gulp.task('uncssBower', uncss.uncssBower());
gulp.task('uncssCustom', uncss.uncssCustom());
gulp.task('uncss', function (cb) {
      sequence('uncssBower', 'uncssCustom', cb);
    });

// Watch
gulp.task('watch', watcher.watchFiles);

// Serve
gulp.task('serve', function () { server.serve(); });

// Put it all together
gulp.task('default', function (cb) {
      sequence('clean', 'build', 'inject', 'watch', 'serve', cb);
    });

