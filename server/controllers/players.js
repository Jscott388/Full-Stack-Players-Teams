var mongoose = require('mongoose');
var Player = mongoose.model('Player');

mongoose.Promise = global.Promise;

module.exports = {
    index: function (req, res) {
        Player.find({})
            .populate('team')
            .exec(function (err, players) {
                if (err) {
                    console.log(err);
                    res.status(500);
                    res.json(err);
                } else {
                    console.log(players);
                    res.json(players);
                }
            });
    },
    create: function (req, res) {
        Player.create(req.body)
            .then(function (player) {
                res.json(player);
            })
            .catch(function (err) {
                console.log(err);
                res.status(500);
                res.json(err);
            });
    },
    delete: function (req, res) {
        Player.remove({
                _id: req.params.id
            })
            .then(function () {
                res.json(true);
            })
            .catch(function (err) {
                console.log(err);
                res.status(500);
                res.json(err);
            });
    },
    update: function (req, res) {
        Player.update({
                _id: req.params.id
            }, req.body)
            .then(function () {
                res.json(true);
            })
            .catch(function (err) {
                console.log(err);
                res.status(500);
                res.json(err);
            });
    },
    removeTeam: function (req, res) {
        Player.update({
                _id: req.params.id
            }, {
                $unset: {
                    "team": ""
                }
            })
            .then(function () {
                res.json(true);
            })
            .catch(function (err) {
                console.log(err);
                res.status(500);
                res.json(err);
            });
    },
}