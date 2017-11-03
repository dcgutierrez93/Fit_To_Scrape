// Require mongoose
var mongoose = require('mongoose');

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a Article schema with the Schema class
var ArticleSchema = new Schema({
  // title is a required string,
  title: {
    type    : String,
    required: true
  },
  // Link is a required String
  link: {
    type    : String,
    required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note Models
  note: {
    type: Schema.Types.ObjectId,
    ref : "Note"
  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the Models
module.export = Article;
