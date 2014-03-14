'use strict';

angular.module('flatApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'stellar.directives',
	'ui.bootstrap',
	'ui.router'
])
//  .config(function ($routeProvider) {
//    $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl',
//            views: {
//                'main': {
//                    templateUrl: 'templates/heading.html'
//                },
//                'about': {
//                    templateUrl: 'templates/about.html'
//                },
//                'catalog': {
//                    templateUrl: 'templates/catalog.html'
//                }
//            }
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
//  });
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
//                views: {
//                    'nav': {
//                        templateUrl: 'templates/nav.html',
//                        controller: 'MainCtrl'
//                    },
//                    'heading': {
//                        templateUrl: 'templates/heading.html',
//                        controller: 'MainCtrl'
//                    },
//                    'about': {
//                        templateUrl: 'templates/about.html',
//                        controller: 'MainCtrl'
//                    },
//                    'catalog': {
//                        templateUrl: 'templates/catalog.html',
//                        controller: 'MainCtrl'
//                    }
//                }
            })
						.state('cart', {
							url: '/cart',
						templateUrl: 'views/cart.html',
						controller: 'MainCtrl'
						});
//            .state('about', {
//                url: "/about",
//                controller: 'MainCtrl',
//                views: {
//                    'about': {
//                        templateUrl: 'templates/about.html'
//                    }
//                }
//            })
//            .state('catalog', {
//                url: "/catalog",
//                controller: 'MainCtrl',
//                views: {
//                    'catalog': {
//                        templateUrl: 'templates/catalog.html'
//                    }
//                }
//            });
//            .state('state1.list', {
//                url: "/list",
//                templateUrl: "partials/state1.list.html",
//                controller: function($scope) {
//                    $scope.items = ["A", "List", "Of", "Items"];
//                }
//            })
//            .state('state2', {
//                url: "/state2",
//                templateUrl: "partials/state2.html"
//            })
//            .state('state2.list', {
//                url: "/list",
//                templateUrl: "partials/state2.list.html",
//                controller: function($scope) {
//                    $scope.things = ["A", "Set", "Of", "Things"];
//                }
//            })
    });