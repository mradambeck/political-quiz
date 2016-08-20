// Quiz Questions

var db = require('../models');

// GET Quiz Questions

function index(req, res) {
  db.Question.find({}, function(error, allQuestions) {
    res.json(allQuestions);
  });
}

function show(req, res) {
  db.Question.findById(req.params.questionId, function(err, foundQuestion){
    if(err) {console.error('questionsController, error: ', err); }
    res.json(foundQuestion);
  });
}

// export public methods
module.exports = {
  index: index,
  show: show
};
