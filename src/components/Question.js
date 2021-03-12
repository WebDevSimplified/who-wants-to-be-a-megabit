import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function Question({
  number,
  question,
  setQuestions,
  setCurrentQuestionIndex,
  fiftyFifty,
}) {
  function answerClicked(answer) {
    if (question.correct == null) {
      const correct = question.correctAnswer === answer
      setQuestions(prevQuestions => {
        prevQuestions[number - 1] = { ...question, correct: correct }
        return [...prevQuestions]
      })
    } else {
      setCurrentQuestionIndex(prevIndex => Math.min(prevIndex + 1, 14))
    }
  }

  let questionCode
  if (question.questionCode) {
    if (question.questionLanguage) {
      questionCode = (
        <SyntaxHighlighter
          customStyle={{ all: "initial", fontSize: "87.5%" }}
          language={question.questionLanguage}
          style={dark}
        >
          {question.questionCode}
        </SyntaxHighlighter>
      )
    } else {
      questionCode = <pre>{question.questionCode}</pre>
    }
  }

  return (
    <div>
      <div className="bordered-container w-max-content mb-1 small py-1 font-weight-light">
        Question {number}
      </div>
      <div className="bordered-container mb-5 question text-center d-flex flex-column">
        <span style={{ whiteSpace: "pre-wrap" }}>{question.questionText}</span>
        {questionCode}
      </div>
      <div className="answer-grid">
        {question.answers.map((answer, index) => {
          const correctAnswer = answer === question.correctAnswer
          const formattedAnswer = question.codeAnswer ? (
            <code>{answer}</code>
          ) : (
            answer
          )
          let extraClass
          if (question.correct != null) {
            extraClass = correctAnswer ? "btn-success" : "btn-danger"
          }
          return (
            <button
              onClick={() => answerClicked(answer)}
              key={`${answer}-${index}`}
              className={`btn ${extraClass}`}
            >
              {correctAnswer ||
              question.incorrectAnswers[0] === answer ||
              !fiftyFifty ||
              question.correct != null ? (
                formattedAnswer
              ) : (
                <span dangerouslySetInnerHTML={{ __html: "&nbsp;" }}></span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
