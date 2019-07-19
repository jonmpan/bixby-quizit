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

const letterAliases = {
  a:"A",
  hey:"A",
  b:"B",
  bee:"B",
  c:"C",
  see:"C",
  sea:"C",
  d:"D",
  tee:"D"
}

const categoriesArray = ["general knowledge", "music", "video games", "anime", "computers", "geography", "animals", "books", "sports", "science", "history", "film", "musicals", "television", "board games", "nature", "mathematics", "mythology", "politics", "art", "celebrities", "vehicles", "comics", "gadgets", "cartoon", "all categories"];

const difficultiesArray = ['easy', 'medium', 'all difficulties'];

const categoriesInfo = [
  {
    category: "general knowledge",
    text: "General Knowledge",
    description: "General Knowledge, reporting!",
    image: "/icons/generalknowledge.png",
  },
  {
    category: "music",
    text: "Music",
    description: "Do you know obscure bands?",
    image: "/icons/music.png",
  },
  {
    category: "video games",
    text: "Video Games",
    description: "1337",
    image: "/icons/videogames.png",
  },
  {
    category: "anime",
    text: "Anime",
    description: "I'm sorry this exists, in the best possible way.",
    image: "/icons/anime.png",
  },
  {
    category: "computers",
    text: "Computers",
    description: "0b10100111001",
    image: "/icons/computers.png",
  },
  {
    category: "geography",
    text: "Geography",
    description: "Do you know where Timbuktu is?",
    image: "/icons/geography.png",
  },
  {
    category: "animals",
    text: "Animals",
    description: "Why are cats so cute?",
    image: "/icons/animals.png",
  },
  {
    category: "books",
    text: "Books",
    description: "I can't put this book on antigravity down!",
    image: "/icons/books.png",
  },
  {
    category: "sports",
    text: "Sports",
    description: "Go 49ers!",
    image: "/icons/sports.png",
  },
  {
    category: "science",
    text: "Science",
    description: "Is this category a hypothesis or a theory?",
    image: "/icons/science.png",
  },
  {
    category: "history",
    text: "History",
    description: "A category as old as human history.",
    image: "/icons/history.png",
  },
  {
    category: "film",
    text: "Film",
    description: "Are you a cinephile?",
    image: "/icons/film.png",
  },
  {
    category: "musicals",
    text: "Musicals",
    description: "Take me for who I am, who I was meant to be!",
    image: "/icons/musicals.png",
  },
  // {
  //   category: "theatre",
  //   text: "Theatre",
  //   description: "To be, or not to be.",
  //   image: "/icons/theatre.png",
  // },
  {
    category: "television",
    text: "Television",
    description: "Making potatoes out of humans since 1927.",
    image: "/icons/television.png",
  },
  {
    category: "board games",
    text: "Board Games",
    description: "Time to roll your 13 sided dice.",
    image: "/icons/boardgames.png",
  },
  {
    category: "nature",
    text: "Nature",
    description: "Adopt the pace of nature: her secret is patience.",
    image: "/icons/nature.png",
  },
  {
    category: "mathematics",
    text: "Mathematics",
    description: "This one is as easy as 3.14.",
    image: "/icons/math.png",
  },
  {
    category: "mythology",
    text: "Mythology",
    description: "Mythology is a subjective truth.",
    image: "/icons/mythology.png",
  },
  {
    category: "politics",
    text: "Politics",
    description: "Do you know your Presidents?",
    image: "/icons/politics.png",
  },
  {
    category: "art",
    text: "Art",
    description: "Every artist was first an amateur.",
    image: "/icons/art.png",
  },
  {
    category: "celebrities",
    text: "Celebrities",
    description: "Are you famous? You might be in this quiz.",
    image: "/icons/celebrities.png",
  },
  {
    category: "vehicles",
    text: "Vehicles",
    description: "You can't drive this category away!",
    image: "/icons/vehicles.png",
  },
  {
    category: "comics",
    text: "Comics",
    description: "You can't hurry love or pizza. Especially pizza.",
    image: "/icons/comics.png",
  },
  {
    category: "gadgets",
    text: "Gadgets",
    description: "Someone call the inspector!",
    image: "/icons/gadgets.png",
  },
  {
    category: "cartoon",
    text: "Cartoons",
    description: "Non-Anime cartoons are here.",
    image: "/icons/cartoon.png",
  },
  {
    category: "all categories",
    text: "Any Category",
    description: "Questions from all the categories!",
    image: "/icons/allcategories.png",
  },
  {
    category: "random",
    text: "Random Category",
    description: "QuizIt will select a random category.",
    image: "/icons/random.png",
  },
];

const difficultiesInfo = [
  {
    difficulty: "easy",
    text: "Easy",
    description: "A nice and relaxing set of questions",
    image: "/icons/easy.png",
  },
  {
    difficulty: "medium",
    text: "Medium",
    description: "Honestly, most of these are pretty hard",
    image: "/icons/medium.png",
  },
  {
    difficulty: "hard",
    text: "Hard",
    description: "Not for the faint of heart... Good luck!",
    image: "/icons/hard.png",
  },
  {
    difficulty: "all difficulties",
    text: "All Difficulties!",
    description: "Easy, medium, and hard questions",
    image: "/icons/alldifficulties.png",
  },
  {
    difficulty: "random",
    text: "Random",
    description: "So random! Wow. Much difficulty!",
    image: "/icons/random.png",
  }
]

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
  'infin':'∞',
  'hellip':'…',
  'shy':'-',
  'micro':'µ',
  'Alpha':'Α',
  'alpha':'α',
  'Beta':'Β',
  'beta':'β',
  'Gamma':'Γ',
  'gamma':'γ',
  'Delta':'Δ',
  'delta':'δ',
  'Epsilon':'Ε',
  'epsilon':'ε',
  'Zeta':'Ζ',
  'zeta':'ζ',  
  'Eta':'Η',
  'eta':'η',
  'Theta':'Θ',
  'theta':'θ',
  'Iota':'Ι',
  'iota':'ι',
  'Kappa':'Κ',
  'kappa':'κ',
  'Lambda':'Λ',
  'lambda':'λ',
  'Mu':'Μ',
  'mu':'μ',
  'Nu':'Ν',
  'nu':'ν',
  'Xi':'Ξ',
  'xi':'ξ',
  'Omicron':'Ο',
  'omicron':'',
  'Pi':'Π',
  'pi':'',
  'Rho':'Ρ',
  'rho':'',
  'Sigma':'Σ',
  'sigma':'σ',
  'sigmaf':'ς',
  'Tau':'Τ',
  'tau':'τ',
  'Upsilon':'Υ',
  'upsilon':'υ',
  'Phi':'Φ',
  'phi':'φ',
  'Chi':'Χ',
  'chi':'χ',
  'Psi':'Ψ',
  'psi':'ψ',
  'Omega':'Ω',
  'omega':'ω',
  'thetasym':'ϑ',
  'upsih':'ϒ',
  'piv':'ϖ'
}

function removeHtmlStuff(encodedString) {
  var translate_re = /&(nbsp|amp|quot|lt|gt|apos|Aacute|aacute|Agrave|Acirc|agrave|Acirc|acirc|Auml|auml|Atilde|atilde|Aring|aring|Aelig|aelig|Ccedil|ccedil|Eth|eth|Eacute|eacute|Egrave|egrave|Ecirc|ecirc|Euml|euml|Iacute|iacute|Igrave|igrave|Icirc|icirc|Iuml|iuml|Ntilde|ntilde|Oacute|oacute|Ograve|ograve|Ocirc|ocirc|Ouml|ouml|Otilde|otilde|Oslash|oslash|szlig|Thorn|thorn|Uacute|uacute|Ugrave|ugrave|Ucirc|ucirc|Uuml|uuml|Yacute|yacute|yuml|copy|reg|trade|lt|gt|euro|cent|pound|quot|lsquo|rsquo|ldquo|rdquo|laquo|raquo|mdash|ndash|deg|plusmn|frac14|frac12|frac34|times|divide|infin|hellip|shy|micro|Alpha|alpha|Beta|beta|Gamma|gamme|Delta|delta|Epsilon|epsilon|Zeta|zeta|Eta|eta|Theta|theta|Iota|iota|Kappa|kappa|Lambda|lambda|Mu|mu|Nu|nu|Xi|xi|Omicron|omicron|Pi|pi|Rho|rho|Sigma|sigma|sigmaf|Tau|tau|Upsilon|upsilon|Phi|phi|Chi|chi|Psi|psi|Omega|omega|thetasym|upsih|piv);/g;
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
      category: result.category.replace("Entertainment: ", "").replace("Science: ", ""),
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
      if(question.answers[i].correct){
        question.acceptedAnswers = [
          question.answers[i].letter,
          question.answers[i].text,
          question.answers[i].letter + " " + question.answers[i].text]
      }
    }
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
        levNums.push(levDist(answer.toLowerCase(), o.text.toLowerCase()));
      }
    });
    const i = indexOfSmallest(levNums);
    if(levNums[i] < correctAnswer.text.length / 2 && levNums[i] < 8 || correctAnswer.text.length === 1){
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

const differenceInSeconds = (t1, t2) => {
  var t1 = new Date(t1);
  var t2 = new Date(t2);
  return (t1.getTime() - t2.getTime()) / 1000;
};

// const calculateTimeBonus = (t1, t2) => {
//   var dif = Math.floor(differenceInSeconds(t1, t2));
//   var cutoff = 20;
// 
//   if (dif < cutoff) {
//     return 10;
//   } else {
//     if (cutoff + 10 - dif > 0) {
//       return cutoff + 10 - dif;
//     } else {
//       return 0;
//     }
//   }
// };

const calculateTimeBonus = (t1, t2) => {
  var dif = Math.floor(differenceInSeconds(t1, t2));
  var score = 10;
  if ((dif - 10) / 2 > 0) {
    if (10 - Math.floor((dif - 10) / 2) > 0) {
      return 10 - Math.floor((dif - 10) / 2);
    }
    return 0;
  }
  return score;
};

const calculateTotalTimeBonus = quiz => {
  const questions = quiz.questions;
  var timeBonus = 0;
  questions.map(q=>{
    timeBonus += parseInt(q.timeBonus);
  });
  return timeBonus;
}

const calculateTotalScore = quiz => {
  const questions = quiz.questions;
  var totalScore = 0;
  questions.map(q=>{
    if(q.correct){
      totalScore += 10;
      totalScore += parseInt(q.timeBonus);
    }
  })
  return totalScore;
}

module.exports = {
  categories:categories,
  categoriesArray:categoriesArray,
  categoriesInfo:categoriesInfo,
  difficultiesArray:difficultiesArray,
  difficultiesInfo:difficultiesInfo,
  formatQuestions:formatQuestions,
  levenshteinQuestion:levenshteinQuestion,
  onlyNumbers:onlyNumbers,
  letterAliases:letterAliases,
  differenceInSeconds:differenceInSeconds,
  calculateTimeBonus:calculateTimeBonus,
  calculateTotalTimeBonus:calculateTotalTimeBonus,
  calculateTotalScore:calculateTotalScore
}
