const { levenshteinQuestion, onlyNumbers, letterAliases, differenceInSeconds, calculateTimeBonus } = require('./utils/index.js');
var dashbot = require("./utils/dashbot.js");

module.exports.function = function checkAnswer (quiz, userAnswerString, $vivContext) {
  let correctAnswer = '';
  let correctString = '';
  let bixbyResponse = '';
  let correct = false;
  const currentQuestion = quiz.questions[quiz.currentQuestion];
  currentQuestion.userAnswerString = userAnswerString;
  currentQuestion.userAnswerString = userAnswerString;
  const now = new Date().toISOString()
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
    currentQuestion.userAnswer = letterAliases[tempUserAnswer];
  } else {
    const uhh = levenshteinQuestion(userAnswerString.toString(), currentQuestion);
    correct = uhh.correct;
    currentQuestion.userAnswer = uhh.answer;
  }

  const answers = currentQuestion.answers;
  if(correct){
    quiz.score++;
    currentQuestion.correct = true;
    quiz.template = 'Correct. The answer is ' + correctString;
    quiz.speech = 'Correct. The answer is ' + correctString;
    currentQuestion.timeBonus = calculateTimeBonus(now, currentQuestion.timeStarted);
  } else {
    quiz.template = 'Wrong. The answer is ' + correctString;
    quiz.speech = 'Wrong. The answer is ' + correctString;
    currentQuestion.timeBonus = 0;
  }
  currentQuestion.timeSpent = differenceInSeconds(now, currentQuestion.timeStarted);
  quiz.status = 'answer';

  dashbot.logIncoming(userAnswerString + " ("+currentQuestion.userAnswer+")", "CheckAnswer", $vivContext);
  dashbot.logOutgoing(quiz.template, "CheckAnswer", $vivContext);
  return quiz;
}
