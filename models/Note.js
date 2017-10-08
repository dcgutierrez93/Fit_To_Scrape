// *********************
// Note Model
// *********************

// Require mongoose
var mongoose = require('mongoose');

// Create Schema
var Schema = mongoose.Schema;

// Create the Note Schema
var noteSchema = new Schema({
  // The headline is the article associate with the note
  _headlineId: {
    type: Schema.Type.ObjectsId,
    ref: "Headline"
  },
  // date is just a string
  date: String,
  // as a noteText
  noteText: String
});

// Create the Note model using the noteSchema
var Note = mongoose.model("Note", noteSchema);

// Export on Note.
module.exports = Note 
