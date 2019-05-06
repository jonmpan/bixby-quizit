var console = require('console');

module.exports.function = function checkAnswer (answerAndQuestion, $vivContext) {
  const {fullQuestion, userAnswer} = answerAndQuestion;
  let correctAnswer = '';
  let correctString = '';
  const answers = fullQuestion.answers;
  for(var i = 0; i < answers.length; i++){
    let answer = answers[i]
    if(answer.correct){
      correctAnswer = answer.letter;
      correctString = answer.text;
    }
  }

  if(correctAnswer.toString() === userAnswer.toString()){
    answerAndQuestion.bixbyResponse = 'Correct. The answer is ' + correctString;
  } else {
    answerAndQuestion.bixbyResponse = 'Wrong. The answer is ' + correctString;
  }
  return answerAndQuestion;
}
