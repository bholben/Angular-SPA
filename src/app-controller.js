(function () {
  'use strict';

  // TODO:
  //  - Can't scroll to bottom of long menu list.

  var MenuController = function ($location, menuFactory, myAppConfigs) {
    var menus = menuFactory.getMenus();
    this.groups = menus.groups;
    this.menu = menus.menuA;
    this.footer = menus.footer;
    this.isMenuHidden = false;
    this.hover = false;

    this.toggleMenu = function () {
      this.isMenuHidden = !this.isMenuHidden;
    };

    this.closeMenuRequest = function () {
      return this.isMenuHidden;
    };

    this.selectMenu = function (group) {
      if      (group.name === 'menuA') { this.menu = menus.menuA; }
      else if (group.name === 'menuB') { this.menu = menus.menuB; }
      else if (group.name === 'menuC') { this.menu = menus.menuC; }
    };

    this.isActiveMenuGroup = function (group) {
      return group.name === this.menu.name;
    };

    this.selectView = function (item) {
      var minDesktopWidth = myAppConfigs.minWidth.desktop;
      if (window.innerWidth < minDesktopWidth) { this.isMenuHidden = true; }
      $location.url(item.uri);
    };

    this.isActiveMenu = function (item) {
      return item.uri === $location.url() || this.hover;
    };

  };
  angular.module('myApp').controller('MenuController', MenuController);
  MenuController.$inject = ['$location', 'menuFactory', 'myAppConfigs'];

  // var TopBarController = function () {};
  // angular.module('myApp').controller('TopBarController', TopBarController);

}());

