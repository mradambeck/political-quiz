var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  title: String,
  short_description: String,
  long_description: String
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
