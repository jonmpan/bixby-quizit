var console = require('console');
var http = require('http');
const {categories, formatQuestions} = require('./utils/index.js');

module.exports.function = function getQuiz (category, difficulty) {
  let url = 'https://opentdb.com/api.php?amount=5&type=multiple';
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