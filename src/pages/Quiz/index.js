import React, { useContext, useEffect, useState } from 'react'
// import history from '../../services/history'

import { QuestionsContext } from '../../hooks/QuestionsContext'
import { QuizContext } from '../../hooks/QuizContext'

import ScoreComponent from '../../components/ScoreComponent'
import ShowQuestion from '../../components/ShowQuestion'
import Button from '../../components/ButtonComponent'

import { Container } from './styles'

import { handleNextQuestion } from './logic'

function Quiz () {
  const {
    getQuestions,
    questions,
    numQuestions,
    setNumQuestions
  } = useContext(QuestionsContext)

  const {
    score,
    setScore,
    quizResponsed,
    setQuizResponsed
  } = useContext(QuizContext)

  const [select, setSelect] = useState('')

  useEffect(() => {
    getQuestions()
  }, [])

  // const handleNextQuestion = () => {
  //   const question = questions[numQuestions - 1]
  //   // pegar todas as responstas
  //   const answer = question.incorrect_answers
  //   answer.push(question.correct_answer)

  //   const questionResponsed = {
  //     question: question.question,
  //     category: question.category,
  //     difficulty: question.difficulty,
  //     answer: answer,
  //     correct_answer: question.correct_answer,
  //     correct: select === question.correct_answer,
  //     score: select === question.correct_answer ? 10 : 0,
  //     questionSelected: select
  //   }

  //   if (questionResponsed.correct) {
  //     setScore(score + 10)
  //   }

  //   setQuizResponsed([...quizResponsed, questionResponsed])

  //   if (numQuestions === 1) {
  //     history.push('/finished')
  //   }
  //   setNumQuestions(numQuestions - 1)
  // }

  return (
      <Container>
        <ScoreComponent score={score} />
        {questions.length > 0 &&
            <>
              <ShowQuestion
                  question={questions[numQuestions - 1]}
                  onClick={event => setSelect(event.target.value)}
                  value={select}
              />
              <Button
                text={numQuestions !== 1 ? 'Next' : 'Finished'}
                color='secondary'
                variant='contained'
                onClick={() =>
                  handleNextQuestion(
                    numQuestions,
                    questions,
                    select,
                    setScore,
                    score,
                    setQuizResponsed,
                    quizResponsed,
                    setNumQuestions)}
              />
            </>
        }
      </Container>
  )
}

export default Quiz
