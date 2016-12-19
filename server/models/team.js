var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TeamSchema = new Schema({
    name: {type: String, required: true, minlength: 2},
    _players: [{type: Schema.Types.ObjectId, ref: 'Player'}]
}, {timestamps: true});

mongoose.model('Team', TeamSchema);
