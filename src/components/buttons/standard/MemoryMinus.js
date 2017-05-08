import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const MemoryMinus = ({result, action, expression}) => {
  const expressionContainsJustNumber = (
    expression.length === 1 && !isNaN(+expression[0])
  )
  const onClick = ev => {
    if ( expressionContainsJustNumber ) {
      action(expression[0])
    }
  }

  return (
    <Button
      label = 'M-'
      onClick = {onClick}
      disabled = {!expressionContainsJustNumber}
    />
  )
}

MemoryMinus.propTypes = {

}

export default MemoryMinus
