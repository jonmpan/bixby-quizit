var console = require('console');
var http = require('http');
// var config = require('config');

const categories = {
  "general":9,
  "books":10,
  "film":11,
  "music":12,
  "musicals":13,
  "theatre":13,
  "television":14,
  "videoGames":15,
  "boardGames":16,
  "science":17,
  "nature":17,
  "computers":18,
  "mathematics":19,
  "mythology":20,
  "sports":21,
  "geography":22,
  "history":23,
  "politics":24,
  "art":25,
  "celebrities":26,
  "animals":27,
  "vehicles":28,
  "comics":29,
  "gadgets":30,
  "anime":31,
  "manga":31,
  "cartoon":32,
  "animation":33,
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const removeHtmlStuff = text => {
  // &oacute;
  // &ouml;
  return text.replace(/&quot;/g, '\"').replace(/&#039;/g, "\'");
}

const formatQuestion = response => {
  const result = response.results[0];
  const questionFormatted = removeHtmlStuff(result.question)
  const question = {
    question: questionFormatted,
    answers: [],
    category: result.category,
    difficulty: result.difficulty,
  };
  for (var i = 0; i < result.incorrect_answers.length; i++) {
    question.answers.push({
      text: removeHtmlStuff(result.incorrect_answers[i]),
      correct: false,
    });
  }
  
  question.answers.push({
    text: removeHtmlStuff(result.correct_answer),
    correct: true,
  });
  shuffle(question.answers);

  for (var i = 0; i < question.answers.length; i++) {
    question.answers[i].letter = alphabet.charAt(i);
  }
  question.answers;
  return question;
};

module.exports.function = function getQuestion (category, $vivContext) {
  let url = 'https://opentdb.com/api.php?amount=1&type=multiple';
  if(categories[category]){
    url += '&category=' + categories[category];
  }
  var response = http.getUrl(url, { format: 'json'});
  const question = formatQuestion(response);
  return question;
}