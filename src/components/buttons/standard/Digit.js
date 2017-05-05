import React, { PropTypes } from 'react'
import Button from '../Button'

const Digit = ({label}) => {
  const onClick = value  => ev => {
    console.log(value)
  }
  return (
    <Button
      label = {label}
      onClick = {onClick('digit')}
    />
  )
}

Digit.propTypes = {

}

export default Digit
