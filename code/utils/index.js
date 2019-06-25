const categories = {
  "general":9,
  "books":10,
  "film":11,
  "music":12,
  "musicals":13,
  "theatre":13,
  "television":14,
  "videoGames":15,
  "boardGames":16,
  "science":17,
  "nature":17,
  "computers":18,
  "mathematics":19,
  "mythology":20,
  "sports":21,
  "geography":22,
  "history":23,
  "politics":24,
  "art":25,
  "celebrities":26,
  "animals":27,
  "vehicles":28,
  "comics":29,
  "gadgets":30,
  "anime":31,
  "manga":31,
  "cartoon":32,
  "animation":33,
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// const removeHtmlStuff = text => {
//   // &oacute;
//   // &ouml;
//   return text.replace(/&quot;/g, '\"').replace(/&#039;/g, "\'").replace(/&amp;/g, "&");
// }

const foreignCharacters = {
"nbsp":" ",
"amp":"&",
"quot":"\"",
"lt":"<",
"gt":">",
"apos":"\'",
'Aacute':'Á',
'aacute':'á',
'Agrave':'À',
'Acirc':'Â',
'agrave':'à',
'Acirc':'Â',
'acirc':'â',
'Auml':'Ä',
'auml':'ä',
'Atilde':'Ã',
'atilde':'ã',
'Aring':'Å',
'aring':'å',
'Aelig':'Æ',
'aelig':'æ',
'Ccedil':'Ç',
'ccedil':'ç',
'Eth':'Ð',
'eth':'ð',
'Eacute':'É',
'eacute':'é',
'Egrave':'È',
'egrave':'è',
'Ecirc':'Ê',
'ecirc':'ê',
'Euml':'Ë',
'euml':'ë',
'Iacute':'Í',
'iacute':'í',
'Igrave':'Ì',
'igrave':'ì',
'Icirc':'Î',
'icirc':'î',
'Iuml':'Ï',
'iuml':'ï',
'Ntilde':'Ñ',
'ntilde':'ñ',
'Oacute':'Ó',
'oacute':'ó',
'Ograve':'Ò',
'ograve':'ò',
'Ocirc':'Ô',
'ocirc':'ô',
'Ouml':'Ö',
'ouml':'ö',
'Otilde':'Õ',
'otilde':'õ',
'Oslash':'Ø',
'oslash':'ø',
'szlig':'ß',
'Thorn':'Þ',
'thorn':'þ',
'Uacute':'Ú',
'uacute':'ú',
'Ugrave':'Ù',
'ugrave':'ù',
'Ucirc':'Û',
'ucirc':'û',
'Uuml':'Ü',
'uuml':'ü',
'Yacute':'Ý',
'yacute':'ý',
'yuml':'ÿ',
'copy':'©',
'reg':'®',
'trade' :'™',
'lt':'<',
'gt':'>',
'euro':'€',
'cent':'¢',
'pound':'£',
'quot':'"',
'lsquo':'‘',
'rsquo':'’',
'ldquo':'“',
'rdquo':'”',
'laquo':'«',
'raquo':'»',
'mdash':'—',
'ndash':'–',
'deg':'°',
'plusmn':'±',
'frac14':'¼',
'frac12':'½',
'frac34':'¾',
'times':'×',
'divide':'÷',
'alpha':'α',
'beta':'β',
'infin':'∞',
'&hellip':'…'
}

function removeHtmlStuff(encodedString) {
  var translate_re = /&(nbsp|amp|quot|lt|gt|apos|Aacute|aacute|Agrave|Acirc|agrave|Acirc|acirc|Auml|auml|Atilde|atilde|Aring|aring|Aelig|aelig|Ccedil|ccedil|Eth|eth|Eacute|eacute|Egrave|egrave|Ecirc|ecirc|Euml|euml|Iacute|iacute|Igrave|igrave|Icirc|icirc|Iuml|iuml|Ntilde|ntilde|Oacute|oacute|Ograve|ograve|Ocirc|ocirc|Ouml|ouml|Otilde|otilde|Oslash|oslash|szlig|Thorn|thorn|Uacute|uacute|Ugrave|ugrave|Ucirc|ucirc|Uuml|uuml|Yacute|yacute|yuml|copy|reg|trade|lt|gt|euro|cent|pound|quot|lsquo|rsquo|ldquo|rdquo|laquo|raquo|mdash|ndash|deg|plusmn|frac14|frac12|frac34|times|divide|alpha|beta|infin|hellip);/g;
  var translate = foreignCharacters;
  return encodedString.replace(translate_re, function(match, entity) {
      return translate[entity];
  }).replace(/&#(\d+);/gi, function(match, numStr) {
      var num = parseInt(numStr, 10);
      return String.fromCharCode(num);
  });
}

const formatQuestion = response => {
  const result = response.results[0];
  const questionFormatted = removeHtmlStuff(result.question)
  const question = {
    question: questionFormatted,
    answers: [],
    category: result.category,
    difficulty: result.difficulty,
  };
  for (var i = 0; i < result.incorrect_answers.length; i++) {
    question.answers.push({
      text: removeHtmlStuff(result.incorrect_answers[i]),
      correct: false,
    });
  }

  question.answers.push({
    text: removeHtmlStuff(result.correct_answer),
    correct: true,
  });
  shuffle(question.answers);

  for (var i = 0; i < question.answers.length; i++) {
    question.answers[i].letter = alphabet.charAt(i);
  }
  question.answers;
  return question;
};

const formatQuestions = results => {
  return results.map( result => {
    const questionFormatted = removeHtmlStuff(result.question)
    const question = {
      question: questionFormatted,
      answers: [],
      category: result.category,
      difficulty: result.difficulty,
      correct: false,
    };
    for (var i = 0; i < result.incorrect_answers.length; i++) {
      question.answers.push({
        text: removeHtmlStuff(result.incorrect_answers[i]),
        correct: false,
      });
    }

    question.answers.push({
      text: removeHtmlStuff(result.correct_answer),
      correct: true,
    });
    shuffle(question.answers);

    for (var i = 0; i < question.answers.length; i++) {
      question.answers[i].letter = alphabet.charAt(i);
    }
    question.answers;
    return question;
  })
};

const levDist = (s, t) => {
  var d = []; //2d matrix

  // Step 1
  var n = s.length;
  var m = t.length;

  if (n == 0) return m;
  if (m == 0) return n;

  //Create an array of arrays in javascript (a descending loop is quicker)
  for (var i = n; i >= 0; i--) d[i] = [];

  // Step 2
  for (var i = n; i >= 0; i--) d[i][0] = i;
  for (var j = m; j >= 0; j--) d[0][j] = j;

  // Step 3
  for (var i = 1; i <= n; i++) {
    var s_i = s.charAt(i - 1);

    // Step 4
    for (var j = 1; j <= m; j++) {
      //Check the jagged ld total so far
      if (i == j && d[i][j] > 4) return n;

      var t_j = t.charAt(j - 1);
      var cost = s_i == t_j ? 0 : 1; // Step 5

      //Calculate the minimum
      var mi = d[i - 1][j] + 1;
      var b = d[i][j - 1] + 1;
      var c = d[i - 1][j - 1] + cost;

      if (b < mi) mi = b;
      if (c < mi) mi = c;

      d[i][j] = mi; // Step 6

      //Damerau transposition
      if (i > 1 && j > 1 && s_i == t.charAt(j - 2) && s.charAt(i - 2) == t_j) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
      }
    }
  }

  // Step 7
  return d[n][m];
};

const indexOfSmallest = a => {
  var lowest = 0;
  for (var i = 1; i < a.length; i++) {
    if (a[i] < a[lowest]) lowest = i;
  }
  return lowest;
};

const levenshteinQuestion = (answer, question) => {
  const levNums = [];
  const answers = question.answers;
  answers.map(o => {
    levNums.push(levDist(answer, o.text));
  });
  const i = indexOfSmallest(levNums);
  const userAnswer = answers[i].text;
  if (answers[i].correct) {
    return {
      answer: answers[i].letter,
      userAnswer: userAnswer,
      correct: true,
    };
  } else {
    return {
      answer: answers[i].letter,
      userAnswer: userAnswer,
      correct: false,
    };
  }  
};

module.exports = {
  categories:categories,
  formatQuestion:formatQuestion,
  formatQuestions:formatQuestions,
  levenshteinQuestion:levenshteinQuestion
}
