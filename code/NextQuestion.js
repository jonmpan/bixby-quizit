module.exports.function = function nextQuestion (quiz) {
  quiz.currentQuestion++;
  const currentQuestion = quiz.questions[quiz.currentQuestion];
  if(quiz.currentQuestion < quiz.questions.length){
    var questionCounter = quiz.currentQuestion + 1;
    quiz.status = 'question';
    quiz.template = "Question " +questionCounter+ " out of " +quiz.questionCount+ ". " +currentQuestion.question;
    quiz.speech = 
      "Question "
      +questionCounter+
      " out of " +quiz.questionCount+
      "... "
      +currentQuestion.question+
      "... A... "
      +currentQuestion.answers[0].text+
      "... B... "
      +currentQuestion.answers[1].text+
      "... C... "
      +currentQuestion.answers[2].text+
      "... D... "
      +currentQuestion.answers[3].text;
  }
  else {
    quiz.status = 'completed';
    quiz.template = "Congratulations! You got " +quiz.score+ " out of " +quiz.questionCount+ " right.";
    quiz.speech = "Congratulations! You got " +quiz.score+ " out of " +quiz.questionCount+ " right.";
    if(quiz.score == quiz.questionCount){
      quiz.template += " You're so smart. Have a cookie!"
      quiz.speech += " You're so smart. Have a cookie!"
    }
    else if(quiz.score == 0){
      quiz.template += " It's ok... It could be worse, right?"
      quiz.speech += " It's ok... It could be worse, right?"
    }
    // else {
    //   quiz.template += " You're so close to perfection! Try again!"
    //   quiz.speech += " You're so close to perfection! Try again!"
    // }
  }
  return quiz;
}