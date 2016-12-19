(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngMaterial'])
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/players', {
                templateUrl: 'partials/players.html',
                controller: 'PlayerController',
                controllerAs: 'vm'
            })
            .when('/teams', {
                templateUrl: 'partials/teams.html',
                controller: 'TeamController',
                controllerAs: 'vm'
            })
            .when('/associations', {
                templateUrl: 'partials/associations.html',
                controller: 'AssociationsController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
    }
})();

