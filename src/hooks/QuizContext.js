import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function checkQuizFinished () {
  const quizResponsed = localStorage.getItem('quizFinished')

  if (!quizResponsed) {
    return false
  }

  return JSON.parse(quizResponsed)
}

function checkScore () {
  const score = localStorage.getItem('score')

  if (!score) {
    return 0
  }

  return JSON.parse(score)
}

const QuizContext = createContext({})
function QuizProvider ({ children }) {
  const isScore = checkScore()
  const isQuiz = checkQuizFinished()

  const [quizResponsed, setQuizResponsed] = useState([])
  const [score, setScore] = useState(isScore)
  const [quizFinished, setQuizFinished] = useState(isQuiz)

  useEffect(() => {
    if (quizResponsed.length > 0) {
      localStorage.setItem('quizFinished', JSON.stringify(quizResponsed))
    }
  }, [quizResponsed])

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score))
  }, [score])

  return (
        <QuizContext.Provider value={{ quizResponsed, setQuizResponsed, score, setScore, quizFinished, setQuizFinished }}>
            {children}
        </QuizContext.Provider>
  )
}

QuizProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export { QuizProvider, QuizContext }
