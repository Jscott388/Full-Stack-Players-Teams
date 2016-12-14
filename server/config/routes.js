var Player = require('../controllers/players.js');
var Team = require('../controllers/teams.js');

// ROUTING
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '../../client/index.html')
    });
    // PLAYERS
    app.get('/players', Player.index);
    app.post('/players', Player.create);
    app.delete('/players/:id', Player.delete);
    app.put('/players/:id', Player.update);
    // TEAMS
    app.get('/teams', Team.index);
    app.post('/teams', Team.create);
    app.delete('/teams/:id', Team.delete);
    app.post('/players/:id/remove-team', Player.removeTeam);


}