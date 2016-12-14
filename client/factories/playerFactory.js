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
        factory.players = [];

        return factory;
        
        function getPlayers(){
            return $http.get('/players').then(function(res){
                res.data.forEach(function(element) {
                    factory.players.push(element);
                });
        }, handleError('Error getting all players'));
        }
        function addPlayer(player, callback){
            return $http.post('/players', player).then(function(res){
                callback(res.data);
            }, handleError('Error creating player'));
        }
        function DeletePlayer(id){
            return $http.delete('/players' + id).then(handleSuccess, handleError('Error deleting Palyer'));
        }
        function UpdatePlayer(player){
            return $http.put('/players/' + player.id, player).then(handleSuccess, handleError('Error updating player'));
        }
        function handleSuccess(res){
            // console.log(res.data);
            factory.players = res.data;
            return res.data;
        }
        function handleError(error){
            return function (){
                return { success: false, mesage: error};
            };
        }
    }
})();