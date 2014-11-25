(function () {
  'use strict';

  angular
    .module('NavCtrl', ['navFactory'])
    .controller('NavCtrl', NavCtrl);

  function NavCtrl($window, $rootScope, $location, navFactory) {
    // Quick access to factory data
    var menus = navFactory.getMenus();
    // Initialization
    this.menuGroups =      menus.groups;
    this.menuGroupMain =   menus.menuGroupA;
    this.menuGroupFooter = menus.menuGroupFooter;
    this.menuGroupUser =   menus.menuGroupUser;
    this.viewName = 'Home';
    this.showMainMenu = true;
    this.showUserMenu = false;

    // Main menu behavior
    this.toggleMainMenu = function () {
      this.showMainMenu = !this.showMainMenu;
      this.showUserMenu = false;
    };

    this.closeMainMenu = function () {
      return !this.showMainMenu;
    };

    this.selectMenu = function (group) {
      if      (group.name === 'menuA') { this.menuGroupMain = menus.menuGroupA; }
      else if (group.name === 'menuB') { this.menuGroupMain = menus.menuGroupB; }
      else if (group.name === 'menuC') { this.menuGroupMain = menus.menuGroupC; }
    };

    this.isActiveMenuGroup = function (group) {
      return group.name === this.menuGroupMain.name;
    };

    this.isActiveMenu = function (item) {
      return item.uri === $location.url();
    };

    // User menu behavior
    this.toggleUserMenu = function () {
      this.showUserMenu = !this.showUserMenu;
    };

    this.closeUserMenu = function () {
      if (this.showUserMenu === true) { this.showUserMenu = false; }
    };

    // All menus behavior
    this.selectView = function (item) {
      // For smaller screens, push the main menu aside when view selected.
      if (item.icon && $window.innerWidth < $rootScope.minWidth.desktop) {
        this.showMainMenu = false;
      }
      // Pull in the view heading.
      this.viewName = item.name;
      // Pull in the view.
      $location.url(item.uri);
    };
  }

}());

