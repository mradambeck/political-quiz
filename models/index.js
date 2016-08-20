var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/politicalQuiz");

var Qestion = require('./question');

module.exports.Question = Question;
