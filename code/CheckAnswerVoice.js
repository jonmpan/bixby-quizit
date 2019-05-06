var console = require('console');

module.exports.function = function checkAnswerA (fullQuestion, userAnswer) {
  console.log(fullQuestion);
  console.log(userAnswer);
  let correctAnswer = '';
  let correctString = '';
  let bixbyResponse = '';
  const answers = fullQuestion.answers;
  for(var i = 0; i < answers.length; i++){
    let answer = answers[i]
    if(answer.correct){
      correctAnswer = answer.letter;
      correctString = answer.text;
    }
  }

  if(correctAnswer.toString() === userAnswer.toString()){
    bixbyResponse = 'Correct. The answer is ' + correctString;
  } else {
    bixbyResponse = 'Wrong. The answer is ' + correctString;
  }
  return {
    userAnswer:userAnswer,
    fullQuestion:fullQuestion,
    bixbyResponse:bixbyResponse
  }
}
