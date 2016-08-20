var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/politicalQuiz");

var Question = require('./question');

module.exports.Question = Question;
