var mongoose = require('mongoose');
var Player = mongoose.model('Player');

mongoose.Promise = global.Promise;

module.exports = {
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
  