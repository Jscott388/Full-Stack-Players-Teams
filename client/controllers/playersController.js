(function() {
'use strict';

    angular
        .module('app')
        .controller('PlayerController', PlayerController);

    function PlayerController(playerFactory) {
        var vm = this;
        vm.players = playerFactory.players;
    
        playerFactory.getPlayers();
            
        vm.addPlayer = function(){
            playerFactory.addPlayer(vm.newPlayer, function(player){
                vm.players.push(player);
            })
            vm.newPlayer = {};
        }
        vm.DeletePlayer = function($index){
            playerFactory.DeletePlayer($index);
        }
    }
})();