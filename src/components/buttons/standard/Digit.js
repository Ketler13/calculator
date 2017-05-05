import React, { PropTypes } from 'react'
import Button from '../Button'

const Digit = ({label, setDigit}) => {
  const onClick = value  => ev => {
    setDigit(value)
  }
  
  return (
    <Button
      label = {label}
      onClick = {onClick(label)}
    />
  )
}

Digit.propTypes = {

}

export default Digit
