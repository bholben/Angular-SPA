(function () {
  'use strict';

  angular.module('nav.services', [])

  .factory('menuFactory', function () {

    var menuGroupings = {
      groups: [
        {name: 'menuA', icon: 'suitcase'},
        {name: 'menuB', icon: 'picture-o'},
        {name: 'menuC', icon: 'credit-card'}
      ],
      // 'items: name' property used for menu text AND view heading.
      // 'items: state' property used for view state AND icon if none provided.
      menuGroupA: {name: 'menuA', heading: 'Transportation', items: [
        {name: 'Plane',            state: 'plane'},
        {name: 'Car',              state: 'car'},
        {name: 'Bicycle',          state: 'bicycle'},
        {name: 'Bus',              state: 'bus'},
        {name: 'Rocket',           state: 'rocket'},
        {name: 'Shopping Cart',    state: 'shopping-cart'},
        {name: 'Space Shuttle',    state: 'space-shuttle'},
        {name: 'Taxi Cab',         state: 'taxi'}
      ]},
      menuGroupB: {name: 'menuB', heading: 'Activities', items: [
        {name: 'Relaxing',         state: 'relaxing',         icon: 'coffee'},
        {name: 'Reading',          state: 'books',            icon: 'book'},
        {name: 'Dining',           state: 'dining',           icon: 'cutlery'},
        {name: 'Shopping',         state: 'shopping',         icon: 'gift'},
        {name: 'Sight Seeing',     state: 'sight_seeing',     icon: 'binoculars'},
        {name: 'Sporting Events',  state: 'sporting_events',  icon: 'futbol-o'},
        {name: 'Gaming',           state: 'gameing',          icon: 'gamepad'}
      ]},
      menuGroupC: {name: 'menuC', heading: 'Methods of Payment', items: [
        {name: 'Visa',             state: 'cc-visa'},
        {name: 'Mastercard',       state: 'cc-mastercard'},
        {name: 'American Express', state: 'cc-amex'},
        {name: 'Discover',         state: 'cc-discover'},
      ]},
      menuGroupFooter: {items: [
        {name: 'About',            state: 'about',            icon: 'paw'},
        {name: 'Support',          state: 'support',          icon: 'question-circle'},
        {name: 'Terms',            state: 'terms',            icon: 'copyright'}
      ]},
      menuGroupUser: {items: [
        {name: 'User Profile',     state: 'profile'},
        {name: 'Settings',         state: 'settings'},
        // {name: '', divider: 'divider'},
        {name: 'Log Out',          state: 'logout'}
      ]}
    };

    return {
      getMenus: function () { return menuGroupings; }
    };
  });

}());

