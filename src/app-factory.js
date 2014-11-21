(function () {
  'use strict';

  var configFactory = function () {
    return {
      minWidth: {
        phone: 0,
        phablet: 600,
        tablet: 768,
        desktop: 992,
        wide: 1200
      }
    };
  };
  angular.module('myApp').factory('myAppConfigs', configFactory);

  var menuFactory = function () {
    var menus = {
      groups: [
        {name: 'menuA', icon: 'suitcase'},
        {name: 'menuB', icon: 'picture-o'},
        {name: 'menuC', icon: 'credit-card'}
      ],
      menuA: {name: 'menuA', heading: 'Transportation', items: [
        {name: 'Plane', icon: 'plane', uri: '/planes'},
        {name: 'Car', icon: 'car', uri: '/cars'},
        {name: 'Bike', icon: 'bicycle', uri: '/bicycles'},
        {name: 'Bus', icon: 'bus', uri: '/buss'},
        {name: 'Rocket', icon: 'rocket', uri: '/rockets'},
        {name: 'Shopping Cart', icon: 'shopping-cart', uri: '/shopping-carts'},
        {name: 'Space Shuttle', icon: 'space-shuttle', uri: '/space-shuttles'},
        {name: 'Taxi Cab', icon: 'taxi', uri: '/taxsi'}
      ]},
      menuB: {name: 'menuB', heading: 'Activities', items: [
        {name: 'Dining', icon: 'cutlery', uri: '/cutlerys'},
        {name: 'Shopping', icon: 'gift', uri: '/gifts'},
        {name: 'Sight Seeing', icon: 'binoculars', uri: '/binocularss'},
        {name: 'Sporting Events', icon: 'futbol-o', uri: '/futbol-os'},
        {name: 'Relaxing', icon: 'coffee', uri: '/coffees'},
        {name: 'Gaming', icon: 'gamepad', uri: '/gamepasd'}
      ]},
      menuC: {name: 'menuC', heading: 'Methods of Payment', items: [
        {name: 'Visa', icon: 'cc-visa', uri: '/cc-visas'},
        {name: 'Mastercard', icon: 'cc-mastercard', uri: '/cc-mastercards'},
        {name: 'American Express', icon: 'cc-amex', uri: '/cc-amexs'},
        {name: 'Discover', icon: 'cc-discover', uri: '/cc-discovers'},
      ]},
      footer: {items: [
        {name: 'Terms', icon: 'copyright', uri: '/terms'},
        {name: 'About', icon: 'paw', uri: '/about'},
        {name: 'Support', icon: 'question', uri: '/support'}
      ]}
    };

    return {
      getMenus: function () { return menus; }
    };
  };
  angular.module('myApp').factory('menuFactory', menuFactory);

}());

