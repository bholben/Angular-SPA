'use strict';

var gulp = require('gulp'),
    del = require('del'),
    sequence = require('run-sequence');

var paths = require('./paths.js'),
    bower = require('./tasks/bower.js'),
    build = require('./tasks/build.js'),
    inject = require('./tasks/inject.js'),
    watcher = require('./tasks/watcher.js'),
    server = require('./tasks/server.js'),
    uncss = require('./tasks/uncss.js');

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

// Watch
gulp.task('watch', watcher.watchFiles);

// Serve
gulp.task('serve', function () { server.serve(); });
gulp.task('serve-dist', function () { server.serve('dist'); });

// Put it all together (keep UnCSS separate for performance)
gulp.task('default', function (cb) {
      sequence('clean', 'build', 'inject', 'watch', 'serve', cb);
    });

// UnCSS
gulp.task('uncssBower', uncss.uncssBower());
gulp.task('uncssCustom', uncss.uncssCustom());
gulp.task('uncss', function (cb) {
      sequence('uncssBower', 'uncssCustom', cb);
    });

