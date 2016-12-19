var mongoose = require('mongoose');
var Team = mongoose.model('Team');
var Player = mongoose.model('Player');

mongoose.Promise = global.Promise;

module.exports = {
    index: function (req, res) {
        Team.find({}).populate('_players').exec(function (err, teams) {
            if (err) {
                console.log(err);
                res.status(500);
                res.json(err);
            } else {
                res.json(teams);
            }
        });
    },
    create: function (req, res) {
        Team.create(req.body, function (err) {
            if (err) {
                console.log(err);
                res.status(500);
                res.json(err);
            } else {
                res.json(true);
            }
        });
    },
    delete: function (req, res) {
        Team.findByIdAndRemove(req.params.id)
            .then(function () {
                res.json(true);
            })
            .catch(function (err) {
                console.log(err);
                res.status(500);
                res.json(err);
            });
    },
    assoc: function (req, res) {
        Team.findOne({
            _id: req.body.team
        }, function (err, team) {
            Player.findOne({
                _id: req.body.player
            }, function (err, player) {
                team._players.push(player);
                player._team = team._id;
                team.save(function (err) {
                    if (err) {
                        console.log(err);
                    }
                })
                player.save(function (err) {
                    if (err) {
                        console.log(err);
                    }
                });

            })
        })
    }
}