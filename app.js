'use strict';

// Declare app level module which depends on views, and components
angular
 .module('myApp', [
  'ui.router',
  'ui.bootstrap',
  'login'
 ])
 .config(['$urlRouterProvider', urlRouterProvider]); 

function urlRouterProvider($urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
};