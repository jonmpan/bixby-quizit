const { difficultiesInfo } = require("./utils/index.js");

const allDifficulties = ["easy", "medium", "hard", "all difficulties"];

const difficulties = {
  alldifficulties: "all difficulties",
  all: "all difficulties",
  any: "all difficulties",
  anydifficulty: "all difficulties",
  easy: "easy",
  simple: "easy",
  basic: "easy",
  medium: "medium",
  normal: "medium",
  hard: "hard",
  difficulty: "hard",
  reallyhard: "hard",
  random: "random",
};

module.exports.function = function getDifficulty(difficultyInput) {
  if (difficultyInput) {
    var difficultyInfo = null;
    const difficultyInputParsed = difficultyInput
    .toString()
    .toLowerCase()
    .replace(" ", "");
    if (difficulties[difficultyInputParsed]) {
      difficultiesInfo.map(o => {
        if (difficulties[difficultyInputParsed] == o.difficulty) {
          difficultyInfo = o;
        }
      });
    }
    if(difficultyInfo){
      return difficultyInfo;      
    } else {
      return difficultiesInfo
    }
  }
  return difficultiesInfo;
};
