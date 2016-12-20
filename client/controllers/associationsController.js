(function () {
    'use strict';

    angular
        .module('app')
        .controller('AssociationsController', AssociationsController);

    function AssociationsController(playerFactory, teamFactory) {
        var vm = this;
        
        init();
        
        function players(){
            playerFactory.getPlayers().then(function(players){
                vm.players = players;
            });
        }
        function teams(){
            teamFactory.getTeam().then(function(teams){
                vm.teams = teams;
            })
        }

        function init(){
            players();
            teams();
        }

        vm.create = function(players){
            teamFactory.assign(vm.newAssoc)
                .then(function(){
                    vm.players = players;
                    vm.newAssoc = {};
                    init();
            })
        }
    }
})();