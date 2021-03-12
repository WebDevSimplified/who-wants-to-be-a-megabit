export default [
  // #region Easy
  {
    questionText: "How many different heading sizes are there in HTML?",
    correctAnswer: "6",
    incorrectAnswers: [
      "7",
      "3",
      "5"
    ]
  },
  {
    questionText: "Which of the following is NOT a Node.js framework?",
    correctAnswer: "Neat",
    incorrectAnswers: [
      "Express",
      "Sails",
      "Hapi"
    ]
  },
  {
    questionText: "In Java strings are immutable so when concatenating multiple strings together what class should you use?",
    correctAnswer: "StringBuilder",
    incorrectAnswers: [
      "StringBuffer",
      "String",
      "MutableString"
    ]
  },
  {
    questionText: "Which of the following commands starts a Node.js REPL session?",
    correctAnswer: "node",
    incorrectAnswers: [
      "node console",
      "node repl",
      "node dev"
    ]
  },
  {
    questionText: "Which of the following people has been fired or dumped at every occasion (as a millionaire)?",
    correctAnswer: `TechLead`,
    incorrectAnswers: [
      `Joma Tech`,
      `Nick White`,
      `Clever Programmer`
    ]
  },
  // #endregion Easy
  // #region Medium
  {
    questionText: "What does the following JavaScript code log?",
    questionCode: `console.log(a)
var a = 10
console.log(10)`,
    questionLanguage: 'js',
    correctAnswer: "undefined 10",
    incorrectAnswers: [
      "10 10",
      "null 10",
      "Throws an error"
    ]
  },
  {
    questionText: "What is the WORST case time complexity of Quicksort?",
    correctAnswer: "n^2",
    incorrectAnswers: [
      "n",
      "n*log(n)",
      "n^3"
    ]
  },
  {
    questionText: "Which CSS selector is the most specific?",
    codeAnswer: true,
    correctAnswer: "a#id .red:first-child",
    incorrectAnswers: [
      "#id > .red:not(li)",
      "a.green.bold.wide",
      "#id.small.red"
    ]
  },
  {
    questionText: "Which of the following is NOT true about a script loaded with the defer attribute?",
    correctAnswer: "Execute after DOMContentLoaded",
    incorrectAnswers: [
      "Can only be used on external scripts",
      "Execute scripts in order",
      "Download async while DOM is being parsed"
    ]
  },
  {
    questionText: "What does this JavaScript code log?",
    questionLanguage: 'js',
    questionCode: `const arr = [1, 2, 3, 4, 5]
arr.length = 2
console.log(arr[3])
`,
    correctAnswer: "undefined",
    incorrectAnswers: [
      "4",
      "2",
      "null"
    ]
  },
  // #endregion Medium
  // #region Hard
  {
    questionText: "Which of the following is the oldest frontend framework?",
    correctAnswer: "Backbone",
    incorrectAnswers: [
      "Ember",
      "React",
      "Angular"
    ]
  },
  {
    questionText: "What is the output of this JavaScript code?",
    questionLanguage: 'js',
    questionCode: `let i
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i)
  }
  setTimeout(log, 100)
}`,
    correctAnswer: "3 3 3",
    incorrectAnswers: [
      "0 1 2",
      "2 2 2",
      "undefined undefined undefined"
    ]
  },
  {
    questionText: "What is the output of the following JS Code",
    questionLanguage: 'js',
    questionCode: `1 + 4 * 2 + 7 - '6' + '4' * 5 + '3' - '12'`,
    correctAnswer: "291",
    incorrectAnswers: [
      "201",
      "18",
      "66"
    ]
  },
  {
    questionText: "CSS 2 added a bunch of new media types which were later deprecated. Which of the following types is not an actual media type?",
    correctAnswer: "mobile",
    incorrectAnswers: [
      "braille",
      "aural",
      "tty"
    ]
  },
  {
    questionText: "What are labeled statements used for in JavaScript?",
    questionCode: 'label:',
    questionLanguage: 'js',
    correctAnswer: "To label loops for break and continue",
    incorrectAnswers: [
      "For advanced logging",
      "To label anonymous functions",
      "To create a labeled code region"
    ]
  }
  // #endregion Hard
]