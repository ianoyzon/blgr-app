'use strict';

// Setting up route
angular.module('mean.meanStarter').config(['$meanStateProvider', '$urlRouterProvider',
  function ($meanStateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $meanStateProvider
      .state('home', {
        url: '/',
        templateUrl: 'meanStarter/views/system/index.html'
      })
      .state('account', {
        url: '/home',
        templateUrl: 'meanStarter/views/system/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'meanStarter/views/system/about.html'
      })
      .state('samplepost', {
        url: '/post',
        templateUrl: 'meanStarter/views/system/post.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'meanStarter/views/system/contact.html'
      });
  }
]).config(['$locationProvider',
  function ($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);
