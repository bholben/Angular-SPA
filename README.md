##Gulp Template

This template provides an example of a modularized [Gulp](http://gulpjs.com/) file with the following features:

* Automatic injection of CSS and JS links into your index.html with [`gulp-inject`](https://www.npmjs.org/package/gulp-inject/).
* Automatic build of your Bower dependencies with [`main-bower-files`](https://www.npmjs.org/package/main-bower-files/).
* Built in web server with live reload via [BrowserSync](http://www.browsersync.io/).  An external URL is accessible from any local device.
* Compiles [Jade](http://jade-lang.com/) into HTML.
* Compiles [Stylus](http://learnboost.github.io/stylus/) into CSS ([nib](https://www.npmjs.org/package/nib) provides autoprefixes and other handy utilities).
* Two destination options: 'dev' compiles to the 'build' directory and 'prod' compiles to the 'dist' directory.

For starters, a few popular bower dependencies are included ([jQuery](http://jquery.com/), [Bootstrap](http://getbootstrap.com/), [Font-Awesome](http://fontawesome.io/)) to give the injector something to work with.

####Installation

1. Clone the repo.
2. Run `npm install` from the command line to install the gulp development dependencies.
3. Run `bower install` from the command line to install bower dependencies.

####Post-Installation

**Running Gulp**  
You can run `gulp` to build the destination directory.  Executing `gulp` without any arguments also turns on the file watcher and webserver.  The address is currently set to `http://localhost:8088/`.  An external URL will also show up in your terminal window logs.  This is good for viewing the app on your mobile device (as long as you are on the same LAN).

**Gulp Modules**  
The gulpfile has been split into individual modules and moved under a gulp directory.  The main gulp file is located at 'gulp/index.js'.

**Development & Production Environments**  
To change from 'dev' environment to 'prod' environment, you can set the `env` variable in the 'gulp/paths.js' file.  Changing the environment will change the destination directory the next time you run `gulp`.

* The 'dev' environment compiles to the 'build' directory.
* The 'prod' environment compiles to the 'dist' directory.

**Directory Structure**  
If you want a different directory structure, simply edit the file paths that are globbed in the 'gulp/paths.js' file.

**Make it your Own**  
Don't forget to swap out the author and contact info to make it your own.  You'll need to do this in 'src/index.jade', 'package.json', and 'bower.json'.

**Gulp-inject**  
`gulp-inject` automatically converts this:

index.jade
```jade
html
  head
    title My app
    //- components:css
    //- bower installed css files will go here...
    //- endinject
    //- app:css
    //- built css files will go here...
    //- endinject
  body
    div
    //- components:js
    //- bower installed scripts will go here...
    //- endinject
    //- app:js
    //- app scripts will go here...
    //- endinject
```

...into something like this:

index.html
```html
<html>
  <head>
    <title>My app</title>
    <link rel="stylesheet" href="/lib/bower/bootstrap.css">
    <link rel="stylesheet" href="/lib/bower/font-awesome.css">
    <link rel="stylesheet" href="/app.css">
  </head>
  <body>
    <div></div>
    <script src="/lib/bower/jquery.js"></script>
    <script src="/lib/bower/bootstrap.js"></script>
    <script src="/components/user_login/user_login-controller.js"></script>
    <script src="/app.js"></script>
    <script src="/app-controller.js"></script>
  </body>
</html>
```

##Directory Structure

The initial directory structure will look like this after installing and running gulp.

**Top Level**  
```
build/
gulp/
node_modules/
src/
.bowerrc
.editorconfig
.gitignore
.jshintrc
bower.json
gulpfile.js
LICENSE
package.json
README.md

```
**Gulp Files**  
```
gulp/
  bower.js
  build.js
  index.js
  inject.js
  paths.js
  services.js
```

**Node Modules**  
```
node_modules/
  gulp
  gulp-inject
  ...
```

**Source Files**  
```
src/
  assets/
    fonts/
    icons/
    img/
  bower_components/
    bootstrap/
    jquery/
    .../
  components/
    user_login/
      user_login-controller.js
      user_login-factory.js
      user_login.jade
    .../
  img/
  styles/
    css_master.styl
    header.styl
    loading.styl
    sidebar.styl
    ...
  app-controller.js
  app.js
  index.jade
```

**Build Files**  
Inspired by [Google's best practice recommendations](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub) for AngularJS.
```
build/
  components/
    user_login/
      user_login.html
      user_login-controller.min.js
      user_login-factory.min.js
    .../
  fonts/
  img/
  lib/
    angular.js
    bootstrap.css
    font-awesome.css
    jquery.js
    ...
  app-controller.js
  app.css
  app.js
  index.html
```

The Angular dependencies are not included, but that would be a fine next step.
