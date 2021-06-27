import React, { useContext } from 'react'

import { QuestionsContext } from '../../hooks/QuestionsContext'
import { QuizContext } from '../../hooks/QuizContext'

import ButtonComponent from '../../components/ButtonComponent'

import { Container } from './styles'

import { handleConfirm, handleCalcel } from './loginc'

function ConfirmStart () {
  const { setNumQuestions, getQuestions } = useContext(QuestionsContext)
  const { setQuizResponsed, quizResponsed } = useContext(QuizContext)

  return (
      <Container>
          <ButtonComponent text='Start' color='primary' onClick={() => handleConfirm(getQuestions, setQuizResponsed, quizResponsed)} variant='contained' />
          <ButtonComponent text='Cancel' color='secondary' onClick={() => handleCalcel(setNumQuestions)} variant='contained' />
      </Container>
  )
}

export default ConfirmStart
