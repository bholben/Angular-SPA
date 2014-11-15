'use strict';

var ENV = 'prod';

var SRC = 'src',
    srcBower = SRC + '/bower_components/**/*.*',
    srcIndex = SRC + '/index.jade';

// Destination environment: 'dev' or 'prod'.  This name must match with the
// 'overrides' properties in bower.json.
// Compile to the 'build' dir for 'dev' environment.
// Compile to the 'dist' dir for 'prod' environment.
// Compile to the 'dist-cdn' dir for 'cdn' environment.
var dest;
if (ENV === 'cdn') { dest = 'dist-cdn';
} else if (ENV === 'prod') { dest = 'dist';
} else { dest = 'dev';
}
var destBower = dest + '/lib/*.*';

module.exports = {
  env: ENV,
  isDev: ENV === 'dev',
  src : {
    root:       SRC,
    bower:      srcBower,
    assets:     SRC + '/assets/**/*.*',
    index:      srcIndex,
    cssMaster:  SRC + '/styles/css_master.styl',
    jade:      [SRC + '/**/*.jade', '!' + srcIndex],
    stylus:     SRC + '/styles/*.styl',
    js:        [SRC + '/**/*.js',   '!' + srcBower]
  },
  dest: {
    root:      dest,
    fonts:     dest + '/fonts',
    img:       dest + '/img',
    lib:       dest + '/lib',
    bower:     dest + '/lib/*.*',
    custom:   [dest + '/**/*.*', '!' + destBower],
    any:       dest + '/**'
  }
};

