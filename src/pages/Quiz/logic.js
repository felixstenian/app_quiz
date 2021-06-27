import PropTypes from 'prop-types'
import history from '../../services/history'

const handleNextQuestion = (
  numQuestions,
  questions,
  select,
  setScore,
  score,
  setQuizResponsed,
  quizResponsed,
  setNumQuestions
) => {
  const question = questions[numQuestions - 1]
  // pegar todas as responstas
  const answer = question.incorrect_answers
  answer.push(question.correct_answer)

  const questionResponsed = {
    question: question.question,
    category: question.category,
    difficulty: question.difficulty,
    answer: answer,
    correct_answer: question.correct_answer,
    correct: select === question.correct_answer,
    score: select === question.correct_answer ? 10 : 0,
    questionSelected: select
  }

  if (questionResponsed.correct) {
    setScore(score + 10)
  }

  setQuizResponsed([...quizResponsed, questionResponsed])

  if (numQuestions === 1) {
    history.push('/finished')
  }
  setNumQuestions(numQuestions - 1)
}

handleNextQuestion.propTypes = {
  setNumQuestions: PropTypes.func.isRequired
}

export {
  handleNextQuestion
}
