(function () {
  'use strict';

  angular.module('nav', ['nav.services'])
    .config(routes)
    .controller('NavCtrl', NavCtrl);

  function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        views: {
          'full': {
            templateUrl: '/app/home/home.html'
          }
        }
      });
  }

  function NavCtrl($window, $rootScope, $state, menuFactory, minWidth) {
    // Quick access to factory data
    var menus = menuFactory.getMenus();
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
      return item.state === $state.current.name;
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
      if ($window.innerWidth < minWidth.desktop) { this.showMainMenu = false; }
      // Pull in the view heading.
      this.viewName = item.name;
      // Pull in the view state.
      $state.go(item.state);
    };
  }

}());

