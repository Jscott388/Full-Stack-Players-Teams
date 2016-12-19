(function () {
    'use strict';

    angular
        .module('app')
        .controller('PlayerController', PlayerController);

    function PlayerController(playerFactory) {
        var vm = this;
        // vm.players = [];

        fetchPlayers();

        function fetchPlayers() {
              playerFactory.getPlayers().then(function(players){
                vm.players = players;
            });
        }

        vm.addPlayer = function (newPlayer) {
            playerFactory.addPlayer(vm.newPlayer)
                .then(function () {
                    vm.players.push(vm.newPlayer)
                    vm.newPlayer = {};
                    fetchPlayers();
                })
        }
        vm.DeletePlayer = function(playerId){
            playerFactory.DeletePlayer(playerId)
                .then(function(){
                    fetchPlayers();
                });
        }
    }
})();