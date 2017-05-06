import React, { PropTypes } from 'react'
import Button from '../Button'

const Func = ({label, currentSymbol, setFunc}) => {
  const onClick = value  => ev => {
    if (currentSymbol && !isNaN(+currentSymbol) || label === '-' && !currentSymbol) {
      setFunc(value)
    }
  }
  return (
    <Button
      label = {label}
      onClick = {onClick(label)}
    />
  )
}

Func.propTypes = {

}

export default Func
