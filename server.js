var express = require("express");
var app = express();
var PORT = 8000;


app.listen(PORT, function(){
    console.log(`Running on ${PORT}`);
});

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/full_players_teams");

var TeamSchema = new mongoose.Schema({
    name: String
});

var PlayerSchema = new mongoose.Schema({
    name: String,
    team: { type: mongoose.Schema.Types.ObjectId, ref:'Team' }
});

mongoose.model('Team', TeamSchema);
mongoose.model('Player', PlayerSchema);

var PlayerController = {
    index: function(req, res) {},
    create: function(req, res) {},
    delete: function(req, res) {},
    update: function(req, res) {},
}


app.get('/players', PlayerController.index);
app.post('/players', PlayerController.create);
app.delete('/players/:id', PlayerController.delete);
app.put('/players/:id', PlayerController.update);