(function () {
    'use strict';

    angular
        .module('app')
        .controller('TeamController', TeamController);

    function TeamController(teamFactory) {
        var vm = this;
        // vm.teams = [];

        fetchTeams();

        function fetchTeams() {
            teamFactory.getTeam().then(function(teams){
                vm.teams = teams;
            }) 
        }

        vm.addTeam = function () {
            teamFactory.addTeam(vm.newTeam)
                .then(function(){
                    vm.teams.push(vm.newTeam)
                    vm.newTeam = {};
                    fetchTeams();
                })
        }

        vm.deleteTeam = function (teamId) {
            teamFactory.deleteTeam(teamId)
                .then(function(){
                    fetchTeams();
                })
        }
    }
})();