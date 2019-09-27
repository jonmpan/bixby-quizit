var http = require("http");
var dashbot = require("./utils/dashbot.js");
const { categories, categoriesArray, formatQuestions, difficultiesArray } = require("./utils/index.js");

module.exports.function = function getRandomQuiz($vivContext) {
  let url = "https://opentdb.com/api.php?amount=5&type=multiple";
  const category = categoriesArray[Math.floor(Math.random() * categoriesArray.length)];
  if (category !== "all categories") {
    const formattedCategory = category.toLowerCase().replace(" ", "");
    if (categories[formattedCategory]) {
      url += "&category=" + categories[formattedCategory];
    }
  }
  const difficulty = difficultiesArray[Math.floor(Math.random() * difficultiesArray.length)];
  if (difficulty.toString() !== "all difficulties") {
    url += "&difficulty=" + difficulty;
  }
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
      "QuizIt is a trivia game with thousands of questions! Your " + difficulty + " quiz on " + category + " will begin shortly.",
    speech:
      "QuizIt is a trivia game with thousands of questions! Your " + difficulty + " quiz on " + category + " will begin shortly.",
  };
  dashbot.logIncoming("random quiz", "GetRandomQuiz", $vivContext);
  dashbot.logOutgoing("QuizIt is a trivia game with thousands of questions! Your " + difficulty + " quiz on " + category + " will begin shortly.", "GetRandomQuiz", $vivContext);
  return quiz;
};