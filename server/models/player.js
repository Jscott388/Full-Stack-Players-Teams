var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    name: {type: String, required: true, minlength: 2},
    _team: { type: Schema.Types.ObjectId, ref:'Team' }
}, {timestamps: true});

mongoose.model('Player', PlayerSchema);