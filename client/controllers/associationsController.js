(function () {
    'use strict';

    angular
        .module('app')
        .controller('AssociationsController', AssociationsController);

    function AssociationsController(playerFactory, teamFactory) {
        var vm = this;

        vm.getPlayers = function () {
            playerFactory.getPlayers().then(function (players) {
                vm.players = players;
            })
        }
        vm.getTeams = function () {
            teamFactory.fetchTeams().then(function (teams) {
                vm.teams = teams;
            })
        }
        vm.create = function () {
            teamFactory.assign(vm.newAssoc, function (players) {
                vm.players = players;
            })
            vm.newAssoc = {};
        }
    }
})();