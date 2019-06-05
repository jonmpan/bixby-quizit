module.exports.function = function nextQuestion (quiz) {
  quiz.currentQuestion++;
  if(quiz.currentQuestion < quiz.questions.length){
    var questionCounter = quiz.currentQuestion + 1;
    quiz.status = 'question';
    quiz.template = "Question " +questionCounter+ " out of " +quiz.questionCount+ ". " +quiz.questions[quiz.currentQuestion].question;
    quiz.speech = "Question " +questionCounter+ " out of " +quiz.questionCount+ ". " +quiz.questions[quiz.currentQuestion].question;
  }
  else {
    quiz.status = 'completed';
    quiz.template = "You got " +quiz.score+ " out of " +quiz.questionCount+ " right!";
    quiz.speech = "You got " +quiz.score+ " out of " +quiz.questionCount+ " right!";
  }
  return quiz;
}