import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

function Header ({ title }) {
  return (
      <Container>
          <h2>{title}</h2>
      </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
