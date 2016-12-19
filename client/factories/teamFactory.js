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
        factory.assign = assign;

        return factory;
        
        function getTeam(){
            return $http.get('/teams').then(handleSuccess, handleError("Error getting all teams"));
        }
        function addTeam(newTeam){
            return $http.post('/teams', newTeam).then(handleSuccess, handleError("Error adding new team"));
        }
        function deleteTeam(id){
            return $http.delete('/teams/' + id).then(handleSuccess, handleError("Error deleting team"));
        }
        function assign(assoc_info){
            return $http.post('/teams/assoc', assoc_info).then(handleSuccess, handleError("Error assocation"));
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