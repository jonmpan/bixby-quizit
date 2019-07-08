var console = require('console');
var http = require('http');
const {categories, formatQuestions} = require('./utils/index.js');

const nextQuestion = (quiz) =>{
  quiz.currentQuestion++;
  const currentQuestion = quiz.questions[quiz.currentQuestion];
  if(quiz.currentQuestion < quiz.questions.length){
    var questionCounter = quiz.currentQuestion + 1;
    quiz.status = 'transition';
    quiz.template = "Question " +questionCounter+ " out of " +quiz.questionCount+ ". " +currentQuestion.question;
    quiz.speech = 
      "Question "
      + questionCounter
      + "... "
      + currentQuestion.question
      + "... A... "
      + currentQuestion.answers[0].text
      + "... B... "
      + currentQuestion.answers[1].text
      + "... C... "
      + currentQuestion.answers[2].text
      + "... D... "
      + currentQuestion.answers[3].text;
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
  return quiz
}

module.exports.function = function getQuiz (category, difficulty) {
  let url = 'https://opentdb.com/api.php?amount=2&type=multiple';
  if(category !== 'all categories'){
    const formattedCategory = category.toLowerCase().replace(" ", "");
    if(categories[formattedCategory]){
      url += '&category=' + categories[formattedCategory];
    }     
  }
  if(difficulty.toString() !== 'all difficulties'){
    url += '&difficulty=' + difficulty;
  }
  var response = http.getUrl(url, { format: 'json'});
  const questions = formatQuestions(response.results);
  const quiz = {
    questions:questions,
    category: category,
    difficulty: difficulty,
    currentQuestion: -1,
    score: 0,
    questionCount: questions.length,
    currentUserAnswer: 'Skip',
    status:'tutorial',
    template: 'QuizIt is a trivia game with thousands of questions! Your game will begin shortly.',
    speech: 'QuizIt is a trivia game with thousands of questions! Your game will begin shortly.',
  }
  return quiz;
}

// template: 'QuizIt is a trivia game with tons of questions! The questions are multiple choice. You must say A, B, C, or D, to select your answer.',
// speech: 'QuizIt is a trivia game with crowdsourced questions. The questions are multiple choice. You must say A... B... C... or D... to select your answer.',