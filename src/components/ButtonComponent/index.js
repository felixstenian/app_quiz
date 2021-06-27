import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'

// import { Container } from './styles';

function ButtonComponent ({
  color,
  disabled,
  size,
  text,
  onClick,
  variant
}) {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      onClick={onClick}
      variant={variant}
    >
      {text}
    </Button>
  )
}

ButtonComponent.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string
}

export default ButtonComponent
