##Responsive Angular SPA Template with Gulp

This template is a staring point for building a responsive AngularJS single page application (SPA).  It is heavily influenced by Elliot Hesp's [Responsive Dashboard](https://github.com/Ehesp/Responsive-Dashboard), but ported to a slightly different architecture with a few different tools.

The modularized [Gulp](http://gulpjs.com/) file includes the following features:

* Three environment options: `dev`, `prod`, `cdn`.
* Compiles to 'build' or 'dist' based on your environment setting.
* Automatic injection of CSS and JS links into your index.html with [`gulp-inject`](https://www.npmjs.org/package/gulp-inject/).  CDN links can be automatically added if your environment is set to `cdn`.
* Automatic build of your Bower dependencies with [`main-bower-files`](https://www.npmjs.org/package/main-bower-files/).
* Quick & easy web server with live reload via [BrowserSync](http://www.browsersync.io/).  An external URL is accessible from any local device.
* Potentially massive CSS file size reduction with [`gulp-uncss`](https://www.npmjs.org/package/gulp-uncss/) which eliminates unused selectors.
* Compiles [Jade](http://jade-lang.com/) into HTML.
* Compiles [Stylus](http://learnboost.github.io/stylus/) into CSS ([nib](https://www.npmjs.org/package/nib) provides autoprefixes and other handy utilities).
* All source file edits immediately compiled with `gulp.watch`.  New files are also captured.

The app references some bower packages, including:

* [Angular](https://angularjs.org/)
* [Font-Awesome](http://fontawesome.io/)

**Gulp Plugin Selection**  
At the time of this writing, none of the selected 'gulp-*' plugins have been [blacklisted](https://github.com/gulpjs/plugins/blob/master/src/blackList.json); they do appear in the [gulp registry](http://gulpjs.com/plugins/) which indicates some level of endorsement by the gulp maintainers.

##Installation

1. Clone the repo.
2. Run `npm install` from the command line to install the gulp development dependencies.
3. Run `bower install` from the command line to install bower dependencies.

##Usage

**Running Gulp**  
You can run `gulp` to build the destination directory.  Executing `gulp` without any arguments also turns on the file watcher and webserver.  The address is currently set to `http://localhost:8088/`.  An external URL will also show up in your terminal window logs.  This is good for viewing the app on your mobile device (as long as you are on the same LAN).

**Gulp Modules**  
The gulpfile has been split into individual modules and moved under a 'gulp' directory.  The main gulp file is 'gulp/index.js'.  Any gulp dependency with a 'gulp-*' name is automatically pulled into a gulp module with [`gulp-load-plugins`](https://www.npmjs.org/package/gulp-load-plugins/).

**Development & Production Environments**  
The environment can be set to `dev`, `prod`, or `cdn` by editing the 'gulp/environment.js' module.  Changing the environment will change the destination directory the next time you run `gulp`.  

* `dev` compiles to the 'build' directory.
* `prod` and `cdn` compiles to the 'dist' directory.

**Directory Structure**  
If you want a different directory structure, simply edit the file paths that are globbed in the 'gulp/paths.js' file.

**Make it your Own**  
Don't forget to swap out the author and contact info to make it your own.  You'll need to do this in 'src/index.jade', 'package.json', and 'bower.json'.

**Minified Bower Files**
The 'gulp/tasks/bower.js' module will use minifed vendor CSS and JS files if they are available.  You can tell it where to get them by adding to the `overrides` section of the 'bower.json' file under `prod`.

**uncss**  
Run `gulp uncss` as a standalone command at any time after you have a destination directory built.  This is an excellent last step before deploying; it should yield a significant size reduction of your css files.

**Tests**
No accommodations have been made for tests yet.

**Gulp-inject**  
`gulp-inject` is awesome!  It automatically converts this:

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

...into something like this (dev environment shown):

index.html
```html
<html>
  <head>
    <title>My app</title>
    <link rel="stylesheet" href="/lib/font-awesome.css">
    <link rel="stylesheet" href="/app/app.css">
  </head>
  <body>
    <div>...</div>
    <script src="/lib/angular.js"></script>
    <script src="/lib/angular-animate.js"></script>
    <script src="/lib/angular-route.js"></script>
    <script src="/app/nav/nav.factory.js"></script>
    <script src="/app/nav/nav.controller.js"></script>
    <script src="/app/app.routes.js"></script>
    <script src="/app/app.rootScope.js"></script>
    <script src="/app/app.js"></script>
  </body>
</html>
```
Whenever you add a new dependency, all you need to do is run the `bower install --save <new-module\>`.  The `--save` modifier will automatically add the dependency to your 'bower.json' file and  `gulp-inject` will automatically inject it into your 'index.html' file.  The only place you might need to add the dependency is into your Angular dependency injection line for the module where you are using it.

##Directory Structure

The initial directory structure will look like this after installing and running `gulp`.

**Top Level**  
```
build/
gulp/
node_modules/
src/
.bowerrc
bower.json
gulpfile.js
package.json
...
```

**Source Files**  
```
src/
  app/
    nav/
      nav.controller.js
      nav.factory.js
      nav.jade
    other_components/
    .../
    app.js
    app.routes.js
  assets/
    fonts/
    icons/
    img/
  bower_components/
    angular/
    font-awesome/
    .../
  styles/
    components/
    base.styl
    index.styl
    vars.styl
    ...
  index.jade
```

**Destination Files (`dev` environment shown)**  
Inspired by [Google's best practice recommendations](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub) for AngularJS.
```
build/
  app/
    nav/
      nav.controller.js
      nav.factory.js
    .../
    app.css
    app.js
    app.routes.js
    ...
  fonts/
  icons/
  img/
  lib/
    angular.js
    font-awesome.css
    ...
  index.html
```
