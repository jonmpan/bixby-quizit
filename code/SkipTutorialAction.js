var dashbot = require("./utils/dashbot.js");

module.exports.function = function skipTutorialAction (skip, $vivContext) {
  dashbot.logIncoming("Skip Tutorial.", "SkipTutorialAction", $vivContext);
  if(skip){
    return false;
  } else {
    return true;    
  }
}