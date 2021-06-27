import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

function ScoreComponent ({ score }) {
  return (
      <Container>
          SCORE: {score}
      </Container>
  )
}

ScoreComponent.propTypes = {
  score: PropTypes.number.isRequired
}

export default ScoreComponent
