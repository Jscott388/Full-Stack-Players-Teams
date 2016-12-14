(function() {
'use strict';

    angular
        .module('app')
        .controller('TeamController', TeamController);

    function TeamController(teamFactory) {
        var vm = this;
        vm.teams = [];
    
        teamFactory.getTeam(function(team){
            vm.teams = teams;
        })

        vm.addTeam = function(){
            teamFactory.addTeam(vm.newTeam)
            vm.newTeam = {};
        }

        vm.deleteTeam = function($index){
            teamFactory.deleteTeam($index);
        }
    }
})();