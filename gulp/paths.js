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
    cssMaster:    SRC + '/styles/css_master.styl',
    jade:        [SRC + '/**/*.jade', '!' + SRC + '/index.jade'],
    stylus:       SRC + '/styles/*.styl',
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
    uncssCustom: dest + '/app.css'
  }
};

