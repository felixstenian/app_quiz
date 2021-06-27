import PropTypes from 'prop-types'
import history from '../../services/history'

const handleConfirm = async (getQuestions, setQuizResponsed, quizResponsed) => {
  await getQuestions()
  if (quizResponsed.length > 0) {
    // localStorage.removeItem('quizFinished')
    setQuizResponsed([])
  }
  history.push('/quiz')
}

const handleCalcel = (setNumQuestions) => {
  localStorage.removeItem('numQuestions')
  setNumQuestions('')
  history.push('/')
}

handleConfirm.propTypes = {
  getQuestions: PropTypes.func.isRequired
}

handleCalcel.propTypes = {
  setNumQuestions: PropTypes.func.isRequired
}

export {
  handleCalcel,
  handleConfirm
}
