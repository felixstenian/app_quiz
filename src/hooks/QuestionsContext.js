import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import api from '../services/api'

function checkNumQuestions () {
  const numQuestions = localStorage.getItem('numQuestions')

  if (!numQuestions) {
    return false
  }

  return numQuestions
}

const QuestionsContext = createContext({})
function QuestionsProvider ({ children }) {
  const isNumQuestions = checkNumQuestions()

  const [numQuestions, setNumQuestions] = useState(isNumQuestions)
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    localStorage.setItem('numQuestions', numQuestions)
  }, [numQuestions])

  async function getQuestions () {
    const isNumQuestions = await checkNumQuestions()
    const { data } = await api.getQuestions(isNumQuestions)
    setQuestions(data.results)
    setLoading(false)
  }

  return (
        <QuestionsContext.Provider value={{ numQuestions, setNumQuestions, getQuestions, setQuestions, questions, loading }}>
            {children}
        </QuestionsContext.Provider>
  )
}

QuestionsProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export { QuestionsProvider, QuestionsContext }
