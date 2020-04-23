import React from 'react'

export default function SidebarQuestion({ current, correct, questionNumber }) {
  const showDivider = questionNumber % 5 === 0 && questionNumber !== 15
  let colorClass
  const boldClass = current ? '' : 'font-weight-lighter'
  if (correct != null) {
    colorClass = correct ? 'success' : 'danger'
  }
  return (
    <>
      <div className={`divider ${showDivider ? 'show' : ''} ${colorClass}-bg`}></div>
      <div className={`ml-1 ${boldClass} ${colorClass}-text`} style={{ justifySelf: "end" }}>{questionNumber}</div>
      <div className={`${boldClass} ${colorClass}-text`}>-</div>
      <div className={`mr-1 ${boldClass} ${colorClass}-text`}>${dollarAmount(questionNumber)}</div>
      <div className={`divider ${showDivider ? 'show' : ''} ${colorClass}-bg`}></div>
    </>
  )
}

function dollarAmount(questionNumber) {
  if (questionNumber <= 10) return questionNumber * 5
  return (questionNumber - 10) * 10 + 50
}