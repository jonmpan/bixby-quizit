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
};

module.exports.function = function getDifficulty(difficultyInput) {
  if (difficultyInput) {
    var difficultyInfo = {};
    const difficultyInputParsed = difficultyInput
      .toLowerCase()
      .replace(" ", "");
    if (difficulties[difficultyInputParsed]) {
      difficultiesInfo.map(o => {
        if (difficulties[difficultyInputParsed] == o.difficulty) {
          difficultyInfo = o;
        }
      });
    }
    return difficultyInfo;
  }
  return difficultiesInfo;
};
