import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const Func = ({label, funcType}, {currentSymbol, expression, setFunc, calculateFunc}) => {
  const onClick = funcType  => ev => {
    if (currentSymbol && !isNaN(+currentSymbol)) {
      if (expression.length === 1) {
        calculateFunc(funcType, expression)
      } else {
        setFunc(funcType)
      }
    }
  }
  return (
    <Button
      label = {label}
      onClick = {onClick(funcType)}
    />
  )
}

Func.propTypes = {

}

Func.contextTypes = {
    currentSymbol: PropTypes.string,
    expression: PropTypes.array,
    setFunc: PropTypes.func,
    calculateFunc: PropTypes.func
}

export default Func
