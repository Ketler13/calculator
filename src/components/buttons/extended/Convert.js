import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const Convert = ({label, funcType, cours}, {currentSymbol, expression, setFunc, calculateFunc}) => {
  const expressionLength = expression.length
  const onClick = ev => {
    if (currentSymbol && !isNaN(+currentSymbol)) {
      if (expressionLength === 1) {
        const value = +expression[0]
        const calculatedValue = label === 'UAH' ? (value * cours) : (value / cours)
        calculateFunc(funcType, [`${calculatedValue}`])
      }
    }
  }
  return (
    <Button
      label = {label}
      onClick = {onClick}
      disabled = {!cours || !expressionLength || expressionLength > 1}
    />
  )
}

Convert.propTypes = {

}

Convert.contextTypes = {
    currentSymbol: PropTypes.string,
    expression: PropTypes.array,
    setFunc: PropTypes.func,
    calculateFunc: PropTypes.func
}

export default Convert
