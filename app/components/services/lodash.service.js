'use strict';

// This service is used to wrap lodash in _ format so that
// you can inject it as a service in dependency injection container
angular
    .module('services')
    .factory('_', ['$window', Lodash]);   
    
function Lodash($window) {
    return $window._;
}