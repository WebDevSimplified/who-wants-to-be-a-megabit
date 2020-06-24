export default [
  // #region Easy
  {
    questionText: "What does React use to make DOM diffing and manipulation efficient?",
    correctAnswer: "Virtual DOM",
    incorrectAnswers: [
      "Shadow DOM",
      "React DOM",
      "Fast DOM"
    ]
  },
  {
    questionText: "Which company was React created by?",
    correctAnswer: "Facebook",
    incorrectAnswers: [
      "Google",
      "Microsoft",
      "Netflix"
    ]
  },
  {
    questionText: "Which is an invalid return from a function component?",
    codeAnswer: true,
    correctAnswer: "{ name: 'Kyle' }",
    incorrectAnswers: [
      "[<div>Text</div>, <div>Text</div>]",
      "null",
      "<button />"
    ]
  },
  {
    questionText: "What syntatic sugar does React use to write component HTML?",
    correctAnswer: "JSX",
    incorrectAnswers: [
      "Handlebars",
      "EJS",
      "HTML"
    ]
  },
  {
    questionText: "Which of the following is a valid use of a React hook?",
    codeAnswer: true,
    correctAnswer: `useEffect(() => { if (true) func() })`,
    incorrectAnswers: [
      `useEffect(() => { useState(0) })`,
      `function doSomething() { useState(0) }`,
      `if (true) { useState() }`
    ]
  },
  // #endregion Easy
  // #region Medium
  {
    questionText: "Keys in React must be unique in which scope?",
    correctAnswer: "In the loop they are used in",
    incorrectAnswers: [
      "In the component they are rendered in",
      "The component and its parents/children",
      "Globally"
    ]
  },
  {
    questionText: "Which of the following does NOT cause a React component to re-render?",
    correctAnswer: "An element is modified through a ref",
    incorrectAnswers: [
      "Parent re-render and props change",
      "Parent re-render and no props change",
      "State changes"
    ]
  },
  {
    questionText: "What is the value of count after the state is set?",
    questionCode: `const [count, setCount] = useState(0)
setCount(3)
setCount(count + 2)
setCount(prevCount => prevCount + 1)
setCount(count - 4)
setCount(prevCount => prevCount + 6)
`,
    correctAnswer: "2",
    incorrectAnswers: [
      "7",
      "3",
      "8"
    ]
  },
  {
    questionText: "Which of the following is not a standard React hook?",
    codeAnswer: true,
    correctAnswer: "useDerivedStateFromProps",
    incorrectAnswers: [
      "useDebugValue",
      "useLayoutEffect",
      "useImperativeHandle"
    ]
  },
  {
    questionText: "Which of these is NOT true of controlled inputs in React?",
    correctAnswer: "They can contain a value of null",
    incorrectAnswers: [
      "They need an onChange function",
      "They need a value",
      "The input value is controlled by React"
    ]
  },
  // #endregion Medium
  // #region Hard
  {
    questionText: "React StrictMode helps find unintentional side effects by double invoking certain functions. Which of the following functions is not double invoked by StrictMode?",
    correctAnswer: "Functions passed to useEffect",
    incorrectAnswers: [
      "Function components",
      "Functions passed to useState",
      "Class component constructors"
    ]
  },
  {
    questionText: "What will this print out if you click the button in the modal?",
    questionLanguage: 'jsx',
    questionCode: `function App() {
  return <div onClick={() => cl('div')}>
    <Modal onClick={() => cl('modal')} />
  </div>
}
function Modal() {
  return ReactDOM.createPortal(<button onClick={() => cl('button')} />, document.body)
}`,
    correctAnswer: "button div",
    incorrectAnswers: [
      "modal button",
      "button modal div",
      "button"
    ]
  },
  {
    questionText: "What will the following component log when it is rendered?",
    questionLanguage: 'jsx',
    questionCode: `function App() {
  const ref = useRef('Ref')
  const [name, setName] = useState('Old')
  useEffect(() => { setName('New') }, [])
  useEffect(() => { cl(name) })
  useEffect(() => { ref.current = name }, [name])
  cl(ref.current)
}`,
    correctAnswer: "Ref Old Old New",
    incorrectAnswers: [
      "Ref New New New",
      "Ref Old New New",
      "Old Ref New New"
    ]
  },
  {
    questionText: "What year was React open-sourced?",
    correctAnswer: "2013",
    incorrectAnswers: [
      "2012",
      "2014",
      "2015"
    ]
  },
  {
    questionText: "In the React Suspense component what property do you use to define the component that should render while the data is loading?",
    codeAnswer: true,
    correctAnswer: "fallback",
    incorrectAnswers: [
      "loadingComponent",
      "initial",
      "default"
    ]
  }
  // #endregion Hard
]