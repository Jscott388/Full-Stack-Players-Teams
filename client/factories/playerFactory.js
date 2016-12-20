(function() {
'use strict';

    angular
        .module('app')
        .factory('playerFactory', playerFactory);

    playerFactory.$inject = ['$http']
    function playerFactory($http) {
        var factory = {};

        factory.getPlayers = getPlayers;
        factory.addPlayer = addPlayer;
        factory.DeletePlayer = DeletePlayer;
        factory.UpdatePlayer = UpdatePlayer;
        
        return factory;
        
        function getPlayers(){
            return $http.get('/players').then(handleSuccess, handleError("Error getting all players"));
        }
        function addPlayer(newPlayer){
            return $http.post('/players', newPlayer).then(handleSuccess, handleError("Error adding new player"));
        }
        function DeletePlayer(id){
            return $http.delete('/players/'+ id).then(handleSuccess, handleError("Error deleting player"));
        }
        function UpdatePlayer(player){
            return $http.put('/players/' + player.id, player).then(handleSuccess, handleError("Error updating player"));
        }
         function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }
})();