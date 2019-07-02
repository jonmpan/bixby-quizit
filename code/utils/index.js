const categories = {
  "generalknowledge":9,
  "books":10,
  "film":11,
  "music":12,
  "musicals":13,
  "theatre":13,
  "television":14,
  "videogames":15,
  "boardgames":16,
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

const categoriesArray = ["all categories", "general knowledge", "music", "video games", "anime", "computers", "geography", "animals", "books", "sports", "science", "history", "film", "musicals", "theatre", "television", "board games", "nature", "mathematics", "mythology", "politics", "art", "celebrities", "vehicles", "comics", "gadgets", "cartoon"]


const categoriesInfo = [
  {
    category: "any",
    text: "Any Category",
    description: "Questions from all the categories!",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "general",
    text: "General",
    description: "Test your general knowledge!",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "music",
    text: "Music",
    description: "How well do you know obscure bands?",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "videoGames",
    text: "Video Games",
    description: "1337",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "anime",
    text: "Anime",
    description: "I'm sorry this exists... in the best possible way.",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "computers",
    text: "Computers",
    description: "0b10100111001",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "geography",
    text: "Geography",
    description: "Do you know where Timbucktoo is?",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "animals",
    text: "Animals",
    description: "Why are cats so cute?",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "books",
    text: "Books",
    description: "I can't put this book on antigravity down!",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "sports",
    text: "Sports",
    description: "Go 49ers!",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "science",
    text: "Science",
    description: "Is this category a hypothesis or a theory?",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "history",
    text: "History",
    description: "A category as old as human history.",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "film",
    text: "Film",
    description: "Are you a cinephile?",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "musicals",
    text: "Musicals",
    description: "Take me for who I am, who I was meant to be!",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "theatre",
    text: "Theatre",
    description: "We're actors. We're the opposite of people!",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "television",
    text: "Television",
    description: "Making potatoes out of humans since 1927.",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "boardGames",
    text: "Board Games",
    description: "Come here to roll your 13 sided dice.",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "nature",
    text: "Nature",
    description: "Adopt the pace of nature: her secret is patience.",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "mathematics",
    text: "Mathematics",
    description: "This one is as easy as 3.14.",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "mythology",
    text: "Mythology",
    description: "Mythology is a subjective truth.",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "politics",
    text: "Politics",
    description: "Do you know your Presidents?",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "art",
    text: "Art",
    description: "Every artist was first an amateur.",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "celebrities",
    text: "Celebrities",
    description: "Are you famous? You might be in this quiz.",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "vehicles",
    text: "Vehicles",
    description: "What has 4 wheels and transports humans? A stroller.",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "comics",
    text: "Comics",
    description: "You can't hurry love or pizza. Especially pizza.",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "gadgets",
    text: "Gadgets",
    description: "Someone call the inspector!",
    // image: "/images/quizit-icon.png",
  },
  {
    category: "cartoon",
    text: "Cartoons",
    description: "Non-Anime cartoons are here.",
    // image: "/images/quizit-icon.png",
  },
];

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
  '&hellip':'…',
  '&shy;':'-'
}

function removeHtmlStuff(encodedString) {
  var translate_re = /&(nbsp|amp|quot|lt|gt|apos|Aacute|aacute|Agrave|Acirc|agrave|Acirc|acirc|Auml|auml|Atilde|atilde|Aring|aring|Aelig|aelig|Ccedil|ccedil|Eth|eth|Eacute|eacute|Egrave|egrave|Ecirc|ecirc|Euml|euml|Iacute|iacute|Igrave|igrave|Icirc|icirc|Iuml|iuml|Ntilde|ntilde|Oacute|oacute|Ograve|ograve|Ocirc|ocirc|Ouml|ouml|Otilde|otilde|Oslash|oslash|szlig|Thorn|thorn|Uacute|uacute|Ugrave|ugrave|Ucirc|ucirc|Uuml|uuml|Yacute|yacute|yuml|copy|reg|trade|lt|gt|euro|cent|pound|quot|lsquo|rsquo|ldquo|rdquo|laquo|raquo|mdash|ndash|deg|plusmn|frac14|frac12|frac34|times|divide|alpha|beta|infin|hellip|shy);/g;
  var translate = foreignCharacters;
  return encodedString.replace(translate_re, function(match, entity) {
    return translate[entity];
  }).replace(/&#(\d+);/gi, function(match, numStr) {
    var num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });
}

const removeA = (answer) =>{
  var tempString = "  " + answer;
  return tempString
    .replace("  a ", "")
    .replace("  A ", "")
    .trim();
}

const formatQuestions = results => {
  return results.map((result, j) => {
    const questionFormatted = result.question;
    const question = {
      question: removeHtmlStuff(questionFormatted),
      answers: [],
      category: result.category,
      difficulty: result.difficulty,
      correct: false,
    };
    result.incorrect_answers = result.incorrect_answers.filter(Boolean);
    result.correct_answer = removeA(result.correct_answer);
    result.incorrect_answers = result.incorrect_answers.map(o => {
      return removeA(o);
    });
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
    question.timer = 20;
    return question;
  });
};

function hasLetter(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function hasNumber(str) {
  return /^[0-9]+$/.test(str);
}

const onlyNumbers = str => {
  if (hasNumber(str) && !hasLetter(str)) {
    return true;
  }
  return false;
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
  const correctAnswer = answers.find(o=>{
    return o.correct === true;
  });
  if(onlyNumbers(correctAnswer.text)){
    if(answer == correctAnswer.text){
      return {
        answer: correctAnswer.letter,
        userAnswer: answer,
        correct: true,
        userInputString: answer
      };
    } else {
      const userSelectedAnswer = answers.find(o=>{
        return o.text == answer;
      });
      let userSelectedAnswerLetter = "No match"
      if(userSelectedAnswer){
        userSelectedAnswerLetter = userSelectedAnswer.letter;
      }
      return {
        answer: userSelectedAnswerLetter,
        userAnswer: answer,
        correct: false,
        userInputString: answer
      };
    }
  } else {
    answers.map(o => {
      if (answer == o.text) {
        levNums.push(0);
      } else {
        levNums.push(levDist(answer, o.text.toLowerCase()));
      }
    });
    const i = indexOfSmallest(levNums);
    if(levNums[i] < correctAnswer.text.length / 2 && levNums[i] < 5 || correctAnswer.text.length === 1){
      const userAnswer = answers[i].text;
      if (answers[i].correct) {
        return {
          answer: answers[i].letter,
          userAnswer: userAnswer,
          correct: true,
          userInputString: answer
        };
      } else {
        return {
          answer: answers[i].letter,
          userAnswer: userAnswer,
          correct: false,
          userInputString: answer
        };
      }
    } else {
      return {
        answer: 'No match',
        userAnswer: 'No match',
        correct: false,
        userInputString: answer
      };
    }
  }
};

const calculateFinalScore = (quiz) => {
  quiz.totalScore = 0;
  quiz.timeBonus = 0;
  quiz.questions.map((q,i)=>{
    if(q.correct){
      quiz.totalScore += 10;
      if(q.timer > 9){
        quiz.timeBonus += 10;
        quiz.totalScore += 10;
      } else {
        quiz.timeBonus += q.timer;
        quiz.totalScore += q.timer;
      }
    }
  })
}

module.exports = {
  categories:categories,
  categoriesArray:categoriesArray,
  categoriesInfo:categoriesInfo,
  formatQuestions:formatQuestions,
  levenshteinQuestion:levenshteinQuestion,
  onlyNumbers:onlyNumbers,
  calculateFinalScore:calculateFinalScore
}
