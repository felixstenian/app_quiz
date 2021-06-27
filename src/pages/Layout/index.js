import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../components/Header'

import { Container, Content, Footer } from './styles'

function Layout ({ children, title }) {
  return (
    <Container>
        <Header title={title} />
        <Content>
          {children}
        </Content>
        <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
}

export default Layout
