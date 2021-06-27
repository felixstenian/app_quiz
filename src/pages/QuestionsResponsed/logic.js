import PropTypes from 'prop-types'

import history from '../../services/history'

const handleFinished = (setNumQuestions, setScore) => {
  setNumQuestions(false)
  setScore(0)
  history.push('/')
}

handleFinished.propTypes = {
  setNumQuestions: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired
}

export {
  handleFinished
}
