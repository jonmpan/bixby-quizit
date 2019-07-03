const { calculateFinalScore, makeQuiz } = require("./utils/index.js");

const setNextQuestion = (quiz) => {
  quiz.currentQuestion++;
    const currentQuestion = quiz.questions[quiz.currentQuestion];
    if(quiz.currentQuestion < quiz.questions.length){
      var questionCounter = quiz.currentQuestion + 1;
      quiz.status = 'question';
      quiz.template = "Question " +questionCounter+ " out of " +quiz.questionCount+ ". " +currentQuestion.question;
      quiz.speech = "Question " +questionCounter+ "... " +currentQuestion.question;
      currentQuestion.answers.map(o=>{
        quiz.speech += "... " + o.letter + "... " + o.text      
      })
    }
    else {
      calculateFinalScore(quiz);
      quiz.status = 'completed';
      quiz.template = "Congratulations! You got " +quiz.score+ " out of " +quiz.questionCount+ " right. Your score is "+quiz.totalScore+" out of 100 points.";
      quiz.speech = "Congratulations! You got " +quiz.score+ " out of " +quiz.questionCount+ " right. Your score is "+quiz.totalScore+" out of 100 points.";
      if(quiz.score == quiz.questionCount){
        quiz.template += " You're so smart. Have a cookie!"
        quiz.speech += " You're so smart. Have a cookie!"
      }
      else if(quiz.score == 0){
        quiz.template += " It's ok... It could be worse, right?"
        quiz.speech += " It's ok... It could be worse, right?"
      }
    }
    return quiz;  
}

module.exports.function = function nextQuestion (quiz, tutorial) {
  if(!quiz){
    return setNextQuestion(makeQuiz(tutorial.category, tutorial.difficulty));
  } else {
    return setNextQuestion(quiz)
  }
}

