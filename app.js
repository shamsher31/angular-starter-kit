'use strict';

// Declare app level module which depends on views, and components
angular
 .module('myApp', [
  
  'ui.router',
  'ui.bootstrap',
  'LocalStorageModule',
  'angular-loading-bar',
 
  'directives',
  'services',
  'providers',
  
  'login',
  'dashboard'
 
 ])
 .config(['$locationProvider', '$urlRouterProvider', urlRouterProvider]); 

function urlRouterProvider($locationProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/login');
};