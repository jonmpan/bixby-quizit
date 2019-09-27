var http = require("http");
var dashbot = require("./utils/dashbot.js");
const { categories, formatQuestions, categoriesArray, difficultiesArray } = require("./utils/index.js");

module.exports.function = function getQuiz(category, difficulty, $vivContext) {
  let url = "https://opentdb.com/api.php?amount=5&type=multiple";
  category == 'random' ? category = categoriesArray[Math.floor(Math.random()*categoriesArray.length)] : null;
  if (category !== "all categories") {
    const formattedCategory = category.toLowerCase().replace(" ", "");
    categories[formattedCategory] ? url += "&category=" + categories[formattedCategory] : null;
  }
  difficulty == 'random' ? difficulty = difficultiesArray[Math.floor(Math.random()*difficultiesArray.length)] : null;
  difficulty.toString() !== "all difficulties" ? url += "&difficulty=" + difficulty : null;
  var response = http.getUrl(url, { format: "json", cacheTime: 0 });
  const questions = formatQuestions(response.results);
  const quiz = {
    questions: questions,
    category: category,
    difficulty: difficulty,
    currentQuestion: -1,
    score: 0,
    questionCount: questions.length,
    status: "tutorial",
    template:
      "QuizIt is a trivia game with thousands of questions! Your "+difficulty+" quiz on "+category+" will begin shortly.",
    speech:
      "QuizIt is a trivia game with thousands of questions! Your "+difficulty+" quiz on "+category+" will begin shortly.",
  };
  dashbot.logIncoming(difficulty + " " + category, "GetQuiz", $vivContext);
  dashbot.logOutgoing("QuizIt is a trivia game with thousands of questions! Your "+difficulty+" quiz on "+category+" will begin shortly.", "GetQuiz", $vivContext);
  return quiz;
};