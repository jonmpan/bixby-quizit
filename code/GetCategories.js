const { categoriesArray, categoriesInfo } = require('./utils/index.js');

module.exports.function = function getCategories() {
  return categoriesArray;
};
