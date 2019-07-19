const { categoriesArray, categoriesInfo } = require("./utils/index.js");
var console = require("console");

const categories = {
  all: "all categories",
  allcategories: "all categories",
  anycategory: "all categories",
  allcategory: "all categories",
  any: "all categories",
  generalknowledge: "general knowledge",
  general: "general knowledge",
  books: "books",
  film: "film",
  films: "film",
  movie: "film",
  movies: "film",
  music: "music",
  musicals: "music",
  theatre: "theatre",
  television: "television",
  tv: "television",
  videogames: "video games",
  games: "video games",
  virtualgames: "video games",
  boardgames: "board games",
  boringgames: "board games",
  boredgames: "board games",
  boring: "board games",
  science: "science",
  technology: "science",
  nature: "nature",
  computers: "computers",
  pc: "computers",
  pcs: "computers",
  personcomputers: "computers",
  math: "mathematics",
  mathematics: "mathematics",
  mythology: "mythology",
  sports: "sports",
  geography: "geography",
  goelogy: "geography",
  history: "history",
  politics: "politics",
  art: "art",
  celebrities: "celebrities",
  animals: "animals",
  vehicles: "vehicles",
  cars: "vehicles",
  comics: "comics",
  comicbooks: "comics",
  gadgets: "gadgets",
  anime: "anime",
  manga: "manga",
  cartoon: "cartoon",
  cartoons: "cartoon",
  animation: "animation",
  random: "random"
};

const checkCategory = categoryInput => {
  if (categoryInput) {
    var categoryInputParsed = categoryInput.toLowerCase().replace(" ", "");
    if (categories[categoryInputParsed]) {
      var categoryInfo = {};
      categoriesInfo.map(o => {
        if (o.category == categories[categoryInputParsed]) {
          categoryInfo = o;
        }
      });
      return categoryInfo;
    }
  }
  return categoriesInfo;
};

module.exports.function = function getCategory(categoryInput) {
  return checkCategory(categoryInput);
};
