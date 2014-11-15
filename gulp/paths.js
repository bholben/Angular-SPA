'use strict';

// Destination environment: 'dev' or 'prod'.  This name must match with the
// 'overrides' properties in bower.json.
// Compile to the 'build' dir for 'dev' environment.
// Compile to the 'dist' dir for 'prod' environment.
var env = 'dev';

module.exports = {
  env: env,
  src : {
    root:      function () { return 'src'; },
    bower:     function () { return   this.root() + '/bower_components/**/*.*'; },
    assets:    function () { return   this.root() + '/assets/**/*.*'; },
    index:     function () { return   this.root() + '/index.jade'; },
    cssMaster: function () { return   this.root() + '/styles/css_master.styl'; },
    jade:      function () { return  [this.root() + '/**/*.jade', '!' + this.index()]; },
    stylus:    function () { return   this.root() + '/styles/*.styl'; },
    js:        function () { return  [this.root() + '/**/*.js',   '!' + this.bower()]; }
  },
  dest: {
    root:      function () { return (env === 'prod') ? 'dist' : 'build'; },
    fonts:     function () { return  this.root(env) + '/fonts'; },
    img:       function () { return  this.root(env) + '/img'; },
    lib:       function () { return  this.root(env) + '/lib'; },
    bower:     function () { return  this.root(env) + '/lib/*.*'; },
    custom:    function () { return [this.root(env) + '/**/*.*', '!' + this.bower(env)]; },
    any:       function () { return  this.root(env) + '/**'; }
  }
};

