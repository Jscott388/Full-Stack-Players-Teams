var express = require("express");
var app = express();
var PORT = 8000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(PORT, function(){
    console.log(`Running on ${PORT}`);
});

// DATABASE CONNECTION, SCHEMAS AND MODELS

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/full_players_teams");
mongoose.Promise = global.Promise;

var TeamSchema = new mongoose.Schema({
    name: String
});

var PlayerSchema = new mongoose.Schema({
    name: String,
    team: { type: mongoose.Schema.Types.ObjectId, ref:'Team' }
});

var Team = mongoose.model('Team', TeamSchema);
var Player = mongoose.model('Player', PlayerSchema);
// END DATABASE ///////////////////////////


// PLAYER CONTROLLER
var PlayerController = {
    index: function(req, res) {
        Player.find({})
        .populate('team')
        .exec(function(err, players){
            if(err){
                console.log(err);
                res.status(500);
                res.json(err);
            } else {
                res.json(players);
            }
        });
    },
    create: function(req, res){
        Player.create(req.body,function(err){
            if(err){
                console.log(err);
                res.status(500);
                res.json(err);
            } else {
                res.json(true);
            }
        });
    },
    delete: function(req, res) {
        Player.remove({ _id: req.params.id })
        .then(function(){
            res.json(true);
        })
        .catch(function(err){
            console.log(err);
            res.status(500);
            res.json(err);
        });
    },
    update: function(req, res) {
        Player.update({ _id: req.params.id }, req.body)
        .then(function(){
            res.json(true);
        })
        .catch(function(err){
            console.log(err);
            res.status(500);
            res.json(err);
        });
    },
    removeTeam: function(req, res) {
        Player.find({ _id: req.params.id })
        .then(function(player){
            if (player.team){
                delete player.team
            }
            return player.save()
        })
        .then(function(){
            res.json(true);
        })
        .catch(function(err){
            console.log(err);
            res.status(500);
            res.json(err);
        });
    },
}
// END PLAYER CONTROLLER

// TEAM CONTROLLER
var TeamController = {
    index: function(req, res) {
        Team.find({}, function(err, teams){
            if(err){
                console.log(err);
                res.status(500);
                res.json(err);
            } else {
                res.json(teams);
            }
        });
    },
    create: function(req, res){
        Team.create(req.body,function(err){
            if(err){
                console.log(err);
                res.status(500);
                res.json(err);
            } else {
                res.json(true);
            }
        });
    },
    delete: function(req, res) {
        Team.remove({ _id: req.params.id })
        .then(function(){
            res.json(true);
        })
        .catch(function(err){
            console.log(err);
            res.status(500);
            res.json(err);
        });
    }
}
// END TEAM CONTROLLER

// ROUTING
// PLAYERS
app.get('/players', PlayerController.index);
app.post('/players', PlayerController.create);
app.delete('/players/:id', PlayerController.delete);
app.put('/players/:id', PlayerController.update);
// TEAMS
app.get('/teams', TeamController.index);
app.post('/teams', TeamController.create);
app.delete('/teams/:id', TeamController.delete);

app.delete('/players/:id/remove-team', PlayerController.removeTeam);
// END ROUTING