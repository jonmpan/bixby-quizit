module.exports.function = function checkAnswer (quiz, userAnswer) {
  let correctAnswer = '';
  let correctString = '';
  let bixbyResponse = '';
  const currentQuestion = quiz.questions[quiz.currentQuestion]
  const answers = currentQuestion.answers;
  for(var i = 0; i < answers.length; i++){
    let answer = answers[i]
    if(answer.correct){
      correctAnswer = answer.letter;
      correctString = answer.text;
    }
  }

  if(userAnswer){
    if(correctAnswer.toString() === userAnswer.toString()){
      quiz.score++;
      currentQuestion.correct = true;
      quiz.template = 'Correct. The answer is ' + correctString;
      quiz.speech = 'Correct. The answer is ' + correctString;
    } else {
      quiz.template = 'Wrong. The answer is ' + correctString;
      quiz.speech = 'Wrong. The answer is ' + correctString;
    }
  } else {
    if(correctAnswer.toString() === quiz.currentUserAnswer.toString()){
      quiz.score++;
      currentQuestion.correct = true;
      quiz.template = 'Correct. The answer is ' + correctString;
      quiz.speech = 'Correct. The answer is ' + correctString;
    } else {
      quiz.template = 'Wrong. The answer is ' + correctString;
      quiz.speech = 'Wrong. The answer is ' + correctString;
    }
  }

  quiz.questions[quiz.currentQuestion].userAnswer = userAnswer;
  quiz.status = 'answer';
  return quiz;
}
