var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var EventSchema = new Schema({
  eventId: { type: Number, required: true, unique: true},	
  title: { type: String, required: true },
  start: { type: String, required: false },
  end: { type: String, required: false },

});

var EventModel = mongoose.model('Evento', EventSchema);

module.exports = EventModel;