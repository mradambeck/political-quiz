// Seeds DB with quiz questions.

var db = require("./models");

var quiz = [];

quiz.push({
  question: "Do you support the legalization of same sex marriage?",
  image: "",
  isProgressive: true,
  infoLink: ""
});

quiz.push({
  question: "Do you support offshore drilling?",
  image: "",
  isProgressive: false,
  infoLink: ""
});

quiz.push({
  question: "Should the US raise the minimum wage?",
  image: "",
  isProgressive: true,
  infoLink: ""
});

quiz.push({
  question: "Should the US have universal healthcare?",
  image: "",
  isProgressive: true,
});

quiz.push({
  question: "Should the US decrease military spending?",
  image: "",
  isProgressive: true,
  infoLink: ""
});

quiz.push({
  question: "Should the US have stricter immigration policy?",
  image: "",
  isProgressive: false,
  infoLink: ""
});

quiz.push({
  question: "Should convicted felons have the right to vote?",
  image: "",
  isProgressive: true,
  infoLink: ""
});

quiz.push({
  question: "Should the federal government require children to be vaccinated for preventable diseases?",
  image: "",
  isProgressive: false,
  infoLink: ""
});



db.Question.remove({}, function(err, questions){

  db.Question.create(quiz, function(err, questions){
    if (err) { return console.error('ERROR: ', err); }

    console.log('all questions: ', questions);
    console.log('created ', questions.length, ' quiz questions');
    process.exit();
  });

});
