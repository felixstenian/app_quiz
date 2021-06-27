import React, { useState, useContext } from 'react'

import ButtonComponent from '../../components/ButtonComponent'
import InputComponent from '../../components/InputComponent'

import { QuestionsContext } from '../../hooks/QuestionsContext'
import { QuizContext } from '../../hooks/QuizContext'

import history from '../../services/history'

import { Container, Content, ContentQuizSaved } from './styles'

function Main () {
  const { setNumQuestions } = useContext(QuestionsContext)
  const { quizFinished } = useContext(QuizContext)
  console.log({ quizFinished })

  const [quantQuestions, setQuantQuestions] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    localStorage.setItem('numQuestions', quantQuestions)
    setNumQuestions(quantQuestions)
    setQuantQuestions('')
    history.push('/confirmacao')
  }

  return (
    <Container>
        <Content>
          <h2>Quantas Perguntas deseja responder ?</h2>
          <article>
            <InputComponent
              type='number'
              placeholder='Quantidade de Perguntas'
              onChange={event => setQuantQuestions(event.target.value)}
              min={1}
              value={quantQuestions}
            />
          </article>
          <ButtonComponent text='enviar' color='secondary' onClick={handleSend} variant='contained' />
        </Content>

        {quizFinished
          ? <ContentQuizSaved>
              Relatório Ultimo Quiz
                <ButtonComponent text='abrir' color='secondary' onClick={() => history.push('/finished')} variant='contained' />
              </ContentQuizSaved>
          : ''
          }
    </Container>
  )
}

export default Main
