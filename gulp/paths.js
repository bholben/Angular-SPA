'use strict';

var ENV = require('./environment.js');

var SRC  = 'src',
    env  = (ENV === 'prod' || ENV === 'cdn') ? 'prod' : 'dev',
    dest = (env === 'dev') ? 'build' : 'dist';

module.exports = {
  env: env,
  isDev: env === 'dev',
  isCDN: ENV === 'cdn',
  src : {
    root:         SRC,
    bower:        SRC + '/bower_components/**/*.*',
    assets:       SRC + '/assets/**',
    index:        SRC + '/index.jade',
    jade:        [SRC + '/**/*.jade', '!' + SRC + '/components/main_*/*.jade', '!' + SRC + '/index.jade'],
    jadeWatch:    SRC + '/**/*.jade',
    stylus:       SRC + '/styles/index.styl',
    stylusWatch:  SRC + '/styles/**/*.styl',
    js:          [SRC + '/**/*.js',   '!' + SRC + '/bower_components/**/*.*']
  },
  dest: {
    root:        dest,
    all:        ['build', 'dist'],
    fonts:       dest + '/fonts',
    img:         dest + '/img',
    lib:         dest + '/lib',
    bower:       dest + '/lib/*.*',
    custom:     [dest + '/**/*.*', '!' + dest + '/lib/*.*', '!' + dest + '/fonts/**', '!' + dest + '/img/**'],
    any:         dest + '/**',
    uncssHTML:   dest + '/**/*.html',
    uncssBower:  dest + '/lib/*.css',
    uncssCSSMap: dest + '/lib/*.css.map',
    uncssCustom: dest + '/app.css'
  }
};

