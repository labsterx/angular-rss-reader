'use strict';

angular.module('angularRssReader', ['ngSanitize', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
