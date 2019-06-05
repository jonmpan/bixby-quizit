var console = require('console');
var http = require('http');
const {categories, formatQuestion, formatQuestions} = require('./utils/index.js');

module.exports.function = function getQuiz (category, difficulty) {
  let url = 'https://opentdb.com/api.php?amount=5&type=multiple';
  if(categories[category]){
    url += '&category=' + categories[category];
  }
  if(difficulty.toString() !== 'any'){
    url += '&difficulty=' + difficulty;
  }
  var response = http.getUrl(url, { format: 'json'});
  const questions = formatQuestions(response.results);
  return {
    questions:questions,
    currentQuestion: -1,
    score: 0,
    questionCount: questions.length,
    currentUserAnswer: 'Skip',
    status:'tutorial',
    template: 'QuizIt is a trivia game with crowd sourced questions. The questions are multiple choice. You must say A, B, C, or D to select your answer. Say "start" to start the game!',
    speech: 'QuizIt is a trivia game with crowd sourced questions. The questions are multiple choice. You must say A, B, C, or D to select your answer. Say Start to "start" the game!',
  }
}