// Seeds DB with quiz questions.

var db = require("./models");

var quiz = [];

quiz.push({

});

db.Question.remove({}, function(err, questions){

  db.Question.create(quiz, function(err, questions){
    if (err) { return console.error('ERROR: ', err); }

    console.log('all questions: ', questions);
    console.log('created ', questions.length, ' quiz questions');
    process.exit();
  });

});
