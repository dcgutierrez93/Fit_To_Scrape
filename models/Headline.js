// *********************
// Headline Model
// *********************

// Require mongoose
var mongoose = require('mongoose');

// Create Schema
var Schema = mongoose.Schema;

// Create the Headline Schema
var headlineSchema = new Schema ({
  // headline string must be entered.
  headline: {
    type: String,
    required: true,
    unique: true
  },
  // Sumary string must be entered.
  summary: {
    type: String,
    required: true,
  },
  // Date is just a string.
  date: String,
  saved: {
    type: Boolean,
    default: false
  }
});

// Create our headline Model
var Headline = mongoose.model("Headline", headlineSchema);

// Export Headline
module.exports = Headline;
