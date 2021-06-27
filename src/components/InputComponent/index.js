import React from 'react'
import PropTypes from 'prop-types'
import { Input, Radio } from '@material-ui/core'

import { Label, Container, InputStyles } from './styles'

function InputComponent ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  color,
  onClick,
  checked,
  min
}) {
  const newInput = () => {
    if (type === 'checkbox') {
      return (
        <>
          <Radio color={color} name={name} onClick={onClick} value={value} checked={checked} />
          <Label>{label}</Label>
        </>
      )
    }

    return (
      <InputStyles>
        <Label>{label}</Label>
        <Input margin='none' name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} inputProps={{ min: min }} />
      </InputStyles>
    )
  }

  return (
      <Container>
        {newInput()}
      </Container>
  )
}

InputComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  color: PropTypes.string,
  checked: PropTypes.any,
  min: PropTypes.number
}

export default InputComponent
