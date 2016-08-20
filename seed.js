// Seeds DB with quiz questions.

var db = require("./models");

var quiz = [];

quiz.push({
  question: "Do you support the legalization of same sex marriage?",
  image: "https://i.ytimg.com/vi/X44sG4Bfp2Y/maxresdefault.jpg",
  isProgressive: true,
  infoLink: ""
});

quiz.push({
  question: "Do you support offshore drilling?",
  image: "http://www.worldoils.com/searigs/photo3.jpg",
  isProgressive: false,
  infoLink: ""
});

quiz.push({
  question: "Should the US raise the minimum wage?",
  image: "https://i.ytimg.com/vi/H3pQzQTqOKc/hqdefault.jpg",
  isProgressive: true,
  infoLink: ""
});

quiz.push({
  question: "Should the US have universal healthcare?",
  image: "http://www.lifenews.com/wp-content/uploads/2015/01/obamacare14.jpg",
  isProgressive: true,
  infoLink: ""
});

quiz.push({
  question: "Should the US decrease military spending?",
  image: "https://thebulletwire.com/wp-content/uploads/2014/03/military-spending-biggest-loser.jpg",
  isProgressive: true,
  infoLink: ""
});

quiz.push({
  question: "Should the US have stricter immigration policy?",
  image: "http://conservativepost.com/wp-content/uploads/2015/02/close_borders_now.jpg",
  isProgressive: false,
  infoLink: ""
});

quiz.push({
  question: "Should the federal government require children to be vaccinated for preventable diseases?",
  image: "https://cdn-images-1.medium.com/max/800/0*JI0Lc7z1bb1g6n_5.jpg",
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
