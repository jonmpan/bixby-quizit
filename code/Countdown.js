module.exports.function = function countdown (fullQuestion) {
  if(fullQuestion.timer > 0){
    fullQuestion.timer--
  }
  return fullQuestion;
}
