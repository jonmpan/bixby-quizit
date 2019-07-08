const { levenshteinQuestion, onlyNumbers, letterAliases } = require('./utils/index.js');
var console = require('console');


module.exports.function = function checkAnswer (quiz, userAnswerString) {
  let correctAnswer = '';
  let correctString = '';
  let bixbyResponse = '';
  let correct = false;
  const currentQuestion = quiz.questions[quiz.currentQuestion]
  console.log(currentQuestion);
  console.log(userAnswerString);

  currentQuestion.answers.map(o=>{
    if(o.correct){
      correctString = o.text;
      correctAnswer = o;
    }
  })
  
  let tempUserAnswer = userAnswerString.toString().toLowerCase();
  if(letterAliases[tempUserAnswer]){
    userAnswerString = letterAliases[tempUserAnswer];
    if(userAnswerString == correctAnswer.letter.toString()){
      correct = true;
    }
  } else {
    const uhh = levenshteinQuestion(userAnswerString.toString(), currentQuestion);
    console.log(uhh);
    correct = uhh.correct;
    currentQuestion.userAnswer = uhh.answer;
  }

  const answers = currentQuestion.answers;
  if(correct){
    quiz.score++;
    currentQuestion.correct = true;
    quiz.template = 'Correct. The answer is ' + correctString;
    quiz.speech = 'Correct. The answer is ' + correctString;
    delete quiz.youSaid;
    quiz.youSaidSomething = false;
  } else {
    quiz.template = 'Wrong. The answer is ' + correctString;
    quiz.speech = 'Wrong. The answer is ' + correctString;
    delete quiz.youSaid;
    quiz.youSaidSomething = false;
  }
  quiz.questions[quiz.currentQuestion].userAnswer = userAnswerString;
  quiz.status = 'answer';
  return quiz;
}
