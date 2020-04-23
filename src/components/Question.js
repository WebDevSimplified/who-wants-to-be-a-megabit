import React from 'react'

export default function Question({ number, question, setQuestions, setCurrentQuestionIndex }) {
  function answerClicked(answer) {
    if (question.correct == null) {
      const correct = question.correctAnswer === answer
      setQuestions(prevQuestions => {
        prevQuestions[number - 1] = {...question, correct: correct }
        return [...prevQuestions]
      })
    } else {
      setCurrentQuestionIndex(prevIndex => Math.min(prevIndex + 1, 14))
    }
  }

  return (
    <div>
      <div className="bordered-container w-max-content mb-1 small py-1 font-weight-light">
        Question {number}
      </div>
      <div className="bordered-container mb-5 question">
        {question.questionText}
      </div>
      <div className="answer-grid">
        {question.answers.map(answer => {
          let extraClass
          if (question.correct != null) {
            extraClass = answer === question.correctAnswer ? 'btn-success' : 'btn-danger'
          }
          return (
            <button onClick={() => answerClicked(answer)} key={answer} className={`btn ${extraClass}`}>
              {answer}
            </button>
          )  
        })}
      </div>
    </div>
  )
}