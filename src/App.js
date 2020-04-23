import React, { useState } from 'react'
import './app.css'
import Question from './components/Question'
import Sidebar from './components/Sidebar'

const QUESTION_LIST = [
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
  const [questions, setQuestions] = useState(RANDOMIZED_QUESTION_ANSWERS_LIST)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className="container-fluid py-4 d-flex flex-column">
      <div className="row flex-grow-1 mb-5">
        <div className="col-9 d-flex flex-column flex-grow-1">
          <div className="flex-grow-1"></div>
          <Question question={currentQuestion} number={currentQuestionIndex + 1} setQuestions={setQuestions} setCurrentQuestionIndex={setCurrentQuestionIndex} />
        </div>
        <div className="col-3 d-flex flex-column flex-grow-1">
          <Sidebar questions={questions} currentQuestionIndex={currentQuestionIndex} />
        </div>
      </div>
    </div>
  )
}