export default [
  {
    questionText: "In JavaScript, which method returns a new array based on the results of running a specified action on each element in the original array?",
    correctAnswer: "map",
    incorrectAnswers: [
      "reduce",
      "forEach",
      "transform"
    ]
  },
  {
    questionText: "In CSS, what is the order of the box model from the inside out?",
    correctAnswer: "Content, Padding, Border, Margin",
    incorrectAnswers: [
      "Content, Border, Padding, Margin",
      "Padding, Content, Border, Margin",
      "Content, Margin, Border, Padding"
    ]
  },
  {
    questionText: "Which of the following is not a type in JavaScript?",
    correctAnswer: 'integer',
    incorrectAnswers: [
      'number',
      'string',
      'boolean'
    ]
  },
  {
    questionText: "Which unit in CSS is based on the size of the screen width.",
    correctAnswer: "vw",
    incorrectAnswers: [
      "%",
      "vx",
      "sw"
    ]
  },
  {
    questionText: "In Node.js, how do you import a module using CommonJS.",
    codeAnswer: true,
    correctAnswer: "const t = require('f')",
    incorrectAnswers: [
      "const t = include('f')",
      "import t from 'f'",
      "const t = import('f')"
    ]
  },
  {
    questionText: "In what order are margin and padding defined in CSS?",
    correctAnswer: "Top, Right, Bottom, Left",
    incorrectAnswers: [
      "Top, Bottom, Left, Right",
      "Right, Bottom, Left ,Top",
      "Left, Right, Top, Bottom"
    ]
  },
  {
    questionText: "Which of the following is invalid JavaScript for importing from a module?",
    codeAnswer: true,
    correctAnswer: "import * as n2, { t } from './f.js'",
    incorrectAnswers: [
      "import n, { t } from './f.js'",
      "import { default as n2, t } from './f.js'",
      "import n, { t as t2 } from './f.js'"
    ]
  },
  {
    questionText: "What is the result of 100 / 0 in JavaScript?",
    correctAnswer: "Infinity",
    incorrectAnswers: [
      "0",
      "It throws an error",
      "NaN"
    ]
  },
  {
    questionText: "What is the correct way to check for NaN in JavaScript?",
    codeAnswer: true,
    correctAnswer: "isNaN(10)",
    incorrectAnswers: [
      "10 == NaN",
      "10 === NaN",
      "isNumber(10)"
    ]
  },
  {
    questionText: "Which is the most popular browser?",
    correctAnswer: "Chrome For Android",
    incorrectAnswers: [
      "Firefox",
      "Chrome For Desktop",
      "Safari For iOS"
    ]
  },
  {
    questionText: "Which of the following is false?",
    correctAnswer: "NaN == NaN",
    codeAnswer: true,
    incorrectAnswers: [
      "null == undefined",
      "'' == false",
      "false === false"
    ]
  },
  {
    questionText: "How do you name a grid line in CSS?",
    codeAnswer: true,
    correctAnswer: "grid-template-columns: 1fr [name]",
    incorrectAnswers: [
      "grid-template-columns: 1fr <name>",
      "grid-template-columns: 1fr (name)",
      "grid-template-columns: [1fr], [name]"
    ]
  },
  {
    questionText: "What does this function return if you pass in 2 as x?",
    questionCode: `function f(x) {
  x++
  (x = x - 3) && ++x
  return x--
}`,
    correctAnswer: "0",
    incorrectAnswers: [
      "1",
      "-1",
      "2"
    ]
  },
  {
    questionText: "How do you define multiple transitions in CSS?",
    codeAnswer: true,
    correctAnswer: "transition: width 1s, height 2s",
    incorrectAnswers: [
      "transition: width height, 1s 2s",
      "transition: width, height 1s, 2s",
      "transition: width 1s / height 2s"
    ]
  },
  {
    questionText: "What is the most searched term on caniuse.com?",
    correctAnswer: "flexbox",
    incorrectAnswers: [
      "grid",
      "position sticky",
      "transforms"
    ]
  }
]