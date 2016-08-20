var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question: String,
  image: String,
  isProgressive: Boolean,
  infoLink: String
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
