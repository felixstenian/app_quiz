import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import InputComponent from '../InputComponent'

import { Container } from './styles'

function ShowQuestion ({ question, onClick, value }) {
  console.log({ showQuiz: question })
  const [answerShuflr, setAnswerShuflr] = useState([])

  const answer = []
  question.incorrect_answers.map((item) => {
    return answer.push(item)
  })
  answer.push(question?.correct_answer)

  useEffect(() => {
    const result = []
    const source = answer.concat([])

    while (source.length) {
      const index = Math.floor(Math.random() * source.length)
      result.push(source[index])
      source.splice(index, 1)
    }

    return setAnswerShuflr(result)
  }, [question])
  if (question && question.type === 'multiple') {
    return (
      <Container>
        <>
          <article>
            <h5>{question?.category}</h5>
            <h6 className={question?.difficulty}>{question?.difficulty}</h6>
          </article>
          <article>
            <h4>{question?.question}</h4>
          </article>
            {answerShuflr?.map((item, index) => {
              return (
                <div key={index}>
                  <InputComponent
                    value={item}
                    label={item}
                    type='checkbox'
                    onClick={onClick}
                    checked={value === item}
                  />
                </div>
              )
            })}
        </>
      </Container>
    )
  } else if (question && question.type === 'boolean') {
    return (
      <Container>
        <>
          <article>
            <h5>{question?.category}</h5>
            <h6 className={question?.difficulty}>{question?.difficulty}</h6>
          </article>
          <article>
            <h4>{question?.question}</h4>
          </article>
            {answerShuflr?.map((item, index) => {
              return (
                <div key={index}>
                  <InputComponent
                    value={item}
                    label={item}
                    type='checkbox'
                    onClick={onClick}
                    checked={value === item}
                  />
                </div>
              )
            })}
        </>
      </Container>
    )
  } else {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    )
  }
}

ShowQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.string
}

export default ShowQuestion
