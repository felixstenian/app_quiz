import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { QuestionsContext } from '../hooks/QuestionsContext'
import { QuizContext } from '../hooks/QuizContext'

import Layout from '../pages/Layout'

function RouteWrapper ({ component: Component, isPrivate, isRelated, title, ...rest }) {
  const { numQuestions, questions } = useContext(QuestionsContext)
  const { quizFinished, score } = useContext(QuizContext)

  if (!numQuestions && questions.length === 0 && isPrivate) {
    return <Redirect to='/' />
  }

  if (numQuestions < 0 && !isPrivate) {
    return <Redirect to='/confirmacao' />
  }

  if (score === 0 && !quizFinished && isRelated) {
    return <Redirect to='/' />
  }

  return (
    <Route
        {...rest}
        render={ (props) =>
          (
            <Layout title={title}>
                <Component
                    {...props}
                />
            </Layout>
          )
        }
    />
  )
}

RouteWrapper.defaultProps = {
  isPrivate: false,
  isRelated: false
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  isPrivate: PropTypes.bool,
  isRelated: PropTypes.bool,
  title: PropTypes.string
}

export default RouteWrapper
