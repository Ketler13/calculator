import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const Func = ({label, funcType}, {currentSymbol, setFunc}) => {
  const onClick = value  => ev => {
    if (currentSymbol && !isNaN(+currentSymbol)) {
      setFunc(value)
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
    setFunc: PropTypes.func
}

export default Func
