import React, { useContext, useState, useEffect } from 'react'

import { QuizContext } from '../../hooks/QuizContext'
import { QuestionsContext } from '../../hooks/QuestionsContext'

import ScoreComponent from '../../components/ScoreComponent'
import ButtonComponent from '../../components/ButtonComponent'

import { Container, Answer } from './styles'

import { handleFinished } from './logic'

function QuestionsResponsed () {
  const { quizFinished, setScore, quizResponsed } = useContext(QuizContext)
  const { setNumQuestions } = useContext(QuestionsContext)

  const [score, setNumScore] = useState(0)
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    if (quizResponsed.length > 0) {
      setQuestions(quizResponsed)
    } else {
      setQuestions(quizFinished)
    }
  }, [])

  useEffect(() => {
    questions && questions.forEach(item => {
      item.score > 0 && setNumScore(score + item.score)
    })
  }, [questions])

  return (
      <Container>
        <article>
          <ScoreComponent score={score} />
          <ButtonComponent color='secondary' variant='contained' text='Home' onClick={() => handleFinished(setNumQuestions, setScore)} />
        </article>
          {questions && questions.map((question, index) => {
            return (
                  <div key={index}>
                    <article>
                      <h5>{question?.category}</h5>
                      <h6 className={question?.difficulty}>{question?.difficulty}</h6>
                    </article>
                    <article>
                      <h4>{question?.question}</h4>
                    </article>
                      <ol>
                        {question.answer?.map((item, index) => {
                          return (
                              <Answer
                                key={index}
                                select={item === question.questionSelected && true}
                                correct={item === question.correct_answer}
                                check={!!(item === question.correct_answer && question.correct_answer === question.questionSelected)}
                              >
                                {item}
                              </Answer>
                          )
                        })}
                      </ol>
                  </div>
            )
          }

          )}
      </Container>
  )
}

export default QuestionsResponsed
