////////////////////
// CLIENT-SIDE JS //
////////////////////

angular
  .module('political-quiz', ['ui.bootstrap'])
  .controller('QuizIndexController', QuizIndexController);

function QuizIndexController ( $http ){
  var vm = this;
  vm.test = 'testing testing';
  vm.quizQuestions = [];
  vm.count = 0;
  vm.currentQuestion = vm.quizQuestions[vm.count];
  var progressiveCount = 0;

  $http({
    method: 'GET',
    url: '/api/questions'
  }).then(function success(response) {
    vm.quizQuestions = response.data;
    console.log(response.data);
    vm.currentQuestion = vm.quizQuestions[vm.count];
  }, function error(response) {
    console.error('There was an error getting the data: ', response);
  });

  vm.nextQuestion = function(isProgressive) {
    if (vm.count !== vm.quizQuestions.length-1) {
      vm.count += 1;
      vm.currentQuestion = vm.quizQuestions[vm.count];
      if (isProgressive) {
        vm.progressiveCount++;
      }
    }

  };
}
