const { levenshteinQuestion, onlyNumbers } = require('./utils/index.js');
var console = require('console');

module.exports.function = function checkAnswer (quiz, userAnswer, userAnswerString, categories, difficulties) {
  let correctAnswer = '';
  let correctString = '';
  let bixbyResponse = '';
  let userAnswerString = userAnswerString;
  if(!userAnswerString){
    userAnswerString = '';
  }
  const currentQuestion = quiz.questions[quiz.currentQuestion]
  const answers = currentQuestion.answers;
  if(userAnswer == "A" && userAnswerString){
    userAnswer = null;
  } 
//  else if (userAnswer && userAnswerString){
//    userAnswerString = userAnswer + userAnswerString;
//    userAnswer = null;
//  }
  console.log(userAnswer)
  console.log(userAnswerString)
  if(categories){
    categories.map(o=>{
      userAnswerString += " "+o;
    })
  }
  if(difficulties){
    difficulties.map(o=>{
      userAnswerString += " "+o;
    })
  }
  for(var i = 0; i < answers.length; i++){
    let answer = answers[i]
    if(answer.correct){
      correctAnswer = answer.letter;
      correctString = answer.text;
    }
  }
  if(userAnswer instanceof Array){
    userAnswer = userAnswer[0];
  }
  if(userAnswer){
    console.log('inside userAnswer');
    if(correctAnswer.toString() === userAnswer.toString()){
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
  } else if(userAnswerString) {
    console.log('inside else userAnswerString');
    const comparedAnswer = levenshteinQuestion(userAnswerString.toString(), quiz.questions[quiz.currentQuestion]);
    userAnswer = comparedAnswer.answer;
    if(comparedAnswer.correct){
      quiz.score++;
      currentQuestion.correct = true;
      quiz.template = 'Correct. The answer is ' + correctString;
      quiz.speech = 'Correct. The answer is ' + correctString;
      quiz.youSaid = userAnswerString;
      quiz.youSaidSomething = true;
    } else {
      quiz.template = 'Wrong. The answer is ' + correctString;
      quiz.speech = 'Wrong. The answer is ' + correctString;
      quiz.youSaid = userAnswerString;
      quiz.youSaidSomething = true;
    }
  } else {
    console.log('inside else');
    if(correctAnswer.toString() === quiz.currentUserAnswer.toString()){
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
  }
  quiz.questions[quiz.currentQuestion].userAnswer = userAnswer;
  quiz.status = 'answer';
  return quiz;
}
