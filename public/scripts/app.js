////////////////////
// CLIENT-SIDE JS //
////////////////////

angular
  .module('political-quiz', ['ui.bootstrap'])
  .controller('QuizIndexController', QuizIndexController);

function QuizIndexController ( $http ){
  var vm = this;
  vm.quizQuestions = [{}];

  $http({
    method: 'GET',
    url: '/api/questions'
  }).then(function success(response) {
    vm.quizQuestions = response.data;
  }, function error(response) {
    console.error('There was an error getting the data: ', response);
  });
}
