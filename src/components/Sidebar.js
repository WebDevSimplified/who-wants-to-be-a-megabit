import React, { useState } from 'react'
import SidebarQuestion from './SidebarQuestion';

const GOOGLE_SVG = (
  <svg width="90" height="90" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path d="M65 33.7579C65 31.5146 64.8173 29.2592 64.4274 27.0524H33.1519V39.7601H51.0619C50.3187 43.8585 47.9307 47.4841 44.434 49.788V58.0334H55.1191C61.3937 52.2859 65 43.7979 65 33.7579Z" fill="#9FC1F9"/>
      <path d="M33.1518 66C42.0946 66 49.6363 63.0777 55.1312 58.0335L44.4461 49.788C41.4733 51.8009 37.6354 52.9407 33.164 52.9407C24.5136 52.9407 17.179 47.1325 14.5473 39.3235H3.52106V47.8236C9.14992 58.9671 20.6148 66 33.1518 66Z" fill="#B1E7BF"/>
      <path d="M14.5351 39.3235C13.1462 35.2251 13.1462 30.7871 14.5351 26.6886V18.1885H3.52108C-1.18183 27.5131 -1.18183 38.499 3.52108 47.8236L14.5351 39.3235Z" fill="#FDE49B"/>
      <path d="M33.1518 13.0593C37.8791 12.9866 42.448 14.7569 45.8716 18.0066L55.3383 8.58497C49.3439 2.98291 41.388 -0.0970093 33.1518 -3.95183e-06C20.6148 -3.95183e-06 9.14992 7.03288 3.52106 18.1885L14.5351 26.6886C17.1546 18.8675 24.5014 13.0593 33.1518 13.0593Z" fill="#F5A9A3"/>
    </g>
    <defs>
      <clipPath id="clip0">
      <rect width="65" height="66" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export default function Sidebar({ questions, currentQuestionIndex, setFiftyFifty }) {
  const [fiftyFiftyDisabled, setFiftyFiftyDisabled] = useState(false)
  const [googleDisabled, setGoogleDisabled] = useState(false)
  const [timer, setTimer] = useState(15)

  function fitfyfiftyPower() {
    setFiftyFifty(true)
    setFiftyFiftyDisabled(true)
  }

  function googlePower() {
    setGoogleDisabled(true)
    const timerInterval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer - 1 <= 0) clearInterval(timerInterval)
        return prevTimer - 1
      })
    }, 1000)
  }

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1"></div>
      <div className="bordered-container sidebar-grid mb-5">
        {[...questions].reverse().map((question, index) => {
          const questionNumber = questions.length - index
          return (
            <SidebarQuestion
              key={`${Date.now()}-${index}`}
              questionNumber={questionNumber}
              correct={question.correct}
              current={currentQuestionIndex === questionNumber - 1}
            />
          )
        })}
      </div>
      <div className="d-flex justify-content-around">
        <button className="bordered-container perk fifty btn" disabled={fiftyFiftyDisabled} onClick={fitfyfiftyPower}>
          <div className="diagonal-line"></div>
        </button>
        <button className={`bordered-container perk google btn ${timer > 0 ? 'timer' : ''}`} disabled={googleDisabled} onClick={googlePower}>
          {(timer <= 0 || !googleDisabled) ? GOOGLE_SVG : timer}
        </button>
      </div>
    </div>
  )
}
