const { categoriesArray, categoriesInfo } = require('./utils/index.js');
var console = require('console');

const checkCategory = (categoryInput) => {
  if(categoryInput){
    var categoryInput = categoryInput.toLowerCase().replace(" ", "")
    console.log(categoryInput)
    if(categoriesInfo[categoryInput]){
      return categoriesInfo[categoryInput]
    }
  }
  return categoriesArray;
}

module.exports.function = function getCategory(categoryInput) {
  console.log('hi');
  console.log(categoryInput);
  return checkCategory(categoryInput);
};
