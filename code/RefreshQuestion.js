module.exports.function = function refreshQuestion (quiz) {
  let emojis = ["🐴","🐷","🐏","🐘","🐤","🐣","🐬","🐳","🐝","🐈","🐕","🦄","🐁","🐻","🦎","🕷","💩"]
  if(quiz.questions[quiz.currentQuestion].refresher){
    quiz.questions[quiz.currentQuestion].refresher += emojis[Math.floor(Math.random()*emojis.length)];
  } else {
    quiz.questions[quiz.currentQuestion].refresher = emojis[Math.floor(Math.random()*emojis.length)];
  }
  return quiz;
}