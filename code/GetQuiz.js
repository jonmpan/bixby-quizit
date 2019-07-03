var console = require('console');
var http = require('http');
const {categories, formatQuestions, makeQuiz} = require('./utils/index.js');

const nextQuestion = (quiz) =>{
  quiz.currentQuestion++;
  const currentQuestion = quiz.questions[quiz.currentQuestion];
  if(quiz.currentQuestion < quiz.questions.length){
    var questionCounter = quiz.currentQuestion + 1;
    quiz.status = 'question';
    quiz.template = "Question " +questionCounter+ " out of " +quiz.questionCount+ ". " +currentQuestion.question;
    currentQuestion.answers.map(o=>{
      quiz.speech += "... " + o.letter + "... " + o.text      
    })
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
  }
  return quiz
}

module.exports.function = function getQuiz (category, difficulty, skip) {
  let quiz = makeQuiz(category, difficulty);
  if(skip){
    return nextQuestion(quiz);
  } else {
    return quiz;    
  }
}

// template: 'QuizIt is a trivia game with tons of questions! The questions are multiple choice. You must say A, B, C, or D, to select your answer.',
// speech: 'QuizIt is a trivia game with crowdsourced questions. The questions are multiple choice. You must say A... B... C... or D... to select your answer.',