export default [
  // #region Easy
  {
    questionText: "Which of the following is NOT a real programming language?",
    correctAnswer: "Gem",
    incorrectAnswers: ["Elixir", "Lua", "Rust"],
  },
  {
    questionText: "Which of the following will return true?",
    codeAnswer: true,
    correctAnswer: "Array.isArray([])",
    incorrectAnswers: [
      "typeof [] === 'array'",
      "isArray([])",
      "Object.isArray([])",
    ],
  },
  {
    questionText:
      "List the following languages in order of release (oldest to newest).\nJava, C++, C#, JavaScript",
    correctAnswer: "C++, Java, JavaScript, C#",
    incorrectAnswers: [
      "C++, Java, C#, JavaScript",
      "Java, C++, C#, JavaScript",
      "C++, JavaScript, Java, C#",
    ],
  },
  {
    questionText: "How many threads does JavaScript code run in?",
    correctAnswer: "1",
    incorrectAnswers: ["2", "8", "no set number"],
  },
  {
    questionText:
      "If you apply margin on an inline element which sides will it apply to?",
    correctAnswer: `Only left and right`,
    incorrectAnswers: [`Only top and bottom`, `All sides`, `No sides`],
  },
  // #endregion Easy
  // #region Medium
  {
    questionText:
      "How do you create an object in JavaScript that has no prototype?",
    codeAnswer: true,
    correctAnswer: "Object.create(null)",
    incorrectAnswers: [
      "Object.create(undefined)",
      "new Object(undefined)",
      "new Object(null)",
    ],
  },
  {
    questionText: "Which of these is true about visibility: hidden in CSS?",
    correctAnswer: "It occupies space",
    incorrectAnswers: [
      "It can still be clicked on",
      "It is removed from layout flow",
      "It is the same as opacity: 0",
    ],
  },
  {
    questionText: "How many bytes is an unsigned short in C?",
    correctAnswer: "2",
    incorrectAnswers: ["4", "1", "8"],
  },
  {
    questionText: "In what order are margin and padding defined in CSS?",
    correctAnswer: "Top, Right, Bottom, Left",
    incorrectAnswers: [
      "Top, Bottom, Left, Right",
      "Right, Bottom, Left ,Top",
      "Left, Right, Top, Bottom",
    ],
  },
  {
    questionText: "Which of the following is not a standard React hook?",
    codeAnswer: true,
    correctAnswer: "useDerivedStateFromProps",
    incorrectAnswers: [
      "useDebugValue",
      "useLayoutEffect",
      "useImperativeHandle",
    ],
  },
  // #endregion Medium
  // #region Hard
  {
    questionText: "In what order will these numbers be logged?",
    questionCode: `console.log(1)
setTimeout(() => console.log(2), 5000)
setTimeout(() => console.log(3))
Promise.resolve(4).then(console.log)
console.log(5)
`,
    correctAnswer: "1 5 4 3 2",
    incorrectAnswers: ["1 3 4 5 2", "1 4 5 3 2", "1 3 5 4 2"],
  },
  {
    questionText: "Which of the following is false?",
    codeAnswer: true,
    correctAnswer: "String('') instanceof String",
    incorrectAnswers: [
      "new String('') == ''",
      "String('') === ''",
      "new String('') instanceof Object",
    ],
  },
  {
    questionText: "What does this function return if you pass in 2 as x?",
    questionCode: `function f(x) {
  x++
  (x = x - 3) && ++x
  return x--
}`,
    correctAnswer: "0",
    incorrectAnswers: ["1", "-1", "2"],
  },
  {
    questionText:
      "React StrictMode helps find unintentional side effects by double invoking certain functions. Which of the following functions is not double invoked by StrictMode?",
    correctAnswer: "Functions passed to useEffect",
    incorrectAnswers: [
      "Function components",
      "Functions passed to useState",
      "Class component constructors",
    ],
  },
  {
    questionText: "Which of these creates a stacking context in CSS?",
    correctAnswer: "position: sticky",
    incorrectAnswers: ["opacity: 1", "z-index: 10", "order: 4"],
  },
  // #endregion Hard
]
