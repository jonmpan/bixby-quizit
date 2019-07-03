const addEmoji = (quiz)=>{
  let emojis = ["🐴","🐷","🐏","🐘","🐤","🐣","🐬","🐳","🐝","🐈","🐕","🦄","🐁","🐻","🦎","🕷","💩"]
  if(quiz.questions[quiz.currentQuestion].emoji){
    quiz.questions[quiz.currentQuestion].emoji += emojis[Math.floor(Math.random()*emojis.length)];
  } else {
    quiz.questions[quiz.currentQuestion].emoji = emojis[Math.floor(Math.random()*emojis.length)];
  }
}

const countdownTimer = (quiz) => {
  if(quiz.questions[quiz.currentQuestion].timer > 0){
    quiz.questions[quiz.currentQuestion].timer += -5;     
  }
}

module.exports.function = function refreshQuestion (quiz) {
  addEmoji(quiz);
  countdownTimer(quiz)
  return quiz;
}