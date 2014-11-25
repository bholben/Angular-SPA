(function () {
  'use strict';

  angular
    .module('navFactory', [])
    .factory('navFactory', navFactory);

  function navFactory() {
    var menus = {
      groups: [
        {name: 'menuA', icon: 'suitcase'},
        {name: 'menuB', icon: 'picture-o'},
        {name: 'menuC', icon: 'credit-card'}
      ],
      // 'items: name' property used for menu text AND view heading.
      menuGroupA: {name: 'menuA', heading: 'Transportation', items: [
        {name: 'Plane', icon: 'plane', uri: '/plane'},
        {name: 'Car', icon: 'car', uri: '/car'},
        {name: 'Bicycle', icon: 'bicycle', uri: '/bicycle'},
        {name: 'Bus', icon: 'bus', uri: '/bus'},
        {name: 'Rocket', icon: 'rocket', uri: '/rocket'},
        {name: 'Shopping Cart', icon: 'shopping-cart', uri: '/shopping-cart'},
        {name: 'Space Shuttle', icon: 'space-shuttle', uri: '/space-shuttle'},
        {name: 'Taxi Cab', icon: 'taxi', uri: '/taxi'}
      ]},
      menuGroupB: {name: 'menuB', heading: 'Activities', items: [
        {name: 'Dining', icon: 'cutlery', uri: '/cutlery'},
        {name: 'Shopping', icon: 'gift', uri: '/gift'},
        {name: 'Sight Seeing', icon: 'binoculars', uri: '/binoculars'},
        {name: 'Sporting Events', icon: 'futbol-o', uri: '/futbol-o'},
        {name: 'Relaxing', icon: 'coffee', uri: '/coffee'},
        {name: 'Gaming', icon: 'gamepad', uri: '/gamepasd'}
      ]},
      menuGroupC: {name: 'menuC', heading: 'Methods of Payment', items: [
        {name: 'Visa', icon: 'cc-visa', uri: '/cc-visa'},
        {name: 'Mastercard', icon: 'cc-mastercard', uri: '/cc-mastercard'},
        {name: 'American Express', icon: 'cc-amex', uri: '/cc-amex'},
        {name: 'Discover', icon: 'cc-discover', uri: '/cc-discover'},
      ]},
      menuGroupFooter: {items: [
        {name: 'About', icon: 'paw', uri: '/about'},
        {name: 'Support', icon: 'question-circle', uri: '/support'},
        {name: 'Terms', icon: 'copyright', uri: '/terms'}
      ]},
      menuGroupUser: {items: [
        {name: 'User Profile', uri: '/profile'},
        {name: 'Settings', uri: '/settings'},
        // {name: '', divider: 'divider'},
        {name: 'Log Out', uri: '/logout'}
      ]}
    };

    return {
      getMenus: function () { return menus; }
    };
  }

}());

