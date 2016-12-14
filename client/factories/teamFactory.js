(function() {
'use strict';

    angular
        .module('app')
        .factory('teamFactory', teamFactory);

    teamFactory.$inject = ['$http']
    function teamFactory($http) {
        var factory = {};

        factory.getTeam = getTeam;
        factory.addTeam = addTeam;
        factory.deleteTeam = deleteTeam;

        return factory;
        
        function getTeam(){
            return $http.get('/teams').then(handleSuccess, handleError('Error getting all players'));
        }
        function addTeam(player){
            return $http.post('/teams', teams).then(handleSuccess, handleError('Error creating player'));
        }
        function deleteTeam(id){
            return $http.delete('/teams' + id).then(handleSuccess, handleError('Error deleting Palyer'));
        }
        function handleSuccess(res){
            return res.data;
        }
        function handleError(error){
            return function (){
                return { success: false, message: error};
            };
        }
    }
})();