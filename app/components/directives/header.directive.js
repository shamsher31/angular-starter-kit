'use strict';

angular
    .module('directives')
    .directive('mainHeader', Header);
   
function Header() {
    return {
        templateUrl: 'app/components/partials/main-header.partial.html',
        restrict: 'EA'
    };
}