const { calculateTotalTimeBonus, calculateTotalScore } = require('./utils/index.js');
var dashbot = require("./utils/dashbot.js");

module.exports.function = function nextQuestion(quiz, $vivContext) {
  quiz.currentQuestion++;
  const currentQuestion = quiz.questions[quiz.currentQuestion];
  var template = "";
  if (quiz.currentQuestion < quiz.questions.length) {
    var questionCounter = quiz.currentQuestion + 1;
    currentQuestion.timeStarted = new Date().toISOString();
    quiz.status = 'question';
    quiz.template = "Question " + questionCounter + " out of " + quiz.questionCount + ". " + currentQuestion.question;
    quiz.speech =
      "Question "
      + questionCounter
      // + " out of " +quiz.questionCount
      + "... "
      + currentQuestion.question
    currentQuestion.answers.map(o => {
      quiz.speech += "... " + o.letter + "... " + o.text
    })
    template = quiz.speech;
  }
  else {
    quiz.status = 'completed';
    quiz.totalScore = calculateTotalScore(quiz);
    quiz.timeBonus = calculateTotalTimeBonus(quiz);
    template = "Thank you for playing QuizIt! Congratulations! You got " + quiz.score + " out of " + quiz.questionCount + " questions right. Your score is " + quiz.totalScore + " out of " + parseInt(quiz.questions.length) * 20 + "!";
    quiz.template = template;
    quiz.speech = template;
    if (quiz.score == quiz.questionCount) {
      quiz.template += " You're so smart. Have a cookie!"
      quiz.speech += " You're so smart. Have a cookie!"
    }
    else if (quiz.score == 0) {
      quiz.template += " It's ok... It could be worse, right?"
      quiz.speech += " It's ok... It could be worse, right?"
    }
  }
  dashbot.logOutgoing(template, "NextQuestion", $vivContext);
  return quiz;
}

