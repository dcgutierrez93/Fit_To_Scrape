// =============================================================================

// Note model

// =============================================================================
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var noteSchema = new Schema({
  _headlineId: {
    type: Schema.Type.ObjectsId,
    ref : "Headline"
  },
  date    : String,
  noteText: String
});

// Create the Note model using the noteSchema
var Note = mongoose.model("Note", noteSchema);

// Export on Note.
module.exports = Note
