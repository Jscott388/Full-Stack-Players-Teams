var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    name: String,
    team: { type: Schema.Types.ObjectId, ref:'Team' }
});

mongoose.model('Player', PlayerSchema);