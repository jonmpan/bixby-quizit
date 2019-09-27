var dashbot = require("./utils/dashbot.js");

module.exports.function = function help ($vivContext) {
  dashbot.logIncoming("help", "Help", $vivContext);
  dashbot.logOutgoing("Here is the help screen.", "GetQuiz", $vivContext);
  return true;
}
