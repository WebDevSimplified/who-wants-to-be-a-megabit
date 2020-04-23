import React, { useState, useEffect } from 'react'
import './app.css'
import Question from './components/Question'
import Sidebar from './components/Sidebar'

const QUESTION_LIST = [
  {
    questionText: "What does JS stand for?",
    correctAnswer: "JavaScript",
    incorrectAnswers: [
      "JeSter",
      "Just Stellar",
      "Java Sucks"
    ]
  },
  {
    questionText: "What is CSS used for?",
    correctAnswer: "Styling Web Pages",
    incorrectAnswers: [
      "Storing Data",
      "Machine Learning",
      "Confusing You"
    ]
  },
  {
    questionText: "Who Should I Collab With?",
    correctAnswer: "Tag Them Below",
    incorrectAnswers: [
      "Tag Them Below",
      "Tag Them Below",
      "Tag Them Below"
    ]
  },
  {
    questionText: "This is the second question.",
    correctAnswer: "Correct Answer 2",
    incorrectAnswers: [
      "Not Right 2",
      "Still Not Right 2",
      "Definitley Not Right 2"
    ]
  },
  {
    questionText: "This is the first question.",
    correctAnswer: "Correct Answer",
    incorrectAnswers: [
      "Not Right",
      "Still Not Right",
      "Definitley Not Right"
    ]
  },
  {
    questionText: "This is the second question.",
    correctAnswer: "Correct Answer 2",
    incorrectAnswers: [
      "Not Right 2",
      "Still Not Right 2",
      "Definitley Not Right 2"
    ]
  },
  {
    questionText: "This is the first question.",
    correctAnswer: "Correct Answer",
    incorrectAnswers: [
      "Not Right",
      "Still Not Right",
      "Definitley Not Right"
    ]
  },
  {
    questionText: "This is the second question.",
    correctAnswer: "Correct Answer 2",
    incorrectAnswers: [
      "Not Right 2",
      "Still Not Right 2",
      "Definitley Not Right 2"
    ]
  },
  {
    questionText: "This is the first question.",
    correctAnswer: "Correct Answer",
    incorrectAnswers: [
      "Not Right",
      "Still Not Right",
      "Definitley Not Right"
    ]
  },
  {
    questionText: "This is the second question.",
    correctAnswer: "Correct Answer 2",
    incorrectAnswers: [
      "Not Right 2",
      "Still Not Right 2",
      "Definitley Not Right 2"
    ]
  },
  {
    questionText: "This is the first question.",
    correctAnswer: "Correct Answer",
    incorrectAnswers: [
      "Not Right",
      "Still Not Right",
      "Definitley Not Right"
    ]
  },
  {
    questionText: "This is the second question.",
    correctAnswer: "Correct Answer 2",
    incorrectAnswers: [
      "Not Right 2",
      "Still Not Right 2",
      "Definitley Not Right 2"
    ]
  },
  {
    questionText: "This is the first question.",
    correctAnswer: "Correct Answer",
    incorrectAnswers: [
      "Not Right",
      "Still Not Right",
      "Definitley Not Right"
    ]
  },
  {
    questionText: "This is the second question.",
    correctAnswer: "Correct Answer 2",
    incorrectAnswers: [
      "Not Right 2",
      "Still Not Right 2",
      "Definitley Not Right 2"
    ]
  },
  {
    questionText: "This is the last question.",
    correctAnswer: "Correct Answer",
    incorrectAnswers: [
      "Not Right",
      "Still Not Right",
      "Definitley Not Right"
    ]
  }
]

const RANDOMIZED_QUESTION_ANSWERS_LIST = QUESTION_LIST.map(question => {
  const answers = [question.correctAnswer, ...question.incorrectAnswers].sort(() => Math.random() - .5)
  return { ...question, answers }
})

export default function App() {
  const [fiftyFifty, setFiftyFifty] = useState(false)
  const [questions, setQuestions] = useState(RANDOMIZED_QUESTION_ANSWERS_LIST)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const currentQuestion = questions[currentQuestionIndex]
  useEffect(() => {
    setFiftyFifty(false)
  }, [currentQuestionIndex])

  return (
    <div className="container-fluid py-4 d-flex flex-column">
      <div className="row flex-grow-1 mb-5">
        <div className="col-9 d-flex flex-column flex-grow-1">
          <div className="flex-grow-1"></div>
          <Question fiftyFifty={fiftyFifty} question={currentQuestion} number={currentQuestionIndex + 1} setQuestions={setQuestions} setCurrentQuestionIndex={setCurrentQuestionIndex} />
        </div>
        <div className="col-3 d-flex flex-column flex-grow-1">
          <Sidebar setFiftyFifty={setFiftyFifty} questions={questions} currentQuestionIndex={currentQuestionIndex} />
        </div>
      </div>
    </div>
  )
}