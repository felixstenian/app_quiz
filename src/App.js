import React from 'react'
import { Router } from 'react-router-dom'
// import Layout from './pages/Layout'
import Routes from './routes'

import history from './services/history'
import { QuizProvider } from './hooks/QuizContext'
import { QuestionsProvider } from './hooks/QuestionsContext'

import GlobalStyles from './styles/global'

function App () {
  return (
    <QuizProvider>
      <QuestionsProvider>
        <Router history={history}>
          <Routes/>
          <GlobalStyles/>
        </Router>
      </QuestionsProvider>
    </QuizProvider>
  )
}

export default App
