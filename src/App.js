import React, { useState, useEffect } from "react"
import "./app.css"
import Question from "./components/Question"
import Sidebar from "./components/Sidebar"
import QUESTION_LIST from "./questions/Clement"

const RANDOMIZED_QUESTION_ANSWERS_LIST = QUESTION_LIST.map(question => {
  const answers = [question.correctAnswer, ...question.incorrectAnswers].sort(
    () => Math.random() - 0.5
  )
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
          <Question
            fiftyFifty={fiftyFifty}
            question={currentQuestion}
            number={currentQuestionIndex + 1}
            setQuestions={setQuestions}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
        </div>
        <div className="col-3 d-flex flex-column flex-grow-1">
          <Sidebar
            setFiftyFifty={setFiftyFifty}
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
          />
        </div>
      </div>
    </div>
  )
}
