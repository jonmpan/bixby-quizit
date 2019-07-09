const { categoriesArray, categoriesInfo } = require('./utils/index.js');
var console = require('console');

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
  music: "film",
  musicals: "music",
  theatre: "theatre",
  television: "television",
  tv: "television",
  videogames: "video games",
  games: "video games",
  "virtualgames": "video games",
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
};

const checkCategory = (categoryInput) => {
  if(categoryInput){
    var categoryInputParsed = categoryInput.toLowerCase().replace(" ", "")
    if(categories[categoryInputParsed]){
      console.log('first console ' +categories[categoryInputParsed]);
      var categoryInfo = {};
      categoriesInfo.map(o=>{
        console.log('inside map '+ o.category + ' ' + categories[categoryInputParsed])
        if(o.category == categories[categoryInputParsed]){
          console.log('INSIDE IF')
          categoryInfo = o;
        }
      })
      console.log(categoryInfo)
      return categoryInfo;
    }
  }
  return categoriesInfo;
}

module.exports.function = function getCategory(categoryInput) {
  console.log('hi');
  console.log(categoryInput);
  return checkCategory(categoryInput);
};
